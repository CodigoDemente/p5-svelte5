<script lang="ts">
	import { HighlightAuto, HighlightSvelte } from 'svelte-highlight';
	import DOMPurify from 'dompurify';
	import blackMetalBathory from 'svelte-highlight/styles/black-metal-bathory';
	import { sketchExampleCode, type Language } from '$helpers/docs/sketchExampleCode.js';
	import { copyToClipboard } from '$helpers/clipboard.js';
	import { toast } from '@zerodevx/svelte-toast';

	export let code: string;
	export let lang: Language = 'svelte';
	export let isSketch = false;

	let innerCode: HTMLElement;
	$: isThisIshSvelte = ['svelte', 'svelte-ts'].includes(lang);

	async function copy() {
		const success = await copyToClipboard(innerCode.innerText);
		if (success) {
			toast.push('Copied to clipboard');
			return;
		}
		toast.push('Clipboard copy permission denied');
	}
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html DOMPurify.sanitize(blackMetalBathory)}
</svelte:head>

<div class="relative my-3 overflow-hidden rounded-md border border-p5/40">
	<div bind:this={innerCode}>
		{#if isThisIshSvelte}
			<HighlightSvelte code={isSketch ? sketchExampleCode(code, lang) : code} />
		{:else}
			<HighlightAuto {code} />
		{/if}
	</div>
	<button class="absolute right-4 top-4" on:click={copy}>
		<span class="sr-only">copy</span>
		<svg
			role="presentation"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="h-5 w-5 opacity-50 transition-all duration-75 hover:text-p5 hover:opacity-100 focus:opacity-100"
			><path
				d="M15.5 4H18a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.5"
			/><path
				d="M8.621 3.515A2 2 0 0 1 10.561 2h2.877a2 2 0 0 1 1.94 1.515L16 6H8l.621-2.485z"
			/><path d="M9 12h6" /><path d="M9 16h6" />
		</svg>
	</button>
</div>

<style lang="scss">
	:global(.hljs) {
		border: 0;
		border-radius: 0.375rem; /* equivalent to rounded-md */
	}
</style>
