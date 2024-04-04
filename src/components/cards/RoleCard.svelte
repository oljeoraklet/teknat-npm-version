<script lang="ts">
	export let cardTitle: string;
	export let cardText: string;
</script>

<article>
	<h3>{cardTitle}</h3>
	<p>{cardText}</p>
</article>

<style>
	article {
		height: 16rem;
		aspect-ratio: 1.3 / 1;
		padding: var(--standard-padding) 1rem;
		background-color: var(--background-color-white);
		border: var(--standard-border);
		border-radius: var(--buttton-border-radius);
		transition: 150ms all ease-in-out;
	}
	h3 {
		font-family: var(--header-font);
		font-size: 1.5rem;
	}
	p {
		font-family: var(--standard-font);
		font-size: 1rem;
	}
	article:hover {
		scale: 1.02;
	}
</style>
