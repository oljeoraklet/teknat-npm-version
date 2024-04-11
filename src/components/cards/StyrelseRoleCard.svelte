<script lang="ts">
	import { Mail } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	export let roleName: string;
	export let roleTitle: string;
	export let roleMail: string = '';

	let isEmailTooltipShown = false;
	let toolTipText = 'Klicka för att kopiera mejlen!';
	$: console.log(isEmailTooltipShown);
	function mouseEnter() {
		isEmailTooltipShown = true;
	}
	function mouseLeave() {
		isEmailTooltipShown = false;
	}
	function copyMail() {
		toolTipText = 'Mejlen kopierad!';
		navigator.clipboard.writeText(roleMail);
		setTimeout(() => {
			isEmailTooltipShown = false;
			toolTipText = 'Klicka för att kopiera mejlen!';
		}, 2000);
	}
	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === 'Space') {
			copyMail();
		}
	}
</script>

<article>
	<p>{roleTitle}</p>
	<h3>{roleName}</h3>
	{#if roleMail != ''}
		<div
			on:mouseenter={mouseEnter}
			on:mouseleave={mouseLeave}
			class="email-container"
			on:click={copyMail}
			role="button"
			tabindex="0"
			on:keydown={handleKeyDown}
		>
			<Mail class="email-icon" />
			<a href="mailto:{roleMail}">{roleMail}</a>
			{#if isEmailTooltipShown}
				<p transition:fade={{ duration: 200 }} class="email-tooltip">
					{toolTipText}
				</p>
			{/if}
		</div>
	{/if}
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		/* aspect-ratio: 16 / 9; */
		max-width: 90%;
		height: max-content;
		padding: 1rem var(--standard-padding);
		background-color: var(--background-color-white);
		border: var(--standard-border);
		border-radius: var(--buttton-border-radius);
		transition: 150ms all ease-in-out;
		color: var(--color-black);
	}
	h3 {
		font-size: 2rem;
		padding-block: 1rem;
	}
	p {
		font-size: 1.25rem;
		text-transform: uppercase;
		font-weight: bold;
		font-family: var(--standard-font);
		color: var(--color-black-faded);
	}
	.email-container {
		position: relative;
		color: var(--color-black);
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
	}
	.email-tooltip {
		position: absolute;
		font-size: 1rem;
		bottom: 120%;
		left: 5%;
		width: 12rem;
		color: black;
		transform: translateX(-50%);
		background-color: var(--background-color-white);
		padding: 0.5rem;
		border: var(--standard-border);
		border-radius: var(--buttton-border-radius);
		box-shadow: var(--standard-box-shadow);
		pointer-events: none;
	}
	.email-tooltip::after {
		content: '';
		position: absolute;
		top: 110%;
		left: 50%;
		transform: translateX(-50%);
		border: 0.5rem solid transparent;
		border-top-color: var(--color-black);
	}
	a {
		font-size: 1.25rem;

		font-family: var(--standard-font);

		transition: color 150ms ease-in-out;
	}
	a:hover {
		color: var(--color-black);
	}

	article:hover {
		scale: 1.02;
	}
</style>
