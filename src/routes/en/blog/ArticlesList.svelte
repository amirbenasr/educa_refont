<script lang="ts">
	import { Convert } from '$lib/articles';
	import type { Article } from '$lib/articles';
	import { language } from '@inlang/sdk-js';
	/** @type {import('./$types').PageData} */

	export let excludeId = '';
	const url = 'http://wordpress.educaus.net/index.php/wp-json/wp/v2/posts?exclude=' + excludeId;

	const getPosts = async () => {
		let response;
		response = JSON.stringify(await (await fetch(url)).json());
		return Convert.toArticles(response);
	};
	// let articles: Article[] = [];
	let promise = getPosts();
</script>

<div class="articles">
	<ul>
		{#await promise}
			Loading...
		{:then articles}
			{#each articles as article, i}
				<li>
					<a href="/{language}/blog/{article.id}">
						<div class="ar ticle">
							<div class="top-section">
								<img
									loading="lazy"
									src={article.yoast_head_json.og_image[0]?.url}
									alt=""
									srcset=""
								/>
							</div>
							<div class="middle-section">
								<h3>{article.title?.rendered}</h3>
							</div>
							<div class="bottom-section">
								<span>Know More</span>
							</div>
						</div></a
					>
				</li>
				<!-- {@html article.content.rendered} -->
			{/each}
		{/await}
	</ul>
</div>

<style>
	@media (min-width: 960px) {
		li {
			width: calc((80% - 40px) / 3) !important;
		}
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li {
		position: relative;
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
		transition: all 500ms ease;

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
		&:hover {
			box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.8);
			scale: 1.01;
			cursor: pointer;
		}
	}

	.articles {
		margin-top: 1rem;
	}
	img {
		border-radius: 0 0 20px 0;
		max-width: 100%;
		/* width: 35rem;
			max-height: auto; */
	}
</style>
