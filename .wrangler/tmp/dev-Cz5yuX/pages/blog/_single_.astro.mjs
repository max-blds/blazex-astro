globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                        */
import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_C4_Pur0B.mjs';
import { $ as $$BlogCard } from '../../chunks/BlogCard_BoCJvpIh.mjs';
import { $ as $$ImageMod } from '../../chunks/ImageMod_CzKyW-a_.mjs';
import { $ as $$Base, c as config, m as markdownify } from '../../chunks/Base_Cv2x7S9T.mjs';
import { g as getSinglePage } from '../../chunks/contentParser_B98Rl3p7.mjs';
import { d as dateFormat } from '../../chunks/dateFormat_DfYqZ57z.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_DEpEAuwF.mjs';
import { g as getEntry, r as renderEntry } from '../../chunks/_astro_content_DZbihLL0.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_xLXolORG.mjs';

const $$Astro = createAstro("http://conversioncollective.io/");
async function getStaticPaths() {
  const { blog_folder } = config.settings;
  const allBlogs = await getSinglePage(blog_folder);
  const paths = allBlogs.map((blog) => ({
    params: {
      single: blog.id
    },
    props: { blog }
  }));
  return paths;
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const { blog_folder } = config.settings;
  const allBlogs = await getSinglePage(blog_folder);
  const call_to_action = await getEntry(
    "ctaSection",
    "call-to-action"
  );
  const { blog } = Astro2.props;
  const { title, meta_title, description, image, date } = blog.data;
  const { Content } = await renderEntry(blog);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "meta_title": meta_title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> ${date && renderTemplate`<p class="text-tertiary text-center mb-6 text-lg" data-aos="fade-up-sm"> ${dateFormat(date)} </p>`} <h1 class="text-center max-xl:h2 text-balance mb-20" data-aos="fade-up-sm">${unescapeHTML(markdownify(title))}</h1> <div data-aos="fade-up-sm"> ${renderComponent($$result2, "ImageMod", $$ImageMod, { "src": image, "alt": image, "width": 1256, "height": 719, "class": "w-full aspect-video object-cover rounded-xl mb-11" })} </div> <article class="bg-theme-light px-14 py-8 lg:px-52 lg:py-24 rounded-2xl" data-aos="fade-up-sm"> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> </div> </section> <section class="section pt-0"> <div class="container"> <h4 class="mb-11" data-aos="fade-up-sm">Read more articles</h4> <div class="row g-5"> ${allBlogs.slice(0, 2).map((blog2, i) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "blog": blog2, "index": i })}`)} </div> </div> </section> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "cta": call_to_action.data })} ` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/blog/[single].astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/blog/[single].astro";
const $$url = "/blog/[single]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
