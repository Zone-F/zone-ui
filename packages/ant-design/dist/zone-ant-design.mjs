import * as S from "react";
import _e, { createContext as Ha, useRef as ke, useState as Ba, useMemo as Ga, useContext as Ln, useEffect as at, useLayoutEffect as Ka } from "react";
import Ja from "react-dom";
var lr = {}, Qa = {
  get exports() {
    return lr;
  },
  set exports(t) {
    lr = t;
  }
}, lt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function Za() {
  if (en)
    return lt;
  en = 1;
  var t = _e, r = Symbol.for("react.element"), e = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, s, f) {
    var l, d = {}, v = null, w = null;
    f !== void 0 && (v = "" + f), s.key !== void 0 && (v = "" + s.key), s.ref !== void 0 && (w = s.ref);
    for (l in s)
      n.call(s, l) && !i.hasOwnProperty(l) && (d[l] = s[l]);
    if (u && u.defaultProps)
      for (l in s = u.defaultProps, s)
        d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: r, type: u, key: v, ref: w, props: d, _owner: a.current };
  }
  return lt.Fragment = e, lt.jsx = o, lt.jsxs = o, lt;
}
var dt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tn;
function Xa() {
  return tn || (tn = 1, process.env.NODE_ENV !== "production" && function() {
    var t = _e, r = Symbol.for("react.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), C = Symbol.iterator, h = "@@iterator";
    function y(c) {
      if (c === null || typeof c != "object")
        return null;
      var x = C && c[C] || c[h];
      return typeof x == "function" ? x : null;
    }
    var m = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(c) {
      {
        for (var x = arguments.length, T = new Array(x > 1 ? x - 1 : 0), L = 1; L < x; L++)
          T[L - 1] = arguments[L];
        F("error", c, T);
      }
    }
    function F(c, x, T) {
      {
        var L = m.ReactDebugCurrentFrame, G = L.getStackAddendum();
        G !== "" && (x += "%s", T = T.concat([G]));
        var te = T.map(function(Y) {
          return String(Y);
        });
        te.unshift("Warning: " + x), Function.prototype.apply.call(console[c], console, te);
      }
    }
    var R = !1, g = !1, _ = !1, $ = !1, M = !1, I;
    I = Symbol.for("react.module.reference");
    function j(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === n || c === i || M || c === a || c === f || c === l || $ || c === w || R || g || _ || typeof c == "object" && c !== null && (c.$$typeof === v || c.$$typeof === d || c.$$typeof === o || c.$$typeof === u || c.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === I || c.getModuleId !== void 0));
    }
    function D(c, x, T) {
      var L = c.displayName;
      if (L)
        return L;
      var G = x.displayName || x.name || "";
      return G !== "" ? T + "(" + G + ")" : T;
    }
    function E(c) {
      return c.displayName || "Context";
    }
    function p(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case n:
          return "Fragment";
        case e:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case f:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case u:
            var x = c;
            return E(x) + ".Consumer";
          case o:
            var T = c;
            return E(T._context) + ".Provider";
          case s:
            return D(c, c.render, "ForwardRef");
          case d:
            var L = c.displayName || null;
            return L !== null ? L : p(c.type) || "Memo";
          case v: {
            var G = c, te = G._payload, Y = G._init;
            try {
              return p(Y(te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var b = Object.assign, O = 0, V, N, W, ee, K, ie, B;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function ve() {
      {
        if (O === 0) {
          V = console.log, N = console.info, W = console.warn, ee = console.error, K = console.group, ie = console.groupCollapsed, B = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: Z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        O++;
      }
    }
    function ge() {
      {
        if (O--, O === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: b({}, c, {
              value: V
            }),
            info: b({}, c, {
              value: N
            }),
            warn: b({}, c, {
              value: W
            }),
            error: b({}, c, {
              value: ee
            }),
            group: b({}, c, {
              value: K
            }),
            groupCollapsed: b({}, c, {
              value: ie
            }),
            groupEnd: b({}, c, {
              value: B
            })
          });
        }
        O < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ve = m.ReactCurrentDispatcher, be;
    function xe(c, x, T) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (G) {
            var L = G.stack.trim().match(/\n( *(at )?)/);
            be = L && L[1] || "";
          }
        return `
` + be + c;
      }
    }
    var re = !1, Re;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new Me();
    }
    function k(c, x) {
      if (!c || re)
        return "";
      {
        var T = Re.get(c);
        if (T !== void 0)
          return T;
      }
      var L;
      re = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var te;
      te = Ve.current, Ve.current = null, ve();
      try {
        if (x) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (Ie) {
              L = Ie;
            }
            Reflect.construct(c, [], Y);
          } else {
            try {
              Y.call();
            } catch (Ie) {
              L = Ie;
            }
            c.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ie) {
            L = Ie;
          }
          c();
        }
      } catch (Ie) {
        if (Ie && L && typeof Ie.stack == "string") {
          for (var U = Ie.stack.split(`
`), me = L.stack.split(`
`), ue = U.length - 1, fe = me.length - 1; ue >= 1 && fe >= 0 && U[ue] !== me[fe]; )
            fe--;
          for (; ue >= 1 && fe >= 0; ue--, fe--)
            if (U[ue] !== me[fe]) {
              if (ue !== 1 || fe !== 1)
                do
                  if (ue--, fe--, fe < 0 || U[ue] !== me[fe]) {
                    var Ce = `
` + U[ue].replace(" at new ", " at ");
                    return c.displayName && Ce.includes("<anonymous>") && (Ce = Ce.replace("<anonymous>", c.displayName)), typeof c == "function" && Re.set(c, Ce), Ce;
                  }
                while (ue >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        re = !1, Ve.current = te, ge(), Error.prepareStackTrace = G;
      }
      var Ze = c ? c.displayName || c.name : "", Xr = Ze ? xe(Ze) : "";
      return typeof c == "function" && Re.set(c, Xr), Xr;
    }
    function he(c, x, T) {
      return k(c, !1);
    }
    function Ae(c) {
      var x = c.prototype;
      return !!(x && x.isReactComponent);
    }
    function ye(c, x, T) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return k(c, Ae(c));
      if (typeof c == "string")
        return xe(c);
      switch (c) {
        case f:
          return xe("Suspense");
        case l:
          return xe("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case s:
            return he(c.render);
          case d:
            return ye(c.type, x, T);
          case v: {
            var L = c, G = L._payload, te = L._init;
            try {
              return ye(te(G), x, T);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, ae = {}, ne = m.ReactDebugCurrentFrame;
    function oe(c) {
      if (c) {
        var x = c._owner, T = ye(c.type, c._source, x ? x.type : null);
        ne.setExtraStackFrame(T);
      } else
        ne.setExtraStackFrame(null);
    }
    function $e(c, x, T, L, G) {
      {
        var te = Function.call.bind(Oe);
        for (var Y in c)
          if (te(c, Y)) {
            var U = void 0;
            try {
              if (typeof c[Y] != "function") {
                var me = Error((L || "React class") + ": " + T + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw me.name = "Invariant Violation", me;
              }
              U = c[Y](x, Y, L, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ue) {
              U = ue;
            }
            U && !(U instanceof Error) && (oe(G), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", T, Y, typeof U), oe(null)), U instanceof Error && !(U.message in ae) && (ae[U.message] = !0, oe(G), P("Failed %s type: %s", T, U.message), oe(null));
          }
      }
    }
    var Ct = Array.isArray;
    function Ge(c) {
      return Ct(c);
    }
    function Ne(c) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, T = x && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return T;
      }
    }
    function Ke(c) {
      try {
        return Je(c), !1;
      } catch {
        return !0;
      }
    }
    function Je(c) {
      return "" + c;
    }
    function zr(c) {
      if (Ke(c))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ne(c)), Je(c);
    }
    var ct = m.ReactCurrentOwner, _a = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Yr, Hr, Gt;
    Gt = {};
    function Aa(c) {
      if (Oe.call(c, "ref")) {
        var x = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function Na(c) {
      if (Oe.call(c, "key")) {
        var x = Object.getOwnPropertyDescriptor(c, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function ka(c, x) {
      if (typeof c.ref == "string" && ct.current && x && ct.current.stateNode !== x) {
        var T = p(ct.current.type);
        Gt[T] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', p(ct.current.type), c.ref), Gt[T] = !0);
      }
    }
    function Va(c, x) {
      {
        var T = function() {
          Yr || (Yr = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        T.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function Ma(c, x) {
      {
        var T = function() {
          Hr || (Hr = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        T.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var $a = function(c, x, T, L, G, te, Y) {
      var U = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: c,
        key: x,
        ref: T,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: te
      };
      return U._store = {}, Object.defineProperty(U._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(U, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.defineProperty(U, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    };
    function Ia(c, x, T, L, G) {
      {
        var te, Y = {}, U = null, me = null;
        T !== void 0 && (zr(T), U = "" + T), Na(x) && (zr(x.key), U = "" + x.key), Aa(x) && (me = x.ref, ka(x, G));
        for (te in x)
          Oe.call(x, te) && !_a.hasOwnProperty(te) && (Y[te] = x[te]);
        if (c && c.defaultProps) {
          var ue = c.defaultProps;
          for (te in ue)
            Y[te] === void 0 && (Y[te] = ue[te]);
        }
        if (U || me) {
          var fe = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          U && Va(Y, fe), me && Ma(Y, fe);
        }
        return $a(c, U, me, G, L, ct.current, Y);
      }
    }
    var Kt = m.ReactCurrentOwner, Br = m.ReactDebugCurrentFrame;
    function Qe(c) {
      if (c) {
        var x = c._owner, T = ye(c.type, c._source, x ? x.type : null);
        Br.setExtraStackFrame(T);
      } else
        Br.setExtraStackFrame(null);
    }
    var Jt;
    Jt = !1;
    function Qt(c) {
      return typeof c == "object" && c !== null && c.$$typeof === r;
    }
    function Gr() {
      {
        if (Kt.current) {
          var c = p(Kt.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function ja(c) {
      {
        if (c !== void 0) {
          var x = c.fileName.replace(/^.*[\\\/]/, ""), T = c.lineNumber;
          return `

Check your code at ` + x + ":" + T + ".";
        }
        return "";
      }
    }
    var Kr = {};
    function La(c) {
      {
        var x = Gr();
        if (!x) {
          var T = typeof c == "string" ? c : c.displayName || c.name;
          T && (x = `

Check the top-level render call using <` + T + ">.");
        }
        return x;
      }
    }
    function Jr(c, x) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var T = La(x);
        if (Kr[T])
          return;
        Kr[T] = !0;
        var L = "";
        c && c._owner && c._owner !== Kt.current && (L = " It was passed a child from " + p(c._owner.type) + "."), Qe(c), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, L), Qe(null);
      }
    }
    function Qr(c, x) {
      {
        if (typeof c != "object")
          return;
        if (Ge(c))
          for (var T = 0; T < c.length; T++) {
            var L = c[T];
            Qt(L) && Jr(L, x);
          }
        else if (Qt(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var G = y(c);
          if (typeof G == "function" && G !== c.entries)
            for (var te = G.call(c), Y; !(Y = te.next()).done; )
              Qt(Y.value) && Jr(Y.value, x);
        }
      }
    }
    function Da(c) {
      {
        var x = c.type;
        if (x == null || typeof x == "string")
          return;
        var T;
        if (typeof x == "function")
          T = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === d))
          T = x.propTypes;
        else
          return;
        if (T) {
          var L = p(x);
          $e(T, c.props, "prop", L, c);
        } else if (x.PropTypes !== void 0 && !Jt) {
          Jt = !0;
          var G = p(x);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qa(c) {
      {
        for (var x = Object.keys(c.props), T = 0; T < x.length; T++) {
          var L = x[T];
          if (L !== "children" && L !== "key") {
            Qe(c), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), Qe(null);
            break;
          }
        }
        c.ref !== null && (Qe(c), P("Invalid attribute `ref` supplied to `React.Fragment`."), Qe(null));
      }
    }
    function Zr(c, x, T, L, G, te) {
      {
        var Y = j(c);
        if (!Y) {
          var U = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var me = ja(G);
          me ? U += me : U += Gr();
          var ue;
          c === null ? ue = "null" : Ge(c) ? ue = "array" : c !== void 0 && c.$$typeof === r ? (ue = "<" + (p(c.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof c, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, U);
        }
        var fe = Ia(c, x, T, G, te);
        if (fe == null)
          return fe;
        if (Y) {
          var Ce = x.children;
          if (Ce !== void 0)
            if (L)
              if (Ge(Ce)) {
                for (var Ze = 0; Ze < Ce.length; Ze++)
                  Qr(Ce[Ze], c);
                Object.freeze && Object.freeze(Ce);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qr(Ce, c);
        }
        return c === n ? qa(fe) : Da(fe), fe;
      }
    }
    function Wa(c, x, T) {
      return Zr(c, x, T, !0);
    }
    function Ua(c, x, T) {
      return Zr(c, x, T, !1);
    }
    var za = Ua, Ya = Wa;
    dt.Fragment = n, dt.jsx = za, dt.jsxs = Ya;
  }()), dt;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Za() : t.exports = Xa();
})(Qa);
const ei = lr.jsx;
function ze() {
  return ze = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }, ze.apply(this, arguments);
}
function ce(t) {
  return ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ce(t);
}
function ti(t, r) {
  if (ce(t) !== "object" || t === null)
    return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var n = e.call(t, r || "default");
    if (ce(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function Dn(t) {
  var r = ti(t, "string");
  return ce(r) === "symbol" ? r : String(r);
}
function q(t, r, e) {
  return r = Dn(r), r in t ? Object.defineProperty(t, r, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = e, t;
}
function st(t, r) {
  if (!(t instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function rn(t, r) {
  for (var e = 0; e < r.length; e++) {
    var n = r[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Dn(n.key), n);
  }
}
function ft(t, r, e) {
  return r && rn(t.prototype, r), e && rn(t, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function dr(t, r) {
  return dr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, dr(t, r);
}
function Lt(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), r && dr(t, r);
}
function $t(t) {
  return $t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, $t(t);
}
function ri() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function yt(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function ni(t, r) {
  if (r && (ce(r) === "object" || typeof r == "function"))
    return r;
  if (r !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yt(t);
}
function Dt(t) {
  var r = ri();
  return function() {
    var n = $t(t), a;
    if (r) {
      var i = $t(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return ni(this, a);
  };
}
var vr = {}, ai = {
  get exports() {
    return vr;
  },
  set exports(t) {
    vr = t;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var r = {}.hasOwnProperty;
    function e() {
      for (var n = [], a = 0; a < arguments.length; a++) {
        var i = arguments[a];
        if (i) {
          var o = typeof i;
          if (o === "string" || o === "number")
            n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var u = e.apply(null, i);
              u && n.push(u);
            }
          } else if (o === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              n.push(i.toString());
              continue;
            }
            for (var s in i)
              r.call(i, s) && i[s] && n.push(s);
          }
        }
      }
      return n.join(" ");
    }
    t.exports ? (e.default = e, t.exports = e) : window.classNames = e;
  })();
})(ai);
const Et = vr;
var It = {}, ii = {
  get exports() {
    return It;
  },
  set exports(t) {
    It = t;
  }
}, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function oi() {
  if (nn)
    return J;
  nn = 1;
  var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, u = t ? Symbol.for("react.context") : 60110, s = t ? Symbol.for("react.async_mode") : 60111, f = t ? Symbol.for("react.concurrent_mode") : 60111, l = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, v = t ? Symbol.for("react.suspense_list") : 60120, w = t ? Symbol.for("react.memo") : 60115, C = t ? Symbol.for("react.lazy") : 60116, h = t ? Symbol.for("react.block") : 60121, y = t ? Symbol.for("react.fundamental") : 60117, m = t ? Symbol.for("react.responder") : 60118, P = t ? Symbol.for("react.scope") : 60119;
  function F(g) {
    if (typeof g == "object" && g !== null) {
      var _ = g.$$typeof;
      switch (_) {
        case r:
          switch (g = g.type, g) {
            case s:
            case f:
            case n:
            case i:
            case a:
            case d:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case u:
                case l:
                case C:
                case w:
                case o:
                  return g;
                default:
                  return _;
              }
          }
        case e:
          return _;
      }
    }
  }
  function R(g) {
    return F(g) === f;
  }
  return J.AsyncMode = s, J.ConcurrentMode = f, J.ContextConsumer = u, J.ContextProvider = o, J.Element = r, J.ForwardRef = l, J.Fragment = n, J.Lazy = C, J.Memo = w, J.Portal = e, J.Profiler = i, J.StrictMode = a, J.Suspense = d, J.isAsyncMode = function(g) {
    return R(g) || F(g) === s;
  }, J.isConcurrentMode = R, J.isContextConsumer = function(g) {
    return F(g) === u;
  }, J.isContextProvider = function(g) {
    return F(g) === o;
  }, J.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === r;
  }, J.isForwardRef = function(g) {
    return F(g) === l;
  }, J.isFragment = function(g) {
    return F(g) === n;
  }, J.isLazy = function(g) {
    return F(g) === C;
  }, J.isMemo = function(g) {
    return F(g) === w;
  }, J.isPortal = function(g) {
    return F(g) === e;
  }, J.isProfiler = function(g) {
    return F(g) === i;
  }, J.isStrictMode = function(g) {
    return F(g) === a;
  }, J.isSuspense = function(g) {
    return F(g) === d;
  }, J.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === f || g === i || g === a || g === d || g === v || typeof g == "object" && g !== null && (g.$$typeof === C || g.$$typeof === w || g.$$typeof === o || g.$$typeof === u || g.$$typeof === l || g.$$typeof === y || g.$$typeof === m || g.$$typeof === P || g.$$typeof === h);
  }, J.typeOf = F, J;
}
var Q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var an;
function ui() {
  return an || (an = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, u = t ? Symbol.for("react.context") : 60110, s = t ? Symbol.for("react.async_mode") : 60111, f = t ? Symbol.for("react.concurrent_mode") : 60111, l = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, v = t ? Symbol.for("react.suspense_list") : 60120, w = t ? Symbol.for("react.memo") : 60115, C = t ? Symbol.for("react.lazy") : 60116, h = t ? Symbol.for("react.block") : 60121, y = t ? Symbol.for("react.fundamental") : 60117, m = t ? Symbol.for("react.responder") : 60118, P = t ? Symbol.for("react.scope") : 60119;
    function F(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === f || k === i || k === a || k === d || k === v || typeof k == "object" && k !== null && (k.$$typeof === C || k.$$typeof === w || k.$$typeof === o || k.$$typeof === u || k.$$typeof === l || k.$$typeof === y || k.$$typeof === m || k.$$typeof === P || k.$$typeof === h);
    }
    function R(k) {
      if (typeof k == "object" && k !== null) {
        var he = k.$$typeof;
        switch (he) {
          case r:
            var Ae = k.type;
            switch (Ae) {
              case s:
              case f:
              case n:
              case i:
              case a:
              case d:
                return Ae;
              default:
                var ye = Ae && Ae.$$typeof;
                switch (ye) {
                  case u:
                  case l:
                  case C:
                  case w:
                  case o:
                    return ye;
                  default:
                    return he;
                }
            }
          case e:
            return he;
        }
      }
    }
    var g = s, _ = f, $ = u, M = o, I = r, j = l, D = n, E = C, p = w, b = e, O = i, V = a, N = d, W = !1;
    function ee(k) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), K(k) || R(k) === s;
    }
    function K(k) {
      return R(k) === f;
    }
    function ie(k) {
      return R(k) === u;
    }
    function B(k) {
      return R(k) === o;
    }
    function Z(k) {
      return typeof k == "object" && k !== null && k.$$typeof === r;
    }
    function ve(k) {
      return R(k) === l;
    }
    function ge(k) {
      return R(k) === n;
    }
    function Ve(k) {
      return R(k) === C;
    }
    function be(k) {
      return R(k) === w;
    }
    function xe(k) {
      return R(k) === e;
    }
    function re(k) {
      return R(k) === i;
    }
    function Re(k) {
      return R(k) === a;
    }
    function Me(k) {
      return R(k) === d;
    }
    Q.AsyncMode = g, Q.ConcurrentMode = _, Q.ContextConsumer = $, Q.ContextProvider = M, Q.Element = I, Q.ForwardRef = j, Q.Fragment = D, Q.Lazy = E, Q.Memo = p, Q.Portal = b, Q.Profiler = O, Q.StrictMode = V, Q.Suspense = N, Q.isAsyncMode = ee, Q.isConcurrentMode = K, Q.isContextConsumer = ie, Q.isContextProvider = B, Q.isElement = Z, Q.isForwardRef = ve, Q.isFragment = ge, Q.isLazy = Ve, Q.isMemo = be, Q.isPortal = xe, Q.isProfiler = re, Q.isStrictMode = Re, Q.isSuspense = Me, Q.isValidElementType = F, Q.typeOf = R;
  }()), Q;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = oi() : t.exports = ui();
})(ii);
function pr(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [];
  return _e.Children.forEach(t, function(n) {
    n == null && !r.keepEmpty || (Array.isArray(n) ? e = e.concat(pr(n)) : It.isFragment(n) && n.props ? e = e.concat(pr(n.props.children, r)) : e.push(n));
  }), e;
}
var mr = {};
function si(t, r) {
  process.env.NODE_ENV !== "production" && !t && console !== void 0 && console.error("Warning: ".concat(r));
}
function fi() {
  mr = {};
}
function ci(t, r, e) {
  !r && !mr[e] && (t(!1, e), mr[e] = !0);
}
function pe(t, r) {
  ci(si, t, r);
}
function on(t, r) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function A(t) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? on(Object(e), !0).forEach(function(n) {
      q(t, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : on(Object(e)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return t;
}
function qn(t, r) {
  typeof t == "function" ? t(r) : ce(t) === "object" && t && "current" in t && (t.current = r);
}
function li() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  var n = r.filter(function(a) {
    return a;
  });
  return n.length <= 1 ? n[0] : function(a) {
    r.forEach(function(i) {
      qn(i, a);
    });
  };
}
function Wn(t) {
  var r, e, n = It.isMemo(t) ? t.type.type : t.type;
  return !(typeof n == "function" && !((r = n.prototype) !== null && r !== void 0 && r.render) || typeof t == "function" && !((e = t.prototype) !== null && e !== void 0 && e.render));
}
function di(t) {
  return t instanceof HTMLElement ? t : t instanceof _e.Component ? Ja.findDOMNode(t) : null;
}
function vi(t, r) {
  var e = A({}, t);
  return Array.isArray(r) && r.forEach(function(n) {
    delete e[n];
  }), e;
}
var pi = /* @__PURE__ */ Ha({});
const Un = pi;
function mi(t, r) {
  if (t == null)
    return {};
  var e = {}, n = Object.keys(t), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(r.indexOf(a) >= 0) && (e[a] = t[a]);
  return e;
}
function Be(t, r) {
  if (t == null)
    return {};
  var e = mi(t, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (e[n] = t[n]);
  }
  return e;
}
function gr(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var e = 0, n = new Array(r); e < r; e++)
    n[e] = t[e];
  return n;
}
function gi(t) {
  if (Array.isArray(t))
    return gr(t);
}
function zn(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Ir(t, r) {
  if (t) {
    if (typeof t == "string")
      return gr(t, r);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return gr(t, r);
  }
}
function hi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H(t) {
  return gi(t) || zn(t) || Ir(t) || hi();
}
var Ye = "RC_FORM_INTERNAL_HOOKS", X = function() {
  pe(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, ot = /* @__PURE__ */ S.createContext({
  getFieldValue: X,
  getFieldsValue: X,
  getFieldError: X,
  getFieldWarning: X,
  getFieldsError: X,
  isFieldsTouched: X,
  isFieldTouched: X,
  isFieldValidating: X,
  isFieldsValidating: X,
  resetFields: X,
  setFields: X,
  setFieldValue: X,
  setFieldsValue: X,
  validateFields: X,
  submit: X,
  getInternalHooks: function() {
    return X(), {
      dispatch: X,
      initEntityValue: X,
      registerField: X,
      useSubscribe: X,
      setInitialValues: X,
      destroyForm: X,
      setCallbacks: X,
      registerWatch: X,
      getFields: X,
      setValidateMessages: X,
      setPreserve: X,
      getInitialValue: X
    };
  }
});
function hr(t) {
  return t == null ? [] : Array.isArray(t) ? t : [t];
}
function De() {
  De = function() {
    return t;
  };
  var t = {}, r = Object.prototype, e = r.hasOwnProperty, n = Object.defineProperty || function(E, p, b) {
    E[p] = b.value;
  }, a = typeof Symbol == "function" ? Symbol : {}, i = a.iterator || "@@iterator", o = a.asyncIterator || "@@asyncIterator", u = a.toStringTag || "@@toStringTag";
  function s(E, p, b) {
    return Object.defineProperty(E, p, {
      value: b,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), E[p];
  }
  try {
    s({}, "");
  } catch {
    s = function(b, O, V) {
      return b[O] = V;
    };
  }
  function f(E, p, b, O) {
    var V = p && p.prototype instanceof v ? p : v, N = Object.create(V.prototype), W = new I(O || []);
    return n(N, "_invoke", {
      value: g(E, b, W)
    }), N;
  }
  function l(E, p, b) {
    try {
      return {
        type: "normal",
        arg: E.call(p, b)
      };
    } catch (O) {
      return {
        type: "throw",
        arg: O
      };
    }
  }
  t.wrap = f;
  var d = {};
  function v() {
  }
  function w() {
  }
  function C() {
  }
  var h = {};
  s(h, i, function() {
    return this;
  });
  var y = Object.getPrototypeOf, m = y && y(y(j([])));
  m && m !== r && e.call(m, i) && (h = m);
  var P = C.prototype = v.prototype = Object.create(h);
  function F(E) {
    ["next", "throw", "return"].forEach(function(p) {
      s(E, p, function(b) {
        return this._invoke(p, b);
      });
    });
  }
  function R(E, p) {
    function b(V, N, W, ee) {
      var K = l(E[V], E, N);
      if (K.type !== "throw") {
        var ie = K.arg, B = ie.value;
        return B && ce(B) == "object" && e.call(B, "__await") ? p.resolve(B.__await).then(function(Z) {
          b("next", Z, W, ee);
        }, function(Z) {
          b("throw", Z, W, ee);
        }) : p.resolve(B).then(function(Z) {
          ie.value = Z, W(ie);
        }, function(Z) {
          return b("throw", Z, W, ee);
        });
      }
      ee(K.arg);
    }
    var O;
    n(this, "_invoke", {
      value: function(N, W) {
        function ee() {
          return new p(function(K, ie) {
            b(N, W, K, ie);
          });
        }
        return O = O ? O.then(ee, ee) : ee();
      }
    });
  }
  function g(E, p, b) {
    var O = "suspendedStart";
    return function(V, N) {
      if (O === "executing")
        throw new Error("Generator is already running");
      if (O === "completed") {
        if (V === "throw")
          throw N;
        return D();
      }
      for (b.method = V, b.arg = N; ; ) {
        var W = b.delegate;
        if (W) {
          var ee = _(W, b);
          if (ee) {
            if (ee === d)
              continue;
            return ee;
          }
        }
        if (b.method === "next")
          b.sent = b._sent = b.arg;
        else if (b.method === "throw") {
          if (O === "suspendedStart")
            throw O = "completed", b.arg;
          b.dispatchException(b.arg);
        } else
          b.method === "return" && b.abrupt("return", b.arg);
        O = "executing";
        var K = l(E, p, b);
        if (K.type === "normal") {
          if (O = b.done ? "completed" : "suspendedYield", K.arg === d)
            continue;
          return {
            value: K.arg,
            done: b.done
          };
        }
        K.type === "throw" && (O = "completed", b.method = "throw", b.arg = K.arg);
      }
    };
  }
  function _(E, p) {
    var b = p.method, O = E.iterator[b];
    if (O === void 0)
      return p.delegate = null, b === "throw" && E.iterator.return && (p.method = "return", p.arg = void 0, _(E, p), p.method === "throw") || b !== "return" && (p.method = "throw", p.arg = new TypeError("The iterator does not provide a '" + b + "' method")), d;
    var V = l(O, E.iterator, p.arg);
    if (V.type === "throw")
      return p.method = "throw", p.arg = V.arg, p.delegate = null, d;
    var N = V.arg;
    return N ? N.done ? (p[E.resultName] = N.value, p.next = E.nextLoc, p.method !== "return" && (p.method = "next", p.arg = void 0), p.delegate = null, d) : N : (p.method = "throw", p.arg = new TypeError("iterator result is not an object"), p.delegate = null, d);
  }
  function $(E) {
    var p = {
      tryLoc: E[0]
    };
    1 in E && (p.catchLoc = E[1]), 2 in E && (p.finallyLoc = E[2], p.afterLoc = E[3]), this.tryEntries.push(p);
  }
  function M(E) {
    var p = E.completion || {};
    p.type = "normal", delete p.arg, E.completion = p;
  }
  function I(E) {
    this.tryEntries = [{
      tryLoc: "root"
    }], E.forEach($, this), this.reset(!0);
  }
  function j(E) {
    if (E) {
      var p = E[i];
      if (p)
        return p.call(E);
      if (typeof E.next == "function")
        return E;
      if (!isNaN(E.length)) {
        var b = -1, O = function V() {
          for (; ++b < E.length; )
            if (e.call(E, b))
              return V.value = E[b], V.done = !1, V;
          return V.value = void 0, V.done = !0, V;
        };
        return O.next = O;
      }
    }
    return {
      next: D
    };
  }
  function D() {
    return {
      value: void 0,
      done: !0
    };
  }
  return w.prototype = C, n(P, "constructor", {
    value: C,
    configurable: !0
  }), n(C, "constructor", {
    value: w,
    configurable: !0
  }), w.displayName = s(C, u, "GeneratorFunction"), t.isGeneratorFunction = function(E) {
    var p = typeof E == "function" && E.constructor;
    return !!p && (p === w || (p.displayName || p.name) === "GeneratorFunction");
  }, t.mark = function(E) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(E, C) : (E.__proto__ = C, s(E, u, "GeneratorFunction")), E.prototype = Object.create(P), E;
  }, t.awrap = function(E) {
    return {
      __await: E
    };
  }, F(R.prototype), s(R.prototype, o, function() {
    return this;
  }), t.AsyncIterator = R, t.async = function(E, p, b, O, V) {
    V === void 0 && (V = Promise);
    var N = new R(f(E, p, b, O), V);
    return t.isGeneratorFunction(p) ? N : N.next().then(function(W) {
      return W.done ? W.value : N.next();
    });
  }, F(P), s(P, u, "Generator"), s(P, i, function() {
    return this;
  }), s(P, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(E) {
    var p = Object(E), b = [];
    for (var O in p)
      b.push(O);
    return b.reverse(), function V() {
      for (; b.length; ) {
        var N = b.pop();
        if (N in p)
          return V.value = N, V.done = !1, V;
      }
      return V.done = !0, V;
    };
  }, t.values = j, I.prototype = {
    constructor: I,
    reset: function(p) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(M), !p)
        for (var b in this)
          b.charAt(0) === "t" && e.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = void 0);
    },
    stop: function() {
      this.done = !0;
      var p = this.tryEntries[0].completion;
      if (p.type === "throw")
        throw p.arg;
      return this.rval;
    },
    dispatchException: function(p) {
      if (this.done)
        throw p;
      var b = this;
      function O(ie, B) {
        return W.type = "throw", W.arg = p, b.next = ie, B && (b.method = "next", b.arg = void 0), !!B;
      }
      for (var V = this.tryEntries.length - 1; V >= 0; --V) {
        var N = this.tryEntries[V], W = N.completion;
        if (N.tryLoc === "root")
          return O("end");
        if (N.tryLoc <= this.prev) {
          var ee = e.call(N, "catchLoc"), K = e.call(N, "finallyLoc");
          if (ee && K) {
            if (this.prev < N.catchLoc)
              return O(N.catchLoc, !0);
            if (this.prev < N.finallyLoc)
              return O(N.finallyLoc);
          } else if (ee) {
            if (this.prev < N.catchLoc)
              return O(N.catchLoc, !0);
          } else {
            if (!K)
              throw new Error("try statement without catch or finally");
            if (this.prev < N.finallyLoc)
              return O(N.finallyLoc);
          }
        }
      }
    },
    abrupt: function(p, b) {
      for (var O = this.tryEntries.length - 1; O >= 0; --O) {
        var V = this.tryEntries[O];
        if (V.tryLoc <= this.prev && e.call(V, "finallyLoc") && this.prev < V.finallyLoc) {
          var N = V;
          break;
        }
      }
      N && (p === "break" || p === "continue") && N.tryLoc <= b && b <= N.finallyLoc && (N = null);
      var W = N ? N.completion : {};
      return W.type = p, W.arg = b, N ? (this.method = "next", this.next = N.finallyLoc, d) : this.complete(W);
    },
    complete: function(p, b) {
      if (p.type === "throw")
        throw p.arg;
      return p.type === "break" || p.type === "continue" ? this.next = p.arg : p.type === "return" ? (this.rval = this.arg = p.arg, this.method = "return", this.next = "end") : p.type === "normal" && b && (this.next = b), d;
    },
    finish: function(p) {
      for (var b = this.tryEntries.length - 1; b >= 0; --b) {
        var O = this.tryEntries[b];
        if (O.finallyLoc === p)
          return this.complete(O.completion, O.afterLoc), M(O), d;
      }
    },
    catch: function(p) {
      for (var b = this.tryEntries.length - 1; b >= 0; --b) {
        var O = this.tryEntries[b];
        if (O.tryLoc === p) {
          var V = O.completion;
          if (V.type === "throw") {
            var N = V.arg;
            M(O);
          }
          return N;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(p, b, O) {
      return this.delegate = {
        iterator: j(p),
        resultName: b,
        nextLoc: O
      }, this.method === "next" && (this.arg = void 0), d;
    }
  }, t;
}
function un(t, r, e, n, a, i, o) {
  try {
    var u = t[i](o), s = u.value;
  } catch (f) {
    e(f);
    return;
  }
  u.done ? r(s) : Promise.resolve(s).then(n, a);
}
function qt(t) {
  return function() {
    var r = this, e = arguments;
    return new Promise(function(n, a) {
      var i = t.apply(r, e);
      function o(s) {
        un(i, n, a, o, u, "next", s);
      }
      function u(s) {
        un(i, n, a, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
function He() {
  return He = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }, He.apply(this, arguments);
}
function yi(t, r) {
  t.prototype = Object.create(r.prototype), t.prototype.constructor = t, bt(t, r);
}
function yr(t) {
  return yr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, yr(t);
}
function bt(t, r) {
  return bt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, bt(t, r);
}
function bi() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function kt(t, r, e) {
  return bi() ? kt = Reflect.construct.bind() : kt = function(a, i, o) {
    var u = [null];
    u.push.apply(u, i);
    var s = Function.bind.apply(a, u), f = new s();
    return o && bt(f, o.prototype), f;
  }, kt.apply(null, arguments);
}
function Ei(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function br(t) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return br = function(n) {
    if (n === null || !Ei(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(n))
        return r.get(n);
      r.set(n, a);
    }
    function a() {
      return kt(n, arguments, yr(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), bt(a, n);
  }, br(t);
}
var wi = /%[sdj%]/g, Yn = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Yn = function(r, e) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && e.every(function(n) {
    return typeof n == "string";
  }) && console.warn(r, e);
});
function Er(t) {
  if (!t || !t.length)
    return null;
  var r = {};
  return t.forEach(function(e) {
    var n = e.field;
    r[n] = r[n] || [], r[n].push(e);
  }), r;
}
function Fe(t) {
  for (var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    e[n - 1] = arguments[n];
  var a = 0, i = e.length;
  if (typeof t == "function")
    return t.apply(null, e);
  if (typeof t == "string") {
    var o = t.replace(wi, function(u) {
      if (u === "%%")
        return "%";
      if (a >= i)
        return u;
      switch (u) {
        case "%s":
          return String(e[a++]);
        case "%d":
          return Number(e[a++]);
        case "%j":
          try {
            return JSON.stringify(e[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return u;
      }
    });
    return o;
  }
  return t;
}
function Fi(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function le(t, r) {
  return !!(t == null || r === "array" && Array.isArray(t) && !t.length || Fi(r) && typeof t == "string" && !t);
}
function Ci(t, r, e) {
  var n = [], a = 0, i = t.length;
  function o(u) {
    n.push.apply(n, u || []), a++, a === i && e(n);
  }
  t.forEach(function(u) {
    r(u, o);
  });
}
function sn(t, r, e) {
  var n = 0, a = t.length;
  function i(o) {
    if (o && o.length) {
      e(o);
      return;
    }
    var u = n;
    n = n + 1, u < a ? r(t[u], i) : e([]);
  }
  i([]);
}
function Si(t) {
  var r = [];
  return Object.keys(t).forEach(function(e) {
    r.push.apply(r, t[e] || []);
  }), r;
}
var fn = /* @__PURE__ */ function(t) {
  yi(r, t);
  function r(e, n) {
    var a;
    return a = t.call(this, "Async Validation Error") || this, a.errors = e, a.fields = n, a;
  }
  return r;
}(/* @__PURE__ */ br(Error));
function Pi(t, r, e, n, a) {
  if (r.first) {
    var i = new Promise(function(v, w) {
      var C = function(m) {
        return n(m), m.length ? w(new fn(m, Er(m))) : v(a);
      }, h = Si(t);
      sn(h, e, C);
    });
    return i.catch(function(v) {
      return v;
    }), i;
  }
  var o = r.firstFields === !0 ? Object.keys(t) : r.firstFields || [], u = Object.keys(t), s = u.length, f = 0, l = [], d = new Promise(function(v, w) {
    var C = function(y) {
      if (l.push.apply(l, y), f++, f === s)
        return n(l), l.length ? w(new fn(l, Er(l))) : v(a);
    };
    u.length || (n(l), v(a)), u.forEach(function(h) {
      var y = t[h];
      o.indexOf(h) !== -1 ? sn(y, e, C) : Ci(y, e, C);
    });
  });
  return d.catch(function(v) {
    return v;
  }), d;
}
function xi(t) {
  return !!(t && t.message !== void 0);
}
function Ri(t, r) {
  for (var e = t, n = 0; n < r.length; n++) {
    if (e == null)
      return e;
    e = e[r[n]];
  }
  return e;
}
function cn(t, r) {
  return function(e) {
    var n;
    return t.fullFields ? n = Ri(r, t.fullFields) : n = r[e.field || t.fullField], xi(e) ? (e.field = e.field || t.fullField, e.fieldValue = n, e) : {
      message: typeof e == "function" ? e() : e,
      fieldValue: n,
      field: e.field || t.fullField
    };
  };
}
function ln(t, r) {
  if (r) {
    for (var e in r)
      if (r.hasOwnProperty(e)) {
        var n = r[e];
        typeof n == "object" && typeof t[e] == "object" ? t[e] = He({}, t[e], n) : t[e] = n;
      }
  }
  return t;
}
var Hn = function(r, e, n, a, i, o) {
  r.required && (!n.hasOwnProperty(r.field) || le(e, o || r.type)) && a.push(Fe(i.messages.required, r.fullField));
}, Oi = function(r, e, n, a, i) {
  (/^\s+$/.test(e) || e === "") && a.push(Fe(i.messages.whitespace, r.fullField));
}, St, Ti = function() {
  if (St)
    return St;
  var t = "[a-fA-F\\d:]", r = function(R) {
    return R && R.includeBoundaries ? "(?:(?<=\\s|^)(?=" + t + ")|(?<=" + t + ")(?=\\s|$))" : "";
  }, e = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", a = (`
(?:
(?:` + n + ":){7}(?:" + n + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + n + ":){6}(?:" + e + "|:" + n + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + n + ":){5}(?::" + e + "|(?::" + n + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + n + ":){4}(?:(?::" + n + "){0,1}:" + e + "|(?::" + n + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + n + ":){3}(?:(?::" + n + "){0,2}:" + e + "|(?::" + n + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + n + ":){2}(?:(?::" + n + "){0,3}:" + e + "|(?::" + n + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + n + ":){1}(?:(?::" + n + "){0,4}:" + e + "|(?::" + n + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + n + "){0,5}:" + e + "|(?::" + n + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + e + "$)|(?:^" + a + "$)"), o = new RegExp("^" + e + "$"), u = new RegExp("^" + a + "$"), s = function(R) {
    return R && R.exact ? i : new RegExp("(?:" + r(R) + e + r(R) + ")|(?:" + r(R) + a + r(R) + ")", "g");
  };
  s.v4 = function(F) {
    return F && F.exact ? o : new RegExp("" + r(F) + e + r(F), "g");
  }, s.v6 = function(F) {
    return F && F.exact ? u : new RegExp("" + r(F) + a + r(F), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", l = "(?:\\S+(?::\\S*)?@)?", d = s.v4().source, v = s.v6().source, w = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", C = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", h = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", m = '(?:[/?#][^\\s"]*)?', P = "(?:" + f + "|www\\.)" + l + "(?:localhost|" + d + "|" + v + "|" + w + C + h + ")" + y + m;
  return St = new RegExp("(?:^" + P + "$)", "i"), St;
}, dn = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, pt = {
  integer: function(r) {
    return pt.number(r) && parseInt(r, 10) === r;
  },
  float: function(r) {
    return pt.number(r) && !pt.integer(r);
  },
  array: function(r) {
    return Array.isArray(r);
  },
  regexp: function(r) {
    if (r instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(r);
    } catch {
      return !1;
    }
  },
  date: function(r) {
    return typeof r.getTime == "function" && typeof r.getMonth == "function" && typeof r.getYear == "function" && !isNaN(r.getTime());
  },
  number: function(r) {
    return isNaN(r) ? !1 : typeof r == "number";
  },
  object: function(r) {
    return typeof r == "object" && !pt.array(r);
  },
  method: function(r) {
    return typeof r == "function";
  },
  email: function(r) {
    return typeof r == "string" && r.length <= 320 && !!r.match(dn.email);
  },
  url: function(r) {
    return typeof r == "string" && r.length <= 2048 && !!r.match(Ti());
  },
  hex: function(r) {
    return typeof r == "string" && !!r.match(dn.hex);
  }
}, _i = function(r, e, n, a, i) {
  if (r.required && e === void 0) {
    Hn(r, e, n, a, i);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], u = r.type;
  o.indexOf(u) > -1 ? pt[u](e) || a.push(Fe(i.messages.types[u], r.fullField, r.type)) : u && typeof e !== r.type && a.push(Fe(i.messages.types[u], r.fullField, r.type));
}, Ai = function(r, e, n, a, i) {
  var o = typeof r.len == "number", u = typeof r.min == "number", s = typeof r.max == "number", f = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = e, d = null, v = typeof e == "number", w = typeof e == "string", C = Array.isArray(e);
  if (v ? d = "number" : w ? d = "string" : C && (d = "array"), !d)
    return !1;
  C && (l = e.length), w && (l = e.replace(f, "_").length), o ? l !== r.len && a.push(Fe(i.messages[d].len, r.fullField, r.len)) : u && !s && l < r.min ? a.push(Fe(i.messages[d].min, r.fullField, r.min)) : s && !u && l > r.max ? a.push(Fe(i.messages[d].max, r.fullField, r.max)) : u && s && (l < r.min || l > r.max) && a.push(Fe(i.messages[d].range, r.fullField, r.min, r.max));
}, Xe = "enum", Ni = function(r, e, n, a, i) {
  r[Xe] = Array.isArray(r[Xe]) ? r[Xe] : [], r[Xe].indexOf(e) === -1 && a.push(Fe(i.messages[Xe], r.fullField, r[Xe].join(", ")));
}, ki = function(r, e, n, a, i) {
  if (r.pattern) {
    if (r.pattern instanceof RegExp)
      r.pattern.lastIndex = 0, r.pattern.test(e) || a.push(Fe(i.messages.pattern.mismatch, r.fullField, e, r.pattern));
    else if (typeof r.pattern == "string") {
      var o = new RegExp(r.pattern);
      o.test(e) || a.push(Fe(i.messages.pattern.mismatch, r.fullField, e, r.pattern));
    }
  }
}, z = {
  required: Hn,
  whitespace: Oi,
  type: _i,
  range: Ai,
  enum: Ni,
  pattern: ki
}, Vi = function(r, e, n, a, i) {
  var o = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (le(e, "string") && !r.required)
      return n();
    z.required(r, e, a, o, i, "string"), le(e, "string") || (z.type(r, e, a, o, i), z.range(r, e, a, o, i), z.pattern(r, e, a, o, i), r.whitespace === !0 && z.whitespace(r, e, a, o, i));
  }
  n(o);
}, Mi = function(r, e, n, a, i) {
  var o = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (le(e) && !r.required)
      return n();
    z.required(r, e, a, o, i), e !== void 0 && z.type(r, e, a, o, i);
  }
  n(o);
}, $i = function(r, e, n, a, i) {
  var o = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (e === "" && (e = void 0), le(e) && !r.required)
      return n();
    z.required(r, e, a, o, i), e !== void 0 && (z.type(r, e, a, o, i), z.range(r, e, a, o, i));
  }
  n(o);
}, Ii = function(r, e, n, a, i) {
  var o = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (le(e) && !r.required)
      return n();
    z.required(r, e, a, o, i), e !== void 0 && z.type(r, e, a, o, i);
  }
  n(o);
}, ji = function(r, e, n, a, i) {
  var o = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (le(e) && !r.required)
      return n();
    z.required(r, e, a, o, i), le(e) || z.type(r, e, a, o, i);
  }
  n(o);
}, Li = function(r, e, n, a, i) {
  var o = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (le(e) && !r.required)
      return n();
    z.required(r, e, a, o, i), e !== void 0 && (z.type(r, e, a, o, i), z.range(r, e, a, o, i));
  }
  n(o);
}, Di = function(r, e, n, a, i) {
  var o = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (le(e) && !r.required)
      return n();
    z.required(r, e, a, o, i), e !== void 0 && (z.type(r, e, a, o, i), z.range(r, e, a, o, i));
  }
  n(o);
}, qi = function(r, e, n, a, i) {
  var o = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (e == null && !r.required)
      return n();
    z.required(r, e, a, o, i, "array"), e != null && (z.type(r, e, a, o, i), z.range(r, e, a, o, i));
  }
  n(o);
}, Wi = function(r, e, n, a, i) {
  var o = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (le(e) && !r.required)
      return n();
    z.required(r, e, a, o, i), e !== void 0 && z.type(r, e, a, o, i);
  }
  n(o);
}, Ui = "enum", zi = function(r, e, n, a, i) {
  var o = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (le(e) && !r.required)
      return n();
    z.required(r, e, a, o, i), e !== void 0 && z[Ui](r, e, a, o, i);
  }
  n(o);
}, Yi = function(r, e, n, a, i) {
  var o = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (le(e, "string") && !r.required)
      return n();
    z.required(r, e, a, o, i), le(e, "string") || z.pattern(r, e, a, o, i);
  }
  n(o);
}, Hi = function(r, e, n, a, i) {
  var o = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (le(e, "date") && !r.required)
      return n();
    if (z.required(r, e, a, o, i), !le(e, "date")) {
      var s;
      e instanceof Date ? s = e : s = new Date(e), z.type(r, s, a, o, i), s && z.range(r, s.getTime(), a, o, i);
    }
  }
  n(o);
}, Bi = function(r, e, n, a, i) {
  var o = [], u = Array.isArray(e) ? "array" : typeof e;
  z.required(r, e, a, o, i, u), n(o);
}, Zt = function(r, e, n, a, i) {
  var o = r.type, u = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (le(e, o) && !r.required)
      return n();
    z.required(r, e, a, u, i, o), le(e, o) || z.type(r, e, a, u, i);
  }
  n(u);
}, Gi = function(r, e, n, a, i) {
  var o = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (le(e) && !r.required)
      return n();
    z.required(r, e, a, o, i);
  }
  n(o);
}, mt = {
  string: Vi,
  method: Mi,
  number: $i,
  boolean: Ii,
  regexp: ji,
  integer: Li,
  float: Di,
  array: qi,
  object: Wi,
  enum: zi,
  pattern: Yi,
  date: Hi,
  url: Zt,
  hex: Zt,
  email: Zt,
  required: Bi,
  any: Gi
};
function wr() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var r = JSON.parse(JSON.stringify(this));
      return r.clone = this.clone, r;
    }
  };
}
var Fr = wr(), wt = /* @__PURE__ */ function() {
  function t(e) {
    this.rules = null, this._messages = Fr, this.define(e);
  }
  var r = t.prototype;
  return r.define = function(n) {
    var a = this;
    if (!n)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof n != "object" || Array.isArray(n))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(i) {
      var o = n[i];
      a.rules[i] = Array.isArray(o) ? o : [o];
    });
  }, r.messages = function(n) {
    return n && (this._messages = ln(wr(), n)), this._messages;
  }, r.validate = function(n, a, i) {
    var o = this;
    a === void 0 && (a = {}), i === void 0 && (i = function() {
    });
    var u = n, s = a, f = i;
    if (typeof s == "function" && (f = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return f && f(null, u), Promise.resolve(u);
    function l(h) {
      var y = [], m = {};
      function P(R) {
        if (Array.isArray(R)) {
          var g;
          y = (g = y).concat.apply(g, R);
        } else
          y.push(R);
      }
      for (var F = 0; F < h.length; F++)
        P(h[F]);
      y.length ? (m = Er(y), f(y, m)) : f(null, u);
    }
    if (s.messages) {
      var d = this.messages();
      d === Fr && (d = wr()), ln(d, s.messages), s.messages = d;
    } else
      s.messages = this.messages();
    var v = {}, w = s.keys || Object.keys(this.rules);
    w.forEach(function(h) {
      var y = o.rules[h], m = u[h];
      y.forEach(function(P) {
        var F = P;
        typeof F.transform == "function" && (u === n && (u = He({}, u)), m = u[h] = F.transform(m)), typeof F == "function" ? F = {
          validator: F
        } : F = He({}, F), F.validator = o.getValidationMethod(F), F.validator && (F.field = h, F.fullField = F.fullField || h, F.type = o.getType(F), v[h] = v[h] || [], v[h].push({
          rule: F,
          value: m,
          source: u,
          field: h
        }));
      });
    });
    var C = {};
    return Pi(v, s, function(h, y) {
      var m = h.rule, P = (m.type === "object" || m.type === "array") && (typeof m.fields == "object" || typeof m.defaultField == "object");
      P = P && (m.required || !m.required && h.value), m.field = h.field;
      function F(_, $) {
        return He({}, $, {
          fullField: m.fullField + "." + _,
          fullFields: m.fullFields ? [].concat(m.fullFields, [_]) : [_]
        });
      }
      function R(_) {
        _ === void 0 && (_ = []);
        var $ = Array.isArray(_) ? _ : [_];
        !s.suppressWarning && $.length && t.warning("async-validator:", $), $.length && m.message !== void 0 && ($ = [].concat(m.message));
        var M = $.map(cn(m, u));
        if (s.first && M.length)
          return C[m.field] = 1, y(M);
        if (!P)
          y(M);
        else {
          if (m.required && !h.value)
            return m.message !== void 0 ? M = [].concat(m.message).map(cn(m, u)) : s.error && (M = [s.error(m, Fe(s.messages.required, m.field))]), y(M);
          var I = {};
          m.defaultField && Object.keys(h.value).map(function(E) {
            I[E] = m.defaultField;
          }), I = He({}, I, h.rule.fields);
          var j = {};
          Object.keys(I).forEach(function(E) {
            var p = I[E], b = Array.isArray(p) ? p : [p];
            j[E] = b.map(F.bind(null, E));
          });
          var D = new t(j);
          D.messages(s.messages), h.rule.options && (h.rule.options.messages = s.messages, h.rule.options.error = s.error), D.validate(h.value, h.rule.options || s, function(E) {
            var p = [];
            M && M.length && p.push.apply(p, M), E && E.length && p.push.apply(p, E), y(p.length ? p : null);
          });
        }
      }
      var g;
      if (m.asyncValidator)
        g = m.asyncValidator(m, h.value, R, h.source, s);
      else if (m.validator) {
        try {
          g = m.validator(m, h.value, R, h.source, s);
        } catch (_) {
          console.error == null || console.error(_), s.suppressValidatorError || setTimeout(function() {
            throw _;
          }, 0), R(_.message);
        }
        g === !0 ? R() : g === !1 ? R(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || (m.fullField || m.field) + " fails") : g instanceof Array ? R(g) : g instanceof Error && R(g.message);
      }
      g && g.then && g.then(function() {
        return R();
      }, function(_) {
        return R(_);
      });
    }, function(h) {
      l(h);
    }, u);
  }, r.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !mt.hasOwnProperty(n.type))
      throw new Error(Fe("Unknown rule type %s", n.type));
    return n.type || "string";
  }, r.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var a = Object.keys(n), i = a.indexOf("message");
    return i !== -1 && a.splice(i, 1), a.length === 1 && a[0] === "required" ? mt.required : mt[this.getType(n)] || void 0;
  }, t;
}();
wt.register = function(r, e) {
  if (typeof e != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  mt[r] = e;
};
wt.warning = Yn;
wt.messages = Fr;
wt.validators = mt;
var Ee = "'${name}' is not a valid ${type}", Bn = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: Ee,
    method: Ee,
    array: Ee,
    object: Ee,
    number: Ee,
    date: Ee,
    boolean: Ee,
    integer: Ee,
    float: Ee,
    regexp: Ee,
    email: Ee,
    url: Ee,
    hex: Ee
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
function Gn(t, r) {
  for (var e = t, n = 0; n < r.length; n += 1) {
    if (e == null)
      return;
    e = e[r[n]];
  }
  return e;
}
function Kn(t) {
  if (Array.isArray(t))
    return t;
}
function Jn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ki(t) {
  return Kn(t) || zn(t) || Ir(t) || Jn();
}
function Qn(t, r, e, n) {
  if (!r.length)
    return e;
  var a = Ki(r), i = a[0], o = a.slice(1), u;
  return !t && typeof i == "number" ? u = [] : Array.isArray(t) ? u = H(t) : u = A({}, t), n && e === void 0 && o.length === 1 ? delete u[i][o[0]] : u[i] = Qn(u[i], o, e, n), u;
}
function Ji(t, r, e) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return r.length && n && e === void 0 && !Gn(t, r.slice(0, -1)) ? t : Qn(t, r, e, n);
}
function Wt(t) {
  return Array.isArray(t) ? Zi(t) : ce(t) === "object" && t !== null ? Qi(t) : t;
}
function Qi(t) {
  if (Object.getPrototypeOf(t) === Object.prototype) {
    var r = {};
    for (var e in t)
      r[e] = Wt(t[e]);
    return r;
  }
  return t;
}
function Zi(t) {
  return t.map(function(r) {
    return Wt(r);
  });
}
function se(t) {
  return hr(t);
}
function We(t, r) {
  var e = Gn(t, r);
  return e;
}
function qe(t, r, e) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a = Ji(t, r, e, n);
  return a;
}
function vn(t, r) {
  var e = {};
  return r.forEach(function(n) {
    var a = We(t, n);
    e = qe(e, n, a);
  }), e;
}
function gt(t, r) {
  return t && t.some(function(e) {
    return Xn(e, r);
  });
}
function pn(t) {
  return ce(t) === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype;
}
function Zn(t, r) {
  var e = Array.isArray(t) ? H(t) : A({}, t);
  return r && Object.keys(r).forEach(function(n) {
    var a = e[n], i = r[n], o = pn(a) && pn(i);
    e[n] = o ? Zn(a, i || {}) : Wt(i);
  }), e;
}
function Vt(t) {
  for (var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    e[n - 1] = arguments[n];
  return e.reduce(function(a, i) {
    return Zn(a, i);
  }, t);
}
function Xn(t, r) {
  return !t || !r || t.length !== r.length ? !1 : t.every(function(e, n) {
    return r[n] === e;
  });
}
function Xi(t, r) {
  if (t === r)
    return !0;
  if (!t && r || t && !r || !t || !r || ce(t) !== "object" || ce(r) !== "object")
    return !1;
  var e = Object.keys(t), n = Object.keys(r), a = new Set([].concat(e, n));
  return H(a).every(function(i) {
    var o = t[i], u = r[i];
    return typeof o == "function" && typeof u == "function" ? !0 : o === u;
  });
}
function eo(t) {
  var r = arguments.length <= 1 ? void 0 : arguments[1];
  return r && r.target && ce(r.target) === "object" && t in r.target ? r.target[t] : r;
}
function mn(t, r, e) {
  var n = t.length;
  if (r < 0 || r >= n || e < 0 || e >= n)
    return t;
  var a = t[r], i = r - e;
  return i > 0 ? [].concat(H(t.slice(0, e)), [a], H(t.slice(e, r)), H(t.slice(r + 1, n))) : i < 0 ? [].concat(H(t.slice(0, r)), H(t.slice(r + 1, e + 1)), [a], H(t.slice(e + 1, n))) : t;
}
var to = wt;
function ro(t, r) {
  return t.replace(/\$\{\w+\}/g, function(e) {
    var n = e.slice(2, -1);
    return r[n];
  });
}
var gn = "CODE_LOGIC_ERROR";
function Cr(t, r, e, n, a) {
  return Sr.apply(this, arguments);
}
function Sr() {
  return Sr = qt(/* @__PURE__ */ De().mark(function t(r, e, n, a, i) {
    var o, u, s, f, l, d, v, w, C;
    return De().wrap(function(y) {
      for (; ; )
        switch (y.prev = y.next) {
          case 0:
            return o = A({}, n), delete o.ruleIndex, o.validator && (u = o.validator, o.validator = function() {
              try {
                return u.apply(void 0, arguments);
              } catch (m) {
                return console.error(m), Promise.reject(gn);
              }
            }), s = null, o && o.type === "array" && o.defaultField && (s = o.defaultField, delete o.defaultField), f = new to(q({}, r, [o])), l = Vt({}, Bn, a.validateMessages), f.messages(l), d = [], y.prev = 9, y.next = 12, Promise.resolve(f.validate(q({}, r, e), A({}, a)));
          case 12:
            y.next = 17;
            break;
          case 14:
            y.prev = 14, y.t0 = y.catch(9), y.t0.errors && (d = y.t0.errors.map(function(m, P) {
              var F = m.message, R = F === gn ? l.default : F;
              return /* @__PURE__ */ S.isValidElement(R) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ S.cloneElement(R, {
                  key: "error_".concat(P)
                })
              ) : R;
            }));
          case 17:
            if (!(!d.length && s)) {
              y.next = 22;
              break;
            }
            return y.next = 20, Promise.all(e.map(function(m, P) {
              return Cr("".concat(r, ".").concat(P), m, s, a, i);
            }));
          case 20:
            return v = y.sent, y.abrupt("return", v.reduce(function(m, P) {
              return [].concat(H(m), H(P));
            }, []));
          case 22:
            return w = A(A({}, n), {}, {
              name: r,
              enum: (n.enum || []).join(", ")
            }, i), C = d.map(function(m) {
              return typeof m == "string" ? ro(m, w) : m;
            }), y.abrupt("return", C);
          case 25:
          case "end":
            return y.stop();
        }
    }, t, null, [[9, 14]]);
  })), Sr.apply(this, arguments);
}
function no(t, r, e, n, a, i) {
  var o = t.join("."), u = e.map(function(l, d) {
    var v = l.validator, w = A(A({}, l), {}, {
      ruleIndex: d
    });
    return v && (w.validator = function(C, h, y) {
      var m = !1, P = function() {
        for (var g = arguments.length, _ = new Array(g), $ = 0; $ < g; $++)
          _[$] = arguments[$];
        Promise.resolve().then(function() {
          pe(!m, "Your validator function has already return a promise. `callback` will be ignored."), m || y.apply(void 0, _);
        });
      }, F = v(C, h, P);
      m = F && typeof F.then == "function" && typeof F.catch == "function", pe(m, "`callback` is deprecated. Please return a promise instead."), m && F.then(function() {
        y();
      }).catch(function(R) {
        y(R || " ");
      });
    }), w;
  }).sort(function(l, d) {
    var v = l.warningOnly, w = l.ruleIndex, C = d.warningOnly, h = d.ruleIndex;
    return !!v == !!C ? w - h : v ? 1 : -1;
  }), s;
  if (a === !0)
    s = new Promise(/* @__PURE__ */ function() {
      var l = qt(/* @__PURE__ */ De().mark(function d(v, w) {
        var C, h, y;
        return De().wrap(function(P) {
          for (; ; )
            switch (P.prev = P.next) {
              case 0:
                C = 0;
              case 1:
                if (!(C < u.length)) {
                  P.next = 12;
                  break;
                }
                return h = u[C], P.next = 5, Cr(o, r, h, n, i);
              case 5:
                if (y = P.sent, !y.length) {
                  P.next = 9;
                  break;
                }
                return w([{
                  errors: y,
                  rule: h
                }]), P.abrupt("return");
              case 9:
                C += 1, P.next = 1;
                break;
              case 12:
                v([]);
              case 13:
              case "end":
                return P.stop();
            }
        }, d);
      }));
      return function(d, v) {
        return l.apply(this, arguments);
      };
    }());
  else {
    var f = u.map(function(l) {
      return Cr(o, r, l, n, i).then(function(d) {
        return {
          errors: d,
          rule: l
        };
      });
    });
    s = (a ? io(f) : ao(f)).then(function(l) {
      return Promise.reject(l);
    });
  }
  return s.catch(function(l) {
    return l;
  }), s;
}
function ao(t) {
  return Pr.apply(this, arguments);
}
function Pr() {
  return Pr = qt(/* @__PURE__ */ De().mark(function t(r) {
    return De().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(r).then(function(a) {
              var i, o = (i = []).concat.apply(i, H(a));
              return o;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, t);
  })), Pr.apply(this, arguments);
}
function io(t) {
  return xr.apply(this, arguments);
}
function xr() {
  return xr = qt(/* @__PURE__ */ De().mark(function t(r) {
    var e;
    return De().wrap(function(a) {
      for (; ; )
        switch (a.prev = a.next) {
          case 0:
            return e = 0, a.abrupt("return", new Promise(function(i) {
              r.forEach(function(o) {
                o.then(function(u) {
                  u.errors.length && i([u]), e += 1, e === r.length && i([]);
                });
              });
            }));
          case 2:
          case "end":
            return a.stop();
        }
    }, t);
  })), xr.apply(this, arguments);
}
var oo = ["name"], Se = [];
function hn(t, r, e, n, a, i) {
  return typeof t == "function" ? t(r, e, "source" in i ? {
    source: i.source
  } : {}) : n !== a;
}
var jr = /* @__PURE__ */ function(t) {
  Lt(e, t);
  var r = Dt(e);
  function e(n) {
    var a;
    if (st(this, e), a = r.call(this, n), a.state = {
      resetCount: 0
    }, a.cancelRegisterFunc = null, a.mounted = !1, a.touched = !1, a.dirty = !1, a.validatePromise = null, a.prevValidating = void 0, a.errors = Se, a.warnings = Se, a.cancelRegister = function() {
      var s = a.props, f = s.preserve, l = s.isListField, d = s.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(l, f, se(d)), a.cancelRegisterFunc = null;
    }, a.getNamePath = function() {
      var s = a.props, f = s.name, l = s.fieldContext, d = l.prefixName, v = d === void 0 ? [] : d;
      return f !== void 0 ? [].concat(H(v), H(f)) : [];
    }, a.getRules = function() {
      var s = a.props, f = s.rules, l = f === void 0 ? [] : f, d = s.fieldContext;
      return l.map(function(v) {
        return typeof v == "function" ? v(d) : v;
      });
    }, a.refresh = function() {
      a.mounted && a.setState(function(s) {
        var f = s.resetCount;
        return {
          resetCount: f + 1
        };
      });
    }, a.triggerMetaEvent = function(s) {
      var f = a.props.onMetaChange;
      f == null || f(A(A({}, a.getMeta()), {}, {
        destroy: s
      }));
    }, a.onStoreChange = function(s, f, l) {
      var d = a.props, v = d.shouldUpdate, w = d.dependencies, C = w === void 0 ? [] : w, h = d.onReset, y = l.store, m = a.getNamePath(), P = a.getValue(s), F = a.getValue(y), R = f && gt(f, m);
      switch (l.type === "valueUpdate" && l.source === "external" && P !== F && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = Se, a.warnings = Se, a.triggerMetaEvent()), l.type) {
        case "reset":
          if (!f || R) {
            a.touched = !1, a.dirty = !1, a.validatePromise = null, a.errors = Se, a.warnings = Se, a.triggerMetaEvent(), h == null || h(), a.refresh();
            return;
          }
          break;
        case "remove": {
          if (v) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          if (R) {
            var g = l.data;
            "touched" in g && (a.touched = g.touched), "validating" in g && !("originRCField" in g) && (a.validatePromise = g.validating ? Promise.resolve([]) : null), "errors" in g && (a.errors = g.errors || Se), "warnings" in g && (a.warnings = g.warnings || Se), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          }
          if (v && !m.length && hn(v, s, y, P, F, l)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var _ = C.map(se);
          if (_.some(function($) {
            return gt(l.relatedFields, $);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (R || (!C.length || m.length || v) && hn(v, s, y, P, F, l)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }, a.validateRules = function(s) {
      var f = a.getNamePath(), l = a.getValue(), d = Promise.resolve().then(function() {
        if (!a.mounted)
          return [];
        var v = a.props, w = v.validateFirst, C = w === void 0 ? !1 : w, h = v.messageVariables, y = s || {}, m = y.triggerName, P = a.getRules();
        m && (P = P.filter(function(R) {
          return R;
        }).filter(function(R) {
          var g = R.validateTrigger;
          if (!g)
            return !0;
          var _ = hr(g);
          return _.includes(m);
        }));
        var F = no(f, l, P, s, C, h);
        return F.catch(function(R) {
          return R;
        }).then(function() {
          var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Se;
          if (a.validatePromise === d) {
            var g;
            a.validatePromise = null;
            var _ = [], $ = [];
            (g = R.forEach) === null || g === void 0 || g.call(R, function(M) {
              var I = M.rule.warningOnly, j = M.errors, D = j === void 0 ? Se : j;
              I ? $.push.apply($, H(D)) : _.push.apply(_, H(D));
            }), a.errors = _, a.warnings = $, a.triggerMetaEvent(), a.reRender();
          }
        }), F;
      });
      return a.validatePromise = d, a.dirty = !0, a.errors = Se, a.warnings = Se, a.triggerMetaEvent(), a.reRender(), d;
    }, a.isFieldValidating = function() {
      return !!a.validatePromise;
    }, a.isFieldTouched = function() {
      return a.touched;
    }, a.isFieldDirty = function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var s = a.props.fieldContext, f = s.getInternalHooks(Ye), l = f.getInitialValue;
      return l(a.getNamePath()) !== void 0;
    }, a.getErrors = function() {
      return a.errors;
    }, a.getWarnings = function() {
      return a.warnings;
    }, a.isListField = function() {
      return a.props.isListField;
    }, a.isList = function() {
      return a.props.isList;
    }, a.isPreserve = function() {
      return a.props.preserve;
    }, a.getMeta = function() {
      a.prevValidating = a.isFieldValidating();
      var s = {
        touched: a.isFieldTouched(),
        validating: a.prevValidating,
        errors: a.errors,
        warnings: a.warnings,
        name: a.getNamePath()
      };
      return s;
    }, a.getOnlyChild = function(s) {
      if (typeof s == "function") {
        var f = a.getMeta();
        return A(A({}, a.getOnlyChild(s(a.getControlled(), f, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var l = pr(s);
      return l.length !== 1 || !/* @__PURE__ */ S.isValidElement(l[0]) ? {
        child: l,
        isFunction: !1
      } : {
        child: l[0],
        isFunction: !1
      };
    }, a.getValue = function(s) {
      var f = a.props.fieldContext.getFieldsValue, l = a.getNamePath();
      return We(s || f(!0), l);
    }, a.getControlled = function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, f = a.props, l = f.trigger, d = f.validateTrigger, v = f.getValueFromEvent, w = f.normalize, C = f.valuePropName, h = f.getValueProps, y = f.fieldContext, m = d !== void 0 ? d : y.validateTrigger, P = a.getNamePath(), F = y.getInternalHooks, R = y.getFieldsValue, g = F(Ye), _ = g.dispatch, $ = a.getValue(), M = h || function(E) {
        return q({}, C, E);
      }, I = s[l], j = A(A({}, s), M($));
      j[l] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var E, p = arguments.length, b = new Array(p), O = 0; O < p; O++)
          b[O] = arguments[O];
        v ? E = v.apply(void 0, b) : E = eo.apply(void 0, [C].concat(b)), w && (E = w(E, $, R(!0))), _({
          type: "updateValue",
          namePath: P,
          value: E
        }), I && I.apply(void 0, b);
      };
      var D = hr(m || []);
      return D.forEach(function(E) {
        var p = j[E];
        j[E] = function() {
          p && p.apply(void 0, arguments);
          var b = a.props.rules;
          b && b.length && _({
            type: "validateField",
            namePath: P,
            triggerName: E
          });
        };
      }), j;
    }, n.fieldContext) {
      var i = n.fieldContext.getInternalHooks, o = i(Ye), u = o.initEntityValue;
      u(yt(a));
    }
    return a;
  }
  return ft(e, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.shouldUpdate, o = a.fieldContext;
      if (this.mounted = !0, o) {
        var u = o.getInternalHooks, s = u(Ye), f = s.registerField;
        this.cancelRegisterFunc = f(this);
      }
      i === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var a = this.state.resetCount, i = this.props.children, o = this.getOnlyChild(i), u = o.child, s = o.isFunction, f;
      return s ? f = u : /* @__PURE__ */ S.isValidElement(u) ? f = /* @__PURE__ */ S.cloneElement(u, this.getControlled(u.props)) : (pe(!u, "`children` of Field is not validate ReactElement."), f = u), /* @__PURE__ */ S.createElement(S.Fragment, {
        key: a
      }, f);
    }
  }]), e;
}(S.Component);
jr.contextType = ot;
jr.defaultProps = {
  trigger: "onChange",
  valuePropName: "value"
};
function ea(t) {
  var r = t.name, e = Be(t, oo), n = S.useContext(ot), a = r !== void 0 ? se(r) : void 0, i = "keep";
  return e.isListField || (i = "_".concat((a || []).join("_"))), process.env.NODE_ENV !== "production" && e.preserve === !1 && e.isListField && a.length <= 1 && pe(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ S.createElement(jr, ze({
    key: i,
    name: a
  }, e, {
    fieldContext: n
  }));
}
var uo = /* @__PURE__ */ S.createContext(null), so = function(r) {
  var e = r.name, n = r.initialValue, a = r.children, i = r.rules, o = r.validateTrigger, u = S.useContext(ot), s = S.useRef({
    keys: [],
    id: 0
  }), f = s.current, l = S.useMemo(function() {
    var C = se(u.prefixName) || [];
    return [].concat(H(C), H(se(e)));
  }, [u.prefixName, e]), d = S.useMemo(function() {
    return A(A({}, u), {}, {
      prefixName: l
    });
  }, [u, l]), v = S.useMemo(function() {
    return {
      getKey: function(h) {
        var y = l.length, m = h[y];
        return [f.keys[m], h.slice(y + 1)];
      }
    };
  }, [l]);
  if (typeof a != "function")
    return pe(!1, "Form.List only accepts function as children."), null;
  var w = function(h, y, m) {
    var P = m.source;
    return P === "internal" ? !1 : h !== y;
  };
  return /* @__PURE__ */ S.createElement(uo.Provider, {
    value: v
  }, /* @__PURE__ */ S.createElement(ot.Provider, {
    value: d
  }, /* @__PURE__ */ S.createElement(ea, {
    name: [],
    shouldUpdate: w,
    rules: i,
    validateTrigger: o,
    initialValue: n,
    isList: !0
  }, function(C, h) {
    var y = C.value, m = y === void 0 ? [] : y, P = C.onChange, F = u.getFieldValue, R = function() {
      var M = F(l || []);
      return M || [];
    }, g = {
      add: function(M, I) {
        var j = R();
        I >= 0 && I <= j.length ? (f.keys = [].concat(H(f.keys.slice(0, I)), [f.id], H(f.keys.slice(I))), P([].concat(H(j.slice(0, I)), [M], H(j.slice(I))))) : (process.env.NODE_ENV !== "production" && (I < 0 || I > j.length) && pe(!1, "The second parameter of the add function should be a valid positive number."), f.keys = [].concat(H(f.keys), [f.id]), P([].concat(H(j), [M]))), f.id += 1;
      },
      remove: function(M) {
        var I = R(), j = new Set(Array.isArray(M) ? M : [M]);
        j.size <= 0 || (f.keys = f.keys.filter(function(D, E) {
          return !j.has(E);
        }), P(I.filter(function(D, E) {
          return !j.has(E);
        })));
      },
      move: function(M, I) {
        if (M !== I) {
          var j = R();
          M < 0 || M >= j.length || I < 0 || I >= j.length || (f.keys = mn(f.keys, M, I), P(mn(j, M, I)));
        }
      }
    }, _ = m || [];
    return Array.isArray(_) || (_ = [], process.env.NODE_ENV !== "production" && pe(!1, "Current value of '".concat(l.join(" > "), "' is not an array type."))), a(_.map(function($, M) {
      var I = f.keys[M];
      return I === void 0 && (f.keys[M] = f.id, I = f.keys[M], f.id += 1), {
        name: M,
        key: I,
        isListField: !0
      };
    }), g, h);
  })));
};
function fo(t, r) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var n, a, i, o, u = [], s = !0, f = !1;
    try {
      if (i = (e = e.call(t)).next, r === 0) {
        if (Object(e) !== e)
          return;
        s = !1;
      } else
        for (; !(s = (n = i.call(e)).done) && (u.push(n.value), u.length !== r); s = !0)
          ;
    } catch (l) {
      f = !0, a = l;
    } finally {
      try {
        if (!s && e.return != null && (o = e.return(), Object(o) !== o))
          return;
      } finally {
        if (f)
          throw a;
      }
    }
    return u;
  }
}
function de(t, r) {
  return Kn(t) || fo(t, r) || Ir(t, r) || Jn();
}
function co(t) {
  var r = !1, e = t.length, n = [];
  return t.length ? new Promise(function(a, i) {
    t.forEach(function(o, u) {
      o.catch(function(s) {
        return r = !0, s;
      }).then(function(s) {
        e -= 1, n[u] = s, !(e > 0) && (r && i(n), a(n));
      });
    });
  }) : Promise.resolve([]);
}
var ta = "__@field_split__";
function Xt(t) {
  return t.map(function(r) {
    return "".concat(ce(r), ":").concat(r);
  }).join(ta);
}
var et = /* @__PURE__ */ function() {
  function t() {
    st(this, t), this.kvs = /* @__PURE__ */ new Map();
  }
  return ft(t, [{
    key: "set",
    value: function(e, n) {
      this.kvs.set(Xt(e), n);
    }
  }, {
    key: "get",
    value: function(e) {
      return this.kvs.get(Xt(e));
    }
  }, {
    key: "update",
    value: function(e, n) {
      var a = this.get(e), i = n(a);
      i ? this.set(e, i) : this.delete(e);
    }
  }, {
    key: "delete",
    value: function(e) {
      this.kvs.delete(Xt(e));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(e) {
      return H(this.kvs.entries()).map(function(n) {
        var a = de(n, 2), i = a[0], o = a[1], u = i.split(ta);
        return e({
          key: u.map(function(s) {
            var f = s.match(/^([^:]*):(.*)$/), l = de(f, 3), d = l[1], v = l[2];
            return d === "number" ? Number(v) : v;
          }),
          value: o
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var e = {};
      return this.map(function(n) {
        var a = n.key, i = n.value;
        return e[a.join(".")] = i, null;
      }), e;
    }
  }]), t;
}(), lo = ["name", "errors"], vo = /* @__PURE__ */ ft(function t(r) {
  var e = this;
  st(this, t), this.formHooked = !1, this.forceRootUpdate = void 0, this.subscribable = !0, this.store = {}, this.fieldEntities = [], this.initialValues = {}, this.callbacks = {}, this.validateMessages = null, this.preserve = null, this.lastValidatePromise = null, this.getForm = function() {
    return {
      getFieldValue: e.getFieldValue,
      getFieldsValue: e.getFieldsValue,
      getFieldError: e.getFieldError,
      getFieldWarning: e.getFieldWarning,
      getFieldsError: e.getFieldsError,
      isFieldsTouched: e.isFieldsTouched,
      isFieldTouched: e.isFieldTouched,
      isFieldValidating: e.isFieldValidating,
      isFieldsValidating: e.isFieldsValidating,
      resetFields: e.resetFields,
      setFields: e.setFields,
      setFieldValue: e.setFieldValue,
      setFieldsValue: e.setFieldsValue,
      validateFields: e.validateFields,
      submit: e.submit,
      _init: !0,
      getInternalHooks: e.getInternalHooks
    };
  }, this.getInternalHooks = function(n) {
    return n === Ye ? (e.formHooked = !0, {
      dispatch: e.dispatch,
      initEntityValue: e.initEntityValue,
      registerField: e.registerField,
      useSubscribe: e.useSubscribe,
      setInitialValues: e.setInitialValues,
      destroyForm: e.destroyForm,
      setCallbacks: e.setCallbacks,
      setValidateMessages: e.setValidateMessages,
      getFields: e.getFields,
      setPreserve: e.setPreserve,
      getInitialValue: e.getInitialValue,
      registerWatch: e.registerWatch
    }) : (pe(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }, this.useSubscribe = function(n) {
    e.subscribable = n;
  }, this.prevWithoutPreserves = null, this.setInitialValues = function(n, a) {
    if (e.initialValues = n || {}, a) {
      var i, o = Vt({}, n, e.store);
      (i = e.prevWithoutPreserves) === null || i === void 0 || i.map(function(u) {
        var s = u.key;
        o = qe(o, s, We(n, s));
      }), e.prevWithoutPreserves = null, e.updateStore(o);
    }
  }, this.destroyForm = function() {
    var n = new et();
    e.getFieldEntities(!0).forEach(function(a) {
      e.isMergedPreserve(a.isPreserve()) || n.set(a.getNamePath(), !0);
    }), e.prevWithoutPreserves = n;
  }, this.getInitialValue = function(n) {
    var a = We(e.initialValues, n);
    return n.length ? Wt(a) : a;
  }, this.setCallbacks = function(n) {
    e.callbacks = n;
  }, this.setValidateMessages = function(n) {
    e.validateMessages = n;
  }, this.setPreserve = function(n) {
    e.preserve = n;
  }, this.watchList = [], this.registerWatch = function(n) {
    return e.watchList.push(n), function() {
      e.watchList = e.watchList.filter(function(a) {
        return a !== n;
      });
    };
  }, this.notifyWatch = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (e.watchList.length) {
      var a = e.getFieldsValue();
      e.watchList.forEach(function(i) {
        i(a, n);
      });
    }
  }, this.timeoutId = null, this.warningUnhooked = function() {
    process.env.NODE_ENV !== "production" && !e.timeoutId && typeof window < "u" && (e.timeoutId = setTimeout(function() {
      e.timeoutId = null, e.formHooked || pe(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }, this.updateStore = function(n) {
    e.store = n;
  }, this.getFieldEntities = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? e.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : e.fieldEntities;
  }, this.getFieldsMap = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new et();
    return e.getFieldEntities(n).forEach(function(i) {
      var o = i.getNamePath();
      a.set(o, i);
    }), a;
  }, this.getFieldEntitiesForNamePathList = function(n) {
    if (!n)
      return e.getFieldEntities(!0);
    var a = e.getFieldsMap(!0);
    return n.map(function(i) {
      var o = se(i);
      return a.get(o) || {
        INVALIDATE_NAME_PATH: se(i)
      };
    });
  }, this.getFieldsValue = function(n, a) {
    if (e.warningUnhooked(), n === !0 && !a)
      return e.store;
    var i = e.getFieldEntitiesForNamePathList(Array.isArray(n) ? n : null), o = [];
    return i.forEach(function(u) {
      var s, f = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (!(!n && (!((s = u.isListField) === null || s === void 0) && s.call(u))))
        if (!a)
          o.push(f);
        else {
          var l = "getMeta" in u ? u.getMeta() : null;
          a(l) && o.push(f);
        }
    }), vn(e.store, o.map(se));
  }, this.getFieldValue = function(n) {
    e.warningUnhooked();
    var a = se(n);
    return We(e.store, a);
  }, this.getFieldsError = function(n) {
    e.warningUnhooked();
    var a = e.getFieldEntitiesForNamePathList(n);
    return a.map(function(i, o) {
      return i && !("INVALIDATE_NAME_PATH" in i) ? {
        name: i.getNamePath(),
        errors: i.getErrors(),
        warnings: i.getWarnings()
      } : {
        name: se(n[o]),
        errors: [],
        warnings: []
      };
    });
  }, this.getFieldError = function(n) {
    e.warningUnhooked();
    var a = se(n), i = e.getFieldsError([a])[0];
    return i.errors;
  }, this.getFieldWarning = function(n) {
    e.warningUnhooked();
    var a = se(n), i = e.getFieldsError([a])[0];
    return i.warnings;
  }, this.isFieldsTouched = function() {
    e.warningUnhooked();
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a[0], u = a[1], s, f = !1;
    a.length === 0 ? s = null : a.length === 1 ? Array.isArray(o) ? (s = o.map(se), f = !1) : (s = null, f = o) : (s = o.map(se), f = u);
    var l = e.getFieldEntities(!0), d = function(y) {
      return y.isFieldTouched();
    };
    if (!s)
      return f ? l.every(d) : l.some(d);
    var v = new et();
    s.forEach(function(h) {
      v.set(h, []);
    }), l.forEach(function(h) {
      var y = h.getNamePath();
      s.forEach(function(m) {
        m.every(function(P, F) {
          return y[F] === P;
        }) && v.update(m, function(P) {
          return [].concat(H(P), [h]);
        });
      });
    });
    var w = function(y) {
      return y.some(d);
    }, C = v.map(function(h) {
      var y = h.value;
      return y;
    });
    return f ? C.every(w) : C.some(w);
  }, this.isFieldTouched = function(n) {
    return e.warningUnhooked(), e.isFieldsTouched([n]);
  }, this.isFieldsValidating = function(n) {
    e.warningUnhooked();
    var a = e.getFieldEntities();
    if (!n)
      return a.some(function(o) {
        return o.isFieldValidating();
      });
    var i = n.map(se);
    return a.some(function(o) {
      var u = o.getNamePath();
      return gt(i, u) && o.isFieldValidating();
    });
  }, this.isFieldValidating = function(n) {
    return e.warningUnhooked(), e.isFieldsValidating([n]);
  }, this.resetWithFieldInitialValue = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new et(), i = e.getFieldEntities(!0);
    i.forEach(function(s) {
      var f = s.props.initialValue, l = s.getNamePath();
      if (f !== void 0) {
        var d = a.get(l) || /* @__PURE__ */ new Set();
        d.add({
          entity: s,
          value: f
        }), a.set(l, d);
      }
    });
    var o = function(f) {
      f.forEach(function(l) {
        var d = l.props.initialValue;
        if (d !== void 0) {
          var v = l.getNamePath(), w = e.getInitialValue(v);
          if (w !== void 0)
            pe(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var C = a.get(v);
            if (C && C.size > 1)
              pe(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (C) {
              var h = e.getFieldValue(v);
              (!n.skipExist || h === void 0) && e.updateStore(qe(e.store, v, H(C)[0].value));
            }
          }
        }
      });
    }, u;
    n.entities ? u = n.entities : n.namePathList ? (u = [], n.namePathList.forEach(function(s) {
      var f = a.get(s);
      if (f) {
        var l;
        (l = u).push.apply(l, H(H(f).map(function(d) {
          return d.entity;
        })));
      }
    })) : u = i, o(u);
  }, this.resetFields = function(n) {
    e.warningUnhooked();
    var a = e.store;
    if (!n) {
      e.updateStore(Vt({}, e.initialValues)), e.resetWithFieldInitialValue(), e.notifyObservers(a, null, {
        type: "reset"
      }), e.notifyWatch();
      return;
    }
    var i = n.map(se);
    i.forEach(function(o) {
      var u = e.getInitialValue(o);
      e.updateStore(qe(e.store, o, u));
    }), e.resetWithFieldInitialValue({
      namePathList: i
    }), e.notifyObservers(a, i, {
      type: "reset"
    }), e.notifyWatch(i);
  }, this.setFields = function(n) {
    e.warningUnhooked();
    var a = e.store, i = [];
    n.forEach(function(o) {
      var u = o.name;
      o.errors;
      var s = Be(o, lo), f = se(u);
      i.push(f), "value" in s && e.updateStore(qe(e.store, f, s.value)), e.notifyObservers(a, [f], {
        type: "setField",
        data: o
      });
    }), e.notifyWatch(i);
  }, this.getFields = function() {
    var n = e.getFieldEntities(!0), a = n.map(function(i) {
      var o = i.getNamePath(), u = i.getMeta(), s = A(A({}, u), {}, {
        name: o,
        value: e.getFieldValue(o)
      });
      return Object.defineProperty(s, "originRCField", {
        value: !0
      }), s;
    });
    return a;
  }, this.initEntityValue = function(n) {
    var a = n.props.initialValue;
    if (a !== void 0) {
      var i = n.getNamePath(), o = We(e.store, i);
      o === void 0 && e.updateStore(qe(e.store, i, a));
    }
  }, this.isMergedPreserve = function(n) {
    var a = n !== void 0 ? n : e.preserve;
    return a ?? !0;
  }, this.registerField = function(n) {
    e.fieldEntities.push(n);
    var a = n.getNamePath();
    if (e.notifyWatch([a]), n.props.initialValue !== void 0) {
      var i = e.store;
      e.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), e.notifyObservers(i, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(o, u) {
      var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (e.fieldEntities = e.fieldEntities.filter(function(d) {
        return d !== n;
      }), !e.isMergedPreserve(u) && (!o || s.length > 1)) {
        var f = o ? void 0 : e.getInitialValue(a);
        if (a.length && e.getFieldValue(a) !== f && e.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !Xn(d.getNamePath(), a)
          );
        })) {
          var l = e.store;
          e.updateStore(qe(l, a, f, !0)), e.notifyObservers(l, [a], {
            type: "remove"
          }), e.triggerDependenciesUpdate(l, a);
        }
      }
      e.notifyWatch([a]);
    };
  }, this.dispatch = function(n) {
    switch (n.type) {
      case "updateValue": {
        var a = n.namePath, i = n.value;
        e.updateValue(a, i);
        break;
      }
      case "validateField": {
        var o = n.namePath, u = n.triggerName;
        e.validateFields([o], {
          triggerName: u
        });
        break;
      }
    }
  }, this.notifyObservers = function(n, a, i) {
    if (e.subscribable) {
      var o = A(A({}, i), {}, {
        store: e.getFieldsValue(!0)
      });
      e.getFieldEntities().forEach(function(u) {
        var s = u.onStoreChange;
        s(n, a, o);
      });
    } else
      e.forceRootUpdate();
  }, this.triggerDependenciesUpdate = function(n, a) {
    var i = e.getDependencyChildrenFields(a);
    return i.length && e.validateFields(i), e.notifyObservers(n, i, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(H(i))
    }), i;
  }, this.updateValue = function(n, a) {
    var i = se(n), o = e.store;
    e.updateStore(qe(e.store, i, a)), e.notifyObservers(o, [i], {
      type: "valueUpdate",
      source: "internal"
    }), e.notifyWatch([i]);
    var u = e.triggerDependenciesUpdate(o, i), s = e.callbacks.onValuesChange;
    if (s) {
      var f = vn(e.store, [i]);
      s(f, e.getFieldsValue());
    }
    e.triggerOnFieldsChange([i].concat(H(u)));
  }, this.setFieldsValue = function(n) {
    e.warningUnhooked();
    var a = e.store;
    if (n) {
      var i = Vt(e.store, n);
      e.updateStore(i);
    }
    e.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), e.notifyWatch();
  }, this.setFieldValue = function(n, a) {
    e.setFields([{
      name: n,
      value: a
    }]);
  }, this.getDependencyChildrenFields = function(n) {
    var a = /* @__PURE__ */ new Set(), i = [], o = new et();
    e.getFieldEntities().forEach(function(s) {
      var f = s.props.dependencies;
      (f || []).forEach(function(l) {
        var d = se(l);
        o.update(d, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(s), v;
        });
      });
    });
    var u = function s(f) {
      var l = o.get(f) || /* @__PURE__ */ new Set();
      l.forEach(function(d) {
        if (!a.has(d)) {
          a.add(d);
          var v = d.getNamePath();
          d.isFieldDirty() && v.length && (i.push(v), s(v));
        }
      });
    };
    return u(n), i;
  }, this.triggerOnFieldsChange = function(n, a) {
    var i = e.callbacks.onFieldsChange;
    if (i) {
      var o = e.getFields();
      if (a) {
        var u = new et();
        a.forEach(function(f) {
          var l = f.name, d = f.errors;
          u.set(l, d);
        }), o.forEach(function(f) {
          f.errors = u.get(f.name) || f.errors;
        });
      }
      var s = o.filter(function(f) {
        var l = f.name;
        return gt(n, l);
      });
      i(s, o);
    }
  }, this.validateFields = function(n, a) {
    e.warningUnhooked();
    var i = !!n, o = i ? n.map(se) : [], u = [];
    e.getFieldEntities(!0).forEach(function(l) {
      if (i || o.push(l.getNamePath()), a != null && a.recursive && i) {
        var d = l.getNamePath();
        // nameList[i] === undefined 说明是以 nameList 开头的
        // ['name'] -> ['name','list']
        d.every(function(C, h) {
          return n[h] === C || n[h] === void 0;
        }) && o.push(d);
      }
      if (!(!l.props.rules || !l.props.rules.length)) {
        var v = l.getNamePath();
        if (!i || gt(o, v)) {
          var w = l.validateRules(A({
            validateMessages: A(A({}, Bn), e.validateMessages)
          }, a));
          u.push(w.then(function() {
            return {
              name: v,
              errors: [],
              warnings: []
            };
          }).catch(function(C) {
            var h, y = [], m = [];
            return (h = C.forEach) === null || h === void 0 || h.call(C, function(P) {
              var F = P.rule.warningOnly, R = P.errors;
              F ? m.push.apply(m, H(R)) : y.push.apply(y, H(R));
            }), y.length ? Promise.reject({
              name: v,
              errors: y,
              warnings: m
            }) : {
              name: v,
              errors: y,
              warnings: m
            };
          }));
        }
      }
    });
    var s = co(u);
    e.lastValidatePromise = s, s.catch(function(l) {
      return l;
    }).then(function(l) {
      var d = l.map(function(v) {
        var w = v.name;
        return w;
      });
      e.notifyObservers(e.store, d, {
        type: "validateFinish"
      }), e.triggerOnFieldsChange(d, l);
    });
    var f = s.then(function() {
      return e.lastValidatePromise === s ? Promise.resolve(e.getFieldsValue(o)) : Promise.reject([]);
    }).catch(function(l) {
      var d = l.filter(function(v) {
        return v && v.errors.length;
      });
      return Promise.reject({
        values: e.getFieldsValue(o),
        errorFields: d,
        outOfDate: e.lastValidatePromise !== s
      });
    });
    return f.catch(function(l) {
      return l;
    }), f;
  }, this.submit = function() {
    e.warningUnhooked(), e.validateFields().then(function(n) {
      var a = e.callbacks.onFinish;
      if (a)
        try {
          a(n);
        } catch (i) {
          console.error(i);
        }
    }).catch(function(n) {
      var a = e.callbacks.onFinishFailed;
      a && a(n);
    });
  }, this.forceRootUpdate = r;
});
function ra(t) {
  var r = S.useRef(), e = S.useState({}), n = de(e, 2), a = n[1];
  if (!r.current)
    if (t)
      r.current = t;
    else {
      var i = function() {
        a({});
      }, o = new vo(i);
      r.current = o.getForm();
    }
  return [r.current];
}
var Rr = /* @__PURE__ */ S.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), po = function(r) {
  var e = r.validateMessages, n = r.onFormChange, a = r.onFormFinish, i = r.children, o = S.useContext(Rr), u = S.useRef({});
  return /* @__PURE__ */ S.createElement(Rr.Provider, {
    value: A(A({}, o), {}, {
      validateMessages: A(A({}, o.validateMessages), e),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(f, l) {
        n && n(f, {
          changedFields: l,
          forms: u.current
        }), o.triggerFormChange(f, l);
      },
      triggerFormFinish: function(f, l) {
        a && a(f, {
          values: l,
          forms: u.current
        }), o.triggerFormFinish(f, l);
      },
      registerForm: function(f, l) {
        f && (u.current = A(A({}, u.current), {}, q({}, f, l))), o.registerForm(f, l);
      },
      unregisterForm: function(f) {
        var l = A({}, u.current);
        delete l[f], u.current = l, o.unregisterForm(f);
      }
    })
  }, i);
}, mo = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], go = function(r, e) {
  var n = r.name, a = r.initialValues, i = r.fields, o = r.form, u = r.preserve, s = r.children, f = r.component, l = f === void 0 ? "form" : f, d = r.validateMessages, v = r.validateTrigger, w = v === void 0 ? "onChange" : v, C = r.onValuesChange, h = r.onFieldsChange, y = r.onFinish, m = r.onFinishFailed, P = Be(r, mo), F = S.useContext(Rr), R = ra(o), g = de(R, 1), _ = g[0], $ = _.getInternalHooks(Ye), M = $.useSubscribe, I = $.setInitialValues, j = $.setCallbacks, D = $.setValidateMessages, E = $.setPreserve, p = $.destroyForm;
  S.useImperativeHandle(e, function() {
    return _;
  }), S.useEffect(function() {
    return F.registerForm(n, _), function() {
      F.unregisterForm(n);
    };
  }, [F, _, n]), D(A(A({}, F.validateMessages), d)), j({
    onValuesChange: C,
    onFieldsChange: function(B) {
      if (F.triggerFormChange(n, B), h) {
        for (var Z = arguments.length, ve = new Array(Z > 1 ? Z - 1 : 0), ge = 1; ge < Z; ge++)
          ve[ge - 1] = arguments[ge];
        h.apply(void 0, [B].concat(ve));
      }
    },
    onFinish: function(B) {
      F.triggerFormFinish(n, B), y && y(B);
    },
    onFinishFailed: m
  }), E(u);
  var b = S.useRef(null);
  I(a, !b.current), b.current || (b.current = !0), S.useEffect(
    function() {
      return p;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var O, V = typeof s == "function";
  if (V) {
    var N = _.getFieldsValue(!0);
    O = s(N, _);
  } else
    O = s;
  M(!V);
  var W = S.useRef();
  S.useEffect(function() {
    Xi(W.current || [], i || []) || _.setFields(i || []), W.current = i;
  }, [i, _]);
  var ee = S.useMemo(function() {
    return A(A({}, _), {}, {
      validateTrigger: w
    });
  }, [_, w]), K = /* @__PURE__ */ S.createElement(ot.Provider, {
    value: ee
  }, O);
  return l === !1 ? K : /* @__PURE__ */ S.createElement(l, ze({}, P, {
    onSubmit: function(B) {
      B.preventDefault(), B.stopPropagation(), _.submit();
    },
    onReset: function(B) {
      var Z;
      B.preventDefault(), _.resetFields(), (Z = P.onReset) === null || Z === void 0 || Z.call(P, B);
    }
  }), K);
};
function yn(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return Math.random();
  }
}
var ho = process.env.NODE_ENV !== "production" ? function(t) {
  var r = t.join("__RC_FIELD_FORM_SPLIT__"), e = ke(r);
  pe(e.current === r, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function yo() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  var n = r[0], a = n === void 0 ? [] : n, i = r[1], o = Ba(), u = de(o, 2), s = u[0], f = u[1], l = Ga(function() {
    return yn(s);
  }, [s]), d = ke(l);
  d.current = l;
  var v = Ln(ot), w = i || v, C = w && w._init;
  process.env.NODE_ENV !== "production" && pe(r.length === 2 ? i ? C : !0 : C, "useWatch requires a form instance since it can not auto detect from context.");
  var h = se(a), y = ke(h);
  return y.current = h, ho(h), at(
    function() {
      if (C) {
        var m = w.getFieldsValue, P = w.getInternalHooks, F = P(Ye), R = F.registerWatch, g = R(function($) {
          var M = We($, y.current), I = yn(M);
          d.current !== I && (d.current = I, f(M));
        }), _ = We(m(), y.current);
        return f(_), g;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [C]
  ), s;
}
var bo = /* @__PURE__ */ S.forwardRef(go), Ft = bo;
Ft.FormProvider = po;
Ft.Field = ea;
Ft.List = so;
Ft.useForm = ra;
Ft.useWatch = yo;
function Eo() {
}
var na = Eo;
process.env.NODE_ENV !== "production" && (na = function(r, e, n) {
  pe(r, "[antd: ".concat(e, "] ").concat(n)), process.env.NODE_ENV === "test" && fi();
});
const Or = na;
function Pe(t, r) {
  wo(t) && (t = "100%");
  var e = Fo(t);
  return t = r === 360 ? t : Math.min(r, Math.max(0, parseFloat(t))), e && (t = parseInt(String(t * r), 10) / 100), Math.abs(t - r) < 1e-6 ? 1 : (r === 360 ? t = (t < 0 ? t % r + r : t % r) / parseFloat(String(r)) : t = t % r / parseFloat(String(r)), t);
}
function wo(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function Fo(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function Co(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function Pt(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function er(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function So(t, r, e) {
  return {
    r: Pe(t, 255) * 255,
    g: Pe(r, 255) * 255,
    b: Pe(e, 255) * 255
  };
}
function tr(t, r, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? t + (r - t) * (6 * e) : e < 1 / 2 ? r : e < 2 / 3 ? t + (r - t) * (2 / 3 - e) * 6 : t;
}
function Po(t, r, e) {
  var n, a, i;
  if (t = Pe(t, 360), r = Pe(r, 100), e = Pe(e, 100), r === 0)
    a = e, i = e, n = e;
  else {
    var o = e < 0.5 ? e * (1 + r) : e + r - e * r, u = 2 * e - o;
    n = tr(u, o, t + 1 / 3), a = tr(u, o, t), i = tr(u, o, t - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: i * 255 };
}
function xo(t, r, e) {
  t = Pe(t, 255), r = Pe(r, 255), e = Pe(e, 255);
  var n = Math.max(t, r, e), a = Math.min(t, r, e), i = 0, o = n, u = n - a, s = n === 0 ? 0 : u / n;
  if (n === a)
    i = 0;
  else {
    switch (n) {
      case t:
        i = (r - e) / u + (r < e ? 6 : 0);
        break;
      case r:
        i = (e - t) / u + 2;
        break;
      case e:
        i = (t - r) / u + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s, v: o };
}
function Ro(t, r, e) {
  t = Pe(t, 360) * 6, r = Pe(r, 100), e = Pe(e, 100);
  var n = Math.floor(t), a = t - n, i = e * (1 - r), o = e * (1 - a * r), u = e * (1 - (1 - a) * r), s = n % 6, f = [e, o, i, i, u, e][s], l = [u, e, e, o, i, i][s], d = [i, i, u, e, e, o][s];
  return { r: f * 255, g: l * 255, b: d * 255 };
}
function Oo(t, r, e, n) {
  var a = [
    er(Math.round(t).toString(16)),
    er(Math.round(r).toString(16)),
    er(Math.round(e).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function bn(t) {
  return we(t) / 255;
}
function we(t) {
  return parseInt(t, 16);
}
var En = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function vt(t) {
  var r = { r: 0, g: 0, b: 0 }, e = 1, n = null, a = null, i = null, o = !1, u = !1;
  return typeof t == "string" && (t = Ao(t)), typeof t == "object" && (je(t.r) && je(t.g) && je(t.b) ? (r = So(t.r, t.g, t.b), o = !0, u = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : je(t.h) && je(t.s) && je(t.v) ? (n = Pt(t.s), a = Pt(t.v), r = Ro(t.h, n, a), o = !0, u = "hsv") : je(t.h) && je(t.s) && je(t.l) && (n = Pt(t.s), i = Pt(t.l), r = Po(t.h, n, i), o = !0, u = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (e = t.a)), e = Co(e), {
    ok: o,
    format: t.format || u,
    r: Math.min(255, Math.max(r.r, 0)),
    g: Math.min(255, Math.max(r.g, 0)),
    b: Math.min(255, Math.max(r.b, 0)),
    a: e
  };
}
var To = "[-\\+]?\\d+%?", _o = "[-\\+]?\\d*\\.\\d+%?", Ue = "(?:".concat(_o, ")|(?:").concat(To, ")"), rr = "[\\s|\\(]+(".concat(Ue, ")[,|\\s]+(").concat(Ue, ")[,|\\s]+(").concat(Ue, ")\\s*\\)?"), nr = "[\\s|\\(]+(".concat(Ue, ")[,|\\s]+(").concat(Ue, ")[,|\\s]+(").concat(Ue, ")[,|\\s]+(").concat(Ue, ")\\s*\\)?"), Te = {
  CSS_UNIT: new RegExp(Ue),
  rgb: new RegExp("rgb" + rr),
  rgba: new RegExp("rgba" + nr),
  hsl: new RegExp("hsl" + rr),
  hsla: new RegExp("hsla" + nr),
  hsv: new RegExp("hsv" + rr),
  hsva: new RegExp("hsva" + nr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Ao(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var r = !1;
  if (En[t])
    t = En[t], r = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var e = Te.rgb.exec(t);
  return e ? { r: e[1], g: e[2], b: e[3] } : (e = Te.rgba.exec(t), e ? { r: e[1], g: e[2], b: e[3], a: e[4] } : (e = Te.hsl.exec(t), e ? { h: e[1], s: e[2], l: e[3] } : (e = Te.hsla.exec(t), e ? { h: e[1], s: e[2], l: e[3], a: e[4] } : (e = Te.hsv.exec(t), e ? { h: e[1], s: e[2], v: e[3] } : (e = Te.hsva.exec(t), e ? { h: e[1], s: e[2], v: e[3], a: e[4] } : (e = Te.hex8.exec(t), e ? {
    r: we(e[1]),
    g: we(e[2]),
    b: we(e[3]),
    a: bn(e[4]),
    format: r ? "name" : "hex8"
  } : (e = Te.hex6.exec(t), e ? {
    r: we(e[1]),
    g: we(e[2]),
    b: we(e[3]),
    format: r ? "name" : "hex"
  } : (e = Te.hex4.exec(t), e ? {
    r: we(e[1] + e[1]),
    g: we(e[2] + e[2]),
    b: we(e[3] + e[3]),
    a: bn(e[4] + e[4]),
    format: r ? "name" : "hex8"
  } : (e = Te.hex3.exec(t), e ? {
    r: we(e[1] + e[1]),
    g: we(e[2] + e[2]),
    b: we(e[3] + e[3]),
    format: r ? "name" : "hex"
  } : !1)))))))));
}
function je(t) {
  return Boolean(Te.CSS_UNIT.exec(String(t)));
}
var xt = 2, wn = 0.16, No = 0.05, ko = 0.05, Vo = 0.15, aa = 5, ia = 4, Mo = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function Fn(t) {
  var r = t.r, e = t.g, n = t.b, a = xo(r, e, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Rt(t) {
  var r = t.r, e = t.g, n = t.b;
  return "#".concat(Oo(r, e, n, !1));
}
function $o(t, r, e) {
  var n = e / 100, a = {
    r: (r.r - t.r) * n + t.r,
    g: (r.g - t.g) * n + t.g,
    b: (r.b - t.b) * n + t.b
  };
  return a;
}
function Cn(t, r, e) {
  var n;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? n = e ? Math.round(t.h) - xt * r : Math.round(t.h) + xt * r : n = e ? Math.round(t.h) + xt * r : Math.round(t.h) - xt * r, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Sn(t, r, e) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var n;
  return e ? n = t.s - wn * r : r === ia ? n = t.s + wn : n = t.s + No * r, n > 1 && (n = 1), e && r === aa && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Pn(t, r, e) {
  var n;
  return e ? n = t.v + ko * r : n = t.v - Vo * r, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Tr(t) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], n = vt(t), a = aa; a > 0; a -= 1) {
    var i = Fn(n), o = Rt(vt({
      h: Cn(i, a, !0),
      s: Sn(i, a, !0),
      v: Pn(i, a, !0)
    }));
    e.push(o);
  }
  e.push(Rt(n));
  for (var u = 1; u <= ia; u += 1) {
    var s = Fn(n), f = Rt(vt({
      h: Cn(s, u),
      s: Sn(s, u),
      v: Pn(s, u)
    }));
    e.push(f);
  }
  return r.theme === "dark" ? Mo.map(function(l) {
    var d = l.index, v = l.opacity, w = Rt($o(vt(r.backgroundColor || "#141414"), vt(e[d]), v * 100));
    return w;
  }) : e;
}
var ar = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, ir = {}, or = {};
Object.keys(ar).forEach(function(t) {
  ir[t] = Tr(ar[t]), ir[t].primary = ir[t][5], or[t] = Tr(ar[t], {
    theme: "dark",
    backgroundColor: "#141414"
  }), or[t].primary = or[t][5];
});
function Ut() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Io(t, r) {
  if (!t)
    return !1;
  if (t.contains)
    return t.contains(r);
  for (var e = r; e; ) {
    if (e === t)
      return !0;
    e = e.parentNode;
  }
  return !1;
}
var xn = "data-rc-order", jo = "rc-util-key", _r = /* @__PURE__ */ new Map();
function oa() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.mark;
  return r ? r.startsWith("data-") ? r : "data-".concat(r) : jo;
}
function Lr(t) {
  if (t.attachTo)
    return t.attachTo;
  var r = document.querySelector("head");
  return r || document.body;
}
function Lo(t) {
  return t === "queue" ? "prependQueue" : t ? "prepend" : "append";
}
function ua(t) {
  return Array.from((_r.get(t) || t).children).filter(function(r) {
    return r.tagName === "STYLE";
  });
}
function sa(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ut())
    return null;
  var e = r.csp, n = r.prepend, a = document.createElement("style");
  a.setAttribute(xn, Lo(n)), e != null && e.nonce && (a.nonce = e == null ? void 0 : e.nonce), a.innerHTML = t;
  var i = Lr(r), o = i.firstChild;
  if (n) {
    if (n === "queue") {
      var u = ua(i).filter(function(s) {
        return ["prepend", "prependQueue"].includes(s.getAttribute(xn));
      });
      if (u.length)
        return i.insertBefore(a, u[u.length - 1].nextSibling), a;
    }
    i.insertBefore(a, o);
  } else
    i.appendChild(a);
  return a;
}
function Do(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = Lr(r);
  return ua(e).find(function(n) {
    return n.getAttribute(oa(r)) === t;
  });
}
function qo(t, r) {
  var e = _r.get(t);
  if (!e || !Io(document, e)) {
    var n = sa("", r), a = n.parentNode;
    _r.set(t, a), t.removeChild(n);
  }
}
function fa(t, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Lr(e);
  qo(n, e);
  var a = Do(r, e);
  if (a) {
    var i, o;
    if ((i = e.csp) !== null && i !== void 0 && i.nonce && a.nonce !== ((o = e.csp) === null || o === void 0 ? void 0 : o.nonce)) {
      var u;
      a.nonce = (u = e.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return a.innerHTML !== t && (a.innerHTML = t), a;
  }
  var s = sa(t, e);
  return s.setAttribute(oa(e), r), s;
}
function Wo(t, r) {
  pe(t, "[@ant-design/icons] ".concat(r));
}
function Rn(t) {
  return ce(t) === "object" && typeof t.name == "string" && typeof t.theme == "string" && (ce(t.icon) === "object" || typeof t.icon == "function");
}
function On() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(t).reduce(function(r, e) {
    var n = t[e];
    switch (e) {
      case "class":
        r.className = n, delete r.class;
        break;
      default:
        r[e] = n;
    }
    return r;
  }, {});
}
function Ar(t, r, e) {
  return e ? /* @__PURE__ */ _e.createElement(t.tag, A(A({
    key: r
  }, On(t.attrs)), e), (t.children || []).map(function(n, a) {
    return Ar(n, "".concat(r, "-").concat(t.tag, "-").concat(a));
  })) : /* @__PURE__ */ _e.createElement(t.tag, A({
    key: r
  }, On(t.attrs)), (t.children || []).map(function(n, a) {
    return Ar(n, "".concat(r, "-").concat(t.tag, "-").concat(a));
  }));
}
function ca(t) {
  return Tr(t)[0];
}
function la(t) {
  return t ? Array.isArray(t) ? t : [t] : [];
}
var Uo = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, zo = function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Uo, e = Ln(Un), n = e.csp;
  at(function() {
    fa(r, "@ant-design-icons", {
      prepend: !0,
      csp: n
    });
  }, []);
}, Yo = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], ht = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Ho(t) {
  var r = t.primaryColor, e = t.secondaryColor;
  ht.primaryColor = r, ht.secondaryColor = e || ca(r), ht.calculated = !!e;
}
function Bo() {
  return A({}, ht);
}
var zt = function(r) {
  var e = r.icon, n = r.className, a = r.onClick, i = r.style, o = r.primaryColor, u = r.secondaryColor, s = Be(r, Yo), f = ht;
  if (o && (f = {
    primaryColor: o,
    secondaryColor: u || ca(o)
  }), zo(), Wo(Rn(e), "icon should be icon definiton, but got ".concat(e)), !Rn(e))
    return null;
  var l = e;
  return l && typeof l.icon == "function" && (l = A(A({}, l), {}, {
    icon: l.icon(f.primaryColor, f.secondaryColor)
  })), Ar(l.icon, "svg-".concat(l.name), A({
    className: n,
    onClick: a,
    style: i,
    "data-icon": l.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, s));
};
zt.displayName = "IconReact";
zt.getTwoToneColors = Bo;
zt.setTwoToneColors = Ho;
const Dr = zt;
function da(t) {
  var r = la(t), e = de(r, 2), n = e[0], a = e[1];
  return Dr.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function Go() {
  var t = Dr.getTwoToneColors();
  return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor;
}
var Ko = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
da("#1890ff");
var Yt = /* @__PURE__ */ S.forwardRef(function(t, r) {
  var e, n = t.className, a = t.icon, i = t.spin, o = t.rotate, u = t.tabIndex, s = t.onClick, f = t.twoToneColor, l = Be(t, Ko), d = S.useContext(Un), v = d.prefixCls, w = v === void 0 ? "anticon" : v, C = d.rootClassName, h = Et(C, w, (e = {}, q(e, "".concat(w, "-").concat(a.name), !!a.name), q(e, "".concat(w, "-spin"), !!i || a.name === "loading"), e), n), y = u;
  y === void 0 && s && (y = -1);
  var m = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, P = la(f), F = de(P, 2), R = F[0], g = F[1];
  return /* @__PURE__ */ S.createElement("span", A(A({
    role: "img",
    "aria-label": a.name
  }, l), {}, {
    ref: r,
    tabIndex: y,
    onClick: s,
    className: h
  }), /* @__PURE__ */ S.createElement(Dr, {
    icon: a,
    primaryColor: R,
    secondaryColor: g,
    style: m
  }));
});
Yt.displayName = "AntdIcon";
Yt.getTwoToneColor = Go;
Yt.setTwoToneColor = da;
const Jo = Yt;
var Qo = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const Zo = Qo;
var va = function(r, e) {
  return /* @__PURE__ */ S.createElement(Jo, A(A({}, r), {}, {
    ref: e,
    icon: Zo
  }));
};
va.displayName = "LoadingOutlined";
const Tn = /* @__PURE__ */ S.forwardRef(va);
function _n(t, r) {
  var e = {};
  return e[t.toLowerCase()] = r.toLowerCase(), e["Webkit".concat(t)] = "webkit".concat(r), e["Moz".concat(t)] = "moz".concat(r), e["ms".concat(t)] = "MS".concat(r), e["O".concat(t)] = "o".concat(r.toLowerCase()), e;
}
function Xo(t, r) {
  var e = {
    animationend: _n("Animation", "AnimationEnd"),
    transitionend: _n("Transition", "TransitionEnd")
  };
  return t && ("AnimationEvent" in r || delete e.animationend.animation, "TransitionEvent" in r || delete e.transitionend.transition), e;
}
var eu = Xo(Ut(), typeof window < "u" ? window : {}), pa = {};
if (Ut()) {
  var tu = document.createElement("div");
  pa = tu.style;
}
var Ot = {};
function ma(t) {
  if (Ot[t])
    return Ot[t];
  var r = eu[t];
  if (r)
    for (var e = Object.keys(r), n = e.length, a = 0; a < n; a += 1) {
      var i = e[a];
      if (Object.prototype.hasOwnProperty.call(r, i) && i in pa)
        return Ot[t] = r[i], Ot[t];
    }
  return "";
}
var ga = ma("animationend"), ha = ma("transitionend"), ya = !!(ga && ha), An = ga || "animationend", Nn = ha || "transitionend";
function kn(t, r) {
  if (!t)
    return null;
  if (ce(t) === "object") {
    var e = r.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return t[e];
  }
  return "".concat(t, "-").concat(r);
}
var tt = "none", Tt = "appear", _t = "enter", At = "leave", Vn = "none", Le = "prepare", rt = "start", nt = "active", qr = "end";
function Mt(t) {
  var r = S.useRef(!1), e = S.useState(t), n = de(e, 2), a = n[0], i = n[1];
  S.useEffect(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
  function o(u, s) {
    s && r.current || i(u);
  }
  return [a, o];
}
var ba = function(r) {
  return +setTimeout(r, 16);
}, Ea = function(r) {
  return clearTimeout(r);
};
typeof window < "u" && "requestAnimationFrame" in window && (ba = function(r) {
  return window.requestAnimationFrame(r);
}, Ea = function(r) {
  return window.cancelAnimationFrame(r);
});
var Mn = 0, Wr = /* @__PURE__ */ new Map();
function wa(t) {
  Wr.delete(t);
}
var ut = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Mn += 1;
  var n = Mn;
  function a(i) {
    if (i === 0)
      wa(n), r();
    else {
      var o = ba(function() {
        a(i - 1);
      });
      Wr.set(n, o);
    }
  }
  return a(e), n;
};
ut.cancel = function(t) {
  var r = Wr.get(t);
  return wa(r), Ea(r);
};
const ru = function() {
  var t = S.useRef(null);
  function r() {
    ut.cancel(t.current);
  }
  function e(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    r();
    var i = ut(function() {
      a <= 1 ? n({
        isCanceled: function() {
          return i !== t.current;
        }
      }) : e(n, a - 1);
    });
    t.current = i;
  }
  return S.useEffect(function() {
    return function() {
      r();
    };
  }, []), [e, r];
};
var Fa = Ut() ? Ka : at, $n = [Le, rt, nt, qr], Ca = !1, nu = !0;
function Sa(t) {
  return t === nt || t === qr;
}
const au = function(t, r) {
  var e = Mt(Vn), n = de(e, 2), a = n[0], i = n[1], o = ru(), u = de(o, 2), s = u[0], f = u[1];
  function l() {
    i(Le, !0);
  }
  return Fa(function() {
    if (a !== Vn && a !== qr) {
      var d = $n.indexOf(a), v = $n[d + 1], w = r(a);
      w === Ca ? i(v, !0) : s(function(C) {
        function h() {
          C.isCanceled() || i(v, !0);
        }
        w === !0 ? h() : Promise.resolve(w).then(h);
      });
    }
  }, [t, a]), S.useEffect(function() {
    return function() {
      f();
    };
  }, []), [l, a];
}, iu = function(t) {
  var r = ke(), e = ke(t);
  e.current = t;
  var n = S.useCallback(function(o) {
    e.current(o);
  }, []);
  function a(o) {
    o && (o.removeEventListener(Nn, n), o.removeEventListener(An, n));
  }
  function i(o) {
    r.current && r.current !== o && a(r.current), o && o !== r.current && (o.addEventListener(Nn, n), o.addEventListener(An, n), r.current = o);
  }
  return S.useEffect(function() {
    return function() {
      a(r.current);
    };
  }, []), [i, a];
};
function ou(t, r, e, n) {
  var a = n.motionEnter, i = a === void 0 ? !0 : a, o = n.motionAppear, u = o === void 0 ? !0 : o, s = n.motionLeave, f = s === void 0 ? !0 : s, l = n.motionDeadline, d = n.motionLeaveImmediately, v = n.onAppearPrepare, w = n.onEnterPrepare, C = n.onLeavePrepare, h = n.onAppearStart, y = n.onEnterStart, m = n.onLeaveStart, P = n.onAppearActive, F = n.onEnterActive, R = n.onLeaveActive, g = n.onAppearEnd, _ = n.onEnterEnd, $ = n.onLeaveEnd, M = n.onVisibleChanged, I = Mt(), j = de(I, 2), D = j[0], E = j[1], p = Mt(tt), b = de(p, 2), O = b[0], V = b[1], N = Mt(null), W = de(N, 2), ee = W[0], K = W[1], ie = ke(!1), B = ke(null);
  function Z() {
    return e();
  }
  var ve = ke(!1);
  function ge(ae) {
    var ne = Z();
    if (!(ae && !ae.deadline && ae.target !== ne)) {
      var oe = ve.current, $e;
      O === Tt && oe ? $e = g == null ? void 0 : g(ne, ae) : O === _t && oe ? $e = _ == null ? void 0 : _(ne, ae) : O === At && oe && ($e = $ == null ? void 0 : $(ne, ae)), O !== tt && oe && $e !== !1 && (V(tt, !0), K(null, !0));
    }
  }
  var Ve = iu(ge), be = de(Ve, 1), xe = be[0], re = S.useMemo(function() {
    var ae, ne, oe;
    switch (O) {
      case Tt:
        return ae = {}, q(ae, Le, v), q(ae, rt, h), q(ae, nt, P), ae;
      case _t:
        return ne = {}, q(ne, Le, w), q(ne, rt, y), q(ne, nt, F), ne;
      case At:
        return oe = {}, q(oe, Le, C), q(oe, rt, m), q(oe, nt, R), oe;
      default:
        return {};
    }
  }, [O]), Re = au(O, function(ae) {
    if (ae === Le) {
      var ne = re[Le];
      return ne ? ne(Z()) : Ca;
    }
    if (he in re) {
      var oe;
      K(((oe = re[he]) === null || oe === void 0 ? void 0 : oe.call(re, Z(), null)) || null);
    }
    return he === nt && (xe(Z()), l > 0 && (clearTimeout(B.current), B.current = setTimeout(function() {
      ge({
        deadline: !0
      });
    }, l))), nu;
  }), Me = de(Re, 2), k = Me[0], he = Me[1], Ae = Sa(he);
  ve.current = Ae, Fa(function() {
    E(r);
    var ae = ie.current;
    if (ie.current = !0, !!t) {
      var ne;
      !ae && r && u && (ne = Tt), ae && r && i && (ne = _t), (ae && !r && f || !ae && d && !r && f) && (ne = At), ne && (V(ne), k());
    }
  }, [r]), at(function() {
    // Cancel appear
    (O === Tt && !u || // Cancel enter
    O === _t && !i || // Cancel leave
    O === At && !f) && V(tt);
  }, [u, i, f]), at(function() {
    return function() {
      ie.current = !1, clearTimeout(B.current);
    };
  }, []);
  var ye = S.useRef(!1);
  at(function() {
    D && (ye.current = !0), D !== void 0 && O === tt && ((ye.current || D) && (M == null || M(D)), ye.current = !0);
  }, [D, O]);
  var Oe = ee;
  return re[Le] && he === rt && (Oe = A({
    transition: "none"
  }, Oe)), [O, he, Oe, D ?? r];
}
var uu = /* @__PURE__ */ function(t) {
  Lt(e, t);
  var r = Dt(e);
  function e() {
    return st(this, e), r.apply(this, arguments);
  }
  return ft(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(S.Component);
function su(t) {
  var r = t;
  ce(t) === "object" && (r = t.transitionSupport);
  function e(a) {
    return !!(a.motionName && r);
  }
  var n = /* @__PURE__ */ S.forwardRef(function(a, i) {
    var o = a.visible, u = o === void 0 ? !0 : o, s = a.removeOnLeave, f = s === void 0 ? !0 : s, l = a.forceRender, d = a.children, v = a.motionName, w = a.leavedClassName, C = a.eventProps, h = e(a), y = ke(), m = ke();
    function P() {
      try {
        return y.current instanceof HTMLElement ? y.current : di(m.current);
      } catch {
        return null;
      }
    }
    var F = ou(h, u, P, a), R = de(F, 4), g = R[0], _ = R[1], $ = R[2], M = R[3], I = S.useRef(M);
    M && (I.current = !0);
    var j = S.useCallback(function(N) {
      y.current = N, qn(i, N);
    }, [i]), D, E = A(A({}, C), {}, {
      visible: u
    });
    if (!d)
      D = null;
    else if (g === tt || !e(a))
      M ? D = d(A({}, E), j) : !f && I.current && w ? D = d(A(A({}, E), {}, {
        className: w
      }), j) : l || !f && !w ? D = d(A(A({}, E), {}, {
        style: {
          display: "none"
        }
      }), j) : D = null;
    else {
      var p, b;
      _ === Le ? b = "prepare" : Sa(_) ? b = "active" : _ === rt && (b = "start"), D = d(A(A({}, E), {}, {
        className: Et(kn(v, g), (p = {}, q(p, kn(v, "".concat(g, "-").concat(b)), b), q(p, v, typeof v == "string"), p)),
        style: $
      }), j);
    }
    if (/* @__PURE__ */ S.isValidElement(D) && Wn(D)) {
      var O = D, V = O.ref;
      V || (D = /* @__PURE__ */ S.cloneElement(D, {
        ref: j
      }));
    }
    return /* @__PURE__ */ S.createElement(uu, {
      ref: m
    }, D);
  });
  return n.displayName = "CSSMotion", n;
}
const Pa = su(ya);
var Nr = "add", kr = "keep", Vr = "remove", ur = "removed";
function fu(t) {
  var r;
  return t && ce(t) === "object" && "key" in t ? r = t : r = {
    key: t
  }, A(A({}, r), {}, {
    key: String(r.key)
  });
}
function Mr() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return t.map(fu);
}
function cu() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], n = 0, a = r.length, i = Mr(t), o = Mr(r);
  i.forEach(function(f) {
    for (var l = !1, d = n; d < a; d += 1) {
      var v = o[d];
      if (v.key === f.key) {
        n < d && (e = e.concat(o.slice(n, d).map(function(w) {
          return A(A({}, w), {}, {
            status: Nr
          });
        })), n = d), e.push(A(A({}, v), {}, {
          status: kr
        })), n += 1, l = !0;
        break;
      }
    }
    l || e.push(A(A({}, f), {}, {
      status: Vr
    }));
  }), n < a && (e = e.concat(o.slice(n).map(function(f) {
    return A(A({}, f), {}, {
      status: Nr
    });
  })));
  var u = {};
  e.forEach(function(f) {
    var l = f.key;
    u[l] = (u[l] || 0) + 1;
  });
  var s = Object.keys(u).filter(function(f) {
    return u[f] > 1;
  });
  return s.forEach(function(f) {
    e = e.filter(function(l) {
      var d = l.key, v = l.status;
      return d !== f || v !== Vr;
    }), e.forEach(function(l) {
      l.key === f && (l.status = kr);
    });
  }), e;
}
var lu = ["component", "children", "onVisibleChanged", "onAllRemoved"], du = ["status"], vu = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function pu(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pa, e = /* @__PURE__ */ function(n) {
    Lt(i, n);
    var a = Dt(i);
    function i() {
      var o;
      st(this, i);
      for (var u = arguments.length, s = new Array(u), f = 0; f < u; f++)
        s[f] = arguments[f];
      return o = a.call.apply(a, [this].concat(s)), q(yt(o), "state", {
        keyEntities: []
      }), q(yt(o), "removeKey", function(l) {
        var d = o.state.keyEntities, v = d.map(function(w) {
          return w.key !== l ? w : A(A({}, w), {}, {
            status: ur
          });
        });
        return o.setState({
          keyEntities: v
        }), v.filter(function(w) {
          var C = w.status;
          return C !== ur;
        }).length;
      }), o;
    }
    return ft(i, [{
      key: "render",
      value: function() {
        var u = this, s = this.state.keyEntities, f = this.props, l = f.component, d = f.children, v = f.onVisibleChanged, w = f.onAllRemoved, C = Be(f, lu), h = l || S.Fragment, y = {};
        return vu.forEach(function(m) {
          y[m] = C[m], delete C[m];
        }), delete C.keys, /* @__PURE__ */ S.createElement(h, C, s.map(function(m) {
          var P = m.status, F = Be(m, du), R = P === Nr || P === kr;
          return /* @__PURE__ */ S.createElement(r, ze({}, y, {
            key: F.key,
            visible: R,
            eventProps: F,
            onVisibleChanged: function(_) {
              if (v == null || v(_, {
                key: F.key
              }), !_) {
                var $ = u.removeKey(F.key);
                $ === 0 && w && w();
              }
            }
          }), d);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(u, s) {
        var f = u.keys, l = s.keyEntities, d = Mr(f), v = cu(l, d);
        return {
          keyEntities: v.filter(function(w) {
            var C = l.find(function(h) {
              var y = h.key;
              return w.key === y;
            });
            return !(C && C.status === ur && w.status === Vr);
          })
        };
      }
      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
    }]), i;
  }(S.Component);
  return q(e, "defaultProps", {
    component: "div"
  }), e;
}
pu(ya);
var mu = function(r, e) {
  return e || (r ? "ant-".concat(r) : "ant");
}, Ht = /* @__PURE__ */ S.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: mu
}), gu = Ht.Consumer, hu = /* @__PURE__ */ S.createContext(!1);
const yu = hu;
var bu = /* @__PURE__ */ S.createContext(void 0);
const Eu = bu;
var xa = S.isValidElement;
function wu(t) {
  return t && xa(t) && t.type === S.Fragment;
}
function Fu(t, r, e) {
  return xa(t) ? /* @__PURE__ */ S.cloneElement(t, typeof e == "function" ? e(t.props || {}) : e) : r;
}
function Ra(t, r) {
  return Fu(t, t, r);
}
var Ur = function() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  return e;
};
globalThis && globalThis.__rest;
var Cu = /* @__PURE__ */ S.createContext(null), Su = function(r, e) {
  var n = S.useContext(Cu), a = S.useMemo(function() {
    var i;
    if (!n)
      return "";
    var o = n.compactDirection, u = n.isFirstItem, s = n.isLastItem, f = o === "vertical" ? "-vertical-" : "-";
    return Et((i = {}, q(i, "".concat(r, "-compact").concat(f, "item"), !0), q(i, "".concat(r, "-compact").concat(f, "first-item"), u), q(i, "".concat(r, "-compact").concat(f, "last-item"), s), q(i, "".concat(r, "-compact").concat(f, "item-rtl"), e === "rtl"), i));
  }, [r, e, n]);
  return {
    compactSize: n == null ? void 0 : n.compactSize,
    compactDirection: n == null ? void 0 : n.compactDirection,
    compactItemClassnames: a
  };
}, Pu = 0, it = {};
function jt(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, e = Pu++, n = r;
  function a() {
    n -= 1, n <= 0 ? (t(), delete it[e]) : it[e] = ut(a);
  }
  return it[e] = ut(a), e;
}
jt.cancel = function(r) {
  r !== void 0 && (ut.cancel(it[r]), delete it[r]);
};
jt.ids = it;
var sr;
function In(t) {
  return process.env.NODE_ENV === "test" ? !1 : !t || t.offsetParent === null || t.hidden;
}
function xu(t) {
  return t instanceof Document ? t.body : Array.from(t.childNodes).find(function(r) {
    return (r == null ? void 0 : r.nodeType) === Node.ELEMENT_NODE;
  });
}
function Ru(t) {
  var r = (t || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return r && r[1] && r[2] && r[3] ? !(r[1] === r[2] && r[2] === r[3]) : !0;
}
var Oa = /* @__PURE__ */ function(t) {
  Lt(e, t);
  var r = Dt(e);
  function e() {
    var n;
    return st(this, e), n = r.apply(this, arguments), n.containerRef = /* @__PURE__ */ S.createRef(), n.animationStart = !1, n.destroyed = !1, n.onClick = function(a, i) {
      var o, u, s = n.props, f = s.insertExtraNode, l = s.disabled;
      if (!(l || !a || In(a) || a.className.includes("-leave"))) {
        n.extraNode = document.createElement("div");
        var d = yt(n), v = d.extraNode, w = n.context.getPrefixCls;
        v.className = "".concat(w(""), "-click-animating-node");
        var C = n.getAttributeName();
        if (a.setAttribute(C, "true"), i && i !== "#fff" && i !== "#ffffff" && i !== "rgb(255, 255, 255)" && i !== "rgba(255, 255, 255, 1)" && Ru(i) && !/rgba\((?:\d*, ){3}0\)/.test(i) && // any transparent rgba color
        i !== "transparent") {
          v.style.borderColor = i;
          var h = ((o = a.getRootNode) === null || o === void 0 ? void 0 : o.call(a)) || a.ownerDocument, y = (u = xu(h)) !== null && u !== void 0 ? u : h;
          sr = fa(`
      [`.concat(w(""), "-click-animating-without-extra-node='true']::after, .").concat(w(""), `-click-animating-node {
        --antd-wave-shadow-color: `).concat(i, `;
      }`), "antd-wave", {
            csp: n.csp,
            attachTo: y
          });
        }
        f && a.appendChild(v), ["transition", "animation"].forEach(function(m) {
          a.addEventListener("".concat(m, "start"), n.onTransitionStart), a.addEventListener("".concat(m, "end"), n.onTransitionEnd);
        });
      }
    }, n.onTransitionStart = function(a) {
      if (!n.destroyed) {
        var i = n.containerRef.current;
        !a || a.target !== i || n.animationStart || n.resetEffect(i);
      }
    }, n.onTransitionEnd = function(a) {
      !a || a.animationName !== "fadeEffect" || n.resetEffect(a.target);
    }, n.bindAnimationEvent = function(a) {
      if (!(!a || !a.getAttribute || a.getAttribute("disabled") || a.className.includes("disabled"))) {
        var i = function(u) {
          if (!(u.target.tagName === "INPUT" || In(u.target))) {
            n.resetEffect(a);
            var s = getComputedStyle(a).getPropertyValue("border-top-color") || // Firefox Compatible
            getComputedStyle(a).getPropertyValue("border-color") || getComputedStyle(a).getPropertyValue("background-color");
            n.clickWaveTimeoutId = window.setTimeout(function() {
              return n.onClick(a, s);
            }, 0), jt.cancel(n.animationStartId), n.animationStart = !0, n.animationStartId = jt(function() {
              n.animationStart = !1;
            }, 10);
          }
        };
        return a.addEventListener("click", i, !0), {
          cancel: function() {
            a.removeEventListener("click", i, !0);
          }
        };
      }
    }, n.renderWave = function(a) {
      var i = a.csp, o = n.props.children;
      if (n.csp = i, !/* @__PURE__ */ S.isValidElement(o))
        return o;
      var u = n.containerRef;
      return Wn(o) && (u = li(o.ref, n.containerRef)), Ra(o, {
        ref: u
      });
    }, n;
  }
  return ft(e, [{
    key: "componentDidMount",
    value: function() {
      this.destroyed = !1;
      var a = this.containerRef.current;
      !a || a.nodeType !== 1 || (this.instance = this.bindAnimationEvent(a));
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.instance && this.instance.cancel(), this.clickWaveTimeoutId && clearTimeout(this.clickWaveTimeoutId), this.destroyed = !0;
    }
  }, {
    key: "getAttributeName",
    value: function() {
      var a = this.context.getPrefixCls, i = this.props.insertExtraNode;
      return i ? "".concat(a(""), "-click-animating") : "".concat(a(""), "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function(a) {
      var i = this;
      if (!(!a || a === this.extraNode || !(a instanceof Element))) {
        var o = this.props.insertExtraNode, u = this.getAttributeName();
        a.setAttribute(u, "false"), sr && (sr.innerHTML = ""), o && this.extraNode && a.contains(this.extraNode) && a.removeChild(this.extraNode), ["transition", "animation"].forEach(function(s) {
          a.removeEventListener("".concat(s, "start"), i.onTransitionStart), a.removeEventListener("".concat(s, "end"), i.onTransitionEnd);
        });
      }
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ S.createElement(gu, null, this.renderWave);
    }
  }]), e;
}(S.Component);
Oa.contextType = Ht;
const Ou = Oa;
var Tu = globalThis && globalThis.__rest || function(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
}, Ta = /* @__PURE__ */ S.createContext(void 0), _u = function(r) {
  var e, n = S.useContext(Ht), a = n.getPrefixCls, i = n.direction, o = r.prefixCls, u = r.size, s = r.className, f = Tu(r, ["prefixCls", "size", "className"]), l = a("btn-group", o), d = "";
  switch (u) {
    case "large":
      d = "lg";
      break;
    case "small":
      d = "sm";
      break;
    case "middle":
    case void 0:
      break;
    default:
      process.env.NODE_ENV !== "production" && Or(!u, "Button.Group", "Invalid prop `size`.");
  }
  var v = Et(l, (e = {}, q(e, "".concat(l, "-").concat(d), d), q(e, "".concat(l, "-rtl"), i === "rtl"), e), s);
  return /* @__PURE__ */ S.createElement(Ta.Provider, {
    value: u
  }, /* @__PURE__ */ S.createElement("div", ze({}, f, {
    className: v
  })));
};
const Au = _u;
var fr = function() {
  return {
    width: 0,
    opacity: 0,
    transform: "scale(0)"
  };
}, cr = function(r) {
  return {
    width: r.scrollWidth,
    opacity: 1,
    transform: "scale(1)"
  };
}, Nu = function(r) {
  var e = r.prefixCls, n = r.loading, a = r.existIcon, i = !!n;
  return a ? /* @__PURE__ */ _e.createElement("span", {
    className: "".concat(e, "-loading-icon")
  }, /* @__PURE__ */ _e.createElement(Tn, null)) : /* @__PURE__ */ _e.createElement(Pa, {
    visible: i,
    // We do not really use this motionName
    motionName: "".concat(e, "-loading-icon-motion"),
    removeOnLeave: !0,
    onAppearStart: fr,
    onAppearActive: cr,
    onEnterStart: fr,
    onEnterActive: cr,
    onLeaveStart: cr,
    onLeaveActive: fr
  }, function(o, u) {
    var s = o.className, f = o.style;
    return /* @__PURE__ */ _e.createElement("span", {
      className: "".concat(e, "-loading-icon"),
      style: f,
      ref: u
    }, /* @__PURE__ */ _e.createElement(Tn, {
      className: s
    }));
  });
};
const ku = Nu;
var Vu = globalThis && globalThis.__rest || function(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
}, jn = /^[\u4e00-\u9fa5]{2}$/, $r = jn.test.bind(jn);
function Mu(t) {
  return typeof t == "string";
}
function Nt(t) {
  return t === "text" || t === "link";
}
function $u(t, r) {
  if (t != null) {
    var e = r ? " " : "";
    return typeof t != "string" && typeof t != "number" && Mu(t.type) && $r(t.props.children) ? Ra(t, {
      children: t.props.children.split("").join(e)
    }) : typeof t == "string" ? $r(t) ? /* @__PURE__ */ S.createElement("span", null, t.split("").join(e)) : /* @__PURE__ */ S.createElement("span", null, t) : wu(t) ? /* @__PURE__ */ S.createElement("span", null, t) : t;
  }
}
function Iu(t, r) {
  var e = !1, n = [];
  return S.Children.forEach(t, function(a) {
    var i = ce(a), o = i === "string" || i === "number";
    if (e && o) {
      var u = n.length - 1, s = n[u];
      n[u] = "".concat(s).concat(a);
    } else
      n.push(a);
    e = o;
  }), S.Children.map(n, function(a) {
    return $u(a, r);
  });
}
Ur("default", "primary", "ghost", "dashed", "link", "text");
Ur("default", "circle", "round");
Ur("submit", "button", "reset");
var ju = function(r, e) {
  var n, a = r.loading, i = a === void 0 ? !1 : a, o = r.prefixCls, u = r.type, s = u === void 0 ? "default" : u, f = r.danger, l = r.shape, d = l === void 0 ? "default" : l, v = r.size, w = r.disabled, C = r.className, h = r.children, y = r.icon, m = r.ghost, P = m === void 0 ? !1 : m, F = r.block, R = F === void 0 ? !1 : F, g = r.htmlType, _ = g === void 0 ? "button" : g, $ = Vu(r, ["loading", "prefixCls", "type", "danger", "shape", "size", "disabled", "className", "children", "icon", "ghost", "block", "htmlType"]), M = S.useContext(Eu), I = S.useContext(yu), j = w ?? I, D = S.useContext(Ta), E = S.useState(!!i), p = de(E, 2), b = p[0], O = p[1], V = S.useState(!1), N = de(V, 2), W = N[0], ee = N[1], K = S.useContext(Ht), ie = K.getPrefixCls, B = K.autoInsertSpaceInButton, Z = K.direction, ve = e || /* @__PURE__ */ S.createRef(), ge = function() {
    return S.Children.count(h) === 1 && !y && !Nt(s);
  }, Ve = function() {
    if (!(!ve || !ve.current || B === !1)) {
      var Ke = ve.current.textContent;
      ge() && $r(Ke) ? W || ee(!0) : W && ee(!1);
    }
  }, be = typeof i == "boolean" ? i : (i == null ? void 0 : i.delay) || !0;
  S.useEffect(function() {
    var Ne = null;
    return typeof be == "number" ? Ne = window.setTimeout(function() {
      Ne = null, O(be);
    }, be) : O(be), function() {
      Ne && (window.clearTimeout(Ne), Ne = null);
    };
  }, [be]), S.useEffect(Ve, [ve]);
  var xe = function(Ke) {
    var Je = r.onClick;
    if (b || j) {
      Ke.preventDefault();
      return;
    }
    Je == null || Je(Ke);
  };
  process.env.NODE_ENV !== "production" && Or(!(typeof y == "string" && y.length > 2), "Button", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(y, "` at https://ant.design/components/icon")), process.env.NODE_ENV !== "production" && Or(!(P && Nt(s)), "Button", "`link` or `text` button can't be a `ghost` button.");
  var re = ie("btn", o), Re = B !== !1, Me = Su(re, Z), k = Me.compactSize, he = Me.compactItemClassnames, Ae = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ye = k || D || v || M, Oe = ye && Ae[ye] || "", ae = b ? "loading" : y, ne = vi($, ["navigate"]), oe = Et(re, (n = {}, q(n, "".concat(re, "-").concat(d), d !== "default" && d), q(n, "".concat(re, "-").concat(s), s), q(n, "".concat(re, "-").concat(Oe), Oe), q(n, "".concat(re, "-icon-only"), !h && h !== 0 && !!ae), q(n, "".concat(re, "-background-ghost"), P && !Nt(s)), q(n, "".concat(re, "-loading"), b), q(n, "".concat(re, "-two-chinese-chars"), W && Re && !b), q(n, "".concat(re, "-block"), R), q(n, "".concat(re, "-dangerous"), !!f), q(n, "".concat(re, "-rtl"), Z === "rtl"), q(n, "".concat(re, "-disabled"), ne.href !== void 0 && j), n), he, C), $e = y && !b ? y : /* @__PURE__ */ S.createElement(ku, {
    existIcon: !!y,
    prefixCls: re,
    loading: !!b
  }), Ct = h || h === 0 ? Iu(h, ge() && Re) : null;
  if (ne.href !== void 0)
    return /* @__PURE__ */ S.createElement("a", ze({}, ne, {
      className: oe,
      onClick: xe,
      ref: ve
    }), $e, Ct);
  var Ge = /* @__PURE__ */ S.createElement("button", ze({}, $, {
    type: _,
    className: oe,
    onClick: xe,
    disabled: j,
    ref: ve
  }), $e, Ct);
  return Nt(s) ? Ge : /* @__PURE__ */ S.createElement(Ou, {
    disabled: !!b
  }, Ge);
}, Bt = /* @__PURE__ */ S.forwardRef(ju);
process.env.NODE_ENV !== "production" && (Bt.displayName = "Button");
Bt.Group = Au;
Bt.__ANT_BUTTON = !0;
const Lu = Bt, Du = () => /* @__PURE__ */ ei(Lu, { type: "primary", children: "vc-ant-design的按钮" }), Uu = Du;
export {
  Uu as ZoneButton
};
