<script lang="ts">
	export let buttonText: string;
	export let withLink: boolean;
	export let buttonLink = '';
	export let onForm = false;
	export let target = '_self';
</script>

{#if withLink}
	<button>
		<a href={buttonLink} {target} rel="noopener noreferrer">{buttonText}</a>
	</button>
{:else if onForm}
	<button type="submit">
		{buttonText}
	</button>
{:else}
	<button>
		{buttonText}
	</button>
{/if}

<style>
	button {
		width: 10rem;
		height: 4rem;
		display: flex;
		border-radius: 4rem;
		justify-content: center;
		align-items: center;
		background-color: var(--background-color-white);
		font-family: var(--header-font);

		cursor: pointer;

		border: var(--standard-border);

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
