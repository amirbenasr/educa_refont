import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.C2dJPkMU.js","_app/immutable/chunks/scheduler.DzwpSvv5.js","_app/immutable/chunks/index.CR6-cqfM.js","_app/immutable/chunks/SEO.DiTdaDp_.js","_app/immutable/chunks/Layout.DD1UZ91i.js"];
export const stylesheets = ["_app/immutable/assets/3.BcKOYB_1.css","_app/immutable/assets/Layout.DJ8B6ex3.css"];
export const fonts = [];
