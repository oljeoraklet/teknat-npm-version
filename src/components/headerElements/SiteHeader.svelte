<script lang="ts">
	import Navbar from './Navbar.svelte';

	let isOpen = false;
	let innerWidth: number;
	let header: HTMLHeadElement;

	let scrollY: number;
	let oldScrollY = 0;

	let isScrollingDown = false;

	$: {
		if (scrollY > oldScrollY) {
			//scrolling down
			isScrollingDown = true;
		} else {
			isScrollingDown = false;
		}
		oldScrollY = scrollY;
	}
</script>

<svelte:window bind:innerWidth bind:scrollY />
<header class={isScrollingDown && innerWidth > 640 ? 'scrolling-down' : ''}>
	<div class="hero-section">
		<h1>Ett Teknat Spex</h1>
		<img src="/images/TeknatKatten.png" alt="" />
		{#if innerWidth < 640}
			<button on:click={() => (isOpen = !isOpen)} class="hamburger">
				<div class={isOpen ? 'bar top open' : 'bar top'} />
				<div class={isOpen ? 'bar middle open' : 'bar middle'} />
				<div class={isOpen ? 'bar bottom open' : 'bar bottom'} />
			</button>
		{/if}
	</div>
	{#if isOpen || innerWidth > 640}
		<Navbar on:close={() => (isOpen = !isOpen)} />
	{/if}
</header>

<style>
	.scrolling-down {
		height: 14rem;
	}
	.hamburger {
		right: 1.25rem;
		top: 1.25rem;
		position: absolute;
		height: 2rem;
		aspect-ratio: 1.2 /1;
		z-index: 1001;
	}
	.bar {
		position: absolute;
		border-radius: 0.4rem;
		height: 0.4rem;
		translate: 0 -50%;
		width: 100%;
		transition: 150ms all ease-in-out;
		background-color: black;
	}
	.top {
		top: 0;
		translate: 0;
	}
	.bottom {
		bottom: 0;
		translate: 0;
	}
	.top.open {
		transform: translateY(0.85rem) rotate(45deg);
	}
	.bottom.open {
		transform: translateY(-0.75rem) rotate(-45deg);
	}
	.middle.open {
		opacity: 0;
	}
	header {
		position: fixed;
		width: 100vw;
		background-color: var(--background-color-white);
		z-index: 2;
		height: 19rem;
		transition: 150ms height ease-in-out;
	}
	.hero-section {
		display: flex;
		height: 14rem;
		border-bottom: var(--standard-border);
		justify-content: space-between;
		position: relative;
		align-items: center;
		background-color: var(--background-color-white);
		overflow: hidden;
		z-index: 2;
	}
	h1 {
		/* padding-top: 2rem; */
		font-family: var(--site-header-font);
		font-weight: 400;
		font-size: 13rem;
	}
	img {
		position: absolute;
		object-fit: contain;
		right: 2rem;
		bottom: -5rem;
		height: 14rem;
		transform-origin: center;
		transform: rotate(12deg);
		transition: transform 0.2s ease-in-out;
	}
	img:hover {
		transform: scale(1.2) rotate(0deg) translate(0, -2rem);
	}
	@media (max-width: 640px) {
		header {
			height: 5rem;
		}
		.hero-section {
			height: 5rem;
		}
		h1 {
			height: 2.5rem;
			margin-bottom: -0.3rem;
			vertical-align: middle;
			font-size: 2.5rem;
			text-align: center;
			line-height: 1;
			padding-left: 0.5rem;
		}
		img {
			display: none;
			height: 10rem;
			right: 0;
			bottom: -2rem;
		}
	}
</style>
