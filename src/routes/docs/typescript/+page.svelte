<script lang="ts">
	import CodeBlock from '$components/CodeBlock.svelte';
	import {
		p5Type,
		sketchType,
		tsExampleSketch,
		jsIntellisenseSketch,
	} from '$helpers/docs/typescript/index.js';

	const library = 'p5-svelte5';

	const tsImportExample = `import type { Sketch } from ${library};`;
</script>

<article id="TypeScript" class="doc">
	<h2 class="text-4xl">↳ TypeScript</h2>
	<p class="pb-3">
		For better developer experience and type-safety while writing p5-svelte5 sketches, a <code
			>Sketch</code
		>
		type is exposed from <code>p5-svelte5</code>:
	</p>
	<CodeBlock code={tsImportExample} lang="ts" />

	<section id="sketch-usage-example">
		<h3>Sketch Usage Example</h3>
		<CodeBlock code={tsExampleSketch} isSketch lang="svelte-ts" />
	</section>

	<section id="exposed-types">
		<h3>Exposed Types</h3>

		<h4 id="exposed-types-p5"><code>p5</code></h4>
		<p>
			We directly re-export the <code>p5</code> type so that you can use it in more advanced,
			modular use-cases allowing direct access to the p5 instance type without needing to explicitly
			install
			<code>@types/p5</code>. This enables a single source of entry to p5.js.
		</p>
		<CodeBlock code={p5Type} lang="ts" />

		<h4 id="exposed-types-sketch"><code>Sketch</code></h4>
		<p>
			For reference, here is the typedef under the hood - it's admittedly a simple passthrough to
			the p5 type defs:
		</p>
		<CodeBlock code={sketchType} lang="ts" />
	</section>

	<section id="intellisense">
		<h3>Intellisense</h3>
		<p>
			Not using TypeScript? No worries - you can leverage your IDE's intellisense with jsdoc type
			hints:
		</p>
		<CodeBlock code={jsIntellisenseSketch} lang="ts" />
	</section>
</article>
