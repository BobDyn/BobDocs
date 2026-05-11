import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSuspense, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Reporting utilities","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/bobsim/_0_Utils/reporting.md","filePath":"documentation/bobsim/_0_Utils/reporting.md"}');
const _sfc_main = { name: "documentation/bobsim/_0_Utils/reporting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="reporting-utilities" tabindex="-1">Reporting utilities <a class="header-anchor" href="#reporting-utilities" aria-label="Permalink to &quot;Reporting utilities&quot;">​</a></h1><p>The reporting layer builds PDF reports from summary dictionaries and plot configurations.</p><h2 id="files" tabindex="-1">Files <a class="header-anchor" href="#files" aria-label="Permalink to &quot;Files&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">File</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Purpose</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>_0_Utils/reporting/report_engine.py</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Main report builder. Opens the PDF and dispatches title, summary, and plot pages.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>_0_Utils/reporting/sections.py</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Page-level report sections for SteadyStateEval, TransientEval, and KnC.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>_0_Utils/reporting/media/bob.png</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Brand asset used by report pages.</td></tr></tbody></table><h2 id="report-flow" tabindex="-1">Report flow <a class="header-anchor" href="#report-flow" aria-label="Permalink to &quot;Report flow&quot;">​</a></h2>`);
  ssrRenderSuspense(_push, {
    default: () => {
      _push(ssrRenderComponent(_component_Mermaid, {
        id: "mermaid-50",
        class: "mermaid",
        graph: "flowchart%20TD%0A%20%20%20%20A%5BSummary%20dictionary%5D%20--%3E%20B%5BReportEngine%5D%0A%20%20%20%20C%5BPlot%20configuration%5D%20--%3E%20B%0A%20%20%20%20D%5BReport%20metadata%5D%20--%3E%20B%0A%20%20%20%20B%20--%3E%20E%5BTitle%20page%5D%0A%20%20%20%20B%20--%3E%20F%5BSummary%20pages%5D%0A%20%20%20%20B%20--%3E%20G%5BPlot%20pages%5D%0A%20%20%20%20E%20--%3E%20H%5BPDF%20report%5D%0A%20%20%20%20F%20--%3E%20H%0A%20%20%20%20G%20--%3E%20H%0A"
      }, null, _parent));
    },
    fallback: () => {
      _push(` Loading... `);
    },
    _: 1
  });
  _push(`<h2 id="report-sections" tabindex="-1">Report sections <a class="header-anchor" href="#report-sections" aria-label="Permalink to &quot;Report sections&quot;">​</a></h2><p>The active report sections focus on the current standard workflows:</p><ul><li>Steady-state cornering summary pages</li><li>Transient steering summary pages</li><li>KnC summary pages</li></ul><h2 id="api-inventory" tabindex="-1">API inventory <a class="header-anchor" href="#api-inventory" aria-label="Permalink to &quot;API inventory&quot;">​</a></h2><h3 id="report-engine-py" tabindex="-1"><code>report_engine.py</code> <a class="header-anchor" href="#report-engine-py" aria-label="Permalink to &quot;\`report_engine.py\`&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Symbol</th><th style="${ssrRenderStyle({ "text-align": "right" })}">Line</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Notes</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>class ReportEngine</code></td><td style="${ssrRenderStyle({ "text-align": "right" })}">8</td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>ReportEngine.__init__()</code></td><td style="${ssrRenderStyle({ "text-align": "right" })}">9</td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>ReportEngine.build()</code></td><td style="${ssrRenderStyle({ "text-align": "right" })}">12</td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h3 id="sections-py" tabindex="-1"><code>sections.py</code> <a class="header-anchor" href="#sections-py" aria-label="Permalink to &quot;\`sections.py\`&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Symbol</th><th style="${ssrRenderStyle({ "text-align": "right" })}">Line</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Notes</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>add_summary_page()</code></td><td style="${ssrRenderStyle({ "text-align": "right" })}">6</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Shared summary page builder.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>add_knc_summary_page()</code></td><td style="${ssrRenderStyle({ "text-align": "right" })}">80</td><td style="${ssrRenderStyle({ "text-align": "left" })}">KnC summary page builder.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>add_steady_state_step_page()</code></td><td style="${ssrRenderStyle({ "text-align": "right" })}">195</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Steady-state sweep summary page builder.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>add_transient_frequency_page()</code></td><td style="${ssrRenderStyle({ "text-align": "right" })}">260</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Transient frequency-response page builder.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>add_title_page()</code></td><td style="${ssrRenderStyle({ "text-align": "right" })}">375</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Title page builder.</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/bobsim/_0_Utils/reporting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reporting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reporting as default
};
