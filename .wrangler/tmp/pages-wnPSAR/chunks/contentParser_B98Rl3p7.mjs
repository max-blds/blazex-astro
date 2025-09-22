globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createComponent, d as renderTemplate } from './astro/server_C4_Pur0B.mjs';
import { a as getCollection } from './_astro_content_DZbihLL0.mjs';

const getSinglePage = async (collectionName) => {
  const allPages = await getCollection(collectionName);
  const removeIndex = allPages.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => {
    const pageData = data.data;
    return pageData.draft !== true;
  });
  return removeDrafts;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/maxdennis/Projects/blazex-astro/src/lib/contentParser.astro", void 0);

export { getSinglePage as g };
