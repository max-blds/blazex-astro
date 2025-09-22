globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_C4_Pur0B.mjs';
import { $ as $$Base, m as markdownify } from '../chunks/Base_Cv2x7S9T.mjs';
import { g as getSinglePage } from '../chunks/contentParser_B98Rl3p7.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_DEpEAuwF.mjs';
import { r as renderEntry, g as getEntry } from '../chunks/_astro_content_DZbihLL0.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_xLXolORG.mjs';

const $$Astro = createAstro("http://conversioncollective.io/");
async function getStaticPaths() {
  const COLLECTION_FOLDER = "pages";
  const pages = await getSinglePage(COLLECTION_FOLDER);
  const paths = pages.map((page) => ({
    params: {
      regular: page.id
    },
    props: { page }
  }));
  return paths;
}
const $$regular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$regular;
  const { page } = Astro2.props;
  const { title, meta_title, description, badge, image, button } = page.data;
  const { Content } = await renderEntry(page);
  const cta = await getEntry(
    "ctaSection",
    "call-to-action"
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container mt-8 mb-20"> <div class="max-w-2xl mx-auto text-center"> ${badge && renderTemplate`<p class="pb-6 text-tertiary capitalize text-lg " data-aos="fade-up-sm">${unescapeHTML(markdownify(badge))}</p>`} <h1 class="pb-4" data-aos="fade-up-sm">${unescapeHTML(markdownify(title))}</h1> ${button?.enable && renderTemplate`<a${addAttribute(button?.link, "href")} class="btn btn-primary" data-aos="fade-up-sm"> ${button?.label} </a>`} </div> </div> <div class="container"> <div class="max-w-7xl mx-auto bg-theme-light rounded-xl p-7 lg:p-28" data-aos="fade-up-sm"> <div class="row justify-center"> <div class="lg:col-10"> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </div> </div> </section> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "cta": cta.data })} ` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/[regular].astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/[regular].astro";
const $$url = "/[regular]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$regular,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
