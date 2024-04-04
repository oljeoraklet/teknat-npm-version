<script lang="ts">
	export let src: string = 'images/galleryPhotos/TestImageTeknat1.png';
	export let alt: string = 'Test image';
	export let caption: string = 'Test caption';
</script>

<figure>
	<img {src} {alt} />
	<figcaption>{caption}</figcaption>
</figure>

<style>
	figure {
		height: 100%;
		width: 16rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		border: var(--standard-border);
		padding: 1rem;
		border-radius: var(--picture-border-radius);

		box-shadow: var(--standard-box-shadow);
	}

	img {
		width: 100%;
		height: 80%;
		object-fit: cover;
	}

	figcaption {
		font-family: var(--header-font);
		font-size: 1.5rem;
	}
</style>
