import { markHTMLString } from "../escape.js";
async function renderScript(result, id) {
  if (result._metadata.renderedScripts.has(id))
    return;
  result._metadata.renderedScripts.add(id);
  const inlined = result.inlinedScripts.get(id);
  if (inlined) {
    return markHTMLString(`<script type="module">${inlined}</script>`);
  }
  const resolved = await result.resolve(id);
  return markHTMLString(`<script type="module" src="${resolved}"></script>`);
}
export {
  renderScript
};
