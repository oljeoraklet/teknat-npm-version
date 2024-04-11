<script lang="ts">
	import RoundedButton from '../components/buttons/RoundedButton.svelte';
	import Button from '../components/buttons/StandardButton.svelte';
	import Gallery from '../components/photoGallery/Gallery.svelte';
	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />
<section class="arets-spex">
	{#if innerWidth < 640}
		<img src="/images/arets-spex/portrait-digga.png" alt="" />
	{:else}
		<img src="/images/arets-spex/digga-doden-banner.png" alt="" />
	{/if}

	<h2>Ett Teknat Spex 2024: Digga Döden</h2>
	<div class="btn-container">
		{#if innerWidth < 640}
			<RoundedButton
				buttonText="Köp Biljetter!"
				buttonLink="https://reginateatern.ebiljett.nu/List/TagList?tagId=118"
				withLink={true}
				target="_blank"
			/>
			<RoundedButton buttonText="Läs mer!" buttonLink="/arets-spex" withLink={true} />
		{:else}
			<RoundedButton
				buttonText="Köp Biljetter!"
				buttonLink="https://reginateatern.ebiljett.nu/List/TagList?tagId=118"
				withLink={true}
				target="_blank"
				size="large"
			/>
			<RoundedButton buttonText="Läs mer!" buttonLink="/arets-spex" withLink={true} size="large" />
		{/if}
	</div>
</section>
<Gallery />
<section class="section-two">
	<article class="bli-medlem">
		<h2>Bli Medlem för i helvete</h2>
		<p>
			<span> Vill du inte missa någon viktig information och samtidigt stötta föreningen? </span>
			<span>
				Bli medlem genom att betala medlemsavgift på 70,70 kr till <b>123 13 149 21</b> och fyll i följande
				formulär:
			</span>
		</p>
		<RoundedButton
			buttonText="Join Now!"
			buttonLink="https://docs.google.com/forms/d/e/1FAIpQLScrpIpgHuJ9TL9QQpzxHZX603HVk8AHDFqhr_E05pQqUzDBxQ/viewform"
			withLink={true}
			target="_blank"
		/>
	</article>
	<article class="article-2">
		<h2>VAD FAN ÄR ETT TEKNAT SPEX?</h2>
		<p>
			<span>
				Ursprungligen gick spexet under namnet Teknologspexet och var en arbetsgrupp under dåvarande
				Uppsala Teknologkår (UTK). År 2003 gick UTK samman med Föreningen Uppsala Naturvetare och
				skapade Uppsala Teknolog och Naturvetarkår (UTN), i och med denna sammanslagning bytte
				spexet namn till Ett teknat spex.
			</span>
			<span>
				Under våren 2006 valde Ett teknat spex att frigöra sig från UTN och bilda en egen men till
				UTN associerad förening. 2007 års föreställning, C-men, var det första spexet som Ett teknat
				spex uppförde i helt egen regi.</span
			>
			<span>
				Idag är Ett teknat spex inte längre en associerad förening till UTN, men har efter många års
				vänskap skrivit ett sammarbetsavtal.
			</span>
		</p>
	</article>
</section>

<style>
	.arets-spex {
		background-color: var(--color-square-babyblue);
		color: var(--background-color-white);
		display: flex;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: white;
		position: relative;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
		padding: var(--standard-padding);
	}
	.arets-spex img {
		width: 65%;
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
	.btn-container {
		display: flex;
		gap: 1rem;
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
		.arets-spex img {
			width: 90%;
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
