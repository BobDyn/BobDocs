import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BobLib.Vehicle.Aero","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/boblib/packages/vehicle/aero/index.md","filePath":"documentation/boblib/packages/vehicle/aero/index.md"}');
const _sfc_main = { name: "documentation/boblib/packages/vehicle/aero/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="boblib-vehicle-aero" tabindex="-1">BobLib.Vehicle.Aero <a class="header-anchor" href="#boblib-vehicle-aero" aria-label="Permalink to &quot;BobLib.Vehicle.Aero&quot;">​</a></h1><p>Aerodynamics package placeholder for future aerodynamic models/interfaces.</p><p>This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.</p><h2 id="package-path" tabindex="-1">Package path <a class="header-anchor" href="#package-path" aria-label="Permalink to &quot;Package path&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BobLib.Vehicle.Aero</span></span></code></pre></div><h2 id="how-this-package-fits" tabindex="-1">How this package fits <a class="header-anchor" href="#how-this-package-fits" aria-label="Permalink to &quot;How this package fits&quot;">​</a></h2><p>This package contributes to the BobLib Modelica library structure and is documented from the current package contents.</p><h2 id="documentation-notes" tabindex="-1">Documentation notes <a class="header-anchor" href="#documentation-notes" aria-label="Permalink to &quot;Documentation notes&quot;">​</a></h2><ul><li>Keep physical assumptions in Modelica, close to the component they describe.</li><li>Prefer records from <code>BobLib.Resources</code> for parameterization.</li><li>Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/boblib/packages/vehicle/aero/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
