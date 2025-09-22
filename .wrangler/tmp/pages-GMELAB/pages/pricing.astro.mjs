globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                     */
import { c as createAstro, a as createComponent, m as maybeRenderHead, u as unescapeHTML, b as addAttribute, d as renderTemplate, r as renderComponent, F as Fragment } from '../chunks/astro/server_C4_Pur0B.mjs';
import { $ as $$Brand } from '../chunks/Brand_9x2lIQ6Q.mjs';
import { $ as $$Review } from '../chunks/Review_BhjIXS4v.mjs';
import { j as jsxRuntimeExports, m as markdownify, $ as $$Base } from '../chunks/Base_Cv2x7S9T.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_xLXolORG.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_xLXolORG.mjs';
import { C as Counter } from '../chunks/Counter_3GBt84mL.mjs';
import { $ as $$Icon } from '../chunks/Icon_DKrytrJi.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_DEpEAuwF.mjs';
import { g as getEntry } from '../chunks/_astro_content_DZbihLL0.mjs';

const CustomButton = ({
  label,
  link,
  variant,
  className
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: link,
      className: `relative w-full btn ${className} ${variant === "primary" ? "btn-secondary" : "btn-primary"} text-center overflow-hidden group`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10", children: [
          " ",
          label
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `absolute w-16 h-16 -left-16 -bottom-10 border-none rounded-full ${variant === "primary" ? "bg-light" : "bg-dark"} transition-all duration-[500ms] ease-in-out group-hover:w-[500%] group-hover:h-[500%]`
          }
        )
      ]
    }
  );
};

