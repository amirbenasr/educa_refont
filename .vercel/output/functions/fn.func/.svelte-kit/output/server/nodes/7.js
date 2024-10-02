import * as universal from '../entries/pages/en/blog/_article_/_page.js';
import * as server from '../entries/pages/en/blog/_article_/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/en/blog/_article_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/en/blog/[article]/+page.js";
export { server };
export const server_id = "src/routes/en/blog/[article]/+page.server.js";
export const imports = ["_app/immutable/nodes/7.-HWDJAMT.js","_app/immutable/chunks/scheduler.CcEuf84R.js","_app/immutable/chunks/index.GOEOohA1.js","_app/immutable/chunks/ArticlesList.ngQHg1Ko.js","_app/immutable/chunks/ArticlesList.svelte_svelte_type_style_lang.qJWlttoR.js","_app/immutable/chunks/entry.CnaSxPNj.js"];
export const stylesheets = ["_app/immutable/assets/7.Didq-4hQ.css","_app/immutable/assets/ArticlesList.CrgqJLeD.css"];
export const fonts = [];
