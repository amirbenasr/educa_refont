import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const css = {
  code: ".scroll-wrapper.svelte-9fdbwm{overflow:hidden}.scroll-container.svelte-9fdbwm{background:url('../polygon.png') repeat-x;background-size:contain;width:9375px;height:416px;animation:svelte-9fdbwm-scroll 3s linear infinite}@keyframes svelte-9fdbwm-scroll{0%{transform:translate(0)}100%{transform:translate(-625px)}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\t/** @type {import('./$types').PageData} */\\n\\texport let data;\\n<\/script>\\n\\n<div class=\\"scroll-wrapper\\">\\n\\t<div class=\\"scroll-container\\" />\\n</div>\\n\\n<style>\\n\\t.scroll-wrapper {\\n\\t\\toverflow: hidden;\\n\\t\\t/* width: 625px; */\\n\\t}\\n\\n\\t.scroll-container {\\n\\t\\tbackground: url('../polygon.png') repeat-x;\\n\\t\\tbackground-size: contain;\\n\\t\\twidth: 9375px;\\n\\t\\theight: 416px;\\n\\t\\tanimation: scroll 3s linear infinite;\\n\\t}\\n\\t@keyframes scroll {\\n\\t\\t0% {\\n\\t\\t\\ttransform: translate(0);\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\ttransform: translate(-625px);\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAUC,6BAAgB,CACf,QAAQ,CAAE,MAEX,CAEA,+BAAkB,CACjB,UAAU,CAAE,qBAAqB,CAAC,QAAQ,CAC1C,eAAe,CAAE,OAAO,CACxB,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,oBAAM,CAAC,EAAE,CAAC,MAAM,CAAC,QAC7B,CACA,WAAW,oBAAO,CACjB,EAAG,CACF,SAAS,CAAE,UAAU,CAAC,CACvB,CACA,IAAK,CACJ,SAAS,CAAE,UAAU,MAAM,CAC5B,CACD"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="scroll-wrapper svelte-9fdbwm" data-svelte-h="svelte-1rcwnsp"><div class="scroll-container svelte-9fdbwm"></div> </div>`;
});
export {
  Page as default
};
