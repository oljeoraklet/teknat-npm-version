<script lang="ts">
	import '@fontsource/modak';
	import '@fontsource/jost';
	import '@fontsource/shrikhand';
	import '../global.css';
	import SiteHeader from '../components/headerElements/SiteHeader.svelte';
	import Footer from '../components/footerElements/Footer.svelte';

	let scrollY: number;
	let oldScrollY = 0;

	let isScrollingDown = false;
	const threshold = 5; // Set the threshold for scroll change

	$: {
		if (Math.abs(scrollY - oldScrollY) > threshold) {
			isScrollingDown = scrollY > oldScrollY;
			oldScrollY = scrollY;
		}
	}
</script>

<svelte:window bind:scrollY />

<SiteHeader />
<main class={isScrollingDown ? 'content scroll' : 'content not-scroll'}>
	<slot />
</main>

<Footer />

<style>
	main {
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		transition: 150ms padding-top ease-in-out;
	}
	.not-scroll {
		padding-top: 13rem;
	}
	.scroll {
		padding-top: 8rem;
	}
	@media (max-width: 640px) {
		.content {
			padding-top: 5rem;
		}
	}
</style>
