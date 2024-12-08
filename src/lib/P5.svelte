<script lang="ts">
	import { onMount } from 'svelte';
	import type p5 from 'p5';
	import type { Sketch } from '$lib/types.js';

	// Component props
	interface Props {
		target?: HTMLElement;
		sketch: Sketch;
		parentDivStyle?: string;
		debug?: boolean;
		ref?: (ref: HTMLElement) => void;
		instance?: (p5: p5) => void;
	}

	let {
		target = undefined,
		sketch,
		parentDivStyle = 'display: block;',
		debug = false,
		ref = undefined,
		instance = undefined,
	}: Props = $props();

	let project: p5;

	const dispatch = {
		ref() {
			ref?.call(this, target!);
		},
		instance() {
			instance?.call(this, project);
		},
	};

	/**
	 * Creates a reference for the p5 instance to render within
	 * @param {HTMLElement} node
	 */
	function setRef(node: HTMLElement) {
		target = node;
		return {
			destroy() {
				target = undefined;
			},
		};
	}

	function augmentClasses<NativeClasses extends [string, unknown][]>(
		instance: p5,
		classes: NativeClasses
	) {
		classes.forEach(([key, value]) =>
			Object.defineProperty(instance, key, value as PropertyDescriptor)
		);
		return instance;
	}

	/**
	 * When the client loads, create the p5 instance
	 */
	onMount(async () => {
		const library = await import('p5');
		const { default: p5 } = library;

		const entries = Object.entries(library);
		const nativeClasses = entries.filter(
			([key, value]) => value instanceof Function && key[0] !== '_' && key !== 'default'
		);

		if (debug) {
			console.log('available p5 native classes', nativeClasses);
		}

		project = new p5((instance: p5) => {
			instance = augmentClasses(instance, nativeClasses);

			if (debug) {
				console.log('p5 instance', instance);
			}

			// Set up a global object to capture this instance.
			Object.defineProperty(window, '_p5Instance', {
				value: instance,
				writable: false,
			});
			return sketch(instance);
		}, target);

		// Initial event dispatching
		dispatch.ref();
		dispatch.instance();
	});
</script>

<div use:setRef style={parentDivStyle} class="m-0"></div>
