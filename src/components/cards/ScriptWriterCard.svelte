<script lang="ts">
	export let writers: string[];
</script>

<article>
	<p>Manusförfattare</p>
	{#each writers as writer}
		<h3>{writer}</h3>
	{/each}
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		width: max-content;
		max-width: 90%;
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

	article:hover {
		scale: 1.02;
	}
</style>
