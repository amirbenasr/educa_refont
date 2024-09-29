<script lang="ts">
	import { onMount } from 'svelte';
	import ArticlesList from './blog/ArticlesList.svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { TextPlugin } from 'gsap/dist/TextPlugin';

	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(ScrollTrigger);

	let index = 0;
	function counterEffect(element: any, val: any) {
		index++;
		gsap.to(element, {
			innerText: val,
			duration: 8,
			ease: 'linear',
			delay: 0.5 + index,
			snap: {
				innerText: 1
			}
		});
	}

	onMount(() => {
		// create scrolltriggers
		const offerTrigger = ScrollTrigger.create({
			// markers: true,
			start: 'top 60%',
			end: 'bottom 20%',
			trigger: 'section.offer'
		});

		const galleryTrigger = ScrollTrigger.create({
			trigger: 'section.stats',
			// markers: true,
			start: 'top 50%',
			onEnter: () => {
				tl_staggered.add(counterEffect(n_s, 700)).restart();
			}
		});

		const factsTrigger = ScrollTrigger.create({
			trigger: 'section.facts',
			// markers: true,
			start: 'top top%',
			onEnter: () => {
				factsAnimation.play();
			}
		});
		// creating timelines
		const tl_hero = gsap.timeline({
			paused: true
		});

		const tl_staggered = gsap.timeline({});

		const tl_gallery = gsap.timeline({
			scrollTrigger: galleryTrigger
		});

		const tl_offers = gsap.timeline({
			paused: true,
			scrollTrigger: offerTrigger
		});

		// creating Gallery timeline

		const galleryImages = document.querySelectorAll('.lightgallery a');
		// const factsCard = document.querySelectorAll('.facts__card');

		// factsCard.forEach((element) => {

		// })
		const factsAnimation = gsap.fromTo(
			'.facts__card',
			{ opacity: 0, x: '-100%' },
			{
				// scale: 0.1,
				paused: true,
				x: '0',
				opacity: 1,
				ease: 'power1.inOut',
				stagger: {
					amount: 1.5
				}
			}
		);
		galleryImages.forEach((img, ix) => {
			tl_gallery.fromTo(img, { opacity: 0 }, { x: 15, opacity: 1, duration: 0.09 });
		});

		const listItems = document.querySelectorAll('.offer__card');

		// offers timeline
		tl_offers
			.fromTo('.left h1', { opacity: 0, x: '-100px' }, { opacity: 1, x: '0' })
			.fromTo('.left p', { opacity: 0, x: '-100px' }, { opacity: 1, x: '0' });

		listItems.forEach((element, ix) => {
			tl_offers.fromTo(
				element,
				{
					x: '0',
					y: 0,
					opacity: 0
				},
				{
					x: 10,
					opacity: 1,
					duration: 0.6
				}
			);
		});

		// initialize lightGallery

		// init swiper

		const swiper = new Swiper('.hero__slider', {
			autoplay: {
				delay: 5000
			},
			spaceBetween: '0px',
			centeredSlides: null
		});
		const swiper2 = new Swiper('.testimonials__slider', {
			autoplay: {
				delay: 3000
			},

			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},

			breakpoints: {
				1000: {
					slidesPerView: 2,
					spaceBetween: 30,
					centeredSlides: true
				}
				// when window width is >= 640px
			}
		});

		// create animations using timeline
		const textContainer = document.querySelector('.text-content');
		const animatedText = document.querySelector('.animated-text');
		let bg = document.querySelector('.bg-anim::before');

		let n_s = document.getElementById('n_s');
		let n_r = document.getElementById('n_r');
		let n_u = document.getElementById('n_u');

		// counter animation

		const textElement = document.querySelector('.hero__subtitle');
		const text = 'Discover Limitless Opportunities for Travel and Education in the USA';
		tl_hero
			.fromTo(
				'.box',
				{ y: '-100px', opacity: 0, duration: 1.5, display: 'none' },
				{ y: '0', opacity: 1, duration: 1.5, display: 'unset' }
			)
			.from(textContainer, { opacity: 0, duration: 0.5, ease: 'power2.inOut' })
			.from(animatedText, { y: 50, opacity: 0, duration: 0.5, ease: 'power2.out' })
			.add(() => {
				gsap.to(textElement, {
					text: {
						value: text,
						delimiter: ''
					},
					duration: 3, // Adjust the typing speed
					ease: 'power1.inOut'
				});
			}) // Staggered Button Animation
			.add(() => {
				const buttons = document.querySelectorAll('.stats__card');

				buttons.forEach((button, index) => {
					tl_staggered.fromTo(
						button,
						{
							opacity: 0,
							y: 50
						},
						{
							opacity: 1,
							y: 0,
							duration: 0.5,
							ease: 'power2.inOut'
						}
					);
				});
			})
			.add(() => {
				tl_hero.fromTo(
					'.bg-anim',
					1.5,
					{
						backgroundColor: 'transparent',
						height: '0%',
						width: '0%',
						duration: 0.5
					},
					{
						backgroundColor: 'var(--secondary-color)',
						height: '100%',
						width: '100%',
						duration: 0.5,
						delay: 0.5
					}
				);
			})
			.add(counterEffect(n_s, 700))
			.add(counterEffect(n_r, 96))
			.add(counterEffect(n_u, 30))
			.fromTo('#apply', { opacity: 0, y: '-100px' }, { opacity: 1, y: '0' }, '>=1');
		// setTimeout(() => {
		tl_hero.play();
		// }, 1000);

		window
			.$('#lightgallery')
			.justifiedGallery({
				captions: false,

				lastRow: 'hide',
				rowHeight: 120,
				margins: 5
			})
			.on('jg.complete', function () {
				(window as any).lightGallery(document.getElementById('lightgallery')!, {
					download: false,
					plugins: [window.lgZoom, window.lgThumbnail],
					width: '500px',
					speed: 500
				});
			});
	});
	// text machine animation
	// script.js
