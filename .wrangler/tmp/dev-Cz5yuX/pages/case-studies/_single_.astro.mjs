globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                        */
import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C4_Pur0B.mjs';
import { $ as $$CaseCard } from '../../chunks/CaseCard_CyOowykO.mjs';
import { $ as $$Base } from '../../chunks/Base_Cv2x7S9T.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_DEpEAuwF.mjs';
import { a as getCollection, g as getEntry } from '../../chunks/_astro_content_DZbihLL0.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_xLXolORG.mjs';

const $$Astro = createAstro("http://conversioncollective.io/");
async function getStaticPaths() {
  const caseStudies = await getCollection("case-studies");
  return caseStudies.filter((entry) => !entry.id.endsWith("-index.md")).map((entry) => ({
    params: {
      single: entry.id.replace(/^case-studies\//, "").replace(/\.md$/, "")
    },
    props: { entry }
  }));
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  const allCases = await getCollection("case-studies");
  const filteredCases = allCases.filter((post) => !post.id.endsWith("-index.md")).map((post) => ({
    ...post,
    slug: post.id.replace(/^case-studies\//, "").replace(/\.md$/, "")
  }));
  const call_to_action = await getEntry("ctaSection", "call-to-action");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": entry.data.title, "description": entry.data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section" data-aos="fade-up-sm"> <div class="container"> ${renderComponent($$result2, "CaseCard", $$CaseCard, { "caseItem": {
    ...entry,
    slug: entry.id.replace(/^case-studies\//, "").replace(/\.md$/, "")
  } })} <article class="bg-theme-light px-14 py-8 lg:px-52 lg:py-24 rounded-2xl" data-aos="fade-up-sm" data-aos-delay="100"> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> </div> </section> <section class="section pt-0" data-aos="fade-up-sm" data-aos-delay="200"> <div class="container"> <h4>Check Next Story</h4> ${filteredCases.length > 1 && renderTemplate`${renderComponent($$result2, "CaseCard", $$CaseCard, { "caseItem": filteredCases[1], "color": "bg-tertiary" })}`} </div> </section> ${call_to_action?.data && renderTemplate`${renderComponent($$result2, "CallToAction", $$CallToAction, { "cta": call_to_action.data })}`}` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/case-studies/[single].astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/case-studies/[single].astro";
const $$url = "/case-studies/[single]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
