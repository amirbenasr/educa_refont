import * as universal from '../entries/pages/en/blog/_page.js';
import * as server from '../entries/pages/en/blog/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/en/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/en/blog/+page.js";
export { server };
export const server_id = "src/routes/en/blog/+page.server.js";
export const imports = ["_app/immutable/nodes/5.B_KvJR4e.js","_app/immutable/chunks/scheduler.CcEuf84R.js","_app/immutable/chunks/index.GOEOohA1.js","_app/immutable/chunks/ArticlesList.ngQHg1Ko.js","_app/immutable/chunks/ArticlesList.svelte_svelte_type_style_lang.qJWlttoR.js","_app/immutable/chunks/Layout.B6MVsjpK.js"];
export const stylesheets = ["_app/immutable/assets/5.BAWFQKso.css","_app/immutable/assets/ArticlesList.CrgqJLeD.css","_app/immutable/assets/Layout.DJ8B6ex3.css"];
export const fonts = [];
