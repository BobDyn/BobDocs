import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BobLib.Tests","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/boblib/packages/tests/index.md","filePath":"documentation/boblib/packages/tests/index.md"}');
const _sfc_main = { name: "documentation/boblib/packages/tests/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="boblib-tests" tabindex="-1">BobLib.Tests <a class="header-anchor" href="#boblib-tests" aria-label="Permalink to &quot;BobLib.Tests&quot;">​</a></h1><p>Modelica test models and smoke tests for vehicle subsystems and utilities.</p><p>This package is primarily for validation, examples, and smoke testing. Test models are useful as executable documentation because they show how subsystem models are instantiated and connected.</p><h2 id="package-path" tabindex="-1">Package path <a class="header-anchor" href="#package-path" aria-label="Permalink to &quot;Package path&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BobLib.Tests</span></span></code></pre></div><h2 id="contents" tabindex="-1">Contents <a class="header-anchor" href="#contents" aria-label="Permalink to &quot;Contents&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Item</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Purpose</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="/documentation/boblib/packages/tests/testutilities/">TestUtilities</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Package</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Utility test models.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="/documentation/boblib/packages/tests/testvehicle/">TestVehicle</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Package</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Vehicle subsystem test models.</td></tr></tbody></table><h2 id="how-this-package-fits" tabindex="-1">How this package fits <a class="header-anchor" href="#how-this-package-fits" aria-label="Permalink to &quot;How this package fits&quot;">​</a></h2><p><code>Tests</code> contains small executable models that exercise utilities and vehicle subsystems. These tests are valuable both for regression checking and for understanding the minimum set of connections needed to instantiate a component.</p><h2 id="documentation-notes" tabindex="-1">Documentation notes <a class="header-anchor" href="#documentation-notes" aria-label="Permalink to &quot;Documentation notes&quot;">​</a></h2><ul><li>Use these models as executable examples for subsystem instantiation.</li><li>Keep tests small enough to isolate component behavior.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/boblib/packages/tests/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
