<script lang="ts">
	import SpexCard from '../../components/cards/SpexCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const spexOrgs = data.spex.spex;
</script>

<section class="historia">
	<h2>Historia</h2>
	<article>
		<p>
			<span
				>Ursprungligen gick spexet under namnet Teknologspexet och var en arbetsgrupp under
				dåvarande Uppsala Teknologkår (UTK). År 2003 gick UTK samman med Föreningen Uppsala
				Naturvetare och skapade Uppsala Teknolog och Naturvetarkår (UTN), i och med denna
				sammanslagning bytte spexet namn till Ett teknat spex.
			</span>
			<span
				>Under våren 2006 valde Ett teknat spex att frigöra sig från UTN och bilda en egen men till
				UTN associerad förening. 2007 års föreställning, C-men, var det första spexet som Ett teknat
				spex uppförde i helt egen regi. Idag är Ett teknat spex inte längre en associerad förening
				till UTN, men har efter många års vänskap skrivit ett sammarbetsavtal.</span
			>
			<span>Nedan kan du se alla tidigare spex som Teknat har satt upp.</span>
		</p>
	</article>
</section>
<section>
	<h2>Tidigare spex</h2>
	{#each spexOrgs as spexOrg}
		<h3>{spexOrg.title}</h3>
		<div class="spex-container">
			{#each spexOrg.entries as spex}
				<SpexCard
					spexName={spex.title}
					spexYear={spex.year}
					spexYoutube={spex.youtube ? spex.youtube : 'no-link'}
				/>
			{/each}
		</div>
	{/each}
</section>

<style>
	section {
		width: 100vw;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		border-bottom: var(--standard-border);
		justify-content: center;
		align-items: center;
		font-family: var(--header-font);
		font-size: 4rem;
		background-color: var(--color-square-teal);
		padding: var(--standard-padding);
	}
	.spex-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		width: 90%;
		padding: var(--standard-padding);
		border-bottom: var(--standard-border);
	}
	h3 {
		font-size: 3rem;
	}
	p {
		font-family: var(--standard-font);
		font-size: 1.5rem;
		padding: var(--standard-padding);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.historia {
		height: 80vh;
		background-color: var(--color-square-orange);
	}
	article {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: var(--standard-padding);
		width: 70%;
	}
	@media (max-width: 768px) {
		section {
			font-size: 4vh;
			padding: 0.5rem;
			gap: 0.5rem;
		}
		.historia {
			height: 100vh;
		}
		.spex-container {
			width: 100%;
			padding: 0.5rem;
		}
		h2 {
			font-size: 4vh;
		}
		h3 {
			font-size: 2rem;
		}
		p {
			font-size: 1rem;
		}
		article {
			width: 100%;
			padding: 0;
			gap: 0.5rem;
		}
	}
</style>
