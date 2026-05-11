import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BobLib.Resources.VehicleRecord.Chassis","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/boblib/packages/resources/vehiclerecord/chassis/index.md","filePath":"documentation/boblib/packages/resources/vehiclerecord/chassis/index.md"}');
const _sfc_main = { name: "documentation/boblib/packages/resources/vehiclerecord/chassis/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="boblib-resources-vehiclerecord-chassis" tabindex="-1">BobLib.Resources.VehicleRecord.Chassis <a class="header-anchor" href="#boblib-resources-vehiclerecord-chassis" aria-label="Permalink to &quot;BobLib.Resources.VehicleRecord.Chassis&quot;">​</a></h1><p>Chassis-related parameter records.</p><p>This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.</p><h2 id="package-path" tabindex="-1">Package path <a class="header-anchor" href="#package-path" aria-label="Permalink to &quot;Package path&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BobLib.Resources.VehicleRecord.Chassis</span></span></code></pre></div><h2 id="contents" tabindex="-1">Contents <a class="header-anchor" href="#contents" aria-label="Permalink to &quot;Contents&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Item</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Purpose</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/">Suspension</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Package</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Axle and suspension parameter records.</td></tr></tbody></table><h2 id="how-this-package-fits" tabindex="-1">How this package fits <a class="header-anchor" href="#how-this-package-fits" aria-label="Permalink to &quot;How this package fits&quot;">​</a></h2><p>This package contains parameter records used to configure physical subsystem models. These records are intended to mirror the structure of the corresponding <code>Vehicle</code> package models.</p><h2 id="documentation-notes" tabindex="-1">Documentation notes <a class="header-anchor" href="#documentation-notes" aria-label="Permalink to &quot;Documentation notes&quot;">​</a></h2><ul><li>Treat records as the canonical parameter interface for the corresponding model.</li><li>Keep names aligned with the physical subsystem they configure.</li><li>Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/boblib/packages/resources/vehiclerecord/chassis/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