const Plans = ({ plans }) => {
  const [checked, setCheck] = reactExports.useState(false);
  const [start, setStart] = reactExports.useState();
  const [end, setEnd] = reactExports.useState();
  reactExports.useEffect(() => {
    plans.packs.forEach((p) => {
      setStart(!checked ? p?.price?.monthly_price : p?.price?.yearly_price);
      setEnd(checked ? p?.price?.yearly_price : p?.price?.monthly_price);
    });
  }, [checked, plans.packs]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-center mb-10",
        "data-aos": "fade-up-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-2xl font-medium", id: "monthly", children: "Billed Monthly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative inline-flex items-center cursor-pointer mx-3 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                onChange: (e) => setCheck(e.target.checked),
                type: "checkbox",
                className: "sr-only peer",
                checked
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[70px] h-[34px] border-secondary bg-secondary border rounded-full peer peer-checked:after:left-[95%] peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1 after:bg-light after:rounded-full after:h-[24px] after:w-[24px] after:transition-all scale-100 peer-checked:active:after:scale-75 peer-active:after:scale-75" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "h5 m-0", id: "annually", children: "Billed Annually" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-5 px-4 py-1 rounded-full bg-accent hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg", children: "25% OFF" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row g-4", children: plans.packs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "col-12 md:col-6 lg:col-4",
        "data-aos": "fade-up-sm",
        "data-aos-delay": `${i * 100}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-0 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h4",
              {
                dangerouslySetInnerHTML: { __html: markdownify(p.name) },
                className: "text-xl lg:text-2xl mb-4"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xl mb-20",
                dangerouslySetInnerHTML: {
                  __html: markdownify(p.description)
                }
              }
            ),
            p?.price ? /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Counter,
              {
                count: checked ? p?.price?.yearly_price : p?.price?.monthly_price,
                prefix: "$",
                start,
                end,
                duration: 0.8
              }
            ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "max-xl:h3", children: "Let's Talk" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-lg text-text/70",
                dangerouslySetInnerHTML: {
                  __html: markdownify(p.duration)
                }
              }
            ),
            p.button.enable && /* @__PURE__ */ jsxRuntimeExports.jsx(
              CustomButton,
              {
                link: p.button.link,
                label: p.button.label,
                className: "my-10"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold mb-1", children: "Recommended for" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-lg text-text/70",
                dangerouslySetInnerHTML: {
                  __html: markdownify(p.recommended)
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-semibold text-lg mb-5",
                dangerouslySetInnerHTML: {
                  __html: markdownify(p.feature.title)
                }
              }
            ),
            p.feature.points.map((p2, i2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center mb-4 last:mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "rgb(255, 130, 92)",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "20 6 9 17 4 12" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-text/70 text-xl ml-3",
                  dangerouslySetInnerHTML: { __html: markdownify(p2) }
                }
              )
            ] }, i2))
          ] })
        ] })
      },
      i
    )) })
  ] }) });
};

const $$Astro = createAstro("http://conversioncollective.io/");
const $$Compare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Compare;
  const { compare } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container"> <div class="text-center lg:mb-8 lg:px-52" data-aos="fade-up-sm"> <h2 class="max-xl:h3 mb-4">${unescapeHTML(markdownify(compare.title))}</h2> </div> <!-- Desktop View --> <div class="hidden md:block overflow-y-hidden"> <table class="pricing-table w-full mb-0" data-aos="fade-up-sm"> <thead> <tr> <th class="p-4"></th> ${compare.plans.map((plan, index) => renderTemplate`<th${addAttribute(`p-4 text-center ${index === 1 && "bg-theme-light rounded-t-lg"}`, "class")}> <p class="text-lg font-normal text-text/70">${plan.name}</p> </th>`)} </tr> <tr> <td class="p-4"></td> ${compare.pricing.map((price, index) => renderTemplate`<td${addAttribute(`p-4 text-center ${index === 1 && "bg-theme-light"}`, "class")}> <p class="text-3xl font-semibold">${price}</p> </td>`)} </tr> <tr> <th class="p-4"></th> ${compare.buttons.map((button, index) => renderTemplate`<th${addAttribute(`p-4 text-center ${index === 1 && "bg-theme-light"}`, "class")}> ${button.button.enable && renderTemplate`<a${addAttribute(button.button.link, "href")} class="inline-block px-[14px] py-[12px] bg-transparent border border-dark rounded-full no-underline text-base hover:bg-dark hover:text-white transition-colors font-normal" target="_blank" rel="noopener noreferrer">${unescapeHTML(markdownify(button.button.label))}</a>`} </th>`)} </tr> </thead> <tbody> ${compare.features.map((feature, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <tr class="border-b" data-aos="fade-up-sm"${addAttribute(`${index * 100}`, "data-aos-delay")}> <td${addAttribute(`p-4  ${index !== 0 && "pt-14"}`, "class")}> <p class="font-semibold text-lg">${feature.name}</p> </td> ${Array(compare.plans.length).fill(null).map((index2) => renderTemplate`<td${addAttribute(`p-4 ${index2 === 1 && "bg-theme-light"}`, "class")}></td>`)} </tr> ${feature.feature.map((f) => renderTemplate`<tr class="border-b" data-aos="fade-up-sm"${addAttribute(`${index * 100}`, "data-aos-delay")}> ${f.details.map((detail, index2) => renderTemplate`<td${addAttribute(`p-4 ${index2 === 0 ? "text-left" : "text-center"} ${index2 === 2 && "bg-theme-light"}`, "class")}> <p class="text-lg"> ${detail === true ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tick", "class": "mx-auto" })}` : detail === false ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "cross", "class": "mx-auto" })}` : detail} </p> </td>`)} </tr>`)}` })}`)} </tbody> </table> </div> <!-- Mobile View --> <div class="md:hidden"> ${compare.plans.map((plan, planIndex) => renderTemplate`<div class="mb-8 overflow-hidden" data-aos="fade-up-sm"${addAttribute(`${planIndex * 100}`, "data-aos-delay")}> <div class="p-4"> <p class="text-lg font-semibold text-text/70 text-center"> ${plan.name} </p> <p class="text-center mt-2 font-semibold text-xl"> ${compare.pricing[planIndex]} </p> ${compare.buttons[planIndex].button.enable && renderTemplate`<div class="text-center mt-4"> <a${addAttribute(compare.buttons[planIndex].button.link, "href")} class="inline-block px-[14px] py-[12px] bg-transparent border border-dark rounded-full no-underline text-base hover:bg-dark hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">${unescapeHTML(markdownify(
    compare.buttons[planIndex].button.label
  ))}</a> </div>`} </div> ${compare.features.map((feature) => renderTemplate`<div class="p-4" data-aos="fade-up-sm"> <h4 class="py-3 border-b font-semibold mb-2">${feature.name}</h4> ${feature.feature.map((f) => renderTemplate`<div class="border-b flex items-center py-3"> <span class="text-gray-600 w-1/2">${f.details[0]}</span> <span class="w-1/2 text-center"> ${typeof f.details[planIndex + 1] === "boolean" ? f.details[planIndex + 1] ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "tick", "class": "mx-auto" })}` : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "cross", "class": "mx-auto" })}` : f.details[planIndex + 1]} </span> </div>`)} </div>`)} </div>`)} </div> </div>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/pricing/Compare.astro", void 0);

const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const pricing = await getEntry("pricing", "-index");
  const { title, meta_title, description, hero, plans, compare, review } = pricing.data;
  const cta = await getEntry("ctaSection", "call-to-action");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": "" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pb-0" data-aos="fade-up-sm" data-aos-delay="100"> <div class="container"> <h1 class="max-xl:h2 text-center mb-6">${unescapeHTML(markdownify(hero.title))}</h1> <p class="text-center text-balance text-text/70">${unescapeHTML(markdownify(hero.content))}</p> </div> </section> ${renderComponent($$result2, "Brand", $$Brand, { "data-aos": "fade-up-sm", "data-aos-delay": "200" })} <section class="section pt-0" data-aos="fade-up-sm" data-aos-delay="300"> <div class="container"> <hr class="w-full"> </div> </section> ${renderComponent($$result2, "Plans", Plans, { "plans": plans, "client:load": true, "data-aos": "fade-up-sm", "data-aos-delay": "400", "client:component-hydration": "load", "client:component-path": "@/layouts/components/pricing/Plans", "client:component-export": "default" })} ${renderComponent($$result2, "Compare", $$Compare, { "compare": compare, "data-aos": "fade-up-sm", "data-aos-delay": "500" })} <section class="section"> <div class="container"> <div class="row max-lg:justify-center items-end mb-16" data-aos="fade-up-sm" data-aos-delay="600"> <div class="col-12 lg:col-7"> <h2 class="max-xl:h3 max-lg:text-center">${unescapeHTML(markdownify(review.title))}</h2> </div> <div class="col-12 lg:col-5"> <p class="text-xl text-text/70 max-lg:text-center">${unescapeHTML(markdownify(review.content))}</p> </div> </div> ${renderComponent($$result2, "Review", $$Review, {})} </div> </section> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "cta": cta.data })} ` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/pricing.astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
