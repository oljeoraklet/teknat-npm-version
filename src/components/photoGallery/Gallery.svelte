<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import GalleryPhoto from './GalleryPhoto.svelte';
	import Carousel from './Carousel.svelte';
	let innerWidth: number;
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
</script>

<svelte:window bind:innerWidth />
<section>
	{#if innerWidth < 768}
		<Carousel autoplay={4000} perPage={1}>
			{#each images as image, index (index)}
				<GalleryPhoto src={image} alt="Test image" caption="Teknat 2023" />
			{/each}
			<span slot="left-control"><ChevronLeft size={48} /></span>
			<span slot="right-control"><ChevronRight size={48} /></span>
		</Carousel>
	{:else}
		<Carousel autoplay={4000} perPage={2}>
			{#each images as image, index (index)}
				<GalleryPhoto src={image} alt="Test image" caption="Teknat 2023" />
			{/each}
			<span slot="left-control"><ChevronLeft size={64} /></span>
			<span slot="right-control"><ChevronRight size={64} /></span>
		</Carousel>
	{/if}

	<!-- <button class="left" on:click={showPreviousImage}></button> -->
	<!-- <ol bind:this={gallery}>
		{#each images as image, index}
			<li>
				<GalleryPhoto src={image} alt="Test image" caption="Teknat 2023" />
			</li>
		{/each}
	</ol> -->
	<!-- <button class="right" on:click={showNextImage}><ChevronRight size={48} /></button> -->
</section>

<style>
	section {
		width: 100%;
		/* height: 32rem; */
		border-bottom: var(--standard-border);
		position: relative;
		display: flex;
		align-items: center;
		scroll-snap-type: x mandatory;
		padding: 1rem;
		background-color: var(--color-form-yellow);
	}
	@media (max-width: 768px) {
		/*  */
	}
</style>
