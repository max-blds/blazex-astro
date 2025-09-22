globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, b as addAttribute, r as renderComponent, d as renderTemplate } from './astro/server_C4_Pur0B.mjs';
import { m as markdownify } from './Base_Cv2x7S9T.mjs';
import { g as getEntry } from './_astro_content_DZbihLL0.mjs';
import { $ as $$ImageMod } from './ImageMod_CzKyW-a_.mjs';

const $$Brand = createComponent(async ($$result, $$props, $$slots) => {
  const brand = await getEntry(
    "brandSection",
    "brand"
  );
  const { title, logos } = brand.data;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row gy-3 md:gy-5 justify-center"> <div class="col-12"> <p class="font-medium text-balance text-center max-lg:text-center max-lg:mb-7" data-aos="fade-up-sm">${unescapeHTML(markdownify(title))}</p> </div> <div class="col-12"> <div class="flex gap-5 items-center flex-wrap justify-center lg:justify-between w-full"> ${logos.map((logo, index) => renderTemplate`<div data-aos="fade-up-sm"${addAttribute(100 + index * 50, "data-aos-delay")}> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": logo, "alt": "company logo", "width": 0, "height": 50, "class": "w-auto max-h-[50px] h-auto object-contain" })} </div>`)} </div> </div> </div> </div> </section>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/Brand.astro", void 0);

export { $$Brand as $ };
