globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, r as renderComponent, d as renderTemplate } from './astro/server_C4_Pur0B.mjs';
import { m as markdownify } from './Base_Cv2x7S9T.mjs';
import { g as getEntry } from './_astro_content_DZbihLL0.mjs';
import { F as FaStar } from './index_BF9Aug5q.mjs';

const $$Review = createComponent(async ($$result, $$props, $$slots) => {
  const review = await getEntry(
    "reviewSection",
    "review"
  );
  const { reviews } = review.data;
  return renderTemplate`${maybeRenderHead()}<div class="row lg:gx-5 max-lg:gy-3"> ${reviews.map((r, i) => renderTemplate`<div class="col-12 lg:col-6" data-aos="fade-up-sm"${addAttribute(100 + i * 50, "data-aos-delay")}> <div${addAttribute(`p-10 border border-dark rounded-lg ${(i + 1) % 2 !== 0 && "bg-accent"}`, "class")}> <h4 class="text-3xl mb-6 before:content-['“'] after:content-['”']">${unescapeHTML(markdownify(r.comment))}</h4> <div class="flex items-center"> <p class="text-lg font-semibold after:content-[','] after:mr-2">${unescapeHTML(markdownify(r.user))}</p> <p class="text-lg">${unescapeHTML(markdownify(r.designation))}</p> </div> <hr class="my-7 border border-dark opacity-15"> <div class="flex items-center justify-between"> <p class="text-xl font-medium"> ${r.rating} -
<span> ${r.rating > 4 ? "Excellent" : r.rating > 3 ? "Good" : "Bad"} </span> </p> <div class="flex items-center"> ${[...Array(Math.ceil(r.rating))].map(() => renderTemplate`${renderComponent($$result, "FaStar", FaStar, { "className": "text-lg text-dark mr-1" })}`)} </div> </div> </div> </div>`)} </div>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/homepage/Review.astro", void 0);

export { $$Review as $ };
