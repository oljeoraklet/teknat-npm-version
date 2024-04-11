<script lang="ts">
	import { X } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	export let spexName: string;
	export let spexYear: number;
	export let spexYoutube: string;

	let isModalShowing = false;
</script>

<article>
	<p>{spexYear}</p>
	<button
		class="spex-info"
		on:click={() => {
			isModalShowing = true;
		}}
	>
		<h3>{spexName}</h3>
	</button>
	{#if isModalShowing}
		<div class="modal" transition:fade={{ duration: 300 }}>
			<button
				on:click={() => {
					isModalShowing = false;
				}}><X size={64} /></button
			>
			<h3>{spexName}</h3>
			<p>{spexYear}</p>

			{#if spexYoutube == 'no-link'}
				<p>Det finns tyvärr ingen video för detta spex</p>
			{:else}
				<iframe
					src={spexYoutube}
					title={spexName}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				/>
			{/if}
		</div>
	{/if}
</article>

<style>
	button {
		color: var(--color-black);
	}
	.modal {
		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		z-index: 1000;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80vw;
		height: 75vh;
		background-color: var(--background-color-white);
		padding: var(--standard-padding);
		border: var(--standard-border);
		box-shadow: var(--standard-box-shadow);
	}
	.spex-info {
		background-color: var(--background-color-white);
		padding: var(--standard-padding);
		border: var(--standard-border);
		box-shadow: var(--standard-box-shadow);
		border-radius: var(--picture-border-radius);
		width: 60vw;
	}
	h3 {
		font-size: 2rem;
	}
	p {
		font-size: 1.5rem;
	}
	.modal button {
		position: absolute;
		top: 0;
		right: 0;
	}
	iframe {
		aspect-ratio: 16 / 9;
		width: 60%;
	}

	@media (max-width: 768px) {
		.modal {
			width: 90vw;
			height: 80vh;
			justify-content: space-evenly;
		}
		.spex-info {
			width: 90vw;
		}
		iframe {
			width: 90%;
		}
	}
</style>
