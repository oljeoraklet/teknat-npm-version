<script lang="ts">
	export let buttonText: string;
	export let buttonLink: string;
</script>

<button>
	<a href={buttonLink}>{buttonText}</a>
</button>

<style>
	button {
		width: 10rem;
		height: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--background-color-white);
		font-family: var(--header-font);

		border: var(--standard-border);
		border-radius: 0.5rem;

		box-shadow: 4px 4px 0px var(--color-black);
		translate: -4px -4px;
		transition: 150ms all ease-in-out;
	}
	button:hover {
		box-shadow: 0px 0px 0px var(--color-black);
		translate: 0px 0px;
	}
	a {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 100%;
		width: 100%;
		padding-inline: 2rem;
	}
</style>
