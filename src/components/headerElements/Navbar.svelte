<script lang="ts">
	// @ts-ignore
	import { Facebook, Instagram, Youtube } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	let innerWidth: number;

	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}

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

<svelte:window bind:scrollY bind:innerWidth />

<nav
	transition:fly={{ x: 400, duration: 400, opacity: 1 }}
	class={isScrollingDown && innerWidth > 640 ? 'scrolling-down' : ''}
>
	<ul>
		<li><a on:click={close} href="/">Hem</a></li>
		<li><a on:click={close} href="/arets-spex">Årets Spex</a></li>
		<li><a on:click={close} href="/tidigare-spex">Tidigare Spex</a></li>
		{#if innerWidth < 640}
			<li>
				<a on:click={close} href="https://www.facebook.com/ettteknatspex" target="_blank"
					><Facebook />Facebook</a
				>
			</li>
			<li>
				<a
					on:click={close}
					href="https://www.instagram.com/ettteknatspex?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
					target="_blank"><Instagram />Instagram</a
				>
			</li>
			<li>
				<a on:click={close} href="https://www.youtube.com/@Teknatspexet" target="_blank"
					><Youtube />YouTube</a
				>
			</li>
		{:else}
			<li>
				<a on:click={close} href="https://www.facebook.com/ettteknatspex" target="_blank"
					><Facebook /></a
				>
			</li>
			<li>
				<a
					on:click={close}
					href="https://www.instagram.com/ettteknatspex?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
					target="_blank"><Instagram /></a
				>
			</li>
			<li>
				<a on:click={close} href="https://www.youtube.com/@Teknatspexet" target="_blank"
					><Youtube /></a
				>
			</li>
		{/if}
		<!-- <li><a on:click={close} href="/kalendarium">Kalendarium</a></li> -->
	</ul>
	<div class="btn-group">
		<a
			on:click={close}
			class="btn-1"
			href="https://docs.google.com/forms/d/e/1FAIpQLScrpIpgHuJ9TL9QQpzxHZX603HVk8AHDFqhr_E05pQqUzDBxQ/viewform"
			target="_blank"
			rel="noopener noreferrer">Bli Medlem</a
		>
		<a on:click={close} class="btn-2" href="/kontakt">Kontakt</a>
	</div>
</nav>

<style>
	nav {
		width: 100vw;
		height: 5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: var(--standard-border);
		border-left: 2px transparent solid;
		z-index: 1;
		transition: 150ms transform ease-in-out;
	}
	.scrolling-down {
		transform: translateY(-100%);
	}

	a {
		text-decoration: none;
		color: var(--standard-text-color);
		font-family: var(--standard-font);
		font-size: 1.25rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	li {
		transition: transform 150ms ease-in-out;
	}
	li:hover {
		font-weight: 700;
		transform: scale(1.05);
	}
	ul {
		display: flex;
		list-style: none;
		gap: var(--navbar-spacing);
		padding-inline: var(--navbar-padding);
	}
	.btn-group {
		display: flex;
		height: 100%;
		width: 32rem;
	}
	.btn-1,
	.btn-2 {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 16rem;

		text-decoration: none;
		font-size: 1.25rem;

		transition: background-color 0.2s ease-in-out;
	}
	.btn-1 {
		border-right: var(--standard-half-border);
		border-left: var(--standard-border);
		color: var(--background-color-white);
		background-color: hsla(179, 85%, 20%, 100%);
	}
	.btn-2 {
		border-left: var(--standard-half-border);
		color: var(--standard-text-color);
		background-color: hsla(92, 34%, 76%, 100%);
	}
	.btn-1:hover {
		background-color: hsla(179, 85%, 30%, 100%);
	}
	.btn-2:hover {
		background-color: hsla(92, 34%, 56%, 100%);
	}
	@media (max-width: 640px) {
		nav {
			box-sizing: content-box;
			border-left: var(--standard-border);
			background-color: var(--background-color-white);
			display: flex;
			flex-direction: column;
			/* align-items: space-between; */
			position: fixed;
			top: 0;
			right: 0;
			width: 100vw;
			height: 100%;
			z-index: 1;
		}
		ul {
			padding: 0;
			padding-top: 6rem;
			width: 100%;
			gap: 0.01vh;
			flex-direction: column;
		}
		li {
			display: flex;
			justify-content: right;
			width: 100%;
			padding: 1rem;
		}
		a {
			font-family: var(--site-header-font);
			font-size: 2rem;
		}
		.btn-group {
			flex-direction: column;
			width: 100%;
			height: fit-content;
		}
		.btn-1,
		.btn-2 {
			width: 100%;
			height: 6rem;
			font-size: 2rem;
			border: none;
		}
	}
</style>