</script>

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Educa US - Study in the USA</title>
</head>

<section class="hero">
	<div class="content_wrapper">
		<div class="hero__content" />

		<div class="flex-col">
			<div class="box blue">
				<div class="flex-z">
					<div class="text-content">
						<div class="animated-text">
							<h1 class="hero__title">
								Unlock Your <br /> American Dream <br /> with
								<span style="position: relative;">
									Educa US <div class="bg-anim" /></span
								>
							</h1>

							<p class="hero__subtitle" />
						</div>
					</div>
					<div class="stats__list">
						<div class="stats__card">
							<h2><span id="n_s" />+</h2>
							<p>Students in USA</p>
						</div>
						<div class="stats__card">
							<h2>#1</h2>
							<p>Agency in Tunisia</p>
						</div>
						<div class="stats__card">
							<h2><span id="n_r">0</span>%</h2>
							<p>Visa Approval Rate</p>
						</div>
						<div class="stats__card">
							<h2><span id="n_u">0</span>+</h2>
							<p>universities</p>
						</div>
					</div>
				</div>

				<a id="apply" class="btn" href="en/contact">Contact Us</a>
			</div>
		</div>
	</div>
	<div class="swiper hero__slider">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<picture>
					<img src="./assets/img2.webp" alt="" srcset="" />
					<!-- <img src="./assets/img2.jpg" alt="" srcset="" /> -->
				</picture>
			</div>
			<div class="swiper-slide">
				<picture>
					<img src="./assets/img1.webp" alt="" srcset="" />
					<!-- <img src="./assets/img1.jpg" alt="" srcset="" /> -->
				</picture>
			</div>

			<div class="swiper-slide">
				<picture>
					<img src="./assets/img3.webp" alt="" srcset="" />
					<!-- <img src="./assets/img3.jpg" alt="" srcset="" /> -->
				</picture>
			</div>
			<div class="swiper-slide">
				<picture>
					<img src="./assets/img4.webp" alt="" srcset="" />
					<!-- <img src="./assets/img4.jpg" alt="" srcset="" /> -->
				</picture>
			</div>
		</div>
	</div>
</section>

<section class="facts">
	<div class="facts__list">
		<div class="facts__card">
			<div class="logo">
				<i class="fa-school-flag fa-solid fa-2xl" />
			</div>
			<h2 class="facts__title">Top Universities</h2>
			<p class="facts__desription">
				We have established strong partnerships with prestigious academic institutions across the
				USA, ensuring that you gain access to quality education and cutting-edge facilities.
			</p>
		</div>
		<div class="facts__card">
			<div class="logo">
				<i class="fa-sliders fa-solid fa-2xl" />
			</div>
			<h2 class="facts__title">Personalized Programs</h2>
			<p class="facts__desription">
				Our team of experienced educators and advisors works closely with you to understand your
				academic needs and preferences
			</p>
		</div>
		<div class="facts__card">
			<div class="logo">
				<i class="fa-people-roof fa-solid fa-2xl" />
			</div>
			<h2 class="facts__title">Strong Community</h2>
			<p class="facts__desription">
				Our strong community fosters a sense of belonging, encouraging you to make lifelong
				friendships, collaborate on projects, and engage in enriching activities together
			</p>
		</div>
		<div class="facts__card">
			<div class="logo">
				<i class="fa-person-walking-luggage fa-solid fa-2xl" />
			</div>
			<h2 class="facts__title">Guidance</h2>
			<p class="facts__desription">
				From choosing the right program to assisting with visa applications, we'll be your trusted
				companions, ensuring a smooth and rewarding journey towards achieving your educational
				aspirations in the USA.
			</p>
		</div>
	</div>
