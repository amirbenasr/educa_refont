

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.B20Ryzdj.js","_app/immutable/chunks/scheduler.DzwpSvv5.js","_app/immutable/chunks/index.CR6-cqfM.js"];
export const stylesheets = ["_app/immutable/assets/0.S1SQAbkf.css"];
export const fonts = [];
