globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                     */
import { c as createAstro, a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderComponent, d as renderTemplate, b as addAttribute } from '../chunks/astro/server_C4_Pur0B.mjs';
import { m as markdownify, $ as $$Base } from '../chunks/Base_Cv2x7S9T.mjs';
import { $ as $$CustomButton } from '../chunks/CustomButton_Cf6JEBhA.mjs';
import { $ as $$ImageMod } from '../chunks/ImageMod_CzKyW-a_.mjs';
import { F as FaStar } from '../chunks/index_BF9Aug5q.mjs';
import { $ as $$Brand } from '../chunks/Brand_9x2lIQ6Q.mjs';
import { g as getEntry } from '../chunks/_astro_content_DZbihLL0.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_xLXolORG.mjs';

const $$Astro$2 = createAstro("http://conversioncollective.io/");
const $$AboutCta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AboutCta;
  const { call_to_action } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container"> <div class="px-5 py-10 lg:py-32 bg-theme-light rounded-xl"> <div class="row justify-center"> <div class="col-12 col-lg-10 text-center"> <h2 class="pb-4 max-xl:h3" data-aos="fade-up-sm">${unescapeHTML(markdownify(call_to_action.title))}</h2> <p class="pb-8 text-dark/60" data-aos="fade-up-sm">${unescapeHTML(markdownify(call_to_action.description))}</p> ${call_to_action.button && renderTemplate`${renderComponent($$result, "CustomButton", $$CustomButton, { "link": call_to_action.button.link, "label": call_to_action.button.label, "class": "btn btn-primary" })}`} </div> </div> </div> </div>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/about/AboutCta.astro", void 0);

