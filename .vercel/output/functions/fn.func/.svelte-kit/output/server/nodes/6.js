import * as universal from '../entries/pages/contact/_page.js';
import * as server from '../entries/pages/contact/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export { server };
export const server_id = "src/routes/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/6.DImDJgyo.js","_app/immutable/chunks/scheduler.DzwpSvv5.js","_app/immutable/chunks/index.CR6-cqfM.js","_app/immutable/chunks/Layout.DD1UZ91i.js","_app/immutable/chunks/SEO.DiTdaDp_.js"];
export const stylesheets = ["_app/immutable/assets/6.CQ_5NMgh.css","_app/immutable/assets/Layout.DJ8B6ex3.css"];
export const fonts = [];
