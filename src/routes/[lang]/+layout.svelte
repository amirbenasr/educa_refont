<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Layout from '$lib/components/Layout.svelte';
	import { Jumper } from 'svelte-loading-spinners';

	import '../../style.css';
	import '../../normalize.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	let loading = true;

	function fire() {
		loading = false;
	}
	onMount(() => {
		window.onload = fire;
	});
</script>

{#if loading}
	<div class="loading">
		<Jumper color="red" />
	</div>
{:else}
	<Header />
	<slot />
	<Footer />
{/if}

<style>
	.loading {
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
