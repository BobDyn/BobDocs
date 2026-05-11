import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Utilities","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/bobsim/_0_Utils/index.md","filePath":"documentation/bobsim/_0_Utils/index.md"}');
const _sfc_main = { name: "documentation/bobsim/_0_Utils/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="utilities" tabindex="-1">Utilities <a class="header-anchor" href="#utilities" aria-label="Permalink to &quot;Utilities&quot;">​</a></h1><p><code>_0_Utils</code> contains shared plotting and reporting infrastructure used by the standard-simulation workflows.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>_0_Utils</span></span>
<span class="line"><span>├── plotting</span></span>
<span class="line"><span>│   ├── plot_engine.py</span></span>
<span class="line"><span>│   ├── layouts</span></span>
<span class="line"><span>│   └── plot_types</span></span>
<span class="line"><span>└── reporting</span></span>
<span class="line"><span>    ├── report_engine.py</span></span>
<span class="line"><span>    ├── sections.py</span></span>
<span class="line"><span>    └── media</span></span></code></pre></div><h2 id="responsibilities" tabindex="-1">Responsibilities <a class="header-anchor" href="#responsibilities" aria-label="Permalink to &quot;Responsibilities&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Package</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Purpose</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>_0_Utils.plotting</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Convert plot configuration dictionaries into Matplotlib figures.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>_0_Utils.reporting</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Build multipage PDF reports from summary dictionaries and plot definitions.</td></tr></tbody></table><h2 id="how-it-fits-into-bobsim" tabindex="-1">How it fits into BobSim <a class="header-anchor" href="#how-it-fits-into-bobsim" aria-label="Permalink to &quot;How it fits into BobSim&quot;">​</a></h2><p>Standard modules such as ISO 4138 and ISO 7401 produce summary dictionaries. Those dictionaries contain scalar metrics, time histories, and plot-ready arrays. The plotting and reporting utilities consume the summaries and build report pages without embedding standard-specific plotting code into the runner.</p><p>Go to <a href="./plotting">Plotting</a> or <a href="./reporting">Reporting</a> for implementation details.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/bobsim/_0_Utils/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
