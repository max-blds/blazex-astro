globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, r as renderComponent, d as renderTemplate } from './astro/server_C4_Pur0B.mjs';
import { m as markdownify } from './Base_Cv2x7S9T.mjs';
import { $ as $$CustomButton } from './CustomButton_Cf6JEBhA.mjs';
import { $ as $$ImageMod } from './ImageMod_CzKyW-a_.mjs';

const $$Astro = createAstro("http://conversioncollective.io/");
const $$CaseCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CaseCard;
  const { caseItem, i, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="col-12" data-aos="fade-up-sm"${addAttribute(`${i * 100}`, "data-aos-delay")}> <div${addAttribute(`row my-6 md:my-14 rounded-md overflow-hidden ${i === 0 && "mt-0"}  ${i === 0 || color ? "bg-tertiary" : i === 1 ? "bg-text text-light" : "bg-accent"}`, "class")}> <div class="col-12 lg:col-7 p-0 min-h-full order-2 lg:order-1"> <div class="flex flex-col justify-between h-full p-10 md:p-20"> <div> <p class="text-lg font-semibold mb-4">${unescapeHTML(markdownify(caseItem.data.badge))}</p> <a${addAttribute(`/case-studies/${caseItem.slug}`, "href")} class="text-6xl font-bold"> ${caseItem.data.title} </a> <p class="mt-4">${unescapeHTML(markdownify(caseItem.data.description))}</p> </div> <div> <hr${addAttribute(`border-t mt-24 mb-9 ${i === 1 ? "border-border" : "border-dark"}`, "class")}> <div class="row mb-12"> ${caseItem.data.stats.map((stat) => renderTemplate`<div class="col-6 lg:col-4"> <h3>${unescapeHTML(markdownify(stat.value))}</h3> <p>${unescapeHTML(markdownify(stat.key))}</p> </div>`)} </div> ${renderComponent($$result, "CustomButton", $$CustomButton, { "link": `/case-studies/${caseItem.slug}`, "label": "Read Full Story", "data-aos": "fade-up-sm", "data-aos-delay": "300" })} </div> </div> </div> <div class="col-12 lg:col-5 p-5 pb-0 md:p-0 order-1 lg:order-2"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": caseItem.data.image, "alt": caseItem.data.title, "width": 583, "height": 70, "format": "webp", "class": "object-cover size-full rounded-md md:rounded-none" })} </div> </div> </div>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/case/CaseCard.astro", void 0);

export { $$CaseCard as $ };
