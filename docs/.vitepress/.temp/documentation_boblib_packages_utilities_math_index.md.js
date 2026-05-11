import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BobLib.Utilities.Math","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/boblib/packages/utilities/math/index.md","filePath":"documentation/boblib/packages/utilities/math/index.md"}');
const _sfc_main = { name: "documentation/boblib/packages/utilities/math/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="boblib-utilities-math" tabindex="-1">BobLib.Utilities.Math <a class="header-anchor" href="#boblib-utilities-math" aria-label="Permalink to &quot;BobLib.Utilities.Math&quot;">​</a></h1><p>Small math helper package for vectors and tensors.</p><p>This package contains reusable helper functions/components. It should stay generic enough to be used by multiple vehicle or standard packages.</p><h2 id="package-path" tabindex="-1">Package path <a class="header-anchor" href="#package-path" aria-label="Permalink to &quot;Package path&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BobLib.Utilities.Math</span></span></code></pre></div><h2 id="contents" tabindex="-1">Contents <a class="header-anchor" href="#contents" aria-label="Permalink to &quot;Contents&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Item</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Purpose</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="/documentation/boblib/packages/utilities/math/tensor/">Tensor</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Package</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Tensor helper functions used by geometry mirroring and coordinate transformations.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="/documentation/boblib/packages/utilities/math/vector/">Vector</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Package</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Vector helper functions used by geometry and multibody models.</td></tr></tbody></table><h2 id="how-this-package-fits" tabindex="-1">How this package fits <a class="header-anchor" href="#how-this-package-fits" aria-label="Permalink to &quot;How this package fits&quot;">​</a></h2><p>This package contributes to the BobLib Modelica library structure and is documented from the current package contents.</p><h2 id="documentation-notes" tabindex="-1">Documentation notes <a class="header-anchor" href="#documentation-notes" aria-label="Permalink to &quot;Documentation notes&quot;">​</a></h2><ul><li>Keep helpers small, reusable, and independent of a specific vehicle definition.</li><li>Add tests under <code>BobLib.Tests</code> when behavior is nontrivial.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/boblib/packages/utilities/math/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
