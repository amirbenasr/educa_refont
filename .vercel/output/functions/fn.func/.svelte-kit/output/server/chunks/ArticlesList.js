import { c as create_ssr_component, i as is_promise, n as noop, b as each, e as escape, a as add_attribute } from "./ssr.js";
/* empty css                                           */
class Convert {
  static toArticles(json) {
    return JSON.parse(json);
  }
  static toArticle(json) {
    return JSON.parse(json);
  }
  static articleToJson(value) {
    return JSON.stringify(value);
  }
}
const css = {
  code: "@media(min-width: 960px){li.svelte-qrmqwr{width:calc((80% - 40px) / 3) !important}}ul.svelte-qrmqwr{list-style:none;padding:0;margin:0}li.svelte-qrmqwr{position:relative;border-width:0 0 2px 0;border-style:solid;border-color:#d2d2d2;display:inline-block;vertical-align:top;box-sizing:border-box;position:relative;width:100%;padding:5px;margin:0 7px 10px 0;transition:all 500ms ease;& .top-section {\n			min-height: 200px;\n		};& .middle-section {\n			min-height: 72px;\n			margin: 0 20px;\n			padding: 14px 0 5px;\n			border-bottom: 1px solid #ebebeb;\n			margin-bottom: 14px;\n		};& .bottom-section {\n			padding: 0 20px 20px;\n		};&::after {\n			position: absolute;\n			right: 18px;\n			bottom: 11px;\n			font-size: 28px;\n			font: var(--fa-font-solid);\n			content: '\\f138';\n			color: var(--secondary-color);\n		};&:hover {\n			box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.8);\n			scale: 1.01;\n			cursor: pointer;\n		}}.articles.svelte-qrmqwr{margin-top:1rem}img.svelte-qrmqwr{border-radius:0 0 20px 0;max-width:100%}",
  map: `{"version":3,"file":"ArticlesList.svelte","sources":["ArticlesList.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Convert } from \\"$lib/articles\\";\\nexport let excludeId = \\"\\";\\nconst url = \\"http://wordpress.educaus.net/index.php/wp-json/wp/v2/posts?exclude=\\" + excludeId;\\nconst getPosts = async () => {\\n  let response;\\n  response = JSON.stringify(await (await fetch(url)).json());\\n  return Convert.toArticles(response);\\n};\\nlet promise = getPosts();\\n<\/script>\\n\\n<div class=\\"articles\\">\\n\\t<ul>\\n\\t\\t{#await promise}\\n\\t\\t\\tLoading...\\n\\t\\t{:then articles}\\n\\t\\t\\t{#each articles as article, i}\\n\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t<a href=\\"/blog/{article.id}\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"ar ticle\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"top-section\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tloading=\\"lazy\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tsrc={article.yoast_head_json.og_image[0]?.url}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\talt=\\"\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tsrcset=\\"\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"middle-section\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<h3>{article.title?.rendered}</h3>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bottom-section\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<span>Know More</span>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div></a\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t<!-- {@html article.content.rendered} -->\\n\\t\\t\\t{/each}\\n\\t\\t{/await}\\n\\t</ul>\\n</div>\\n\\n<style>\\n\\t@media (min-width: 960px) {\\n\\t\\tli {\\n\\t\\t\\twidth: calc((80% - 40px) / 3) !important;\\n\\t\\t}\\n\\t}\\n\\n\\tul {\\n\\t\\tlist-style: none;\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t}\\n\\tli {\\n\\t\\tposition: relative;\\n\\t\\tborder-width: 0 0 2px 0;\\n\\t\\tborder-style: solid;\\n\\t\\tborder-color: #d2d2d2;\\n\\t\\tdisplay: inline-block;\\n\\t\\tvertical-align: top;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tposition: relative;\\n\\t\\twidth: 100%;\\n\\t\\tpadding: 5px;\\n\\t\\tmargin: 0 7px 10px 0;\\n\\t\\ttransition: all 500ms ease;\\n\\n\\t\\t& .top-section {\\n\\t\\t\\tmin-height: 200px;\\n\\t\\t}\\n\\t\\t& .middle-section {\\n\\t\\t\\tmin-height: 72px;\\n\\t\\t\\tmargin: 0 20px;\\n\\t\\t\\tpadding: 14px 0 5px;\\n\\t\\t\\tborder-bottom: 1px solid #ebebeb;\\n\\t\\t\\tmargin-bottom: 14px;\\n\\t\\t}\\n\\t\\t& .bottom-section {\\n\\t\\t\\tpadding: 0 20px 20px;\\n\\t\\t}\\n\\t\\t&::after {\\n\\t\\t\\tposition: absolute;\\n\\t\\t\\tright: 18px;\\n\\t\\t\\tbottom: 11px;\\n\\t\\t\\tfont-size: 28px;\\n\\t\\t\\tfont: var(--fa-font-solid);\\n\\t\\t\\tcontent: '\\\\f138';\\n\\t\\t\\tcolor: var(--secondary-color);\\n\\t\\t}\\n\\t\\t&:hover {\\n\\t\\t\\tbox-shadow: 0px 8px 8px rgba(0, 0, 0, 0.8);\\n\\t\\t\\tscale: 1.01;\\n\\t\\t\\tcursor: pointer;\\n\\t\\t}\\n\\t}\\n\\n\\t.articles {\\n\\t\\tmargin-top: 1rem;\\n\\t}\\n\\timg {\\n\\t\\tborder-radius: 0 0 20px 0;\\n\\t\\tmax-width: 100%;\\n\\t\\t/* width: 35rem;\\n\\t\\t\\tmax-height: auto; */\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4CC,MAAO,YAAY,KAAK,CAAE,CACzB,gBAAG,CACF,KAAK,CAAE,KAAK,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,UAC/B,CACD,CAEA,gBAAG,CACF,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACT,CACA,gBAAG,CACF,QAAQ,CAAE,QAAQ,CAClB,YAAY,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACvB,YAAY,CAAE,KAAK,CACnB,YAAY,CAAE,OAAO,CACrB,OAAO,CAAE,YAAY,CACrB,cAAc,CAAE,GAAG,CACnB,UAAU,CAAE,UAAU,CACtB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CACpB,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAE1B,CAAC,CAAC,YAAY,CAAC;AACjB,GAAG,YAAY,KAAK;AACpB,GAAG,CACD,CAAC,CAAC,eAAe,CAAC;AACpB,GAAG,YAAY,IAAI;AACnB,GAAG,QAAQ,CAAC,CAAC,IAAI;AACjB,GAAG,SAAS,IAAI,CAAC,CAAC,CAAC,GAAG;AACtB,GAAG,eAAe,GAAG,CAAC,KAAK,CAAC,OAAO;AACnC,GAAG,eAAe,IAAI;AACtB,GAAG,CACD,CAAC,CAAC,eAAe,CAAC;AACpB,GAAG,SAAS,CAAC,CAAC,IAAI,CAAC,IAAI;AACvB,GAAG,CACD,CAAC,OAAO,CAAC;AACX,GAAG,UAAU,QAAQ;AACrB,GAAG,OAAO,IAAI;AACd,GAAG,QAAQ,IAAI;AACf,GAAG,WAAW,IAAI;AAClB,GAAG,MAAM,IAAI,eAAe,CAAC;AAC7B,GAAG,SAAS,OAAO;AACnB,GAAG,OAAO,IAAI,iBAAiB,CAAC;AAChC,GAAG,CACD,CAAC,MAAM,CAAC;AACV,GAAG,YAAY,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC;AAC7C,GAAG,OAAO,IAAI;AACd,GAAG,QAAQ,OAAO;AAClB,GACC,CAEA,uBAAU,CACT,UAAU,CAAE,IACb,CACA,iBAAI,CACH,aAAa,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CACzB,SAAS,CAAE,IAGZ"}`
};
const ArticlesList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { excludeId = "" } = $$props;
  const url = "http://wordpress.educaus.net/index.php/wp-json/wp/v2/posts?exclude=" + excludeId;
  const getPosts = async () => {
    let response;
    response = JSON.stringify(await (await fetch(url)).json());
    return Convert.toArticles(response);
  };
  let promise = getPosts();
  if ($$props.excludeId === void 0 && $$bindings.excludeId && excludeId !== void 0) $$bindings.excludeId(excludeId);
  $$result.css.add(css);
  return `<div class="articles svelte-qrmqwr"><ul class="svelte-qrmqwr">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
			Loading...
		`;
    }
    return function(articles) {
      return ` ${each(articles, (article, i) => {
        return `<li class="svelte-qrmqwr"><a href="${"/blog/" + escape(article.id, true)}"><div class="ar ticle"><div class="top-section"><img loading="lazy"${add_attribute("src", article.yoast_head_json.og_image[0]?.url, 0)} alt="" srcset="" class="svelte-qrmqwr"></div> <div class="middle-section"><h3>${escape(article.title?.rendered)}</h3></div> <div class="bottom-section" data-svelte-h="svelte-vw3euu"><span>Know More</span></div> </div></a></li> `;
      })} `;
    }(__value);
  }(promise)}</ul> </div>`;
});
export {
  ArticlesList as A,
  Convert as C
};
