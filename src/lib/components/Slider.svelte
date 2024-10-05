<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	onMount(() => {
		const swiper = new Swiper('.swiper', {
			slidesPerView: 1,
			centeredSlides: true,
			height: 300,
			centeredSlidesBounds: true,
			loop: true
		});
	});
</script>

<div class="swiper">
	<div class="swiper-wrapper">
		<div class="swiper-slide">
			<img src="./assets/img2.webp" alt="" srcset="" />
			<!-- <img src="./assets/img2.jpg" alt="" srcset="" /> -->
		</div>
		<div class="swiper-slide">
			<img src="./assets/img1.webp" alt="" srcset="" />
			<!-- <img src="./assets/img1.jpg" alt="" srcset="" /> -->
		</div>

		<div class="swiper-slide">
			<img src="./assets/img3.webp" alt="" srcset="" />
			<!-- <img src="./assets/img3.jpg" alt="" srcset="" /> -->
		</div>
		<div class="swiper-slide">
			<img src="./assets/img4.webp" alt="" srcset="" />
			<!-- <img src="./assets/img4.jpg" alt="" srcset="" /> -->
		</div>
	</div>
</div>

<style>
	.swiper {
		width: 100%;
		height: calc(100vh - 58px);
	}
	.swiper-slide {
		display: flex;
		justify-content: center;
	}
	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: fill;
	}
	@media (width > 800px) {
		img {
			max-width: 100%;
			object-fit: contain;
		}
	}
</style>
