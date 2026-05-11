import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSuspense, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/index.md","filePath":"documentation/index.md"}');
const _sfc_main = { name: "documentation/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><p>BobDyn is an open-source framework for physics-based vehicle simulation.</p><p>This documentation is written against the <code>../BobSim</code> checkout, which contains the BobLib submodule used by the active workflows.</p><p>It is organized around a simple separation of responsibilities:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BobDyn</span></span>
<span class="line"><span>├── BobLib   Physical vehicle modeling library</span></span>
<span class="line"><span>└── BobSim   Simulation runner, analysis, and reporting tools</span></span></code></pre></div><p>BobLib defines the vehicle.<br> BobSim runs simulations using that vehicle model.<br> BobDyn is the complete workflow that connects modeling, execution, analysis, reporting, and design correlation.</p><h2 id="the-core-idea" tabindex="-1">The core idea <a class="header-anchor" href="#the-core-idea" aria-label="Permalink to &quot;The core idea&quot;">​</a></h2><p>Vehicles are dynamic systems. Their behavior is defined by how they respond to inputs: steering, throttle, braking, road motion, load transfer, tire forces, suspension motion, and driver commands.</p><p>BobDyn treats vehicle simulation as a characterization problem. The goal is not only to produce time histories, but to turn vehicle response into meaningful engineering evidence:</p><ul><li>How does the vehicle accelerate, roll, yaw, and settle?</li><li>How does the response change across setups or architectures?</li><li>Which metrics distinguish one design from another?</li><li>How can a high-fidelity model be used to validate reduced-order models?</li></ul><p>To support that workflow, BobDyn keeps the physical model as the source of truth.</p><h2 id="boblib-the-physical-model" tabindex="-1">BobLib: the physical model <a class="header-anchor" href="#boblib-the-physical-model" aria-label="Permalink to &quot;BobLib: the physical model&quot;">​</a></h2><p>BobLib is the Modelica modeling library used by BobDyn.</p><p>It represents the vehicle as an acausal multibody dynamic system. Geometry, constraints, suspension members, steering, tires, chassis, and powertrain interfaces are modeled explicitly so the simulation architecture follows the structure of the real machine.</p><p>BobLib is intended to provide a transparent modeling backbone for vehicle dynamics research and design.</p><p>Go to <a href="./boblib/">BobLib</a> to learn how the modeling library is organized.</p><h2 id="bobsim-the-simulation-workflow" tabindex="-1">BobSim: the simulation workflow <a class="header-anchor" href="#bobsim-the-simulation-workflow" aria-label="Permalink to &quot;BobSim: the simulation workflow&quot;">​</a></h2><p>BobSim is the Python simulation runner and analysis layer.</p><p>It uses BobLib models to build executables, run simulations, sweep cases, extract signals, compute metrics, generate plots, and produce reports. Instead of treating simulation as a one-off solver run, BobSim wraps the model in a repeatable engineering workflow.</p><p>BobSim is intended to make high-fidelity vehicle simulation practical: configure the study, run the model, collect the outputs, and turn the results into useful design information.</p><p>Go to <a href="./bobsim/">BobSim</a> to learn how simulations are configured, executed, and analyzed.</p><h2 id="end-to-end-workflow" tabindex="-1">End-to-end workflow <a class="header-anchor" href="#end-to-end-workflow" aria-label="Permalink to &quot;End-to-end workflow&quot;">​</a></h2><p>A typical BobDyn workflow looks like this:</p>`);
  ssrRenderSuspense(_push, {
    default: () => {
      _push(ssrRenderComponent(_component_Mermaid, {
        id: "mermaid-86",
        class: "mermaid",
        graph: "flowchart%20TD%0A%20%20%20%20A%5BVehicle%20definition%5D%0A%20%20%20%20B%5BBobLib%20physical%20model%5D%0A%20%20%20%20C%5BCompiled%20simulation%20executable%5D%0A%20%20%20%20D%5BBobSim%20runner%5D%0A%20%20%20%20E%5BRaw%20simulation%20results%5D%0A%20%20%20%20F%5BSignal%20extraction%20and%20metrics%5D%0A%20%20%20%20G%5BPlots%2C%20reports%2C%20and%20design%20insight%5D%0A%0A%20%20%20%20A%20--%3E%20B%20--%3E%20C%20--%3E%20D%20--%3E%20E%20--%3E%20F%20--%3E%20G%0A"
      }, null, _parent));
    },
    fallback: () => {
      _push(` Loading... `);
    },
    _: 1
  });
  _push(`<p>The same vehicle definition can be reused across multiple workflows: standard tests, design sweeps, envelope studies, reporting, and reduced-order model correlation.</p><h2 id="documentation-structure" tabindex="-1">Documentation structure <a class="header-anchor" href="#documentation-structure" aria-label="Permalink to &quot;Documentation structure&quot;">​</a></h2><p>This section is split into three parts:</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Section</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Purpose</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./">Overview</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Explains the BobDyn project structure and workflow.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./boblib/">BobLib</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Documents the Modelica vehicle modeling layer.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./bobsim/">BobSim</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Documents the Python simulation, analysis, and reporting layer.</td></tr></tbody></table><p>Detailed configuration keys, signal names, outputs, and terminology live in the <a href="/reference/metrics">Vehicle performance metrics</a> and <a href="/reference/control-theory">Control theory</a> pages.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
