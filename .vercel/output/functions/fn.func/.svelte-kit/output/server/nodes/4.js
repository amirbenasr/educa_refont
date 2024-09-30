import * as universal from '../entries/pages/en/about/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/en/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/en/about/+page.js";
export const imports = ["_app/immutable/nodes/4.D8QMV7x6.js","_app/immutable/chunks/scheduler.CcEuf84R.js","_app/immutable/chunks/index.GOEOohA1.js","_app/immutable/chunks/Layout.B6MVsjpK.js"];
export const stylesheets = ["_app/immutable/assets/4.BcKOYB_1.css","_app/immutable/assets/Layout.DJ8B6ex3.css"];
export const fonts = [];
