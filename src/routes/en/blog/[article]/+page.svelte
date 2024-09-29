<script lang="ts">
	import { page } from '$app/stores';
	import type { Article } from '$lib/articles';
	import { Convert } from '$lib/articles';
	import { onMount } from 'svelte';
	import ArticlesList from '../ArticlesList.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	let fullContent;
	let article: Article;
	// Replace with the actual post ID
	const apiUrl = `http://wordpress.educaus.net/wp-json/wp/v2/posts/${data.article}`;

	const loadArticle = async (id) => {
		const response = JSON.stringify(await (await fetch(apiUrl)).json());
		article = Convert.toArticles(response);
		return article;
	};
</script>

<!-- <h2 /> -->
<section>
	{#await loadArticle(data.article) then article}
		<h1>{article.title?.rendered}</h1>
		{@html article.content.rendered}
	{/await}
	<div class="related-articles">
		<hr />
		<h2>Related Articles</h2>
		<ArticlesList excludeId={data.article} />
	</div>
</section>

<style>
	.related-articles {
		margin-top: 2rem;
	}
	section {
		margin: 0 auto;
	}
</style>
