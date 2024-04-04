<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import GalleryPhoto from './GalleryPhoto.svelte';
	import { onMount } from 'svelte';
	let images = [
		'https://picsum.photos/300/200?random=1',
		'https://picsum.photos/300/200?random=2',
		'https://picsum.photos/300/200?random=3',
		'https://picsum.photos/300/200?random=4',
		'https://picsum.photos/300/200?random=5',
		'https://picsum.photos/300/200?random=6',
		'https://picsum.photos/300/200?random=7',
		'https://picsum.photos/300/200?random=8',
		'https://picsum.photos/300/200?random=9',
		'https://picsum.photos/300/200?random=10',
		'https://picsum.photos/300/200?random=11',
		'https://picsum.photos/300/200?random=12',
		'https://picsum.photos/300/200?random=13',
		'https://picsum.photos/300/200?random=14'
	];
	let currentIndex = 0;
	let visiblePhotos = 7;
	let stepSize = 5;
	function updateVisiblePhotos() {
		if (window.innerWidth < 768) {
			// Example breakpoint for mobile devices
			visiblePhotos = 2;
			stepSize = 2;
		} else {
			visiblePhotos = 7; // Default for larger screens
		}
	}
	function showNextImage() {
		let maxIndex = images.length - visiblePhotos;
		currentIndex = Math.min(currentIndex + stepSize, maxIndex);
	}
	function showPreviousImage() {
		currentIndex = (currentIndex - stepSize + images.length) % images.length;
	}

	onMount(() => {
		window.addEventListener('resize', updateVisiblePhotos);
		updateVisiblePhotos();
	});
</script>

<section>
	<button class="left" on:click={showPreviousImage}><ChevronLeft size={48} /></button>
	<ol style="transform: translateX(-{currentIndex * (100 / visiblePhotos)}%)">
		{#each images as image, index}
			<li class:selected={index === currentIndex}>
				<GalleryPhoto src={image} alt="Test image" caption="Test caption" />
			</li>
		{/each}
	</ol>
	<button class="right" on:click={showNextImage}><ChevronRight size={48} /></button>
	<div class="progress-indicators">
		{#each images as _, index}
			<span class:active={index === currentIndex} />
		{/each}
	</div>
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
		/* z-index: 999; */
	}
	.left {
		left: 10px;
	}
	.right {
		right: 10px;
	}
	.progress-indicators {
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
	}
	.progress-indicators span {
		display: block;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: grey;
		margin: 0 5px;
	}
	.progress-indicators span.active {
		background: blue;
	}
	ol {
		padding: var(--carousel-padding);
		display: flex;
		gap: var(--carousel-spacing);
		list-style: none;
		width: 100%;
		height: 100%;
		transition: transform 0.5s;
	}
</style>
