<script lang="ts">
	import { Mail } from 'lucide-svelte';

	export let roleName: string;
	export let roleTitle: string;
	export let roleMail: string = '';
</script>

<article>
	<p>{roleTitle}</p>
	<h3>{roleName}</h3>
	{#if roleMail != ''}
		<a href="mailto:{roleMail}"><Mail />{roleMail}</a>
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
	a {
		font-size: 1.25rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: var(--standard-font);
		color: var(--color-black);
		transition: color 150ms ease-in-out;
	}
	a:hover {
		color: var(--color-black);
	}

	article:hover {
		scale: 1.02;
	}
</style>