</section>

<div class="offer_wrapper">
	<section class="offer container">
		<img class="circles" src="./assets/circles.png" alt="" srcset="" />
		<img class="circles_var" src="./assets/circles_variant.png" alt="" srcset="" />
		<div class="left">
			<header>
				<h1>What We Offer</h1>
				<p>
					At Educa US, we take immense pride in offering a comprehensive range of services and
					unwavering support to make your study abroad dreams a reality.
				</p>
			</header>
			<div class="offers">
				<div class="offer__card">
					<div class="offer__avatar">
						<i class="fa-graduation-cap fa-solid fa-xl" />
					</div>
					<div class="offer__content">
						<h3>Academic Coursework</h3>
						<p>
							Empowering Minds, Shaping Futures - Unlocking a World of Knowledge and Inspiring
							Academic Excellence
						</p>
					</div>
				</div>
				<div class="offer__card">
					<div class="offer__avatar">
						<i class="fa-cable-car fa-solid fa-xl" />
					</div>
					<div class="offer__content">
						<h3>Logistics</h3>
						<p>
							Seamless Transitions, Stress-Free Arrangements - Ensuring Every Detail, So You Can
							Focus on Your Journey
						</p>
					</div>
				</div>
				<div class="offer__card">
					<div class="offer__avatar">
						<i class="fa-project-diagram fa-solid fa-xl" />
					</div>
					<div class="offer__content">
						<h3>Coordination</h3>
						<p>
							Your Journey, Our Precision - Expertly Orchestrating Your Study Abroad Adventure for
							Optimal Success
						</p>
					</div>
				</div>
				<div class="offer__card">
					<div class="offer__avatar">
						<i class="fa-file-invoice fa-solid fa-xl" />
					</div>
					<div class="offer__content">
						<h3>Visa Process</h3>
						<p>
							Guiding Your Path to Success - Navigating the Visa Maze with Professional Expertise
							and Support
						</p>
					</div>
				</div>
				<div class="offer__card">
					<div class="offer__avatar">
						<i class="fa-shield fa-solid fa-xl" />
					</div>
					<div class="offer__content">
						<h3>Safety</h3>
						<p>
							A Secure Haven for Your Dreams - Prioritizing Your Safety and Well-Being Throughout
							Your Experience
						</p>
					</div>
				</div>
				<div class="offer__card">
					<div class="offer__avatar">
						<i class="fa-university fa-solid fa-xl" />
					</div>
					<div class="offer__content">
						<h3>Best universities</h3>
						<p>
							Unlocking Excellence, Embracing Brilliance - Discovering Top-Ranked Institutions and
							Limitless Possibilities
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="right">
			<video
				class="video"
				style="object-fit: contain; max-width:100% max-height:100%"
				src="./assets/video.mp4"
				loop
				muted
				autoplay
				controls
			/>
			<!-- <img src="./assets/students_park.jpg" alt="" srcset="" /> -->
		</div>
	</section>
</div>

