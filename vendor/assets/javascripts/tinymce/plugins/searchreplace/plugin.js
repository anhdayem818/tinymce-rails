/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.3 (2019-12-04)
 */
!function(){"use strict";var s=function(e){function n(){return t}var t=e;return{get:n,set:function(e){t=e},clone:function(){return s(n())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),p=function(){return(p=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},g=tinymce.util.Tools.resolve("tinymce.util.Tools");function x(e){return e&&1===e.nodeType&&"false"===e.contentEditable}function h(e){var n=e.getAttribute("data-mce-index");return"number"==typeof n?""+n:n}function v(e){var n=e.parentNode;e.firstChild&&n.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)}function c(e,n){var t,r=[];if((t=g.toArray(e.getBody().getElementsByTagName("span"))).length)for(var o=0;o<t.length;o++){var i=h(t[o]);null!==i&&i.length&&i===n.toString()&&r.push(t[o])}return r}function u(e,n,t){var r=n.get(),o=r.index,i=e.dom;(t=!1!==t)?o+1===r.count?o=0:o++:o-1==-1?o=r.count-1:o--,i.removeClass(c(e,r.index),"mce-match-marker-selected");var a=c(e,o);return a.length?(i.addClass(c(e,o),"mce-match-marker-selected"),e.selection.scrollIntoView(a[0]),o):-1}function y(e,n){var t=n.parentNode;e.remove(n),e.isEmpty(t)&&e.remove(t)}function f(e,n,t,r,o){t=(t=t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")).replace(/\s/g,"[^\\S\\r\\n]"),t=o?"\\b"+t+"\\b":t;var i=function(e,n,t){var r,o;return(o=e.dom.create("span",{"data-mce-bogus":1})).className="mce-match-marker",r=e.getBody(),C(e,n,!1),d.findAndReplaceDOMText(t,r,o,!1,e.schema)}(e,n,new RegExp(t,r?"g":"gi"));if(i){var a=u(e,n,!0);n.set({index:a,count:i,text:t,matchCase:r,wholeWord:o})}return i}function b(e,n){var t=u(e,n,!0);n.set(p(p({},n.get()),{index:t}))}function N(e,n){var t=u(e,n,!1);n.set(p(p({},n.get()),{index:t}))}function w(e){var n=h(e);return null!==n&&0<n.length}function m(e,n,t,r,o){var i,a,c,u,d,l=n.get(),s=l.index,f=s;for(r=!1!==r,c=e.getBody(),a=g.grep(g.toArray(c.getElementsByTagName("span")),w),i=0;i<a.length;i++){var m=h(a[i]);if(u=d=parseInt(m,10),o||u===l.index){for(t.length?(a[i].firstChild.nodeValue=t,v(a[i])):y(e.dom,a[i]);a[++i];){if((u=parseInt(h(a[i]),10))!==d){i--;break}y(e.dom,a[i])}r&&f--}else s<d&&a[i].setAttribute("data-mce-index",String(d-1))}return n.set(p(p({},l),{count:o?0:l.count-1,index:f})),r?b(e,n):N(e,n),!o&&0<n.get().count}function n(){}function i(e){return function(){return e}}function t(){return T}var r,d={findAndReplaceDOMText:function z(e,n,t,r,o){var i,a,h,f,m,p,c=[],u=0;function d(e,n){if(n=n||0,!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");var t=e.index;if(0<n){var r=e[n];if(!r)throw new Error("Invalid capture group");t+=e[0].indexOf(r),e[0]=r}return[t,t+e[0].length,[e[0]]]}if(h=n.ownerDocument,f=o.getBlockElements(),m=o.getWhiteSpaceElements(),p=o.getShortEndedElements(),a=function l(e){var n;if(3===e.nodeType)return e.data;if(m[e.nodeName]&&!f[e.nodeName])return"";if(n="",x(e))return"\n";if((f[e.nodeName]||p[e.nodeName])&&(n+="\n"),e=e.firstChild)for(;n+=l(e),e=e.nextSibling;);return n}(n)){if(e.global)for(;i=e.exec(a);)c.push(d(i,r));else i=a.match(e),c.push(d(i,r));return c.length&&(u=c.length,function g(e,n,t){var r,o,i,a,c=[],u=0,d=e,l=n.shift(),s=0;e:for(;;){if((f[d.nodeName]||p[d.nodeName]||x(d))&&u++,3===d.nodeType&&(!o&&d.length+u>=l[1]?(o=d,a=l[1]-u):r&&c.push(d),!r&&d.length+u>l[0]&&(r=d,i=l[0]-u),u+=d.length),r&&o){if(d=t({startNode:r,startNodeIndex:i,endNode:o,endNodeIndex:a,innerNodes:c,match:l[2],matchIndex:s}),u-=o.length-a,o=r=null,c=[],s++,!(l=n.shift()))break}else if(m[d.nodeName]&&!f[d.nodeName]||!d.firstChild){if(d.nextSibling){d=d.nextSibling;continue}}else if(!x(d)){d=d.firstChild;continue}for(;;){if(d.nextSibling){d=d.nextSibling;break}if(d.parentNode===e)break e;d=d.parentNode}}}(n,c,function s(e){var g;if("function"!=typeof e){var r=e.nodeType?e:h.createElement(e);g=function(e,n){var t=r.cloneNode(!1);return t.setAttribute("data-mce-index",n),e&&t.appendChild(h.createTextNode(e)),t}}else g=e;return function(e){var n,t,r,o=e.startNode,i=e.endNode,a=e.matchIndex;if(o===i){var c=o;r=c.parentNode,0<e.startNodeIndex&&(n=h.createTextNode(c.data.substring(0,e.startNodeIndex)),r.insertBefore(n,c));var u=g(e.match[0],a);return r.insertBefore(u,c),e.endNodeIndex<c.length&&(t=h.createTextNode(c.data.substring(e.endNodeIndex)),r.insertBefore(t,c)),c.parentNode.removeChild(c),u}n=h.createTextNode(o.data.substring(0,e.startNodeIndex)),t=h.createTextNode(i.data.substring(e.endNodeIndex));for(var d=g(o.data.substring(e.startNodeIndex),a),l=0,s=e.innerNodes.length;l<s;++l){var f=e.innerNodes[l],m=g(f.data,a);f.parentNode.replaceChild(m,f)}var p=g(i.data.substring(0,e.endNodeIndex),a);return(r=o.parentNode).insertBefore(n,o),r.insertBefore(d,o),r.removeChild(o),(r=i.parentNode).insertBefore(p,i),r.insertBefore(t,i),r.removeChild(i),p}}(t))),u}}},C=function(e,n,t){var r,o,i,a,c=n.get();for(o=g.toArray(e.getBody().getElementsByTagName("span")),r=0;r<o.length;r++){var u=h(o[r]);null!==u&&u.length&&(u===c.index.toString()&&(i=i||o[r].firstChild,a=o[r].firstChild),v(o[r]))}if(n.set(p(p({},c),{index:-1,count:0,text:""})),i&&a){var d=e.dom.createRng();return d.setStart(i,0),d.setEnd(a,a.data.length),!1!==t&&e.selection.setRng(d),d}},o=function(r,o){return{done:function(e){return C(r,o,e)},find:function(e,n,t){return f(r,o,e,n,t)},next:function(){return b(r,o)},prev:function(){return N(r,o)},replace:function(e,n,t){return m(r,o,e,n,t)}}},a=i(!1),l=i(!0),T=(r={fold:function(e,n){return e()},is:a,isSome:a,isNone:l,getOr:A,getOrThunk:O,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(undefined),or:A,orThunk:O,map:t,each:n,bind:t,exists:a,forall:l,filter:t,equals:S,equals_:S,toArray:function(){return[]},toString:i("none()")},Object.freeze&&Object.freeze(r),r);function S(e){return e.isNone()}function O(e){return e()}function A(e){return e}function B(e,n){return function(){F(e,n)}}var I,k=function(t){function e(){return o}function n(e){return e(t)}var r=i(t),o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:l,isNone:a,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:e,orThunk:e,map:function(e){return k(e(t))},each:function(e){e(t)},bind:n,exists:n,forall:n,filter:function(e){return e(t)?o:T},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(a,function(e){return n(t,e)})}};return o},E={some:k,none:t,from:function(e){return null===e||e===undefined?T:k(e)}},M=(I="function",function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"==n&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":n}(e)===I}),R=Array.prototype.slice,D=(M(Array.from)&&Array.from,tinymce.util.Tools.resolve("tinymce.Env")),F=function(i,a){var e=function(){var n=s(E.none());return{clear:function(){n.set(E.none())},set:function(e){n.set(E.some(e))},isSet:function(){return n.get().isSome()},on:function(e){n.get().each(e)}}}();i.undoManager.add();var n=g.trim(i.selection.getContent({format:"text"}));function c(e){(function(e,n){return 1<n.get().count}(0,a)?e.enable:e.disable)("next"),(function(e,n){return 1<n.get().count}(0,a)?e.enable:e.disable)("prev")}function u(e,n){!function(e,n){for(var t=0,r=e.length;t<r;t++){n(e[t],t)}}(["replace","replaceall","prev","next"],n?e.disable:e.enable)}function r(e,n){D.browser.isSafari()&&D.deviceType.isTouch()&&("find"===n||"replace"===n||"replaceall"===n)&&e.focus(n)}function d(e){C(i,a,!1),u(e,!0),c(e)}function o(e){var n=e.getData(),t=a.get();if(n.findtext.length){if(t.text===n.findtext&&t.matchCase===n.matchcase&&t.wholeWord===n.wholewords)b(i,a);else{var r=f(i,a,n.findtext,n.matchcase,n.wholewords);r<=0&&!function o(e){i.windowManager.alert("Could not find the specified string.",function(){e.focus("findtext")})}(e),u(e,0===r)}c(e)}else d(e)}var t=a.get(),l={title:"Find and Replace",size:"normal",body:{type:"panel",items:[{type:"bar",items:[{type:"input",name:"findtext",placeholder:"Find",maximized:!0,inputMode:"search"},{type:"button",name:"prev",text:"Previous",icon:"action-prev",disabled:!0,borderless:!0},{type:"button",name:"next",text:"Next",icon:"action-next",disabled:!0,borderless:!0}]},{type:"input",name:"replacetext",placeholder:"Replace with",inputMode:"search"}]},buttons:[{type:"menu",name:"options",icon:"preferences",tooltip:"Preferences",align:"start",items:[{type:"togglemenuitem",name:"matchcase",text:"Match case"},{type:"togglemenuitem",name:"wholewords",text:"Find whole words only"}]},{type:"custom",name:"find",text:"Find",primary:!0},{type:"custom",name:"replace",text:"Replace",disabled:!0},{type:"custom",name:"replaceall",text:"Replace All",disabled:!0}],initialData:{findtext:n,replacetext:"",wholewords:t.wholeWord,matchcase:t.matchCase},onChange:function(e,n){"findtext"===n.name&&0<a.get().count&&d(e)},onAction:function(e,n){var t=e.getData();switch(n.name){case"find":o(e);break;case"replace":m(i,a,t.replacetext)?c(e):d(e);break;case"replaceall":m(i,a,t.replacetext,!0,!0),d(e);break;case"prev":N(i,a),c(e);break;case"next":b(i,a),c(e)}r(e,n.name)},onSubmit:function(e){o(e),r(e,"find")},onClose:function(){i.focus(),C(i,a),i.undoManager.add()}};e.set(i.windowManager.open(l,{inline:"toolbar"}))},j=function(e,n){e.addCommand("SearchReplace",function(){F(e,n)})},P=function(e,n){e.ui.registry.addMenuItem("searchreplace",{text:"Find and replace...",shortcut:"Meta+F",onAction:B(e,n),icon:"search"}),e.ui.registry.addButton("searchreplace",{tooltip:"Find and replace",onAction:B(e,n),icon:"search"}),e.shortcuts.add("Meta+F","",B(e,n))};!function W(){e.add("searchreplace",function(e){var n=s({index:-1,count:0,text:"",matchCase:!1,wholeWord:!1});return j(e,n),P(e,n),o(e,n)})}()}();