<script lang="ts">
	import RoundedButton from '../../components/buttons/RoundedButton.svelte';

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />
<section class="arets-spex">
	{#if innerWidth < 640}
		<img src="/images/arets-spex/kristen-banner.jpg" alt="" />
	{:else}
		<img src="/images/arets-spex/kristen-banner.jpg" alt="" />
	{/if}
	<article>
		<h2>Ett Teknat Spex 2026:</h2>
		<h2>Kris(✟)en i befolkningsfrågan</h2>
		<p>
			<span>
				Den svarta röken stiger än en gång ur det Sixtinska kapellets kopparskorsten. 
				Kyrkklockornas klämtande överröstas av nunnors (och en kardinals) klagosång. Liemannen skonar ingen, inte ens den lilla människan. 
				Småstadsdöden grasserar nämligen obönhörligt genom Europa och varmast brinner skärselden för Vatikanstatens diverse småföretagare och bidragstagare. 
				Flykten till storstaden lämnar inte mycket mer än en passage till Fontana di Trevi bakom sig. Hur blir man egentligen fler, i ett land där man inte får synda?
			</span>
			<span>
				
			2026 är året då Ett teknat spex ger en unik inblick i historien bakom Vatikanstaten. 
			Bland oblaterior och befolkningshelgon får vi följa med när världens mest omtalade (eller i alla fall minsta) teokratiska monarki står öga mot öga och tand för tand med döden – småstatsdöden.
			</span>
			<span>Regi: Clara Lindvall & Miranda de Léon</span>
			<span>Manus: Love Nilsson, Jonathan Rosengren & Elin Mann</span>
		</p>
		<!-- {#if innerWidth < 640}
			<RoundedButton
				buttonText="Köp Biljetter!"
				buttonLink="https://reginateatern.ebiljett.nu/List/TagList?tagId=118"
				withLink={true}
				target="_blank"
			/>
		{:else}
			<RoundedButton
				buttonText="Köp Biljetter!"
				buttonLink="https://reginateatern.ebiljett.nu/List/TagList?tagId=118"
				withLink={true}
				target="_blank"
				size="large"
			/>
		{/if} -->
	</article>
</section>

<style>
	.arets-spex {
		background-color: #f4f7b3;
		color: var(--background-color-black);
		display: flex;
		/* gap: 1rem; */
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: black;
		position: relative;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
		padding: 1rem;
	}
	.arets-spex h1 {
		font-size: 3.5rem;
		font-family: var(--header-font);
	}
	.arets-spex img {
		width: 70%;
		height: auto;
		object-fit: contain;
		border: var(--standard-border);
	}
	section {
		width: 100vw;
		display: flex;
		border-bottom: var(--standard-border);
	}
	article {
		height: 42rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: var(--standard-padding);
	}
	.article-2 {
		border-right: none;
		border-left: var(--standard-half-border);

		background-color: var(--color-square-orange);
		color: var(--color-black);
	}

	h2 {
		font-size: 3.5rem;
		text-align: center;
		font-family: var(--header-font);
		text-transform: uppercase;
		color: var(--color-black) ,
	}
	.arets-spex p {
		padding: 0.5rem;
	}
	p {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--standard-padding);
		gap: 2rem;
		font-family: var(--standard-font);
		font-size: 1.25rem;
		overflow-wrap: break-word;
		width: 100%;
	}
	span {
		width: 100%;
	}
	.section-two article {
		width: 50%;
		background-color: var(--color-square-yellow);
		border-right: var(--standard-half-border);

		color: var(--color-black);
	}
	.section-two .article-2 {
		background-color: var(--color-square-teal);
	}
	@media (max-width: 640px) {
		.arets-spex h1 {
			font-size: 2rem;
		}
		section {
			flex-direction: column;
		}
		article {
			height: auto;
		}
		.section-two article {
			width: 100%;
			height: 24rem;
			border-right: none;
			border-bottom: var(--standard-half-border);
			padding: 0.5rem;
		}
		.section-two .article-2 {
			height: 46rem;
			border-left: none;
			border-bottom: var(--standard-half-border);
		}
		.bli-medlem {
			height: 36rem;
		}
		h2 {
			font-size: 2rem;
		}
		p {
			font-size: 1rem;
		}
	}
</style>
