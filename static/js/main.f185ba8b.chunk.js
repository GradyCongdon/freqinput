(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,n,t){e.exports=t(21)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(4),c=t.n(o),i=(t(16),t(5)),l=t(6),u=t(8),s=t(7),f=t(9),d=t(2),m=t(1),b=function(){var e;return(e=console).log.apply(e,arguments)},v=function(e,n){var t=n.min,a=n.max,r=n.offset,o=function(e,n){var t=(n=n||e.currentTarget).getBoundingClientRect();return t.x=e.clientX-t.x,t.y=e.clientY-t.y,t}(e),c=o.x,i=o.width;return c=function(e,n,t){return e<=n?n:e>=t?t:e}(Math.round(c+r),t||0,a||i)};t(17);function p(e){return r.a.createElement("button",{onClick:e.onClick},e.children)}t(18);var h=function(e){var n=e.line,t=e.onSelectLine,a=e.status,o=e.keyboard;if(void 0==n)return null;var c=a.join(" ")+" line",i={transform:"translateX(".concat(n,"px)")};return r.a.createElement("div",{className:c,id:n,style:i,"data-freq":n,keyboard:o,onClick:function(e){t&&t()}},r.a.createElement("label",{className:"freq"},n),r.a.createElement("label",{className:"keyboard"},o))},y=(t(19),"place"),k="edit";var O=function(){var e=this,n=Object(a.useState)([]),t=Object(m.a)(n,2),o=t[0],c=t[1],i=Object(a.useState)(),l=Object(m.a)(i,2),u=l[0],s=l[1],f=Object(a.useState)(),O=Object(m.a)(f,2),j=O[0],w=O[1],g=Object(a.useState)(y),E=Object(m.a)(g,2),x=E[0],C=E[1],S=["q","w","e","r","t","y","u","i","o","p"],M=function(e,n){if(!o.includes(e)&&(!(o.length+1>S.length)||u&&j)){var t,a=Object(d.a)(o);n&&"number"===typeof n?a[n]=e:n&&"string"===typeof n?a[(t=n,S.indexOf(t))]=e:a.push(e),b("add",a),c(a)}},N={min:0,max:400,offset:-25},q=function(e){if(!j&&j===e||!S.includes(e))return s(null),void w(null);switch(w(e),x){case y:s(u);break;case k:s((n=e,o[S.indexOf(n)])),C(y)}var n},B=o.map(function(n,t){var a=S[t],o=j===a?"up":"";return r.a.createElement(h,{line:n,key:n,keyboard:a,status:[o,x],onSelectLine:x===k?q.bind(e,a):null})}),I=o.length!==S.length||j?"":"full",J=!I&&r.a.createElement(h,{key:"active",keyboard:j||S[o.length],status:["selected"],line:u});return r.a.createElement("section",null,r.a.createElement("div",{className:["freqInput",I,x].join(" "),onMouseMove:x===y?function(e){var n=v(e,N);s(n)}:null,onMouseOver:x===y?function(e){e.currentTarget.focus()}:null,onMouseUp:x===y?function(e){var n=v(e,N);M(n,j),s(null),w(null)}:null,onKeyDown:function(e){return q(e.key)},tabIndex:"0"},r.a.createElement("div",{className:"border"}),B,J),r.a.createElement(p,{onClick:function(){var e=Object(d.a)(o);e.sort(function(e,n){return e-n}),c(e)}},"sort"),r.a.createElement(p,{onClick:function(e){C(x===y?k:y),s(null)}},x===y?"edit":"place"))},j=(t(20),function(e){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(O,null)}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.f185ba8b.chunk.js.map