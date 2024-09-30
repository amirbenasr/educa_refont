<script lang="ts">
	import ArticlesList from './ArticlesList.svelte';

	import { Convert } from '$lib/articles';
	import type { Article } from '$lib/articles';
	import { onMount } from 'svelte';
	import Layout from '$lib/components/Layout.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Layout img="../assets/blog.jpg" title="Blog">
	<section class="blog">
		<h1>Our Blog</h1>

		<h2>Latest Articles</h2>
		<!-- {#await getPosts() then articles} -->
		<ArticlesList />
		<!-- {/await} -->
	</section>
</Layout>

<style>
	@media (min-width: 960px) {
		li {
			width: calc((80% - 40px) / 3) !important;
		}
	}
	section.blog {
		& ul {
			list-style: none;
			padding: 0;
			margin: 0;
		}
		& li {
			border-width: 0 0 2px 0;
			border-style: solid;
			border-color: #d2d2d2;
			display: inline-block;
			vertical-align: top;
			box-sizing: border-box;
			position: relative;
			width: 100%;
			padding: 5px;
			margin: 0 7px 10px 0;
			& .top-section {
				min-height: 200px;
			}
			& .middle-section {
				min-height: 72px;
				margin: 0 20px;
				padding: 14px 0 5px;
				border-bottom: 1px solid #ebebeb;
				margin-bottom: 14px;
			}
			& .bottom-section {
				padding: 0 20px 20px;
			}
			&::after {
				position: absolute;
				right: 18px;
				bottom: 11px;
				font-size: 28px;
				font: var(--fa-font-solid);
				content: '\f138';
				color: var(--secondary-color);
			}
		}
		& .article {
			border: 0 0 6px 0 solid black;
		}
		& .articles {
			margin-top: 1rem;
		}
		& img {
			border-radius: 0 0 20px 0;
			max-width: 100%;
			/* width: 35rem;
			max-height: auto; */
		}
	}
</style>
