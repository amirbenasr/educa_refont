<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Layout from '$lib/components/Layout.svelte';

	import '../style.css';
	import '../normalize.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
</script>

<Header />
<slot />

<Footer />
