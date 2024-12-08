<script lang="ts">
	import P5 from '$lib/P5.svelte';
	import CodeBlock from '../../../components/CodeBlock.svelte';
	import sketch, { sketchCode } from '$helpers/examples/vectors.js';
</script>

<article class="doc">
	<h2 class="text-4xl">↗ Random Vectors</h2>
	<p>
		Adapted from Daniel Shiffman's <i>The Nature of Code</i>
		<a
			href="https://thecodingtrain.com/learning/nature-of-code/1.3-random-vector.html"
			target="_blank">example</a
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
