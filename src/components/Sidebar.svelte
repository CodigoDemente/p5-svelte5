<script lang="ts">
	import { page } from '$app/stores';
	export let header: string = '';
	export let rootroute: string = '#';
	export let elements: SidebarElement[] = [];

	type SidebarElement = {
		title: string;
		route: string;
	};

	$: isClickable = rootroute !== '#' ? 'hover:bg-white/10' : '';
</script>

<aside class="sticky top-20 mr-3 h-full w-56 border-r border-white/10">
	<div class="border-b border-white/10">
		<a href={rootroute}>
			<h1 class="m-2 rounded border border-white/10 py-2 text-center text-lg {isClickable}">
				{header}
			</h1>
		</a>
	</div>
	<ul class="space-y-2 py-2">
		{#each elements as example (example.route)}
			<li>
				<a
					href={example.route}
					class="mx-2 block rounded bg-p5/20 px-2 py-1 text-p5 hover:bg-white/20 hover:text-white {$page.url.pathname.startsWith(
						example.route
					)
						? 'outline outline-1'
						: 'hover:bg-white/20 hover:text-white'}">{example.title}</a
				>
			</li>
		{/each}
	</ul>
</aside>
