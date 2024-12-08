<script lang="ts">
	import { page } from '$app/stores';

	$: active = $page.url.pathname;
</script>

<header
	class="fixed inset-0 z-10 flex h-20 items-center justify-between border-b border-white/10 bg-black p-8 font-mono"
>
	<a href="/" class="rounded-md bg-p5/0">
		<div class="flex items-center gap-3 text-xl">
			<img src="/logo.svg" alt="" class="w-8" />
			<h1>p5-svelte5</h1>
		</div>
	</a>
	<nav aria-label="primary" class="font-semibold text-p5">
		<ul class="flex space-x-2">
			<li>
				<a
					href="/docs/get-started"
					class="rounded bg-p5/20 px-4 py-2
				{active.startsWith('/docs') ? 'outline outline-1' : 'hover:bg-white/20 hover:text-white'}">⫸ Docs</a
				>
			</li>

			<li>
				<a
					href="/examples"
					class="rounded bg-p5/20 px-4 py-2
				{active.startsWith('/examples') ? 'outline outline-1' : 'hover:bg-white/20 hover:text-white'}"
					>◫ Examples</a
				>
			</li>
		</ul>
	</nav>
	<nav aria-label="external" class="flex w-32 justify-end">
		<a
			href="https://github.com/CodigoDemente/p5-svelte5"
			class="hover:text-p5 motion-safe:transition-colors"
			target="_blank"
			aria-label="GitHub"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="currentColor"
				stroke-width="2"
				class="ai ai-GithubFill"
				role="presentation"
				><path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
				/></svg
			>
		</a>
	</nav>
</header>