const $$Astro$1 = createAstro("http://conversioncollective.io/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { hero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row justify-center text-center gy-4 mb-16"> <div class="col-12" data-aos="fade-up-sm"> <p class="text-secondary text-lg">${unescapeHTML(markdownify(hero.badge))}</p> </div> <div class="col-12" data-aos="fade-up-sm"> <h1 class="max-xl:h2 text-balance">${unescapeHTML(markdownify(hero.title))}</h1> </div> <div class="col-12" data-aos="fade-up-sm"> <p class="text-balance text-">${unescapeHTML(markdownify(hero.content))}</p> </div> </div> <div class="lg:max-w-[857px] mx-auto"> <div class="flex flex-col md:flex-row justify-center md:items-stretch gap-6"> ${hero.achievement.map((a, index) => renderTemplate`<div class="md:w-1/2  bg-theme-light rounded-2xl px-9 md:px-3 lg:px-9 py-10 md:py-5 lg:py-10" data-aos="fade-up-sm"${addAttribute(`${100 + index * 50}`, "data-aos-delay")}> <div class="flex items-center"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": a.icon, "alt": a.icon, "width": 60, "height": 0, "class": "mr-4" })} <p class="font-medium lg:text-balance leading-6 text-base lg:text-lg">${unescapeHTML(markdownify(a.details))}</p> </div> </div>`)} </div> </div> </div> </section>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/about/Hero.astro", void 0);

const $$Astro = createAstro("http://conversioncollective.io/");
const $$Offering = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Offering;
  const { offering } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section p-0" data-aos="fade-up-sm"> <div class="container"> <h5 class="text-center max-xl:h6 mx-auto max-w-[951px] xl:mb-[96px] mb-8" data-aos="fade-up-sm">${unescapeHTML(markdownify(offering.title))}</h5> <div class="row gx-4 max-lg:gy-4 justify-center"> <div class="lg:col-4 col-12" data-aos="fade-up-sm" data-aos-delay="50"> <div class="flex flex-col md:flex-row lg:flex-col h-full justify-between items-center max-lg:gap-x-4 max-lg:gap-y-4 lg:gap-y-6"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": offering.offers[0].image, "alt": offering.offers[0].image, "width": 454, "height": 571, "class": "w-full md:w-1/2 lg:w-full rounded-xl" })} <div class="bg-accent p-9 rounded-xl md:flex-grow w-full md:w-1/2 lg:w-full max-lg:h-full"> <h6 class="mb-2">${unescapeHTML(markdownify(offering.offers[3].title))}</h6> <p class="text-xl mb-24">${unescapeHTML(markdownify(offering.offers[3].content))}</p> <h2 class="lg:text-7xl xl:text-9xl">${unescapeHTML(markdownify(offering.offers[3].data))}</h2> <p>${unescapeHTML(markdownify("Total active user"))}</p> </div> </div> </div> <!-- right --> <div class="lg:col-8 col-12"> <div class="flex flex-col gap-6"> <div class="flex flex-col md:flex-row w-full gap-4 lg:gap-6"> <div class="w-full md:w-1/2" data-aos="fade-up-sm" data-aos-delay="100"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "class": "w-full rounded-xl", "src": offering.offers[1].image, "alt": offering.offers[1].image, "width": 354, "height": 401 })} </div> <div class="md:w-1/2 bg-text rounded-xl p-9" data-aos="fade-up-sm" data-aos-delay="150"> <div class="h-full flex flex-col justify-between"> <div> <div class="mb-8"> <h5 class="text-light text-xl lg:text-2xl mb-1">${unescapeHTML(markdownify("Impressive!"))}</h5> <div class="flex items-center"> ${renderComponent($$result, "FaStar", FaStar, { "className": "text-tertiary text-base mr-1" })} ${renderComponent($$result, "FaStar", FaStar, { "className": "text-tertiary text-base mr-1" })} ${renderComponent($$result, "FaStar", FaStar, { "className": "text-tertiary text-base mr-1" })} ${renderComponent($$result, "FaStar", FaStar, { "className": "text-tertiary text-base mr-1" })} ${renderComponent($$result, "FaStar", FaStar, { "className": "text-tertiary text-base" })} </div> </div> <p class="before:content-['“'] after:content-['”'] text-light text-sm lg:text-xl">${unescapeHTML(markdownify(offering.offers[2].quote))}</p> </div> <!-- review --> <div class="pt-6 max-md:mt-6 border-t-2 border-light/10 flex items-center justify-between"> <div class="flex items-center gap-x-3"> <div> ${renderComponent($$result, "ImageMod", $$ImageMod, { "class": "rounded-xl", "src": offering.offers[2].image, "alt": offering.offers[2].image, "width": 50, "height": 50 })} </div> <div> <p class="text-light text-sm lg:text-lg">${unescapeHTML(markdownify(offering.offers[2].author))}</p> <p class="text-light/70 font-normal text-sm lg:text-lg">${unescapeHTML(markdownify(offering.offers[2].role))}</p> </div> </div> <svg class="w-[43px] h-[35px] hidden lg:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.679 35"><g fill="#B3FC6A" clip-path="url(#svg506417314_420_clip0_8144_440)"><path d="M26.473 20.4 36.445 0h6.234v35H26.473zM0 20.4 9.97 0h6.235v35H0z"></path></g></svg> </div> </div> </div> </div> <div class="w-full" data-aos="fade-up-sm" data-aos-delay="200"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "class": "w-full object-cover rounded-xl", "src": "/images/about/offer-3.png", "alt": "offer-3", "width": 804, "height": 546 })} </div> </div> </div> </div> </div> </section>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/about/Offering.astro", void 0);

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const about = await getEntry("about", "-index");
  const {
    title,
    description,
    meta_title,
    image,
    hero,
    offering,
    call_to_action
  } = about.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "hero": hero })} ${renderComponent($$result2, "Offering", $$Offering, { "offering": offering })} ${renderComponent($$result2, "Brand", $$Brand, {})} ${renderComponent($$result2, "AboutCta", $$AboutCta, { "call_to_action": call_to_action })} ` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/about.astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
