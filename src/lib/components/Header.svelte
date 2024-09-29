<script>
	import { language, languages, switchLanguage } from '@inlang/sdk-js';
	import { onMount } from 'svelte';
	let buttonMenu;
	let navMobile;
	let faIcon;
	let opened = false;

	const toggleMenu = (e) => {
		opened = !opened;
		navMobile.classList.toggle('opened');
		faIcon.classList.toggle('fa-close');
	};
	onMount(() => {
		const btnLinks = document.querySelectorAll('.mobile-nav > ul > a');
		const favDialog = document.getElementById('favDialog');
		const apply = document.querySelectorAll('#apply');
		const closeBtn = document.getElementById('closeBtn');
		const body = document.body;

		if (apply) {
			apply.forEach((element) => {
				element.addEventListener('click', function (e) {
					// favDialog.showModal();
					// body.classList.add('overflow-hidden');
				});
			});
		}

		// closeBtn.addEventListener('click', function (e) {
		// 	body.classList.remove('overflow-hidden');
		// 	favDialog.close();
		// });

		btnLinks.forEach((element) => {
			element.addEventListener('click', function (e) {
				toggleMenu(e);
			});
		});
	});
</script>

<header>
	<div class="banner container">
		<!-- <div class="logo">
  <img src="./assets/logo.png" alt="" srcset="" />
</div> -->
		<div class="form-group">
			<div class="email__form">
				<i class="fa-envelope fa-solid fa-md" />

				<span class="contact">
					Email
					<a href="mailto:contact@educaus.fa-net">contact@educaus.net</a>
				</span>
			</div>

			<div class="phone__form">
				<i class="fa-phone fa-solid fa-md" />

				<span class="contact">
					Call<a href="tel:+21655961771">55961771</a>
				</span>
			</div>
		</div>
	</div>
	<div class="nav_wrapper">
		<nav class="container">
			<div class="logo">
				<a
					on:click={(e) => {
						if (opened) {
							toggleMenu(e);
						}
					}}
					href="/"
				>
					<img src="/assets/logo.svg" alt="" srcset="" />
				</a>
			</div>
			<div class="desktop-nav">
				<ul>
					<a href="/"> <li>Home</li> </a><a href="/{language}/about"> <li>About</li> </a><a
						href="/{language}/contact"
					>
						<li>Contact</li>
					</a>
					<a href="/{language}/blog">
						<li>Blog</li>
					</a>
				</ul>
			</div>
			<div class="mobile-menu">
				<a class="btn-menu" href="#" bind:this={buttonMenu} on:click={toggleMenu}>
					<span>
						<h4 style="color: white">Menu</h4>
						<i class="fa-bars fa-solid fa-xl" bind:this={faIcon} />
					</span>
				</a>
				<div class="mobile-nav" bind:this={navMobile}>
					<ul>
						<a href="/"> <li>Home</li> </a><a href="/{language}/about"> <li>About</li> </a><a
							href="/{language}/contact"
						>
							<li>Contact</li>
						</a>
						<a href="/{language}/blog">
							<li>Blog</li>
						</a>
					</ul>
				</div>
			</div>
			<!-- <a id="apply" href="#" class="btn">Apply</a> -->
			<!-- <div class="languages">
				<ul>
					{#each languages as _}
						<li class:active={_ == language}>
							<a class:active={_ == language} on:click={() => switchLanguage(_)} href="#">{_}</a>
						</li>
					{/each}
				</ul>
			</div> -->
		</nav>
	</div>
</header>

<style>
	@media (width > 1260px) {
		/* header {
			height: 90px !important;
		} */
	}
	@media (width > 760px) {
		/* header {
			height: 75px !important;
		} */
	}
	@media (min-width: 800px) {
	}
	:global(.active) {
		font-weight: bold !important;
		border-bottom: 1px solid white;
	}
</style>
