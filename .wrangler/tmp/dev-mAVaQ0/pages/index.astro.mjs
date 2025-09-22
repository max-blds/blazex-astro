globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                     */
import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, u as unescapeHTML, d as renderTemplate, b as addAttribute, i as renderScript } from '../chunks/astro/server_C4_Pur0B.mjs';
import { m as markdownify, $ as $$Base } from '../chunks/Base_Cv2x7S9T.mjs';
import { T as TiTick } from '../chunks/index_CDY-jdPo.mjs';
import { $ as $$ImageMod } from '../chunks/ImageMod_CzKyW-a_.mjs';
import { C as Counter } from '../chunks/Counter_3GBt84mL.mjs';
import { G as GenIcon, F as FaStar } from '../chunks/index_BF9Aug5q.mjs';
import { $ as $$Icon } from '../chunks/Icon_BXejh7VW.mjs';
import { B as Button } from '../chunks/Button_BE6d5F1P.mjs';
import { $ as $$CustomButton } from '../chunks/CustomButton_Cf6JEBhA.mjs';
import { $ as $$Review } from '../chunks/Review_BhjIXS4v.mjs';
import { g as getEntry } from '../chunks/_astro_content_DZbihLL0.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_xLXolORG.mjs';

const $$Astro$5 = createAstro("http://conversioncollective.io/");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About;
  const { about } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row max-lg:gy-5 items-center"> <div class="col-12 lg:col-6"> <div class="relative" data-aos="fade-up-sm"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": about.image.image, "alt": "about", "width": 518, "height": 553, "class": "h-full max-lg:mx-auto" })} <div class="absolute bottom-10 left-24 lg:left-10 flex flex-col gap-2"> ${about.image.point.map((item) => renderTemplate`<div class="flex items-center mb-1 last:mb-0 bg-light w-fit rounded-full p-3 py-1"> ${renderComponent($$result, "TiTick", TiTick, { "className": "text-light bg-tertiary rounded-full mr-2 text-lg max-lg:text-xs" })} <p class="text-lg max-lg:text-xs">${unescapeHTML(markdownify(item))}</p> </div>`)} </div> </div> </div> <div class="col-12 lg:col-6"> <h2 class="mb-4 max-xl:h3 max-lg:text-center" data-aos="fade-up-sm">${unescapeHTML(markdownify(about.title))}</h2> <p class="mb-4 max-lg:text-center" data-aos="fade-up-sm">${unescapeHTML(markdownify(about.content_1))}</p> <p class="text-text/60 text-[20px] max-lg:text-center" data-aos="fade-up-sm">${unescapeHTML(markdownify(about.content_2))}</p> </div> </div> </div> </section> <section class="section pt-0"> <div class="container"> <div class="row max-lg:g-4 items-center justify-between"> ${about.achievements.map((a, i) => renderTemplate`<div class="col-12 md:col-6 lg:col-3 p-0"> <div class="flex items-center w-fit mx-auto gap-4" data-aos="fade-up-sm"${addAttribute(i * 100, "data-aos-delay")}> <h2 class="max-xl:h3 text-tertiary"> ${renderComponent($$result, "Counter", Counter, { "start": 0, "end": a.key, "suffix": a.suffix, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/functional-component/Counter", "client:component-export": "default" })} </h2> <p class="text-lg w-full max-w-[130px]">${unescapeHTML(markdownify(a.value))}</p> </div> </div>`)} </div> </div> </section>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/homepage/About.astro", void 0);

// THIS FILE IS AUTO GENERATED
function IoMdCheckmark (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"},"child":[]}]})(props);
}

