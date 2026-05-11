import { resolveComponent, withCtx, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Control Theory","description":"","frontmatter":{"layout":"doc","title":"Control Theory"},"headers":[],"relativePath":"reference/control-theory.md","filePath":"reference/control-theory.md"}');
const _sfc_main = { name: "reference/control-theory.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_mjx_container = resolveComponent("mjx-container");
  const _component_mjx_assistive_mml = resolveComponent("mjx-assistive-mml");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_BangBangPlot = resolveComponent("BangBangPlot");
  const _component_PIDPlot = resolveComponent("PIDPlot");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="control-theory" tabindex="-1">Control Theory <a class="header-anchor" href="#control-theory" aria-label="Permalink to &quot;Control Theory&quot;">​</a></h1><p>In vehicle modeling, we don&#39;t just care about how a vehicle moves. We care about how to make it move the way we want. Control theory is the mathematical framework used to regulate the behavior of dynamic systems to reach a desired state.</p><hr><h2 id="open-loop-vs-closed-loop" tabindex="-1">Open-Loop vs. Closed-Loop <a class="header-anchor" href="#open-loop-vs-closed-loop" aria-label="Permalink to &quot;Open-Loop vs. Closed-Loop&quot;">​</a></h2><p>The most fundamental distinction in control is whether or not the system &quot;looks&quot; at its own output to make decisions.</p><h3 id="open-loop-control" tabindex="-1">Open-Loop Control <a class="header-anchor" href="#open-loop-control" aria-label="Permalink to &quot;Open-Loop Control&quot;">​</a></h3><p>The controller sends a command based on a preset map or timer without checking the actual result.</p><ul><li><strong>Pros.</strong> Simple, requires no sensors.</li><li><strong>Cons.</strong> Cannot account for disturbances or changes in the environment.</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># Open-loop drone: fixed motor command, no feedback</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">motor_throttle </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 50</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  # % - set once and never adjusted</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># A gust hits and drops the drone - we never know, never react</span></span></code></pre></div><h3 id="closed-loop-feedback-control" tabindex="-1">Closed-Loop (Feedback) Control <a class="header-anchor" href="#closed-loop-feedback-control" aria-label="Permalink to &quot;Closed-Loop (Feedback) Control&quot;">​</a></h3><p>The controller measures the actual output `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.464ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.109ex" height="1.464ex" role="img" focusable="false" viewBox="0 -442 490 647" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>y</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "y")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.464ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "1.109ex",
            height: "1.464ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -442 490 647",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mi" }, [
                  createVNode("path", {
                    "data-c": "1D466",
                    d: "M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("mi", null, "y")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` using a sensor and compares it to the desired setpoint `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.02ex" height="1.025ex" role="img" focusable="false" viewBox="0 -442 451 453" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>r</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "r")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "1.02ex",
            height: "1.025ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -442 451 453",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mi" }, [
                  createVNode("path", {
                    "data-c": "1D45F",
                    d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("mi", null, "r")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` to compute the <strong>error</strong> `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.054ex" height="1.025ex" role="img" focusable="false" viewBox="0 -442 466 453" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>e</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "e")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "1.054ex",
            height: "1.025ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -442 466 453",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mi" }, [
                  createVNode("path", {
                    "data-c": "1D452",
                    d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("mi", null, "e")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`.</p>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    display: "true",
    style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="16.697ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 7380 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(466,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(855,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1216,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1882.8,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(2938.6,0)"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(3389.6,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(3778.6,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(4139.6,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(4750.8,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(5751,0)"${_scopeId}><path data-c="1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(6241,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(6630,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(6991,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "block",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"${_scopeId2}><mi${_scopeId2}>e</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo><mo${_scopeId2}>=</mo><mi${_scopeId2}>r</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo><mo${_scopeId2}>−</mo><mi${_scopeId2}>y</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  display: "block"
                }, [
                  createVNode("mi", null, "e"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")"),
                  createVNode("mo", null, "="),
                  createVNode("mi", null, "r"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")"),
                  createVNode("mo", null, "−"),
                  createVNode("mi", null, "y"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "16.697ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 7380 1000",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mi" }, [
                  createVNode("path", {
                    "data-c": "1D452",
                    d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(466,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(855,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1216,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1882.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(2938.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45F",
                    d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(3389.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(3778.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(4139.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(4750.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(5751,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D466",
                    d: "M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(6241,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(6630,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(6991,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "block",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createVNode("mi", null, "e"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")"),
                createVNode("mo", null, "="),
                createVNode("mi", null, "r"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")"),
                createVNode("mo", null, "−"),
                createVNode("mi", null, "y"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>The control signal is then a function of this error. Every controller discussed below is a closed-loop controller.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># Closed-loop drone: measure, compare, react</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">setpoint </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 10.0</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  # desired altitude (m)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">altitude </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> read_barometer()  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># actual altitude (m)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">error </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> setpoint </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">-</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> altitude  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># how far off are we?</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">motor_throttle </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> some_controller(error)</span></span></code></pre></div><h2 id="bang-bang-control" tabindex="-1">Bang-Bang Control <a class="header-anchor" href="#bang-bang-control" aria-label="Permalink to &quot;Bang-Bang Control&quot;">​</a></h2><p>The simplest form of feedback. The controller has only two states: <strong>full on</strong> or <strong>full off</strong>.</p>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    display: "true",
    style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.148ex" })}" xmlns="http://www.w3.org/2000/svg" width="26.984ex" height="5.428ex" role="img" focusable="false" viewBox="0 -1449.5 11927 2399" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(572,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(961,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1322,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1988.8,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mrow" transform="translate(3044.6,0)"${_scopeId}><g data-mml-node="mo" transform="translate(0 -0.5)"${_scopeId}><path data-c="7B" d="M618 -943L612 -949H582L568 -943Q472 -903 411 -841T332 -703Q327 -682 327 -653T325 -350Q324 -28 323 -18Q317 24 301 61T264 124T221 171T179 205T147 225T132 234Q130 238 130 250Q130 255 130 258T131 264T132 267T134 269T139 272T144 275Q207 308 256 367Q310 436 323 519Q324 529 325 851Q326 1124 326 1154T332 1205Q369 1358 566 1443L582 1450H612L618 1444V1429Q618 1413 616 1411L608 1406Q599 1402 585 1393T552 1372T515 1343T479 1305T449 1257T429 1200Q425 1180 425 1152T423 851Q422 579 422 549T416 498Q407 459 388 424T346 364T297 318T250 284T214 264T197 254L188 251L205 242Q290 200 345 138T416 3Q421 -18 421 -48T423 -349Q423 -397 423 -472Q424 -677 428 -694Q429 -697 429 -699Q434 -722 443 -743T465 -782T491 -816T519 -845T548 -868T574 -886T595 -899T610 -908L616 -910Q618 -912 618 -928V-943Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mtable" transform="translate(750,0)"${_scopeId}><g data-mml-node="mtr" transform="translate(0,600)"${_scopeId}><g data-mml-node="mtd"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D448" d="M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="TeXAtom" transform="translate(716,-150) scale(0.707)" data-mjx-texclass="ORD"${_scopeId}><g data-mml-node="mo"${_scopeId}><path data-c="6D" d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="61" d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z" transform="translate(833,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="78" d="M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z" transform="translate(1333,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g><g data-mml-node="mtd" transform="translate(3859.9,0)"${_scopeId}><g data-mml-node="mtext"${_scopeId}><path data-c="69" d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="66" d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z" transform="translate(278,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="A0" d="" transform="translate(584,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(834,0)"${_scopeId}><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1300,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1689,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2050,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2716.8,0)"${_scopeId}><path data-c="3E" d="M84 520Q84 528 88 533T96 539L99 540Q106 540 253 471T544 334L687 265Q694 260 694 250T687 235Q685 233 395 96L107 -40H101Q83 -38 83 -20Q83 -19 83 -17Q82 -10 98 -1Q117 9 248 71Q326 108 378 132L626 250L378 368Q90 504 86 509Q84 513 84 520Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(3772.6,0)"${_scopeId}><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g><g data-mml-node="mtr" transform="translate(0,-600)"${_scopeId}><g data-mml-node="mtd"${_scopeId}><g data-mml-node="mo"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="msub" transform="translate(778,0)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D448" d="M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="TeXAtom" transform="translate(716,-150) scale(0.707)" data-mjx-texclass="ORD"${_scopeId}><g data-mml-node="mo"${_scopeId}><path data-c="6D" d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="61" d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z" transform="translate(833,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="78" d="M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z" transform="translate(1333,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g><g data-mml-node="mtd" transform="translate(3859.9,0)"${_scopeId}><g data-mml-node="mtext"${_scopeId}><path data-c="69" d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="66" d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z" transform="translate(278,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="A0" d="" transform="translate(584,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(834,0)"${_scopeId}><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1300,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1689,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2050,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2716.8,0)"${_scopeId}><path data-c="3C" d="M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(3772.6,0)"${_scopeId}><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g><g data-mml-node="mo" transform="translate(8882.5,0) translate(0 250)"${_scopeId}></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "block",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"${_scopeId2}><mi${_scopeId2}>u</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo><mo${_scopeId2}>=</mo><mrow data-mjx-texclass="INNER"${_scopeId2}><mo data-mjx-texclass="OPEN"${_scopeId2}>{</mo><mtable columnalign="left left" columnspacing="1em" rowspacing=".2em"${_scopeId2}><mtr${_scopeId2}><mtd${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>U</mi><mrow data-mjx-texclass="ORD"${_scopeId2}><mo data-mjx-texclass="OP" movablelimits="true"${_scopeId2}>max</mo></mrow></msub></mtd><mtd${_scopeId2}><mtext${_scopeId2}>if </mtext><mi${_scopeId2}>e</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo><mo${_scopeId2}>&gt;</mo><mn${_scopeId2}>0</mn></mtd></mtr><mtr${_scopeId2}><mtd${_scopeId2}><mo${_scopeId2}>−</mo><msub${_scopeId2}><mi${_scopeId2}>U</mi><mrow data-mjx-texclass="ORD"${_scopeId2}><mo data-mjx-texclass="OP" movablelimits="true"${_scopeId2}>max</mo></mrow></msub></mtd><mtd${_scopeId2}><mtext${_scopeId2}>if </mtext><mi${_scopeId2}>e</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo><mo${_scopeId2}>&lt;</mo><mn${_scopeId2}>0</mn></mtd></mtr></mtable><mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"${_scopeId2}></mo></mrow></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  display: "block"
                }, [
                  createVNode("mi", null, "u"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")"),
                  createVNode("mo", null, "="),
                  createVNode("mrow", { "data-mjx-texclass": "INNER" }, [
                    createVNode("mo", { "data-mjx-texclass": "OPEN" }, "{"),
                    createVNode("mtable", {
                      columnalign: "left left",
                      columnspacing: "1em",
                      rowspacing: ".2em"
                    }, [
                      createVNode("mtr", null, [
                        createVNode("mtd", null, [
                          createVNode("msub", null, [
                            createVNode("mi", null, "U"),
                            createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                              createVNode("mo", {
                                "data-mjx-texclass": "OP",
                                movablelimits: "true"
                              }, "max")
                            ])
                          ])
                        ]),
                        createVNode("mtd", null, [
                          createVNode("mtext", null, "if "),
                          createVNode("mi", null, "e"),
                          createVNode("mo", { stretchy: "false" }, "("),
                          createVNode("mi", null, "t"),
                          createVNode("mo", { stretchy: "false" }, ")"),
                          createVNode("mo", null, ">"),
                          createVNode("mn", null, "0")
                        ])
                      ]),
                      createVNode("mtr", null, [
                        createVNode("mtd", null, [
                          createVNode("mo", null, "−"),
                          createVNode("msub", null, [
                            createVNode("mi", null, "U"),
                            createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                              createVNode("mo", {
                                "data-mjx-texclass": "OP",
                                movablelimits: "true"
                              }, "max")
                            ])
                          ])
                        ]),
                        createVNode("mtd", null, [
                          createVNode("mtext", null, "if "),
                          createVNode("mi", null, "e"),
                          createVNode("mo", { stretchy: "false" }, "("),
                          createVNode("mi", null, "t"),
                          createVNode("mo", { stretchy: "false" }, ")"),
                          createVNode("mo", null, "<"),
                          createVNode("mn", null, "0")
                        ])
                      ])
                    ]),
                    createVNode("mo", {
                      "data-mjx-texclass": "CLOSE",
                      fence: "true",
                      stretchy: "true",
                      symmetric: "true"
                    })
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.148ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "26.984ex",
            height: "5.428ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -1449.5 11927 2399",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mi" }, [
                  createVNode("path", {
                    "data-c": "1D462",
                    d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(572,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(961,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1322,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1988.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mrow",
                  transform: "translate(3044.6,0)"
                }, [
                  createVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(0 -0.5)"
                  }, [
                    createVNode("path", {
                      "data-c": "7B",
                      d: "M618 -943L612 -949H582L568 -943Q472 -903 411 -841T332 -703Q327 -682 327 -653T325 -350Q324 -28 323 -18Q317 24 301 61T264 124T221 171T179 205T147 225T132 234Q130 238 130 250Q130 255 130 258T131 264T132 267T134 269T139 272T144 275Q207 308 256 367Q310 436 323 519Q324 529 325 851Q326 1124 326 1154T332 1205Q369 1358 566 1443L582 1450H612L618 1444V1429Q618 1413 616 1411L608 1406Q599 1402 585 1393T552 1372T515 1343T479 1305T449 1257T429 1200Q425 1180 425 1152T423 851Q422 579 422 549T416 498Q407 459 388 424T346 364T297 318T250 284T214 264T197 254L188 251L205 242Q290 200 345 138T416 3Q421 -18 421 -48T423 -349Q423 -397 423 -472Q424 -677 428 -694Q429 -697 429 -699Q434 -722 443 -743T465 -782T491 -816T519 -845T548 -868T574 -886T595 -899T610 -908L616 -910Q618 -912 618 -928V-943Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mtable",
                    transform: "translate(750,0)"
                  }, [
                    createVNode("g", {
                      "data-mml-node": "mtr",
                      transform: "translate(0,600)"
                    }, [
                      createVNode("g", { "data-mml-node": "mtd" }, [
                        createVNode("g", { "data-mml-node": "msub" }, [
                          createVNode("g", { "data-mml-node": "mi" }, [
                            createVNode("path", {
                              "data-c": "1D448",
                              d: "M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z",
                              style: { "stroke-width": "3" }
                            })
                          ]),
                          createVNode("g", {
                            "data-mml-node": "TeXAtom",
                            transform: "translate(716,-150) scale(0.707)",
                            "data-mjx-texclass": "ORD"
                          }, [
                            createVNode("g", { "data-mml-node": "mo" }, [
                              createVNode("path", {
                                "data-c": "6D",
                                d: "M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z",
                                style: { "stroke-width": "3" }
                              }),
                              createVNode("path", {
                                "data-c": "61",
                                d: "M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z",
                                transform: "translate(833,0)",
                                style: { "stroke-width": "3" }
                              }),
                              createVNode("path", {
                                "data-c": "78",
                                d: "M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z",
                                transform: "translate(1333,0)",
                                style: { "stroke-width": "3" }
                              })
                            ])
                          ])
                        ])
                      ]),
                      createVNode("g", {
                        "data-mml-node": "mtd",
                        transform: "translate(3859.9,0)"
                      }, [
                        createVNode("g", { "data-mml-node": "mtext" }, [
                          createVNode("path", {
                            "data-c": "69",
                            d: "M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z",
                            style: { "stroke-width": "3" }
                          }),
                          createVNode("path", {
                            "data-c": "66",
                            d: "M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z",
                            transform: "translate(278,0)",
                            style: { "stroke-width": "3" }
                          }),
                          createVNode("path", {
                            "data-c": "A0",
                            d: "",
                            transform: "translate(584,0)",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(834,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "1D452",
                            d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(1300,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "28",
                            d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(1689,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "1D461",
                            d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(2050,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "29",
                            d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(2716.8,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "3E",
                            d: "M84 520Q84 528 88 533T96 539L99 540Q106 540 253 471T544 334L687 265Q694 260 694 250T687 235Q685 233 395 96L107 -40H101Q83 -38 83 -20Q83 -19 83 -17Q82 -10 98 -1Q117 9 248 71Q326 108 378 132L626 250L378 368Q90 504 86 509Q84 513 84 520Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mn",
                          transform: "translate(3772.6,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "30",
                            d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                            style: { "stroke-width": "3" }
                          })
                        ])
                      ])
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mtr",
                      transform: "translate(0,-600)"
                    }, [
                      createVNode("g", { "data-mml-node": "mtd" }, [
                        createVNode("g", { "data-mml-node": "mo" }, [
                          createVNode("path", {
                            "data-c": "2212",
                            d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "msub",
                          transform: "translate(778,0)"
                        }, [
                          createVNode("g", { "data-mml-node": "mi" }, [
                            createVNode("path", {
                              "data-c": "1D448",
                              d: "M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z",
                              style: { "stroke-width": "3" }
                            })
                          ]),
                          createVNode("g", {
                            "data-mml-node": "TeXAtom",
                            transform: "translate(716,-150) scale(0.707)",
                            "data-mjx-texclass": "ORD"
                          }, [
                            createVNode("g", { "data-mml-node": "mo" }, [
                              createVNode("path", {
                                "data-c": "6D",
                                d: "M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z",
                                style: { "stroke-width": "3" }
                              }),
                              createVNode("path", {
                                "data-c": "61",
                                d: "M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z",
                                transform: "translate(833,0)",
                                style: { "stroke-width": "3" }
                              }),
                              createVNode("path", {
                                "data-c": "78",
                                d: "M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z",
                                transform: "translate(1333,0)",
                                style: { "stroke-width": "3" }
                              })
                            ])
                          ])
                        ])
                      ]),
                      createVNode("g", {
                        "data-mml-node": "mtd",
                        transform: "translate(3859.9,0)"
                      }, [
                        createVNode("g", { "data-mml-node": "mtext" }, [
                          createVNode("path", {
                            "data-c": "69",
                            d: "M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z",
                            style: { "stroke-width": "3" }
                          }),
                          createVNode("path", {
                            "data-c": "66",
                            d: "M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z",
                            transform: "translate(278,0)",
                            style: { "stroke-width": "3" }
                          }),
                          createVNode("path", {
                            "data-c": "A0",
                            d: "",
                            transform: "translate(584,0)",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(834,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "1D452",
                            d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(1300,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "28",
                            d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(1689,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "1D461",
                            d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(2050,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "29",
                            d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(2716.8,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "3C",
                            d: "M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mn",
                          transform: "translate(3772.6,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "30",
                            d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                            style: { "stroke-width": "3" }
                          })
                        ])
                      ])
                    ])
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(8882.5,0) translate(0 250)"
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "block",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createVNode("mi", null, "u"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")"),
                createVNode("mo", null, "="),
                createVNode("mrow", { "data-mjx-texclass": "INNER" }, [
                  createVNode("mo", { "data-mjx-texclass": "OPEN" }, "{"),
                  createVNode("mtable", {
                    columnalign: "left left",
                    columnspacing: "1em",
                    rowspacing: ".2em"
                  }, [
                    createVNode("mtr", null, [
                      createVNode("mtd", null, [
                        createVNode("msub", null, [
                          createVNode("mi", null, "U"),
                          createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                            createVNode("mo", {
                              "data-mjx-texclass": "OP",
                              movablelimits: "true"
                            }, "max")
                          ])
                        ])
                      ]),
                      createVNode("mtd", null, [
                        createVNode("mtext", null, "if "),
                        createVNode("mi", null, "e"),
                        createVNode("mo", { stretchy: "false" }, "("),
                        createVNode("mi", null, "t"),
                        createVNode("mo", { stretchy: "false" }, ")"),
                        createVNode("mo", null, ">"),
                        createVNode("mn", null, "0")
                      ])
                    ]),
                    createVNode("mtr", null, [
                      createVNode("mtd", null, [
                        createVNode("mo", null, "−"),
                        createVNode("msub", null, [
                          createVNode("mi", null, "U"),
                          createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                            createVNode("mo", {
                              "data-mjx-texclass": "OP",
                              movablelimits: "true"
                            }, "max")
                          ])
                        ])
                      ]),
                      createVNode("mtd", null, [
                        createVNode("mtext", null, "if "),
                        createVNode("mi", null, "e"),
                        createVNode("mo", { stretchy: "false" }, "("),
                        createVNode("mi", null, "t"),
                        createVNode("mo", { stretchy: "false" }, ")"),
                        createVNode("mo", null, "<"),
                        createVNode("mn", null, "0")
                      ])
                    ])
                  ]),
                  createVNode("mo", {
                    "data-mjx-texclass": "CLOSE",
                    fence: "true",
                    stretchy: "true",
                    symmetric: "true"
                  })
                ])
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Variable</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Meaning</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="3.871ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1711 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(572,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(961,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1322,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>u</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "u"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "3.871ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 1711 1000",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mi" }, [
                  createVNode("path", {
                    "data-c": "1D462",
                    d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(572,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(961,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1322,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("mi", null, "u"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">control output</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" })}" xmlns="http://www.w3.org/2000/svg" width="4.71ex" height="1.902ex" role="img" focusable="false" viewBox="0 -683 2081.9 840.8" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D448" d="M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="TeXAtom" transform="translate(716,-150) scale(0.707)" data-mjx-texclass="ORD"${_scopeId}><g data-mml-node="mo"${_scopeId}><path data-c="6D" d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="61" d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z" transform="translate(833,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="78" d="M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z" transform="translate(1333,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>U</mi><mrow data-mjx-texclass="ORD"${_scopeId2}><mo data-mjx-texclass="OP" movablelimits="true"${_scopeId2}>max</mo></mrow></msub></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "U"),
                    createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                      createVNode("mo", {
                        "data-mjx-texclass": "OP",
                        movablelimits: "true"
                      }, "max")
                    ])
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "4.71ex",
            height: "1.902ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -683 2081.9 840.8",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "msub" }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D448",
                      d: "M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "TeXAtom",
                    transform: "translate(716,-150) scale(0.707)",
                    "data-mjx-texclass": "ORD"
                  }, [
                    createVNode("g", { "data-mml-node": "mo" }, [
                      createVNode("path", {
                        "data-c": "6D",
                        d: "M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z",
                        style: { "stroke-width": "3" }
                      }),
                      createVNode("path", {
                        "data-c": "61",
                        d: "M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z",
                        transform: "translate(833,0)",
                        style: { "stroke-width": "3" }
                      }),
                      createVNode("path", {
                        "data-c": "78",
                        d: "M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z",
                        transform: "translate(1333,0)",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ])
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("msub", null, [
                  createVNode("mi", null, "U"),
                  createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createVNode("mo", {
                      "data-mjx-texclass": "OP",
                      movablelimits: "true"
                    }, "max")
                  ])
                ])
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">maximum actuator command</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="3.631ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1605 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(466,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(855,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1216,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>e</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "e"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "3.631ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 1605 1000",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mi" }, [
                  createVNode("path", {
                    "data-c": "1D452",
                    d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(466,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(855,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1216,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("mi", null, "e"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">error signal</td></tr></tbody></table><p>If the error is positive, drive the actuator to max. If negative, drive it to min. The result is constant oscillation around the setpoint, called <strong>chatter</strong>.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">MOTOR_MAX</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  # % throttle</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">MOTOR_MIN</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> -</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">100</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">def</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> bang_bang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(setpoint, altitude):</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    error </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> setpoint </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">-</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> altitude</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    return</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> MOTOR_MAX</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> error </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> else</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> MOTOR_MIN</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># The drone will blast to full throttle, overshoot 10 m,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># cut to zero, fall back below 10 m, repeat forever.</span></span></code></pre></div>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BangBangPlot, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BangBangPlot)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>Notice that the system never settles. Bang-bang control is useful when simplicity matters more than precision (thermostats, relays), but it&#39;s unsuitable for smooth vehicle control.</p><hr><h2 id="pid-control" tabindex="-1">PID Control <a class="header-anchor" href="#pid-control" aria-label="Permalink to &quot;PID Control&quot;">​</a></h2><p>The workhorse of engineering. PID computes a smooth control input `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="3.871ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1711 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(572,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(961,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1322,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>u</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "u"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "3.871ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 1711 1000",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mi" }, [
                  createVNode("path", {
                    "data-c": "1D462",
                    d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(572,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(961,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1322,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("mi", null, "u"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` using three terms that each address a different aspect of the error.</p>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    display: "true",
    style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.063ex" })}" xmlns="http://www.w3.org/2000/svg" width="41.644ex" height="5.526ex" role="img" focusable="false" viewBox="0 -1530.7 18406.8 2442.6" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(572,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(961,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1322,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1988.8,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="msub" transform="translate(3044.6,0)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43E" d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(882,-150) scale(0.707)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mstyle" transform="translate(4332.2,0)"${_scopeId}><g data-mml-node="mspace"${_scopeId}></g></g><g data-mml-node="mi" transform="translate(4499.2,0)"${_scopeId}><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(4965.2,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(5354.2,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(5715.2,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(6326.5,0)"${_scopeId}><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="msub" transform="translate(7326.7,0)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43E" d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(882,-150) scale(0.707)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="msubsup" transform="translate(8669.3,0)"${_scopeId}><g data-mml-node="mo" transform="translate(0 1)"${_scopeId}><path data-c="222B" d="M114 -798Q132 -824 165 -824H167Q195 -824 223 -764T275 -600T320 -391T362 -164Q365 -143 367 -133Q439 292 523 655T645 1127Q651 1145 655 1157T672 1201T699 1257T733 1306T777 1346T828 1360Q884 1360 912 1325T944 1245Q944 1220 932 1205T909 1186T887 1183Q866 1183 849 1198T832 1239Q832 1287 885 1296L882 1300Q879 1303 874 1307T866 1313Q851 1323 833 1323Q819 1323 807 1311T775 1255T736 1139T689 936T633 628Q574 293 510 -5T410 -437T355 -629Q278 -862 165 -862Q125 -862 92 -831T55 -746Q55 -711 74 -698T112 -685Q133 -685 150 -700T167 -741Q167 -789 114 -798Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1046.4,1088.1) scale(0.707)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(589,-896.4) scale(0.707)"${_scopeId}><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mi" transform="translate(10187.6,0)"${_scopeId}><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(10653.6,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(11042.6,0)"${_scopeId}><path data-c="1D70F" d="M39 284Q18 284 18 294Q18 301 45 338T99 398Q134 425 164 429Q170 431 332 431Q492 431 497 429Q517 424 517 402Q517 388 508 376T485 360Q479 358 389 358T299 356Q298 355 283 274T251 109T233 20Q228 5 215 -4T186 -13Q153 -13 153 20V30L203 192Q214 228 227 272T248 336L254 357Q254 358 208 358Q206 358 197 358T183 359Q105 359 61 295Q56 287 53 286T39 284Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(11559.6,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mstyle" transform="translate(11948.6,0)"${_scopeId}><g data-mml-node="mspace"${_scopeId}></g></g><g data-mml-node="mi" transform="translate(12115.6,0)"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(12635.6,0)"${_scopeId}><path data-c="1D70F" d="M39 284Q18 284 18 294Q18 301 45 338T99 398Q134 425 164 429Q170 431 332 431Q492 431 497 429Q517 424 517 402Q517 388 508 376T485 360Q479 358 389 358T299 356Q298 355 283 274T251 109T233 20Q228 5 215 -4T186 -13Q153 -13 153 20V30L203 192Q214 228 227 272T248 336L254 357Q254 358 208 358Q206 358 197 358T183 359Q105 359 61 295Q56 287 53 286T39 284Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(13374.8,0)"${_scopeId}><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="msub" transform="translate(14375.1,0)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43E" d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(882,-150) scale(0.707)"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mstyle" transform="translate(15674.8,0)"${_scopeId}><g data-mml-node="mspace"${_scopeId}></g></g><g data-mml-node="mfrac" transform="translate(15841.8,0)"${_scopeId}><g data-mml-node="mrow" transform="translate(220,710)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(520,0)"${_scopeId}><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(986,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1375,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1736,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mrow" transform="translate(842,-686)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(520,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><rect width="2325" height="60" x="120" y="220"${_scopeId}></rect></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "block",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"${_scopeId2}><mi${_scopeId2}>u</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo><mo${_scopeId2}>=</mo><msub${_scopeId2}><mi${_scopeId2}>K</mi><mi${_scopeId2}>p</mi></msub><mstyle scriptlevel="0"${_scopeId2}><mspace width="0.167em"${_scopeId2}></mspace></mstyle><mi${_scopeId2}>e</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo><mo${_scopeId2}>+</mo><msub${_scopeId2}><mi${_scopeId2}>K</mi><mi${_scopeId2}>i</mi></msub><msubsup${_scopeId2}><mo data-mjx-texclass="OP"${_scopeId2}>∫</mo><mn${_scopeId2}>0</mn><mi${_scopeId2}>t</mi></msubsup><mi${_scopeId2}>e</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>τ</mi><mo stretchy="false"${_scopeId2}>)</mo><mstyle scriptlevel="0"${_scopeId2}><mspace width="0.167em"${_scopeId2}></mspace></mstyle><mi${_scopeId2}>d</mi><mi${_scopeId2}>τ</mi><mo${_scopeId2}>+</mo><msub${_scopeId2}><mi${_scopeId2}>K</mi><mi${_scopeId2}>d</mi></msub><mstyle scriptlevel="0"${_scopeId2}><mspace width="0.167em"${_scopeId2}></mspace></mstyle><mfrac${_scopeId2}><mrow${_scopeId2}><mi${_scopeId2}>d</mi><mi${_scopeId2}>e</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo></mrow><mrow${_scopeId2}><mi${_scopeId2}>d</mi><mi${_scopeId2}>t</mi></mrow></mfrac></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  display: "block"
                }, [
                  createVNode("mi", null, "u"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")"),
                  createVNode("mo", null, "="),
                  createVNode("msub", null, [
                    createVNode("mi", null, "K"),
                    createVNode("mi", null, "p")
                  ]),
                  createVNode("mstyle", { scriptlevel: "0" }, [
                    createVNode("mspace", { width: "0.167em" })
                  ]),
                  createVNode("mi", null, "e"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")"),
                  createVNode("mo", null, "+"),
                  createVNode("msub", null, [
                    createVNode("mi", null, "K"),
                    createVNode("mi", null, "i")
                  ]),
                  createVNode("msubsup", null, [
                    createVNode("mo", { "data-mjx-texclass": "OP" }, "∫"),
                    createVNode("mn", null, "0"),
                    createVNode("mi", null, "t")
                  ]),
                  createVNode("mi", null, "e"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "τ"),
                  createVNode("mo", { stretchy: "false" }, ")"),
                  createVNode("mstyle", { scriptlevel: "0" }, [
                    createVNode("mspace", { width: "0.167em" })
                  ]),
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "τ"),
                  createVNode("mo", null, "+"),
                  createVNode("msub", null, [
                    createVNode("mi", null, "K"),
                    createVNode("mi", null, "d")
                  ]),
                  createVNode("mstyle", { scriptlevel: "0" }, [
                    createVNode("mspace", { width: "0.167em" })
                  ]),
                  createVNode("mfrac", null, [
                    createVNode("mrow", null, [
                      createVNode("mi", null, "d"),
                      createVNode("mi", null, "e"),
                      createVNode("mo", { stretchy: "false" }, "("),
                      createVNode("mi", null, "t"),
                      createVNode("mo", { stretchy: "false" }, ")")
                    ]),
                    createVNode("mrow", null, [
                      createVNode("mi", null, "d"),
                      createVNode("mi", null, "t")
                    ])
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.063ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "41.644ex",
            height: "5.526ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -1530.7 18406.8 2442.6",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mi" }, [
                  createVNode("path", {
                    "data-c": "1D462",
                    d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(572,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(961,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1322,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1988.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "msub",
                  transform: "translate(3044.6,0)"
                }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D43E",
                      d: "M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(882,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D45D",
                      d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mstyle",
                  transform: "translate(4332.2,0)"
                }, [
                  createVNode("g", { "data-mml-node": "mspace" })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(4499.2,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D452",
                    d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(4965.2,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(5354.2,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(5715.2,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(6326.5,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2B",
                    d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "msub",
                  transform: "translate(7326.7,0)"
                }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D43E",
                      d: "M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(882,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D456",
                      d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "msubsup",
                  transform: "translate(8669.3,0)"
                }, [
                  createVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(0 1)"
                  }, [
                    createVNode("path", {
                      "data-c": "222B",
                      d: "M114 -798Q132 -824 165 -824H167Q195 -824 223 -764T275 -600T320 -391T362 -164Q365 -143 367 -133Q439 292 523 655T645 1127Q651 1145 655 1157T672 1201T699 1257T733 1306T777 1346T828 1360Q884 1360 912 1325T944 1245Q944 1220 932 1205T909 1186T887 1183Q866 1183 849 1198T832 1239Q832 1287 885 1296L882 1300Q879 1303 874 1307T866 1313Q851 1323 833 1323Q819 1323 807 1311T775 1255T736 1139T689 936T633 628Q574 293 510 -5T410 -437T355 -629Q278 -862 165 -862Q125 -862 92 -831T55 -746Q55 -711 74 -698T112 -685Q133 -685 150 -700T167 -741Q167 -789 114 -798Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(1046.4,1088.1) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D461",
                      d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mn",
                    transform: "translate(589,-896.4) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "30",
                      d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(10187.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D452",
                    d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(10653.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(11042.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D70F",
                    d: "M39 284Q18 284 18 294Q18 301 45 338T99 398Q134 425 164 429Q170 431 332 431Q492 431 497 429Q517 424 517 402Q517 388 508 376T485 360Q479 358 389 358T299 356Q298 355 283 274T251 109T233 20Q228 5 215 -4T186 -13Q153 -13 153 20V30L203 192Q214 228 227 272T248 336L254 357Q254 358 208 358Q206 358 197 358T183 359Q105 359 61 295Q56 287 53 286T39 284Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(11559.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mstyle",
                  transform: "translate(11948.6,0)"
                }, [
                  createVNode("g", { "data-mml-node": "mspace" })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(12115.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(12635.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D70F",
                    d: "M39 284Q18 284 18 294Q18 301 45 338T99 398Q134 425 164 429Q170 431 332 431Q492 431 497 429Q517 424 517 402Q517 388 508 376T485 360Q479 358 389 358T299 356Q298 355 283 274T251 109T233 20Q228 5 215 -4T186 -13Q153 -13 153 20V30L203 192Q214 228 227 272T248 336L254 357Q254 358 208 358Q206 358 197 358T183 359Q105 359 61 295Q56 287 53 286T39 284Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(13374.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2B",
                    d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "msub",
                  transform: "translate(14375.1,0)"
                }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D43E",
                      d: "M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(882,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D451",
                      d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mstyle",
                  transform: "translate(15674.8,0)"
                }, [
                  createVNode("g", { "data-mml-node": "mspace" })
                ]),
                createVNode("g", {
                  "data-mml-node": "mfrac",
                  transform: "translate(15841.8,0)"
                }, [
                  createVNode("g", {
                    "data-mml-node": "mrow",
                    transform: "translate(220,710)"
                  }, [
                    createVNode("g", { "data-mml-node": "mi" }, [
                      createVNode("path", {
                        "data-c": "1D451",
                        d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(520,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "1D452",
                        d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(986,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "28",
                        d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(1375,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "1D461",
                        d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(1736,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "29",
                        d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mrow",
                    transform: "translate(842,-686)"
                  }, [
                    createVNode("g", { "data-mml-node": "mi" }, [
                      createVNode("path", {
                        "data-c": "1D451",
                        d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(520,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "1D461",
                        d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ]),
                  createVNode("rect", {
                    width: "2325",
                    height: "60",
                    x: "120",
                    y: "220"
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "block",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createVNode("mi", null, "u"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")"),
                createVNode("mo", null, "="),
                createVNode("msub", null, [
                  createVNode("mi", null, "K"),
                  createVNode("mi", null, "p")
                ]),
                createVNode("mstyle", { scriptlevel: "0" }, [
                  createVNode("mspace", { width: "0.167em" })
                ]),
                createVNode("mi", null, "e"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")"),
                createVNode("mo", null, "+"),
                createVNode("msub", null, [
                  createVNode("mi", null, "K"),
                  createVNode("mi", null, "i")
                ]),
                createVNode("msubsup", null, [
                  createVNode("mo", { "data-mjx-texclass": "OP" }, "∫"),
                  createVNode("mn", null, "0"),
                  createVNode("mi", null, "t")
                ]),
                createVNode("mi", null, "e"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "τ"),
                createVNode("mo", { stretchy: "false" }, ")"),
                createVNode("mstyle", { scriptlevel: "0" }, [
                  createVNode("mspace", { width: "0.167em" })
                ]),
                createVNode("mi", null, "d"),
                createVNode("mi", null, "τ"),
                createVNode("mo", null, "+"),
                createVNode("msub", null, [
                  createVNode("mi", null, "K"),
                  createVNode("mi", null, "d")
                ]),
                createVNode("mstyle", { scriptlevel: "0" }, [
                  createVNode("mspace", { width: "0.167em" })
                ]),
                createVNode("mfrac", null, [
                  createVNode("mrow", null, [
                    createVNode("mi", null, "d"),
                    createVNode("mi", null, "e"),
                    createVNode("mo", { stretchy: "false" }, "("),
                    createVNode("mi", null, "t"),
                    createVNode("mo", { stretchy: "false" }, ")")
                  ]),
                  createVNode("mrow", null, [
                    createVNode("mi", null, "d"),
                    createVNode("mi", null, "t")
                  ])
                ])
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Term</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Name</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Role</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.65ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.913ex" height="2.195ex" role="img" focusable="false" viewBox="0 -683 1287.7 970.2" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43E" d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(882,-150) scale(0.707)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>K</mi><mi${_scopeId2}>p</mi></msub></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "K"),
                    createVNode("mi", null, "p")
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.65ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "2.913ex",
            height: "2.195ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -683 1287.7 970.2",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "msub" }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D43E",
                      d: "M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(882,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D45D",
                      d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("msub", null, [
                  createVNode("mi", null, "K"),
                  createVNode("mi", null, "p")
                ])
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Proportional</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Reacts to the <strong>current</strong> error. Larger `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.65ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.913ex" height="2.195ex" role="img" focusable="false" viewBox="0 -683 1287.7 970.2" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43E" d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(882,-150) scale(0.707)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>K</mi><mi${_scopeId2}>p</mi></msub></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "K"),
                    createVNode("mi", null, "p")
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.65ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "2.913ex",
            height: "2.195ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -683 1287.7 970.2",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "msub" }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D43E",
                      d: "M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(882,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D45D",
                      d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("msub", null, [
                  createVNode("mi", null, "K"),
                  createVNode("mi", null, "p")
                ])
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` = faster response, but too high causes oscillation.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.661ex" height="1.902ex" role="img" focusable="false" viewBox="0 -683 1176 840.8" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43E" d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(882,-150) scale(0.707)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>K</mi><mi${_scopeId2}>i</mi></msub></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "K"),
                    createVNode("mi", null, "i")
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "2.661ex",
            height: "1.902ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -683 1176 840.8",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "msub" }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D43E",
                      d: "M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(882,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D456",
                      d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("msub", null, [
                  createVNode("mi", null, "K"),
                  createVNode("mi", null, "i")
                ])
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Integral</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Accumulates <strong>past</strong> error. Eliminates steady-state offset, but can cause windup and overshoot.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.355ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.94ex" height="1.901ex" role="img" focusable="false" viewBox="0 -683 1299.7 840.1" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43E" d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(882,-150) scale(0.707)"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>K</mi><mi${_scopeId2}>d</mi></msub></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "K"),
                    createVNode("mi", null, "d")
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.355ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "2.94ex",
            height: "1.901ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -683 1299.7 840.1",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "msub" }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D43E",
                      d: "M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(882,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D451",
                      d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("msub", null, [
                  createVNode("mi", null, "K"),
                  createVNode("mi", null, "d")
                ])
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Derivative</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Reacts to the <strong>rate of change</strong> of error. Damps oscillation and prevents overshoot.</td></tr></tbody></table><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">class</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> PID</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    def</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> __init__</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(self, Kp, Ki, Kd, dt):</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">        self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.Kp, </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.Ki, </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.Kd, </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.dt </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> Kp, Ki, Kd, dt</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">        self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.integral </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">        self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.prev_error </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 0.0</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    def</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> update</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(self, setpoint, measurement):</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        error </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> setpoint </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">-</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> measurement</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">        self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.integral </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">+=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> error </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">*</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.dt</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        derivative </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> (error </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">-</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.prev_error) </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.dt</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">        self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.prev_error </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> error</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">        return</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.Kp </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">*</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> error </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">+</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.Ki </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">*</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.integral </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">+</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> self</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.Kd </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">*</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> derivative</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># Drone altitude hold</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">pid </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> PID(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">Kp</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">8</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">Ki</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">2</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">Kd</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">4</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">dt</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">0.02</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">throttle </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> pid.update(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">setpoint</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">10.0</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">measurement</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">read_barometer())</span></span></code></pre></div>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PIDPlot, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PIDPlot)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="tuning-intuition" tabindex="-1">Tuning intuition <a class="header-anchor" href="#tuning-intuition" aria-label="Permalink to &quot;Tuning intuition&quot;">​</a></h3><ul><li><strong>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" })}" xmlns="http://www.w3.org/2000/svg" width="6.809ex" height="1.902ex" role="img" focusable="false" viewBox="0 -683 3009.5 840.8" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43E" d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(882,-150) scale(0.707)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(1453.7,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(2509.5,0)"${_scopeId}><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>K</mi><mi${_scopeId2}>i</mi></msub><mo${_scopeId2}>=</mo><mn${_scopeId2}>0</mn></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "K"),
                    createVNode("mi", null, "i")
                  ]),
                  createVNode("mo", null, "="),
                  createVNode("mn", null, "0")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "6.809ex",
            height: "1.902ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -683 3009.5 840.8",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "msub" }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D43E",
                      d: "M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(882,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D456",
                      d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1453.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(2509.5,0)"
                }, [
                  createVNode("path", {
                    "data-c": "30",
                    d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("msub", null, [
                  createVNode("mi", null, "K"),
                  createVNode("mi", null, "i")
                ]),
                createVNode("mo", null, "="),
                createVNode("mn", null, "0")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`:</strong> The system will settle near but not exactly at the setpoint (steady-state error).</li><li><strong>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.355ex" })}" xmlns="http://www.w3.org/2000/svg" width="7.089ex" height="1.901ex" role="img" focusable="false" viewBox="0 -683 3133.3 840.1" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43E" d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(882,-150) scale(0.707)"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(1577.5,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(2633.3,0)"${_scopeId}><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>K</mi><mi${_scopeId2}>d</mi></msub><mo${_scopeId2}>=</mo><mn${_scopeId2}>0</mn></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "K"),
                    createVNode("mi", null, "d")
                  ]),
                  createVNode("mo", null, "="),
                  createVNode("mn", null, "0")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.355ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "7.089ex",
            height: "1.901ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -683 3133.3 840.1",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "msub" }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D43E",
                      d: "M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(882,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D451",
                      d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1577.5,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(2633.3,0)"
                }, [
                  createVNode("path", {
                    "data-c": "30",
                    d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("msub", null, [
                  createVNode("mi", null, "K"),
                  createVNode("mi", null, "d")
                ]),
                createVNode("mo", null, "="),
                createVNode("mn", null, "0")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`:</strong> The system reaches the setpoint but overshoots and rings.</li><li><strong>All three tuned:</strong> Fast rise, minimal overshoot, zero steady-state error.</li></ul><hr><h2 id="feedforward-control" tabindex="-1">Feedforward Control <a class="header-anchor" href="#feedforward-control" aria-label="Permalink to &quot;Feedforward Control&quot;">​</a></h2><p>PID reacts to error after it has already occurred. <strong>Feedforward</strong> predicts the required input based on known physics and applies it proactively, before any error builds up.</p>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    display: "true",
    style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="20.13ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 8897.3 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(572,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(961,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1322,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1988.8,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="msub" transform="translate(3044.6,0)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="TeXAtom" transform="translate(605,-150) scale(0.707)" data-mjx-texclass="ORD"${_scopeId}><g data-mml-node="mtext"${_scopeId}><path data-c="66" d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="66" d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z" transform="translate(306,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g><g data-mml-node="mo" transform="translate(4132.3,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(4521.3,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(4882.3,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(5493.5,0)"${_scopeId}><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="msub" transform="translate(6493.7,0)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="TeXAtom" transform="translate(605,-150) scale(0.707)" data-mjx-texclass="ORD"${_scopeId}><g data-mml-node="mtext"${_scopeId}><path data-c="66" d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="62" d="M307 -11Q234 -11 168 55L158 37Q156 34 153 28T147 17T143 10L138 1L118 0H98V298Q98 599 97 603Q94 622 83 628T38 637H20V660Q20 683 22 683L32 684Q42 685 61 686T98 688Q115 689 135 690T165 693T176 694H179V543Q179 391 180 391L183 394Q186 397 192 401T207 411T228 421T254 431T286 439T323 442Q401 442 461 379T522 216Q522 115 458 52T307 -11ZM182 98Q182 97 187 90T196 79T206 67T218 55T233 44T250 35T271 29T295 26Q330 26 363 46T412 113Q424 148 424 212Q424 287 412 323Q385 405 300 405Q270 405 239 390T188 347L182 339V98Z" transform="translate(306,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g><g data-mml-node="mo" transform="translate(7758.3,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(8147.3,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(8508.3,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "block",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"${_scopeId2}><mi${_scopeId2}>u</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo><mo${_scopeId2}>=</mo><msub${_scopeId2}><mi${_scopeId2}>u</mi><mrow data-mjx-texclass="ORD"${_scopeId2}><mtext${_scopeId2}>ff</mtext></mrow></msub><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo><mo${_scopeId2}>+</mo><msub${_scopeId2}><mi${_scopeId2}>u</mi><mrow data-mjx-texclass="ORD"${_scopeId2}><mtext${_scopeId2}>fb</mtext></mrow></msub><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  display: "block"
                }, [
                  createVNode("mi", null, "u"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")"),
                  createVNode("mo", null, "="),
                  createVNode("msub", null, [
                    createVNode("mi", null, "u"),
                    createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                      createVNode("mtext", null, "ff")
                    ])
                  ]),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")"),
                  createVNode("mo", null, "+"),
                  createVNode("msub", null, [
                    createVNode("mi", null, "u"),
                    createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                      createVNode("mtext", null, "fb")
                    ])
                  ]),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "20.13ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 8897.3 1000",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mi" }, [
                  createVNode("path", {
                    "data-c": "1D462",
                    d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(572,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(961,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1322,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1988.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "msub",
                  transform: "translate(3044.6,0)"
                }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D462",
                      d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "TeXAtom",
                    transform: "translate(605,-150) scale(0.707)",
                    "data-mjx-texclass": "ORD"
                  }, [
                    createVNode("g", { "data-mml-node": "mtext" }, [
                      createVNode("path", {
                        "data-c": "66",
                        d: "M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z",
                        style: { "stroke-width": "3" }
                      }),
                      createVNode("path", {
                        "data-c": "66",
                        d: "M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z",
                        transform: "translate(306,0)",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(4132.3,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(4521.3,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(4882.3,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(5493.5,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2B",
                    d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "msub",
                  transform: "translate(6493.7,0)"
                }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D462",
                      d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "TeXAtom",
                    transform: "translate(605,-150) scale(0.707)",
                    "data-mjx-texclass": "ORD"
                  }, [
                    createVNode("g", { "data-mml-node": "mtext" }, [
                      createVNode("path", {
                        "data-c": "66",
                        d: "M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z",
                        style: { "stroke-width": "3" }
                      }),
                      createVNode("path", {
                        "data-c": "62",
                        d: "M307 -11Q234 -11 168 55L158 37Q156 34 153 28T147 17T143 10L138 1L118 0H98V298Q98 599 97 603Q94 622 83 628T38 637H20V660Q20 683 22 683L32 684Q42 685 61 686T98 688Q115 689 135 690T165 693T176 694H179V543Q179 391 180 391L183 394Q186 397 192 401T207 411T228 421T254 431T286 439T323 442Q401 442 461 379T522 216Q522 115 458 52T307 -11ZM182 98Q182 97 187 90T196 79T206 67T218 55T233 44T250 35T271 29T295 26Q330 26 363 46T412 113Q424 148 424 212Q424 287 412 323Q385 405 300 405Q270 405 239 390T188 347L182 339V98Z",
                        transform: "translate(306,0)",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(7758.3,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(8147.3,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(8508.3,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "block",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createVNode("mi", null, "u"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")"),
                createVNode("mo", null, "="),
                createVNode("msub", null, [
                  createVNode("mi", null, "u"),
                  createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createVNode("mtext", null, "ff")
                  ])
                ]),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")"),
                createVNode("mo", null, "+"),
                createVNode("msub", null, [
                  createVNode("mi", null, "u"),
                  createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createVNode("mtext", null, "fb")
                  ])
                ]),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Variable</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Meaning</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="3.871ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1711 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(572,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(961,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1322,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>u</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "u"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "3.871ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 1711 1000",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mi" }, [
                  createVNode("path", {
                    "data-c": "1D462",
                    d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(572,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(961,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1322,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("mi", null, "u"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">total control output</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="5.038ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2226.7 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="TeXAtom" transform="translate(605,-150) scale(0.707)" data-mjx-texclass="ORD"${_scopeId}><g data-mml-node="mtext"${_scopeId}><path data-c="66" d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="66" d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z" transform="translate(306,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g><g data-mml-node="mo" transform="translate(1087.7,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1476.7,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1837.7,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>u</mi><mrow data-mjx-texclass="ORD"${_scopeId2}><mtext${_scopeId2}>ff</mtext></mrow></msub><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "u"),
                    createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                      createVNode("mtext", null, "ff")
                    ])
                  ]),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "5.038ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2226.7 1000",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "msub" }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D462",
                      d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "TeXAtom",
                    transform: "translate(605,-150) scale(0.707)",
                    "data-mjx-texclass": "ORD"
                  }, [
                    createVNode("g", { "data-mml-node": "mtext" }, [
                      createVNode("path", {
                        "data-c": "66",
                        d: "M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z",
                        style: { "stroke-width": "3" }
                      }),
                      createVNode("path", {
                        "data-c": "66",
                        d: "M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z",
                        transform: "translate(306,0)",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1087.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1476.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1837.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("msub", null, [
                  createVNode("mi", null, "u"),
                  createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createVNode("mtext", null, "ff")
                  ])
                ]),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">feedforward term (model)</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="5.438ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2403.5 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="TeXAtom" transform="translate(605,-150) scale(0.707)" data-mjx-texclass="ORD"${_scopeId}><g data-mml-node="mtext"${_scopeId}><path data-c="66" d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="62" d="M307 -11Q234 -11 168 55L158 37Q156 34 153 28T147 17T143 10L138 1L118 0H98V298Q98 599 97 603Q94 622 83 628T38 637H20V660Q20 683 22 683L32 684Q42 685 61 686T98 688Q115 689 135 690T165 693T176 694H179V543Q179 391 180 391L183 394Q186 397 192 401T207 411T228 421T254 431T286 439T323 442Q401 442 461 379T522 216Q522 115 458 52T307 -11ZM182 98Q182 97 187 90T196 79T206 67T218 55T233 44T250 35T271 29T295 26Q330 26 363 46T412 113Q424 148 424 212Q424 287 412 323Q385 405 300 405Q270 405 239 390T188 347L182 339V98Z" transform="translate(306,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g><g data-mml-node="mo" transform="translate(1264.5,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1653.5,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2014.5,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>u</mi><mrow data-mjx-texclass="ORD"${_scopeId2}><mtext${_scopeId2}>fb</mtext></mrow></msub><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "u"),
                    createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                      createVNode("mtext", null, "fb")
                    ])
                  ]),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, ")")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "5.438ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2403.5 1000",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "msub" }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D462",
                      d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "TeXAtom",
                    transform: "translate(605,-150) scale(0.707)",
                    "data-mjx-texclass": "ORD"
                  }, [
                    createVNode("g", { "data-mml-node": "mtext" }, [
                      createVNode("path", {
                        "data-c": "66",
                        d: "M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z",
                        style: { "stroke-width": "3" }
                      }),
                      createVNode("path", {
                        "data-c": "62",
                        d: "M307 -11Q234 -11 168 55L158 37Q156 34 153 28T147 17T143 10L138 1L118 0H98V298Q98 599 97 603Q94 622 83 628T38 637H20V660Q20 683 22 683L32 684Q42 685 61 686T98 688Q115 689 135 690T165 693T176 694H179V543Q179 391 180 391L183 394Q186 397 192 401T207 411T228 421T254 431T286 439T323 442Q401 442 461 379T522 216Q522 115 458 52T307 -11ZM182 98Q182 97 187 90T196 79T206 67T218 55T233 44T250 35T271 29T295 26Q330 26 363 46T412 113Q424 148 424 212Q424 287 412 323Q385 405 300 405Q270 405 239 390T188 347L182 339V98Z",
                        transform: "translate(306,0)",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1264.5,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1653.5,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2014.5,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("msub", null, [
                  createVNode("mi", null, "u"),
                  createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createVNode("mtext", null, "fb")
                  ])
                ]),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, ")")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">feedback term (PID)</td></tr></tbody></table><p>Where `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.339ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.461ex" height="1.339ex" role="img" focusable="false" viewBox="0 -442 1087.7 592" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="TeXAtom" transform="translate(605,-150) scale(0.707)" data-mjx-texclass="ORD"${_scopeId}><g data-mml-node="mtext"${_scopeId}><path data-c="66" d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="66" d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z" transform="translate(306,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>u</mi><mrow data-mjx-texclass="ORD"${_scopeId2}><mtext${_scopeId2}>ff</mtext></mrow></msub></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "u"),
                    createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                      createVNode("mtext", null, "ff")
                    ])
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.339ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "2.461ex",
            height: "1.339ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -442 1087.7 592",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "msub" }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D462",
                      d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "TeXAtom",
                    transform: "translate(605,-150) scale(0.707)",
                    "data-mjx-texclass": "ORD"
                  }, [
                    createVNode("g", { "data-mml-node": "mtext" }, [
                      createVNode("path", {
                        "data-c": "66",
                        d: "M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z",
                        style: { "stroke-width": "3" }
                      }),
                      createVNode("path", {
                        "data-c": "66",
                        d: "M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z",
                        transform: "translate(306,0)",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ])
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("msub", null, [
                  createVNode("mi", null, "u"),
                  createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createVNode("mtext", null, "ff")
                  ])
                ])
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` is computed from a model of the plant (e.g., gravity compensation for a drone) and `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.861ex" height="1.357ex" role="img" focusable="false" viewBox="0 -442 1264.5 599.8" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="TeXAtom" transform="translate(605,-150) scale(0.707)" data-mjx-texclass="ORD"${_scopeId}><g data-mml-node="mtext"${_scopeId}><path data-c="66" d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="62" d="M307 -11Q234 -11 168 55L158 37Q156 34 153 28T147 17T143 10L138 1L118 0H98V298Q98 599 97 603Q94 622 83 628T38 637H20V660Q20 683 22 683L32 684Q42 685 61 686T98 688Q115 689 135 690T165 693T176 694H179V543Q179 391 180 391L183 394Q186 397 192 401T207 411T228 421T254 431T286 439T323 442Q401 442 461 379T522 216Q522 115 458 52T307 -11ZM182 98Q182 97 187 90T196 79T206 67T218 55T233 44T250 35T271 29T295 26Q330 26 363 46T412 113Q424 148 424 212Q424 287 412 323Q385 405 300 405Q270 405 239 390T188 347L182 339V98Z" transform="translate(306,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>u</mi><mrow data-mjx-texclass="ORD"${_scopeId2}><mtext${_scopeId2}>fb</mtext></mrow></msub></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "u"),
                    createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                      createVNode("mtext", null, "fb")
                    ])
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "2.861ex",
            height: "1.357ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -442 1264.5 599.8",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "msub" }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D462",
                      d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "TeXAtom",
                    transform: "translate(605,-150) scale(0.707)",
                    "data-mjx-texclass": "ORD"
                  }, [
                    createVNode("g", { "data-mml-node": "mtext" }, [
                      createVNode("path", {
                        "data-c": "66",
                        d: "M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z",
                        style: { "stroke-width": "3" }
                      }),
                      createVNode("path", {
                        "data-c": "62",
                        d: "M307 -11Q234 -11 168 55L158 37Q156 34 153 28T147 17T143 10L138 1L118 0H98V298Q98 599 97 603Q94 622 83 628T38 637H20V660Q20 683 22 683L32 684Q42 685 61 686T98 688Q115 689 135 690T165 693T176 694H179V543Q179 391 180 391L183 394Q186 397 192 401T207 411T228 421T254 431T286 439T323 442Q401 442 461 379T522 216Q522 115 458 52T307 -11ZM182 98Q182 97 187 90T196 79T206 67T218 55T233 44T250 35T271 29T295 26Q330 26 363 46T412 113Q424 148 424 212Q424 287 412 323Q385 405 300 405Q270 405 239 390T188 347L182 339V98Z",
                        transform: "translate(306,0)",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ])
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("msub", null, [
                  createVNode("mi", null, "u"),
                  createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createVNode("mtext", null, "fb")
                  ])
                ])
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` is the PID feedback term.</p><p><strong>The benefit.</strong> The feedback loop only handles disturbances and model error. The feedforward handles the predictable, steady-state load. This reduces the demands on PID gains and allows tighter tuning.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">MASS</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 1.2</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  # kg</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">GRAVITY</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 9.81</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  # m/s²</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">def</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> feedforward</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(mass, gravity):</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">    # Thrust to exactly cancel gravity - no error needed to compute this</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    return</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> mass </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">*</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> gravity</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">def</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> total_control</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(setpoint, altitude):</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    u_ff </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> feedforward(</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">MASS</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">GRAVITY</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># physics-based prediction</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    u_fb </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> pid.update(setpoint, altitude)  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># PID handles the rest</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    return</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> u_ff </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">+</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> u_fb</span></span></code></pre></div><p>In vehicle dynamics, feedforward is used for steering angle prediction, throttle mapping, and active suspension load estimation.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("reference/control-theory.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const controlTheory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  controlTheory as default
};
