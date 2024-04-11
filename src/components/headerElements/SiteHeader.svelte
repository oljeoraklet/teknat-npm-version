<script lang="ts">
	import Navbar from './Navbar.svelte';

	let isOpen = false;
	let innerWidth: number;
	let header: HTMLHeadElement;

	let scrollY: number;
	let oldScrollY = 0;

	let isScrollingDown = false;
	const threshold = 10; // Set the threshold for scroll change

	$: {
		if (Math.abs(scrollY - oldScrollY) > threshold) {
			isScrollingDown = scrollY > oldScrollY;
			oldScrollY = scrollY;
		}
	}
</script>

<svelte:window bind:innerWidth bind:scrollY />
<header
	class="{isScrollingDown && innerWidth > 640 ? 'scrolling-down' : ''} {scrollY < 3
		? ' '
		: 'not-the-top'}"
>
	<a class="hero-section" href="/">
		<h1>Ett Teknat Spex</h1>
		<img src="/images/TeknatKatten.png" alt="" />
		{#if innerWidth < 640}
			<button on:click={() => (isOpen = !isOpen)} class="hamburger">
				<div class={isOpen ? 'bar top open' : 'bar top'} />
				<div class={isOpen ? 'bar middle open' : 'bar middle'} />
				<div class={isOpen ? 'bar bottom open' : 'bar bottom'} />
			</button>
		{/if}
	</a>
	{#if isOpen || innerWidth > 640}
		<Navbar on:close={() => (isOpen = !isOpen)} />
	{/if}
</header>

<style>
	/* @media (min-width: 640px) {
		
		.not-the-top {
			height: 13rem;
		}
		.not-the-top .hero-section {
			height: 8rem;
		}
		.not-the-top h1 {
			font-size: 6rem;
		}
	} */
	.scrolling-down {
		height: 8rem !important;
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
		z-index: 999;
		height: 13rem;
		transition: 150ms height ease-in-out;
	}
	.hero-section {
		display: flex;
		height: 8rem;
		border-bottom: var(--standard-border);
		justify-content: space-between;
		position: relative;
		align-items: center;
		background-color: var(--background-color-white);
		overflow: hidden;
		z-index: 2;
		transition: height 0.2s ease-in-out;
	}
	h1 {
		/* padding-top: 2rem; */
		font-family: var(--site-header-font);
		font-weight: 400;
		font-size: 12vh;
		transition: font-size 0.2s ease-in-out;
	}
	img {
		position: absolute;
		object-fit: contain;
		right: 2rem;
		bottom: -4rem;
		height: 10rem;
		transform-origin: center;
		transform: rotate(12deg);
		transition: transform 0.2s ease-in-out;
	}
	img:hover {
		transform: scale(1.1) rotate(0deg) translate(0, -1rem);
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
