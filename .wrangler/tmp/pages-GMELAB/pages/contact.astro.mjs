globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                     */
import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_C4_Pur0B.mjs';
import { j as jsxRuntimeExports, $ as $$Base, m as markdownify } from '../chunks/Base_Cv2x7S9T.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_xLXolORG.mjs';
import { b as FaIcons } from '../chunks/index_BF9Aug5q.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_DEpEAuwF.mjs';
import { g as getEntry } from '../chunks/_astro_content_DZbihLL0.mjs';

const iconLibraries = {
  fa: FaIcons
};
const DynamicIcon = ({ icon, ...props }) => {
  const IconLibrary = getIconLibrary(icon);
  const Icon = IconLibrary ? IconLibrary[icon] : void 0;
  if (!Icon) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Icon not found" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { ...props });
};
const getIconLibrary = (icon) => {
  const libraryKey = icon.substring(0, 2).toLowerCase();
  return iconLibraries[libraryKey];
};

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const contact = await getEntry(
    "contact",
    "-index"
  );
  const { title, description, meta_title, connect } = contact.data;
  const cta = await getEntry(
    "ctaSection",
    "call-to-action"
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section" data-aos="fade-up-sm"> <div class="container"> <div class="row gy-5"> <div class="col-12" data-aos="fade-up-sm"> <h1 class="text-center max-xl:h2 mb-6" data-aos="fade-up-sm">${unescapeHTML(markdownify(title))}</h1> <p class="text-center text-balance" data-aos="fade-up-sm">${unescapeHTML(markdownify(description))}</p> </div> <div class="col-12 md:col-10 mx-auto" data-aos="fade-up-sm"> <div class="p-8 md:p-16 shadow-lg rounded-2xl"> <form action="https://formspree.io/f/xjkgrzae" method="POST"> <div class="row"> <div class="col-12"> <div class="mb-6"> <label for="name" class="form-label">Name</label> <input id="name" name="name" class="form-input" placeholder="Your Name" type="text" required> </div> </div> <div class="col-12"> <div class="mb-6"> <label for="email" class="form-label">
Email Address
</label> <input id="email" name="email" class="form-input" placeholder="Your Email Address" type="email" required> </div> </div> <div class="col-12"> <div class="mb-6"> <label for="message" class="form-label">Message</label> <textarea id="message" name="message" class="form-input" placeholder="How can we help you?" rows="8" required></textarea> </div> </div> <div class="col"> <button type="submit" class="btn btn-primary w-full">
Send Message
</button> </div> </div> </form> </div> </div> <div class="col-12"> <div class="row g-4 justify-around md:justify-center"> ${connect.map((c, i) => renderTemplate`<div class="col-6 md:col-3 text-center" data-aos="fade-up-sm"${addAttribute(i * 50, "data-aos-delay")}> <div class="mx-auto rounded-full w-fit bg-theme-light mb-5"> ${renderComponent($$result2, "DynamicIcon", DynamicIcon, { "icon": c.icon, "className": "text-secondary p-6 lg:p-[3.2rem] text-7xl lg:text-9xl" })} </div> <p class="text-xl">${unescapeHTML(markdownify(c.key))}</p> <p class="text-lg text-text/70">${unescapeHTML(markdownify(c.value))}</p> </div>`)} </div> </div> </div> </div> </section> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "cta": cta.data })} ` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/contact.astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
