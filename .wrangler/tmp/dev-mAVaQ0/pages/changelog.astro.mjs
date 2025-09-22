globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                     */
import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_C4_Pur0B.mjs';
import { $ as $$Base, m as markdownify } from '../chunks/Base_Cv2x7S9T.mjs';
import { d as dateFormat } from '../chunks/dateFormat_DfYqZ57z.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_DEpEAuwF.mjs';
import { g as getEntry } from '../chunks/_astro_content_DZbihLL0.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_xLXolORG.mjs';

const $$Changelog = createComponent(async ($$result, $$props, $$slots) => {
  const changelog = await getEntry(
    "changelog",
    "-index"
  );
  const { title, meta_title, description, logs } = changelog.data;
  const logsReversed = [...logs].reverse();
  const call_to_action = await getEntry(
    "ctaSection",
    "call-to-action"
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container mt-8 mb-20"> <div class="max-w-2xl mx-auto text-center"> <h1 class="pb-4 max-xl:h2" data-aos="fade-up-sm">${unescapeHTML(markdownify(title))}</h1> </div> </div> <div class="container"> <div class="max-w-7xl mx-auto bg-theme-light rounded-xl p-7 lg:px-64 lg:py-32" data-aos="fade-up-sm"> <div> <ul class="list-none"> ${logsReversed.map((log, index) => renderTemplate`<li class="pb-12" data-aos="fade-up-sm"${addAttribute(`${100 + index * 50}`, "data-aos-delay")}> <p class="before:content-['v'] font-semibold mb-0">${unescapeHTML(markdownify(log.version))}</p> <p class="text-text/70 text-base mb-5"> ${dateFormat(log.date)} </p> ${log.feature && renderTemplate`<p class="font-semibold text-lg mb-2">
Features:
<span class="font-normal">${unescapeHTML(markdownify(log.feature))}</span> </p>`} ${log.update && renderTemplate`<p class="font-semibold text-lg mb-2">
Update:
<span class="font-normal">${unescapeHTML(markdownify(log.update))}</span> </p>`} ${log.fix && renderTemplate`<p class="font-semibold text-lg">
Fixes:
<span class="font-normal">${unescapeHTML(markdownify(log.fix))}</span> </p>`} </li>`)} <li data-aos="fade-up-sm"${addAttribute(`${100 + logsReversed.length * 50}`, "data-aos-delay")}> <p class="font-semibold text-lg mb-2">
Release:
<span class="font-normal">Initial Release of BlazeX</span> </p> </li> </ul> </div> </div> </div> </section> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "cta": call_to_action.data })} ` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/changelog.astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/changelog.astro";
const $$url = "/changelog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Changelog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
