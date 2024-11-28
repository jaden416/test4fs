function P0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function bd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Yd = { exports: {} },
  Ko = {},
  Qd = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var di = Symbol.for("react.element"),
  E0 = Symbol.for("react.portal"),
  T0 = Symbol.for("react.fragment"),
  k0 = Symbol.for("react.strict_mode"),
  N0 = Symbol.for("react.profiler"),
  M0 = Symbol.for("react.provider"),
  R0 = Symbol.for("react.context"),
  L0 = Symbol.for("react.forward_ref"),
  A0 = Symbol.for("react.suspense"),
  j0 = Symbol.for("react.memo"),
  D0 = Symbol.for("react.lazy"),
  ac = Symbol.iterator;
function _0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ac && e[ac]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zd = Object.assign,
  qd = {};
function lr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qd),
    (this.updater = n || Xd);
}
lr.prototype.isReactComponent = {};
lr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
lr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Jd() {}
Jd.prototype = lr.prototype;
function Ea(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qd),
    (this.updater = n || Xd);
}
var Ta = (Ea.prototype = new Jd());
Ta.constructor = Ea;
Zd(Ta, lr.prototype);
Ta.isPureReactComponent = !0;
var uc = Array.isArray,
  eh = Object.prototype.hasOwnProperty,
  ka = { current: null },
  th = { key: !0, ref: !0, __self: !0, __source: !0 };
