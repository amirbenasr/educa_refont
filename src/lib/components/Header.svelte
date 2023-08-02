<script>
	import { language, languages, switchLanguage } from '@inlang/sdk-js';
	// const buttonMenu = document.querySelector('.btn-menu');
	// const navMobile = document.querySelector('nav ul');
	// const faIcon = document.querySelector('i');
	// const favDialog = document.getElementById('favDialog');
	// const apply = document.querySelectorAll('#apply');
	// const closeBtn = document.getElementById('closeBtn');
	// const body = document.body;

	// buttonMenu.addEventListener('click', function (e) {
	// 	e.preventDefault();
	// 	faIcon.classList.toggle('fa-close');
	// 	navMobile.classList.toggle('mobile');
	// });

	// apply.forEach((element) => {
	// 	element.addEventListener('click', function (e) {
	// 		favDialog.showModal();
	// 		body.classList.add('overflow-hidden');
	// 		// document.documentElement.classList.add("overflow-hidden");
	// 	});
	// });

	// closeBtn.addEventListener('click', function (e) {
	// 	// modal.classList.remove("active");
	// 	body.classList.remove('overflow-hidden');
	// 	favDialog.close();
	// });
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
				<a href="/">
					<img src="../assets/logo.svg" alt="" srcset="" />
				</a>
			</div>
			<div class="menu">
				<a class="btn-menu" href="#">
					<span>
						<h4 style="color: white">Menu</h4>
						<i class="fa-bars fa-solid fa-xl" />
					</span>
				</a>
			</div>
			<ul class="">
				<a href="/"> <li>Home</li> </a><a href="/{language}/about"> <li>About</li> </a><a
					href="/{language}/contact"
				>
					<li>Contact</li>
				</a>
				<a href="/{language}/blog">
					<li>Blog</li>
				</a>
			</ul>
			<a id="apply" href="#" class="btn">Apply</a>
			<div class="languages">
				<ul>
					{#each languages as _}
						<li class:active={_ == language}>
							<a class:active={_ == language} on:click={() => switchLanguage(_)} href="#">{_}</a>
						</li>
					{/each}
				</ul>
			</div>
		</nav>
	</div>
</header>

<style>
	@media (width > 1260px) {
		header {
			height: 90px !important;
		}
	}
	@media (width > 760px) {
		header {
			height: 75px !important;
		}
	}
	:global(.active) {
		font-weight: bold !important;
		border-bottom: 1px solid white;
	}
</style>
