globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate } from './astro/server_C4_Pur0B.mjs';
import { c as config } from './Base_Cv2x7S9T.mjs';
import { d as dateFormat } from './dateFormat_DfYqZ57z.mjs';
import { $ as $$ImageMod } from './ImageMod_CzKyW-a_.mjs';

const $$Astro = createAstro("http://conversioncollective.io/");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { blog_folder } = config.settings;
  const { blog, index } = Astro2.props;
  const { title, image, date } = blog.data;
  return renderTemplate`${maybeRenderHead()}<div class="col-12 md:col-6"> <div class="relative h-fit group hover:cursor-pointer" data-aos="fade-up-sm"${addAttribute(`${100 + index * 50}`, "data-aos-delay")}> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": image, "alt": title, "width": 624, "height": 536, "class": "w-full h-5/6 aspect-square rounded-xl object-cover" })} <div class="absolute top-0 left-1/2 transform translate-y-[25%] -translate-x-1/2 rounded-2xl px-6 py-4 mx-auto w-[80%] bg-body"> <p class="hidden lg:block mb-3 text-tertiary text-lg"> ${dateFormat(date)} </p> <h2 class="font-semibold text-xl lg:text-4xl">${title}</h2> </div> <a${addAttribute(`/${blog_folder}/${blog.id}`, "href")} class="absolute inset-0 rounded-xl"${addAttribute(title, "aria-label")}></a> </div> </div>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/BlogCard.astro", void 0);

export { $$BlogCard as $ };
