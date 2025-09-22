globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                        */
import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, u as unescapeHTML, d as renderTemplate, b as addAttribute } from '../../chunks/astro/server_C4_Pur0B.mjs';
import { m as markdownify, $ as $$Base } from '../../chunks/Base_Cv2x7S9T.mjs';
import { g as getEntry } from '../../chunks/_astro_content_DZbihLL0.mjs';
import { B as Button } from '../../chunks/Button_BE6d5F1P.mjs';
import { $ as $$Icon } from '../../chunks/Icon_DKrytrJi.mjs';
import { T as TiTick } from '../../chunks/index_CDY-jdPo.mjs';
import { $ as $$ImageMod } from '../../chunks/ImageMod_CzKyW-a_.mjs';
import { $ as $$Icon$1 } from '../../chunks/Icon_BXejh7VW.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_DEpEAuwF.mjs';
import { $ as $$Review } from '../../chunks/Review_BhjIXS4v.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_xLXolORG.mjs';

const $$Astro$5 = createAstro("http://conversioncollective.io/");
const $$Section1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Section1;
  const { section_1 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section pt-6 md:pt-10" data-aos="fade-up-sm"> <div class="container"> <div class="row max-lg:gy-5 items-stretch"> <div class="col-12 lg:col-6" data-aos="fade-right-sm"> <div class="relative"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": section_1.image, "alt": "about", "width": 609, "height": 636, "class": "h-full mx-auto" })} <div class="absolute bottom-6 left-8 md:left-24 lg:left-10 flex flex-col gap-1.5"> ${section_1.highlights.map((item) => renderTemplate`<div class="flex items-center mb-1 last:mb-0 bg-light w-fit rounded-full px-3 py-1"> ${renderComponent($$result, "TiTick", TiTick, { "className": "text-light bg-tertiary rounded-full mr-2 text-base max-lg:text-[10px]" })} <p class="text-base max-lg:text-xs">${unescapeHTML(markdownify(item))}</p> </div>`)} </div> </div> </div> <div class="col-12 lg:col-6" data-aos="fade-left-sm"> <div class="flex flex-col gap-4 lg:gap-6"> <div> <h2 class="mb-4 max-xl:h3 max-lg:text-center">${unescapeHTML(markdownify(section_1.title))}</h2> <p class="mb-2 md:mb-3 max-lg:text-center text-text/70">${unescapeHTML(markdownify(section_1.content))}</p> </div> <div> ${section_1.features.map((item) => renderTemplate`<div class="flex items-center mb-3 last:mb-0 bg-light w-fit rounded-full px-3 py-1"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tick", "class": "text-tertiary mr-3 text-base" })} <p class="text-lg">${unescapeHTML(markdownify(item))}</p> </div>`)} ${section_1.button.enable && renderTemplate`${renderComponent($$result, "Button", Button, { "label": section_1.button.label, "link": section_1.button.link, "className": "mt-4 lg:mt-6" })}`} </div> </div> </div> </div> </div> </section>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/services/Section1.astro", void 0);

