<script>
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
	<div class="nav_wrapper">
		<nav class="container">
			<div class="logo">
				<a
					on:click={(e) => {
						if (opened) {
							toggleMenu(e);
						}
					}}
					href=""
				>
					<img src="/assets/logo.svg" alt="" srcset="" />
				</a>
			</div>
			<div class="desktop-nav">
				<ul>
					<a href="/"> <li>Home</li> </a><a href="/about"> <li>About</li> </a><a href="/contact">
						<li>Contact</li>
					</a>
					<a href="/blog">
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
						<a href=""> <li>Home</li> </a><a href="/about"> <li>About</li> </a><a href="/contact">
							<li>Contact</li>
						</a>
						<a href="/blog">
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
