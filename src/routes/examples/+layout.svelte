<script lang="ts">
	import MainContainer from '$components/MainContainer.svelte';
	import Sidebar from '$components/Sidebar.svelte';

	let examples = [
		{
			title: '↗ Vectors',
			route: '/examples/vectors',
		},
		{
			title: '〰 Wavemaker',
			route: '/examples/wavemaker',
		},
		{
			title: '↬ Follow',
			route: '/examples/follow',
		},
		{
			title: '◎ 3D',
			route: '/examples/3d',
		},
	];
</script>

<MainContainer>
	<Sidebar header="🌱 Examples" rootroute="/examples" elements={examples} />
	<div class="flex-1 overflow-auto p-6">
		<div class="max-w-[90ch]">
			<slot />
		</div>
	</div>
</MainContainer>
