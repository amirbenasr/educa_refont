import * as universal from '../entries/pages/blog/_page.js';
import * as server from '../entries/pages/blog/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export { server };
export const server_id = "src/routes/blog/+page.server.js";
export const imports = ["_app/immutable/nodes/4.DAI2IAL-.js","_app/immutable/chunks/scheduler.DzwpSvv5.js","_app/immutable/chunks/index.CR6-cqfM.js","_app/immutable/chunks/ArticlesList.C_5BL3xb.js","_app/immutable/chunks/ArticlesList.svelte_svelte_type_style_lang.qJWlttoR.js","_app/immutable/chunks/Layout.DD1UZ91i.js"];
export const stylesheets = ["_app/immutable/assets/4.BAWFQKso.css","_app/immutable/assets/ArticlesList.CrgqJLeD.css","_app/immutable/assets/Layout.DJ8B6ex3.css"];
export const fonts = [];