const $$Astro$4 = createAstro("http://conversioncollective.io/");
const $$Feature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Feature;
  const { feature } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row max-xl:gy-4 justify-between items-center"> <div class="col-12 lg:col-6 max-lg:order-2"> <h2 class="mb-6 max-xl:h3 max-xl:text-balance lg:leading-[80px]" data-aos="fade-up-sm">${unescapeHTML(markdownify(feature.title))}</h2> <p class="mb-20 text-dark/70 text-balance" data-aos="fade-up-sm">${unescapeHTML(markdownify(feature.content))}</p> <ul> ${feature.points.map((p, index) => renderTemplate`<div class="flex items-center mb-4" data-aos="fade-up-sm"${addAttribute(100 + index * 50, "data-aos-delay")}> ${renderComponent($$result, "IoMdCheckmark", IoMdCheckmark, { "className": "text-tertiary mr-4 text-2xl" })} <li class="text-xl last:mb-0">${unescapeHTML(markdownify(p))}</li> </div>`)} </ul> </div> <div class="col-12 lg:col-6"> <div class="bg-theme-light/60 w-fit mx-auto rounded-xl" data-aos="zoom-in-sm"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": feature.image, "alt": "feature", "width": 600, "height": 0, "class": "p-6" })} </div> </div> </div> </div> </section> <section class="section pt-0"> <div class="container"> <div class="row max-lg:gy-5 items-center md:justify-between"> <div class="col-12 lg:col-5"> <div class="w-full h-full max-md:mb-8"> <div class="relative mx-auto bg-theme-light w-[164px] md:w-[264px] h-[200px] md:h-[330px]" style="border-radius: 252px 20px 20px;"> <div data-aos="zoom-in-sm" data-aos-delay="100"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": feature.action.image_1, "alt": "feature", "width": 0, "height": 250, "class": "shadow max-md:scale-[.75] absolute left-0 top-1/2 translate-y-[20%] translate-x-[-45%]" })} </div> <div data-aos="zoom-in-sm" data-aos-delay="200"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": feature.action.image_2, "alt": "feature", "width": 0, "height": 185, "class": "shadow max-md:scale-[.70] absolute top-0 right-0 translate-y-[-20%] md:translate-y-[-15%] translate-x-1/3" })} </div> <div data-aos="zoom-in-sm" data-aos-delay="300"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": feature.action.image_3, "alt": "feature", "width": 0, "height": 185, "class": "shadow max-md:scale-[.70] absolute right-0 bottom-0 translate-y-[160%] md:translate-y-[200%] translate-x-1/3" })} </div> </div> </div> </div> <div class="col-12 lg:col-7"> <h2 class="mb-16 max-xl:h3 max-lg:text-balance" data-aos="fade-up-sm">${unescapeHTML(markdownify(feature.action.title))}</h2> <div> ${renderComponent($$result, "Icon", $$Icon, { "name": "quote", "class": "mb-10 text-5xl", "data-aos": "fade-up-sm" })} <p class="before:content-['" '] after:content-['"'] mb-6 font-medium max-lg:text-balance" data-aos="fade-up-sm" data-aos-delay="100">${unescapeHTML(markdownify(feature.action.review.comment))}</p> <p class="mb-1 font-semibold text-xl" data-aos="fade-up-sm" data-aos-delay="200">${unescapeHTML(markdownify(feature.action.review.user))}</p> <p class="text-lg font-normal" data-aos="fade-up-sm" data-aos-delay="300">${unescapeHTML(markdownify(feature.action.review.designation))}</p> </div> </div> </div> </div> </section>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/homepage/Feature.astro", void 0);

const $$Astro$3 = createAstro("http://conversioncollective.io/");
const $$HomeCta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HomeCta;
  const { cta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-20 md:py-36 lg:pt-40 lg:pb-44 bg-secondary relative overflow-hidden before:bg-[url('/images/pattern.png')] before:bg-cover before:bg-no-repeat before:w-full before:h-full before:absolute before:z-[1] before:opacity-60 before:top-0 before:left-0"> <div class="container relative z-[2]"> <h2 class="text-center max-xl:h3 text-light mb-14" data-aos="fade-up-sm">${unescapeHTML(markdownify(cta.title))}</h2> <div class="flex flex-col md:flex-row justify-center items-center mb-10" data-aos="fade-up-sm"> ${cta.button_1.enable && renderTemplate`${renderComponent($$result, "CustomButton", $$CustomButton, { "link": cta.button_1.link, "label": cta.button_1.label, "variant": "primary" })}`} ${cta.button_2.enable && renderTemplate`${renderComponent($$result, "Button", Button, { "link": cta.button_2.link, "label": cta.button_2.label, "style": "outline", "className": "text-light" })}`} </div> </div> </section>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/homepage/HomeCta.astro", void 0);

