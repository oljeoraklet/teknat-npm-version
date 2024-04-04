<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let buttonText: string;
	export let selected: boolean;

	const dispatch = createEventDispatcher();

	function toggleSelected() {
		console.log(selected);
		dispatch('toggleSelected');
	}
</script>

<button on:click={toggleSelected} class={selected ? 'selected' : ''} type="button">
	{buttonText}
</button>

<style>
	button {
		width: 10rem;
		height: 4rem;
		display: flex;
		border-radius: 4rem;
		justify-content: center;
		align-items: center;
		color: black;
		background-color: var(--background-color-white);
		font-family: var(--header-font);
		cursor: pointer;

		border: var(--standard-border);

		box-shadow: 4px 4px 0px var(--color-black);
		translate: -4px -4px;
		transition: 150ms all ease-in-out;
	}
	button:hover,
	.selected {
		box-shadow: 0px 0px 0px var(--color-black);
		translate: 0px 0px;
	}
	.selected {
		background-color: #d4d4d4eb;
	}
</style>
