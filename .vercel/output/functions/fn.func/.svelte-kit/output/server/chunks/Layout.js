import { c as create_ssr_component, e as escape } from "./ssr.js";
/* empty css                                     */
const css = {
  code: ".bg.svelte-eesiiz{background:linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);width:100%;padding-top:50px}h1.svelte-eesiiz{position:relative;padding:1rem;margin:0;color:white}header.svelte-eesiiz{filter:drop-shadow(2px 2px 1px var(--primary-color));display:flex;align-items:flex-end;background-attachment:fixed;background-position:20% 80%;background-repeat:no-repeat !important;background-size:cover;height:15rem;width:100%;padding:0;margin:0}",
  map: '{"version":3,"file":"Layout.svelte","sources":["Layout.svelte"],"sourcesContent":["<script>\\n\\texport let img;\\n\\texport let title;\\n<\/script>\\n\\n<header style=\\"background-image: url({img});\\">\\n\\t<div class=\\"bg\\">\\n\\t\\t<h1>{title}</h1>\\n\\t</div>\\n</header>\\n<slot />\\n\\n<style>\\n\\t.bg {\\n\\t\\tbackground: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);\\n\\t\\twidth: 100%;\\n\\t\\tpadding-top: 50px;\\n\\t}\\n\\th1 {\\n\\t\\tposition: relative;\\n\\t\\tpadding: 1rem;\\n\\t\\tmargin: 0;\\n\\t\\tcolor: white;\\n\\t}\\n\\n\\theader {\\n\\t\\tfilter: drop-shadow(2px 2px 1px var(--primary-color));\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: flex-end;\\n\\t\\tbackground-attachment: fixed;\\n\\t\\tbackground-position: 20% 80%;\\n\\t\\tbackground-repeat: no-repeat !important;\\n\\t\\tbackground-size: cover;\\n\\t\\theight: 15rem;\\n\\t\\twidth: 100%;\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAaC,iBAAI,CACH,UAAU,CAAE,gBAAgB,EAAE,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,WAAW,CAAC,CACrE,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,IACd,CACA,gBAAG,CACF,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,KACR,CAEA,oBAAO,CACN,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,eAAe,CAAC,CAAC,CACrD,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,QAAQ,CACrB,qBAAqB,CAAE,KAAK,CAC5B,mBAAmB,CAAE,GAAG,CAAC,GAAG,CAC5B,iBAAiB,CAAE,SAAS,CAAC,UAAU,CACvC,eAAe,CAAE,KAAK,CACtB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACT"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let { title } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0) $$bindings.img(img);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  $$result.css.add(css);
  return `<header style="${"background-image: url(" + escape(img, true) + ");"}" class="svelte-eesiiz"><div class="bg svelte-eesiiz"><h1 class="svelte-eesiiz">${escape(title)}</h1></div></header> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as L
};
