globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                     */
import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_C4_Pur0B.mjs';
import { $ as $$Brand } from '../chunks/Brand_9x2lIQ6Q.mjs';
import { $ as $$CaseCard } from '../chunks/CaseCard_CyOowykO.mjs';
import { $ as $$Base, m as markdownify } from '../chunks/Base_Cv2x7S9T.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_DEpEAuwF.mjs';
import { g as getEntry, a as getCollection } from '../chunks/_astro_content_DZbihLL0.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_xLXolORG.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const caseIndex = await getEntry("case-studies", "-index");
  const { title, description, hero } = caseIndex.data;
  const caseStudies = await getCollection("case-studies");
  const filteredCases = caseStudies.filter((entry) => !entry.id.endsWith("-index.md")).map((entry) => ({
    ...entry,
    slug: entry.id.replace(/^case-studies\//, "").replace(/\.md$/, "")
  }));
  const call_to_action = await getEntry(
    "ctaSection",
    "call-to-action"
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pb-0"> <div class="container"> <div class="max-w-2xl mx-auto text-center"> <h1 class="pb-4" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.title))}</h1> <p class="pb-8 text-balance" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.content))}</p> </div> </div> </section> ${renderComponent($$result2, "Brand", $$Brand, {})} <section class="section pt-0"> <div class="container"> <div class="row g-4"> ${filteredCases.map((caseItem, i) => renderTemplate`${renderComponent($$result2, "CaseCard", $$CaseCard, { "caseItem": caseItem, "i": i })}`)} </div> </div> </section> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "cta": call_to_action.data })} ` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/case-studies/index.astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/case-studies/index.astro";
const $$url = "/case-studies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
