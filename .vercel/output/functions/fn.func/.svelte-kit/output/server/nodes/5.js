import * as universal from '../entries/pages/blog/_article_/_page.js';
import * as server from '../entries/pages/blog/_article_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_article_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[article]/+page.js";
export { server };
export const server_id = "src/routes/blog/[article]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.BYijMHq2.js","_app/immutable/chunks/scheduler.DzwpSvv5.js","_app/immutable/chunks/index.CR6-cqfM.js","_app/immutable/chunks/ArticlesList.C_5BL3xb.js","_app/immutable/chunks/ArticlesList.svelte_svelte_type_style_lang.qJWlttoR.js","_app/immutable/chunks/entry.CGhgOzH7.js"];
export const stylesheets = ["_app/immutable/assets/5.Didq-4hQ.css","_app/immutable/assets/ArticlesList.CrgqJLeD.css"];
export const fonts = [];
