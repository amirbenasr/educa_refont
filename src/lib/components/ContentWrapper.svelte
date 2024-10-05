<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		display: block;
		position: relative;
	}

	@media (width > 800px) {
		.wrapper {
			display: flex;
			align-items: center;
		}
	}
</style>
