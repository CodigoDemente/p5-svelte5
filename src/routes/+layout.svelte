<script lang="ts">
	import '../app.css';
	import Header from '$components/Header.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	let { children } = $props();
</script>

<svelte:head>
	<title>p5-svelte5</title>
	<meta
		name="description"
		content="A component for easily using p5 sketches in Svelte. Allows using Svelte's reactivity system in p5."
	/>
	<meta
		name="keywords"
		content="p5, p5.js, svelte, generative, procedural, art, reactivity, component, p5-svelte5"
	/>
</svelte:head>

<Header />

{@render children()}

<SvelteToast />

<style>
	:root {
		--toastContainerTop: auto;
		--toastContainerRight: 3rem;
		--toastContainerBottom: 1.5rem;
		--toastContainerLeft: auto;
		--toastColor: rgba(255, 255, 255, 0.6);
		--toastBackground: #121212;
		--toastBarBackground: rgb(237, 34, 93);
		--toastBorderRadius: 0;
		--toastBorder: 1px solid rgba(255, 255, 255, 0.1);
	}
</style>
