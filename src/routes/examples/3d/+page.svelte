<script lang="ts">
	import P5 from '$lib/P5.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
	import sketch, { sketchCode } from '$helpers/examples/3d.js';
</script>

<article class="doc">
	<h2 class="text-4xl">◎ 3D: Orbit Control</h2>
	<p>Click and drag on the canvas for orbit control; it allows you to move around the world.</p>
	<p>
		Adapted from <a href="https://p5js.org/examples/3d-orbit-control.html" target="_blank"
			>this p5 example</a
		>.
	</p>
	<h3 class="text-2xl text-p5">Sketch</h3>
	<div class="overflow-hidden rounded-md border border-p5/40">
		<P5 {sketch} />
	</div>
	<section>
		<h3 class="text-2xl text-p5">Code</h3>
		<CodeBlock isSketch code={sketchCode} />
	</section>
</article>
