<script>
	export let title = 'Educa US - Study in the USA';
	export let description =
		'Educa US helps Tunisian students unlock opportunities to study in the USA with top universities, high visa approval rates, and expert guidance.';
	export let keywords = 'Study in the USA, Tunisia, Visa Success, Top Universities, Educa US';
	export let image = '/assets/og-image.jpg'; // Default OG image
	export let url = 'https://educaus.com'; // Your website's URL
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
</svelte:head>
