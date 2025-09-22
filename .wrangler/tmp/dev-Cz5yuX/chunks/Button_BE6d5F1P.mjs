globalThis.process ??= {}; globalThis.process.env ??= {};
import { j as jsxRuntimeExports } from './Base_Cv2x7S9T.mjs';
import './_@astro-renderers_xLXolORG.mjs';
import { a as FaAngleRight } from './index_BF9Aug5q.mjs';

const Button = ({
  label,
  link,
  style,
  rel,
  className
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: link,
      target: "_blank",
      rel: `noopener noreferrer ${rel ? rel === "follow" ? "" : rel : "nofollow"}`,
      className: `btn ${className} ${style === "outline" ? "btn-outline-primary flex items-center group" : "btn-primary"}`,
      children: [
        label,
        style === "outline" && /* @__PURE__ */ jsxRuntimeExports.jsx(FaAngleRight, { className: "ml-2 transition-transform duration-300 group-hover:translate-x-2" })
      ]
    }
  );
};

export { Button as B };
