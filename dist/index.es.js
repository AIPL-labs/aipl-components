import * as Zt from "react";
import zt, { forwardRef as $l, useContext as Vn, createContext as Al, useRef as ja, useEffect as Ba, useState as Il } from "react";
function za(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ji = { exports: {} }, Sn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kc;
function Rl() {
  if (kc) return Sn;
  kc = 1;
  var e = zt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, p) {
    var h, g = {}, S = null, I = null;
    p !== void 0 && (S = "" + p), u.key !== void 0 && (S = "" + u.key), u.ref !== void 0 && (I = u.ref);
    for (h in u) n.call(u, h) && !i.hasOwnProperty(h) && (g[h] = u[h]);
    if (c && c.defaultProps) for (h in u = c.defaultProps, u) g[h] === void 0 && (g[h] = u[h]);
    return { $$typeof: t, type: c, key: S, ref: I, props: g, _owner: o.current };
  }
  return Sn.Fragment = r, Sn.jsx = s, Sn.jsxs = s, Sn;
}
var vn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mc;
function Pl() {
  return Mc || (Mc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = zt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), P = Symbol.iterator, x = "@@iterator";
    function M(a) {
      if (a === null || typeof a != "object")
        return null;
      var w = P && a[P] || a[x];
      return typeof w == "function" ? w : null;
    }
    var L = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(a) {
      {
        for (var w = arguments.length, E = new Array(w > 1 ? w - 1 : 0), k = 1; k < w; k++)
          E[k - 1] = arguments[k];
        T("error", a, E);
      }
    }
    function T(a, w, E) {
      {
        var k = L.ReactDebugCurrentFrame, j = k.getStackAddendum();
        j !== "" && (w += "%s", E = E.concat([j]));
        var J = E.map(function(V) {
          return String(V);
        });
        J.unshift("Warning: " + w), Function.prototype.apply.call(console[a], console, J);
      }
    }
    var O = !1, v = !1, D = !1, K = !1, de = !1, X;
    X = Symbol.for("react.module.reference");
    function Ce(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === i || de || a === o || a === p || a === h || K || a === I || O || v || D || typeof a == "object" && a !== null && (a.$$typeof === S || a.$$typeof === g || a.$$typeof === s || a.$$typeof === c || a.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === X || a.getModuleId !== void 0));
    }
    function et(a, w, E) {
      var k = a.displayName;
      if (k)
        return k;
      var j = w.displayName || w.name || "";
      return j !== "" ? E + "(" + j + ")" : E;
    }
    function He(a) {
      return a.displayName || "Context";
    }
    function m(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case c:
            var w = a;
            return He(w) + ".Consumer";
          case s:
            var E = a;
            return He(E._context) + ".Provider";
          case u:
            return et(a, a.render, "ForwardRef");
          case g:
            var k = a.displayName || null;
            return k !== null ? k : m(a.type) || "Memo";
          case S: {
            var j = a, J = j._payload, V = j._init;
            try {
              return m(V(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, A = 0, _, C, G, Z, H, ee, te;
    function Me() {
    }
    Me.__reactDisabledLog = !0;
    function tt() {
      {
        if (A === 0) {
          _ = console.log, C = console.info, G = console.warn, Z = console.error, H = console.group, ee = console.groupCollapsed, te = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        A++;
      }
    }
    function $t() {
      {
        if (A--, A === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, a, {
              value: _
            }),
            info: R({}, a, {
              value: C
            }),
            warn: R({}, a, {
              value: G
            }),
            error: R({}, a, {
              value: Z
            }),
            group: R({}, a, {
              value: H
            }),
            groupCollapsed: R({}, a, {
              value: ee
            }),
            groupEnd: R({}, a, {
              value: te
            })
          });
        }
        A < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gt = L.ReactCurrentDispatcher, Vt;
    function At(a, w, E) {
      {
        if (Vt === void 0)
          try {
            throw Error();
          } catch (j) {
            var k = j.stack.trim().match(/\n( *(at )?)/);
            Vt = k && k[1] || "";
          }
        return `
` + Vt + a;
      }
    }
    var Ht = !1, It;
    {
      var an = typeof WeakMap == "function" ? WeakMap : Map;
      It = new an();
    }
    function q(a, w) {
      if (!a || Ht)
        return "";
      {
        var E = It.get(a);
        if (E !== void 0)
          return E;
      }
      var k;
      Ht = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = Gt.current, Gt.current = null, tt();
      try {
        if (w) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (Ke) {
              k = Ke;
            }
            Reflect.construct(a, [], V);
          } else {
            try {
              V.call();
            } catch (Ke) {
              k = Ke;
            }
            a.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ke) {
            k = Ke;
          }
          a();
        }
      } catch (Ke) {
        if (Ke && k && typeof Ke.stack == "string") {
          for (var Y = Ke.stack.split(`
`), pe = k.stack.split(`
`), me = Y.length - 1, he = pe.length - 1; me >= 1 && he >= 0 && Y[me] !== pe[he]; )
            he--;
          for (; me >= 1 && he >= 0; me--, he--)
            if (Y[me] !== pe[he]) {
              if (me !== 1 || he !== 1)
                do
                  if (me--, he--, he < 0 || Y[me] !== pe[he]) {
                    var ye = `
` + Y[me].replace(" at new ", " at ");
                    return a.displayName && ye.includes("<anonymous>") && (ye = ye.replace("<anonymous>", a.displayName)), typeof a == "function" && It.set(a, ye), ye;
                  }
                while (me >= 1 && he >= 0);
              break;
            }
        }
      } finally {
        Ht = !1, Gt.current = J, $t(), Error.prepareStackTrace = j;
      }
      var Ut = a ? a.displayName || a.name : "", Xt = Ut ? At(Ut) : "";
      return typeof a == "function" && It.set(a, Xt), Xt;
    }
    function yr(a, w, E) {
      return q(a, !1);
    }
    function nr(a) {
      var w = a.prototype;
      return !!(w && w.isReactComponent);
    }
    function wt(a, w, E) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return q(a, nr(a));
      if (typeof a == "string")
        return At(a);
      switch (a) {
        case p:
          return At("Suspense");
        case h:
          return At("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            return yr(a.render);
          case g:
            return wt(a.type, w, E);
          case S: {
            var k = a, j = k._payload, J = k._init;
            try {
              return wt(J(j), w, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Rt = Object.prototype.hasOwnProperty, un = {}, fn = L.ReactDebugCurrentFrame;
    function Jt(a) {
      if (a) {
        var w = a._owner, E = wt(a.type, a._source, w ? w.type : null);
        fn.setExtraStackFrame(E);
      } else
        fn.setExtraStackFrame(null);
    }
    function wi(a, w, E, k, j) {
      {
        var J = Function.call.bind(Rt);
        for (var V in a)
          if (J(a, V)) {
            var Y = void 0;
            try {
              if (typeof a[V] != "function") {
                var pe = Error((k || "React class") + ": " + E + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pe.name = "Invariant Violation", pe;
              }
              Y = a[V](w, V, k, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (me) {
              Y = me;
            }
            Y && !(Y instanceof Error) && (Jt(j), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", E, V, typeof Y), Jt(null)), Y instanceof Error && !(Y.message in un) && (un[Y.message] = !0, Jt(j), F("Failed %s type: %s", E, Y.message), Jt(null));
          }
      }
    }
    var xi = Array.isArray;
    function gr(a) {
      return xi(a);
    }
    function Si(a) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, E = w && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return E;
      }
    }
    function vi(a) {
      try {
        return ln(a), !1;
      } catch {
        return !0;
      }
    }
    function ln(a) {
      return "" + a;
    }
    function dn(a) {
      if (vi(a))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Si(a)), ln(a);
    }
    var Pt = L.ReactCurrentOwner, Oi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pn, mn, br;
    br = {};
    function _i(a) {
      if (Rt.call(a, "ref")) {
        var w = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Ei(a) {
      if (Rt.call(a, "key")) {
        var w = Object.getOwnPropertyDescriptor(a, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function $i(a, w) {
      if (typeof a.ref == "string" && Pt.current && w && Pt.current.stateNode !== w) {
        var E = m(Pt.current.type);
        br[E] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m(Pt.current.type), a.ref), br[E] = !0);
      }
    }
    function Ai(a, w) {
      {
        var E = function() {
          pn || (pn = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        E.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function Ii(a, w) {
      {
        var E = function() {
          mn || (mn = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        E.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Ri = function(a, w, E, k, j, J, V) {
      var Y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: w,
        ref: E,
        props: V,
        // Record the component responsible for creating this element.
        _owner: J
      };
      return Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(Y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    };
    function Pi(a, w, E, k, j) {
      {
        var J, V = {}, Y = null, pe = null;
        E !== void 0 && (dn(E), Y = "" + E), Ei(w) && (dn(w.key), Y = "" + w.key), _i(w) && (pe = w.ref, $i(w, j));
        for (J in w)
          Rt.call(w, J) && !Oi.hasOwnProperty(J) && (V[J] = w[J]);
        if (a && a.defaultProps) {
          var me = a.defaultProps;
          for (J in me)
            V[J] === void 0 && (V[J] = me[J]);
        }
        if (Y || pe) {
          var he = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          Y && Ai(V, he), pe && Ii(V, he);
        }
        return Ri(a, Y, pe, j, k, Pt.current, V);
      }
    }
    var wr = L.ReactCurrentOwner, hn = L.ReactDebugCurrentFrame;
    function at(a) {
      if (a) {
        var w = a._owner, E = wt(a.type, a._source, w ? w.type : null);
        hn.setExtraStackFrame(E);
      } else
        hn.setExtraStackFrame(null);
    }
    var xr;
    xr = !1;
    function Sr(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function yn() {
      {
        if (wr.current) {
          var a = m(wr.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Fi(a) {
      return "";
    }
    var gn = {};
    function Ci(a) {
      {
        var w = yn();
        if (!w) {
          var E = typeof a == "string" ? a : a.displayName || a.name;
          E && (w = `

Check the top-level render call using <` + E + ">.");
        }
        return w;
      }
    }
    function bn(a, w) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var E = Ci(w);
        if (gn[E])
          return;
        gn[E] = !0;
        var k = "";
        a && a._owner && a._owner !== wr.current && (k = " It was passed a child from " + m(a._owner.type) + "."), at(a), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, k), at(null);
      }
    }
    function wn(a, w) {
      {
        if (typeof a != "object")
          return;
        if (gr(a))
          for (var E = 0; E < a.length; E++) {
            var k = a[E];
            Sr(k) && bn(k, w);
          }
        else if (Sr(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var j = M(a);
          if (typeof j == "function" && j !== a.entries)
            for (var J = j.call(a), V; !(V = J.next()).done; )
              Sr(V.value) && bn(V.value, w);
        }
      }
    }
    function ki(a) {
      {
        var w = a.type;
        if (w == null || typeof w == "string")
          return;
        var E;
        if (typeof w == "function")
          E = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === g))
          E = w.propTypes;
        else
          return;
        if (E) {
          var k = m(w);
          wi(E, a.props, "prop", k, a);
        } else if (w.PropTypes !== void 0 && !xr) {
          xr = !0;
          var j = m(w);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mi(a) {
      {
        for (var w = Object.keys(a.props), E = 0; E < w.length; E++) {
          var k = w[E];
          if (k !== "children" && k !== "key") {
            at(a), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), at(null);
            break;
          }
        }
        a.ref !== null && (at(a), F("Invalid attribute `ref` supplied to `React.Fragment`."), at(null));
      }
    }
    var xn = {};
    function lo(a, w, E, k, j, J) {
      {
        var V = Ce(a);
        if (!V) {
          var Y = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pe = Fi();
          pe ? Y += pe : Y += yn();
          var me;
          a === null ? me = "null" : gr(a) ? me = "array" : a !== void 0 && a.$$typeof === t ? (me = "<" + (m(a.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : me = typeof a, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, Y);
        }
        var he = Pi(a, w, E, j, J);
        if (he == null)
          return he;
        if (V) {
          var ye = w.children;
          if (ye !== void 0)
            if (k)
              if (gr(ye)) {
                for (var Ut = 0; Ut < ye.length; Ut++)
                  wn(ye[Ut], a);
                Object.freeze && Object.freeze(ye);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wn(ye, a);
        }
        if (Rt.call(w, "key")) {
          var Xt = m(a), Ke = Object.keys(w).filter(function(El) {
            return El !== "key";
          }), Ui = Ke.length > 0 ? "{key: someKey, " + Ke.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xn[Xt + Ui]) {
            var _l = Ke.length > 0 ? "{" + Ke.join(": ..., ") + ": ...}" : "{}";
            F(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ui, Xt, _l, Xt), xn[Xt + Ui] = !0;
          }
        }
        return a === n ? Mi(he) : ki(he), he;
      }
    }
    function Ti(a, w, E) {
      return lo(a, w, E, !0);
    }
    function f(a, w, E) {
      return lo(a, w, E, !1);
    }
    var $ = f, N = Ti;
    vn.Fragment = n, vn.jsx = $, vn.jsxs = N;
  }()), vn;
}
process.env.NODE_ENV === "production" ? Ji.exports = Rl() : Ji.exports = Pl();
var Ao = Ji.exports, Fl = !1;
function Cl(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function kl(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ml = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !Fl : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(kl(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Cl(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Ye = "-ms-", Io = "-moz-", se = "-webkit-", Wa = "comm", Es = "rule", $s = "decl", Tl = "@import", qa = "@keyframes", Ul = "@layer", Nl = Math.abs, Do = String.fromCharCode, Ll = Object.assign;
function Dl(e, t) {
  return De(e, 0) ^ 45 ? (((t << 2 ^ De(e, 0)) << 2 ^ De(e, 1)) << 2 ^ De(e, 2)) << 2 ^ De(e, 3) : 0;
}
function Ka(e) {
  return e.trim();
}
function jl(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ce(e, t, r) {
  return e.replace(t, r);
}
function Xi(e, t) {
  return e.indexOf(t);
}
function De(e, t) {
  return e.charCodeAt(t) | 0;
}
function Cn(e, t, r) {
  return e.slice(t, r);
}
function Nt(e) {
  return e.length;
}
function As(e) {
  return e.length;
}
function po(e, t) {
  return t.push(e), e;
}
function Bl(e, t) {
  return e.map(t).join("");
}
var jo = 1, Kr = 1, Ya = 0, ot = 0, Ae = 0, Qr = "";
function Bo(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: jo, column: Kr, length: s, return: "" };
}
function On(e, t) {
  return Ll(Bo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function zl() {
  return Ae;
}
function Wl() {
  return Ae = ot > 0 ? De(Qr, --ot) : 0, Kr--, Ae === 10 && (Kr = 1, jo--), Ae;
}
function dt() {
  return Ae = ot < Ya ? De(Qr, ot++) : 0, Kr++, Ae === 10 && (Kr = 1, jo++), Ae;
}
function Bt() {
  return De(Qr, ot);
}
function vo() {
  return ot;
}
function Hn(e, t) {
  return Cn(Qr, e, t);
}
function kn(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ga(e) {
  return jo = Kr = 1, Ya = Nt(Qr = e), ot = 0, [];
}
function Va(e) {
  return Qr = "", e;
}
function Oo(e) {
  return Ka(Hn(ot - 1, Zi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ql(e) {
  for (; (Ae = Bt()) && Ae < 33; )
    dt();
  return kn(e) > 2 || kn(Ae) > 3 ? "" : " ";
}
function Kl(e, t) {
  for (; --t && dt() && !(Ae < 48 || Ae > 102 || Ae > 57 && Ae < 65 || Ae > 70 && Ae < 97); )
    ;
  return Hn(e, vo() + (t < 6 && Bt() == 32 && dt() == 32));
}
function Zi(e) {
  for (; dt(); )
    switch (Ae) {
      case e:
        return ot;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Zi(Ae);
        break;
      case 40:
        e === 41 && Zi(e);
        break;
      case 92:
        dt();
        break;
    }
  return ot;
}
function Yl(e, t) {
  for (; dt() && e + Ae !== 57; )
    if (e + Ae === 84 && Bt() === 47)
      break;
  return "/*" + Hn(t, ot - 1) + "*" + Do(e === 47 ? e : dt());
}
function Gl(e) {
  for (; !kn(Bt()); )
    dt();
  return Hn(e, ot);
}
function Vl(e) {
  return Va(_o("", null, null, null, [""], e = Ga(e), 0, [0], e));
}
function _o(e, t, r, n, o, i, s, c, u) {
  for (var p = 0, h = 0, g = s, S = 0, I = 0, P = 0, x = 1, M = 1, L = 1, F = 0, T = "", O = o, v = i, D = n, K = T; M; )
    switch (P = F, F = dt()) {
      case 40:
        if (P != 108 && De(K, g - 1) == 58) {
          Xi(K += ce(Oo(F), "&", "&\f"), "&\f") != -1 && (L = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        K += Oo(F);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        K += ql(P);
        break;
      case 92:
        K += Kl(vo() - 1, 7);
        continue;
      case 47:
        switch (Bt()) {
          case 42:
          case 47:
            po(Hl(Yl(dt(), vo()), t, r), u);
            break;
          default:
            K += "/";
        }
        break;
      case 123 * x:
        c[p++] = Nt(K) * L;
      case 125 * x:
      case 59:
      case 0:
        switch (F) {
          case 0:
          case 125:
            M = 0;
          case 59 + h:
            L == -1 && (K = ce(K, /\f/g, "")), I > 0 && Nt(K) - g && po(I > 32 ? Uc(K + ";", n, r, g - 1) : Uc(ce(K, " ", "") + ";", n, r, g - 2), u);
            break;
          case 59:
            K += ";";
          default:
            if (po(D = Tc(K, t, r, p, h, o, c, T, O = [], v = [], g), i), F === 123)
              if (h === 0)
                _o(K, t, D, D, O, i, g, c, v);
              else
                switch (S === 99 && De(K, 3) === 110 ? 100 : S) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _o(e, D, D, n && po(Tc(e, D, D, 0, 0, o, c, T, o, O = [], g), v), o, v, g, c, n ? O : v);
                    break;
                  default:
                    _o(K, D, D, D, [""], v, 0, c, v);
                }
        }
        p = h = I = 0, x = L = 1, T = K = "", g = s;
        break;
      case 58:
        g = 1 + Nt(K), I = P;
      default:
        if (x < 1) {
          if (F == 123)
            --x;
          else if (F == 125 && x++ == 0 && Wl() == 125)
            continue;
        }
        switch (K += Do(F), F * x) {
          case 38:
            L = h > 0 ? 1 : (K += "\f", -1);
            break;
          case 44:
            c[p++] = (Nt(K) - 1) * L, L = 1;
            break;
          case 64:
            Bt() === 45 && (K += Oo(dt())), S = Bt(), h = g = Nt(T = K += Gl(vo())), F++;
            break;
          case 45:
            P === 45 && Nt(K) == 2 && (x = 0);
        }
    }
  return i;
}
function Tc(e, t, r, n, o, i, s, c, u, p, h) {
  for (var g = o - 1, S = o === 0 ? i : [""], I = As(S), P = 0, x = 0, M = 0; P < n; ++P)
    for (var L = 0, F = Cn(e, g + 1, g = Nl(x = s[P])), T = e; L < I; ++L)
      (T = Ka(x > 0 ? S[L] + " " + F : ce(F, /&\f/g, S[L]))) && (u[M++] = T);
  return Bo(e, t, r, o === 0 ? Es : c, u, p, h);
}
function Hl(e, t, r) {
  return Bo(e, t, r, Wa, Do(zl()), Cn(e, 2, -2), 0);
}
function Uc(e, t, r, n) {
  return Bo(e, t, r, $s, Cn(e, 0, n), Cn(e, n + 1, -1), n);
}
function Wr(e, t) {
  for (var r = "", n = As(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Jl(e, t, r, n) {
  switch (e.type) {
    case Ul:
      if (e.children.length) break;
    case Tl:
    case $s:
      return e.return = e.return || e.value;
    case Wa:
      return "";
    case qa:
      return e.return = e.value + "{" + Wr(e.children, n) + "}";
    case Es:
      e.value = e.props.join(",");
  }
  return Nt(r = Wr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Xl(e) {
  var t = As(e);
  return function(r, n, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](r, n, o, i) || "";
    return s;
  };
}
function Zl(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ql(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var e0 = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Bt(), o === 38 && i === 12 && (r[n] = 1), !kn(i); )
    dt();
  return Hn(t, ot);
}, t0 = function(t, r) {
  var n = -1, o = 44;
  do
    switch (kn(o)) {
      case 0:
        o === 38 && Bt() === 12 && (r[n] = 1), t[n] += e0(ot - 1, r, n);
        break;
      case 2:
        t[n] += Oo(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Bt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Do(o);
    }
  while (o = dt());
  return t;
}, r0 = function(t, r) {
  return Va(t0(Ga(t), r));
}, Nc = /* @__PURE__ */ new WeakMap(), n0 = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Nc.get(n)) && !o) {
      Nc.set(t, !0);
      for (var i = [], s = r0(r, i), c = n.props, u = 0, p = 0; u < s.length; u++)
        for (var h = 0; h < c.length; h++, p++)
          t.props[p] = i[u] ? s[u].replace(/&\f/g, c[h]) : c[h] + " " + s[u];
    }
  }
}, o0 = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ha(e, t) {
  switch (Dl(e, t)) {
    case 5103:
      return se + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return se + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + e + Io + e + Ye + e + e;
    case 6828:
    case 4268:
      return se + e + Ye + e + e;
    case 6165:
      return se + e + Ye + "flex-" + e + e;
    case 5187:
      return se + e + ce(e, /(\w+).+(:[^]+)/, se + "box-$1$2" + Ye + "flex-$1$2") + e;
    case 5443:
      return se + e + Ye + "flex-item-" + ce(e, /flex-|-self/, "") + e;
    case 4675:
      return se + e + Ye + "flex-line-pack" + ce(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return se + e + Ye + ce(e, "shrink", "negative") + e;
    case 5292:
      return se + e + Ye + ce(e, "basis", "preferred-size") + e;
    case 6060:
      return se + "box-" + ce(e, "-grow", "") + se + e + Ye + ce(e, "grow", "positive") + e;
    case 4554:
      return se + ce(e, /([^-])(transform)/g, "$1" + se + "$2") + e;
    case 6187:
      return ce(ce(ce(e, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ce(e, /(image-set\([^]*)/, se + "$1$`$1");
    case 4968:
      return ce(ce(e, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + Ye + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + se + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ce(e, /(.+)-inline(.+)/, se + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Nt(e) - 1 - t > 6) switch (De(e, t + 1)) {
        case 109:
          if (De(e, t + 4) !== 45) break;
        case 102:
          return ce(e, /(.+:)(.+)-([^]+)/, "$1" + se + "$2-$3$1" + Io + (De(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Xi(e, "stretch") ? Ha(ce(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (De(e, t + 1) !== 115) break;
    case 6444:
      switch (De(e, Nt(e) - 3 - (~Xi(e, "!important") && 10))) {
        case 107:
          return ce(e, ":", ":" + se) + e;
        case 101:
          return ce(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + se + (De(e, 14) === 45 ? "inline-" : "") + "box$3$1" + se + "$2$3$1" + Ye + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (De(e, t + 11)) {
        case 114:
          return se + e + Ye + ce(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return se + e + Ye + ce(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return se + e + Ye + ce(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return se + e + Ye + e + e;
  }
  return e;
}
var i0 = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case $s:
      t.return = Ha(t.value, t.length);
      break;
    case qa:
      return Wr([On(t, {
        value: ce(t.value, "@", "@" + se)
      })], o);
    case Es:
      if (t.length) return Bl(t.props, function(i) {
        switch (jl(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Wr([On(t, {
              props: [ce(i, /:(read-\w+)/, ":" + Io + "$1")]
            })], o);
          case "::placeholder":
            return Wr([On(t, {
              props: [ce(i, /:(plac\w+)/, ":" + se + "input-$1")]
            }), On(t, {
              props: [ce(i, /:(plac\w+)/, ":" + Io + "$1")]
            }), On(t, {
              props: [ce(i, /:(plac\w+)/, Ye + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, s0 = [i0], c0 = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(x) {
      var M = x.getAttribute("data-emotion");
      M.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || s0, i = {}, s, c = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(x) {
      for (var M = x.getAttribute("data-emotion").split(" "), L = 1; L < M.length; L++)
        i[M[L]] = !0;
      c.push(x);
    }
  );
  var u, p = [n0, o0];
  {
    var h, g = [Jl, Zl(function(x) {
      h.insert(x);
    })], S = Xl(p.concat(o, g)), I = function(M) {
      return Wr(Vl(M), S);
    };
    u = function(M, L, F, T) {
      h = F, I(M ? M + "{" + L.styles + "}" : L.styles), T && (P.inserted[L.name] = !0);
    };
  }
  var P = {
    key: r,
    sheet: new Ml({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return P.sheet.hydrate(c), P;
}, Qi = { exports: {} }, ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lc;
function a0() {
  if (Lc) return ae;
  Lc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, I = e ? Symbol.for("react.memo") : 60115, P = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, M = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function T(v) {
    if (typeof v == "object" && v !== null) {
      var D = v.$$typeof;
      switch (D) {
        case t:
          switch (v = v.type, v) {
            case u:
            case p:
            case n:
            case i:
            case o:
            case g:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case c:
                case h:
                case P:
                case I:
                case s:
                  return v;
                default:
                  return D;
              }
          }
        case r:
          return D;
      }
    }
  }
  function O(v) {
    return T(v) === p;
  }
  return ae.AsyncMode = u, ae.ConcurrentMode = p, ae.ContextConsumer = c, ae.ContextProvider = s, ae.Element = t, ae.ForwardRef = h, ae.Fragment = n, ae.Lazy = P, ae.Memo = I, ae.Portal = r, ae.Profiler = i, ae.StrictMode = o, ae.Suspense = g, ae.isAsyncMode = function(v) {
    return O(v) || T(v) === u;
  }, ae.isConcurrentMode = O, ae.isContextConsumer = function(v) {
    return T(v) === c;
  }, ae.isContextProvider = function(v) {
    return T(v) === s;
  }, ae.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, ae.isForwardRef = function(v) {
    return T(v) === h;
  }, ae.isFragment = function(v) {
    return T(v) === n;
  }, ae.isLazy = function(v) {
    return T(v) === P;
  }, ae.isMemo = function(v) {
    return T(v) === I;
  }, ae.isPortal = function(v) {
    return T(v) === r;
  }, ae.isProfiler = function(v) {
    return T(v) === i;
  }, ae.isStrictMode = function(v) {
    return T(v) === o;
  }, ae.isSuspense = function(v) {
    return T(v) === g;
  }, ae.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === p || v === i || v === o || v === g || v === S || typeof v == "object" && v !== null && (v.$$typeof === P || v.$$typeof === I || v.$$typeof === s || v.$$typeof === c || v.$$typeof === h || v.$$typeof === M || v.$$typeof === L || v.$$typeof === F || v.$$typeof === x);
  }, ae.typeOf = T, ae;
}
var ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dc;
function u0() {
  return Dc || (Dc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, I = e ? Symbol.for("react.memo") : 60115, P = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, M = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function T(q) {
      return typeof q == "string" || typeof q == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      q === n || q === p || q === i || q === o || q === g || q === S || typeof q == "object" && q !== null && (q.$$typeof === P || q.$$typeof === I || q.$$typeof === s || q.$$typeof === c || q.$$typeof === h || q.$$typeof === M || q.$$typeof === L || q.$$typeof === F || q.$$typeof === x);
    }
    function O(q) {
      if (typeof q == "object" && q !== null) {
        var yr = q.$$typeof;
        switch (yr) {
          case t:
            var nr = q.type;
            switch (nr) {
              case u:
              case p:
              case n:
              case i:
              case o:
              case g:
                return nr;
              default:
                var wt = nr && nr.$$typeof;
                switch (wt) {
                  case c:
                  case h:
                  case P:
                  case I:
                  case s:
                    return wt;
                  default:
                    return yr;
                }
            }
          case r:
            return yr;
        }
      }
    }
    var v = u, D = p, K = c, de = s, X = t, Ce = h, et = n, He = P, m = I, R = r, A = i, _ = o, C = g, G = !1;
    function Z(q) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(q) || O(q) === u;
    }
    function H(q) {
      return O(q) === p;
    }
    function ee(q) {
      return O(q) === c;
    }
    function te(q) {
      return O(q) === s;
    }
    function Me(q) {
      return typeof q == "object" && q !== null && q.$$typeof === t;
    }
    function tt(q) {
      return O(q) === h;
    }
    function $t(q) {
      return O(q) === n;
    }
    function Gt(q) {
      return O(q) === P;
    }
    function Vt(q) {
      return O(q) === I;
    }
    function At(q) {
      return O(q) === r;
    }
    function Ht(q) {
      return O(q) === i;
    }
    function It(q) {
      return O(q) === o;
    }
    function an(q) {
      return O(q) === g;
    }
    ue.AsyncMode = v, ue.ConcurrentMode = D, ue.ContextConsumer = K, ue.ContextProvider = de, ue.Element = X, ue.ForwardRef = Ce, ue.Fragment = et, ue.Lazy = He, ue.Memo = m, ue.Portal = R, ue.Profiler = A, ue.StrictMode = _, ue.Suspense = C, ue.isAsyncMode = Z, ue.isConcurrentMode = H, ue.isContextConsumer = ee, ue.isContextProvider = te, ue.isElement = Me, ue.isForwardRef = tt, ue.isFragment = $t, ue.isLazy = Gt, ue.isMemo = Vt, ue.isPortal = At, ue.isProfiler = Ht, ue.isStrictMode = It, ue.isSuspense = an, ue.isValidElementType = T, ue.typeOf = O;
  }()), ue;
}
process.env.NODE_ENV === "production" ? Qi.exports = a0() : Qi.exports = u0();
var f0 = Qi.exports, Ja = f0, l0 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, d0 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Xa = {};
Xa[Ja.ForwardRef] = l0;
Xa[Ja.Memo] = d0;
var p0 = !0;
function m0(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Za = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  p0 === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, h0 = function(t, r, n) {
  Za(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function y0(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var g0 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, b0 = !1, w0 = /[A-Z]|^ms/g, x0 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Qa = function(t) {
  return t.charCodeAt(1) === 45;
}, jc = function(t) {
  return t != null && typeof t != "boolean";
}, Ni = /* @__PURE__ */ Ql(function(e) {
  return Qa(e) ? e : e.replace(w0, "-$&").toLowerCase();
}), Bc = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(x0, function(n, o, i) {
          return Lt = {
            name: o,
            styles: i,
            next: Lt
          }, o;
        });
  }
  return g0[t] !== 1 && !Qa(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, S0 = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Mn(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Lt = {
          name: o.name,
          styles: o.styles,
          next: Lt
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Lt = {
              name: s.name,
              styles: s.styles,
              next: Lt
            }, s = s.next;
        var c = i.styles + ";";
        return c;
      }
      return v0(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = Lt, p = r(e);
        return Lt = u, Mn(e, t, p);
      }
      break;
    }
  }
  var h = r;
  return h;
}
function v0(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Mn(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var c = s;
        jc(c) && (n += Ni(i) + ":" + Bc(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && b0)
          throw new Error(S0);
        if (Array.isArray(s) && typeof s[0] == "string" && t == null)
          for (var u = 0; u < s.length; u++)
            jc(s[u]) && (n += Ni(i) + ":" + Bc(i, s[u]) + ";");
        else {
          var p = Mn(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Ni(i) + ":" + p + ";";
              break;
            }
            default:
              n += i + "{" + p + "}";
          }
        }
      }
    }
  return n;
}
var zc = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Lt;
function O0(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Lt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Mn(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += Mn(r, t, e[c]), n) {
      var u = i;
      o += u[c];
    }
  zc.lastIndex = 0;
  for (var p = "", h; (h = zc.exec(o)) !== null; )
    p += "-" + h[1];
  var g = y0(o) + p;
  return {
    name: g,
    styles: o,
    next: Lt
  };
}
var _0 = function(t) {
  return t();
}, E0 = Zt.useInsertionEffect ? Zt.useInsertionEffect : !1, $0 = E0 || _0, A0 = !1, eu = /* @__PURE__ */ Zt.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ c0({
    key: "css"
  }) : null
);
eu.Provider;
var I0 = function(t) {
  return /* @__PURE__ */ $l(function(r, n) {
    var o = Vn(eu);
    return t(r, o, n);
  });
}, R0 = /* @__PURE__ */ Zt.createContext({}), zo = {}.hasOwnProperty, es = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", tu = function(t, r) {
  var n = {};
  for (var o in r)
    zo.call(r, o) && (n[o] = r[o]);
  return n[es] = t, n;
}, P0 = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Za(r, n, o), $0(function() {
    return h0(r, n, o);
  }), null;
}, F0 = /* @__PURE__ */ I0(
  /* <any, any> */
  function(e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var o = e[es], i = [n], s = "";
    typeof e.className == "string" ? s = m0(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
    var c = O0(i, void 0, Zt.useContext(R0));
    s += t.key + "-" + c.name;
    var u = {};
    for (var p in e)
      zo.call(e, p) && p !== "css" && p !== es && !A0 && (u[p] = e[p]);
    return u.className = s, r && (u.ref = r), /* @__PURE__ */ Zt.createElement(Zt.Fragment, null, /* @__PURE__ */ Zt.createElement(P0, {
      cache: t,
      serialized: c,
      isStringTag: typeof o == "string"
    }), /* @__PURE__ */ Zt.createElement(o, u));
  }
), ru = F0;
function ir(e, t, r) {
  return zo.call(t, "css") ? Ao.jsx(ru, tu(e, t), r) : Ao.jsx(e, t, r);
}
function C0(e, t, r) {
  return zo.call(t, "css") ? Ao.jsxs(ru, tu(e, t), r) : Ao.jsxs(e, t, r);
}
const k0 = { BASE_URL: "./", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, Wc = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (u, p) => {
    const h = typeof u == "function" ? u(t) : u;
    if (!Object.is(h, t)) {
      const g = t;
      t = p ?? (typeof h != "object" || h === null) ? h : Object.assign({}, t, h), r.forEach((S) => S(t, g));
    }
  }, o = () => t, c = { setState: n, getState: o, subscribe: (u) => (r.add(u), () => r.delete(u)), destroy: () => {
    (k0 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } };
  return t = e(n, o, c), c;
}, M0 = (e) => e ? Wc(e) : Wc;
var ts = { exports: {} }, Li = {}, mo = { exports: {} }, Di = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qc;
function T0() {
  if (qc) return Di;
  qc = 1;
  var e = zt;
  function t(g, S) {
    return g === S && (g !== 0 || 1 / g === 1 / S) || g !== g && S !== S;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
  function c(g, S) {
    var I = S(), P = n({ inst: { value: I, getSnapshot: S } }), x = P[0].inst, M = P[1];
    return i(function() {
      x.value = I, x.getSnapshot = S, u(x) && M({ inst: x });
    }, [g, I, S]), o(function() {
      return u(x) && M({ inst: x }), g(function() {
        u(x) && M({ inst: x });
      });
    }, [g]), s(I), I;
  }
  function u(g) {
    var S = g.getSnapshot;
    g = g.value;
    try {
      var I = S();
      return !r(g, I);
    } catch {
      return !0;
    }
  }
  function p(g, S) {
    return S();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : c;
  return Di.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, Di;
}
var ji = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kc;
function U0() {
  return Kc || (Kc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = zt, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(T) {
      {
        for (var O = arguments.length, v = new Array(O > 1 ? O - 1 : 0), D = 1; D < O; D++)
          v[D - 1] = arguments[D];
        n("error", T, v);
      }
    }
    function n(T, O, v) {
      {
        var D = t.ReactDebugCurrentFrame, K = D.getStackAddendum();
        K !== "" && (O += "%s", v = v.concat([K]));
        var de = v.map(function(X) {
          return String(X);
        });
        de.unshift("Warning: " + O), Function.prototype.apply.call(console[T], console, de);
      }
    }
    function o(T, O) {
      return T === O && (T !== 0 || 1 / T === 1 / O) || T !== T && O !== O;
    }
    var i = typeof Object.is == "function" ? Object.is : o, s = e.useState, c = e.useEffect, u = e.useLayoutEffect, p = e.useDebugValue, h = !1, g = !1;
    function S(T, O, v) {
      h || e.startTransition !== void 0 && (h = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var D = O();
      if (!g) {
        var K = O();
        i(D, K) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), g = !0);
      }
      var de = s({
        inst: {
          value: D,
          getSnapshot: O
        }
      }), X = de[0].inst, Ce = de[1];
      return u(function() {
        X.value = D, X.getSnapshot = O, I(X) && Ce({
          inst: X
        });
      }, [T, D, O]), c(function() {
        I(X) && Ce({
          inst: X
        });
        var et = function() {
          I(X) && Ce({
            inst: X
          });
        };
        return T(et);
      }, [T]), p(D), D;
    }
    function I(T) {
      var O = T.getSnapshot, v = T.value;
      try {
        var D = O();
        return !i(v, D);
      } catch {
        return !0;
      }
    }
    function P(T, O, v) {
      return O();
    }
    var x = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", M = !x, L = M ? P : S, F = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : L;
    ji.useSyncExternalStore = F, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ji;
}
var Yc;
function nu() {
  return Yc || (Yc = 1, process.env.NODE_ENV === "production" ? mo.exports = T0() : mo.exports = U0()), mo.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gc;
function N0() {
  if (Gc) return Li;
  Gc = 1;
  var e = zt, t = nu();
  function r(p, h) {
    return p === h && (p !== 0 || 1 / p === 1 / h) || p !== p && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, c = e.useMemo, u = e.useDebugValue;
  return Li.useSyncExternalStoreWithSelector = function(p, h, g, S, I) {
    var P = i(null);
    if (P.current === null) {
      var x = { hasValue: !1, value: null };
      P.current = x;
    } else x = P.current;
    P = c(function() {
      function L(D) {
        if (!F) {
          if (F = !0, T = D, D = S(D), I !== void 0 && x.hasValue) {
            var K = x.value;
            if (I(K, D)) return O = K;
          }
          return O = D;
        }
        if (K = O, n(T, D)) return K;
        var de = S(D);
        return I !== void 0 && I(K, de) ? K : (T = D, O = de);
      }
      var F = !1, T, O, v = g === void 0 ? null : g;
      return [function() {
        return L(h());
      }, v === null ? void 0 : function() {
        return L(v());
      }];
    }, [h, g, S, I]);
    var M = o(p, P[0], P[1]);
    return s(function() {
      x.hasValue = !0, x.value = M;
    }, [M]), u(M), M;
  }, Li;
}
var Bi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vc;
function L0() {
  return Vc || (Vc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = zt, t = nu();
    function r(h, g) {
      return h === g && (h !== 0 || 1 / h === 1 / g) || h !== h && g !== g;
    }
    var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, c = e.useMemo, u = e.useDebugValue;
    function p(h, g, S, I, P) {
      var x = i(null), M;
      x.current === null ? (M = {
        hasValue: !1,
        value: null
      }, x.current = M) : M = x.current;
      var L = c(function() {
        var v = !1, D, K, de = function(He) {
          if (!v) {
            v = !0, D = He;
            var m = I(He);
            if (P !== void 0 && M.hasValue) {
              var R = M.value;
              if (P(R, m))
                return K = R, R;
            }
            return K = m, m;
          }
          var A = D, _ = K;
          if (n(A, He))
            return _;
          var C = I(He);
          return P !== void 0 && P(_, C) ? _ : (D = He, K = C, C);
        }, X = S === void 0 ? null : S, Ce = function() {
          return de(g());
        }, et = X === null ? void 0 : function() {
          return de(X());
        };
        return [Ce, et];
      }, [g, S, I, P]), F = L[0], T = L[1], O = o(h, F, T);
      return s(function() {
        M.hasValue = !0, M.value = O;
      }, [O]), u(O), O;
    }
    Bi.useSyncExternalStoreWithSelector = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Bi;
}
process.env.NODE_ENV === "production" ? ts.exports = N0() : ts.exports = L0();
var D0 = ts.exports;
const j0 = /* @__PURE__ */ za(D0), ou = { BASE_URL: "./", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, { useDebugValue: B0 } = zt, { useSyncExternalStoreWithSelector: z0 } = j0;
let Hc = !1;
function W0(e, t = e.getState, r) {
  (ou ? "production" : void 0) !== "production" && r && !Hc && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Hc = !0);
  const n = z0(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return B0(n), n;
}
const Jc = (e) => {
  (ou ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? M0(e) : e, r = (n, o) => W0(t, n, o);
  return Object.assign(r, t), r;
}, q0 = (e) => e ? Jc(e) : Jc;
function Is(e) {
  if (typeof e == "string")
    return e;
  const t = e();
  return typeof t == "string" ? t : (console.error("ASSERTION FAIL VALUE", t), "Assertion Failed");
}
function Wo(e, t = "Assertion failed") {
  if (!e)
    throw new Error(Is(t));
}
const iu = (e, t, r = () => (console.error(e, t), `Assertion failed: ${JSON.stringify(e)} is not equal to ${JSON.stringify(t)}`)) => {
  throw new Error("assertEqualElements: Bitrotted");
}, K0 = (e, t, r = () => (console.error(e, t), `Assertion failed: ${JSON.stringify(e)} is not equal to ${JSON.stringify(t)}`)) => Array.isArray(e) && Array.isArray(t) ? iu(e, t, r) : Wo(e === t, r), Y0 = (e, t, r = () => (console.error(e, t), `Assertion failed: ${JSON.stringify(e)} is equal to ${JSON.stringify(t)}`)) => Wo(e !== t, r);
function G0(e, t, r = "Assertion failed: Required value is not of correct type") {
  if (!t(e))
    throw new Error(Is(r));
  return e;
}
function V0(e, t = "Assertion failed: Reached what should be an unreachable section of code") {
  throw new Error(Is(t));
}
function H0(e) {
  return e != null && !Number.isNaN(e);
}
function J0(e, t = "Assertion failed: Required value not defined") {
  return Wo(H0(e), t), e;
}
const Yr = {
  assert: Wo,
  assertUnreachable: V0,
  assertValue: J0,
  assertEqual: K0,
  assertNotEqual: Y0,
  assertEqualElements: iu,
  assertType: G0
}, X0 = (e) => typeof e == "function", Z0 = (e = 0) => typeof e == "number" ? Array.from({
  length: e
}) : Array.from(e), Q0 = {
  from: Z0
}, ed = (e, t) => t.reduce((r, n) => n(r), e), su = (e) => Object.entries(e), td = (e, t) => Object.entries(e).filter((r) => {
  const [n, o] = r;
  return t(n, o);
}), pt = (e) => e == null || Number.isNaN(e), cu = (e) => {
  const t = e;
  return typeof t == "object" && typeof t.next == "function";
}, au = (e, t = (r) => !0) => {
  if (!pt(e))
    return Array.isArray(e) ? e.find(t) : cu(e) && t(e) ? e.next().value : e;
}, rd = (e) => {
  if (!pt(e))
    return Object.freeze(e);
}, nd = (e, t, r = (n, o, i) => {
  throw console.error("error", n), console.error("object", e), console.error("key", o), console.error("value", i), console.error("consumer", [t]), new Error("Error while iterating over object");
}) => {
  for (const n in e) {
    const o = e[n];
    try {
      t(n, e[n]);
    } catch (i) {
      r(i, n, o);
    }
  }
}, od = (e) => {
  if (!pt(e))
    return Object.freeze(e);
}, uu = (e) => Object.fromEntries(e), Wt = (e) => !pt(e), id = (e) => {
  const t = Array.from(new Set(e.map((n) => n[0]))), r = uu(t.map((n) => [n, []]));
  return e.forEach((n) => {
    const [o, i] = n;
    Wt(i) && r[o].push(i);
  }), r;
}, Rs = (e, t, r = void 0) => {
  const n = e[t];
  return fi(n) ? r : n;
};
function fu(e) {
  const t = e;
  return typeof t == "object" && typeof t[Symbol.iterator] == "function";
}
const lu = (e) => pt(e) ? [] : fu(e) ? Array.from(e) : Array.isArray(e) ? e : [e], sd = (e, t) => {
  const r = lu(t);
  return r.filter((n) => Wt(e[n])).length === r.length;
}, cd = au, du = (e, t) => {
  if (Wt(e))
    return t(e);
}, pu = () => typeof window < "u", ad = (e) => pu() ? e() : void 0, ud = (e, t, r) => {
  if (e(t))
    return du(t, r);
}, fd = (...e) => {
  if (pt(e))
    return !0;
  e.findIndex((t) => pt(t));
}, mu = (e) => pt(e) ? !0 : typeof e == "string" ? e.trim().length === 0 : !1, ld = (e) => !mu(e), dd = (e) => Object.keys(e), pd = (e) => {
  if (!pt(e))
    return e[e.length - 1];
}, md = (e, t) => t(e), hd = (e, t) => su(e).map((r) => {
  const [n, o] = r;
  return t(n, o);
}), yd = (e, t) => {
  const {
    [t]: r,
    ...n
  } = e;
  return n;
}, gd = (e, t) => (e[t] = void 0, e), bd = (e, t) => Wt(e) ? e : t, wd = (e, t = {}) => {
  try {
    return e();
  } catch (r) {
    const {
      message: n,
      cause: o
    } = t, i = new Error(n, {
      cause: o
    });
    if (r instanceof Error)
      return r.cause = i, r;
    throw new Error(n, {
      cause: [r, o]
    });
  }
}, xd = (e) => {
  const t = Object.entries(e).filter(([r, n]) => Wt(n));
  return Object.fromEntries(t);
}, hu = (e) => {
  if (!pt(e))
    return e.slice(1);
}, Sd = hu, Ps = (e) => X0(e) ? e() : e, yu = (e, t = {}) => {
  const {
    quiet: r = !1,
    def: n = void 0,
    onError: o
  } = t;
  try {
    return e();
  } catch (i) {
    return r || (console.error(i), Wt(o) && console.log(Ps(o))), n;
  }
}, vd = async (e, t = {}) => {
  const {
    quiet: r = !1,
    def: n = void 0,
    onError: o
  } = t;
  return yu(async () => {
    const i = e();
    return i instanceof Promise ? await i.catch((s) => (r || (console.error(s), Wt(o) && console.log(Ps(o))), n)) : i;
  });
}, gu = (e, t, r) => ({
  ...e,
  ...Object.fromEntries([[t, r]])
}), bu = (e, t, r) => (e[t] = r, e);
function Od(e, t) {
  const r = [];
  let n = !1;
  for (let o = 0; o < e && !n; o++) {
    const i = t(o, () => {
      n = !0;
    });
    yb(i) && r.push(i);
  }
  return r;
}
function* _d(e, t) {
  let r = !1;
  for (let n = 0; n < e; n++) {
    if (r)
      return;
    yield t(n, () => {
      r = !0;
    });
  }
}
const Ed = (e) => {
  if (pt(e))
    return !1;
  const t = ["true", "1", "yes", "on"], r = ["false", "0", "no", "off"];
  return t.includes(e.toLowerCase()) ? !0 : (r.includes(e.toLowerCase()), !1);
}, $d = (e, t = {}) => {
  const {
    compact: r = !1
  } = t;
  return e.reduce((n, o) => (Fs.entries(o).forEach((i) => {
    const [s, c] = i, u = n[s] ?? [];
    n[s] = r && u.includes(c) ? u : [...u, c];
  }), n), {});
}, Ad = (e) => {
  if (!pt(e))
    return Number(e);
}, Id = (e) => {
  const t = () => {
  };
  return new Promise((r, n) => {
    try {
      r(e(t));
    } catch (o) {
      n(o);
    }
  });
}, wu = (e) => e instanceof Error, Rd = (e, t) => {
  if (wu(e))
    throw new Error(t, {
      cause: e
    });
  return e;
}, Pd = () => [], Fd = (e) => [e], Cd = (e, t) => [e, t], kd = (e, t, r) => [e, t, r], Md = (e, t, r, n) => [e, t, r, n], Td = (e, t, r, n, o) => [e, t, r, n, o], Ud = (e) => {
  const t = e;
  return typeof t == "object" && typeof t.length == "number";
}, Nd = (e) => {
  const t = e;
  return typeof t == "object" && (typeof t.message == "string" || typeof t.stack == "string" || Wt(t.cause));
}, Ld = (e) => typeof e == "function", Dd = (e, t, r) => {
  const n = Rs(e, t);
  if (fi(n))
    return e;
  const o = r(n);
  return gu(e, t, o);
}, jd = (e, t, r) => {
  const n = Rs(e, t);
  if (fi(n))
    return e;
  const o = r(n);
  return bu(e, t, o);
}, Bd = (e) => Object.values(e), zd = (e) => new Promise((t) => {
  setTimeout(() => {
    t(void 0);
  }, e);
}), Wd = ({
  settleAction: e,
  settledAfterMs: t
}) => {
  let r, n = Date.now(), o = !1;
  const i = () => {
    if (Date.now() > n + t) {
      Wt(r) && e(r), o = !1;
      return;
    }
    o = !0, setTimeout(i, t);
  };
  return {
    update: (s) => {
      r = s, n = Date.now(), o || i();
    }
  };
}, Fs = {
  isErrorLike: Nd,
  orError: wd,
  tryValue: Rd,
  isErrorType: wu,
  isEmpty: mu,
  isNotEmpty: ld,
  isIterator: cu,
  isArrayLike: Ud,
  times: Od,
  first: au,
  last: pd,
  fix: rd,
  iff: du,
  iffTyped: ud,
  includesUndefined: fd,
  isDefined: Wt,
  isUndefined: pt,
  omit: yd,
  omitUnsafe: gd,
  orElse: bd,
  removeUndefinedValues: xd,
  toMany: lu,
  set: gu,
  setUnsafe: bu,
  get: Rs,
  update: Dd,
  updateUnsafe: jd,
  entries: su,
  keys: dd,
  values: Bd,
  forEach: nd,
  filter: td,
  chain: ed,
  fromEntries: uu,
  fromEntriesToMultimap: id,
  freeze: od,
  hasKey: sd,
  tuple0: Pd,
  tuple1: Fd,
  tuple2: Cd,
  tuple3: kd,
  tuple4: Md,
  tuple5: Td,
  safe: yu,
  safeAsync: vd,
  valueOf: Ps,
  mapValue: md,
  headOf: cd,
  tailOf: hu,
  restOf: Sd,
  toMultiMap: $d,
  timesGen: _d,
  isIterable: fu,
  isBrowser: pu,
  iffBrowser: ad,
  mapOf: hd,
  toPromise: Id,
  all: Promise.all,
  isFunction: Ld,
  toNumber: Ad,
  toBoolean: Ed,
  waitTimeout: zd,
  createSettler: Wd
};
function qd(e) {
  return Ie(e) && !Mt(e) && !Jn(e) && Symbol.asyncIterator in e;
}
function Mt(e) {
  return Array.isArray(e);
}
function xu(e) {
  return typeof e == "bigint";
}
function qo(e) {
  return typeof e == "boolean";
}
function Cs(e) {
  return e instanceof globalThis.Date;
}
function Kd(e) {
  return typeof e == "function";
}
function Yd(e) {
  return Ie(e) && !Mt(e) && !Jn(e) && Symbol.iterator in e;
}
function Gd(e) {
  return e === null;
}
function ur(e) {
  return typeof e == "number";
}
function Ie(e) {
  return typeof e == "object" && e !== null;
}
function Su(e) {
  return e instanceof globalThis.RegExp;
}
function Re(e) {
  return typeof e == "string";
}
function Vd(e) {
  return typeof e == "symbol";
}
function Jn(e) {
  return e instanceof globalThis.Uint8Array;
}
function _e(e) {
  return e === void 0;
}
function Hd(e) {
  return e.map((t) => Ro(t));
}
function Jd(e) {
  return new Date(e.getTime());
}
function Xd(e) {
  return new Uint8Array(e);
}
function Zd(e) {
  return new RegExp(e.source, e.flags);
}
function Qd(e) {
  const t = {};
  for (const r of Object.getOwnPropertyNames(e))
    t[r] = Ro(e[r]);
  for (const r of Object.getOwnPropertySymbols(e))
    t[r] = Ro(e[r]);
  return t;
}
function Ro(e) {
  return Mt(e) ? Hd(e) : Cs(e) ? Jd(e) : Jn(e) ? Xd(e) : Su(e) ? Zd(e) : Ie(e) ? Qd(e) : e;
}
function mt(e) {
  return Ro(e);
}
function ep(e) {
  return e.map((t) => ks(t));
}
function ks(e, t) {
  return mt(t === void 0 ? e : { ...t, ...e });
}
function tp(e) {
  return Ko(e) && Symbol.asyncIterator in e;
}
function rp(e) {
  return Ko(e) && Symbol.iterator in e;
}
function np(e) {
  return e instanceof Promise;
}
function vu(e) {
  return e instanceof Date && Number.isFinite(e.getTime());
}
function Ou(e) {
  return e instanceof globalThis.Uint8Array;
}
function Ko(e) {
  return e !== null && typeof e == "object";
}
function Yo(e) {
  return Array.isArray(e) && !ArrayBuffer.isView(e);
}
function Ms(e) {
  return e === void 0;
}
function _u(e) {
  return e === null;
}
function Eu(e) {
  return typeof e == "boolean";
}
function Br(e) {
  return typeof e == "number";
}
function op(e) {
  return Number.isInteger(e);
}
function $u(e) {
  return typeof e == "bigint";
}
function Ts(e) {
  return typeof e == "string";
}
function ip(e) {
  return typeof e == "function";
}
function Au(e) {
  return typeof e == "symbol";
}
var fr;
(function(e) {
  e.InstanceMode = "default", e.ExactOptionalPropertyTypes = !1, e.AllowArrayObject = !1, e.AllowNaN = !1, e.AllowNullVoid = !1;
  function t(s, c) {
    return e.ExactOptionalPropertyTypes ? c in s : s[c] !== void 0;
  }
  e.IsExactOptionalProperty = t;
  function r(s) {
    const c = Ko(s);
    return e.AllowArrayObject ? c : c && !Yo(s);
  }
  e.IsObjectLike = r;
  function n(s) {
    return r(s) && !(s instanceof Date) && !(s instanceof Uint8Array);
  }
  e.IsRecordLike = n;
  function o(s) {
    return e.AllowNaN ? Br(s) : Number.isFinite(s);
  }
  e.IsNumberLike = o;
  function i(s) {
    const c = Ms(s);
    return e.AllowNullVoid ? c || s === null : c;
  }
  e.IsVoidLike = i;
})(fr || (fr = {}));
function sp(e) {
  return globalThis.Object.freeze(e).map((t) => Po(t));
}
function cp(e) {
  const t = {};
  for (const r of Object.getOwnPropertyNames(e))
    t[r] = Po(e[r]);
  for (const r of Object.getOwnPropertySymbols(e))
    t[r] = Po(e[r]);
  return globalThis.Object.freeze(t);
}
function Po(e) {
  return Mt(e) ? sp(e) : Cs(e) ? e : Jn(e) ? e : Su(e) ? e : Ie(e) ? cp(e) : e;
}
function W(e, t) {
  const r = t !== void 0 ? { ...t, ...e } : e;
  switch (fr.InstanceMode) {
    case "freeze":
      return Po(r);
    case "clone":
      return mt(r);
    default:
      return r;
  }
}
class qt extends Error {
  constructor(t) {
    super(t);
  }
}
const jt = Symbol.for("TypeBox.Transform"), Go = Symbol.for("TypeBox.Readonly"), dr = Symbol.for("TypeBox.Optional"), Vo = Symbol.for("TypeBox.Hint"), B = Symbol.for("TypeBox.Kind");
function ap(e) {
  return Ie(e) && e[Go] === "Readonly";
}
function en(e) {
  return Ie(e) && e[dr] === "Optional";
}
function Iu(e) {
  return oe(e, "Any");
}
function Xn(e) {
  return oe(e, "Array");
}
function Us(e) {
  return oe(e, "AsyncIterator");
}
function Ru(e) {
  return oe(e, "BigInt");
}
function Pu(e) {
  return oe(e, "Boolean");
}
function Ns(e) {
  return oe(e, "Constructor");
}
function up(e) {
  return oe(e, "Date");
}
function Ls(e) {
  return oe(e, "Function");
}
function Ho(e) {
  return oe(e, "Integer");
}
function Tt(e) {
  return oe(e, "Intersect");
}
function Ds(e) {
  return oe(e, "Iterator");
}
function oe(e, t) {
  return Ie(e) && B in e && e[B] === t;
}
function Zn(e) {
  return oe(e, "Literal");
}
function Rr(e) {
  return oe(e, "MappedKey");
}
function bt(e) {
  return oe(e, "MappedResult");
}
function Qn(e) {
  return oe(e, "Never");
}
function fp(e) {
  return oe(e, "Not");
}
function lp(e) {
  return oe(e, "Null");
}
function Jo(e) {
  return oe(e, "Number");
}
function Kt(e) {
  return oe(e, "Object");
}
function Xo(e) {
  return oe(e, "Promise");
}
function Fu(e) {
  return oe(e, "Record");
}
function Cu(e) {
  return oe(e, "Ref");
}
function ku(e) {
  return oe(e, "RegExp");
}
function js(e) {
  return oe(e, "String");
}
function dp(e) {
  return oe(e, "Symbol");
}
function Pr(e) {
  return oe(e, "TemplateLiteral");
}
function pp(e) {
  return oe(e, "This");
}
function Bs(e) {
  return Ie(e) && jt in e;
}
function tn(e) {
  return oe(e, "Tuple");
}
function mp(e) {
  return oe(e, "Undefined");
}
function We(e) {
  return oe(e, "Union");
}
function hp(e) {
  return oe(e, "Uint8Array");
}
function yp(e) {
  return oe(e, "Unknown");
}
function gp(e) {
  return oe(e, "Unsafe");
}
function bp(e) {
  return oe(e, "Void");
}
function wp(e) {
  return Ie(e) && B in e && Re(e[B]);
}
function Gr(e) {
  return Iu(e) || Xn(e) || Pu(e) || Ru(e) || Us(e) || Ns(e) || up(e) || Ls(e) || Ho(e) || Tt(e) || Ds(e) || Zn(e) || Rr(e) || bt(e) || Qn(e) || fp(e) || lp(e) || Jo(e) || Kt(e) || Xo(e) || Fu(e) || Cu(e) || ku(e) || js(e) || dp(e) || Pr(e) || pp(e) || tn(e) || mp(e) || We(e) || hp(e) || yp(e) || gp(e) || bp(e) || wp(e);
}
const xp = [
  "Any",
  "Array",
  "AsyncIterator",
  "BigInt",
  "Boolean",
  "Constructor",
  "Date",
  "Enum",
  "Function",
  "Integer",
  "Intersect",
  "Iterator",
  "Literal",
  "MappedKey",
  "MappedResult",
  "Not",
  "Null",
  "Number",
  "Object",
  "Promise",
  "Record",
  "Ref",
  "RegExp",
  "String",
  "Symbol",
  "TemplateLiteral",
  "This",
  "Tuple",
  "Undefined",
  "Union",
  "Uint8Array",
  "Unknown",
  "Void"
];
function Mu(e) {
  try {
    return new RegExp(e), !0;
  } catch {
    return !1;
  }
}
function zs(e) {
  if (!Re(e))
    return !1;
  for (let t = 0; t < e.length; t++) {
    const r = e.charCodeAt(t);
    if (r >= 7 && r <= 13 || r === 27 || r === 127)
      return !1;
  }
  return !0;
}
function Tu(e) {
  return Ws(e) || ze(e);
}
function _n(e) {
  return _e(e) || xu(e);
}
function we(e) {
  return _e(e) || ur(e);
}
function Ws(e) {
  return _e(e) || qo(e);
}
function le(e) {
  return _e(e) || Re(e);
}
function Sp(e) {
  return _e(e) || Re(e) && zs(e) && Mu(e);
}
function vp(e) {
  return _e(e) || Re(e) && zs(e);
}
function Uu(e) {
  return _e(e) || ze(e);
}
function Fo(e) {
  return Ie(e) && e[dr] === "Optional";
}
function Ft(e) {
  return ie(e, "Any") && le(e.$id);
}
function Fr(e) {
  return ie(e, "Array") && e.type === "array" && le(e.$id) && ze(e.items) && we(e.minItems) && we(e.maxItems) && Ws(e.uniqueItems) && Uu(e.contains) && we(e.minContains) && we(e.maxContains);
}
function qs(e) {
  return ie(e, "AsyncIterator") && e.type === "AsyncIterator" && le(e.$id) && ze(e.items);
}
function Zo(e) {
  return ie(e, "BigInt") && e.type === "bigint" && le(e.$id) && _n(e.exclusiveMaximum) && _n(e.exclusiveMinimum) && _n(e.maximum) && _n(e.minimum) && _n(e.multipleOf);
}
function Cr(e) {
  return ie(e, "Boolean") && e.type === "boolean" && le(e.$id);
}
function Qo(e) {
  return ie(e, "Constructor") && e.type === "Constructor" && le(e.$id) && Mt(e.parameters) && e.parameters.every((t) => ze(t)) && ze(e.returns);
}
function ei(e) {
  return ie(e, "Date") && e.type === "Date" && le(e.$id) && we(e.exclusiveMaximumTimestamp) && we(e.exclusiveMinimumTimestamp) && we(e.maximumTimestamp) && we(e.minimumTimestamp) && we(e.multipleOfTimestamp);
}
function ti(e) {
  return ie(e, "Function") && e.type === "Function" && le(e.$id) && Mt(e.parameters) && e.parameters.every((t) => ze(t)) && ze(e.returns);
}
function rr(e) {
  return ie(e, "Integer") && e.type === "integer" && le(e.$id) && we(e.exclusiveMaximum) && we(e.exclusiveMinimum) && we(e.maximum) && we(e.minimum) && we(e.multipleOf);
}
function Nu(e) {
  return Ie(e) && Object.entries(e).every(([t, r]) => zs(t) && ze(r));
}
function kr(e) {
  return ie(e, "Intersect") && !(Re(e.type) && e.type !== "object") && Mt(e.allOf) && e.allOf.every((t) => ze(t) && !Ip(t)) && le(e.type) && (Ws(e.unevaluatedProperties) || Uu(e.unevaluatedProperties)) && le(e.$id);
}
function Ks(e) {
  return ie(e, "Iterator") && e.type === "Iterator" && le(e.$id) && ze(e.items);
}
function ie(e, t) {
  return Ie(e) && B in e && e[B] === t;
}
function Lu(e) {
  return pr(e) && Re(e.const);
}
function Du(e) {
  return pr(e) && ur(e.const);
}
function ju(e) {
  return pr(e) && qo(e.const);
}
function pr(e) {
  return ie(e, "Literal") && le(e.$id) && Op(e.const);
}
function Op(e) {
  return qo(e) || ur(e) || Re(e);
}
function _p(e) {
  return ie(e, "MappedKey") && Mt(e.keys) && e.keys.every((t) => ur(t) || Re(t));
}
function Ep(e) {
  return ie(e, "MappedResult") && Nu(e.properties);
}
function mr(e) {
  return ie(e, "Never") && Ie(e.not) && Object.getOwnPropertyNames(e.not).length === 0;
}
function Vr(e) {
  return ie(e, "Not") && ze(e.not);
}
function Ys(e) {
  return ie(e, "Null") && e.type === "null" && le(e.$id);
}
function nt(e) {
  return ie(e, "Number") && e.type === "number" && le(e.$id) && we(e.exclusiveMaximum) && we(e.exclusiveMinimum) && we(e.maximum) && we(e.minimum) && we(e.multipleOf);
}
function ve(e) {
  return ie(e, "Object") && e.type === "object" && le(e.$id) && Nu(e.properties) && Tu(e.additionalProperties) && we(e.minProperties) && we(e.maxProperties);
}
function Gs(e) {
  return ie(e, "Promise") && e.type === "Promise" && le(e.$id) && ze(e.item);
}
function Be(e) {
  return ie(e, "Record") && e.type === "object" && le(e.$id) && Tu(e.additionalProperties) && Ie(e.patternProperties) && ((t) => {
    const r = Object.getOwnPropertyNames(t.patternProperties);
    return r.length === 1 && Mu(r[0]) && Ie(t.patternProperties) && ze(t.patternProperties[r[0]]);
  })(e);
}
function $p(e) {
  return ie(e, "Ref") && le(e.$id) && Re(e.$ref);
}
function Tn(e) {
  return ie(e, "RegExp") && le(e.$id) && Re(e.source) && Re(e.flags) && we(e.maxLength) && we(e.minLength);
}
function Ct(e) {
  return ie(e, "String") && e.type === "string" && le(e.$id) && we(e.minLength) && we(e.maxLength) && Sp(e.pattern) && vp(e.format);
}
function Un(e) {
  return ie(e, "Symbol") && e.type === "symbol" && le(e.$id);
}
function Nn(e) {
  return ie(e, "TemplateLiteral") && e.type === "string" && Re(e.pattern) && e.pattern[0] === "^" && e.pattern[e.pattern.length - 1] === "$";
}
function Ap(e) {
  return ie(e, "This") && le(e.$id) && Re(e.$ref);
}
function Ip(e) {
  return Ie(e) && jt in e;
}
function ri(e) {
  return ie(e, "Tuple") && e.type === "array" && le(e.$id) && ur(e.minItems) && ur(e.maxItems) && e.minItems === e.maxItems && // empty
  (_e(e.items) && _e(e.additionalItems) && e.minItems === 0 || Mt(e.items) && e.items.every((t) => ze(t)));
}
function $r(e) {
  return ie(e, "Undefined") && e.type === "undefined" && le(e.$id);
}
function tr(e) {
  return ie(e, "Union") && le(e.$id) && Ie(e) && Mt(e.anyOf) && e.anyOf.every((t) => ze(t));
}
function eo(e) {
  return ie(e, "Uint8Array") && e.type === "Uint8Array" && le(e.$id) && we(e.minByteLength) && we(e.maxByteLength);
}
function kt(e) {
  return ie(e, "Unknown") && le(e.$id);
}
function Rp(e) {
  return ie(e, "Unsafe");
}
function ni(e) {
  return ie(e, "Void") && e.type === "void" && le(e.$id);
}
function Pp(e) {
  return Ie(e) && B in e && Re(e[B]) && !xp.includes(e[B]);
}
function ze(e) {
  return Ie(e) && (Ft(e) || Fr(e) || Cr(e) || Zo(e) || qs(e) || Qo(e) || ei(e) || ti(e) || rr(e) || kr(e) || Ks(e) || pr(e) || _p(e) || Ep(e) || mr(e) || Vr(e) || Ys(e) || nt(e) || ve(e) || Gs(e) || Be(e) || $p(e) || Tn(e) || Ct(e) || Un(e) || Nn(e) || Ap(e) || ri(e) || $r(e) || tr(e) || eo(e) || kt(e) || Rp(e) || ni(e) || Pp(e));
}
const Fp = "(true|false)", Eo = "(0|[1-9][0-9]*)", Bu = "(.*)", Cp = "(?!.*)", Ln = `^${Eo}$`, Dn = `^${Bu}$`, kp = `^${Cp}$`, Vs = /* @__PURE__ */ new Map();
function zu(e) {
  return Vs.has(e);
}
function Mp(e, t) {
  Vs.set(e, t);
}
function Tp(e) {
  return Vs.get(e);
}
const Hs = /* @__PURE__ */ new Map();
function Js(e) {
  return Hs.has(e);
}
function Up(e, t) {
  Hs.set(e, t);
}
function Np(e) {
  return Hs.get(e);
}
function Lp(e, t) {
  return e.includes(t);
}
function Dp(e) {
  return [...new Set(e)];
}
function jp(e, t) {
  return e.filter((r) => t.includes(r));
}
function Bp(e, t) {
  return e.reduce((r, n) => jp(r, n), t);
}
function zp(e) {
  return e.length === 1 ? e[0] : e.length > 1 ? Bp(e.slice(1), e[0]) : [];
}
function Wp(e) {
  const t = [];
  for (const r of e)
    t.push(...r);
  return t;
}
function jn(e) {
  return W({ [B]: "Any" }, e);
}
function Wu(e, t) {
  return W({ [B]: "Array", type: "array", items: e }, t);
}
function qu(e, t) {
  return W({ [B]: "AsyncIterator", type: "AsyncIterator", items: e }, t);
}
function qp(e, t) {
  const { [t]: r, ...n } = e;
  return n;
}
function Ot(e, t) {
  return t.reduce((r, n) => qp(r, n), e);
}
function ct(e) {
  return W({ [B]: "Never", not: {} }, e);
}
function qe(e) {
  return W({
    [B]: "MappedResult",
    properties: e
  });
}
function Ku(e, t, r) {
  return W({ [B]: "Constructor", type: "Constructor", parameters: e, returns: t }, r);
}
function oi(e, t, r) {
  return W({ [B]: "Function", type: "Function", parameters: e, returns: t }, r);
}
function rs(e, t) {
  return W({ [B]: "Union", anyOf: e }, t);
}
function Kp(e) {
  return e.some((t) => en(t));
}
function Xc(e) {
  return e.map((t) => en(t) ? Yp(t) : t);
}
function Yp(e) {
  return Ot(e, [dr]);
}
function Gp(e, t) {
  return Kp(e) ? Tr(rs(Xc(e), t)) : rs(Xc(e), t);
}
function rn(e, t) {
  return e.length === 0 ? ct(t) : e.length === 1 ? W(e[0], t) : Gp(e, t);
}
function Ze(e, t) {
  return e.length === 0 ? ct(t) : e.length === 1 ? W(e[0], t) : rs(e, t);
}
class Zc extends qt {
}
function Vp(e) {
  return e.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
function Xs(e, t, r) {
  return e[t] === r && e.charCodeAt(t - 1) !== 92;
}
function Qt(e, t) {
  return Xs(e, t, "(");
}
function Bn(e, t) {
  return Xs(e, t, ")");
}
function Yu(e, t) {
  return Xs(e, t, "|");
}
function Hp(e) {
  if (!(Qt(e, 0) && Bn(e, e.length - 1)))
    return !1;
  let t = 0;
  for (let r = 0; r < e.length; r++)
    if (Qt(e, r) && (t += 1), Bn(e, r) && (t -= 1), t === 0 && r !== e.length - 1)
      return !1;
  return !0;
}
function Jp(e) {
  return e.slice(1, e.length - 1);
}
function Xp(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++)
    if (Qt(e, r) && (t += 1), Bn(e, r) && (t -= 1), Yu(e, r) && t === 0)
      return !0;
  return !1;
}
function Zp(e) {
  for (let t = 0; t < e.length; t++)
    if (Qt(e, t))
      return !0;
  return !1;
}
function Qp(e) {
  let [t, r] = [0, 0];
  const n = [];
  for (let i = 0; i < e.length; i++)
    if (Qt(e, i) && (t += 1), Bn(e, i) && (t -= 1), Yu(e, i) && t === 0) {
      const s = e.slice(r, i);
      s.length > 0 && n.push(Hr(s)), r = i + 1;
    }
  const o = e.slice(r);
  return o.length > 0 && n.push(Hr(o)), n.length === 0 ? { type: "const", const: "" } : n.length === 1 ? n[0] : { type: "or", expr: n };
}
function em(e) {
  function t(o, i) {
    if (!Qt(o, i))
      throw new Zc("TemplateLiteralParser: Index must point to open parens");
    let s = 0;
    for (let c = i; c < o.length; c++)
      if (Qt(o, c) && (s += 1), Bn(o, c) && (s -= 1), s === 0)
        return [i, c];
    throw new Zc("TemplateLiteralParser: Unclosed group parens in expression");
  }
  function r(o, i) {
    for (let s = i; s < o.length; s++)
      if (Qt(o, s))
        return [i, s];
    return [i, o.length];
  }
  const n = [];
  for (let o = 0; o < e.length; o++)
    if (Qt(e, o)) {
      const [i, s] = t(e, o), c = e.slice(i, s + 1);
      n.push(Hr(c)), o = s;
    } else {
      const [i, s] = r(e, o), c = e.slice(i, s);
      c.length > 0 && n.push(Hr(c)), o = s - 1;
    }
  return n.length === 0 ? { type: "const", const: "" } : n.length === 1 ? n[0] : { type: "and", expr: n };
}
function Hr(e) {
  return Hp(e) ? Hr(Jp(e)) : Xp(e) ? Qp(e) : Zp(e) ? em(e) : { type: "const", const: Vp(e) };
}
function Zs(e) {
  return Hr(e.slice(1, e.length - 1));
}
class tm extends qt {
}
function rm(e) {
  return e.type === "or" && e.expr.length === 2 && e.expr[0].type === "const" && e.expr[0].const === "0" && e.expr[1].type === "const" && e.expr[1].const === "[1-9][0-9]*";
}
function nm(e) {
  return e.type === "or" && e.expr.length === 2 && e.expr[0].type === "const" && e.expr[0].const === "true" && e.expr[1].type === "const" && e.expr[1].const === "false";
}
function om(e) {
  return e.type === "const" && e.const === ".*";
}
function zn(e) {
  return rm(e) || om(e) ? !1 : nm(e) ? !0 : e.type === "and" ? e.expr.every((t) => zn(t)) : e.type === "or" ? e.expr.every((t) => zn(t)) : e.type === "const" ? !0 : (() => {
    throw new tm("Unknown expression type");
  })();
}
function im(e) {
  const t = Zs(e.pattern);
  return zn(t);
}
class sm extends qt {
}
function* Gu(e) {
  if (e.length === 1)
    return yield* e[0];
  for (const t of e[0])
    for (const r of Gu(e.slice(1)))
      yield `${t}${r}`;
}
function* cm(e) {
  return yield* Gu(e.expr.map((t) => [...ii(t)]));
}
function* am(e) {
  for (const t of e.expr)
    yield* ii(t);
}
function* um(e) {
  return yield e.const;
}
function* ii(e) {
  return e.type === "and" ? yield* cm(e) : e.type === "or" ? yield* am(e) : e.type === "const" ? yield* um(e) : (() => {
    throw new sm("Unknown expression");
  })();
}
function Vu(e) {
  const t = Zs(e.pattern);
  return zn(t) ? [...ii(t)] : [];
}
function $e(e, t) {
  return W({
    [B]: "Literal",
    const: e,
    type: typeof e
  }, t);
}
function Hu(e) {
  return W({ [B]: "Boolean", type: "boolean" }, e);
}
function Qs(e) {
  return W({ [B]: "BigInt", type: "bigint" }, e);
}
function nn(e) {
  return W({ [B]: "Number", type: "number" }, e);
}
function lr(e) {
  return W({ [B]: "String", type: "string" }, e);
}
function* fm(e) {
  const t = e.trim().replace(/"|'/g, "");
  return t === "boolean" ? yield Hu() : t === "number" ? yield nn() : t === "bigint" ? yield Qs() : t === "string" ? yield lr() : yield (() => {
    const r = t.split("|").map((n) => $e(n.trim()));
    return r.length === 0 ? ct() : r.length === 1 ? r[0] : rn(r);
  })();
}
function* lm(e) {
  if (e[1] !== "{") {
    const t = $e("$"), r = ns(e.slice(1));
    return yield* [t, ...r];
  }
  for (let t = 2; t < e.length; t++)
    if (e[t] === "}") {
      const r = fm(e.slice(2, t)), n = ns(e.slice(t + 1));
      return yield* [...r, ...n];
    }
  yield $e(e);
}
function* ns(e) {
  for (let t = 0; t < e.length; t++)
    if (e[t] === "$") {
      const r = $e(e.slice(0, t)), n = lm(e.slice(t));
      return yield* [r, ...n];
    }
  yield $e(e);
}
function dm(e) {
  return [...ns(e)];
}
class pm extends qt {
}
function mm(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ju(e, t) {
  return Pr(e) ? e.pattern.slice(1, e.pattern.length - 1) : We(e) ? `(${e.anyOf.map((r) => Ju(r, t)).join("|")})` : Jo(e) ? `${t}${Eo}` : Ho(e) ? `${t}${Eo}` : Ru(e) ? `${t}${Eo}` : js(e) ? `${t}${Bu}` : Zn(e) ? `${t}${mm(e.const.toString())}` : Pu(e) ? `${t}${Fp}` : (() => {
    throw new pm(`Unexpected Kind '${e[B]}'`);
  })();
}
function Qc(e) {
  return `^${e.map((t) => Ju(t, "")).join("")}$`;
}
function Co(e) {
  const r = Vu(e).map((n) => $e(n));
  return rn(r);
}
function Xu(e, t) {
  const r = Re(e) ? Qc(dm(e)) : Qc(e);
  return W({ [B]: "TemplateLiteral", type: "string", pattern: r }, t);
}
function hm(e) {
  return Vu(e).map((r) => r.toString());
}
function ym(e) {
  const t = [];
  for (const r of e)
    t.push(...hr(r));
  return t;
}
function gm(e) {
  return [e.toString()];
}
function hr(e) {
  return [...new Set(Pr(e) ? hm(e) : We(e) ? ym(e.anyOf) : Zn(e) ? gm(e.const) : Jo(e) ? ["[number]"] : Ho(e) ? ["[number]"] : [])];
}
function bm(e, t, r) {
  const n = {};
  for (const o of Object.getOwnPropertyNames(t))
    n[o] = ec(e, hr(t[o]), r);
  return n;
}
function wm(e, t, r) {
  return bm(e, t.properties, r);
}
function xm(e, t, r) {
  const n = wm(e, t, r);
  return qe(n);
}
function Zu(e, t) {
  return e.map((r) => Qu(r, t));
}
function Sm(e) {
  return e.filter((t) => !Qn(t));
}
function vm(e, t) {
  return of(Sm(Zu(e, t)));
}
function Om(e) {
  return e.some((t) => Qn(t)) ? [] : e;
}
function _m(e, t) {
  return rn(Om(Zu(e, t)));
}
function Em(e, t) {
  return t in e ? e[t] : t === "[number]" ? rn(e) : ct();
}
function $m(e, t) {
  return t === "[number]" ? e : ct();
}
function Am(e, t) {
  return t in e ? e[t] : ct();
}
function Qu(e, t) {
  return Tt(e) ? vm(e.allOf, t) : We(e) ? _m(e.anyOf, t) : tn(e) ? Em(e.items ?? [], t) : Xn(e) ? $m(e.items, t) : Kt(e) ? Am(e.properties, t) : ct();
}
function ef(e, t) {
  return t.map((r) => Qu(e, r));
}
function ea(e, t) {
  return rn(ef(e, t));
}
function ec(e, t, r) {
  return bt(t) ? xm(e, t, r) : Rr(t) ? Fm(e, t, r) : W(Gr(t) ? ea(e, hr(t)) : ea(e, t), r);
}
function Im(e, t, r) {
  return { [t]: ec(e, [t], mt(r)) };
}
function Rm(e, t, r) {
  return t.reduce((n, o) => ({ ...n, ...Im(e, o, r) }), {});
}
function Pm(e, t, r) {
  return Rm(e, t.keys, r);
}
function Fm(e, t, r) {
  const n = Pm(e, t, r);
  return qe(n);
}
function tf(e, t) {
  return W({ [B]: "Iterator", type: "Iterator", items: e }, t);
}
function Cm(e) {
  const t = [];
  for (let r in e)
    en(e[r]) || t.push(r);
  return t;
}
function km(e, t) {
  const r = Cm(e), n = r.length > 0 ? { [B]: "Object", type: "object", properties: e, required: r } : { [B]: "Object", type: "object", properties: e };
  return W(n, t);
}
const Le = km;
function rf(e, t) {
  return W({ [B]: "Promise", type: "Promise", item: e }, t);
}
function Mm(e) {
  return W(Ot(e, [Go]));
}
function Tm(e) {
  return W({ ...e, [Go]: "Readonly" });
}
function Um(e, t) {
  return t === !1 ? Mm(e) : Tm(e);
}
function Mr(e, t) {
  const r = t ?? !0;
  return bt(e) ? Dm(e, r) : Um(e, r);
}
function Nm(e, t) {
  const r = {};
  for (const n of globalThis.Object.getOwnPropertyNames(e))
    r[n] = Mr(e[n], t);
  return r;
}
function Lm(e, t) {
  return Nm(e.properties, t);
}
function Dm(e, t) {
  const r = Lm(e, t);
  return qe(r);
}
function to(e, t) {
  return W(e.length > 0 ? { [B]: "Tuple", type: "array", items: e, additionalItems: !1, minItems: e.length, maxItems: e.length } : { [B]: "Tuple", type: "array", minItems: e.length, maxItems: e.length }, t);
}
function nf(e, t) {
  return e in t ? xt(e, t[e]) : qe(t);
}
function jm(e) {
  return { [e]: $e(e) };
}
function Bm(e) {
  const t = {};
  for (const r of e)
    t[r] = $e(r);
  return t;
}
function zm(e, t) {
  return Lp(t, e) ? jm(e) : Bm(t);
}
function Wm(e, t) {
  const r = zm(e, t);
  return nf(e, r);
}
function En(e, t) {
  return t.map((r) => xt(e, r));
}
function qm(e, t) {
  const r = {};
  for (const n of globalThis.Object.getOwnPropertyNames(t))
    r[n] = xt(e, t[n]);
  return r;
}
function xt(e, t) {
  const r = { ...t };
  return (
    // unevaluated modifier types
    en(t) ? Tr(xt(e, Ot(t, [dr]))) : ap(t) ? Mr(xt(e, Ot(t, [Go]))) : (
      // unevaluated mapped types
      bt(t) ? nf(e, t.properties) : Rr(t) ? Wm(e, t.keys) : (
        // unevaluated types
        Ns(t) ? Ku(En(e, t.parameters), xt(e, t.returns), r) : Ls(t) ? oi(En(e, t.parameters), xt(e, t.returns), r) : Us(t) ? qu(xt(e, t.items), r) : Ds(t) ? tf(xt(e, t.items), r) : Tt(t) ? Ur(En(e, t.allOf), r) : We(t) ? Ze(En(e, t.anyOf), r) : tn(t) ? to(En(e, t.items ?? []), r) : Kt(t) ? Le(qm(e, t.properties), r) : Xn(t) ? Wu(xt(e, t.items), r) : Xo(t) ? rf(xt(e, t.item), r) : t
      )
    )
  );
}
function Km(e, t) {
  const r = {};
  for (const n of e)
    r[n] = xt(n, t);
  return r;
}
function Ym(e, t, r) {
  const n = Gr(e) ? hr(e) : e, o = t({ [B]: "MappedKey", keys: n }), i = Km(n, o);
  return Le(i, r);
}
function Gm(e) {
  return W(Ot(e, [dr]));
}
function Vm(e) {
  return W({ ...e, [dr]: "Optional" });
}
function Hm(e, t) {
  return t === !1 ? Gm(e) : Vm(e);
}
function Tr(e, t) {
  const r = t ?? !0;
  return bt(e) ? Zm(e, r) : Hm(e, r);
}
function Jm(e, t) {
  const r = {};
  for (const n of globalThis.Object.getOwnPropertyNames(e))
    r[n] = Tr(e[n], t);
  return r;
}
function Xm(e, t) {
  return Jm(e.properties, t);
}
function Zm(e, t) {
  const r = Xm(e, t);
  return qe(r);
}
function os(e, t = {}) {
  const r = e.every((o) => Kt(o)), n = Gr(t.unevaluatedProperties) ? { unevaluatedProperties: t.unevaluatedProperties } : {};
  return W(t.unevaluatedProperties === !1 || Gr(t.unevaluatedProperties) || r ? { ...n, [B]: "Intersect", type: "object", allOf: e } : { ...n, [B]: "Intersect", allOf: e }, t);
}
function Qm(e) {
  return e.every((t) => en(t));
}
function eh(e) {
  return Ot(e, [dr]);
}
function ta(e) {
  return e.map((t) => en(t) ? eh(t) : t);
}
function th(e, t) {
  return Qm(e) ? Tr(os(ta(e), t)) : os(ta(e), t);
}
function of(e, t = {}) {
  if (e.length === 0)
    return ct(t);
  if (e.length === 1)
    return W(e[0], t);
  if (e.some((r) => Bs(r)))
    throw new Error("Cannot intersect transform types");
  return th(e, t);
}
function Ur(e, t) {
  if (e.length === 0)
    return ct(t);
  if (e.length === 1)
    return W(e[0], t);
  if (e.some((r) => Bs(r)))
    throw new Error("Cannot intersect transform types");
  return os(e, t);
}
function sf(e) {
  return e.map((t) => tc(t));
}
function rh(e) {
  return Ur(sf(e));
}
function nh(e) {
  return Ze(sf(e));
}
function oh(e) {
  return tc(e);
}
function tc(e) {
  return Tt(e) ? rh(e.allOf) : We(e) ? nh(e.anyOf) : Xo(e) ? oh(e.item) : e;
}
function ih(e, t) {
  return W(tc(e), t);
}
function cf(e) {
  const t = [];
  for (const r of e)
    t.push(si(r));
  return t;
}
function sh(e) {
  const t = cf(e);
  return Wp(t);
}
function ch(e) {
  const t = cf(e);
  return zp(t);
}
function ah(e) {
  return e.map((t, r) => r.toString());
}
function uh(e) {
  return ["[number]"];
}
function fh(e) {
  return globalThis.Object.getOwnPropertyNames(e);
}
function lh(e) {
  return is ? globalThis.Object.getOwnPropertyNames(e).map((r) => r[0] === "^" && r[r.length - 1] === "$" ? r.slice(1, r.length - 1) : r) : [];
}
function si(e) {
  return Tt(e) ? sh(e.allOf) : We(e) ? ch(e.anyOf) : tn(e) ? ah(e.items ?? []) : Xn(e) ? uh(e.items) : Kt(e) ? fh(e.properties) : Fu(e) ? lh(e.patternProperties) : [];
}
let is = !1;
function ra(e) {
  is = !0;
  const t = si(e);
  return is = !1, `^(${t.map((n) => `(${n})`).join("|")})$`;
}
function dh(e) {
  return e.map((t) => t === "[number]" ? nn() : $e(t));
}
function af(e, t) {
  if (bt(e))
    return hh(e, t);
  {
    const r = si(e), n = dh(r), o = rn(n);
    return W(o, t);
  }
}
function ph(e, t) {
  const r = {};
  for (const n of globalThis.Object.getOwnPropertyNames(e))
    r[n] = af(e[n], mt(t));
  return r;
}
function mh(e, t) {
  return ph(e.properties, t);
}
function hh(e, t) {
  const r = mh(e, t);
  return qe(r);
}
function yh(e) {
  const t = [];
  for (const r of e)
    t.push(...si(r));
  return Dp(t);
}
function gh(e) {
  return e.filter((t) => !Qn(t));
}
function bh(e, t) {
  const r = [];
  for (const n of e)
    r.push(...ef(n, [t]));
  return gh(r);
}
function wh(e, t) {
  const r = {};
  for (const n of t)
    r[n] = of(bh(e, n));
  return r;
}
function xh(e, t) {
  const r = yh(e), n = wh(e, r);
  return Le(n, t);
}
function uf(e) {
  return W({ [B]: "Date", type: "Date" }, e);
}
function ff(e) {
  return W({ [B]: "Null", type: "null" }, e);
}
function lf(e) {
  return W({ [B]: "Symbol", type: "symbol" }, e);
}
function df(e) {
  return W({ [B]: "Undefined", type: "undefined" }, e);
}
function pf(e) {
  return W({ [B]: "Uint8Array", type: "Uint8Array" }, e);
}
function ro(e) {
  return W({ [B]: "Unknown" }, e);
}
function Sh(e) {
  return e.map((t) => rc(t, !1));
}
function vh(e) {
  const t = {};
  for (const r of globalThis.Object.getOwnPropertyNames(e))
    t[r] = Mr(rc(e[r], !1));
  return t;
}
function ho(e, t) {
  return t === !0 ? e : Mr(e);
}
function rc(e, t) {
  return qd(e) || Yd(e) ? ho(jn(), t) : Mt(e) ? Mr(to(Sh(e))) : Jn(e) ? pf() : Cs(e) ? uf() : Ie(e) ? ho(Le(vh(e)), t) : Kd(e) ? ho(oi([], ro()), t) : _e(e) ? df() : Gd(e) ? ff() : Vd(e) ? lf() : xu(e) ? Qs() : ur(e) || qo(e) || Re(e) ? $e(e) : Le({});
}
function Oh(e, t) {
  return W(rc(e, !0), t);
}
function _h(e, t) {
  return to(e.parameters, t);
}
function no(e, t) {
  return e.map((r) => Yt(r, t));
}
function Eh(e, t) {
  const r = {};
  for (const n of globalThis.Object.getOwnPropertyNames(e))
    r[n] = Yt(e[n], t);
  return r;
}
function $h(e, t) {
  return e.parameters = no(e.parameters, t), e.returns = Yt(e.returns, t), e;
}
function Ah(e, t) {
  return e.parameters = no(e.parameters, t), e.returns = Yt(e.returns, t), e;
}
function Ih(e, t) {
  return e.allOf = no(e.allOf, t), e;
}
function Rh(e, t) {
  return e.anyOf = no(e.anyOf, t), e;
}
function Ph(e, t) {
  return _e(e.items) || (e.items = no(e.items, t)), e;
}
function Fh(e, t) {
  return e.items = Yt(e.items, t), e;
}
function Ch(e, t) {
  return e.properties = Eh(e.properties, t), e;
}
function kh(e, t) {
  return e.item = Yt(e.item, t), e;
}
function Mh(e, t) {
  return e.items = Yt(e.items, t), e;
}
function Th(e, t) {
  return e.items = Yt(e.items, t), e;
}
function Uh(e, t) {
  const r = t.find((o) => o.$id === e.$ref);
  if (r === void 0)
    throw Error(`Unable to dereference schema with $id ${e.$ref}`);
  const n = Ot(r, ["$id"]);
  return Yt(n, t);
}
function Nh(e, t) {
  return Ns(e) ? $h(e, t) : Ls(e) ? Ah(e, t) : Tt(e) ? Ih(e, t) : We(e) ? Rh(e, t) : tn(e) ? Ph(e, t) : Xn(e) ? Fh(e, t) : Kt(e) ? Ch(e, t) : Xo(e) ? kh(e, t) : Us(e) ? Mh(e, t) : Ds(e) ? Th(e, t) : Cu(e) ? Uh(e, t) : e;
}
function Yt(e, t) {
  return Nh(ks(e), ep(t));
}
function Lh(e, t) {
  if (_e(e))
    throw new Error("Enum undefined or empty");
  const r = globalThis.Object.getOwnPropertyNames(e).filter((i) => isNaN(i)).map((i) => e[i]), o = [...new Set(r)].map((i) => $e(i));
  return Ze(o, { ...t, [Vo]: "Enum" });
}
class Dh extends qt {
}
var b;
(function(e) {
  e[e.Union = 0] = "Union", e[e.True = 1] = "True", e[e.False = 2] = "False";
})(b || (b = {}));
function _t(e) {
  return e === b.False ? e : b.True;
}
function on(e) {
  throw new Dh(e);
}
function Pe(e) {
  return mr(e) || kr(e) || tr(e) || kt(e) || Ft(e);
}
function Fe(e, t) {
  return mr(t) ? yf() : kr(t) ? ci(e, t) : tr(t) ? oc(e, t) : kt(t) ? xf() : Ft(t) ? nc() : on("StructuralRight");
}
function nc(e, t) {
  return b.True;
}
function jh(e, t) {
  return kr(t) ? ci(e, t) : tr(t) && t.anyOf.some((r) => Ft(r) || kt(r)) ? b.True : tr(t) ? b.Union : kt(t) || Ft(t) ? b.True : b.Union;
}
function Bh(e, t) {
  return kt(e) ? b.False : Ft(e) ? b.Union : mr(e) ? b.True : b.False;
}
function zh(e, t) {
  return ve(t) && ai(t) ? b.True : Pe(t) ? Fe(e, t) : Fr(t) ? _t(fe(e.items, t.items)) : b.False;
}
function Wh(e, t) {
  return Pe(t) ? Fe(e, t) : qs(t) ? _t(fe(e.items, t.items)) : b.False;
}
function qh(e, t) {
  return Pe(t) ? Fe(e, t) : ve(t) ? Ve(e, t) : Be(t) ? Et(e, t) : Zo(t) ? b.True : b.False;
}
function mf(e, t) {
  return ju(e) || Cr(e) ? b.True : b.False;
}
function Kh(e, t) {
  return Pe(t) ? Fe(e, t) : ve(t) ? Ve(e, t) : Be(t) ? Et(e, t) : Cr(t) ? b.True : b.False;
}
function Yh(e, t) {
  return Pe(t) ? Fe(e, t) : ve(t) ? Ve(e, t) : Qo(t) ? e.parameters.length > t.parameters.length ? b.False : e.parameters.every((r, n) => _t(fe(t.parameters[n], r)) === b.True) ? _t(fe(e.returns, t.returns)) : b.False : b.False;
}
function Gh(e, t) {
  return Pe(t) ? Fe(e, t) : ve(t) ? Ve(e, t) : Be(t) ? Et(e, t) : ei(t) ? b.True : b.False;
}
function Vh(e, t) {
  return Pe(t) ? Fe(e, t) : ve(t) ? Ve(e, t) : ti(t) ? e.parameters.length > t.parameters.length ? b.False : e.parameters.every((r, n) => _t(fe(t.parameters[n], r)) === b.True) ? _t(fe(e.returns, t.returns)) : b.False : b.False;
}
function hf(e, t) {
  return pr(e) && ur(e.const) || nt(e) || rr(e) ? b.True : b.False;
}
function Hh(e, t) {
  return rr(t) || nt(t) ? b.True : Pe(t) ? Fe(e, t) : ve(t) ? Ve(e, t) : Be(t) ? Et(e, t) : b.False;
}
function ci(e, t) {
  return t.allOf.every((r) => fe(e, r) === b.True) ? b.True : b.False;
}
function Jh(e, t) {
  return e.allOf.some((r) => fe(r, t) === b.True) ? b.True : b.False;
}
function Xh(e, t) {
  return Pe(t) ? Fe(e, t) : Ks(t) ? _t(fe(e.items, t.items)) : b.False;
}
function Zh(e, t) {
  return pr(t) && t.const === e.const ? b.True : Pe(t) ? Fe(e, t) : ve(t) ? Ve(e, t) : Be(t) ? Et(e, t) : Ct(t) ? wf(e) : nt(t) ? gf(e) : rr(t) ? hf(e) : Cr(t) ? mf(e) : b.False;
}
function yf(e, t) {
  return b.False;
}
function Qh(e, t) {
  return b.True;
}
function na(e) {
  let [t, r] = [e, 0];
  for (; Vr(t); )
    t = t.not, r += 1;
  return r % 2 === 0 ? t : ro();
}
function e1(e, t) {
  return Vr(e) ? fe(na(e), t) : Vr(t) ? fe(e, na(t)) : on("Invalid fallthrough for Not");
}
function t1(e, t) {
  return Pe(t) ? Fe(e, t) : ve(t) ? Ve(e, t) : Be(t) ? Et(e, t) : Ys(t) ? b.True : b.False;
}
function gf(e, t) {
  return Du(e) || nt(e) || rr(e) ? b.True : b.False;
}
function r1(e, t) {
  return Pe(t) ? Fe(e, t) : ve(t) ? Ve(e, t) : Be(t) ? Et(e, t) : rr(t) || nt(t) ? b.True : b.False;
}
function it(e, t) {
  return Object.getOwnPropertyNames(e.properties).length === t;
}
function oa(e) {
  return ai(e);
}
function ia(e) {
  return it(e, 0) || it(e, 1) && "description" in e.properties && tr(e.properties.description) && e.properties.description.anyOf.length === 2 && (Ct(e.properties.description.anyOf[0]) && $r(e.properties.description.anyOf[1]) || Ct(e.properties.description.anyOf[1]) && $r(e.properties.description.anyOf[0]));
}
function zi(e) {
  return it(e, 0);
}
function sa(e) {
  return it(e, 0);
}
function n1(e) {
  return it(e, 0);
}
function o1(e) {
  return it(e, 0);
}
function i1(e) {
  return ai(e);
}
function s1(e) {
  const t = nn();
  return it(e, 0) || it(e, 1) && "length" in e.properties && _t(fe(e.properties.length, t)) === b.True;
}
function c1(e) {
  return it(e, 0);
}
function ai(e) {
  const t = nn();
  return it(e, 0) || it(e, 1) && "length" in e.properties && _t(fe(e.properties.length, t)) === b.True;
}
function a1(e) {
  const t = oi([jn()], jn());
  return it(e, 0) || it(e, 1) && "then" in e.properties && _t(fe(e.properties.then, t)) === b.True;
}
function bf(e, t) {
  return fe(e, t) === b.False || Fo(e) && !Fo(t) ? b.False : b.True;
}
function Ve(e, t) {
  return kt(e) ? b.False : Ft(e) ? b.Union : mr(e) || Lu(e) && oa(t) || Du(e) && zi(t) || ju(e) && sa(t) || Un(e) && ia(t) || Zo(e) && n1(t) || Ct(e) && oa(t) || Un(e) && ia(t) || nt(e) && zi(t) || rr(e) && zi(t) || Cr(e) && sa(t) || eo(e) && i1(t) || ei(e) && o1(t) || Qo(e) && c1(t) || ti(e) && s1(t) ? b.True : Be(e) && Ct(ss(e)) ? t[Vo] === "Record" ? b.True : b.False : Be(e) && nt(ss(e)) ? it(t, 0) ? b.True : b.False : b.False;
}
function u1(e, t) {
  return Pe(t) ? Fe(e, t) : Be(t) ? Et(e, t) : ve(t) ? (() => {
    for (const r of Object.getOwnPropertyNames(t.properties)) {
      if (!(r in e.properties) && !Fo(t.properties[r]))
        return b.False;
      if (Fo(t.properties[r]))
        return b.True;
      if (bf(e.properties[r], t.properties[r]) === b.False)
        return b.False;
    }
    return b.True;
  })() : b.False;
}
function f1(e, t) {
  return Pe(t) ? Fe(e, t) : ve(t) && a1(t) ? b.True : Gs(t) ? _t(fe(e.item, t.item)) : b.False;
}
function ss(e) {
  return Ln in e.patternProperties ? nn() : Dn in e.patternProperties ? lr() : on("Unknown record key pattern");
}
function cs(e) {
  return Ln in e.patternProperties ? e.patternProperties[Ln] : Dn in e.patternProperties ? e.patternProperties[Dn] : on("Unable to get record value schema");
}
function Et(e, t) {
  const [r, n] = [ss(t), cs(t)];
  return Lu(e) && nt(r) && _t(fe(e, n)) === b.True ? b.True : eo(e) && nt(r) || Ct(e) && nt(r) || Fr(e) && nt(r) ? fe(e, n) : ve(e) ? (() => {
    for (const o of Object.getOwnPropertyNames(e.properties))
      if (bf(n, e.properties[o]) === b.False)
        return b.False;
    return b.True;
  })() : b.False;
}
function l1(e, t) {
  return Pe(t) ? Fe(e, t) : ve(t) ? Ve(e, t) : Be(t) ? fe(cs(e), cs(t)) : b.False;
}
function d1(e, t) {
  const r = Tn(e) ? lr() : e, n = Tn(t) ? lr() : t;
  return fe(r, n);
}
function wf(e, t) {
  return pr(e) && Re(e.const) || Ct(e) ? b.True : b.False;
}
function p1(e, t) {
  return Pe(t) ? Fe(e, t) : ve(t) ? Ve(e, t) : Be(t) ? Et(e, t) : Ct(t) ? b.True : b.False;
}
function m1(e, t) {
  return Pe(t) ? Fe(e, t) : ve(t) ? Ve(e, t) : Be(t) ? Et(e, t) : Un(t) ? b.True : b.False;
}
function h1(e, t) {
  return Nn(e) ? fe(Co(e), t) : Nn(t) ? fe(e, Co(t)) : on("Invalid fallthrough for TemplateLiteral");
}
function y1(e, t) {
  return Fr(t) && e.items !== void 0 && e.items.every((r) => fe(r, t.items) === b.True);
}
function g1(e, t) {
  return mr(e) ? b.True : kt(e) ? b.False : Ft(e) ? b.Union : b.False;
}
function b1(e, t) {
  return Pe(t) ? Fe(e, t) : ve(t) && ai(t) || Fr(t) && y1(e, t) ? b.True : ri(t) ? _e(e.items) && !_e(t.items) || !_e(e.items) && _e(t.items) ? b.False : _e(e.items) && !_e(t.items) || e.items.every((r, n) => fe(r, t.items[n]) === b.True) ? b.True : b.False : b.False;
}
function w1(e, t) {
  return Pe(t) ? Fe(e, t) : ve(t) ? Ve(e, t) : Be(t) ? Et(e, t) : eo(t) ? b.True : b.False;
}
function x1(e, t) {
  return Pe(t) ? Fe(e, t) : ve(t) ? Ve(e, t) : Be(t) ? Et(e, t) : ni(t) ? O1(e) : $r(t) ? b.True : b.False;
}
function oc(e, t) {
  return t.anyOf.some((r) => fe(e, r) === b.True) ? b.True : b.False;
}
function S1(e, t) {
  return e.anyOf.every((r) => fe(r, t) === b.True) ? b.True : b.False;
}
function xf(e, t) {
  return b.True;
}
function v1(e, t) {
  return mr(t) ? yf() : kr(t) ? ci(e, t) : tr(t) ? oc(e, t) : Ft(t) ? nc() : Ct(t) ? wf(e) : nt(t) ? gf(e) : rr(t) ? hf(e) : Cr(t) ? mf(e) : Fr(t) ? Bh(e) : ri(t) ? g1(e) : ve(t) ? Ve(e, t) : kt(t) ? b.True : b.False;
}
function O1(e, t) {
  return $r(e) || $r(e) ? b.True : b.False;
}
function _1(e, t) {
  return kr(t) ? ci(e, t) : tr(t) ? oc(e, t) : kt(t) ? xf() : Ft(t) ? nc() : ve(t) ? Ve(e, t) : ni(t) ? b.True : b.False;
}
function fe(e, t) {
  return (
    // resolvable
    Nn(e) || Nn(t) ? h1(e, t) : Tn(e) || Tn(t) ? d1(e, t) : Vr(e) || Vr(t) ? e1(e, t) : (
      // standard
      Ft(e) ? jh(e, t) : Fr(e) ? zh(e, t) : Zo(e) ? qh(e, t) : Cr(e) ? Kh(e, t) : qs(e) ? Wh(e, t) : Qo(e) ? Yh(e, t) : ei(e) ? Gh(e, t) : ti(e) ? Vh(e, t) : rr(e) ? Hh(e, t) : kr(e) ? Jh(e, t) : Ks(e) ? Xh(e, t) : pr(e) ? Zh(e, t) : mr(e) ? Qh() : Ys(e) ? t1(e, t) : nt(e) ? r1(e, t) : ve(e) ? u1(e, t) : Be(e) ? l1(e, t) : Ct(e) ? p1(e, t) : Un(e) ? m1(e, t) : ri(e) ? b1(e, t) : Gs(e) ? f1(e, t) : eo(e) ? w1(e, t) : $r(e) ? x1(e, t) : tr(e) ? S1(e, t) : kt(e) ? v1(e, t) : ni(e) ? _1(e, t) : on(`Unknown left type operand '${e[B]}'`)
    )
  );
}
function oo(e, t) {
  return fe(e, t);
}
function E1(e, t, r, n, o) {
  const i = {};
  for (const s of globalThis.Object.getOwnPropertyNames(e))
    i[s] = ic(e[s], t, r, n, mt(o));
  return i;
}
function $1(e, t, r, n, o) {
  return E1(e.properties, t, r, n, o);
}
function A1(e, t, r, n, o) {
  const i = $1(e, t, r, n, o);
  return qe(i);
}
function I1(e, t, r, n) {
  const o = oo(e, t);
  return o === b.Union ? Ze([r, n]) : o === b.True ? r : n;
}
function ic(e, t, r, n, o) {
  return bt(e) ? A1(e, t, r, n, o) : Rr(e) ? W(C1(e, t, r, n, o)) : W(I1(e, t, r, n), o);
}
function R1(e, t, r, n, o) {
  return {
    [e]: ic($e(e), t, r, n, mt(o))
  };
}
function P1(e, t, r, n, o) {
  return e.reduce((i, s) => ({ ...i, ...R1(s, t, r, n, o) }), {});
}
function F1(e, t, r, n, o) {
  return P1(e.keys, t, r, n, o);
}
function C1(e, t, r, n, o) {
  const i = F1(e, t, r, n, o);
  return qe(i);
}
function k1(e) {
  return e.allOf.every((t) => ui(t));
}
function M1(e) {
  return e.anyOf.some((t) => ui(t));
}
function T1(e) {
  return !ui(e.not);
}
function ui(e) {
  return e[B] === "Intersect" ? k1(e) : e[B] === "Union" ? M1(e) : e[B] === "Not" ? T1(e) : e[B] === "Undefined";
}
function U1(e, t) {
  return sc(Co(e), t);
}
function N1(e, t) {
  const r = e.filter((n) => oo(n, t) === b.False);
  return r.length === 1 ? r[0] : Ze(r);
}
function sc(e, t, r = {}) {
  return Pr(e) ? W(U1(e, t), r) : bt(e) ? W(j1(e, t), r) : W(We(e) ? N1(e.anyOf, t) : oo(e, t) !== b.False ? ct() : e, r);
}
function L1(e, t) {
  const r = {};
  for (const n of globalThis.Object.getOwnPropertyNames(e))
    r[n] = sc(e[n], t);
  return r;
}
function D1(e, t) {
  return L1(e.properties, t);
}
function j1(e, t) {
  const r = D1(e, t);
  return qe(r);
}
function B1(e, t) {
  return cc(Co(e), t);
}
function z1(e, t) {
  const r = e.filter((n) => oo(n, t) !== b.False);
  return r.length === 1 ? r[0] : Ze(r);
}
function cc(e, t, r) {
  return Pr(e) ? W(B1(e, t), r) : bt(e) ? W(K1(e, t), r) : W(We(e) ? z1(e.anyOf, t) : oo(e, t) !== b.False ? e : ct(), r);
}
function W1(e, t) {
  const r = {};
  for (const n of globalThis.Object.getOwnPropertyNames(e))
    r[n] = cc(e[n], t);
  return r;
}
function q1(e, t) {
  return W1(e.properties, t);
}
function K1(e, t) {
  const r = q1(e, t);
  return qe(r);
}
function Y1(e, t) {
  return W(e.returns, t);
}
function G1(e) {
  return W({ [B]: "Integer", type: "integer" }, e);
}
function V1(e, t, r) {
  return {
    [e]: sn($e(e), t, mt(r))
  };
}
function H1(e, t, r) {
  return e.reduce((o, i) => ({ ...o, ...V1(i, t, r) }), {});
}
function J1(e, t, r) {
  return H1(e.keys, t, r);
}
function X1(e, t, r) {
  const n = J1(e, t, r);
  return qe(n);
}
function Z1(e) {
  const [t, r] = [e.slice(0, 1), e.slice(1)];
  return [t.toLowerCase(), r].join("");
}
function Q1(e) {
  const [t, r] = [e.slice(0, 1), e.slice(1)];
  return [t.toUpperCase(), r].join("");
}
function ey(e) {
  return e.toUpperCase();
}
function ty(e) {
  return e.toLowerCase();
}
function ry(e, t, r) {
  const n = Zs(e.pattern);
  if (!zn(n))
    return { ...e, pattern: Sf(e.pattern, t) };
  const s = [...ii(n)].map((p) => $e(p)), c = vf(s, t), u = Ze(c);
  return Xu([u], r);
}
function Sf(e, t) {
  return typeof e == "string" ? t === "Uncapitalize" ? Z1(e) : t === "Capitalize" ? Q1(e) : t === "Uppercase" ? ey(e) : t === "Lowercase" ? ty(e) : e : e.toString();
}
function vf(e, t) {
  return e.map((r) => sn(r, t));
}
function sn(e, t, r = {}) {
  return (
    // Intrinsic-Mapped-Inference
    Rr(e) ? X1(e, t, r) : (
      // Standard-Inference
      Pr(e) ? ry(e, t, r) : We(e) ? Ze(vf(e.anyOf, t), r) : Zn(e) ? $e(Sf(e.const, t), r) : (
        // Default Type
        W(e, r)
      )
    )
  );
}
function ny(e, t = {}) {
  return sn(e, "Capitalize", t);
}
function oy(e, t = {}) {
  return sn(e, "Lowercase", t);
}
function iy(e, t = {}) {
  return sn(e, "Uncapitalize", t);
}
function sy(e, t = {}) {
  return sn(e, "Uppercase", t);
}
function cy(e, t) {
  return W({ [B]: "Not", not: e }, t);
}
function ay(e, t, r) {
  const n = {};
  for (const o of globalThis.Object.getOwnPropertyNames(e))
    n[o] = uc(e[o], t, mt(r));
  return n;
}
function uy(e, t, r) {
  return ay(e.properties, t, r);
}
function fy(e, t, r) {
  const n = uy(e, t, r);
  return qe(n);
}
function ly(e, t) {
  return e.map((r) => ac(r, t));
}
function dy(e, t) {
  return e.map((r) => ac(r, t));
}
function py(e, t) {
  const { [t]: r, ...n } = e;
  return n;
}
function my(e, t) {
  return t.reduce((r, n) => py(r, n), e);
}
function ac(e, t) {
  return Tt(e) ? Ur(ly(e.allOf, t)) : We(e) ? Ze(dy(e.anyOf, t)) : Kt(e) ? Le(my(e.properties, t), Ot(e, [jt, "$id", "required"])) : Le({});
}
function uc(e, t, r) {
  if (Rr(t))
    return by(e, t, r);
  if (bt(e))
    return fy(e, t, r);
  const n = Gr(t) ? hr(t) : t;
  return W(ac(e, n), r);
}
function hy(e, t, r) {
  return {
    [t]: uc(e, [t], mt(r))
  };
}
function yy(e, t, r) {
  return t.reduce((n, o) => ({ ...n, ...hy(e, o, r) }), {});
}
function gy(e, t, r) {
  return yy(e, t.keys, r);
}
function by(e, t, r) {
  const n = gy(e, t, r);
  return qe(n);
}
function wy(e, t) {
  return to(e.parameters, t);
}
function ca(e) {
  return e.map((t) => Of(t));
}
function xy(e) {
  const t = {};
  for (const r of globalThis.Object.getOwnPropertyNames(e))
    t[r] = Tr(e[r]);
  return t;
}
function Of(e) {
  return Tt(e) ? Ur(ca(e.allOf)) : We(e) ? Ze(ca(e.anyOf)) : Kt(e) ? Le(xy(e.properties)) : Le({});
}
function _f(e, t) {
  if (bt(e))
    return Oy(e, t);
  const r = Ot(e, [jt, "$id", "required"]), n = Of(e);
  return W({ ...t, ...r, ...n });
}
function Sy(e, t) {
  const r = {};
  for (const n of globalThis.Object.getOwnPropertyNames(e))
    r[n] = _f(e[n], mt(t));
  return r;
}
function vy(e, t) {
  return Sy(e.properties, t);
}
function Oy(e, t) {
  const r = vy(e, t);
  return qe(r);
}
function _y(e, t, r) {
  const n = {};
  for (const o of globalThis.Object.getOwnPropertyNames(e))
    n[o] = lc(e[o], t, mt(r));
  return n;
}
function Ey(e, t, r) {
  return _y(e.properties, t, r);
}
function $y(e, t, r) {
  const n = Ey(e, t, r);
  return qe(n);
}
function Ay(e, t) {
  return e.map((r) => fc(r, t));
}
function Iy(e, t) {
  return e.map((r) => fc(r, t));
}
function Ry(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function fc(e, t) {
  return Tt(e) ? Ur(Ay(e.allOf, t)) : We(e) ? Ze(Iy(e.anyOf, t)) : Kt(e) ? Le(Ry(e.properties, t), Ot(e, [jt, "$id", "required"])) : Le({});
}
function lc(e, t, r) {
  if (Rr(t))
    return ky(e, t, r);
  if (bt(e))
    return $y(e, t, r);
  const n = Gr(t) ? hr(t) : t;
  return W(fc(e, n), r);
}
function Py(e, t, r) {
  return {
    [t]: lc(e, [t], mt(r))
  };
}
function Fy(e, t, r) {
  return t.reduce((n, o) => ({ ...n, ...Py(e, o, r) }), {});
}
function Cy(e, t, r) {
  return Fy(e, t.keys, r);
}
function ky(e, t, r) {
  const n = Cy(e, t, r);
  return qe(n);
}
function My(e) {
  return Mr(Tr(e));
}
function Nr(e, t, r) {
  return W({
    [B]: "Record",
    type: "object",
    patternProperties: { [e]: t }
  }, r);
}
function dc(e, t, r) {
  const n = {};
  for (const o of e)
    n[o] = t;
  return Le(n, { ...r, [Vo]: "Record" });
}
function Ty(e, t, r) {
  return im(e) ? dc(hr(e), t, r) : Nr(e.pattern, t, r);
}
function Uy(e, t, r) {
  return dc(hr(Ze(e)), t, r);
}
function Ny(e, t, r) {
  return dc([e.toString()], t, r);
}
function Ly(e, t, r) {
  return Nr(e.source, t, r);
}
function Dy(e, t, r) {
  const n = _e(e.pattern) ? Dn : e.pattern;
  return Nr(n, t, r);
}
function jy(e, t, r) {
  return Nr(Dn, t, r);
}
function By(e, t, r) {
  return Nr(kp, t, r);
}
function zy(e, t, r) {
  return Nr(Ln, t, r);
}
function Wy(e, t, r) {
  return Nr(Ln, t, r);
}
function qy(e, t, r = {}) {
  return We(e) ? Uy(e.anyOf, t, r) : Pr(e) ? Ty(e, t, r) : Zn(e) ? Ny(e.const, t, r) : Ho(e) ? zy(e, t, r) : Jo(e) ? Wy(e, t, r) : ku(e) ? Ly(e, t, r) : js(e) ? Dy(e, t, r) : Iu(e) ? jy(e, t, r) : Qn(e) ? By(e, t, r) : ct(r);
}
let Ky = 0;
function Yy(e, t = {}) {
  _e(t.$id) && (t.$id = `T${Ky++}`);
  const r = ks(e({ [B]: "This", $ref: `${t.$id}` }));
  return r.$id = t.$id, W({ [Vo]: "Recursive", ...r }, t);
}
function Gy(e, t) {
  if (Re(e))
    return W({ [B]: "Ref", $ref: e }, t);
  if (_e(e.$id))
    throw new Error("Reference target type must specify an $id");
  return W({ [B]: "Ref", $ref: e.$id }, t);
}
function Vy(e, t) {
  const r = Re(e) ? new globalThis.RegExp(e) : e;
  return W({ [B]: "RegExp", type: "RegExp", source: r.source, flags: r.flags }, t);
}
function aa(e) {
  return e.map((t) => Ef(t));
}
function Hy(e) {
  const t = {};
  for (const r of globalThis.Object.getOwnPropertyNames(e))
    t[r] = Ot(e[r], [dr]);
  return t;
}
function Ef(e) {
  return Tt(e) ? Ur(aa(e.allOf)) : We(e) ? Ze(aa(e.anyOf)) : Kt(e) ? Le(Hy(e.properties)) : Le({});
}
function $f(e, t) {
  if (bt(e))
    return Zy(e, t);
  {
    const r = Ot(e, [jt, "$id", "required"]), n = Ef(e);
    return W({ ...r, ...n }, t);
  }
}
function Jy(e, t) {
  const r = {};
  for (const n of globalThis.Object.getOwnPropertyNames(e))
    r[n] = $f(e[n], t);
  return r;
}
function Xy(e, t) {
  return Jy(e.properties, t);
}
function Zy(e, t) {
  const r = Xy(e, t);
  return qe(r);
}
function Qy(e) {
  return Tt(e) ? e.allOf : We(e) ? e.anyOf : tn(e) ? e.items ?? [] : [];
}
function eg(e) {
  return Qy(e);
}
function tg(e, t) {
  return W(e.returns, t);
}
function rg(e) {
  return JSON.parse(JSON.stringify(e));
}
class ng {
  constructor(t) {
    this.schema = t;
  }
  Decode(t) {
    return new og(this.schema, t);
  }
}
class og {
  constructor(t, r) {
    this.schema = t, this.decode = r;
  }
  EncodeTransform(t, r) {
    const i = { Encode: (s) => r[jt].Encode(t(s)), Decode: (s) => this.decode(r[jt].Decode(s)) };
    return { ...r, [jt]: i };
  }
  EncodeSchema(t, r) {
    const n = { Decode: this.decode, Encode: t };
    return { ...r, [jt]: n };
  }
  Encode(t) {
    return Bs(this.schema) ? this.EncodeTransform(t, this.schema) : this.EncodeSchema(t, this.schema);
  }
}
function ig(e) {
  return new ng(e);
}
function Af(e = {}) {
  return W({ [B]: e[B] ?? "Unsafe" }, e);
}
function sg(e) {
  return W({ [B]: "Void", type: "void" }, e);
}
const cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: jn,
  Array: Wu,
  AsyncIterator: qu,
  Awaited: ih,
  BigInt: Qs,
  Boolean: Hu,
  Capitalize: ny,
  Composite: xh,
  Const: Oh,
  Constructor: Ku,
  ConstructorParameters: _h,
  Date: uf,
  Deref: Yt,
  Enum: Lh,
  Exclude: sc,
  Extends: ic,
  Extract: cc,
  Function: oi,
  Index: ec,
  InstanceType: Y1,
  Integer: G1,
  Intersect: Ur,
  Iterator: tf,
  KeyOf: af,
  Literal: $e,
  Lowercase: oy,
  Mapped: Ym,
  Never: ct,
  Not: cy,
  Null: ff,
  Number: nn,
  Object: Le,
  Omit: uc,
  Optional: Tr,
  Parameters: wy,
  Partial: _f,
  Pick: lc,
  Promise: rf,
  Readonly: Mr,
  ReadonlyOptional: My,
  Record: qy,
  Recursive: Yy,
  Ref: Gy,
  RegExp: Vy,
  Required: $f,
  Rest: eg,
  ReturnType: tg,
  Strict: rg,
  String: lr,
  Symbol: lf,
  TemplateLiteral: Xu,
  Transform: ig,
  Tuple: to,
  Uint8Array: pf,
  Uncapitalize: iy,
  Undefined: df,
  Union: Ze,
  Unknown: ro,
  Unsafe: Af,
  Uppercase: sy,
  Void: sg
}, Symbol.toStringTag, { value: "Module" })), ag = cg;
class ug extends qt {
  constructor(t) {
    super(`Duplicate type kind '${t}' detected`);
  }
}
class fg extends qt {
  constructor(t) {
    super(`Duplicate string format '${t}' detected`);
  }
}
var ua;
(function(e) {
  function t(n, o) {
    if (Js(n))
      throw new ug(n);
    return Up(n, o), (i = {}) => Af({ ...i, [B]: n });
  }
  e.Type = t;
  function r(n, o) {
    if (zu(n))
      throw new fg(n);
    return Mp(n, o), n;
  }
  e.Format = r;
})(ua || (ua = {}));
class lg extends qt {
  constructor(t) {
    super(`Unable to dereference schema with $id '${t.$id}'`), this.schema = t;
  }
}
function dg(e, t) {
  const r = t.find((n) => n.$id === e.$ref);
  if (r === void 0)
    throw new lg(e);
  return pc(r, t);
}
function pc(e, t) {
  return e[B] === "This" || e[B] === "Ref" ? dg(e, t) : e;
}
class pg extends qt {
  constructor(t) {
    super("Unable to hash value"), this.value = t;
  }
}
var ht;
(function(e) {
  e[e.Undefined = 0] = "Undefined", e[e.Null = 1] = "Null", e[e.Boolean = 2] = "Boolean", e[e.Number = 3] = "Number", e[e.String = 4] = "String", e[e.Object = 5] = "Object", e[e.Array = 6] = "Array", e[e.Date = 7] = "Date", e[e.Uint8Array = 8] = "Uint8Array", e[e.Symbol = 9] = "Symbol", e[e.BigInt = 10] = "BigInt";
})(ht || (ht = {}));
let zr = BigInt("14695981039346656037");
const [mg, hg] = [BigInt("1099511628211"), BigInt("2") ** BigInt("64")], yg = Array.from({ length: 256 }).map((e, t) => BigInt(t)), If = new Float64Array(1), Rf = new DataView(If.buffer), Pf = new Uint8Array(If.buffer);
function* gg(e) {
  const t = e === 0 ? 1 : Math.ceil(Math.floor(Math.log2(e) + 1) / 8);
  for (let r = 0; r < t; r++)
    yield e >> 8 * (t - 1 - r) & 255;
}
function bg(e) {
  Ge(ht.Array);
  for (const t of e)
    Jr(t);
}
function wg(e) {
  Ge(ht.Boolean), Ge(e ? 1 : 0);
}
function xg(e) {
  Ge(ht.BigInt), Rf.setBigInt64(0, e);
  for (const t of Pf)
    Ge(t);
}
function Sg(e) {
  Ge(ht.Date), Jr(e.getTime());
}
function vg(e) {
  Ge(ht.Null);
}
function Og(e) {
  Ge(ht.Number), Rf.setFloat64(0, e);
  for (const t of Pf)
    Ge(t);
}
function _g(e) {
  Ge(ht.Object);
  for (const t of globalThis.Object.getOwnPropertyNames(e).sort())
    Jr(t), Jr(e[t]);
}
function Eg(e) {
  Ge(ht.String);
  for (let t = 0; t < e.length; t++)
    for (const r of gg(e.charCodeAt(t)))
      Ge(r);
}
function $g(e) {
  Ge(ht.Symbol), Jr(e.description);
}
function Ag(e) {
  Ge(ht.Uint8Array);
  for (let t = 0; t < e.length; t++)
    Ge(e[t]);
}
function Ig(e) {
  return Ge(ht.Undefined);
}
function Jr(e) {
  if (Yo(e))
    return bg(e);
  if (Eu(e))
    return wg(e);
  if ($u(e))
    return xg(e);
  if (vu(e))
    return Sg(e);
  if (_u(e))
    return vg();
  if (Br(e))
    return Og(e);
  if (Ko(e))
    return _g(e);
  if (Ts(e))
    return Eg(e);
  if (Au(e))
    return $g(e);
  if (Ou(e))
    return Ag(e);
  if (Ms(e))
    return Ig();
  throw new pg(e);
}
function Ge(e) {
  zr = zr ^ yg[e], zr = zr * mg % hg;
}
function Rg(e) {
  return zr = BigInt("14695981039346656037"), Jr(e), zr;
}
var fa;
(function(e) {
  e[e.ArrayContains = 0] = "ArrayContains", e[e.ArrayMaxContains = 1] = "ArrayMaxContains", e[e.ArrayMaxItems = 2] = "ArrayMaxItems", e[e.ArrayMinContains = 3] = "ArrayMinContains", e[e.ArrayMinItems = 4] = "ArrayMinItems", e[e.ArrayUniqueItems = 5] = "ArrayUniqueItems", e[e.Array = 6] = "Array", e[e.AsyncIterator = 7] = "AsyncIterator", e[e.BigIntExclusiveMaximum = 8] = "BigIntExclusiveMaximum", e[e.BigIntExclusiveMinimum = 9] = "BigIntExclusiveMinimum", e[e.BigIntMaximum = 10] = "BigIntMaximum", e[e.BigIntMinimum = 11] = "BigIntMinimum", e[e.BigIntMultipleOf = 12] = "BigIntMultipleOf", e[e.BigInt = 13] = "BigInt", e[e.Boolean = 14] = "Boolean", e[e.DateExclusiveMaximumTimestamp = 15] = "DateExclusiveMaximumTimestamp", e[e.DateExclusiveMinimumTimestamp = 16] = "DateExclusiveMinimumTimestamp", e[e.DateMaximumTimestamp = 17] = "DateMaximumTimestamp", e[e.DateMinimumTimestamp = 18] = "DateMinimumTimestamp", e[e.DateMultipleOfTimestamp = 19] = "DateMultipleOfTimestamp", e[e.Date = 20] = "Date", e[e.Function = 21] = "Function", e[e.IntegerExclusiveMaximum = 22] = "IntegerExclusiveMaximum", e[e.IntegerExclusiveMinimum = 23] = "IntegerExclusiveMinimum", e[e.IntegerMaximum = 24] = "IntegerMaximum", e[e.IntegerMinimum = 25] = "IntegerMinimum", e[e.IntegerMultipleOf = 26] = "IntegerMultipleOf", e[e.Integer = 27] = "Integer", e[e.IntersectUnevaluatedProperties = 28] = "IntersectUnevaluatedProperties", e[e.Intersect = 29] = "Intersect", e[e.Iterator = 30] = "Iterator", e[e.Kind = 31] = "Kind", e[e.Literal = 32] = "Literal", e[e.Never = 33] = "Never", e[e.Not = 34] = "Not", e[e.Null = 35] = "Null", e[e.NumberExclusiveMaximum = 36] = "NumberExclusiveMaximum", e[e.NumberExclusiveMinimum = 37] = "NumberExclusiveMinimum", e[e.NumberMaximum = 38] = "NumberMaximum", e[e.NumberMinimum = 39] = "NumberMinimum", e[e.NumberMultipleOf = 40] = "NumberMultipleOf", e[e.Number = 41] = "Number", e[e.ObjectAdditionalProperties = 42] = "ObjectAdditionalProperties", e[e.ObjectMaxProperties = 43] = "ObjectMaxProperties", e[e.ObjectMinProperties = 44] = "ObjectMinProperties", e[e.ObjectRequiredProperty = 45] = "ObjectRequiredProperty", e[e.Object = 46] = "Object", e[e.Promise = 47] = "Promise", e[e.RegExp = 48] = "RegExp", e[e.StringFormatUnknown = 49] = "StringFormatUnknown", e[e.StringFormat = 50] = "StringFormat", e[e.StringMaxLength = 51] = "StringMaxLength", e[e.StringMinLength = 52] = "StringMinLength", e[e.StringPattern = 53] = "StringPattern", e[e.String = 54] = "String", e[e.Symbol = 55] = "Symbol", e[e.TupleLength = 56] = "TupleLength", e[e.Tuple = 57] = "Tuple", e[e.Uint8ArrayMaxByteLength = 58] = "Uint8ArrayMaxByteLength", e[e.Uint8ArrayMinByteLength = 59] = "Uint8ArrayMinByteLength", e[e.Uint8Array = 60] = "Uint8Array", e[e.Undefined = 61] = "Undefined", e[e.Union = 62] = "Union", e[e.Void = 63] = "Void";
})(fa || (fa = {}));
class Pg extends qt {
  constructor(t) {
    super("Unknown type"), this.schema = t;
  }
}
function Fg(e) {
  return e[B] === "Any" || e[B] === "Unknown";
}
function Q(e) {
  return e !== void 0;
}
function Cg(e, t, r) {
  return !0;
}
function kg(e, t, r) {
  if (!Yo(r) || Q(e.minItems) && !(r.length >= e.minItems) || Q(e.maxItems) && !(r.length <= e.maxItems) || !r.every((i) => je(e.items, t, i)) || e.uniqueItems === !0 && !function() {
    const i = /* @__PURE__ */ new Set();
    for (const s of r) {
      const c = Rg(s);
      if (i.has(c))
        return !1;
      i.add(c);
    }
    return !0;
  }())
    return !1;
  if (!(Q(e.contains) || Br(e.minContains) || Br(e.maxContains)))
    return !0;
  const n = Q(e.contains) ? e.contains : ct(), o = r.reduce((i, s) => je(n, t, s) ? i + 1 : i, 0);
  return !(o === 0 || Br(e.minContains) && o < e.minContains || Br(e.maxContains) && o > e.maxContains);
}
function Mg(e, t, r) {
  return tp(r);
}
function Tg(e, t, r) {
  return !(!$u(r) || Q(e.exclusiveMaximum) && !(r < e.exclusiveMaximum) || Q(e.exclusiveMinimum) && !(r > e.exclusiveMinimum) || Q(e.maximum) && !(r <= e.maximum) || Q(e.minimum) && !(r >= e.minimum) || Q(e.multipleOf) && r % e.multipleOf !== BigInt(0));
}
function Ug(e, t, r) {
  return Eu(r);
}
function Ng(e, t, r) {
  return je(e.returns, t, r.prototype);
}
function Lg(e, t, r) {
  return !(!vu(r) || Q(e.exclusiveMaximumTimestamp) && !(r.getTime() < e.exclusiveMaximumTimestamp) || Q(e.exclusiveMinimumTimestamp) && !(r.getTime() > e.exclusiveMinimumTimestamp) || Q(e.maximumTimestamp) && !(r.getTime() <= e.maximumTimestamp) || Q(e.minimumTimestamp) && !(r.getTime() >= e.minimumTimestamp) || Q(e.multipleOfTimestamp) && r.getTime() % e.multipleOfTimestamp !== 0);
}
function Dg(e, t, r) {
  return ip(r);
}
function jg(e, t, r) {
  return !(!op(r) || Q(e.exclusiveMaximum) && !(r < e.exclusiveMaximum) || Q(e.exclusiveMinimum) && !(r > e.exclusiveMinimum) || Q(e.maximum) && !(r <= e.maximum) || Q(e.minimum) && !(r >= e.minimum) || Q(e.multipleOf) && r % e.multipleOf !== 0);
}
function Bg(e, t, r) {
  const n = e.allOf.every((o) => je(o, t, r));
  if (e.unevaluatedProperties === !1) {
    const o = new RegExp(ra(e)), i = Object.getOwnPropertyNames(r).every((s) => o.test(s));
    return n && i;
  } else if (ze(e.unevaluatedProperties)) {
    const o = new RegExp(ra(e)), i = Object.getOwnPropertyNames(r).every((s) => o.test(s) || je(e.unevaluatedProperties, t, r[s]));
    return n && i;
  } else
    return n;
}
function zg(e, t, r) {
  return rp(r);
}
function Wg(e, t, r) {
  return r === e.const;
}
function qg(e, t, r) {
  return !1;
}
function Kg(e, t, r) {
  return !je(e.not, t, r);
}
function Yg(e, t, r) {
  return _u(r);
}
function Gg(e, t, r) {
  return !(!fr.IsNumberLike(r) || Q(e.exclusiveMaximum) && !(r < e.exclusiveMaximum) || Q(e.exclusiveMinimum) && !(r > e.exclusiveMinimum) || Q(e.minimum) && !(r >= e.minimum) || Q(e.maximum) && !(r <= e.maximum) || Q(e.multipleOf) && r % e.multipleOf !== 0);
}
function Vg(e, t, r) {
  if (!fr.IsObjectLike(r) || Q(e.minProperties) && !(Object.getOwnPropertyNames(r).length >= e.minProperties) || Q(e.maxProperties) && !(Object.getOwnPropertyNames(r).length <= e.maxProperties))
    return !1;
  const n = Object.getOwnPropertyNames(e.properties);
  for (const o of n) {
    const i = e.properties[o];
    if (e.required && e.required.includes(o)) {
      if (!je(i, t, r[o]) || (ui(i) || Fg(i)) && !(o in r))
        return !1;
    } else if (fr.IsExactOptionalProperty(r, o) && !je(i, t, r[o]))
      return !1;
  }
  if (e.additionalProperties === !1) {
    const o = Object.getOwnPropertyNames(r);
    return e.required && e.required.length === n.length && o.length === n.length ? !0 : o.every((i) => n.includes(i));
  } else return typeof e.additionalProperties == "object" ? Object.getOwnPropertyNames(r).every((i) => n.includes(i) || je(e.additionalProperties, t, r[i])) : !0;
}
function Hg(e, t, r) {
  return np(r);
}
function Jg(e, t, r) {
  if (!fr.IsRecordLike(r) || Q(e.minProperties) && !(Object.getOwnPropertyNames(r).length >= e.minProperties) || Q(e.maxProperties) && !(Object.getOwnPropertyNames(r).length <= e.maxProperties))
    return !1;
  const [n, o] = Object.entries(e.patternProperties)[0], i = new RegExp(n), s = Object.entries(r).every(([p, h]) => i.test(p) ? je(o, t, h) : !0), c = typeof e.additionalProperties == "object" ? Object.entries(r).every(([p, h]) => i.test(p) ? !0 : je(e.additionalProperties, t, h)) : !0, u = e.additionalProperties === !1 ? Object.getOwnPropertyNames(r).every((p) => i.test(p)) : !0;
  return s && c && u;
}
function Xg(e, t, r) {
  return je(pc(e, t), t, r);
}
function Zg(e, t, r) {
  const n = new RegExp(e.source, e.flags);
  return Q(e.minLength) && !(r.length >= e.minLength) || Q(e.maxLength) && !(r.length <= e.maxLength) ? !1 : n.test(r);
}
function Qg(e, t, r) {
  return !Ts(r) || Q(e.minLength) && !(r.length >= e.minLength) || Q(e.maxLength) && !(r.length <= e.maxLength) || Q(e.pattern) && !new RegExp(e.pattern).test(r) ? !1 : Q(e.format) ? zu(e.format) ? Tp(e.format)(r) : !1 : !0;
}
function eb(e, t, r) {
  return Au(r);
}
function tb(e, t, r) {
  return Ts(r) && new RegExp(e.pattern).test(r);
}
function rb(e, t, r) {
  return je(pc(e, t), t, r);
}
function nb(e, t, r) {
  if (!Yo(r) || e.items === void 0 && r.length !== 0 || r.length !== e.maxItems)
    return !1;
  if (!e.items)
    return !0;
  for (let n = 0; n < e.items.length; n++)
    if (!je(e.items[n], t, r[n]))
      return !1;
  return !0;
}
function ob(e, t, r) {
  return Ms(r);
}
function ib(e, t, r) {
  return e.anyOf.some((n) => je(n, t, r));
}
function sb(e, t, r) {
  return !(!Ou(r) || Q(e.maxByteLength) && !(r.length <= e.maxByteLength) || Q(e.minByteLength) && !(r.length >= e.minByteLength));
}
function cb(e, t, r) {
  return !0;
}
function ab(e, t, r) {
  return fr.IsVoidLike(r);
}
function ub(e, t, r) {
  return Js(e[B]) ? Np(e[B])(e, r) : !1;
}
function je(e, t, r) {
  const n = Q(e.$id) ? [...t, e] : t, o = e;
  switch (o[B]) {
    case "Any":
      return Cg();
    case "Array":
      return kg(o, n, r);
    case "AsyncIterator":
      return Mg(o, n, r);
    case "BigInt":
      return Tg(o, n, r);
    case "Boolean":
      return Ug(o, n, r);
    case "Constructor":
      return Ng(o, n, r);
    case "Date":
      return Lg(o, n, r);
    case "Function":
      return Dg(o, n, r);
    case "Integer":
      return jg(o, n, r);
    case "Intersect":
      return Bg(o, n, r);
    case "Iterator":
      return zg(o, n, r);
    case "Literal":
      return Wg(o, n, r);
    case "Never":
      return qg();
    case "Not":
      return Kg(o, n, r);
    case "Null":
      return Yg(o, n, r);
    case "Number":
      return Gg(o, n, r);
    case "Object":
      return Vg(o, n, r);
    case "Promise":
      return Hg(o, n, r);
    case "Record":
      return Jg(o, n, r);
    case "Ref":
      return Xg(o, n, r);
    case "RegExp":
      return Zg(o, n, r);
    case "String":
      return Qg(o, n, r);
    case "Symbol":
      return eb(o, n, r);
    case "TemplateLiteral":
      return tb(o, n, r);
    case "This":
      return rb(o, n, r);
    case "Tuple":
      return nb(o, n, r);
    case "Undefined":
      return ob(o, n, r);
    case "Union":
      return ib(o, n, r);
    case "Uint8Array":
      return sb(o, n, r);
    case "Unknown":
      return cb();
    case "Void":
      return ab(o, n, r);
    default:
      if (!Js(o[B]))
        throw new Pg(o);
      return ub(o, n, r);
  }
}
function la(...e) {
  return e.length === 3 ? je(e[0], e[1], e[2]) : je(e[0], [], e[1]);
}
const fb = Le({
  type: $e("insert"),
  path: lr(),
  value: ro()
}), lb = Le({
  type: $e("update"),
  path: lr(),
  value: ro()
}), db = Le({
  type: $e("delete"),
  path: lr()
});
Ze([fb, lb, db]);
function pb(...e) {
  return la.apply(la, e);
}
const Ff = (e) => {
  const t = e.$id ?? "UnnamedType", r = e;
  let n = `type ${t} = {
`;
  for (const [i, s] of Object.entries(e.properties)) {
    const c = s.description ? ` // ${s.description}` : "";
    n += `  ${i}: ${In(s)};${c}
`;
  }
  return n += "};", {
    type: r,
    typeDeclaration: n,
    validate: (i) => pb(e, i),
    schema: e
  };
}, mb = (e) => {
  const t = e(ag);
  return Ff(t);
}, hb = (e) => e ? e.anyOf ? e.anyOf.map(In).map((t) => t.replace(/^'/, "").replace(/'$/, "")) : [] : [], In = (e) => {
  if (e.anyOf)
    return e.anyOf.map(In).join(" | ");
  switch (e.type) {
    case "string":
      return e.const !== void 0 ? `'${e.const}'` : "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "array":
      return `${In(e.items)}[]`;
    case "object":
      return "{ " + Object.entries(e.properties).map(([t, r]) => `${t}: ${In(r)}`).join("; ") + " }";
    case "null":
      return "null";
    default:
      return "unknown";
  }
}, Cf = {
  createTypeInfo: mb,
  schemaToTypeInfo: Ff,
  schemaToAnyOfs: hb
}, {
  isErrorLike: kw,
  chain: Mw,
  entries: Tw,
  filter: Uw,
  first: Nw,
  last: Lw,
  forEach: Dw,
  iff: jw,
  orElse: Bw,
  removeUndefinedValues: zw,
  iffTyped: Ww,
  isDefined: yb,
  isUndefined: fi,
  omit: qw,
  omitUnsafe: Kw,
  toMany: Yw,
  fromEntries: Gw,
  safe: Vw,
  safeAsync: Hw,
  mapValue: Jw,
  headOf: Xw,
  tailOf: Zw,
  restOf: Qw,
  times: ex,
  isIterator: tx,
  toMultiMap: rx,
  timesGen: nx,
  isIterable: ox,
  isArrayLike: ix,
  iffBrowser: sx,
  isBrowser: cx,
  toPromise: ax,
  all: ux,
  isFunction: fx,
  isEmpty: lx,
  isNotEmpty: dx,
  tryValue: px,
  orError: mx,
  isErrorType: hx,
  createSettler: yx
} = Fs;
var kf = { exports: {} }, Mf = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, Tf = { exports: {} }, gb = function(t) {
  return !t || typeof t == "string" ? !1 : t instanceof Array || Array.isArray(t) || t.length >= 0 && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && t.constructor.name !== "String");
}, bb = gb, wb = Array.prototype.concat, xb = Array.prototype.slice, da = Tf.exports = function(t) {
  for (var r = [], n = 0, o = t.length; n < o; n++) {
    var i = t[n];
    bb(i) ? r = wb.call(r, xb.call(i)) : r.push(i);
  }
  return r;
};
da.wrap = function(e) {
  return function() {
    return e(da(arguments));
  };
};
var Sb = Tf.exports, Rn = Mf, io = Sb, Uf = Object.hasOwnProperty, Nf = /* @__PURE__ */ Object.create(null);
for (var Wi in Rn)
  Uf.call(Rn, Wi) && (Nf[Rn[Wi]] = Wi);
var lt = kf.exports = {
  to: {},
  get: {}
};
lt.get = function(e) {
  var t = e.substring(0, 3).toLowerCase(), r, n;
  switch (t) {
    case "hsl":
      r = lt.get.hsl(e), n = "hsl";
      break;
    case "hwb":
      r = lt.get.hwb(e), n = "hwb";
      break;
    default:
      r = lt.get.rgb(e), n = "rgb";
      break;
  }
  return r ? { model: n, value: r } : null;
};
lt.get.rgb = function(e) {
  if (!e)
    return null;
  var t = /^#([a-f0-9]{3,4})$/i, r = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i, n = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, o = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, i = /^(\w+)$/, s = [0, 0, 0, 1], c, u, p;
  if (c = e.match(r)) {
    for (p = c[2], c = c[1], u = 0; u < 3; u++) {
      var h = u * 2;
      s[u] = parseInt(c.slice(h, h + 2), 16);
    }
    p && (s[3] = parseInt(p, 16) / 255);
  } else if (c = e.match(t)) {
    for (c = c[1], p = c[3], u = 0; u < 3; u++)
      s[u] = parseInt(c[u] + c[u], 16);
    p && (s[3] = parseInt(p + p, 16) / 255);
  } else if (c = e.match(n)) {
    for (u = 0; u < 3; u++)
      s[u] = parseInt(c[u + 1], 0);
    c[4] && (c[5] ? s[3] = parseFloat(c[4]) * 0.01 : s[3] = parseFloat(c[4]));
  } else if (c = e.match(o)) {
    for (u = 0; u < 3; u++)
      s[u] = Math.round(parseFloat(c[u + 1]) * 2.55);
    c[4] && (c[5] ? s[3] = parseFloat(c[4]) * 0.01 : s[3] = parseFloat(c[4]));
  } else return (c = e.match(i)) ? c[1] === "transparent" ? [0, 0, 0, 0] : Uf.call(Rn, c[1]) ? (s = Rn[c[1]], s[3] = 1, s) : null : null;
  for (u = 0; u < 3; u++)
    s[u] = sr(s[u], 0, 255);
  return s[3] = sr(s[3], 0, 1), s;
};
lt.get.hsl = function(e) {
  if (!e)
    return null;
  var t = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, r = e.match(t);
  if (r) {
    var n = parseFloat(r[4]), o = (parseFloat(r[1]) % 360 + 360) % 360, i = sr(parseFloat(r[2]), 0, 100), s = sr(parseFloat(r[3]), 0, 100), c = sr(isNaN(n) ? 1 : n, 0, 1);
    return [o, i, s, c];
  }
  return null;
};
lt.get.hwb = function(e) {
  if (!e)
    return null;
  var t = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, r = e.match(t);
  if (r) {
    var n = parseFloat(r[4]), o = (parseFloat(r[1]) % 360 + 360) % 360, i = sr(parseFloat(r[2]), 0, 100), s = sr(parseFloat(r[3]), 0, 100), c = sr(isNaN(n) ? 1 : n, 0, 1);
    return [o, i, s, c];
  }
  return null;
};
lt.to.hex = function() {
  var e = io(arguments);
  return "#" + yo(e[0]) + yo(e[1]) + yo(e[2]) + (e[3] < 1 ? yo(Math.round(e[3] * 255)) : "");
};
lt.to.rgb = function() {
  var e = io(arguments);
  return e.length < 4 || e[3] === 1 ? "rgb(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ")" : "rgba(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ", " + e[3] + ")";
};
lt.to.rgb.percent = function() {
  var e = io(arguments), t = Math.round(e[0] / 255 * 100), r = Math.round(e[1] / 255 * 100), n = Math.round(e[2] / 255 * 100);
  return e.length < 4 || e[3] === 1 ? "rgb(" + t + "%, " + r + "%, " + n + "%)" : "rgba(" + t + "%, " + r + "%, " + n + "%, " + e[3] + ")";
};
lt.to.hsl = function() {
  var e = io(arguments);
  return e.length < 4 || e[3] === 1 ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)" : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")";
};
lt.to.hwb = function() {
  var e = io(arguments), t = "";
  return e.length >= 4 && e[3] !== 1 && (t = ", " + e[3]), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")";
};
lt.to.keyword = function(e) {
  return Nf[e.slice(0, 3)];
};
function sr(e, t, r) {
  return Math.min(Math.max(t, e), r);
}
function yo(e) {
  var t = Math.round(e).toString(16).toUpperCase();
  return t.length < 2 ? "0" + t : t;
}
var vb = kf.exports;
const Wn = Mf, Lf = {};
for (const e of Object.keys(Wn))
  Lf[Wn[e]] = e;
const z = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
};
var Df = z;
for (const e of Object.keys(z)) {
  if (!("channels" in z[e]))
    throw new Error("missing channels property: " + e);
  if (!("labels" in z[e]))
    throw new Error("missing channel labels property: " + e);
  if (z[e].labels.length !== z[e].channels)
    throw new Error("channel and label counts mismatch: " + e);
  const { channels: t, labels: r } = z[e];
  delete z[e].channels, delete z[e].labels, Object.defineProperty(z[e], "channels", { value: t }), Object.defineProperty(z[e], "labels", { value: r });
}
z.rgb.hsl = function(e) {
  const t = e[0] / 255, r = e[1] / 255, n = e[2] / 255, o = Math.min(t, r, n), i = Math.max(t, r, n), s = i - o;
  let c, u;
  i === o ? c = 0 : t === i ? c = (r - n) / s : r === i ? c = 2 + (n - t) / s : n === i && (c = 4 + (t - r) / s), c = Math.min(c * 60, 360), c < 0 && (c += 360);
  const p = (o + i) / 2;
  return i === o ? u = 0 : p <= 0.5 ? u = s / (i + o) : u = s / (2 - i - o), [c, u * 100, p * 100];
};
z.rgb.hsv = function(e) {
  let t, r, n, o, i;
  const s = e[0] / 255, c = e[1] / 255, u = e[2] / 255, p = Math.max(s, c, u), h = p - Math.min(s, c, u), g = function(S) {
    return (p - S) / 6 / h + 1 / 2;
  };
  return h === 0 ? (o = 0, i = 0) : (i = h / p, t = g(s), r = g(c), n = g(u), s === p ? o = n - r : c === p ? o = 1 / 3 + t - n : u === p && (o = 2 / 3 + r - t), o < 0 ? o += 1 : o > 1 && (o -= 1)), [
    o * 360,
    i * 100,
    p * 100
  ];
};
z.rgb.hwb = function(e) {
  const t = e[0], r = e[1];
  let n = e[2];
  const o = z.rgb.hsl(e)[0], i = 1 / 255 * Math.min(t, Math.min(r, n));
  return n = 1 - 1 / 255 * Math.max(t, Math.max(r, n)), [o, i * 100, n * 100];
};
z.rgb.cmyk = function(e) {
  const t = e[0] / 255, r = e[1] / 255, n = e[2] / 255, o = Math.min(1 - t, 1 - r, 1 - n), i = (1 - t - o) / (1 - o) || 0, s = (1 - r - o) / (1 - o) || 0, c = (1 - n - o) / (1 - o) || 0;
  return [i * 100, s * 100, c * 100, o * 100];
};
function Ob(e, t) {
  return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
}
z.rgb.keyword = function(e) {
  const t = Lf[e];
  if (t)
    return t;
  let r = 1 / 0, n;
  for (const o of Object.keys(Wn)) {
    const i = Wn[o], s = Ob(e, i);
    s < r && (r = s, n = o);
  }
  return n;
};
z.keyword.rgb = function(e) {
  return Wn[e];
};
z.rgb.xyz = function(e) {
  let t = e[0] / 255, r = e[1] / 255, n = e[2] / 255;
  t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92, r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92, n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92;
  const o = t * 0.4124 + r * 0.3576 + n * 0.1805, i = t * 0.2126 + r * 0.7152 + n * 0.0722, s = t * 0.0193 + r * 0.1192 + n * 0.9505;
  return [o * 100, i * 100, s * 100];
};
z.rgb.lab = function(e) {
  const t = z.rgb.xyz(e);
  let r = t[0], n = t[1], o = t[2];
  r /= 95.047, n /= 100, o /= 108.883, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116, o = o > 8856e-6 ? o ** (1 / 3) : 7.787 * o + 16 / 116;
  const i = 116 * n - 16, s = 500 * (r - n), c = 200 * (n - o);
  return [i, s, c];
};
z.hsl.rgb = function(e) {
  const t = e[0] / 360, r = e[1] / 100, n = e[2] / 100;
  let o, i, s;
  if (r === 0)
    return s = n * 255, [s, s, s];
  n < 0.5 ? o = n * (1 + r) : o = n + r - n * r;
  const c = 2 * n - o, u = [0, 0, 0];
  for (let p = 0; p < 3; p++)
    i = t + 1 / 3 * -(p - 1), i < 0 && i++, i > 1 && i--, 6 * i < 1 ? s = c + (o - c) * 6 * i : 2 * i < 1 ? s = o : 3 * i < 2 ? s = c + (o - c) * (2 / 3 - i) * 6 : s = c, u[p] = s * 255;
  return u;
};
z.hsl.hsv = function(e) {
  const t = e[0];
  let r = e[1] / 100, n = e[2] / 100, o = r;
  const i = Math.max(n, 0.01);
  n *= 2, r *= n <= 1 ? n : 2 - n, o *= i <= 1 ? i : 2 - i;
  const s = (n + r) / 2, c = n === 0 ? 2 * o / (i + o) : 2 * r / (n + r);
  return [t, c * 100, s * 100];
};
z.hsv.rgb = function(e) {
  const t = e[0] / 60, r = e[1] / 100;
  let n = e[2] / 100;
  const o = Math.floor(t) % 6, i = t - Math.floor(t), s = 255 * n * (1 - r), c = 255 * n * (1 - r * i), u = 255 * n * (1 - r * (1 - i));
  switch (n *= 255, o) {
    case 0:
      return [n, u, s];
    case 1:
      return [c, n, s];
    case 2:
      return [s, n, u];
    case 3:
      return [s, c, n];
    case 4:
      return [u, s, n];
    case 5:
      return [n, s, c];
  }
};
z.hsv.hsl = function(e) {
  const t = e[0], r = e[1] / 100, n = e[2] / 100, o = Math.max(n, 0.01);
  let i, s;
  s = (2 - r) * n;
  const c = (2 - r) * o;
  return i = r * o, i /= c <= 1 ? c : 2 - c, i = i || 0, s /= 2, [t, i * 100, s * 100];
};
z.hwb.rgb = function(e) {
  const t = e[0] / 360;
  let r = e[1] / 100, n = e[2] / 100;
  const o = r + n;
  let i;
  o > 1 && (r /= o, n /= o);
  const s = Math.floor(6 * t), c = 1 - n;
  i = 6 * t - s, s & 1 && (i = 1 - i);
  const u = r + i * (c - r);
  let p, h, g;
  switch (s) {
    default:
    case 6:
    case 0:
      p = c, h = u, g = r;
      break;
    case 1:
      p = u, h = c, g = r;
      break;
    case 2:
      p = r, h = c, g = u;
      break;
    case 3:
      p = r, h = u, g = c;
      break;
    case 4:
      p = u, h = r, g = c;
      break;
    case 5:
      p = c, h = r, g = u;
      break;
  }
  return [p * 255, h * 255, g * 255];
};
z.cmyk.rgb = function(e) {
  const t = e[0] / 100, r = e[1] / 100, n = e[2] / 100, o = e[3] / 100, i = 1 - Math.min(1, t * (1 - o) + o), s = 1 - Math.min(1, r * (1 - o) + o), c = 1 - Math.min(1, n * (1 - o) + o);
  return [i * 255, s * 255, c * 255];
};
z.xyz.rgb = function(e) {
  const t = e[0] / 100, r = e[1] / 100, n = e[2] / 100;
  let o, i, s;
  return o = t * 3.2406 + r * -1.5372 + n * -0.4986, i = t * -0.9689 + r * 1.8758 + n * 0.0415, s = t * 0.0557 + r * -0.204 + n * 1.057, o = o > 31308e-7 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92, i = i > 31308e-7 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92, s = s > 31308e-7 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92, o = Math.min(Math.max(0, o), 1), i = Math.min(Math.max(0, i), 1), s = Math.min(Math.max(0, s), 1), [o * 255, i * 255, s * 255];
};
z.xyz.lab = function(e) {
  let t = e[0], r = e[1], n = e[2];
  t /= 95.047, r /= 100, n /= 108.883, t = t > 8856e-6 ? t ** (1 / 3) : 7.787 * t + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116;
  const o = 116 * r - 16, i = 500 * (t - r), s = 200 * (r - n);
  return [o, i, s];
};
z.lab.xyz = function(e) {
  const t = e[0], r = e[1], n = e[2];
  let o, i, s;
  i = (t + 16) / 116, o = r / 500 + i, s = i - n / 200;
  const c = i ** 3, u = o ** 3, p = s ** 3;
  return i = c > 8856e-6 ? c : (i - 16 / 116) / 7.787, o = u > 8856e-6 ? u : (o - 16 / 116) / 7.787, s = p > 8856e-6 ? p : (s - 16 / 116) / 7.787, o *= 95.047, i *= 100, s *= 108.883, [o, i, s];
};
z.lab.lch = function(e) {
  const t = e[0], r = e[1], n = e[2];
  let o;
  o = Math.atan2(n, r) * 360 / 2 / Math.PI, o < 0 && (o += 360);
  const s = Math.sqrt(r * r + n * n);
  return [t, s, o];
};
z.lch.lab = function(e) {
  const t = e[0], r = e[1], o = e[2] / 360 * 2 * Math.PI, i = r * Math.cos(o), s = r * Math.sin(o);
  return [t, i, s];
};
z.rgb.ansi16 = function(e, t = null) {
  const [r, n, o] = e;
  let i = t === null ? z.rgb.hsv(e)[2] : t;
  if (i = Math.round(i / 50), i === 0)
    return 30;
  let s = 30 + (Math.round(o / 255) << 2 | Math.round(n / 255) << 1 | Math.round(r / 255));
  return i === 2 && (s += 60), s;
};
z.hsv.ansi16 = function(e) {
  return z.rgb.ansi16(z.hsv.rgb(e), e[2]);
};
z.rgb.ansi256 = function(e) {
  const t = e[0], r = e[1], n = e[2];
  return t === r && r === n ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(r / 255 * 5) + Math.round(n / 255 * 5);
};
z.ansi16.rgb = function(e) {
  let t = e % 10;
  if (t === 0 || t === 7)
    return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
  const r = (~~(e > 50) + 1) * 0.5, n = (t & 1) * r * 255, o = (t >> 1 & 1) * r * 255, i = (t >> 2 & 1) * r * 255;
  return [n, o, i];
};
z.ansi256.rgb = function(e) {
  if (e >= 232) {
    const i = (e - 232) * 10 + 8;
    return [i, i, i];
  }
  e -= 16;
  let t;
  const r = Math.floor(e / 36) / 5 * 255, n = Math.floor((t = e % 36) / 6) / 5 * 255, o = t % 6 / 5 * 255;
  return [r, n, o];
};
z.rgb.hex = function(e) {
  const r = (((Math.round(e[0]) & 255) << 16) + ((Math.round(e[1]) & 255) << 8) + (Math.round(e[2]) & 255)).toString(16).toUpperCase();
  return "000000".substring(r.length) + r;
};
z.hex.rgb = function(e) {
  const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!t)
    return [0, 0, 0];
  let r = t[0];
  t[0].length === 3 && (r = r.split("").map((c) => c + c).join(""));
  const n = parseInt(r, 16), o = n >> 16 & 255, i = n >> 8 & 255, s = n & 255;
  return [o, i, s];
};
z.rgb.hcg = function(e) {
  const t = e[0] / 255, r = e[1] / 255, n = e[2] / 255, o = Math.max(Math.max(t, r), n), i = Math.min(Math.min(t, r), n), s = o - i;
  let c, u;
  return s < 1 ? c = i / (1 - s) : c = 0, s <= 0 ? u = 0 : o === t ? u = (r - n) / s % 6 : o === r ? u = 2 + (n - t) / s : u = 4 + (t - r) / s, u /= 6, u %= 1, [u * 360, s * 100, c * 100];
};
z.hsl.hcg = function(e) {
  const t = e[1] / 100, r = e[2] / 100, n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r);
  let o = 0;
  return n < 1 && (o = (r - 0.5 * n) / (1 - n)), [e[0], n * 100, o * 100];
};
z.hsv.hcg = function(e) {
  const t = e[1] / 100, r = e[2] / 100, n = t * r;
  let o = 0;
  return n < 1 && (o = (r - n) / (1 - n)), [e[0], n * 100, o * 100];
};
z.hcg.rgb = function(e) {
  const t = e[0] / 360, r = e[1] / 100, n = e[2] / 100;
  if (r === 0)
    return [n * 255, n * 255, n * 255];
  const o = [0, 0, 0], i = t % 1 * 6, s = i % 1, c = 1 - s;
  let u = 0;
  switch (Math.floor(i)) {
    case 0:
      o[0] = 1, o[1] = s, o[2] = 0;
      break;
    case 1:
      o[0] = c, o[1] = 1, o[2] = 0;
      break;
    case 2:
      o[0] = 0, o[1] = 1, o[2] = s;
      break;
    case 3:
      o[0] = 0, o[1] = c, o[2] = 1;
      break;
    case 4:
      o[0] = s, o[1] = 0, o[2] = 1;
      break;
    default:
      o[0] = 1, o[1] = 0, o[2] = c;
  }
  return u = (1 - r) * n, [
    (r * o[0] + u) * 255,
    (r * o[1] + u) * 255,
    (r * o[2] + u) * 255
  ];
};
z.hcg.hsv = function(e) {
  const t = e[1] / 100, r = e[2] / 100, n = t + r * (1 - t);
  let o = 0;
  return n > 0 && (o = t / n), [e[0], o * 100, n * 100];
};
z.hcg.hsl = function(e) {
  const t = e[1] / 100, n = e[2] / 100 * (1 - t) + 0.5 * t;
  let o = 0;
  return n > 0 && n < 0.5 ? o = t / (2 * n) : n >= 0.5 && n < 1 && (o = t / (2 * (1 - n))), [e[0], o * 100, n * 100];
};
z.hcg.hwb = function(e) {
  const t = e[1] / 100, r = e[2] / 100, n = t + r * (1 - t);
  return [e[0], (n - t) * 100, (1 - n) * 100];
};
z.hwb.hcg = function(e) {
  const t = e[1] / 100, n = 1 - e[2] / 100, o = n - t;
  let i = 0;
  return o < 1 && (i = (n - o) / (1 - o)), [e[0], o * 100, i * 100];
};
z.apple.rgb = function(e) {
  return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
};
z.rgb.apple = function(e) {
  return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
};
z.gray.rgb = function(e) {
  return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
};
z.gray.hsl = function(e) {
  return [0, 0, e[0]];
};
z.gray.hsv = z.gray.hsl;
z.gray.hwb = function(e) {
  return [0, 100, e[0]];
};
z.gray.cmyk = function(e) {
  return [0, 0, 0, e[0]];
};
z.gray.lab = function(e) {
  return [e[0], 0, 0];
};
z.gray.hex = function(e) {
  const t = Math.round(e[0] / 100 * 255) & 255, n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
  return "000000".substring(n.length) + n;
};
z.rgb.gray = function(e) {
  return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
};
const ko = Df;
function _b() {
  const e = {}, t = Object.keys(ko);
  for (let r = t.length, n = 0; n < r; n++)
    e[t[n]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  return e;
}
function Eb(e) {
  const t = _b(), r = [e];
  for (t[e].distance = 0; r.length; ) {
    const n = r.pop(), o = Object.keys(ko[n]);
    for (let i = o.length, s = 0; s < i; s++) {
      const c = o[s], u = t[c];
      u.distance === -1 && (u.distance = t[n].distance + 1, u.parent = n, r.unshift(c));
    }
  }
  return t;
}
function $b(e, t) {
  return function(r) {
    return t(e(r));
  };
}
function Ab(e, t) {
  const r = [t[e].parent, e];
  let n = ko[t[e].parent][e], o = t[e].parent;
  for (; t[o].parent; )
    r.unshift(t[o].parent), n = $b(ko[t[o].parent][o], n), o = t[o].parent;
  return n.conversion = r, n;
}
var Ib = function(e) {
  const t = Eb(e), r = {}, n = Object.keys(t);
  for (let o = n.length, i = 0; i < o; i++) {
    const s = n[i];
    t[s].parent !== null && (r[s] = Ab(s, t));
  }
  return r;
};
const as = Df, Rb = Ib, Dr = {}, Pb = Object.keys(as);
function Fb(e) {
  const t = function(...r) {
    const n = r[0];
    return n == null ? n : (n.length > 1 && (r = n), e(r));
  };
  return "conversion" in e && (t.conversion = e.conversion), t;
}
function Cb(e) {
  const t = function(...r) {
    const n = r[0];
    if (n == null)
      return n;
    n.length > 1 && (r = n);
    const o = e(r);
    if (typeof o == "object")
      for (let i = o.length, s = 0; s < i; s++)
        o[s] = Math.round(o[s]);
    return o;
  };
  return "conversion" in e && (t.conversion = e.conversion), t;
}
Pb.forEach((e) => {
  Dr[e] = {}, Object.defineProperty(Dr[e], "channels", { value: as[e].channels }), Object.defineProperty(Dr[e], "labels", { value: as[e].labels });
  const t = Rb(e);
  Object.keys(t).forEach((n) => {
    const o = t[n];
    Dr[e][n] = Cb(o), Dr[e][n].raw = Fb(o);
  });
});
var kb = Dr;
const jr = vb, ft = kb, jf = [
  // To be honest, I don't really feel like keyword belongs in color convert, but eh.
  "keyword",
  // Gray conflicts with some method names, and has its own method defined.
  "gray",
  // Shouldn't really be in color-convert either...
  "hex"
], us = {};
for (const e of Object.keys(ft))
  us[[...ft[e].labels].sort().join("")] = e;
const Mo = {};
function Ue(e, t) {
  if (!(this instanceof Ue))
    return new Ue(e, t);
  if (t && t in jf && (t = null), t && !(t in ft))
    throw new Error("Unknown model: " + t);
  let r, n;
  if (e == null)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (e instanceof Ue)
    this.model = e.model, this.color = [...e.color], this.valpha = e.valpha;
  else if (typeof e == "string") {
    const o = jr.get(e);
    if (o === null)
      throw new Error("Unable to parse color from string: " + e);
    this.model = o.model, n = ft[this.model].channels, this.color = o.value.slice(0, n), this.valpha = typeof o.value[n] == "number" ? o.value[n] : 1;
  } else if (e.length > 0) {
    this.model = t || "rgb", n = ft[this.model].channels;
    const o = Array.prototype.slice.call(e, 0, n);
    this.color = fs(o, n), this.valpha = typeof e[n] == "number" ? e[n] : 1;
  } else if (typeof e == "number")
    this.model = "rgb", this.color = [
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255
    ], this.valpha = 1;
  else {
    this.valpha = 1;
    const o = Object.keys(e);
    "alpha" in e && (o.splice(o.indexOf("alpha"), 1), this.valpha = typeof e.alpha == "number" ? e.alpha : 0);
    const i = o.sort().join("");
    if (!(i in us))
      throw new Error("Unable to parse color from object: " + JSON.stringify(e));
    this.model = us[i];
    const { labels: s } = ft[this.model], c = [];
    for (r = 0; r < s.length; r++)
      c.push(e[s[r]]);
    this.color = fs(c);
  }
  if (Mo[this.model])
    for (n = ft[this.model].channels, r = 0; r < n; r++) {
      const o = Mo[this.model][r];
      o && (this.color[r] = o(this.color[r]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
Ue.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(e) {
    let t = this.model in jr.to ? this : this.rgb();
    t = t.round(typeof e == "number" ? e : 1);
    const r = t.valpha === 1 ? t.color : [...t.color, this.valpha];
    return jr.to[t.model](r);
  },
  percentString(e) {
    const t = this.rgb().round(typeof e == "number" ? e : 1), r = t.valpha === 1 ? t.color : [...t.color, this.valpha];
    return jr.to.rgb.percent(r);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const e = {}, { channels: t } = ft[this.model], { labels: r } = ft[this.model];
    for (let n = 0; n < t; n++)
      e[r[n]] = this.color[n];
    return this.valpha !== 1 && (e.alpha = this.valpha), e;
  },
  unitArray() {
    const e = this.rgb().color;
    return e[0] /= 255, e[1] /= 255, e[2] /= 255, this.valpha !== 1 && e.push(this.valpha), e;
  },
  unitObject() {
    const e = this.rgb().object();
    return e.r /= 255, e.g /= 255, e.b /= 255, this.valpha !== 1 && (e.alpha = this.valpha), e;
  },
  round(e) {
    return e = Math.max(e || 0, 0), new Ue([...this.color.map(Tb(e)), this.valpha], this.model);
  },
  alpha(e) {
    return e !== void 0 ? new Ue([...this.color, Math.max(0, Math.min(1, e))], this.model) : this.valpha;
  },
  // Rgb
  red: Oe("rgb", 0, ke(255)),
  green: Oe("rgb", 1, ke(255)),
  blue: Oe("rgb", 2, ke(255)),
  hue: Oe(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (e) => (e % 360 + 360) % 360),
  saturationl: Oe("hsl", 1, ke(100)),
  lightness: Oe("hsl", 2, ke(100)),
  saturationv: Oe("hsv", 1, ke(100)),
  value: Oe("hsv", 2, ke(100)),
  chroma: Oe("hcg", 1, ke(100)),
  gray: Oe("hcg", 2, ke(100)),
  white: Oe("hwb", 1, ke(100)),
  wblack: Oe("hwb", 2, ke(100)),
  cyan: Oe("cmyk", 0, ke(100)),
  magenta: Oe("cmyk", 1, ke(100)),
  yellow: Oe("cmyk", 2, ke(100)),
  black: Oe("cmyk", 3, ke(100)),
  x: Oe("xyz", 0, ke(95.047)),
  y: Oe("xyz", 1, ke(100)),
  z: Oe("xyz", 2, ke(108.833)),
  l: Oe("lab", 0, ke(100)),
  a: Oe("lab", 1),
  b: Oe("lab", 2),
  keyword(e) {
    return e !== void 0 ? new Ue(e) : ft[this.model].keyword(this.color);
  },
  hex(e) {
    return e !== void 0 ? new Ue(e) : jr.to.hex(this.rgb().round().color);
  },
  hexa(e) {
    if (e !== void 0)
      return new Ue(e);
    const t = this.rgb().round().color;
    let r = Math.round(this.valpha * 255).toString(16).toUpperCase();
    return r.length === 1 && (r = "0" + r), jr.to.hex(t) + r;
  },
  rgbNumber() {
    const e = this.rgb().color;
    return (e[0] & 255) << 16 | (e[1] & 255) << 8 | e[2] & 255;
  },
  luminosity() {
    const e = this.rgb().color, t = [];
    for (const [r, n] of e.entries()) {
      const o = n / 255;
      t[r] = o <= 0.04045 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
  },
  contrast(e) {
    const t = this.luminosity(), r = e.luminosity();
    return t > r ? (t + 0.05) / (r + 0.05) : (r + 0.05) / (t + 0.05);
  },
  level(e) {
    const t = this.contrast(e);
    return t >= 7 ? "AAA" : t >= 4.5 ? "AA" : "";
  },
  isDark() {
    const e = this.rgb().color;
    return (e[0] * 2126 + e[1] * 7152 + e[2] * 722) / 1e4 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const e = this.rgb();
    for (let t = 0; t < 3; t++)
      e.color[t] = 255 - e.color[t];
    return e;
  },
  lighten(e) {
    const t = this.hsl();
    return t.color[2] += t.color[2] * e, t;
  },
  darken(e) {
    const t = this.hsl();
    return t.color[2] -= t.color[2] * e, t;
  },
  saturate(e) {
    const t = this.hsl();
    return t.color[1] += t.color[1] * e, t;
  },
  desaturate(e) {
    const t = this.hsl();
    return t.color[1] -= t.color[1] * e, t;
  },
  whiten(e) {
    const t = this.hwb();
    return t.color[1] += t.color[1] * e, t;
  },
  blacken(e) {
    const t = this.hwb();
    return t.color[2] += t.color[2] * e, t;
  },
  grayscale() {
    const e = this.rgb().color, t = e[0] * 0.3 + e[1] * 0.59 + e[2] * 0.11;
    return Ue.rgb(t, t, t);
  },
  fade(e) {
    return this.alpha(this.valpha - this.valpha * e);
  },
  opaquer(e) {
    return this.alpha(this.valpha + this.valpha * e);
  },
  rotate(e) {
    const t = this.hsl();
    let r = t.color[0];
    return r = (r + e) % 360, r = r < 0 ? 360 + r : r, t.color[0] = r, t;
  },
  mix(e, t) {
    if (!e || !e.rgb)
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof e);
    const r = e.rgb(), n = this.rgb(), o = t === void 0 ? 0.5 : t, i = 2 * o - 1, s = r.alpha() - n.alpha(), c = ((i * s === -1 ? i : (i + s) / (1 + i * s)) + 1) / 2, u = 1 - c;
    return Ue.rgb(
      c * r.red() + u * n.red(),
      c * r.green() + u * n.green(),
      c * r.blue() + u * n.blue(),
      r.alpha() * o + n.alpha() * (1 - o)
    );
  }
};
for (const e of Object.keys(ft)) {
  if (jf.includes(e))
    continue;
  const { channels: t } = ft[e];
  Ue.prototype[e] = function(...r) {
    return this.model === e ? new Ue(this) : r.length > 0 ? new Ue(r, e) : new Ue([...Ub(ft[this.model][e].raw(this.color)), this.valpha], e);
  }, Ue[e] = function(...r) {
    let n = r[0];
    return typeof n == "number" && (n = fs(r, t)), new Ue(n, e);
  };
}
function Mb(e, t) {
  return Number(e.toFixed(t));
}
function Tb(e) {
  return function(t) {
    return Mb(t, e);
  };
}
function Oe(e, t, r) {
  e = Array.isArray(e) ? e : [e];
  for (const n of e)
    (Mo[n] || (Mo[n] = []))[t] = r;
  return e = e[0], function(n) {
    let o;
    return n !== void 0 ? (r && (n = r(n)), o = this[e](), o.color[t] = n, o) : (o = this[e]().color[t], r && (o = r(o)), o);
  };
}
function ke(e) {
  return function(t) {
    return Math.max(0, Math.min(e, t));
  };
}
function Ub(e) {
  return Array.isArray(e) ? e : [e];
}
function fs(e, t) {
  for (let r = 0; r < t; r++)
    typeof e[r] != "number" && (e[r] = 0);
  return e;
}
var Nb = Ue;
const Or = /* @__PURE__ */ za(Nb);
function Xe({
  color: e,
  model: t = "hsl"
}) {
  if (e === void 0)
    return new Or();
  if (typeof e == "string")
    return new Or(e);
  switch (t) {
    case "rgb":
      return Or.rgb(e[0], e[1], e[2]);
    case "rgba":
      return Or.rgb(e[0], e[1], e[2]).alpha(e[3]);
    case "hsl":
      return Or.hsl(e[0], e[1], e[2]);
    case "hsla":
      return Or.hsl(e[0], e[1], e[2]).alpha(e[3]);
    default:
      throw new Error(`Unknown color Model: ${t}`);
  }
}
function Lb(e, t) {
  return Xe({
    color: e
  }).darken(t).toString();
}
function Db(e, t) {
  return Xe({
    color: e
  }).desaturate(t).toString();
}
const jb = (e) => Xe({
  color: e
});
function Bb(e, t) {
  return Xe({
    color: e
  }).lighten(t).toString();
}
function zb(e, t) {
  return Xe({
    color: e
  }).alpha(t).toString();
}
const Wb = (e) => {
  if (!e)
    return;
  let t = typeof e.color == "string" ? e.color : "grey";
  return Object.entries(e).forEach(([r, n]) => {
    r !== "color" && typeof n == "number" && (t = An[r](t, n));
  }), t;
}, qb = async (e, t) => {
  throw new Error("node-vibrant does dirty worker shenanigans on load, find simpler alternative");
};
function Kb(e = Math.random) {
  return Or.rgb([255 * e(), 255 * e(), 255 * e()]).toString();
}
function Yb(e, t) {
  return Xe({
    color: e
  }).rotate(t * 360).toString();
}
function Gb(e, t) {
  return Xe({
    color: e
  }).saturate(t).toString();
}
class Bf {
  r;
  g;
  b;
  constructor(t, r, n) {
    this.r = this.clamp(t), this.g = this.clamp(r), this.b = this.clamp(n);
  }
  toString() {
    return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`;
  }
  set(t, r, n) {
    this.r = this.clamp(t), this.g = this.clamp(r), this.b = this.clamp(n);
  }
  hueRotate(t = 0) {
    t = t / 180 * Math.PI;
    const r = Math.sin(t), n = Math.cos(t);
    this.multiply([0.213 + n * 0.787 - r * 0.213, 0.715 - n * 0.715 - r * 0.715, 0.072 - n * 0.072 + r * 0.928, 0.213 - n * 0.213 + r * 0.143, 0.715 + n * 0.285 + r * 0.14, 0.072 - n * 0.072 - r * 0.283, 0.213 - n * 0.213 - r * 0.787, 0.715 - n * 0.715 + r * 0.715, 0.072 + n * 0.928 + r * 0.072]);
  }
  grayscale(t = 1) {
    this.multiply([0.2126 + 0.7874 * (1 - t), 0.7152 - 0.7152 * (1 - t), 0.0722 - 0.0722 * (1 - t), 0.2126 - 0.2126 * (1 - t), 0.7152 + 0.2848 * (1 - t), 0.0722 - 0.0722 * (1 - t), 0.2126 - 0.2126 * (1 - t), 0.7152 - 0.7152 * (1 - t), 0.0722 + 0.9278 * (1 - t)]);
  }
  sepia(t = 1) {
    this.multiply([0.393 + 0.607 * (1 - t), 0.769 - 0.769 * (1 - t), 0.189 - 0.189 * (1 - t), 0.349 - 0.349 * (1 - t), 0.686 + 0.314 * (1 - t), 0.168 - 0.168 * (1 - t), 0.272 - 0.272 * (1 - t), 0.534 - 0.534 * (1 - t), 0.131 + 0.869 * (1 - t)]);
  }
  saturate(t = 1) {
    this.multiply([0.213 + 0.787 * t, 0.715 - 0.715 * t, 0.072 - 0.072 * t, 0.213 - 0.213 * t, 0.715 + 0.285 * t, 0.072 - 0.072 * t, 0.213 - 0.213 * t, 0.715 - 0.715 * t, 0.072 + 0.928 * t]);
  }
  multiply(t) {
    const r = this.clamp(this.r * t[0] + this.g * t[1] + this.b * t[2]), n = this.clamp(this.r * t[3] + this.g * t[4] + this.b * t[5]), o = this.clamp(this.r * t[6] + this.g * t[7] + this.b * t[8]);
    this.r = r, this.g = n, this.b = o;
  }
  brightness(t = 1) {
    this.linear(t);
  }
  contrast(t = 1) {
    this.linear(t, -(0.5 * t) + 0.5);
  }
  linear(t = 1, r = 0) {
    this.r = this.clamp(this.r * t + r * 255), this.g = this.clamp(this.g * t + r * 255), this.b = this.clamp(this.b * t + r * 255);
  }
  invert(t = 1) {
    this.r = this.clamp((t + this.r / 255 * (1 - 2 * t)) * 255), this.g = this.clamp((t + this.g / 255 * (1 - 2 * t)) * 255), this.b = this.clamp((t + this.b / 255 * (1 - 2 * t)) * 255);
  }
  hsl() {
    const t = this.r / 255, r = this.g / 255, n = this.b / 255, o = Math.max(t, r, n), i = Math.min(t, r, n);
    let s = 0, c = 0, u = (o + i) / 2;
    if (o === i)
      s = c = 0;
    else {
      const p = o - i;
      switch (c = u > 0.5 ? p / (2 - o - i) : p / (o + i), o) {
        case t:
          s = (r - n) / p + (r < n ? 6 : 0);
          break;
        case r:
          s = (n - t) / p + 2;
          break;
        case n:
          s = (t - r) / p + 4;
          break;
      }
      s /= 6;
    }
    return {
      h: s * 100,
      s: c * 100,
      l: u * 100
    };
  }
  clamp(t) {
    return t > 255 ? t = 255 : t < 0 && (t = 0), t;
  }
}
class Vb {
  target;
  targetHSL;
  reusedColor;
  constructor(t) {
    this.target = t, this.targetHSL = t.hsl(), this.reusedColor = new Bf(0, 0, 0);
  }
  solve() {
    const t = this.solveNarrow(this.solveWide());
    return {
      values: t.values,
      loss: t.loss,
      filter: this.css(t.values)
    };
  }
  solveWide() {
    const n = [60, 180, 18e3, 600, 1.2, 1.2];
    let o = {
      loss: 1 / 0,
      values: []
    };
    for (let i = 0; o.loss > 25 && i < 3; i++) {
      const s = [50, 20, 3750, 50, 100, 100], c = this.spsa(5, n, 15, s, 1e3);
      c.loss < o.loss && (o = c);
    }
    return o;
  }
  solveNarrow(t) {
    const r = t.loss, n = 2, o = r + 1, i = [0.25 * o, 0.25 * o, o, 0.25 * o, 0.2 * o, 0.2 * o];
    return this.spsa(r, i, n, t.values, 500);
  }
  spsa(t, r, n, o, i) {
    const c = 0.16666666666666666;
    let u = [], p = 1 / 0;
    const h = new Array(6), g = new Array(6), S = new Array(6);
    for (let P = 0; P < i; P++) {
      const x = n / Math.pow(P + 1, c);
      for (let F = 0; F < 6; F++)
        h[F] = Math.random() > 0.5 ? 1 : -1, g[F] = o[F] + x * h[F], S[F] = o[F] - x * h[F];
      const M = this.loss(g) - this.loss(S);
      for (let F = 0; F < 6; F++) {
        const T = M / (2 * x) * h[F], O = r[F] / Math.pow(t + P + 1, 1);
        o[F] = I(o[F] - O * T, F);
      }
      const L = this.loss(o);
      L < p && (u = o.slice(0), p = L);
    }
    return {
      values: u,
      loss: p
    };
    function I(P, x) {
      let M = 100;
      return x === 2 ? M = 7500 : (x === 4 || x === 5) && (M = 200), x === 3 ? P > M ? P %= M : P < 0 && (P = M + P % M) : P < 0 ? P = 0 : P > M && (P = M), P;
    }
  }
  loss(t) {
    const r = this.reusedColor;
    r.set(0, 0, 0), r.invert(t[0] / 100), r.sepia(t[1] / 100), r.saturate(t[2] / 100), r.hueRotate(t[3] * 3.6), r.brightness(t[4] / 100), r.contrast(t[5] / 100);
    const n = r.hsl();
    return Math.abs(r.r - this.target.r) + Math.abs(r.g - this.target.g) + Math.abs(r.b - this.target.b) + Math.abs(n.h - this.targetHSL.h) + Math.abs(n.s - this.targetHSL.s) + Math.abs(n.l - this.targetHSL.l);
  }
  css(t) {
    function r(n, o = 1) {
      return Math.round(t[n] * o);
    }
    return `invert(${r(0)}%) sepia(${r(1)}%) saturate(${r(2)}%) hue-rotate(${r(3, 3.6)}deg) brightness(${r(4)}%) contrast(${r(5)}%)`;
  }
}
function Hb(e) {
  const t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(t, (n, o, i, s) => o + o + i + i + s + s);
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  if (r)
    return [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)];
  throw new Error("Error pasring hex: " + e);
}
function Jb({
  someColor: e,
  from: t
}) {
  const r = Xe({
    color: e
  }).hex(), n = Hb(r), o = new Bf(n[0], n[1], n[2]), s = new Vb(o).solve();
  return [t === "white" ? "brightness(0) saturate(100%) " : "", s.filter].join("");
}
function pa(e, t, r) {
  return e <= t ? t : e >= r ? r : e;
}
function Xb(e) {
  return typeof e == "object" && typeof e.color == "function" && typeof e.text == "function";
}
function mc(e, t = 0) {
  if (t <= 0)
    return e;
  const r = e.flatMap((n, o, i) => {
    if (o === i.length - 1)
      return [n];
    const s = i[o + 1];
    return [n, n.mix(s)];
  });
  return mc(r, t - 1);
}
function Zb(e, t = 8) {
  if (Xb(e))
    return e;
  const r = mc(e.map((o) => Xe({
    color: o
  })), t), n = {
    s12: (o) => n.color(o / 12),
    s12t: (o) => n.text(o / 12),
    color: (o) => {
      o = pa(o, 0, 1);
      const i = pa(Math.floor(o * r.length), 0, r.length - 1);
      return r[i].toString();
    },
    text: (o) => {
      const i = n.color(o);
      return zf([i]);
    }
  };
  return n;
}
const ma = {
  create: Zb,
  expandColors: mc
};
function zf(e, t = 4.5) {
  return e.map((o) => Qb({
    color: o,
    threshold: t
  })).sort((o, i) => {
    const [s, c] = o, [u, p] = i;
    return c === p ? 0 : c > p ? 1 : -1;
  }).map((o) => o[0])[0]?.toString();
}
function Qb({
  color: e,
  threshold: t = 4.5,
  steps: r = 12
}) {
  const n = ma.create(["black", "white"]), o = ma.create(["white", "black"]), i = Xe({
    color: e
  });
  let s, c = 1e3;
  for (let h = 0; h < r; h++) {
    const g = Xe({
      color: n.color(h / r * 0.5)
    }), S = g.contrast(i);
    S > t && S < c && (s = g, c = S);
  }
  let u, p = 1e3;
  for (let h = 0; h < r; h++) {
    const g = Xe({
      color: o.color(h / r * 0.5)
    }), S = g.contrast(i);
    S > t && S < p && (u = g, p = S);
  }
  return p < c ? [u, p] : [s, c];
}
function e2(e, t) {
  return Xe({
    color: e,
    model: t
  }).hsl().string();
}
function t2(e) {
  return Xe({
    color: e
  }).rgbNumber();
}
const An = {
  from: jb,
  builder: Xe,
  toCss: e2,
  toRgbInteger: t2,
  darken: Lb,
  desaturate: Db,
  lighten: Bb,
  randomColor: Kb,
  saturate: Gb,
  textColor: zf,
  toCssFilters: Jb,
  rotateHue: Yb,
  operateOn: Wb,
  opacity: zb,
  palletteFrom: qb
}, Wf = {
  "SHA-256": 32,
  "SHA-512": 64
}, hc = ["SHA-256", "SHA-512"], yc = (e) => {
  const t = e.flatMap((r) => typeof r == "number" ? [r] : JSON.stringify(r).split("").map((n) => n.codePointAt(0)));
  return new Float64Array(t.length).map((r, n) => t[n]);
}, cn = async (e) => e instanceof ArrayBuffer ? e : e instanceof Blob ? e.arrayBuffer() : typeof e == "string" ? new TextEncoder().encode(e) : ArrayBuffer.isView(e) ? e.buffer : Array.isArray(e) ? yc(e) : new ArrayBuffer(0), li = async ({
  bytes: e,
  algorithm: t = "SHA-512"
}) => {
  const r = await cn(e);
  return crypto.subtle.digest(t, r);
}, qf = async (e, t = 16) => {
  const r = await cn(e);
  return [...new Uint8Array(r)].map((n) => n.toString(t).padStart(2, "0")).join("");
}, To = async ({
  bytes: e,
  algorithm: t = "SHA-512",
  radix: r = 16
}) => {
  const n = await li({
    bytes: e,
    algorithm: t
  }), o = await qf(n, r);
  return `${t}:${o}`;
}, r2 = ({
  id: e
}) => {
  const t = e.split(":");
  Yr.assert(t.length === 2);
  const [r, n] = t, o = atob(n), i = new Uint8Array(o.length);
  return o.split("").map((s) => s.charCodeAt(0)).forEach((s, c) => {
    i[c] = s;
  }), i;
}, Kf = async (e) => {
  if (typeof e == "string")
    return e;
  const t = await cn(e);
  return new TextDecoder().decode(t);
}, so = [];
so.push(async () => {
  const e = "test", t = await cn(e), r = await Kf(t);
  return Yr.assertEqual(e, r);
});
so.push(async () => hc.map(async (e) => {
  const t = await li({
    bytes: "test",
    algorithm: e
  });
  return Yr.assertEqual(t.byteLength, Wf[e]);
}));
so.push(async () => {
  {
    const e = await To({
      bytes: "test",
      algorithm: "SHA-256"
    });
    Yr.assertEqual(e, "SHA-256:n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=");
  }
  {
    const e = await To({
      bytes: "test",
      algorithm: "SHA-512"
    });
    Yr.assertEqual(e, "SHA-512:7iaw3Ur350mqGo7jwQrpkj9hiYB3Lkc/iBml1JQODbJ6wYX4oOHV+E+IvIh/1nsUNzLDBMxfqa2Ob1f1ACio/w==");
  }
});
so.push(async () => hc.map(async (e) => {
  const t = "test", r = await To({
    bytes: t,
    algorithm: e
  }), n = new Uint8Array(await li({
    bytes: t,
    algorithm: e
  })), o = r2({
    id: r
  });
  return Yr.assertEqualElements(o, n);
}));
const n2 = async () => {
  if ((await Promise.all(so.map(async (t) => {
    try {
      return await t(), !0;
    } catch (r) {
      return console.error(r), !1;
    }
  }))).find((t) => t === !1))
    throw new Error("TESTS FAILED");
  return console.log("TESTS PASS"), !0;
};
function gc(e) {
  const t = new Uint8Array(e.slice(0));
  let r = "";
  for (let n = 0; n < t.length; n++)
    r += String.fromCharCode(t[n]);
  return btoa(r);
}
const o2 = (e) => {
  const t = new Uint8Array(e), r = [];
  for (let n = 0; n < t.length; ++n)
    r.push(t[n].toString(16).padStart(2, "0"));
  return r.join("");
}, i2 = (e) => new TextDecoder().decode(new Uint8Array(e)), s2 = (e, t) => e.slice(0, e.size, t), c2 = (e) => {
  const t = globalThis.atob(e), r = t.length, n = new Uint8Array(r);
  for (let o = 0; o < r; o++)
    n[o] = t.charCodeAt(o);
  return n.buffer;
}, a2 = (e) => {
  if (!e)
    return;
  const t = e.split(","), n = (t[0].match(/:(.*?);/) ?? [])[1], o = atob(t[1]);
  let i = o.length;
  const s = new Uint8Array(i);
  for (; i--; )
    s[i] = o.charCodeAt(i);
  return new Blob([s], {
    type: n
  });
}, bc = (e) => e instanceof ArrayBuffer ? e : typeof e == "string" ? new TextEncoder().encode(e) : ArrayBuffer.isView(e) ? e.buffer : Array.isArray(e) ? yc(e) : new ArrayBuffer(0), u2 = async (e, t) => {
  const r = bc(e);
  return crypto.subtle.digest(t, r);
}, wc = (e) => {
  const t = e;
  return !!(t instanceof ArrayBuffer || typeof t == "string" || ArrayBuffer.isView(t) || Array.isArray(t));
}, f2 = (e) => e instanceof Blob ? !0 : wc(e), l2 = (e) => {
  if (typeof e == "string")
    return e.length;
  if (e instanceof Blob)
    return e.size;
  if (e instanceof ArrayBuffer || ArrayBuffer.isView(e))
    return e.byteLength;
};
var ls;
try {
  ls = new TextDecoder();
} catch {
}
var U, vt, l = 0, xe = {}, ne, or, St = 0, Dt = 0, Ne, er, st = [], re, ha = {
  useRecords: !1,
  mapsAsObjects: !0
};
class Yf {
}
const Gf = new Yf();
Gf.name = "MessagePack 0xC1";
var cr = !1, Vf = 2, ya;
try {
  new Function("");
} catch {
  Vf = 1 / 0;
}
class qn {
  constructor(t) {
    t && (t.useRecords === !1 && t.mapsAsObjects === void 0 && (t.mapsAsObjects = !0), t.sequential && t.trusted !== !1 && (t.trusted = !0, !t.structures && t.useRecords != !1 && (t.structures = [], t.maxSharedStructures || (t.maxSharedStructures = 0))), t.structures ? t.structures.sharedLength = t.structures.length : t.getStructures && ((t.structures = []).uninitialized = !0, t.structures.sharedLength = 0), t.int64AsNumber && (t.int64AsType = "number")), Object.assign(this, t);
  }
  unpack(t, r) {
    if (U)
      return el(() => (ps(), this ? this.unpack(t, r) : qn.prototype.unpack.call(ha, t, r)));
    !t.buffer && t.constructor === ArrayBuffer && (t = typeof Buffer < "u" ? Buffer.from(t) : new Uint8Array(t)), typeof r == "object" ? (vt = r.end || t.length, l = r.start || 0) : (l = 0, vt = r > -1 ? r : t.length), Dt = 0, or = null, Ne = null, U = t;
    try {
      re = t.dataView || (t.dataView = new DataView(t.buffer, t.byteOffset, t.byteLength));
    } catch (n) {
      throw U = null, t instanceof Uint8Array ? n : new Error("Source must be a Uint8Array or Buffer but was a " + (t && typeof t == "object" ? t.constructor.name : typeof t));
    }
    if (this instanceof qn) {
      if (xe = this, this.structures)
        return ne = this.structures, go(r);
      (!ne || ne.length > 0) && (ne = []);
    } else
      xe = ha, (!ne || ne.length > 0) && (ne = []);
    return go(r);
  }
  unpackMultiple(t, r) {
    let n, o = 0;
    try {
      cr = !0;
      let i = t.length, s = this ? this.unpack(t, i) : di.unpack(t, i);
      if (r) {
        if (r(s, o, l) === !1) return;
        for (; l < i; )
          if (o = l, r(go(), o, l) === !1)
            return;
      } else {
        for (n = [s]; l < i; )
          o = l, n.push(go());
        return n;
      }
    } catch (i) {
      throw i.lastPosition = o, i.values = n, i;
    } finally {
      cr = !1, ps();
    }
  }
  _mergeStructures(t, r) {
    t = t || [], Object.isFrozen(t) && (t = t.map((n) => n.slice(0)));
    for (let n = 0, o = t.length; n < o; n++) {
      let i = t[n];
      i && (i.isShared = !0, n >= 32 && (i.highByte = n - 32 >> 5));
    }
    t.sharedLength = t.length;
    for (let n in r || [])
      if (n >= 0) {
        let o = t[n], i = r[n];
        i && (o && ((t.restoreStructures || (t.restoreStructures = []))[n] = o), t[n] = i);
      }
    return this.structures = t;
  }
  decode(t, r) {
    return this.unpack(t, r);
  }
}
function go(e) {
  try {
    if (!xe.trusted && !cr) {
      let r = ne.sharedLength || 0;
      r < ne.length && (ne.length = r);
    }
    let t;
    if (xe.randomAccessStructure && U[l] < 64 && U[l] >= 32 && ya ? (t = ya(U, l, vt, xe), U = null, !(e && e.lazy) && t && (t = t.toJSON()), l = vt) : t = Ee(), Ne && (l = Ne.postBundlePosition, Ne = null), cr && (ne.restoreStructures = null), l == vt)
      ne && ne.restoreStructures && ga(), ne = null, U = null, er && (er = null);
    else {
      if (l > vt)
        throw new Error("Unexpected end of MessagePack data");
      if (!cr) {
        let r;
        try {
          r = JSON.stringify(t, (n, o) => typeof o == "bigint" ? `${o}n` : o).slice(0, 100);
        } catch (n) {
          r = "(JSON view not available " + n + ")";
        }
        throw new Error("Data read, but end of buffer not reached " + r);
      }
    }
    return t;
  } catch (t) {
    throw ne && ne.restoreStructures && ga(), ps(), (t instanceof RangeError || t.message.startsWith("Unexpected end of buffer") || l > vt) && (t.incomplete = !0), t;
  }
}
function ga() {
  for (let e in ne.restoreStructures)
    ne[e] = ne.restoreStructures[e];
  ne.restoreStructures = null;
}
function Ee() {
  let e = U[l++];
  if (e < 160)
    if (e < 128) {
      if (e < 64)
        return e;
      {
        let t = ne[e & 63] || xe.getStructures && Hf()[e & 63];
        return t ? (t.read || (t.read = xc(t, e & 63)), t.read()) : e;
      }
    } else if (e < 144)
      if (e -= 128, xe.mapsAsObjects) {
        let t = {};
        for (let r = 0; r < e; r++) {
          let n = Xf();
          n === "__proto__" && (n = "__proto_"), t[n] = Ee();
        }
        return t;
      } else {
        let t = /* @__PURE__ */ new Map();
        for (let r = 0; r < e; r++)
          t.set(Ee(), Ee());
        return t;
      }
    else {
      e -= 144;
      let t = new Array(e);
      for (let r = 0; r < e; r++)
        t[r] = Ee();
      return xe.freezeData ? Object.freeze(t) : t;
    }
  else if (e < 192) {
    let t = e - 160;
    if (Dt >= l)
      return or.slice(l - St, (l += t) - St);
    if (Dt == 0 && vt < 140) {
      let r = t < 16 ? Sc(t) : Jf(t);
      if (r != null)
        return r;
    }
    return ds(t);
  } else {
    let t;
    switch (e) {
      case 192:
        return null;
      case 193:
        return Ne ? (t = Ee(), t > 0 ? Ne[1].slice(Ne.position1, Ne.position1 += t) : Ne[0].slice(Ne.position0, Ne.position0 -= t)) : Gf;
      case 194:
        return !1;
      case 195:
        return !0;
      case 196:
        if (t = U[l++], t === void 0)
          throw new Error("Unexpected end of buffer");
        return qi(t);
      case 197:
        return t = re.getUint16(l), l += 2, qi(t);
      case 198:
        return t = re.getUint32(l), l += 4, qi(t);
      case 199:
        return vr(U[l++]);
      case 200:
        return t = re.getUint16(l), l += 2, vr(t);
      case 201:
        return t = re.getUint32(l), l += 4, vr(t);
      case 202:
        if (t = re.getFloat32(l), xe.useFloat32 > 2) {
          let r = vc[(U[l] & 127) << 1 | U[l + 1] >> 7];
          return l += 4, (r * t + (t > 0 ? 0.5 : -0.5) >> 0) / r;
        }
        return l += 4, t;
      case 203:
        return t = re.getFloat64(l), l += 8, t;
      case 204:
        return U[l++];
      case 205:
        return t = re.getUint16(l), l += 2, t;
      case 206:
        return t = re.getUint32(l), l += 4, t;
      case 207:
        return xe.int64AsType === "number" ? (t = re.getUint32(l) * 4294967296, t += re.getUint32(l + 4)) : xe.int64AsType === "string" ? t = re.getBigUint64(l).toString() : xe.int64AsType === "auto" ? (t = re.getBigUint64(l), t <= BigInt(2) << BigInt(52) && (t = Number(t))) : t = re.getBigUint64(l), l += 8, t;
      case 208:
        return re.getInt8(l++);
      case 209:
        return t = re.getInt16(l), l += 2, t;
      case 210:
        return t = re.getInt32(l), l += 4, t;
      case 211:
        return xe.int64AsType === "number" ? (t = re.getInt32(l) * 4294967296, t += re.getUint32(l + 4)) : xe.int64AsType === "string" ? t = re.getBigInt64(l).toString() : xe.int64AsType === "auto" ? (t = re.getBigInt64(l), t >= BigInt(-2) << BigInt(52) && t <= BigInt(2) << BigInt(52) && (t = Number(t))) : t = re.getBigInt64(l), l += 8, t;
      case 212:
        if (t = U[l++], t == 114)
          return Oa(U[l++] & 63);
        {
          let r = st[t];
          if (r)
            return r.read ? (l++, r.read(Ee())) : r.noBuffer ? (l++, r()) : r(U.subarray(l, ++l));
          throw new Error("Unknown extension " + t);
        }
      case 213:
        return t = U[l], t == 114 ? (l++, Oa(U[l++] & 63, U[l++])) : vr(2);
      case 214:
        return vr(4);
      case 215:
        return vr(8);
      case 216:
        return vr(16);
      case 217:
        return t = U[l++], Dt >= l ? or.slice(l - St, (l += t) - St) : p2(t);
      case 218:
        return t = re.getUint16(l), l += 2, Dt >= l ? or.slice(l - St, (l += t) - St) : m2(t);
      case 219:
        return t = re.getUint32(l), l += 4, Dt >= l ? or.slice(l - St, (l += t) - St) : h2(t);
      case 220:
        return t = re.getUint16(l), l += 2, wa(t);
      case 221:
        return t = re.getUint32(l), l += 4, wa(t);
      case 222:
        return t = re.getUint16(l), l += 2, xa(t);
      case 223:
        return t = re.getUint32(l), l += 4, xa(t);
      default:
        if (e >= 224)
          return e - 256;
        if (e === void 0) {
          let r = new Error("Unexpected end of MessagePack data");
          throw r.incomplete = !0, r;
        }
        throw new Error("Unknown MessagePack token " + e);
    }
  }
}
const d2 = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
function xc(e, t) {
  function r() {
    if (r.count++ > Vf) {
      let o = e.read = new Function("r", "return function(){return " + (xe.freezeData ? "Object.freeze" : "") + "({" + e.map((i) => i === "__proto__" ? "__proto_:r()" : d2.test(i) ? i + ":r()" : "[" + JSON.stringify(i) + "]:r()").join(",") + "})}")(Ee);
      return e.highByte === 0 && (e.read = ba(t, e.read)), o();
    }
    let n = {};
    for (let o = 0, i = e.length; o < i; o++) {
      let s = e[o];
      s === "__proto__" && (s = "__proto_"), n[s] = Ee();
    }
    return xe.freezeData ? Object.freeze(n) : n;
  }
  return r.count = 0, e.highByte === 0 ? ba(t, r) : r;
}
const ba = (e, t) => function() {
  let r = U[l++];
  if (r === 0)
    return t();
  let n = e < 32 ? -(e + (r << 5)) : e + (r << 5), o = ne[n] || Hf()[n];
  if (!o)
    throw new Error("Record id is not defined for " + n);
  return o.read || (o.read = xc(o, e)), o.read();
};
function Hf() {
  let e = el(() => (U = null, xe.getStructures()));
  return ne = xe._mergeStructures(e, ne);
}
var ds = co, p2 = co, m2 = co, h2 = co;
function co(e) {
  let t;
  if (e < 16 && (t = Sc(e)))
    return t;
  if (e > 64 && ls)
    return ls.decode(U.subarray(l, l += e));
  const r = l + e, n = [];
  for (t = ""; l < r; ) {
    const o = U[l++];
    if (!(o & 128))
      n.push(o);
    else if ((o & 224) === 192) {
      const i = U[l++] & 63;
      n.push((o & 31) << 6 | i);
    } else if ((o & 240) === 224) {
      const i = U[l++] & 63, s = U[l++] & 63;
      n.push((o & 31) << 12 | i << 6 | s);
    } else if ((o & 248) === 240) {
      const i = U[l++] & 63, s = U[l++] & 63, c = U[l++] & 63;
      let u = (o & 7) << 18 | i << 12 | s << 6 | c;
      u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), n.push(u);
    } else
      n.push(o);
    n.length >= 4096 && (t += Te.apply(String, n), n.length = 0);
  }
  return n.length > 0 && (t += Te.apply(String, n)), t;
}
function wa(e) {
  let t = new Array(e);
  for (let r = 0; r < e; r++)
    t[r] = Ee();
  return xe.freezeData ? Object.freeze(t) : t;
}
function xa(e) {
  if (xe.mapsAsObjects) {
    let t = {};
    for (let r = 0; r < e; r++) {
      let n = Xf();
      n === "__proto__" && (n = "__proto_"), t[n] = Ee();
    }
    return t;
  } else {
    let t = /* @__PURE__ */ new Map();
    for (let r = 0; r < e; r++)
      t.set(Ee(), Ee());
    return t;
  }
}
var Te = String.fromCharCode;
function Jf(e) {
  let t = l, r = new Array(e);
  for (let n = 0; n < e; n++) {
    const o = U[l++];
    if ((o & 128) > 0) {
      l = t;
      return;
    }
    r[n] = o;
  }
  return Te.apply(String, r);
}
function Sc(e) {
  if (e < 4)
    if (e < 2) {
      if (e === 0)
        return "";
      {
        let t = U[l++];
        if ((t & 128) > 1) {
          l -= 1;
          return;
        }
        return Te(t);
      }
    } else {
      let t = U[l++], r = U[l++];
      if ((t & 128) > 0 || (r & 128) > 0) {
        l -= 2;
        return;
      }
      if (e < 3)
        return Te(t, r);
      let n = U[l++];
      if ((n & 128) > 0) {
        l -= 3;
        return;
      }
      return Te(t, r, n);
    }
  else {
    let t = U[l++], r = U[l++], n = U[l++], o = U[l++];
    if ((t & 128) > 0 || (r & 128) > 0 || (n & 128) > 0 || (o & 128) > 0) {
      l -= 4;
      return;
    }
    if (e < 6) {
      if (e === 4)
        return Te(t, r, n, o);
      {
        let i = U[l++];
        if ((i & 128) > 0) {
          l -= 5;
          return;
        }
        return Te(t, r, n, o, i);
      }
    } else if (e < 8) {
      let i = U[l++], s = U[l++];
      if ((i & 128) > 0 || (s & 128) > 0) {
        l -= 6;
        return;
      }
      if (e < 7)
        return Te(t, r, n, o, i, s);
      let c = U[l++];
      if ((c & 128) > 0) {
        l -= 7;
        return;
      }
      return Te(t, r, n, o, i, s, c);
    } else {
      let i = U[l++], s = U[l++], c = U[l++], u = U[l++];
      if ((i & 128) > 0 || (s & 128) > 0 || (c & 128) > 0 || (u & 128) > 0) {
        l -= 8;
        return;
      }
      if (e < 10) {
        if (e === 8)
          return Te(t, r, n, o, i, s, c, u);
        {
          let p = U[l++];
          if ((p & 128) > 0) {
            l -= 9;
            return;
          }
          return Te(t, r, n, o, i, s, c, u, p);
        }
      } else if (e < 12) {
        let p = U[l++], h = U[l++];
        if ((p & 128) > 0 || (h & 128) > 0) {
          l -= 10;
          return;
        }
        if (e < 11)
          return Te(t, r, n, o, i, s, c, u, p, h);
        let g = U[l++];
        if ((g & 128) > 0) {
          l -= 11;
          return;
        }
        return Te(t, r, n, o, i, s, c, u, p, h, g);
      } else {
        let p = U[l++], h = U[l++], g = U[l++], S = U[l++];
        if ((p & 128) > 0 || (h & 128) > 0 || (g & 128) > 0 || (S & 128) > 0) {
          l -= 12;
          return;
        }
        if (e < 14) {
          if (e === 12)
            return Te(t, r, n, o, i, s, c, u, p, h, g, S);
          {
            let I = U[l++];
            if ((I & 128) > 0) {
              l -= 13;
              return;
            }
            return Te(t, r, n, o, i, s, c, u, p, h, g, S, I);
          }
        } else {
          let I = U[l++], P = U[l++];
          if ((I & 128) > 0 || (P & 128) > 0) {
            l -= 14;
            return;
          }
          if (e < 15)
            return Te(t, r, n, o, i, s, c, u, p, h, g, S, I, P);
          let x = U[l++];
          if ((x & 128) > 0) {
            l -= 15;
            return;
          }
          return Te(t, r, n, o, i, s, c, u, p, h, g, S, I, P, x);
        }
      }
    }
  }
}
function Sa() {
  let e = U[l++], t;
  if (e < 192)
    t = e - 160;
  else
    switch (e) {
      case 217:
        t = U[l++];
        break;
      case 218:
        t = re.getUint16(l), l += 2;
        break;
      case 219:
        t = re.getUint32(l), l += 4;
        break;
      default:
        throw new Error("Expected string");
    }
  return co(t);
}
function qi(e) {
  return xe.copyBuffers ? (
    // specifically use the copying slice (not the node one)
    Uint8Array.prototype.slice.call(U, l, l += e)
  ) : U.subarray(l, l += e);
}
function vr(e) {
  let t = U[l++];
  if (st[t]) {
    let r;
    return st[t](U.subarray(l, r = l += e), (n) => {
      l = n;
      try {
        return Ee();
      } finally {
        l = r;
      }
    });
  } else
    throw new Error("Unknown extension type " + t);
}
var va = new Array(4096);
function Xf() {
  let e = U[l++];
  if (e >= 160 && e < 192) {
    if (e = e - 160, Dt >= l)
      return or.slice(l - St, (l += e) - St);
    if (!(Dt == 0 && vt < 180))
      return ds(e);
  } else
    return l--, Zf(Ee());
  let t = (e << 5 ^ (e > 1 ? re.getUint16(l) : e > 0 ? U[l] : 0)) & 4095, r = va[t], n = l, o = l + e - 3, i, s = 0;
  if (r && r.bytes == e) {
    for (; n < o; ) {
      if (i = re.getUint32(n), i != r[s++]) {
        n = 1879048192;
        break;
      }
      n += 4;
    }
    for (o += 3; n < o; )
      if (i = U[n++], i != r[s++]) {
        n = 1879048192;
        break;
      }
    if (n === o)
      return l = n, r.string;
    o -= 3, n = l;
  }
  for (r = [], va[t] = r, r.bytes = e; n < o; )
    i = re.getUint32(n), r.push(i), n += 4;
  for (o += 3; n < o; )
    i = U[n++], r.push(i);
  let c = e < 16 ? Sc(e) : Jf(e);
  return c != null ? r.string = c : r.string = ds(e);
}
function Zf(e) {
  if (typeof e == "string") return e;
  if (typeof e == "number" || typeof e == "boolean" || typeof e == "bigint") return e.toString();
  if (e == null) return e + "";
  throw new Error("Invalid property type for record", typeof e);
}
const Oa = (e, t) => {
  let r = Ee().map(Zf), n = e;
  t !== void 0 && (e = e < 32 ? -((t << 5) + e) : (t << 5) + e, r.highByte = t);
  let o = ne[e];
  return o && (o.isShared || cr) && ((ne.restoreStructures || (ne.restoreStructures = []))[e] = o), ne[e] = r, r.read = xc(r, n), r.read();
};
st[0] = () => {
};
st[0].noBuffer = !0;
st[66] = (e) => {
  let t = e.length, r = BigInt(e[0] & 128 ? e[0] - 256 : e[0]);
  for (let n = 1; n < t; n++)
    r <<= 8n, r += BigInt(e[n]);
  return r;
};
let y2 = { Error, TypeError, ReferenceError };
st[101] = () => {
  let e = Ee();
  return (y2[e[0]] || Error)(e[1], { cause: e[2] });
};
st[105] = (e) => {
  if (xe.structuredClone === !1) throw new Error("Structured clone extension is disabled");
  let t = re.getUint32(l - 4);
  er || (er = /* @__PURE__ */ new Map());
  let r = U[l], n;
  r >= 144 && r < 160 || r == 220 || r == 221 ? n = [] : n = {};
  let o = { target: n };
  er.set(t, o);
  let i = Ee();
  return o.used ? Object.assign(n, i) : (o.target = i, i);
};
st[112] = (e) => {
  if (xe.structuredClone === !1) throw new Error("Structured clone extension is disabled");
  let t = re.getUint32(l - 4), r = er.get(t);
  return r.used = !0, r.target;
};
st[115] = () => new Set(Ee());
const Qf = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((e) => e + "Array");
let g2 = typeof globalThis == "object" ? globalThis : window;
st[116] = (e) => {
  let t = e[0], r = Qf[t];
  if (!r) {
    if (t === 16) {
      let n = new ArrayBuffer(e.length - 1);
      return new Uint8Array(n).set(e.subarray(1)), n;
    }
    throw new Error("Could not find typed array for code " + t);
  }
  return new g2[r](Uint8Array.prototype.slice.call(e, 1).buffer);
};
st[120] = () => {
  let e = Ee();
  return new RegExp(e[0], e[1]);
};
const b2 = [];
st[98] = (e) => {
  let t = (e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3], r = l;
  return l += t - e.length, Ne = b2, Ne = [Sa(), Sa()], Ne.position0 = 0, Ne.position1 = 0, Ne.postBundlePosition = l, l = r, Ee();
};
st[255] = (e) => e.length == 4 ? new Date((e[0] * 16777216 + (e[1] << 16) + (e[2] << 8) + e[3]) * 1e3) : e.length == 8 ? new Date(
  ((e[0] << 22) + (e[1] << 14) + (e[2] << 6) + (e[3] >> 2)) / 1e6 + ((e[3] & 3) * 4294967296 + e[4] * 16777216 + (e[5] << 16) + (e[6] << 8) + e[7]) * 1e3
) : e.length == 12 ? new Date(
  ((e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3]) / 1e6 + ((e[4] & 128 ? -281474976710656 : 0) + e[6] * 1099511627776 + e[7] * 4294967296 + e[8] * 16777216 + (e[9] << 16) + (e[10] << 8) + e[11]) * 1e3
) : /* @__PURE__ */ new Date("invalid");
function el(e) {
  let t = vt, r = l, n = St, o = Dt, i = or, s = er, c = Ne, u = new Uint8Array(U.slice(0, vt)), p = ne, h = ne.slice(0, ne.length), g = xe, S = cr, I = e();
  return vt = t, l = r, St = n, Dt = o, or = i, er = s, Ne = c, U = u, cr = S, ne = p, ne.splice(0, ne.length, ...h), xe = g, re = new DataView(U.buffer, U.byteOffset, U.byteLength), I;
}
function ps() {
  U = null, er = null, ne = null;
}
const vc = new Array(147);
for (let e = 0; e < 256; e++)
  vc[e] = +("1e" + Math.floor(45.15 - e * 0.30103));
var di = new qn({ useRecords: !1 });
di.unpack;
di.unpackMultiple;
di.unpack;
let w2 = new Float32Array(1);
new Uint8Array(w2.buffer, 0, 4);
let $o;
try {
  $o = new TextEncoder();
} catch {
}
let ms, tl;
const pi = typeof Buffer < "u", bo = pi ? function(e) {
  return Buffer.allocUnsafeSlow(e);
} : Uint8Array, rl = pi ? Buffer : Uint8Array, _a = pi ? 4294967296 : 2144337920;
let y, $n, ge, d = 0, Je, Se = null, x2;
const S2 = 21760, v2 = /[\u0080-\uFFFF]/, Lr = Symbol("record-id");
class Oc extends qn {
  constructor(t) {
    super(t), this.offset = 0;
    let r, n, o, i, s = rl.prototype.utf8Write ? function(m, R) {
      return y.utf8Write(m, R, 4294967295);
    } : $o && $o.encodeInto ? function(m, R) {
      return $o.encodeInto(m, y.subarray(R)).written;
    } : !1, c = this;
    t || (t = {});
    let u = t && t.sequential, p = t.structures || t.saveStructures, h = t.maxSharedStructures;
    if (h == null && (h = p ? 32 : 0), h > 8160)
      throw new Error("Maximum maxSharedStructure is 8160");
    t.structuredClone && t.moreTypes == null && (this.moreTypes = !0);
    let g = t.maxOwnStructures;
    g == null && (g = p ? 32 : 64), !this.structures && t.useRecords != !1 && (this.structures = []);
    let S = h > 32 || g + h > 64, I = h + 64, P = h + g + 64;
    if (P > 8256)
      throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
    let x = [], M = 0, L = 0;
    this.pack = this.encode = function(m, R) {
      if (y || (y = new bo(8192), ge = y.dataView || (y.dataView = new DataView(y.buffer, 0, 8192)), d = 0), Je = y.length - 10, Je - d < 2048 ? (y = new bo(y.length), ge = y.dataView || (y.dataView = new DataView(y.buffer, 0, y.length)), Je = y.length - 10, d = 0) : d = d + 7 & 2147483640, r = d, R & I2 && (d += R & 255), i = c.structuredClone ? /* @__PURE__ */ new Map() : null, c.bundleStrings && typeof m != "string" ? (Se = [], Se.size = 1 / 0) : Se = null, o = c.structures, o) {
        o.uninitialized && (o = c._mergeStructures(c.getStructures()));
        let _ = o.sharedLength || 0;
        if (_ > h)
          throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + o.sharedLength);
        if (!o.transitions) {
          o.transitions = /* @__PURE__ */ Object.create(null);
          for (let C = 0; C < _; C++) {
            let G = o[C];
            if (!G)
              continue;
            let Z, H = o.transitions;
            for (let ee = 0, te = G.length; ee < te; ee++) {
              let Me = G[ee];
              Z = H[Me], Z || (Z = H[Me] = /* @__PURE__ */ Object.create(null)), H = Z;
            }
            H[Lr] = C + 64;
          }
          this.lastNamedStructuresLength = _;
        }
        u || (o.nextId = _ + 64);
      }
      n && (n = !1);
      let A;
      try {
        c.randomAccessStructure && m && m.constructor && m.constructor === Object ? He(m) : O(m);
        let _ = Se;
        if (Se && Aa(r, O, 0), i && i.idsToInsert) {
          let C = i.idsToInsert.sort((ee, te) => ee.offset > te.offset ? 1 : -1), G = C.length, Z = -1;
          for (; _ && G > 0; ) {
            let ee = C[--G].offset + r;
            ee < _.stringsPosition + r && Z === -1 && (Z = 0), ee > _.position + r ? Z >= 0 && (Z += 6) : (Z >= 0 && (ge.setUint32(
              _.position + r,
              ge.getUint32(_.position + r) + Z
            ), Z = -1), _ = _.previous, G++);
          }
          Z >= 0 && _ && ge.setUint32(
            _.position + r,
            ge.getUint32(_.position + r) + Z
          ), d += C.length * 6, d > Je && X(d), c.offset = d;
          let H = _2(y.subarray(r, d), C);
          return i = null, H;
        }
        return c.offset = d, R & $2 ? (y.start = r, y.end = d, y) : y.subarray(r, d);
      } catch (_) {
        throw A = _, _;
      } finally {
        if (o && (F(), n && c.saveStructures)) {
          let _ = o.sharedLength || 0, C = y.subarray(r, d), G = E2(o, c);
          if (!A)
            return c.saveStructures(G, G.isCompatible) === !1 ? c.pack(m, R) : (c.lastNamedStructuresLength = _, y.length > 1073741824 && (y = null), C);
        }
        y.length > 1073741824 && (y = null), R & A2 && (d = r);
      }
    };
    const F = () => {
      L < 10 && L++;
      let m = o.sharedLength || 0;
      if (o.length > m && !u && (o.length = m), M > 1e4)
        o.transitions = null, L = 0, M = 0, x.length > 0 && (x = []);
      else if (x.length > 0 && !u) {
        for (let R = 0, A = x.length; R < A; R++)
          x[R][Lr] = 0;
        x = [];
      }
    }, T = (m) => {
      var R = m.length;
      R < 16 ? y[d++] = 144 | R : R < 65536 ? (y[d++] = 220, y[d++] = R >> 8, y[d++] = R & 255) : (y[d++] = 221, ge.setUint32(d, R), d += 4);
      for (let A = 0; A < R; A++)
        O(m[A]);
    }, O = (m) => {
      d > Je && (y = X(d));
      var R = typeof m, A;
      if (R === "string") {
        let _ = m.length;
        if (Se && _ >= 4 && _ < 4096) {
          if ((Se.size += _) > S2) {
            let H, ee = (Se[0] ? Se[0].length * 3 + Se[1].length : 0) + 10;
            d + ee > Je && (y = X(d + ee));
            let te;
            Se.position ? (te = Se, y[d] = 200, d += 3, y[d++] = 98, H = d - r, d += 4, Aa(r, O, 0), ge.setUint16(H + r - 3, d - r - H)) : (y[d++] = 214, y[d++] = 98, H = d - r, d += 4), Se = ["", ""], Se.previous = te, Se.size = 0, Se.position = H;
          }
          let Z = v2.test(m);
          Se[Z ? 0 : 1] += m, y[d++] = 193, O(Z ? -_ : _);
          return;
        }
        let C;
        _ < 32 ? C = 1 : _ < 256 ? C = 2 : _ < 65536 ? C = 3 : C = 5;
        let G = _ * 3;
        if (d + G > Je && (y = X(d + G)), _ < 64 || !s) {
          let Z, H, ee, te = d + C;
          for (Z = 0; Z < _; Z++)
            H = m.charCodeAt(Z), H < 128 ? y[te++] = H : H < 2048 ? (y[te++] = H >> 6 | 192, y[te++] = H & 63 | 128) : (H & 64512) === 55296 && ((ee = m.charCodeAt(Z + 1)) & 64512) === 56320 ? (H = 65536 + ((H & 1023) << 10) + (ee & 1023), Z++, y[te++] = H >> 18 | 240, y[te++] = H >> 12 & 63 | 128, y[te++] = H >> 6 & 63 | 128, y[te++] = H & 63 | 128) : (y[te++] = H >> 12 | 224, y[te++] = H >> 6 & 63 | 128, y[te++] = H & 63 | 128);
          A = te - d - C;
        } else
          A = s(m, d + C);
        A < 32 ? y[d++] = 160 | A : A < 256 ? (C < 2 && y.copyWithin(d + 2, d + 1, d + 1 + A), y[d++] = 217, y[d++] = A) : A < 65536 ? (C < 3 && y.copyWithin(d + 3, d + 2, d + 2 + A), y[d++] = 218, y[d++] = A >> 8, y[d++] = A & 255) : (C < 5 && y.copyWithin(d + 5, d + 3, d + 3 + A), y[d++] = 219, ge.setUint32(d, A), d += 4), d += A;
      } else if (R === "number")
        if (m >>> 0 === m)
          m < 32 || m < 128 && this.useRecords === !1 || m < 64 && !this.randomAccessStructure ? y[d++] = m : m < 256 ? (y[d++] = 204, y[d++] = m) : m < 65536 ? (y[d++] = 205, y[d++] = m >> 8, y[d++] = m & 255) : (y[d++] = 206, ge.setUint32(d, m), d += 4);
        else if (m >> 0 === m)
          m >= -32 ? y[d++] = 256 + m : m >= -128 ? (y[d++] = 208, y[d++] = m + 256) : m >= -32768 ? (y[d++] = 209, ge.setInt16(d, m), d += 2) : (y[d++] = 210, ge.setInt32(d, m), d += 4);
        else {
          let _;
          if ((_ = this.useFloat32) > 0 && m < 4294967296 && m >= -2147483648) {
            y[d++] = 202, ge.setFloat32(d, m);
            let C;
            if (_ < 4 || // this checks for rounding of numbers that were encoded in 32-bit float to nearest significant decimal digit that could be preserved
            (C = m * vc[(y[d] & 127) << 1 | y[d + 1] >> 7]) >> 0 === C) {
              d += 4;
              return;
            } else
              d--;
          }
          y[d++] = 203, ge.setFloat64(d, m), d += 8;
        }
      else if (R === "object" || R === "function")
        if (!m)
          y[d++] = 192;
        else {
          if (i) {
            let C = i.get(m);
            if (C) {
              if (!C.id) {
                let G = i.idsToInsert || (i.idsToInsert = []);
                C.id = G.push(C);
              }
              y[d++] = 214, y[d++] = 112, ge.setUint32(d, C.id), d += 4;
              return;
            } else
              i.set(m, { offset: d - r });
          }
          let _ = m.constructor;
          if (_ === Object)
            de(m);
          else if (_ === Array)
            T(m);
          else if (_ === Map)
            if (this.mapAsEmptyObject) y[d++] = 128;
            else {
              A = m.size, A < 16 ? y[d++] = 128 | A : A < 65536 ? (y[d++] = 222, y[d++] = A >> 8, y[d++] = A & 255) : (y[d++] = 223, ge.setUint32(d, A), d += 4);
              for (let [C, G] of m)
                O(C), O(G);
            }
          else {
            for (let C = 0, G = ms.length; C < G; C++) {
              let Z = tl[C];
              if (m instanceof Z) {
                let H = ms[C];
                if (H.write) {
                  H.type && (y[d++] = 212, y[d++] = H.type, y[d++] = 0);
                  let $t = H.write.call(this, m);
                  $t === m ? Array.isArray(m) ? T(m) : de(m) : O($t);
                  return;
                }
                let ee = y, te = ge, Me = d;
                y = null;
                let tt;
                try {
                  tt = H.pack.call(this, m, ($t) => (y = ee, ee = null, d += $t, d > Je && X(d), {
                    target: y,
                    targetView: ge,
                    position: d - $t
                  }), O);
                } finally {
                  ee && (y = ee, ge = te, d = Me, Je = y.length - 10);
                }
                tt && (tt.length + d > Je && X(tt.length + d), d = O2(tt, y, d, H.type));
                return;
              }
            }
            if (Array.isArray(m))
              T(m);
            else {
              if (m.toJSON) {
                const C = m.toJSON();
                if (C !== m)
                  return O(C);
              }
              if (R === "function")
                return O(this.writeFunction && this.writeFunction(m));
              de(m);
            }
          }
        }
      else if (R === "boolean")
        y[d++] = m ? 195 : 194;
      else if (R === "bigint") {
        if (m < BigInt(1) << BigInt(63) && m >= -(BigInt(1) << BigInt(63)))
          y[d++] = 211, ge.setBigInt64(d, m);
        else if (m < BigInt(1) << BigInt(64) && m > 0)
          y[d++] = 207, ge.setBigUint64(d, m);
        else if (this.largeBigIntToFloat)
          y[d++] = 203, ge.setFloat64(d, Number(m));
        else if (this.useBigIntExtension && m < 2n ** 1023n && m > -(2n ** 1023n)) {
          y[d++] = 199, d++, y[d++] = 66;
          let _ = [], C;
          do {
            let G = m & 0xffn;
            C = (G & 0x80n) === (m < 0n ? 0x80n : 0n), _.push(G), m >>= 8n;
          } while (!((m === 0n || m === -1n) && C));
          y[d - 2] = _.length;
          for (let G = _.length; G > 0; )
            y[d++] = Number(_[--G]);
          return;
        } else
          throw new RangeError(m + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension or set largeBigIntToFloat to convert to float-64");
        d += 8;
      } else if (R === "undefined")
        this.encodeUndefinedAsNil ? y[d++] = 192 : (y[d++] = 212, y[d++] = 0, y[d++] = 0);
      else
        throw new Error("Unknown type: " + R);
    }, v = this.variableMapSize || this.coercibleKeyAsNumber ? (m) => {
      let R = Object.keys(m), A = R.length;
      A < 16 ? y[d++] = 128 | A : A < 65536 ? (y[d++] = 222, y[d++] = A >> 8, y[d++] = A & 255) : (y[d++] = 223, ge.setUint32(d, A), d += 4);
      let _;
      if (this.coercibleKeyAsNumber)
        for (let C = 0; C < A; C++) {
          _ = R[C];
          let G = Number(_);
          O(isNaN(G) ? _ : G), O(m[_]);
        }
      else
        for (let C = 0; C < A; C++)
          O(_ = R[C]), O(m[_]);
    } : (m) => {
      y[d++] = 222;
      let R = d - r;
      d += 2;
      let A = 0;
      for (let _ in m)
        (typeof m.hasOwnProperty != "function" || m.hasOwnProperty(_)) && (O(_), O(m[_]), A++);
      y[R++ + r] = A >> 8, y[R + r] = A & 255;
    }, D = this.useRecords === !1 ? v : t.progressiveRecords && !S ? (
      // this is about 2% faster for highly stable structures, since it only requires one for-in loop (but much more expensive when new structure needs to be written)
      (m) => {
        let R, A = o.transitions || (o.transitions = /* @__PURE__ */ Object.create(null)), _ = d++ - r, C;
        for (let G in m)
          if (typeof m.hasOwnProperty != "function" || m.hasOwnProperty(G)) {
            if (R = A[G], R)
              A = R;
            else {
              let Z = Object.keys(m), H = A;
              A = o.transitions;
              let ee = 0;
              for (let te = 0, Me = Z.length; te < Me; te++) {
                let tt = Z[te];
                R = A[tt], R || (R = A[tt] = /* @__PURE__ */ Object.create(null), ee++), A = R;
              }
              _ + r + 1 == d ? (d--, Ce(A, Z, ee)) : et(A, Z, _, ee), C = !0, A = H[G];
            }
            O(m[G]);
          }
        if (!C) {
          let G = A[Lr];
          G ? y[_ + r] = G : et(A, Object.keys(m), _, 0);
        }
      }
    ) : (m) => {
      let R, A = o.transitions || (o.transitions = /* @__PURE__ */ Object.create(null)), _ = 0;
      for (let G in m) (typeof m.hasOwnProperty != "function" || m.hasOwnProperty(G)) && (R = A[G], R || (R = A[G] = /* @__PURE__ */ Object.create(null), _++), A = R);
      let C = A[Lr];
      C ? C >= 96 && S ? (y[d++] = ((C -= 96) & 31) + 96, y[d++] = C >> 5) : y[d++] = C : Ce(A, A.__keys__ || Object.keys(m), _);
      for (let G in m)
        (typeof m.hasOwnProperty != "function" || m.hasOwnProperty(G)) && O(m[G]);
    }, K = typeof this.useRecords == "function" && this.useRecords, de = K ? (m) => {
      K(m) ? D(m) : v(m);
    } : D, X = (m) => {
      let R;
      if (m > 16777216) {
        if (m - r > _a)
          throw new Error("Packed buffer would be larger than maximum buffer size");
        R = Math.min(
          _a,
          Math.round(Math.max((m - r) * (m > 67108864 ? 1.25 : 2), 4194304) / 4096) * 4096
        );
      } else
        R = (Math.max(m - r << 2, y.length - 1) >> 12) + 1 << 12;
      let A = new bo(R);
      return ge = A.dataView || (A.dataView = new DataView(A.buffer, 0, R)), m = Math.min(m, y.length), y.copy ? y.copy(A, 0, r, m) : A.set(y.slice(r, m)), d -= r, r = 0, Je = A.length - 10, y = A;
    }, Ce = (m, R, A) => {
      let _ = o.nextId;
      _ || (_ = 64), _ < I && this.shouldShareStructure && !this.shouldShareStructure(R) ? (_ = o.nextOwnId, _ < P || (_ = I), o.nextOwnId = _ + 1) : (_ >= P && (_ = I), o.nextId = _ + 1);
      let C = R.highByte = _ >= 96 && S ? _ - 96 >> 5 : -1;
      m[Lr] = _, m.__keys__ = R, o[_ - 64] = R, _ < I ? (R.isShared = !0, o.sharedLength = _ - 63, n = !0, C >= 0 ? (y[d++] = (_ & 31) + 96, y[d++] = C) : y[d++] = _) : (C >= 0 ? (y[d++] = 213, y[d++] = 114, y[d++] = (_ & 31) + 96, y[d++] = C) : (y[d++] = 212, y[d++] = 114, y[d++] = _), A && (M += L * A), x.length >= g && (x.shift()[Lr] = 0), x.push(m), O(R));
    }, et = (m, R, A, _) => {
      let C = y, G = d, Z = Je, H = r;
      y = $n, d = 0, r = 0, y || ($n = y = new bo(8192)), Je = y.length - 10, Ce(m, R, _), $n = y;
      let ee = d;
      if (y = C, d = G, Je = Z, r = H, ee > 1) {
        let te = d + ee - 1;
        te > Je && X(te);
        let Me = A + r;
        y.copyWithin(Me + ee, Me + 1, d), y.set($n.slice(0, ee), Me), d = te;
      } else
        y[A + r] = $n[0];
    }, He = (m) => {
      let R = x2(m, y, r, d, o, X, (A, _, C) => {
        if (C)
          return n = !0;
        d = _;
        let G = y;
        return O(A), F(), G !== y ? { position: d, targetView: ge, target: y } : d;
      }, this);
      if (R === 0)
        return de(m);
      d = R;
    };
  }
  useBuffer(t) {
    y = t, ge = new DataView(y.buffer, y.byteOffset, y.byteLength), d = 0;
  }
  clearSharedData() {
    this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = []);
  }
}
tl = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, Yf];
ms = [{
  pack(e, t, r) {
    let n = e.getTime() / 1e3;
    if ((this.useTimestamp32 || e.getMilliseconds() === 0) && n >= 0 && n < 4294967296) {
      let { target: o, targetView: i, position: s } = t(6);
      o[s++] = 214, o[s++] = 255, i.setUint32(s, n);
    } else if (n > 0 && n < 4294967296) {
      let { target: o, targetView: i, position: s } = t(10);
      o[s++] = 215, o[s++] = 255, i.setUint32(s, e.getMilliseconds() * 4e6 + (n / 1e3 / 4294967296 >> 0)), i.setUint32(s + 4, n);
    } else if (isNaN(n)) {
      if (this.onInvalidDate)
        return t(0), r(this.onInvalidDate());
      let { target: o, targetView: i, position: s } = t(3);
      o[s++] = 212, o[s++] = 255, o[s++] = 255;
    } else {
      let { target: o, targetView: i, position: s } = t(15);
      o[s++] = 199, o[s++] = 12, o[s++] = 255, i.setUint32(s, e.getMilliseconds() * 1e6), i.setBigInt64(s + 4, BigInt(Math.floor(n)));
    }
  }
}, {
  pack(e, t, r) {
    if (this.setAsEmptyObject)
      return t(0), r({});
    let n = Array.from(e), { target: o, position: i } = t(this.moreTypes ? 3 : 0);
    this.moreTypes && (o[i++] = 212, o[i++] = 115, o[i++] = 0), r(n);
  }
}, {
  pack(e, t, r) {
    let { target: n, position: o } = t(this.moreTypes ? 3 : 0);
    this.moreTypes && (n[o++] = 212, n[o++] = 101, n[o++] = 0), r([e.name, e.message, e.cause]);
  }
}, {
  pack(e, t, r) {
    let { target: n, position: o } = t(this.moreTypes ? 3 : 0);
    this.moreTypes && (n[o++] = 212, n[o++] = 120, n[o++] = 0), r([e.source, e.flags]);
  }
}, {
  pack(e, t) {
    this.moreTypes ? Ea(e, 16, t) : $a(pi ? Buffer.from(e) : new Uint8Array(e), t);
  }
}, {
  pack(e, t) {
    let r = e.constructor;
    r !== rl && this.moreTypes ? Ea(e, Qf.indexOf(r.name), t) : $a(e, t);
  }
}, {
  pack(e, t) {
    let { target: r, position: n } = t(1);
    r[n] = 193;
  }
}];
function Ea(e, t, r, n) {
  let o = e.byteLength;
  if (o + 1 < 256) {
    var { target: i, position: s } = r(4 + o);
    i[s++] = 199, i[s++] = o + 1;
  } else if (o + 1 < 65536) {
    var { target: i, position: s } = r(5 + o);
    i[s++] = 200, i[s++] = o + 1 >> 8, i[s++] = o + 1 & 255;
  } else {
    var { target: i, position: s, targetView: c } = r(7 + o);
    i[s++] = 201, c.setUint32(s, o + 1), s += 4;
  }
  i[s++] = 116, i[s++] = t, e.buffer || (e = new Uint8Array(e)), i.set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), s);
}
function $a(e, t) {
  let r = e.byteLength;
  var n, o;
  if (r < 256) {
    var { target: n, position: o } = t(r + 2);
    n[o++] = 196, n[o++] = r;
  } else if (r < 65536) {
    var { target: n, position: o } = t(r + 3);
    n[o++] = 197, n[o++] = r >> 8, n[o++] = r & 255;
  } else {
    var { target: n, position: o, targetView: i } = t(r + 5);
    n[o++] = 198, i.setUint32(o, r), o += 4;
  }
  n.set(e, o);
}
function O2(e, t, r, n) {
  let o = e.length;
  switch (o) {
    case 1:
      t[r++] = 212;
      break;
    case 2:
      t[r++] = 213;
      break;
    case 4:
      t[r++] = 214;
      break;
    case 8:
      t[r++] = 215;
      break;
    case 16:
      t[r++] = 216;
      break;
    default:
      o < 256 ? (t[r++] = 199, t[r++] = o) : o < 65536 ? (t[r++] = 200, t[r++] = o >> 8, t[r++] = o & 255) : (t[r++] = 201, t[r++] = o >> 24, t[r++] = o >> 16 & 255, t[r++] = o >> 8 & 255, t[r++] = o & 255);
  }
  return t[r++] = n, t.set(e, r), r += o, r;
}
function _2(e, t) {
  let r, n = t.length * 6, o = e.length - n;
  for (; r = t.pop(); ) {
    let i = r.offset, s = r.id;
    e.copyWithin(i + n, i, o), n -= 6;
    let c = i + n;
    e[c++] = 214, e[c++] = 105, e[c++] = s >> 24, e[c++] = s >> 16 & 255, e[c++] = s >> 8 & 255, e[c++] = s & 255, o = i;
  }
  return e;
}
function Aa(e, t, r) {
  if (Se.length > 0) {
    ge.setUint32(Se.position + e, d + r - Se.position - e), Se.stringsPosition = d - e;
    let n = Se;
    Se = null, t(n[0]), t(n[1]);
  }
}
function E2(e, t) {
  return e.isCompatible = (r) => {
    let n = !r || (t.lastNamedStructuresLength || 0) === r.length;
    return n || t._mergeStructures(r), n;
  }, e;
}
let nl = new Oc({ useRecords: !1 });
nl.pack;
nl.pack;
const $2 = 512, A2 = 1024, I2 = 2048, R2 = (e) => new Oc({
  structuredClone: !0
}).unpack(new Uint8Array(e));
function P2(e) {
  return wc(e) ? C2(e) : F2(e);
}
async function F2(e) {
  const t = await cn(e);
  return gc(t);
}
function C2(e) {
  const t = bc(e);
  return gc(t);
}
const ol = (e, t = "application/octet-stream") => e instanceof Blob ? e : e instanceof ArrayBuffer ? new Blob([e], {
  type: t
}) : typeof e == "string" ? new Blob([e], {
  type: t
}) : ArrayBuffer.isView(e) ? new Blob([e], {
  type: t
}) : Array.isArray(e) ? new Blob([yc(e)], {
  type: t
}) : new Blob([]), k2 = async (e) => {
  const t = ol(e), r = new FileReader();
  return new Promise((n, o) => {
    const i = (s) => typeof s == "string" ? n(s) : (console.log({
      bytes: e
    }), o("Unable to convert to data URL"));
    r.onload = function(s) {
      i(s.target?.result);
    }, r.readAsDataURL(t);
  });
}, M2 = (e) => {
  const t = new Oc({
    structuredClone: !0
  });
  return new Uint8Array(t.encode(e));
}, T2 = (e) => {
  if (e instanceof Blob)
    return "Blob";
  if (e instanceof ArrayBuffer)
    return "ArrayBuffer";
  if (typeof e == "string")
    return "string";
  if (ArrayBuffer.isView(e))
    return "ArrayBufferView";
  if (Array.isArray(e))
    return "Array";
}, U2 = (e) => new TextEncoder().encode(e), _c = {
  toMsgPack: M2,
  msgPackToObject: R2,
  typeOfBytes: T2,
  toDataUrl: k2,
  dataUrlToBlob: a2,
  lengthOf: l2,
  isByteLike: f2,
  isImmediateByteLike: wc,
  hashOf: li,
  immediateHashOf: u2,
  addressStringOf: To,
  toArrayBuffer: cn,
  immediateToArrayBuffer: bc,
  toBlob: ol,
  toText: Kf,
  toBase64: P2,
  encodeAsString: qf,
  test: n2,
  assignMediaTypeToBlob: s2,
  utf8ToUint8Array: U2,
  base64ToArrayBuffer: c2,
  arrayBufferToHex: o2,
  arrayBufferToUtf8: i2,
  arrayBufferToBase64: gc,
  ALL_ALGORITHMS: hc,
  ALGORITHM_BYTE_LENGTHS: Wf
};
var il = Symbol.for("immer-nothing"), Ia = Symbol.for("immer-draftable"), yt = Symbol.for("immer-state"), N2 = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function rt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = N2[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Xr = Object.getPrototypeOf;
function Zr(e) {
  return !!e && !!e[yt];
}
function Ar(e) {
  return e ? sl(e) || Array.isArray(e) || !!e[Ia] || !!e.constructor?.[Ia] || hi(e) || yi(e) : !1;
}
var L2 = Object.prototype.constructor.toString();
function sl(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Xr(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === L2;
}
function Kn(e, t) {
  mi(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
    t(r, n, e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function mi(e) {
  const t = e[yt];
  return t ? t.type_ : Array.isArray(e) ? 1 : hi(e) ? 2 : yi(e) ? 3 : 0;
}
function hs(e, t) {
  return mi(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function cl(e, t, r) {
  const n = mi(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function D2(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function hi(e) {
  return e instanceof Map;
}
function yi(e) {
  return e instanceof Set;
}
function _r(e) {
  return e.copy_ || e.base_;
}
function ys(e, t) {
  if (hi(e))
    return new Map(e);
  if (yi(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && sl(e))
    return Xr(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[yt];
  let n = Reflect.ownKeys(r);
  for (let o = 0; o < n.length; o++) {
    const i = n[o], s = r[i];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[i] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: s.enumerable,
      value: e[i]
    });
  }
  return Object.create(Xr(e), r);
}
function Ec(e, t = !1) {
  return gi(e) || Zr(e) || !Ar(e) || (mi(e) > 1 && (e.set = e.add = e.clear = e.delete = j2), Object.freeze(e), t && Kn(e, (r, n) => Ec(n, !0))), e;
}
function j2() {
  rt(2);
}
function gi(e) {
  return Object.isFrozen(e);
}
var B2 = {};
function Ir(e) {
  const t = B2[e];
  return t || rt(0, e), t;
}
var Yn;
function al() {
  return Yn;
}
function z2(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Ra(e, t) {
  t && (Ir("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function gs(e) {
  bs(e), e.drafts_.forEach(W2), e.drafts_ = null;
}
function bs(e) {
  e === Yn && (Yn = e.parent_);
}
function Pa(e) {
  return Yn = z2(Yn, e);
}
function W2(e) {
  const t = e[yt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Fa(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[yt].modified_ && (gs(t), rt(4)), Ar(e) && (e = Uo(t, e), t.parent_ || No(t, e)), t.patches_ && Ir("Patches").generateReplacementPatches_(
    r[yt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Uo(t, r, []), gs(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== il ? e : void 0;
}
function Uo(e, t, r) {
  if (gi(t))
    return t;
  const n = t[yt];
  if (!n)
    return Kn(
      t,
      (o, i) => Ca(e, n, t, o, i, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return No(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let i = o, s = !1;
    n.type_ === 3 && (i = new Set(o), o.clear(), s = !0), Kn(
      i,
      (c, u) => Ca(e, n, o, c, u, r, s)
    ), No(e, o, !1), r && e.patches_ && Ir("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function Ca(e, t, r, n, o, i, s) {
  if (process.env.NODE_ENV !== "production" && o === r && rt(5), Zr(o)) {
    const c = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !hs(t.assigned_, n) ? i.concat(n) : void 0, u = Uo(e, o, c);
    if (cl(r, n, u), Zr(u))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else s && r.add(o);
  if (Ar(o) && !gi(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Uo(e, o), (!t || !t.scope_.parent_) && No(e, o);
  }
}
function No(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ec(t, r);
}
function q2(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : al(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = n, i = $c;
  r && (o = [n], i = Gn);
  const { revoke: s, proxy: c } = Proxy.revocable(o, i);
  return n.draft_ = c, n.revoke_ = s, c;
}
var $c = {
  get(e, t) {
    if (t === yt)
      return e;
    const r = _r(e);
    if (!hs(r, t))
      return K2(e, r, t);
    const n = r[t];
    return e.finalized_ || !Ar(n) ? n : n === Ki(e.base_, t) ? (Yi(e), e.copy_[t] = xs(n, e)) : n;
  },
  has(e, t) {
    return t in _r(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(_r(e));
  },
  set(e, t, r) {
    const n = ul(_r(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = Ki(_r(e), t), i = o?.[yt];
      if (i && i.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (D2(r, o) && (r !== void 0 || hs(e.base_, t)))
        return !0;
      Yi(e), ws(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ki(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Yi(e), ws(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = _r(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    rt(11);
  },
  getPrototypeOf(e) {
    return Xr(e.base_);
  },
  setPrototypeOf() {
    rt(12);
  }
}, Gn = {};
Kn($c, (e, t) => {
  Gn[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Gn.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && rt(13), Gn.set.call(this, e, t, void 0);
};
Gn.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && rt(14), $c.set.call(this, e[0], t, r, e[0]);
};
function Ki(e, t) {
  const r = e[yt];
  return (r ? _r(r) : e)[t];
}
function K2(e, t, r) {
  const n = ul(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function ul(e, t) {
  if (!(t in e))
    return;
  let r = Xr(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Xr(r);
  }
}
function ws(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && ws(e.parent_));
}
function Yi(e) {
  e.copy_ || (e.copy_ = ys(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Y2 = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const i = r;
        r = t;
        const s = this;
        return function(u = i, ...p) {
          return s.produce(u, (h) => r.call(this, h, ...p));
        };
      }
      typeof r != "function" && rt(6), n !== void 0 && typeof n != "function" && rt(7);
      let o;
      if (Ar(t)) {
        const i = Pa(this), s = xs(t, void 0);
        let c = !0;
        try {
          o = r(s), c = !1;
        } finally {
          c ? gs(i) : bs(i);
        }
        return Ra(i, n), Fa(o, i);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === il && (o = void 0), this.autoFreeze_ && Ec(o, !0), n) {
          const i = [], s = [];
          Ir("Patches").generateReplacementPatches_(t, o, i, s), n(i, s);
        }
        return o;
      } else
        rt(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (s, ...c) => this.produceWithPatches(s, (u) => t(u, ...c));
      let n, o;
      return [this.produce(t, r, (s, c) => {
        n = s, o = c;
      }), n, o];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Ar(e) || rt(8), Zr(e) && (e = G2(e));
    const t = Pa(this), r = xs(e, void 0);
    return r[yt].isManual_ = !0, bs(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[yt];
    (!r || !r.isManual_) && rt(9);
    const { scope_: n } = r;
    return Ra(n, t), Fa(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const o = t[r];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Ir("Patches").applyPatches_;
    return Zr(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function xs(e, t) {
  const r = hi(e) ? Ir("MapSet").proxyMap_(e, t) : yi(e) ? Ir("MapSet").proxySet_(e, t) : q2(e, t);
  return (t ? t.scope_ : al()).drafts_.push(r), r;
}
function G2(e) {
  return Zr(e) || rt(10, e), fl(e);
}
function fl(e) {
  if (!Ar(e) || gi(e))
    return e;
  const t = e[yt];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = ys(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = ys(e, !0);
  return Kn(r, (n, o) => {
    cl(r, n, fl(o));
  }), t && (t.finalized_ = !1), r;
}
var gt = new Y2(), ka = gt.produce;
gt.produceWithPatches.bind(
  gt
);
gt.setAutoFreeze.bind(gt);
gt.setUseStrictShallowCopy.bind(gt);
gt.applyPatches.bind(gt);
gt.createDraft.bind(gt);
gt.finishDraft.bind(gt);
const V2 = (e, t) => {
  if (typeof e == "function") {
    t.setState((r) => ka(r, (n) => {
      const o = e(n);
      if (!(o === n || fi(o)))
        return {
          ...n,
          ...o
        };
    }));
    return;
  }
  t.setState((r) => ka(r, (n) => ({
    ...n,
    ...e
  })));
}, H2 = (e) => (t) => V2(t, e), J2 = (e) => {
  const t = q0(() => typeof e == "function" ? e() : e), r = H2(t);
  return [t, r, () => t.getState()];
}, {
  isErrorLike: gx,
  isErrorType: bx,
  tryValue: wx,
  orError: xx,
  chain: Sx,
  entries: vx,
  filter: Ox,
  first: _x,
  last: Ex,
  forEach: $x,
  iff: Ax,
  orElse: Ix,
  removeUndefinedValues: Rx,
  iffTyped: Px,
  isDefined: ar,
  isUndefined: Ac,
  omit: Fx,
  omitUnsafe: Cx,
  toMany: X2,
  fromEntries: kx,
  safe: Mx,
  safeAsync: Tx,
  mapValue: Ux,
  headOf: Nx,
  tailOf: Lx,
  restOf: Dx,
  times: jx,
  isIterator: Bx,
  toMultiMap: zx,
  timesGen: Wx,
  isIterable: qx,
  isArrayLike: Kx,
  iffBrowser: Yx,
  isBrowser: Gx,
  toPromise: Vx,
  all: Hx,
  isFunction: Jx,
  isEmpty: Xx,
  isNotEmpty: Zx,
  waitTimeout: Ic,
  toBoolean: Z2
} = Fs, ao = Al(void 0), Q2 = (e) => {
  if (e !== void 0)
    return e.replace(/\[.*\]/, "");
}, ew = ({
  aiplName: e = "",
  value: t
}) => {
  if (Array.isArray(t)) {
    const r = /\[(.*?)\]/, n = e.match(r);
    return n ? t.includes(n[1]) : !1;
  }
  return Z2(t);
}, tw = (e) => {
  if (Ac(e))
    return;
  const t = /\[(.*?)\]/, r = e.match(t);
  return r ? r[1] : e;
};
var rw = Symbol.for("preact-signals");
function Rc() {
  if (qr > 1)
    qr--;
  else {
    for (var e, t = !1; Pn !== void 0; ) {
      var r = Pn;
      for (Pn = void 0, Ss++; r !== void 0; ) {
        var n = r.o;
        if (r.o = void 0, r.f &= -3, !(8 & r.f) && dl(r)) try {
          r.c();
        } catch (o) {
          t || (e = o, t = !0);
        }
        r = n;
      }
    }
    if (Ss = 0, qr--, t) throw e;
  }
}
var be = void 0, Pn = void 0, qr = 0, Ss = 0, Lo = 0;
function ll(e) {
  if (be !== void 0) {
    var t = e.n;
    if (t === void 0 || t.t !== be)
      return t = { i: 0, S: e, p: be.s, n: void 0, t: be, e: void 0, x: void 0, r: t }, be.s !== void 0 && (be.s.n = t), be.s = t, e.n = t, 32 & be.f && e.S(t), t;
    if (t.i === -1)
      return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = be.s, t.n = void 0, be.s.n = t, be.s = t), t;
  }
}
function Qe(e) {
  this.v = e, this.i = 0, this.n = void 0, this.t = void 0;
}
Qe.prototype.brand = rw;
Qe.prototype.h = function() {
  return !0;
};
Qe.prototype.S = function(e) {
  this.t !== e && e.e === void 0 && (e.x = this.t, this.t !== void 0 && (this.t.e = e), this.t = e);
};
Qe.prototype.U = function(e) {
  if (this.t !== void 0) {
    var t = e.e, r = e.x;
    t !== void 0 && (t.x = r, e.e = void 0), r !== void 0 && (r.e = t, e.x = void 0), e === this.t && (this.t = r);
  }
};
Qe.prototype.subscribe = function(e) {
  var t = this;
  return yl(function() {
    var r = t.value, n = be;
    be = void 0;
    try {
      e(r);
    } finally {
      be = n;
    }
  });
};
Qe.prototype.valueOf = function() {
  return this.value;
};
Qe.prototype.toString = function() {
  return this.value + "";
};
Qe.prototype.toJSON = function() {
  return this.value;
};
Qe.prototype.peek = function() {
  var e = be;
  be = void 0;
  try {
    return this.value;
  } finally {
    be = e;
  }
};
Object.defineProperty(Qe.prototype, "value", { get: function() {
  var e = ll(this);
  return e !== void 0 && (e.i = this.i), this.v;
}, set: function(e) {
  if (e !== this.v) {
    if (Ss > 100) throw new Error("Cycle detected");
    this.v = e, this.i++, Lo++, qr++;
    try {
      for (var t = this.t; t !== void 0; t = t.x) t.t.N();
    } finally {
      Rc();
    }
  }
} });
function dl(e) {
  for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
  return !1;
}
function pl(e) {
  for (var t = e.s; t !== void 0; t = t.n) {
    var r = t.S.n;
    if (r !== void 0 && (t.r = r), t.S.n = t, t.i = -1, t.n === void 0) {
      e.s = t;
      break;
    }
  }
}
function ml(e) {
  for (var t = e.s, r = void 0; t !== void 0; ) {
    var n = t.p;
    t.i === -1 ? (t.S.U(t), n !== void 0 && (n.n = t.n), t.n !== void 0 && (t.n.p = n)) : r = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = n;
  }
  e.s = r;
}
function uo(e) {
  Qe.call(this, void 0), this.x = e, this.s = void 0, this.g = Lo - 1, this.f = 4;
}
(uo.prototype = new Qe()).h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Lo)) return !0;
  if (this.g = Lo, this.f |= 1, this.i > 0 && !dl(this))
    return this.f &= -2, !0;
  var e = be;
  try {
    pl(this), be = this;
    var t = this.x();
    (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
  } catch (r) {
    this.v = r, this.f |= 16, this.i++;
  }
  return be = e, ml(this), this.f &= -2, !0;
};
uo.prototype.S = function(e) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
  }
  Qe.prototype.S.call(this, e);
};
uo.prototype.U = function(e) {
  if (this.t !== void 0 && (Qe.prototype.U.call(this, e), this.t === void 0)) {
    this.f &= -33;
    for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
  }
};
uo.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var e = this.t; e !== void 0; e = e.x) e.t.N();
  }
};
Object.defineProperty(uo.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var e = ll(this);
  if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function hl(e) {
  var t = e.u;
  if (e.u = void 0, typeof t == "function") {
    qr++;
    var r = be;
    be = void 0;
    try {
      t();
    } catch (n) {
      throw e.f &= -2, e.f |= 8, Pc(e), n;
    } finally {
      be = r, Rc();
    }
  }
}
function Pc(e) {
  for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
  e.x = void 0, e.s = void 0, hl(e);
}
function nw(e) {
  if (be !== this) throw new Error("Out-of-order effect");
  ml(this), be = e, this.f &= -2, 8 & this.f && Pc(this), Rc();
}
function fo(e) {
  this.x = e, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
fo.prototype.c = function() {
  var e = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var t = this.x();
    typeof t == "function" && (this.u = t);
  } finally {
    e();
  }
};
fo.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, hl(this), pl(this), qr++;
  var e = be;
  return be = this, nw.bind(this, e);
};
fo.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = Pn, Pn = this);
};
fo.prototype.d = function() {
  this.f |= 8, 1 & this.f || Pc(this);
};
function yl(e) {
  var t = new fo(e);
  try {
    t.c();
  } catch (r) {
    throw t.d(), r;
  }
  return t.d.bind(t);
}
var vs = { exports: {} }, Gi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;
function ow() {
  if (Ma) return Gi;
  Ma = 1;
  var e = zt;
  function t(g, S) {
    return g === S && (g !== 0 || 1 / g === 1 / S) || g !== g && S !== S;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
  function c(g, S) {
    var I = S(), P = n({ inst: { value: I, getSnapshot: S } }), x = P[0].inst, M = P[1];
    return i(function() {
      x.value = I, x.getSnapshot = S, u(x) && M({ inst: x });
    }, [g, I, S]), o(function() {
      return u(x) && M({ inst: x }), g(function() {
        u(x) && M({ inst: x });
      });
    }, [g]), s(I), I;
  }
  function u(g) {
    var S = g.getSnapshot;
    g = g.value;
    try {
      var I = S();
      return !r(g, I);
    } catch {
      return !0;
    }
  }
  function p(g, S) {
    return S();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : c;
  return Gi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, Gi;
}
var Vi = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ta;
function iw() {
  return Ta || (Ta = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = zt, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(T) {
      {
        for (var O = arguments.length, v = new Array(O > 1 ? O - 1 : 0), D = 1; D < O; D++)
          v[D - 1] = arguments[D];
        n("error", T, v);
      }
    }
    function n(T, O, v) {
      {
        var D = t.ReactDebugCurrentFrame, K = D.getStackAddendum();
        K !== "" && (O += "%s", v = v.concat([K]));
        var de = v.map(function(X) {
          return String(X);
        });
        de.unshift("Warning: " + O), Function.prototype.apply.call(console[T], console, de);
      }
    }
    function o(T, O) {
      return T === O && (T !== 0 || 1 / T === 1 / O) || T !== T && O !== O;
    }
    var i = typeof Object.is == "function" ? Object.is : o, s = e.useState, c = e.useEffect, u = e.useLayoutEffect, p = e.useDebugValue, h = !1, g = !1;
    function S(T, O, v) {
      h || e.startTransition !== void 0 && (h = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var D = O();
      if (!g) {
        var K = O();
        i(D, K) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), g = !0);
      }
      var de = s({
        inst: {
          value: D,
          getSnapshot: O
        }
      }), X = de[0].inst, Ce = de[1];
      return u(function() {
        X.value = D, X.getSnapshot = O, I(X) && Ce({
          inst: X
        });
      }, [T, D, O]), c(function() {
        I(X) && Ce({
          inst: X
        });
        var et = function() {
          I(X) && Ce({
            inst: X
          });
        };
        return T(et);
      }, [T]), p(D), D;
    }
    function I(T) {
      var O = T.getSnapshot, v = T.value;
      try {
        var D = O();
        return !i(v, D);
      } catch {
        return !0;
      }
    }
    function P(T, O, v) {
      return O();
    }
    var x = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", M = !x, L = M ? P : S, F = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : L;
    Vi.useSyncExternalStore = F, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Vi;
}
process.env.NODE_ENV === "production" ? vs.exports = ow() : vs.exports = iw();
var sw = vs.exports, wo = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ua;
function cw() {
  if (Ua) return wo;
  Ua = 1;
  var e = Symbol.for("react.fragment");
  return wo.Fragment = e, wo.jsxDEV = void 0, wo;
}
var xo = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Na;
function aw() {
  return Na || (Na = 1, process.env.NODE_ENV !== "production" && function() {
    var e = zt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), P = Symbol.iterator, x = "@@iterator";
    function M(f) {
      if (f === null || typeof f != "object")
        return null;
      var $ = P && f[P] || f[x];
      return typeof $ == "function" ? $ : null;
    }
    var L = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(f) {
      {
        for (var $ = arguments.length, N = new Array($ > 1 ? $ - 1 : 0), a = 1; a < $; a++)
          N[a - 1] = arguments[a];
        T("error", f, N);
      }
    }
    function T(f, $, N) {
      {
        var a = L.ReactDebugCurrentFrame, w = a.getStackAddendum();
        w !== "" && ($ += "%s", N = N.concat([w]));
        var E = N.map(function(k) {
          return String(k);
        });
        E.unshift("Warning: " + $), Function.prototype.apply.call(console[f], console, E);
      }
    }
    var O = !1, v = !1, D = !1, K = !1, de = !1, X;
    X = Symbol.for("react.module.reference");
    function Ce(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === n || f === i || de || f === o || f === p || f === h || K || f === I || O || v || D || typeof f == "object" && f !== null && (f.$$typeof === S || f.$$typeof === g || f.$$typeof === s || f.$$typeof === c || f.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === X || f.getModuleId !== void 0));
    }
    function et(f, $, N) {
      var a = f.displayName;
      if (a)
        return a;
      var w = $.displayName || $.name || "";
      return w !== "" ? N + "(" + w + ")" : N;
    }
    function He(f) {
      return f.displayName || "Context";
    }
    function m(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case c:
            var $ = f;
            return He($) + ".Consumer";
          case s:
            var N = f;
            return He(N._context) + ".Provider";
          case u:
            return et(f, f.render, "ForwardRef");
          case g:
            var a = f.displayName || null;
            return a !== null ? a : m(f.type) || "Memo";
          case S: {
            var w = f, E = w._payload, k = w._init;
            try {
              return m(k(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, A = 0, _, C, G, Z, H, ee, te;
    function Me() {
    }
    Me.__reactDisabledLog = !0;
    function tt() {
      {
        if (A === 0) {
          _ = console.log, C = console.info, G = console.warn, Z = console.error, H = console.group, ee = console.groupCollapsed, te = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: Me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        A++;
      }
    }
    function $t() {
      {
        if (A--, A === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, f, {
              value: _
            }),
            info: R({}, f, {
              value: C
            }),
            warn: R({}, f, {
              value: G
            }),
            error: R({}, f, {
              value: Z
            }),
            group: R({}, f, {
              value: H
            }),
            groupCollapsed: R({}, f, {
              value: ee
            }),
            groupEnd: R({}, f, {
              value: te
            })
          });
        }
        A < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gt = L.ReactCurrentDispatcher, Vt;
    function At(f, $, N) {
      {
        if (Vt === void 0)
          try {
            throw Error();
          } catch (w) {
            var a = w.stack.trim().match(/\n( *(at )?)/);
            Vt = a && a[1] || "";
          }
        return `
` + Vt + f;
      }
    }
    var Ht = !1, It;
    {
      var an = typeof WeakMap == "function" ? WeakMap : Map;
      It = new an();
    }
    function q(f, $) {
      if (!f || Ht)
        return "";
      {
        var N = It.get(f);
        if (N !== void 0)
          return N;
      }
      var a;
      Ht = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = Gt.current, Gt.current = null, tt();
      try {
        if ($) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (ye) {
              a = ye;
            }
            Reflect.construct(f, [], k);
          } else {
            try {
              k.call();
            } catch (ye) {
              a = ye;
            }
            f.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            a = ye;
          }
          f();
        }
      } catch (ye) {
        if (ye && a && typeof ye.stack == "string") {
          for (var j = ye.stack.split(`
`), J = a.stack.split(`
`), V = j.length - 1, Y = J.length - 1; V >= 1 && Y >= 0 && j[V] !== J[Y]; )
            Y--;
          for (; V >= 1 && Y >= 0; V--, Y--)
            if (j[V] !== J[Y]) {
              if (V !== 1 || Y !== 1)
                do
                  if (V--, Y--, Y < 0 || j[V] !== J[Y]) {
                    var pe = `
` + j[V].replace(" at new ", " at ");
                    return f.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", f.displayName)), typeof f == "function" && It.set(f, pe), pe;
                  }
                while (V >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        Ht = !1, Gt.current = E, $t(), Error.prepareStackTrace = w;
      }
      var me = f ? f.displayName || f.name : "", he = me ? At(me) : "";
      return typeof f == "function" && It.set(f, he), he;
    }
    function yr(f, $, N) {
      return q(f, !1);
    }
    function nr(f) {
      var $ = f.prototype;
      return !!($ && $.isReactComponent);
    }
    function wt(f, $, N) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return q(f, nr(f));
      if (typeof f == "string")
        return At(f);
      switch (f) {
        case p:
          return At("Suspense");
        case h:
          return At("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case u:
            return yr(f.render);
          case g:
            return wt(f.type, $, N);
          case S: {
            var a = f, w = a._payload, E = a._init;
            try {
              return wt(E(w), $, N);
            } catch {
            }
          }
        }
      return "";
    }
    var Rt = Object.prototype.hasOwnProperty, un = {}, fn = L.ReactDebugCurrentFrame;
    function Jt(f) {
      if (f) {
        var $ = f._owner, N = wt(f.type, f._source, $ ? $.type : null);
        fn.setExtraStackFrame(N);
      } else
        fn.setExtraStackFrame(null);
    }
    function wi(f, $, N, a, w) {
      {
        var E = Function.call.bind(Rt);
        for (var k in f)
          if (E(f, k)) {
            var j = void 0;
            try {
              if (typeof f[k] != "function") {
                var J = Error((a || "React class") + ": " + N + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              j = f[k]($, k, a, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              j = V;
            }
            j && !(j instanceof Error) && (Jt(w), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", N, k, typeof j), Jt(null)), j instanceof Error && !(j.message in un) && (un[j.message] = !0, Jt(w), F("Failed %s type: %s", N, j.message), Jt(null));
          }
      }
    }
    var xi = Array.isArray;
    function gr(f) {
      return xi(f);
    }
    function Si(f) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, N = $ && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return N;
      }
    }
    function vi(f) {
      try {
        return ln(f), !1;
      } catch {
        return !0;
      }
    }
    function ln(f) {
      return "" + f;
    }
    function dn(f) {
      if (vi(f))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Si(f)), ln(f);
    }
    var Pt = L.ReactCurrentOwner, Oi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pn, mn, br;
    br = {};
    function _i(f) {
      if (Rt.call(f, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(f, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Ei(f) {
      if (Rt.call(f, "key")) {
        var $ = Object.getOwnPropertyDescriptor(f, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function $i(f, $) {
      if (typeof f.ref == "string" && Pt.current && $ && Pt.current.stateNode !== $) {
        var N = m(Pt.current.type);
        br[N] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m(Pt.current.type), f.ref), br[N] = !0);
      }
    }
    function Ai(f, $) {
      {
        var N = function() {
          pn || (pn = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        N.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: N,
          configurable: !0
        });
      }
    }
    function Ii(f, $) {
      {
        var N = function() {
          mn || (mn = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        N.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: N,
          configurable: !0
        });
      }
    }
    var Ri = function(f, $, N, a, w, E, k) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: $,
        ref: N,
        props: k,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function Pi(f, $, N, a, w) {
      {
        var E, k = {}, j = null, J = null;
        N !== void 0 && (dn(N), j = "" + N), Ei($) && (dn($.key), j = "" + $.key), _i($) && (J = $.ref, $i($, w));
        for (E in $)
          Rt.call($, E) && !Oi.hasOwnProperty(E) && (k[E] = $[E]);
        if (f && f.defaultProps) {
          var V = f.defaultProps;
          for (E in V)
            k[E] === void 0 && (k[E] = V[E]);
        }
        if (j || J) {
          var Y = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          j && Ai(k, Y), J && Ii(k, Y);
        }
        return Ri(f, j, J, w, a, Pt.current, k);
      }
    }
    var wr = L.ReactCurrentOwner, hn = L.ReactDebugCurrentFrame;
    function at(f) {
      if (f) {
        var $ = f._owner, N = wt(f.type, f._source, $ ? $.type : null);
        hn.setExtraStackFrame(N);
      } else
        hn.setExtraStackFrame(null);
    }
    var xr;
    xr = !1;
    function Sr(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function yn() {
      {
        if (wr.current) {
          var f = m(wr.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Fi(f) {
      {
        if (f !== void 0) {
          var $ = f.fileName.replace(/^.*[\\\/]/, ""), N = f.lineNumber;
          return `

Check your code at ` + $ + ":" + N + ".";
        }
        return "";
      }
    }
    var gn = {};
    function Ci(f) {
      {
        var $ = yn();
        if (!$) {
          var N = typeof f == "string" ? f : f.displayName || f.name;
          N && ($ = `

Check the top-level render call using <` + N + ">.");
        }
        return $;
      }
    }
    function bn(f, $) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var N = Ci($);
        if (gn[N])
          return;
        gn[N] = !0;
        var a = "";
        f && f._owner && f._owner !== wr.current && (a = " It was passed a child from " + m(f._owner.type) + "."), at(f), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, a), at(null);
      }
    }
    function wn(f, $) {
      {
        if (typeof f != "object")
          return;
        if (gr(f))
          for (var N = 0; N < f.length; N++) {
            var a = f[N];
            Sr(a) && bn(a, $);
          }
        else if (Sr(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var w = M(f);
          if (typeof w == "function" && w !== f.entries)
            for (var E = w.call(f), k; !(k = E.next()).done; )
              Sr(k.value) && bn(k.value, $);
        }
      }
    }
    function ki(f) {
      {
        var $ = f.type;
        if ($ == null || typeof $ == "string")
          return;
        var N;
        if (typeof $ == "function")
          N = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === g))
          N = $.propTypes;
        else
          return;
        if (N) {
          var a = m($);
          wi(N, f.props, "prop", a, f);
        } else if ($.PropTypes !== void 0 && !xr) {
          xr = !0;
          var w = m($);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mi(f) {
      {
        for (var $ = Object.keys(f.props), N = 0; N < $.length; N++) {
          var a = $[N];
          if (a !== "children" && a !== "key") {
            at(f), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), at(null);
            break;
          }
        }
        f.ref !== null && (at(f), F("Invalid attribute `ref` supplied to `React.Fragment`."), at(null));
      }
    }
    var xn = {};
    function lo(f, $, N, a, w, E) {
      {
        var k = Ce(f);
        if (!k) {
          var j = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Fi(w);
          J ? j += J : j += yn();
          var V;
          f === null ? V = "null" : gr(f) ? V = "array" : f !== void 0 && f.$$typeof === t ? (V = "<" + (m(f.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : V = typeof f, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, j);
        }
        var Y = Pi(f, $, N, w, E);
        if (Y == null)
          return Y;
        if (k) {
          var pe = $.children;
          if (pe !== void 0)
            if (a)
              if (gr(pe)) {
                for (var me = 0; me < pe.length; me++)
                  wn(pe[me], f);
                Object.freeze && Object.freeze(pe);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wn(pe, f);
        }
        if (Rt.call($, "key")) {
          var he = m(f), ye = Object.keys($).filter(function(Ke) {
            return Ke !== "key";
          }), Ut = ye.length > 0 ? "{key: someKey, " + ye.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xn[he + Ut]) {
            var Xt = ye.length > 0 ? "{" + ye.join(": ..., ") + ": ...}" : "{}";
            F(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ut, he, Xt, he), xn[he + Ut] = !0;
          }
        }
        return f === n ? Mi(Y) : ki(Y), Y;
      }
    }
    var Ti = lo;
    xo.Fragment = n, xo.jsxDEV = Ti;
  }()), xo;
}
process.env.NODE_ENV === "production" ? cw() : aw();
var uw = Symbol.for("react.element"), La = function() {
}, Er, gl = Symbol.dispose || Symbol.for("Symbol.dispose");
function Hi(e, t) {
  var r = t.effect.S();
  return Er = t, fw.bind(t, e, r);
}
function fw(e, t) {
  t(), Er = e;
}
var Da, Os;
(Da = { u: 0, effect: { s: void 0, c: function() {
}, S: function() {
  return La;
}, d: function() {
} }, subscribe: function() {
  return La;
}, getSnapshot: function() {
  return 0;
}, S: function() {
}, f: function() {
} })[gl] = function() {
};
var lw = Promise.prototype.then.bind(Promise.resolve());
function dw() {
  Os || (Os = lw(pw));
}
function pw() {
  var e;
  Os = void 0, (e = Er) == null || e.f();
}
function bl(e) {
  dw();
  var t = ja();
  t.current == null && (t.current = function(n) {
    var o, i, s, c, u = 0, p = yl(function() {
      i = this;
    });
    return i.c = function() {
      u = u + 1 | 0, c && c();
    }, (o = { u: n, effect: i, subscribe: function(h) {
      return c = h, function() {
        u = u + 1 | 0, c = void 0, p();
      };
    }, getSnapshot: function() {
      return u;
    }, S: function() {
      if (Er != null) {
        var h = Er.u, g = this.u;
        h == 0 && g == 0 || h == 0 && g == 1 ? (Er.f(), s = Hi(void 0, this)) : h == 1 && g == 0 || h == 2 && g == 0 || (s = Hi(Er, this));
      } else s = Hi(void 0, this);
    }, f: function() {
      var h = s;
      s = void 0, h?.();
    } })[gl] = function() {
      this.f();
    }, o;
  }(e));
  var r = t.current;
  return sw.useSyncExternalStore(r.subscribe, r.getSnapshot, r.getSnapshot), r.S(), r;
}
Object.defineProperties(Qe.prototype, { $$typeof: { configurable: !0, value: uw }, type: { configurable: !0, value: function(e) {
  var t = e.data, r = bl(1);
  try {
    return t.value;
  } finally {
    r.f();
  }
} }, props: { configurable: !0, get: function() {
  return { data: this };
} }, ref: { configurable: !0, value: null } });
function Fc(e) {
  return bl(e);
}
const Qx = (e) => {
  var t = Fc(1);
  try {
    const r = Vn(ao);
    if (!r || !r.typeInfo)
      throw new Error("AiplFormConfigContext is not provided, make sure to wrap your component with AiplFormConfigProvider");
    const {
      children: n,
      aiplName: o,
      onChangeValue: i,
      defaultValue: s,
      ...c
    } = e, u = Q2(o) ?? "", p = r.componentState[u] || s || "", h = c.type === "checkbox" || c.type === "radio", g = h ? ew({
      aiplName: o,
      value: p
    }) : void 0, S = ja(null);
    return Ba(() => {
      if (S.current) {
        if (h) {
          S.current.checked = g ?? !1;
          return;
        }
        S.current.value = X2(p).join(", ");
      }
    }, [S, g, p]), /* @__PURE__ */ ir("input", { ref: S, onChange: (I) => {
      const P = I.target.value, x = tw(o);
      if (h && ar(x)) {
        const M = r.componentState[u] || [], L = /* @__PURE__ */ new Set([...M, x]);
        I.target.checked || L.delete(x), r.updateComponentState({
          ...r.componentState,
          [u]: Q0.from(L)
        });
      } else
        r.updateComponentState({
          ...r.componentState,
          [o]: P
        });
      ar(i) && i(P, r, o), ar(e.onChange) && e.onChange(I);
    }, defaultValue: p, defaultChecked: g, ...c, children: n });
  } finally {
    t.f();
  }
}, wl = (e) => {
  const t = (o) => o.charAt(0).toUpperCase() + o.slice(1), r = /[a-z][A-Z]/.test(e);
  let n;
  return r ? n = e.split(/(?=[A-Z])/).map((o) => o.toLowerCase()) : n = e.split(" ").map((o) => o.toLowerCase()), n.map(t).join(" ");
}, eS = (e) => {
  var t = Fc(1);
  try {
    const r = Vn(ao);
    if (!r || !r.typeInfo)
      throw new Error("AiplFormConfigContext is not provided, make sure to wrap your component with AiplFormConfigProvider");
    const {
      typeInfo: n
    } = r, {
      children: o,
      aiplName: i,
      onChangeValue: s,
      defaultValue: c,
      values: u = [],
      formatter: p = wl,
      ...h
    } = e, I = Cf.schemaToAnyOfs(n.schema.properties[i]).map((x) => [x, x]).map((x, M) => /* @__PURE__ */ ir("option", { value: x[0], children: p(x[1]) }, M)), P = r.componentState[i] || c;
    return /* @__PURE__ */ ir("select", { onChange: (x) => {
      const M = x.target.value;
      r.updateComponentState({
        ...r.componentState,
        [i]: M
      }), ar(s) && s(M, r, i), ar(e.onChange) && e.onChange(x);
    }, value: P, ...h, children: I });
  } finally {
    t.f();
  }
}, tS = (e) => {
  const {
    children: t,
    aiplName: r,
    onAction: n,
    ...o
  } = e, i = Vn(ao);
  return /* @__PURE__ */ ir("button", { onClick: async () => {
    n && i && n(i, r);
  }, ...o, children: t });
}, rS = (e) => {
  var t = Fc(1);
  try {
    const r = Vn(ao);
    if (!r || !r.typeInfo)
      throw new Error("AiplFormConfigContext is not provided, make sure to wrap your component with AiplFormConfigProvider");
    const {
      typeInfo: n
    } = r, {
      children: o,
      aiplName: i,
      onChangeValue: s,
      defaultValue: c,
      values: u = [],
      formatter: p = wl,
      ...h
    } = e, S = Cf.schemaToAnyOfs(n.schema.properties[i]).map((x) => [x, x]), I = r.componentState[i] || c, P = S.map((x, M) => /* @__PURE__ */ C0("label", { children: [
      /* @__PURE__ */ ir("input", { checked: I === x[0], name: i, type: "radio", value: x[0], onChange: (L) => {
        const F = L.target.value;
        r.updateComponentState({
          ...r.componentState,
          [i]: F
        }), ar(s) && s(F, r, i);
      } }, M),
      /* @__PURE__ */ ir("span", { children: p(x[1]) })
    ] }, M));
    return /* @__PURE__ */ ir("fieldset", { ...h, children: P });
  } finally {
    t.f();
  }
};
class mw {
  eventListeners;
  constructor() {
    this.eventListeners = /* @__PURE__ */ new Map();
  }
  on(t, r) {
    return this.eventListeners.has(t) || this.eventListeners.set(t, /* @__PURE__ */ new Set()), this.eventListeners.get(t).add(r), () => this.off(t, r);
  }
  off(t, r) {
    this.eventListeners.has(t) && this.eventListeners.get(t).delete(r);
  }
  emit(t, r) {
    const n = this.eventListeners.get(t);
    if (!Ac(n))
      for (const o of n)
        o({
          type: t,
          detail: r
        });
  }
  once(t, r) {
    const n = (o) => {
      r(o), this.off(t, n);
    };
    this.on(t, n);
  }
}
const hw = () => {
  const e = (t) => {
    const r = {
      trace: An.from("cyan").toString(),
      debug: An.from("green").lighten(0.5).toString(),
      info: An.from("yellow").toString(),
      error: An.from("red").toString()
    }, {
      message: n,
      level: o,
      extra: i,
      stack: s
    } = t, c = r[o ?? "info"];
    if (o === "error") {
      console.log(`%c${n}`, `color: ${c}`, {
        extra: i,
        stack: s
      });
      return;
    }
    i ? console.log(`%c${n}`, `color: ${c}`, i) : console.log(`%c${n}`, `color: ${c}`);
  };
  bi.on("log", (t) => {
    e(t.detail);
  });
}, bi = new mw();
hw();
const yw = ({
  onReturn: e,
  maxWaitMs: t = 60 * 1e3,
  returnId: r = `return-${Date.now()}-${crypto.randomUUID()}`,
  onTimeout: n = () => {
  },
  stream: o = !1
}) => {
  let i = !1;
  const s = bi.on("return", async (c) => {
    const {
      returnId: u,
      data: p
    } = c.detail;
    if (u === r) {
      const h = await e(p);
      if (o && !h)
        return;
      s(), i = !0;
    }
  });
  return setTimeout(() => {
    i || (s(), n());
  }, t), r;
}, gw = async (e, t) => {
  if (!e) {
    console.log("refusing to dispatch, no getWs function");
    return;
  }
  e.send(_c.toMsgPack(t));
}, bw = {
  dispatch: gw
}, ww = (e, t) => {
  const r = [], n = e.byteLength;
  let o = 0;
  for (; o < n; ) {
    const i = e.slice(o, o + t);
    r.push(i), o += t;
  }
  return r;
}, xw = (e) => {
  const t = e.reduce((i, s) => i + s.byteLength, 0), r = new ArrayBuffer(t), n = new Uint8Array(r);
  let o = 0;
  for (const i of e)
    n.set(new Uint8Array(i), o), o += i.byteLength;
  return r;
}, Sw = {
  splitArrayBuffer: ww,
  reassembleChunks: xw
}, xl = async (e, t = {}) => {
  const {
    ws: r
  } = e.get(), {
    maxWaitSeconds: n = 10
  } = t;
  if (n <= 0)
    throw new Error("waitForWs: max wait reached, no ws available");
  return ar(r) ? (console.log("websocket ready"), r) : (await Ic(1 * 1e3), xl(e, {
    maxWaitSeconds: n - 1
  }));
}, Sl = 1024 * 1024, vw = Sl * 0.9, Ow = ({
  message: e,
  chunkSize: t,
  ctx: r
}) => {
  const n = Sw.splitArrayBuffer(e, t), o = `multimessage-${Date.now()}-${crypto.randomUUID()}`;
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    Cc(r, {
      type: "message:chunk",
      detail: {
        id: o,
        idx: i,
        chunk: s,
        total: n.length
      }
    });
  }
}, Cc = async (e, t) => {
  const r = await xl(e);
  if (!r) {
    console.log("dispatch refusing, no ws");
    return;
  }
  const n = _c.toMsgPack(t);
  if (n.byteLength > Sl)
    return JSON.stringify(t), Ow({
      ctx: e,
      // ws,
      message: n,
      chunkSize: vw
    });
  r.send(n);
}, _w = async (e, t) => Cc(e, {
  type: "messages",
  detail: t
}), vl = {
  dispatch: Cc,
  dispatchAll: _w
}, Fn = (e, t, r) => new Promise((n, o) => {
  const i = yw({
    onReturn: (s) => {
      n(s);
    },
    onTimeout: () => {
      o(`timeout waiting for response for ${i}`);
    }
  });
  vl.dispatch(e, {
    type: t,
    detail: {
      ...r,
      returnId: i
    }
  });
}), ut = (e, ...t) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  console.log(`[${r}] ${e}`, ...t);
}, Ew = async (e, t) => {
  const {
    ws: r
  } = e.get();
  if (!t) {
    ut("sendWsAuth: refusing, no authToken");
    return;
  }
  if (!r) {
    ut("sendWsAuth: refusing, no ws");
    return;
  }
  const n = {
    type: "auth",
    detail: t
  };
  bw.dispatch(r, n), await Ic(1 * 1e3);
}, $w = (e) => {
  const t = (r) => {
    const {
      data: n
    } = r;
    if (n instanceof ArrayBuffer) {
      const o = _c.msgPackToObject(new Uint8Array(n));
      bi.emit(o.type, o.detail);
      return;
    } else
      ut("unexpected ws message data", n);
  };
  return e.addEventListener("message", t), t;
}, _s = async (e) => {
  const t = e.get(), {
    homebaseUrl: r,
    appInterfaceId: n,
    connectionPath: o = "/ws",
    maxRetries: i = 10,
    connecting: s
  } = t;
  let {
    retryBackoffMs: c = 5e3
  } = t;
  if (ut(`connectWs baseUrl: ${r}`), !s) {
    if (i <= 0) {
      ut("max retries reached attempting to connect websocket"), bi.emit("error", "Problem connecting websocket to remote host. Try refreshing browser?");
      return;
    }
    e.update((u) => {
      u.connecting = !0;
    });
    for (let u = 0; u < i; u++) {
      ut(`connectWs: attempt: ${u} with backoff: ${c}`);
      const p = await new Promise((h, g) => {
        try {
          const S = `${r?.replace(/^http/, "ws")}${o}`;
          ut(`connecting to: ${S}`);
          const I = new WebSocket(S);
          I.binaryType = "arraybuffer";
          let P = !1, x;
          I.onclose = (M) => {
            ut("connectWs: close", M.code, M.reason), e.update((L) => {
              L.connecting = !1;
            }), h(void 0);
          }, I.onerror = (M) => {
            ut("connectWs: error", M), x && I.removeEventListener("message", x), e.update((L) => {
              L.connecting = !1;
            }), h(void 0);
          }, I.onopen = async (M) => {
            ut("connectWs: open", M.eventPhase), e.update((L) => {
              L.ws = I, L.connecting = !1;
            }), P = !0, x = $w(I), e.get().authToken && await Ew(e, e.get().authToken), vl.dispatch(e, {
              type: "appInterface:ready",
              detail: void 0
            }), h(I);
          };
        } catch (S) {
          g(S);
        }
      });
      if (p) {
        e.update((h) => {
          h.ws = p;
        }), p.addEventListener("close", () => {
          ut("attempting reconnect of closed websocket"), _s(e);
        });
        return;
      }
      ut(`retrying connection, maxRetries: ${i} backoff: ${c}`), await Ic(c), c += 1e3;
    }
  }
}, Aw = (e) => ({
  Authorization: `Bearer ${e}`
}), Iw = async (e) => {
  const {
    homebaseUrl: t,
    authToken: r
  } = e.get();
  if (!r) {
    console.log("getBackendUser: no authToken, refusing");
    return;
  }
  const n = Aw(r), o = t + "/user", i = await fetch(o, {
    method: "GET",
    headers: n
  });
  if (!i.ok)
    throw new Error(`Bad response from backend getting user: ${i.statusText}`, {
      cause: i
    });
  const s = await i.text();
  return JSON.parse(s);
}, Rw = async ({
  userName: e,
  password: t,
  ctx: r
}) => {
  const n = await Fn(r, "auth", {
    userName: e,
    password: t
  });
  if (typeof n != "string")
    throw console.log("userLogin: no authToken, refusing", {
      authToken: n
    }), new Error("No auth token received");
  return r.update((o) => {
    o.authToken = n;
  }), n;
}, Pw = async ({
  accessPointId: e,
  ctx: t
}) => {
  const r = await Fn(t, "pap:auth", {
    accessPointId: e,
    params: {}
  }), {
    authToken: n
  } = r;
  if (console.log("papAuth: authToken", {
    authToken: n
  }), typeof n != "string")
    throw console.log("userLogin: no authToken, refusing", {
      authToken: n
    }), new Error("No auth token received");
  return t.update((o) => {
    o.authToken = n;
  }), n;
}, Fw = (e = {}) => {
  const [t, r, n] = J2(e);
  return Object.freeze({
    update: r,
    get: n
  });
}, Ol = (e = {}) => {
  const {
    url: t
  } = e, r = Fw({
    homebaseUrl: t
  });
  return _s(r), {
    hello: () => {
      console.log("hello from aipl client");
    },
    ping: () => {
      const n = _s(r);
      console.log("conn", n);
    },
    login: async ({
      userName: n,
      password: o
    }) => Rw({
      userName: n,
      password: o,
      ctx: r
    }),
    papAuth: async ({
      accessPointId: n
    }) => Pw({
      accessPointId: n,
      ctx: r
    }),
    ask: async (n) => await Fn(r, "chat:ask", n),
    log: ut,
    listPersonas: async () => {
      const n = await Iw(r);
      if (Ac(n))
        throw new Error("No user ID found");
      return Fn(r, "dataObject:getChildren", {
        parentId: n?.id,
        objectType: "app-character"
      });
    },
    startSession: async (n) => await Fn(r, "chat:start", {
      aiCharacterId: n.personaId
    })
  };
}, nS = {
  createAiplClient: Ol
};
let So;
const oS = ({
  config: e,
  children: t
}) => {
  const [r, n] = Il({
    ...e,
    componentState: {},
    updateComponentState: (o) => {
      n((i) => ({
        ...i,
        componentState: o
      }));
    }
  });
  return Ba(() => {
    if (ar(So))
      return n((i) => ({
        ...i,
        client: So
      }));
    const o = Ol({
      url: e.homeUrl
    });
    So = o, n((i) => ({
      ...i,
      client: So
    })), o.papAuth({
      accessPointId: e.papId
    }).then(() => {
      console.log("aipl-client authorized");
    });
  }, [e]), /* @__PURE__ */ ir(ao.Provider, { value: r, children: t });
};
export {
  tS as AiplButton,
  nS as AiplClients,
  ao as AiplComponentContext,
  oS as AiplComponentProvider,
  Qx as AiplInput,
  rS as AiplRadioGroup,
  eS as AiplSelect,
  Ol as createAiplClient,
  Fw as createClientContext
};
