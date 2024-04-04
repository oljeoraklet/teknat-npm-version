<script>
	import { Facebook, Instagram, Youtube } from 'lucide-svelte';
</script>

<footer>
	<div class="sponsors">
		<h3>Våra Sponsorer</h3>
		<img src="images/AppShackLogo1.png" alt="APP SHACK LOGO" />
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
		<div class="links">
			<ul>
				<li>Om oss</li>
				<li>Historia</li>
				<li>Styrelsen</li>
				<li>Medlemmar</li>
			</ul>
		</div>
	</div>
</footer>

<style>
	footer {
		width: 100vw;
	}
	footer img {
		object-fit: cover;
		width: 40%;
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
		background-color: var(--site-header-background-color);
		color: var(--site-header-color);
		padding: var(--standard-padding);
		border-bottom: var(--standard-border);
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
</style>
