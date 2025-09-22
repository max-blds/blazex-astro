globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate } from './astro/server_C4_Pur0B.mjs';

const $$Astro = createAstro("http://conversioncollective.io/");
const $$CustomButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CustomButton;
  const { label, link, variant, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(`relative btn ${className} ${variant === "primary" ? "btn-secondary" : "btn-primary"} overflow-hidden group`, "class")} data-aos="fade-up-sm"> <span class="relative z-10">${label}</span> <div${addAttribute(`absolute w-16 h-16 -left-16 -bottom-10 border-none rounded-full ${variant === "primary" ? "bg-light" : "bg-dark"} transition-all duration-[500ms] ease-in-out group-hover:w-[500%] group-hover:h-[500%]`, "class")}></div> </a>`;
}, "/Users/maxdennis/Projects/blazex-astro/src/layouts/components/CustomButton.astro", void 0);

export { $$CustomButton as $ };
