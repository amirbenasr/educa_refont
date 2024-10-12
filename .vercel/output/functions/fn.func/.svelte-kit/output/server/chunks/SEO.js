import { c as create_ssr_component, e as escape, a as add_attribute } from "./ssr.js";
const SEO = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Educa US - Study in the USA" } = $$props;
  let { description = "Educa US helps Tunisian students unlock opportunities to study in the USA with top universities, high visa approval rates, and expert guidance." } = $$props;
  let { keywords = "Study in the USA, Tunisia, Visa Success, Top Universities, Educa US" } = $$props;
  let { image = "/assets/og-image.jpg" } = $$props;
  let { url = "https://educaus.com" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0) $$bindings.keywords(keywords);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  return `${$$result.head += `<!-- HEAD_svelte-sqkilo_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><meta property="og:type" content="website"><meta property="og:url"${add_attribute("content", url, 0)}><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", image, 0)}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${add_attribute("content", url, 0)}><meta property="twitter:title"${add_attribute("content", title, 0)}><meta property="twitter:description"${add_attribute("content", description, 0)}><meta property="twitter:image"${add_attribute("content", image, 0)}><!-- HEAD_svelte-sqkilo_END -->`, ""}`;
});
export {
  SEO as S
};
