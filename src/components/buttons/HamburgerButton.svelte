<script>
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<button on:click={toggleMenu} class="hamburger" aria-label="Menu">
	<div class={isOpen ? 'bar top open' : 'bar top'} />
	<div class={isOpen ? 'bar middle open' : 'bar middle'} />
	<div class={isOpen ? 'bar bottom open' : 'bar bottom'} />
</button>

<style>
	.hamburger {
		cursor: pointer;
		background: none;
		border: none;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 30px;
		width: 40px;
		outline: none;
	}

	.bar {
		height: 3px;
		width: 100%;
		background-color: #333;
		transition: all 0.3s ease;
		position: relative;
		transform-origin: 1px;
	}

	.top.open {
		transform: rotate(45deg);
	}

	.middle {
		opacity: 1;
	}

	.middle.open {
		opacity: 0;
	}

	.bottom.open {
		transform: translateY(-10px) rotate(-45deg);
	}
</style>
