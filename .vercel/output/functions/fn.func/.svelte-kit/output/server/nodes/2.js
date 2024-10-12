import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CgqNLBog.js","_app/immutable/chunks/scheduler.DzwpSvv5.js","_app/immutable/chunks/index.CR6-cqfM.js","_app/immutable/chunks/ArticlesList.svelte_svelte_type_style_lang.qJWlttoR.js","_app/immutable/chunks/SEO.DiTdaDp_.js"];
export const stylesheets = ["_app/immutable/assets/2.s3oSjbg0.css","_app/immutable/assets/ArticlesList.CrgqJLeD.css"];
export const fonts = [];
