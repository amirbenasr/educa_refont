function j(){}function E(t,n){for(const e in n)t[e]=n[e];return t}function F(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function q(t){return t()}function P(){return Object.create(null)}function O(t){t.forEach(q)}function S(t){return typeof t=="function"}function U(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function g(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function b(t){return t.split(",").map(n=>n.trim().split(" ").filter(Boolean))}function C(t,n){const e=b(t.srcset),r=b(n||"");return r.length===e.length&&r.every(([o,s],c)=>s===e[c][1]&&(g(e[c][0],o)||g(o,e[c][0])))}function D(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const r of n)r(void 0);return j}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function G(t,n,e){t.$$.on_destroy.push(v(n,e))}function H(t,n,e,r){if(t){const o=x(t,n,e,r);return t[0](o)}}function x(t,n,e,r){return t[1]&&r?E(e.ctx.slice(),t[1](r(n))):e.ctx}function I(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const s=[],c=Math.max(n.dirty.length,o.length);for(let i=0;i<c;i+=1)s[i]=n.dirty[i]|o[i];return s}return n.dirty|o}return n.dirty}function J(t,n,e,r,o,s){if(o){const c=x(n,e,r,s);t.p(c,o)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}let _;function h(t){_=t}function k(){if(!_)throw new Error("Function called outside component initialization");return _}function L(t){k().$$.on_mount.push(t)}function N(t){k().$$.after_update.push(t)}const a=[],m=[];let l=[];const y=[],w=Promise.resolve();let p=!1;function z(){p||(p=!0,w.then(A))}function Q(){return z(),w}function M(t){l.push(t)}const d=new Set;let u=0;function A(){if(u!==0)return;const t=_;do{try{for(;u<a.length;){const n=a[u];u++,h(n),B(n.$$)}}catch(n){throw a.length=0,u=0,n}for(h(null),a.length=0,u=0;m.length;)m.pop()();for(let n=0;n<l.length;n+=1){const e=l[n];d.has(e)||(d.add(e),e())}l.length=0}while(a.length);for(;y.length;)y.pop()();p=!1,d.clear(),h(t)}function B(t){if(t.fragment!==null){t.update(),O(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(M)}}function R(t){const n=[],e=[];l.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),l=n}export{z as A,H as a,I as b,G as c,k as d,h as e,A as f,K as g,g as h,F as i,C as j,N as k,m as l,P as m,j as n,L as o,S as p,D as q,O as r,U as s,Q as t,J as u,M as v,R as w,_ as x,q as y,a as z};
