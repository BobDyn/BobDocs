import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSuspense, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BobSim","description":"","frontmatter":{"layout":"doc","title":"BobSim"},"headers":[],"relativePath":"bobsim/index.md","filePath":"bobsim/index.md"}');
const _sfc_main = { name: "bobsim/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bobsim" tabindex="-1">BobSim <a class="header-anchor" href="#bobsim" aria-label="Permalink to &quot;BobSim&quot;">​</a></h1><p>BobSim is the Python orchestration layer for BobDyn. This documentation follows the <code>../BobSim</code> checkout, which also contains BobLib as a submodule. BobSim builds simulations, runs cases, extracts signals, computes metrics, and turns results into reports.</p><h2 id="repository-layout" tabindex="-1">Repository layout <a class="header-anchor" href="#repository-layout" aria-label="Permalink to &quot;Repository layout&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BobSim/</span></span>
<span class="line"><span>├─ _0_Utils/        plotting and reporting engines</span></span>
<span class="line"><span>├─ _1_VisualSim/    visualization renderer and templates</span></span>
<span class="line"><span>├─ _2_EnvelopeSim/  GGV and YMD first-principles envelope tools</span></span>
<span class="line"><span>├─ _3_StandardSim/  SteadyStateEval, TransientEval, KnC, and shared runners</span></span>
<span class="line"><span>└─ _4_DOE/          design-of-experiments pipeline scaffold</span></span></code></pre></div><h2 id="active-workflows" tabindex="-1">Active workflows <a class="header-anchor" href="#active-workflows" aria-label="Permalink to &quot;Active workflows&quot;">​</a></h2><p>The primary public workflows are:</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Workflow</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Entry point</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Purpose</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">SteadyStateEval</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>_3_StandardSim/SteadyStateEval/steady_state_eval_sim.py</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Steady-state cornering characterization.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">TransientEval</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>_3_StandardSim/TransientEval/transient_eval_sim.py</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Steering transient and frequency-response characterization.</td></tr></tbody></table><h2 id="what-bobsim-does" tabindex="-1">What BobSim does <a class="header-anchor" href="#what-bobsim-does" aria-label="Permalink to &quot;What BobSim does&quot;">​</a></h2><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center" })}">`);
  ssrRenderSuspense(_push, {
    default: () => {
      _push(ssrRenderComponent(_component_Mermaid, {
        id: "mermaid-59",
        class: "mermaid",
        graph: "flowchart%20TD%0A%20%20%20%20A%5BYAML%20config%5D%20--%3E%20B%5BCase%20generation%5D%0A%20%20%20%20B%20--%3E%20C%5BOpenModelica%20override%20files%5D%0A%20%20%20%20C%20--%3E%20D%5BCompiled%20executable%20runs%5D%0A%20%20%20%20D%20--%3E%20E%5BCSV%20result%20files%5D%0A%20%20%20%20E%20--%3E%20F%5BSignal%20extraction%5D%0A%20%20%20%20F%20--%3E%20G%5BSummary%20metrics%5D%0A%20%20%20%20G%20--%3E%20H%5BPlots%20%2B%20reports%5D%0A"
      }, null, _parent));
    },
    fallback: () => {
      _push(` Loading... `);
    },
    _: 1
  });
  _push(`</div><h2 id="working-conventions" tabindex="-1">Working conventions <a class="header-anchor" href="#working-conventions" aria-label="Permalink to &quot;Working conventions&quot;">​</a></h2><ul><li><code>make init</code> initializes the BobLib submodule inside <code>../BobSim</code>.</li><li><code>make setup</code> builds the containerized toolchain.</li><li><code>omc _3_StandardSim/build.mos</code> compiles the active model.</li><li><code>make SteadyStateEval</code> and <code>make TransientEval</code> run the public standard studies.</li></ul><h2 id="learn-more" tabindex="-1">Learn more <a class="header-anchor" href="#learn-more" aria-label="Permalink to &quot;Learn more&quot;">​</a></h2><ul><li><a href="/startup-guide/">Startup Guide</a></li><li><a href="/use-guide/">Use Guide</a></li><li><a href="/boblib/">BobLib</a></li><li><a href="/reference/metrics">Vehicle performance metrics</a></li><li><a href="/reference/control-theory">Control theory</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bobsim/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
