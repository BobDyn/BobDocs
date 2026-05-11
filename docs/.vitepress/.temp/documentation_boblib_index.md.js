import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSuspense, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BobLib","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/boblib/index.md","filePath":"documentation/boblib/index.md"}');
const _sfc_main = { name: "documentation/boblib/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="boblib" tabindex="-1">BobLib <a class="header-anchor" href="#boblib" aria-label="Permalink to &quot;BobLib&quot;">​</a></h1><p>BobLib is the Modelica modeling library inside BobDyn. It contains the physical vehicle model, reusable subsystem models, vehicle parameter records, standard-test wrappers, utility functions, and test models.</p><p>BobSim uses BobLib as the modeling source of truth. The Python runner compiles selected BobLib models, runs simulations, extracts public output signals, and turns the results into metrics, plots, and reports.</p><h2 id="design-role" tabindex="-1">Design role <a class="header-anchor" href="#design-role" aria-label="Permalink to &quot;Design role&quot;">​</a></h2><p>BobLib is responsible for the physical system. It should answer questions like:</p><ul><li>What components exist in the vehicle?</li><li>How are those components connected?</li><li>Which geometry, mass, stiffness, tire, steering, and powertrain parameters define the system?</li><li>Which public variables should standard workflows expose to BobSim?</li></ul><p>BobLib should not be responsible for report formatting, batch orchestration, or post-processing logic. Those responsibilities belong to BobSim.</p><h2 id="package-map" tabindex="-1">Package map <a class="header-anchor" href="#package-map" aria-label="Permalink to &quot;Package map&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BobLib</span></span>
<span class="line"><span>├── Vehicle      Physical vehicle and subsystem models</span></span>
<span class="line"><span>├── Standards    Standard-test wrappers and external simulation interfaces</span></span>
<span class="line"><span>├── Resources    Parameter records, vehicle definitions, and visual records</span></span>
<span class="line"><span>├── Utilities    Reusable math, mechanics, and FMI helpers</span></span>
<span class="line"><span>├── Tests        Executable subsystem and utility tests</span></span>
<span class="line"><span>└── Build        Generated build artifacts for native binaries and FMUs</span></span></code></pre></div><h2 id="core-workflow" tabindex="-1">Core workflow <a class="header-anchor" href="#core-workflow" aria-label="Permalink to &quot;Core workflow&quot;">​</a></h2>`);
  ssrRenderSuspense(_push, {
    default: () => {
      _push(ssrRenderComponent(_component_Mermaid, {
        id: "mermaid-47",
        class: "mermaid",
        graph: "flowchart%20TD%0A%20%20%20%20A%5BVehicle%20parameter%20records%5D%20--%3E%20B%5BBobLib%20vehicle%20model%5D%0A%20%20%20%20B%20--%3E%20C%5BStandard%20or%20FMI%20wrapper%5D%0A%20%20%20%20C%20--%3E%20D%5BCompiled%20executable%20or%20FMU%5D%0A%20%20%20%20D%20--%3E%20E%5BBobSim%20runner%5D%0A%20%20%20%20E%20--%3E%20F%5BSimulation%20results%5D%0A%20%20%20%20F%20--%3E%20G%5BMetrics%2C%20plots%2C%20and%20reports%5D%0A"
      }, null, _parent));
    },
    fallback: () => {
      _push(` Loading... `);
    },
    _: 1
  });
  _push(`<h2 id="where-to-start" tabindex="-1">Where to start <a class="header-anchor" href="#where-to-start" aria-label="Permalink to &quot;Where to start&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Page</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Purpose</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./package-reference">Package reference</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Complete package map and generated reference links.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./packages/vehicle/">Vehicle package</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Physical vehicle, chassis, suspension, powertrain, and electronics models.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./packages/standards/">Standards package</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Standard-test and FMI-facing simulation wrappers.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./packages/resources/">Resources package</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Parameter records and vehicle definitions.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./packages/utilities/">Utilities package</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Reusable helper functions and multibody components.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./packages/tests/">Tests package</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Executable subsystem and utility tests.</td></tr></tbody></table><h2 id="modeling-principles" tabindex="-1">Modeling principles <a class="header-anchor" href="#modeling-principles" aria-label="Permalink to &quot;Modeling principles&quot;">​</a></h2><ul><li><strong>Physical model first.</strong> Components should represent the real system structure wherever practical.</li><li><strong>Records configure models.</strong> Parameter records live under <code>Resources</code>; physical behavior lives under <code>Vehicle</code> and <code>Standards</code>.</li><li><strong>Wrappers define workflows.</strong> Standard tests and FMI interfaces should wrap the physical vehicle without duplicating it.</li><li><strong>Public outputs are intentional.</strong> Variables exposed from standard models form the signal contract used by BobSim.</li><li><strong>Everything remains inspectable.</strong> Modelica source, parameter records, build scripts, and tests are plain text.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/boblib/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