<section class="stats">
	<div class="custom-shape-divider-top">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
				opacity=".25"
				class="shape-fill"
			/>
			<path
				d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
				opacity=".5"
				class="shape-fill"
			/>
			<path
				d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
				class="shape-fill"
			/>
		</svg>
	</div>
	<section>
		<div id="lightgallery" class="lightgallery">
			{#each Array(12) as _, idx}
				<a href="./gallery/{idx}.webp" data-src="./gallery/{idx}.webp" style="width: 200px;">
					<img
						width="200"
						height="200"
						alt="image {idx}"
						src="./gallery/{idx}.webp"
						data-src="./gallery/{idx}.webp"
						loading="lazy"
					/>
				</a>
			{/each}
		</div>
	</section>
	<div class="card">
		<div class="stats__content">
			<!-- <div class="content__image">
				<img src="./assets/secret_teacher.png" alt="" srcset="" />
			  </div> -->
			<div class="content__text container">
				<div class="content__title">
					<h1>We design your best program</h1>
					<p>
						Our team makes sure, that every student gets the best program that fits his direction.
					</p>
					<p>
						Through personalized academic guidance, we assist students in finding the ideal
						institutions that align with their aspirations and career goals.
					</p>
				</div>
			</div>
			<div class="container stats__list">
				<div class="stats__card">
					<h2>700+</h2>
					<p>Students in USA</p>
				</div>
				<div class="stats__card">
					<h2>#1</h2>
					<p>Agency in Tunisia</p>
				</div>
				<div class="stats__card">
					<h2>96%</h2>
					<p>Visa Approval Rate</p>
				</div>
				<div class="stats__card">
					<h2>30+</h2>
					<p>universities</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="testimonials">
	<header>
		<h1>Our students say about us</h1>
		<h3>Stories of Success with Educa US</h3>
	</header>
	<div class="lottie">
		<lottie-player
			autoplay
			controls={false}
			loop
			mode="normal"
			src="../Advertising.json"
			style="width: 160px"
		/>
	</div>
	<div class="lottie2">
		<lottie-player
			autoplay
			controls={false}
			loop
			mode="normal"
			src="../Advertising.json"
			style="width: 160px"
		/>
	</div>
	<div class="swiper testimonials__slider">
		<div class="swiper-wrapper testimonials__list">
			<div class="swiper-slide">
				<div class="testimonial__card">
					<div class="testimonial__avatar">
						<img src="./assets/siwar.jpg" alt="" srcset="" />
					</div>
					<div class="testimonial__content">
						<div class="testimonial__description">
							<p>
								With the guidance and assistance of Educa US, I was able to successfully pursue my
								studies in IT and obtain a visa to study in the United States.
							</p>
						</div>
						<div class="testimonial__name"><h3>Siwar Ben Khlifa</h3></div>
						<span class="testimonial__specialty">Student</span>
					</div>
				</div>
			</div>
			<div class="swiper-slide">
				<div class="testimonial__card">
					<div class="testimonial__avatar">
						<img src="./assets/walid.jpg" alt="" srcset="" />
					</div>
					<div class="testimonial__content">
						<div class="testimonial__description">
							<p>
								With the right resources and support from EducaUS, I can navigate my differences and
								find a path that aligns with my goals and aspirations
							</p>
						</div>
						<div class="testimonial__name"><h3>Walid Ferjani</h3></div>
						<span class="testimonial__specialty">Student</span>
					</div>
				</div>
			</div>
			<div class="swiper-slide">
				<div class="testimonial__card">
					<div class="testimonial__avatar">
						<img src="./assets/mahdi.jpg" alt="" srcset="" />
					</div>
					<div class="testimonial__content">
						<div class="testimonial__description">
							<p>
								Educa US offered expert guidance to help me choose the right college and navigate
								the application process, ultimately helping me achieve my professional pursuits.
							</p>
						</div>
						<div class="testimonial__name"><h3>Mahdi Daraji</h3></div>
						<span class="testimonial__specialty">Student</span>
					</div>
				</div>
			</div>
			<div class="swiper-slide">
				<div class="testimonial__card">
					<div class="testimonial__avatar">
						<img src="./assets/eya.jpg" alt="" srcset="" />
					</div>
					<div class="testimonial__content">
						<div class="testimonial__description">
							<p>
								Since childhood, I have nurtured the dream of studying in the United States, and
								thanks to Educa Us, I was able to realize that dream.
							</p>
						</div>
						<div class="testimonial__name"><h3>Aya Trabelsi</h3></div>
						<span class="testimonial__specialty">Student</span>
					</div>
				</div>
			</div>
		</div>
		<div class="swiper-pagination" />

		<!-- <div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div> -->
	</div>
</section>

<section class="blog">
	<h1>Our Blog</h1>

	<h2>Latest Articles</h2>
	<!-- <ArticlesList data="" /> -->
</section>

<style>
	@media (max-width: 1100px) {
		.lottie2 {
			visibility: hidden;
		}
	}
	@media (max-width: 800px) {
		.lottie {
			position: absolute;
			top: unset !important;
			bottom: 0 !important;
			left: 0 !important;
			z-index: -1;
		}
	}
	.lottie {
		position: absolute;
		bottom: 0;
		left: 150px;
		z-index: -1;
	}
	.lottie2 {
		position: absolute;
		top: 0;
		right: 150px;
		z-index: -1;
		transform: scaleX(-1);
	}
	.card {
		flex: 1;
	}
</style>