function nh(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      eh.call(t, r) && !th.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: di,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: ka.current,
  };
}
function V0(e, t) {
  return {
    $$typeof: di,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Na(e) {
  return typeof e == "object" && e !== null && e.$$typeof === di;
}
function O0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cc = /\/+/g;
function ys(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? O0("" + e.key)
    : t.toString(36);
}
function Gi(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case di:
          case E0:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + ys(s, 0) : r),
      uc(i)
        ? ((n = ""),
          e != null && (n = e.replace(cc, "$&/") + "/"),
          Gi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Na(i) &&
            (i = V0(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(cc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), uc(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + ys(o, l);
      s += Gi(o, t, n, a, i);
    }
  else if (((a = _0(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + ys(o, l++)), (s += Gi(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Pi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Gi(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function I0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Se = { current: null },
  bi = { transition: null },
  F0 = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: bi,
    ReactCurrentOwner: ka,
  };
function rh() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = {
  map: Pi,
  forEach: function (e, t, n) {
    Pi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Pi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Pi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Na(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = lr;
V.Fragment = T0;
V.Profiler = N0;
V.PureComponent = Ea;
V.StrictMode = k0;
V.Suspense = A0;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F0;
V.act = rh;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Zd({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = ka.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      eh.call(t, a) &&
        !th.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: di, type: e.type, key: i, ref: o, props: r, _owner: s };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: R0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: M0, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = nh;
V.createFactory = function (e) {
  var t = nh.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: L0, render: e };
};
V.isValidElement = Na;
V.lazy = function (e) {
  return { $$typeof: D0, _payload: { _status: -1, _result: e }, _init: I0 };
};
V.memo = function (e, t) {
  return { $$typeof: j0, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = bi.transition;
  bi.transition = {};
  try {
    e();
  } finally {
    bi.transition = t;
  }
};
V.unstable_act = rh;
V.useCallback = function (e, t) {
  return Se.current.useCallback(e, t);
};
V.useContext = function (e) {
  return Se.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return Se.current.useEffect(e, t);
};
V.useId = function () {
  return Se.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return Se.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return Se.current.useRef(e);
};
V.useState = function (e) {
  return Se.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return Se.current.useTransition();
};
V.version = "18.3.1";
Qd.exports = V;
var w = Qd.exports;
const xe = bd(w),
  z0 = P0({ __proto__: null, default: xe }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var B0 = w,
  U0 = Symbol.for("react.element"),
  W0 = Symbol.for("react.fragment"),
  $0 = Object.prototype.hasOwnProperty,
  H0 = B0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  K0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function ih(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) $0.call(t, r) && !K0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: U0,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: H0.current,
  };
}
Ko.Fragment = W0;
Ko.jsx = ih;
Ko.jsxs = ih;
Yd.exports = Ko;
var g = Yd.exports,
  oh = { exports: {} },
  Ve = {},
  sh = { exports: {} },
  lh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, D) {
    var _ = M.length;
    M.push(D);
    e: for (; 0 < _; ) {
      var $ = (_ - 1) >>> 1,
        Z = M[$];
      if (0 < i(Z, D)) (M[$] = D), (M[_] = Z), (_ = $);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var D = M[0],
      _ = M.pop();
    if (_ !== D) {
      M[0] = _;
      e: for (var $ = 0, Z = M.length, on = Z >>> 1; $ < on; ) {
        var nt = 2 * ($ + 1) - 1,
          dr = M[nt],
          sn = nt + 1,
          Ci = M[sn];
        if (0 > i(dr, _))
          sn < Z && 0 > i(Ci, dr)
            ? ((M[$] = Ci), (M[sn] = _), ($ = sn))
            : ((M[$] = dr), (M[nt] = _), ($ = nt));
        else if (sn < Z && 0 > i(Ci, _)) (M[$] = Ci), (M[sn] = _), ($ = sn);
        else break e;
      }
    }
    return D;
  }
  function i(M, D) {
    var _ = M.sortIndex - D.sortIndex;
    return _ !== 0 ? _ : M.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    v = !1,
    y = !1,
    x = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= M)
        r(u), (D.sortIndex = D.expirationTime), t(a, D);
      else break;
      D = n(u);
    }
  }
  function S(M) {
    if (((x = !1), m(M), !y))
      if (n(a) !== null) (y = !0), rn(C);
      else {
        var D = n(u);
        D !== null && Q(S, D.startTime - M);
      }
  }
  function C(M, D) {
    (y = !1), x && ((x = !1), p(k), (k = -1)), (v = !0);
    var _ = d;
    try {
      for (
        m(D), f = n(a);
        f !== null && (!(f.expirationTime > D) || (M && !F()));

      ) {
        var $ = f.callback;
        if (typeof $ == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var Z = $(f.expirationTime <= D);
          (D = e.unstable_now()),
            typeof Z == "function" ? (f.callback = Z) : f === n(a) && r(a),
            m(D);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var on = !0;
      else {
        var nt = n(u);
        nt !== null && Q(S, nt.startTime - D), (on = !1);
      }
      return on;
    } finally {
      (f = null), (d = _), (v = !1);
    }
  }
  var E = !1,
    T = null,
    k = -1,
    R = 5,
    A = -1;
  function F() {
    return !(e.unstable_now() - A < R);
  }
  function Pe() {
    if (T !== null) {
      var M = e.unstable_now();
      A = M;
      var D = !0;
      try {
        D = T(!0, M);
      } finally {
        D ? pt() : ((E = !1), (T = null));
      }
    } else E = !1;
  }
  var pt;
  if (typeof h == "function")
    pt = function () {
      h(Pe);
    };
  else if (typeof MessageChannel < "u") {
    var Mt = new MessageChannel(),
      Ie = Mt.port2;
    (Mt.port1.onmessage = Pe),
      (pt = function () {
        Ie.postMessage(null);
      });
  } else
    pt = function () {
      P(Pe, 0);
    };
  function rn(M) {
    (T = M), E || ((E = !0), pt());
  }
  function Q(M, D) {
    k = P(function () {
      M(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), rn(C));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = d;
      }
      var _ = d;
      d = D;
      try {
        return M();
      } finally {
        d = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, D) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var _ = d;
      d = M;
      try {
        return D();
      } finally {
        d = _;
      }
    }),
    (e.unstable_scheduleCallback = function (M, D, _) {
      var $ = e.unstable_now();
      switch (
        (typeof _ == "object" && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? $ + _ : $))
          : (_ = $),
        M)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = _ + Z),
        (M = {
          id: c++,
          callback: D,
          priorityLevel: M,
          startTime: _,
          expirationTime: Z,
          sortIndex: -1,
        }),
        _ > $
          ? ((M.sortIndex = _),
            t(u, M),
            n(a) === null &&
              M === n(u) &&
              (x ? (p(k), (k = -1)) : (x = !0), Q(S, _ - $)))
          : ((M.sortIndex = Z), t(a, M), y || v || ((y = !0), rn(C))),
        M
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (M) {
      var D = d;
      return function () {
        var _ = d;
        d = D;
        try {
          return M.apply(this, arguments);
        } finally {
          d = _;
        }
      };
    });
})(lh);
sh.exports = lh;
var G0 = sh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b0 = w,
  De = G0;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ah = new Set(),
  Hr = {};
function En(e, t) {
  Xn(e, t), Xn(e + "Capture", t);
}
function Xn(e, t) {
  for (Hr[e] = t, e = 0; e < t.length; e++) ah.add(t[e]);
}
var Pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ll = Object.prototype.hasOwnProperty,
  Y0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fc = {},
  dc = {};
function Q0(e) {
  return ll.call(dc, e)
    ? !0
    : ll.call(fc, e)
      ? !1
      : Y0.test(e)
        ? (dc[e] = !0)
        : ((fc[e] = !0), !1);
}
function X0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Z0(e, t, n, r) {
  if (t === null || typeof t > "u" || X0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ce(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  de[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ma = /[\-:]([a-z])/g;
function Ra(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ma, Ra);
    de[t] = new Ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ma, Ra);
    de[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ma, Ra);
  de[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new Ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function La(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Z0(t, n, i, r) && (n = null),
    r || i === null
      ? Q0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nt = b0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ei = Symbol.for("react.element"),
  Nn = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  Aa = Symbol.for("react.strict_mode"),
  al = Symbol.for("react.profiler"),
  uh = Symbol.for("react.provider"),
  ch = Symbol.for("react.context"),
  ja = Symbol.for("react.forward_ref"),
  ul = Symbol.for("react.suspense"),
  cl = Symbol.for("react.suspense_list"),
  Da = Symbol.for("react.memo"),
  jt = Symbol.for("react.lazy"),
  fh = Symbol.for("react.offscreen"),
  hc = Symbol.iterator;
function hr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hc && e[hc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  xs;
function Pr(e) {
  if (xs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xs = (t && t[1]) || "";
    }
  return (
    `
` +
    xs +
    e
  );
}
var ws = !1;
function Ss(e, t) {
  if (!e || ws) return "";
  ws = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (ws = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Pr(e) : "";
}
function q0(e) {
  switch (e.tag) {
    case 5:
      return Pr(e.type);
    case 16:
      return Pr("Lazy");
    case 13:
      return Pr("Suspense");
    case 19:
      return Pr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ss(e.type, !1)), e;
    case 11:
      return (e = Ss(e.type.render, !1)), e;
    case 1:
      return (e = Ss(e.type, !0)), e;
    default:
      return "";
  }
}
function fl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case Nn:
      return "Portal";
    case al:
      return "Profiler";
    case Aa:
      return "StrictMode";
    case ul:
      return "Suspense";
    case cl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ch:
        return (e.displayName || "Context") + ".Consumer";
      case uh:
        return (e._context.displayName || "Context") + ".Provider";
      case ja:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Da:
        return (
          (t = e.displayName || null), t !== null ? t : fl(e.type) || "Memo"
        );
      case jt:
        (t = e._payload), (e = e._init);
        try {
          return fl(e(t));
        } catch {}
    }
  return null;
}
function J0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return fl(t);
    case 8:
      return t === Aa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Gt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function dh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ev(e) {
  var t = dh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ti(e) {
  e._valueTracker || (e._valueTracker = ev(e));
}
function hh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = dh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function co(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function dl(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function pc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ph(e, t) {
  (t = t.checked), t != null && La(e, "checked", t, !1);
}
function hl(e, t) {
  ph(e, t);
  var n = Gt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? pl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && pl(e, t.type, Gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function mc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function pl(e, t, n) {
  (t !== "number" || co(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Er = Array.isArray;
function Hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ml(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Er(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Gt(n) };
}
function mh(e, t) {
  var n = Gt(t.value),
    r = Gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function vc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function gl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? gh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ki,
  vh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ki = ki || document.createElement("div"),
          ki.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ki.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  tv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rr).forEach(function (e) {
  tv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rr[t] = Rr[e]);
  });
});
function yh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rr.hasOwnProperty(e) && Rr[e])
      ? ("" + t).trim()
      : t + "px";
}
function xh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = yh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var nv = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function vl(e, t) {
  if (t) {
    if (nv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function yl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var xl = null;
function _a(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var wl = null,
  Kn = null,
  Gn = null;
function yc(e) {
  if ((e = mi(e))) {
    if (typeof wl != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Xo(t)), wl(e.stateNode, e.type, t));
  }
}
function wh(e) {
  Kn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Kn = e);
}
function Sh() {
  if (Kn) {
    var e = Kn,
      t = Gn;
    if (((Gn = Kn = null), yc(e), t)) for (e = 0; e < t.length; e++) yc(t[e]);
  }
}
function Ch(e, t) {
  return e(t);
}
function Ph() {}
var Cs = !1;
function Eh(e, t, n) {
  if (Cs) return e(t, n);
  Cs = !0;
  try {
    return Ch(e, t, n);
  } finally {
    (Cs = !1), (Kn !== null || Gn !== null) && (Ph(), Sh());
  }
}
function Gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Sl = !1;
if (Pt)
  try {
    var pr = {};
    Object.defineProperty(pr, "passive", {
      get: function () {
        Sl = !0;
      },
    }),
      window.addEventListener("test", pr, pr),
      window.removeEventListener("test", pr, pr);
  } catch {
    Sl = !1;
  }
function rv(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Lr = !1,
  fo = null,
  ho = !1,
  Cl = null,
  iv = {
    onError: function (e) {
      (Lr = !0), (fo = e);
    },
  };
function ov(e, t, n, r, i, o, s, l, a) {
  (Lr = !1), (fo = null), rv.apply(iv, arguments);
}
function sv(e, t, n, r, i, o, s, l, a) {
  if ((ov.apply(this, arguments), Lr)) {
    if (Lr) {
      var u = fo;
      (Lr = !1), (fo = null);
    } else throw Error(N(198));
    ho || ((ho = !0), (Cl = u));
  }
}
function Tn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Th(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function xc(e) {
  if (Tn(e) !== e) throw Error(N(188));
}
function lv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return xc(i), e;
        if (o === r) return xc(i), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function kh(e) {
  return (e = lv(e)), e !== null ? Nh(e) : null;
}
function Nh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Nh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mh = De.unstable_scheduleCallback,
  wc = De.unstable_cancelCallback,
  av = De.unstable_shouldYield,
  uv = De.unstable_requestPaint,
  J = De.unstable_now,
  cv = De.unstable_getCurrentPriorityLevel,
  Va = De.unstable_ImmediatePriority,
  Rh = De.unstable_UserBlockingPriority,
  po = De.unstable_NormalPriority,
  fv = De.unstable_LowPriority,
  Lh = De.unstable_IdlePriority,
  Go = null,
  lt = null;
function dv(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
      lt.onCommitFiberRoot(Go, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var qe = Math.clz32 ? Math.clz32 : mv,
  hv = Math.log,
  pv = Math.LN2;
function mv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((hv(e) / pv) | 0)) | 0;
}
var Ni = 64,
  Mi = 4194304;
function Tr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function mo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = Tr(l)) : ((o &= s), o !== 0 && (r = Tr(o)));
  } else (s = n & ~i), s !== 0 ? (r = Tr(s)) : o !== 0 && (r = Tr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function gv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - qe(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = gv(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Pl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ah() {
  var e = Ni;
  return (Ni <<= 1), !(Ni & 4194240) && (Ni = 64), e;
}
function Ps(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - qe(t)),
    (e[t] = n);
}
function yv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - qe(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Oa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var z = 0;
function jh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Dh,
  Ia,
  _h,
  Vh,
  Oh,
  El = !1,
  Ri = [],
  Ft = null,
  zt = null,
  Bt = null,
  br = new Map(),
  Yr = new Map(),
  _t = [],
  xv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Sc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ft = null;
      break;
    case "dragenter":
    case "dragleave":
      zt = null;
      break;
    case "mouseover":
    case "mouseout":
      Bt = null;
      break;
    case "pointerover":
    case "pointerout":
      br.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yr.delete(t.pointerId);
  }
}
function mr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = mi(t)), t !== null && Ia(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function wv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Ft = mr(Ft, e, t, n, r, i)), !0;
    case "dragenter":
      return (zt = mr(zt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Bt = mr(Bt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return br.set(o, mr(br.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Yr.set(o, mr(Yr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Ih(e) {
  var t = dn(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Th(n)), t !== null)) {
          (e.blockedOn = t),
            Oh(e.priority, function () {
              _h(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Yi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Tl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (xl = r), n.target.dispatchEvent(r), (xl = null);
    } else return (t = mi(n)), t !== null && Ia(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Cc(e, t, n) {
  Yi(e) && n.delete(t);
}
function Sv() {
  (El = !1),
    Ft !== null && Yi(Ft) && (Ft = null),
    zt !== null && Yi(zt) && (zt = null),
    Bt !== null && Yi(Bt) && (Bt = null),
    br.forEach(Cc),
    Yr.forEach(Cc);
}
function gr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    El ||
      ((El = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, Sv)));
}
function Qr(e) {
  function t(i) {
    return gr(i, e);
  }
  if (0 < Ri.length) {
    gr(Ri[0], e);
    for (var n = 1; n < Ri.length; n++) {
      var r = Ri[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ft !== null && gr(Ft, e),
      zt !== null && gr(zt, e),
      Bt !== null && gr(Bt, e),
      br.forEach(t),
      Yr.forEach(t),
      n = 0;
    n < _t.length;
    n++
  )
    (r = _t[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < _t.length && ((n = _t[0]), n.blockedOn === null); )
    Ih(n), n.blockedOn === null && _t.shift();
}
var bn = Nt.ReactCurrentBatchConfig,
  go = !0;
function Cv(e, t, n, r) {
  var i = z,
    o = bn.transition;
  bn.transition = null;
  try {
    (z = 1), Fa(e, t, n, r);
  } finally {
    (z = i), (bn.transition = o);
  }
}
function Pv(e, t, n, r) {
  var i = z,
    o = bn.transition;
  bn.transition = null;
  try {
    (z = 4), Fa(e, t, n, r);
  } finally {
    (z = i), (bn.transition = o);
  }
}
function Fa(e, t, n, r) {
  if (go) {
    var i = Tl(e, t, n, r);
    if (i === null) Ds(e, t, r, vo, n), Sc(e, r);
    else if (wv(i, e, t, n, r)) r.stopPropagation();
    else if ((Sc(e, r), t & 4 && -1 < xv.indexOf(e))) {
      for (; i !== null; ) {
        var o = mi(i);
        if (
          (o !== null && Dh(o),
          (o = Tl(e, t, n, r)),
          o === null && Ds(e, t, r, vo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ds(e, t, r, null, n);
  }
}
var vo = null;
function Tl(e, t, n, r) {
  if (((vo = null), (e = _a(r)), (e = dn(e)), e !== null))
    if (((t = Tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Th(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (vo = e), null;
}
function Fh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (cv()) {
        case Va:
          return 1;
        case Rh:
          return 4;
        case po:
        case fv:
          return 16;
        case Lh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ot = null,
  za = null,
  Qi = null;
function zh() {
  if (Qi) return Qi;
  var e,
    t = za,
    n = t.length,
    r,
    i = "value" in Ot ? Ot.value : Ot.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Qi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Xi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Li() {
  return !0;
}
function Pc() {
  return !1;
}
function Oe(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Li
        : Pc),
      (this.isPropagationStopped = Pc),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Li));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Li));
      },
      persist: function () {},
      isPersistent: Li,
    }),
    t
  );
}
var ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ba = Oe(ar),
  pi = Y({}, ar, { view: 0, detail: 0 }),
  Ev = Oe(pi),
  Es,
  Ts,
  vr,
  bo = Y({}, pi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ua,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vr &&
            (vr && e.type === "mousemove"
              ? ((Es = e.screenX - vr.screenX), (Ts = e.screenY - vr.screenY))
              : (Ts = Es = 0),
            (vr = e)),
          Es);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ts;
    },
  }),
  Ec = Oe(bo),
  Tv = Y({}, bo, { dataTransfer: 0 }),
  kv = Oe(Tv),
  Nv = Y({}, pi, { relatedTarget: 0 }),
  ks = Oe(Nv),
  Mv = Y({}, ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rv = Oe(Mv),
  Lv = Y({}, ar, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Av = Oe(Lv),
  jv = Y({}, ar, { data: 0 }),
  Tc = Oe(jv),
  Dv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  _v = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Vv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ov(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vv[e]) ? !!t[e] : !1;
}
function Ua() {
  return Ov;
}
var Iv = Y({}, pi, {
    key: function (e) {
      if (e.key) {
        var t = Dv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Xi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? _v[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ua,
    charCode: function (e) {
      return e.type === "keypress" ? Xi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Xi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Fv = Oe(Iv),
  zv = Y({}, bo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  kc = Oe(zv),
  Bv = Y({}, pi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ua,
  }),
  Uv = Oe(Bv),
  Wv = Y({}, ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $v = Oe(Wv),
  Hv = Y({}, bo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Kv = Oe(Hv),
  Gv = [9, 13, 27, 32],
  Wa = Pt && "CompositionEvent" in window,
  Ar = null;
Pt && "documentMode" in document && (Ar = document.documentMode);
var bv = Pt && "TextEvent" in window && !Ar,
  Bh = Pt && (!Wa || (Ar && 8 < Ar && 11 >= Ar)),
  Nc = " ",
  Mc = !1;
function Uh(e, t) {
  switch (e) {
    case "keyup":
      return Gv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Wh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Rn = !1;
function Yv(e, t) {
  switch (e) {
    case "compositionend":
      return Wh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Mc = !0), Nc);
    case "textInput":
      return (e = t.data), e === Nc && Mc ? null : e;
    default:
      return null;
  }
}
function Qv(e, t) {
  if (Rn)
    return e === "compositionend" || (!Wa && Uh(e, t))
      ? ((e = zh()), (Qi = za = Ot = null), (Rn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Bh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Xv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Rc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Xv[e.type] : t === "textarea";
}
function $h(e, t, n, r) {
  wh(r),
    (t = yo(t, "onChange")),
    0 < t.length &&
      ((n = new Ba("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var jr = null,
  Xr = null;
function Zv(e) {
  ep(e, 0);
}
function Yo(e) {
  var t = jn(e);
  if (hh(t)) return e;
}
function qv(e, t) {
  if (e === "change") return t;
}
var Hh = !1;
if (Pt) {
  var Ns;
  if (Pt) {
    var Ms = "oninput" in document;
    if (!Ms) {
      var Lc = document.createElement("div");
      Lc.setAttribute("oninput", "return;"),
        (Ms = typeof Lc.oninput == "function");
    }
    Ns = Ms;
  } else Ns = !1;
  Hh = Ns && (!document.documentMode || 9 < document.documentMode);
}
function Ac() {
  jr && (jr.detachEvent("onpropertychange", Kh), (Xr = jr = null));
}
function Kh(e) {
  if (e.propertyName === "value" && Yo(Xr)) {
    var t = [];
    $h(t, Xr, e, _a(e)), Eh(Zv, t);
  }
}
function Jv(e, t, n) {
  e === "focusin"
    ? (Ac(), (jr = t), (Xr = n), jr.attachEvent("onpropertychange", Kh))
    : e === "focusout" && Ac();
}
function ey(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Yo(Xr);
}
function ty(e, t) {
  if (e === "click") return Yo(t);
}
function ny(e, t) {
  if (e === "input" || e === "change") return Yo(t);
}
function ry(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var et = typeof Object.is == "function" ? Object.is : ry;
function Zr(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ll.call(t, i) || !et(e[i], t[i])) return !1;
  }
  return !0;
}
function jc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Dc(e, t) {
  var n = jc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = jc(n);
  }
}
function Gh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Gh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function bh() {
  for (var e = window, t = co(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = co(e.document);
  }
  return t;
}
function $a(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function iy(e) {
  var t = bh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && $a(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Dc(n, o));
        var s = Dc(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var oy = Pt && "documentMode" in document && 11 >= document.documentMode,
  Ln = null,
  kl = null,
  Dr = null,
  Nl = !1;
function _c(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Nl ||
    Ln == null ||
    Ln !== co(r) ||
    ((r = Ln),
    "selectionStart" in r && $a(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Dr && Zr(Dr, r)) ||
      ((Dr = r),
      (r = yo(kl, "onSelect")),
      0 < r.length &&
        ((t = new Ba("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ln))));
}
function Ai(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var An = {
    animationend: Ai("Animation", "AnimationEnd"),
    animationiteration: Ai("Animation", "AnimationIteration"),
    animationstart: Ai("Animation", "AnimationStart"),
    transitionend: Ai("Transition", "TransitionEnd"),
  },
  Rs = {},
  Yh = {};
Pt &&
  ((Yh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete An.animationend.animation,
    delete An.animationiteration.animation,
    delete An.animationstart.animation),
  "TransitionEvent" in window || delete An.transitionend.transition);
function Qo(e) {
  if (Rs[e]) return Rs[e];
  if (!An[e]) return e;
  var t = An[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yh) return (Rs[e] = t[n]);
  return e;
}
var Qh = Qo("animationend"),
  Xh = Qo("animationiteration"),
  Zh = Qo("animationstart"),
  qh = Qo("transitionend"),
  Jh = new Map(),
  Vc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function qt(e, t) {
  Jh.set(e, t), En(t, [e]);
}
for (var Ls = 0; Ls < Vc.length; Ls++) {
  var As = Vc[Ls],
    sy = As.toLowerCase(),
    ly = As[0].toUpperCase() + As.slice(1);
  qt(sy, "on" + ly);
}
qt(Qh, "onAnimationEnd");
qt(Xh, "onAnimationIteration");
qt(Zh, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(qh, "onTransitionEnd");
Xn("onMouseEnter", ["mouseout", "mouseover"]);
Xn("onMouseLeave", ["mouseout", "mouseover"]);
Xn("onPointerEnter", ["pointerout", "pointerover"]);
Xn("onPointerLeave", ["pointerout", "pointerover"]);
En(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
En(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));
function Oc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), sv(r, t, void 0, e), (e.currentTarget = null);
}
function ep(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Oc(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Oc(i, l, u), (o = a);
        }
    }
  }
  if (ho) throw ((e = Cl), (ho = !1), (Cl = null), e);
}
function U(e, t) {
  var n = t[jl];
  n === void 0 && (n = t[jl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (tp(t, e, 2, !1), n.add(r));
}
function js(e, t, n) {
  var r = 0;
  t && (r |= 4), tp(n, e, r, t);
}
var ji = "_reactListening" + Math.random().toString(36).slice(2);
function qr(e) {
  if (!e[ji]) {
    (e[ji] = !0),
      ah.forEach(function (n) {
        n !== "selectionchange" && (ay.has(n) || js(n, !1, e), js(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ji] || ((t[ji] = !0), js("selectionchange", !1, t));
  }
}
function tp(e, t, n, r) {
  switch (Fh(t)) {
    case 1:
      var i = Cv;
      break;
    case 4:
      i = Pv;
      break;
    default:
      i = Fa;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Sl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function Ds(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = dn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Eh(function () {
    var u = o,
      c = _a(n),
      f = [];
    e: {
      var d = Jh.get(e);
      if (d !== void 0) {
        var v = Ba,
          y = e;
        switch (e) {
          case "keypress":
            if (Xi(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Fv;
            break;
          case "focusin":
            (y = "focus"), (v = ks);
            break;
          case "focusout":
            (y = "blur"), (v = ks);
            break;
          case "beforeblur":
          case "afterblur":
            v = ks;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Ec;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = kv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Uv;
            break;
          case Qh:
          case Xh:
          case Zh:
            v = Rv;
            break;
          case qh:
            v = $v;
            break;
          case "scroll":
            v = Ev;
            break;
          case "wheel":
            v = Kv;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Av;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = kc;
        }
        var x = (t & 4) !== 0,
          P = !x && e === "scroll",
          p = x ? (d !== null ? d + "Capture" : null) : d;
        x = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              p !== null && ((S = Gr(h, p)), S != null && x.push(Jr(h, S, m)))),
            P)
          )
            break;
          h = h.return;
        }
        0 < x.length &&
          ((d = new v(d, y, null, n, c)), f.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          d &&
            n !== xl &&
            (y = n.relatedTarget || n.fromElement) &&
            (dn(y) || y[Et]))
        )
          break e;
        if (
          (v || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = u),
              (y = y ? dn(y) : null),
              y !== null &&
                ((P = Tn(y)), y !== P || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = u)),
          v !== y)
        ) {
          if (
            ((x = Ec),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = kc),
              (S = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (P = v == null ? d : jn(v)),
            (m = y == null ? d : jn(y)),
            (d = new x(S, h + "leave", v, n, c)),
            (d.target = P),
            (d.relatedTarget = m),
            (S = null),
            dn(c) === u &&
              ((x = new x(p, h + "enter", y, n, c)),
              (x.target = m),
              (x.relatedTarget = P),
              (S = x)),
            (P = S),
            v && y)
          )
            t: {
              for (x = v, p = y, h = 0, m = x; m; m = kn(m)) h++;
              for (m = 0, S = p; S; S = kn(S)) m++;
              for (; 0 < h - m; ) (x = kn(x)), h--;
              for (; 0 < m - h; ) (p = kn(p)), m--;
              for (; h--; ) {
                if (x === p || (p !== null && x === p.alternate)) break t;
                (x = kn(x)), (p = kn(p));
              }
              x = null;
            }
          else x = null;
          v !== null && Ic(f, d, v, x, !1),
            y !== null && P !== null && Ic(f, P, y, x, !0);
        }
      }
      e: {
        if (
          ((d = u ? jn(u) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === "select" || (v === "input" && d.type === "file"))
        )
          var C = qv;
        else if (Rc(d))
          if (Hh) C = ny;
          else {
            C = ey;
            var E = Jv;
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (C = ty);
        if (C && (C = C(e, u))) {
          $h(f, C, n, c);
          break e;
        }
        E && E(e, d, u),
          e === "focusout" &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === "number" &&
            pl(d, "number", d.value);
      }
      switch (((E = u ? jn(u) : window), e)) {
        case "focusin":
          (Rc(E) || E.contentEditable === "true") &&
            ((Ln = E), (kl = u), (Dr = null));
          break;
        case "focusout":
          Dr = kl = Ln = null;
          break;
        case "mousedown":
          Nl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Nl = !1), _c(f, n, c);
          break;
        case "selectionchange":
          if (oy) break;
        case "keydown":
        case "keyup":
          _c(f, n, c);
      }
      var T;
      if (Wa)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Rn
          ? Uh(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Bh &&
          n.locale !== "ko" &&
          (Rn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Rn && (T = zh())
            : ((Ot = c),
              (za = "value" in Ot ? Ot.value : Ot.textContent),
              (Rn = !0))),
        (E = yo(u, k)),
        0 < E.length &&
          ((k = new Tc(k, e, null, n, c)),
          f.push({ event: k, listeners: E }),
          T ? (k.data = T) : ((T = Wh(n)), T !== null && (k.data = T)))),
        (T = bv ? Yv(e, n) : Qv(e, n)) &&
          ((u = yo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Tc("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    ep(f, t);
  });
}
function Jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function yo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Gr(e, n)),
      o != null && r.unshift(Jr(e, o, i)),
      (o = Gr(e, t)),
      o != null && r.push(Jr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function kn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ic(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Gr(n, o)), a != null && s.unshift(Jr(n, a, l)))
        : i || ((a = Gr(n, o)), a != null && s.push(Jr(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var uy = /\r\n?/g,
  cy = /\u0000|\uFFFD/g;
function Fc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      uy,
      `
`
    )
    .replace(cy, "");
}
function Di(e, t, n) {
  if (((t = Fc(t)), Fc(e) !== t && n)) throw Error(N(425));
}
function xo() {}
var Ml = null,
  Rl = null;
function Ll(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Al = typeof setTimeout == "function" ? setTimeout : void 0,
  fy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  zc = typeof Promise == "function" ? Promise : void 0,
  dy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof zc < "u"
        ? function (e) {
            return zc.resolve(null).then(e).catch(hy);
          }
        : Al;
function hy(e) {
  setTimeout(function () {
    throw e;
  });
}
function _s(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Qr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Qr(t);
}
function Ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Bc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ur = Math.random().toString(36).slice(2),
  ot = "__reactFiber$" + ur,
  ei = "__reactProps$" + ur,
  Et = "__reactContainer$" + ur,
  jl = "__reactEvents$" + ur,
  py = "__reactListeners$" + ur,
  my = "__reactHandles$" + ur;
function dn(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Et] || n[ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Bc(e); e !== null; ) {
          if ((n = e[ot])) return n;
          e = Bc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function mi(e) {
  return (
    (e = e[ot] || e[Et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Xo(e) {
  return e[ei] || null;
}
var Dl = [],
  Dn = -1;
function Jt(e) {
  return { current: e };
}
function W(e) {
  0 > Dn || ((e.current = Dl[Dn]), (Dl[Dn] = null), Dn--);
}
function B(e, t) {
  Dn++, (Dl[Dn] = e.current), (e.current = t);
}
var bt = {},
  ve = Jt(bt),
  ke = Jt(!1),
  xn = bt;
function Zn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ne(e) {
  return (e = e.childContextTypes), e != null;
}
function wo() {
  W(ke), W(ve);
}
function Uc(e, t, n) {
  if (ve.current !== bt) throw Error(N(168));
  B(ve, t), B(ke, n);
}
function np(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(N(108, J0(e) || "Unknown", i));
  return Y({}, n, r);
}
function So(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || bt),
    (xn = ve.current),
    B(ve, e),
    B(ke, ke.current),
    !0
  );
}
function Wc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = np(e, t, xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(ke),
      W(ve),
      B(ve, e))
    : W(ke),
    B(ke, n);
}
var gt = null,
  Zo = !1,
  Vs = !1;
function rp(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
function gy(e) {
  (Zo = !0), rp(e);
}
function en() {
  if (!Vs && gt !== null) {
    Vs = !0;
    var e = 0,
      t = z;
    try {
      var n = gt;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (gt = null), (Zo = !1);
    } catch (i) {
      throw (gt !== null && (gt = gt.slice(e + 1)), Mh(Va, en), i);
    } finally {
      (z = t), (Vs = !1);
    }
  }
  return null;
}
var _n = [],
  Vn = 0,
  Co = null,
  Po = 0,
  Be = [],
  Ue = 0,
  wn = null,
  vt = 1,
  yt = "";
function an(e, t) {
  (_n[Vn++] = Po), (_n[Vn++] = Co), (Co = e), (Po = t);
}
function ip(e, t, n) {
  (Be[Ue++] = vt), (Be[Ue++] = yt), (Be[Ue++] = wn), (wn = e);
  var r = vt;
  e = yt;
  var i = 32 - qe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - qe(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (vt = (1 << (32 - qe(t) + i)) | (n << i) | r),
      (yt = o + e);
  } else (vt = (1 << o) | (n << i) | r), (yt = e);
}
function Ha(e) {
  e.return !== null && (an(e, 1), ip(e, 1, 0));
}
function Ka(e) {
  for (; e === Co; )
    (Co = _n[--Vn]), (_n[Vn] = null), (Po = _n[--Vn]), (_n[Vn] = null);
  for (; e === wn; )
    (wn = Be[--Ue]),
      (Be[Ue] = null),
      (yt = Be[--Ue]),
      (Be[Ue] = null),
      (vt = Be[--Ue]),
      (Be[Ue] = null);
}
var je = null,
  Ae = null,
  H = !1,
  Ze = null;
function op(e, t) {
  var n = $e(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function $c(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (Ae = Ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wn !== null ? { id: vt, overflow: yt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = $e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _l(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vl(e) {
  if (H) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!$c(e, t)) {
        if (_l(e)) throw Error(N(418));
        t = Ut(n.nextSibling);
        var r = je;
        t && $c(e, t)
          ? op(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (je = e));
      }
    } else {
      if (_l(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (je = e);
    }
  }
}
function Hc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function _i(e) {
  if (e !== je) return !1;
  if (!H) return Hc(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ll(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (_l(e)) throw (sp(), Error(N(418)));
    for (; t; ) op(e, t), (t = Ut(t.nextSibling));
  }
  if ((Hc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = je ? Ut(e.stateNode.nextSibling) : null;
  return !0;
}
function sp() {
  for (var e = Ae; e; ) e = Ut(e.nextSibling);
}
function qn() {
  (Ae = je = null), (H = !1);
}
function Ga(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
var vy = Nt.ReactCurrentBatchConfig;
function yr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Vi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Kc(e) {
  var t = e._init;
  return t(e._payload);
}
function lp(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Kt(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, h, m, S) {
    return h === null || h.tag !== 6
      ? ((h = Ws(m, p.mode, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function a(p, h, m, S) {
    var C = m.type;
    return C === Mn
      ? c(p, h, m.props.children, S, m.key)
      : h !== null &&
          (h.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === jt &&
              Kc(C) === h.type))
        ? ((S = i(h, m.props)), (S.ref = yr(p, h, m)), (S.return = p), S)
        : ((S = ro(m.type, m.key, m.props, null, p.mode, S)),
          (S.ref = yr(p, h, m)),
          (S.return = p),
          S);
  }
  function u(p, h, m, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = $s(m, p.mode, S)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, S, C) {
    return h === null || h.tag !== 7
      ? ((h = vn(m, p.mode, S, C)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Ws("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ei:
          return (
            (m = ro(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = yr(p, null, h)),
            (m.return = p),
            m
          );
        case Nn:
          return (h = $s(h, p.mode, m)), (h.return = p), h;
        case jt:
          var S = h._init;
          return f(p, S(h._payload), m);
      }
      if (Er(h) || hr(h))
        return (h = vn(h, p.mode, m, null)), (h.return = p), h;
      Vi(p, h);
    }
    return null;
  }
  function d(p, h, m, S) {
    var C = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return C !== null ? null : l(p, h, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ei:
          return m.key === C ? a(p, h, m, S) : null;
        case Nn:
          return m.key === C ? u(p, h, m, S) : null;
        case jt:
          return (C = m._init), d(p, h, C(m._payload), S);
      }
      if (Er(m) || hr(m)) return C !== null ? null : c(p, h, m, S, null);
      Vi(p, m);
    }
    return null;
  }
  function v(p, h, m, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(m) || null), l(h, p, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ei:
          return (p = p.get(S.key === null ? m : S.key) || null), a(h, p, S, C);
        case Nn:
          return (p = p.get(S.key === null ? m : S.key) || null), u(h, p, S, C);
        case jt:
          var E = S._init;
          return v(p, h, m, E(S._payload), C);
      }
      if (Er(S) || hr(S)) return (p = p.get(m) || null), c(h, p, S, C, null);
      Vi(h, S);
    }
    return null;
  }
  function y(p, h, m, S) {
    for (
      var C = null, E = null, T = h, k = (h = 0), R = null;
      T !== null && k < m.length;
      k++
    ) {
      T.index > k ? ((R = T), (T = null)) : (R = T.sibling);
      var A = d(p, T, m[k], S);
      if (A === null) {
        T === null && (T = R);
        break;
      }
      e && T && A.alternate === null && t(p, T),
        (h = o(A, h, k)),
        E === null ? (C = A) : (E.sibling = A),
        (E = A),
        (T = R);
    }
    if (k === m.length) return n(p, T), H && an(p, k), C;
    if (T === null) {
      for (; k < m.length; k++)
        (T = f(p, m[k], S)),
          T !== null &&
            ((h = o(T, h, k)), E === null ? (C = T) : (E.sibling = T), (E = T));
      return H && an(p, k), C;
    }
    for (T = r(p, T); k < m.length; k++)
      (R = v(T, p, k, m[k], S)),
        R !== null &&
          (e && R.alternate !== null && T.delete(R.key === null ? k : R.key),
          (h = o(R, h, k)),
          E === null ? (C = R) : (E.sibling = R),
          (E = R));
    return (
      e &&
        T.forEach(function (F) {
          return t(p, F);
        }),
      H && an(p, k),
      C
    );
  }
  function x(p, h, m, S) {
    var C = hr(m);
    if (typeof C != "function") throw Error(N(150));
    if (((m = C.call(m)), m == null)) throw Error(N(151));
    for (
      var E = (C = null), T = h, k = (h = 0), R = null, A = m.next();
      T !== null && !A.done;
      k++, A = m.next()
    ) {
      T.index > k ? ((R = T), (T = null)) : (R = T.sibling);
      var F = d(p, T, A.value, S);
      if (F === null) {
        T === null && (T = R);
        break;
      }
      e && T && F.alternate === null && t(p, T),
        (h = o(F, h, k)),
        E === null ? (C = F) : (E.sibling = F),
        (E = F),
        (T = R);
    }
    if (A.done) return n(p, T), H && an(p, k), C;
    if (T === null) {
      for (; !A.done; k++, A = m.next())
        (A = f(p, A.value, S)),
          A !== null &&
            ((h = o(A, h, k)), E === null ? (C = A) : (E.sibling = A), (E = A));
      return H && an(p, k), C;
    }
    for (T = r(p, T); !A.done; k++, A = m.next())
      (A = v(T, p, k, A.value, S)),
        A !== null &&
          (e && A.alternate !== null && T.delete(A.key === null ? k : A.key),
          (h = o(A, h, k)),
          E === null ? (C = A) : (E.sibling = A),
          (E = A));
    return (
      e &&
        T.forEach(function (Pe) {
          return t(p, Pe);
        }),
      H && an(p, k),
      C
    );
  }
  function P(p, h, m, S) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Mn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ei:
          e: {
            for (var C = m.key, E = h; E !== null; ) {
              if (E.key === C) {
                if (((C = m.type), C === Mn)) {
                  if (E.tag === 7) {
                    n(p, E.sibling),
                      (h = i(E, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === jt &&
                    Kc(C) === E.type)
                ) {
                  n(p, E.sibling),
                    (h = i(E, m.props)),
                    (h.ref = yr(p, E, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, E);
                break;
              } else t(p, E);
              E = E.sibling;
            }
            m.type === Mn
              ? ((h = vn(m.props.children, p.mode, S, m.key)),
                (h.return = p),
                (p = h))
              : ((S = ro(m.type, m.key, m.props, null, p.mode, S)),
                (S.ref = yr(p, h, m)),
                (S.return = p),
                (p = S));
          }
          return s(p);
        case Nn:
          e: {
            for (E = m.key; h !== null; ) {
              if (h.key === E)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = $s(m, p.mode, S)), (h.return = p), (p = h);
          }
          return s(p);
        case jt:
          return (E = m._init), P(p, h, E(m._payload), S);
      }
      if (Er(m)) return y(p, h, m, S);
      if (hr(m)) return x(p, h, m, S);
      Vi(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = Ws(m, p.mode, S)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return P;
}
var Jn = lp(!0),
  ap = lp(!1),
  Eo = Jt(null),
  To = null,
  On = null,
  ba = null;
function Ya() {
  ba = On = To = null;
}
function Qa(e) {
  var t = Eo.current;
  W(Eo), (e._currentValue = t);
}
function Ol(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yn(e, t) {
  (To = e),
    (ba = On = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Te = !0), (e.firstContext = null));
}
function Ke(e) {
  var t = e._currentValue;
  if (ba !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), On === null)) {
      if (To === null) throw Error(N(308));
      (On = e), (To.dependencies = { lanes: 0, firstContext: e });
    } else On = On.next = e;
  return t;
}
var hn = null;
function Xa(e) {
  hn === null ? (hn = [e]) : hn.push(e);
}
function up(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Xa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Tt(e, r)
  );
}
function Tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Dt = !1;
function Za(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Tt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Xa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Tt(e, n)
  );
}
function Zi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oa(e, n);
  }
}
function Gc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ko(e, t, n, r) {
  var i = e.updateQueue;
  Dt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        v = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            x = l;
          switch (((d = t), (v = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == "function")) {
                f = y.call(v, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (d = typeof y == "function" ? y.call(v, f, d) : y),
                d == null)
              )
                break e;
              f = Y({}, f, d);
              break e;
            case 2:
              Dt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (a = f)) : (c = c.next = v),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Cn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function bc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(N(191, i));
        i.call(r);
      }
    }
}
var gi = {},
  at = Jt(gi),
  ti = Jt(gi),
  ni = Jt(gi);
function pn(e) {
  if (e === gi) throw Error(N(174));
  return e;
}
function qa(e, t) {
  switch ((B(ni, t), B(ti, e), B(at, gi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : gl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = gl(t, e));
  }
  W(at), B(at, t);
}
function er() {
  W(at), W(ti), W(ni);
}
function fp(e) {
  pn(ni.current);
  var t = pn(at.current),
    n = gl(t, e.type);
  t !== n && (B(ti, e), B(at, n));
}
function Ja(e) {
  ti.current === e && (W(at), W(ti));
}
var G = Jt(0);
function No(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Os = [];
function eu() {
  for (var e = 0; e < Os.length; e++)
    Os[e]._workInProgressVersionPrimary = null;
  Os.length = 0;
}
var qi = Nt.ReactCurrentDispatcher,
  Is = Nt.ReactCurrentBatchConfig,
  Sn = 0,
  b = null,
  ne = null,
  oe = null,
  Mo = !1,
  _r = !1,
  ri = 0,
  yy = 0;
function he() {
  throw Error(N(321));
}
function tu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n])) return !1;
  return !0;
}
function nu(e, t, n, r, i, o) {
  if (
    ((Sn = o),
    (b = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (qi.current = e === null || e.memoizedState === null ? Cy : Py),
    (e = n(r, i)),
    _r)
  ) {
    o = 0;
    do {
      if (((_r = !1), (ri = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (oe = ne = null),
        (t.updateQueue = null),
        (qi.current = Ey),
        (e = n(r, i));
    } while (_r);
  }
  if (
    ((qi.current = Ro),
    (t = ne !== null && ne.next !== null),
    (Sn = 0),
    (oe = ne = b = null),
    (Mo = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function ru() {
  var e = ri !== 0;
  return (ri = 0), e;
}
function it() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return oe === null ? (b.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function Ge() {
  if (ne === null) {
    var e = b.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = oe === null ? b.memoizedState : oe.next;
  if (t !== null) (oe = t), (ne = e);
  else {
    if (e === null) throw Error(N(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      oe === null ? (b.memoizedState = oe = e) : (oe = oe.next = e);
  }
  return oe;
}
function ii(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Fs(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ne,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((Sn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (b.lanes |= c),
          (Cn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      et(r, t.memoizedState) || (Te = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (b.lanes |= o), (Cn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function zs(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    et(o, t.memoizedState) || (Te = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function dp() {}
function hp(e, t) {
  var n = b,
    r = Ge(),
    i = t(),
    o = !et(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Te = !0)),
    (r = r.queue),
    iu(gp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      oi(9, mp.bind(null, n, r, i, t), void 0, null),
      ae === null)
    )
      throw Error(N(349));
    Sn & 30 || pp(n, t, i);
  }
  return i;
}
function pp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = b.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (b.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function mp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), vp(t) && yp(e);
}
function gp(e, t, n) {
  return n(function () {
    vp(t) && yp(e);
  });
}
function vp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function yp(e) {
  var t = Tt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function Yc(e) {
  var t = it();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ii,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Sy.bind(null, b, e)),
    [t.memoizedState, e]
  );
}
function oi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = b.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (b.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xp() {
  return Ge().memoizedState;
}
function Ji(e, t, n, r) {
  var i = it();
  (b.flags |= e),
    (i.memoizedState = oi(1 | t, n, void 0, r === void 0 ? null : r));
}
function qo(e, t, n, r) {
  var i = Ge();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ne !== null) {
    var s = ne.memoizedState;
    if (((o = s.destroy), r !== null && tu(r, s.deps))) {
      i.memoizedState = oi(t, n, o, r);
      return;
    }
  }
  (b.flags |= e), (i.memoizedState = oi(1 | t, n, o, r));
}
function Qc(e, t) {
  return Ji(8390656, 8, e, t);
}
function iu(e, t) {
  return qo(2048, 8, e, t);
}
function wp(e, t) {
  return qo(4, 2, e, t);
}
function Sp(e, t) {
  return qo(4, 4, e, t);
}
function Cp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Pp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), qo(4, 4, Cp.bind(null, t, e), n)
  );
}
function ou() {}
function Ep(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Tp(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function kp(e, t, n) {
  return Sn & 21
    ? (et(n, t) || ((n = Ah()), (b.lanes |= n), (Cn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
}
function xy(e, t) {
  var n = z;
  (z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Is.transition;
  Is.transition = {};
  try {
    e(!1), t();
  } finally {
    (z = n), (Is.transition = r);
  }
}
function Np() {
  return Ge().memoizedState;
}
function wy(e, t, n) {
  var r = Ht(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Mp(e))
  )
    Rp(t, n);
  else if (((n = up(e, t, n, r)), n !== null)) {
    var i = we();
    Je(n, e, r, i), Lp(n, t, r);
  }
}
function Sy(e, t, n) {
  var r = Ht(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mp(e)) Rp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), et(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Xa(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = up(e, t, i, r)),
      n !== null && ((i = we()), Je(n, e, r, i), Lp(n, t, r));
  }
}
function Mp(e) {
  var t = e.alternate;
  return e === b || (t !== null && t === b);
}
function Rp(e, t) {
  _r = Mo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Lp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oa(e, n);
  }
}
var Ro = {
    readContext: Ke,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  Cy = {
    readContext: Ke,
    useCallback: function (e, t) {
      return (it().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ke,
    useEffect: Qc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ji(4194308, 4, Cp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ji(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ji(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = it();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = it();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = wy.bind(null, b, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = it();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Yc,
    useDebugValue: ou,
    useDeferredValue: function (e) {
      return (it().memoizedState = e);
    },
    useTransition: function () {
      var e = Yc(!1),
        t = e[0];
      return (e = xy.bind(null, e[1])), (it().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = b,
        i = it();
      if (H) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(N(349));
        Sn & 30 || pp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Qc(gp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        oi(9, mp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = it(),
        t = ae.identifierPrefix;
      if (H) {
        var n = yt,
          r = vt;
        (n = (r & ~(1 << (32 - qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ri++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = yy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Py = {
    readContext: Ke,
    useCallback: Ep,
    useContext: Ke,
    useEffect: iu,
    useImperativeHandle: Pp,
    useInsertionEffect: wp,
    useLayoutEffect: Sp,
    useMemo: Tp,
    useReducer: Fs,
    useRef: xp,
    useState: function () {
      return Fs(ii);
    },
    useDebugValue: ou,
    useDeferredValue: function (e) {
      var t = Ge();
      return kp(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Fs(ii)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: dp,
    useSyncExternalStore: hp,
    useId: Np,
    unstable_isNewReconciler: !1,
  },
  Ey = {
    readContext: Ke,
    useCallback: Ep,
    useContext: Ke,
    useEffect: iu,
    useImperativeHandle: Pp,
    useInsertionEffect: wp,
    useLayoutEffect: Sp,
    useMemo: Tp,
    useReducer: zs,
    useRef: xp,
    useState: function () {
      return zs(ii);
    },
    useDebugValue: ou,
    useDeferredValue: function (e) {
      var t = Ge();
      return ne === null ? (t.memoizedState = e) : kp(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = zs(ii)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: dp,
    useSyncExternalStore: hp,
    useId: Np,
    unstable_isNewReconciler: !1,
  };
function Qe(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Il(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Jo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      i = Ht(e),
      o = wt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Wt(e, o, i)),
      t !== null && (Je(t, e, i, r), Zi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      i = Ht(e),
      o = wt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Wt(e, o, i)),
      t !== null && (Je(t, e, i, r), Zi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = Ht(e),
      i = wt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Wt(e, i, r)),
      t !== null && (Je(t, e, r, n), Zi(t, e, r));
  },
};
function Xc(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Zr(n, r) || !Zr(i, o)
        : !0
  );
}
function Ap(e, t, n) {
  var r = !1,
    i = bt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ke(o))
      : ((i = Ne(t) ? xn : ve.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Zn(e, i) : bt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Jo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Zc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Jo.enqueueReplaceState(t, t.state, null);
}
function Fl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Za(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ke(o))
    : ((o = Ne(t) ? xn : ve.current), (i.context = Zn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Il(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Jo.enqueueReplaceState(i, i.state, null),
      ko(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function tr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += q0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Bs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ty = typeof WeakMap == "function" ? WeakMap : Map;
function jp(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ao || ((Ao = !0), (Ql = r)), zl(e, t);
    }),
    n
  );
}
function Dp(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        zl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        zl(e, t),
          typeof r != "function" &&
            ($t === null ? ($t = new Set([this])) : $t.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function qc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ty();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = zy.bind(null, e, t, n)), t.then(e, e));
}
function Jc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ef(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = wt(-1, 1)), (t.tag = 2), Wt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ky = Nt.ReactCurrentOwner,
  Te = !1;
function ye(e, t, n, r) {
  t.child = e === null ? ap(t, null, n, r) : Jn(t, e.child, n, r);
}
function tf(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Yn(t, i),
    (r = nu(e, t, n, r, o, i)),
    (n = ru()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        kt(e, t, i))
      : (H && n && Ha(t), (t.flags |= 1), ye(e, t, r, i), t.child)
  );
}
function nf(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !hu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), _p(e, t, o, r, i))
      : ((e = ro(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Zr), n(s, r) && e.ref === t.ref)
    )
      return kt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Kt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function _p(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Zr(o, r) && e.ref === t.ref)
      if (((Te = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Te = !0);
      else return (t.lanes = e.lanes), kt(e, t, i);
  }
  return Bl(e, t, n, r, i);
}
function Vp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(Fn, Le),
        (Le |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          B(Fn, Le),
          (Le |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        B(Fn, Le),
        (Le |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(Fn, Le),
      (Le |= r);
  return ye(e, t, i, n), t.child;
}
function Op(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Bl(e, t, n, r, i) {
  var o = Ne(n) ? xn : ve.current;
  return (
    (o = Zn(t, o)),
    Yn(t, i),
    (n = nu(e, t, n, r, o, i)),
    (r = ru()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        kt(e, t, i))
      : (H && r && Ha(t), (t.flags |= 1), ye(e, t, n, i), t.child)
  );
}
function rf(e, t, n, r, i) {
  if (Ne(n)) {
    var o = !0;
    So(t);
  } else o = !1;
  if ((Yn(t, i), t.stateNode === null))
    eo(e, t), Ap(t, n, r), Fl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ke(u))
      : ((u = Ne(n) ? xn : ve.current), (u = Zn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Zc(t, s, r, u)),
      (Dt = !1);
    var d = t.memoizedState;
    (s.state = d),
      ko(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || ke.current || Dt
        ? (typeof c == "function" && (Il(t, n, c, r), (a = t.memoizedState)),
          (l = Dt || Xc(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      cp(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Qe(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ke(a))
        : ((a = Ne(n) ? xn : ve.current), (a = Zn(t, a)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && Zc(t, s, r, a)),
      (Dt = !1),
      (d = t.memoizedState),
      (s.state = d),
      ko(t, r, s, i);
    var y = t.memoizedState;
    l !== f || d !== y || ke.current || Dt
      ? (typeof v == "function" && (Il(t, n, v, r), (y = t.memoizedState)),
        (u = Dt || Xc(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ul(e, t, n, r, o, i);
}
function Ul(e, t, n, r, i, o) {
  Op(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Wc(t, n, !1), kt(e, t, o);
  (r = t.stateNode), (ky.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Jn(t, e.child, null, o)), (t.child = Jn(t, null, l, o)))
      : ye(e, t, l, o),
    (t.memoizedState = r.state),
    i && Wc(t, n, !0),
    t.child
  );
}
function Ip(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Uc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Uc(e, t.context, !1),
    qa(e, t.containerInfo);
}
function of(e, t, n, r, i) {
  return qn(), Ga(i), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var Wl = { dehydrated: null, treeContext: null, retryLane: 0 };
function $l(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fp(e, t, n) {
  var r = t.pendingProps,
    i = G.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    B(G, i & 1),
    e === null)
  )
    return (
      Vl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = ns(s, r, 0, null)),
              (e = vn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = $l(n)),
              (t.memoizedState = Wl),
              e)
            : su(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Ny(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Kt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Kt(l, o)) : ((o = vn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? $l(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Wl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Kt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function su(e, t) {
  return (
    (t = ns({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Oi(e, t, n, r) {
  return (
    r !== null && Ga(r),
    Jn(t, e.child, null, n),
    (e = su(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ny(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Bs(Error(N(422)))), Oi(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = ns({ mode: "visible", children: r.children }, i, 0, null)),
          (o = vn(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Jn(t, e.child, null, s),
          (t.child.memoizedState = $l(s)),
          (t.memoizedState = Wl),
          o);
  if (!(t.mode & 1)) return Oi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(N(419))), (r = Bs(o, r, void 0)), Oi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Te || l)) {
    if (((r = ae), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Tt(e, i), Je(r, e, i, -1));
    }
    return du(), (r = Bs(Error(N(421)))), Oi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = By.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ae = Ut(i.nextSibling)),
      (je = t),
      (H = !0),
      (Ze = null),
      e !== null &&
        ((Be[Ue++] = vt),
        (Be[Ue++] = yt),
        (Be[Ue++] = wn),
        (vt = e.id),
        (yt = e.overflow),
        (wn = t)),
      (t = su(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ol(e.return, t, n);
}
function Us(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function zp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ye(e, t, r.children, n), (r = G.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sf(e, n, t);
        else if (e.tag === 19) sf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((B(G, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && No(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Us(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && No(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Us(t, !0, n, null, o);
        break;
      case "together":
        Us(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function eo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Cn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Kt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function My(e, t, n) {
  switch (t.tag) {
    case 3:
      Ip(t), qn();
      break;
    case 5:
      fp(t);
      break;
    case 1:
      Ne(t.type) && So(t);
      break;
    case 4:
      qa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      B(Eo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(G, G.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Fp(e, t, n)
            : (B(G, G.current & 1),
              (e = kt(e, t, n)),
              e !== null ? e.sibling : null);
      B(G, G.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return zp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        B(G, G.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Vp(e, t, n);
  }
  return kt(e, t, n);
}
var Bp, Hl, Up, Wp;
Bp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Hl = function () {};
Up = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), pn(at.current);
    var o = null;
    switch (n) {
      case "input":
        (i = dl(e, i)), (r = dl(e, r)), (o = []);
        break;
      case "select":
        (i = Y({}, i, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = ml(e, i)), (r = ml(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = xo);
    }
    vl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Hr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (o = o || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Hr.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && U("scroll", e),
                    o || l === a || (o = []))
                  : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Wp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xr(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ry(e, t, n) {
  var r = t.pendingProps;
  switch ((Ka(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(t), null;
    case 1:
      return Ne(t.type) && wo(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        er(),
        W(ke),
        W(ve),
        eu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_i(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ze !== null && (ql(Ze), (Ze = null)))),
        Hl(e, t),
        pe(t),
        null
      );
    case 5:
      Ja(t);
      var i = pn(ni.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Up(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return pe(t), null;
        }
        if (((e = pn(at.current)), _i(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ot] = t), (r[ei] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < kr.length; i++) U(kr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              pc(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              gc(r, o), U("invalid", r);
          }
          vl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Di(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Di(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Hr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              Ti(r), mc(r, o, !0);
              break;
            case "textarea":
              Ti(r), vc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = xo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = gh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[ot] = t),
            (e[ei] = r),
            Bp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = yl(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < kr.length; i++) U(kr[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                pc(e, r), (i = dl(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Y({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                gc(e, r), (i = ml(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            vl(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? xh(e, a)
                  : o === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && vh(e, a))
                    : o === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Kr(e, a)
                        : typeof a == "number" && Kr(e, "" + a)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Hr.hasOwnProperty(o)
                          ? a != null && o === "onScroll" && U("scroll", e)
                          : a != null && La(e, o, a, s));
              }
            switch (n) {
              case "input":
                Ti(e), mc(e, r, !1);
                break;
              case "textarea":
                Ti(e), vc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Hn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Hn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = xo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) Wp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = pn(ni.current)), pn(at.current), _i(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ot] = t),
            (o = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Di(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Di(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ot] = t),
            (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (W(G),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Ae !== null && t.mode & 1 && !(t.flags & 128))
          sp(), qn(), (t.flags |= 98560), (o = !1);
        else if (((o = _i(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[ot] = t;
          } else
            qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (o = !1);
        } else Ze !== null && (ql(Ze), (Ze = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? re === 0 && (re = 3) : du())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        er(), Hl(e, t), e === null && qr(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return Qa(t.type._context), pe(t), null;
    case 17:
      return Ne(t.type) && wo(), pe(t), null;
    case 19:
      if ((W(G), (o = t.memoizedState), o === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) xr(o, !1);
        else {
          if (re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = No(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    xr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return B(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            J() > nr &&
            ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = No(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !H)
            )
              return pe(t), null;
          } else
            2 * J() - o.renderingStartTime > nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = J()),
          (t.sibling = null),
          (n = G.current),
          B(G, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        fu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Le & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Ly(e, t) {
  switch ((Ka(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && wo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        W(ke),
        W(ve),
        eu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ja(t), null;
    case 13:
      if ((W(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        qn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(G), null;
    case 4:
      return er(), null;
    case 10:
      return Qa(t.type._context), null;
    case 22:
    case 23:
      return fu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ii = !1,
  ge = !1,
  Ay = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function In(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function Kl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var lf = !1;
function jy(e, t) {
  if (((Ml = go), (e = bh()), $a(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (d = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = v;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Rl = { focusedElem: e, selectionRange: n }, go = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    P = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Qe(t.type, x),
                      P
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (S) {
          X(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (y = lf), (lf = !1), y;
}
function Vr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Kl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function es(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Gl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function $p(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $p(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ot], delete t[ei], delete t[jl], delete t[py], delete t[my])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function af(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = xo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bl(e, t, n), e = e.sibling; e !== null; ) bl(e, t, n), (e = e.sibling);
}
function Yl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yl(e, t, n), e = e.sibling; e !== null; ) Yl(e, t, n), (e = e.sibling);
}
var ue = null,
  Xe = !1;
function Rt(e, t, n) {
  for (n = n.child; n !== null; ) Kp(e, t, n), (n = n.sibling);
}
function Kp(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
      lt.onCommitFiberUnmount(Go, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ge || In(n, t);
    case 6:
      var r = ue,
        i = Xe;
      (ue = null),
        Rt(e, t, n),
        (ue = r),
        (Xe = i),
        ue !== null &&
          (Xe
            ? ((e = ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null &&
        (Xe
          ? ((e = ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? _s(e.parentNode, n)
              : e.nodeType === 1 && _s(e, n),
            Qr(e))
          : _s(ue, n.stateNode));
      break;
    case 4:
      (r = ue),
        (i = Xe),
        (ue = n.stateNode.containerInfo),
        (Xe = !0),
        Rt(e, t, n),
        (ue = r),
        (Xe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ge &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Kl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Rt(e, t, n);
      break;
    case 1:
      if (
        !ge &&
        (In(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          X(n, t, l);
        }
      Rt(e, t, n);
      break;
    case 21:
      Rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ge = (r = ge) || n.memoizedState !== null), Rt(e, t, n), (ge = r))
        : Rt(e, t, n);
      break;
    default:
      Rt(e, t, n);
  }
}
function uf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ay()),
      t.forEach(function (r) {
        var i = Uy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ye(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ue = l.stateNode), (Xe = !1);
              break e;
            case 3:
              (ue = l.stateNode.containerInfo), (Xe = !0);
              break e;
            case 4:
              (ue = l.stateNode.containerInfo), (Xe = !0);
              break e;
          }
          l = l.return;
        }
        if (ue === null) throw Error(N(160));
        Kp(o, s, i), (ue = null), (Xe = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        X(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Gp(t, e), (t = t.sibling);
}
function Gp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ye(t, e), rt(e), r & 4)) {
        try {
          Vr(3, e, e.return), es(3, e);
        } catch (x) {
          X(e, e.return, x);
        }
        try {
          Vr(5, e, e.return);
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 1:
      Ye(t, e), rt(e), r & 512 && n !== null && In(n, n.return);
      break;
    case 5:
      if (
        (Ye(t, e),
        rt(e),
        r & 512 && n !== null && In(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Kr(i, "");
        } catch (x) {
          X(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && ph(i, o),
              yl(l, s);
            var u = yl(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? xh(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? vh(i, f)
                  : c === "children"
                    ? Kr(i, f)
                    : La(i, c, f, u);
            }
            switch (l) {
              case "input":
                hl(i, o);
                break;
              case "textarea":
                mh(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Hn(i, !!o.multiple, v, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Hn(i, !!o.multiple, o.defaultValue, !0)
                      : Hn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ei] = o;
          } catch (x) {
            X(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Ye(t, e), rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Ye(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Qr(t.containerInfo);
        } catch (x) {
          X(e, e.return, x);
        }
      break;
    case 4:
      Ye(t, e), rt(e);
      break;
    case 13:
      Ye(t, e),
        rt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (uu = J())),
        r & 4 && uf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ge = (u = ge) || c), Ye(t, e), (ge = u)) : Ye(t, e),
        rt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((d = L), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vr(4, d, d.return);
                  break;
                case 1:
                  In(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (x) {
                      X(r, n, x);
                    }
                  }
                  break;
                case 5:
                  In(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    ff(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = d), (L = v)) : ff(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = yh("display", s)));
              } catch (x) {
                X(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (x) {
                X(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ye(t, e), rt(e), r & 4 && uf(e);
      break;
    case 21:
      break;
    default:
      Ye(t, e), rt(e);
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Kr(i, ""), (r.flags &= -33));
          var o = af(e);
          Yl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = af(e);
          bl(e, l, s);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dy(e, t, n) {
  (L = e), bp(e);
}
function bp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ii;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || ge;
        l = Ii;
        var u = ge;
        if (((Ii = s), (ge = a) && !u))
          for (L = i; L !== null; )
            (s = L),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? df(i)
                : a !== null
                  ? ((a.return = s), (L = a))
                  : df(i);
        for (; o !== null; ) (L = o), bp(o), (o = o.sibling);
        (L = i), (Ii = l), (ge = u);
      }
      cf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : cf(e);
  }
}
function cf(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || es(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && bc(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                bc(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Qr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        ge || (t.flags & 512 && Gl(t));
      } catch (d) {
        X(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function ff(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function df(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            es(4, t);
          } catch (a) {
            X(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(t, i, a);
            }
          }
          var o = t.return;
          try {
            Gl(t);
          } catch (a) {
            X(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Gl(t);
          } catch (a) {
            X(t, s, a);
          }
      }
    } catch (a) {
      X(t, t.return, a);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (L = l);
      break;
    }
    L = t.return;
  }
}
var _y = Math.ceil,
  Lo = Nt.ReactCurrentDispatcher,
  lu = Nt.ReactCurrentOwner,
  He = Nt.ReactCurrentBatchConfig,
  I = 0,
  ae = null,
  ee = null,
  ce = 0,
  Le = 0,
  Fn = Jt(0),
  re = 0,
  si = null,
  Cn = 0,
  ts = 0,
  au = 0,
  Or = null,
  Ee = null,
  uu = 0,
  nr = 1 / 0,
  mt = null,
  Ao = !1,
  Ql = null,
  $t = null,
  Fi = !1,
  It = null,
  jo = 0,
  Ir = 0,
  Xl = null,
  to = -1,
  no = 0;
function we() {
  return I & 6 ? J() : to !== -1 ? to : (to = J());
}
function Ht(e) {
  return e.mode & 1
    ? I & 2 && ce !== 0
      ? ce & -ce
      : vy.transition !== null
        ? (no === 0 && (no = Ah()), no)
        : ((e = z),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fh(e.type))),
          e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < Ir) throw ((Ir = 0), (Xl = null), Error(N(185)));
  hi(e, n, r),
    (!(I & 2) || e !== ae) &&
      (e === ae && (!(I & 2) && (ts |= n), re === 4 && Vt(e, ce)),
      Me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((nr = J() + 500), Zo && en()));
}
function Me(e, t) {
  var n = e.callbackNode;
  vv(e, t);
  var r = mo(e, e === ae ? ce : 0);
  if (r === 0)
    n !== null && wc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && wc(n), t === 1))
      e.tag === 0 ? gy(hf.bind(null, e)) : rp(hf.bind(null, e)),
        dy(function () {
          !(I & 6) && en();
        }),
        (n = null);
    else {
      switch (jh(r)) {
        case 1:
          n = Va;
          break;
        case 4:
          n = Rh;
          break;
        case 16:
          n = po;
          break;
        case 536870912:
          n = Lh;
          break;
        default:
          n = po;
      }
      n = tm(n, Yp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Yp(e, t) {
  if (((to = -1), (no = 0), I & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Qn() && e.callbackNode !== n) return null;
  var r = mo(e, e === ae ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Do(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var o = Xp();
    (ae !== e || ce !== t) && ((mt = null), (nr = J() + 500), gn(e, t));
    do
      try {
        Iy();
        break;
      } catch (l) {
        Qp(e, l);
      }
    while (!0);
    Ya(),
      (Lo.current = o),
      (I = i),
      ee !== null ? (t = 0) : ((ae = null), (ce = 0), (t = re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Pl(e)), i !== 0 && ((r = i), (t = Zl(e, i)))), t === 1)
    )
      throw ((n = si), gn(e, 0), Vt(e, r), Me(e, J()), n);
    if (t === 6) Vt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Vy(i) &&
          ((t = Do(e, r)),
          t === 2 && ((o = Pl(e)), o !== 0 && ((r = o), (t = Zl(e, o)))),
          t === 1))
      )
        throw ((n = si), gn(e, 0), Vt(e, r), Me(e, J()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          un(e, Ee, mt);
          break;
        case 3:
          if (
            (Vt(e, r), (r & 130023424) === r && ((t = uu + 500 - J()), 10 < t))
          ) {
            if (mo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Al(un.bind(null, e, Ee, mt), t);
            break;
          }
          un(e, Ee, mt);
          break;
        case 4:
          if ((Vt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - qe(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * _y(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Al(un.bind(null, e, Ee, mt), r);
            break;
          }
          un(e, Ee, mt);
          break;
        case 5:
          un(e, Ee, mt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Me(e, J()), e.callbackNode === n ? Yp.bind(null, e) : null;
}
function Zl(e, t) {
  var n = Or;
  return (
    e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
    (e = Do(e, t)),
    e !== 2 && ((t = Ee), (Ee = n), t !== null && ql(t)),
    e
  );
}
function ql(e) {
  Ee === null ? (Ee = e) : Ee.push.apply(Ee, e);
}
function Vy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!et(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Vt(e, t) {
  for (
    t &= ~au,
      t &= ~ts,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function hf(e) {
  if (I & 6) throw Error(N(327));
  Qn();
  var t = mo(e, 0);
  if (!(t & 1)) return Me(e, J()), null;
  var n = Do(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pl(e);
    r !== 0 && ((t = r), (n = Zl(e, r)));
  }
  if (n === 1) throw ((n = si), gn(e, 0), Vt(e, t), Me(e, J()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    un(e, Ee, mt),
    Me(e, J()),
    null
  );
}
function cu(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((nr = J() + 500), Zo && en());
  }
}
function Pn(e) {
  It !== null && It.tag === 0 && !(I & 6) && Qn();
  var t = I;
  I |= 1;
  var n = He.transition,
    r = z;
  try {
    if (((He.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), (He.transition = n), (I = t), !(I & 6) && en();
  }
}
function fu() {
  (Le = Fn.current), W(Fn);
}
function gn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), fy(n)), ee !== null))
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ((Ka(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && wo();
          break;
        case 3:
          er(), W(ke), W(ve), eu();
          break;
        case 5:
          Ja(r);
          break;
        case 4:
          er();
          break;
        case 13:
          W(G);
          break;
        case 19:
          W(G);
          break;
        case 10:
          Qa(r.type._context);
          break;
        case 22:
        case 23:
          fu();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (ee = e = Kt(e.current, null)),
    (ce = Le = t),
    (re = 0),
    (si = null),
    (au = ts = Cn = 0),
    (Ee = Or = null),
    hn !== null)
  ) {
    for (t = 0; t < hn.length; t++)
      if (((n = hn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    hn = null;
  }
  return e;
}
function Qp(e, t) {
  do {
    var n = ee;
    try {
      if ((Ya(), (qi.current = Ro), Mo)) {
        for (var r = b.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Mo = !1;
      }
      if (
        ((Sn = 0),
        (oe = ne = b = null),
        (_r = !1),
        (ri = 0),
        (lu.current = null),
        n === null || n.return === null)
      ) {
        (re = 1), (si = t), (ee = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = ce),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = Jc(s);
          if (v !== null) {
            (v.flags &= -257),
              ef(v, s, l, o, t),
              v.mode & 1 && qc(o, u, t),
              (t = v),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              qc(o, u, t), du();
              break e;
            }
            a = Error(N(426));
          }
        } else if (H && l.mode & 1) {
          var P = Jc(s);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              ef(P, s, l, o, t),
              Ga(tr(a, l));
            break e;
          }
        }
        (o = a = tr(a, l)),
          re !== 4 && (re = 2),
          Or === null ? (Or = [o]) : Or.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = jp(o, a, t);
              Gc(o, p);
              break e;
            case 1:
              l = a;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    ($t === null || !$t.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Dp(o, l, t);
                Gc(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      qp(n);
    } catch (C) {
      (t = C), ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xp() {
  var e = Lo.current;
  return (Lo.current = Ro), e === null ? Ro : e;
}
function du() {
  (re === 0 || re === 3 || re === 2) && (re = 4),
    ae === null || (!(Cn & 268435455) && !(ts & 268435455)) || Vt(ae, ce);
}
function Do(e, t) {
  var n = I;
  I |= 2;
  var r = Xp();
  (ae !== e || ce !== t) && ((mt = null), gn(e, t));
  do
    try {
      Oy();
      break;
    } catch (i) {
      Qp(e, i);
    }
  while (!0);
  if ((Ya(), (I = n), (Lo.current = r), ee !== null)) throw Error(N(261));
  return (ae = null), (ce = 0), re;
}
function Oy() {
  for (; ee !== null; ) Zp(ee);
}
function Iy() {
  for (; ee !== null && !av(); ) Zp(ee);
}
function Zp(e) {
  var t = em(e.alternate, e, Le);
  (e.memoizedProps = e.pendingProps),
    t === null ? qp(e) : (ee = t),
    (lu.current = null);
}
function qp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ly(n, t)), n !== null)) {
        (n.flags &= 32767), (ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (re = 6), (ee = null);
        return;
      }
    } else if (((n = Ry(n, t, Le)), n !== null)) {
      ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function un(e, t, n) {
  var r = z,
    i = He.transition;
  try {
    (He.transition = null), (z = 1), Fy(e, t, n, r);
  } finally {
    (He.transition = i), (z = r);
  }
  return null;
}
function Fy(e, t, n, r) {
  do Qn();
  while (It !== null);
  if (I & 6) throw Error(N(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (yv(e, o),
    e === ae && ((ee = ae = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fi ||
      ((Fi = !0),
      tm(po, function () {
        return Qn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = He.transition), (He.transition = null);
    var s = z;
    z = 1;
    var l = I;
    (I |= 4),
      (lu.current = null),
      jy(e, n),
      Gp(n, e),
      iy(Rl),
      (go = !!Ml),
      (Rl = Ml = null),
      (e.current = n),
      Dy(n),
      uv(),
      (I = l),
      (z = s),
      (He.transition = o);
  } else e.current = n;
  if (
    (Fi && ((Fi = !1), (It = e), (jo = i)),
    (o = e.pendingLanes),
    o === 0 && ($t = null),
    dv(n.stateNode),
    Me(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ao) throw ((Ao = !1), (e = Ql), (Ql = null), e);
  return (
    jo & 1 && e.tag !== 0 && Qn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Xl ? Ir++ : ((Ir = 0), (Xl = e))) : (Ir = 0),
    en(),
    null
  );
}
function Qn() {
  if (It !== null) {
    var e = jh(jo),
      t = He.transition,
      n = z;
    try {
      if (((He.transition = null), (z = 16 > e ? 16 : e), It === null))
        var r = !1;
      else {
        if (((e = It), (It = null), (jo = 0), I & 6)) throw Error(N(331));
        var i = I;
        for (I |= 4, L = e.current; L !== null; ) {
          var o = L,
            s = o.child;
          if (L.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (L = f);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var d = c.sibling,
                        v = c.return;
                      if (($p(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = v), (L = d);
                        break;
                      }
                      L = v;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var P = x.sibling;
                    (x.sibling = null), (x = P);
                  } while (x !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (L = s);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vr(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (L = p);
                break e;
              }
              L = o.return;
            }
        }
        var h = e.current;
        for (L = h; L !== null; ) {
          s = L;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (L = m);
          else
            e: for (s = h; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      es(9, l);
                  }
                } catch (C) {
                  X(l, l.return, C);
                }
              if (l === s) {
                L = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (L = S);
                break e;
              }
              L = l.return;
            }
        }
        if (
          ((I = i), en(), lt && typeof lt.onPostCommitFiberRoot == "function")
        )
          try {
            lt.onPostCommitFiberRoot(Go, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), (He.transition = t);
    }
  }
  return !1;
}
function pf(e, t, n) {
  (t = tr(n, t)),
    (t = jp(e, t, 1)),
    (e = Wt(e, t, 1)),
    (t = we()),
    e !== null && (hi(e, 1, t), Me(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) pf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        pf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            ($t === null || !$t.has(r)))
        ) {
          (e = tr(n, e)),
            (e = Dp(t, e, 1)),
            (t = Wt(t, e, 1)),
            (e = we()),
            t !== null && (hi(t, 1, e), Me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function zy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (ce & n) === n &&
      (re === 4 || (re === 3 && (ce & 130023424) === ce && 500 > J() - uu)
        ? gn(e, 0)
        : (au |= n)),
    Me(e, t);
}
function Jp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Mi), (Mi <<= 1), !(Mi & 130023424) && (Mi = 4194304))
      : (t = 1));
  var n = we();
  (e = Tt(e, t)), e !== null && (hi(e, t, n), Me(e, n));
}
function By(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Jp(e, n);
}
function Uy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), Jp(e, n);
}
var em;
em = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ke.current) Te = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Te = !1), My(e, t, n);
      Te = !!(e.flags & 131072);
    }
  else (Te = !1), H && t.flags & 1048576 && ip(t, Po, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      eo(e, t), (e = t.pendingProps);
      var i = Zn(t, ve.current);
      Yn(t, n), (i = nu(null, t, r, e, i, n));
      var o = ru();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(r) ? ((o = !0), So(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Za(t),
            (i.updater = Jo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Fl(t, r, e, n),
            (t = Ul(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && Ha(t), ye(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (eo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = $y(r)),
          (e = Qe(r, e)),
          i)
        ) {
          case 0:
            t = Bl(null, t, r, e, n);
            break e;
          case 1:
            t = rf(null, t, r, e, n);
            break e;
          case 11:
            t = tf(null, t, r, e, n);
            break e;
          case 14:
            t = nf(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        Bl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        rf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Ip(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          cp(e, t),
          ko(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = tr(Error(N(423)), t)), (t = of(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = tr(Error(N(424)), t)), (t = of(e, t, r, n, i));
            break e;
          } else
            for (
              Ae = Ut(t.stateNode.containerInfo.firstChild),
                je = t,
                H = !0,
                Ze = null,
                n = ap(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((qn(), r === i)) {
            t = kt(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        fp(t),
        e === null && Vl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Ll(r, i) ? (s = null) : o !== null && Ll(r, o) && (t.flags |= 32),
        Op(e, t),
        ye(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Vl(t), null;
    case 13:
      return Fp(e, t, n);
    case 4:
      return (
        qa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Jn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        tf(e, t, r, i, n)
      );
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          B(Eo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (et(o.value, s)) {
            if (o.children === i.children && !ke.current) {
              t = kt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = wt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Ol(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(N(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Ol(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ye(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Yn(t, n),
        (i = Ke(i)),
        (r = r(i)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Qe(r, t.pendingProps)),
        (i = Qe(r.type, i)),
        nf(e, t, r, i, n)
      );
    case 15:
      return _p(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        eo(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), So(t)) : (e = !1),
        Yn(t, n),
        Ap(t, r, i),
        Fl(t, r, i, n),
        Ul(null, t, r, !0, e, n)
      );
    case 19:
      return zp(e, t, n);
    case 22:
      return Vp(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function tm(e, t) {
  return Mh(e, t);
}
function Wy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function $e(e, t, n, r) {
  return new Wy(e, t, n, r);
}
function hu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $y(e) {
  if (typeof e == "function") return hu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ja)) return 11;
    if (e === Da) return 14;
  }
  return 2;
}
function Kt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = $e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ro(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) hu(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Mn:
        return vn(n.children, i, o, t);
      case Aa:
        (s = 8), (i |= 8);
        break;
      case al:
        return (
          (e = $e(12, n, t, i | 2)), (e.elementType = al), (e.lanes = o), e
        );
      case ul:
        return (e = $e(13, n, t, i)), (e.elementType = ul), (e.lanes = o), e;
      case cl:
        return (e = $e(19, n, t, i)), (e.elementType = cl), (e.lanes = o), e;
      case fh:
        return ns(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case uh:
              s = 10;
              break e;
            case ch:
              s = 9;
              break e;
            case ja:
              s = 11;
              break e;
            case Da:
              s = 14;
              break e;
            case jt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = $e(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function vn(e, t, n, r) {
  return (e = $e(7, e, r, t)), (e.lanes = n), e;
}
function ns(e, t, n, r) {
  return (
    (e = $e(22, e, r, t)),
    (e.elementType = fh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ws(e, t, n) {
  return (e = $e(6, e, null, t)), (e.lanes = n), e;
}
function $s(e, t, n) {
  return (
    (t = $e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Hy(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ps(0)),
    (this.expirationTimes = Ps(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ps(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function pu(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new Hy(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = $e(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Za(o),
    e
  );
}
function Ky(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Nn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nm(e) {
  if (!e) return bt;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return np(e, n, t);
  }
  return t;
}
function rm(e, t, n, r, i, o, s, l, a) {
  return (
    (e = pu(n, r, !0, e, i, o, s, l, a)),
    (e.context = nm(null)),
    (n = e.current),
    (r = we()),
    (i = Ht(n)),
    (o = wt(r, i)),
    (o.callback = t ?? null),
    Wt(n, o, i),
    (e.current.lanes = i),
    hi(e, i, r),
    Me(e, r),
    e
  );
}
function rs(e, t, n, r) {
  var i = t.current,
    o = we(),
    s = Ht(i);
  return (
    (n = nm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Wt(i, t, s)),
    e !== null && (Je(e, i, s, o), Zi(e, i, s)),
    s
  );
}
function _o(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function mu(e, t) {
  mf(e, t), (e = e.alternate) && mf(e, t);
}
function Gy() {
  return null;
}
var im =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function gu(e) {
  this._internalRoot = e;
}
is.prototype.render = gu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  rs(e, t, null, null);
};
is.prototype.unmount = gu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Pn(function () {
      rs(null, e, null, null);
    }),
      (t[Et] = null);
  }
};
function is(e) {
  this._internalRoot = e;
}
is.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Vh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < _t.length && t !== 0 && t < _t[n].priority; n++);
    _t.splice(n, 0, e), n === 0 && Ih(e);
  }
};
function vu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function os(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function gf() {}
function by(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = _o(s);
        o.call(u);
      };
    }
    var s = rm(t, r, e, 0, null, !1, !1, "", gf);
    return (
      (e._reactRootContainer = s),
      (e[Et] = s.current),
      qr(e.nodeType === 8 ? e.parentNode : e),
      Pn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = _o(a);
      l.call(u);
    };
  }
  var a = pu(e, 0, !1, null, null, !1, !1, "", gf);
  return (
    (e._reactRootContainer = a),
    (e[Et] = a.current),
    qr(e.nodeType === 8 ? e.parentNode : e),
    Pn(function () {
      rs(t, a, n, r);
    }),
    a
  );
}
function ss(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = _o(s);
        l.call(a);
      };
    }
    rs(t, s, e, i);
  } else s = by(n, t, e, i, r);
  return _o(s);
}
Dh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Tr(t.pendingLanes);
        n !== 0 &&
          (Oa(t, n | 1), Me(t, J()), !(I & 6) && ((nr = J() + 500), en()));
      }
      break;
    case 13:
      Pn(function () {
        var r = Tt(e, 1);
        if (r !== null) {
          var i = we();
          Je(r, e, 1, i);
        }
      }),
        mu(e, 1);
  }
};
Ia = function (e) {
  if (e.tag === 13) {
    var t = Tt(e, 134217728);
    if (t !== null) {
      var n = we();
      Je(t, e, 134217728, n);
    }
    mu(e, 134217728);
  }
};
_h = function (e) {
  if (e.tag === 13) {
    var t = Ht(e),
      n = Tt(e, t);
    if (n !== null) {
      var r = we();
      Je(n, e, t, r);
    }
    mu(e, t);
  }
};
Vh = function () {
  return z;
};
Oh = function (e, t) {
  var n = z;
  try {
    return (z = e), t();
  } finally {
    z = n;
  }
};
wl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((hl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Xo(r);
            if (!i) throw Error(N(90));
            hh(r), hl(r, i);
          }
        }
      }
      break;
    case "textarea":
      mh(e, n);
      break;
    case "select":
      (t = n.value), t != null && Hn(e, !!n.multiple, t, !1);
  }
};
Ch = cu;
Ph = Pn;
var Yy = { usingClientEntryPoint: !1, Events: [mi, jn, Xo, wh, Sh, cu] },
  wr = {
    findFiberByHostInstance: dn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Qy = {
    bundleType: wr.bundleType,
    version: wr.version,
    rendererPackageName: wr.rendererPackageName,
    rendererConfig: wr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = kh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wr.findFiberByHostInstance || Gy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zi.isDisabled && zi.supportsFiber)
    try {
      (Go = zi.inject(Qy)), (lt = zi);
    } catch {}
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yy;
Ve.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!vu(t)) throw Error(N(200));
  return Ky(e, t, null, n);
};
Ve.createRoot = function (e, t) {
  if (!vu(e)) throw Error(N(299));
  var n = !1,
    r = "",
    i = im;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = pu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Et] = t.current),
    qr(e.nodeType === 8 ? e.parentNode : e),
    new gu(t)
  );
};
Ve.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = kh(t)), (e = e === null ? null : e.stateNode), e;
};
Ve.flushSync = function (e) {
  return Pn(e);
};
Ve.hydrate = function (e, t, n) {
  if (!os(t)) throw Error(N(200));
  return ss(null, e, t, !0, n);
};
Ve.hydrateRoot = function (e, t, n) {
  if (!vu(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = im;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = rm(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Et] = t.current),
    qr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new is(t);
};
Ve.render = function (e, t, n) {
  if (!os(t)) throw Error(N(200));
  return ss(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function (e) {
  if (!os(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Pn(function () {
        ss(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Et] = null);
        });
      }),
      !0)
    : !1;
};
Ve.unstable_batchedUpdates = cu;
Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!os(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return ss(e, t, n, !1, r);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function om() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(om);
    } catch (e) {
      console.error(e);
    }
}
om(), (oh.exports = Ve);
var yu = oh.exports;
const Xy = bd(yu);
var sm,
  vf = yu;
(sm = vf.createRoot), vf.hydrateRoot;
const Zy = "/assets/video-Cuf83iNd.mp4";
function qy(e, t = []) {
  let n = [];
  function r(o, s) {
    const l = w.createContext(s),
      a = n.length;
    n = [...n, s];
    const u = (f) => {
      var p;
      const { scope: d, children: v, ...y } = f,
        x = ((p = d == null ? void 0 : d[e]) == null ? void 0 : p[a]) || l,
        P = w.useMemo(() => y, Object.values(y));
      return g.jsx(x.Provider, { value: P, children: v });
    };
    u.displayName = o + "Provider";
    function c(f, d) {
      var x;
      const v = ((x = d == null ? void 0 : d[e]) == null ? void 0 : x[a]) || l,
        y = w.useContext(v);
      if (y) return y;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return [u, c];
  }
  const i = () => {
    const o = n.map((s) => w.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || o;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (i.scopeName = e), [r, Jy(i, ...t)];
}
function Jy(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (o) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const f = a(o)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function se(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (i) {
    if ((e == null || e(i), n === !1 || !i.defaultPrevented))
      return t == null ? void 0 : t(i);
  };
}
function e1(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function xu(...e) {
  return (t) => e.forEach((n) => e1(n, t));
}
function ht(...e) {
  return w.useCallback(xu(...e), e);
}
var Vo = w.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    i = w.Children.toArray(n),
    o = i.find(n1);
  if (o) {
    const s = o.props.children,
      l = i.map((a) =>
        a === o
          ? w.Children.count(s) > 1
            ? w.Children.only(null)
            : w.isValidElement(s)
              ? s.props.children
              : null
          : a
      );
    return g.jsx(Jl, {
      ...r,
      ref: t,
      children: w.isValidElement(s) ? w.cloneElement(s, void 0, l) : null,
    });
  }
  return g.jsx(Jl, { ...r, ref: t, children: n });
});
Vo.displayName = "Slot";
var Jl = w.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (w.isValidElement(n)) {
    const i = i1(n);
    return w.cloneElement(n, { ...r1(r, n.props), ref: t ? xu(t, i) : i });
  }
  return w.Children.count(n) > 1 ? w.Children.only(null) : null;
});
Jl.displayName = "SlotClone";
var t1 = ({ children: e }) => g.jsx(g.Fragment, { children: e });
function n1(e) {
  return w.isValidElement(e) && e.type === t1;
}
function r1(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? i && o
        ? (n[r] = (...l) => {
            o(...l), i(...l);
          })
        : i && (n[r] = i)
      : r === "style"
        ? (n[r] = { ...i, ...o })
        : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function i1(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var o1 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Re = o1.reduce((e, t) => {
    const n = w.forwardRef((r, i) => {
      const { asChild: o, ...s } = r,
        l = o ? Vo : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        g.jsx(l, { ...s, ref: i })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function ea(e, t) {
  e && yu.flushSync(() => e.dispatchEvent(t));
}
function We(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function lm({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, i] = s1({ defaultProp: t, onChange: n }),
    o = e !== void 0,
    s = o ? e : r,
    l = We(n),
    a = w.useCallback(
      (u) => {
        if (o) {
          const f = typeof u == "function" ? u(e) : u;
          f !== e && l(f);
        } else i(u);
      },
      [o, e, i, l]
    );
  return [s, a];
}
function s1({ defaultProp: e, onChange: t }) {
  const n = w.useState(e),
    [r] = n,
    i = w.useRef(r),
    o = We(t);
  return (
    w.useEffect(() => {
      i.current !== r && (o(r), (i.current = r));
    }, [r, i, o]),
    n
  );
}
var l1 = w.createContext(void 0);
function a1(e) {
  const t = w.useContext(l1);
  return e || t || "ltr";
}
var rr =
  globalThis != null && globalThis.document ? w.useLayoutEffect : () => {};
function u1(e, t) {
  return w.useReducer((n, r) => t[n][r] ?? n, e);
}
var vi = (e) => {
  const { present: t, children: n } = e,
    r = c1(t),
    i =
      typeof n == "function" ? n({ present: r.isPresent }) : w.Children.only(n),
    o = ht(r.ref, f1(i));
  return typeof n == "function" || r.isPresent
    ? w.cloneElement(i, { ref: o })
    : null;
};
vi.displayName = "Presence";
function c1(e) {
  const [t, n] = w.useState(),
    r = w.useRef({}),
    i = w.useRef(e),
    o = w.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, a] = u1(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const u = Bi(r.current);
      o.current = l === "mounted" ? u : "none";
    }, [l]),
    rr(() => {
      const u = r.current,
        c = i.current;
      if (c !== e) {
        const d = o.current,
          v = Bi(u);
        e
          ? a("MOUNT")
          : v === "none" || (u == null ? void 0 : u.display) === "none"
            ? a("UNMOUNT")
            : a(c && d !== v ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e);
      }
    }, [e, a]),
    rr(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          f = (v) => {
            const x = Bi(r.current).includes(v.animationName);
            if (v.target === t && x && (a("ANIMATION_END"), !i.current)) {
              const P = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = P);
                }));
            }
          },
          d = (v) => {
            v.target === t && (o.current = Bi(r.current));
          };
        return (
          t.addEventListener("animationstart", d),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", d),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: w.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Bi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function f1(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var d1 = z0.useId || (() => {}),
  h1 = 0;
function am(e) {
  const [t, n] = w.useState(d1());
  return (
    rr(() => {
      e || n((r) => r ?? String(h1++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function p1(e, t = []) {
  let n = [];
  function r(o, s) {
    const l = w.createContext(s),
      a = n.length;
    n = [...n, s];
    function u(f) {
      const { scope: d, children: v, ...y } = f,
        x = (d == null ? void 0 : d[e][a]) || l,
        P = w.useMemo(() => y, Object.values(y));
      return g.jsx(x.Provider, { value: P, children: v });
    }
    function c(f, d) {
      const v = (d == null ? void 0 : d[e][a]) || l,
        y = w.useContext(v);
      if (y) return y;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return (u.displayName = o + "Provider"), [u, c];
  }
  const i = () => {
    const o = n.map((s) => w.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || o;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (i.scopeName = e), [r, m1(i, ...t)];
}
function m1(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (o) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const f = a(o)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function um(e) {
  const t = e + "CollectionProvider",
    [n, r] = p1(t),
    [i, o] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (v) => {
      const { scope: y, children: x } = v,
        P = xe.useRef(null),
        p = xe.useRef(new Map()).current;
      return g.jsx(i, { scope: y, itemMap: p, collectionRef: P, children: x });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    a = xe.forwardRef((v, y) => {
      const { scope: x, children: P } = v,
        p = o(l, x),
        h = ht(y, p.collectionRef);
      return g.jsx(Vo, { ref: h, children: P });
    });
  a.displayName = l;
  const u = e + "CollectionItemSlot",
    c = "data-radix-collection-item",
    f = xe.forwardRef((v, y) => {
      const { scope: x, children: P, ...p } = v,
        h = xe.useRef(null),
        m = ht(y, h),
        S = o(u, x);
      return (
        xe.useEffect(
          () => (
            S.itemMap.set(h, { ref: h, ...p }), () => void S.itemMap.delete(h)
          )
        ),
        g.jsx(Vo, { [c]: "", ref: m, children: P })
      );
    });
  f.displayName = u;
  function d(v) {
    const y = o(e + "CollectionConsumer", v);
    return xe.useCallback(() => {
      const P = y.collectionRef.current;
      if (!P) return [];
      const p = Array.from(P.querySelectorAll(`[${c}]`));
      return Array.from(y.itemMap.values()).sort(
        (S, C) => p.indexOf(S.ref.current) - p.indexOf(C.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [{ Provider: s, Slot: a, ItemSlot: f }, d, r];
}
function g1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e);
  w.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var v1 = "DismissableLayer",
  ta = "dismissableLayer.update",
  y1 = "dismissableLayer.pointerDownOutside",
  x1 = "dismissableLayer.focusOutside",
  yf,
  cm = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  fm = w.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: i,
        onFocusOutside: o,
        onInteractOutside: s,
        onDismiss: l,
        ...a
      } = e,
      u = w.useContext(cm),
      [c, f] = w.useState(null),
      d =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, v] = w.useState({}),
      y = ht(t, (T) => f(T)),
      x = Array.from(u.layers),
      [P] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      p = x.indexOf(P),
      h = c ? x.indexOf(c) : -1,
      m = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = h >= p,
      C = C1((T) => {
        const k = T.target,
          R = [...u.branches].some((A) => A.contains(k));
        !S ||
          R ||
          (i == null || i(T),
          s == null || s(T),
          T.defaultPrevented || l == null || l());
      }, d),
      E = P1((T) => {
        const k = T.target;
        [...u.branches].some((A) => A.contains(k)) ||
          (o == null || o(T),
          s == null || s(T),
          T.defaultPrevented || l == null || l());
      }, d);
    return (
      g1((T) => {
        h === u.layers.size - 1 &&
          (r == null || r(T),
          !T.defaultPrevented && l && (T.preventDefault(), l()));
      }, d),
      w.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((yf = d.body.style.pointerEvents),
                (d.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            xf(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (d.body.style.pointerEvents = yf);
            }
          );
      }, [c, d, n, u]),
      w.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            xf());
        },
        [c, u]
      ),
      w.useEffect(() => {
        const T = () => v({});
        return (
          document.addEventListener(ta, T),
          () => document.removeEventListener(ta, T)
        );
      }, []),
      g.jsx(Re.div, {
        ...a,
        ref: y,
        style: {
          pointerEvents: m ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: se(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: se(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: se(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        ),
      })
    );
  });
fm.displayName = v1;
var w1 = "DismissableLayerBranch",
  S1 = w.forwardRef((e, t) => {
    const n = w.useContext(cm),
      r = w.useRef(null),
      i = ht(t, r);
    return (
      w.useEffect(() => {
        const o = r.current;
        if (o)
          return (
            n.branches.add(o),
            () => {
              n.branches.delete(o);
            }
          );
      }, [n.branches]),
      g.jsx(Re.div, { ...e, ref: i })
    );
  });
S1.displayName = w1;
function C1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e),
    r = w.useRef(!1),
    i = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const o = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              dm(y1, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", i.current),
                (i.current = a),
                t.addEventListener("click", i.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", i.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", o);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", o),
          t.removeEventListener("click", i.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function P1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e),
    r = w.useRef(!1);
  return (
    w.useEffect(() => {
      const i = (o) => {
        o.target &&
          !r.current &&
          dm(x1, n, { originalEvent: o }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function xf() {
  const e = new CustomEvent(ta);
  document.dispatchEvent(e);
}
function dm(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? ea(i, o) : i.dispatchEvent(o);
}
function E1(e) {
  const t = w.useRef({ value: e, previous: e });
  return w.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
var T1 = "VisuallyHidden",
  hm = w.forwardRef((e, t) =>
    g.jsx(Re.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
hm.displayName = T1;
var k1 = hm,
  cr = "NavigationMenu",
  [wu, pm, N1] = um(cr),
  [na, M1, R1] = um(cr),
  [Su, BP] = qy(cr, [N1, R1]),
  [L1, be] = Su(cr),
  [A1, j1] = Su(cr),
  mm = w.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        onValueChange: i,
        defaultValue: o,
        delayDuration: s = 200,
        skipDelayDuration: l = 300,
        orientation: a = "horizontal",
        dir: u,
        ...c
      } = e,
      [f, d] = w.useState(null),
      v = ht(t, (R) => d(R)),
      y = a1(u),
      x = w.useRef(0),
      P = w.useRef(0),
      p = w.useRef(0),
      [h, m] = w.useState(!0),
      [S = "", C] = lm({
        prop: r,
        onChange: (R) => {
          const A = R !== "",
            F = l > 0;
          A
            ? (window.clearTimeout(p.current), F && m(!1))
            : (window.clearTimeout(p.current),
              (p.current = window.setTimeout(() => m(!0), l))),
            i == null || i(R);
        },
        defaultProp: o,
      }),
      E = w.useCallback(() => {
        window.clearTimeout(P.current),
          (P.current = window.setTimeout(() => C(""), 150));
      }, [C]),
      T = w.useCallback(
        (R) => {
          window.clearTimeout(P.current), C(R);
        },
        [C]
      ),
      k = w.useCallback(
        (R) => {
          S === R
            ? window.clearTimeout(P.current)
            : (x.current = window.setTimeout(() => {
                window.clearTimeout(P.current), C(R);
              }, s));
        },
        [S, C, s]
      );
    return (
      w.useEffect(
        () => () => {
          window.clearTimeout(x.current),
            window.clearTimeout(P.current),
            window.clearTimeout(p.current);
        },
        []
      ),
      g.jsx(vm, {
        scope: n,
        isRootMenu: !0,
        value: S,
        dir: y,
        orientation: a,
        rootNavigationMenu: f,
        onTriggerEnter: (R) => {
          window.clearTimeout(x.current), h ? k(R) : T(R);
        },
        onTriggerLeave: () => {
          window.clearTimeout(x.current), E();
        },
        onContentEnter: () => window.clearTimeout(P.current),
        onContentLeave: E,
        onItemSelect: (R) => {
          C((A) => (A === R ? "" : R));
        },
        onItemDismiss: () => C(""),
        children: g.jsx(Re.nav, {
          "aria-label": "Main",
          "data-orientation": a,
          dir: y,
          ...c,
          ref: v,
        }),
      })
    );
  });
mm.displayName = cr;
var gm = "NavigationMenuSub",
  D1 = w.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        onValueChange: i,
        defaultValue: o,
        orientation: s = "horizontal",
        ...l
      } = e,
      a = be(gm, n),
      [u = "", c] = lm({ prop: r, onChange: i, defaultProp: o });
    return g.jsx(vm, {
      scope: n,
      isRootMenu: !1,
      value: u,
      dir: a.dir,
      orientation: s,
      rootNavigationMenu: a.rootNavigationMenu,
      onTriggerEnter: (f) => c(f),
      onItemSelect: (f) => c(f),
      onItemDismiss: () => c(""),
      children: g.jsx(Re.div, { "data-orientation": s, ...l, ref: t }),
    });
  });
D1.displayName = gm;
var vm = (e) => {
    const {
        scope: t,
        isRootMenu: n,
        rootNavigationMenu: r,
        dir: i,
        orientation: o,
        children: s,
        value: l,
        onItemSelect: a,
        onItemDismiss: u,
        onTriggerEnter: c,
        onTriggerLeave: f,
        onContentEnter: d,
        onContentLeave: v,
      } = e,
      [y, x] = w.useState(null),
      [P, p] = w.useState(new Map()),
      [h, m] = w.useState(null);
    return g.jsx(L1, {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: l,
      previousValue: E1(l),
      baseId: am(),
      dir: i,
      orientation: o,
      viewport: y,
      onViewportChange: x,
      indicatorTrack: h,
      onIndicatorTrackChange: m,
      onTriggerEnter: We(c),
      onTriggerLeave: We(f),
      onContentEnter: We(d),
      onContentLeave: We(v),
      onItemSelect: We(a),
      onItemDismiss: We(u),
      onViewportContentChange: w.useCallback((S, C) => {
        p((E) => (E.set(S, C), new Map(E)));
      }, []),
      onViewportContentRemove: w.useCallback((S) => {
        p((C) => (C.has(S) ? (C.delete(S), new Map(C)) : C));
      }, []),
      children: g.jsx(wu.Provider, {
        scope: t,
        children: g.jsx(A1, { scope: t, items: P, children: s }),
      }),
    });
  },
  ym = "NavigationMenuList",
  xm = w.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      i = be(ym, n),
      o = g.jsx(Re.ul, { "data-orientation": i.orientation, ...r, ref: t });
    return g.jsx(Re.div, {
      style: { position: "relative" },
      ref: i.onIndicatorTrackChange,
      children: g.jsx(wu.Slot, {
        scope: n,
        children: i.isRootMenu ? g.jsx(Nm, { asChild: !0, children: o }) : o,
      }),
    });
  });
xm.displayName = ym;
var wm = "NavigationMenuItem",
  [_1, Sm] = Su(wm),
  Cm = w.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...i } = e,
      o = am(),
      s = r || o || "LEGACY_REACT_AUTO_VALUE",
      l = w.useRef(null),
      a = w.useRef(null),
      u = w.useRef(null),
      c = w.useRef(() => {}),
      f = w.useRef(!1),
      d = w.useCallback((y = "start") => {
        if (l.current) {
          c.current();
          const x = ia(l.current);
          x.length && Eu(y === "start" ? x : x.reverse());
        }
      }, []),
      v = w.useCallback(() => {
        if (l.current) {
          const y = ia(l.current);
          y.length && (c.current = $1(y));
        }
      }, []);
    return g.jsx(_1, {
      scope: n,
      value: s,
      triggerRef: a,
      contentRef: l,
      focusProxyRef: u,
      wasEscapeCloseRef: f,
      onEntryKeyDown: d,
      onFocusProxyEnter: d,
      onRootContentClose: v,
      onContentFocusOutside: v,
      children: g.jsx(Re.li, { ...i, ref: t }),
    });
  });
Cm.displayName = wm;
var ra = "NavigationMenuTrigger",
  Pm = w.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, disabled: r, ...i } = e,
      o = be(ra, e.__scopeNavigationMenu),
      s = Sm(ra, e.__scopeNavigationMenu),
      l = w.useRef(null),
      a = ht(l, s.triggerRef, t),
      u = Rm(o.baseId, s.value),
      c = Lm(o.baseId, s.value),
      f = w.useRef(!1),
      d = w.useRef(!1),
      v = s.value === o.value;
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx(wu.ItemSlot, {
          scope: n,
          value: s.value,
          children: g.jsx(Mm, {
            asChild: !0,
            children: g.jsx(Re.button, {
              id: u,
              disabled: r,
              "data-disabled": r ? "" : void 0,
              "data-state": Tu(v),
              "aria-expanded": v,
              "aria-controls": c,
              ...i,
              ref: a,
              onPointerEnter: se(e.onPointerEnter, () => {
                (d.current = !1), (s.wasEscapeCloseRef.current = !1);
              }),
              onPointerMove: se(
                e.onPointerMove,
                Oo(() => {
                  r ||
                    d.current ||
                    s.wasEscapeCloseRef.current ||
                    f.current ||
                    (o.onTriggerEnter(s.value), (f.current = !0));
                })
              ),
              onPointerLeave: se(
                e.onPointerLeave,
                Oo(() => {
                  r || (o.onTriggerLeave(), (f.current = !1));
                })
              ),
              onClick: se(e.onClick, () => {
                o.onItemSelect(s.value), (d.current = v);
              }),
              onKeyDown: se(e.onKeyDown, (y) => {
                const P = {
                  horizontal: "ArrowDown",
                  vertical: o.dir === "rtl" ? "ArrowLeft" : "ArrowRight",
                }[o.orientation];
                v && y.key === P && (s.onEntryKeyDown(), y.preventDefault());
              }),
            }),
          }),
        }),
        v &&
          g.jsxs(g.Fragment, {
            children: [
              g.jsx(k1, {
                "aria-hidden": !0,
                tabIndex: 0,
                ref: s.focusProxyRef,
                onFocus: (y) => {
                  const x = s.contentRef.current,
                    P = y.relatedTarget,
                    p = P === l.current,
                    h = x == null ? void 0 : x.contains(P);
                  (p || !h) && s.onFocusProxyEnter(p ? "start" : "end");
                },
              }),
              o.viewport && g.jsx("span", { "aria-owns": c }),
            ],
          }),
      ],
    });
  });
Pm.displayName = ra;
var V1 = "NavigationMenuLink",
  wf = "navigationMenu.linkSelect",
  O1 = w.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: i, ...o } = e;
    return g.jsx(Mm, {
      asChild: !0,
      children: g.jsx(Re.a, {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...o,
        ref: t,
        onClick: se(
          e.onClick,
          (s) => {
            const l = s.target,
              a = new CustomEvent(wf, { bubbles: !0, cancelable: !0 });
            if (
              (l.addEventListener(wf, (u) => (i == null ? void 0 : i(u)), {
                once: !0,
              }),
              ea(l, a),
              !a.defaultPrevented && !s.metaKey)
            ) {
              const u = new CustomEvent(io, { bubbles: !0, cancelable: !0 });
              ea(l, u);
            }
          },
          { checkForDefaultPrevented: !1 }
        ),
      }),
    });
  });
O1.displayName = V1;
var Cu = "NavigationMenuIndicator",
  I1 = w.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      i = be(Cu, e.__scopeNavigationMenu),
      o = !!i.value;
    return i.indicatorTrack
      ? Xy.createPortal(
          g.jsx(vi, { present: n || o, children: g.jsx(F1, { ...r, ref: t }) }),
          i.indicatorTrack
        )
      : null;
  });
I1.displayName = Cu;
var F1 = w.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      i = be(Cu, n),
      o = pm(n),
      [s, l] = w.useState(null),
      [a, u] = w.useState(null),
      c = i.orientation === "horizontal",
      f = !!i.value;
    w.useEffect(() => {
      var x;
      const y =
        (x = o().find((P) => P.value === i.value)) == null
          ? void 0
          : x.ref.current;
      y && l(y);
    }, [o, i.value]);
    const d = () => {
      s &&
        u({
          size: c ? s.offsetWidth : s.offsetHeight,
          offset: c ? s.offsetLeft : s.offsetTop,
        });
    };
    return (
      oa(s, d),
      oa(i.indicatorTrack, d),
      a
        ? g.jsx(Re.div, {
            "aria-hidden": !0,
            "data-state": f ? "visible" : "hidden",
            "data-orientation": i.orientation,
            ...r,
            ref: t,
            style: {
              position: "absolute",
              ...(c
                ? {
                    left: 0,
                    width: a.size + "px",
                    transform: `translateX(${a.offset}px)`,
                  }
                : {
                    top: 0,
                    height: a.size + "px",
                    transform: `translateY(${a.offset}px)`,
                  }),
              ...r.style,
            },
          })
        : null
    );
  }),
  ir = "NavigationMenuContent",
  Em = w.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      i = be(ir, e.__scopeNavigationMenu),
      o = Sm(ir, e.__scopeNavigationMenu),
      s = ht(o.contentRef, t),
      l = o.value === i.value,
      a = {
        value: o.value,
        triggerRef: o.triggerRef,
        focusProxyRef: o.focusProxyRef,
        wasEscapeCloseRef: o.wasEscapeCloseRef,
        onContentFocusOutside: o.onContentFocusOutside,
        onRootContentClose: o.onRootContentClose,
        ...r,
      };
    return i.viewport
      ? g.jsx(z1, { forceMount: n, ...a, ref: s })
      : g.jsx(vi, {
          present: n || l,
          children: g.jsx(Tm, {
            "data-state": Tu(l),
            ...a,
            ref: s,
            onPointerEnter: se(e.onPointerEnter, i.onContentEnter),
            onPointerLeave: se(e.onPointerLeave, Oo(i.onContentLeave)),
            style: {
              pointerEvents: !l && i.isRootMenu ? "none" : void 0,
              ...a.style,
            },
          }),
        });
  });
Em.displayName = ir;
var z1 = w.forwardRef((e, t) => {
    const n = be(ir, e.__scopeNavigationMenu),
      { onViewportContentChange: r, onViewportContentRemove: i } = n;
    return (
      rr(() => {
        r(e.value, { ref: t, ...e });
      }, [e, t, r]),
      rr(() => () => i(e.value), [e.value, i]),
      null
    );
  }),
  io = "navigationMenu.rootContentDismiss",
  Tm = w.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        triggerRef: i,
        focusProxyRef: o,
        wasEscapeCloseRef: s,
        onRootContentClose: l,
        onContentFocusOutside: a,
        ...u
      } = e,
      c = be(ir, n),
      f = w.useRef(null),
      d = ht(f, t),
      v = Rm(c.baseId, r),
      y = Lm(c.baseId, r),
      x = pm(n),
      P = w.useRef(null),
      { onItemDismiss: p } = c;
    w.useEffect(() => {
      const m = f.current;
      if (c.isRootMenu && m) {
        const S = () => {
          var C;
          p(),
            l(),
            m.contains(document.activeElement) &&
              ((C = i.current) == null || C.focus());
        };
        return m.addEventListener(io, S), () => m.removeEventListener(io, S);
      }
    }, [c.isRootMenu, e.value, i, p, l]);
    const h = w.useMemo(() => {
      const S = x().map((A) => A.value);
      c.dir === "rtl" && S.reverse();
      const C = S.indexOf(c.value),
        E = S.indexOf(c.previousValue),
        T = r === c.value,
        k = E === S.indexOf(r);
      if (!T && !k) return P.current;
      const R = (() => {
        if (C !== E) {
          if (T && E !== -1) return C > E ? "from-end" : "from-start";
          if (k && C !== -1) return C > E ? "to-start" : "to-end";
        }
        return null;
      })();
      return (P.current = R), R;
    }, [c.previousValue, c.value, c.dir, x, r]);
    return g.jsx(Nm, {
      asChild: !0,
      children: g.jsx(fm, {
        id: y,
        "aria-labelledby": v,
        "data-motion": h,
        "data-orientation": c.orientation,
        ...u,
        ref: d,
        disableOutsidePointerEvents: !1,
        onDismiss: () => {
          var S;
          const m = new Event(io, { bubbles: !0, cancelable: !0 });
          (S = f.current) == null || S.dispatchEvent(m);
        },
        onFocusOutside: se(e.onFocusOutside, (m) => {
          var C;
          a();
          const S = m.target;
          (C = c.rootNavigationMenu) != null &&
            C.contains(S) &&
            m.preventDefault();
        }),
        onPointerDownOutside: se(e.onPointerDownOutside, (m) => {
          var T;
          const S = m.target,
            C = x().some((k) => {
              var R;
              return (R = k.ref.current) == null ? void 0 : R.contains(S);
            }),
            E =
              c.isRootMenu &&
              ((T = c.viewport) == null ? void 0 : T.contains(S));
          (C || E || !c.isRootMenu) && m.preventDefault();
        }),
        onKeyDown: se(e.onKeyDown, (m) => {
          var E;
          const S = m.altKey || m.ctrlKey || m.metaKey;
          if (m.key === "Tab" && !S) {
            const T = ia(m.currentTarget),
              k = document.activeElement,
              R = T.findIndex((Pe) => Pe === k),
              F = m.shiftKey
                ? T.slice(0, R).reverse()
                : T.slice(R + 1, T.length);
            Eu(F) ? m.preventDefault() : (E = o.current) == null || E.focus();
          }
        }),
        onEscapeKeyDown: se(e.onEscapeKeyDown, (m) => {
          s.current = !0;
        }),
      }),
    });
  }),
  Pu = "NavigationMenuViewport",
  km = w.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = !!be(Pu, e.__scopeNavigationMenu).value;
    return g.jsx(vi, {
      present: n || o,
      children: g.jsx(B1, { ...r, ref: t }),
    });
  });
km.displayName = Pu;
var B1 = w.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, children: r, ...i } = e,
      o = be(Pu, n),
      s = ht(t, o.onViewportChange),
      l = j1(ir, e.__scopeNavigationMenu),
      [a, u] = w.useState(null),
      [c, f] = w.useState(null),
      d = a ? (a == null ? void 0 : a.width) + "px" : void 0,
      v = a ? (a == null ? void 0 : a.height) + "px" : void 0,
      y = !!o.value,
      x = y ? o.value : o.previousValue;
    return (
      oa(c, () => {
        c && u({ width: c.offsetWidth, height: c.offsetHeight });
      }),
      g.jsx(Re.div, {
        "data-state": Tu(y),
        "data-orientation": o.orientation,
        ...i,
        ref: s,
        style: {
          pointerEvents: !y && o.isRootMenu ? "none" : void 0,
          "--radix-navigation-menu-viewport-width": d,
          "--radix-navigation-menu-viewport-height": v,
          ...i.style,
        },
        onPointerEnter: se(e.onPointerEnter, o.onContentEnter),
        onPointerLeave: se(e.onPointerLeave, Oo(o.onContentLeave)),
        children: Array.from(l.items).map(
          ([p, { ref: h, forceMount: m, ...S }]) => {
            const C = x === p;
            return g.jsx(
              vi,
              {
                present: m || C,
                children: g.jsx(Tm, {
                  ...S,
                  ref: xu(h, (E) => {
                    C && E && f(E);
                  }),
                }),
              },
              p
            );
          }
        ),
      })
    );
  }),
  U1 = "FocusGroup",
  Nm = w.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      i = be(U1, n);
    return g.jsx(na.Provider, {
      scope: n,
      children: g.jsx(na.Slot, {
        scope: n,
        children: g.jsx(Re.div, { dir: i.dir, ...r, ref: t }),
      }),
    });
  }),
  Sf = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
  W1 = "FocusGroupItem",
  Mm = w.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      i = M1(n),
      o = be(W1, n);
    return g.jsx(na.ItemSlot, {
      scope: n,
      children: g.jsx(Re.button, {
        ...r,
        ref: t,
        onKeyDown: se(e.onKeyDown, (s) => {
          if (["Home", "End", ...Sf].includes(s.key)) {
            let a = i().map((f) => f.ref.current);
            if (
              ([
                o.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
                "ArrowUp",
                "End",
              ].includes(s.key) && a.reverse(),
              Sf.includes(s.key))
            ) {
              const f = a.indexOf(s.currentTarget);
              a = a.slice(f + 1);
            }
            setTimeout(() => Eu(a)), s.preventDefault();
          }
        }),
      }),
    });
  });
function ia(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const i = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || i
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Eu(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
function $1(e) {
  return (
    e.forEach((t) => {
      (t.dataset.tabindex = t.getAttribute("tabindex") || ""),
        t.setAttribute("tabindex", "-1");
    }),
    () => {
      e.forEach((t) => {
        const n = t.dataset.tabindex;
        t.setAttribute("tabindex", n);
      });
    }
  );
}
function oa(e, t) {
  const n = We(t);
  rr(() => {
    let r = 0;
    if (e) {
      const i = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        i.observe(e),
        () => {
          window.cancelAnimationFrame(r), i.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
function Tu(e) {
  return e ? "open" : "closed";
}
function Rm(e, t) {
  return `${e}-trigger-${t}`;
}
function Lm(e, t) {
  return `${e}-content-${t}`;
}
function Oo(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var Am = mm,
  jm = xm,
  Dm = Cm,
  H1 = Pm,
  K1 = Em,
  G1 = km;
function b1(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
function li(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const sa = (e) => Array.isArray(e);
function _m(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function ai(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Cf(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function ku(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = Cf(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = Cf(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function ls(e, t, n) {
  const r = e.getProps();
  return ku(r, t, n !== void 0 ? n : r.custom, e);
}
const Nu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Mu = ["initial", ...Nu],
  yi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  tn = new Set(yi),
  ut = (e) => e * 1e3,
  ct = (e) => e / 1e3,
  Y1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Q1 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  X1 = { type: "keyframes", duration: 0.8 },
  Z1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  q1 = (e, { keyframes: t }) =>
    t.length > 2
      ? X1
      : tn.has(e)
        ? e.startsWith("scale")
          ? Q1(t[1])
          : Y1
        : Z1;
function Ru(e, t) {
  return e[t] || e.default || e;
}
const J1 = { skipAnimations: !1, useManualTiming: !1 },
  ex = (e) => e !== null;
function as(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(ex),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const fe = (e) => e;
function tx(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const o = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(u) {
    o.has(u) && (a.schedule(u), e()), u(s);
  }
  const a = {
    schedule: (u, c = !1, f = !1) => {
      const v = f && r ? t : n;
      return c && o.add(u), v.has(u) || v.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), o.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(l),
        (r = !1),
        i && ((i = !1), a.process(u));
    },
  };
  return a;
}
const Ui = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  nx = 40;
function Vm(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = Ui.reduce((p, h) => ((p[h] = tx(o)), p), {}),
    {
      read: l,
      resolveKeyframes: a,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = s,
    v = () => {
      const p = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, nx), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(v));
    },
    y = () => {
      (n = !0), (r = !0), i.isProcessing || e(v);
    };
  return {
    schedule: Ui.reduce((p, h) => {
      const m = s[h];
      return (p[h] = (S, C = !1, E = !1) => (n || y(), m.schedule(S, C, E))), p;
    }, {}),
    cancel: (p) => {
      for (let h = 0; h < Ui.length; h++) s[Ui[h]].cancel(p);
    },
    state: i,
    steps: s,
  };
}
const {
    schedule: O,
    cancel: tt,
    state: ie,
    steps: Hs,
  } = Vm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : fe, !0),
  Om = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  rx = 1e-7,
  ix = 12;
function ox(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = Om(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > rx && ++l < ix);
  return s;
}
function xi(e, t, n, r) {
  if (e === t && n === r) return fe;
  const i = (o) => ox(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Om(i(o), t, r));
}
const Im = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Fm = (e) => (t) => 1 - e(1 - t),
  zm = xi(0.33, 1.53, 0.69, 0.99),
  Lu = Fm(zm),
  Bm = Im(Lu),
  Um = (e) =>
    (e *= 2) < 1 ? 0.5 * Lu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Au = (e) => 1 - Math.sin(Math.acos(e)),
  Wm = Fm(Au),
  $m = Im(Au),
  Hm = (e) => /^0[^.\s]+$/u.test(e);
function sx(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Hm(e)
      : !0;
}
let lx = fe,
  Io = fe;
const Km = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Gm = (e) => (t) => typeof t == "string" && t.startsWith(e),
  bm = Gm("--"),
  ax = Gm("var(--"),
  ju = (e) => (ax(e) ? ux.test(e.split("/*")[0].trim()) : !1),
  ux =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  cx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function fx(e) {
  const t = cx.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Ym(e, t, n = 1) {
  const [r, i] = fx(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Km(s) ? parseFloat(s) : s;
  }
  return ju(i) ? Ym(i, t, n + 1) : i;
}
const Yt = (e, t, n) => (n > t ? t : n < e ? e : n),
  fr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ui = { ...fr, transform: (e) => Yt(0, 1, e) },
  Wi = { ...fr, default: 1 },
  wi = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Lt = wi("deg"),
  ft = wi("%"),
  j = wi("px"),
  dx = wi("vh"),
  hx = wi("vw"),
  Pf = {
    ...ft,
    parse: (e) => ft.parse(e) / 100,
    transform: (e) => ft.transform(e * 100),
  },
  px = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Ef = (e) => e === fr || e === j,
  Tf = (e, t) => parseFloat(e.split(", ")[t]),
  kf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Tf(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Tf(o[1], e) : 0;
      }
    },
  mx = new Set(["x", "y", "z"]),
  gx = yi.filter((e) => !mx.has(e));
function vx(e) {
  const t = [];
  return (
    gx.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const or = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: kf(4, 13),
  y: kf(5, 14),
};
or.translateX = or.x;
or.translateY = or.y;
const Qm = (e) => (t) => t.test(e),
  yx = { test: (e) => e === "auto", parse: (e) => e },
  Xm = [fr, j, ft, Lt, hx, dx, yx],
  Nf = (e) => Xm.find(Qm(e)),
  yn = new Set();
let la = !1,
  aa = !1;
function Zm() {
  if (aa) {
    const e = Array.from(yn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = vx(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var l;
            (l = r.getValue(o)) === null || l === void 0 || l.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (aa = !1), (la = !1), yn.forEach((e) => e.complete()), yn.clear();
}
function qm() {
  yn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (aa = !0);
  });
}
function xx() {
  qm(), Zm();
}
class Du {
  constructor(t, n, r, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (yn.add(this), la || ((la = !0), O.read(qm), O.resolveKeyframes(Zm)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            l = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      yn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), yn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Fr = (e) => Math.round(e * 1e5) / 1e5,
  _u = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function wx(e) {
  return e == null;
}
const Sx =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Vu = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Sx.test(n) && n.startsWith(e)) ||
      (t && !wx(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Jm = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, l] = r.match(_u);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  Cx = (e) => Yt(0, 255, e),
  Ks = { ...fr, transform: (e) => Math.round(Cx(e)) },
  mn = {
    test: Vu("rgb", "red"),
    parse: Jm("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ks.transform(e) +
      ", " +
      Ks.transform(t) +
      ", " +
      Ks.transform(n) +
      ", " +
      Fr(ui.transform(r)) +
      ")",
  };
function Px(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const ua = { test: Vu("#"), parse: Px, transform: mn.transform },
  zn = {
    test: Vu("hsl", "hue"),
    parse: Jm("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      ft.transform(Fr(t)) +
      ", " +
      ft.transform(Fr(n)) +
      ", " +
      Fr(ui.transform(r)) +
      ")",
  },
  me = {
    test: (e) => mn.test(e) || ua.test(e) || zn.test(e),
    parse: (e) =>
      mn.test(e) ? mn.parse(e) : zn.test(e) ? zn.parse(e) : ua.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? mn.transform(e)
          : zn.transform(e),
  },
  Ex =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Tx(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(_u)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Ex)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const eg = "number",
  tg = "color",
  kx = "var",
  Nx = "var(",
  Mf = "${}",
  Mx =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ci(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const l = t
    .replace(
      Mx,
      (a) => (
        me.test(a)
          ? (r.color.push(o), i.push(tg), n.push(me.parse(a)))
          : a.startsWith(Nx)
            ? (r.var.push(o), i.push(kx), n.push(a))
            : (r.number.push(o), i.push(eg), n.push(parseFloat(a))),
        ++o,
        Mf
      )
    )
    .split(Mf);
  return { values: n, split: l, indexes: r, types: i };
}
function ng(e) {
  return ci(e).values;
}
function rg(e) {
  const { split: t, types: n } = ci(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const l = n[s];
        l === eg
          ? (o += Fr(i[s]))
          : l === tg
            ? (o += me.transform(i[s]))
            : (o += i[s]);
      }
    return o;
  };
}
const Rx = (e) => (typeof e == "number" ? 0 : e);
function Lx(e) {
  const t = ng(e);
  return rg(e)(t.map(Rx));
}
const Qt = {
    test: Tx,
    parse: ng,
    createTransformer: rg,
    getAnimatableNone: Lx,
  },
  Ax = new Set(["brightness", "contrast", "saturate", "opacity"]);
function jx(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(_u) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Ax.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Dx = /\b([a-z-]*)\(.*?\)/gu,
  ca = {
    ...Qt,
    getAnimatableNone: (e) => {
      const t = e.match(Dx);
      return t ? t.map(jx).join(" ") : e;
    },
  },
  _x = {
    borderWidth: j,
    borderTopWidth: j,
    borderRightWidth: j,
    borderBottomWidth: j,
    borderLeftWidth: j,
    borderRadius: j,
    radius: j,
    borderTopLeftRadius: j,
    borderTopRightRadius: j,
    borderBottomRightRadius: j,
    borderBottomLeftRadius: j,
    width: j,
    maxWidth: j,
    height: j,
    maxHeight: j,
    top: j,
    right: j,
    bottom: j,
    left: j,
    padding: j,
    paddingTop: j,
    paddingRight: j,
    paddingBottom: j,
    paddingLeft: j,
    margin: j,
    marginTop: j,
    marginRight: j,
    marginBottom: j,
    marginLeft: j,
    backgroundPositionX: j,
    backgroundPositionY: j,
  },
  Vx = {
    rotate: Lt,
    rotateX: Lt,
    rotateY: Lt,
    rotateZ: Lt,
    scale: Wi,
    scaleX: Wi,
    scaleY: Wi,
    scaleZ: Wi,
    skew: Lt,
    skewX: Lt,
    skewY: Lt,
    distance: j,
    translateX: j,
    translateY: j,
    translateZ: j,
    x: j,
    y: j,
    z: j,
    perspective: j,
    transformPerspective: j,
    opacity: ui,
    originX: Pf,
    originY: Pf,
    originZ: j,
  },
  Rf = { ...fr, transform: Math.round },
  Ou = {
    ..._x,
    ...Vx,
    zIndex: Rf,
    size: j,
    fillOpacity: ui,
    strokeOpacity: ui,
    numOctaves: Rf,
  },
  Ox = {
    ...Ou,
    color: me,
    backgroundColor: me,
    outlineColor: me,
    fill: me,
    stroke: me,
    borderColor: me,
    borderTopColor: me,
    borderRightColor: me,
    borderBottomColor: me,
    borderLeftColor: me,
    filter: ca,
    WebkitFilter: ca,
  },
  Iu = (e) => Ox[e];
function ig(e, t) {
  let n = Iu(e);
  return (
    n !== ca && (n = Qt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Ix = new Set(["auto", "none", "0"]);
function Fx(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !Ix.has(o) && ci(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = ig(n, i);
}
class og extends Du {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let u = t[a];
      if (typeof u == "string" && ((u = u.trim()), ju(u))) {
        const c = Ym(u, n.current);
        c !== void 0 && (t[a] = c),
          a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !px.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = Nf(i),
      l = Nf(o);
    if (s !== l)
      if (Ef(s) && Ef(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) sx(t[i]) && r.push(i);
    r.length && Fx(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = or[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      l = i[s];
    (i[s] = or[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function us(e) {
  return typeof e == "function";
}
let oo;
function zx() {
  oo = void 0;
}
const dt = {
    now: () => (
      oo === void 0 &&
        dt.set(
          ie.isProcessing || J1.useManualTiming
            ? ie.timestamp
            : performance.now()
        ),
      oo
    ),
    set: (e) => {
      (oo = e), queueMicrotask(zx);
    },
  },
  Lf = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (Qt.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function Bx(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Ux(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = Lf(i, t),
    l = Lf(o, t);
  return !s || !l ? !1 : Bx(e) || ((n === "spring" || us(n)) && r);
}
const Wx = 40;
class sg {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...l
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = dt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...l,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Wx
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && xx(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = dt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: l,
      onUpdate: a,
      isGenerator: u,
    } = this.options;
    if (!u && !Ux(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        a == null || a(as(t, this.options, n)),
          l == null || l(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Fu(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const $x = 5;
function lg(e, t, n) {
  const r = Math.max(t - $x, 0);
  return Fu(n - e(r), t - r);
}
const Gs = 0.001,
  Hx = 0.01,
  Kx = 10,
  Gx = 0.05,
  bx = 1;
function Yx({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t;
  (s = Yt(Gx, bx, s)),
    (e = Yt(Hx, Kx, ct(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            v = fa(u, s),
            y = Math.exp(-f);
          return Gs - (d / v) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            v = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            x = fa(Math.pow(u, 2), s);
          return ((-i(u) + Gs > 0 ? -1 : 1) * ((d - v) * y)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Gs + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = Xx(i, o, l);
  if (((e = ut(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Qx = 12;
function Xx(e, t, n) {
  let r = n;
  for (let i = 1; i < Qx; i++) r = r - e(r) / t(r);
  return r;
}
function fa(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Zx = ["duration", "bounce"],
  qx = ["stiffness", "damping", "mass"];
function Af(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Jx(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Af(e, qx) && Af(e, Zx)) {
    const n = Yx(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function zu({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: d,
    } = Jx({ ...r, velocity: -ct(r.velocity || 0) }),
    v = f || 0,
    y = a / (2 * Math.sqrt(l * u)),
    x = o - i,
    P = ct(Math.sqrt(l / u)),
    p = Math.abs(x) < 5;
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const m = fa(P, y);
    h = (S) => {
      const C = Math.exp(-y * P * S);
      return (
        o - C * (((v + y * P * x) / m) * Math.sin(m * S) + x * Math.cos(m * S))
      );
    };
  } else if (y === 1) h = (m) => o - Math.exp(-P * m) * (x + (v + P * x) * m);
  else {
    const m = P * Math.sqrt(y * y - 1);
    h = (S) => {
      const C = Math.exp(-y * P * S),
        E = Math.min(m * S, 300);
      return (
        o - (C * ((v + y * P * x) * Math.sinh(E) + m * x * Math.cosh(E))) / m
      );
    };
  }
  return {
    calculatedDuration: (d && c) || null,
    next: (m) => {
      const S = h(m);
      if (d) s.done = m >= c;
      else {
        let C = 0;
        y < 1 && (C = m === 0 ? ut(v) : lg(h, m, S));
        const E = Math.abs(C) <= n,
          T = Math.abs(o - S) <= t;
        s.done = E && T;
      }
      return (s.value = s.done ? o : S), s;
    },
  };
}
function jf({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    v = (k) => (l !== void 0 && k < l) || (a !== void 0 && k > a),
    y = (k) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - k) < Math.abs(a - k)
          ? l
          : a;
  let x = n * t;
  const P = f + x,
    p = s === void 0 ? P : s(P);
  p !== P && (x = p - f);
  const h = (k) => -x * Math.exp(-k / r),
    m = (k) => p + h(k),
    S = (k) => {
      const R = h(k),
        A = m(k);
      (d.done = Math.abs(R) <= u), (d.value = d.done ? p : A);
    };
  let C, E;
  const T = (k) => {
    v(d.value) &&
      ((C = k),
      (E = zu({
        keyframes: [d.value, y(d.value)],
        velocity: lg(m, k, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let R = !1;
        return (
          !E && C === void 0 && ((R = !0), S(k), T(k)),
          C !== void 0 && k >= C ? E.next(k - C) : (!R && S(k), d)
        );
      },
    }
  );
}
const ew = xi(0.42, 0, 1, 1),
  tw = xi(0, 0, 0.58, 1),
  ag = xi(0.42, 0, 0.58, 1),
  ug = (e) => Array.isArray(e) && typeof e[0] != "number",
  Df = {
    linear: fe,
    easeIn: ew,
    easeInOut: ag,
    easeOut: tw,
    circIn: Au,
    circInOut: $m,
    circOut: Wm,
    backIn: Lu,
    backInOut: Bm,
    backOut: zm,
    anticipate: Um,
  },
  da = (e) => {
    if (Array.isArray(e)) {
      Io(e.length === 4);
      const [t, n, r, i] = e;
      return xi(t, n, r, i);
    } else if (typeof e == "string") return Io(Df[e] !== void 0), Df[e];
    return e;
  },
  nw = (e, t) => (n) => t(e(n)),
  St = (...e) => e.reduce(nw),
  Xt = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  K = (e, t, n) => e + (t - e) * n;
function bs(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function rw({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = bs(a, l, e + 1 / 3)), (o = bs(a, l, e)), (s = bs(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Fo(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ys = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  iw = [ua, mn, zn],
  ow = (e) => iw.find((t) => t.test(e));
function _f(e) {
  const t = ow(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === zn && (n = rw(n)), n;
}
const Vf = (e, t) => {
    const n = _f(e),
      r = _f(t);
    if (!n || !r) return Fo(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = Ys(n.red, r.red, o)),
      (i.green = Ys(n.green, r.green, o)),
      (i.blue = Ys(n.blue, r.blue, o)),
      (i.alpha = K(n.alpha, r.alpha, o)),
      mn.transform(i)
    );
  },
  ha = new Set(["none", "hidden"]);
function sw(e, t) {
  return ha.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function lw(e, t) {
  return (n) => K(e, t, n);
}
function Bu(e) {
  return typeof e == "number"
    ? lw
    : typeof e == "string"
      ? ju(e)
        ? Fo
        : me.test(e)
          ? Vf
          : cw
      : Array.isArray(e)
        ? cg
        : typeof e == "object"
          ? me.test(e)
            ? Vf
            : aw
          : Fo;
}
function cg(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Bu(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function aw(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Bu(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function uw(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      l = e.indexes[s][i[s]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[o] = a), i[s]++;
  }
  return r;
}
const cw = (e, t) => {
  const n = Qt.createTransformer(t),
    r = ci(e),
    i = ci(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (ha.has(e) && !i.values.length) || (ha.has(t) && !r.values.length)
      ? sw(e, t)
      : St(cg(uw(r, i), i.values), n)
    : Fo(e, t);
};
function fg(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? K(e, t, n)
    : Bu(e)(e, t);
}
function fw(e, t, n) {
  const r = [],
    i = n || fg,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || fe : t;
      l = St(a, l);
    }
    r.push(l);
  }
  return r;
}
function Uu(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Io(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = fw(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Xt(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a(Yt(e[0], e[o - 1], u)) : a;
}
function dg(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Xt(0, t, r);
    e.push(K(n, 1, i));
  }
}
function Wu(e) {
  const t = [0];
  return dg(t, e.length - 1), t;
}
function dw(e, t) {
  return e.map((n) => n * t);
}
function hw(e, t) {
  return e.map(() => t || ag).splice(0, e.length - 1);
}
function zo({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = ug(r) ? r.map(da) : da(r),
    o = { done: !1, value: t[0] },
    s = dw(n && n.length === t.length ? n : Wu(t), e),
    l = Uu(s, t, { ease: Array.isArray(i) ? i : hw(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  };
}
const pa = 2e4;
function hg(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < pa; ) (t += n), (r = e.next(t));
  return t >= pa ? 1 / 0 : t;
}
const pw = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => O.update(t, !0),
      stop: () => tt(t),
      now: () => (ie.isProcessing ? ie.timestamp : dt.now()),
    };
  },
  mw = { decay: jf, inertia: jf, tween: zo, keyframes: zo, spring: zu },
  gw = (e) => e / 100;
class $u extends sg {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options,
      s = (i == null ? void 0 : i.KeyframeResolver) || Du,
      l = (a, u) => this.onKeyframesResolved(a, u);
    (this.resolver = new s(o, l, n, r, i)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      l = us(n) ? n : mw[n] || zo;
    let a, u;
    l !== zo &&
      typeof t[0] != "number" &&
      ((a = St(gw, fg(t[0], t[1]))), (t = [0, 100]));
    const c = l({ ...this.options, keyframes: t });
    o === "mirror" &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = hg(c));
    const { calculatedDuration: f } = c,
      d = f + i,
      v = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: v,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: k } = this.options;
      return { done: !0, value: k[k.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: d,
      repeat: v,
      repeatType: y,
      repeatDelay: x,
      onUpdate: P,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      S = o;
    if (v) {
      const k = Math.min(this.currentTime, c) / f;
      let R = Math.floor(k),
        A = k % 1;
      !A && k >= 1 && (A = 1),
        A === 1 && R--,
        (R = Math.min(R, v + 1)),
        !!(R % 2) &&
          (y === "reverse"
            ? ((A = 1 - A), x && (A -= x / f))
            : y === "mirror" && (S = s)),
        (m = Yt(0, 1, A) * f);
    }
    const C = h ? { done: !1, value: a[0] } : S.next(m);
    l && (C.value = l(C.value));
    let { done: E } = C;
    !h &&
      u !== null &&
      (E = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const T =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && E));
    return (
      T && i !== void 0 && (C.value = as(a, this.options, i)),
      P && P(C.value),
      T && this.finish(),
      C
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? ct(t.calculatedDuration) : 0;
  }
  get time() {
    return ct(this.currentTime);
  }
  set time(t) {
    (t = ut(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = ct(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = pw, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = i)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const pg = new Set(["opacity", "clipPath", "filter", "transform"]),
  mg = (e) => Array.isArray(e) && typeof e[0] == "number",
  vw = 10,
  yw = (e, t) => {
    let n = "";
    const r = Math.max(Math.round(t / vw), 2);
    for (let i = 0; i < r; i++) n += e(Xt(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function Hu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const xw = { linearEasing: void 0 };
function ww(e, t) {
  const n = Hu(e);
  return () => {
    var r;
    return (r = xw[t]) !== null && r !== void 0 ? r : n();
  };
}
const Bo = ww(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function gg(e) {
  return !!(
    (typeof e == "function" && Bo()) ||
    !e ||
    (typeof e == "string" && (e in ma || Bo())) ||
    mg(e) ||
    (Array.isArray(e) && e.every(gg))
  );
}
const Nr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  ma = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Nr([0, 0.65, 0.55, 1]),
    circOut: Nr([0.55, 0, 1, 0.45]),
    backIn: Nr([0.31, 0.01, 0.66, -0.59]),
    backOut: Nr([0.33, 1.53, 0.69, 0.99]),
  };
function vg(e, t) {
  if (e)
    return typeof e == "function" && Bo()
      ? yw(e, t)
      : mg(e)
        ? Nr(e)
        : Array.isArray(e)
          ? e.map((n) => vg(n, t) || ma.easeOut)
          : ma[e];
}
function Sw(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = vg(l, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function Of(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const Cw = Hu(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Uo = 10,
  Pw = 2e4;
function Ew(e) {
  return us(e.type) || e.type === "spring" || !gg(e.ease);
}
function Tw(e, t) {
  const n = new $u({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < Pw; ) (r = n.sample(o)), i.push(r.value), (o += Uo);
  return { times: void 0, keyframes: i, duration: o - Uo, ease: "linear" };
}
const yg = { anticipate: Um, backInOut: Bm, circInOut: $m };
function kw(e) {
  return e in yg;
}
class If extends sg {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    (this.resolver = new og(
      o,
      (s, l) => this.onKeyframesResolved(s, l),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: o,
      ease: s,
      type: l,
      motionValue: a,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof s == "string" && Bo() && kw(s) && (s = yg[s]), Ew(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: v,
          motionValue: y,
          element: x,
          ...P
        } = this.options,
        p = Tw(t, P);
      (t = p.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = p.duration),
        (o = p.times),
        (s = p.ease),
        (l = "keyframes");
    }
    const f = Sw(a.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: s,
    });
    return (
      (f.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Of(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(as(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: f, duration: i, times: o, type: l, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return ct(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return ct(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = ut(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return fe;
      const { animation: r } = n;
      Of(r, t);
    }
    return fe;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: l,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...v
        } = this.options,
        y = new $u({
          ...v,
          keyframes: r,
          duration: i,
          type: o,
          ease: s,
          times: l,
          isGenerator: !0,
        }),
        x = ut(this.time);
      u.setWithVelocity(y.sample(x - Uo).value, y.sample(x).value, Uo);
    }
    const { onStop: a } = this.options;
    a && a(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: l,
    } = t;
    return (
      Cw() &&
      r &&
      pg.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      l !== "inertia"
    );
  }
}
const xg = Hu(() => window.ScrollTimeline !== void 0);
class Ku {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) =>
      xg() && i.attachTimeline ? i.attachTimeline(t) : n(i)
    );
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function Nw({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Gu =
    (e, t, n, r = {}, i, o) =>
    (s) => {
      const l = Ru(r, e) || {},
        a = l.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - ut(a);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: (d) => {
          t.set(d), l.onUpdate && l.onUpdate(d);
        },
        onComplete: () => {
          s(), l.onComplete && l.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      Nw(l) || (c = { ...c, ...q1(e, c) }),
        c.duration && (c.duration = ut(c.duration)),
        c.repeatDelay && (c.repeatDelay = ut(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (f = !0)),
        f && !o && t.get() !== void 0)
      ) {
        const d = as(c.keyframes, l);
        if (d !== void 0)
          return (
            O.update(() => {
              c.onUpdate(d), c.onComplete();
            }),
            new Ku([])
          );
      }
      return !o && If.supports(c) ? new If(c) : new $u(c);
    },
  Mw = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Rw = (e) => (sa(e) ? e[e.length - 1] || 0 : e);
function Si(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function cs(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class bu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Si(this.subscriptions, t), () => cs(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ff = 30,
  Lw = (e) => !isNaN(parseFloat(e)),
  zr = { current: void 0 };
class wg {
  constructor(t, n = {}) {
    (this.version = "11.9.0"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = dt.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = dt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Lw(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new bu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            O.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return zr.current && zr.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = dt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Ff
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ff);
    return Fu(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function st(e, t) {
  return new wg(e, t);
}
function Aw(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, st(n));
}
function jw(e, t) {
  const n = ls(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = Rw(o[s]);
    Aw(e, s, l);
  }
}
const fs = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Dw = "framerAppearId",
  Sg = "data-" + fs(Dw);
function Cg(e) {
  return e.props[Sg];
}
function Pg(e) {
  if (tn.has(e)) return "transform";
  if (pg.has(e)) return fs(e);
}
class _w extends wg {
  constructor() {
    super(...arguments), (this.values = []);
  }
  add(t) {
    const n = Pg(t);
    n && (Si(this.values, n), this.update());
  }
  update() {
    this.set(this.values.length ? this.values.join(", ") : "auto");
  }
}
const le = (e) => !!(e && e.getVelocity);
function Vw(e) {
  return !!(le(e) && e.add);
}
function ga(e, t) {
  var n;
  if (!e.applyWillChange) return;
  let r = e.getValue("willChange");
  if (
    (!r &&
      !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
      ((r = new _w("auto")), e.addValue("willChange", r)),
    Vw(r))
  )
    return r.add(t);
}
function Ow({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Yu(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (s = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const d = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null
      ),
      v = a[f];
    if (v === void 0 || (c && Ow(c, f))) continue;
    const y = { delay: n, ...Ru(s || {}, f) };
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const p = Cg(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, f, O);
        h !== null && ((y.startTime = h), (x = !0));
      }
    }
    ga(e, f),
      d.start(
        Gu(f, d, v, e.shouldReduceMotion && tn.has(f) ? { type: !1 } : y, e, x)
      );
    const P = d.animation;
    P && u.push(P);
  }
  return (
    l &&
      Promise.all(u).then(() => {
        O.update(() => {
          l && jw(e, l);
        });
      }),
    u
  );
}
function va(e, t, n = {}) {
  var r;
  const i = ls(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(Yu(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return Iw(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = o;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [s, l] : [l, s];
    return u().then(() => c());
  } else return Promise.all([s(), l(n.delay)]);
}
function Iw(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(Fw)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            va(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function Fw(e, t) {
  return e.sortNodePosition(t);
}
function zw(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => va(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = va(e, t, n);
  else {
    const i = typeof t == "function" ? ls(e, t, n.custom) : t;
    r = Promise.all(Yu(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Bw = Mu.length;
function Eg(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Eg(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Bw; n++) {
    const r = Mu[n],
      i = e.props[r];
    (ai(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const Uw = [...Nu].reverse(),
  Ww = Nu.length;
function $w(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => zw(e, n, r)));
}
function Hw(e) {
  let t = $w(e),
    n = zf(),
    r = !0;
  const i = (a) => (u, c) => {
    var f;
    const d = ls(
      e,
      c,
      a === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: v, transitionEnd: y, ...x } = d;
      u = { ...u, ...x, ...y };
    }
    return u;
  };
  function o(a) {
    t = a(e);
  }
  function s(a) {
    const { props: u } = e,
      c = Eg(e.parent) || {},
      f = [],
      d = new Set();
    let v = {},
      y = 1 / 0;
    for (let P = 0; P < Ww; P++) {
      const p = Uw[P],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        S = ai(m),
        C = p === a ? h.isActive : null;
      C === !1 && (y = P);
      let E = m === c[p] && m !== u[p] && S;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (h.protectedKeys = { ...v }),
        (!h.isActive && C === null) ||
          (!m && !h.prevProp) ||
          li(m) ||
          typeof m == "boolean")
      )
        continue;
      const T = Kw(h.prevProp, m);
      let k = T || (p === a && h.isActive && !E && S) || (P > y && S),
        R = !1;
      const A = Array.isArray(m) ? m : [m];
      let F = A.reduce(i(p), {});
      C === !1 && (F = {});
      const { prevResolvedValues: Pe = {} } = h,
        pt = { ...Pe, ...F },
        Mt = (Q) => {
          (k = !0),
            d.has(Q) && ((R = !0), d.delete(Q)),
            (h.needsAnimating[Q] = !0);
          const M = e.getValue(Q);
          M && (M.liveStyle = !1);
        };
      for (const Q in pt) {
        const M = F[Q],
          D = Pe[Q];
        if (v.hasOwnProperty(Q)) continue;
        let _ = !1;
        sa(M) && sa(D) ? (_ = !_m(M, D)) : (_ = M !== D),
          _
            ? M != null
              ? Mt(Q)
              : d.add(Q)
            : M !== void 0 && d.has(Q)
              ? Mt(Q)
              : (h.protectedKeys[Q] = !0);
      }
      (h.prevProp = m),
        (h.prevResolvedValues = F),
        h.isActive && (v = { ...v, ...F }),
        r && e.blockInitialAnimation && (k = !1),
        k &&
          (!(E && T) || R) &&
          f.push(...A.map((Q) => ({ animation: Q, options: { type: p } })));
    }
    if (d.size) {
      const P = {};
      d.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        m && (m.liveStyle = !0), (P[p] = h ?? null);
      }),
        f.push({ animation: P });
    }
    let x = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(f) : Promise.resolve()
    );
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var v;
        return (v = d.animationState) === null || v === void 0
          ? void 0
          : v.setActive(a, u);
      }),
      (n[a].isActive = u);
    const f = s(a);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = zf()), (r = !0);
    },
  };
}
function Kw(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !_m(t, e) : !1;
}
function ln(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function zf() {
  return {
    animate: ln(!0),
    whileInView: ln(),
    whileHover: ln(),
    whileTap: ln(),
    whileDrag: ln(),
    whileFocus: ln(),
    exit: ln(),
  };
}
class nn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class Gw extends nn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Hw(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    li(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let bw = 0;
class Yw extends nn {
  constructor() {
    super(...arguments), (this.id = bw++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const Qw = { animation: { Feature: Gw }, exit: { Feature: Yw } },
  Tg = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function ds(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const Xw = (e) => (t) => Tg(t) && e(t, ds(t));
function xt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Ct(e, t, n, r) {
  return xt(e, t, Xw(n), r);
}
const Bf = (e, t) => Math.abs(e - t);
function Zw(e, t) {
  const n = Bf(e.x, t.x),
    r = Bf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class kg {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Xs(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          v = Zw(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !v) return;
        const { point: y } = f,
          { timestamp: x } = ie;
        this.history.push({ ...y, timestamp: x });
        const { onStart: P, onMove: p } = this.handlers;
        d ||
          (P && P(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Qs(d, this.transformPagePoint)),
          O.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: v, onSessionEnd: y, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const P = Xs(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Qs(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && v && v(f, P), y && y(f, P);
      }),
      !Tg(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = ds(t),
      l = Qs(s, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = ie;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Xs(l, this.history)),
      (this.removeListeners = St(
        Ct(this.contextWindow, "pointermove", this.handlePointerMove),
        Ct(this.contextWindow, "pointerup", this.handlePointerUp),
        Ct(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), tt(this.updatePoint);
  }
}
function Qs(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Uf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Xs({ point: e }, t) {
  return {
    point: e,
    delta: Uf(e, Ng(t)),
    offset: Uf(e, qw(t)),
    velocity: Jw(t, 0.1),
  };
}
function qw(e) {
  return e[0];
}
function Ng(e) {
  return e[e.length - 1];
}
function Jw(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Ng(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > ut(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = ct(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Mg(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Wf = Mg("dragHorizontal"),
  $f = Mg("dragVertical");
function Rg(e) {
  let t = !1;
  if (e === "y") t = $f();
  else if (e === "x") t = Wf();
  else {
    const n = Wf(),
      r = $f();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Lg() {
  const e = Rg(!0);
  return e ? (e(), !1) : !0;
}
function Bn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const Ag = 1e-4,
  eS = 1 - Ag,
  tS = 1 + Ag,
  jg = 0.01,
  nS = 0 - jg,
  rS = 0 + jg;
function _e(e) {
  return e.max - e.min;
}
function iS(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Hf(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = K(t.min, t.max, e.origin)),
    (e.scale = _e(n) / _e(t)),
    (e.translate = K(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= eS && e.scale <= tS) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= nS && e.translate <= rS) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Br(e, t, n, r) {
  Hf(e.x, t.x, n.x, r ? r.originX : void 0),
    Hf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Kf(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + _e(t));
}
function oS(e, t, n) {
  Kf(e.x, t.x, n.x), Kf(e.y, t.y, n.y);
}
function Gf(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + _e(t));
}
function Ur(e, t, n) {
  Gf(e.x, t.x, n.x), Gf(e.y, t.y, n.y);
}
function sS(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? K(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function bf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function lS(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: bf(e.x, n, i), y: bf(e.y, t, r) };
}
function Yf(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function aS(e, t) {
  return { x: Yf(e.x, t.x), y: Yf(e.y, t.y) };
}
function uS(e, t) {
  let n = 0.5;
  const r = _e(e),
    i = _e(t);
  return (
    i > r
      ? (n = Xt(t.min, t.max - r, e.min))
      : r > i && (n = Xt(e.min, e.max - i, t.min)),
    Yt(0, 1, n)
  );
}
function cS(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const ya = 0.35;
function fS(e = ya) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = ya),
    { x: Qf(e, "left", "right"), y: Qf(e, "top", "bottom") }
  );
}
function Qf(e, t, n) {
  return { min: Xf(e, t), max: Xf(e, n) };
}
function Xf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Zf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Un = () => ({ x: Zf(), y: Zf() }),
  qf = () => ({ min: 0, max: 0 }),
  q = () => ({ x: qf(), y: qf() });
function ze(e) {
  return [e("x"), e("y")];
}
function Dg({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function dS({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function hS(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Zs(e) {
  return e === void 0 || e === 1;
}
function xa({ scale: e, scaleX: t, scaleY: n }) {
  return !Zs(e) || !Zs(t) || !Zs(n);
}
function cn(e) {
  return (
    xa(e) ||
    _g(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function _g(e) {
  return Jf(e.x) || Jf(e.y);
}
function Jf(e) {
  return e && e !== "0%";
}
function Wo(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function ed(e, t, n, r, i) {
  return i !== void 0 && (e = Wo(e, i, r)), Wo(e, n, r) + t;
}
function wa(e, t = 0, n = 1, r, i) {
  (e.min = ed(e.min, t, n, r, i)), (e.max = ed(e.max, t, n, r, i));
}
function Vg(e, { x: t, y: n }) {
  wa(e.x, t.translate, t.scale, t.originPoint),
    wa(e.y, n.translate, n.scale, n.originPoint);
}
const td = 0.999999999999,
  nd = 1.0000000000001;
function pS(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const { visualElement: a } = o.options;
    (a && a.props.style && a.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        $n(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Vg(e, s)),
      r && cn(o.latestValues) && $n(e, o.latestValues));
  }
  t.x < nd && t.x > td && (t.x = 1), t.y < nd && t.y > td && (t.y = 1);
}
function Wn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function rd(e, t, n, r, i = 0.5) {
  const o = K(e.min, e.max, i);
  wa(e, t, n, o, r);
}
function $n(e, t) {
  rd(e.x, t.x, t.scaleX, t.scale, t.originX),
    rd(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Og(e, t) {
  return Dg(hS(e.getBoundingClientRect(), t));
}
function mS(e, t, n) {
  const r = Og(e, n),
    { scroll: i } = t;
  return i && (Wn(r.x, i.offset.x), Wn(r.y, i.offset.y)), r;
}
const Ig = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  gS = new WeakMap();
class vS {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = q()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ds(c, "page").point);
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: v, onDragStart: y } = this.getProps();
        if (
          d &&
          !v &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Rg(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ze((P) => {
            let p = this.getAxisMotionValue(P).get() || 0;
            if (ft.test(p)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const m = h.layout.layoutBox[P];
                m && (p = _e(m) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[P] = p;
          }),
          y && O.postRender(() => y(c, f)),
          ga(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: v,
          onDirectionLock: y,
          onDrag: x,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: P } = f;
        if (v && this.currentDirection === null) {
          (this.currentDirection = yS(P)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, P),
          this.updateAxis("y", f.point, P),
          this.visualElement.render(),
          x && x(c, f);
      },
      l = (c, f) => this.stop(c, f),
      a = () =>
        ze((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new kg(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Ig(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && O.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !$i(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = sS(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      o = this.constraints;
    n && Bn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = lS(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = fS(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ze((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = cS(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Bn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = mS(r, i.root, this.visualElement.getTransformPagePoint());
    let s = aS(i.layout.layoutBox, o);
    if (n) {
      const l = n(dS(s));
      (this.hasMutatedConstraints = !!l), l && (s = Dg(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = ze((c) => {
        if (!$i(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          v = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: v,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      ga(this.visualElement, t), r.start(Gu(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    ze((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ze((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    ze((n) => {
      const { drag: r } = this.getProps();
      if (!$i(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - K(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Bn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ze((s) => {
      const l = this.getAxisMotionValue(s);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[s] = uS({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      ze((s) => {
        if (!$i(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(K(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    gS.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Ct(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        Bn(a) && a.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      O.read(r);
    const s = xt(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (ze((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = ya,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function $i(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function yS(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class xS extends nn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = fe),
      (this.removeListeners = fe),
      (this.controls = new vS(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || fe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const id = (e) => (t, n) => {
  e && O.postRender(() => e(t, n));
};
class wS extends nn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = fe);
  }
  onPointerDown(t) {
    this.session = new kg(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ig(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: id(t),
      onStart: id(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && O.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ct(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const hs = w.createContext(null);
function SS() {
  const e = w.useContext(hs);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = w.useId();
  w.useEffect(() => r(i), []);
  const o = w.useCallback(() => n && n(i), [i, n]);
  return !t && n ? [!1, o] : [!0];
}
const Qu = w.createContext({}),
  Fg = w.createContext({}),
  so = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function od(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Sr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (j.test(e)) e = parseFloat(e);
        else return e;
      const n = od(e, t.target.x),
        r = od(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  CS = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Qt.parse(e);
      if (i.length > 5) return r;
      const o = Qt.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = K(l, a, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  },
  $o = {};
function PS(e) {
  Object.assign($o, e);
}
const { schedule: Xu, cancel: UP } = Vm(queueMicrotask, !1);
class ES extends w.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    PS(TS),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (so.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              O.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Xu.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function zg(e) {
  const [t, n] = SS(),
    r = w.useContext(Qu);
  return g.jsx(ES, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(Fg),
    isPresent: t,
    safeToRemove: n,
  });
}
const TS = {
    borderRadius: {
      ...Sr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Sr,
    borderTopRightRadius: Sr,
    borderBottomLeftRadius: Sr,
    borderBottomRightRadius: Sr,
    boxShadow: CS,
  },
  Bg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  kS = Bg.length,
  sd = (e) => (typeof e == "string" ? parseFloat(e) : e),
  ld = (e) => typeof e == "number" || j.test(e);
function NS(e, t, n, r, i, o) {
  i
    ? ((e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, MS(r))),
      (e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, RS(r))))
    : o &&
      (e.opacity = K(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < kS; s++) {
    const l = `border${Bg[s]}Radius`;
    let a = ad(t, l),
      u = ad(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || ld(a) === ld(u)
        ? ((e[l] = Math.max(K(sd(a), sd(u), r), 0)),
          (ft.test(u) || ft.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r));
}
function ad(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const MS = Ug(0, 0.5, Wm),
  RS = Ug(0.5, 0.95, fe);
function Ug(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Xt(e, t, r)));
}
function ud(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Fe(e, t) {
  ud(e.x, t.x), ud(e.y, t.y);
}
function cd(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function fd(e, t, n, r, i) {
  return (
    (e -= t), (e = Wo(e, 1 / n, r)), i !== void 0 && (e = Wo(e, 1 / i, r)), e
  );
}
function LS(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (ft.test(t) &&
      ((t = parseFloat(t)), (t = K(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let l = K(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = fd(e.min, t, n, l, i)),
    (e.max = fd(e.max, t, n, l, i));
}
function dd(e, t, [n, r, i], o, s) {
  LS(e, t[n], t[r], t[i], t.scale, o, s);
}
const AS = ["x", "scaleX", "originX"],
  jS = ["y", "scaleY", "originY"];
function hd(e, t, n, r) {
  dd(e.x, t, AS, n ? n.x : void 0, r ? r.x : void 0),
    dd(e.y, t, jS, n ? n.y : void 0, r ? r.y : void 0);
}
function pd(e) {
  return e.translate === 0 && e.scale === 1;
}
function Wg(e) {
  return pd(e.x) && pd(e.y);
}
function md(e, t) {
  return e.min === t.min && e.max === t.max;
}
function DS(e, t) {
  return md(e.x, t.x) && md(e.y, t.y);
}
function gd(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function $g(e, t) {
  return gd(e.x, t.x) && gd(e.y, t.y);
}
function vd(e) {
  return _e(e.x) / _e(e.y);
}
function yd(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class _S {
  constructor() {
    this.members = [];
  }
  add(t) {
    Si(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (cs(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function VS(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: v,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      v && (r += `skewX(${v}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const OS = (e, t) => e.depth - t.depth;
class IS {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Si(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    cs(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(OS),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function lo(e) {
  const t = le(e) ? e.get() : e;
  return Mw(t) ? t.toValue() : t;
}
function FS(e, t) {
  const n = dt.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (tt(r), e(o - t));
    };
  return O.read(r, !0), () => tt(r);
}
function Hg(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Zu(e, t, n) {
  const r = le(e) ? e : st(e);
  return r.start(Gu("", r, t, n)), r.animation;
}
const fn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Mr = typeof window < "u" && window.MotionDebug !== void 0,
  qs = ["", "X", "Y", "Z"],
  zS = { visibility: "hidden" },
  xd = 1e3;
let BS = 0;
function Js(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Kg(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Cg(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", O, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Kg(r);
}
function Gg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = BS++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Mr &&
              (fn.totalNodes =
                fn.resolvedTargetDeltas =
                fn.recalculatedProjection =
                  0),
            this.nodes.forEach($S),
            this.nodes.forEach(YS),
            this.nodes.forEach(QS),
            this.nodes.forEach(HS),
            Mr && window.MotionDebug.record(fn);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new IS());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new bu()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Hg(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = FS(d, 250)),
            so.hasAnimatedSinceResize &&
              ((so.hasAnimatedSinceResize = !1), this.nodes.forEach(Sd));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: v,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || e2,
                { onLayoutAnimationStart: P, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !$g(this.targetLayout, y) || v,
                m = !d && v;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const S = { ...Ru(x, "layout"), onPlay: P, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                d || Sd(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        tt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(XS),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Kg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(wd);
        return;
      }
      this.isUpdating || this.nodes.forEach(GS),
        (this.isUpdating = !1),
        this.nodes.forEach(bS),
        this.nodes.forEach(US),
        this.nodes.forEach(WS),
        this.clearAllSnapshots();
      const l = dt.now();
      (ie.delta = Yt(0, 1e3 / 60, l - ie.timestamp)),
        (ie.timestamp = l),
        (ie.isProcessing = !0),
        Hs.update.process(ie),
        Hs.preRender.process(ie),
        Hs.render.process(ie),
        (ie.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Xu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(KS), this.sharedNodes.forEach(ZS);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        O.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      O.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = q()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (l = !1),
        l)
      ) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !Wg(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || cn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        t2(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: l } = this.options;
      if (!l) return q();
      const a = l.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(n2)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Wn(a.x, c.offset.x), Wn(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = q();
      if (
        (Fe(a, s), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
      )
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && Fe(a, s), Wn(a.x, f.offset.x), Wn(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(s, l = !1) {
      const a = q();
      Fe(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          $n(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          cn(c.latestValues) && $n(a, c.latestValues);
      }
      return cn(this.latestValues) && $n(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = q();
      Fe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !cn(u.latestValues)) continue;
        xa(u.latestValues) && u.updateSnapshot();
        const c = q(),
          f = u.measurePageBox();
        Fe(c, f),
          hd(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return cn(this.latestValues) && hd(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ie.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = ie.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1
            ? ((this.relativeParent = v),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = q()),
              (this.relativeTargetOrigin = q()),
              Ur(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                v.layout.layoutBox
              ),
              Fe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = q()), (this.targetWithTransforms = q())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                oS(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Fe(this.target, this.layout.layoutBox),
                  Vg(this.target, this.targetDelta))
                : Fe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const v = this.getClosestProjectingParent();
            v &&
            !!v.resumingFrom == !!this.resumingFrom &&
            !v.options.layoutScroll &&
            v.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = v),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = q()),
                (this.relativeTargetOrigin = q()),
                Ur(this.relativeTargetOrigin, this.target, v.target),
                Fe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Mr && fn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          xa(this.parent.latestValues) ||
          _g(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ie.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Fe(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        v = this.treeScale.y;
      pS(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = q()));
      const { target: y } = l;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (cd(this.prevProjectionDelta.x, this.projectionDelta.x),
          cd(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Br(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== v ||
          !yd(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !yd(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        Mr && fn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var l;
      if (
        ((l = this.options.visualElement) === null ||
          l === void 0 ||
          l.scheduleRender(),
        s)
      ) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Un()),
        (this.projectionDelta = Un()),
        (this.projectionDeltaWithTransform = Un());
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = Un();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = q(),
        v = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        x = v !== y,
        P = this.getStack(),
        p = !P || P.members.length <= 1,
        h = !!(x && !p && this.options.crossfade === !0 && !this.path.some(JS));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        Cd(f.x, s.x, C),
          Cd(f.y, s.y, C),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ur(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            qS(this.relativeTarget, this.relativeTargetOrigin, d, C),
            m && DS(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = q()),
            Fe(m, this.relativeTarget)),
          x &&
            ((this.animationValues = c), NS(c, u, this.latestValues, C, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (tt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = O.update(() => {
          (so.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Zu(0, xd, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(xd),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          bg(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || q();
          const f = _e(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = _e(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        Fe(l, a),
          $n(l, c),
          Br(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new _S()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const u = {};
      a.z && Js("z", s, u, this.animationValues);
      for (let c = 0; c < qs.length; c++)
        Js(`rotate${qs[c]}`, s, u, this.animationValues),
          Js(`skew${qs[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return zS;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = lo(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = lo(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !cn(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = VS(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: v, y } = this.projectionDelta;
      (u.transformOrigin = `${v.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0);
      for (const x in $o) {
        if (d[x] === void 0) continue;
        const { correct: P, applyTo: p } = $o[x],
          h = u.transform === "none" ? d[x] : P(d[x], f);
        if (p) {
          const m = p.length;
          for (let S = 0; S < m; S++) u[p[S]] = h;
        } else u[x] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? lo(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(wd),
        this.root.sharedNodes.clear();
    }
  };
}
function US(e) {
  e.updateLayout();
}
function WS(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? ze((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            v = _e(d);
          (d.min = r[f].min), (d.max = d.min + v);
        })
      : bg(o, n.layoutBox, r) &&
        ze((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            v = _e(r[f]);
          (d.max = d.min + v),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + v));
        });
    const l = Un();
    Br(l, r, n.layoutBox);
    const a = Un();
    s ? Br(a, e.applyTransform(i, !0), n.measuredBox) : Br(a, r, n.layoutBox);
    const u = !Wg(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: v } = f;
        if (d && v) {
          const y = q();
          Ur(y, n.layoutBox, d.layoutBox);
          const x = q();
          Ur(x, r, v.layoutBox),
            $g(y, x) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function $S(e) {
  Mr && fn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function HS(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function KS(e) {
  e.clearSnapshot();
}
function wd(e) {
  e.clearMeasurements();
}
function GS(e) {
  e.isLayoutDirty = !1;
}
function bS(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Sd(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function YS(e) {
  e.resolveTargetDelta();
}
function QS(e) {
  e.calcProjection();
}
function XS(e) {
  e.resetSkewAndRotation();
}
function ZS(e) {
  e.removeLeadSnapshot();
}
function Cd(e, t, n) {
  (e.translate = K(t.translate, 0, n)),
    (e.scale = K(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Pd(e, t, n, r) {
  (e.min = K(t.min, n.min, r)), (e.max = K(t.max, n.max, r));
}
function qS(e, t, n, r) {
  Pd(e.x, t.x, n.x, r), Pd(e.y, t.y, n.y, r);
}
function JS(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const e2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ed = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Td = Ed("applewebkit/") && !Ed("chrome/") ? Math.round : fe;
function kd(e) {
  (e.min = Td(e.min)), (e.max = Td(e.max));
}
function t2(e) {
  kd(e.x), kd(e.y);
}
function bg(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !iS(vd(t), vd(n), 0.2))
  );
}
function n2(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const r2 = Gg({
    attachResizeListener: (e, t) => xt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  el = { current: void 0 },
  Yg = Gg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!el.current) {
        const e = new r2({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (el.current = e);
      }
      return el.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  i2 = {
    pan: { Feature: wS },
    drag: { Feature: xS, ProjectionNode: Yg, MeasureLayout: zg },
  };
function Nd(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || Lg()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t);
      const a = l[r];
      a && O.postRender(() => a(o, s));
    };
  return Ct(e.current, n, i, { passive: !e.getProps()[r] });
}
class o2 extends nn {
  mount() {
    this.unmount = St(Nd(this.node, !0), Nd(this.node, !1));
  }
  unmount() {}
}
class s2 extends nn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = St(
      xt(this.node.current, "focus", () => this.onFocus()),
      xt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Qg = (e, t) => (t ? (e === t ? !0 : Qg(e, t.parentElement)) : !1);
function tl(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, ds(n));
}
class l2 extends nn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = fe),
      (this.removeEndListeners = fe),
      (this.removeAccessibleListeners = fe),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = Ct(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: f,
                } = this.node.getProps(),
                d = !f && !Qg(this.node.current, l.target) ? c : u;
              d && O.update(() => d(l, a));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = Ct(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = St(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                tl("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && O.postRender(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = xt(this.node.current, "keyup", s)),
              tl("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = xt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && tl("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = xt(this.node.current, "blur", r);
        this.removeAccessibleListeners = St(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && O.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Lg()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && O.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Ct(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = xt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = St(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Sa = new WeakMap(),
  nl = new WeakMap(),
  a2 = (e) => {
    const t = Sa.get(e.target);
    t && t(e);
  },
  u2 = (e) => {
    e.forEach(a2);
  };
function c2({ root: e, ...t }) {
  const n = e || document;
  nl.has(n) || nl.set(n, {});
  const r = nl.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(u2, { root: e, ...t })), r[i];
}
function f2(e, t, n) {
  const r = c2(t);
  return (
    Sa.set(e, n),
    r.observe(e),
    () => {
      Sa.delete(e), r.unobserve(e);
    }
  );
}
const d2 = { some: 0, all: 1 };
class h2 extends nn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : d2[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return f2(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(p2(t, n)) && this.startObserver();
  }
  unmount() {}
}
function p2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const m2 = {
    inView: { Feature: h2 },
    tap: { Feature: l2 },
    focus: { Feature: s2 },
    hover: { Feature: o2 },
  },
  g2 = { layout: { ProjectionNode: Yg, MeasureLayout: zg } },
  ps = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  ms = w.createContext({}),
  qu = typeof window < "u",
  gs = qu ? w.useLayoutEffect : w.useEffect,
  Xg = w.createContext({ strict: !1 });
let Md = !1;
function v2(e, t, n, r, i) {
  var o;
  const { visualElement: s } = w.useContext(ms),
    l = w.useContext(Xg),
    a = w.useContext(hs),
    u = w.useContext(ps).reducedMotion,
    c = w.useRef();
  (r = r || l.renderer),
    !c.current &&
      r &&
      (c.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  const f = c.current,
    d = w.useContext(Fg);
  f &&
    !f.projection &&
    i &&
    (f.type === "html" || f.type === "svg") &&
    x2(c.current, n, i, d),
    w.useInsertionEffect(() => {
      f && f.update(n, a);
    });
  const v = n[Sg],
    y = w.useRef(
      !!v &&
        !window.MotionHandoffIsComplete &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, v))
    );
  return (
    gs(() => {
      f &&
        (f.updateFeatures(),
        Xu.render(f.render),
        y.current && f.animationState && f.animationState.animateChanges());
    }),
    w.useEffect(() => {
      f &&
        (!y.current && f.animationState && f.animationState.animateChanges(),
        (y.current = !1),
        Md || ((Md = !0), queueMicrotask(y2)));
    }),
    f
  );
}
function y2() {
  window.MotionHandoffIsComplete = !0;
}
function x2(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: l,
    layoutScroll: a,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Zg(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (l && Bn(l)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: a,
      layoutRoot: u,
    });
}
function Zg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Zg(e.parent);
}
function w2(e, t, n) {
  return w.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Bn(n) && (n.current = r));
    },
    [t]
  );
}
function vs(e) {
  return li(e.animate) || Mu.some((t) => ai(e[t]));
}
function qg(e) {
  return !!(vs(e) || e.variants);
}
function S2(e, t) {
  if (vs(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ai(n) ? n : void 0,
      animate: ai(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function C2(e) {
  const { initial: t, animate: n } = S2(e, w.useContext(ms));
  return w.useMemo(() => ({ initial: t, animate: n }), [Rd(t), Rd(n)]);
}
function Rd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ld = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  sr = {};
for (const e in Ld) sr[e] = { isEnabled: (t) => Ld[e].some((n) => !!t[n]) };
function P2(e) {
  for (const t in e) sr[t] = { ...sr[t], ...e[t] };
}
const E2 = Symbol.for("motionComponentSymbol");
function T2({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && P2(e);
  function o(l, a) {
    let u;
    const c = { ...w.useContext(ps), ...l, layoutId: k2(l) },
      { isStatic: f } = c,
      d = C2(l),
      v = r(l, f);
    if (!f && qu) {
      N2();
      const y = M2(c);
      (u = y.MeasureLayout),
        (d.visualElement = v2(i, v, c, t, y.ProjectionNode));
    }
    return g.jsxs(ms.Provider, {
      value: d,
      children: [
        u && d.visualElement
          ? g.jsx(u, { visualElement: d.visualElement, ...c })
          : null,
        n(i, l, w2(v, d.visualElement, a), v, f, d.visualElement),
      ],
    });
  }
  const s = w.forwardRef(o);
  return (s[E2] = i), s;
}
function k2({ layoutId: e }) {
  const t = w.useContext(Qu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function N2(e, t) {
  w.useContext(Xg).strict;
}
function M2(e) {
  const { drag: t, layout: n } = sr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const R2 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ju(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(R2.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Jg(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const e0 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function t0(e, t, n, r) {
  Jg(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(e0.has(i) ? i : fs(i), t.attrs[i]);
}
function n0(e, { layout: t, layoutId: n }) {
  return (
    tn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!$o[e] || e === "opacity"))
  );
}
function ec(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (le(i[s]) ||
      (t.style && le(t.style[s])) ||
      n0(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return (
    n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), o
  );
}
function r0(e, t, n) {
  const r = ec(e, t, n);
  for (const i in e)
    if (le(e[i]) || le(t[i])) {
      const o =
        yi.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
function Zt(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function L2(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  i,
  o,
  s,
  l
) {
  const a = { latestValues: j2(i, o, s, l ? !1 : e, t), renderState: n() };
  return r && (a.mount = (u) => r(i, u, a)), a;
}
const i0 = (e) => (t, n) => {
  const r = w.useContext(ms),
    i = w.useContext(hs),
    o = () => L2(e, t, r, i, n);
  return n ? o() : Zt(o);
};
function A2(e, t) {
  const n = Pg(t);
  n && Si(e, n);
}
function Ad(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let i = 0; i < r.length; i++) {
    const o = ku(e, r[i]);
    if (o) {
      const { transitionEnd: s, transition: l, ...a } = o;
      n(a, s);
    }
  }
}
function j2(e, t, n, r, i) {
  var o;
  const s = {},
    l = [],
    a =
      r &&
      ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) ===
        void 0,
    u = i(e, {});
  for (const P in u) s[P] = lo(u[P]);
  let { initial: c, animate: f } = e;
  const d = vs(e),
    v = qg(e);
  t &&
    v &&
    !d &&
    e.inherit !== !1 &&
    (c === void 0 && (c = t.initial), f === void 0 && (f = t.animate));
  let y = n ? n.initial === !1 : !1;
  y = y || c === !1;
  const x = y ? f : c;
  return (
    x &&
      typeof x != "boolean" &&
      !li(x) &&
      Ad(e, x, (P, p) => {
        for (const h in P) {
          let m = P[h];
          if (Array.isArray(m)) {
            const S = y ? m.length - 1 : 0;
            m = m[S];
          }
          m !== null && (s[h] = m);
        }
        for (const h in p) s[h] = p[h];
      }),
    a &&
      (f &&
        c !== !1 &&
        !li(f) &&
        Ad(e, f, (P) => {
          for (const p in P) A2(l, p);
        }),
      l.length && (s.willChange = l.join(","))),
    s
  );
}
const tc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  o0 = () => ({ ...tc(), attrs: {} }),
  s0 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  D2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  _2 = yi.length;
function V2(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < _2; o++) {
    const s = yi[o],
      l = e[s];
    if (l === void 0) continue;
    let a = !0;
    if (
      (typeof l == "number"
        ? (a = l === (s.startsWith("scale") ? 1 : 0))
        : (a = parseFloat(l) === 0),
      !a || n)
    ) {
      const u = s0(l, Ou[s]);
      if (!a) {
        i = !1;
        const c = D2[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function nc(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    l = !1;
  for (const a in t) {
    const u = t[a];
    if (tn.has(a)) {
      s = !0;
      continue;
    } else if (bm(a)) {
      i[a] = u;
      continue;
    } else {
      const c = s0(u, Ou[a]);
      a.startsWith("origin") ? ((l = !0), (o[a] = c)) : (r[a] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = V2(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${a} ${u} ${c}`;
  }
}
function jd(e, t, n) {
  return typeof e == "string" ? e : j.transform(t + n * e);
}
function O2(e, t, n) {
  const r = jd(t, e.x, e.width),
    i = jd(n, e.y, e.height);
  return `${r} ${i}`;
}
const I2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  F2 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function z2(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? I2 : F2;
  e[o.offset] = j.transform(-r);
  const s = j.transform(t),
    l = j.transform(n);
  e[o.array] = `${s} ${l}`;
}
function rc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f
) {
  if ((nc(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: v, dimensions: y } = e;
  d.transform && (y && (v.transform = d.transform), delete d.transform),
    y &&
      (i !== void 0 || o !== void 0 || v.transform) &&
      (v.transformOrigin = O2(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && z2(d, s, l, a, !1);
}
const ic = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  B2 = {
    useVisualState: i0({
      scrapeMotionValuesFromProps: r0,
      createRenderState: o0,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        O.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          O.render(() => {
            rc(n, r, ic(t.tagName), e.transformTemplate), t0(t, n);
          });
      },
    }),
  },
  U2 = {
    useVisualState: i0({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: ec,
      createRenderState: tc,
    }),
  };
function l0(e, t, n) {
  for (const r in t) !le(t[r]) && !n0(r, n) && (e[r] = t[r]);
}
function W2({ transformTemplate: e }, t) {
  return w.useMemo(() => {
    const n = tc();
    return nc(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function $2(e, t) {
  const n = e.style || {},
    r = {};
  return l0(r, n, e), Object.assign(r, W2(e, t)), r;
}
function H2(e, t) {
  const n = {},
    r = $2(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const K2 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ho(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    K2.has(e)
  );
}
let a0 = (e) => !Ho(e);
function G2(e) {
  e && (a0 = (t) => (t.startsWith("on") ? !Ho(t) : e(t)));
}
try {
  G2(require("@emotion/is-prop-valid").default);
} catch {}
function b2(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((a0(i) ||
        (n === !0 && Ho(i)) ||
        (!t && !Ho(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Y2(e, t, n, r) {
  const i = w.useMemo(() => {
    const o = o0();
    return (
      rc(o, t, ic(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    l0(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Q2(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (Ju(n) ? Y2 : H2)(r, o, s, n),
      u = b2(r, typeof n == "string", e),
      c = n !== w.Fragment ? { ...u, ...a, ref: i } : {},
      { children: f } = r,
      d = w.useMemo(() => (le(f) ? f.get() : f), [f]);
    return w.createElement(n, { ...c, children: d });
  };
}
function X2(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...(Ju(r) ? B2 : U2),
      preloadedFeatures: e,
      useRender: Q2(i),
      createVisualElement: t,
      Component: r,
    };
    return T2(s);
  };
}
const Ca = { current: null },
  u0 = { current: !1 };
function Z2() {
  if (((u0.current = !0), !!qu))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ca.current = e.matches);
      e.addListener(t), t();
    } else Ca.current = !1;
}
function q2(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (le(i)) e.addValue(r, i);
    else if (le(o)) e.addValue(r, st(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, st(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const fi = new WeakMap(),
  J2 = [...Xm, me, Qt],
  eC = (e) => J2.find(Qm(e)),
  Dd = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class tC {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    l = {}
  ) {
    (this.applyWillChange = !1),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Du),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = dt.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), O.render(this.render, !1, !0));
      });
    const { latestValues: a, renderState: u } = s;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = vs(n)),
      (this.isVariantNode = qg(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const d in f) {
      const v = f[d];
      a[d] !== void 0 && le(v) && v.set(a[d], !1);
    }
  }
  mount(t) {
    (this.current = t),
      fi.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      u0.current || Z2(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Ca.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    fi.delete(this.current),
      this.projection && this.projection.unmount(),
      tt(this.notifyUpdate),
      tt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = tn.has(t),
      i = n.on("change", (l) => {
        (this.latestValues[t] = l),
          this.props.onUpdate && O.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in sr) {
      const n = sr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : q();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Dd.length; r++) {
      const i = Dd[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = q2(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = st(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Km(i) || Hm(i))
          ? (i = parseFloat(i))
          : !eC(i) && Qt.test(n) && (i = ig(t, n)),
        this.setBaseTarget(t, le(i) ? i.get() : i)),
      le(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = ku(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !le(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new bu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class c0 extends tC {
  constructor() {
    super(...arguments), (this.KeyframeResolver = og);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function nC(e) {
  return window.getComputedStyle(e);
}
class f0 extends c0 {
  constructor() {
    super(...arguments),
      (this.type = "html"),
      (this.applyWillChange = !0),
      (this.renderInstance = Jg);
  }
  readValueFromInstance(t, n) {
    if (tn.has(n)) {
      const r = Iu(n);
      return (r && r.default) || 0;
    } else {
      const r = nC(t),
        i = (bm(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Og(t, n);
  }
  build(t, n, r) {
    nc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ec(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    le(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class d0 extends c0 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = q);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (tn.has(n)) {
      const r = Iu(n);
      return (r && r.default) || 0;
    }
    return (n = e0.has(n) ? n : fs(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return r0(t, n, r);
  }
  build(t, n, r) {
    rc(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    t0(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = ic(t.tagName)), super.mount(t);
  }
}
const rC = (e, t) =>
    Ju(e) ? new d0(t) : new f0(t, { allowProjection: e !== w.Fragment }),
  iC = X2({ ...Qw, ...m2, ...i2, ...g2 }, rC),
  te = b1(iC);
class oC extends w.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function sC({ children: e, isPresent: t }) {
  const n = w.useId(),
    r = w.useRef(null),
    i = w.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = w.useContext(ps);
  return (
    w.useInsertionEffect(() => {
      const { width: s, height: l, top: a, left: u } = i.current;
      if (t || !r.current || !s || !l) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        o && (c.nonce = o),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    g.jsx(oC, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: w.cloneElement(e, { ref: r }),
    })
  );
}
const lC = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  const l = Zt(aC),
    a = w.useId(),
    u = w.useMemo(
      () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          l.set(c, !0);
          for (const f of l.values()) if (!f) return;
          r && r();
        },
        register: (c) => (l.set(c, !1), () => l.delete(c)),
      }),
      o ? [Math.random()] : [n]
    );
  return (
    w.useMemo(() => {
      l.forEach((c, f) => l.set(f, !1));
    }, [n]),
    w.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]),
    s === "popLayout" && (e = g.jsx(sC, { isPresent: n, children: e })),
    g.jsx(hs.Provider, { value: u, children: e })
  );
};
function aC() {
  return new Map();
}
const Hi = (e) => e.key || "";
function _d(e) {
  const t = [];
  return (
    w.Children.forEach(e, (n) => {
      w.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const oc = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: i,
  presenceAffectsLayout: o = !0,
  mode: s = "sync",
}) => {
  const l = w.useMemo(() => _d(e), [e]),
    a = l.map(Hi),
    u = w.useRef(!0),
    c = w.useRef(l),
    f = Zt(() => new Map()),
    [d, v] = w.useState(l),
    [y, x] = w.useState(l);
  gs(() => {
    (u.current = !1), (c.current = l);
    for (let h = 0; h < y.length; h++) {
      const m = Hi(y[h]);
      a.includes(m) ? f.delete(m) : f.get(m) !== !0 && f.set(m, !1);
    }
  }, [y, a.length, a.join("-")]);
  const P = [];
  if (l !== d) {
    let h = [...l];
    for (let m = 0; m < y.length; m++) {
      const S = y[m],
        C = Hi(S);
      a.includes(C) || (h.splice(m, 0, S), P.push(S));
    }
    s === "wait" && P.length && (h = P), x(_d(h)), v(l);
    return;
  }
  const { forceRender: p } = w.useContext(Qu);
  return g.jsx(g.Fragment, {
    children: y.map((h) => {
      const m = Hi(h),
        S = l === y || a.includes(m),
        C = () => {
          if (f.has(m)) f.set(m, !0);
          else return;
          let E = !0;
          f.forEach((T) => {
            T || (E = !1);
          }),
            E && (p == null || p(), x(c.current), i && i());
        };
      return g.jsx(
        lC,
        {
          isPresent: S,
          initial: !u.current || r ? void 0 : !1,
          custom: S ? void 0 : n,
          presenceAffectsLayout: o,
          mode: s,
          onExitComplete: S ? void 0 : C,
          children: h,
        },
        m
      );
    }),
  });
};
function uC(e) {
  const t = Zt(() => st(e)),
    { isStatic: n } = w.useContext(ps);
  if (n) {
    const [, r] = w.useState(e);
    w.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function h0(e, t) {
  const n = uC(t()),
    r = () => n.set(t());
  return (
    r(),
    gs(() => {
      const i = () => O.preRender(r, !1, !0),
        o = e.map((s) => s.on("change", i));
      return () => {
        o.forEach((s) => s()), tt(r);
      };
    }),
    n
  );
}
const cC = (e) => e && typeof e == "object" && e.mix,
  fC = (e) => (cC(e) ? e.mix : void 0);
function dC(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    l = Uu(i, o, { mixer: fC(o[0]), ...s });
  return t ? l(r) : l;
}
function hC(e) {
  (zr.current = []), e();
  const t = h0(zr.current, e);
  return (zr.current = void 0), t;
}
function pC(e, t, n, r) {
  if (typeof e == "function") return hC(e);
  const i = dC(t, n, r);
  return Array.isArray(e) ? Vd(e, i) : Vd([e], ([o]) => i(o));
}
function Vd(e, t) {
  const n = Zt(() => []);
  return h0(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function mC(e, t, n) {
  w.useInsertionEffect(() => e.on(t, n), [e, t, n]);
}
function sc(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    t && (Io(!!t.current), (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
const ao = new WeakMap();
let At;
function gC(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function vC({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = ao.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return gC(e, n);
        },
      });
    });
}
function yC(e) {
  e.forEach(vC);
}
function xC() {
  typeof ResizeObserver > "u" || (At = new ResizeObserver(yC));
}
function wC(e, t) {
  At || xC();
  const n = sc(e);
  return (
    n.forEach((r) => {
      let i = ao.get(r);
      i || ((i = new Set()), ao.set(r, i)),
        i.add(t),
        At == null || At.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const i = ao.get(r);
        i == null || i.delete(t),
          (i != null && i.size) || At == null || At.unobserve(r);
      });
    }
  );
}
const uo = new Set();
let Wr;
function SC() {
  (Wr = () => {
    const e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    uo.forEach((n) => n(t));
  }),
    window.addEventListener("resize", Wr);
}
function CC(e) {
  return (
    uo.add(e),
    Wr || SC(),
    () => {
      uo.delete(e), !uo.size && Wr && (Wr = void 0);
    }
  );
}
function PC(e, t) {
  return typeof e == "function" ? CC(e) : wC(e, t);
}
const EC = 50,
  Od = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  TC = () => ({ time: 0, x: Od(), y: Od() }),
  kC = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Id(e, t, n, r) {
  const i = n[t],
    { length: o, position: s } = kC[t],
    l = i.current,
    a = n.time;
  (i.current = e[`scroll${s}`]),
    (i.scrollLength = e[`scroll${o}`] - e[`client${o}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = Xt(0, i.scrollLength, i.current));
  const u = r - a;
  i.velocity = u > EC ? 0 : Fu(i.current - l, u);
}
function NC(e, t, n) {
  Id(e, "x", t, n), Id(e, "y", t, n), (t.time = n);
}
function MC(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const i = r.getBoundingClientRect();
      r = r.parentElement;
      const o = r.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: i, y: o } = r.getBBox();
      (n.x += i), (n.y += o);
      let s = null,
        l = r.parentNode;
      for (; !s; ) l.tagName === "svg" && (s = l), (l = r.parentNode);
      r = s;
    } else break;
  return n;
}
const RC = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Pa = { start: 0, center: 0.5, end: 1 };
function Fd(e, t, n = 0) {
  let r = 0;
  if ((e in Pa && (e = Pa[e]), typeof e == "string")) {
    const i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
        ? (e = i / 100)
        : e.endsWith("vw")
          ? (r = (i / 100) * document.documentElement.clientWidth)
          : e.endsWith("vh")
            ? (r = (i / 100) * document.documentElement.clientHeight)
            : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
const LC = [0, 0];
function AC(e, t, n, r) {
  let i = Array.isArray(e) ? e : LC,
    o = 0,
    s = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, Pa[e] ? e : "0"])),
    (o = Fd(i[0], n, r)),
    (s = Fd(i[1], t)),
    o - s
  );
}
const jC = { x: 0, y: 0 };
function DC(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function _C(e, t, n) {
  const { offset: r = RC.All } = n,
    { target: i = e, axis: o = "y" } = n,
    s = o === "y" ? "height" : "width",
    l = i !== e ? MC(i, e) : jC,
    a = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : DC(i),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let c = !t[o].interpolate;
  const f = r.length;
  for (let d = 0; d < f; d++) {
    const v = AC(r[d], u[s], a[s], l[o]);
    !c && v !== t[o].interpolatorOffsets[d] && (c = !0), (t[o].offset[d] = v);
  }
  c &&
    ((t[o].interpolate = Uu(t[o].offset, Wu(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function VC(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function OC(e, t, n, r = {}) {
  return {
    measure: () => VC(e, r.target, n),
    update: (i) => {
      NC(e, n, i), (r.offset || r.target) && _C(e, n, r);
    },
    notify: () => t(n),
  };
}
const Cr = new WeakMap(),
  zd = new WeakMap(),
  rl = new WeakMap(),
  Bd = (e) => (e === document.documentElement ? window : e);
function lc(e, { container: t = document.documentElement, ...n } = {}) {
  let r = rl.get(t);
  r || ((r = new Set()), rl.set(t, r));
  const i = TC(),
    o = OC(t, e, i, n);
  if ((r.add(o), !Cr.has(t))) {
    const l = () => {
        for (const d of r) d.measure();
      },
      a = () => {
        for (const d of r) d.update(ie.timestamp);
      },
      u = () => {
        for (const d of r) d.notify();
      },
      c = () => {
        O.read(l, !1, !0), O.read(a, !1, !0), O.update(u, !1, !0);
      };
    Cr.set(t, c);
    const f = Bd(t);
    window.addEventListener("resize", c, { passive: !0 }),
      t !== document.documentElement && zd.set(t, PC(t, c)),
      f.addEventListener("scroll", c, { passive: !0 });
  }
  const s = Cr.get(t);
  return (
    O.read(s, !1, !0),
    () => {
      var l;
      tt(s);
      const a = rl.get(t);
      if (!a || (a.delete(o), a.size)) return;
      const u = Cr.get(t);
      Cr.delete(t),
        u &&
          (Bd(t).removeEventListener("scroll", u),
          (l = zd.get(t)) === null || l === void 0 || l(),
          window.removeEventListener("resize", u));
    }
  );
}
function p0(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t,
      s = (i === null ? 0 : i.value) / 100;
    n !== s && e(s), (n = s);
  };
  return O.update(r, !0), () => tt(r);
}
function IC({ source: e, container: t, axis: n = "y" }) {
  e && (t = e);
  const r = { value: 0 },
    i = lc(
      (o) => {
        r.value = o[n].progress * 100;
      },
      { container: t, axis: n }
    );
  return { currentTime: r, cancel: i };
}
const il = new Map();
function m0({
  source: e,
  container: t = document.documentElement,
  axis: n = "y",
} = {}) {
  e && (t = e), il.has(t) || il.set(t, {});
  const r = il.get(t);
  return (
    r[n] ||
      (r[n] = xg()
        ? new ScrollTimeline({ source: t, axis: n })
        : IC({ source: t, axis: n })),
    r[n]
  );
}
function FC(e) {
  return e.length === 2;
}
function g0(e) {
  return e && (e.target || e.offset);
}
function zC(e, t) {
  return FC(e) || g0(t)
    ? lc((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : p0(e, m0(t));
}
function BC(e, t) {
  if (g0(t))
    return (
      e.pause(),
      lc((n) => {
        e.time = e.duration * n[t.axis].progress;
      }, t)
    );
  {
    const n = m0(t);
    return e.attachTimeline(
      n,
      (r) => (
        r.pause(),
        p0((i) => {
          r.time = r.duration * i;
        }, n)
      )
    );
  }
}
function UC(e, { axis: t = "y", ...n } = {}) {
  const r = { axis: t, ...n };
  return typeof e == "function" ? zC(e, r) : BC(e, r);
}
function Ud(e, t) {
  lx(!!(!t || t.current));
}
const WC = () => ({
  scrollX: st(0),
  scrollY: st(0),
  scrollXProgress: st(0),
  scrollYProgress: st(0),
});
function v0({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const i = Zt(WC);
  return (
    (n ? gs : w.useEffect)(
      () => (
        Ud("target", t),
        Ud("container", e),
        UC(
          (s, { x: l, y: a }) => {
            i.scrollX.set(l.current),
              i.scrollXProgress.set(l.progress),
              i.scrollY.set(a.current),
              i.scrollYProgress.set(a.progress);
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
function $C(e) {
  return w.useEffect(() => () => e(), []);
}
function HC(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function KC(e) {
  const t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = Hg(e) ? new d0(t) : new f0(t);
  n.mount(e), fi.set(e, n);
}
function GC(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(hg(r), pa);
  return {
    type: "keyframes",
    ease: (o) => r.next(i * o).value / t,
    duration: ct(i),
  };
}
function Wd(e, t, n, r) {
  var i;
  return typeof t == "number"
    ? t
    : t.startsWith("-") || t.startsWith("+")
      ? Math.max(0, e + parseFloat(t))
      : t === "<"
        ? n
        : (i = r.get(t)) !== null && i !== void 0
          ? i
          : e;
}
const bC = (e, t, n) => {
  const r = t - e;
  return ((((n - e) % r) + r) % r) + e;
};
function YC(e, t) {
  return ug(e) ? e[bC(0, e.length, t)] : e;
}
function QC(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    i.at > t && i.at < n && (cs(e, i), r--);
  }
}
function XC(e, t, n, r, i, o) {
  QC(e, i, o);
  for (let s = 0; s < t.length; s++)
    e.push({ value: t[s], at: K(i, o, r[s]), easing: YC(n, s) });
}
function ZC(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
        ? -1
        : 0
    : e.at - t.at;
}
const qC = "easeInOut";
function JC(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  const o = t.duration || 0.3,
    s = new Map(),
    l = new Map(),
    a = {},
    u = new Map();
  let c = 0,
    f = 0,
    d = 0;
  for (let v = 0; v < e.length; v++) {
    const y = e[v];
    if (typeof y == "string") {
      u.set(y, f);
      continue;
    } else if (!Array.isArray(y)) {
      u.set(y.name, Wd(f, y.at, c, u));
      continue;
    }
    let [x, P, p = {}] = y;
    p.at !== void 0 && (f = Wd(f, p.at, c, u));
    let h = 0;
    const m = (S, C, E, T = 0, k = 0) => {
      const R = eP(S),
        { delay: A = 0, times: F = Wu(R), type: Pe = "keyframes", ...pt } = C;
      let { ease: Mt = t.ease || "easeOut", duration: Ie } = C;
      const rn = typeof A == "function" ? A(T, k) : A,
        Q = R.length,
        M = us(Pe) ? Pe : i == null ? void 0 : i[Pe];
      if (Q <= 2 && M) {
        let Z = 100;
        if (Q === 2 && rP(R)) {
          const dr = R[1] - R[0];
          Z = Math.abs(dr);
        }
        const on = { ...pt };
        Ie !== void 0 && (on.duration = ut(Ie));
        const nt = GC(on, Z, M);
        (Mt = nt.ease), (Ie = nt.duration);
      }
      Ie ?? (Ie = o);
      const D = f + rn,
        _ = D + Ie;
      F.length === 1 && F[0] === 0 && (F[1] = 1);
      const $ = F.length - R.length;
      $ > 0 && dg(F, $),
        R.length === 1 && R.unshift(null),
        XC(E, R, Mt, F, D, _),
        (h = Math.max(rn + Ie, h)),
        (d = Math.max(_, d));
    };
    if (le(x)) {
      const S = $d(x, l);
      m(P, p, Hd("default", S));
    } else {
      const S = sc(x, r, a),
        C = S.length;
      for (let E = 0; E < C; E++) {
        (P = P), (p = p);
        const T = S[E],
          k = $d(T, l);
        for (const R in P) m(P[R], tP(p, R), Hd(R, k), E, C);
      }
    }
    (c = f), (f += h);
  }
  return (
    l.forEach((v, y) => {
      for (const x in v) {
        const P = v[x];
        P.sort(ZC);
        const p = [],
          h = [],
          m = [];
        for (let C = 0; C < P.length; C++) {
          const { at: E, value: T, easing: k } = P[C];
          p.push(T), h.push(Xt(0, d, E)), m.push(k || "easeOut");
        }
        h[0] !== 0 && (h.unshift(0), p.unshift(p[0]), m.unshift(qC)),
          h[h.length - 1] !== 1 && (h.push(1), p.push(null)),
          s.has(y) || s.set(y, { keyframes: {}, transition: {} });
        const S = s.get(y);
        (S.keyframes[x] = p),
          (S.transition[x] = { ...t, duration: d, ease: m, times: h, ...n });
      }
    }),
    s
  );
}
function $d(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function Hd(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function eP(e) {
  return Array.isArray(e) ? e : [e];
}
function tP(e, t) {
  return e[t] ? { ...e, ...e[t] } : { ...e };
}
const nP = (e) => typeof e == "number",
  rP = (e) => e.every(nP);
function y0(e, t, n, r) {
  const i = sc(e, r),
    o = i.length,
    s = [];
  for (let l = 0; l < o; l++) {
    const a = i[l];
    fi.has(a) || KC(a);
    const u = fi.get(a),
      c = { ...n };
    typeof c.delay == "function" && (c.delay = c.delay(l, o)),
      s.push(...Yu(u, { ...t, transition: c }, {}));
  }
  return new Ku(s);
}
const iP = (e) => Array.isArray(e) && Array.isArray(e[0]);
function oP(e, t, n) {
  const r = [];
  return (
    JC(e, t, n, { spring: zu }).forEach(
      ({ keyframes: o, transition: s }, l) => {
        let a;
        le(l) ? (a = Zu(l, o.default, s.default)) : (a = y0(l, o, s)),
          r.push(a);
      }
    ),
    new Ku(r)
  );
}
const sP = (e) => {
  function t(n, r, i) {
    let o;
    return (
      iP(n)
        ? (o = oP(n, r, e))
        : HC(r)
          ? (o = y0(n, r, i, e))
          : (o = Zu(n, r, i)),
      e && e.animations.push(o),
      o
    );
  }
  return t;
};
function lP() {
  const e = Zt(() => ({ current: null, animations: [] })),
    t = Zt(() => sP(e));
  return (
    $C(() => {
      e.animations.forEach((n) => n.stop());
    }),
    [e, t]
  );
}
function aP(e, t) {
  if (e === "first") return 0;
  {
    const n = t - 1;
    return e === "last" ? n : n / 2;
  }
}
function Kd(e = 0.1, { startDelay: t = 0, from: n = 0, ease: r } = {}) {
  return (i, o) => {
    const s = typeof n == "number" ? n : aP(n, o),
      l = Math.abs(s - i);
    let a = e * l;
    if (r) {
      const u = o * e;
      a = da(r)(a / u) * u;
    }
    return t + a;
  };
}
const uP =
    "data:image/svg+xml,%3csvg%20width='24'%20height='33'%20viewBox='0%200%2024%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.4245%2013.9963L21.4536%2017.6131C21.5161%2020.6219%2020.3752%2024.9381%2020.1887%2025.4561L19.7581%2026.888L17.6602%2029.2908C17.6602%2029.2908%2013.973%2031.7183%2012.0822%2031.7183C8.3038%2031.5833%205.62369%2030.6575%205.62369%2030.6575L5.22216%2029.8867C4.64304%2029.3859%203.00698%2027.5117%202.32546%2021.5196C2.13004%2019.8015%202.14866%2018.736%202.20076%2017.6638L2.30187%2014.5638L2.81248%2011.7787C2.75278%2011.2538%203.75018%209.13625%204.54174%209.04637C5.33331%208.95649%206.94975%209.99274%207.07629%2010.4781L7.5119%2011.8494L7.43955%2012.7438L7.71188%2014.6236L7.42976%2017.0352L7.16777%2018.0934L7.42778%2022.9927L7.99442%2025.3615L8.3038%2026.2503C8.63173%2026.675%209.50073%2027.2277%2011.1515%2027.0403C13.2501%2026.802%2014.2276%2025.4862%2014.5759%2025.1619L15.5404%2022.6032L15.9962%2022.0197C16.2044%2021.3917%2017.1692%2017.9514%2016.9461%2015.9895C16.7467%2014.2369%2016.4992%2013.5909%2016.8892%2012.7302L17.5771%2011.1267C17.8996%2010.2737%2018.863%2010.1643%2019.6883%2010.0706C20.4461%209.98455%2021.6682%2011.1968%2021.6176%2011.9812L21.4267%2013.9902L21.4245%2013.9963Z'%20fill='%23242424'/%3e%3cpath%20d='M7.20968%205.34155C6.56571%206.74769%205.25635%207.41555%204.08966%206.88212C2.3698%206.09578%202.03772%204.4342%202.1567%204.1744L2.15654%202.95974L3.10207%202.28504L4.18258%201.61028C4.51627%201.28668%205.45818%201.05862%206.25525%201.42305C7.45212%201.97027%207.86837%203.90327%207.20968%205.34155Z'%20fill='%23242424'/%3e%3cpath%20d='M17.1099%202.22173C17.4302%201.98%2017.7661%201.80492%2018.1029%201.69611C18.366%201.61107%2018.6551%201.2947%2018.8873%201.29084C19.2174%201.28535%2019.5372%201.61752%2019.8319%201.74417C20.2155%201.909%2020.5568%202.18541%2020.8236%202.57257C22.0533%204.35895%2020.6238%205.58207%2020.3809%205.76553L18.8223%207.13349L18.1029%207.09486C17.6263%207.21074%2016.6241%207.43283%2016.0523%206.60562C15.1976%205.35997%2015.7695%203.2324%2017.1099%202.22173Z'%20fill='%23242424'/%3e%3c/svg%3e",
  cP =
    "data:image/svg+xml,%3csvg%20width='16'%20height='20'%20viewBox='0%200%2016%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.147511%208.57417L8.00001%200.721672L15.8705%208.59214L14.0376%2010.425L9.38364%205.77098L9.32972%2019.9486L6.68827%2019.9666L6.63436%205.78896L1.99833%2010.425L0.147511%208.57417Z'%20fill='%23242424'/%3e%3c/svg%3e",
  x0 = "/assets/biglogo-DFbukAu8.svg",
  fP = { type: "spring", duration: 0.8 },
  w0 = () => {
    const { scrollY: e } = v0(),
      t = pC(() => e.get() * 0.4);
    return g.jsx(te.img, { layout: !0, src: uP, style: { rotate: t } });
  },
  S0 = () => {
    const e = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return g.jsx(te.button, {
      onClick: e,
      className: "flex h-full w-full items-center justify-center",
      children: g.jsx(te.img, { src: cP }),
    });
  },
  dP = ({ open: e, setOpen: t }) =>
    g.jsxs(g.Fragment, {
      children: [
        g.jsxs(H1, {
          onClick: () => t(!e),
          className:
            "flex h-full w-full flex-col items-center justify-center rounded-[100px]",
          children: [
            g.jsx(te.div, {
              animate: { rotate: e ? 45 : 0, y: e ? 3 : 0 },
              className: "mb-[4px] h-[2.5px] w-[22px] bg-black",
            }),
            g.jsx(te.div, {
              animate: { rotate: e ? -45 : 0, y: e ? -3 : 0 },
              className: "h-[2.5px] w-[22px] bg-black",
            }),
          ],
        }),
        g.jsx(hP, {
          open: e,
          links: ["Home", "About", "Services", "Community", "Contact"],
        }),
      ],
    });
function $r(e) {
  return g.jsx(Dm, {
    tabIndex: 1,
    className: e.className,
    children: e.children,
  });
}
function hP(e) {
  return g.jsx(g.Fragment, {
    children: g.jsx(K1, {
      forceMount: !0,
      asChild: !0,
      children: g.jsx(oc, {
        children:
          e.open &&
          g.jsxs(te.div, {
            className:
              "z-[50] rounded-[14px] border border-[#d9d9d9] bg-[#f9f9f9bf] p-[2.4rem]",
            initial: { y: "100vh", opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: "100vh", opacity: 0 },
            transition: fP,
            children: [
              g.jsx("div", {
                className: "flex flex-wrap gap-[6px]",
                children: e.links.map((t) =>
                  g.jsx(
                    Dm,
                    {
                      tabIndex: 0,
                      className:
                        "gap-6px flex max-w-[100%] items-center rounded-[1000px] bg-[#f0f0f0] px-[18px] py-[16px] text-[14px] hover:cursor-pointer hover:bg-[#e6e6e6]",
                      children: g.jsx("p", {
                        className: "text-[1.5rem]",
                        children: t,
                      }),
                    },
                    t
                  )
                ),
              }),
              g.jsx("div", { className: "pt-[2rem]" }),
              g.jsx("div", {
                className: "flex",
                children: g.jsx("p", {
                  className: "text-[1.6rem]",
                  children: "Privacy",
                }),
              }),
              g.jsx("div", { className: "pt-[1rem]" }),
              g.jsxs("div", {
                className: "flex flex-col gap-[8px]",
                children: [
                  g.jsx("p", {
                    className: "text-[1.6rem]",
                    children: "Instagram",
                  }),
                  g.jsx("p", {
                    className: "text-[1.6rem]",
                    children: "LinkedIn",
                  }),
                ],
              }),
              g.jsx("div", { className: "pt-[6.4rem]" }),
              g.jsx("img", { src: x0 }),
            ],
          }),
      }),
    }),
  });
}
const pP = "/assets/logo-KMuri6v9.svg",
  mP = ["Home", "About", "Services", "Community", "Contact"],
  gP = te.create(Am),
  vP = te.create(jm);
function yP() {
  const [e, t] = xe.useState(!1),
    [n, r] = xe.useState(!1),
    { scrollY: i } = v0(),
    o = { visible: { opacity: 1 }, hidden: { opacity: 0 } };
  xe.useEffect(() => {
    e == !1 && r(e);
  }, [e]),
    mC(i, "change", (u) => {
      u > 80 ? t(!0) : t(!1);
    });
  const s =
      "flex h-[50px] w-[50px] items-center justify-center rounded-[1000px] bg-[#f0f0f0] hover:bg-[#e6e6e6]",
    l =
      "gap-6px flex max-w-[100%] items-center rounded-[1000px] bg-[#f0f0f0] px-[1.6rem] py-[1.4rem] text-[1.5rem] font-light hover:cursor-pointer hover:bg-[#e6e6e6]";
  function a() {
    r(e);
  }
  return g.jsx(oc, {
    initial: !1,
    children: g.jsxs(gP, {
      layout: !0,
      style: { justifyContent: e ? "center" : "space-between" },
      className:
        "fixed z-[999] flex w-full items-center justify-center p-[2.5rem]",
      onLayoutAnimationComplete: a,
      children: [
        g.jsx(te.img, {
          variants: o,
          width: 104,
          height: 52,
          animate: e ? "hidden" : "visible",
          layout: !0,
          src: pP,
        }),
        g.jsx(vP, {
          layout: !0,
          className:
            "static rounded-[1000px] border-l-[#f0f0f0] border-l-[] bg-[#f9f9f9bf] p-[.8rem] backdrop-blur-[5px]",
          onLayoutAnimationComplete: a,
          children: g.jsxs("div", {
            className: "flex gap-[6px] overflow-clip",
            children: [
              n && g.jsx($r, { className: s, children: g.jsx(w0, {}) }),
              mP.map((u, c) =>
                g.jsx(te.a, { layout: !0, className: l, children: u }, c)
              ),
              n && g.jsx($r, { className: s, children: g.jsx(S0, {}) }),
            ],
          }),
        }),
      ],
    }),
  });
}
function xP() {
  const [e, t] = xe.useState(!1),
    n =
      "flex h-[50px] w-[50px] items-center justify-center rounded-[1000px] bg-[#f0f0f0] hover:bg-[#e6e6e6]";
  return g.jsxs("header", {
    className: "fixed z-10 flex w-full justify-between px-[4rem] py-[2rem]",
    children: [
      g.jsx(oc, {
        children:
          e &&
          g.jsx(te.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className:
              "pointer-events-none fixed inset-0 h-[100dvh] w-full backdrop-blur-[8px]",
          }),
      }),
      g.jsx(Am, {
        className: "fixed inset-0 top-auto py-[1.5rem]",
        children: g.jsxs("div", {
          className: "flex w-full flex-col justify-center gap-[8px] px-[4rem]",
          children: [
            g.jsx(G1, { forceMount: !0 }),
            g.jsx("div", {
              className: "flex justify-center",
              children: g.jsxs(jm, {
                className:
                  "flex gap-[1rem] rounded-[1000px] border border-[#f0f0f0] bg-[#f9f9f9bf] p-[.5rem] backdrop-blur-[10px]",
                children: [
                  g.jsx($r, { className: n, children: g.jsx(w0, {}) }),
                  g.jsx($r, { className: n, children: g.jsx(S0, {}) }),
                  g.jsx($r, {
                    className: n,
                    children: g.jsx(dP, { open: e, setOpen: t }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function wP() {
  const [e, t] = xe.useState(window.innerWidth),
    n = () => {
      t(window.innerWidth);
    };
  return (
    xe.useEffect(() => {
      window.addEventListener("resize", n);
    }, []),
    e
  );
}
function SP() {
  const e = wP();
  return g.jsx(g.Fragment, {
    children: e > 768 ? g.jsx(yP, {}) : g.jsx(xP, {}),
  });
}
function Ki({ children: e }) {
  return g.jsx("div", { className: "px-[4rem] max-sm:px-[2rem]", children: e });
}
function ol({ children: e }) {
  return g.jsx("div", {
    className:
      "flex flex-col-reverse items-end gap-[1.5rem] md:grid md:grid-cols-[1fr,2fr] md:grid-rows-[auto]",
    children: e,
  });
}
function CP({ video: e, className: t, tags: n, title: r }) {
  const [i, o] = lP(),
    s = () => {
      o([
        [
          ".tag",
          { y: -10 },
          { duration: 0.5, delay: Kd(0.05), ease: "easeOut" },
        ],
        [".tag", { y: 0 }, { duration: 0.5, delay: Kd(0.05), ease: "easeOut" }],
      ]);
    };
  return g.jsxs(te.div, {
    className: t,
    ref: i,
    onMouseEnter: s,
    children: [
      g.jsx("a", {
        className:
          "relative inline-block h-full w-full pt-[150%] md:pt-[56.25%]",
        children: g.jsx("div", {
          className: "absolute inset-0 h-full w-full max-w-[100%] object-cover",
          children: g.jsx("div", {
            className: "relative h-full max-w-none overflow-hidden",
            children: g.jsx("video", {
              src: e,
              loop: !0,
              autoPlay: !0,
              muted: !0,
              className:
                "absolute inset-[-100%] m-auto h-full w-full object-cover",
            }),
          }),
        }),
      }),
      g.jsxs(te.ul, {
        className:
          "absolute inset-0 right-auto top-auto z-[2] flex flex-wrap gap-[.4rem] p-[1.25rem]",
        children: [
          g.jsx(te.li, {
            className:
              "tag relative self-start rounded-[1000px] bg-white p-3 text-black",
            children: g.jsx("div", { className: "text-[1.2rem]", children: r }),
          }),
          n.map((l) =>
            g.jsx(te.li, {
              className:
                "tag relative self-start rounded-[1000px] bg-[#f9f9f9bf] p-3 text-black",
              children: g.jsx("div", {
                className: "text-[1.2rem]",
                children: l,
              }),
            })
          ),
        ],
      }),
    ],
  });
}
const C0 =
    "data:image/svg+xml,%3csvg%20width='15'%20height='11'%20viewBox='0%200%2015%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_60_116)'%3e%3cpath%20d='M8.73998%200.0978394L14.1421%205.50003L8.72761%2010.9146L7.46669%209.65367L10.6684%206.45191L0.914827%206.41482L0.902466%204.59761L10.6561%204.56052L7.46669%201.37112L8.73998%200.0978394Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_60_116'%3e%3crect%20width='15'%20height='11'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  sl = ({ text: e, className: t }) => {
    const n = {
        initial: { paddingRight: "0" },
        animate: { paddingRight: "1.2rem", backgroundColor: "#e6e6e6" },
      },
      r = {
        initial: { transform: "translateX(-6px)", opacity: 0 },
        animate: { transform: "translateX(0px)", opacity: 1 },
      };
    return g.jsxs(te.a, {
      layout: !0,
      className: t,
      whileHover: "animate",
      animate: "initial",
      variants: n,
      initial: "initial",
      children: [
        g.jsxs(te.div, { layout: !0, children: [" ", e, " "] }),
        g.jsx(te.img, { layout: !0, variants: r, src: C0 }),
      ],
    });
  },
  PP = "/assets/1-BGqPiR1P.mp4",
  EP = "/assets/2-BumfWUyF.mp4",
  TP = "/assets/3-CG3-zJ-I.mp4",
  kP = "/assets/4-BbwScx6y.mp4",
  NP = "/assets/5-BV-8Nm_H.mp4",
  MP = [
    {
      src: PP,
      className:
        "relative w-full overflow-hidden rounded-[1.2rem] md:w-[calc(66.6666%-1rem)]",
      title: "Design",
      tags: ["First", "Second", "Third", "Fourth"],
    },
    {
      src: EP,
      className:
        "relative w-full overflow-hidden rounded-[1.2rem] md:w-[calc(33.3333%-1rem)]",
      title: "Photography",
      tags: ["First", "Second", "Third", "Fourth"],
    },
    {
      src: TP,
      className:
        "relative w-full overflow-hidden rounded-[1.2rem] md:w-[calc(33.3333%-1rem)]",
      title: "Beauty",
      tags: ["First", "Second", "Third", "Fourth"],
    },
    {
      src: kP,
      className:
        "relative w-full overflow-hidden rounded-[1.2rem] md:w-[calc(66.6666%-1rem)]",
      title: "Styling",
      tags: ["First", "Second", "Third", "Fourth"],
    },
    {
      src: NP,
      className: "relative w-full overflow-hidden rounded-[1.2rem]",
      title: "Production",
      tags: ["First", "Second", "Third", "Fourth"],
    },
  ],
  RP =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='16'%20viewBox='0%200%2020%2016'%20fill='none'%3e%3cpath%20d='M11.7153%200.0581008L19.2784%207.62117L11.698%2015.2016L9.93273%2013.4363L14.4152%208.95381L0.76011%208.90187L0.742807%206.35778L14.3979%206.30586L9.93273%201.8407L11.7153%200.0581008Z'%20fill='white'/%3e%3c/svg%3e";
function Gd({ title: e, className: t }) {
  const n = { hover: { y: -10, backgroundColor: "#ebebeb" } },
    r = { hover: { rotate: -35 } };
  return g.jsxs(te.a, {
    variants: n,
    whileHover: "hover",
    className: t,
    children: [
      g.jsx("div", {
        className: "font-suiss_Medium text-[2.4rem] md:text-[3.6rem]",
        children: e,
      }),
      g.jsx(te.img, { variants: r, src: C0, className: "w-[2.6rem]" }),
    ],
  });
}
const LP = "/assets/1-CpXTqOUc.webp",
  AP = "/assets/2-CkB6aoos.webp",
  jP = "/assets/3-CcLlSxOO.webp",
  DP = "/assets/4-DcrOuJQX.webp",
  _P = "/assets/5-D3tMFICw.webp",
  VP = "/assets/6-6jybql2M.webp",
  OP = [
    { src: LP, title: "Consulting" },
    { src: AP, title: "Branding" },
    { src: jP, title: "Design" },
    { src: DP, title: "Websites" },
    { src: _P, title: "Marketing" },
    { src: VP, title: "Ecosystems" },
  ];
function IP() {
  return g.jsx("div", {
    className:
      "grid grid-cols-[1fr] grid-rows-[auto] gap-[1.2rem] md:grid-cols-[1fr,1fr,1fr]",
    children: OP.map((e) => g.jsx(FP, { icon: e.src, title: e.title })),
  });
}
function FP({ icon: e, title: t }) {
  return g.jsx("div", {
    className: "h-[19.2rem] rounded-[1.2rem] border border-[#e6e6e6]",
    children: g.jsxs("div", {
      className:
        "relative flex h-full w-full flex-col items-stretch justify-between overflow-hidden p-[2.8rem]",
      children: [
        g.jsx("div", {
          className: "mb-[1rem] w-[12.8rem]",
          children: g.jsx("img", { src: e, className: "w-full" }),
        }),
        g.jsx("div", {
          className: "mb-[1rem]",
          children: g.jsx("div", {
            className: "w-[90%]",
            children: g.jsx("h2", { className: "text-[2rem]", children: t }),
          }),
        }),
        g.jsx("div", {
          className:
            "absolute bottom-[2.5rem] left-auto right-[2rem] top-auto h-[1.8rem]",
          children: g.jsx("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: g.jsx("circle", {
              cx: "6",
              cy: "6",
              r: "6",
              fill: "currentColor",
            }),
          }),
        }),
      ],
    }),
  });
}
function zP() {
  const e = xe.useRef(null);
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx(SP, {}),
      g.jsx("div", {
        className: "flex h-[100svh] min-h-[100svh] flex-col",
        children: g.jsx("div", {
          className: "flex-1",
          children: g.jsxs("div", {
            className: "relative h-full",
            children: [
              g.jsx("video", {
                src: Zy,
                loop: !0,
                autoPlay: !0,
                muted: !0,
                className: "absolute h-full w-full object-cover",
              }),
              ";",
            ],
          }),
        }),
      }),
      g.jsx("header", {
        className: "pb-[7rem] max-sm:pb-[3rem]",
        children: g.jsx(Ki, {
          children: g.jsxs("div", {
            className: "mx-auto py-[4.5rem]",
            children: [
              g.jsx("div", {
                className: "max-w-[104rem]",
                children: g.jsx("h1", {
                  ref: e,
                  className:
                    "font-suiss_Medium text-[10rem] leading-[105%] max-sm:text-[5.6rem]",
                  children: "Where founders build places for people to belong",
                }),
              }),
              g.jsx("div", {
                className: "max-w-[83.2rem] pt-[4rem]",
                children: g.jsx("p", {
                  className: "text-[2.4rem] max-sm:text-[2.4rem]",
                  children:
                    "You're here because you want to build something different. Something for meaningful and long-lasting change. It's more than a business, more than a brand too. It's a part of you that feels big and brave. Creating this kind of change takes a village. Let us be yours.",
                }),
              }),
              g.jsxs("div", {
                className: "flex gap-x-[1rem] pt-[4rem]",
                children: [
                  g.jsx(sl, {
                    text: "Get to know us",
                    className:
                      "flex items-center gap-x-[6px] rounded-[1000px] bg-[#f0f0f0] p-[1.2rem] pr-0 text-[1.6rem] hover:cursor-pointer",
                  }),
                  g.jsx(sl, {
                    text: "See our work",
                    className:
                      "flex items-center gap-x-[6px] rounded-[1000px] bg-[#f0f0f0] p-[1.2rem] pr-0 text-[1.6rem] hover:cursor-pointer",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      g.jsxs("div", {
        className: "pt-[7rem] max-sm:pt-[3rem]",
        children: [
          g.jsxs(Ki, {
            children: [
              g.jsx("p", {
                className: "text-[1.6rem] uppercase",
                children: "Work",
              }),
              g.jsx("h2", {
                className: "font-suiss_Medium text-[4.8rem] max-sm:text-[4rem]",
                children: "Featured Projects",
              }),
              g.jsx("div", {
                className:
                  "flex flex-col flex-wrap gap-[1.5rem] py-[3.2rem] md:flex-row",
                children: MP.map((t) =>
                  g.jsx(CP, {
                    video: t.src,
                    className: t.className,
                    title: t.title,
                    tags: t.tags,
                  })
                ),
              }),
              g.jsx(Gd, {
                title: "See more work",
                className:
                  "flex w-full items-center justify-center gap-[1.6rem] rounded-[1000px] bg-[#f0f0f0] px-[6.4rem] py-[8rem]",
              }),
            ],
          }),
          g.jsx("div", { className: "pt-[10rem]" }),
          g.jsx(Ki, {
            children: g.jsxs(ol, {
              children: [
                g.jsx("div", {}),
                g.jsxs("div", {
                  className: "flex flex-col gap-[2.4rem]",
                  children: [
                    g.jsxs("div", {
                      className:
                        "flex w-full max-w-[83.2rem] flex-col gap-[2.4rem]",
                      children: [
                        g.jsx("h1", {
                          ref: e,
                          className:
                            "font-suiss_Medium text-[4.8rem] leading-[105%] max-sm:text-[4rem]",
                          children: "We've got the range (for a reason)",
                        }),
                        g.jsx("p", {
                          className:
                            "pb-[3.2rem] text-[1.6rem] font-light md:text-[2rem]",
                          children:
                            "A strong presence that develops die-hard fans requires different elements working together holistically. Whether you're sure about what you need or still figuring things out, we've got you covered",
                        }),
                      ],
                    }),
                    g.jsx(IP, {}),
                    g.jsx("div", { className: "" }),
                    g.jsx(Gd, {
                      title: "See more services",
                      className:
                        "flex w-full items-center justify-center gap-[1.6rem] rounded-[1000px] bg-[#f0f0f0] px-[6.4rem] py-[5.5rem]",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      g.jsx("div", { className: "pt-[10rem]" }),
      g.jsx("section", {
        className: "bg-[#f0f0f0]",
        children: g.jsx(Ki, {
          children: g.jsxs("footer", {
            className: "flex flex-col gap-[12rem] pb-[4rem] pt-[7.2rem]",
            children: [
              g.jsxs(ol, {
                children: [
                  g.jsx("div", {}),
                  g.jsx("div", {
                    className: "flex flex-col gap-[2.4rem]",
                    children: g.jsxs("div", {
                      className: "flex w-full flex-col gap-[2.4rem]",
                      children: [
                        g.jsx("h1", {
                          className:
                            "font-suiss_Medium text-[7.2rem] leading-[105%]",
                          children:
                            "Ready to be a change-maker. It's time we talked.",
                        }),
                        g.jsx("div", {
                          className: "flex",
                          children: g.jsx(sl, {
                            text: "Get in touch",
                            className:
                              "flex items-center gap-x-[6px] rounded-[1000px] bg-[#ffffff] p-[1.2rem] pr-0 text-[1.6rem] hover:cursor-pointer",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              g.jsxs(ol, {
                children: [
                  g.jsx("div", {
                    className: "w-full",
                    children: g.jsx("img", { src: x0, className: "w-[85%]" }),
                  }),
                  g.jsxs("div", {
                    className: "flex w-full flex-col",
                    children: [
                      g.jsxs("div", {
                        className:
                          "flex flex-col justify-between gap-[8rem] md:flex-row md:gap-0",
                        children: [
                          g.jsxs("div", {
                            className:
                              "grid grid-cols-[1fr,1fr,1fr,1fr] grid-rows-[auto] items-start gap-[4rem]",
                            children: [
                              g.jsxs("div", {
                                className:
                                  "flex flex-col items-start justify-items-start",
                                children: [
                                  g.jsx("a", {
                                    className: "text-[1.6rem]",
                                    children: "Home",
                                  }),
                                  g.jsx("a", {
                                    className: "text-[1.6rem]",
                                    children: "Work",
                                  }),
                                  g.jsx("a", {
                                    className: "text-[1.6rem]",
                                    children: "About",
                                  }),
                                  g.jsx("a", {
                                    className: "text-[1.6rem]",
                                    children: "Services",
                                  }),
                                ],
                              }),
                              g.jsxs("div", {
                                className:
                                  "flex flex-col items-start justify-items-start",
                                children: [
                                  g.jsx("a", {
                                    className: "text-[1.6rem]",
                                    children: "Community",
                                  }),
                                  g.jsx("a", {
                                    className: "text-[1.6rem]",
                                    children: "Contact",
                                  }),
                                  g.jsx("a", {
                                    className: "text-[1.6rem]",
                                    children: "Privacy",
                                  }),
                                ],
                              }),
                              g.jsxs("div", {
                                className:
                                  "flex flex-col items-start justify-items-start",
                                children: [
                                  g.jsx("a", {
                                    className: "text-[1.6rem]",
                                    children: "Instagram",
                                  }),
                                  g.jsx("a", {
                                    className: "text-[1.6rem]",
                                    children: "LinkedIn",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g.jsxs("div", {
                            className: "flex flex-col",
                            children: [
                              g.jsx("p", {
                                className: "pb-[1.6rem] text-[1.6rem]",
                                children:
                                  "For those interested in business, technology, creativity and being human.",
                              }),
                              g.jsxs("div", {
                                className:
                                  "flex w-full items-center justify-between rounded-[1000px] bg-white p-[1.2rem]",
                                children: [
                                  g.jsx("p", {
                                    className: "text-[1.6rem]",
                                    children: "Your email",
                                  }),
                                  g.jsx("div", {
                                    className:
                                      "relative h-[3.8rem] w-[3.8rem] rounded-[1000px]",
                                    children: g.jsx("img", {
                                      src: RP,
                                      className:
                                        "absolute top-[11px] h-[16px] w-[20px]",
                                    }),
                                  }),
                                ],
                              }),
                              g.jsx("p", {
                                className:
                                  "pt-[1.6rem] text-[1.2rem] text-[#999]",
                                children:
                                  "By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      g.jsxs("div", {
                        className: "flex items-start gap-[2.4rem]",
                        children: [
                          g.jsxs("div", {
                            className: "flex flex-col",
                            children: [
                              g.jsx("p", {
                                className: "text-[1.2rem] uppercase",
                                children: "hey@andhuman.co",
                              }),
                              g.jsx("p", {
                                className: "text-[1.2rem]",
                                children: "Geneva, Switzerland",
                              }),
                            ],
                          }),
                          g.jsxs("div", {
                            className: "flex flex-col",
                            children: [
                              g.jsx("p", {
                                className: "text-[1.2rem] uppercase",
                                children: "by andhuman + studio—y",
                              }),
                              g.jsx("p", {
                                className: "text-[1.2rem]",
                                children: "@andhuman 2024",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
sm(document.getElementById("root")).render(
  g.jsx(w.StrictMode, { children: g.jsx(zP, {}) })
);
