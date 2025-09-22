globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                     */
import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C4_Pur0B.mjs';
import { $ as $$CustomButton } from '../chunks/CustomButton_Cf6JEBhA.mjs';
import { $ as $$ImageMod } from '../chunks/ImageMod_CzKyW-a_.mjs';
import { $ as $$Base } from '../chunks/Base_Cv2x7S9T.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_xLXolORG.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section relative text-center"> <div class="container"> <div class="relative overflow-hidden bg-[#181c39] rounded-xl" data-aos="fade-up-sm"> ${renderComponent($$result2, "ImageMod", $$ImageMod, { "src": "/images/404.png", "alt": "404", "width": 0, "height": 0, "class": "absolute w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" })} ${renderComponent($$result2, "ImageMod", $$ImageMod, { "src": "/images/error.png", "alt": "error", "width": 0, "height": 0, "class": "absolute w-[27%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" })} ${renderComponent($$result2, "ImageMod", $$ImageMod, { "src": "/images/noise.png", "alt": "noise", "width": 0, "height": 0, "class": "w-full h-full object-cover opacity-20" })} <div class="absolute bg-[#b3fc6a] aspect-[2.5/1] rounded-full bottom-[-347px] blur-[117px] h-[360px] left-[170px] rotate-[21deg] w-[71%]" data-aos="fade-up-sm"></div> <div class="absolute right-[-160px] top-[-450px] w-[1250px] h-[488px] bg-[#5868fb] opacity-60 rounded-full blur-[172px] rotate-[13deg]" data-aos="fade-up-sm"></div> </div> </div> <div data-aos="fade-up-sm"> <div class="container md:-translate-y-40 md:-mb-40 z-10"> <div class="row justify-center"> <div class="col-12 lg:col-10 bg-body rounded-xl p-10 lg:p-20 shadow"> <h3 class="max-xl:h4 mb-4" data-aos="fade-up-sm">
Opps! Something went wrong
</h3> <p class="text-balance text-xl mb-6" data-aos="fade-up-sm">
We’re sorry, the page you have looked for does not exist in our
              website! Maybe go to our home page or try to use a search?
</p> ${renderComponent($$result2, "CustomButton", $$CustomButton, { "label": "Go Back to home", "link": "/" })} </div> </div> </div> </div> </section> ` })}`;
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/404.astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
