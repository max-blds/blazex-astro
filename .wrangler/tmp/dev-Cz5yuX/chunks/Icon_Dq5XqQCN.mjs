globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate } from './astro/server_C4_Pur0B.mjs';
import { $ as $$Icon$1 } from './Icon_DP3o1o_o.mjs';

const $$Astro = createAstro("http://conversioncollective.io/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "AstroIcon", $$Icon$1, { "name": name, "class": className })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/components/Icon.astro", void 0);

export { $$Icon as $ };
