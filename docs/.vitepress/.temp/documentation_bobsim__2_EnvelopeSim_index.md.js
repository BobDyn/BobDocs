import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Envelopes","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/bobsim/_2_EnvelopeSim/index.md","filePath":"documentation/bobsim/_2_EnvelopeSim/index.md"}');
const _sfc_main = { name: "documentation/bobsim/_2_EnvelopeSim/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="envelopes" tabindex="-1">Envelopes <a class="header-anchor" href="#envelopes" aria-label="Permalink to &quot;Envelopes&quot;">​</a></h1><p><code>_2_EnvelopeSim</code> contains first-principles vehicle envelope tools.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>_2_EnvelopeSim</span></span>
<span class="line"><span>├── GGV</span></span>
<span class="line"><span>│   └── ggv_generation.py</span></span>
<span class="line"><span>└── YMD</span></span>
<span class="line"><span>    └── ymd_generation.py</span></span></code></pre></div><p>These tools are separate from the Modelica runtime simulation path. They are useful for fast vehicle-level envelope studies, sanity checks, and paired analysis alongside higher-fidelity multibody runs.</p><h2 id="tools" tabindex="-1">Tools <a class="header-anchor" href="#tools" aria-label="Permalink to &quot;Tools&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Tool</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Purpose</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./ggv">GGV</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Generate acceleration envelopes across speed.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./ymd">YMD</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Generate yaw-moment diagrams and speed sweeps.</td></tr></tbody></table><h2 id="design-intent" tabindex="-1">Design intent <a class="header-anchor" href="#design-intent" aria-label="Permalink to &quot;Design intent&quot;">​</a></h2><p>The envelope tools provide fast, transparent calculations from vehicle parameters, aero assumptions, tire capacity approximations, and force-balance logic. They are not substitutes for the full multibody model, but they are valuable for interpreting operating limits and comparing designs.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/bobsim/_2_EnvelopeSim/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
