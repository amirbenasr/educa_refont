<script>
	export let img;
	export let title;
</script>

<header style="background-image: url({img});">
	<div class="bg">
		<h1>{title}</h1>
	</div>
</header>
<slot />

<style>
	.bg {
		background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
		width: 100%;
		padding-top: 50px;
	}
	h1 {
		position: relative;
		padding: 1rem;
		margin: 0;
		color: white;
	}

	header {
		filter: drop-shadow(2px 2px 1px var(--primary-color));
		display: flex;
		align-items: flex-end;
		background-attachment: fixed;
		background-position: 20% 80%;
		background-repeat: no-repeat !important;
		background-size: cover;
		height: 15rem;
		width: 100%;
		padding: 0;
		margin: 0;
	}
</style>
