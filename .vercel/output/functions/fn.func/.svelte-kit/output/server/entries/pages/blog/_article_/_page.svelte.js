import { c as create_ssr_component, i as is_promise, n as noop, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { C as Convert, A as ArticlesList } from "../../../../chunks/ArticlesList.js";
const css = {
  code: ".related-articles.svelte-i194x2{margin-top:2rem}section.svelte-i194x2{margin:0 auto}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from \\"$app/stores\\";\\nimport { Convert } from \\"$lib/articles\\";\\nimport { onMount } from \\"svelte\\";\\nimport ArticlesList from \\"../ArticlesList.svelte\\";\\nexport let data;\\nlet fullContent;\\nlet article;\\nconst apiUrl = `http://wordpress.educaus.net/wp-json/wp/v2/posts/${data.article}`;\\nconst loadArticle = async (id) => {\\n  const response = JSON.stringify(await (await fetch(apiUrl)).json());\\n  article = Convert.toArticles(response);\\n  return article;\\n};\\n<\/script>\\n\\n<!-- <h2 /> -->\\n<section>\\n\\t{#await loadArticle(data.article) then article}\\n\\t\\t<h1>{article.title?.rendered}</h1>\\n\\t\\t{@html article.content.rendered}\\n\\t{/await}\\n\\t<div class=\\"related-articles\\">\\n\\t\\t<hr />\\n\\t\\t<h2>Related Articles</h2>\\n\\t\\t<ArticlesList excludeId={data.article} />\\n\\t</div>\\n</section>\\n\\n<style>\\n\\t.related-articles {\\n\\t\\tmargin-top: 2rem;\\n\\t}\\n\\tsection {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA6BC,+BAAkB,CACjB,UAAU,CAAE,IACb,CACA,qBAAQ,CACP,MAAM,CAAE,CAAC,CAAC,IACX"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let article;
  const apiUrl = `http://wordpress.educaus.net/wp-json/wp/v2/posts/${data.article}`;
  const loadArticle = async (id) => {
    const response = JSON.stringify(await (await fetch(apiUrl)).json());
    article = Convert.toArticles(response);
    return article;
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return ` <section class="svelte-i194x2">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(article2) {
      return ` <h1>${escape(article2.title?.rendered)}</h1> <!-- HTML_TAG_START -->${article2.content.rendered}<!-- HTML_TAG_END --> `;
    }(__value);
  }(loadArticle(data.article))} <div class="related-articles svelte-i194x2"><hr> <h2 data-svelte-h="svelte-zd86x0">Related Articles</h2> ${validate_component(ArticlesList, "ArticlesList").$$render($$result, { excludeId: data.article }, {}, {})}</div> </section>`;
});
export {
  Page as default
};