const $$Astro$4 = createAstro("http://conversioncollective.io/");
const $$Section2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Section2;
  const { section_2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section pt-0" data-aos="fade-up-sm"> <div class="container"> <div class="row max-lg:gy-5 items-stretch"> <div class="col-12 lg:col-6 order-2 lg:order-1" data-aos="fade-right-sm"> <div class="flex flex-col justify-between h-full"> <div> <p class="mb-4 max-lg:text-center text-tertiary">${unescapeHTML(markdownify(section_2.badge))}</p> <h2 class="mb-4 max-xl:h3 max-lg:text-center">${unescapeHTML(markdownify(section_2.title))}</h2> <p class="mb-4 max-lg:text-center text-text/70">${unescapeHTML(markdownify(section_2.content))}</p> </div> <div> ${section_2.features.map((item) => renderTemplate`<div class="flex items-center mb-4 last:mb-0 bg-light w-fit rounded-full p-3 py-1"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tick", "class": "text-tertiary mr-3 text-lg" })} <p class="text-xl">${unescapeHTML(markdownify(item))}</p> </div>`)} ${section_2.button.enable && renderTemplate`${renderComponent($$result, "Button", Button, { "label": section_2.button.label, "link": section_2.button.link, "className": "mt-6 lg:mt-10" })}`} </div> </div> </div> <div class="col-12 lg:col-6 order-1 lg:order-2" data-aos="fade-left-sm"> ${(() => {
    const noBg = typeof section_2?.image_1 === "string" && section_2.image_1.includes("creative2.png");
    return renderTemplate`<div${addAttribute(`relative h-full rounded-lg ${noBg ? "" : "bg-tertiary"}`, "class")}> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": section_2.image_1, "alt": "about", "width": 0, "height": 0, "class": "h-full mx-auto" })} ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": section_2.image_2, "alt": "about", "width": 462, "height": 236, "class": "hidden md:block absolute bottom-0 left-0 transform translate-x-[-10%] translate-y-[10%]" })} </div>`;
  })()} </div> </div> </div> </section>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/services/Section2.astro", void 0);

const $$Astro$3 = createAstro("http://conversioncollective.io/");
const $$Section3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Section3;
  const { section_3 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-theme-light rounded-lg px-10 pt-10 w-fit" data-aos="fade-up-sm"> <div class="flex items-center justify-between mb-6"> <h4 class="max-xl:h5 text-center text-balance" data-aos="fade-up-sm">${unescapeHTML(markdownify(section_3.title))}</h4> <div class="bg-accent rounded-full p-3"> ${renderComponent($$result, "Icon", $$Icon$1, { "name": "workflow", "class": "w-6 h-6 text-primary" })} </div> </div> <p class="text-balance mb-12 text-lg" data-aos="fade-up-sm">${unescapeHTML(markdownify(section_3.content))}</p> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": section_3.image, "alt": section_3.title, "width": 438, "height": 206, "data-aos": "fade-up-sm" })} </div>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/services/Section3.astro", void 0);

const $$Astro$2 = createAstro("http://conversioncollective.io/");
const $$Section4 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Section4;
  const { section_4 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-theme-light rounded-lg px-10 pt-10" data-aos="fade-up-sm"> <div class="flex items-center justify-between mb-6"> <h4 class="max-xl:h5 text-center text-balance" data-aos="fade-up-sm">${unescapeHTML(markdownify(section_4.title))}</h4> <div class="bg-accent rounded-full p-3"> ${renderComponent($$result, "Icon", $$Icon$1, { "name": "workflow", "class": "w-6 h-6" })} </div> </div> <p class="text-balance text-lg mb-6" data-aos="fade-up-sm">${unescapeHTML(markdownify(section_4.content))}</p> <div class="flex gap-4" data-aos="fade-up-sm"> <div class="flex-1 min-h-[209px]"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "class": "object-contain w-full h-full", "src": section_4.image_1, "alt": section_4.title, "width": 623, "height": 209 })} </div> <div class="min-h-[209px]"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "class": "object-contain w-full h-full", "src": section_4.image_2, "alt": section_4.title, "width": 222, "height": 209 })} </div> </div> </div>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/services/Section4.astro", void 0);

const $$Astro$1 = createAstro("http://conversioncollective.io/");
const $$Section5 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section5;
  const { section_5 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-theme-light rounded-lg p-10 flex flex-col lg:flex-row" data-aos="fade-up-sm"> <div class="w-full lg:w-1/2 flex flex-col lg:flex-col lg:justify-around max-lg:mb-6" data-aos="fade-right-sm"> <div class="bg-accent rounded-full p-3 w-fit"> ${renderComponent($$result, "Icon", $$Icon$1, { "name": "code", "class": "w-6 h-6" })} </div> <h4 class="max-xl:h5 max-lg:mb-6" data-aos="fade-up-sm">${unescapeHTML(markdownify(section_5.title))}</h4> <p class="text-balance text-lg">${unescapeHTML(markdownify(section_5.content))}</p> ${section_5.highlights && renderTemplate`<div class="mt-5"> ${section_5.highlights.map((item) => renderTemplate`<div class="flex items-center mb-3 last:mb-0"> ${renderComponent($$result, "Icon", $$Icon$1, { "name": "tick", "class": "text-tertiary mr-3 text-lg" })} <p class="text-xl">${unescapeHTML(markdownify(item))}</p> </div>`)} </div>`} </div> <div class="w-full lg:w-1/2" data-aos="fade-left-sm"> <div> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": section_5.image, "alt": section_5.title, "width": 574, "height": 346 })} </div> </div> </div>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/services/Section5.astro", void 0);

const $$Astro = createAstro("http://conversioncollective.io/");
const $$service = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$service;
  const { service } = Astro2.params;
  const serviceEntry = service ? await getEntry("services", service) : null;
  if (!serviceEntry || !serviceEntry.data) {
    return Astro2.redirect("/404");
  }
  const { data } = serviceEntry;
  const call_to_action = await getEntry("ctaSection", "call-to-action");
  const { title } = data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": data.title, "meta_title": data.meta_title, "description": data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pb-0" data-aos="fade-up-sm"> <div class="container"> <h1 class="pb-4 max-xl:h2 text-center" data-aos="fade-up-sm">${unescapeHTML(markdownify(data.hero.title))}</h1> <p class="pb-8 text-balance text-center text-text/70" data-aos="fade-up-sm">${unescapeHTML(markdownify(data.hero.content))}</p> </div> </section> ${renderComponent($$result2, "Section1", $$Section1, { "section_1": data.section_1 })} ${renderComponent($$result2, "Section2", $$Section2, { "section_2": data.section_2 })} ${(data.section_3 || data.section_4 || data.section_5) && renderTemplate`<section class="section"> <div class="container"> <div class="row g-4"> ${data.section_3 && renderTemplate`<div class="col-12 lg:col-5"> ${renderComponent($$result2, "Section3", $$Section3, { "section_3": data.section_3 })} </div>`} ${data.section_4 && renderTemplate`<div class="col-12 lg:col-7"> ${renderComponent($$result2, "Section4", $$Section4, { "section_4": data.section_4 })} </div>`} ${data.section_5 && renderTemplate`<div class="col-12"> ${renderComponent($$result2, "Section5", $$Section5, { "section_5": data.section_5 })} </div>`} </div> </div> </section>`}${data.review && renderTemplate`<section class="section pt-0"> <div class="container"> <div class="row max-lg:justify-center items-end mb-16"> <div class="col-12 lg:col-7"> <h2 class="max-xl:h3 max-lg:text-center">${unescapeHTML(markdownify(data.review.title))}</h2> </div> <div class="col-12 lg:col-5"> <p class="text-xl text-text/70 max-lg:text-center">${unescapeHTML(markdownify(data.review.content))}</p> </div> </div> ${renderComponent($$result2, "Review", $$Review, {})} <div class="mt-10 text-center"> ${renderComponent($$result2, "Button", Button, { "label": data.review.title, "link": "/claim-creative-test-drive", "className": "mx-auto" })} </div> </div> </section>`}${call_to_action?.data && renderTemplate`${renderComponent($$result2, "CallToAction", $$CallToAction, { "cta": call_to_action.data })}`}` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/services/[service].astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/services/[service].astro";
const $$url = "/services/[service]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$service,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
