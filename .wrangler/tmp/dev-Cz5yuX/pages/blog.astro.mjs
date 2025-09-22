globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                     */
import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_C4_Pur0B.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_BoCJvpIh.mjs';
import { c as config, $ as $$Base, m as markdownify } from '../chunks/Base_Cv2x7S9T.mjs';
import { g as getSinglePage } from '../chunks/contentParser_B98Rl3p7.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_DEpEAuwF.mjs';
import { g as getEntry } from '../chunks/_astro_content_DZbihLL0.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_xLXolORG.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { blog_folder } = config.settings;
  const blogIndex = await getEntry(
    blog_folder,
    "-index"
  );
  const blogs = await getSinglePage(blog_folder);
  const call_to_action = await getEntry(
    "ctaSection",
    "call-to-action"
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "blog", "meta_title": "blog", "description": "description" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="mx-auto text-center"> <h1 class="pb-4" data-aos="fade-up-sm">${unescapeHTML(markdownify(blogIndex.data.title))}</h1> <p class="pb-8 text-balance text-text/70" data-aos="fade-up-sm">${unescapeHTML(markdownify(blogIndex.data.description))}</p> </div> </div> </section> <section class="section pt-0"> <div class="container"> <div class="row g-5"> ${blogs.map((blog, i) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "blog": blog, "index": i })}`)} </div> </div> </section> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "cta": call_to_action.data })} ` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/blog/index.astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
