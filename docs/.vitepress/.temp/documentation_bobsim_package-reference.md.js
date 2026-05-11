import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BobSim package reference","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/bobsim/package-reference.md","filePath":"documentation/bobsim/package-reference.md"}');
const _sfc_main = { name: "documentation/bobsim/package-reference.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bobsim-package-reference" tabindex="-1">BobSim package reference <a class="header-anchor" href="#bobsim-package-reference" aria-label="Permalink to &quot;BobSim package reference&quot;">​</a></h1><p>This page maps the current BobSim source tree into documentation areas.</p><h2 id="top-level-areas" tabindex="-1">Top-level areas <a class="header-anchor" href="#top-level-areas" aria-label="Permalink to &quot;Top-level areas&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Path</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Documentation</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Purpose</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>_0_Utils</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="/documentation/bobsim/_0_Utils/">Utilities</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Shared plotting and reporting engines.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>_1_VisualSim</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="/documentation/bobsim/_1_VisualSIm/">Visualization</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">PyVista/Qt visualizer and MP4 rendering tools.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>_2_EnvelopeSim</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="/documentation/bobsim/_2_EnvelopeSim/">Envelopes</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">GGV and YMD envelope generation.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>_3_StandardSim</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="/documentation/bobsim/_3_StandardSim/">StandardSim</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Standard-test runners and workflow modules.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>_4_DOE</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="/documentation/bobsim/_4_DOE/">DOE</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Variant sampling, generation, compilation, execution, and aggregation.</td></tr></tbody></table><h2 id="active-source-inventory" tabindex="-1">Active source inventory <a class="header-anchor" href="#active-source-inventory" aria-label="Permalink to &quot;Active source inventory&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>_0_Utils/plotting/layouts/dual.py</span></span>
<span class="line"><span>_0_Utils/plotting/layouts/quad.py</span></span>
<span class="line"><span>_0_Utils/plotting/layouts/single.py</span></span>
<span class="line"><span>_0_Utils/plotting/layouts/triple.py</span></span>
<span class="line"><span>_0_Utils/plotting/plot_engine.py</span></span>
<span class="line"><span>_0_Utils/plotting/plot_types/signal_plot.py</span></span>
<span class="line"><span>_0_Utils/reporting/report_engine.py</span></span>
<span class="line"><span>_0_Utils/reporting/sections.py</span></span>
<span class="line"><span>_0_Utils/reporting/media/bob.png</span></span>
<span class="line"><span>_1_VisualSim/run_visual.py</span></span>
<span class="line"><span>_1_VisualSim/viewer.py</span></span>
<span class="line"><span>_1_VisualSim/visual_templates/steady_state_eval_visual.yml</span></span>
<span class="line"><span>_1_VisualSim/visual_templates/transient_eval_visual.yml</span></span>
<span class="line"><span>_1_VisualSim/visual_templates/fr_knc_visual.yml</span></span>
<span class="line"><span>_1_VisualSim/visual_templates/rr_knc_visual.yml</span></span>
<span class="line"><span>_2_EnvelopeSim/GGV/ggv_generation.py</span></span>
<span class="line"><span>_2_EnvelopeSim/YMD/ymd_generation.py</span></span>
<span class="line"><span>_3_StandardSim/SteadyStateEval/steady_state_eval_config.yml</span></span>
<span class="line"><span>_3_StandardSim/SteadyStateEval/steady_state_eval_sim.py</span></span>
<span class="line"><span>_3_StandardSim/TransientEval/transient_eval_config.yml</span></span>
<span class="line"><span>_3_StandardSim/TransientEval/transient_eval_sim.py</span></span>
<span class="line"><span>_3_StandardSim/KnC/build.mos</span></span>
<span class="line"><span>_3_StandardSim/KnC/knc_config.yml</span></span>
<span class="line"><span>_3_StandardSim/KnC/knc_schema.py</span></span>
<span class="line"><span>_3_StandardSim/KnC/knc_sim.py</span></span>
<span class="line"><span>_3_StandardSim/_fmu_runner.py</span></span>
<span class="line"><span>_3_StandardSim/_modelica_runner.py</span></span>
<span class="line"><span>_3_StandardSim/build.mos</span></span>
<span class="line"><span>_3_StandardSim/results/steady_state_eval_report.pdf</span></span>
<span class="line"><span>_3_StandardSim/results/steady_state_eval_report_metrics.csv</span></span>
<span class="line"><span>_3_StandardSim/results/transient_eval_report.pdf</span></span>
<span class="line"><span>_3_StandardSim/results/transient_eval_report_metrics.csv</span></span>
<span class="line"><span>_4_DOE/aggregator.py</span></span>
<span class="line"><span>_4_DOE/batch.py</span></span>
<span class="line"><span>_4_DOE/compiler.py</span></span>
<span class="line"><span>_4_DOE/configs/build_template.mos</span></span>
<span class="line"><span>_4_DOE/configs/compiler_config.yaml</span></span>
<span class="line"><span>_4_DOE/configs/doe_config.yaml</span></span>
<span class="line"><span>_4_DOE/generator.py</span></span>
<span class="line"><span>_4_DOE/knowledge.md</span></span>
<span class="line"><span>_4_DOE/results/.gitkeep</span></span>
<span class="line"><span>_4_DOE/run_doe.py</span></span>
<span class="line"><span>_4_DOE/sampler.py</span></span>
<span class="line"><span>_4_DOE/search.py</span></span></code></pre></div><h2 id="source-to-doc-map" tabindex="-1">Source-to-doc map <a class="header-anchor" href="#source-to-doc-map" aria-label="Permalink to &quot;Source-to-doc map&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Area</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Notes</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>SteadyStateEval</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Steady-state cornering workflow with radius sweep, settled-state summary, and PDF reporting.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>TransientEval</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Steering transient workflow with step and sine cases, frequency response, and PDF reporting.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>KnC</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Kinematics and compliance tooling, still documented as transitional.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>VisualSim</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Visual playback and rendering pipeline for saved NPZ bundles.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>DOE</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Experimental design pipeline scaffold.</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/bobsim/package-reference.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const packageReference = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  packageReference as default
};
