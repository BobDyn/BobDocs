import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Reference","description":"","frontmatter":{"layout":"doc","title":"Reference"},"headers":[],"relativePath":"reference/index.md","filePath":"reference/index.md"}');
const _sfc_main = { name: "reference/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h1><p>Reference pages explain the terminology and theory used throughout BobDyn.</p><h2 id="vehicle-dynamics" tabindex="-1">Vehicle dynamics <a class="header-anchor" href="#vehicle-dynamics" aria-label="Permalink to &quot;Vehicle dynamics&quot;">​</a></h2><p>Use these pages when you are reading reports or comparing vehicle behavior.</p><ul><li><a href="/reference/metrics">Vehicle performance metrics</a></li></ul><p>This page defines the steady-state, transient, stability, and frequency-domain quantities that show up in BobDyn reports and CSV outputs.</p><h2 id="control-foundations" tabindex="-1">Control foundations <a class="header-anchor" href="#control-foundations" aria-label="Permalink to &quot;Control foundations&quot;">​</a></h2><p>Use this page when a workflow or metric depends on feedback, response shaping, or time-domain interpretation.</p><ul><li><a href="/reference/control-theory">Control theory</a></li></ul><p>This page covers the feedback concepts that appear in BobDyn documentation, including open-loop and closed-loop control, bang-bang control, PID, and feedforward.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("reference/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
