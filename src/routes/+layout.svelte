<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import '../normalize.css';
	import '../style.css';
</script>

<Header />
<slot />

<Footer />
