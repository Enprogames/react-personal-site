"use strict";(self.webpackChunkreact_personal_site=self.webpackChunkreact_personal_site||[]).push([[496],{496:function(n,e,t){t.r(e),t.d(e,{getCLS:function(){return I},getFCP:function(){return S},getFID:function(){return B},getINP:function(){return K},getLCP:function(){return U},getTTFB:function(){return W},onCLS:function(){return I},onFCP:function(){return S},onFID:function(){return B},onINP:function(){return K},onLCP:function(){return U},onTTFB:function(){return W}});var r,i,o,a,u,c=-1,f=function(n){addEventListener("pageshow",(function(e){e.persisted&&(c=e.timeStamp,n(e))}),!0)},s=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},d=function(){var n=s();return n&&n.activationStart||0},l=function(n,e){var t=s(),r="navigate";return c>=0?r="back-forward-cache":t&&(r=document.prerendering||d()>0?"prerender":document.wasDiscarded?"restore":t.type.replace(/_/g,"-")),{name:n,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},p=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var r=new PerformanceObserver((function(n){Promise.resolve().then((function(){e(n.getEntries())}))}));return r.observe(Object.assign({type:n,buffered:!0},t||{})),r}}catch(n){}},v=function(n,e,t,r){var i,o;return function(a){e.value>=0&&(a||r)&&((o=e.value-(i||0))||void 0===i)&&(i=e.value,e.delta=o,e.rating=function(n,e){return n>e[1]?"poor":n>e[0]?"needs-improvement":"good"}(e.value,t),n(e))}},m=function(n){requestAnimationFrame((function(){return requestAnimationFrame((function(){return n()}))}))},h=function(n){var e=function(e){"pagehide"!==e.type&&"hidden"!==document.visibilityState||n(e)};addEventListener("visibilitychange",e,!0),addEventListener("pagehide",e,!0)},g=function(n){var e=!1;return function(t){e||(n(t),e=!0)}},y=-1,T=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},E=function(n){"hidden"===document.visibilityState&&y>-1&&(y="visibilitychange"===n.type?n.timeStamp:0,L())},C=function(){addEventListener("visibilitychange",E,!0),addEventListener("prerenderingchange",E,!0)},L=function(){removeEventListener("visibilitychange",E,!0),removeEventListener("prerenderingchange",E,!0)},b=function(){return y<0&&(y=T(),C(),f((function(){setTimeout((function(){y=T(),C()}),0)}))),{get firstHiddenTime(){return y}}},w=function(n){document.prerendering?addEventListener("prerenderingchange",(function(){return n()}),!0):n()},S=function(n,e){e=e||{},w((function(){var t,r=[1800,3e3],i=b(),o=l("FCP"),a=p("paint",(function(n){n.forEach((function(n){"first-contentful-paint"===n.name&&(a.disconnect(),n.startTime<i.firstHiddenTime&&(o.value=Math.max(n.startTime-d(),0),o.entries.push(n),t(!0)))}))}));a&&(t=v(n,o,r,e.reportAllChanges),f((function(i){o=l("FCP"),t=v(n,o,r,e.reportAllChanges),m((function(){o.value=performance.now()-i.timeStamp,t(!0)}))})))}))},I=function(n,e){e=e||{},S(g((function(){var t,r=[.1,.25],i=l("CLS",0),o=0,a=[],u=function(n){n.forEach((function(n){if(!n.hadRecentInput){var e=a[0],t=a[a.length-1];o&&n.startTime-t.startTime<1e3&&n.startTime-e.startTime<5e3?(o+=n.value,a.push(n)):(o=n.value,a=[n])}})),o>i.value&&(i.value=o,i.entries=a,t())},c=p("layout-shift",u);c&&(t=v(n,i,r,e.reportAllChanges),h((function(){u(c.takeRecords()),t(!0)})),f((function(){o=0,i=l("CLS",0),t=v(n,i,r,e.reportAllChanges),m((function(){return t()}))})),setTimeout(t,0))})))},P={passive:!0,capture:!0},A=new Date,F=function(n,e){r||(r=e,i=n,o=new Date,D(removeEventListener),k())},k=function(){if(i>=0&&i<o-A){var n={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+i};a.forEach((function(e){e(n)})),a=[]}},M=function(n){if(n.cancelable){var e=(n.timeStamp>1e12?new Date:performance.now())-n.timeStamp;"pointerdown"==n.type?function(n,e){var t=function(){F(n,e),i()},r=function(){i()},i=function(){removeEventListener("pointerup",t,P),removeEventListener("pointercancel",r,P)};addEventListener("pointerup",t,P),addEventListener("pointercancel",r,P)}(e,n):F(e,n)}},D=function(n){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return n(e,M,P)}))},B=function(n,e){e=e||{},w((function(){var t,o=[100,300],u=b(),c=l("FID"),s=function(n){n.startTime<u.firstHiddenTime&&(c.value=n.processingStart-n.startTime,c.entries.push(n),t(!0))},d=function(n){n.forEach(s)},m=p("first-input",d);t=v(n,c,o,e.reportAllChanges),m&&h(g((function(){d(m.takeRecords()),m.disconnect()}))),m&&f((function(){var u;c=l("FID"),t=v(n,c,o,e.reportAllChanges),a=[],i=-1,r=null,D(addEventListener),u=s,a.push(u),k()}))}))},x=0,R=1/0,_=0,H=function(n){n.forEach((function(n){n.interactionId&&(R=Math.min(R,n.interactionId),_=Math.max(_,n.interactionId),x=_?(_-R)/7+1:0)}))},N=function(){return u?x:performance.interactionCount||0},O=function(){"interactionCount"in performance||u||(u=p("event",H,{type:"event",buffered:!0,durationThreshold:0}))},q=0,j=function(){return N()-q},z=[],G={},J=function(n){var e=z[z.length-1],t=G[n.interactionId];if(t||z.length<10||n.duration>e.latency){if(t)t.entries.push(n),t.latency=Math.max(t.latency,n.duration);else{var r={id:n.interactionId,latency:n.duration,entries:[n]};G[r.id]=r,z.push(r)}z.sort((function(n,e){return e.latency-n.latency})),z.splice(10).forEach((function(n){delete G[n.id]}))}},K=function(n,e){e=e||{},w((function(){var t=[200,500];O();var r,i=l("INP"),o=function(n){n.forEach((function(n){n.interactionId&&J(n),"first-input"===n.entryType&&!z.some((function(e){return e.entries.some((function(e){return n.duration===e.duration&&n.startTime===e.startTime}))}))&&J(n)}));var e,t=(e=Math.min(z.length-1,Math.floor(j()/50)),z[e]);t&&t.latency!==i.value&&(i.value=t.latency,i.entries=t.entries,r())},a=p("event",o,{durationThreshold:e.durationThreshold||40});r=v(n,i,t,e.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),h((function(){o(a.takeRecords()),i.value<0&&j()>0&&(i.value=0,i.entries=[]),r(!0)})),f((function(){z=[],q=N(),i=l("INP"),r=v(n,i,t,e.reportAllChanges)})))}))},Q={},U=function(n,e){e=e||{},w((function(){var t,r=[2500,4e3],i=b(),o=l("LCP"),a=function(n){var e=n[n.length-1];if(e){var r=Math.max(e.startTime-d(),0);r<i.firstHiddenTime&&(o.value=r,o.entries=[e],t())}},u=p("largest-contentful-paint",a);if(u){t=v(n,o,r,e.reportAllChanges);var c=g((function(){Q[o.id]||(a(u.takeRecords()),u.disconnect(),Q[o.id]=!0,t(!0))}));["keydown","click"].forEach((function(n){addEventListener(n,c,!0)})),h(c),f((function(i){o=l("LCP"),t=v(n,o,r,e.reportAllChanges),m((function(){o.value=performance.now()-i.timeStamp,Q[o.id]=!0,t(!0)}))}))}}))},V=function n(e){document.prerendering?w((function(){return n(e)})):"complete"!==document.readyState?addEventListener("load",(function(){return n(e)}),!0):setTimeout(e,0)},W=function(n,e){e=e||{};var t=[800,1800],r=l("TTFB"),i=v(n,r,t,e.reportAllChanges);V((function(){var o=s();if(o){var a=o.responseStart;if(a<=0||a>performance.now())return;r.value=Math.max(a-d(),0),r.entries=[o],i(!0),f((function(){r=l("TTFB",0),(i=v(n,r,t,e.reportAllChanges))(!0)}))}}))}}}]);
//# sourceMappingURL=496.8670fd18.chunk.js.map