globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                     */
import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_C4_Pur0B.mjs';
import { $ as $$Base, m as markdownify, c as config } from '../chunks/Base_Cv2x7S9T.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_DEpEAuwF.mjs';
import { $ as $$Icon } from '../chunks/Icon_DP3o1o_o.mjs';
import { g as getEntry } from '../chunks/_astro_content_DZbihLL0.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_xLXolORG.mjs';

const $$Demo = createComponent(async ($$result, $$props, $$slots) => {
  const { contact_form_action } = config.params;
  const demo = await getEntry("demo", "-index");
  const { title, description, meta_title, hero, feature } = demo.data;
  const cta = await getEntry("ctaSection", "call-to-action");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section" data-aos="fade-up-sm"> <div class="container"> <div data-aos="fade-up-sm" class="mb-16"> <h1 class="text-center max-xl:h2 mb-6">${unescapeHTML(markdownify(hero.title))}</h1> <p class="text-center text-balance">${unescapeHTML(markdownify(hero.content))}</p> </div> <div class="row items-end gy-5"> <div class="col-12 md:col-6" data-aos="fade-up-sm"> <div class="p-8 md:p-16 shadow-lg rounded-2xl"> <form${addAttribute(contact_form_action, "action")} method="POST"> <div class="row"> <div class="col-12"> <div class="mb-6"> <label for="f-name" class="form-label"> Your Name </label> <input id="f-name" name="f-name" class="form-input" placeholder="Enter your name" type="text" required> </div> </div> <div class="col-12"> <div class="mb-6"> <label for="f-email" class="form-label">Your Email</label> <input id="f-email" name="f-email" class="form-input" placeholder="Enter your email" type="email" required> </div> </div> <div class="col-12"> <div class="mb-6"> <label for="f-company" class="form-label">Your Company</label> <input id="f-company" name="f-company" class="form-input" placeholder="Enter your company" type="text" required> </div> </div> <div class="col-12"> <div class="mb-6"> <label for="cars" class="form-label">Choose a Option:</label> <select name="cars" id="cars" class="form-input"> <option value="option-1">Option 1</option> <option value="option-2">Option 2</option> <option value="option-3">Option 3</option> <option value="option-4">Option 4</option> </select> </div> </div> <div class="col"> <button type="submit" class="btn btn-primary w-full">
Send Message
</button> </div> </div> </form> </div> </div> <div class="col-12 md:col-6 pb-16" data-aos="fade-up-sm"> <h2 class="text-[20px] font-normal mb-12 text-balance">${unescapeHTML(markdownify(feature.title))}</h2> ${feature.features.map((feature2) => renderTemplate`<li class="flex items-center mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": feature2.icon, "class": "mr-3 text-[18px]" })} <p class="font-medium text-[18px]">${unescapeHTML(markdownify(feature2.name))}</p> </li>`)} </div> </div> </div> </section> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "cta": cta.data })} ` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/demo.astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/demo.astro";
const $$url = "/demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Demo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
