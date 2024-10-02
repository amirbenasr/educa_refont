import * as universal from '../entries/pages/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/3.CPngzUco.js","_app/immutable/chunks/scheduler.CcEuf84R.js","_app/immutable/chunks/index.GOEOohA1.js","_app/immutable/chunks/entry.CnaSxPNj.js"];
export const stylesheets = [];
export const fonts = [];
