<script lang="ts">
	import RoundedButton from '../../components/buttons/RoundedButton.svelte';

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />
<section class="arets-spex">
	{#if innerWidth < 640}
		<img src="/images/arets-spex/portrait-digga.png" alt="" />
	{:else}
		<img src="/images/arets-spex/digga-doden-banner.png" alt="" />
	{/if}
	<article>
		<h2>Ett Teknat Spex 2024: Digga Döden</h2>
		<p>
			<span>
				Varmt välkomna till det glada 1300-talet, en tid då både digerdöd och tyranniska despoter
				härjar fritt i varje svensk by. Men inte hänger vi läpp för det, tvärtom bjuder Ett teknat
				spex in till att digga döden i en riktig skrattfest där vi ser misären från den ljusa sidan!
			</span>
			<span>
				I en by dold någonstans bland de uppländska leråkrarna råder lugnet före stormen: här har
				man inte haft pest på flera år och den lokala envåldshärskaren är älskad av alla. Eller? I
				utkanten av byn planerar en otippad trio årtiondets minsta bondeuppror, och från Köpenhamn
				beger sig två danska herrar mot Sverige med mer än bara oblater och tuborg i bagaget. Snart
				hotas lugnet av både danska präster och fritänkande kvinnor på fri fot. Och i varje hörn
				lurar historiens största farsot. För ni vet väl att ni aldrig är mer än 50 meter från en
				råtta?</span
			>
			<span>
				Som ni hör, här finns något för alla eller åtminstone för 2/3 av Europas befolkning. Varmt
				välkomna till Ett teknat spex 2024: Digga Döden
			</span>
			<span>Regi: Adeline Arvidsson</span>
			<span>Manus: Malla Grenfeldt, Vilhelm Månesköld & Felix Waern</span>
		</p>
		{#if innerWidth < 640}
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
		{/if}
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
