import { resolveComponent, withCtx, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vehicle Performance Metrics","description":"","frontmatter":{"layout":"doc","title":"Vehicle Performance Metrics"},"headers":[],"relativePath":"reference/metrics.md","filePath":"reference/metrics.md"}');
const _sfc_main = { name: "reference/metrics.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_mjx_container = resolveComponent("mjx-container");
  const _component_mjx_assistive_mml = resolveComponent("mjx-assistive-mml");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vehicle-performance-metrics" tabindex="-1">Vehicle Performance Metrics <a class="header-anchor" href="#vehicle-performance-metrics" aria-label="Permalink to &quot;Vehicle Performance Metrics&quot;">​</a></h1><p>This page provides conceptual definitions of commonly used vehicle performance metrics. Each metric is described in terms of the physical behavior it represents and why it is relevant to vehicle design and analysis. No assumptions are made regarding relative importance; the relevance of each metric depends on the intended application of the vehicle.</p><hr><h2 id="steady-state-handling" tabindex="-1">Steady-State Handling <a class="header-anchor" href="#steady-state-handling" aria-label="Permalink to &quot;Steady-State Handling&quot;">​</a></h2><p class="section-intro"> Metrics describing equilibrium behavior once transient effects have decayed. </p><h3 id="maximum-lateral-acceleration-max-nbsp-ay" tabindex="-1">Maximum Lateral Acceleration (Max Ay) <a class="header-anchor" href="#maximum-lateral-acceleration-max-nbsp-ay" aria-label="Permalink to &quot;Maximum Lateral Acceleration (Max&amp;nbsp;Ay)&quot;">​</a></h3><p><strong>Description.</strong> The maximum lateral acceleration the vehicle can sustain in a steady-state corner before tire saturation or loss of stability.</p><p><strong>Physical interpretation.</strong> This metric reflects the combined lateral force-generating capability of the tires, suspension geometry, load transfer characteristics, and overall vehicle mass distribution under quasi-static conditions.</p><p><strong>Why it matters.</strong> Maximum lateral acceleration is commonly used as a proxy for absolute steady-state cornering capability and provides a compact measure of how effectively the vehicle can generate lateral force.</p><p>In simplified form,</p>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    display: "true",
    style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.6ex" })}" xmlns="http://www.w3.org/2000/svg" width="8.266ex" height="5.016ex" role="img" focusable="false" viewBox="0 -1509.9 3653.6 2216.9" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(562,-150) scale(0.707)"${_scopeId}><path data-c="1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(1236.3,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mfrac" transform="translate(2292,0)"${_scopeId}><g data-mml-node="msup" transform="translate(220,676)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D463" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(518,363) scale(0.707)"${_scopeId}><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mi" transform="translate(301.3,-686)"${_scopeId}><path data-c="1D445" d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><rect width="1121.6" height="60" x="120" y="220"${_scopeId}></rect></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "block",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>a</mi><mi${_scopeId2}>y</mi></msub><mo${_scopeId2}>=</mo><mfrac${_scopeId2}><msup${_scopeId2}><mi${_scopeId2}>v</mi><mn${_scopeId2}>2</mn></msup><mi${_scopeId2}>R</mi></mfrac></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  display: "block"
                }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "a"),
                    createVNode("mi", null, "y")
                  ]),
                  createVNode("mo", null, "="),
                  createVNode("mfrac", null, [
                    createVNode("msup", null, [
                      createVNode("mi", null, "v"),
                      createVNode("mn", null, "2")
                    ]),
                    createVNode("mi", null, "R")
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
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.6ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "8.266ex",
            height: "5.016ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -1509.9 3653.6 2216.9",
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
                      "data-c": "1D44E",
                      d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(562,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D466",
                      d: "M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1236.3,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mfrac",
                  transform: "translate(2292,0)"
                }, [
                  createVNode("g", {
                    "data-mml-node": "msup",
                    transform: "translate(220,676)"
                  }, [
                    createVNode("g", { "data-mml-node": "mi" }, [
                      createVNode("path", {
                        "data-c": "1D463",
                        d: "M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mn",
                      transform: "translate(518,363) scale(0.707)"
                    }, [
                      createVNode("path", {
                        "data-c": "32",
                        d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(301.3,-686)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D445",
                      d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("rect", {
                    width: "1121.6",
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
                createVNode("msub", null, [
                  createVNode("mi", null, "a"),
                  createVNode("mi", null, "y")
                ]),
                createVNode("mo", null, "="),
                createVNode("mfrac", null, [
                  createVNode("msup", null, [
                    createVNode("mi", null, "v"),
                    createVNode("mn", null, "2")
                  ]),
                  createVNode("mi", null, "R")
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
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.667ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.169ex" height="1.665ex" role="img" focusable="false" viewBox="0 -441 958.5 736" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(562,-150) scale(0.707)"${_scopeId}><path data-c="1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>a</mi><mi${_scopeId2}>y</mi></msub></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "a"),
                    createVNode("mi", null, "y")
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
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.667ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "2.169ex",
            height: "1.665ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -441 958.5 736",
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
                      "data-c": "1D44E",
                      d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(562,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D466",
                      d: "M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
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
                  createVNode("mi", null, "a"),
                  createVNode("mi", null, "y")
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
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">lateral acceleration</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.097ex" height="1.027ex" role="img" focusable="false" viewBox="0 -443 485 454" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D463" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>v</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "v")
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
            width: "1.097ex",
            height: "1.027ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -443 485 454",
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
                    "data-c": "1D463",
                    d: "M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z",
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
                createVNode("mi", null, "v")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">velocity</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.048ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.717ex" height="1.593ex" role="img" focusable="false" viewBox="0 -683 759 704" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D445" d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>R</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "R")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.048ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "1.717ex",
            height: "1.593ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -683 759 704",
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
                    "data-c": "1D445",
                    d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
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
                createVNode("mi", null, "R")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">turn radius</td></tr></tbody></table><h3 id="linear-understeer-gradient" tabindex="-1">Linear Understeer Gradient <a class="header-anchor" href="#linear-understeer-gradient" aria-label="Permalink to &quot;Linear Understeer Gradient&quot;">​</a></h3><p><strong>Description.</strong> The rate at which required steering input increases with lateral acceleration in the linear tire operating region.</p><p><strong>Physical interpretation.</strong> The linear understeer gradient characterizes the balance between front and rear cornering stiffness and is influenced by suspension geometry, roll stiffness distribution, tire properties, and compliance.</p><p><strong>Why it matters.</strong> This metric defines the fundamental handling balance perceived by the driver during moderate cornering and strongly influences predictability and steering effort.</p>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    display: "true",
    style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.219ex" })}" xmlns="http://www.w3.org/2000/svg" width="9.473ex" height="5.371ex" role="img" focusable="false" viewBox="0 -1393 4187 2374" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43E" d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1166.8,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mfrac" transform="translate(2222.6,0)"${_scopeId}><g data-mml-node="mrow" transform="translate(477.2,676)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D715" d="M202 508Q179 508 169 520T158 547Q158 557 164 577T185 624T230 675T301 710L333 715H345Q378 715 384 714Q447 703 489 661T549 568T566 457Q566 362 519 240T402 53Q321 -22 223 -22Q123 -22 73 56Q42 102 42 148V159Q42 276 129 370T322 465Q383 465 414 434T455 367L458 378Q478 461 478 515Q478 603 437 639T344 676Q266 676 223 612Q264 606 264 572Q264 547 246 528T202 508ZM430 306Q430 372 401 400T333 428Q270 428 222 382Q197 354 183 323T150 221Q132 149 132 116Q132 21 232 21Q244 21 250 22Q327 35 374 112Q389 137 409 196T430 306Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(566,0)"${_scopeId}><path data-c="1D6FF" d="M195 609Q195 656 227 686T302 717Q319 716 351 709T407 697T433 690Q451 682 451 662Q451 644 438 628T403 612Q382 612 348 641T288 671T249 657T235 628Q235 584 334 463Q401 379 401 292Q401 169 340 80T205 -10H198Q127 -10 83 36T36 153Q36 286 151 382Q191 413 252 434Q252 435 245 449T230 481T214 521T201 566T195 609ZM112 130Q112 83 136 55T204 27Q233 27 256 51T291 111T309 178T316 232Q316 267 309 298T295 344T269 400L259 396Q215 381 183 342T137 256T118 179T112 130Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mrow" transform="translate(220,-686)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D715" d="M202 508Q179 508 169 520T158 547Q158 557 164 577T185 624T230 675T301 710L333 715H345Q378 715 384 714Q447 703 489 661T549 568T566 457Q566 362 519 240T402 53Q321 -22 223 -22Q123 -22 73 56Q42 102 42 148V159Q42 276 129 370T322 465Q383 465 414 434T455 367L458 378Q478 461 478 515Q478 603 437 639T344 676Q266 676 223 612Q264 606 264 572Q264 547 246 528T202 508ZM430 306Q430 372 401 400T333 428Q270 428 222 382Q197 354 183 323T150 221Q132 149 132 116Q132 21 232 21Q244 21 250 22Q327 35 374 112Q389 137 409 196T430 306Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="msub" transform="translate(566,0)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(562,-150) scale(0.707)"${_scopeId}><path data-c="1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g><rect width="1724.5" height="60" x="120" y="220"${_scopeId}></rect></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "block",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"${_scopeId2}><mi${_scopeId2}>K</mi><mo${_scopeId2}>=</mo><mfrac${_scopeId2}><mrow${_scopeId2}><mi${_scopeId2}>∂</mi><mi${_scopeId2}>δ</mi></mrow><mrow${_scopeId2}><mi${_scopeId2}>∂</mi><msub${_scopeId2}><mi${_scopeId2}>a</mi><mi${_scopeId2}>y</mi></msub></mrow></mfrac></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  display: "block"
                }, [
                  createVNode("mi", null, "K"),
                  createVNode("mo", null, "="),
                  createVNode("mfrac", null, [
                    createVNode("mrow", null, [
                      createVNode("mi", null, "∂"),
                      createVNode("mi", null, "δ")
                    ]),
                    createVNode("mrow", null, [
                      createVNode("mi", null, "∂"),
                      createVNode("msub", null, [
                        createVNode("mi", null, "a"),
                        createVNode("mi", null, "y")
                      ])
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
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.219ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "9.473ex",
            height: "5.371ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -1393 4187 2374",
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
                    "data-c": "1D43E",
                    d: "M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1166.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mfrac",
                  transform: "translate(2222.6,0)"
                }, [
                  createVNode("g", {
                    "data-mml-node": "mrow",
                    transform: "translate(477.2,676)"
                  }, [
                    createVNode("g", { "data-mml-node": "mi" }, [
                      createVNode("path", {
                        "data-c": "1D715",
                        d: "M202 508Q179 508 169 520T158 547Q158 557 164 577T185 624T230 675T301 710L333 715H345Q378 715 384 714Q447 703 489 661T549 568T566 457Q566 362 519 240T402 53Q321 -22 223 -22Q123 -22 73 56Q42 102 42 148V159Q42 276 129 370T322 465Q383 465 414 434T455 367L458 378Q478 461 478 515Q478 603 437 639T344 676Q266 676 223 612Q264 606 264 572Q264 547 246 528T202 508ZM430 306Q430 372 401 400T333 428Q270 428 222 382Q197 354 183 323T150 221Q132 149 132 116Q132 21 232 21Q244 21 250 22Q327 35 374 112Q389 137 409 196T430 306Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(566,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "1D6FF",
                        d: "M195 609Q195 656 227 686T302 717Q319 716 351 709T407 697T433 690Q451 682 451 662Q451 644 438 628T403 612Q382 612 348 641T288 671T249 657T235 628Q235 584 334 463Q401 379 401 292Q401 169 340 80T205 -10H198Q127 -10 83 36T36 153Q36 286 151 382Q191 413 252 434Q252 435 245 449T230 481T214 521T201 566T195 609ZM112 130Q112 83 136 55T204 27Q233 27 256 51T291 111T309 178T316 232Q316 267 309 298T295 344T269 400L259 396Q215 381 183 342T137 256T118 179T112 130Z",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mrow",
                    transform: "translate(220,-686)"
                  }, [
                    createVNode("g", { "data-mml-node": "mi" }, [
                      createVNode("path", {
                        "data-c": "1D715",
                        d: "M202 508Q179 508 169 520T158 547Q158 557 164 577T185 624T230 675T301 710L333 715H345Q378 715 384 714Q447 703 489 661T549 568T566 457Q566 362 519 240T402 53Q321 -22 223 -22Q123 -22 73 56Q42 102 42 148V159Q42 276 129 370T322 465Q383 465 414 434T455 367L458 378Q478 461 478 515Q478 603 437 639T344 676Q266 676 223 612Q264 606 264 572Q264 547 246 528T202 508ZM430 306Q430 372 401 400T333 428Q270 428 222 382Q197 354 183 323T150 221Q132 149 132 116Q132 21 232 21Q244 21 250 22Q327 35 374 112Q389 137 409 196T430 306Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "msub",
                      transform: "translate(566,0)"
                    }, [
                      createVNode("g", { "data-mml-node": "mi" }, [
                        createVNode("path", {
                          "data-c": "1D44E",
                          d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(562,-150) scale(0.707)"
                      }, [
                        createVNode("path", {
                          "data-c": "1D466",
                          d: "M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ])
                  ]),
                  createVNode("rect", {
                    width: "1724.5",
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
                createVNode("mi", null, "K"),
                createVNode("mo", null, "="),
                createVNode("mfrac", null, [
                  createVNode("mrow", null, [
                    createVNode("mi", null, "∂"),
                    createVNode("mi", null, "δ")
                  ]),
                  createVNode("mrow", null, [
                    createVNode("mi", null, "∂"),
                    createVNode("msub", null, [
                      createVNode("mi", null, "a"),
                      createVNode("mi", null, "y")
                    ])
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
  _push(`<table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Variable</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Meaning</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" })}" xmlns="http://www.w3.org/2000/svg" width="2.011ex" height="1.545ex" role="img" focusable="false" viewBox="0 -683 889 683" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43E" d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>K</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "K")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "2.011ex",
            height: "1.545ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -683 889 683",
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
                    "data-c": "1D43E",
                    d: "M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",
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
                createVNode("mi", null, "K")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">understeer gradient</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.023ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.005ex" height="1.645ex" role="img" focusable="false" viewBox="0 -717 444 727" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D6FF" d="M195 609Q195 656 227 686T302 717Q319 716 351 709T407 697T433 690Q451 682 451 662Q451 644 438 628T403 612Q382 612 348 641T288 671T249 657T235 628Q235 584 334 463Q401 379 401 292Q401 169 340 80T205 -10H198Q127 -10 83 36T36 153Q36 286 151 382Q191 413 252 434Q252 435 245 449T230 481T214 521T201 566T195 609ZM112 130Q112 83 136 55T204 27Q233 27 256 51T291 111T309 178T316 232Q316 267 309 298T295 344T269 400L259 396Q215 381 183 342T137 256T118 179T112 130Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>δ</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "δ")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.023ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "1.005ex",
            height: "1.645ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -717 444 727",
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
                    "data-c": "1D6FF",
                    d: "M195 609Q195 656 227 686T302 717Q319 716 351 709T407 697T433 690Q451 682 451 662Q451 644 438 628T403 612Q382 612 348 641T288 671T249 657T235 628Q235 584 334 463Q401 379 401 292Q401 169 340 80T205 -10H198Q127 -10 83 36T36 153Q36 286 151 382Q191 413 252 434Q252 435 245 449T230 481T214 521T201 566T195 609ZM112 130Q112 83 136 55T204 27Q233 27 256 51T291 111T309 178T316 232Q316 267 309 298T295 344T269 400L259 396Q215 381 183 342T137 256T118 179T112 130Z",
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
                createVNode("mi", null, "δ")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">steering angle</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.667ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.169ex" height="1.665ex" role="img" focusable="false" viewBox="0 -441 958.5 736" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(562,-150) scale(0.707)"${_scopeId}><path data-c="1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>a</mi><mi${_scopeId2}>y</mi></msub></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "a"),
                    createVNode("mi", null, "y")
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
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.667ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "2.169ex",
            height: "1.665ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -441 958.5 736",
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
                      "data-c": "1D44E",
                      d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(562,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D466",
                      d: "M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
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
                  createVNode("mi", null, "a"),
                  createVNode("mi", null, "y")
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
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">lateral acceleration</td></tr></tbody></table><h3 id="limit-understeer-behavior" tabindex="-1">Limit Understeer Behavior <a class="header-anchor" href="#limit-understeer-behavior" aria-label="Permalink to &quot;Limit Understeer Behavior&quot;">​</a></h3><p><strong>Description.</strong> The effective understeer or oversteer tendency as the vehicle approaches tire saturation.</p><p><strong>Physical interpretation.</strong> This behavior arises from nonlinear tire force characteristics, load transfer effects, and compliance within the suspension and steering systems.</p><p><strong>Why it matters.</strong> Limit understeer behavior governs how the vehicle behaves near the edge of grip, influencing controllability and driver confidence during aggressive maneuvers.</p><h3 id="linear-sideslip-gradient" tabindex="-1">Linear Sideslip Gradient <a class="header-anchor" href="#linear-sideslip-gradient" aria-label="Permalink to &quot;Linear Sideslip Gradient&quot;">​</a></h3><p><strong>Description.</strong> The relationship between vehicle sideslip angle and lateral acceleration in the linear operating region.</p><p><strong>Physical interpretation.</strong> This metric reflects the yaw stiffness of the vehicle and is influenced by mass distribution, yaw inertia, and tire slip angle characteristics.</p><p><strong>Why it matters.</strong> Linear sideslip behavior affects how stable or &quot;planted&quot; the vehicle feels during normal cornering.</p>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    display: "true",
    style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.667ex" })}" xmlns="http://www.w3.org/2000/svg" width="9.471ex" height="2.364ex" role="img" focusable="false" viewBox="0 -750 4186 1045" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D6FD" d="M29 -194Q23 -188 23 -186Q23 -183 102 134T186 465Q208 533 243 584T309 658Q365 705 429 705H431Q493 705 533 667T573 570Q573 465 469 396L482 383Q533 332 533 252Q533 139 448 65T257 -10Q227 -10 203 -2T165 17T143 40T131 59T126 65L62 -188Q60 -194 42 -194H29ZM353 431Q392 431 427 419L432 422Q436 426 439 429T449 439T461 453T472 471T484 495T493 524T501 560Q503 569 503 593Q503 611 502 616Q487 667 426 667Q384 667 347 643T286 582T247 514T224 455Q219 439 186 308T152 168Q151 163 151 147Q151 99 173 68Q204 26 260 26Q302 26 349 51T425 137Q441 171 449 214T457 279Q457 337 422 372Q380 358 347 358H337Q258 358 258 389Q258 396 261 403Q275 431 353 431Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(843.8,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1899.6,0)"${_scopeId}><path data-c="1D453" d="M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2449.6,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="msub" transform="translate(2838.6,0)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(562,-150) scale(0.707)"${_scopeId}><path data-c="1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(3797,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "block",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"${_scopeId2}><mi${_scopeId2}>β</mi><mo${_scopeId2}>=</mo><mi${_scopeId2}>f</mi><mo stretchy="false"${_scopeId2}>(</mo><msub${_scopeId2}><mi${_scopeId2}>a</mi><mi${_scopeId2}>y</mi></msub><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  display: "block"
                }, [
                  createVNode("mi", null, "β"),
                  createVNode("mo", null, "="),
                  createVNode("mi", null, "f"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("msub", null, [
                    createVNode("mi", null, "a"),
                    createVNode("mi", null, "y")
                  ]),
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
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.667ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "9.471ex",
            height: "2.364ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 4186 1045",
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
                    "data-c": "1D6FD",
                    d: "M29 -194Q23 -188 23 -186Q23 -183 102 134T186 465Q208 533 243 584T309 658Q365 705 429 705H431Q493 705 533 667T573 570Q573 465 469 396L482 383Q533 332 533 252Q533 139 448 65T257 -10Q227 -10 203 -2T165 17T143 40T131 59T126 65L62 -188Q60 -194 42 -194H29ZM353 431Q392 431 427 419L432 422Q436 426 439 429T449 439T461 453T472 471T484 495T493 524T501 560Q503 569 503 593Q503 611 502 616Q487 667 426 667Q384 667 347 643T286 582T247 514T224 455Q219 439 186 308T152 168Q151 163 151 147Q151 99 173 68Q204 26 260 26Q302 26 349 51T425 137Q441 171 449 214T457 279Q457 337 422 372Q380 358 347 358H337Q258 358 258 389Q258 396 261 403Q275 431 353 431Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(843.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1899.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D453",
                    d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2449.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "msub",
                  transform: "translate(2838.6,0)"
                }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D44E",
                      d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(562,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D466",
                      d: "M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(3797,0)"
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
                createVNode("mi", null, "β"),
                createVNode("mo", null, "="),
                createVNode("mi", null, "f"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("msub", null, [
                  createVNode("mi", null, "a"),
                  createVNode("mi", null, "y")
                ]),
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
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.281ex" height="2.034ex" role="img" focusable="false" viewBox="0 -705 566 899" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D6FD" d="M29 -194Q23 -188 23 -186Q23 -183 102 134T186 465Q208 533 243 584T309 658Q365 705 429 705H431Q493 705 533 667T573 570Q573 465 469 396L482 383Q533 332 533 252Q533 139 448 65T257 -10Q227 -10 203 -2T165 17T143 40T131 59T126 65L62 -188Q60 -194 42 -194H29ZM353 431Q392 431 427 419L432 422Q436 426 439 429T449 439T461 453T472 471T484 495T493 524T501 560Q503 569 503 593Q503 611 502 616Q487 667 426 667Q384 667 347 643T286 582T247 514T224 455Q219 439 186 308T152 168Q151 163 151 147Q151 99 173 68Q204 26 260 26Q302 26 349 51T425 137Q441 171 449 214T457 279Q457 337 422 372Q380 358 347 358H337Q258 358 258 389Q258 396 261 403Q275 431 353 431Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>β</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "β")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "1.281ex",
            height: "2.034ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -705 566 899",
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
                    "data-c": "1D6FD",
                    d: "M29 -194Q23 -188 23 -186Q23 -183 102 134T186 465Q208 533 243 584T309 658Q365 705 429 705H431Q493 705 533 667T573 570Q573 465 469 396L482 383Q533 332 533 252Q533 139 448 65T257 -10Q227 -10 203 -2T165 17T143 40T131 59T126 65L62 -188Q60 -194 42 -194H29ZM353 431Q392 431 427 419L432 422Q436 426 439 429T449 439T461 453T472 471T484 495T493 524T501 560Q503 569 503 593Q503 611 502 616Q487 667 426 667Q384 667 347 643T286 582T247 514T224 455Q219 439 186 308T152 168Q151 163 151 147Q151 99 173 68Q204 26 260 26Q302 26 349 51T425 137Q441 171 449 214T457 279Q457 337 422 372Q380 358 347 358H337Q258 358 258 389Q258 396 261 403Q275 431 353 431Z",
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
                createVNode("mi", null, "β")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">sideslip angle</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.667ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.169ex" height="1.665ex" role="img" focusable="false" viewBox="0 -441 958.5 736" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(562,-150) scale(0.707)"${_scopeId}><path data-c="1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>a</mi><mi${_scopeId2}>y</mi></msub></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "a"),
                    createVNode("mi", null, "y")
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
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.667ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "2.169ex",
            height: "1.665ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -441 958.5 736",
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
                      "data-c": "1D44E",
                      d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(562,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D466",
                      d: "M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
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
                  createVNode("mi", null, "a"),
                  createVNode("mi", null, "y")
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
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">lateral acceleration</td></tr></tbody></table><h3 id="limit-sideslip-behavior" tabindex="-1">Limit Sideslip Behavior <a class="header-anchor" href="#limit-sideslip-behavior" aria-label="Permalink to &quot;Limit Sideslip Behavior&quot;">​</a></h3><p><strong>Description.</strong> Vehicle sideslip response as the tires approach or exceed their lateral force limits.</p><p><strong>Physical interpretation.</strong> Governed by yaw moment balance, tire force saturation and fall-off, and inertial coupling.</p><p><strong>Why it matters.</strong> Limit sideslip behavior determines whether the vehicle remains controllable at the edge of grip or transitions abruptly into loss of control.</p><hr><h2 id="transient-handling" tabindex="-1">Transient Handling <a class="header-anchor" href="#transient-handling" aria-label="Permalink to &quot;Transient Handling&quot;">​</a></h2><p class="section-intro"> Metrics describing time-domain response to steering inputs. </p><p>Natural frequency and roll stiffness are interdependent physical requirements for transient response. Higher natural frequency reduces settling time after steering input; higher roll stiffness eliminates body lean lag and allows tires to reach peak grip immediately. These values must be optimized together, they are not independent tuning goals but necessary outcomes of optimizing for faster, more stable transient response.</p><h3 id="yaw-rate-gain" tabindex="-1">Yaw Rate Gain <a class="header-anchor" href="#yaw-rate-gain" aria-label="Permalink to &quot;Yaw Rate Gain&quot;">​</a></h3><p><strong>Description.</strong> The ratio between vehicle yaw rate and steering input under steady or low-frequency conditions.</p>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    display: "true",
    style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.575ex" })}" xmlns="http://www.w3.org/2000/svg" width="7.72ex" height="4.104ex" role="img" focusable="false" viewBox="0 -1118 3412.5 1814" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43A" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(819,-150) scale(0.707)"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(1465.7,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mfrac" transform="translate(2521.5,0)"${_scopeId}><g data-mml-node="mi" transform="translate(220,676)"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(223.5,-686)"${_scopeId}><path data-c="1D6FF" d="M195 609Q195 656 227 686T302 717Q319 716 351 709T407 697T433 690Q451 682 451 662Q451 644 438 628T403 612Q382 612 348 641T288 671T249 657T235 628Q235 584 334 463Q401 379 401 292Q401 169 340 80T205 -10H198Q127 -10 83 36T36 153Q36 286 151 382Q191 413 252 434Q252 435 245 449T230 481T214 521T201 566T195 609ZM112 130Q112 83 136 55T204 27Q233 27 256 51T291 111T309 178T316 232Q316 267 309 298T295 344T269 400L259 396Q215 381 183 342T137 256T118 179T112 130Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><rect width="651" height="60" x="120" y="220"${_scopeId}></rect></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "block",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>G</mi><mi${_scopeId2}>r</mi></msub><mo${_scopeId2}>=</mo><mfrac${_scopeId2}><mi${_scopeId2}>r</mi><mi${_scopeId2}>δ</mi></mfrac></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  display: "block"
                }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "G"),
                    createVNode("mi", null, "r")
                  ]),
                  createVNode("mo", null, "="),
                  createVNode("mfrac", null, [
                    createVNode("mi", null, "r"),
                    createVNode("mi", null, "δ")
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
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.575ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "7.72ex",
            height: "4.104ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -1118 3412.5 1814",
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
                      "data-c": "1D43A",
                      d: "M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(819,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D45F",
                      d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1465.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mfrac",
                  transform: "translate(2521.5,0)"
                }, [
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(220,676)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D45F",
                      d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(223.5,-686)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D6FF",
                      d: "M195 609Q195 656 227 686T302 717Q319 716 351 709T407 697T433 690Q451 682 451 662Q451 644 438 628T403 612Q382 612 348 641T288 671T249 657T235 628Q235 584 334 463Q401 379 401 292Q401 169 340 80T205 -10H198Q127 -10 83 36T36 153Q36 286 151 382Q191 413 252 434Q252 435 245 449T230 481T214 521T201 566T195 609ZM112 130Q112 83 136 55T204 27Q233 27 256 51T291 111T309 178T316 232Q316 267 309 298T295 344T269 400L259 396Q215 381 183 342T137 256T118 179T112 130Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("rect", {
                    width: "651",
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
                createVNode("msub", null, [
                  createVNode("mi", null, "G"),
                  createVNode("mi", null, "r")
                ]),
                createVNode("mo", null, "="),
                createVNode("mfrac", null, [
                  createVNode("mi", null, "r"),
                  createVNode("mi", null, "δ")
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
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.688ex" height="1.952ex" role="img" focusable="false" viewBox="0 -705 1187.9 862.8" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43A" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(819,-150) scale(0.707)"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>G</mi><mi${_scopeId2}>r</mi></msub></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "G"),
                    createVNode("mi", null, "r")
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
            width: "2.688ex",
            height: "1.952ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -705 1187.9 862.8",
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
                      "data-c": "1D43A",
                      d: "M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(819,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D45F",
                      d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
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
                  createVNode("mi", null, "G"),
                  createVNode("mi", null, "r")
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
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">yaw rate gain</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
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
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">yaw rate (rotation speed)</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.023ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.005ex" height="1.645ex" role="img" focusable="false" viewBox="0 -717 444 727" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D6FF" d="M195 609Q195 656 227 686T302 717Q319 716 351 709T407 697T433 690Q451 682 451 662Q451 644 438 628T403 612Q382 612 348 641T288 671T249 657T235 628Q235 584 334 463Q401 379 401 292Q401 169 340 80T205 -10H198Q127 -10 83 36T36 153Q36 286 151 382Q191 413 252 434Q252 435 245 449T230 481T214 521T201 566T195 609ZM112 130Q112 83 136 55T204 27Q233 27 256 51T291 111T309 178T316 232Q316 267 309 298T295 344T269 400L259 396Q215 381 183 342T137 256T118 179T112 130Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>δ</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "δ")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.023ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "1.005ex",
            height: "1.645ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -717 444 727",
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
                    "data-c": "1D6FF",
                    d: "M195 609Q195 656 227 686T302 717Q319 716 351 709T407 697T433 690Q451 682 451 662Q451 644 438 628T403 612Q382 612 348 641T288 671T249 657T235 628Q235 584 334 463Q401 379 401 292Q401 169 340 80T205 -10H198Q127 -10 83 36T36 153Q36 286 151 382Q191 413 252 434Q252 435 245 449T230 481T214 521T201 566T195 609ZM112 130Q112 83 136 55T204 27Q233 27 256 51T291 111T309 178T316 232Q316 267 309 298T295 344T269 400L259 396Q215 381 183 342T137 256T118 179T112 130Z",
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
                createVNode("mi", null, "δ")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">steering angle</td></tr></tbody></table><p><strong>Why it matters.</strong> Yaw rate gain defines how strongly the vehicle responds rotationally to driver input and forms the basis for interpreting many other dynamic metrics.</p><h3 id="yaw-rate-response-delay" tabindex="-1">Yaw Rate Response Delay <a class="header-anchor" href="#yaw-rate-response-delay" aria-label="Permalink to &quot;Yaw Rate Response Delay&quot;">​</a></h3><p><strong>Description.</strong> The time or phase delay between steering input and yaw rate response.</p>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    display: "true",
    style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.172ex" })}" xmlns="http://www.w3.org/2000/svg" width="16.123ex" height="5.475ex" role="img" focusable="false" viewBox="0 -1460 7126.5 2420" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D719" d="M409 688Q413 694 421 694H429H442Q448 688 448 686Q448 679 418 563Q411 535 404 504T392 458L388 442Q388 441 397 441T429 435T477 418Q521 397 550 357T579 260T548 151T471 65T374 11T279 -10H275L251 -105Q245 -128 238 -160Q230 -192 227 -198T215 -205H209Q189 -205 189 -198Q189 -193 211 -103L234 -11Q234 -10 226 -10Q221 -10 206 -8T161 6T107 36T62 89T43 171Q43 231 76 284T157 370T254 422T342 441Q347 441 348 445L378 567Q409 686 409 688ZM122 150Q122 116 134 91T167 53T203 35T237 27H244L337 404Q333 404 326 403T297 395T255 379T211 350T170 304Q152 276 137 237Q122 191 122 150ZM500 282Q500 320 484 347T444 385T405 400T381 404H378L332 217L284 29Q284 27 285 27Q293 27 317 33T357 47Q400 66 431 100T475 170T494 234T500 282Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(629,-150) scale(0.707)"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(997.9,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1386.9,0)"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2008.9,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2675.7,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(3731.5,0)"${_scopeId}><path data-c="2220" d="M71 0L68 2Q65 3 63 5T58 11T55 20Q55 22 57 28Q67 43 346 361Q397 420 474 508Q595 648 616 671T647 694T661 688T666 674Q666 668 663 663Q662 662 627 622T524 503T390 350L120 41L386 40H653Q666 30 666 20Q666 8 651 0H71Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mfrac" transform="translate(4453.5,0)"${_scopeId}><g data-mml-node="mrow" transform="translate(257,710)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D445" d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(759,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1148,0)"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1770,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mrow" transform="translate(220,-710)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="394" d="M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(833,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1222,0)"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1844,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><rect width="2433" height="60" x="120" y="220"${_scopeId}></rect></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "block",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>ϕ</mi><mi${_scopeId2}>r</mi></msub><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>ω</mi><mo stretchy="false"${_scopeId2}>)</mo><mo${_scopeId2}>=</mo><mi mathvariant="normal"${_scopeId2}>∠</mi><mfrac${_scopeId2}><mrow${_scopeId2}><mi${_scopeId2}>R</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>ω</mi><mo stretchy="false"${_scopeId2}>)</mo></mrow><mrow${_scopeId2}><mi mathvariant="normal"${_scopeId2}>Δ</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>ω</mi><mo stretchy="false"${_scopeId2}>)</mo></mrow></mfrac></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  display: "block"
                }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "ϕ"),
                    createVNode("mi", null, "r")
                  ]),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "ω"),
                  createVNode("mo", { stretchy: "false" }, ")"),
                  createVNode("mo", null, "="),
                  createVNode("mi", { mathvariant: "normal" }, "∠"),
                  createVNode("mfrac", null, [
                    createVNode("mrow", null, [
                      createVNode("mi", null, "R"),
                      createVNode("mo", { stretchy: "false" }, "("),
                      createVNode("mi", null, "ω"),
                      createVNode("mo", { stretchy: "false" }, ")")
                    ]),
                    createVNode("mrow", null, [
                      createVNode("mi", { mathvariant: "normal" }, "Δ"),
                      createVNode("mo", { stretchy: "false" }, "("),
                      createVNode("mi", null, "ω"),
                      createVNode("mo", { stretchy: "false" }, ")")
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
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.172ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "16.123ex",
            height: "5.475ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -1460 7126.5 2420",
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
                      "data-c": "1D719",
                      d: "M409 688Q413 694 421 694H429H442Q448 688 448 686Q448 679 418 563Q411 535 404 504T392 458L388 442Q388 441 397 441T429 435T477 418Q521 397 550 357T579 260T548 151T471 65T374 11T279 -10H275L251 -105Q245 -128 238 -160Q230 -192 227 -198T215 -205H209Q189 -205 189 -198Q189 -193 211 -103L234 -11Q234 -10 226 -10Q221 -10 206 -8T161 6T107 36T62 89T43 171Q43 231 76 284T157 370T254 422T342 441Q347 441 348 445L378 567Q409 686 409 688ZM122 150Q122 116 134 91T167 53T203 35T237 27H244L337 404Q333 404 326 403T297 395T255 379T211 350T170 304Q152 276 137 237Q122 191 122 150ZM500 282Q500 320 484 347T444 385T405 400T381 404H378L332 217L284 29Q284 27 285 27Q293 27 317 33T357 47Q400 66 431 100T475 170T494 234T500 282Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(629,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D45F",
                      d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(997.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1386.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D714",
                    d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2008.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2675.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(3731.5,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2220",
                    d: "M71 0L68 2Q65 3 63 5T58 11T55 20Q55 22 57 28Q67 43 346 361Q397 420 474 508Q595 648 616 671T647 694T661 688T666 674Q666 668 663 663Q662 662 627 622T524 503T390 350L120 41L386 40H653Q666 30 666 20Q666 8 651 0H71Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mfrac",
                  transform: "translate(4453.5,0)"
                }, [
                  createVNode("g", {
                    "data-mml-node": "mrow",
                    transform: "translate(257,710)"
                  }, [
                    createVNode("g", { "data-mml-node": "mi" }, [
                      createVNode("path", {
                        "data-c": "1D445",
                        d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(759,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "28",
                        d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(1148,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "1D714",
                        d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(1770,0)"
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
                    transform: "translate(220,-710)"
                  }, [
                    createVNode("g", { "data-mml-node": "mi" }, [
                      createVNode("path", {
                        "data-c": "394",
                        d: "M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(833,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "28",
                        d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(1222,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "1D714",
                        d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(1844,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "29",
                        d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ]),
                  createVNode("rect", {
                    width: "2433",
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
                createVNode("msub", null, [
                  createVNode("mi", null, "ϕ"),
                  createVNode("mi", null, "r")
                ]),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "ω"),
                createVNode("mo", { stretchy: "false" }, ")"),
                createVNode("mo", null, "="),
                createVNode("mi", { mathvariant: "normal" }, "∠"),
                createVNode("mfrac", null, [
                  createVNode("mrow", null, [
                    createVNode("mi", null, "R"),
                    createVNode("mo", { stretchy: "false" }, "("),
                    createVNode("mi", null, "ω"),
                    createVNode("mo", { stretchy: "false" }, ")")
                  ]),
                  createVNode("mrow", null, [
                    createVNode("mi", { mathvariant: "normal" }, "Δ"),
                    createVNode("mo", { stretchy: "false" }, "("),
                    createVNode("mi", null, "ω"),
                    createVNode("mo", { stretchy: "false" }, ")")
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
  _push(`<table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Variable</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Meaning</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="5.425ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2397.9 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D719" d="M409 688Q413 694 421 694H429H442Q448 688 448 686Q448 679 418 563Q411 535 404 504T392 458L388 442Q388 441 397 441T429 435T477 418Q521 397 550 357T579 260T548 151T471 65T374 11T279 -10H275L251 -105Q245 -128 238 -160Q230 -192 227 -198T215 -205H209Q189 -205 189 -198Q189 -193 211 -103L234 -11Q234 -10 226 -10Q221 -10 206 -8T161 6T107 36T62 89T43 171Q43 231 76 284T157 370T254 422T342 441Q347 441 348 445L378 567Q409 686 409 688ZM122 150Q122 116 134 91T167 53T203 35T237 27H244L337 404Q333 404 326 403T297 395T255 379T211 350T170 304Q152 276 137 237Q122 191 122 150ZM500 282Q500 320 484 347T444 385T405 400T381 404H378L332 217L284 29Q284 27 285 27Q293 27 317 33T357 47Q400 66 431 100T475 170T494 234T500 282Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(629,-150) scale(0.707)"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(997.9,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1386.9,0)"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2008.9,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>ϕ</mi><mi${_scopeId2}>r</mi></msub><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>ω</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "ϕ"),
                    createVNode("mi", null, "r")
                  ]),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "ω"),
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
            width: "5.425ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2397.9 1000",
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
                      "data-c": "1D719",
                      d: "M409 688Q413 694 421 694H429H442Q448 688 448 686Q448 679 418 563Q411 535 404 504T392 458L388 442Q388 441 397 441T429 435T477 418Q521 397 550 357T579 260T548 151T471 65T374 11T279 -10H275L251 -105Q245 -128 238 -160Q230 -192 227 -198T215 -205H209Q189 -205 189 -198Q189 -193 211 -103L234 -11Q234 -10 226 -10Q221 -10 206 -8T161 6T107 36T62 89T43 171Q43 231 76 284T157 370T254 422T342 441Q347 441 348 445L378 567Q409 686 409 688ZM122 150Q122 116 134 91T167 53T203 35T237 27H244L337 404Q333 404 326 403T297 395T255 379T211 350T170 304Q152 276 137 237Q122 191 122 150ZM500 282Q500 320 484 347T444 385T405 400T381 404H378L332 217L284 29Q284 27 285 27Q293 27 317 33T357 47Q400 66 431 100T475 170T494 234T500 282Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(629,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D45F",
                      d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(997.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1386.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D714",
                    d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2008.9,0)"
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
                  createVNode("mi", null, "ϕ"),
                  createVNode("mi", null, "r")
                ]),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "ω"),
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
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">phase angle at frequency `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.407ex" height="1.027ex" role="img" focusable="false" viewBox="0 -443 622 454" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>ω</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "ω")
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
            width: "1.407ex",
            height: "1.027ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -443 622 454",
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
                    "data-c": "1D714",
                    d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
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
                createVNode("mi", null, "ω")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="4.885ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2159 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D445" d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(759,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1148,0)"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1770,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>R</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>ω</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "R"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "ω"),
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
            width: "4.885ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2159 1000",
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
                    "data-c": "1D445",
                    d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(759,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1148,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D714",
                    d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1770,0)"
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
                createVNode("mi", null, "R"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "ω"),
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
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">yaw rate response</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="5.052ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2233 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="394" d="M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(833,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1222,0)"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1844,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi mathvariant="normal"${_scopeId2}>Δ</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>ω</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", { mathvariant: "normal" }, "Δ"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "ω"),
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
            width: "5.052ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2233 1000",
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
                    "data-c": "394",
                    d: "M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(833,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1222,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D714",
                    d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1844,0)"
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
                createVNode("mi", { mathvariant: "normal" }, "Δ"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "ω"),
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
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">steering input</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.407ex" height="1.027ex" role="img" focusable="false" viewBox="0 -443 622 454" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>ω</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "ω")
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
            width: "1.407ex",
            height: "1.027ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -443 622 454",
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
                    "data-c": "1D714",
                    d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
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
                createVNode("mi", null, "ω")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">frequency</td></tr></tbody></table><p><strong>Why it matters.</strong> Yaw delay strongly affects perceived responsiveness and driver confidence during rapid maneuvers.</p><h3 id="lateral-acceleration-response-delay" tabindex="-1">Lateral Acceleration Response Delay <a class="header-anchor" href="#lateral-acceleration-response-delay" aria-label="Permalink to &quot;Lateral Acceleration Response Delay&quot;">​</a></h3><p><strong>Description.</strong> The time or phase delay between steering input and lateral acceleration response.</p><p><strong>Why it matters.</strong> This metric influences how quickly the vehicle &quot;takes a set&quot; and how connected it feels during turn-in.</p><h3 id="yaw-rate-amplification" tabindex="-1">Yaw Rate Amplification <a class="header-anchor" href="#yaw-rate-amplification" aria-label="Permalink to &quot;Yaw Rate Amplification&quot;">​</a></h3><p><strong>Description.</strong> The ratio of peak yaw rate response to steady-state yaw rate response following a steering input.</p>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    display: "true",
    style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.907ex" })}" xmlns="http://www.w3.org/2000/svg" width="11.057ex" height="4.598ex" role="img" focusable="false" viewBox="0 -1189.2 4887.1 2032.2" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(783,-150) scale(0.707)"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(1429.7,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mfrac" transform="translate(2485.5,0)"${_scopeId}><g data-mml-node="msub" transform="translate(220,747.2)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="TeXAtom" transform="translate(484,-150) scale(0.707)" data-mjx-texclass="ORD"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(503,0)"${_scopeId}><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(969,0)"${_scopeId}><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1498,0)"${_scopeId}><path data-c="1D458" d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g><g data-mml-node="msub" transform="translate(602.2,-686)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="TeXAtom" transform="translate(484,-150) scale(0.707)" data-mjx-texclass="ORD"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(469,0)"${_scopeId}><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g><rect width="2161.6" height="60" x="120" y="220"${_scopeId}></rect></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "block",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>A</mi><mi${_scopeId2}>r</mi></msub><mo${_scopeId2}>=</mo><mfrac${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>r</mi><mrow data-mjx-texclass="ORD"${_scopeId2}><mi${_scopeId2}>p</mi><mi${_scopeId2}>e</mi><mi${_scopeId2}>a</mi><mi${_scopeId2}>k</mi></mrow></msub><msub${_scopeId2}><mi${_scopeId2}>r</mi><mrow data-mjx-texclass="ORD"${_scopeId2}><mi${_scopeId2}>s</mi><mi${_scopeId2}>s</mi></mrow></msub></mfrac></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  display: "block"
                }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "A"),
                    createVNode("mi", null, "r")
                  ]),
                  createVNode("mo", null, "="),
                  createVNode("mfrac", null, [
                    createVNode("msub", null, [
                      createVNode("mi", null, "r"),
                      createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                        createVNode("mi", null, "p"),
                        createVNode("mi", null, "e"),
                        createVNode("mi", null, "a"),
                        createVNode("mi", null, "k")
                      ])
                    ]),
                    createVNode("msub", null, [
                      createVNode("mi", null, "r"),
                      createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                        createVNode("mi", null, "s"),
                        createVNode("mi", null, "s")
                      ])
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
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.907ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "11.057ex",
            height: "4.598ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -1189.2 4887.1 2032.2",
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
                      "data-c": "1D434",
                      d: "M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(783,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D45F",
                      d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1429.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mfrac",
                  transform: "translate(2485.5,0)"
                }, [
                  createVNode("g", {
                    "data-mml-node": "msub",
                    transform: "translate(220,747.2)"
                  }, [
                    createVNode("g", { "data-mml-node": "mi" }, [
                      createVNode("path", {
                        "data-c": "1D45F",
                        d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "TeXAtom",
                      transform: "translate(484,-150) scale(0.707)",
                      "data-mjx-texclass": "ORD"
                    }, [
                      createVNode("g", { "data-mml-node": "mi" }, [
                        createVNode("path", {
                          "data-c": "1D45D",
                          d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(503,0)"
                      }, [
                        createVNode("path", {
                          "data-c": "1D452",
                          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(969,0)"
                      }, [
                        createVNode("path", {
                          "data-c": "1D44E",
                          d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(1498,0)"
                      }, [
                        createVNode("path", {
                          "data-c": "1D458",
                          d: "M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ])
                  ]),
                  createVNode("g", {
                    "data-mml-node": "msub",
                    transform: "translate(602.2,-686)"
                  }, [
                    createVNode("g", { "data-mml-node": "mi" }, [
                      createVNode("path", {
                        "data-c": "1D45F",
                        d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "TeXAtom",
                      transform: "translate(484,-150) scale(0.707)",
                      "data-mjx-texclass": "ORD"
                    }, [
                      createVNode("g", { "data-mml-node": "mi" }, [
                        createVNode("path", {
                          "data-c": "1D460",
                          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(469,0)"
                      }, [
                        createVNode("path", {
                          "data-c": "1D460",
                          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ])
                  ]),
                  createVNode("rect", {
                    width: "2161.6",
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
                createVNode("msub", null, [
                  createVNode("mi", null, "A"),
                  createVNode("mi", null, "r")
                ]),
                createVNode("mo", null, "="),
                createVNode("mfrac", null, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "r"),
                    createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                      createVNode("mi", null, "p"),
                      createVNode("mi", null, "e"),
                      createVNode("mi", null, "a"),
                      createVNode("mi", null, "k")
                    ])
                  ]),
                  createVNode("msub", null, [
                    createVNode("mi", null, "r"),
                    createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                      createVNode("mi", null, "s"),
                      createVNode("mi", null, "s")
                    ])
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
  _push(`<table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Variable</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Meaning</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.606ex" height="1.977ex" role="img" focusable="false" viewBox="0 -716 1151.9 873.8" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(783,-150) scale(0.707)"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>A</mi><mi${_scopeId2}>r</mi></msub></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "A"),
                    createVNode("mi", null, "r")
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
            width: "2.606ex",
            height: "1.977ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -716 1151.9 873.8",
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
                      "data-c": "1D434",
                      d: "M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(783,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D45F",
                      d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
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
                  createVNode("mi", null, "A"),
                  createVNode("mi", null, "r")
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
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">amplification ratio</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.65ex" })}" xmlns="http://www.w3.org/2000/svg" width="4.438ex" height="1.65ex" role="img" focusable="false" viewBox="0 -442 1961.6 729.2" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="TeXAtom" transform="translate(484,-150) scale(0.707)" data-mjx-texclass="ORD"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(503,0)"${_scopeId}><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(969,0)"${_scopeId}><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1498,0)"${_scopeId}><path data-c="1D458" d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>r</mi><mrow data-mjx-texclass="ORD"${_scopeId2}><mi${_scopeId2}>p</mi><mi${_scopeId2}>e</mi><mi${_scopeId2}>a</mi><mi${_scopeId2}>k</mi></mrow></msub></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "r"),
                    createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                      createVNode("mi", null, "p"),
                      createVNode("mi", null, "e"),
                      createVNode("mi", null, "a"),
                      createVNode("mi", null, "k")
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
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.65ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "4.438ex",
            height: "1.65ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -442 1961.6 729.2",
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
                      "data-c": "1D45F",
                      d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "TeXAtom",
                    transform: "translate(484,-150) scale(0.707)",
                    "data-mjx-texclass": "ORD"
                  }, [
                    createVNode("g", { "data-mml-node": "mi" }, [
                      createVNode("path", {
                        "data-c": "1D45D",
                        d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(503,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "1D452",
                        d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(969,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "1D44E",
                        d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(1498,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "1D458",
                        d: "M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z",
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
                  createVNode("mi", null, "r"),
                  createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createVNode("mi", null, "p"),
                    createVNode("mi", null, "e"),
                    createVNode("mi", null, "a"),
                    createVNode("mi", null, "k")
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
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">peak yaw rate</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.355ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.709ex" height="1.355ex" role="img" focusable="false" viewBox="0 -442 1197.3 599.1" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="TeXAtom" transform="translate(484,-150) scale(0.707)" data-mjx-texclass="ORD"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(469,0)"${_scopeId}><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>r</mi><mrow data-mjx-texclass="ORD"${_scopeId2}><mi${_scopeId2}>s</mi><mi${_scopeId2}>s</mi></mrow></msub></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "r"),
                    createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                      createVNode("mi", null, "s"),
                      createVNode("mi", null, "s")
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
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.355ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "2.709ex",
            height: "1.355ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -442 1197.3 599.1",
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
                      "data-c": "1D45F",
                      d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "TeXAtom",
                    transform: "translate(484,-150) scale(0.707)",
                    "data-mjx-texclass": "ORD"
                  }, [
                    createVNode("g", { "data-mml-node": "mi" }, [
                      createVNode("path", {
                        "data-c": "1D460",
                        d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(469,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "1D460",
                        d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
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
                  createVNode("mi", null, "r"),
                  createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createVNode("mi", null, "s"),
                    createVNode("mi", null, "s")
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
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">steady-state yaw rate</td></tr></tbody></table><p><strong>Why it matters.</strong> Yaw amplification indicates whether the vehicle exhibits aggressive transient overshoot or a controlled, well-damped response.</p><hr><h2 id="stability-and-control" tabindex="-1">Stability and Control <a class="header-anchor" href="#stability-and-control" aria-label="Permalink to &quot;Stability and Control&quot;">​</a></h2><h3 id="stability-margin" tabindex="-1">Stability Margin <a class="header-anchor" href="#stability-margin" aria-label="Permalink to &quot;Stability Margin&quot;">​</a></h3><p><strong>Description.</strong> A measure of the available yaw moment or control authority before the onset of instability.</p><p><strong>Physical interpretation.</strong> Stability margin reflects tire force reserves, load transfer balance, yaw inertia, and overall system robustness.</p><p><strong>Why it matters.</strong> This metric provides insight into how much corrective authority exists before loss of control occurs.</p><hr><h2 id="frequency-domain-metrics" tabindex="-1">Frequency-Domain Metrics <a class="header-anchor" href="#frequency-domain-metrics" aria-label="Permalink to &quot;Frequency-Domain Metrics&quot;">​</a></h2><h3 id="yaw-rate-frequency-response" tabindex="-1">Yaw Rate Frequency Response <a class="header-anchor" href="#yaw-rate-frequency-response" aria-label="Permalink to &quot;Yaw Rate Frequency Response&quot;">​</a></h3><p><strong>Description.</strong> The frequency-dependent magnitude and phase relationship between steering input and yaw rate response.</p>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    display: "true",
    style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.172ex" })}" xmlns="http://www.w3.org/2000/svg" width="16.784ex" height="5.475ex" role="img" focusable="false" viewBox="0 -1460 7418.5 2420" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43A" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(819,-150) scale(0.707)"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(1187.9,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1576.9,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1988.9,0)"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2610.9,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(3277.7,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mfrac" transform="translate(4333.5,0)"${_scopeId}><g data-mml-node="mrow" transform="translate(257,710)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D445" d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(759,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1148,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1560,0)"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2182,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mrow" transform="translate(220,-710)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="394" d="M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(833,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1222,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1634,0)"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2256,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><rect width="2845" height="60" x="120" y="220"${_scopeId}></rect></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "block",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>G</mi><mi${_scopeId2}>r</mi></msub><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>j</mi><mi${_scopeId2}>ω</mi><mo stretchy="false"${_scopeId2}>)</mo><mo${_scopeId2}>=</mo><mfrac${_scopeId2}><mrow${_scopeId2}><mi${_scopeId2}>R</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>j</mi><mi${_scopeId2}>ω</mi><mo stretchy="false"${_scopeId2}>)</mo></mrow><mrow${_scopeId2}><mi mathvariant="normal"${_scopeId2}>Δ</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>j</mi><mi${_scopeId2}>ω</mi><mo stretchy="false"${_scopeId2}>)</mo></mrow></mfrac></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  display: "block"
                }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "G"),
                    createVNode("mi", null, "r")
                  ]),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "j"),
                  createVNode("mi", null, "ω"),
                  createVNode("mo", { stretchy: "false" }, ")"),
                  createVNode("mo", null, "="),
                  createVNode("mfrac", null, [
                    createVNode("mrow", null, [
                      createVNode("mi", null, "R"),
                      createVNode("mo", { stretchy: "false" }, "("),
                      createVNode("mi", null, "j"),
                      createVNode("mi", null, "ω"),
                      createVNode("mo", { stretchy: "false" }, ")")
                    ]),
                    createVNode("mrow", null, [
                      createVNode("mi", { mathvariant: "normal" }, "Δ"),
                      createVNode("mo", { stretchy: "false" }, "("),
                      createVNode("mi", null, "j"),
                      createVNode("mi", null, "ω"),
                      createVNode("mo", { stretchy: "false" }, ")")
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
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.172ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "16.784ex",
            height: "5.475ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -1460 7418.5 2420",
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
                      "data-c": "1D43A",
                      d: "M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(819,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D45F",
                      d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1187.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1576.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1988.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D714",
                    d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2610.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(3277.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mfrac",
                  transform: "translate(4333.5,0)"
                }, [
                  createVNode("g", {
                    "data-mml-node": "mrow",
                    transform: "translate(257,710)"
                  }, [
                    createVNode("g", { "data-mml-node": "mi" }, [
                      createVNode("path", {
                        "data-c": "1D445",
                        d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(759,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "28",
                        d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(1148,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "1D457",
                        d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(1560,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "1D714",
                        d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(2182,0)"
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
                    transform: "translate(220,-710)"
                  }, [
                    createVNode("g", { "data-mml-node": "mi" }, [
                      createVNode("path", {
                        "data-c": "394",
                        d: "M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(833,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "28",
                        d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(1222,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "1D457",
                        d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(1634,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "1D714",
                        d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(2256,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "29",
                        d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ]),
                  createVNode("rect", {
                    width: "2845",
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
                createVNode("msub", null, [
                  createVNode("mi", null, "G"),
                  createVNode("mi", null, "r")
                ]),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "j"),
                createVNode("mi", null, "ω"),
                createVNode("mo", { stretchy: "false" }, ")"),
                createVNode("mo", null, "="),
                createVNode("mfrac", null, [
                  createVNode("mrow", null, [
                    createVNode("mi", null, "R"),
                    createVNode("mo", { stretchy: "false" }, "("),
                    createVNode("mi", null, "j"),
                    createVNode("mi", null, "ω"),
                    createVNode("mo", { stretchy: "false" }, ")")
                  ]),
                  createVNode("mrow", null, [
                    createVNode("mi", { mathvariant: "normal" }, "Δ"),
                    createVNode("mo", { stretchy: "false" }, "("),
                    createVNode("mi", null, "j"),
                    createVNode("mi", null, "ω"),
                    createVNode("mo", { stretchy: "false" }, ")")
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
  _push(`<table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Variable</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Meaning</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="6.787ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2999.9 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msub"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D43A" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(819,-150) scale(0.707)"${_scopeId}><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(1187.9,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1576.9,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1988.9,0)"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2610.9,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msub${_scopeId2}><mi${_scopeId2}>G</mi><mi${_scopeId2}>r</mi></msub><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>j</mi><mi${_scopeId2}>ω</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msub", null, [
                    createVNode("mi", null, "G"),
                    createVNode("mi", null, "r")
                  ]),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "j"),
                  createVNode("mi", null, "ω"),
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
            width: "6.787ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2999.9 1000",
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
                      "data-c": "1D43A",
                      d: "M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(819,-150) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D45F",
                      d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1187.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1576.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1988.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D714",
                    d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2610.9,0)"
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
                  createVNode("mi", null, "G"),
                  createVNode("mi", null, "r")
                ]),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "j"),
                createVNode("mi", null, "ω"),
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
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">frequency response</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="5.817ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2571 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D445" d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(759,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1148,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1560,0)"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2182,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>R</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>j</mi><mi${_scopeId2}>ω</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "R"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "j"),
                  createVNode("mi", null, "ω"),
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
            width: "5.817ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2571 1000",
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
                    "data-c": "1D445",
                    d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(759,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1148,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1560,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D714",
                    d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2182,0)"
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
                createVNode("mi", null, "R"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "j"),
                createVNode("mi", null, "ω"),
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
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">yaw rate response</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="5.984ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2645 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="394" d="M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(833,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1222,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1634,0)"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2256,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi mathvariant="normal"${_scopeId2}>Δ</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>j</mi><mi${_scopeId2}>ω</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", { mathvariant: "normal" }, "Δ"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "j"),
                  createVNode("mi", null, "ω"),
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
            width: "5.984ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2645 1000",
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
                    "data-c": "394",
                    d: "M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(833,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1222,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1634,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D714",
                    d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2256,0)"
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
                createVNode("mi", { mathvariant: "normal" }, "Δ"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "j"),
                createVNode("mi", null, "ω"),
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
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">steering input</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.462ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.339ex" height="1.957ex" role="img" focusable="false" viewBox="0 -661 1034 865" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(412,0)"${_scopeId}><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>j</mi><mi${_scopeId2}>ω</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "j"),
                  createVNode("mi", null, "ω")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.462ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "2.339ex",
            height: "1.957ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -661 1034 865",
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
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(412,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D714",
                    d: "M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",
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
                createVNode("mi", null, "j"),
                createVNode("mi", null, "ω")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">frequency (imaginary form)</td></tr></tbody></table><p><strong>Why it matters.</strong> Frequency-domain metrics provide a compact representation of vehicle dynamics across a wide range of time scales.</p><h3 id="lateral-acceleration-frequency-response" tabindex="-1">Lateral Acceleration Frequency Response <a class="header-anchor" href="#lateral-acceleration-frequency-response" aria-label="Permalink to &quot;Lateral Acceleration Frequency Response&quot;">​</a></h3><p><strong>Description.</strong> The frequency-dependent relationship between steering input and lateral acceleration under representative operating conditions.</p><p><strong>Why it matters.</strong> Evaluating frequency response under realistic loading provides insight into dynamic behavior not captured by purely linear analysis.</p><p class="closing-note"> These metrics collectively describe vehicle capability, response, and stability. Their relevance depends on the intended application, operating environment, and design objectives. </p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("reference/metrics.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const metrics = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  metrics as default
};
