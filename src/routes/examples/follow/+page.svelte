<script lang="ts">
	import P5 from '$lib/P5.svelte';
	import CodeBlock from '../../../components/CodeBlock.svelte';
	import sketch, { sketchCode } from '$helpers/examples/follow.js';
</script>

1
<article class="doc">
	<h2 class="text-4xl">↬ Follow</h2>
	<p>
		A segmented line follows the mouse. The relative angle from each segment to the next is
		calculated with <code>atan2()</code> and the position of the next is calculated with
		<code>sin()</code>
		and <code>cos()</code>.
	</p>
	<p>
		Adapted from <a href="https://p5js.org/examples/interaction-follow-3.html" target="_blank"
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
