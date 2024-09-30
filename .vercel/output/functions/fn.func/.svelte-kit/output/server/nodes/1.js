

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D7JjLqas.js","_app/immutable/chunks/scheduler.CcEuf84R.js","_app/immutable/chunks/index.GOEOohA1.js","_app/immutable/chunks/entry.Bkdw26U_.js"];
export const stylesheets = [];
export const fonts = [];
