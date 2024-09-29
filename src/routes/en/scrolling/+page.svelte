<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="scroll-wrapper">
	<div class="scroll-container" />
</div>

<style>
	.scroll-wrapper {
		overflow: hidden;
		/* width: 625px; */
	}

	.scroll-container {
		background: url('../polygon.png') repeat-x;
		background-size: contain;
		width: 9375px;
		height: 416px;
		animation: scroll 3s linear infinite;
	}
	@keyframes scroll {
		0% {
			transform: translate(0);
		}
		100% {
			transform: translate(-625px);
		}
	}
</style>
