globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                     */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_C4_Pur0B.mjs';
import { $ as $$Base, m as markdownify } from '../chunks/Base_Cv2x7S9T.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_DEpEAuwF.mjs';
import { g as getEntry } from '../chunks/_astro_content_DZbihLL0.mjs';
import { B as Button } from '../chunks/Button_BE6d5F1P.mjs';
import { $ as $$ImageMod } from '../chunks/ImageMod_CzKyW-a_.mjs';
import { $ as $$Icon } from '../chunks/Icon_BXejh7VW.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_xLXolORG.mjs';

const $$Astro$1 = createAstro("http://conversioncollective.io/");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { service, i } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="col-12" data-aos="fade-up-sm"${addAttribute(`${i * 100}`, "data-aos-delay")}> <div${addAttribute(`row my-6 md:my-14 rounded-md overflow-hidden ${i === 0 && "mt-0"}  ${i === 0 ? "bg-tertiary" : i === 1 ? "bg-text text-light" : "bg-accent"}`, "class")}> <div class="col-12 lg:col-7 p-0 min-h-full order-2 lg:order-1"> <div class="flex flex-col justify-between h-full p-10 md:p-20"> <div> <p class="text-lg font-semibold mb-4">${service.badge}</p> <a${addAttribute(service.link, "href")} class="text-6xl font-bold"> ${service.title} </a> <p class="mt-4">${service.description}</p> </div> <div> <hr${addAttribute(`border-t mt-24 mb-9 ${i === 1 ? "border-border" : "border-dark"}`, "class")}> <ul class="mb-12"> ${service.highlights.map((highlight) => renderTemplate`<li class="mb-2 flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tick", "class": "text-primary mr-2" })} ${highlight} </li>`)} </ul> ${renderComponent($$result, "Button", Button, { "link": service.link, "label": "Learn More", "data-aos": "fade-up-sm", "data-aos-delay": "300" })} </div> </div> </div> <div class="col-12 lg:col-5 p-5 pb-0 md:p-0 order-1 lg:order-2"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": service.image, "alt": service.title, "width": 583, "height": 700, "format": "webp", "class": "object-cover size-full rounded-md md:rounded-none" })} </div> </div> </div>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/services/ServiceCard.astro", void 0);

const $$Astro = createAstro("http://conversioncollective.io/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const servicesIndex = await getEntry("services", "-index");
  if (!servicesIndex) {
    return Astro2.redirect("/404");
  }
  const { title, meta_title, description, hero, services } = servicesIndex.data;
  const call_to_action = await getEntry("ctaSection", "call-to-action");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="section pb-0"> <div class="container"> <div class="max-w-2xl mx-auto text-center"> <h1 class="pb-4">${unescapeHTML(markdownify(hero.title))}</h1> <p class="pb-8 text-balance">${unescapeHTML(markdownify(hero.content))}</p> </div> </div> </section>  <section class="section"> <div class="container"> ${services.map((service, i) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "service": service, "i": i })}`)} </div> </section> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "cta": call_to_action.data })} ` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/services/index.astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
