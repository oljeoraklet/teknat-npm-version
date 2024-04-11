<script>
	import { Facebook, Instagram, Youtube } from 'lucide-svelte';
	let currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="sponsors">
		<h3>Våra Sponsorer</h3>
		<div class="sponsor-grid">
			<img class="image1" src="images/sponsorer/uppsala-kommun-logo.png" alt="APP SHACK LOGO" />
			<img class="image2" src="images/sponsorer/teknisk-fysik-logo.png" alt="APP SHACK LOGO" />
			<img class="image3" src="images/sponsorer/regina-logo.png" alt="APP SHACK LOGO" />
		</div>
	</div>
	<div class="links-and-socials">
		<h4>Ett Teknat Spex</h4>
		<div class="socials">
			<ul>
				<li><a href="/"><Facebook />Facebook</a></li>
				<li><a href="/"><Instagram />Instagram</a></li>
				<li><a href="/"><Youtube />Youtube</a></li>
			</ul>
		</div>
		<!-- <div class="links">
			<ul>
				<li>Om oss</li>
				<li>Historia</li>
				<li>Styrelsen</li>
				<li>Medlemmar</li>
			</ul>
		</div> -->
	</div>
	<p>&#169 Olle Wikström {currentYear}</p>
</footer>

<style>
	footer {
		width: 100vw;
	}
	img {
		width: auto;
		max-height: 20vh;
		object-fit: contain;
	}
	footer h3 {
		font-size: 2.25rem;
		font-family: var(--header-font);
		text-transform: uppercase;
	}
	.sponsors {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 3rem;
		background-color: var(--site-header-background-color);
		color: var(--site-header-color);
		padding: var(--standard-padding);
		border-bottom: var(--standard-border);
	}
	.sponsor-grid {
		height: 44vh;
		display: grid;
		place-items: center;
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas: 'image1 image2' 'image3 image3'; /* Three images in a row */
		gap: 2rem;
	}

	.image1 {
		grid-area: image1;
	}
	.image2 {
		grid-area: image2;
	}
	.image3 {
		grid-area: image3;
	}
	.links-and-socials {
		display: flex;
		justify-content: space-evenly;
		padding: 1rem;
		background-color: var(--color-black);
		color: var(--background-color-white);
		font-family: var(--standard-font);
		font-weight: var(--standard-font-weight);
		font-size: 1.2rem;
		transition: transform 150ms ease-in-out;
	}
	li {
		transition: transform 150ms ease-in-out;
	}
	li:hover {
		font-weight: bold;
		transform: scale(1.05);
	}
	ul {
		list-style: none;
		gap: 2rem;
	}
	a {
		color: var(--background-color-white);
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	h4 {
		font-size: 3rem;
		font-family: var(--site-header-font);
		font-weight: 400;
	}
	p {
		text-align: center;
		font-family: var(--standard-font);
		font-size: 1.25rem;
		padding: 1rem;
		background-color: var(--color-black);
		color: var(--background-color-white);
	}
	@media (max-width: 640px) {
		.sponsor-grid {
			grid-template-columns: 1fr; /* One column on small screens */
			grid-template-areas:
				'image1'
				'image2'
				'image3'; /* Each image in its own row */
			height: auto;
		}
	}
</style>
