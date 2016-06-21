/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*!
 * jquery-confirm v2.0.0 (http://craftpip.github.io/jquery-confirm/)
 * Author: Boniface Pereira
 * Website: www.craftpip.com
 * Contact: hey@craftpip.com
 *
 * Copyright 2013-2015 jquery-confirm
 * Licensed under MIT (https://github.com/craftpip/jquery-confirm/blob/master/LICENSE)
 */
if(typeof jQuery==="undefined"){throw new Error("jquery-confirm requires jQuery")}var jconfirm,Jconfirm;(function(b){b.fn.confirm=function(c){if(typeof c==="undefined"){c={}}var d=b(this);d.on("click",function(f){f.preventDefault();if(d.attr("href")){c.confirm=function(){location.href=d.attr("href")}}b.confirm(c)});return d};b.confirm=function(c){return jconfirm(c)};b.alert=function(c){c.cancelButton=false;return jconfirm(c)};b.dialog=function(c){c.cancelButton=false;c.confirmButton=false;c.confirmKeys=[13];return jconfirm(c)};jconfirm=function(c){if(typeof c==="undefined"){c={}}if(jconfirm.defaults){b.extend(jconfirm.pluginDefaults,jconfirm.defaults)}var c=b.extend({},jconfirm.pluginDefaults,c);return new Jconfirm(c)};Jconfirm=function(c){b.extend(this,c);this._init()};Jconfirm.prototype={_init:function(){var c=this;this._rand=Math.round(Math.random()*99999);this._buildHTML();this._bindEvents();setTimeout(function(){c.open()},0)},animations:["anim-scale","anim-top","anim-bottom","anim-left","anim-right","anim-zoom","anim-opacity","anim-none","anim-rotate","anim-rotatex","anim-rotatey","anim-scalex","anim-scaley"],_buildHTML:function(){this.animation="anim-"+this.animation.toLowerCase();this.closeAnimation="anim-"+this.closeAnimation.toLowerCase();this.$el=b(this.template).appendTo(this.container).addClass(this.theme);this.$el.find(".jconfirm-box-container").addClass(this.columnClass);this.CSS={"-webkit-transition-duration":this.animationSpeed/1000+"s","transition-duration":this.animationSpeed/1000+"s","-webkit-transition-timing-function":"cubic-bezier(.38,1.28,.2, "+this.animationBounce+")","transition-timing-function":"cubic-bezier(.38,1.28,.2, "+this.animationBounce+")"};this.$el.find(".jconfirm-bg").css(this.CSS);this.$b=this.$el.find(".jconfirm-box").css(this.CSS).addClass(this.animation);this.$body=this.$b;if(this.rtl){this.$el.addClass("rtl")}this.$title=this.$el.find("div.title");this.setTitle();this.contentDiv=this.$el.find("div.content");this.$content=this.contentDiv;this.$btnc=this.$el.find(".buttons");if(this.confirmButton&&this.confirmButton.trim()!==""){this.$confirmButton=b('<button class="btn">'+this.confirmButton+"</button>").appendTo(this.$btnc).addClass(this.confirmButtonClass)}if(this.cancelButton&&this.cancelButton.trim()!==""){this.$cancelButton=b('<button class="btn">'+this.cancelButton+"</button>").appendTo(this.$btnc).addClass(this.cancelButtonClass)}if(!this.confirmButton&&!this.cancelButton){this.$btnc.remove()}if(!this.confirmButton&&!this.cancelButton&&this.closeIcon===null){this.$closeButton=this.$b.find(".closeIcon").show()}if(this.closeIcon===true){this.$closeButton=this.$b.find(".closeIcon").show()}this.setContent();if(this.autoClose){this._startCountDown()}},setTitle:function(c){this.title=(typeof c!=="undefined")?c:this.title;if(this.title&&this.$title){this.$title.html('<i class="'+this.icon+'"></i> '+this.title)}else{this.$title.remove()}},setContent:function(e){var f=this;this.content=(e)?e:this.content;var c=(e)?true:false;if(typeof this.content==="boolean"){if(!this.content){this.contentDiv.remove()}else{console.error("Invalid option for property content: passed TRUE")}}else{if(typeof this.content==="string"){if(this.content.substr(0,4).toLowerCase()==="url:"){this.contentDiv.html("");this.$btnc.find("button").prop("disabled",true);var d=this.content.substring(4,this.content.length);b.get(d).done(function(h){f.contentDiv.html(h)}).always(function(i,h,j){if(typeof f.contentLoaded==="function"){f.contentLoaded(i,h,j)}f.$btnc.find("button").prop("disabled",false);f.setDialogCenter()})}else{this.contentDiv.html(this.content)}}else{if(typeof this.content==="function"){this.contentDiv.html("");this.$btnc.find("button").attr("disabled","disabled");var g=this.content(this);if(typeof g!=="object"){console.error("The content function must return jquery promise.")}else{if(typeof g.always!=="function"){console.error("The object returned is not a jquery promise.")}else{g.always(function(i,h){f.$btnc.find("button").removeAttr("disabled");f.setDialogCenter()})}}}else{console.error("Invalid option for property content, passed: "+typeof this.content)}}}this.setDialogCenter(c)},_startCountDown:function(){var c=this.autoClose.split("|");if(/cancel/.test(c[0])&&this.type==="alert"){return false}else{if(/confirm|cancel/.test(c[0])){this.$cd=b('<span class="countdown">').appendTo(this["$"+c[0]+"Button"]);var d=this;d.$cd.parent().click();var e=c[1]/1000;this.interval=setInterval(function(){d.$cd.html(" ["+(e-=1)+"]");if(e===0){d.$cd.parent().trigger("click");clearInterval(d.interval)}},1000)}else{console.error("Invalid option "+c[0]+", must be confirm/cancel")}}},_bindEvents:function(){var d=this;var c=false;this.$el.find(".jconfirm-scrollpane").click(function(f){if(!c){if(d.backgroundDismiss){d.cancel();d.close()}else{d.$b.addClass("hilight");setTimeout(function(){d.$b.removeClass("hilight")},400)}}c=false});this.$el.find(".jconfirm-box").click(function(f){c=true});if(this.$confirmButton){this.$confirmButton.click(function(g){g.preventDefault();var f=d.confirm(d.$b);d.onAction("confirm");if(typeof f==="undefined"||f){d.close()}})}if(this.$cancelButton){this.$cancelButton.click(function(g){g.preventDefault();var f=d.cancel(d.$b);d.onAction("cancel");if(typeof f==="undefined"||f){d.close()}})}if(this.$closeButton){this.$closeButton.click(function(f){f.preventDefault();d.cancel();d.onAction("close");d.close()})}if(this.keyboardEnabled){setTimeout(function(){b(window).on("keyup."+this._rand,function(f){d.reactOnKey(f)})},500)}b(window).on("resize."+this._rand,function(){d.setDialogCenter(true)})},reactOnKey:function a(f){var c=b(".jconfirm");if(c.eq(c.length-1)[0]!==this.$el[0]){return false}var d=f.which;if(this.contentDiv.find(":input").is(":focus")&&/13|32/.test(d)){return false}if(b.inArray(d,this.cancelKeys)!==-1){if(!this.backgroundDismiss){this.$el.find(".jconfirm-bg").click();return false}if(this.$cancelButton){this.$cancelButton.click()}else{this.close()}}if(b.inArray(d,this.confirmKeys)!==-1){if(this.$confirmButton){this.$confirmButton.click()}}},setDialogCenter:function(d){var h=b(window).height();var g=this.$b.outerHeight();var c=(h-g)/2;var f=100;if(g>(h-f)){var e={"margin-top":f/2,"margin-bottom":f/2}}else{var e={"margin-top":c}}if(d){this.$b.animate(e,{duration:this.animationSpeed,queue:false})}else{this.$b.css(e)}},close:function(){var c=this;if(this.isClosed()){return false}if(typeof this.onClose==="function"){this.onClose()}b(window).unbind("resize."+this._rand);if(this.keyboardEnabled){b(window).unbind("keyup."+this._rand)}c.$el.find(".jconfirm-bg").removeClass("seen");this.$b.addClass(this.closeAnimation);var d=(this.closeAnimation=="anim-none")?0:this.animationSpeed;setTimeout(function(){c.$el.remove()},d+50);jconfirm.record.closed+=1;jconfirm.record.currentlyOpen-=1;if(jconfirm.record.currentlyOpen<1){b("body").removeClass("jconfirm-noscroll")}return true},open:function(){var d=this;if(this.isClosed()){return false}d.$el.find(".jconfirm-bg").addClass("seen");b("body").addClass("jconfirm-noscroll");this.$b.removeClass(this.animations.join(" "));this.$b.find("input[autofocus]:visible:first").focus();jconfirm.record.opened+=1;jconfirm.record.currentlyOpen+=1;if(typeof this.onOpen==="function"){this.onOpen()}var c="jconfirm-box"+this._rand;this.$b.attr("aria-labelledby",c).attr("tabindex",-1).focus();if(this.$title){this.$title.attr("id",c)}else{if(this.$content){this.$content.attr("id",c)}}return true},isClosed:function(){return this.$el.css("display")===""}};jconfirm.pluginDefaults={template:'<div class="jconfirm"><div class="jconfirm-bg"></div><div class="jconfirm-scrollpane"><div class="container"><div class="row"><div class="jconfirm-box-container span6 offset3"><div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1"><div class="closeIcon"><span class="glyphicon glyphicon-remove"></span></div><div class="title"></div><div class="content"></div><div class="buttons"></div><div class="jquery-clear"></div></div></div></div></div></div></div>',title:"Hello",content:"Are you sure to continue?",contentLoaded:function(){},icon:"",confirmButton:"Okay",cancelButton:"Cancel",confirmButtonClass:"btn-default",cancelButtonClass:"btn-default",theme:"white",animation:"zoom",closeAnimation:"scale",animationSpeed:500,animationBounce:1.2,keyboardEnabled:false,rtl:false,confirmKeys:[13,32],cancelKeys:[27],container:"body",confirm:function(){},cancel:function(){},backgroundDismiss:true,autoClose:false,closeIcon:null,columnClass:"col-md-4 col-md-offset-4",onOpen:function(){},onClose:function(){},onAction:function(){}};jconfirm.record={opened:0,closed:0,currentlyOpen:0}})(jQuery);
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
!function(t,e,n){"use strict";function r(t){return function(){var e,n,r=arguments[0],i="["+(t?t+":":"")+r+"] ",o=arguments[1],a=arguments,s=function(t){return"function"==typeof t?t.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof t?"undefined":"string"!=typeof t?JSON.stringify(t):t};for(e=i+o.replace(/\{\d+\}/g,function(t){var e,n=+t.slice(1,-1);return n+2<a.length?(e=a[n+2],"function"==typeof e?e.toString().replace(/ ?\{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?B(e):e):t}),e=e+"\nhttp://errors.angularjs.org/1.3.0-beta.10/"+(t?t+"/":"")+r,n=2;n<arguments.length;n++)e=e+(2==n?"?":"&")+"p"+(n-2)+"="+encodeURIComponent(s(arguments[n]));return new Error(e)}}function i(t){if(null==t||E(t))return!1;var e=t.length;return 1===t.nodeType&&e?!0:w(t)||S(t)||0===e||"number"==typeof e&&e>0&&e-1 in t}function o(t,e,n){var r;if(t)if(C(t))for(r in t)"prototype"==r||"length"==r||"name"==r||t.hasOwnProperty&&!t.hasOwnProperty(r)||e.call(n,t[r],r);else if(t.forEach&&t.forEach!==o)t.forEach(e,n);else if(i(t))for(r=0;r<t.length;r++)e.call(n,t[r],r);else for(r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r);return t}function a(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e.sort()}function s(t,e,n){for(var r=a(t),i=0;i<r.length;i++)e.call(n,t[r[i]],r[i]);return r}function u(t){return function(e,n){t(n,e)}}function c(){for(var t,e=Rn.length;e;){if(e--,t=Rn[e].charCodeAt(0),57==t)return Rn[e]="A",Rn.join("");if(90!=t)return Rn[e]=String.fromCharCode(t+1),Rn.join("");Rn[e]="0"}return Rn.unshift("0"),Rn.join("")}function l(t,e){e?t.$$hashKey=e:delete t.$$hashKey}function f(t){var e=t.$$hashKey;return o(arguments,function(e){e!==t&&o(e,function(e,n){t[n]=e})}),l(t,e),t}function h(t){return parseInt(t,10)}function p(t,e){return f(new(f(function(){},{prototype:t})),e)}function $(){}function d(t){return t}function v(t){return function(){return t}}function g(t){return"undefined"==typeof t}function m(t){return"undefined"!=typeof t}function y(t){return null!=t&&"object"==typeof t}function w(t){return"string"==typeof t}function b(t){return"number"==typeof t}function x(t){return"[object Date]"===Vn.call(t)}function S(t){return"[object Array]"===Vn.call(t)}function C(t){return"function"==typeof t}function k(t){return"[object RegExp]"===Vn.call(t)}function E(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function A(t){return t&&t.$evalAsync&&t.$watch}function M(t){return"[object File]"===Vn.call(t)}function O(t){return"[object Blob]"===Vn.call(t)}function T(t){return!(!t||!(t.nodeName||t.prop&&t.attr&&t.find))}function N(t){var e,n={},r=t.split(",");for(e=0;e<r.length;e++)n[r[e]]=!0;return n}function D(t,e,n){var r=[];return o(t,function(t,i,o){r.push(e.call(n,t,i,o))}),r}function V(t,e){return-1!=j(t,e)}function j(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0;n<t.length;n++)if(e===t[n])return n;return-1}function P(t,e){var n=j(t,e);return n>=0&&t.splice(n,1),e}function R(t,e){if(E(t)||A(t))throw jn("cpws","Can't copy! Making copies of Window or Scope instances is not supported.");if(e){if(t===e)throw jn("cpi","Can't copy! Source and destination are identical.");if(S(t)){e.length=0;for(var n=0;n<t.length;n++)e.push(R(t[n]))}else{var r=e.$$hashKey;o(e,function(t,n){delete e[n]});for(var i in t)e[i]=R(t[i]);l(e,r)}}else e=t,t&&(S(t)?e=R(t,[]):x(t)?e=new Date(t.getTime()):k(t)?e=new RegExp(t.source):y(t)&&(e=R(t,{})));return e}function q(t,e){e=e||{};for(var n in t)!t.hasOwnProperty(n)||"$"===n.charAt(0)&&"$"===n.charAt(1)||(e[n]=t[n]);return e}function H(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!==t&&e!==e)return!0;var r,i,o,a=typeof t,s=typeof e;if(a==s&&"object"==a){if(!S(t)){if(x(t))return x(e)&&t.getTime()==e.getTime();if(k(t)&&k(e))return t.toString()==e.toString();if(A(t)||A(e)||E(t)||E(e)||S(e))return!1;o={};for(i in t)if("$"!==i.charAt(0)&&!C(t[i])){if(!H(t[i],e[i]))return!1;o[i]=!0}for(i in e)if(!o.hasOwnProperty(i)&&"$"!==i.charAt(0)&&e[i]!==n&&!C(e[i]))return!1;return!0}if(!S(e))return!1;if((r=t.length)==e.length){for(i=0;r>i;i++)if(!H(t[i],e[i]))return!1;return!0}}return!1}function I(){return e.securityPolicy&&e.securityPolicy.isActive||e.querySelector&&!(!e.querySelector("[ng-csp]")&&!e.querySelector("[data-ng-csp]"))}function U(t,e,n){return t.concat(Nn.call(e,n))}function F(t,e){return Nn.call(t,e||0)}function _(t,e){var n=arguments.length>2?F(arguments,2):[];return!C(e)||e instanceof RegExp?e:n.length?function(){return arguments.length?e.apply(t,n.concat(Nn.call(arguments,0))):e.apply(t,n)}:function(){return arguments.length?e.apply(t,arguments):e.call(t)}}function L(t,r){var i=r;return"string"==typeof t&&"$"===t.charAt(0)?i=n:E(r)?i="$WINDOW":r&&e===r?i="$DOCUMENT":A(r)&&(i="$SCOPE"),i}function B(t,e){return"undefined"==typeof t?n:JSON.stringify(t,L,e?"  ":null)}function z(t){return w(t)?JSON.parse(t):t}function W(t){if("function"==typeof t)t=!0;else if(t&&0!==t.length){var e=bn(""+t);t=!("f"==e||"0"==e||"false"==e||"no"==e||"n"==e||"[]"==e)}else t=!1;return t}function Q(t){t=An(t).clone();try{t.empty()}catch(e){}var n=3,r=An("<div>").append(t).html();try{return t[0].nodeType===n?bn(r):r.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(t,e){return"<"+bn(e)})}catch(e){return bn(r)}}function G(t){try{return decodeURIComponent(t)}catch(e){}}function J(t){var e,n,r={};return o((t||"").split("&"),function(t){if(t&&(e=t.split("="),n=G(e[0]),m(n))){var i=m(e[1])?G(e[1]):!0;r[n]?S(r[n])?r[n].push(i):r[n]=[r[n],i]:r[n]=i}}),r}function X(t){var e=[];return o(t,function(t,n){S(t)?o(t,function(t){e.push(K(n,!0)+(t===!0?"":"="+K(t,!0)))}):e.push(K(n,!0)+(t===!0?"":"="+K(t,!0)))}),e.length?e.join("&"):""}function Y(t){return K(t,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function K(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,e?"%20":"+")}function Z(t,e){var n,r,i=Hn.length;for(t=An(t),r=0;i>r;++r)if(n=Hn[r]+e,w(n=t.attr(n)))return n;return null}function tt(t,n){function r(t){t&&s.push(t)}var i,a,s=[t],u={},c=["ng:app","ng-app","x-ng-app","data-ng-app"],l=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;o(c,function(n){c[n]=!0,r(e.getElementById(n)),n=n.replace(":","\\:"),t.querySelectorAll&&(o(t.querySelectorAll("."+n),r),o(t.querySelectorAll("."+n+"\\:"),r),o(t.querySelectorAll("["+n+"]"),r))}),o(s,function(t){if(!i){var e=" "+t.className+" ",n=l.exec(e);n?(i=t,a=(n[2]||"").replace(/\s+/g,",")):o(t.attributes,function(e){!i&&c[e.name]&&(i=t,a=e.value)})}}),i&&(u.strictDi=null!==Z(i,"strict-di"),n(i,a?[a]:[],u))}function et(n,r,i){y(i)||(i={});var a={strictDi:!1};i=f(a,i);var s=function(){if(n=An(n),n.injector()){var t=n[0]===e?"document":Q(n);throw jn("btstrpd","App Already Bootstrapped with this Element '{0}'",t)}r=r||[],r.unshift(["$provide",function(t){t.value("$rootElement",n)}]),r.unshift("ng");var o=Rt(r,i.strictDi);return o.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(t,e,n,r,i){t.$apply(function(){e.data("$injector",r),n(e)(t)})}]),o},u=/^NG_DEFER_BOOTSTRAP!/;return t&&!u.test(t.name)?s():(t.name=t.name.replace(u,""),void(Pn.resumeBootstrap=function(t){o(t,function(t){r.push(t)}),s()}))}function nt(t,e){return e=e||"_",t.replace(In,function(t,n){return(n?e:"")+t.toLowerCase()})}function rt(){var e;Mn=t.jQuery,Mn&&Mn.fn.on?(An=Mn,f(Mn.fn,{scope:tr.scope,isolateScope:tr.isolateScope,controller:tr.controller,injector:tr.injector,inheritedData:tr.inheritedData}),e=Mn.cleanData,e=e.$$original||e,Mn.cleanData=function(t){for(var n,r=0;null!=(n=t[r]);r++)Mn(n).triggerHandler("$destroy");e(t)},Mn.cleanData.$$original=e):An=vt,Pn.element=An}function it(t,e,n){if(!t)throw jn("areq","Argument '{0}' is {1}",e||"?",n||"required");return t}function ot(t,e,n){return n&&S(t)&&(t=t[t.length-1]),it(C(t),e,"not a function, got "+(t&&"object"==typeof t?t.constructor.name||"Object":typeof t)),t}function at(t,e){if("hasOwnProperty"===t)throw jn("badname","hasOwnProperty is not a valid {0} name",e)}function st(t,e,n){if(!e)return t;for(var r,i=e.split("."),o=t,a=i.length,s=0;a>s;s++)r=i[s],t&&(t=(o=t)[r]);return!n&&C(t)?_(o,t):t}function ut(t){var e=t[0],n=t[t.length-1];if(e===n)return An(e);var r=e,i=[r];do{if(r=r.nextSibling,!r)break;i.push(r)}while(r!==n);return An(i)}function ct(t){function e(t,e,n){return t[e]||(t[e]=n())}var n=r("$injector"),i=r("ng"),o=e(t,"angular",Object);return o.$$minErr=o.$$minErr||r,e(o,"module",function(){var t={};return function(r,o,a){var s=function(t,e){if("hasOwnProperty"===t)throw i("badname","hasOwnProperty is not a valid {0} name",e)};return s(r,"module"),o&&t.hasOwnProperty(r)&&(t[r]=null),e(t,r,function(){function t(t,n,r,i){return i||(i=e),function(){return i[r||"push"]([t,n,arguments]),c}}if(!o)throw n("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",r);var e=[],i=[],s=[],u=t("$injector","invoke","push",i),c={_invokeQueue:e,_configBlocks:i,_runBlocks:s,requires:o,name:r,provider:t("$provide","provider"),factory:t("$provide","factory"),service:t("$provide","service"),value:t("$provide","value"),constant:t("$provide","constant","unshift"),animation:t("$animateProvider","register"),filter:t("$filterProvider","register"),controller:t("$controllerProvider","register"),directive:t("$compileProvider","directive"),config:u,run:function(t){return s.push(t),this}};return a&&u(a),c})}})}function lt(e){f(e,{bootstrap:et,copy:R,extend:f,equals:H,element:An,forEach:o,injector:Rt,noop:$,bind:_,toJson:B,fromJson:z,identity:d,isUndefined:g,isDefined:m,isString:w,isFunction:C,isObject:y,isNumber:b,isElement:T,isArray:S,version:Un,isDate:x,lowercase:bn,uppercase:Sn,callbacks:{counter:0},$$minErr:r,$$csp:I}),On=ct(t);try{On("ngLocale")}catch(n){On("ngLocale",[]).provider("$locale",oe)}On("ng",["ngLocale"],["$provide",function(t){t.provider({$$sanitizeUri:De}),t.provider("$compile",Lt).directive({a:Dr,input:Gr,textarea:Gr,form:Rr,script:Ti,select:Vi,style:Pi,option:ji,ngBind:si,ngBindHtml:ci,ngBindTemplate:ui,ngClass:li,ngClassEven:hi,ngClassOdd:fi,ngCloak:pi,ngController:$i,ngForm:qr,ngHide:Ci,ngIf:vi,ngInclude:gi,ngInit:yi,ngNonBindable:wi,ngPluralize:bi,ngRepeat:xi,ngShow:Si,ngStyle:ki,ngSwitch:Ei,ngSwitchWhen:Ai,ngSwitchDefault:Mi,ngOptions:Di,ngTransclude:Oi,ngModel:ti,ngList:ri,ngChange:ei,required:ni,ngRequired:ni,ngValue:oi,ngModelOptions:ai}).directive({ngInclude:mi}).directive(Vr).directive(di),t.provider({$anchorScroll:qt,$animate:cr,$browser:Ut,$cacheFactory:Ft,$controller:Wt,$document:Qt,$exceptionHandler:Gt,$filter:Le,$interpolate:re,$interval:ie,$http:Zt,$httpBackend:ee,$location:me,$log:ye,$parse:Ae,$rootScope:Ne,$q:Me,$sce:qe,$sceDelegate:Re,$sniffer:He,$templateCache:_t,$timeout:Ie,$window:_e,$$rAF:Te,$$asyncCallback:Ht})}])}function ft(){return++Ln}function ht(t){return t.replace(Wn,function(t,e,n,r){return r?n.toUpperCase():n}).replace(Qn,"Moz$1")}function pt(t){return!Xn.test(t)}function $t(t,e){var n,r,i,a,s=e.createDocumentFragment(),u=[];if(pt(t))u.push(e.createTextNode(t));else{for(n=n||s.appendChild(e.createElement("div")),r=(Yn.exec(t)||["",""])[1].toLowerCase(),i=Zn[r]||Zn._default,n.innerHTML=i[1]+t.replace(Kn,"<$1></$2>")+i[2],a=i[0];a--;)n=n.lastChild;u=U(u,n.childNodes),n=s.firstChild,n.textContent=""}return s.textContent="",s.innerHTML="",o(u,function(t){s.appendChild(t)}),s}function dt(t,n){n=n||e;var r;return(r=Jn.exec(t))?[n.createElement(r[1])]:(r=$t(t,n))?r.childNodes:[]}function vt(t){if(t instanceof vt)return t;if(w(t)&&(t=qn(t)),!(this instanceof vt)){if(w(t)&&"<"!=t.charAt(0))throw Gn("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");return new vt(t)}w(t)?Et(this,dt(t)):Et(this,t)}function gt(t){return t.cloneNode(!0)}function mt(t){wt(t);for(var e=0,n=t.childNodes||[];e<n.length;e++)mt(n[e])}function yt(t,e,n,r){if(m(r))throw Gn("offargs","jqLite#off() does not support the `selector` argument");var i=bt(t,"events"),a=bt(t,"handle");a&&(g(e)?o(i,function(e,n){zn(t,n,e),delete i[n]}):o(e.split(" "),function(e){g(n)?(zn(t,e,i[e]),delete i[e]):P(i[e]||[],n)}))}function wt(t,e){var r=t[_n],i=Fn[r];if(i){if(e)return void delete Fn[r].data[e];i.handle&&(i.events.$destroy&&i.handle({},"$destroy"),yt(t)),delete Fn[r],t[_n]=n}}function bt(t,e,n){var r=t[_n],i=Fn[r||-1];return m(n)?(i||(t[_n]=r=ft(),i=Fn[r]={}),void(i[e]=n)):i&&i[e]}function xt(t,e,n){var r=bt(t,"data"),i=m(n),o=!i&&m(e),a=o&&!y(e);if(r||a||bt(t,"data",r={}),i)r[e]=n;else{if(!o)return r;if(a)return r&&r[e];f(r,e)}}function St(t,e){return t.getAttribute?(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+e+" ")>-1:!1}function Ct(t,e){e&&t.setAttribute&&o(e.split(" "),function(e){t.setAttribute("class",qn((" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+qn(e)+" "," ")))})}function kt(t,e){if(e&&t.setAttribute){var n=(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");o(e.split(" "),function(t){t=qn(t),-1===n.indexOf(" "+t+" ")&&(n+=t+" ")}),t.setAttribute("class",qn(n))}}function Et(t,e){if(e){e=e.nodeName||!m(e.length)||E(e)?[e]:e;for(var n=0;n<e.length;n++)t.push(e[n])}}function At(t,e){return Mt(t,"$"+(e||"ngController")+"Controller")}function Mt(t,e,r){t=An(t),9==t[0].nodeType&&(t=t.find("html"));for(var i=S(e)?e:[e];t.length;){for(var o=t[0],a=0,s=i.length;s>a;a++)if((r=t.data(i[a]))!==n)return r;t=An(o.parentNode||11===o.nodeType&&o.host)}}function Ot(t){for(var e=0,n=t.childNodes;e<n.length;e++)mt(n[e]);for(;t.firstChild;)t.removeChild(t.firstChild)}function Tt(t,e){var n=er[e.toLowerCase()];return n&&nr[t.nodeName]&&n}function Nt(t,n){var r=function(r,i){if(r.preventDefault||(r.preventDefault=function(){r.returnValue=!1}),r.stopPropagation||(r.stopPropagation=function(){r.cancelBubble=!0}),r.target||(r.target=r.srcElement||e),g(r.defaultPrevented)){var a=r.preventDefault;r.preventDefault=function(){r.defaultPrevented=!0,a.call(r)},r.defaultPrevented=!1}r.isDefaultPrevented=function(){return r.defaultPrevented||r.returnValue===!1};var s=q(n[i||r.type]||[]);o(s,function(e){e.call(t,r)}),8>=En?(r.preventDefault=null,r.stopPropagation=null,r.isDefaultPrevented=null):(delete r.preventDefault,delete r.stopPropagation,delete r.isDefaultPrevented)};return r.elem=t,r}function Dt(t){var e,r=typeof t;return"object"==r&&null!==t?"function"==typeof(e=t.$$hashKey)?e=t.$$hashKey():e===n&&(e=t.$$hashKey=c()):e=t,r+":"+e}function Vt(t){o(t,this.put,this)}function jt(t){var e=t.toString().replace(ar,""),n=e.match(rr);return n?"function("+(n[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Pt(t,e,n){var r,i,a,s;if("function"==typeof t){if(!(r=t.$inject)){if(r=[],t.length){if(e)throw w(n)&&n||(n=t.name||jt(t)),sr("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",n);i=t.toString().replace(ar,""),a=i.match(rr),o(a[1].split(ir),function(t){t.replace(or,function(t,e,n){r.push(n)})})}t.$inject=r}}else S(t)?(s=t.length-1,ot(t[s],"fn"),r=t.slice(0,s)):ot(t,"fn",!0);return r}function Rt(t,e){function r(t){return function(e,n){return y(e)?void o(e,u(t)):t(e,n)}}function i(t,e){if(at(t,"service"),(C(e)||S(e))&&(e=k.instantiate(e)),!e.$get)throw sr("pget","Provider '{0}' must define $get factory method.",t);return x[t+g]=e}function a(t,e){return i(t,{$get:e})}function s(t,e){return a(t,["$injector",function(t){return t.instantiate(e)}])}function c(t,e){return a(t,v(e))}function l(t,e){at(t,"constant"),x[t]=e,E[t]=e}function f(t,e){var n=k.get(t+g),r=n.$get;n.$get=function(){var t=A.invoke(r,n);return A.invoke(e,null,{$delegate:t})}}function h(t){var e,n=[];return o(t,function(t){function r(t){var e,n;for(e=0,n=t.length;n>e;e++){var r=t[e],i=k.get(r[0]);i[r[1]].apply(i,r[2])}}if(!b.get(t)){b.put(t,!0);try{w(t)?(e=On(t),n=n.concat(h(e.requires)).concat(e._runBlocks),r(e._invokeQueue),r(e._configBlocks)):C(t)?n.push(k.invoke(t)):S(t)?n.push(k.invoke(t)):ot(t,"module")}catch(i){throw S(t)&&(t=t[t.length-1]),i.message&&i.stack&&-1==i.stack.indexOf(i.message)&&(i=i.message+"\n"+i.stack),sr("modulerr","Failed to instantiate module {0} due to:\n{1}",t,i.stack||i.message||i)}}}),n}function p(t,n){function r(e){if(t.hasOwnProperty(e)){if(t[e]===d)throw sr("cdep","Circular dependency found: {0}",m.join(" <- "));return t[e]}try{return m.unshift(e),t[e]=d,t[e]=n(e)}catch(r){throw t[e]===d&&delete t[e],r}finally{m.shift()}}function i(t,n,i,o){"string"==typeof i&&(o=i,i=null);var a,s,u,c=[],l=Pt(t,e,o);for(s=0,a=l.length;a>s;s++){if(u=l[s],"string"!=typeof u)throw sr("itkn","Incorrect injection token! Expected service name as string, got {0}",u);c.push(i&&i.hasOwnProperty(u)?i[u]:r(u))}return t.$inject||(t=t[a]),t.apply(n,c)}function o(t,e,n){var r,o,a=function(){};return a.prototype=(S(t)?t[t.length-1]:t).prototype,r=new a,o=i(t,r,e,n),y(o)||C(o)?o:r}return{invoke:i,instantiate:o,get:r,annotate:Pt,has:function(e){return x.hasOwnProperty(e+g)||t.hasOwnProperty(e)}}}e=e===!0;var d={},g="Provider",m=[],b=new Vt,x={$provide:{provider:r(i),factory:r(a),service:r(s),value:r(c),constant:r(l),decorator:f}},k=x.$injector=p(x,function(){throw sr("unpr","Unknown provider: {0}",m.join(" <- "))},e),E={},A=E.$injector=p(E,function(t){var e=k.get(t+g);return A.invoke(e.$get,e,n,t)},e);return o(h(t),function(t){A.invoke(t||$)}),A}function qt(){var t=!0;this.disableAutoScrolling=function(){t=!1},this.$get=["$window","$location","$rootScope",function(e,n,r){function i(t){var e=null;return o(t,function(t){e||"a"!==bn(t.nodeName)||(e=t)}),e}function a(){var t,r=n.hash();r?(t=s.getElementById(r))?t.scrollIntoView():(t=i(s.getElementsByName(r)))?t.scrollIntoView():"top"===r&&e.scrollTo(0,0):e.scrollTo(0,0)}var s=e.document;return t&&r.$watch(function(){return n.hash()},function(){r.$evalAsync(a)}),a}]}function Ht(){this.$get=["$$rAF","$timeout",function(t,e){return t.supported?function(e){return t(e)}:function(t){return e(t,0,!1)}}]}function It(t,e,r,i){function a(t){try{t.apply(null,F(arguments,1))}finally{if(m--,0===m)for(;y.length;)try{y.pop()()}catch(e){r.error(e)}}}function s(t,e){!function n(){o(x,function(t){t()}),b=e(n,t)}()}function u(){k=null,S!=c.url()&&(S=c.url(),o(E,function(t){t(c.url())}))}var c=this,l=e[0],f=t.location,h=t.history,p=t.setTimeout,d=t.clearTimeout,v={};c.isMock=!1;var m=0,y=[];c.$$completeOutstandingRequest=a,c.$$incOutstandingRequestCount=function(){m++},c.notifyWhenNoOutstandingRequests=function(t){o(x,function(t){t()}),0===m?t():y.push(t)};var b,x=[];c.addPollFn=function(t){return g(b)&&s(100,p),x.push(t),t};var S=f.href,C=e.find("base"),k=null;c.url=function(e,n){if(f!==t.location&&(f=t.location),h!==t.history&&(h=t.history),e){if(S==e)return;return S=e,i.history?n?h.replaceState(null,"",e):(h.pushState(null,"",e),C.attr("href",C.attr("href"))):(k=e,n?f.replace(e):f.href=e),c}return k||f.href.replace(/%27/g,"'")};var E=[],A=!1;c.onUrlChange=function(e){return A||(i.history&&An(t).on("popstate",u),i.hashchange?An(t).on("hashchange",u):c.addPollFn(u),A=!0),E.push(e),e},c.baseHref=function(){var t=C.attr("href");return t?t.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var M={},O="",T=c.baseHref();c.cookies=function(t,e){var i,o,a,s,u;if(!t){if(l.cookie!==O)for(O=l.cookie,o=O.split("; "),M={},s=0;s<o.length;s++)a=o[s],u=a.indexOf("="),u>0&&(t=unescape(a.substring(0,u)),M[t]===n&&(M[t]=unescape(a.substring(u+1))));return M}e===n?l.cookie=escape(t)+"=;path="+T+";expires=Thu, 01 Jan 1970 00:00:00 GMT":w(e)&&(i=(l.cookie=escape(t)+"="+escape(e)+";path="+T).length+1,i>4096&&r.warn("Cookie '"+t+"' possibly not set or overflowed because it was too large ("+i+" > 4096 bytes)!"))},c.defer=function(t,e){var n;return m++,n=p(function(){delete v[n],a(t)},e||0),v[n]=!0,n},c.defer.cancel=function(t){return v[t]?(delete v[t],d(t),a($),!0):!1}}function Ut(){this.$get=["$window","$log","$sniffer","$document",function(t,e,n,r){return new It(t,r,e,n)}]}function Ft(){this.$get=function(){function t(t,n){function i(t){t!=h&&(p?p==t&&(p=t.n):p=t,o(t.n,t.p),o(t,h),h=t,h.n=null)}function o(t,e){t!=e&&(t&&(t.p=e),e&&(e.n=t))}if(t in e)throw r("$cacheFactory")("iid","CacheId '{0}' is already taken!",t);var a=0,s=f({},n,{id:t}),u={},c=n&&n.capacity||Number.MAX_VALUE,l={},h=null,p=null;return e[t]={put:function(t,e){if(c<Number.MAX_VALUE){var n=l[t]||(l[t]={key:t});i(n)}if(!g(e))return t in u||a++,u[t]=e,a>c&&this.remove(p.key),e},get:function(t){if(c<Number.MAX_VALUE){var e=l[t];if(!e)return;i(e)}return u[t]},remove:function(t){if(c<Number.MAX_VALUE){var e=l[t];if(!e)return;e==h&&(h=e.p),e==p&&(p=e.n),o(e.n,e.p),delete l[t]}delete u[t],a--},removeAll:function(){u={},a=0,l={},h=p=null},destroy:function(){u=null,s=null,l=null,delete e[t]},info:function(){return f({},s,{size:a})}}}var e={};return t.info=function(){var t={};return o(e,function(e,n){t[n]=e.info()}),t},t.get=function(t){return e[t]},t}}function _t(){this.$get=["$cacheFactory",function(t){return t("templates")}]}function Lt(t,r){var i={},a="Directive",s=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,c=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,l=N("ngSrc,ngSrcset,dev,srcset"),h=/^(on[a-z]+|formaction)$/;this.directive=function $(e,n){return at(e,"directive"),w(e)?(it(n,"directiveFactory"),i.hasOwnProperty(e)||(i[e]=[],t.factory(e+a,["$injector","$exceptionHandler",function(t,n){var r=[];return o(i[e],function(i,o){try{var a=t.invoke(i);C(a)?a={compile:v(a)}:!a.compile&&a.link&&(a.compile=v(a.link)),a.priority=a.priority||0,a.index=o,a.name=a.name||e,a.require=a.require||a.controller&&a.name,a.restrict=a.restrict||"A",r.push(a)}catch(s){n(s)}}),r}])),i[e].push(n)):o(e,u($)),this},this.aHrefSanitizationWhitelist=function(t){return m(t)?(r.aHrefSanitizationWhitelist(t),this):r.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(t){return m(t)?(r.imgSrcSanitizationWhitelist(t),this):r.imgSrcSanitizationWhitelist()},this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(t,r,u,$,g,m,b,x,k,E,A,M){function O(t,e,n,r,i){t instanceof An||(t=An(t)),o(t,function(e,n){3==e.nodeType&&e.nodeValue.match(/\S+/)&&(t[n]=e=An(e).wrap("<span></span>").parent()[0])});var a=N(t,e,t,n,r,i);return T(t,"ng-scope"),function(e,n,r){it(e,"scope");var i=n?tr.clone.call(t):t;o(r,function(t,e){i.data("$"+e+"Controller",t)});for(var s=0,u=i.length;u>s;s++){var c=i[s],l=c.nodeType;1!==l&&9!==l||i.eq(s).data("$scope",e)}return n&&n(i,e),a&&a(e,i,i),i}}function T(t,e){try{t.addClass(e)}catch(n){}}function N(t,e,r,i,o,a){function s(t,r,i,o){var a,s,u,c,l,f,h,p,d,v=r.length,g=new Array(v);for(h=0;v>h;h++)g[h]=r[h];for(h=0,d=0,p=$.length;p>h;d++)u=g[d],a=$[h++],s=$[h++],c=An(u),a?(a.scope?(l=t.$new(),c.data("$scope",l)):l=t,f=a.transclude,f||!o&&e?a(s,l,u,i,D(t,f||e)):a(s,l,u,i,o)):s&&s(t,u.childNodes,n,o)}for(var u,c,l,f,h,p,$=[],d=0;d<t.length;d++)u=new et,c=V(t[d],[],u,0===d?i:n,o),l=c.length?I(c,t[d],u,e,r,null,[],[],a):null,l&&l.scope&&T(An(t[d]),"ng-scope"),h=l&&l.terminal||!(f=t[d].childNodes)||!f.length?null:N(f,l?l.transclude:e),$.push(l,h),p=p||l||h,a=null;return p?s:null}function D(t,e){return function(n,r,i){var o=!1;n||(n=t.$new(),n.$$transcluded=!0,o=!0);var a=e(n,r,i);return o&&a.on("$destroy",_(n,n.$destroy)),a}}function V(t,e,n,r,i){var o,a,u=t.nodeType,l=n.$attr;switch(u){case 1:L(e,Bt(Tn(t).toLowerCase()),"E",r,i);for(var f,h,p,$,d,v=t.attributes,g=0,m=v&&v.length;m>g;g++){var y=!1,b=!1;if(f=v[g],!En||En>=8||f.specified){h=f.name,$=Bt(h),st.test($)&&(h=nt($.substr(6),"-"));var x=$.replace(/(Start|End)$/,"");$===x+"Start"&&(y=h,b=h.substr(0,h.length-5)+"end",h=h.substr(0,h.length-6)),p=Bt(h.toLowerCase()),l[p]=h,n[p]=d=qn(f.value),Tt(t,p)&&(n[p]=!0),K(t,e,d,p),L(e,p,"A",r,i,y,b)}}if(a=t.className,w(a)&&""!==a)for(;o=c.exec(a);)p=Bt(o[2]),L(e,p,"C",r,i)&&(n[p]=qn(o[3])),a=a.substr(o.index+o[0].length);break;case 3:J(e,t.nodeValue);break;case 8:try{o=s.exec(t.nodeValue),o&&(p=Bt(o[1]),L(e,p,"M",r,i)&&(n[p]=qn(o[2])))}catch(S){}}return e.sort(W),e}function j(t,e,n){var r=[],i=0;if(e&&t.hasAttribute&&t.hasAttribute(e)){do{if(!t)throw lr("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",e,n);1==t.nodeType&&(t.hasAttribute(e)&&i++,t.hasAttribute(n)&&i--),r.push(t),t=t.nextSibling}while(i>0)}else r.push(t);return An(r)}function R(t,e,n){return function(r,i,o,a,s){return i=j(i[0],e,n),t(r,i,o,a,s)}}function I(t,i,a,s,c,l,f,h,p){function $(t,e,n,r){t&&(n&&(t=R(t,n,r)),t.require=x.require,t.directiveName=k,(P===x||x.$$isolateScope)&&(t=tt(t,{isolateScope:!0})),f.push(t)),e&&(n&&(e=R(e,n,r)),e.require=x.require,e.directiveName=k,(P===x||x.$$isolateScope)&&(e=tt(e,{isolateScope:!0})),h.push(e))}function d(t,e,n,r){var i,a="data",s=!1;if(w(e)){for(;"^"==(i=e.charAt(0))||"?"==i;)e=e.substr(1),"^"==i&&(a="inheritedData"),s=s||"?"==i;if(i=null,r&&"data"===a&&(i=r[e]),i=i||n[a]("$"+e+"Controller"),!i&&!s)throw lr("ctreq","Controller '{0}', required by directive '{1}', can't be found!",e,t);return i}return S(e)&&(i=[],o(e,function(e){i.push(d(t,e,n,r))})),i}function v(t,e,s,c,l){function p(t,e){var r;return arguments.length<2&&(e=t,t=n),W&&(r=k),l(t,e,r)}var $,v,g,y,w,x,S,C,k={};if($=i===s?a:q(a,new et(An(s),a.$attr)),v=$.$$element,P){var E=/^\s*([@=&])(\??)\s*(\w*)\s*$/,A=An(s);S=e.$new(!0),!I||I!==P&&I!==P.$$originalDirective?A.data("$isolateScopeNoTemplate",S):A.data("$isolateScope",S),T(A,"ng-isolate-scope"),o(P.scope,function(t,n){var i,o,a,s,u=t.match(E)||[],c=u[3]||n,l="?"==u[2],f=u[1];switch(S.$$isolateBindings[n]=f+c,f){case"@":$.$observe(c,function(t){S[n]=t}),$.$$observers[c].$$scope=e,$[c]&&(S[n]=r($[c])(e));break;case"=":if(l&&!$[c])return;o=m($[c]),s=o.literal?H:function(t,e){return t===e},a=o.assign||function(){throw i=S[n]=o(e),lr("nonassign","Expression '{0}' used with directive '{1}' is non-assignable!",$[c],P.name)},i=S[n]=o(e),S.$watch(function h(){var t=o(e);return s(t,S[n])||(s(t,i)?a(e,t=S[n]):S[n]=t),h.$$unwatch=o.$$unwatch,i=t},null,o.literal);break;case"&":o=m($[c]),S[n]=function(t){return o(e,t)};break;default:throw lr("iscp","Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}",P.name,n,t)}})}for(C=l&&p,D&&o(D,function(t){var n,r={$scope:t===P||t.$$isolateScope?S:e,$element:v,$attrs:$,$transclude:C};x=t.controller,"@"==x&&(x=$[t.name]),n=b(x,r),k[t.name]=n,W||v.data("$"+t.name+"Controller",n),t.controllerAs&&(r.$scope[t.controllerAs]=n)}),g=0,y=f.length;y>g;g++)try{w=f[g],w(w.isolateScope?S:e,v,$,w.require&&d(w.directiveName,w.require,v,k),C)}catch(M){u(M,Q(v))}var O=e;for(P&&(P.template||null===P.templateUrl)&&(O=S),t&&t(O,s.childNodes,n,l),g=h.length-1;g>=0;g--)try{w=h[g],w(w.isolateScope?S:e,v,$,w.require&&d(w.directiveName,w.require,v,k),C)}catch(M){u(M,Q(v))}}p=p||{};for(var g,x,k,E,A,M,N=-Number.MAX_VALUE,D=p.controllerDirectives,P=p.newIsolateScopeDirective,I=p.templateDirective,_=p.nonTlbTranscludeDirective,L=!1,W=p.hasElementTranscludeDirective,J=a.$$element=An(i),Y=l,K=s,nt=0,rt=t.length;rt>nt;nt++){x=t[nt];var it=x.$$start,ot=x.$$end;if(it&&(J=j(i,it,ot)),E=n,N>x.priority)break;if((M=x.scope)&&(g=g||x,x.templateUrl||(G("new/isolated scope",P,x,J),y(M)&&(P=x))),k=x.name,!x.templateUrl&&x.controller&&(M=x.controller,D=D||{},G("'"+k+"' controller",D[k],x,J),D[k]=x),(M=x.transclude)&&(L=!0,x.$$tlb||(G("transclusion",_,x,J),_=x),"element"==M?(W=!0,N=x.priority,E=j(i,it,ot),J=a.$$element=An(e.createComment(" "+k+": "+a[k]+" ")),i=J[0],Z(c,An(F(E)),i),K=O(E,s,N,Y&&Y.name,{nonTlbTranscludeDirective:_})):(E=An(gt(i)).contents(),J.empty(),K=O(E,s))),x.template)if(G("template",I,x,J),I=x,M=C(x.template)?x.template(J,a):x.template,M=at(M),x.replace){if(Y=x,E=pt(M)?[]:An(X(x.type,qn(M))),i=E[0],1!=E.length||1!==i.nodeType)throw lr("tplrt","Template for directive '{0}' must have exactly one root element. {1}",k,"");Z(c,J,i);var st={$attr:{}},ut=V(i,[],st),ct=t.splice(nt+1,t.length-(nt+1));P&&U(ut),t=t.concat(ut).concat(ct),B(a,st),rt=t.length}else J.html(M);if(x.templateUrl)G("template",I,x,J),I=x,x.replace&&(Y=x),v=z(t.splice(nt,t.length-nt),J,a,c,K,f,h,{controllerDirectives:D,newIsolateScopeDirective:P,templateDirective:I,nonTlbTranscludeDirective:_}),rt=t.length;else if(x.compile)try{A=x.compile(J,a,K),C(A)?$(null,A,it,ot):A&&$(A.pre,A.post,it,ot)}catch(lt){u(lt,Q(J))}x.terminal&&(v.terminal=!0,N=Math.max(N,x.priority))}return v.scope=g&&g.scope===!0,v.transclude=L&&K,p.hasElementTranscludeDirective=W,v}function U(t){for(var e=0,n=t.length;n>e;e++)t[e]=p(t[e],{$$isolateScope:!0})}function L(e,r,o,s,c,l,f){if(r===c)return null;var h=null;if(i.hasOwnProperty(r))for(var $,d=t.get(r+a),v=0,g=d.length;g>v;v++)try{$=d[v],(s===n||s>$.priority)&&-1!=$.restrict.indexOf(o)&&(l&&($=p($,{$$start:l,$$end:f})),e.push($),h=$)}catch(m){u(m)}return h}function B(t,e){var n=e.$attr,r=t.$attr,i=t.$$element;o(t,function(r,i){"$"!=i.charAt(0)&&(e[i]&&e[i]!==r&&(r+=("style"===i?";":" ")+e[i]),t.$set(i,r,!0,n[i]))}),o(e,function(e,o){"class"==o?(T(i,e),t["class"]=(t["class"]?t["class"]+" ":"")+e):"style"==o?(i.attr("style",i.attr("style")+";"+e),t.style=(t.style?t.style+";":"")+e):"$"==o.charAt(0)||t.hasOwnProperty(o)||(t[o]=e,r[o]=n[o])})}function z(t,e,n,r,i,a,s,u){var c,l,h=[],p=e[0],d=t.shift(),v=f({},d,{templateUrl:null,transclude:null,replace:null,$$originalDirective:d}),m=C(d.templateUrl)?d.templateUrl(e,n):d.templateUrl,w=d.type;return e.empty(),$.get(E.getTrustedResourceUrl(m),{cache:g}).success(function(f){var $,g,b,x;if(f=at(f),d.replace){if(b=pt(f)?[]:An(X(w,qn(f))),$=b[0],1!=b.length||1!==$.nodeType)throw lr("tplrt","Template for directive '{0}' must have exactly one root element. {1}",d.name,m);g={$attr:{}},Z(r,e,$);var S=V($,[],g);y(d.scope)&&U(S),t=S.concat(t),B(n,g)}else $=p,e.html(f);for(t.unshift(v),c=I(t,$,n,i,e,d,a,s,u),o(r,function(t,n){t==$&&(r[n]=e[0])}),l=N(e[0].childNodes,i);h.length;){var C=h.shift(),k=h.shift(),E=h.shift(),A=h.shift(),M=e[0];if(k!==p){var O=k.className;u.hasElementTranscludeDirective&&d.replace||(M=gt($)),Z(E,An(k),M),T(An(M),O)}x=c.transclude?D(C,c.transclude):A,c(l,C,M,r,x)}h=null}).error(function(t,e,n,r){throw lr("tpload","Failed to load template: {0}",r.url)}),function(t,e,n,r,i){h?(h.push(e),h.push(n),h.push(r),h.push(i)):c(l,e,n,r,i)}}function W(t,e){var n=e.priority-t.priority;return 0!==n?n:t.name!==e.name?t.name<e.name?-1:1:t.index-e.index}function G(t,e,n,r){if(e)throw lr("multidir","Multiple directives [{0}, {1}] asking for {2} on: {3}",e.name,n.name,t,Q(r))}function J(t,e){var n=r(e,!0);n&&t.push({priority:0,compile:v(function(t,i){var o=i.parent(),a=o.data("$binding")||[];n=r(e),a.push(n),T(o.data("$binding",a),"ng-binding"),t.$watch(n,function(t){i[0].nodeValue=t})})})}function X(t,n){switch(t=bn(t||"html")){case"svg":case"math":var r=e.createElement("div");return r.innerHTML="<"+t+">"+n+"</"+t+">",r.childNodes[0].childNodes;default:return n}}function Y(t,e){if("srcdoc"==e)return E.HTML;var n=Tn(t);return"xlinkHref"==e||"FORM"==n&&"action"==e||"IMG"!=n&&("src"==e||"ngSrc"==e)?E.RESOURCE_URL:void 0}function K(t,e,n,i){var o=r(n,!0);if(o){if("multiple"===i&&"SELECT"===Tn(t))throw lr("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",Q(t));e.push({priority:100,compile:function(){return{pre:function(e,n,a){var s=a.$$observers||(a.$$observers={});if(h.test(i))throw lr("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");o=r(a[i],!0,Y(t,i),l[i]),o&&(a[i]=o(e),(s[i]||(s[i]=[])).$$inter=!0,(a.$$observers&&a.$$observers[i].$$scope||e).$watch(o,function(t,e){"class"===i&&t!=e?a.$updateClass(t,e):a.$set(i,t)}))}}}})}}function Z(t,n,r){var i,o,a=n[0],s=n.length,u=a.parentNode;if(t)for(i=0,o=t.length;o>i;i++)if(t[i]==a){t[i++]=r;for(var c=i,l=c+s-1,f=t.length;f>c;c++,l++)f>l?t[c]=t[l]:delete t[c];t.length-=s-1;break}u&&u.replaceChild(r,a);var h=e.createDocumentFragment();
h.appendChild(a),r[An.expando]=a[An.expando];for(var p=1,$=n.length;$>p;p++){var d=n[p];An(d).remove(),h.appendChild(d),delete n[p]}n[0]=r,n.length=1}function tt(t,e){return f(function(){return t.apply(null,arguments)},t,e)}var et=function(t,e){this.$$element=t,this.$attr=e||{}};et.prototype={$normalize:Bt,$addClass:function(t){t&&t.length>0&&A.addClass(this.$$element,t)},$removeClass:function(t){t&&t.length>0&&A.removeClass(this.$$element,t)},$updateClass:function(t,e){var n=zt(t,e),r=zt(e,t);0===n.length?A.removeClass(this.$$element,r):0===r.length?A.addClass(this.$$element,n):A.setClass(this.$$element,n,r)},$set:function(t,e,r,i){var a,s=Tt(this.$$element[0],t);s&&(this.$$element.prop(t,e),i=s),this[t]=e,i?this.$attr[t]=i:(i=this.$attr[t],i||(this.$attr[t]=i=nt(t,"-"))),a=Tn(this.$$element),("A"===a&&"href"===t||"IMG"===a&&"src"===t)&&(this[t]=e=M(e,"src"===t)),r!==!1&&(null===e||e===n?this.$$element.removeAttr(i):this.$$element.attr(i,e));var c=this.$$observers;c&&o(c[t],function(t){try{t(e)}catch(n){u(n)}})},$observe:function(t,e){var n=this,r=n.$$observers||(n.$$observers={}),i=r[t]||(r[t]=[]);return i.push(e),x.$evalAsync(function(){i.$$inter||e(n[t])}),function(){P(i,e)}}};var rt=r.startSymbol(),ot=r.endSymbol(),at="{{"==rt||"}}"==ot?d:function(t){return t.replace(/\{\{/g,rt).replace(/}}/g,ot)},st=/^ngAttr[A-Z]/;return O}]}function Bt(t){return ht(t.replace(fr,""))}function zt(t,e){var n="",r=t.split(/\s+/),i=e.split(/\s+/);t:for(var o=0;o<r.length;o++){for(var a=r[o],s=0;s<i.length;s++)if(a==i[s])continue t;n+=(n.length>0?" ":"")+a}return n}function Wt(){var t={},e=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(e,n){at(e,"controller"),y(e)?f(t,e):t[e]=n},this.$get=["$injector","$window",function(n,i){return function(o,a){var s,u,c,l;if(w(o)&&(u=o.match(e),c=u[1],l=u[3],o=t.hasOwnProperty(c)?t[c]:st(a.$scope,c,!0)||st(i,c,!0),ot(o,c,!0)),s=n.instantiate(o,a,c),l){if(!a||"object"!=typeof a.$scope)throw r("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",c||o.name,l);a.$scope[l]=s}return s}}]}function Qt(){this.$get=["$window",function(t){return An(t.document)}]}function Gt(){this.$get=["$log",function(t){return function(e,n){t.error.apply(t,arguments)}}]}function Jt(t){var e,n,r,i={};return t?(o(t.split("\n"),function(t){r=t.indexOf(":"),e=bn(qn(t.substr(0,r))),n=qn(t.substr(r+1)),e&&(i[e]?i[e]+=", "+n:i[e]=n)}),i):i}function Xt(t){var e=y(t)?t:n;return function(n){return e||(e=Jt(t)),n?e[bn(n)]||null:e}}function Yt(t,e,n){return C(n)?n(t,e):(o(n,function(n){t=n(t,e)}),t)}function Kt(t){return t>=200&&300>t}function Zt(){var t=/^\s*(\[|\{[^\{])/,e=/[\}\]]\s*$/,r=/^\)\]\}',?\n/,i={"Content-Type":"application/json;charset=utf-8"},a=this.defaults={transformResponse:[function(n){return w(n)&&(n=n.replace(r,""),t.test(n)&&e.test(n)&&(n=z(n))),n}],transformRequest:[function(t){return!y(t)||M(t)||O(t)?t:B(t)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:R(i),put:R(i),patch:R(i)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},u=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(t,e,r,i,c,l){function h(t){function r(t){var e=f({},t,{data:Yt(t.data,t.headers,s.transformResponse)});return Kt(t.status)?e:c.reject(e)}function i(t){function e(t){var e;o(t,function(n,r){C(n)&&(e=n(),null!=e?t[r]=e:delete t[r])})}var n,r,i,s=a.headers,u=f({},t.headers);s=f({},s.common,s[bn(t.method)]),e(s),e(u);t:for(n in s){r=bn(n);for(i in u)if(bn(i)===r)continue t;u[n]=s[n]}return u}var s={method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse},u=i(t);f(s,t),s.headers=u,s.method=Sn(s.method);var l=Fe(s.url)?e.cookies()[s.xsrfCookieName||a.xsrfCookieName]:n;l&&(u[s.xsrfHeaderName||a.xsrfHeaderName]=l);var h=function(t){u=t.headers;var e=Yt(t.data,Xt(u),t.transformRequest);return g(t.data)&&o(u,function(t,e){"content-type"===bn(e)&&delete u[e]}),g(t.withCredentials)&&!g(a.withCredentials)&&(t.withCredentials=a.withCredentials),d(t,e,u).then(r,r)},p=[h,n],$=c.when(s);for(o(x,function(t){(t.request||t.requestError)&&p.unshift(t.request,t.requestError),(t.response||t.responseError)&&p.push(t.response,t.responseError)});p.length;){var v=p.shift(),m=p.shift();$=$.then(v,m)}return $.success=function(t){return $.then(function(e){t(e.data,e.status,e.headers,s)}),$},$.error=function(t){return $.then(null,function(e){t(e.data,e.status,e.headers,s)}),$},$}function p(t){o(arguments,function(t){h[t]=function(e,n){return h(f(n||{},{method:t,url:e}))}})}function $(t){o(arguments,function(t){h[t]=function(e,n,r){return h(f(r||{},{method:t,url:e,data:n}))}})}function d(e,n,r){function o(t,e,n,r){l&&(Kt(t)?l.put(d,[t,e,Jt(n),r]):l.remove(d)),s(e,t,n,r),i.$$phase||i.$apply()}function s(t,n,r,i){n=Math.max(n,0),(Kt(n)?p.resolve:p.reject)({data:t,status:n,headers:Xt(r),config:e,statusText:i})}function u(){var t=j(h.pendingRequests,e);-1!==t&&h.pendingRequests.splice(t,1)}var l,f,p=c.defer(),$=p.promise,d=v(e.url,e.params);if(h.pendingRequests.push(e),$.then(u,u),(e.cache||a.cache)&&e.cache!==!1&&"GET"==e.method&&(l=y(e.cache)?e.cache:y(a.cache)?a.cache:b),l)if(f=l.get(d),m(f)){if(f.then)return f.then(u,u),f;S(f)?s(f[1],f[0],R(f[2]),f[3]):s(f,200,{},"OK")}else l.put(d,$);return g(f)&&t(e.method,d,n,o,r,e.timeout,e.withCredentials,e.responseType),$}function v(t,e){if(!e)return t;var n=[];return s(e,function(t,e){null===t||g(t)||(S(t)||(t=[t]),o(t,function(t){y(t)&&(t=B(t)),n.push(K(e)+"="+K(t))}))}),n.length>0&&(t+=(-1==t.indexOf("?")?"?":"&")+n.join("&")),t}var b=r("$http"),x=[];return o(u,function(t){x.unshift(w(t)?l.get(t):l.invoke(t))}),h.pendingRequests=[],p("get","delete","head","jsonp"),$("post","put"),h.defaults=a,h}]}function te(e){if(8>=En&&(!e.match(/^(get|post|head|put|delete|options)$/i)||!t.XMLHttpRequest))return new t.ActiveXObject("Microsoft.XMLHTTP");if(t.XMLHttpRequest)return new t.XMLHttpRequest;throw r("$httpBackend")("noxhr","This browser does not support XMLHttpRequest.")}function ee(){this.$get=["$browser","$window","$document",function(t,e,n){return ne(t,te,t.defer,e.angular.callbacks,n[0])}]}function ne(t,e,n,r,i){function a(t,e,n){var o=i.createElement("script"),a=null;return o.type="text/javascript",o.src=t,o.async=!0,a=function(t){zn(o,"load",a),zn(o,"error",a),i.body.removeChild(o),o=null;var s=-1,u="unknown";t&&("load"!==t.type||r[e].called||(t={type:"error"}),u=t.type,s="error"===t.type?404:200),n&&n(s,u)},Bn(o,"load",a),Bn(o,"error",a),i.body.appendChild(o),a}var s=-1;return function(i,u,c,l,f,h,p,d){function v(){y=s,b&&b(),x&&x.abort()}function g(e,r,i,o,a){C&&n.cancel(C),b=x=null,0===r&&(r=i?200:"file"==Ue(u).protocol?404:0),r=1223===r?204:r,a=a||"",e(r,i,o,a),t.$$completeOutstandingRequest($)}var y;if(t.$$incOutstandingRequestCount(),u=u||t.url(),"jsonp"==bn(i)){var w="_"+(r.counter++).toString(36);r[w]=function(t){r[w].data=t,r[w].called=!0};var b=a(u.replace("JSON_CALLBACK","angular.callbacks."+w),w,function(t,e){g(l,t,r[w].data,"",e),r[w]=$})}else{var x=e(i);if(x.open(i,u,!0),o(f,function(t,e){m(t)&&x.setRequestHeader(e,t)}),x.onreadystatechange=function(){if(x&&4==x.readyState){var t=null,e=null;y!==s&&(t=x.getAllResponseHeaders(),e="response"in x?x.response:x.responseText),g(l,y||x.status,e,t,x.statusText||"")}},p&&(x.withCredentials=!0),d)try{x.responseType=d}catch(S){if("json"!==d)throw S}x.send(c||null)}if(h>0)var C=n(v,h);else h&&h.then&&h.then(v)}}function re(){var t="{{",e="}}";this.startSymbol=function(e){return e?(t=e,this):t},this.endSymbol=function(t){return t?(e=t,this):e},this.$get=["$parse","$exceptionHandler","$sce",function(r,i,a){function s(t){return"\\\\\\"+t}function u(s,u,$,d){d=!!d;for(var v,m,y,w=0,b=[],x=[],S=[],C=s.length,k=!1,E=!1,A=[],M={values:{},results:{}};C>w;){if(-1==(v=s.indexOf(t,w))||-1==(m=s.indexOf(e,v+c))){w!==C&&(E=!0,b.push(s.substring(w)));break}w!==v&&(E=!0),b.push(s.substring(w,v)),y=s.substring(v+c,m),x.push(y),S.push(r(y)),w=m+l,k=!0}if(o(b,function(n,r){b[r]=b[r].replace(h,t).replace(p,e)}),b.length===x.length&&b.push(""),$&&k&&(E||x.length>1))throw hr("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",s);if(!u||k){A.length=b.length+x.length;var O=function(t){for(var e=0,n=x.length;n>e;e++)A[2*e]=b[e],A[2*e+1]=t[e];return A[2*n]=b[n],A.join("")},T=function(t){return t=$?a.getTrusted($,t):a.valueOf(t)},N=function(t){if(null==t)return"";switch(typeof t){case"string":break;case"number":t=""+t;break;default:t=B(t)}return t};return f(function D(t){var e,r=t&&t.$id||"notAScope",o=M.values[r],a=M.results[r],u=0,c=x.length,l=new Array(c),f=a===n;o||(o=[],f=!0,t&&t.$on&&t.$on("$destroy",function(){M.values[r]=null,M.results[r]=null}));try{for(D.$$unwatch=!0;c>u;u++){if(e=T(S[u](t)),d&&g(e))return void(D.$$unwatch=n);e=N(e),e!==o[u]&&(f=!0),l[u]=e,D.$$unwatch=D.$$unwatch&&S[u].$$unwatch}f&&(M.values[r]=l,M.results[r]=a=O(l))}catch(h){var p=hr("interr","Can't interpolate: {0}\n{1}",s,h.toString());i(p)}return a},{exp:s,separators:b,expressions:x})}}var c=t.length,l=e.length,h=new RegExp(t.replace(/./g,s),"g"),p=new RegExp(e.replace(/./g,s),"g");return u.startSymbol=function(){return t},u.endSymbol=function(){return e},u}]}function ie(){this.$get=["$rootScope","$window","$q",function(t,e,n){function r(r,o,a,s){var u=e.setInterval,c=e.clearInterval,l=n.defer(),f=l.promise,h=0,p=m(s)&&!s;return a=m(a)?a:0,f.then(null,null,r),f.$$intervalId=u(function(){l.notify(h++),a>0&&h>=a&&(l.resolve(h),c(f.$$intervalId),delete i[f.$$intervalId]),p||t.$apply()},o),i[f.$$intervalId]=l,f}var i={};return r.cancel=function(t){return t&&t.$$intervalId in i?(i[t.$$intervalId].reject("canceled"),clearInterval(t.$$intervalId),delete i[t.$$intervalId],!0):!1},r}]}function oe(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"¤",posSuf:"",negPre:"(¤",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(t){return 1===t?"one":"other"}}}}function ae(t){for(var e=t.split("/"),n=e.length;n--;)e[n]=Y(e[n]);return e.join("/")}function se(t,e,n){var r=Ue(t,n);e.$$protocol=r.protocol,e.$$host=r.hostname,e.$$port=h(r.port)||$r[r.protocol]||null}function ue(t,e,n){var r="/"!==t.charAt(0);r&&(t="/"+t);var i=Ue(t,n);e.$$path=decodeURIComponent(r&&"/"===i.pathname.charAt(0)?i.pathname.substring(1):i.pathname),e.$$search=J(i.search),e.$$hash=decodeURIComponent(i.hash),e.$$path&&"/"!=e.$$path.charAt(0)&&(e.$$path="/"+e.$$path)}function ce(t,e){return 0===e.indexOf(t)?e.substr(t.length):void 0}function le(t){var e=t.indexOf("#");return-1==e?t:t.substr(0,e)}function fe(t){return t.substr(0,le(t).lastIndexOf("/")+1)}function he(t){return t.substring(0,t.indexOf("/",t.indexOf("//")+2))}function pe(t,e){this.$$html5=!0,e=e||"";var r=fe(t);se(t,this,t),this.$$parse=function(e){var n=ce(r,e);if(!w(n))throw dr("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',e,r);ue(n,this,t),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var t=X(this.$$search),e=this.$$hash?"#"+Y(this.$$hash):"";this.$$url=ae(this.$$path)+(t?"?"+t:"")+e,this.$$absUrl=r+this.$$url.substr(1)},this.$$rewrite=function(i){var o,a;return(o=ce(t,i))!==n?(a=o,(o=ce(e,o))!==n?r+(ce("/",o)||o):t+a):(o=ce(r,i))!==n?r+o:r==i+"/"?r:void 0}}function $e(t,e){var n=fe(t);se(t,this,t),this.$$parse=function(r){function i(t,e,n){var r,i=/^\/[A-Z]:(\/.*)/;return 0===e.indexOf(n)&&(e=e.replace(n,"")),i.exec(e)?t:(r=i.exec(t),r?r[1]:t)}var o=ce(t,r)||ce(n,r),a="#"==o.charAt(0)?ce(e,o):this.$$html5?o:"";if(!w(a))throw dr("ihshprfx",'Invalid url "{0}", missing hash prefix "{1}".',r,e);ue(a,this,t),this.$$path=i(this.$$path,a,t),this.$$compose()},this.$$compose=function(){var n=X(this.$$search),r=this.$$hash?"#"+Y(this.$$hash):"";this.$$url=ae(this.$$path)+(n?"?"+n:"")+r,this.$$absUrl=t+(this.$$url?e+this.$$url:"")},this.$$rewrite=function(e){return le(t)==le(e)?e:void 0}}function de(t,e){this.$$html5=!0,$e.apply(this,arguments);var n=fe(t);this.$$rewrite=function(r){var i;return t==le(r)?r:(i=ce(n,r))?t+e+i:n===r+"/"?n:void 0},this.$$compose=function(){var n=X(this.$$search),r=this.$$hash?"#"+Y(this.$$hash):"";this.$$url=ae(this.$$path)+(n?"?"+n:"")+r,this.$$absUrl=t+e+this.$$url}}function ve(t){return function(){return this[t]}}function ge(t,e){return function(n){return g(n)?this[t]:(this[t]=e(n),this.$$compose(),this)}}function me(){var e="",n=!1;this.hashPrefix=function(t){return m(t)?(e=t,this):e},this.html5Mode=function(t){return m(t)?(n=t,this):n},this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(r,i,o,a){function s(t){r.$broadcast("$locationChangeSuccess",u.absUrl(),t)}var u,c,l,f=i.baseHref(),h=i.url();n?(l=he(h)+(f||"/"),c=o.history?pe:de):(l=le(h),c=$e),u=new c(l,"#"+e),u.$$parse(u.$$rewrite(h)),a.on("click",function(n){if(!n.ctrlKey&&!n.metaKey&&2!=n.which){for(var o=An(n.target);"a"!==bn(o[0].nodeName);)if(o[0]===a[0]||!(o=o.parent())[0])return;var s=o.prop("href");if(y(s)&&"[object SVGAnimatedString]"===s.toString()&&(s=Ue(s.animVal).href),c===de){var f=o.attr("href")||o.attr("xlink:href");if(f.indexOf("://")<0){var h="#"+e;if("/"==f[0])s=l+h+f;else if("#"==f[0])s=l+h+(u.path()||"/")+f;else{for(var p=u.path().split("/"),$=f.split("/"),d=0;d<$.length;d++)"."!=$[d]&&(".."==$[d]?p.pop():$[d].length&&p.push($[d]));s=l+h+p.join("/")}}}var v=u.$$rewrite(s);s&&!o.attr("target")&&v&&!n.isDefaultPrevented()&&(n.preventDefault(),v!=i.url()&&(u.$$parse(v),r.$apply(),t.angular["ff-684208-preventDefault"]=!0))}}),u.absUrl()!=h&&i.url(u.absUrl(),!0),i.onUrlChange(function(t){u.absUrl()!=t&&(r.$evalAsync(function(){var e=u.absUrl();u.$$parse(t),r.$broadcast("$locationChangeStart",t,e).defaultPrevented?(u.$$parse(e),i.url(e)):s(e)}),r.$$phase||r.$digest())});var p=0;return r.$watch(function(){var t=i.url(),e=u.$$replace;return p&&t==u.absUrl()||(p++,r.$evalAsync(function(){r.$broadcast("$locationChangeStart",u.absUrl(),t).defaultPrevented?u.$$parse(t):(i.url(u.absUrl(),e),s(t))})),u.$$replace=!1,p}),u}]}function ye(){var t=!0,e=this;this.debugEnabled=function(e){return m(e)?(t=e,this):t},this.$get=["$window",function(n){function r(t){return t instanceof Error&&(t.stack?t=t.message&&-1===t.stack.indexOf(t.message)?"Error: "+t.message+"\n"+t.stack:t.stack:t.sourceURL&&(t=t.message+"\n"+t.sourceURL+":"+t.line)),t}function i(t){var e=n.console||{},i=e[t]||e.log||$,a=!1;try{a=!!i.apply}catch(s){}return a?function(){var t=[];return o(arguments,function(e){t.push(r(e))}),i.apply(e,t)}:function(t,e){i(t,null==e?"":e)}}return{log:i("log"),info:i("info"),warn:i("warn"),error:i("error"),debug:function(){var n=i("debug");return function(){t&&n.apply(e,arguments)}}()}}]}function we(t,e){if("constructor"===t)throw vr("isecfld",'Referencing "constructor" field in Angular expressions is disallowed! Expression: {0}',e);return t}function be(t,e){if(t){if(t.constructor===t)throw vr("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e);if(t.document&&t.location&&t.alert&&t.setInterval)throw vr("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",e);if(t.children&&(t.nodeName||t.prop&&t.attr&&t.find))throw vr("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",e)}return t}function xe(t,e,n,r,i){i=i||{};for(var o,a=e.split("."),s=0;a.length>1;s++){o=we(a.shift(),r);var u=t[o];u||(u={},t[o]=u),t=u}return o=we(a.shift(),r),t[o]=n,n}function Se(t,e,r,i,o,a,s){return we(t,a),we(e,a),we(r,a),we(i,a),we(o,a),function(a,s){var u=s&&s.hasOwnProperty(t)?s:a;return null==u?u:(u=u[t],e?null==u?n:(u=u[e],r?null==u?n:(u=u[r],i?null==u?n:(u=u[i],o?null==u?n:u=u[o]:u):u):u):u)}}function Ce(t,e){return we(t,e),function(e,r){return null==e?n:(r&&r.hasOwnProperty(t)?r:e)[t]}}function ke(t,e,r){return we(t,r),we(e,r),function(r,i){return null==r?n:(r=(i&&i.hasOwnProperty(t)?i:r)[t],null==r?n:r[e])}}function Ee(t,e,r){if(br.hasOwnProperty(t))return br[t];var i,a=t.split("."),s=a.length;if(1===s)i=Ce(a[0],r);else if(2===s)i=ke(a[0],a[1],r);else if(e.csp)i=6>s?Se(a[0],a[1],a[2],a[3],a[4],r,e):function(t,i){var o,u=0;do o=Se(a[u++],a[u++],a[u++],a[u++],a[u++],r,e)(t,i),i=n,t=o;while(s>u);return o};else{var u="var p;\n";o(a,function(t,e){we(t,r),u+="if(s == null) return undefined;\ns="+(e?"s":'((k&&k.hasOwnProperty("'+t+'"))?k:s)')+'["'+t+'"];\n'}),u+="return s;";var c=new Function("s","k",u);c.toString=v(u),i=c}return"hasOwnProperty"!==t&&(br[t]=i),i}function Ae(){var t={},e={csp:!1};this.$get=["$filter","$sniffer","$log",function(n,r,i){return e.csp=r.csp,function(r){function i(t){function e(i,o){return r||(n=t(i,o),e.$$unwatch=m(n),e.$$unwatch&&i&&i.$$postDigestQueue&&i.$$postDigestQueue.push(function(){(r=m(n))&&!n.$$unwrapTrustedValue&&(n=R(n))})),n}var n,r=!1;return e.literal=t.literal,e.constant=t.constant,e.assign=t.assign,e}var o,a;switch(typeof r){case"string":if(":"===r.charAt(0)&&":"===r.charAt(1)&&(a=!0,r=r.substring(2)),t.hasOwnProperty(r))return a?i(t[r]):t[r];var s=new yr(e),u=new wr(s,n,e);return o=u.parse(r),"hasOwnProperty"!==r&&(t[r]=o),o.constant&&(o.$$unwatch=!0),a?i(o):o;case"function":return r;default:return $}}}]}function Me(){this.$get=["$rootScope","$exceptionHandler",function(t,e){return Oe(function(e){t.$evalAsync(e)},e)}]}function Oe(t,e){function r(t){return t}function i(t){return c(t)}function a(t){var e=s(),n=0,r=S(t)?[]:{};return o(t,function(t,i){n++,u(t).then(function(t){r.hasOwnProperty(i)||(r[i]=t,--n||e.resolve(r))},function(t){r.hasOwnProperty(i)||e.reject(t)})}),0===n&&e.resolve(r),e.promise}var s=function(){var o,a,c=[];return a={resolve:function(e){if(c){var r=c;c=n,o=u(e),r.length&&t(function(){for(var t,e=0,n=r.length;n>e;e++)t=r[e],o.then(t[0],t[1],t[2])})}},reject:function(t){a.resolve(l(t))},notify:function(e){if(c){var n=c;c.length&&t(function(){for(var t,r=0,i=n.length;i>r;r++)t=n[r],t[2](e)})}},promise:{then:function(t,n,a){var u=s(),l=function(n){try{u.resolve((C(t)?t:r)(n))}catch(i){u.reject(i),e(i)}},f=function(t){try{u.resolve((C(n)?n:i)(t))}catch(r){u.reject(r),e(r)}},h=function(t){try{u.notify((C(a)?a:r)(t))}catch(n){e(n)}};return c?c.push([l,f,h]):o.then(l,f,h),u.promise},"catch":function(t){return this.then(null,t)},"finally":function(t){function e(t,e){var n=s();return e?n.resolve(t):n.reject(t),n.promise}function n(n,i){var o=null;try{o=(t||r)()}catch(a){return e(a,!1)}return o&&C(o.then)?o.then(function(){return e(n,i)},function(t){return e(t,!1)}):e(n,i)}return this.then(function(t){return n(t,!0)},function(t){return n(t,!1)})}}}},u=function(e){return e&&C(e.then)?e:{then:function(n){var r=s();return t(function(){r.resolve(n(e))}),r.promise}}},c=function(t){var e=s();return e.reject(t),e.promise},l=function(n){return{then:function(r,o){var a=s();return t(function(){try{a.resolve((C(o)?o:i)(n))}catch(t){a.reject(t),e(t)}}),a.promise}}},f=function(n,o,a,l){var f,h=s(),p=function(t){try{return(C(o)?o:r)(t)}catch(n){return e(n),c(n)}},$=function(t){try{return(C(a)?a:i)(t)}catch(n){return e(n),c(n)}},d=function(t){try{return(C(l)?l:r)(t)}catch(n){e(n)}};return t(function(){u(n).then(function(t){f||(f=!0,h.resolve(u(t).then(p,$,d)))},function(t){f||(f=!0,h.resolve($(t)))},function(t){f||h.notify(d(t))})}),h.promise};return{defer:s,reject:c,when:f,all:a}}function Te(){this.$get=["$window","$timeout",function(t,e){var n=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame,r=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.webkitCancelRequestAnimationFrame,i=!!n,o=i?function(t){var e=n(t);return function(){r(e)}}:function(t){var n=e(t,16.66,!1);return function(){e.cancel(n)}};return o.supported=i,o}]}function Ne(){var t=10,e=r("$rootScope"),n=null;this.digestTtl=function(e){return arguments.length&&(t=e),t},this.$get=["$injector","$exceptionHandler","$parse","$browser",function(r,a,s,u){function l(){this.$id=c(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this["this"]=this.$root=this,this.$$destroyed=!1,this.$$asyncQueue=[],this.$$postDigestQueue=[],this.$$listeners={},this.$$listenerCount={},this.$$isolateBindings={}}function f(t){if(g.$$phase)throw e("inprog","{0} already in progress",g.$$phase);g.$$phase=t}function h(){g.$$phase=null}function p(t,e){var n=s(t);return ot(n,e),n}function d(t,e,n){do t.$$listenerCount[n]-=e,0===t.$$listenerCount[n]&&delete t.$$listenerCount[n];while(t=t.$parent)}function v(){}l.prototype={constructor:l,$new:function(t){var e;return t?(e=new l,e.$root=this.$root,e.$$asyncQueue=this.$$asyncQueue,e.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$id=c(),this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),e=new this.$$childScopeClass),e["this"]=e,e.$parent=this,e.$$prevSibling=this.$$childTail,this.$$childHead?(this.$$childTail.$$nextSibling=e,this.$$childTail=e):this.$$childHead=this.$$childTail=e,e},$watch:function(t,e,r){var i=this,o=p(t,"watch"),a=i.$$watchers,s={fn:e,last:v,get:o,exp:t,eq:!!r};if(n=null,!C(e)){var u=p(e||$,"listener");s.fn=function(t,e,n){u(n)}}return a||(a=i.$$watchers=[]),a.unshift(s),function(){P(a,s),n=null}},$watchGroup:function(t,e){function n(){return u}var r=new Array(t.length),i=new Array(t.length),a=[],u=0,c=this,l=new Array(t.length),f=t.length;return o(t,function(t,e){var n=s(t);a.push(c.$watch(n,function(t,o){i[e]=t,r[e]=o,u++,l[e]&&!n.$$unwatch&&f++,!l[e]&&n.$$unwatch&&f--,l[e]=n.$$unwatch}))},this),a.push(c.$watch(n,function(){e(i,r,c),0===f?n.$$unwatch=!0:n.$$unwatch=!1})),function(){o(a,function(t){t()})}},$watchCollection:function(t,e){function n(){o=h(c);var t,e;if(y(o))if(i(o)){a!==p&&(a=p,v=a.length=0,f++),t=o.length,v!==t&&(f++,a.length=v=t);for(var r=0;t>r;r++){var s=a[r]!==a[r]&&o[r]!==o[r];s||a[r]===o[r]||(f++,a[r]=o[r])}}else{a!==$&&(a=$={},v=0,f++),t=0;for(e in o)o.hasOwnProperty(e)&&(t++,a.hasOwnProperty(e)?a[e]!==o[e]&&(f++,a[e]=o[e]):(v++,a[e]=o[e],f++));if(v>t){f++;for(e in a)a.hasOwnProperty(e)&&!o.hasOwnProperty(e)&&(v--,delete a[e])}}else a!==o&&(a=o,f++);return n.$$unwatch=h.$$unwatch,f}function r(){if(d?(d=!1,e(o,o,c)):e(o,u,c),l)if(y(o))if(i(o)){u=new Array(o.length);for(var t=0;t<o.length;t++)u[t]=o[t]}else{u={};for(var n in o)xn.call(o,n)&&(u[n]=o[n])}else u=o}var o,a,u,c=this,l=e.length>1,f=0,h=s(t),p=[],$={},d=!0,v=0;return this.$watch(n,r)},$digest:function(){var r,i,o,s,u,c,l,p,$,d,g,m=this.$$asyncQueue,y=this.$$postDigestQueue,w=t,b=this,x=[],S=[];f("$digest"),n=null;do{for(c=!1,p=b;m.length;){try{g=m.shift(),g.scope.$eval(g.expression)}catch(k){h(),a(k)}n=null}t:do{if(s=p.$$watchers)for(u=s.length;u--;)try{if(r=s[u])if((i=r.get(p))===(o=r.last)||(r.eq?H(i,o):"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))){if(r===n){c=!1;break t}}else c=!0,n=r,r.last=r.eq?R(i):i,r.fn(i,o===v?i:o,p),5>w&&($=4-w,x[$]||(x[$]=[]),d=C(r.exp)?"fn: "+(r.exp.name||r.exp.toString()):r.exp,d+="; newVal: "+B(i)+"; oldVal: "+B(o),x[$].push(d)),r.get.$$unwatch&&S.push({watch:r,array:s})}catch(k){h(),a(k)}if(!(l=p.$$childHead||p!==b&&p.$$nextSibling))for(;p!==b&&!(l=p.$$nextSibling);)p=p.$parent}while(p=l);if((c||m.length)&&!w--)throw h(),e("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",t,B(x))}while(c||m.length);for(h();y.length;)try{y.shift()()}catch(k){a(k)}for(u=S.length-1;u>=0;--u){var E=S[u];E.watch.get.$$unwatch&&P(E.array,E.watch)}},$destroy:function(){if(!this.$$destroyed){var t=this.$parent;this.$broadcast("$destroy"),this.$$destroyed=!0,this!==g&&(o(this.$$listenerCount,_(null,d,this)),t.$$childHead==this&&(t.$$childHead=this.$$nextSibling),t.$$childTail==this&&(t.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=$,this.$on=this.$watch=this.$watchGroup=function(){return $})}},$eval:function(t,e){return s(t)(this,e)},$evalAsync:function(t){g.$$phase||g.$$asyncQueue.length||u.defer(function(){g.$$asyncQueue.length&&g.$digest()}),this.$$asyncQueue.push({scope:this,expression:t})},$$postDigest:function(t){this.$$postDigestQueue.push(t)},$apply:function(t){try{return f("$apply"),this.$eval(t)}catch(e){a(e)}finally{h();try{g.$digest()}catch(e){throw a(e),e}}},$on:function(t,e){var n=this.$$listeners[t];n||(this.$$listeners[t]=n=[]),n.push(e);var r=this;do r.$$listenerCount[t]||(r.$$listenerCount[t]=0),r.$$listenerCount[t]++;while(r=r.$parent);var i=this;return function(){n[j(n,e)]=null,d(i,1,t)}},$emit:function(t,e){var n,r,i,o=[],s=this,u=!1,c={name:t,targetScope:s,stopPropagation:function(){u=!0},preventDefault:function(){c.defaultPrevented=!0},defaultPrevented:!1},l=U([c],arguments,1);do{for(n=s.$$listeners[t]||o,c.currentScope=s,r=0,i=n.length;i>r;r++)if(n[r])try{n[r].apply(null,l)}catch(f){a(f)}else n.splice(r,1),r--,i--;if(u)return c.currentScope=null,c;s=s.$parent}while(s);return c.currentScope=null,c},$broadcast:function(t,e){for(var n,r,i,o=this,s=o,u=o,c={name:t,targetScope:o,preventDefault:function(){c.defaultPrevented=!0},defaultPrevented:!1},l=U([c],arguments,1);s=u;){for(c.currentScope=s,n=s.$$listeners[t]||[],r=0,i=n.length;i>r;r++)if(n[r])try{n[r].apply(null,l)}catch(f){a(f)}else n.splice(r,1),r--,i--;if(!(u=s.$$listenerCount[t]&&s.$$childHead||s!==o&&s.$$nextSibling))for(;s!==o&&!(u=s.$$nextSibling);)s=s.$parent}return c.currentScope=null,c}};var g=new l;return g}]}function De(){var t=/^\s*(https?|ftp|mailto|tel|file):/,e=/^\s*(https?|ftp|file|blob):|data:image\//;this.aHrefSanitizationWhitelist=function(e){return m(e)?(t=e,this):t},this.imgSrcSanitizationWhitelist=function(t){return m(t)?(e=t,this):e},this.$get=function(){return function(n,r){var i,o=r?e:t;return En&&!(En>=8)||(i=Ue(n).href,""===i||i.match(o))?n:"unsafe:"+i}}}function Ve(t){return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")}function je(t){if("self"===t)return t;if(w(t)){if(t.indexOf("***")>-1)throw xr("iwcard","Illegal sequence *** in string matcher.  String: {0}",t);return t=Ve(t).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+t+"$")}if(k(t))return new RegExp("^"+t.source+"$");throw xr("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function Pe(t){var e=[];return m(t)&&o(t,function(t){e.push(je(t))}),e}function Re(){this.SCE_CONTEXTS=Sr;var t=["self"],e=[];this.resourceUrlWhitelist=function(e){return arguments.length&&(t=Pe(e)),t},this.resourceUrlBlacklist=function(t){return arguments.length&&(e=Pe(t)),e},this.$get=["$injector",function(r){function i(t,e){return"self"===t?Fe(e):!!t.exec(e.href)}function o(n){var r,o,a=Ue(n.toString()),s=!1;for(r=0,o=t.length;o>r;r++)if(i(t[r],a)){s=!0;break}if(s)for(r=0,o=e.length;o>r;r++)if(i(e[r],a)){s=!1;break}return s}function a(t){var e=function(t){this.$$unwrapTrustedValue=function(){return t}};return t&&(e.prototype=new t),e.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},e.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},e}function s(t,e){var r=h.hasOwnProperty(t)?h[t]:null;if(!r)throw xr("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",t,e);if(null===e||e===n||""===e)return e;if("string"!=typeof e)throw xr("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",t);return new r(e)}function u(t){return t instanceof f?t.$$unwrapTrustedValue():t}function c(t,e){if(null===e||e===n||""===e)return e;var r=h.hasOwnProperty(t)?h[t]:null;if(r&&e instanceof r)return e.$$unwrapTrustedValue();if(t===Sr.RESOURCE_URL){if(o(e))return e;throw xr("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",e.toString())}if(t===Sr.HTML)return l(e);throw xr("unsafe","Attempting to use an unsafe value in a safe context.")}var l=function(t){throw xr("unsafe","Attempting to use an unsafe value in a safe context.")};r.has("$sanitize")&&(l=r.get("$sanitize"));var f=a(),h={};return h[Sr.HTML]=a(f),h[Sr.CSS]=a(f),h[Sr.URL]=a(f),h[Sr.JS]=a(f),h[Sr.RESOURCE_URL]=a(h[Sr.URL]),{trustAs:s,getTrusted:c,valueOf:u}}]}function qe(){var t=!0;this.enabled=function(e){return arguments.length&&(t=!!e),t},this.$get=["$parse","$sniffer","$sceDelegate",function(e,n,r){if(t&&n.msie&&n.msieDocumentMode<8)throw xr("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");var i=R(Sr);i.isEnabled=function(){return t},i.trustAs=r.trustAs,i.getTrusted=r.getTrusted,i.valueOf=r.valueOf,t||(i.trustAs=i.getTrusted=function(t,e){return e},i.valueOf=d),i.parseAs=function(t,n){var r=e(n);return r.literal&&r.constant?r:function o(e,n){var a=i.getTrusted(t,r(e,n));return o.$$unwatch=r.$$unwatch,a}};var a=i.parseAs,s=i.getTrusted,u=i.trustAs;return o(Sr,function(t,e){var n=bn(e);i[ht("parse_as_"+n)]=function(e){return a(t,e)},i[ht("get_trusted_"+n)]=function(e){return s(t,e)},i[ht("trust_as_"+n)]=function(e){return u(t,e)}}),i}]}function He(){this.$get=["$window","$document",function(t,e){var n,r,i={},o=h((/android (\d+)/.exec(bn((t.navigator||{}).userAgent))||[])[1]),a=/Boxee/i.test((t.navigator||{}).userAgent),s=e[0]||{},u=s.documentMode,c=/^(Moz|webkit|O|ms)(?=[A-Z])/,l=s.body&&s.body.style,f=!1,p=!1;if(l){for(var $ in l)if(r=c.exec($)){n=r[0],n=n.substr(0,1).toUpperCase()+n.substr(1);break}n||(n="WebkitOpacity"in l&&"webkit"),f=!!("transition"in l||n+"Transition"in l),p=!!("animation"in l||n+"Animation"in l),!o||f&&p||(f=w(s.body.style.webkitTransition),p=w(s.body.style.webkitAnimation))}return{history:!(!t.history||!t.history.pushState||4>o||a),hashchange:"onhashchange"in t&&(!u||u>7),hasEvent:function(t){if("input"==t&&9==En)return!1;if(g(i[t])){var e=s.createElement("div");i[t]="on"+t in e}return i[t]},csp:I(),vendorPrefix:n,transitions:f,animations:p,android:o,msie:En,msieDocumentMode:u}}]}function Ie(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(t,e,n,r){function i(i,a,s){var u,c=n.defer(),l=c.promise,f=m(s)&&!s;return u=e.defer(function(){try{c.resolve(i())}catch(e){c.reject(e),r(e)}finally{delete o[l.$$timeoutId]}f||t.$apply()},a),l.$$timeoutId=u,o[u]=c,l}var o={};return i.cancel=function(t){return t&&t.$$timeoutId in o?(o[t.$$timeoutId].reject("canceled"),delete o[t.$$timeoutId],e.defer.cancel(t.$$timeoutId)):!1},i}]}function Ue(t,e){var n=t;return En&&(Cr.setAttribute("href",n),n=Cr.href),Cr.setAttribute("href",n),{href:Cr.href,protocol:Cr.protocol?Cr.protocol.replace(/:$/,""):"",host:Cr.host,search:Cr.search?Cr.search.replace(/^\?/,""):"",hash:Cr.hash?Cr.hash.replace(/^#/,""):"",hostname:Cr.hostname,port:Cr.port,pathname:"/"===Cr.pathname.charAt(0)?Cr.pathname:"/"+Cr.pathname
}}function Fe(t){var e=w(t)?Ue(t):t;return e.protocol===kr.protocol&&e.host===kr.host}function _e(){this.$get=v(t)}function Le(t){function e(r,i){if(y(r)){var a={};return o(r,function(t,n){a[n]=e(n,t)}),a}return t.factory(r+n,i)}var n="Filter";this.register=e,this.$get=["$injector",function(t){return function(e){return t.get(e+n)}}],e("currency",ze),e("date",nn),e("filter",Be),e("json",rn),e("limitTo",on),e("lowercase",Tr),e("number",We),e("orderBy",an),e("uppercase",Nr)}function Be(){return function(t,e,n){if(!S(t))return t;var r=typeof n,i=[];i.check=function(t){for(var e=0;e<i.length;e++)if(!i[e](t))return!1;return!0},"function"!==r&&(n="boolean"===r&&n?function(t,e){return Pn.equals(t,e)}:function(t,e){if(t&&e&&"object"==typeof t&&"object"==typeof e){for(var r in t)if("$"!==r.charAt(0)&&xn.call(t,r)&&n(t[r],e[r]))return!0;return!1}return e=(""+e).toLowerCase(),(""+t).toLowerCase().indexOf(e)>-1});var o=function(t,e){if("string"==typeof e&&"!"===e.charAt(0))return!o(t,e.substr(1));switch(typeof t){case"boolean":case"number":case"string":return n(t,e);case"object":switch(typeof e){case"object":return n(t,e);default:for(var r in t)if("$"!==r.charAt(0)&&o(t[r],e))return!0}return!1;case"array":for(var i=0;i<t.length;i++)if(o(t[i],e))return!0;return!1;default:return!1}};switch(typeof e){case"boolean":case"number":case"string":e={$:e};case"object":for(var a in e)!function(t){"undefined"!=typeof e[t]&&i.push(function(n){return o("$"==t?n:n&&n[t],e[t])})}(a);break;case"function":i.push(e);break;default:return t}for(var s=[],u=0;u<t.length;u++){var c=t[u];i.check(c)&&s.push(c)}return s}}function ze(t){var e=t.NUMBER_FORMATS;return function(t,n){return g(n)&&(n=e.CURRENCY_SYM),Qe(t,e.PATTERNS[1],e.GROUP_SEP,e.DECIMAL_SEP,2).replace(/\u00A4/g,n)}}function We(t){var e=t.NUMBER_FORMATS;return function(t,n){return Qe(t,e.PATTERNS[0],e.GROUP_SEP,e.DECIMAL_SEP,n)}}function Qe(t,e,n,r,i){if(null==t||!isFinite(t)||y(t))return"";var o=0>t;t=Math.abs(t);var a=t+"",s="",u=[],c=!1;if(-1!==a.indexOf("e")){var l=a.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>i+1?a="0":(s=a,c=!0)}if(c)i>0&&t>-1&&1>t&&(s=t.toFixed(i));else{var f=(a.split(Er)[1]||"").length;g(i)&&(i=Math.min(Math.max(e.minFrac,f),e.maxFrac));var h=Math.pow(10,i+1);t=Math.floor(t*h+5)/h;var p=(""+t).split(Er),$=p[0];p=p[1]||"";var d,v=0,m=e.lgSize,w=e.gSize;if($.length>=m+w)for(v=$.length-m,d=0;v>d;d++)(v-d)%w===0&&0!==d&&(s+=n),s+=$.charAt(d);for(d=v;d<$.length;d++)($.length-d)%m===0&&0!==d&&(s+=n),s+=$.charAt(d);for(;p.length<i;)p+="0";i&&"0"!==i&&(s+=r+p.substr(0,i))}return u.push(o?e.negPre:e.posPre),u.push(s),u.push(o?e.negSuf:e.posSuf),u.join("")}function Ge(t,e,n){var r="";for(0>t&&(r="-",t=-t),t=""+t;t.length<e;)t="0"+t;return n&&(t=t.substr(t.length-e)),r+t}function Je(t,e,n,r){return n=n||0,function(i){var o=i["get"+t]();return(n>0||o>-n)&&(o+=n),0===o&&-12==n&&(o=12),Ge(o,e,r)}}function Xe(t,e){return function(n,r){var i=n["get"+t](),o=Sn(e?"SHORT"+t:t);return r[o][i]}}function Ye(t){var e=-1*t.getTimezoneOffset(),n=e>=0?"+":"";return n+=Ge(Math[e>0?"floor":"ceil"](e/60),2)+Ge(Math.abs(e%60),2)}function Ke(t){var e=new Date(t,0,1).getDay();return new Date(t,0,(4>=e?5:12)-e)}function Ze(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate()+(4-t.getDay()))}function tn(t){return function(e){var n=Ke(e.getFullYear()),r=Ze(e),i=+r-+n,o=1+Math.round(i/6048e5);return Ge(o,t)}}function en(t,e){return t.getHours()<12?e.AMPMS[0]:e.AMPMS[1]}function nn(t){function e(t){var e;if(e=t.match(n)){var r=new Date(0),i=0,o=0,a=e[8]?r.setUTCFullYear:r.setFullYear,s=e[8]?r.setUTCHours:r.setHours;e[9]&&(i=h(e[9]+e[10]),o=h(e[9]+e[11])),a.call(r,h(e[1]),h(e[2])-1,h(e[3]));var u=h(e[4]||0)-i,c=h(e[5]||0)-o,l=h(e[6]||0),f=Math.round(1e3*parseFloat("0."+(e[7]||0)));return s.call(r,u,c,l,f),r}return t}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(n,r){var i,a,s="",u=[];if(r=r||"mediumDate",r=t.DATETIME_FORMATS[r]||r,w(n)&&(n=Or.test(n)?h(n):e(n)),b(n)&&(n=new Date(n)),!x(n))return n;for(;r;)a=Mr.exec(r),a?(u=U(u,a,1),r=u.pop()):(u.push(r),r=null);return o(u,function(e){i=Ar[e],s+=i?i(n,t.DATETIME_FORMATS):e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),s}}function rn(){return function(t){return B(t,!0)}}function on(){return function(t,e){if(!S(t)&&!w(t))return t;if(e=Math.abs(Number(e))===1/0?Number(e):h(e),w(t))return e?e>=0?t.slice(0,e):t.slice(e,t.length):"";var n,r,i=[];for(e>t.length?e=t.length:e<-t.length&&(e=-t.length),e>0?(n=0,r=e):(n=t.length+e,r=t.length);r>n;n++)i.push(t[n]);return i}}function an(t){return function(e,n,r){function i(t,e){for(var r=0;r<n.length;r++){var i=n[r](t,e);if(0!==i)return i}return 0}function o(t,e){return W(e)?function(e,n){return t(n,e)}:t}function a(t,e){var n=typeof t,r=typeof e;return n==r?("string"==n&&(t=t.toLowerCase(),e=e.toLowerCase()),t===e?0:e>t?-1:1):r>n?-1:1}if(!S(e))return e;if(!n)return e;n=S(n)?n:[n],n=D(n,function(e){var n=!1,r=e||d;if(w(e)&&("+"!=e.charAt(0)&&"-"!=e.charAt(0)||(n="-"==e.charAt(0),e=e.substring(1)),r=t(e),r.constant)){var i=r();return o(function(t,e){return a(t[i],e[i])},n)}return o(function(t,e){return a(r(t),r(e))},n)});for(var s=[],u=0;u<e.length;u++)s.push(e[u]);return s.sort(o(i,r))}}function sn(t){return C(t)&&(t={link:t}),t.restrict=t.restrict||"AC",v(t)}function un(t,e,n,r){function i(e,n){n=n?"-"+nt(n,"-"):"",r.removeClass(t,(e?Xr:Jr)+n),r.addClass(t,(e?Jr:Xr)+n)}var a=this,s=t.parent().controller("form")||jr,u=0,c=a.$error={},l=[];a.$name=e.name||e.ngForm,a.$dirty=!1,a.$pristine=!0,a.$valid=!0,a.$invalid=!1,s.$addControl(a),t.addClass(Yr),i(!0),a.$commitViewValue=function(){o(l,function(t){t.$commitViewValue()})},a.$addControl=function(t){at(t.$name,"input"),l.push(t),t.$name&&(a[t.$name]=t)},a.$removeControl=function(t){t.$name&&a[t.$name]===t&&delete a[t.$name],o(c,function(e,n){a.$setValidity(n,!0,t)}),P(l,t)},a.$setValidity=function(t,e,n){var r=c[t];if(e)r&&(P(r,n),r.length||(u--,u||(i(e),a.$valid=!0,a.$invalid=!1),c[t]=!1,i(!0,t),s.$setValidity(t,!0,a)));else{if(u||i(e),r){if(V(r,n))return}else c[t]=r=[],u++,i(!1,t),s.$setValidity(t,!1,a);r.push(n),a.$valid=!1,a.$invalid=!0}},a.$setDirty=function(){r.removeClass(t,Yr),r.addClass(t,Kr),a.$dirty=!0,a.$pristine=!1,s.$setDirty()},a.$setPristine=function(){r.removeClass(t,Kr),r.addClass(t,Yr),a.$dirty=!1,a.$pristine=!0,o(l,function(t){t.$setPristine()})}}function cn(t,e,r,i){return t.$setValidity(e,r),r?i:n}function ln(t,e,n){var r=n.prop("validity");if(y(r)){var i=function(n){return t.$error[e]||!(r.badInput||r.customError||r.typeMismatch)||r.valueMissing?n:void t.$setValidity(e,!1)};t.$parsers.push(i)}}function fn(t,e,n,i,o,a){var s=e.prop("validity"),u=e[0].placeholder,c={};if(!o.android){var l=!1;e.on("compositionstart",function(t){l=!0}),e.on("compositionend",function(){l=!1,f()})}var f=function(r){if(!l){var o=e.val(),a=r&&r.type;if(En&&"input"===(r||c).type&&e[0].placeholder!==u)return void(u=e[0].placeholder);W(n.ngTrim||"T")&&(o=qn(o)),(i.$viewValue!==o||s&&""===o&&!s.valueMissing)&&(t.$$phase?i.$setViewValue(o,a):t.$apply(function(){i.$setViewValue(o,a)}))}};if(o.hasEvent("input"))e.on("input",f);else{var p,$=function(t){p||(p=a.defer(function(){f(t),p=null}))};e.on("keydown",function(t){var e=t.keyCode;91===e||e>15&&19>e||e>=37&&40>=e||$(t)}),o.hasEvent("paste")&&e.on("paste cut",$)}e.on("change",f),i.$render=function(){e.val(i.$isEmpty(i.$viewValue)?"":i.$viewValue)};var d,v,g=n.ngPattern;if(g){var m=function(t,e){return cn(i,"pattern",i.$isEmpty(e)||t.test(e),e)};v=g.match(/^\/(.*)\/([gim]*)$/),v?(g=new RegExp(v[1],v[2]),d=function(t){return m(g,t)}):d=function(n){var i=t.$eval(g);if(!i||!i.test)throw r("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",g,i,Q(e));return m(i,n)},i.$formatters.push(d),i.$parsers.push(d)}if(n.ngMinlength){var y=h(n.ngMinlength),w=function(t){return cn(i,"minlength",i.$isEmpty(t)||t.length>=y,t)};i.$parsers.push(w),i.$formatters.push(w)}if(n.ngMaxlength){var b=h(n.ngMaxlength),x=function(t){return cn(i,"maxlength",i.$isEmpty(t)||t.length<=b,t)};i.$parsers.push(x),i.$formatters.push(x)}}function hn(t){if(x(t))return t;if(w(t)){Lr.lastIndex=0;var e=Lr.exec(t);if(e){var n=+e[1],r=+e[2],i=Ke(n),o=7*(r-1);return new Date(n,0,i.getDate()+o)}}return NaN}function pn(t,e){return function(n){var r,i;return x(n)?n:w(n)&&(t.lastIndex=0,r=t.exec(n))?(r.shift(),i={yyyy:0,MM:1,dd:1,HH:0,mm:0},o(r,function(t,n){n<e.length&&(i[e[n]]=+t)}),new Date(i.yyyy,i.MM-1,i.dd,i.HH,i.mm)):NaN}}function $n(t,e,r,i){return function(o,a,s,u,c,l,f){if(fn(o,a,s,u,c,l),u.$parsers.push(function(i){return u.$isEmpty(i)?(u.$setValidity(t,!0),null):e.test(i)?(u.$setValidity(t,!0),r(i)):(u.$setValidity(t,!1),n)}),u.$formatters.push(function(t){return x(t)?f("date")(t,i):""}),s.min){var h=function(t){var e=u.$isEmpty(t)||r(t)>=r(s.min);return u.$setValidity("min",e),e?t:n};u.$parsers.push(h),u.$formatters.push(h)}if(s.max){var p=function(t){var e=u.$isEmpty(t)||r(t)<=r(s.max);return u.$setValidity("max",e),e?t:n};u.$parsers.push(p),u.$formatters.push(p)}}}function dn(t,e,r,i,o,a){if(fn(t,e,r,i,o,a),i.$parsers.push(function(t){var e=i.$isEmpty(t);return e||Ur.test(t)?(i.$setValidity("number",!0),""===t?null:e?t:parseFloat(t)):(i.$setValidity("number",!1),n)}),ln(i,"number",e),i.$formatters.push(function(t){return i.$isEmpty(t)?"":""+t}),r.min){var s=function(t){var e=parseFloat(r.min);return cn(i,"min",i.$isEmpty(t)||t>=e,t)};i.$parsers.push(s),i.$formatters.push(s)}if(r.max){var u=function(t){var e=parseFloat(r.max);return cn(i,"max",i.$isEmpty(t)||e>=t,t)};i.$parsers.push(u),i.$formatters.push(u)}i.$formatters.push(function(t){return cn(i,"number",i.$isEmpty(t)||b(t),t)})}function vn(t,e,n,r,i,o){fn(t,e,n,r,i,o);var a=function(t){return cn(r,"url",r.$isEmpty(t)||Hr.test(t),t)};r.$formatters.push(a),r.$parsers.push(a)}function gn(t,e,n,r,i,o){fn(t,e,n,r,i,o);var a=function(t){return cn(r,"email",r.$isEmpty(t)||Ir.test(t),t)};r.$formatters.push(a),r.$parsers.push(a)}function mn(t,e,n,r){g(n.name)&&e.attr("name",c());var i=function(i){e[0].checked&&t.$apply(function(){r.$setViewValue(n.value,i&&i.type)})};e.on("click",i),r.$render=function(){var t=n.value;e[0].checked=t==r.$viewValue},n.$observe("value",r.$render)}function yn(t,e,n,r){var i=n.ngTrueValue,o=n.ngFalseValue;w(i)||(i=!0),w(o)||(o=!1);var a=function(n){t.$apply(function(){r.$setViewValue(e[0].checked,n&&n.type)})};e.on("click",a),r.$render=function(){e[0].checked=r.$viewValue},r.$isEmpty=function(t){return t!==i},r.$formatters.push(function(t){return t===i}),r.$parsers.push(function(t){return t?i:o})}function wn(t,e){return t="ngClass"+t,["$animate",function(n){function r(t,e){var n=[];t:for(var r=0;r<t.length;r++){for(var i=t[r],o=0;o<e.length;o++)if(i==e[o])continue t;n.push(i)}return n}function i(t){if(S(t))return t;if(w(t))return t.split(" ");if(y(t)){var e=[];return o(t,function(t,n){t&&e.push(n)}),e}return t}return{restrict:"AC",link:function(a,s,u){function c(t){var e=f(t,1);u.$addClass(e)}function l(t){var e=f(t,-1);u.$removeClass(e)}function f(t,e){var n=s.data("$classCounts")||{},r=[];return o(t,function(t){(e>0||n[t])&&(n[t]=(n[t]||0)+e,n[t]===+(e>0)&&r.push(t))}),s.data("$classCounts",n),r.join(" ")}function h(t,e){var i=r(e,t),o=r(t,e);o=f(o,-1),i=f(i,1),0===i.length?n.removeClass(s,o):0===o.length?n.addClass(s,i):n.setClass(s,i,o)}function p(t){if(e===!0||a.$index%2===e){var n=i(t||[]);if($){if(!H(t,$)){var r=i($);h(r,n)}}else c(n)}$=R(t)}var $;a.$watch(u[t],p,!0),u.$observe("class",function(e){p(a.$eval(u[t]))}),"ngClass"!==t&&a.$watch("$index",function(n,r){var o=1&n;if(o!==(1&r)){var s=i(a.$eval(u[t]));o===e?c(s):l(s)}})}}}]}var bn=function(t){return w(t)?t.toLowerCase():t},xn=Object.prototype.hasOwnProperty,Sn=function(t){return w(t)?t.toUpperCase():t},Cn=function(t){return w(t)?t.replace(/[A-Z]/g,function(t){return String.fromCharCode(32|t.charCodeAt(0))}):t},kn=function(t){return w(t)?t.replace(/[a-z]/g,function(t){return String.fromCharCode(-33&t.charCodeAt(0))}):t};"i"!=="I".toLowerCase()&&(bn=Cn,Sn=kn);var En,An,Mn,On,Tn,Nn=[].slice,Dn=[].push,Vn=Object.prototype.toString,jn=r("ng"),Pn=t.angular||(t.angular={}),Rn=["0","0","0"];En=h((/msie (\d+)/.exec(bn(navigator.userAgent))||[])[1]),isNaN(En)&&(En=h((/trident\/.*; rv:(\d+)/.exec(bn(navigator.userAgent))||[])[1])),$.$inject=[],d.$inject=[];var qn=function(){return String.prototype.trim?function(t){return w(t)?t.trim():t}:function(t){return w(t)?t.replace(/^\s\s*/,"").replace(/\s\s*$/,""):t}}();Tn=9>En?function(t){return t=t.nodeName?t:t[0],t.scopeName&&"HTML"!=t.scopeName?Sn(t.scopeName+":"+t.nodeName):t.nodeName}:function(t){return t.nodeName?t.nodeName:t[0].nodeName};var Hn=["ng-","data-ng-","ng:","x-ng-"],In=/[A-Z]/g,Un={full:"1.3.0-beta.10",major:1,minor:3,dot:0,codeName:"excessive-clarification"},Fn=vt.cache={},_n=vt.expando="ng-"+(new Date).getTime(),Ln=1,Bn=t.document.addEventListener?function(t,e,n){t.addEventListener(e,n,!1)}:function(t,e,n){t.attachEvent("on"+e,n)},zn=t.document.removeEventListener?function(t,e,n){t.removeEventListener(e,n,!1)}:function(t,e,n){t.detachEvent("on"+e,n)},Wn=(vt._data=function(t){return this.cache[t[this.expando]]||{}},/([\:\-\_]+(.))/g),Qn=/^moz([A-Z])/,Gn=r("jqLite"),Jn=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Xn=/<|&#?\w+;/,Yn=/<([\w:]+)/,Kn=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Zn={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Zn.optgroup=Zn.option,Zn.tbody=Zn.tfoot=Zn.colgroup=Zn.caption=Zn.thead,Zn.th=Zn.td;var tr=vt.prototype={ready:function(n){function r(){i||(i=!0,n())}var i=!1;"complete"===e.readyState?setTimeout(r):(this.on("DOMContentLoaded",r),vt(t).on("load",r))},toString:function(){var t=[];return o(this,function(e){t.push(""+e)}),"["+t.join(", ")+"]"},eq:function(t){return An(t>=0?this[t]:this[this.length+t])},length:0,push:Dn,sort:[].sort,splice:[].splice},er={};o("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(t){er[bn(t)]=t});var nr={};o("input,select,option,textarea,button,form,details".split(","),function(t){nr[Sn(t)]=!0}),o({data:xt,inheritedData:Mt,scope:function(t){return An(t).data("$scope")||Mt(t.parentNode||t,["$isolateScope","$scope"])},isolateScope:function(t){return An(t).data("$isolateScope")||An(t).data("$isolateScopeNoTemplate")},controller:At,injector:function(t){return Mt(t,"$injector")},removeAttr:function(t,e){t.removeAttribute(e)},hasClass:St,css:function(t,e,r){if(e=ht(e),!m(r)){var i;return 8>=En&&(i=t.currentStyle&&t.currentStyle[e],""===i&&(i="auto")),i=i||t.style[e],8>=En&&(i=""===i?n:i),i}t.style[e]=r},attr:function(t,e,r){var i=bn(e);if(er[i]){if(!m(r))return t[e]||(t.attributes.getNamedItem(e)||$).specified?i:n;r?(t[e]=!0,t.setAttribute(e,i)):(t[e]=!1,t.removeAttribute(i))}else if(m(r))t.setAttribute(e,r);else if(t.getAttribute){var o=t.getAttribute(e,2);return null===o?n:o}},prop:function(t,e,n){return m(n)?void(t[e]=n):t[e]},text:function(){function t(t,n){var r=e[t.nodeType];return g(n)?r?t[r]:"":void(t[r]=n)}var e=[];return 9>En?(e[1]="innerText",e[3]="nodeValue"):e[1]=e[3]="textContent",t.$dv="",t}(),val:function(t,e){if(g(e)){if("SELECT"===Tn(t)&&t.multiple){var n=[];return o(t.options,function(t){t.selected&&n.push(t.value||t.text)}),0===n.length?null:n}return t.value}t.value=e},html:function(t,e){if(g(e))return t.innerHTML;for(var n=0,r=t.childNodes;n<r.length;n++)mt(r[n]);t.innerHTML=e},empty:Ot},function(t,e){vt.prototype[e]=function(e,r){var i,o;if(t!==Ot&&(2==t.length&&t!==St&&t!==At?e:r)===n){if(y(e)){for(i=0;i<this.length;i++)if(t===xt)t(this[i],e);else for(o in e)t(this[i],o,e[o]);return this}for(var a=t.$dv,s=a===n?Math.min(this.length,1):this.length,u=0;s>u;u++){var c=t(this[u],e,r);a=a?a+c:c}return a}for(i=0;i<this.length;i++)t(this[i],e,r);return this}}),o({removeData:wt,dealoc:mt,on:function Ri(t,n,r,i){if(m(i))throw Gn("onargs","jqLite#on() does not support the `selector` or `eventData` parameters");var a=bt(t,"events"),s=bt(t,"handle");a||bt(t,"events",a={}),s||bt(t,"handle",s=Nt(t,a)),o(n.split(" "),function(n){var i=a[n];if(!i){if("mouseenter"==n||"mouseleave"==n){var o=e.body.contains||e.body.compareDocumentPosition?function(t,e){var n=9===t.nodeType?t.documentElement:t,r=e&&e.parentNode;return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1};a[n]=[];var u={mouseleave:"mouseout",mouseenter:"mouseover"};Ri(t,u[n],function(t){var e=this,r=t.relatedTarget;r&&(r===e||o(e,r))||s(t,n)})}else Bn(t,n,s),a[n]=[];i=a[n]}i.push(r)})},off:yt,one:function(t,e,n){t=An(t),t.on(e,function r(){t.off(e,n),t.off(e,r)}),t.on(e,n)},replaceWith:function(t,e){var n,r=t.parentNode;mt(t),o(new vt(e),function(e){n?r.insertBefore(e,n.nextSibling):r.replaceChild(e,t),n=e})},children:function(t){var e=[];return o(t.childNodes,function(t){1===t.nodeType&&e.push(t)}),e},contents:function(t){return t.contentDocument||t.childNodes||[]},append:function(t,e){o(new vt(e),function(e){1!==t.nodeType&&11!==t.nodeType||t.appendChild(e)})},prepend:function(t,e){if(1===t.nodeType){var n=t.firstChild;o(new vt(e),function(e){t.insertBefore(e,n)})}},wrap:function(t,e){e=An(e)[0];var n=t.parentNode;n&&n.replaceChild(e,t),e.appendChild(t)},remove:function(t){mt(t);var e=t.parentNode;e&&e.removeChild(t)},after:function(t,e){var n=t,r=t.parentNode;o(new vt(e),function(t){r.insertBefore(t,n.nextSibling),n=t})},addClass:kt,removeClass:Ct,toggleClass:function(t,e,n){e&&o(e.split(" "),function(e){var r=n;g(r)&&(r=!St(t,e)),(r?kt:Ct)(t,e)})},parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},next:function(t){if(t.nextElementSibling)return t.nextElementSibling;for(var e=t.nextSibling;null!=e&&1!==e.nodeType;)e=e.nextSibling;return e},find:function(t,e){return t.getElementsByTagName?t.getElementsByTagName(e):[]},clone:gt,triggerHandler:function(t,e,n){var r=(bt(t,"events")||{})[e];n=n||[];var i=[{preventDefault:$,stopPropagation:$}];o(r,function(e){e.apply(t,i.concat(n))})}},function(t,e){vt.prototype[e]=function(e,n,r){for(var i,o=0;o<this.length;o++)g(i)?(i=t(this[o],e,n,r),m(i)&&(i=An(i))):Et(i,t(this[o],e,n,r));return m(i)?i:this},vt.prototype.bind=vt.prototype.on,vt.prototype.unbind=vt.prototype.off}),Vt.prototype={put:function(t,e){this[Dt(t)]=e},get:function(t){return this[Dt(t)]},remove:function(t){var e=this[t=Dt(t)];return delete this[t],e}};var rr=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,ir=/,/,or=/^\s*(_?)(\S+?)\1\s*$/,ar=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,sr=r("$injector");Rt.$$annotate=Pt;var ur=r("$animate"),cr=["$provide",function(t){this.$$selectors={},this.register=function(e,n){var r=e+"-animation";if(e&&"."!=e.charAt(0))throw ur("notcsel","Expecting class selector starting with '.' got '{0}'.",e);this.$$selectors[e.substr(1)]=r,t.factory(r,n)},this.classNameFilter=function(t){return 1===arguments.length&&(this.$$classNameFilter=t instanceof RegExp?t:null),this.$$classNameFilter},this.$get=["$timeout","$$asyncCallback",function(t,e){function n(t){t&&e(t)}return{enter:function(t,e,r,i){r?r.after(t):e.prepend(t),n(i)},leave:function(t,e){t.remove(),n(e)},move:function(t,e,n,r){this.enter(t,e,n,r)},addClass:function(t,e,r){e=w(e)?e:S(e)?e.join(" "):"",o(t,function(t){kt(t,e)}),n(r)},removeClass:function(t,e,r){e=w(e)?e:S(e)?e.join(" "):"",o(t,function(t){Ct(t,e)}),n(r)},setClass:function(t,e,r,i){o(t,function(t){kt(t,e),Ct(t,r)}),n(i)},enabled:$}}]}],lr=r("$compile");Lt.$inject=["$provide","$$sanitizeUriProvider"];var fr=/^(x[\:\-_]|data[\:\-_])/i,hr=r("$interpolate"),pr=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,$r={http:80,https:443,ftp:21},dr=r("$location");de.prototype=$e.prototype=pe.prototype={$$html5:!1,$$replace:!1,absUrl:ve("$$absUrl"),url:function(t,e){if(g(t))return this.$$url;var n=pr.exec(t);return n[1]&&this.path(decodeURIComponent(n[1])),(n[2]||n[1])&&this.search(n[3]||""),this.hash(n[5]||"",e),this},protocol:ve("$$protocol"),host:ve("$$host"),port:ve("$$port"),path:ge("$$path",function(t){return"/"==t.charAt(0)?t:"/"+t}),search:function(t,e){switch(arguments.length){case 0:return this.$$search;case 1:if(w(t))this.$$search=J(t);else{if(!y(t))throw dr("isrcharg","The first argument of the `$location#search()` call must be a string or an object.");this.$$search=t}break;default:g(e)||null===e?delete this.$$search[t]:this.$$search[t]=e}return this.$$compose(),this},hash:ge("$$hash",d),replace:function(){return this.$$replace=!0,this}};var vr=r("$parse"),gr={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:$,"+":function(t,e,r,i){return r=r(t,e),i=i(t,e),m(r)?m(i)?r+i:r:m(i)?i:n},"-":function(t,e,n,r){return n=n(t,e),r=r(t,e),(m(n)?n:0)-(m(r)?r:0)},"*":function(t,e,n,r){return n(t,e)*r(t,e)},"/":function(t,e,n,r){return n(t,e)/r(t,e)},"%":function(t,e,n,r){return n(t,e)%r(t,e)},"^":function(t,e,n,r){return n(t,e)^r(t,e)},"=":$,"===":function(t,e,n,r){return n(t,e)===r(t,e)},"!==":function(t,e,n,r){return n(t,e)!==r(t,e)},"==":function(t,e,n,r){return n(t,e)==r(t,e)},"!=":function(t,e,n,r){return n(t,e)!=r(t,e)},"<":function(t,e,n,r){return n(t,e)<r(t,e)},">":function(t,e,n,r){return n(t,e)>r(t,e)},"<=":function(t,e,n,r){return n(t,e)<=r(t,e)},">=":function(t,e,n,r){return n(t,e)>=r(t,e)},"&&":function(t,e,n,r){return n(t,e)&&r(t,e)},"||":function(t,e,n,r){return n(t,e)||r(t,e)},"&":function(t,e,n,r){return n(t,e)&r(t,e)},"|":function(t,e,n,r){return r(t,e)(t,e,n(t,e))},"!":function(t,e,n){return!n(t,e)}},mr={n:"\n",f:"\f",r:"\r",t:"	",v:"\x0B","'":"'",'"':'"'},yr=function(t){this.options=t};yr.prototype={constructor:yr,lex:function(t){for(this.text=t,this.index=0,this.ch=n,this.lastCh=":",this.tokens=[];this.index<this.text.length;){if(this.ch=this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else{if(this.isWhitespace(this.ch)){this.index++;continue}var e=this.ch+this.peek(),r=e+this.peek(2),i=gr[this.ch],o=gr[e],a=gr[r];a?(this.tokens.push({index:this.index,text:r,fn:a}),this.index+=3):o?(this.tokens.push({index:this.index,text:e,fn:o}),this.index+=2):i?(this.tokens.push({index:this.index,text:this.ch,fn:i}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(t){return-1!==t.indexOf(this.ch)},was:function(t){return-1!==t.indexOf(this.lastCh)},peek:function(t){var e=t||1;return this.index+e<this.text.length?this.text.charAt(this.index+e):!1},isNumber:function(t){return t>="0"&&"9">=t},isWhitespace:function(t){return" "===t||"\r"===t||"	"===t||"\n"===t||"\x0B"===t||" "===t},isIdent:function(t){return t>="a"&&"z">=t||t>="A"&&"Z">=t||"_"===t||"$"===t},isExpOperator:function(t){return"-"===t||"+"===t||this.isNumber(t)},throwError:function(t,e,n){n=n||this.index;var r=m(e)?"s "+e+"-"+this.index+" ["+this.text.substring(e,n)+"]":" "+n;throw vr("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",t,r,this.text)},readNumber:function(){for(var t="",e=this.index;this.index<this.text.length;){var n=bn(this.text.charAt(this.index));if("."==n||this.isNumber(n))t+=n;else{var r=this.peek();if("e"==n&&this.isExpOperator(r))t+=n;else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&"e"==t.charAt(t.length-1))t+=n;else{if(!this.isExpOperator(n)||r&&this.isNumber(r)||"e"!=t.charAt(t.length-1))break;this.throwError("Invalid exponent")}}this.index++}t=1*t,this.tokens.push({index:e,text:t,literal:!0,constant:!0,fn:function(){return t}})},readIdent:function(){for(var t,e,n,r,i=this,o="",a=this.index;this.index<this.text.length&&(r=this.text.charAt(this.index),"."===r||this.isIdent(r)||this.isNumber(r));)"."===r&&(t=this.index),o+=r,this.index++;if(t)for(e=this.index;e<this.text.length;){if(r=this.text.charAt(e),"("===r){n=o.substr(t-a+1),o=o.substr(0,t-a),this.index=e;break}if(!this.isWhitespace(r))break;e++}var s={index:a,text:o};if(gr.hasOwnProperty(o))s.fn=gr[o],s.literal=!0,s.constant=!0;else{var u=Ee(o,this.options,this.text);s.fn=f(function(t,e){return u(t,e)},{assign:function(t,e){return xe(t,o,e,i.text,i.options)}})}this.tokens.push(s),n&&(this.tokens.push({index:t,text:"."}),this.tokens.push({index:t+1,text:n}))},readString:function(t){var e=this.index;this.index++;for(var n="",r=t,i=!1;this.index<this.text.length;){var o=this.text.charAt(this.index);if(r+=o,i){if("u"===o){var a=this.text.substring(this.index+1,this.index+5);a.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+a+"]"),this.index+=4,n+=String.fromCharCode(parseInt(a,16))}else{var s=mr[o];n+=s?s:o}i=!1}else if("\\"===o)i=!0;else{if(o===t)return this.index++,void this.tokens.push({index:e,text:r,string:n,literal:!0,constant:!0,fn:function(){return n}});n+=o}this.index++}this.throwError("Unterminated quote",e)}};var wr=function(t,e,n){this.lexer=t,this.$filter=e,this.options=n};wr.ZERO=f(function(){return 0},{constant:!0}),wr.prototype={constructor:wr,parse:function(t){this.text=t,this.tokens=this.lexer.lex(t);var e=this.statements();return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),e.literal=!!e.literal,e.constant=!!e.constant,e},primary:function(){var t;if(this.expect("("))t=this.filterChain(),this.consume(")");else if(this.expect("["))t=this.arrayDeclaration();else if(this.expect("{"))t=this.object();else{var e=this.expect();t=e.fn,t||this.throwError("not a primary expression",e),t.literal=!!e.literal,t.constant=!!e.constant}for(var n,r;n=this.expect("(","[",".");)"("===n.text?(t=this.functionCall(t,r),r=null):"["===n.text?(r=t,t=this.objectIndex(t)):"."===n.text?(r=t,t=this.fieldAccess(t)):this.throwError("IMPOSSIBLE");return t},throwError:function(t,e){throw vr("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",e.text,t,e.index+1,this.text,this.text.substring(e.index))},peekToken:function(){if(0===this.tokens.length)throw vr("ueoe","Unexpected end of expression: {0}",this.text);return this.tokens[0]},peek:function(t,e,n,r){if(this.tokens.length>0){var i=this.tokens[0],o=i.text;if(o===t||o===e||o===n||o===r||!t&&!e&&!n&&!r)return i}return!1},expect:function(t,e,n,r){var i=this.peek(t,e,n,r);return i?(this.tokens.shift(),i):!1},consume:function(t){this.expect(t)||this.throwError("is unexpected, expecting ["+t+"]",this.peek())},unaryFn:function(t,e){return f(function(n,r){return t(n,r,e)},{constant:e.constant})},ternaryFn:function(t,e,n){return f(function(r,i){return t(r,i)?e(r,i):n(r,i)},{constant:t.constant&&e.constant&&n.constant})},binaryFn:function(t,e,n){return f(function(r,i){return e(r,i,t,n)},{constant:t.constant&&n.constant})},statements:function(){for(var t=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&t.push(this.filterChain()),!this.expect(";"))return 1===t.length?t[0]:function(e,n){for(var r,i=0;i<t.length;i++){var o=t[i];o&&(r=o(e,n))}return r}},filterChain:function(){for(var t,e=this.expression();;){if(!(t=this.expect("|")))return e;e=this.binaryFn(e,t.fn,this.filter())}},filter:function(){for(var t=this.expect(),e=this.$filter(t.text),n=[];;){if(!(t=this.expect(":"))){var r=function(t,r,i){for(var o=[i],a=0;a<n.length;a++)o.push(n[a](t,r));return e.apply(t,o)};return function(){return r}}n.push(this.expression())}},expression:function(){return this.assignment()},assignment:function(){var t,e,n=this.ternary();return(e=this.expect("="))?(n.assign||this.throwError("implies assignment but ["+this.text.substring(0,e.index)+"] can not be assigned to",e),t=this.ternary(),function(e,r){return n.assign(e,t(e,r),r)}):n},ternary:function(){var t,e,n=this.logicalOR();return(e=this.expect("?"))?(t=this.ternary(),(e=this.expect(":"))?this.ternaryFn(n,t,this.ternary()):void this.throwError("expected :",e)):n},logicalOR:function(){for(var t,e=this.logicalAND();;){if(!(t=this.expect("||")))return e;e=this.binaryFn(e,t.fn,this.logicalAND())}},logicalAND:function(){var t,e=this.equality();return(t=this.expect("&&"))&&(e=this.binaryFn(e,t.fn,this.logicalAND())),e},equality:function(){var t,e=this.relational();return(t=this.expect("==","!=","===","!=="))&&(e=this.binaryFn(e,t.fn,this.equality())),e},relational:function(){var t,e=this.additive();return(t=this.expect("<",">","<=",">="))&&(e=this.binaryFn(e,t.fn,this.relational())),e},additive:function(){for(var t,e=this.multiplicative();t=this.expect("+","-");)e=this.binaryFn(e,t.fn,this.multiplicative());return e},multiplicative:function(){for(var t,e=this.unary();t=this.expect("*","/","%");)e=this.binaryFn(e,t.fn,this.unary());return e},unary:function(){var t;return this.expect("+")?this.primary():(t=this.expect("-"))?this.binaryFn(wr.ZERO,t.fn,this.unary()):(t=this.expect("!"))?this.unaryFn(t.fn,this.unary()):this.primary()},fieldAccess:function(t){var e=this,n=this.expect().text,r=Ee(n,this.options,this.text);return f(function(e,n,i){return r(i||t(e,n))},{assign:function(r,i,o){return xe(t(r,o),n,i,e.text,e.options)}})},objectIndex:function(t){var e=this,r=this.expression();return this.consume("]"),f(function(i,o){var a,s=t(i,o),u=r(i,o);return s?a=be(s[u],e.text):n},{assign:function(n,i,o){var a=r(n,o),s=be(t(n,o),e.text);return s[a]=i}})},functionCall:function(t,e){var n=[];if(")"!==this.peekToken().text)do n.push(this.expression());while(this.expect(","));this.consume(")");var r=this;return function(i,o){for(var a=[],s=e?e(i,o):i,u=0;u<n.length;u++)a.push(n[u](i,o));var c=t(i,o,s)||$;be(s,r.text),be(c,r.text);var l=c.apply?c.apply(s,a):c(a[0],a[1],a[2],a[3],a[4]);return be(l,r.text)}},arrayDeclaration:function(){var t=[],e=!0;if("]"!==this.peekToken().text)do{if(this.peek("]"))break;var n=this.expression();t.push(n),n.constant||(e=!1)}while(this.expect(","));return this.consume("]"),f(function(e,n){for(var r=[],i=0;i<t.length;i++)r.push(t[i](e,n));return r},{literal:!0,constant:e})},object:function(){var t=[],e=!0;if("}"!==this.peekToken().text)do{if(this.peek("}"))break;var n=this.expect(),r=n.string||n.text;this.consume(":");var i=this.expression();t.push({key:r,value:i}),i.constant||(e=!1)}while(this.expect(","));return this.consume("}"),f(function(e,n){for(var r={},i=0;i<t.length;i++){var o=t[i];r[o.key]=o.value(e,n)}return r},{literal:!0,constant:e})}};var br={},xr=r("$sce"),Sr={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Cr=e.createElement("a"),kr=Ue(t.location.href,!0);Le.$inject=["$provide"],ze.$inject=["$locale"],We.$inject=["$locale"];var Er=".",Ar={yyyy:Je("FullYear",4),yy:Je("FullYear",2,0,!0),y:Je("FullYear",1),MMMM:Xe("Month"),MMM:Xe("Month",!0),MM:Je("Month",2,1),M:Je("Month",1,1),dd:Je("Date",2),d:Je("Date",1),HH:Je("Hours",2),H:Je("Hours",1),hh:Je("Hours",2,-12),h:Je("Hours",1,-12),mm:Je("Minutes",2),m:Je("Minutes",1),ss:Je("Seconds",2),s:Je("Seconds",1),sss:Je("Milliseconds",3),EEEE:Xe("Day"),EEE:Xe("Day",!0),a:en,Z:Ye,ww:tn(2),w:tn(1)},Mr=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Or=/^\-?\d+$/;nn.$inject=["$locale"];var Tr=v(bn),Nr=v(Sn);an.$inject=["$parse"];var Dr=v({restrict:"E",compile:function(t,n){return 8>=En&&(n.href||n.name||n.$set("href",""),t.append(e.createComment("IE fix"))),n.href||n.xlinkHref||n.name?void 0:function(t,e){var n="[object SVGAnimatedString]"===Vn.call(e.prop("href"))?"xlink:href":"href";e.on("click",function(t){e.attr(n)||t.preventDefault()})}}}),Vr={};o(er,function(t,e){if("multiple"!=t){var n=Bt("ng-"+e);Vr[n]=function(){return{priority:100,link:function(t,r,i){t.$watch(i[n],function(t){i.$set(e,!!t)})}}}}}),o(["src","srcset","href"],function(t){var e=Bt("ng-"+t);Vr[e]=function(){return{
priority:99,link:function(n,r,i){var o=t,a=t;"href"===t&&"[object SVGAnimatedString]"===Vn.call(r.prop("href"))&&(a="xlinkHref",i.$attr[a]="xlink:href",o=null),i.$observe(e,function(t){t&&(i.$set(a,t),En&&o&&r.prop(o,i[a]))})}}}});var jr={$addControl:$,$removeControl:$,$setValidity:$,$setDirty:$,$setPristine:$};un.$inject=["$element","$attrs","$scope","$animate"];var Pr=function(t){return["$timeout",function(e){var r={name:"form",restrict:t?"EAC":"E",controller:un,compile:function(){return{pre:function(t,r,i,o){if(!i.action){var a=function(e){t.$apply(function(){o.$commitViewValue()}),e.preventDefault?e.preventDefault():e.returnValue=!1};Bn(r[0],"submit",a),r.on("$destroy",function(){e(function(){zn(r[0],"submit",a)},0,!1)})}var s=r.parent().controller("form"),u=i.name||i.ngForm;u&&xe(t,u,o,u),s&&r.on("$destroy",function(){s.$removeControl(o),u&&xe(t,u,n,u),f(o,jr)})}}}};return r}]},Rr=Pr(),qr=Pr(!0),Hr=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Ir=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Ur=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Fr=/^(\d{4})-(\d{2})-(\d{2})$/,_r=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)$/,Lr=/^(\d{4})-W(\d\d)$/,Br=/^(\d{4})-(\d\d)$/,zr=/^(\d\d):(\d\d)$/,Wr=/(\s+|^)default(\s+|$)/,Qr={text:fn,date:$n("date",Fr,pn(Fr,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":$n("datetimelocal",_r,pn(_r,["yyyy","MM","dd","HH","mm"]),"yyyy-MM-ddTHH:mm"),time:$n("time",zr,pn(zr,["HH","mm"]),"HH:mm"),week:$n("week",Lr,hn,"yyyy-Www"),month:$n("month",Br,pn(Br,["yyyy","MM"]),"yyyy-MM"),number:dn,url:vn,email:gn,radio:mn,checkbox:yn,hidden:$,button:$,submit:$,reset:$,file:$},Gr=["$browser","$sniffer","$filter",function(t,e,n){return{restrict:"E",require:["?ngModel"],link:function(r,i,o,a){a[0]&&(Qr[bn(o.type)]||Qr.text)(r,i,o,a[0],e,t,n)}}}],Jr="ng-valid",Xr="ng-invalid",Yr="ng-pristine",Kr="ng-dirty",Zr=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout",function(t,e,n,i,a,s,u){function c(t,e){e=e?"-"+nt(e,"-"):"",s.removeClass(i,(t?Xr:Jr)+e),s.addClass(i,(t?Jr:Xr)+e)}this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$name=n.name;var l=a(n.ngModel),f=l.assign,h=null,p=this;if(!f)throw r("ngModel")("nonassign","Expression '{0}' is non-assignable. Element: {1}",n.ngModel,Q(i));this.$render=$,this.$isEmpty=function(t){return g(t)||""===t||null===t||t!==t};var d=i.inheritedData("$formController")||jr,v=0,y=this.$error={};i.addClass(Yr),c(!0),this.$setValidity=function(t,e){y[t]!==!e&&(e?(y[t]&&v--,v||(c(!0),p.$valid=!0,p.$invalid=!1)):(c(!1),p.$invalid=!0,p.$valid=!1,v++),y[t]=!e,c(e,t),d.$setValidity(t,e,p))},this.$setPristine=function(){p.$dirty=!1,p.$pristine=!0,s.removeClass(i,Kr),s.addClass(i,Yr)},this.$rollbackViewValue=function(){u.cancel(h),p.$viewValue=p.$$lastCommittedViewValue,p.$render()},this.$commitViewValue=function(){var n=p.$viewValue;u.cancel(h),p.$$lastCommittedViewValue!==n&&(p.$$lastCommittedViewValue=n,p.$pristine&&(p.$dirty=!0,p.$pristine=!1,s.removeClass(i,Yr),s.addClass(i,Kr),d.$setDirty()),o(p.$parsers,function(t){n=t(n)}),p.$modelValue!==n&&(p.$modelValue=n,f(t,n),o(p.$viewChangeListeners,function(t){try{t()}catch(n){e(n)}})))},this.$setViewValue=function(t,e){p.$viewValue=t,p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(e)},this.$$debounceViewValueCommit=function(t){var e,n=0,r=p.$options;r&&m(r.debounce)&&(e=r.debounce,b(e)?n=e:b(e[t])?n=e[t]:b(e["default"])&&(n=e["default"])),u.cancel(h),n?h=u(function(){p.$commitViewValue()},n):p.$commitViewValue()},t.$watch(function(){var e=l(t);if(p.$modelValue!==e){var n=p.$formatters,r=n.length;for(p.$modelValue=e;r--;)e=n[r](e);p.$viewValue!==e&&(p.$viewValue=p.$$lastCommittedViewValue=e,p.$render())}return e})}],ti=function(){return{require:["ngModel","^?form","^?ngModelOptions"],controller:Zr,link:{pre:function(t,e,n,r){r[2]&&(r[0].$options=r[2].$options);var i=r[0],o=r[1]||jr;o.$addControl(i),t.$on("$destroy",function(){o.$removeControl(i)})},post:function(t,e,n,r){var i=r[0];i.$options&&i.$options.updateOn&&e.on(i.$options.updateOn,function(e){t.$apply(function(){i.$$debounceViewValueCommit(e&&e.type)})})}}}},ei=v({require:"ngModel",link:function(t,e,n,r){r.$viewChangeListeners.push(function(){t.$eval(n.ngChange)})}}),ni=function(){return{require:"?ngModel",link:function(t,e,n,r){if(r){n.required=!0;var i=function(t){return n.required&&r.$isEmpty(t)?void r.$setValidity("required",!1):(r.$setValidity("required",!0),t)};r.$formatters.push(i),r.$parsers.unshift(i),n.$observe("required",function(){i(r.$viewValue)})}}}},ri=function(){return{require:"ngModel",link:function(t,e,r,i){var a=/\/(.*)\//.exec(r.ngList),s=a&&new RegExp(a[1])||r.ngList||",",u=function(t){if(!g(t)){var e=[];return t&&o(t.split(s),function(t){t&&e.push(qn(t))}),e}};i.$parsers.push(u),i.$formatters.push(function(t){return S(t)?t.join(", "):n}),i.$isEmpty=function(t){return!t||!t.length}}}},ii=/^(true|false|\d+)$/,oi=function(){return{priority:100,compile:function(t,e){return ii.test(e.ngValue)?function(t,e,n){n.$set("value",t.$eval(n.ngValue))}:function(t,e,n){t.$watch(n.ngValue,function(t){n.$set("value",t)})}}}},ai=function(){return{controller:["$scope","$attrs",function(t,e){var r=this;this.$options=t.$eval(e.ngModelOptions),this.$options.updateOn!==n?(this.$options.updateOnDefault=!1,this.$options.updateOn=qn(this.$options.updateOn.replace(Wr,function(){return r.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},si=sn(function(t,e,r){e.addClass("ng-binding").data("$binding",r.ngBind),t.$watch(r.ngBind,function(t){e.text(t==n?"":t)})}),ui=["$interpolate",function(t){return function(e,n,r){var i=t(n.attr(r.$attr.ngBindTemplate));n.addClass("ng-binding").data("$binding",i),r.$observe("ngBindTemplate",function(t){n.text(t)})}}],ci=["$sce","$parse",function(t,e){return function(n,r,i){function o(){var t=a(n);return o.$$unwatch=a.$$unwatch,(t||"").toString()}r.addClass("ng-binding").data("$binding",i.ngBindHtml);var a=e(i.ngBindHtml);n.$watch(o,function(e){r.html(t.getTrustedHtml(a(n))||"")})}}],li=wn("",!0),fi=wn("Odd",0),hi=wn("Even",1),pi=sn({compile:function(t,e){e.$set("ngCloak",n),t.removeClass("ng-cloak")}}),$i=[function(){return{scope:!0,controller:"@",priority:500}}],di={};o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(t){var e=Bt("ng-"+t);di[e]=["$parse",function(n){return{compile:function(r,i){var o=n(i[e]);return function(e,n,r){n.on(bn(t),function(t){e.$apply(function(){o(e,{$event:t})})})}}}}]});var vi=["$animate",function(t){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,o,a){var s,u,c;n.$watch(i.ngIf,function(o){W(o)?u||(u=n.$new(),a(u,function(n){n[n.length++]=e.createComment(" end ngIf: "+i.ngIf+" "),s={clone:n},t.enter(n,r.parent(),r)})):(c&&(c.remove(),c=null),u&&(u.$destroy(),u=null),s&&(c=ut(s.clone),t.leave(c,function(){c=null}),s=null))})}}}],gi=["$http","$templateCache","$anchorScroll","$animate","$sce",function(t,e,n,r,i){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Pn.noop,compile:function(o,a){var s=a.ngInclude||a.src,u=a.onload||"",c=a.autoscroll;return function(o,a,l,f,h){var p,$,d,v=0,g=function(){$&&($.remove(),$=null),p&&(p.$destroy(),p=null),d&&(r.leave(d,function(){$=null}),$=d,d=null)};o.$watch(i.parseAsResourceUrl(s),function(i){var s=function(){!m(c)||c&&!o.$eval(c)||n()},l=++v;i?(t.get(i,{cache:e}).success(function(t){if(l===v){var e=o.$new();f.template=t;var n=h(e,function(t){g(),r.enter(t,null,a,s)});p=e,d=n,p.$emit("$includeContentLoaded"),o.$eval(u)}}).error(function(){l===v&&g()}),o.$emit("$includeContentRequested")):(g(),f.template=null)})}}}}],mi=["$compile",function(t){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(e,n,r,i){n.html(i.template),t(n.contents())(e)}}}],yi=sn({priority:450,compile:function(){return{pre:function(t,e,n){t.$eval(n.ngInit)}}}}),wi=sn({terminal:!0,priority:1e3}),bi=["$locale","$interpolate",function(t,e){var n=/{}/g;return{restrict:"EA",link:function(r,i,a){var s=a.count,u=a.$attr.when&&i.attr(a.$attr.when),c=a.offset||0,l=r.$eval(u)||{},f={},h=e.startSymbol(),p=e.endSymbol(),$=/^when(Minus)?(.+)$/;o(a,function(t,e){$.test(e)&&(l[bn(e.replace("when","").replace("Minus","-"))]=i.attr(a.$attr[e]))}),o(l,function(t,r){f[r]=e(t.replace(n,h+s+"-"+c+p))}),r.$watch(function(){var e=parseFloat(r.$eval(s));return isNaN(e)?"":(e in l||(e=t.pluralCat(e-c)),f[e](r))},function(t){i.text(t)})}}}],xi=["$parse","$animate",function(t,n){function a(t){return t.clone[0]}function s(t){return t.clone[t.clone.length-1]}var u="$$NG_REMOVED",c=r("ngRepeat");return{transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,link:function(r,l,f,h,p){var $,d,v,g,m,y,w,b,x,S=f.ngRepeat,C=S.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),k={$id:Dt};if(!C)throw c("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",S);if(y=C[1],w=C[2],$=C[3],$?(d=t($),v=function(t,e,n){return x&&(k[x]=t),k[b]=e,k.$index=n,d(r,k)}):(g=function(t,e){return Dt(e)},m=function(t){return t}),C=y.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/),!C)throw c("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",y);b=C[3]||C[1],x=C[2];var E={};r.$watchCollection(w,function(t){var f,h,$,d,y,w,C,k,A,M,O,T,N=l[0],D={},V=[];if(i(t))M=t,A=v||g;else{A=v||m,M=[];for(w in t)t.hasOwnProperty(w)&&"$"!=w.charAt(0)&&M.push(w);M.sort()}for(d=M.length,h=V.length=M.length,f=0;h>f;f++)if(w=t===M?f:M[f],C=t[w],k=A(w,C,f),at(k,"`track by` id"),E.hasOwnProperty(k))O=E[k],delete E[k],D[k]=O,V[f]=O;else{if(D.hasOwnProperty(k))throw o(V,function(t){t&&t.scope&&(E[t.id]=t)}),c("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}",S,k);V[f]={id:k},D[k]=!1}for(w in E)E.hasOwnProperty(w)&&(O=E[w],T=ut(O.clone),n.leave(T),o(T,function(t){t[u]=!0}),O.scope.$destroy());for(f=0,h=M.length;h>f;f++){if(w=t===M?f:M[f],C=t[w],O=V[f],V[f-1]&&(N=s(V[f-1])),O.scope){y=O.scope,$=N;do $=$.nextSibling;while($&&$[u]);a(O)!=$&&n.move(ut(O.clone),null,An(N)),N=s(O)}else y=r.$new();y[b]=C,x&&(y[x]=w),y.$index=f,y.$first=0===f,y.$last=f===d-1,y.$middle=!(y.$first||y.$last),y.$odd=!(y.$even=0===(1&f)),O.scope||p(y,function(t){t[t.length++]=e.createComment(" end ngRepeat: "+S+" "),n.enter(t,null,An(N)),N=t,O.scope=y,O.clone=t,D[O.id]=O})}E=D})}}}],Si=["$animate",function(t){return function(e,n,r){e.$watch(r.ngShow,function(e){t[W(e)?"removeClass":"addClass"](n,"ng-hide")})}}],Ci=["$animate",function(t){return function(e,n,r){e.$watch(r.ngHide,function(e){t[W(e)?"addClass":"removeClass"](n,"ng-hide")})}}],ki=sn(function(t,e,n){t.$watch(n.ngStyle,function(t,n){n&&t!==n&&o(n,function(t,n){e.css(n,"")}),t&&e.css(t)},!0)}),Ei=["$animate",function(t){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(e,n,r,i){var a=r.ngSwitch||r.on,s=[],u=[],c=[],l=[];e.$watch(a,function(n){var a,f;for(a=0,f=c.length;f>a;++a)c[a].remove();for(c.length=0,a=0,f=l.length;f>a;++a){var h=u[a];l[a].$destroy(),c[a]=h,t.leave(h,function(){c.splice(a,1)})}u.length=0,l.length=0,(s=i.cases["!"+n]||i.cases["?"])&&(e.$eval(r.change),o(s,function(n){var r=e.$new();l.push(r),n.transclude(r,function(e){var r=n.element;u.push(e),t.enter(e,r.parent(),r)})}))})}}}],Ai=sn({transclude:"element",priority:800,require:"^ngSwitch",link:function(t,e,n,r,i){r.cases["!"+n.ngSwitchWhen]=r.cases["!"+n.ngSwitchWhen]||[],r.cases["!"+n.ngSwitchWhen].push({transclude:i,element:e})}}),Mi=sn({transclude:"element",priority:800,require:"^ngSwitch",link:function(t,e,n,r,i){r.cases["?"]=r.cases["?"]||[],r.cases["?"].push({transclude:i,element:e})}}),Oi=sn({link:function(t,e,n,i,o){if(!o)throw r("ngTransclude")("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",Q(e));o(function(t){e.empty(),e.append(t)})}}),Ti=["$templateCache",function(t){return{restrict:"E",terminal:!0,compile:function(e,n){if("text/ng-template"==n.type){var r=n.id,i=e[0].text;t.put(r,i)}}}}],Ni=r("ngOptions"),Di=v({terminal:!0}),Vi=["$compile","$parse",function(t,r){var i=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,s={$setViewValue:$};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(t,e,n){var r,i,o=this,a={},u=s;o.databound=n.ngModel,o.init=function(t,e,n){u=t,r=e,i=n},o.addOption=function(e){at(e,'"option value"'),a[e]=!0,u.$viewValue==e&&(t.val(e),i.parent()&&i.remove())},o.removeOption=function(t){this.hasOption(t)&&(delete a[t],u.$viewValue==t&&this.renderUnknownOption(t))},o.renderUnknownOption=function(e){var n="? "+Dt(e)+" ?";i.val(n),t.prepend(i),t.val(n),i.prop("selected",!0)},o.hasOption=function(t){return a.hasOwnProperty(t)},e.$on("$destroy",function(){o.renderUnknownOption=$})}],link:function(s,u,c,l){function f(t,e,n,r){n.$render=function(){var t=n.$viewValue;r.hasOption(t)?(k.parent()&&k.remove(),e.val(t),""===t&&$.prop("selected",!0)):g(t)&&$?e.val(""):r.renderUnknownOption(t)},e.on("change",function(){t.$apply(function(){k.parent()&&k.remove(),n.$setViewValue(e.val())})})}function h(t,e,n){var r;n.$render=function(){var t=new Vt(n.$viewValue);o(e.find("option"),function(e){e.selected=m(t.get(e.value))})},t.$watch(function(){H(r,n.$viewValue)||(r=R(n.$viewValue),n.$render())}),e.on("change",function(){t.$apply(function(){var t=[];o(e.find("option"),function(e){e.selected&&t.push(e.value)}),n.$setViewValue(t)})})}function p(e,o,s){function u(){var t,n,r,i,u,c,v,w,E,A,M,O,T,N,D,V={"":[]},j=[""],P=s.$modelValue,R=d(e)||[],q=h?a(R):R,H={},I=!1;if(y)if(g&&S(P)){I=new Vt([]);for(var U=0;U<P.length;U++)H[f]=P[U],I.put(g(e,H),P[U])}else I=new Vt(P);for(M=0;E=q.length,E>M;M++){if(v=M,h){if(v=q[M],"$"===v.charAt(0))continue;H[h]=v}if(H[f]=R[v],t=p(e,H)||"",(n=V[t])||(n=V[t]=[],j.push(t)),y)O=m(I.remove(g?g(e,H):$(e,H)));else{if(g){var F={};F[f]=P,O=g(e,F)===g(e,H)}else O=P===$(e,H);I=I||O}D=l(e,H),D=m(D)?D:"",n.push({id:g?g(e,H):h?q[M]:M,label:D,selected:O})}for(y||(b||null===P?V[""].unshift({id:"",label:"",selected:!I}):I||V[""].unshift({id:"?",label:"",selected:!0})),A=0,w=j.length;w>A;A++){for(t=j[A],n=V[t],k.length<=A?(i={element:C.clone().attr("label",t),label:n.label},u=[i],k.push(u),o.append(i.element)):(u=k[A],i=u[0],i.label!=t&&i.element.attr("label",i.label=t)),T=null,M=0,E=n.length;E>M;M++)r=n[M],(c=u[M+1])?(T=c.element,c.label!==r.label&&T.text(c.label=r.label),c.id!==r.id&&T.val(c.id=r.id),c.selected!==r.selected&&T.prop("selected",c.selected=r.selected)):(""===r.id&&b?N=b:(N=x.clone()).val(r.id).attr("selected",r.selected).text(r.label),u.push(c={element:N,label:r.label,id:r.id,selected:r.selected}),T?T.after(N):i.element.append(N),T=N);for(M++;u.length>M;)u.pop().element.remove()}for(;k.length>A;)k.pop()[0].element.remove()}var c;if(!(c=w.match(i)))throw Ni("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",w,Q(o));var l=r(c[2]||c[1]),f=c[4]||c[6],h=c[5],p=r(c[3]||""),$=r(c[2]?c[1]:f),d=r(c[7]),v=c[8],g=v?r(c[8]):null,k=[[{element:o,label:""}]];b&&(t(b)(e),b.removeClass("ng-scope"),b.remove()),o.empty(),o.on("change",function(){e.$apply(function(){var t,r,i,a,u,c,l,p,v,m=d(e)||[],w={};if(y){for(i=[],c=0,p=k.length;p>c;c++)for(t=k[c],u=1,l=t.length;l>u;u++)if((a=t[u].element)[0].selected){if(r=a.val(),h&&(w[h]=r),g)for(v=0;v<m.length&&(w[f]=m[v],g(e,w)!=r);v++);else w[f]=m[r];i.push($(e,w))}}else{if(r=o.val(),"?"==r)i=n;else if(""===r)i=null;else if(g){for(v=0;v<m.length;v++)if(w[f]=m[v],g(e,w)==r){i=$(e,w);break}}else w[f]=m[r],h&&(w[h]=r),i=$(e,w);k[0].length>1&&k[0][1].id!==r&&(k[0][1].selected=!1)}s.$setViewValue(i)})}),s.$render=u,e.$watch(u)}if(l[1]){for(var $,d=l[0],v=l[1],y=c.multiple,w=c.ngOptions,b=!1,x=An(e.createElement("option")),C=An(e.createElement("optgroup")),k=x.clone(),E=0,A=u.children(),M=A.length;M>E;E++)if(""===A[E].value){$=b=A.eq(E);break}d.init(v,b,k),y&&(v.$isEmpty=function(t){return!t||0===t.length}),w?p(s,u,v):y?h(s,u,v):f(s,u,v,d)}}}}],ji=["$interpolate",function(t){var e={addOption:$,removeOption:$};return{restrict:"E",priority:100,compile:function(n,r){if(g(r.value)){var i=t(n.text(),!0);i||r.$set("value",n.text())}return function(t,n,r){var o="$selectController",a=n.parent(),s=a.data(o)||a.parent().data(o);s&&s.databound?n.prop("selected",!1):s=e,i?t.$watch(i,function(t,e){r.$set("value",t),e!==t&&s.removeOption(e),s.addOption(t)}):s.addOption(r.value),n.on("$destroy",function(){s.removeOption(r.value)})}}}}],Pi=v({restrict:"E",terminal:!1});return t.angular.bootstrap?void console.log("WARNING: Tried to load angular more than once."):(rt(),lt(Pn),void An(e).ready(function(){tt(e,et)}))}(window,document),!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
/**
 * State-based routing for AngularJS
 * @version v0.2.10
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'ui.router';
}

(function (window, angular, undefined) {
/*jshint globalstrict:true*/
/*global angular:false*/
'use strict';

var isDefined = angular.isDefined,
    isFunction = angular.isFunction,
    isString = angular.isString,
    isObject = angular.isObject,
    isArray = angular.isArray,
    forEach = angular.forEach,
    extend = angular.extend,
    copy = angular.copy;

function inherit(parent, extra) {
  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
}

function merge(dst) {
  forEach(arguments, function(obj) {
    if (obj !== dst) {
      forEach(obj, function(value, key) {
        if (!dst.hasOwnProperty(key)) dst[key] = value;
      });
    }
  });
  return dst;
}

/**
 * Finds the common ancestor path between two states.
 *
 * @param {Object} first The first state.
 * @param {Object} second The second state.
 * @return {Array} Returns an array of state names in descending order, not including the root.
 */
function ancestors(first, second) {
  var path = [];

  for (var n in first.path) {
    if (first.path[n] !== second.path[n]) break;
    path.push(first.path[n]);
  }
  return path;
}

/**
 * IE8-safe wrapper for `Object.keys()`.
 *
 * @param {Object} object A JavaScript object.
 * @return {Array} Returns the keys of the object as an array.
 */
function keys(object) {
  if (Object.keys) {
    return Object.keys(object);
  }
  var result = [];

  angular.forEach(object, function(val, key) {
    result.push(key);
  });
  return result;
}

/**
 * IE8-safe wrapper for `Array.prototype.indexOf()`.
 *
 * @param {Array} array A JavaScript array.
 * @param {*} value A value to search the array for.
 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
 */
function arraySearch(array, value) {
  if (Array.prototype.indexOf) {
    return array.indexOf(value, Number(arguments[2]) || 0);
  }
  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

  if (from < 0) from += len;

  for (; from < len; from++) {
    if (from in array && array[from] === value) return from;
  }
  return -1;
}

/**
 * Merges a set of parameters with all parameters inherited between the common parents of the
 * current state and a given destination state.
 *
 * @param {Object} currentParams The value of the current state parameters ($stateParams).
 * @param {Object} newParams The set of parameters which will be composited with inherited params.
 * @param {Object} $current Internal definition of object representing the current state.
 * @param {Object} $to Internal definition of object representing state to transition to.
 */
function inheritParams(currentParams, newParams, $current, $to) {
  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

  for (var i in parents) {
    if (!parents[i].params || !parents[i].params.length) continue;
    parentParams = parents[i].params;

    for (var j in parentParams) {
      if (arraySearch(inheritList, parentParams[j]) >= 0) continue;
      inheritList.push(parentParams[j]);
      inherited[parentParams[j]] = currentParams[parentParams[j]];
    }
  }
  return extend({}, inherited, newParams);
}

/**
 * Normalizes a set of values to string or `null`, filtering them by a list of keys.
 *
 * @param {Array} keys The list of keys to normalize/return.
 * @param {Object} values An object hash of values to normalize.
 * @return {Object} Returns an object hash of normalized string values.
 */
function normalize(keys, values) {
  var normalized = {};

  forEach(keys, function (name) {
    var value = values[name];
    normalized[name] = (value != null) ? String(value) : null;
  });
  return normalized;
}

/**
 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
 *
 * @param {Object} a The first object.
 * @param {Object} b The second object.
 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
 *                     it defaults to the list of keys in `a`.
 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
 */
function equalForKeys(a, b, keys) {
  if (!keys) {
    keys = [];
    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
  }

  for (var i=0; i<keys.length; i++) {
    var k = keys[i];
    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
  }
  return true;
}

/**
 * Returns the subset of an object, based on a list of keys.
 *
 * @param {Array} keys
 * @param {Object} values
 * @return {Boolean} Returns a subset of `values`.
 */
function filterByKeys(keys, values) {
  var filtered = {};

  forEach(keys, function (name) {
    filtered[name] = values[name];
  });
  return filtered;
}
/**
 * @ngdoc overview
 * @name ui.router.util
 *
 * @description
 * # ui.router.util sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 *
 */
angular.module('ui.router.util', ['ng']);

/**
 * @ngdoc overview
 * @name ui.router.router
 * 
 * @requires ui.router.util
 *
 * @description
 * # ui.router.router sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 */
angular.module('ui.router.router', ['ui.router.util']);

/**
 * @ngdoc overview
 * @name ui.router.state
 * 
 * @requires ui.router.router
 * @requires ui.router.util
 *
 * @description
 * # ui.router.state sub-module
 *
 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 * 
 */
angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

/**
 * @ngdoc overview
 * @name ui.router
 *
 * @requires ui.router.state
 *
 * @description
 * # ui.router
 * 
 * ## The main module for ui.router 
 * There are several sub-modules included with the ui.router module, however only this module is needed
 * as a dependency within your angular app. The other modules are for organization purposes. 
 *
 * The modules are:
 * * ui.router - the main "umbrella" module
 * * ui.router.router - 
 * 
 * *You'll need to include **only** this module as the dependency within your angular app.*
 * 
 * <pre>
 * <!doctype html>
 * <html ng-app="myApp">
 * <head>
 *   <script dev="js/angular.js"></script>
 *   <!-- Include the ui-router script -->
 *   <script dev="js/angular-ui-router.min.js"></script>
 *   <script>
 *     // ...and add 'ui.router' as a dependency
 *     var myApp = angular.module('myApp', ['ui.router']);
 *   </script>
 * </head>
 * <body>
 * </body>
 * </html>
 * </pre>
 */
angular.module('ui.router', ['ui.router.state']);

angular.module('ui.router.compat', ['ui.router']);

/**
 * @ngdoc object
 * @name ui.router.util.$resolve
 *
 * @requires $q
 * @requires $injector
 *
 * @description
 * Manages resolution of (acyclic) graphs of promises.
 */
$Resolve.$inject = ['$q', '$injector'];
function $Resolve(  $q,    $injector) {
  
  var VISIT_IN_PROGRESS = 1,
      VISIT_DONE = 2,
      NOTHING = {},
      NO_DEPENDENCIES = [],
      NO_LOCALS = NOTHING,
      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
  

  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#study
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Studies a set of invocables that are likely to be used multiple times.
   * <pre>
   * $resolve.study(invocables)(locals, parent, self)
   * </pre>
   * is equivalent to
   * <pre>
   * $resolve.resolve(invocables, locals, parent, self)
   * </pre>
   * but the former is more efficient (in fact `resolve` just calls `study` 
   * internally).
   *
   * @param {object} invocables Invocable objects
   * @return {function} a function to pass in locals, parent and self
   */
  this.study = function (invocables) {
    if (!isObject(invocables)) throw new Error("'invocables' must be an object");
    
    // Perform a topological sort of invocables to build an ordered plan
    var plan = [], cycle = [], visited = {};
    function visit(value, key) {
      if (visited[key] === VISIT_DONE) return;
      
      cycle.push(key);
      if (visited[key] === VISIT_IN_PROGRESS) {
        cycle.splice(0, cycle.indexOf(key));
        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
      }
      visited[key] = VISIT_IN_PROGRESS;
      
      if (isString(value)) {
        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
      } else {
        var params = $injector.annotate(value);
        forEach(params, function (param) {
          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
        });
        plan.push(key, value, params);
      }
      
      cycle.pop();
      visited[key] = VISIT_DONE;
    }
    forEach(invocables, visit);
    invocables = cycle = visited = null; // plan is all that's required
    
    function isResolve(value) {
      return isObject(value) && value.then && value.$$promises;
    }
    
    return function (locals, parent, self) {
      if (isResolve(locals) && self === undefined) {
        self = parent; parent = locals; locals = null;
      }
      if (!locals) locals = NO_LOCALS;
      else if (!isObject(locals)) {
        throw new Error("'locals' must be an object");
      }       
      if (!parent) parent = NO_PARENT;
      else if (!isResolve(parent)) {
        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
      }
      
      // To complete the overall resolution, we have to wait for the parent
      // promise and for the promise for each invokable in our plan.
      var resolution = $q.defer(),
          result = resolution.promise,
          promises = result.$$promises = {},
          values = extend({}, locals),
          wait = 1 + plan.length/3,
          merged = false;
          
      function done() {
        // Merge parent values we haven't got yet and publish our own $$values
        if (!--wait) {
          if (!merged) merge(values, parent.$$values); 
          result.$$values = values;
          result.$$promises = true; // keep for isResolve()
          resolution.resolve(values);
        }
      }
      
      function fail(reason) {
        result.$$failure = reason;
        resolution.reject(reason);
      }
      
      // Short-circuit if parent has already failed
      if (isDefined(parent.$$failure)) {
        fail(parent.$$failure);
        return result;
      }
      
      // Merge parent values if the parent has already resolved, or merge
      // parent promises and wait if the parent resolve is still in progress.
      if (parent.$$values) {
        merged = merge(values, parent.$$values);
        done();
      } else {
        extend(promises, parent.$$promises);
        parent.then(done, fail);
      }
      
      // Process each invocable in the plan, but ignore any where a local of the same name exists.
      for (var i=0, ii=plan.length; i<ii; i+=3) {
        if (locals.hasOwnProperty(plan[i])) done();
        else invoke(plan[i], plan[i+1], plan[i+2]);
      }
      
      function invoke(key, invocable, params) {
        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
        var invocation = $q.defer(), waitParams = 0;
        function onfailure(reason) {
          invocation.reject(reason);
          fail(reason);
        }
        // Wait for any parameter that we have a promise for (either from parent or from this
        // resolve; in that case study() will have made sure it's ordered before us in the plan).
        forEach(params, function (dep) {
          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
            waitParams++;
            promises[dep].then(function (result) {
              values[dep] = result;
              if (!(--waitParams)) proceed();
            }, onfailure);
          }
        });
        if (!waitParams) proceed();
        function proceed() {
          if (isDefined(result.$$failure)) return;
          try {
            invocation.resolve($injector.invoke(invocable, self, values));
            invocation.promise.then(function (result) {
              values[key] = result;
              done();
            }, onfailure);
          } catch (e) {
            onfailure(e);
          }
        }
        // Publish promise synchronously; invocations further down in the plan may depend on it.
        promises[key] = invocation.promise;
      }
      
      return result;
    };
  };
  
  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#resolve
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Resolves a set of invocables. An invocable is a function to be invoked via 
   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
   * An invocable can either return a value directly,
   * or a `$q` promise. If a promise is returned it will be resolved and the 
   * resulting value will be used instead. Dependencies of invocables are resolved 
   * (in this order of precedence)
   *
   * - from the specified `locals`
   * - from another invocable that is part of this `$resolve` call
   * - from an invocable that is inherited from a `parent` call to `$resolve` 
   *   (or recursively
   * - from any ancestor `$resolve` of that parent).
   *
   * The return value of `$resolve` is a promise for an object that contains 
   * (in this order of precedence)
   *
   * - any `locals` (if specified)
   * - the resolved return values of all injectables
   * - any values inherited from a `parent` call to `$resolve` (if specified)
   *
   * The promise will resolve after the `parent` promise (if any) and all promises 
   * returned by injectables have been resolved. If any invocable 
   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
   * same error. A rejection of a `parent` promise (if specified) will likewise be 
   * propagated immediately. Once the `$resolve` promise has been rejected, no 
   * further invocables will be called.
   * 
   * Cyclic dependencies between invocables are not permitted and will caues `$resolve`
   * to throw an error. As a special case, an injectable can depend on a parameter 
   * with the same name as the injectable, which will be fulfilled from the `parent` 
   * injectable of the same name. This allows inherited values to be decorated. 
   * Note that in this case any other injectable in the same `$resolve` with the same
   * dependency would see the decorated value, not the inherited value.
   *
   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
   * exception.
   *
   * Invocables are invoked eagerly as soon as all dependencies are available. 
   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
   *
   * As a special case, an invocable can be a string, in which case it is taken to 
   * be a service name to be passed to `$injector.get()`. This is supported primarily 
   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
   * routes.
   *
   * @param {object} invocables functions to invoke or 
   * `$injector` services to fetch.
   * @param {object} locals  values to make available to the injectables
   * @param {object} parent  a promise returned by another call to `$resolve`.
   * @param {object} self  the `this` for the invoked methods
   * @return {object} Promise for an object that contains the resolved return value
   * of all invocables, as well as any inherited and local values.
   */
  this.resolve = function (invocables, locals, parent, self) {
    return this.study(invocables)(locals, parent, self);
  };
}

angular.module('ui.router.util').service('$resolve', $Resolve);


/**
 * @ngdoc object
 * @name ui.router.util.$templateFactory
 *
 * @requires $http
 * @requires $templateCache
 * @requires $injector
 *
 * @description
 * Service. Manages loading of templates.
 */
$TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
function $TemplateFactory(  $http,   $templateCache,   $injector) {

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromConfig
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a configuration object. 
   *
   * @param {object} config Configuration object for which to load a template. 
   * The following properties are search in the specified order, and the first one 
   * that is defined is used to create the template:
   *
   * @param {string|object} config.template html string template or function to 
   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
   * @param {string|object} config.templateUrl url to load or a function returning 
   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
   * @param {Function} config.templateProvider function to invoke via 
   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
   * @param {object} params  Parameters to pass to the template function.
   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
   * via a `templateProvider`. Defaults to `{ params: params }`.
   *
   * @return {string|object}  The template html as a string, or a promise for 
   * that string,or `null` if no template is configured.
   */
  this.fromConfig = function (config, params, locals) {
    return (
      isDefined(config.template) ? this.fromString(config.template, params) :
      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
      null
    );
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromString
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a string or a function returning a string.
   *
   * @param {string|object} template html template as a string or function that 
   * returns an html template as a string.
   * @param {object} params Parameters to pass to the template function.
   *
   * @return {string|object} The template html as a string, or a promise for that 
   * string.
   */
  this.fromString = function (template, params) {
    return isFunction(template) ? template(params) : template;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromUrl
   * @methodOf ui.router.util.$templateFactory
   * 
   * @description
   * Loads a template from the a URL via `$http` and `$templateCache`.
   *
   * @param {string|Function} url url of the template to load, or a function 
   * that returns a url.
   * @param {Object} params Parameters to pass to the url function.
   * @return {string|Promise.<string>} The template html as a string, or a promise 
   * for that string.
   */
  this.fromUrl = function (url, params) {
    if (isFunction(url)) url = url(params);
    if (url == null) return null;
    else return $http
        .get(url, { cache: $templateCache })
        .then(function(response) { return response.data; });
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromUrl
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template by invoking an injectable provider function.
   *
   * @param {Function} provider Function to invoke via `$injector.invoke`
   * @param {Object} params Parameters for the template.
   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
   * `{ params: params }`.
   * @return {string|Promise.<string>} The template html as a string, or a promise 
   * for that string.
   */
  this.fromProvider = function (provider, params, locals) {
    return $injector.invoke(provider, null, locals || { params: params });
  };
}

angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

/**
 * @ngdoc object
 * @name ui.router.util.type:UrlMatcher
 *
 * @description
 * Matches URLs against patterns and extracts named parameters from the path or the search
 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
 * do not influence whether or not a URL is matched, but their values are passed through into
 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
 * 
 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
 * syntax, which optionally allows a regular expression for the parameter to be specified:
 *
 * * `':'` name - colon placeholder
 * * `'*'` name - catch-all placeholder
 * * `'{' name '}'` - curly placeholder
 * * `'{' name ':' regexp '}'` - curly placeholder with regexp. Should the regexp itself contain
 *   curly braces, they must be in matched pairs or escaped with a backslash.
 *
 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
 * must be unique within the pattern (across both path and search parameters). For colon 
 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
 * number of characters other than '/'. For catch-all placeholders the path parameter matches
 * any number of characters.
 * 
 * Examples:
 * 
 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
 * * `'/user/{id:[^/]*}'` - Same as the previous example.
 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
 *   parameter consists of 1 to 8 hex digits.
 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
 *   path into the parameter 'path'.
 * * `'/files/*path'` - ditto.
 *
 * @param {string} pattern  the pattern to compile into a matcher.
 *
 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
 *   non-null) will start with this prefix.
 *
 * @property {string} source  The pattern that was passed into the contructor
 *
 * @property {string} sourcePath  The path portion of the source property
 *
 * @property {string} sourceSearch  The search portion of the source property
 *
 * @property {string} regex  The constructed regex that will be used to match against the url when 
 *   it is time to determine which url will match.
 *
 * @returns {Object}  New UrlMatcher object
 */
function UrlMatcher(pattern) {

  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
  //   '*' name
  //   ':' name
  //   '{' name '}'
  //   '{' name ':' regexp '}'
  // The regular expression is somewhat complicated due to the need to allow curly braces
  // inside the regular expression. The placeholder regexp breaks down as follows:
  //    ([:*])(\w+)               classic placeholder ($1 / $2)
  //    \{(\w+)(?:\:( ... ))?\}   curly brace placeholder ($3) with optional regexp ... ($4)
  //    (?: ... | ... | ... )+    the regexp consists of any number of atoms, an atom being either
  //    [^{}\\]+                  - anything other than curly braces or backslash
  //    \\.                       - a backslash escape
  //    \{(?:[^{}\\]+|\\.)*\}     - a matched set of curly braces containing other atoms
  var placeholder = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
      names = {}, compiled = '^', last = 0, m,
      segments = this.segments = [],
      params = this.params = [];

  function addParameter(id) {
    if (!/^\w+(-+\w+)*$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
    if (names[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
    names[id] = true;
    params.push(id);
  }

  function quoteRegExp(string) {
    return string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
  }

  this.source = pattern;

  // Split into static segments separated by path parameter placeholders.
  // The number of segments is always 1 more than the number of parameters.
  var id, regexp, segment;
  while ((m = placeholder.exec(pattern))) {
    id = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
    regexp = m[4] || (m[1] == '*' ? '.*' : '[^/]*');
    segment = pattern.substring(last, m.index);
    if (segment.indexOf('?') >= 0) break; // we're into the search part
    compiled += quoteRegExp(segment) + '(' + regexp + ')';
    addParameter(id);
    segments.push(segment);
    last = placeholder.lastIndex;
  }
  segment = pattern.substring(last);

  // Find any search parameter names and remove them from the last segment
  var i = segment.indexOf('?');
  if (i >= 0) {
    var search = this.sourceSearch = segment.substring(i);
    segment = segment.substring(0, i);
    this.sourcePath = pattern.substring(0, last+i);

    // Allow parameters to be separated by '?' as well as '&' to make concat() easier
    forEach(search.substring(1).split(/[&?]/), addParameter);
  } else {
    this.sourcePath = pattern;
    this.sourceSearch = '';
  }

  compiled += quoteRegExp(segment) + '$';
  segments.push(segment);
  this.regexp = new RegExp(compiled);
  this.prefix = segments[0];
}

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#concat
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns a new matcher for a pattern constructed by appending the path part and adding the
 * search parameters of the specified pattern to this pattern. The current pattern is not
 * modified. This can be understood as creating a pattern for URLs that are relative to (or
 * suffixes of) the current pattern.
 *
 * @example
 * The following two matchers are equivalent:
 * ```
 * new UrlMatcher('/user/{id}?q').concat('/details?date');
 * new UrlMatcher('/user/{id}/details?q&date');
 * ```
 *
 * @param {string} pattern  The pattern to append.
 * @returns {ui.router.util.type:UrlMatcher}  A matcher for the concatenated pattern.
 */
UrlMatcher.prototype.concat = function (pattern) {
  // Because order of search parameters is irrelevant, we can add our own search
  // parameters to the end of the new pattern. Parse the new pattern by itself
  // and then join the bits together, but it's much easier to do this on a string level.
  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch);
};

UrlMatcher.prototype.toString = function () {
  return this.source;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#exec
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Tests the specified path against this matcher, and returns an object containing the captured
 * parameter values, or null if the path does not match. The returned object contains the values
 * of any search parameters that are mentioned in the pattern, but their value may be null if
 * they are not present in `searchParams`. This means that search parameters are always treated
 * as optional.
 *
 * @example
 * ```
 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', { x:'1', q:'hello' });
 * // returns { id:'bob', q:'hello', r:null }
 * ```
 *
 * @param {string} path  The URL path to match, e.g. `$location.path()`.
 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
 * @returns {Object}  The captured parameter values.
 */
UrlMatcher.prototype.exec = function (path, searchParams) {
  var m = this.regexp.exec(path);
  if (!m) return null;

  var params = this.params, nTotal = params.length,
    nPath = this.segments.length-1,
    values = {}, i;

  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

  for (i=0; i<nPath; i++) values[params[i]] = m[i+1];
  for (/**/; i<nTotal; i++) values[params[i]] = searchParams[params[i]];

  return values;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#parameters
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns the names of all path and search parameters of this pattern in an unspecified order.
 * 
 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
 *    pattern has no parameters, an empty array is returned.
 */
UrlMatcher.prototype.parameters = function () {
  return this.params;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#format
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Creates a URL that matches this pattern by substituting the specified values
 * for the path and search parameters. Null values for path parameters are
 * treated as empty strings.
 *
 * @example
 * ```
 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
 * // returns '/user/bob?q=yes'
 * ```
 *
 * @param {Object} values  the values to substitute for the parameters in this pattern.
 * @returns {string}  the formatted URL (path and optionally search part).
 */
UrlMatcher.prototype.format = function (values) {
  var segments = this.segments, params = this.params;
  if (!values) return segments.join('');

  var nPath = segments.length-1, nTotal = params.length,
    result = segments[0], i, search, value;

  for (i=0; i<nPath; i++) {
    value = values[params[i]];
    // TODO: Maybe we should throw on null here? It's not really good style to use '' and null interchangeabley
    if (value != null) result += encodeURIComponent(value);
    result += segments[i+1];
  }
  for (/**/; i<nTotal; i++) {
    value = values[params[i]];
    if (value != null) {
      result += (search ? '&' : '?') + params[i] + '=' + encodeURIComponent(value);
      search = true;
    }
  }

  return result;
};



/**
 * @ngdoc object
 * @name ui.router.util.$urlMatcherFactory
 *
 * @description
 * Factory for {@link ui.router.util.type:UrlMatcher} instances. The factory is also available to providers
 * under the name `$urlMatcherFactoryProvider`.
 */
function $UrlMatcherFactory() {

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#compile
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Creates a {@link ui.router.util.type:UrlMatcher} for the specified pattern.
   *   
   * @param {string} pattern  The URL pattern.
   * @returns {ui.router.util.type:UrlMatcher}  The UrlMatcher.
   */
  this.compile = function (pattern) {
    return new UrlMatcher(pattern);
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#isMatcher
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Returns true if the specified object is a UrlMatcher, or false otherwise.
   *
   * @param {Object} object  The object to perform the type check against.
   * @returns {Boolean}  Returns `true` if the object has the following functions: `exec`, `format`, and `concat`.
   */
  this.isMatcher = function (o) {
    return isObject(o) && isFunction(o.exec) && isFunction(o.format) && isFunction(o.concat);
  };
  
  /* No need to document $get, since it returns this */
  this.$get = function () {
    return this;
  };
}

// Register as a provider so it's available to other providers
angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);

/**
 * @ngdoc object
 * @name ui.router.router.$urlRouterProvider
 *
 * @requires ui.router.util.$urlMatcherFactoryProvider
 *
 * @description
 * `$urlRouterProvider` has the responsibility of watching `$location`. 
 * When `$location` changes it runs through a list of rules one by one until a 
 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
 *
 * There are several methods on `$urlRouterProvider` that make it useful to use directly
 * in your module config.
 */
$UrlRouterProvider.$inject = ['$urlMatcherFactoryProvider'];
function $UrlRouterProvider(  $urlMatcherFactory) {
  var rules = [], 
      otherwise = null;

  // Returns a string that is a prefix of all strings matching the RegExp
  function regExpPrefix(re) {
    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
  }

  // Interpolates matched values into a String.replace()-style pattern
  function interpolate(pattern, match) {
    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
      return match[what === '$' ? 0 : Number(what)];
    });
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#rule
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines rules that are used by `$urlRouterProvider to find matches for
   * specific URLs.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // Here's an example of how you might allow case insensitive urls
   *   $urlRouterProvider.rule(function ($injector, $location) {
   *     var path = $location.path(),
   *         normalized = path.toLowerCase();
   *
   *     if (path !== normalized) {
   *       return normalized;
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {object} rule Handler function that takes `$injector` and `$location`
   * services as arguments. You can use them to return a valid path as a string.
   *
   * @return {object} $urlRouterProvider - $urlRouterProvider instance
   */
  this.rule =
    function (rule) {
      if (!isFunction(rule)) throw new Error("'rule' must be a function");
      rules.push(rule);
      return this;
    };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouterProvider#otherwise
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines a path that is used when an invalied route is requested.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // if the path doesn't match any of the urls you configured
   *   // otherwise will take care of routing the user to the
   *   // specified url
   *   $urlRouterProvider.otherwise('/index');
   *
   *   // Example of using function rule as param
   *   $urlRouterProvider.otherwise(function ($injector, $location) {
   *     ...
   *   });
   * });
   * </pre>
   *
   * @param {string|object} rule The url path you want to redirect to or a function 
   * rule that returns the url path. The function version is passed two params: 
   * `$injector` and `$location` services.
   *
   * @return {object} $urlRouterProvider - $urlRouterProvider instance
   */
  this.otherwise =
    function (rule) {
      if (isString(rule)) {
        var redirect = rule;
        rule = function () { return redirect; };
      }
      else if (!isFunction(rule)) throw new Error("'rule' must be a function");
      otherwise = rule;
      return this;
    };


  function handleIfMatch($injector, handler, match) {
    if (!match) return false;
    var result = $injector.invoke(handler, handler, { $match: match });
    return isDefined(result) ? result : true;
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#when
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Registers a handler for a given url matching. if handle is a string, it is
   * treated as a redirect, and is interpolated according to the syyntax of match
   * (i.e. like String.replace() for RegExp, or like a UrlMatcher pattern otherwise).
   *
   * If the handler is a function, it is injectable. It gets invoked if `$location`
   * matches. You have the option of inject the match object as `$match`.
   *
   * The handler can return
   *
   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
   *   will continue trying to find another one that matches.
   * - **string** which is treated as a redirect and passed to `$location.url()`
   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
   *     if ($state.$current.navigable !== state ||
   *         !equalForKeys($match, $stateParams) {
   *      $state.transitionTo(state, $match, false);
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {string|object} what The incoming path that you want to redirect.
   * @param {string|object} handler The path you want to redirect your user to.
   */
  this.when =
    function (what, handler) {
      var redirect, handlerIsString = isString(handler);
      if (isString(what)) what = $urlMatcherFactory.compile(what);

      if (!handlerIsString && !isFunction(handler) && !isArray(handler))
        throw new Error("invalid 'handler' in when()");

      var strategies = {
        matcher: function (what, handler) {
          if (handlerIsString) {
            redirect = $urlMatcherFactory.compile(handler);
            handler = ['$match', function ($match) { return redirect.format($match); }];
          }
          return extend(function ($injector, $location) {
            return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
          }, {
            prefix: isString(what.prefix) ? what.prefix : ''
          });
        },
        regex: function (what, handler) {
          if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

          if (handlerIsString) {
            redirect = handler;
            handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
          }
          return extend(function ($injector, $location) {
            return handleIfMatch($injector, handler, what.exec($location.path()));
          }, {
            prefix: regExpPrefix(what)
          });
        }
      };

      var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

      for (var n in check) {
        if (check[n]) {
          return this.rule(strategies[n](what, handler));
        }
      }

      throw new Error("invalid 'what' in when()");
    };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouter
   *
   * @requires $location
   * @requires $rootScope
   * @requires $injector
   *
   * @description
   *
   */
  this.$get =
    [        '$location', '$rootScope', '$injector',
    function ($location,   $rootScope,   $injector) {
      // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
      function update(evt) {
        if (evt && evt.defaultPrevented) return;
        function check(rule) {
          var handled = rule($injector, $location);
          if (handled) {
            if (isString(handled)) $location.replace().url(handled);
            return true;
          }
          return false;
        }
        var n=rules.length, i;
        for (i=0; i<n; i++) {
          if (check(rules[i])) return;
        }
        // always check otherwise last to allow dynamic updates to the set of rules
        if (otherwise) check(otherwise);
      }

      $rootScope.$on('$locationChangeSuccess', update);

      return {
        /**
         * @ngdoc function
         * @name ui.router.router.$urlRouter#sync
         * @methodOf ui.router.router.$urlRouter
         *
         * @description
         * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
         * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event, 
         * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed 
         * with the transition by calling `$urlRouter.sync()`.
         *
         * @example
         * <pre>
         * angular.module('app', ['ui.router']);
         *   .run(function($rootScope, $urlRouter) {
         *     $rootScope.$on('$locationChangeSuccess', function(evt) {
         *       // Halt state change from even starting
         *       evt.preventDefault();
         *       // Perform custom logic
         *       var meetsRequirement = ...
         *       // Continue with the update and state transition if logic allows
         *       if (meetsRequirement) $urlRouter.sync();
         *     });
         * });
         * </pre>
         */
        sync: function () {
          update();
        }
      };
    }];
}

angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$stateProvider
 *
 * @requires ui.router.router.$urlRouterProvider
 * @requires ui.router.util.$urlMatcherFactoryProvider
 * @requires $locationProvider
 *
 * @description
 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
 * on state.
 *
 * A state corresponds to a "place" in the application in terms of the overall UI and
 * navigation. A state describes (via the controller / template / view properties) what
 * the UI looks like and does at that place.
 *
 * States often have things in common, and the primary way of factoring out these
 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
 * nested states.
 *
 * The `$stateProvider` provides interfaces to declare these states for your app.
 */
$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider'];
function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory,           $locationProvider) {

  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

  // Builds state properties from definition passed to registerState()
  var stateBuilder = {

    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
    // state.children = [];
    // if (parent) parent.children.push(state);
    parent: function(state) {
      if (isDefined(state.parent) && state.parent) return findState(state.parent);
      // regex matches any valid composite state name
      // would match "contact.list" but not "contacts"
      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
      return compositeName ? findState(compositeName[1]) : root;
    },

    // inherit 'data' from parent and override by own values (if any)
    data: function(state) {
      if (state.parent && state.parent.data) {
        state.data = state.self.data = extend({}, state.parent.data, state.data);
      }
      return state.data;
    },

    // Build a URLMatcher if necessary, either via a relative or absolute URL
    url: function(state) {
      var url = state.url;

      if (isString(url)) {
        if (url.charAt(0) == '^') {
          return $urlMatcherFactory.compile(url.substring(1));
        }
        return (state.parent.navigable || root).url.concat(url);
      }

      if ($urlMatcherFactory.isMatcher(url) || url == null) {
        return url;
      }
      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
    },

    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
    navigable: function(state) {
      return state.url ? state : (state.parent ? state.parent.navigable : null);
    },

    // Derive parameters for this state and ensure they're a super-set of parent's parameters
    params: function(state) {
      if (!state.params) {
        return state.url ? state.url.parameters() : state.parent.params;
      }
      if (!isArray(state.params)) throw new Error("Invalid params in state '" + state + "'");
      if (state.url) throw new Error("Both params and url specicified in state '" + state + "'");
      return state.params;
    },

    // If there is no explicit multi-view configuration, make one up so we don't have
    // to handle both cases in the view directive later. Note that having an explicit
    // 'views' property will mean the default unnamed view properties are ignored. This
    // is also a good time to resolve view names to absolute names, so everything is a
    // straight lookup at link time.
    views: function(state) {
      var views = {};

      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
        views[name] = view;
      });
      return views;
    },

    ownParams: function(state) {
      if (!state.parent) {
        return state.params;
      }
      var paramNames = {}; forEach(state.params, function (p) { paramNames[p] = true; });

      forEach(state.parent.params, function (p) {
        if (!paramNames[p]) {
          throw new Error("Missing required parameter '" + p + "' in state '" + state.name + "'");
        }
        paramNames[p] = false;
      });
      var ownParams = [];

      forEach(paramNames, function (own, p) {
        if (own) ownParams.push(p);
      });
      return ownParams;
    },

    // Keep a full path from the root down to this state as this is needed for state activation.
    path: function(state) {
      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
    },

    // Speed up $state.contains() as it's used a lot
    includes: function(state) {
      var includes = state.parent ? extend({}, state.parent.includes) : {};
      includes[state.name] = true;
      return includes;
    },

    $delegates: {}
  };

  function isRelative(stateName) {
    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
  }

  function findState(stateOrName, base) {
    var isStr = isString(stateOrName),
        name  = isStr ? stateOrName : stateOrName.name,
        path  = isRelative(name);

    if (path) {
      if (!base) throw new Error("No reference point given for path '"  + name + "'");
      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

      for (; i < pathLength; i++) {
        if (rel[i] === "" && i === 0) {
          current = base;
          continue;
        }
        if (rel[i] === "^") {
          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
          current = current.parent;
          continue;
        }
        break;
      }
      rel = rel.slice(i).join(".");
      name = current.name + (current.name && rel ? "." : "") + rel;
    }
    var state = states[name];

    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
      return state;
    }
    return undefined;
  }

  function queueState(parentName, state) {
    if (!queue[parentName]) {
      queue[parentName] = [];
    }
    queue[parentName].push(state);
  }

  function registerState(state) {
    // Wrap a new object around the state so we can store our private details easily.
    state = inherit(state, {
      self: state,
      resolve: state.resolve || {},
      toString: function() { return this.name; }
    });

    var name = state.name;
    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "'' is already defined");

    // Get parent name
    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
        : (isString(state.parent)) ? state.parent
        : '';

    // If parent is not registered yet, add state to queue and register later
    if (parentName && !states[parentName]) {
      return queueState(parentName, state.self);
    }

    for (var key in stateBuilder) {
      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
    }
    states[name] = state;

    // Register the state in the global state list and with $urlRouter if necessary.
    if (!state[abstractKey] && state.url) {
      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
          $state.transitionTo(state, $match, { location: false });
        }
      }]);
    }

    // Register any queued children
    if (queue[name]) {
      for (var i = 0; i < queue[name].length; i++) {
        registerState(queue[name][i]);
      }
    }

    return state;
  }

  // Checks text to see if it looks like a glob.
  function isGlob (text) {
    return text.indexOf('*') > -1;
  }

  // Returns true if glob matches current $state name.
  function doesStateMatchGlob (glob) {
    var globSegments = glob.split('.'),
        segments = $state.$current.name.split('.');

    //match greedy starts
    if (globSegments[0] === '**') {
       segments = segments.slice(segments.indexOf(globSegments[1]));
       segments.unshift('**');
    }
    //match greedy ends
    if (globSegments[globSegments.length - 1] === '**') {
       segments.splice(segments.indexOf(globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
       segments.push('**');
    }

    if (globSegments.length != segments.length) {
      return false;
    }

    //match single stars
    for (var i = 0, l = globSegments.length; i < l; i++) {
      if (globSegments[i] === '*') {
        segments[i] = '*';
      }
    }

    return segments.join('') === globSegments.join('');
  }


  // Implicit root state that is always active
  root = registerState({
    name: '',
    url: '^',
    views: null,
    'abstract': true
  });
  root.navigable = null;


  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#decorator
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Allows you to extend (carefully) or override (at your own peril) the 
   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
   * to add custom functionality to ui-router, for example inferring templateUrl 
   * based on the state name.
   *
   * When passing only a name, it returns the current (original or decorated) builder
   * function that matches `name`.
   *
   * The builder functions that can be decorated are listed below. Though not all
   * necessarily have a good use case for decoration, that is up to you to decide.
   *
   * In addition, users can attach custom decorators, which will generate new 
   * properties within the state's internal definition. There is currently no clear 
   * use-case for this beyond accessing internal states (i.e. $state.$current), 
   * however, expect this to become increasingly relevant as we introduce additional 
   * meta-programming features.
   *
   * **Warning**: Decorators should not be interdependent because the order of 
   * execution of the builder functions in non-deterministic. Builder functions 
   * should only be dependent on the state definition object and super function.
   *
   *
   * Existing builder functions and current return values:
   *
   * - **parent** `{object}` - returns the parent state object.
   * - **data** `{object}` - returns state data, including any inherited data that is not
   *   overridden by own values (if any).
   * - **url** `{object}` - returns a {link ui.router.util.type:UrlMatcher} or null.
   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
   *   navigable).
   * - **params** `{object}` - returns an array of state params that are ensured to 
   *   be a super-set of parent's params.
   * - **views** `{object}` - returns a views object where each key is an absolute view 
   *   name (i.e. "viewName@stateName") and each value is the config object 
   *   (template, controller) for the view. Even when you don't use the views object 
   *   explicitly on a state config, one is still created for you internally.
   *   So by decorating this builder function you have access to decorating template 
   *   and controller properties.
   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
   *   not including any params defined by ancestor states.
   * - **path** `{string}` - returns the full path from the root down to this state. 
   *   Needed for state activation.
   * - **includes** `{object}` - returns an object that includes every state that 
   *   would pass a '$state.includes()' test.
   *
   * @example
   * <pre>
   * // Override the internal 'views' builder with a function that takes the state
   * // definition, and a reference to the internal function being overridden:
   * $stateProvider.decorator('views', function ($state, parent) {
   *   var result = {},
   *       views = parent(state);
   *
   *   angular.forEach(view, function (config, name) {
   *     var autoName = (state.name + '.' + name).replace('.', '/');
   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
   *     result[name] = config;
   *   });
   *   return result;
   * });
   *
   * $stateProvider.state('home', {
   *   views: {
   *     'contact.list': { controller: 'ListController' },
   *     'contact.item': { controller: 'ItemController' }
   *   }
   * });
   *
   * // ...
   *
   * $state.go('home');
   * // Auto-populates list and item views with /partials/home/contact/list.html,
   * // and /partials/home/contact/item.html, respectively.
   * </pre>
   *
   * @param {string} name The name of the builder function to decorate. 
   * @param {object} func A function that is responsible for decorating the original 
   * builder function. The function receives two parameters:
   *
   *   - `{object}` - state - The state config object.
   *   - `{object}` - super - The original builder function.
   *
   * @return {object} $stateProvider - $stateProvider instance
   */
  this.decorator = decorator;
  function decorator(name, func) {
    /*jshint validthis: true */
    if (isString(name) && !isDefined(func)) {
      return stateBuilder[name];
    }
    if (!isFunction(func) || !isString(name)) {
      return this;
    }
    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
      stateBuilder.$delegates[name] = stateBuilder[name];
    }
    stateBuilder[name] = func;
    return this;
  }

  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#state
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Registers a state configuration under a given state name. The stateConfig object
   * has the following acceptable properties.
   *
   * <a id='template'></a>
   *
   * - **`template`** - {string|function=} - html template as a string or a function that returns
   *   an html template as a string which should be used by the uiView directives. This property 
   *   takes precedence over templateUrl.
   *   
   *   If `template` is a function, it will be called with the following parameters:
   *
   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
   *     applying the current state
   *
   * <a id='templateUrl'></a>
   *
   * - **`templateUrl`** - {string|function=} - path or function that returns a path to an html 
   *   template that should be used by uiView.
   *   
   *   If `templateUrl` is a function, it will be called with the following parameters:
   *
   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
   *     applying the current state
   *
   * <a id='templateProvider'></a>
   *
   * - **`templateProvider`** - {function=} - Provider function that returns HTML content
   *   string.
   *
   * <a id='controller'></a>
   *
   * - **`controller`** - {string|function=} -  Controller fn that should be associated with newly 
   *   related scope or the name of a registered controller if passed as a string.
   *
   * <a id='controllerProvider'></a>
   *
   * - **`controllerProvider`** - {function=} - Injectable provider function that returns
   *   the actual controller or string.
   *
   * <a id='controllerAs'></a>
   * 
   * - **`controllerAs`** – {string=} – A controller alias name. If present the controller will be 
   *   published to scope under the controllerAs name.
   *
   * <a id='resolve'></a>
   *
   * - **`resolve`** - {object.&lt;string, function&gt;=} - An optional map of dependencies which 
   *   should be injected into the controller. If any of these dependencies are promises, 
   *   the router will wait for them all to be resolved or one to be rejected before the 
   *   controller is instantiated. If all the promises are resolved successfully, the values 
   *   of the resolved promises are injected and $stateChangeSuccess event is fired. If any 
   *   of the promises are rejected the $stateChangeError event is fired. The map object is:
   *   
   *   - key - {string}: name of dependency to be injected into controller
   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
   *     it is injected and return value it treated as dependency. If result is a promise, it is 
   *     resolved before its value is injected into controller.
   *
   * <a id='url'></a>
   *
   * - **`url`** - {string=} - A url with optional parameters. When a state is navigated or
   *   transitioned to, the `$stateParams` service will be populated with any 
   *   parameters that were passed.
   *
   * <a id='params'></a>
   *
   * - **`params`** - {object=} - An array of parameter names or regular expressions. Only 
   *   use this within a state if you are not using url. Otherwise you can specify your
   *   parameters within the url. When a state is navigated or transitioned to, the 
   *   $stateParams service will be populated with any parameters that were passed.
   *
   * <a id='views'></a>
   *
   * - **`views`** - {object=} - Use the views property to set up multiple views or to target views
   *   manually/explicitly.
   *
   * <a id='abstract'></a>
   *
   * - **`abstract`** - {boolean=} - An abstract state will never be directly activated, 
   *   but can provide inherited properties to its common children states.
   *
   * <a id='onEnter'></a>
   *
   * - **`onEnter`** - {object=} - Callback function for when a state is entered. Good way
   *   to trigger an action or dispatch an event, such as opening a dialog.
   *
   * <a id='onExit'></a>
   *
   * - **`onExit`** - {object=} - Callback function for when a state is exited. Good way to
   *   trigger an action or dispatch an event, such as opening a dialog.
   *
   * <a id='reloadOnSearch'></a>
   *
   * - **`reloadOnSearch = true`** - {boolean=} - If `false`, will not retrigger the same state 
   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
   *   Useful for when you'd like to modify $location.search() without triggering a reload.
   *
   * <a id='data'></a>
   *
   * - **`data`** - {object=} - Arbitrary data object, useful for custom configuration.
   *
   * @example
   * <pre>
   * // Some state name examples
   *
   * // stateName can be a single top-level name (must be unique).
   * $stateProvider.state("home", {});
   *
   * // Or it can be a nested state name. This state is a child of the 
   * // above "home" state.
   * $stateProvider.state("home.newest", {});
   *
   * // Nest states as deeply as needed.
   * $stateProvider.state("home.newest.abc.xyz.inception", {});
   *
   * // state() returns $stateProvider, so you can chain state declarations.
   * $stateProvider
   *   .state("home", {})
   *   .state("about", {})
   *   .state("contacts", {});
   * </pre>
   *
   * @param {string} name A unique state name, e.g. "home", "about", "contacts". 
   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
   * @param {object} definition State configuration object.
   */
  this.state = state;
  function state(name, definition) {
    /*jshint validthis: true */
    if (isObject(name)) definition = name;
    else definition.name = name;
    registerState(definition);
    return this;
  }

  /**
   * @ngdoc object
   * @name ui.router.state.$state
   *
   * @requires $rootScope
   * @requires $q
   * @requires ui.router.state.$view
   * @requires $injector
   * @requires ui.router.util.$resolve
   * @requires ui.router.state.$stateParams
   *
   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
   * you'd like to test against the current active state.
   * @property {object} current A reference to the state's config object. However 
   * you passed it in. Useful for accessing custom data.
   * @property {object} transition Currently pending transition. A promise that'll 
   * resolve or reject.
   *
   * @description
   * `$state` service is responsible for representing states as well as transitioning
   * between them. It also provides interfaces to ask for current state or even states
   * you're coming from.
   */
  // $urlRouter is injected just to ensure it gets instantiated
  this.$get = $get;
  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$location', '$urlRouter', '$browser'];
  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $location,   $urlRouter,   $browser) {

    var TransitionSuperseded = $q.reject(new Error('transition superseded'));
    var TransitionPrevented = $q.reject(new Error('transition prevented'));
    var TransitionAborted = $q.reject(new Error('transition aborted'));
    var TransitionFailed = $q.reject(new Error('transition failed'));
    var currentLocation = $location.url();
    var baseHref = $browser.baseHref();

    function syncUrl() {
      if ($location.url() !== currentLocation) {
        $location.url(currentLocation);
        $location.replace();
      }
    }

    root.locals = { resolve: null, globals: { $stateParams: {} } };
    $state = {
      params: {},
      current: root.self,
      $current: root,
      transition: null
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#reload
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method that force reloads the current state. All resolves are re-resolved, events are not re-fired, 
     * and controllers reinstantiated (bug with controllers reinstantiating right now, fixing soon).
     *
     * @example
     * <pre>
     * var app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     $state.reload();
     *   }
     * });
     * </pre>
     *
     * `reload()` is just an alias for:
     * <pre>
     * $state.transitionTo($state.current, $stateParams, { 
     *   reload: true, inherit: false, notify: false 
     * });
     * </pre>
     */
    $state.reload = function reload() {
      $state.transitionTo($state.current, $stateParams, { reload: true, inherit: false, notify: false });
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#go
     * @methodOf ui.router.state.$state
     *
     * @description
     * Convenience method for transitioning to a new state. `$state.go` calls 
     * `$state.transitionTo` internally but automatically sets options to 
     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
     * This allows you to easily use an absolute or relative to path and specify 
     * only the parameters you'd like to update (while letting unspecified parameters 
     * inherit from the currently active ancestor states).
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.go('contact.detail');
     *   };
     * });
     * </pre>
     * <img dev='../ngdoc_assets/StateGoExamples.png'/>
     *
     * @param {string} to Absolute state name or relative state path. Some examples:
     *
     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
     * - `$state.go('^')` - will go to a parent state
     * - `$state.go('^.sibling')` - will go to a sibling state
     * - `$state.go('.child.grandchild')` - will go to grandchild state
     *
     * @param {object=} params A map of the parameters that will be sent to the state, 
     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
     * defined parameters. This allows, for example, going to a sibling state that shares parameters
     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
     * will get you all current parameters, etc.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
     *    use this when you want to force a reload when *everything* is the same, including search params.
     *
     * @returns {promise} A promise representing the state of the new transition.
     *
     * Possible success values:
     *
     * - $state.current
     *
     * <br/>Possible rejection values:
     *
     * - 'transition superseded' - when a newer transition has been started after this one
     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
     *   when a `$stateNotFound` `event.retry` promise errors.
     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
     * - *resolve error* - when an error has occurred with a `resolve`
     *
     */
    $state.go = function go(to, params, options) {
      return this.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#transitionTo
     * @methodOf ui.router.state.$state
     *
     * @description
     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.transitionTo('contact.detail');
     *   };
     * });
     * </pre>
     *
     * @param {string} to State name.
     * @param {object=} toParams A map of the parameters that will be sent to the state,
     * will populate $stateParams.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
     *    use this when you want to force a reload when *everything* is the same, including search params.
     *
     * @returns {promise} A promise representing the state of the new transition. See
     * {@link ui.router.state.$state#methods_go $state.go}.
     */
    $state.transitionTo = function transitionTo(to, toParams, options) {
      toParams = toParams || {};
      options = extend({
        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
      }, options || {});

      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
      var evt, toState = findState(to, options.relative);

      if (!isDefined(toState)) {
        // Broadcast not found event and abort the transition if prevented
        var redirect = { to: to, toParams: toParams, options: options };

        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateNotFound
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when a requested state **cannot be found** using the provided state name during transition.
         * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
         * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
         * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
         * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
         *
         * @param {Object} event Event object.
         * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
         * @param {State} fromState Current state object.
         * @param {Object} fromParams Current state params.
         *
         * @example
         *
         * <pre>
         * // somewhere, assume lazy.state has not been defined
         * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
         *
         * // somewhere else
         * $scope.$on('$stateNotFound',
         * function(event, unfoundState, fromState, fromParams){
         *     console.log(unfoundState.to); // "lazy.state"
         *     console.log(unfoundState.toParams); // {a:1, b:2}
         *     console.log(unfoundState.options); // {inherit:false} + default options
         * })
         * </pre>
         */
        evt = $rootScope.$broadcast('$stateNotFound', redirect, from.self, fromParams);
        if (evt.defaultPrevented) {
          syncUrl();
          return TransitionAborted;
        }

        // Allow the handler to return a promise to defer state lookup retry
        if (evt.retry) {
          if (options.$retry) {
            syncUrl();
            return TransitionFailed;
          }
          var retryTransition = $state.transition = $q.when(evt.retry);
          retryTransition.then(function() {
            if (retryTransition !== $state.transition) return TransitionSuperseded;
            redirect.options.$retry = true;
            return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
          }, function() {
            return TransitionAborted;
          });
          syncUrl();
          return retryTransition;
        }

        // Always retry once if the $stateNotFound was not prevented
        // (handles either redirect changed or state lazy-definition)
        to = redirect.to;
        toParams = redirect.toParams;
        options = redirect.options;
        toState = findState(to, options.relative);
        if (!isDefined(toState)) {
          if (options.relative) throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
          throw new Error("No such state '" + to + "'");
        }
      }
      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
      to = toState;

      var toPath = to.path;

      // Starting from the root of the path, keep all levels that haven't changed
      var keep, state, locals = root.locals, toLocals = [];
      for (keep = 0, state = toPath[keep];
           state && state === fromPath[keep] && equalForKeys(toParams, fromParams, state.ownParams) && !options.reload;
           keep++, state = toPath[keep]) {
        locals = toLocals[keep] = state.locals;
      }

      // If we're going to the same state and all locals are kept, we've got nothing to do.
      // But clear 'transition', as we still want to cancel any other pending transitions.
      // TODO: We may not want to bump 'transition' if we're called from a location change that we've initiated ourselves,
      // because we might accidentally abort a legitimate transition initiated from code?
      if (shouldTriggerReload(to, from, locals, options) ) {
        if ( to.self.reloadOnSearch !== false )
          syncUrl();
        $state.transition = null;
        return $q.when($state.current);
      }

      // Normalize/filter parameters before we pass them to event handlers etc.
      toParams = normalize(to.params, toParams || {});

      // Broadcast start event and cancel the transition if requested
      if (options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeStart
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when the state transition **begins**. You can use `event.preventDefault()`
         * to prevent the transition from happening and then the transition promise will be
         * rejected with a `'transition prevented'` value.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         *
         * @example
         *
         * <pre>
         * $rootScope.$on('$stateChangeStart',
         * function(event, toState, toParams, fromState, fromParams){
         *     event.preventDefault();
         *     // transitionTo() promise will be rejected with
         *     // a 'transition prevented' error
         * })
         * </pre>
         */
        evt = $rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams);
        if (evt.defaultPrevented) {
          syncUrl();
          return TransitionPrevented;
        }
      }

      // Resolve locals for the remaining states, but don't update any global state just
      // yet -- if anything fails to resolve the current state needs to remain untouched.
      // We also set up an inheritance chain for the locals here. This allows the view directive
      // to quickly look up the correct definition for each view in the current state. Even
      // though we create the locals object itself outside resolveState(), it is initially
      // empty and gets filled asynchronously. We need to keep track of the promise for the
      // (fully resolved) current locals, and pass this down the chain.
      var resolved = $q.when(locals);
      for (var l=keep; l<toPath.length; l++, state=toPath[l]) {
        locals = toLocals[l] = inherit(locals);
        resolved = resolveState(state, toParams, state===to, resolved, locals);
      }

      // Once everything is resolved, we are ready to perform the actual transition
      // and return a promise for the new state. We also keep track of what the
      // current promise is, so that we can detect overlapping transitions and
      // keep only the outcome of the last transition.
      var transition = $state.transition = resolved.then(function () {
        var l, entering, exiting;

        if ($state.transition !== transition) return TransitionSuperseded;

        // Exit 'from' states not kept
        for (l=fromPath.length-1; l>=keep; l--) {
          exiting = fromPath[l];
          if (exiting.self.onExit) {
            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
          }
          exiting.locals = null;
        }

        // Enter 'to' states not kept
        for (l=keep; l<toPath.length; l++) {
          entering = toPath[l];
          entering.locals = toLocals[l];
          if (entering.self.onEnter) {
            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
          }
        }

        // Run it again, to catch any transitions in callbacks
        if ($state.transition !== transition) return TransitionSuperseded;

        // Update globals in $state
        $state.$current = to;
        $state.current = to.self;
        $state.params = toParams;
        copy($state.params, $stateParams);
        $state.transition = null;

        // Update $location
        var toNav = to.navigable;
        if (options.location && toNav) {
          $location.url(toNav.url.format(toNav.locals.globals.$stateParams));

          if (options.location === 'replace') {
            $location.replace();
          }
        }

        if (options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeSuccess
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired once the state transition is **complete**.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         */
          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
        }
        currentLocation = $location.url();

        return $state.current;
      }, function (error) {
        if ($state.transition !== transition) return TransitionSuperseded;

        $state.transition = null;
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeError
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when an **error occurs** during transition. It's important to note that if you
         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
         * they will not throw traditionally. You must listen for this $stateChangeError event to
         * catch **ALL** errors.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         * @param {Error} error The resolve error object.
         */
        $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);
        syncUrl();

        return $q.reject(error);
      });

      return transition;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#is
     * @methodOf ui.router.state.$state
     *
     * @description
     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
     * but only checks for the full state name. If params is supplied then it will be 
     * tested for strict equality against the current active params object, so all params 
     * must match with none missing and no extras.
     *
     * @example
     * <pre>
     * $state.is('contact.details.item'); // returns true
     * $state.is(contactDetailItemStateObject); // returns true
     *
     * // everything else would return false
     * </pre>
     *
     * @param {string|object} stateName The state name or state object you'd like to check.
     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like 
     * to test against the current active state.
     * @returns {boolean} Returns true if it is the state.
     */
    $state.is = function is(stateOrName, params) {
      var state = findState(stateOrName);

      if (!isDefined(state)) {
        return undefined;
      }

      if ($state.$current !== state) {
        return false;
      }

      return isDefined(params) && params !== null ? angular.equals($stateParams, params) : true;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#includes
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method to determine if the current active state is equal to or is the child of the 
     * state stateName. If any params are passed then they will be tested for a match as well.
     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
     *
     * @example
     * <pre>
     * $state.$current.name = 'contacts.details.item';
     *
     * $state.includes("contacts"); // returns true
     * $state.includes("contacts.details"); // returns true
     * $state.includes("contacts.details.item"); // returns true
     * $state.includes("contacts.list"); // returns false
     * $state.includes("about"); // returns false
     * </pre>
     *
     * @description
     * Basic globing patterns will also work.
     *
     * @example
     * <pre>
     * $state.$current.name = 'contacts.details.item.url';
     *
     * $state.includes("*.details.*.*"); // returns true
     * $state.includes("*.details.**"); // returns true
     * $state.includes("**.item.**"); // returns true
     * $state.includes("*.details.item.url"); // returns true
     * $state.includes("*.details.*.url"); // returns true
     * $state.includes("*.details.*"); // returns false
     * $state.includes("item.**"); // returns false
     * </pre>
     *
     * @param {string} stateOrName A partial name to be searched for within the current state name.
     * @param {object} params A param object, e.g. `{sectionId: section.id}`, 
     * that you'd like to test against the current active state.
     * @returns {boolean} Returns true if it does include the state
     */

    $state.includes = function includes(stateOrName, params) {
      if (isString(stateOrName) && isGlob(stateOrName)) {
        if (doesStateMatchGlob(stateOrName)) {
          stateOrName = $state.$current.name;
        } else {
          return false;
        }
      }

      var state = findState(stateOrName);
      if (!isDefined(state)) {
        return undefined;
      }

      if (!isDefined($state.$current.includes[state.name])) {
        return false;
      }

      var validParams = true;
      angular.forEach(params, function(value, key) {
        if (!isDefined($stateParams[key]) || $stateParams[key] !== value) {
          validParams = false;
        }
      });
      return validParams;
    };


    /**
     * @ngdoc function
     * @name ui.router.state.$state#href
     * @methodOf ui.router.state.$state
     *
     * @description
     * A url generation method that returns the compiled url for the given state populated with the given params.
     *
     * @example
     * <pre>
     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
     * </pre>
     *
     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
     * @param {object=} params An object of parameter values to fill the state's required parameters.
     * @param {object=} options Options object. The options are:
     *
     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
     *    ancestor with a valid url).
     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
     * 
     * @returns {string} compiled state url
     */
    $state.href = function href(stateOrName, params, options) {
      options = extend({ lossy: true, inherit: false, absolute: false, relative: $state.$current }, options || {});
      var state = findState(stateOrName, options.relative);
      if (!isDefined(state)) return null;

      params = inheritParams($stateParams, params || {}, $state.$current, state);
      var nav = (state && options.lossy) ? state.navigable : state;
      var url = (nav && nav.url) ? nav.url.format(normalize(state.params, params || {})) : null;
      if (!$locationProvider.html5Mode() && url) {
        url = "#" + $locationProvider.hashPrefix() + url;
      }

      if (baseHref !== '/') {
        if ($locationProvider.html5Mode()) {
          url = baseHref.slice(0, -1) + url;
        } else if (options.absolute){
          url = baseHref.slice(1) + url;
        }
      }

      if (options.absolute && url) {
        url = $location.protocol() + '://' + 
              $location.host() + 
              ($location.port() == 80 || $location.port() == 443 ? '' : ':' + $location.port()) + 
              (!$locationProvider.html5Mode() && url ? '/' : '') + 
              url;
      }
      return url;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#get
     * @methodOf ui.router.state.$state
     *
     * @description
     * Returns the state configuration object for any specific state or all states.
     *
     * @param {string|object=} stateOrName If provided, will only get the config for
     * the requested state. If not provided, returns an array of ALL state configs.
     * @returns {object|array} State configuration object or array of all objects.
     */
    $state.get = function (stateOrName, context) {
      if (!isDefined(stateOrName)) {
        var list = [];
        forEach(states, function(state) { list.push(state.self); });
        return list;
      }
      var state = findState(stateOrName, context);
      return (state && state.self) ? state.self : null;
    };

    function resolveState(state, params, paramsAreFiltered, inherited, dst) {
      // Make a restricted $stateParams with only the parameters that apply to this state if
      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
      // we also need $stateParams to be available for any $injector calls we make during the
      // dependency resolution process.
      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params, params);
      var locals = { $stateParams: $stateParams };

      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
      // We're also including $stateParams in this; that way the parameters are restricted
      // to the set that should be visible to the state, and are independent of when we update
      // the global $state and $stateParams values.
      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
      var promises = [ dst.resolve.then(function (globals) {
        dst.globals = globals;
      }) ];
      if (inherited) promises.push(inherited);

      // Resolve template and dependencies for all views.
      forEach(state.views, function (view, name) {
        var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
        injectables.$template = [ function () {
          return $view.load(name, { view: view, locals: locals, params: $stateParams, notify: false }) || '';
        }];

        promises.push($resolve.resolve(injectables, locals, dst.resolve, state).then(function (result) {
          // References to the controller (only instantiated at link time)
          if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
            var injectLocals = angular.extend({}, injectables, locals);
            result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
          } else {
            result.$$controller = view.controller;
          }
          // Provide access to the state itself for internal use
          result.$$state = state;
          result.$$controllerAs = view.controllerAs;
          dst[name] = result;
        }));
      });

      // Wait for all the promises and then return the activation object
      return $q.all(promises).then(function (values) {
        return dst;
      });
    }

    return $state;
  }

  function shouldTriggerReload(to, from, locals, options) {
    if ( to === from && ((locals === from.locals && !options.reload) || (to.self.reloadOnSearch === false)) ) {
      return true;
    }
  }
}

angular.module('ui.router.state')
  .value('$stateParams', {})
  .provider('$state', $StateProvider);


$ViewProvider.$inject = [];
function $ViewProvider() {

  this.$get = $get;
  /**
   * @ngdoc object
   * @name ui.router.state.$view
   *
   * @requires ui.router.util.$templateFactory
   * @requires $rootScope
   *
   * @description
   *
   */
  $get.$inject = ['$rootScope', '$templateFactory'];
  function $get(   $rootScope,   $templateFactory) {
    return {
      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
      /**
       * @ngdoc function
       * @name ui.router.state.$view#load
       * @methodOf ui.router.state.$view
       *
       * @description
       *
       * @param {string} name name
       * @param {object} options option object.
       */
      load: function load(name, options) {
        var result, defaults = {
          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
        };
        options = extend(defaults, options);

        if (options.view) {
          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
        }
        if (result && options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$viewContentLoading
         * @eventOf ui.router.state.$view
         * @eventType broadcast on root scope
         * @description
         *
         * Fired once the view **begins loading**, *before* the DOM is rendered.
         *
         * @param {Object} event Event object.
         * @param {Object} viewConfig The view config properties (template, controller, etc).
         *
         * @example
         *
         * <pre>
         * $scope.$on('$viewContentLoading',
         * function(event, viewConfig){
         *     // Access to all the view config properties.
         *     // and one special property 'targetView'
         *     // viewConfig.targetView
         * });
         * </pre>
         */
          $rootScope.$broadcast('$viewContentLoading', options);
        }
        return result;
      }
    };
  }
}

angular.module('ui.router.state').provider('$view', $ViewProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$uiViewScrollProvider
 *
 * @description
 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
 */
function $ViewScrollProvider() {

  var useAnchorScroll = false;

  /**
   * @ngdoc function
   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
   * @methodOf ui.router.state.$uiViewScrollProvider
   *
   * @description
   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
   * scrolling based on the url anchor.
   */
  this.useAnchorScroll = function () {
    useAnchorScroll = true;
  };

  /**
   * @ngdoc object
   * @name ui.router.state.$uiViewScroll
   *
   * @requires $anchorScroll
   * @requires $timeout
   *
   * @description
   * When called with a jqLite element, it scrolls the element into view (after a
   * `$timeout` so the DOM has time to refresh).
   *
   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
   */
  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
    if (useAnchorScroll) {
      return $anchorScroll;
    }

    return function ($element) {
      $timeout(function () {
        $element[0].scrollIntoView();
      }, 0, false);
    };
  }];
}

angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-view
 *
 * @requires ui.router.state.$state
 * @requires $compile
 * @requires $controller
 * @requires $injector
 * @requires ui.router.state.$uiViewScroll
 * @requires $document
 *
 * @restrict ECA
 *
 * @description
 * The ui-view directive tells $state where to place your templates.
 *
 * @param {string=} ui-view A view name. The name should be unique amongst the other views in the
 * same state. You can have views of the same name that live in different states.
 *
 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
 * scroll ui-view elements into view when they are populated during a state activation.
 *
 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
 *
 * @param {string=} onload Expression to evaluate whenever the view updates.
 * 
 * @example
 * A view can be unnamed or named. 
 * <pre>
 * <!-- Unnamed -->
 * <div ui-view></div> 
 * 
 * <!-- Named -->
 * <div ui-view="viewName"></div>
 * </pre>
 *
 * You can only have one unnamed view within any template (or root html). If you are only using a 
 * single view and it is unnamed then you can populate it like so:
 * <pre>
 * <div ui-view></div> 
 * $stateProvider.state("home", {
 *   template: "<h1>HELLO!</h1>"
 * })
 * </pre>
 * 
 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
 * config property, by name, in this case an empty name:
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }    
 * })
 * </pre>
 * 
 * But typically you'll only use the views property if you name your view or have more than one view 
 * in the same template. There's not really a compelling reason to name a view if its the only one, 
 * but you could if you wanted, like so:
 * <pre>
 * <div ui-view="main"></div>
 * </pre> 
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "main": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }    
 * })
 * </pre>
 * 
 * Really though, you'll use views to set up multiple views:
 * <pre>
 * <div ui-view></div>
 * <div ui-view="chart"></div> 
 * <div ui-view="data"></div> 
 * </pre>
 * 
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "": {
 *       template: "<h1>HELLO!</h1>"
 *     },
 *     "chart": {
 *       template: "<chart_thing/>"
 *     },
 *     "data": {
 *       template: "<data_thing/>"
 *     }
 *   }    
 * })
 * </pre>
 *
 * Examples for `autoscroll`:
 *
 * <pre>
 * <!-- If autoscroll present with no expression,
 *      then scroll ui-view into view -->
 * <ui-view autoscroll/>
 *
 * <!-- If autoscroll present with valid expression,
 *      then scroll ui-view into view if expression evaluates to true -->
 * <ui-view autoscroll='true'/>
 * <ui-view autoscroll='false'/>
 * <ui-view autoscroll='scopeVariable'/>
 * </pre>
 */
$ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll'];
function $ViewDirective(   $state,   $injector,   $uiViewScroll) {

  function getService() {
    return ($injector.has) ? function(service) {
      return $injector.has(service) ? $injector.get(service) : null;
    } : function(service) {
      try {
        return $injector.get(service);
      } catch (e) {
        return null;
      }
    };
  }

  var service = getService(),
      $animator = service('$animator'),
      $animate = service('$animate');

  // Returns a set of DOM manipulation functions based on which Angular version
  // it should use
  function getRenderer(attrs, scope) {
    var statics = function() {
      return {
        enter: function (element, target, cb) { target.after(element); cb(); },
        leave: function (element, cb) { element.remove(); cb(); }
      };
    };

    if ($animate) {
      return {
        enter: function(element, target, cb) { $animate.enter(element, null, target, cb); },
        leave: function(element, cb) { $animate.leave(element, cb); }
      };
    }

    if ($animator) {
      var animate = $animator && $animator(scope, attrs);

      return {
        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
        leave: function(element, cb) { animate.leave(element); cb(); }
      };
    }

    return statics();
  }

  var directive = {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    compile: function (tElement, tAttrs, $transclude) {
      return function (scope, $element, attrs) {
        var previousEl, currentEl, currentScope, latestLocals,
            onloadExp     = attrs.onload || '',
            autoScrollExp = attrs.autoscroll,
            renderer      = getRenderer(attrs, scope);

        scope.$on('$stateChangeSuccess', function() {
          updateView(false);
        });
        scope.$on('$viewContentLoading', function() {
          updateView(false);
        });

        updateView(true);

        function cleanupLastView() {
          if (previousEl) {
            previousEl.remove();
            previousEl = null;
          }

          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }

          if (currentEl) {
            renderer.leave(currentEl, function() {
              previousEl = null;
            });

            previousEl = currentEl;
            currentEl = null;
          }
        }

        function updateView(firstTime) {
          var newScope        = scope.$new(),
              name            = currentEl && currentEl.data('$uiViewName'),
              previousLocals  = name && $state.$current && $state.$current.locals[name];

          if (!firstTime && previousLocals === latestLocals) return; // nothing to do

          var clone = $transclude(newScope, function(clone) {
            renderer.enter(clone, $element, function onUiViewEnter() {
              if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
                $uiViewScroll(clone);
              }
            });
            cleanupLastView();
          });

          latestLocals = $state.$current.locals[clone.data('$uiViewName')];

          currentEl = clone;
          currentScope = newScope;
          /**
           * @ngdoc event
           * @name ui.router.state.directive:ui-view#$viewContentLoaded
           * @eventOf ui.router.state.directive:ui-view
           * @eventType emits on ui-view directive scope
           * @description           *
           * Fired once the view is **loaded**, *after* the DOM is rendered.
           *
           * @param {Object} event Event object.
           */
          currentScope.$emit('$viewContentLoaded');
          currentScope.$eval(onloadExp);
        }
      };
    }
  };

  return directive;
}

$ViewDirectiveFill.$inject = ['$compile', '$controller', '$state'];
function $ViewDirectiveFill ($compile, $controller, $state) {
  return {
    restrict: 'ECA',
    priority: -400,
    compile: function (tElement) {
      var initial = tElement.html();
      return function (scope, $element, attrs) {
        var name      = attrs.uiView || attrs.name || '',
            inherited = $element.inheritedData('$uiView');

        if (name.indexOf('@') < 0) {
          name = name + '@' + (inherited ? inherited.state.name : '');
        }

        $element.data('$uiViewName', name);

        var current = $state.$current,
            locals  = current && current.locals[name];

        if (! locals) {
          return;
        }

        $element.data('$uiView', { name: name, state: locals.$$state });
        $element.html(locals.$template ? locals.$template : initial);

        var link = $compile($element.contents());

        if (locals.$$controller) {
          locals.$scope = scope;
          var controller = $controller(locals.$$controller, locals);
          if (locals.$$controllerAs) {
            scope[locals.$$controllerAs] = controller;
          }
          $element.data('$ngControllerController', controller);
          $element.children().data('$ngControllerController', controller);
        }

        link(scope);
      };
    }
  };
}

angular.module('ui.router.state').directive('uiView', $ViewDirective);
angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

function parseStateRef(ref) {
  var parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
  return { state: parsed[1], paramExpr: parsed[3] || null };
}

function stateContext(el) {
  var stateData = el.parent().inheritedData('$uiView');

  if (stateData && stateData.state && stateData.state.name) {
    return stateData.state;
  }
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref
 *
 * @requires ui.router.state.$state
 * @requires $timeout
 *
 * @restrict A
 *
 * @description
 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated 
 * URL, the directive will automatically generate & update the `href` attribute via 
 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking 
 * the link will trigger a state transition with optional parameters. 
 *
 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be 
 * handled natively by the browser.
 *
 * You can also use relative state paths within ui-sref, just like the relative 
 * paths passed to `$state.go()`. You just need to be aware that the path is relative
 * to the state that the link lives in, in other words the state that loaded the 
 * template containing the link.
 *
 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
 * and `reload`.
 *
 * @example
 * Here's an example of how you'd use ui-sref and how it would compile. If you have the 
 * following template:
 * <pre>
 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a>
 * 
 * <ul>
 *     <li ng-repeat="contact in contacts">
 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
 *     </li>
 * </ul>
 * </pre>
 * 
 * Then the compiled html would be (assuming Html5Mode is off):
 * <pre>
 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a>
 * 
 * <ul>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
 *     </li>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
 *     </li>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
 *     </li>
 * </ul>
 *
 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
 * </pre>
 *
 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#go $state.go()}
 */
$StateRefDirective.$inject = ['$state', '$timeout'];
function $StateRefDirective($state, $timeout) {
  var allowedOptions = ['location', 'inherit', 'reload'];

  return {
    restrict: 'A',
    require: '?^uiSrefActive',
    link: function(scope, element, attrs, uiSrefActive) {
      var ref = parseStateRef(attrs.uiSref);
      var params = null, url = null, base = stateContext(element) || $state.$current;
      var isForm = element[0].nodeName === "FORM";
      var attr = isForm ? "action" : "href", nav = true;

      var options = {
        relative: base
      };
      var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};
      angular.forEach(allowedOptions, function(option) {
        if (option in optionsOverride) {
          options[option] = optionsOverride[option];
        }
      });

      var update = function(newVal) {
        if (newVal) params = newVal;
        if (!nav) return;

        var newHref = $state.href(ref.state, params, options);

        if (uiSrefActive) {
          uiSrefActive.$$setStateInfo(ref.state, params);
        }
        if (!newHref) {
          nav = false;
          return false;
        }
        element[0][attr] = newHref;
      };

      if (ref.paramExpr) {
        scope.$watch(ref.paramExpr, function(newVal, oldVal) {
          if (newVal !== params) update(newVal);
        }, true);
        params = scope.$eval(ref.paramExpr);
      }
      update();

      if (isForm) return;

      element.bind("click", function(e) {
        var button = e.which || e.button;
        if ( !(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target')) ) {
          // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
          $timeout(function() {
            $state.go(ref.state, params, options);
          });
          e.preventDefault();
        }
      });
    }
  };
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref-active
 *
 * @requires ui.router.state.$state
 * @requires ui.router.state.$stateParams
 * @requires $interpolate
 *
 * @restrict A
 *
 * @description
 * A directive working alongside ui-sref to add classes to an element when the 
 * related ui-sref directive's state is active, and removing them when it is inactive.
 * The primary use-case is to simplify the special appearance of navigation menus 
 * relying on `ui-sref`, by having the "active" state's menu button appear different,
 * distinguishing it from the inactive menu items.
 *
 * @example
 * Given the following template:
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item">
 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
 *   </li>
 * </ul>
 * </pre>
 * 
 * When the app state is "app.user", and contains the state parameter "user" with value "bilbobaggins", 
 * the resulting HTML will appear as (note the 'active' class):
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item active">
 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
 *   </li>
 * </ul>
 * </pre>
 * 
 * The class name is interpolated **once** during the directives link time (any further changes to the 
 * interpolated value are ignored). 
 * 
 * Multiple classes may be specified in a space-separated format:
 * <pre>
 * <ul>
 *   <li ui-sref-active='class1 class2 class3'>
 *     <a ui-sref="app.user">link</a>
 *   </li>
 * </ul>
 * </pre>
 */
$StateActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
function $StateActiveDirective($state, $stateParams, $interpolate) {
  return {
    restrict: "A",
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
      var state, params, activeClass;

      // There probably isn't much point in $observing this
      activeClass = $interpolate($attrs.uiSrefActive || '', false)($scope);

      // Allow uiSref to communicate with uiSrefActive
      this.$$setStateInfo = function(newState, newParams) {
        state = $state.get(newState, stateContext($element));
        params = newParams;
        update();
      };

      $scope.$on('$stateChangeSuccess', update);

      // Update route state
      function update() {
        if ($state.$current.self === state && matchesParams()) {
          $element.addClass(activeClass);
        } else {
          $element.removeClass(activeClass);
        }
      }

      function matchesParams() {
        return !params || equalForKeys(params, $stateParams);
      }
    }]
  };
}

angular.module('ui.router.state')
  .directive('uiSref', $StateRefDirective)
  .directive('uiSrefActive', $StateActiveDirective);

/**
 * @ngdoc filter
 * @name ui.router.state.filter:isState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
 */
$IsStateFilter.$inject = ['$state'];
function $IsStateFilter($state) {
  return function(state) {
    return $state.is(state);
  };
}

/**
 * @ngdoc filter
 * @name ui.router.state.filter:includedByState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
 */
$IncludedByStateFilter.$inject = ['$state'];
function $IncludedByStateFilter($state) {
  return function(state) {
    return $state.includes(state);
  };
}

angular.module('ui.router.state')
  .filter('isState', $IsStateFilter)
  .filter('includedByState', $IncludedByStateFilter);

/*
 * @ngdoc object
 * @name ui.router.compat.$routeProvider
 *
 * @requires ui.router.state.$stateProvider
 * @requires ui.router.router.$urlRouterProvider
 *
 * @description
 * `$routeProvider` of the `ui.router.compat` module overwrites the existing
 * `routeProvider` from the core. This is done to provide compatibility between
 * the UI Router and the core router.
 *
 * It also provides a `when()` method to register routes that map to certain urls.
 * Behind the scenes it actually delegates either to 
 * {@link ui.router.router.$urlRouterProvider $urlRouterProvider} or to the 
 * {@link ui.router.state.$stateProvider $stateProvider} to postprocess the given 
 * router definition object.
 */
$RouteProvider.$inject = ['$stateProvider', '$urlRouterProvider'];
function $RouteProvider(  $stateProvider,    $urlRouterProvider) {

  var routes = [];

  onEnterRoute.$inject = ['$$state'];
  function onEnterRoute(   $$state) {
    /*jshint validthis: true */
    this.locals = $$state.locals.globals;
    this.params = this.locals.$stateParams;
  }

  function onExitRoute() {
    /*jshint validthis: true */
    this.locals = null;
    this.params = null;
  }

  this.when = when;
  /*
   * @ngdoc function
   * @name ui.router.compat.$routeProvider#when
   * @methodOf ui.router.compat.$routeProvider
   *
   * @description
   * Registers a route with a given route definition object. The route definition
   * object has the same interface the angular core route definition object has.
   * 
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.compat']);
   *
   * app.config(function ($routeProvider) {
   *   $routeProvider.when('home', {
   *     controller: function () { ... },
   *     templateUrl: 'path/to/template'
   *   });
   * });
   * </pre>
   *
   * @param {string} url URL as string
   * @param {object} route Route definition object
   *
   * @return {object} $routeProvider - $routeProvider instance
   */
  function when(url, route) {
    /*jshint validthis: true */
    if (route.redirectTo != null) {
      // Redirect, configure directly on $urlRouterProvider
      var redirect = route.redirectTo, handler;
      if (isString(redirect)) {
        handler = redirect; // leave $urlRouterProvider to handle
      } else if (isFunction(redirect)) {
        // Adapt to $urlRouterProvider API
        handler = function (params, $location) {
          return redirect(params, $location.path(), $location.search());
        };
      } else {
        throw new Error("Invalid 'redirectTo' in when()");
      }
      $urlRouterProvider.when(url, handler);
    } else {
      // Regular route, configure as state
      $stateProvider.state(inherit(route, {
        parent: null,
        name: 'route:' + encodeURIComponent(url),
        url: url,
        onEnter: onEnterRoute,
        onExit: onExitRoute
      }));
    }
    routes.push(route);
    return this;
  }

  /*
   * @ngdoc object
   * @name ui.router.compat.$route
   *
   * @requires ui.router.state.$state
   * @requires $rootScope
   * @requires $routeParams
   *
   * @property {object} routes - Array of registered routes.
   * @property {object} params - Current route params as object.
   * @property {string} current - Name of the current route.
   *
   * @description
   * The `$route` service provides interfaces to access defined routes. It also let's
   * you access route params through `$routeParams` service, so you have fully
   * control over all the stuff you would actually get from angular's core `$route`
   * service.
   */
  this.$get = $get;
  $get.$inject = ['$state', '$rootScope', '$routeParams'];
  function $get(   $state,   $rootScope,   $routeParams) {

    var $route = {
      routes: routes,
      params: $routeParams,
      current: undefined
    };

    function stateAsRoute(state) {
      return (state.name !== '') ? state : undefined;
    }

    $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
      $rootScope.$broadcast('$routeChangeStart', stateAsRoute(to), stateAsRoute(from));
    });

    $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
      $route.current = stateAsRoute(to);
      $rootScope.$broadcast('$routeChangeSuccess', stateAsRoute(to), stateAsRoute(from));
      copy(toParams, $route.params);
    });

    $rootScope.$on('$stateChangeError', function (ev, to, toParams, from, fromParams, error) {
      $rootScope.$broadcast('$routeChangeError', stateAsRoute(to), stateAsRoute(from), error);
    });

    return $route;
  }
}

angular.module('ui.router.compat')
  .provider('$route', $RouteProvider)
  .directive('ngView', $ViewDirective);
})(window, window.angular);


  var routerAppSer = angular.module('routerServices',[]);
    routerAppSer.factory('testService' , function(){
        var data = {};
        data.a = 10;
        data.b = 'asas';
        return data;
    });

// 创建一个公共的服务
    routerAppSer.factory('AllUserInfosFactory' , function(){
        var userInfo = ['张三' , '李四' , '王五' , '赵六'];
        var factory = {};
        factory.userInfo = userInfo;
        return  factory;
    });
// 创建一个公共服务，存储修改过的用户
    routerAppSer.factory('saveUserEditedInfo' , function(){
        var provide = {};
        provide.editedInfo = '';
        return provide;
    });

// 学生的具体信息
    routerAppSer.factory('allStudentsInfo' , function(){
        var allStudents = {};
        allStudents.info = [ // 学生信息
            {'name':'刘天华','no':'2016210301','className':'高三(1)班','teacher':'吴老师','sex':'男','birthday':'1999.02.03','nativePlace':'上海-徐汇','index':'0',
                'tel' : '13952524141','totalScore':'570','classType':'1','avatar':'http://p.3761.com/pic/99751429577705.jpg'},
            {'name':'李八折','no':'2016520303','className':'高三(3)班','teacher':'薛老师','sex':'男','birthday':'1998.11.13','nativePlace':'北京-朝阳','index':'1',
                'tel' : '13735241577','totalScore':'522','classType':'3','avatar':'http://www.ld12.com/upimg358/20160130/144305263177296.jpg'},
            {'name':'张四风','no':'2016540304','className':'高三(4)班','teacher':'孔老师','sex':'女','birthday':'1999.05.26','nativePlace':'河北-秦皇岛','index':'2',
                'tel' : '13863527888','totalScore':'420','classType':'4','avatar':'http://www.ld12.com/upimg358/allimg/c150729/143Q5R552Y0-234603.jpg'},
            {'name':'王浩浩','no':'2016650301','className':'高三(1)班','teacher':'吴老师','sex':'男','birthday':'2000.01.03','nativePlace':'山东-济宁','index':'3',
                'tel' : '12865244412','totalScore':'468','classType':'1','avatar':'http://www.qq1234.org/uploads/allimg/150728/8_150728144315_9.jpg'},
            {'name':'王麻子','no':'2016540302','className':'高三(2)班','teacher':'刘老师','sex':'女','birthday':'1998.12.16','nativePlace':'山西-太原','index':'4',
                'tel' : '13854157474','totalScore':'340','classType':'2','avatar':'http://img4q.duitang.com/uploads/item/201501/24/20150124174550_3erfQ.png'},
            {'name':'张明明','no':'2016740302','className':'高三(2)班','teacher':'刘老师','sex':'女','birthday':'1999.05.18','nativePlace':'河南-郑州','index':'5',
                'tel' : '13765235454','totalScore':'586','classType':'2','avatar':'http://www.qqleju.com/uploads/allimg/141022/22-032936_250.jpg'},
            {'name':'赵晨晨','no':'2016770303','className':'高三(3)班','teacher':'薛老师','sex':'女','birthday':'1998.10.08','nativePlace':'湖北-荆州','index':'6',
                'tel' : '15252401745','totalScore':'473','classType':'3','avatar':'http://img1.3lian.com/gif/more/11/201207/d265a2ff997c4e4057681d4d0c14b6dc.jpg'},
            {'name':'张洁洁','no':'2016690301','className':'高三(1)班','teacher':'吴老师','sex':'女','birthday':'1999.03.16','nativePlace':'福建-福州','index':'7',
                'tel' : '13565254881','totalScore':'361','classType':'1','avatar':'http://www.ld12.com/upimg358/allimg/c150729/143Q5R555PZ-243100.jpg'}
        ];
        allStudents.classInfo = [ // 班级信息
            {'name' : '高三(1)班','teacher':'吴老师','subject':'文科','classType':'1'},
            {'name' : '高三(2)班','teacher':'刘老师','subject':'理科','classType':'2'},
            {'name' : '高三(3)班','teacher':'薛老师','subject':'理科','classType':'3'},
            {'name' : '高三(4)班','teacher':'孔老师','subject':'理科','classType':'4'}
        ];
        return allStudents;
    });

// 通过url获取参数
    routerAppSer.factory('SUBJFac' , function(){
        var SUBJ = {};
        SUBJ.getValueFromUrl = function(name){ // 传参，通过key，范湖value值
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
            var r = window.location.search.substr(1).match(reg);
            if (r!=null) return decodeURI((r[2])); return null;
        };
        SUBJ.hasUnitStr = function(originStr,needStr){ // 传参(原始的str，指定的str)，返回boolean值
            if(originStr.indexOf(needStr) > 0){ // originStr中是否包含needStr
                return true;
            }else{
                return false;
            }
        };
        // 原始长longStr;指定str;index - (0:之前，1:之后)
        SUBJ.getBeforeOrAfterStr = function(longStr,str,index){ // 截取指定字符串前后的字符串
            var str_before = longStr.split(str)[0];
            var str_after = longStr.split(str)[1];
            //alert('前：'+str_before+' - 后：'+str_after);
            if(index == 0){ // 截取str之前的
                return str_before;
            }else{ // 截取str之后的
                return str_after;
            }
        };
        // 导航高亮定位工具方法
        SUBJ.selectTopBarActive = function(index){
            setTimeout(function(){
                $('.common-topbar').removeClass('activeBar');
                $('.topbar-'+index).addClass('activeBar');
            },30);
        };
        // 初始化导航高亮，页面刷新也不会保存当前高亮
        SUBJ.topBarInit = function(){
            var winUrl = window.location.href; // 通过url，判断哪个tab高亮
            if(SUBJ.hasUnitStr(winUrl,'usermng')){ // 是否包含 usermng
                SUBJ.selectTopBarActive(1); // 班级管理
            }else if(SUBJ.hasUnitStr(winUrl,'score') || SUBJ.hasUnitStr(winUrl,'edit')){
                SUBJ.selectTopBarActive(2); // 成绩管理
            }else if(SUBJ.hasUnitStr(winUrl,'signup')){
                SUBJ.selectTopBarActive(3); // 学生注册
            }else if(SUBJ.hasUnitStr(winUrl,'userInfo')){
                SUBJ.selectTopBarActive(4); // 个人中心
            }
        };
        // 编辑/注册学生信息时, 全局计算不同班级老师和学生对应的个数
        SUBJ.countClassTeacherAndStudentsNum = function(allStudentsInfo){ // 参数为控制器中传入的学生factory
            //alert('计算老师对应的学生个数factory');
            var classNameThree1Count = 0; // 累计高三(1)班的人数
            var classNameThree2Count = 0; // 累计高三(2)班的人数
            var classNameThree3Count = 0; // 累计高三(3)班的人数
            var classNameThree4Count = 0; // 累计高三(4)班的人数
            angular.forEach(allStudentsInfo.info, function(data,index,array){
                //data等价于array[index]，即数组内部的每个元素(或对象)
                //console.log(data.name+'='+array[index].name); // 都是相等的
                //console.log(data);
                if(data.className == '高三(1)班'){
                    classNameThree1Count += 1;
                }else if(data.className == '高三(2)班'){
                    classNameThree2Count += 1;
                }else if(data.className == '高三(3)班'){
                    classNameThree3Count += 1;
                }else if(data.className == '高三(4)班'){
                    classNameThree4Count += 1;
                }
                //console.log(arra);
            });
            var classNameStudentCount = []; // 该数组包含4个班级的人数
            classNameStudentCount[0] = classNameThree1Count; // 1班人数
            classNameStudentCount[1] = classNameThree2Count; // 2班人数
            classNameStudentCount[2] = classNameThree3Count; // 3班人数
            classNameStudentCount[3] = classNameThree4Count; // 4班人数
            return classNameStudentCount;
        };
        return SUBJ;
    });


var routerCtrls = angular.module('routerCtrls',['routerServices']);

    //routerCtrls.controller('HomeCtrl' ,['$scope',
    //    function($scope){
    //    $scope.name = '张小北11';
    //    $scope.lists = [
    //        {'name' : 'zhangsan','age':'20'},
    //        {'name' : 'haha','age':'21'},
    //        {'name' : 'hehe','age':'22岁'}
    //    ];
    //}]);
    // 顶层的父控制器
routerCtrls.controller('HomeCtrl' , ['$rootScope','$scope','allStudentsInfo',
   function($rootScope,$scope,allStudentsInfo){
        $rootScope.students = allStudentsInfo.info;
        $rootScope.singleStudentInfo = allStudentsInfo.info[0]; // 默认第1个，点击score页面的“编辑”按钮
        $rootScope.arrIndex; // 全局的数组索引
        $rootScope.classInfos = allStudentsInfo.classInfo; //  与班级管理-全部班级里的数据保持一致
        $rootScope.classDetails = allStudentsInfo.info; // 班级详情信息
        $rootScope.classType = '1'; // 班级类型，代表1~4这四个班
}]);

// 导航topbar
routerCtrls.controller('topbarCtrl' , ['$scope','SUBJFac',
   function($scope,SUBJFac){
    $scope.tobarItems = [
            {'sref' : 'index','text' : '首页'},
            {'sref' : 'index.usermng.allstudents','text' : '班级管理'},
            {'sref' : 'index.score','text' : '成绩管理'},
            {'sref' : 'index.signup','text' : '学生注册'},
            {'sref' : 'index.userInfo','text' : '个人中心'}
        ];
    SUBJFac.topBarInit(); // 初始化导航条高亮，页面刷新也可以保持高亮
    $scope.activeIndex = 0; // 默认第1个"首页"高亮
    $scope.onTopNavClick = function(index){
         $scope.activeIndex = index; // 在html中判断高亮
            SUBJFac.selectTopBarActive(index); // 点击事件判断高亮
        };
}]);

// 班级管理 左侧导航
routerCtrls.controller('UserMngCtrl' ,['$rootScope','$scope','$state','allStudentsInfo',
     function($rootScope,$scope,$state ,allStudentsInfo){
        $scope.currentIndex = 0;
        $scope.uiSrefs = [
                {url : 'allstudents' , word : '全部学生'},
                {url : 'allclass' , word : '全部班级'},
                {url : 'honorlist' , word : '光荣榜(>550)'},
                //{url : 'lowusers' , word : '成绩较差(<400)'},
                {url : 'blacklist' , word : '补考名单(<400)'}
                //{url : 'edit' , word : '编辑'}
        ];
        $scope.setUiSrefClick = function(index){
                $scope.currentIndex = index;
        };
        $scope.addUserType = function() {
                $state.go("index.usermng.addusertype");
        };
        $scope.clickedIndex;
        $scope.currentUserInfo;
            // 点击编辑
        $scope.onEditClick = function(tar){
            $scope.clickedIndex = tar.$index;
            $rootScope.editStudentsInfo = allStudentsInfo.info[$scope.clickedIndex];
            $state.go("index.usermng.detail");
         };
}]);

// 全部用户分类控制器
routerCtrls.controller('allUsersCtrl',['$scope','AllUserInfosFactory',
    function( $scope , AllUserInfosFactory){
        $scope.names = AllUserInfosFactory.userInfo;
}]);

// 全部班级控制器
routerCtrls.controller('classCtrl' , ['$rootScope','$scope','$state','allStudentsInfo','SUBJFac',
        function($rootScope,$scope,$state,allStudentsInfo,SUBJFac){
            var studentNumData = SUBJFac.countClassTeacherAndStudentsNum(allStudentsInfo); // 全局计算不同班级老师和学生对应的个数
            angular.forEach(studentNumData , function(data,index){ // 将计算出的各班人数，赋值给全局变量 $rootScope.classInfos
                $rootScope.classInfos[index].studentNum = data;
            });
        $scope.onClassDetailClick = function(classInfo){ // 点击班级详情
                var index = parseInt(classInfo.classType)-1;
                var studentNum = $rootScope.classInfos[index].studentNum; // 当前班级的人数

                if(studentNum == 0){ // 这个班没人了
                    $.confirm({
                        title: classInfo.name+' 班没人了',
                        //closeIcon: true,
                        //animation: 'rotateXR (reverse)',
                        //closeAnimation: 'scale',
                        icon: 'glyphicon glyphicon-heart',
                        content: '确定还要进去吗?',
                        confirmButtonClass: 'btn-info',
                        cancelButtonClass: 'btn-success',
                        confirmButton: '下一步有惊喜',
                        cancelButton: '取消',
                        cancel: function(){
                            //alert('before the modal is closed 在关闭之前回调');
                            //alert('催发了关闭按钮');
                        },
                        confirm: function () {
                            //alert('确定关闭');
                            $.alert({
                                title : '班级详情',
                                content : '跳转到班级详情页面',
                                confirmButtonClass: 'btn-success',
                                confirmButton: '好的再下一步',
                                onAction: function(){ // 点击确定之后的回调函数
                                    // action is either 'confirm', 'cancel' or 'close'
                                    //setTimeout(function(){
                                    //    $state.go('index.signup');
                                    //},500);
                                    $rootScope.classType = classInfo.classType;
                                    //console.log($rootScope.classDetails);
                                    $state.go('index.usermng.classdetail'); // 跳转到班级详情页面
                                }
                            });
                        }
                    });
                }else{
                    // 点到哪个班级就传哪个班级的type
                    $rootScope.classType = classInfo.classType;
                    $state.go('index.usermng.classdetail'); // 跳转到班级详情页面
                }
        };
}]);

// 班级详情
routerCtrls.controller('classDetailCtrl' , ['$rootScope','$scope','$state','allStudentsInfo',
        function($rootScope,$scope,$state,allStudentsInfo){
            $scope.hasStudent = true; // 刚开始都有学生
            $scope.classLocalInfo = {}; // 局部变量，班级页面的头部信息：班级名和老师名
            var index = Number($rootScope.classType)-1; // 班级数组的索引
            $scope.classLocalInfo.name = allStudentsInfo.classInfo[index].name;
            $scope.classLocalInfo.teacher = allStudentsInfo.classInfo[index].teacher;
            if($rootScope.classInfos[index].studentNum == 0){ // 这个班级详情有0个学生
                $scope.hasStudent = false; // 一个学生都没有了
                $.alert({
                    title: $scope.classLocalInfo.name+' 的悲哀',
                    //closeIcon: true,
                    //animation: 'rotateXR (reverse)',
                    //closeAnimation: 'scale',
                    icon: 'glyphicon glyphicon-heart',
                    content: $scope.classLocalInfo.teacher + ' 你们班木有学生了',
                    confirmButtonClass: 'btn-info',
                    //onClose: function(){
                    //    alert('before the modal is closed 在关闭之前回调');
                    //},
                    confirm: function () {
                        //alert('确定关闭');
                        $.alert({
                            title : $scope.classLocalInfo.name + '和' + $scope.classLocalInfo.teacher + ' 需要你',
                            content : '跳转到学生注册页面',
                            confirmButtonClass: 'btn-success',
                            onAction: function(){ // 点击确定之后的回调函数
                                // action is either 'confirm', 'cancel' or 'close'
                                setTimeout(function(){
                                    $state.go('index.signup');
                                },100);
                            }
                        });
                    }
                });
                //return false;
            }else{ // 存在学生
                $scope.classTypefilter = function(data){ // 根据班级的classType过滤
                    //return data.totalScore > 550; // 分数>500的结果保留
                    //return data.classType = '1'; // classType=1，即1班的学生保留
                    // 承接 classCtrl中变化后的全局 $rootScope.classType
                    if(data.classType == $rootScope.classType){ // 返回改班的学生数据
                        return data
                    }
                };
            }
            $scope.onReturnClassListClick = function(){ // 返回班级列表
                $state.go('index.usermng.allclass');
            };
}]);


// 学生详情页面
routerCtrls.controller('detailUsersCtrl' , ['$rootScope','$scope','$state','allStudentsInfo','SUBJFac',
        function($rootScope , $scope , $state , allStudentsInfo,SUBJFac){
            if($rootScope.editStudentsInfo == 'undefined' || $rootScope.editStudentsInfo == null){
                $rootScope.editStudentsInfo = allStudentsInfo.info[0];
            }
            // 返回上一页 全部学生列表
            $scope.onReturnBackClick = function(){
                $state.go('index.usermng.allstudents');
            };
            // 返回 学生注册
            $scope.onReturnSignUpClick = function(){
                $state.go('index.signup');
                SUBJFac.selectTopBarActive(3);// 学生注册 topbar-3
            };
}]);


// 光荣榜
routerCtrls.controller('honorCtrl' , ['$scope','allStudentsInfo',function($scope,allStudentsInfo){
    $scope.honorFilter = function(data){ // 过滤器
         return data.totalScore > 550; // 分数>500的结果保留
    };
}]);

// 补考名单
routerCtrls.controller('blackCtrl' , ['$scope',function($scope){
    $scope.blackFilter = function(data){ // 过滤器
            return data.totalScore < 400; // 分数<400的结果保留
    }
}]);

// 成绩管理
routerCtrls.controller('scoreCtrl' , ['$rootScope','$scope','$state','allStudentsInfo','SUBJFac',
    function($rootScope,$scope,$state,allStudentsInfo,SUBJFac){
            // 此链接ng鼠标移入/移出事件的下拉框： http://plnkr.co/edit/Ro80nR7HT7OGGPCXjz7E?p=preview
            // jq+bootstrap弹窗 ： http://www.html580.com/12067/demo

            $scope.word = '高->低 降序';
            $scope.flag = true;
            $scope.colName = 'name';//默认按name列排序
            $scope.birthDay = 'birthday';//默认按name列排序
            $scope.desc = 1;//默认排序条件 0-升序,1-降序
            $scope.scoreOrder = 'totalScore'; // 按分数排
            $scope.onOrderCheckClick = function(){ // 排序
                $scope.flag = !$scope.flag;
                //$scope.word =$scope.flag ? '高->低' : '低->高';
                if($scope.flag){
                    $scope.word = '高->低 降序';
                    $scope.desc = 1;
                }else{
                    $scope.word = '低->高 升序';
                    $scope.desc = 0;
                }
            };
            $scope.onEditClick = function(student,index){ // 点击进入编辑页面
                var studentIndex = student.index;
                $rootScope.arrIndex = index; // 全局的数组索引
                $rootScope.singleStudentInfo = allStudentsInfo.info[$rootScope.arrIndex];
                $state.go('index.edit');
            };
            //$('.popover-hide').popover('hide'); // bootstrap鼠标悬浮提示框
}]);


// 编辑
routerCtrls.controller('editCtrl' , ['$rootScope','$scope','$state','allStudentsInfo','SUBJFac',
        function($rootScope,$scope,$state,allStudentsInfo,SUBJFac){
            $('.popover-hide').popover('hide'); // tip鼠标悬浮提示
            if($rootScope.arrIndex==null || $rootScope.arrIndex == 'undefined'){
                $rootScope.arrIndex = 0;
            }
            $scope.editInfo = {}; // 编辑页面局部信息
            $scope.editInfo.score = allStudentsInfo.info[$rootScope.arrIndex].totalScore;
            $scope.editInfo.name = allStudentsInfo.info[$rootScope.arrIndex].name;
            $scope.editInfo.no = allStudentsInfo.info[$rootScope.arrIndex].no;
            $scope.editInfo.className = allStudentsInfo.info[$rootScope.arrIndex].className;

            $scope.classes = [
                {'className' : '高三(1)班','teacher' : '吴老师'},
                {'className' : '高三(2)班','teacher' : '刘老师'},
                {'className' : '高三(3)班','teacher' : '薛老师'},
                {'className' : '高三(4)班','teacher' : '孔老师'}
            ];
            $scope.editInfo.selectedClass;
            $scope.editInfo.birthday = allStudentsInfo.info[$rootScope.arrIndex].birthday;
            $scope.editInfo.nativePlace = allStudentsInfo.info[$rootScope.arrIndex].nativePlace;
            $scope.editInfo.tel = allStudentsInfo.info[$rootScope.arrIndex].tel;

            $scope.isShowInitClass = true; // 第一次显示初始班级
            $scope.onChangeClassOption = function(){ // 点击下拉框的交互
                $scope.isShowInitClass = false; // change事件后，班级改变
            };
            $scope.selectClassNameTeacherType = function(){ // 班级-老师-classType保持对应
                var myNewClassName; // 学生新的班级
                var myNewClassTeacher; // 学生新班级对应的新老师
                var myNewClassType; // 学生新班级的classType
                if($scope.isShowInitClass){ // 初始化班级
                    myNewClassName = allStudentsInfo.info[$rootScope.arrIndex].className; // 初始班级和老师都不变
                    myNewClassTeacher = allStudentsInfo.info[$rootScope.arrIndex].teacher;
                    myNewClassType = allStudentsInfo.info[$rootScope.arrIndex].classType;
                }else{ // change后的班级
                    myNewClassName = $scope.editInfo.selectedClass; // 新的班级和对应的新老师
                    if(myNewClassName == '高三(1)班'){ myNewClassTeacher = '吴老师'; myNewClassType = '1';}
                    if(myNewClassName == '高三(2)班'){ myNewClassTeacher = '刘老师'; myNewClassType = '2';}
                    if(myNewClassName == '高三(3)班'){ myNewClassTeacher = '薛老师'; myNewClassType = '3';}
                    if(myNewClassName == '高三(4)班'){ myNewClassTeacher = '孔老师'; myNewClassType = '4';}
                }
                $rootScope.singleStudentInfo.className = myNewClassName;
                $rootScope.singleStudentInfo.classType = myNewClassType;
                $rootScope.singleStudentInfo.teacher = myNewClassTeacher;
            };

            $scope.onScoreBlur = function(){
                //alert('$scope.editInfo.score : ' + $scope.editInfo.score);
                if($scope.editInfo.score > 750 || $scope.editInfo.score < 0){
                    $.alert({
                        title: '你输入的 ' + $scope.editInfo.score + ' 分不正确',
                        //closeIcon: true,
                        //animation: 'rotateXR (reverse)',
                        //closeAnimation: 'scale',
                        icon: 'glyphicon glyphicon-heart',
                        content: '分数必须在[0,750]之间',
                        confirmButtonClass: 'btn-info',
                        //onClose: function(){
                        //    alert('before the modal is closed 在关闭之前回调');
                        //},
                        confirm: function () {
                            //alert('确定关闭');
                            $('.js_score_edit').focus();
                        }
                    });
                    return false;
                }
            };

            $scope.onSubmitInfoClick = function(){ // 保存之前的修改

                $rootScope.singleStudentInfo.totalScore = $scope.editInfo.score;
                $rootScope.singleStudentInfo.name = $scope.editInfo.name;
                $rootScope.singleStudentInfo.no = $scope.editInfo.no;
                $rootScope.singleStudentInfo.birthday = $scope.editInfo.birthday;
                $rootScope.singleStudentInfo.nativePlace = $scope.editInfo.nativePlace;
                $rootScope.singleStudentInfo.tel = $scope.editInfo.tel;
                $scope.selectClassNameTeacherType();

                var studentNumData = SUBJFac.countClassTeacherAndStudentsNum(allStudentsInfo); // 全局计算不同班级老师和学生对应的个数
                angular.forEach(studentNumData , function(data,index){ // 将计算出的各班人数，赋值给全局变量 $rootScope.classInfos
                    $rootScope.classInfos[index].studentNum = data;
                });

                $.alert({
                    title: $scope.editInfo.name,
                    //closeIcon: true,
                    //animation: 'rotateXR (reverse)',
                    //closeAnimation: 'scale',
                    icon: 'glyphicon glyphicon-heart',
                    content: '信息修改成功!',
                    confirmButtonClass: 'btn-info',
                    //onClose: function(){
                    //    alert('before the modal is closed 在关闭之前回调');
                    //},
                    //confirm: function () {
                    //    //alert('确定关闭');
                    //}
                    onAction: function(){ // 点击确定之后的回调函数
                        // action is either 'confirm', 'cancel' or 'close'
                        setTimeout(function(){
                            //alert(' was clicked 关闭之后回调 跳转到成绩管理页面');
                        },500);
                    }
                });
            };

            $scope.hasDeleted = false; // 是否已经删除了当前信息

            $scope.onResetInfoClick = function(){ // 清空之前的修改
                $scope.editInfo.score = allStudentsInfo.info[$rootScope.arrIndex].totalScore;
                $scope.editInfo.name = allStudentsInfo.info[$rootScope.arrIndex].name;
                $scope.editInfo.no = allStudentsInfo.info[$rootScope.arrIndex].no;
                $scope.editInfo.birthday = allStudentsInfo.info[$rootScope.arrIndex].birthday;
                $scope.editInfo.nativePlace = allStudentsInfo.info[$rootScope.arrIndex].nativePlace;
                $scope.editInfo.tel = allStudentsInfo.info[$rootScope.arrIndex].tel;
                $scope.editInfo.selectedClass = allStudentsInfo.info[$rootScope.arrIndex].className; // 回到初始班级
                $scope.editInfo.teacher = allStudentsInfo.info[$rootScope.arrIndex].teacher; // 回到初始化班级
                $.alert({
                    //title: false,
                    title: '已恢复到上一级修改的状态',
                    confirmButtonClass: 'btn-success',
                    //content: '信息修改成功!',
                    content: false,
                    animationBounce: 1.5 // default is 1.2 whereas 1 is no bounce.
                });
            };
            $scope.onReturnScoreClick = function(){ // 返回成绩管理页面
                $state.go('index.score');
            };

            var count = 0;
            $scope.onDeleteInfoClick = function(){ // 删除当前信息
                // 点击删除后，重置/保存 按钮为禁用
                $scope.hasDeleted = true;
                count += 1;
                if(count == 1){
                    var name = allStudentsInfo.info[$rootScope.arrIndex].name;
                    // 删除点击的 第 index个索引的那个元素
                    allStudentsInfo.info.splice($rootScope.arrIndex, 1);
                    // 每次删除一个元素后，更新全局的学生数组
                    $rootScope.students = allStudentsInfo.info;
                    $.alert({
                        title: '删除提示',
                        confirmButtonClass: 'btn-success',
                        content: name + ' 已成功删除!',
                        //content: false,
                        animationBounce: 1.5, // default is 1.2 whereas 1 is no bounce.
                        onAction: function(action){
                            // action is either 'confirm', 'cancel' or 'close'
                            var imgObj = "<div class='col-md-12'>" +
                                "<img src='http://pic.uuhy.com/uploads/2011/08/01/github.jpg' style='width: 100%' />" +
                                "</div>";
                            //$('.js_edit_wrap_top').append(imgObj);
                            $('.js_edit_wrap_top').html(imgObj);
                            $('.button-wrap').before("<br/><br/><br/><br/>")
                        }
                    });
                }else{
                    $.alert({
                        title: '重复删除，无效',
                        //title: '已恢复到上一级修改的状态',
                        confirmButtonClass: 'btn-success',
                        content: '该用户已删除不能再删，返回成绩管理',
                        //content: false,
                        animationBounce: 1.5, // default is 1.2 whereas 1 is no bounce.
                        onAction: function(action){
                            // action is either 'confirm', 'cancel' or 'close'
                            setTimeout(function(){
                                $state.go('index.score');
                            },100);
                        }
                    });
                }
            };
}]);



// 学生注册
routerCtrls.controller('signupCtrl' , ['$rootScope','$scope','$state','allStudentsInfo','SUBJFac',
        function($rootScope,$scope,$state,allStudentsInfo,SUBJFac){
            // 链接 http://www.tuicool.com/articles/2Qbiqi
            // 链接 http://www.cnblogs.com/rohelm/p/4033513.html
            $scope.signUpInfo = {}; // 新注册的用户信息对象
            $scope.signUpInfo.totalScore = '';
            $scope.signUpInfo.name = '';
            $scope.signUpInfo.sex = '男'; // 性别radio单选框，默认为man
            $scope.signUpInfo.no = ''; // 学号
            $scope.signUpInfo.className = '高三(1)班'; // 班级
            $scope.signUpInfo.teacher; // 班级对应的老师
            $scope.signUpInfo.birthday = ''; // 生日
            $scope.signUpInfo.nativePlace = ''; // 籍贯
            $scope.signUpInfo.tel = ''; // 电话
            $scope.signUpInfo.classType; // 班级类型-1/2/3/4班
            $scope.signUpInfo.index = '2'; // 通过数组长度计算
            // 默认头像
            $scope.signUpInfo.avatar = 'http://www.qq1234.org/uploads/allimg/150113/1AI02408-17.jpg';

            $scope.selectClassTypeAndTeacher = function(){ // 选择学生的班级和对应老师
                if($scope.signUpInfo.className == '高三(1)班'){
                    $scope.signUpInfo.teacher = '吴老师';
                    $scope.signUpInfo.classType = '1';
                }else if($scope.signUpInfo.className == '高三(2)班'){
                    $scope.signUpInfo.teacher = '刘老师';
                    $scope.signUpInfo.classType = '2';
                }else if($scope.signUpInfo.className == '高三(3)班'){
                    $scope.signUpInfo.teacher = '薛老师';
                    $scope.signUpInfo.classType = '3';
                }else{
                    $scope.signUpInfo.teacher = '孔老师';
                    $scope.signUpInfo.classType = '4';
                }
            };


            $scope.isShowBar = false; // 是否显示进度条
            $scope.scoreAlertFn = function(strTip,callBack){ // 清空分数inp，并获取焦点
                $.alert({
                    title: strTip.title,
                    //title: '已恢复到上一级修改的状态',
                    confirmButtonClass: 'btn-success',
                    content: strTip.content,
                    //content: false,
                    animationBounce: 1.5, // default is 1.2 whereas 1 is no bounce.
                    onAction: function(action){ // 点击确定之后的回调
                        // action is either 'confirm', 'cancel' or 'close'
                        if(callBack && callBack != null){
                            callBack();
                        }
                    }
                });
            };

            // 点击提交注册信息
            $scope.saveFormClick = function(){
                var strTip = {};
                if($scope.signUpInfo.totalScore == ''){
                    strTip.title = '1. 分数';
                    strTip.content = '请填写分数';
                    $scope.scoreAlertFn(strTip);
                }else if($scope.signUpInfo.name == ''){
                    strTip.title = '2. 姓名';
                    strTip.content = '请填写姓名';
                    $scope.scoreAlertFn(strTip);
                }else if($scope.signUpInfo.no == ''){
                    strTip.title = '4. 学号';
                    strTip.content = '请填写学号';
                    $scope.scoreAlertFn(strTip);
                }else if($scope.signUpInfo.birthday == ''){
                    strTip.title = '5. 生日';
                    strTip.content = '请填写生日';
                    $scope.scoreAlertFn(strTip);
                }else if($scope.signUpInfo.nativePlace == ''){
                    strTip.title = '6. 籍贯';
                    strTip.content = '请填写籍贯';
                    $scope.scoreAlertFn(strTip);
                }else if($scope.signUpInfo.tel == ''){
                    strTip.title = '7. 电话';
                    strTip.content = '请填写电话';
                    $scope.scoreAlertFn(strTip);
                }else{ // 注册成功
                    $scope.selectClassTypeAndTeacher(); // 提交时，选中老师名字和对应的班级类型
                    $scope.isShowBar = !$scope.isShowBar; // 出现进度条
                    allStudentsInfo.info.push($scope.signUpInfo); // 将新用户追加到原来的数组最后

                    // 全局计算不同班级老师和学生对应的个数
                    var studentNumData = SUBJFac.countClassTeacherAndStudentsNum(allStudentsInfo);
                    angular.forEach(studentNumData , function(data,index){ // 将计算出的各班人数，赋值给全局变量 $rootScope.classInfos
                        $rootScope.classInfos[index].studentNum = data;
                    });
                    $scope.alertProgressBarSuccessBackFn = function(){
                        $.alert({
                            title: $scope.signUpInfo.name + ' 成功注册',
                            //title: '已恢复到上一级修改的状态',
                            confirmButtonClass: 'btn-success',
                            content: '该用户已经成功注册',
                            //content: false,
                            animationBounce: 1.5, // default is 1.2 whereas 1 is no bounce.
                            confirm: function(){
                                //alert('更换成功注册之后的相亲视图');
                                $scope.isShowBar = !$scope.isShowBar; // 隐藏进度条
                                $.alert({
                                    title: '跳转页面',
                                    //title: '已恢复到上一级修改的状态',
                                    confirmButtonClass: 'btn-info',
                                    content: '进入学生详情页面',
                                    //content: false,
                                    animationBounce: 1.5,
                                    onAction: function(action){ // 点击确定之后的回调，跳转到学生详情
                                        setTimeout(function(){
                                            if($rootScope.editStudentsInfo == 'undefined' || $rootScope.editStudentsInfo == null){
                                                $rootScope.editStudentsInfo = allStudentsInfo.info[allStudentsInfo.info.length-1];
                                            }
                                            $state.go('index.usermng.detail'); // 学生详情
                                            SUBJFac.selectTopBarActive(1);// 班级管理 topbar-1
                                        },50);
                                    }
                                });
                            }
                        });
                    };
                    var progressLen = 20;
                    var timer = setInterval(function(){
                        progressLen += 30;
                        $('.js_bar_len').css({
                            'width' : progressLen + '%'
                        });
                        if(progressLen >= 100){ // 进度条到达100%，
                            clearInterval(timer);
                            setTimeout(function(){
                                $scope.alertProgressBarSuccessBackFn(); // 回调弹窗视图的逻辑
                            },1100);
                        }
                    },100);
                }
            };

            // 分数输入框失去焦点
            $scope.onBlurScore = function(){
                $scope.callBackFn = function(){
                    setTimeout(function(){
                        $scope.signUpInfo.totalScore = '';
                        $('.js_score_inp').focus();
                    },100);
                };
                var strTip = {};
                if($scope.signUpInfo.totalScore == ''){
                    strTip.title = '分数tip1';
                    strTip.content = '并没有输入分数，请重输';
                    $scope.scoreAlertFn(strTip,$scope.callBackFn);
                }else if($scope.signUpInfo.totalScore < 0){
                    strTip.title = '分数tip2';
                    strTip.content = '分数小于0分，重修';
                    $scope.scoreAlertFn(strTip,$scope.callBackFn);
                }else if($scope.signUpInfo.totalScore > 750){
                    strTip.title = '分数tip3';
                    strTip.content = '超过满分750了，你可以上常青藤，不科学';
                    $scope.scoreAlertFn(strTip,$scope.callBackFn);
                }
            };

            // 返回成绩列表
            $scope.returnScoreListClick = function(){
                $state.go('index.score');
                SUBJFac.selectTopBarActive(2); // 成绩管理 topbar-2
            };
            // 返回班级列表
            $scope.returnClassListClick = function(){
                $state.go('index.usermng.allstudents');
                SUBJFac.selectTopBarActive(1);// 班级管理 topbar-1
            };

}]);
/**
 * Created by Administrator on 2016/6/17.
 */

$(function(){
 console.log('方法2：gulp+angular压缩打包合并');
 var routerApp = angular.module('AppModule1', ['ui.router','routerCtrls','routerServices']);

    routerApp.config(['$stateProvider','$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/index');
            $stateProvider
                .state('index', {
                    url: '/index',
                    views: {
                        '': {
                            templateUrl: 'tpls/index.html'
                        },
                        'topbar@index': { // index路由下对应的topbar ui-view
                            templateUrl: 'tpls/topbar.html',
                            controller : 'topbarCtrl'
                        },
                        'home@index': { // index路由下对应的main ui-view
                            templateUrl: 'tpls/home.html'
                        }
                    }
                })
                .state('index.usermng', {
                    url: '/usermng',
                    views: {
                        'home@index': {
                            templateUrl: 'tpls/usermng.html',
                            controller : 'UserMngCtrl'
                        }
                    }
                })
                // 全部学生
                .state('index.usermng.allstudents', {
                    url: '/allstudents',
                    templateUrl: 'tpls/allstudents.html',
                    controller : 'allUsersCtrl'
                })
                // 学生详情页面
                .state('index.usermng.detail', {
                    url: '/detail',
                    templateUrl: 'tpls/detail.html',
                    controller : 'detailUsersCtrl'
                })
                // 全部班级
                .state('index.usermng.allclass',{
                    url : '/allclass',
                    templateUrl : 'tpls/allclass.html',
                    controller : 'classCtrl'
                })
                // 班级详情
                .state('index.usermng.classdetail',{
                    url : '/classdetail',
                    templateUrl : 'tpls/classdetail.html',
                    controller : 'classDetailCtrl'
                })
                // 光荣榜
                .state('index.usermng.honorlist',{
                    url : '/honorlist',
                    templateUrl : 'tpls/honorlist.html',
                    controller : 'honorCtrl'
                })
                // 补考名单
                .state('index.usermng.blacklist',{
                    url : '/blacklist',
                    templateUrl : 'tpls/blacklist.html',
                    controller : 'blackCtrl'
                })
                // 成绩管理
                .state('index.score',{
                    url : '/score',
                    views : {
                        'home@index' : {
                            templateUrl : 'tpls/score.html',
                            controller : 'scoreCtrl'
                        }
                    }
                })
                // 编辑页面
                .state('index.edit',{
                    url: '/edit',
                    views: {
                        'home@index': {
                            templateUrl: 'tpls/edit.html',
                            controller : 'editCtrl'
                        }
                    }
                })
                // 学生注册
                .state('index.signup', {
                    url: '/signup',
                    views: {
                        'home@index': {
                            templateUrl: 'tpls/signup.html',
                            controller : 'signupCtrl'
                        }
                    }
                })
                // 个人中心
                .state('index.userInfo', {
                    url: '/userInfo',
                    views: {
                        'home@index': {
                            templateUrl: 'tpls/userInfo.html'
                        }
                    }
                })
    }]);
    // 启动angular
    angular.bootstrap(document,['AppModule1']);
});