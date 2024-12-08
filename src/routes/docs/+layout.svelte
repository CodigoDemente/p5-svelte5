<script lang="ts">
	import MainContainer from '$components/MainContainer.svelte';
	import Sidebar from '$components/Sidebar.svelte';

	const docs = [
		{
			title: '⫸ Get Started',
			route: '/docs/get-started',
		},
		{
			title: '↳ TypeScript',
			route: '/docs/typescript',
		},
	];
</script>

<MainContainer>
	<Sidebar header="📘 Docs" elements={docs} />
	<div class="flex-1 overflow-auto p-6">
		<slot />
	</div>
</MainContainer>
