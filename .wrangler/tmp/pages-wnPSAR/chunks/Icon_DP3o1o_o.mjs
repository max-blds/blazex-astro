globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, d as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML } from './astro/server_C4_Pur0B.mjs';

const icons = {"local":{"prefix":"local","lastModified":1758566801,"icons":{"badge":{"body":"<g fill=\"none\"><g fill=\"#FF825C\" clip-path=\"url(#a)\"><path d=\"m37.97 20.329-4.77-.693-2.134-4.324a1.186 1.186 0 0 0-2.126 0l-2.134 4.324-4.772.693a1.186 1.186 0 0 0-.659 2.021l3.453 3.366-.816 4.752a1.186 1.186 0 0 0 1.169 1.386c.192-.002.382-.05.552-.141L30 29.473l4.268 2.24a1.185 1.185 0 0 0 1.724-1.245l-.816-4.752 3.453-3.366a1.186 1.186 0 0 0-.659-2.021m-4.897 4.114a1.19 1.19 0 0 0-.341 1.054l.514 3-2.694-1.417a1.19 1.19 0 0 0-1.104.01l-2.693 1.415.515-2.999a1.19 1.19 0 0 0-.341-1.053l-2.179-2.125 3.01-.437a1.19 1.19 0 0 0 .894-.648L30 18.513l1.346 2.73a1.19 1.19 0 0 0 .893.648l3.013.43z\"/><path d=\"M30 8.088c-8.52 0-15.426 6.907-15.426 15.427S21.481 38.94 30 38.94c8.516-.01 15.417-6.91 15.427-15.426 0-8.52-6.907-15.427-15.426-15.427m0 28.482c-7.21 0-13.055-5.845-13.055-13.055S22.79 10.459 30 10.459c7.208.008 13.048 5.849 13.056 13.056 0 7.21-5.845 13.055-13.055 13.055\"/><path d=\"m51.712 26.712-2.218.839c.345.912.775 2.048.627 2.502-.166.511-1.17 1.166-2.059 1.744-1.053.688-2.252 1.467-3.075 2.6s-1.212 2.535-1.545 3.76c-.264.963-.588 2.162-1.008 2.468-.42.305-1.637.238-2.634.19-1.274-.06-2.717-.131-4.075.314-1.318.427-2.412 1.317-3.382 2.098-.83.672-1.774 1.433-2.341 1.433s-1.511-.761-2.343-1.435c-.97-.784-2.068-1.672-3.38-2.097-.75-.244-1.593-.357-2.65-.357-.489 0-.967.022-1.428.045-.99.047-2.22.105-2.626-.191-.407-.297-.746-1.507-1.01-2.47-.332-1.226-.71-2.615-1.543-3.76-.834-1.146-2.02-1.912-3.077-2.6-.886-.579-1.891-1.233-2.057-1.744-.148-.452.283-1.589.628-2.503.457-1.208.973-2.576.973-4.033s-.517-2.825-.974-4.033c-.345-.913-.775-2.05-.629-2.503.167-.51 1.171-1.165 2.06-1.745 1.053-.687 2.25-1.467 3.075-2.599.824-1.131 1.211-2.535 1.545-3.76.263-.963.587-2.162 1.007-2.467s1.638-.238 2.628-.191c1.274.06 2.719.132 4.083-.314 1.317-.426 2.41-1.317 3.381-2.098.825-.674 1.768-1.434 2.335-1.434.568 0 1.511.76 2.342 1.434.97.784 2.068 1.672 3.381 2.098 1.36.442 2.805.373 4.084.314.989-.046 2.219-.104 2.626.19.407.296.739 1.504 1.002 2.468.333 1.226.71 2.614 1.544 3.76s2.02 1.913 3.077 2.6c.886.578 1.891 1.233 2.059 1.744.147.453-.284 1.59-.629 2.503-.457 1.207-.974 2.577-.974 4.033 0 1.455.517 2.825.974 4.033l1.11-.419 1.108-.419c-.423-1.117-.822-2.172-.822-3.195 0-1.024.396-2.079.82-3.196.55-1.448 1.07-2.828.666-4.072-.425-1.308-1.744-2.167-3.019-2.998-.922-.604-1.886-1.229-2.454-2.009-.567-.78-.88-1.908-1.173-2.987-.415-1.525-.806-2.966-1.9-3.762-1.095-.795-2.564-.716-4.134-.642-1.124.052-2.287.108-3.233-.2-.896-.292-1.775-1.002-2.623-1.688C32.635.997 31.407 0 30 0c-1.406 0-2.634.997-3.832 1.963-.849.686-1.727 1.394-2.623 1.685-.947.307-2.059.256-3.233.2-1.57-.073-3.053-.143-4.135.644-1.081.786-1.486 2.239-1.9 3.763-.294 1.078-.597 2.194-1.174 2.987s-1.525 1.404-2.454 2.008c-1.275.832-2.593 1.69-3.019 2.998-.404 1.245.116 2.619.665 4.074.422 1.117.82 2.172.82 3.194s-.394 2.077-.82 3.196c-.549 1.448-1.07 2.829-.665 4.072.426 1.31 1.744 2.168 3.02 3 .921.604 1.885 1.228 2.451 2.008s.88 1.908 1.174 2.987c.253.933.5 1.834.902 2.575l-4.802 12.281a1.186 1.186 0 0 0 1.245 1.608l6.717-.803 4.388 5.145a1.185 1.185 0 0 0 2.007-.344l4.788-12.25c.319.054.644.054.963 0l4.786 12.25a1.186 1.186 0 0 0 2.006.337l4.388-5.145 6.717.804a1.185 1.185 0 0 0 1.246-1.602l-4.804-12.283c.403-.742.648-1.643.902-2.575.293-1.08.596-2.195 1.174-2.988s1.525-1.404 2.454-2.008c1.275-.831 2.594-1.69 3.019-2.998.404-1.245-.115-2.617-.659-4.071M23.24 56.539l-3.512-4.12a1.19 1.19 0 0 0-1.044-.408l-5.379.644 3.78-9.665c.94.3 2.06.248 3.226.192.435-.02.884-.042 1.317-.042.801 0 1.41.077 1.918.241.896.291 1.773 1 2.622 1.688.396.317.79.637 1.196.922zm23.457-3.884-5.378-.644a1.19 1.19 0 0 0-1.043.408l-3.514 4.122-4.126-10.548c.405-.287.803-.607 1.195-.922.849-.686 1.727-1.395 2.623-1.686.946-.307 2.056-.255 3.235-.2s2.285.107 3.227-.192z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h60v60H0z\"/></clipPath></defs></g>","width":60,"height":60},"bar":{"body":"<path fill=\"#5869FC\" d=\"M8.675 59.486a1.24 1.24 0 0 0 1.24-1.24V29.741a1.24 1.24 0 0 0-1.24-1.24H1.24A1.24 1.24 0 0 0 0 29.742v28.505a1.24 1.24 0 0 0 1.24 1.24zM2.48 30.98h4.957v26.026H2.48zm19.83-3.719h-7.437a1.24 1.24 0 0 0-1.24 1.24v29.744a1.24 1.24 0 0 0 1.24 1.24h7.436a1.24 1.24 0 0 0 1.24-1.24V28.502a1.24 1.24 0 0 0-1.24-1.24m-1.24 29.745h-4.957V29.74h4.957zm16.108 1.24V11.15a1.237 1.237 0 0 0-1.236-1.236h-7.436a1.236 1.236 0 0 0-1.236 1.236v47.095a1.236 1.236 0 0 0 1.236 1.236h7.436a1.236 1.236 0 0 0 1.236-1.236m-2.472-1.237h-4.964V12.387h4.964zm16.105 1.236V1.236A1.236 1.236 0 0 0 49.574 0h-7.436a1.236 1.236 0 0 0-1.236 1.236v57.01a1.236 1.236 0 0 0 1.236 1.236h7.436a1.236 1.236 0 0 0 1.236-1.236m-2.472-1.236h-4.964V2.472h4.964z\"/>","width":51,"height":60},"chart-line-up":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 3v18h18\"/><path d=\"m19 9-5 5-4-4-3 3\"/></g>"},"chart-mixed":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3v18h18m-3-4V9m-5 8V5M8 17v-3\"/>"},"code":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m16 18 6-6-6-6M8 6l-6 6 6 6\"/>"},"copy":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2\" color=\"var(--token-e29b414e-778b-4330-a92f-715c64d82d8a, rgb(24, 28, 57)) /* {&quot;name&quot;:&quot;Neutral / 04&quot;} */\"/>"},"cross":{"body":"<path fill=\"none\" stroke=\"#EE2626\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 6 6 18M6 6l12 12\"/>"},"funnel":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586z\" color=\"var(--token-e29b414e-778b-4330-a92f-715c64d82d8a, rgb(24, 28, 57)) /* {&quot;name&quot;:&quot;Neutral / 04&quot;} */\"/>"},"globe":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9\" color=\"var(--token-88bafe50-88d2-4e0d-a38f-fa92c1938e4d, rgb(255, 130, 92)) /* {&quot;name&quot;:&quot;Color / 03&quot;} */\"/>"},"net":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2\" color=\"var(--token-88bafe50-88d2-4e0d-a38f-fa92c1938e4d, rgb(255, 130, 92)) /* {&quot;name&quot;:&quot;Color / 03&quot;} */\"/>"},"network":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm9 4a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm-3 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-3 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z\" clip-rule=\"evenodd\" color=\"var(--token-88bafe50-88d2-4e0d-a38f-fa92c1938e4d, rgb(255, 130, 92)) /* {&quot;name&quot;:&quot;Color / 03&quot;} */\"/>","width":20,"height":20},"plus":{"body":"<g fill=\"currentColor\" stroke-width=\"0\"><path d=\"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8\"/><path d=\"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8\"/></g>","width":1024,"height":1024},"quote":{"body":"<g fill=\"none\"><g fill=\"#5E6075\" clip-path=\"url(#a)\" opacity=\".1\"><path d=\"M26.473 20.4 36.445 0h6.234v35H26.473zM0 20.4 9.97 0h6.235v35H0z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h42.903v35H0z\"/></clipPath></defs></g>","width":43,"height":35},"right":{"body":"<g fill=\"currentColor\" fill-rule=\"evenodd\" stroke-width=\"0\" clip-rule=\"evenodd\"><path d=\"M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708\"/><path d=\"M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8\"/></g>","width":16,"height":16},"rocket-launch":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2\"/><path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\"/></g>"},"settings":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></g>"},"spark":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 10V3L4 14h7v7l9-11z\" color=\"var(--token-88bafe50-88d2-4e0d-a38f-fa92c1938e4d, rgb(255, 130, 92)) /* {&quot;name&quot;:&quot;Color / 03&quot;} */\"/>"},"tick":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 6 9 17l-5-5\"/>"},"wallet":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3\" color=\"var(--token-e29b414e-778b-4330-a92f-715c64d82d8a, rgb(24, 28, 57)) /* {&quot;name&quot;:&quot;Neutral / 04&quot;} */\"/>"},"workflow":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"6\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"6\" height=\"6\" x=\"15\" y=\"3\" rx=\"1\"/><rect width=\"6\" height=\"6\" x=\"9\" y=\"15\" rx=\"1\"/><path d=\"M6 9v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9m-6 12v-7\"/></g>"}},"width":24,"height":24}};

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro = createAstro("http://conversioncollective.io/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/Users/maxdennis/Projects/blazex-astro/node_modules/astro-icon/components/Icon.astro", void 0);

export { $$Icon as $ };