const $$Astro$2 = createAstro("http://conversioncollective.io/");
const $$Integration = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Integration;
  const { integration } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <div class="container" data-aos="fade-up-sm" data-aos-delay="100"> <div class="px-0 overflow-hidden relative rounded-xl bg-[#181c39]"> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-[inherit] z-30"> <div class="flex flex-col justify-center"> <p class="text-xl md:text-3xl lg:text-5xl xl:text-6xl text-center text-light w-full mb-3 md:mb-7">${unescapeHTML(markdownify(integration.title))}</p> ${renderComponent($$result, "CustomButton", $$CustomButton, { "className": "mx-auto w-fit max-md:btn-sm", "label": integration.button.label, "link": integration.button.link })} </div> </div> <div class="before:bg-[url('/images/noise.png')] before:bg-cover before:bg-no-repeat before:w-full before:h-full before:absolute before:z-[1] before:opacity-40"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": integration.image, "alt": "integration", "width": 0, "height": 0, "class": "w-full h-full object-cover" })} </div> <div class="absolute bg-[#b3fc6a] aspect-[2.5/1] rounded-full bottom-[-347px] blur-[117px] h-[360px] left-[170px] rotate-[21deg] w-[71%] z-10"></div> <div class="absolute right-[-160px] top-[-450px] w-[1250px] h-[488px] bg-[#5868fb] opacity-60 rounded-full blur-[172px] rotate-[13deg] z-10"></div> </div> </div> </section>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/homepage/Integration.astro", void 0);

const $$Astro$1 = createAstro("http://conversioncollective.io/");
const $$Step = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Step;
  const { step } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section bg-secondary"> <div class="container"> <h2 class="text-center max-xl:h3 text-light mb-14" data-aos="fade-up-sm">${unescapeHTML(markdownify(step.title))}</h2> <div class="flex flex-col lg:flex-row border border-border rounded-lg mb-14"> ${step.steps.map((s, index) => renderTemplate`<div class="step-card" data-aos="fade-right-sm"${addAttribute(100 + index * 50, "data-aos-delay")}> <h4 class="text-2xl text-light mb-2">${unescapeHTML(markdownify(s.title))}</h4> <p class="text-lg text-light/70">${unescapeHTML(markdownify(s.description))}</p> </div>`)} </div> <h4 class="text-center text-balance mb-10 text-light" data-aos="fade-up-sm">${unescapeHTML(markdownify(step.start))}</h4> <div class="flex justify-center" data-aos="fade-up-sm"> ${step.button.enable && renderTemplate`${renderComponent($$result, "CustomButton", $$CustomButton, { "label": step.button.label, "link": step.button.link, "variant": "primary" })}`} </div> </div> </section>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/homepage/Step.astro", void 0);

