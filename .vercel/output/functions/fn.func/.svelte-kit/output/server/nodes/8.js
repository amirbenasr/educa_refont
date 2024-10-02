import * as universal from '../entries/pages/en/contact/_page.js';
import * as server from '../entries/pages/en/contact/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/en/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/en/contact/+page.js";
export { server };
export const server_id = "src/routes/en/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/8.CnQnLr0w.js","_app/immutable/chunks/scheduler.CcEuf84R.js","_app/immutable/chunks/index.GOEOohA1.js","_app/immutable/chunks/Layout.B6MVsjpK.js"];
export const stylesheets = ["_app/immutable/assets/8.CQ_5NMgh.css","_app/immutable/assets/Layout.DJ8B6ex3.css"];
export const fonts = [];
