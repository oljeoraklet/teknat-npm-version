<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import GalleryPhoto from './GalleryPhoto.svelte';
	import { onMount } from 'svelte';
	let images = [
		'images/galleryPhotos/1.jpg',
		'images/galleryPhotos/2.jpg',
		'images/galleryPhotos/3.jpg',
		'images/galleryPhotos/4.jpg',
		'images/galleryPhotos/5.jpg',
		'images/galleryPhotos/6.jpg',
		'images/galleryPhotos/7.jpg',
		'images/galleryPhotos/8.jpg',
		'images/galleryPhotos/9.jpg',
		'images/galleryPhotos/10.jpg',
		'images/galleryPhotos/11.jpg',
		'images/galleryPhotos/12.jpg'
	];
	let gallery: HTMLOListElement;
	function showNextImage() {
		gallery.scrollBy({ left: gallery.offsetWidth, behavior: 'smooth' });
		console.log('click next');
		console.log('gallet	scrollWidth', gallery.scrollWidth);
	}

	function showPreviousImage() {
		gallery.scrollBy({ left: -gallery.offsetWidth, behavior: 'smooth' });
	}
	onMount(() => {
		gallery.scrollTo({ left: gallery.offsetWidth, behavior: 'smooth' });
	});
</script>

<section>
	<!-- <button class="left" on:click={showPreviousImage}><ChevronLeft size={48} /></button> -->
	<ol bind:this={gallery}>
		{#each images as image, index}
			<li>
				<GalleryPhoto src={image} alt="Test image" caption="Teknat 2023" />
			</li>
		{/each}
	</ol>
	<!-- <button class="right" on:click={showNextImage}><ChevronRight size={48} /></button> -->
</section>

<style>
	section {
		width: 100%;
		height: 32rem;
		overflow-y: scroll;
		border-bottom: var(--standard-border);
		position: relative;
		display: flex;
		align-items: center;
		overflow-x: scroll; /* Enable horizontal scrolling */
		overflow-y: hidden; /* Disable vertical scrolling */
		scroll-snap-type: x mandatory; /* Enable scroll snapping */
		padding: var(--carousel-padding);
		scroll-padding: var(--carousel-padding);
		background-color: var(--color-form-yellow);
	}
	/* .selected {
		border: 2px solid blue;
	}
	button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: none;
		border: none;
		cursor: pointer;
		height: 3rem;
		width: 3rem;
		z-index: 998;
	}
	.left {
		left: 10px;
	}
	.right {
		right: 10px;
	}
	.chevron {
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	} */
	ol {
		display: flex;
		gap: var(--carousel-spacing);
		list-style: none;
		width: 100%;
		height: 100%;
		transition: transform 0.5s;
	}
	li {
		scroll-snap-align: start;
	}
</style>
