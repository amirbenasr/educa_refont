import { c as create_ssr_component, v as validate_component, a as each, e as escape } from "../../../chunks/ssr.js";
/* empty css                                                         */
import "swiper";
const ComponentX = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="component-x" data-svelte-h="svelte-1hjpfbu"><div class="flex-col"><div class="box blue"><div class="flex-z"><div class="text-content"><div class="animated-text"><h1 class="hero__title">Unlock Your <br> American Dream <br> with
							<span style="position: relative;">Educa US <div class="bg-anim"></div></span></h1> <p class="hero__subtitle"></p></div></div> <div class="stats__list"><div class="stats__card"><h2><span id="n_s"></span>+</h2> <p>Students in USA</p></div> <div class="stats__card"><h2>#1</h2> <p>Agency in Tunisia</p></div> <div class="stats__card"><h2><span id="n_r">0</span>%</h2> <p>Visa Approval Rate</p></div> <div class="stats__card"><h2><span id="n_u">0</span>+</h2> <p>universities</p></div></div></div> <a id="apply" class="btn" href="en/contact">Contact Us</a></div></div></div>`;
});
const css = {
  code: "@media(max-width: 1100px){.lottie2.svelte-1ol8zur{visibility:hidden}}@media(max-width: 800px){.lottie.svelte-1ol8zur{position:absolute;top:unset !important;bottom:0 !important;left:0 !important;z-index:-1}}.lottie.svelte-1ol8zur{position:absolute;bottom:0;left:150px;z-index:-1}.lottie2.svelte-1ol8zur{position:absolute;top:0;right:150px;z-index:-1;transform:scaleX(-1)}.card.svelte-1ol8zur{flex:1}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport ArticlesList from \\"./blog/ArticlesList.svelte\\";\\nimport gsap from \\"gsap\\";\\nimport { ScrollTrigger } from \\"gsap/dist/ScrollTrigger\\";\\nimport { TextPlugin } from \\"gsap/dist/TextPlugin\\";\\nimport Swiper from \\"swiper\\";\\nimport ComponentX from \\"$lib/components/ComponentX.svelte\\";\\nlet index = 0;\\nfunction counterEffect(element, val) {\\n  index++;\\n  gsap.to(element, {\\n    innerText: val,\\n    duration: 8,\\n    ease: \\"linear\\",\\n    delay: 0.5 + index,\\n    snap: {\\n      innerText: 1\\n    }\\n  });\\n}\\nonMount(() => {\\n  gsap.registerPlugin(ScrollTrigger);\\n  gsap.registerPlugin(TextPlugin);\\n  const offerTrigger = ScrollTrigger.create({\\n    // markers: true,\\n    start: \\"top 60%\\",\\n    end: \\"bottom 20%\\",\\n    trigger: \\"section.offer\\"\\n  });\\n  const galleryTrigger = ScrollTrigger.create({\\n    trigger: \\"section.stats\\",\\n    // markers: true,\\n    start: \\"top 50%\\",\\n    onEnter: () => {\\n      tl_staggered.add(counterEffect(n_s, 700)).restart();\\n    }\\n  });\\n  const factsTrigger = ScrollTrigger.create({\\n    trigger: \\"section.facts\\",\\n    // markers: true,\\n    start: \\"top top%\\",\\n    onEnter: () => {\\n      factsAnimation.play();\\n    }\\n  });\\n  const tl_hero = gsap.timeline({\\n    paused: true\\n  });\\n  const tl_staggered = gsap.timeline({});\\n  const tl_gallery = gsap.timeline({\\n    scrollTrigger: galleryTrigger\\n  });\\n  const tl_offers = gsap.timeline({\\n    paused: true,\\n    scrollTrigger: offerTrigger\\n  });\\n  const galleryImages = document.querySelectorAll(\\".lightgallery a\\");\\n  const factsAnimation = gsap.fromTo(\\n    \\".facts__card\\",\\n    { opacity: 0, x: \\"-100%\\" },\\n    {\\n      // scale: 0.1,\\n      paused: true,\\n      x: \\"0\\",\\n      opacity: 1,\\n      ease: \\"power1.inOut\\",\\n      stagger: {\\n        amount: 1.5\\n      }\\n    }\\n  );\\n  galleryImages.forEach((img, ix) => {\\n    tl_gallery.fromTo(img, { opacity: 0 }, { x: 15, opacity: 1, duration: 0.09 });\\n  });\\n  const listItems = document.querySelectorAll(\\".offer__card\\");\\n  tl_offers.fromTo(\\".left h1\\", { opacity: 0, x: \\"-100px\\" }, { opacity: 1, x: \\"0\\" }).fromTo(\\".left p\\", { opacity: 0, x: \\"-100px\\" }, { opacity: 1, x: \\"0\\" });\\n  listItems.forEach((element, ix) => {\\n    tl_offers.fromTo(\\n      element,\\n      {\\n        x: \\"0\\",\\n        y: 0,\\n        opacity: 0\\n      },\\n      {\\n        x: 10,\\n        opacity: 1,\\n        duration: 0.6\\n      }\\n    );\\n  });\\n  const swiper = new Swiper(\\".hero__slider\\", {\\n    autoplay: {\\n      delay: 5e3\\n    },\\n    spaceBetween: \\"0px\\",\\n    centeredSlides: void 0\\n  });\\n  const swiper2 = new Swiper(\\".testimonials__slider\\", {\\n    autoplay: {\\n      delay: 3e3\\n    },\\n    pagination: {\\n      el: \\".swiper-pagination\\",\\n      clickable: true\\n    },\\n    breakpoints: {\\n      1e3: {\\n        slidesPerView: 2,\\n        spaceBetween: 30,\\n        centeredSlides: true\\n      }\\n      // when window width is >= 640px\\n    }\\n  });\\n  const textContainer = document.querySelector(\\".text-content\\");\\n  const animatedText = document.querySelector(\\".animated-text\\");\\n  let bg = document.querySelector(\\".bg-anim::before\\");\\n  let n_s = document.getElementById(\\"n_s\\");\\n  let n_r = document.getElementById(\\"n_r\\");\\n  let n_u = document.getElementById(\\"n_u\\");\\n  const textElement = document.querySelector(\\".hero__subtitle\\");\\n  const text = \\"Discover Limitless Opportunities for Travel and Education in the USA\\";\\n  tl_hero.fromTo(\\n    \\".box\\",\\n    { y: \\"-100px\\", opacity: 0, duration: 1.5, display: \\"none\\" },\\n    { y: \\"0\\", opacity: 1, duration: 1.5, display: \\"unset\\" }\\n  ).from(textContainer, { opacity: 0, duration: 0.5, ease: \\"power2.inOut\\" }).from(animatedText, { y: 50, opacity: 0, duration: 0.5, ease: \\"power2.out\\" }).add(() => {\\n    gsap.to(textElement, {\\n      text: {\\n        value: text,\\n        delimiter: \\"\\"\\n      },\\n      duration: 3,\\n      // Adjust the typing speed\\n      ease: \\"power1.inOut\\"\\n    });\\n  }).add(() => {\\n    const buttons = document.querySelectorAll(\\".stats__card\\");\\n    buttons.forEach((button, index2) => {\\n      tl_staggered.fromTo(\\n        button,\\n        {\\n          opacity: 0,\\n          y: 50\\n        },\\n        {\\n          opacity: 1,\\n          y: 0,\\n          duration: 0.5,\\n          ease: \\"power2.inOut\\"\\n        }\\n      );\\n    });\\n  }).add(() => {\\n    tl_hero.fromTo(\\n      \\".bg-anim\\",\\n      1.5,\\n      {\\n        backgroundColor: \\"transparent\\",\\n        height: \\"0%\\",\\n        width: \\"0%\\",\\n        duration: 0.5\\n      },\\n      {\\n        backgroundColor: \\"var(--secondary-color)\\",\\n        height: \\"100%\\",\\n        width: \\"100%\\",\\n        duration: 0.5,\\n        delay: 0.5\\n      }\\n    );\\n  }).add(counterEffect(n_s, 700)).add(counterEffect(n_r, 96)).add(counterEffect(n_u, 30)).fromTo(\\"#apply\\", { opacity: 0, y: \\"-100px\\" }, { opacity: 1, y: \\"0\\" }, \\">=1\\");\\n  tl_hero.play();\\n  window.$(\\"#lightgallery\\").justifiedGallery({\\n    captions: false,\\n    lastRow: \\"hide\\",\\n    rowHeight: 120,\\n    margins: 5\\n  }).on(\\"jg.complete\\", function() {\\n    window.lightGallery(document.getElementById(\\"lightgallery\\"), {\\n      download: false,\\n      plugins: [window.lgZoom, window.lgThumbnail],\\n      width: \\"500px\\",\\n      speed: 500\\n    });\\n  });\\n});\\n<\/script>\\n\\n<head>\\n\\t<meta charset=\\"UTF-8\\" />\\n\\t<meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\" />\\n\\t<title>Educa US - Study in the USA</title>\\n</head>\\n\\n<section class=\\"hero\\">\\n\\t<div class=\\"content_wrapper\\">\\n\\t\\t<!-- <div class=\\"hero__content\\" /> -->\\n\\n\\t\\t<ComponentX />\\n\\t\\t<div class=\\"swiper hero__slider\\">\\n\\t\\t\\t<div class=\\"swiper-wrapper\\">\\n\\t\\t\\t\\t<div class=\\"swiper-slide\\">\\n\\t\\t\\t\\t\\t<picture>\\n\\t\\t\\t\\t\\t\\t<img src=\\"./assets/img2.webp\\" alt=\\"\\" srcset=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<!-- <img src=\\"./assets/img2.jpg\\" alt=\\"\\" srcset=\\"\\" /> -->\\n\\t\\t\\t\\t\\t</picture>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"swiper-slide\\">\\n\\t\\t\\t\\t\\t<picture>\\n\\t\\t\\t\\t\\t\\t<img src=\\"./assets/img1.webp\\" alt=\\"\\" srcset=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<!-- <img src=\\"./assets/img1.jpg\\" alt=\\"\\" srcset=\\"\\" /> -->\\n\\t\\t\\t\\t\\t</picture>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"swiper-slide\\">\\n\\t\\t\\t\\t\\t<picture>\\n\\t\\t\\t\\t\\t\\t<img src=\\"./assets/img3.webp\\" alt=\\"\\" srcset=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<!-- <img src=\\"./assets/img3.jpg\\" alt=\\"\\" srcset=\\"\\" /> -->\\n\\t\\t\\t\\t\\t</picture>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"swiper-slide\\">\\n\\t\\t\\t\\t\\t<picture>\\n\\t\\t\\t\\t\\t\\t<img src=\\"./assets/img4.webp\\" alt=\\"\\" srcset=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<!-- <img src=\\"./assets/img4.jpg\\" alt=\\"\\" srcset=\\"\\" /> -->\\n\\t\\t\\t\\t\\t</picture>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<!-- <section class=\\"facts\\">\\n\\t<div class=\\"facts__list\\">\\n\\t\\t<div class=\\"facts__card\\">\\n\\t\\t\\t<div class=\\"logo\\">\\n\\t\\t\\t\\t<i class=\\"fa-school-flag fa-solid fa-2xl\\" />\\n\\t\\t\\t</div>\\n\\t\\t\\t<h2 class=\\"facts__title\\">Top Universities</h2>\\n\\t\\t\\t<p class=\\"facts__desription\\">\\n\\t\\t\\t\\tWe have established strong partnerships with prestigious academic institutions across the\\n\\t\\t\\t\\tUSA, ensuring that you gain access to quality education and cutting-edge facilities.\\n\\t\\t\\t</p>\\n\\t\\t</div>\\n\\t\\t<div class=\\"facts__card\\">\\n\\t\\t\\t<div class=\\"logo\\">\\n\\t\\t\\t\\t<i class=\\"fa-sliders fa-solid fa-2xl\\" />\\n\\t\\t\\t</div>\\n\\t\\t\\t<h2 class=\\"facts__title\\">Personalized Programs</h2>\\n\\t\\t\\t<p class=\\"facts__desription\\">\\n\\t\\t\\t\\tOur team of experienced educators and advisors works closely with you to understand your\\n\\t\\t\\t\\tacademic needs and preferences\\n\\t\\t\\t</p>\\n\\t\\t</div>\\n\\t\\t<div class=\\"facts__card\\">\\n\\t\\t\\t<div class=\\"logo\\">\\n\\t\\t\\t\\t<i class=\\"fa-people-roof fa-solid fa-2xl\\" />\\n\\t\\t\\t</div>\\n\\t\\t\\t<h2 class=\\"facts__title\\">Strong Community</h2>\\n\\t\\t\\t<p class=\\"facts__desription\\">\\n\\t\\t\\t\\tOur strong community fosters a sense of belonging, encouraging you to make lifelong\\n\\t\\t\\t\\tfriendships, collaborate on projects, and engage in enriching activities together\\n\\t\\t\\t</p>\\n\\t\\t</div>\\n\\t\\t<div class=\\"facts__card\\">\\n\\t\\t\\t<div class=\\"logo\\">\\n\\t\\t\\t\\t<i class=\\"fa-person-walking-luggage fa-solid fa-2xl\\" />\\n\\t\\t\\t</div>\\n\\t\\t\\t<h2 class=\\"facts__title\\">Guidance</h2>\\n\\t\\t\\t<p class=\\"facts__desription\\">\\n\\t\\t\\t\\tFrom choosing the right program to assisting with visa applications, we'll be your trusted\\n\\t\\t\\t\\tcompanions, ensuring a smooth and rewarding journey towards achieving your educational\\n\\t\\t\\t\\taspirations in the USA.\\n\\t\\t\\t</p>\\n\\t\\t</div>\\n\\t</div>\\n</section> -->\\n\\n<div class=\\"offer_wrapper\\">\\n\\t<section class=\\"offer container\\">\\n\\t\\t<img class=\\"circles\\" src=\\"./assets/circles.png\\" alt=\\"\\" srcset=\\"\\" />\\n\\t\\t<img class=\\"circles_var\\" src=\\"./assets/circles_variant.png\\" alt=\\"\\" srcset=\\"\\" />\\n\\t\\t<div class=\\"left\\">\\n\\t\\t\\t<header>\\n\\t\\t\\t\\t<h1>What We Offer</h1>\\n\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\tAt Educa US, we take immense pride in offering a comprehensive range of services and\\n\\t\\t\\t\\t\\tunwavering support to make your study abroad dreams a reality.\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"offers\\">\\n\\t\\t\\t\\t<div class=\\"offer__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"offer__avatar\\">\\n\\t\\t\\t\\t\\t\\t<i class=\\"fa-graduation-cap fa-solid fa-xl\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"offer__content\\">\\n\\t\\t\\t\\t\\t\\t<h3>Academic Coursework</h3>\\n\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\tEmpowering Minds, Shaping Futures - Unlocking a World of Knowledge and Inspiring\\n\\t\\t\\t\\t\\t\\t\\tAcademic Excellence\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"offer__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"offer__avatar\\">\\n\\t\\t\\t\\t\\t\\t<i class=\\"fa-cable-car fa-solid fa-xl\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"offer__content\\">\\n\\t\\t\\t\\t\\t\\t<h3>Logistics</h3>\\n\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\tSeamless Transitions, Stress-Free Arrangements - Ensuring Every Detail, So You Can\\n\\t\\t\\t\\t\\t\\t\\tFocus on Your Journey\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"offer__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"offer__avatar\\">\\n\\t\\t\\t\\t\\t\\t<i class=\\"fa-project-diagram fa-solid fa-xl\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"offer__content\\">\\n\\t\\t\\t\\t\\t\\t<h3>Coordination</h3>\\n\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\tYour Journey, Our Precision - Expertly Orchestrating Your Study Abroad Adventure for\\n\\t\\t\\t\\t\\t\\t\\tOptimal Success\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"offer__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"offer__avatar\\">\\n\\t\\t\\t\\t\\t\\t<i class=\\"fa-file-invoice fa-solid fa-xl\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"offer__content\\">\\n\\t\\t\\t\\t\\t\\t<h3>Visa Process</h3>\\n\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\tGuiding Your Path to Success - Navigating the Visa Maze with Professional Expertise\\n\\t\\t\\t\\t\\t\\t\\tand Support\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"offer__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"offer__avatar\\">\\n\\t\\t\\t\\t\\t\\t<i class=\\"fa-shield fa-solid fa-xl\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"offer__content\\">\\n\\t\\t\\t\\t\\t\\t<h3>Safety</h3>\\n\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\tA Secure Haven for Your Dreams - Prioritizing Your Safety and Well-Being Throughout\\n\\t\\t\\t\\t\\t\\t\\tYour Experience\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"offer__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"offer__avatar\\">\\n\\t\\t\\t\\t\\t\\t<i class=\\"fa-university fa-solid fa-xl\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"offer__content\\">\\n\\t\\t\\t\\t\\t\\t<h3>Best universities</h3>\\n\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\tUnlocking Excellence, Embracing Brilliance - Discovering Top-Ranked Institutions and\\n\\t\\t\\t\\t\\t\\t\\tLimitless Possibilities\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"right\\">\\n\\t\\t\\t<video\\n\\t\\t\\t\\tclass=\\"video\\"\\n\\t\\t\\t\\tstyle=\\"object-fit: contain; max-width:100% max-height:100%\\"\\n\\t\\t\\t\\tsrc=\\"./assets/video.mp4\\"\\n\\t\\t\\t\\tloop\\n\\t\\t\\t\\tmuted\\n\\t\\t\\t\\tautoplay\\n\\t\\t\\t\\tcontrols\\n\\t\\t\\t/>\\n\\t\\t\\t<!-- <img src=\\"./assets/students_park.jpg\\" alt=\\"\\" srcset=\\"\\" /> -->\\n\\t\\t</div>\\n\\t</section>\\n</div>\\n\\n<section class=\\"stats\\">\\n\\t<div class=\\"custom-shape-divider-top\\">\\n\\t\\t<svg\\n\\t\\t\\tdata-name=\\"Layer 1\\"\\n\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\tviewBox=\\"0 0 1200 120\\"\\n\\t\\t\\tpreserveAspectRatio=\\"none\\"\\n\\t\\t>\\n\\t\\t\\t<path\\n\\t\\t\\t\\td=\\"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\\"\\n\\t\\t\\t\\topacity=\\".25\\"\\n\\t\\t\\t\\tclass=\\"shape-fill\\"\\n\\t\\t\\t/>\\n\\t\\t\\t<path\\n\\t\\t\\t\\td=\\"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z\\"\\n\\t\\t\\t\\topacity=\\".5\\"\\n\\t\\t\\t\\tclass=\\"shape-fill\\"\\n\\t\\t\\t/>\\n\\t\\t\\t<path\\n\\t\\t\\t\\td=\\"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z\\"\\n\\t\\t\\t\\tclass=\\"shape-fill\\"\\n\\t\\t\\t/>\\n\\t\\t</svg>\\n\\t</div>\\n\\t<section>\\n\\t\\t<div id=\\"lightgallery\\" class=\\"lightgallery\\">\\n\\t\\t\\t{#each Array(12) as _, idx}\\n\\t\\t\\t\\t<a href=\\"./gallery/{idx}.webp\\" data-src=\\"./gallery/{idx}.webp\\" style=\\"width: 200px;\\">\\n\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\twidth=\\"200\\"\\n\\t\\t\\t\\t\\t\\theight=\\"200\\"\\n\\t\\t\\t\\t\\t\\talt=\\"image {idx}\\"\\n\\t\\t\\t\\t\\t\\tsrc=\\"./gallery/{idx}.webp\\"\\n\\t\\t\\t\\t\\t\\tdata-src=\\"./gallery/{idx}.webp\\"\\n\\t\\t\\t\\t\\t\\tloading=\\"lazy\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</section>\\n\\t<div class=\\"card\\">\\n\\t\\t<div class=\\"stats__content\\">\\n\\t\\t\\t<!-- <div class=\\"content__image\\">\\n\\t\\t\\t\\t<img src=\\"./assets/secret_teacher.png\\" alt=\\"\\" srcset=\\"\\" />\\n\\t\\t\\t  </div> -->\\n\\t\\t\\t<div class=\\"content__text container\\">\\n\\t\\t\\t\\t<div class=\\"content__title\\">\\n\\t\\t\\t\\t\\t<h1>We design your best program</h1>\\n\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\tOur team makes sure, that every student gets the best program that fits his direction.\\n\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\tThrough personalized academic guidance, we assist students in finding the ideal\\n\\t\\t\\t\\t\\t\\tinstitutions that align with their aspirations and career goals.\\n\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"container stats__list\\">\\n\\t\\t\\t\\t<div class=\\"stats__card\\">\\n\\t\\t\\t\\t\\t<h2>700+</h2>\\n\\t\\t\\t\\t\\t<p>Students in USA</p>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"stats__card\\">\\n\\t\\t\\t\\t\\t<h2>#1</h2>\\n\\t\\t\\t\\t\\t<p>Agency in Tunisia</p>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"stats__card\\">\\n\\t\\t\\t\\t\\t<h2>96%</h2>\\n\\t\\t\\t\\t\\t<p>Visa Approval Rate</p>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"stats__card\\">\\n\\t\\t\\t\\t\\t<h2>30+</h2>\\n\\t\\t\\t\\t\\t<p>universities</p>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<section class=\\"testimonials\\">\\n\\t<header>\\n\\t\\t<h1>Our students say about us</h1>\\n\\t\\t<h3>Stories of Success with Educa US</h3>\\n\\t</header>\\n\\t<div class=\\"lottie\\">\\n\\t\\t<lottie-player\\n\\t\\t\\tautoplay\\n\\t\\t\\tcontrols={false}\\n\\t\\t\\tloop\\n\\t\\t\\tmode=\\"normal\\"\\n\\t\\t\\tsrc=\\"../Advertising.json\\"\\n\\t\\t\\tstyle=\\"width: 160px\\"\\n\\t\\t/>\\n\\t</div>\\n\\t<div class=\\"lottie2\\">\\n\\t\\t<lottie-player\\n\\t\\t\\tautoplay\\n\\t\\t\\tcontrols={false}\\n\\t\\t\\tloop\\n\\t\\t\\tmode=\\"normal\\"\\n\\t\\t\\tsrc=\\"../Advertising.json\\"\\n\\t\\t\\tstyle=\\"width: 160px\\"\\n\\t\\t/>\\n\\t</div>\\n\\t<div class=\\"swiper testimonials__slider\\">\\n\\t\\t<div class=\\"swiper-wrapper testimonials__list\\">\\n\\t\\t\\t<div class=\\"swiper-slide\\">\\n\\t\\t\\t\\t<div class=\\"testimonial__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"testimonial__avatar\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"./assets/siwar.jpg\\" alt=\\"\\" srcset=\\"\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"testimonial__content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"testimonial__description\\">\\n\\t\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\t\\tWith the guidance and assistance of Educa US, I was able to successfully pursue my\\n\\t\\t\\t\\t\\t\\t\\t\\tstudies in IT and obtain a visa to study in the United States.\\n\\t\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"testimonial__name\\"><h3>Siwar Ben Khlifa</h3></div>\\n\\t\\t\\t\\t\\t\\t<span class=\\"testimonial__specialty\\">Student</span>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"swiper-slide\\">\\n\\t\\t\\t\\t<div class=\\"testimonial__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"testimonial__avatar\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"./assets/walid.jpg\\" alt=\\"\\" srcset=\\"\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"testimonial__content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"testimonial__description\\">\\n\\t\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\t\\tWith the right resources and support from EducaUS, I can navigate my differences and\\n\\t\\t\\t\\t\\t\\t\\t\\tfind a path that aligns with my goals and aspirations\\n\\t\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"testimonial__name\\"><h3>Walid Ferjani</h3></div>\\n\\t\\t\\t\\t\\t\\t<span class=\\"testimonial__specialty\\">Student</span>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"swiper-slide\\">\\n\\t\\t\\t\\t<div class=\\"testimonial__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"testimonial__avatar\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"./assets/mahdi.jpg\\" alt=\\"\\" srcset=\\"\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"testimonial__content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"testimonial__description\\">\\n\\t\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\t\\tEduca US offered expert guidance to help me choose the right college and navigate\\n\\t\\t\\t\\t\\t\\t\\t\\tthe application process, ultimately helping me achieve my professional pursuits.\\n\\t\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"testimonial__name\\"><h3>Mahdi Daraji</h3></div>\\n\\t\\t\\t\\t\\t\\t<span class=\\"testimonial__specialty\\">Student</span>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"swiper-slide\\">\\n\\t\\t\\t\\t<div class=\\"testimonial__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"testimonial__avatar\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"./assets/eya.jpg\\" alt=\\"\\" srcset=\\"\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"testimonial__content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"testimonial__description\\">\\n\\t\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\t\\tSince childhood, I have nurtured the dream of studying in the United States, and\\n\\t\\t\\t\\t\\t\\t\\t\\tthanks to Educa Us, I was able to realize that dream.\\n\\t\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"testimonial__name\\"><h3>Aya Trabelsi</h3></div>\\n\\t\\t\\t\\t\\t\\t<span class=\\"testimonial__specialty\\">Student</span>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"swiper-pagination\\" />\\n\\n\\t\\t<!-- <div class=\\"swiper-button-prev\\"></div>\\n\\t\\t\\t<div class=\\"swiper-button-next\\"></div> -->\\n\\t</div>\\n</section>\\n\\n<section class=\\"blog\\">\\n\\t<h1>Our Blog</h1>\\n\\n\\t<h2>Latest Articles</h2>\\n\\t<!-- <ArticlesList data=\\"\\" /> -->\\n</section>\\n\\n<style>\\n\\t@media (max-width: 1100px) {\\n\\t\\t.lottie2 {\\n\\t\\t\\tvisibility: hidden;\\n\\t\\t}\\n\\t}\\n\\t@media (max-width: 800px) {\\n\\t\\t.lottie {\\n\\t\\t\\tposition: absolute;\\n\\t\\t\\ttop: unset !important;\\n\\t\\t\\tbottom: 0 !important;\\n\\t\\t\\tleft: 0 !important;\\n\\t\\t\\tz-index: -1;\\n\\t\\t}\\n\\t}\\n\\t.lottie {\\n\\t\\tposition: absolute;\\n\\t\\tbottom: 0;\\n\\t\\tleft: 150px;\\n\\t\\tz-index: -1;\\n\\t}\\n\\t.lottie2 {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tright: 150px;\\n\\t\\tz-index: -1;\\n\\t\\ttransform: scaleX(-1);\\n\\t}\\n\\t.card {\\n\\t\\tflex: 1;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA2jBC,MAAO,YAAY,MAAM,CAAE,CAC1B,uBAAS,CACR,UAAU,CAAE,MACb,CACD,CACA,MAAO,YAAY,KAAK,CAAE,CACzB,sBAAQ,CACP,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,KAAK,CAAC,UAAU,CACrB,MAAM,CAAE,CAAC,CAAC,UAAU,CACpB,IAAI,CAAE,CAAC,CAAC,UAAU,CAClB,OAAO,CAAE,EACV,CACD,CACA,sBAAQ,CACP,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,KAAK,CACX,OAAO,CAAE,EACV,CACA,uBAAS,CACR,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,EAAE,CACX,SAAS,CAAE,OAAO,EAAE,CACrB,CACA,oBAAM,CACL,IAAI,CAAE,CACP"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<head data-svelte-h="svelte-11sk2c9"><meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Educa US - Study in the USA</title></head> <section class="hero"><div class="content_wrapper"> ${validate_component(ComponentX, "ComponentX").$$render($$result, {}, {}, {})} <div class="swiper hero__slider" data-svelte-h="svelte-14af6lg"><div class="swiper-wrapper"><div class="swiper-slide"><picture><img src="./assets/img2.webp" alt="" srcset=""> </picture></div> <div class="swiper-slide"><picture><img src="./assets/img1.webp" alt="" srcset=""> </picture></div> <div class="swiper-slide"><picture><img src="./assets/img3.webp" alt="" srcset=""> </picture></div> <div class="swiper-slide"><picture><img src="./assets/img4.webp" alt="" srcset=""> </picture></div></div></div></div></section>  <div class="offer_wrapper" data-svelte-h="svelte-rubs8u"><section class="offer container"><img class="circles" src="./assets/circles.png" alt="" srcset=""> <img class="circles_var" src="./assets/circles_variant.png" alt="" srcset=""> <div class="left"><header><h1>What We Offer</h1> <p>At Educa US, we take immense pride in offering a comprehensive range of services and
					unwavering support to make your study abroad dreams a reality.</p></header> <div class="offers"><div class="offer__card"><div class="offer__avatar"><i class="fa-graduation-cap fa-solid fa-xl"></i></div> <div class="offer__content"><h3>Academic Coursework</h3> <p>Empowering Minds, Shaping Futures - Unlocking a World of Knowledge and Inspiring
							Academic Excellence</p></div></div> <div class="offer__card"><div class="offer__avatar"><i class="fa-cable-car fa-solid fa-xl"></i></div> <div class="offer__content"><h3>Logistics</h3> <p>Seamless Transitions, Stress-Free Arrangements - Ensuring Every Detail, So You Can
							Focus on Your Journey</p></div></div> <div class="offer__card"><div class="offer__avatar"><i class="fa-project-diagram fa-solid fa-xl"></i></div> <div class="offer__content"><h3>Coordination</h3> <p>Your Journey, Our Precision - Expertly Orchestrating Your Study Abroad Adventure for
							Optimal Success</p></div></div> <div class="offer__card"><div class="offer__avatar"><i class="fa-file-invoice fa-solid fa-xl"></i></div> <div class="offer__content"><h3>Visa Process</h3> <p>Guiding Your Path to Success - Navigating the Visa Maze with Professional Expertise
							and Support</p></div></div> <div class="offer__card"><div class="offer__avatar"><i class="fa-shield fa-solid fa-xl"></i></div> <div class="offer__content"><h3>Safety</h3> <p>A Secure Haven for Your Dreams - Prioritizing Your Safety and Well-Being Throughout
							Your Experience</p></div></div> <div class="offer__card"><div class="offer__avatar"><i class="fa-university fa-solid fa-xl"></i></div> <div class="offer__content"><h3>Best universities</h3> <p>Unlocking Excellence, Embracing Brilliance - Discovering Top-Ranked Institutions and
							Limitless Possibilities</p></div></div></div></div> <div class="right"><video class="video" style="object-fit: contain; max-width:100% max-height:100%" src="./assets/video.mp4" loop muted autoplay controls></video> </div></section></div> <section class="stats"><div class="custom-shape-divider-top" data-svelte-h="svelte-1xhchh4"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path></svg></div> <section><div id="lightgallery" class="lightgallery">${each(Array(12), (_, idx) => {
    return `<a href="${"./gallery/" + escape(idx, true) + ".webp"}" data-src="${"./gallery/" + escape(idx, true) + ".webp"}" style="width: 200px;" data-svelte-h="svelte-8jkfos"><img width="200" height="200" alt="${"image " + escape(idx, true)}" src="${"./gallery/" + escape(idx, true) + ".webp"}" data-src="${"./gallery/" + escape(idx, true) + ".webp"}" loading="lazy"> </a>`;
  })}</div></section> <div class="card svelte-1ol8zur" data-svelte-h="svelte-ztgjzk"><div class="stats__content"> <div class="content__text container"><div class="content__title"><h1>We design your best program</h1> <p>Our team makes sure, that every student gets the best program that fits his direction.</p> <p>Through personalized academic guidance, we assist students in finding the ideal
						institutions that align with their aspirations and career goals.</p></div></div> <div class="container stats__list"><div class="stats__card"><h2>700+</h2> <p>Students in USA</p></div> <div class="stats__card"><h2>#1</h2> <p>Agency in Tunisia</p></div> <div class="stats__card"><h2>96%</h2> <p>Visa Approval Rate</p></div> <div class="stats__card"><h2>30+</h2> <p>universities</p></div></div></div></div></section> <section class="testimonials" data-svelte-h="svelte-1ilkqmj"><header><h1>Our students say about us</h1> <h3>Stories of Success with Educa US</h3></header> <div class="lottie svelte-1ol8zur"><lottie-player autoplay ${""} loop mode="normal" src="../Advertising.json" style="width: 160px"></lottie-player></div> <div class="lottie2 svelte-1ol8zur"><lottie-player autoplay ${""} loop mode="normal" src="../Advertising.json" style="width: 160px"></lottie-player></div> <div class="swiper testimonials__slider"><div class="swiper-wrapper testimonials__list"><div class="swiper-slide"><div class="testimonial__card"><div class="testimonial__avatar"><img src="./assets/siwar.jpg" alt="" srcset=""></div> <div class="testimonial__content"><div class="testimonial__description"><p>With the guidance and assistance of Educa US, I was able to successfully pursue my
								studies in IT and obtain a visa to study in the United States.</p></div> <div class="testimonial__name"><h3>Siwar Ben Khlifa</h3></div> <span class="testimonial__specialty">Student</span></div></div></div> <div class="swiper-slide"><div class="testimonial__card"><div class="testimonial__avatar"><img src="./assets/walid.jpg" alt="" srcset=""></div> <div class="testimonial__content"><div class="testimonial__description"><p>With the right resources and support from EducaUS, I can navigate my differences and
								find a path that aligns with my goals and aspirations</p></div> <div class="testimonial__name"><h3>Walid Ferjani</h3></div> <span class="testimonial__specialty">Student</span></div></div></div> <div class="swiper-slide"><div class="testimonial__card"><div class="testimonial__avatar"><img src="./assets/mahdi.jpg" alt="" srcset=""></div> <div class="testimonial__content"><div class="testimonial__description"><p>Educa US offered expert guidance to help me choose the right college and navigate
								the application process, ultimately helping me achieve my professional pursuits.</p></div> <div class="testimonial__name"><h3>Mahdi Daraji</h3></div> <span class="testimonial__specialty">Student</span></div></div></div> <div class="swiper-slide"><div class="testimonial__card"><div class="testimonial__avatar"><img src="./assets/eya.jpg" alt="" srcset=""></div> <div class="testimonial__content"><div class="testimonial__description"><p>Since childhood, I have nurtured the dream of studying in the United States, and
								thanks to Educa Us, I was able to realize that dream.</p></div> <div class="testimonial__name"><h3>Aya Trabelsi</h3></div> <span class="testimonial__specialty">Student</span></div></div></div></div> <div class="swiper-pagination"></div> </div></section> <section class="blog" data-svelte-h="svelte-3okcho"><h1>Our Blog</h1> <h2>Latest Articles</h2>  </section>`;
});
export {
  Page as default
};