import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BobLib.Tests.TestUtilities.TestMechanics","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/boblib/packages/tests/testutilities/testmechanics/index.md","filePath":"documentation/boblib/packages/tests/testutilities/testmechanics/index.md"}');
const _sfc_main = { name: "documentation/boblib/packages/tests/testutilities/testmechanics/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="boblib-tests-testutilities-testmechanics" tabindex="-1">BobLib.Tests.TestUtilities.TestMechanics <a class="header-anchor" href="#boblib-tests-testutilities-testmechanics" aria-label="Permalink to &quot;BobLib.Tests.TestUtilities.TestMechanics&quot;">​</a></h1><p>Mechanics utility test models.</p><p>This package is primarily for validation, examples, and smoke testing. Test models are useful as executable documentation because they show how subsystem models are instantiated and connected.</p><h2 id="package-path" tabindex="-1">Package path <a class="header-anchor" href="#package-path" aria-label="Permalink to &quot;Package path&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BobLib.Tests.TestUtilities.TestMechanics</span></span></code></pre></div><h2 id="contents" tabindex="-1">Contents <a class="header-anchor" href="#contents" aria-label="Permalink to &quot;Contents&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Item</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Purpose</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="/documentation/boblib/packages/tests/testutilities/testmechanics/testmultibody/">TestMultibody</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Package</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Multibody utility test models.</td></tr></tbody></table><h2 id="how-this-package-fits" tabindex="-1">How this package fits <a class="header-anchor" href="#how-this-package-fits" aria-label="Permalink to &quot;How this package fits&quot;">​</a></h2><p>This package contributes to the BobLib Modelica library structure and is documented from the current package contents.</p><h2 id="documentation-notes" tabindex="-1">Documentation notes <a class="header-anchor" href="#documentation-notes" aria-label="Permalink to &quot;Documentation notes&quot;">​</a></h2><ul><li>Use these models as executable examples for subsystem instantiation.</li><li>Keep tests small enough to isolate component behavior.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/boblib/packages/tests/testutilities/testmechanics/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
