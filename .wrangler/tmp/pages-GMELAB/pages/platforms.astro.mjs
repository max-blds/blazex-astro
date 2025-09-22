globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                     */
import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_C4_Pur0B.mjs';
import { j as jsxRuntimeExports, m as markdownify, $ as $$Base } from '../chunks/Base_Cv2x7S9T.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_xLXolORG.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_xLXolORG.mjs';
import { c as FaMinus, d as FaPlus } from '../chunks/index_BF9Aug5q.mjs';
import { $ as $$ImageMod } from '../chunks/ImageMod_CzKyW-a_.mjs';
import { g as getEntry } from '../chunks/_astro_content_DZbihLL0.mjs';

const CustomAccordion = ({ faqs }) => {
  const [activeTab, setActiveTab] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "text-center pb-4",
        "data-aos": "fade-up-sm",
        dangerouslySetInnerHTML: { __html: markdownify(faqs.title) }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row justify-center mb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-12 bg-theme-light rounded-lg p-14", children: faqs.faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionItem,
      {
        isActive: activeTab === i,
        question: f.question,
        answer: f.answer,
        onClick: () => {
          activeTab === i ? setActiveTab(null) : setActiveTab(i);
        },
        isLast: i === faqs.faqs.length - 1
      },
      i
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-2 border border-dark rounded-full w-fit mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-lg", children: [
      "Don’t find the answer? We can help.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/contact", className: "text-secondary", children: "Click here" }) })
    ] }) })
  ] }) });
};
const AccordionItem = ({
  isActive,
  question,
  answer,
  onClick,
  isLast
}) => {
  const contentRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `accordion ${isActive ? "active" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "accordion-header", onClick, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-left", children: question }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `${isActive ? "bg-secondary text-light" : "bg-body text-dark"} rounded-full text-sm p-2 transition-colors duration-300`,
          children: isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(FaMinus, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(FaPlus, {})
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: contentRef,
        className: "accordion-content transition-all duration-300 ease-in-out",
        style: {
          maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isActive ? 1 : 0,
          visibility: isActive ? "visible" : "hidden"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { dangerouslySetInnerHTML: { __html: answer } })
      }
    ),
    !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "my-8" })
  ] });
};

const $$Platforms = createComponent(async ($$result, $$props, $$slots) => {
  const platforms = await getEntry(
    "platforms",
    "-index"
  );
  const { title, description, categories } = platforms.data;
  const faq = await getEntry(
    "faqSection",
    "faq"
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section" data-aos="fade-up-sm"> <div class="container"> <h1 class="text-center max-xl:h2 text-balance mb-6" data-aos="fade-up-sm">${unescapeHTML(markdownify(title))}</h1> <p class="text-center text-balance">${unescapeHTML(markdownify(description))}</p> ${categories.map((category) => renderTemplate`<div class="mt-16" data-aos="fade-up-sm"> <h2 class="h3 text-center mb-4">${category.name}</h2> <p class="text-center mb-10">${category.description}</p> <div class="row g-4"> ${category.platforms.map((platform, i) => renderTemplate`<div class="col-12 md:col-6 lg:col-4 2xl:col-3 max-h-full" data-aos="fade-up-sm"${addAttribute(i * 50, "data-aos-delay")}> <div class="p-7 border rounded-lg h-full"> <div class="flex flex-col md:flex-row items-center mb-6"> ${renderComponent($$result2, "ImageMod", $$ImageMod, { "src": platform.logo, "alt": platform.name, "width": 61, "height": 61, "class": "mr-6" })} <h5 class="text-center text-xl">${unescapeHTML(markdownify(platform.name))}</h5> </div> <p class="text-lg text-text/70">${unescapeHTML(markdownify(platform.details))}</p> </div> </div>`)} </div> </div>`)} </div> </section> ${renderComponent($$result2, "CustomAccordion", CustomAccordion, { "faqs": faq.data, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/layouts/components/CustomAccordion", "client:component-export": "default" })} ` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/platforms.astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/platforms.astro";
const $$url = "/platforms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Platforms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
