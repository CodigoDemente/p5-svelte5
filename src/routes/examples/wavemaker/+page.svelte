<script lang="ts">
	import P5 from '$lib/P5.svelte';
	import CodeBlock from '../../../components/CodeBlock.svelte';
	import sketch, { sketchCode } from '$helpers/examples/wavemaker.js';
</script>

<article class="doc">
	<h2 class="text-4xl">〰 Wavemaker</h2>
	<p>
		This illustrates how waves (like water waves) emerge from particles oscillating in place. Move
		your mouse to direct the wave.
	</p>
	<p>
		Adapted from <a href="https://p5js.org/examples/interaction-wavemaker.html" target="_blank"
			>this p5 example</a
		>.
	</p>
	<h3 class="text-2xl text-p5">Sketch</h3>
	<div class=" overflow-hidden rounded-md border border-p5/40">
		<P5 {sketch} />
	</div>
	<section>
		<h3 class="text-2xl text-p5">Code</h3>
		<CodeBlock isSketch code={sketchCode} />
	</section>
</article>
