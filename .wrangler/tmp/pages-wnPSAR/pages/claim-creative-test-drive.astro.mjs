globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                     */
import { a as createComponent, d as renderTemplate, r as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C4_Pur0B.mjs';
import { $ as $$Base, c as config } from '../chunks/Base_Cv2x7S9T.mjs';
/* empty css                                                     */
export { r as renderers } from '../chunks/_@astro-renderers_xLXolORG.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ClaimCreativeTestDrive = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script async src="https://tally.so/widgets/embed.js"><\/script> '])), renderComponent($$result, "Base", $$Base, { "title": "Try it Free: 500 Creatives", "description": "Get 500 brand-aligned static ad creatives to trial our production workflow.", "data-astro-cid-h2fejle3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section" data-astro-cid-h2fejle3> <div class="container" data-astro-cid-h2fejle3> <div class="row gy-6" data-astro-cid-h2fejle3> <div class="col-12" data-aos="fade-up-sm" data-astro-cid-h2fejle3> <h1 class="text-center max-xl:h2 mb-4" data-astro-cid-h2fejle3>Try it Free: 500 Creatives</h1> <p class="text-center text-balance mb-10" data-astro-cid-h2fejle3>We’ll produce 500 static ad variations for your brand—multiple styles and formats, with copy aligned to your guidelines—so you can see our system in action.</p> </div> <div class="col-12 md:col-10 mx-auto" data-aos="fade-up-sm" data-astro-cid-h2fejle3> <div class="p-0 overflow-hidden rounded-2xl shadow-lg" data-astro-cid-h2fejle3> <iframe${addAttribute(config.params.tally_free_500_url, "data-tally-src")} loading="lazy" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0" title="Claim the 500 Creative Test Drive" data-astro-cid-h2fejle3></iframe> </div> </div> </div> </div> </section> ` }));
}, "/Users/maxdennis/Projects/blazex-astro/src/pages/claim-creative-test-drive.astro", void 0);

const $$file = "/Users/maxdennis/Projects/blazex-astro/src/pages/claim-creative-test-drive.astro";
const $$url = "/claim-creative-test-drive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ClaimCreativeTestDrive,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