const $$Astro = createAstro("http://conversioncollective.io/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { hero, brand } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section overflow-x-hidden relative lg:pt-[135px]"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": "/images/homepage/green-pattern.png", "alt": "green pattern", "width": 658, "height": 496, "class": "max-lg:hidden w-[35%] absolute top-o right-0 -translate-y-[40%]" })} <div class="container"> <div class="row max-lg:gy-5 items-stretch"> <div class="col-12 lg:col-7"> <h1 class="max-xl:h2 mb-6 max-lg:text-center" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.title))}</h1> <p class="mb-10 text-2xl max-lg:text-center" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.content))}</p> <div class="flex flex-col lg:flex-row items-center mb-10" data-aos="fade-up-sm"> ${hero.button_1.enable && renderTemplate`${renderComponent($$result, "CustomButton", $$CustomButton, { "link": hero.button_1.link, "label": hero.button_1.label })}`} ${hero.button_2.enable && renderTemplate`${renderComponent($$result, "Button", Button, { "link": hero.button_2.link, "label": hero.button_2.label, "style": "outline" })}`} </div> <div class="flex flex-col lg:flex-row items-center gap-[18px]"> <div class="w-fit" data-aos="fade-up-sm"> ${hero.client.images.map((client, i) => renderTemplate`${renderComponent($$result, "ImageMod", $$ImageMod, { "src": client, "alt": "client", "width": 65, "height": 65, "class": `profileImages ${i === 0 && "translate-x-0"} last:mr-[-60px]`, "style": {
    transform: `translateX(${-i * 20}px)`
  } })}`)} </div> <div> <div class="flex items-center" data-aos="fade-up-sm"> <h3 class="mr-2 text-secondary">${unescapeHTML(markdownify(hero.client.clients.rating))}</h3> ${(() => {
    const ratingString = hero.client.clients.rating || "0";
    const ratingNum = parseFloat(ratingString.split("/")[0]);
    const starCount = Math.min(Math.max(0, Math.ceil(ratingNum)), 5);
    return Array.from({ length: starCount }).map((_, i) => renderTemplate`${renderComponent($$result, "FaStar", FaStar, { "className": "text-yellow-400 mr-1" })}`);
  })()} </div> <p class="text-lg">${unescapeHTML(markdownify(hero.client.clients.user))}</p> </div> </div> </div> <div class="col-12 lg:col-5"> <div class="relative h-full" data-aos="fade-up-sm"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": hero.image, "alt": "hero", "width": 970, "height": 654, "class": "lg:absolute top-0 left-0 h-fit lg:min-w-max shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-xl lg:-translate-x-12" })} </div> </div> </div> </div> </section> <section class="section pt-[80px] max-lg:pt-0 pb-0"> <div class="container"> <div class="row items-center justify-between"> <div class="col-12 md:col-4"> <p class="max-lg:text-center max-lg:mb-7" data-aos="fade-right-sm">${unescapeHTML(markdownify(brand.title))}</p> </div> <div class="col-12 md:col-8"> <div style="mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)" class="swiper brand-slider" data-aos="fade-left-sm"> <div class="swiper-wrapper"> ${brand.logos.map((item) => renderTemplate`<div class="swiper-slide"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": item, "alt": "brand", "width": 300, "height": 76, "class": "w-auto h-[76px] object-contain grayscale opacity-30" })} </div>`)} </div> </div> </div> </div> </div> </section> ${renderScript($$result, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/homepage/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/homepage/Hero.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const homepage = await getEntry(
    "homepage",
    "-index"
  );
  const { hero, brand, about, step, feature, integration, review, cta } = homepage.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "hero": hero, "brand": brand })} ${renderComponent($$result2, "About", $$About, { "about": about })} ${renderComponent($$result2, "Step", $$Step, { "step": step })} ${renderComponent($$result2, "Feature", $$Feature, { "feature": feature })} ${renderComponent($$result2, "Integration", $$Integration, { "integration": integration })} ${maybeRenderHead()}<section class="section"> <div class="container"> <p class="text-tertiary text-xl lg:text-center mb-4" data-aos="fade-up-sm">${unescapeHTML(markdownify(review.badge))}</p> <h2 class="lg:text-center max-xl:h3 mb-16" data-aos="fade-up-sm">${unescapeHTML(markdownify(review.title))}</h2> ${renderComponent($$result2, "Review", $$Review, {})} </div> </section>  ${renderComponent($$result2, "HomeCta", $$HomeCta, { "cta": cta })} ` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/index.astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
