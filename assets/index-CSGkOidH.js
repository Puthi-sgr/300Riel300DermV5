(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Og(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var mh = { exports: {} },
  Zs = {},
  gh = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yi = Symbol.for("react.element"),
  _g = Symbol.for("react.portal"),
  Vg = Symbol.for("react.fragment"),
  Fg = Symbol.for("react.strict_mode"),
  Ig = Symbol.for("react.profiler"),
  Bg = Symbol.for("react.provider"),
  zg = Symbol.for("react.context"),
  Ug = Symbol.for("react.forward_ref"),
  Hg = Symbol.for("react.suspense"),
  $g = Symbol.for("react.memo"),
  Wg = Symbol.for("react.lazy"),
  wc = Symbol.iterator;
function Kg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wc && e[wc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var yh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  vh = Object.assign,
  xh = {};
function ar(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xh),
    (this.updater = n || yh);
}
ar.prototype.isReactComponent = {};
ar.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ar.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wh() {}
wh.prototype = ar.prototype;
function Fl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xh),
    (this.updater = n || yh);
}
var Il = (Fl.prototype = new wh());
Il.constructor = Fl;
vh(Il, ar.prototype);
Il.isPureReactComponent = !0;
var Sc = Array.isArray,
  Sh = Object.prototype.hasOwnProperty,
  Bl = { current: null },
  kh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Th(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Sh.call(t, r) && !kh.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: yi,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Bl.current,
  };
}
function Gg(e, t) {
  return {
    $$typeof: yi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function zl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === yi;
}
function Xg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var kc = /\/+/g;
function jo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Xg("" + e.key)
    : t.toString(36);
}
function Zi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case yi:
          case _g:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + jo(o, 0) : r),
      Sc(i)
        ? ((n = ""),
          e != null && (n = e.replace(kc, "$&/") + "/"),
          Zi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (zl(i) &&
            (i = Gg(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(kc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Sc(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + jo(s, a);
      o += Zi(s, t, n, l, i);
    }
  else if (((l = Kg(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + jo(s, a++)), (o += Zi(s, t, n, l, i));
  else if (s === "object")
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
  return o;
}
function Mi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Zi(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function qg(e) {
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
var Pe = { current: null },
  Ji = { transition: null },
  Qg = {
    ReactCurrentDispatcher: Pe,
    ReactCurrentBatchConfig: Ji,
    ReactCurrentOwner: Bl,
  };
function Eh() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: Mi,
  forEach: function (e, t, n) {
    Mi(
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
      Mi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Mi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!zl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = ar;
F.Fragment = Vg;
F.Profiler = Ig;
F.PureComponent = Fl;
F.StrictMode = Fg;
F.Suspense = Hg;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qg;
F.act = Eh;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = vh({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Bl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Sh.call(t, l) &&
        !kh.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: yi, type: e.type, key: i, ref: s, props: r, _owner: o };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: zg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Bg, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Th;
F.createFactory = function (e) {
  var t = Th.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Ug, render: e };
};
F.isValidElement = zl;
F.lazy = function (e) {
  return { $$typeof: Wg, _payload: { _status: -1, _result: e }, _init: qg };
};
F.memo = function (e, t) {
  return { $$typeof: $g, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Ji.transition;
  Ji.transition = {};
  try {
    e();
  } finally {
    Ji.transition = t;
  }
};
F.unstable_act = Eh;
F.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Pe.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t);
};
F.useId = function () {
  return Pe.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Pe.current.useRef(e);
};
F.useState = function (e) {
  return Pe.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Pe.current.useTransition();
};
F.version = "18.3.1";
gh.exports = F;
var M = gh.exports;
const Yg = Og(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zg = M,
  Jg = Symbol.for("react.element"),
  ey = Symbol.for("react.fragment"),
  ty = Object.prototype.hasOwnProperty,
  ny = Zg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ry = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ph(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) ty.call(t, r) && !ry.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Jg,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: ny.current,
  };
}
Zs.Fragment = ey;
Zs.jsx = Ph;
Zs.jsxs = Ph;
mh.exports = Zs;
var h = mh.exports,
  Ch = { exports: {} },
  Ie = {},
  Nh = { exports: {} },
  jh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, D) {
    var O = j.length;
    j.push(D);
    e: for (; 0 < O; ) {
      var J = (O - 1) >>> 1,
        le = j[J];
      if (0 < i(le, D)) (j[J] = D), (j[O] = le), (O = J);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var D = j[0],
      O = j.pop();
    if (O !== D) {
      j[0] = O;
      e: for (var J = 0, le = j.length, Ai = le >>> 1; J < Ai; ) {
        var en = 2 * (J + 1) - 1,
          No = j[en],
          tn = en + 1,
          Ri = j[tn];
        if (0 > i(No, O))
          tn < le && 0 > i(Ri, No)
            ? ((j[J] = Ri), (j[tn] = O), (J = tn))
            : ((j[J] = No), (j[en] = O), (J = en));
        else if (tn < le && 0 > i(Ri, O)) (j[J] = Ri), (j[tn] = O), (J = tn);
        else break e;
      }
    }
    return D;
  }
  function i(j, D) {
    var O = j.sortIndex - D.sortIndex;
    return O !== 0 ? O : j.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    y = !1,
    v = !1,
    x = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(j) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= j)
        r(u), (D.sortIndex = D.expirationTime), t(l, D);
      else break;
      D = n(u);
    }
  }
  function S(j) {
    if (((x = !1), g(j), !v))
      if (n(l) !== null) (v = !0), ji(T);
      else {
        var D = n(u);
        D !== null && ie(S, D.startTime - j);
      }
  }
  function T(j, D) {
    (v = !1), x && ((x = !1), m(E), (E = -1)), (y = !0);
    var O = f;
    try {
      for (
        g(D), d = n(l);
        d !== null && (!(d.expirationTime > D) || (j && !ae()));

      ) {
        var J = d.callback;
        if (typeof J == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var le = J(d.expirationTime <= D);
          (D = e.unstable_now()),
            typeof le == "function" ? (d.callback = le) : d === n(l) && r(l),
            g(D);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Ai = !0;
      else {
        var en = n(u);
        en !== null && ie(S, en.startTime - D), (Ai = !1);
      }
      return Ai;
    } finally {
      (d = null), (f = O), (y = !1);
    }
  }
  var P = !1,
    N = null,
    E = -1,
    V = 5,
    b = -1;
  function ae() {
    return !(e.unstable_now() - b < V);
  }
  function jt() {
    if (N !== null) {
      var j = e.unstable_now();
      b = j;
      var D = !0;
      try {
        D = N(!0, j);
      } finally {
        D ? Jt() : ((P = !1), (N = null));
      }
    } else P = !1;
  }
  var Jt;
  if (typeof p == "function")
    Jt = function () {
      p(jt);
    };
  else if (typeof MessageChannel < "u") {
    var pr = new MessageChannel(),
      xc = pr.port2;
    (pr.port1.onmessage = jt),
      (Jt = function () {
        xc.postMessage(null);
      });
  } else
    Jt = function () {
      w(jt, 0);
    };
  function ji(j) {
    (N = j), P || ((P = !0), Jt());
  }
  function ie(j, D) {
    E = w(function () {
      j(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), ji(T));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (j) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = f;
      }
      var O = f;
      f = D;
      try {
        return j();
      } finally {
        f = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, D) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var O = f;
      f = j;
      try {
        return D();
      } finally {
        f = O;
      }
    }),
    (e.unstable_scheduleCallback = function (j, D, O) {
      var J = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? J + O : J))
          : (O = J),
        j)
      ) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return (
        (le = O + le),
        (j = {
          id: c++,
          callback: D,
          priorityLevel: j,
          startTime: O,
          expirationTime: le,
          sortIndex: -1,
        }),
        O > J
          ? ((j.sortIndex = O),
            t(u, j),
            n(l) === null &&
              j === n(u) &&
              (x ? (m(E), (E = -1)) : (x = !0), ie(S, O - J)))
          : ((j.sortIndex = le), t(l, j), v || y || ((v = !0), ji(T))),
        j
      );
    }),
    (e.unstable_shouldYield = ae),
    (e.unstable_wrapCallback = function (j) {
      var D = f;
      return function () {
        var O = f;
        f = D;
        try {
          return j.apply(this, arguments);
        } finally {
          f = O;
        }
      };
    });
})(jh);
Nh.exports = jh;
var iy = Nh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sy = M,
  Ve = iy;
function C(e) {
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
var Ah = new Set(),
  Xr = {};
function En(e, t) {
  Zn(e, t), Zn(e + "Capture", t);
}
function Zn(e, t) {
  for (Xr[e] = t, e = 0; e < t.length; e++) Ah.add(t[e]);
}
var Tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wa = Object.prototype.hasOwnProperty,
  oy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Tc = {},
  Ec = {};
function ay(e) {
  return wa.call(Ec, e)
    ? !0
    : wa.call(Tc, e)
    ? !1
    : oy.test(e)
    ? (Ec[e] = !0)
    : ((Tc[e] = !0), !1);
}
function ly(e, t, n, r) {
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
function uy(e, t, n, r) {
  if (t === null || typeof t > "u" || ly(e, t, n, r)) return !0;
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
function Ce(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  pe[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  pe[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  pe[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  pe[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  pe[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  pe[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  pe[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ul = /[\-:]([a-z])/g;
function Hl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ul, Hl);
    pe[t] = new Ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ul, Hl);
    pe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ul, Hl);
  pe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  pe[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  pe[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $l(e, t, n, r) {
  var i = pe.hasOwnProperty(t) ? pe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (uy(t, n, i, r) && (n = null),
    r || i === null
      ? ay(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Nt = sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Li = Symbol.for("react.element"),
  An = Symbol.for("react.portal"),
  Rn = Symbol.for("react.fragment"),
  Wl = Symbol.for("react.strict_mode"),
  Sa = Symbol.for("react.profiler"),
  Rh = Symbol.for("react.provider"),
  Mh = Symbol.for("react.context"),
  Kl = Symbol.for("react.forward_ref"),
  ka = Symbol.for("react.suspense"),
  Ta = Symbol.for("react.suspense_list"),
  Gl = Symbol.for("react.memo"),
  Lt = Symbol.for("react.lazy"),
  Lh = Symbol.for("react.offscreen"),
  Pc = Symbol.iterator;
function mr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pc && e[Pc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Ao;
function Cr(e) {
  if (Ao === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ao = (t && t[1]) || "";
    }
  return (
    `
` +
    Ao +
    e
  );
}
var Ro = !1;
function Mo(e, t) {
  if (!e || Ro) return "";
  Ro = !0;
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
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Ro = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Cr(e) : "";
}
function cy(e) {
  switch (e.tag) {
    case 5:
      return Cr(e.type);
    case 16:
      return Cr("Lazy");
    case 13:
      return Cr("Suspense");
    case 19:
      return Cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Mo(e.type, !1)), e;
    case 11:
      return (e = Mo(e.type.render, !1)), e;
    case 1:
      return (e = Mo(e.type, !0)), e;
    default:
      return "";
  }
}
function Ea(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Rn:
      return "Fragment";
    case An:
      return "Portal";
    case Sa:
      return "Profiler";
    case Wl:
      return "StrictMode";
    case ka:
      return "Suspense";
    case Ta:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Mh:
        return (e.displayName || "Context") + ".Consumer";
      case Rh:
        return (e._context.displayName || "Context") + ".Provider";
      case Kl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Gl:
        return (
          (t = e.displayName || null), t !== null ? t : Ea(e.type) || "Memo"
        );
      case Lt:
        (t = e._payload), (e = e._init);
        try {
          return Ea(e(t));
        } catch {}
    }
  return null;
}
function dy(e) {
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
      return Ea(t);
    case 8:
      return t === Wl ? "StrictMode" : "Mode";
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
function Kt(e) {
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
function bh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function fy(e) {
  var t = bh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function bi(e) {
  e._valueTracker || (e._valueTracker = fy(e));
}
function Dh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = bh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function vs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pa(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Cc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Oh(e, t) {
  (t = t.checked), t != null && $l(e, "checked", t, !1);
}
function Ca(e, t) {
  Oh(e, t);
  var n = Kt(t.value),
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
    ? Na(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Na(e, t.type, Kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Nc(e, t, n) {
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
function Na(e, t, n) {
  (t !== "number" || vs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nr = Array.isArray;
function Kn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Kt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ja(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function jc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Nr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Kt(n) };
}
function _h(e, t) {
  var n = Kt(t.value),
    r = Kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ac(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Aa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Di,
  Fh = (function (e) {
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
        Di = Di || document.createElement("div"),
          Di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Di.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var br = {
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
  hy = ["Webkit", "ms", "Moz", "O"];
Object.keys(br).forEach(function (e) {
  hy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (br[t] = br[e]);
  });
});
function Ih(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (br.hasOwnProperty(e) && br[e])
    ? ("" + t).trim()
    : t + "px";
}
function Bh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Ih(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var py = Q(
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
function Ra(e, t) {
  if (t) {
    if (py[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Ma(e, t) {
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
var La = null;
function Xl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ba = null,
  Gn = null,
  Xn = null;
function Rc(e) {
  if ((e = wi(e))) {
    if (typeof ba != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = ro(t)), ba(e.stateNode, e.type, t));
  }
}
function zh(e) {
  Gn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Gn = e);
}
function Uh() {
  if (Gn) {
    var e = Gn,
      t = Xn;
    if (((Xn = Gn = null), Rc(e), t)) for (e = 0; e < t.length; e++) Rc(t[e]);
  }
}
function Hh(e, t) {
  return e(t);
}
function $h() {}
var Lo = !1;
function Wh(e, t, n) {
  if (Lo) return e(t, n);
  Lo = !0;
  try {
    return Hh(e, t, n);
  } finally {
    (Lo = !1), (Gn !== null || Xn !== null) && ($h(), Uh());
  }
}
function Qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ro(n);
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
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Da = !1;
if (Tt)
  try {
    var gr = {};
    Object.defineProperty(gr, "passive", {
      get: function () {
        Da = !0;
      },
    }),
      window.addEventListener("test", gr, gr),
      window.removeEventListener("test", gr, gr);
  } catch {
    Da = !1;
  }
function my(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Dr = !1,
  xs = null,
  ws = !1,
  Oa = null,
  gy = {
    onError: function (e) {
      (Dr = !0), (xs = e);
    },
  };
function yy(e, t, n, r, i, s, o, a, l) {
  (Dr = !1), (xs = null), my.apply(gy, arguments);
}
function vy(e, t, n, r, i, s, o, a, l) {
  if ((yy.apply(this, arguments), Dr)) {
    if (Dr) {
      var u = xs;
      (Dr = !1), (xs = null);
    } else throw Error(C(198));
    ws || ((ws = !0), (Oa = u));
  }
}
function Pn(e) {
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
function Kh(e) {
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
function Mc(e) {
  if (Pn(e) !== e) throw Error(C(188));
}
function xy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Mc(i), e;
        if (s === r) return Mc(i), t;
        s = s.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Gh(e) {
  return (e = xy(e)), e !== null ? Xh(e) : null;
}
function Xh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Xh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qh = Ve.unstable_scheduleCallback,
  Lc = Ve.unstable_cancelCallback,
  wy = Ve.unstable_shouldYield,
  Sy = Ve.unstable_requestPaint,
  te = Ve.unstable_now,
  ky = Ve.unstable_getCurrentPriorityLevel,
  ql = Ve.unstable_ImmediatePriority,
  Qh = Ve.unstable_UserBlockingPriority,
  Ss = Ve.unstable_NormalPriority,
  Ty = Ve.unstable_LowPriority,
  Yh = Ve.unstable_IdlePriority,
  Js = null,
  ct = null;
function Ey(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(Js, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var et = Math.clz32 ? Math.clz32 : Ny,
  Py = Math.log,
  Cy = Math.LN2;
function Ny(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Py(e) / Cy) | 0)) | 0;
}
var Oi = 64,
  _i = 4194304;
function jr(e) {
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
function ks(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = jr(a)) : ((s &= o), s !== 0 && (r = jr(s)));
  } else (o = n & ~i), o !== 0 ? (r = jr(o)) : s !== 0 && (r = jr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - et(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function jy(e, t) {
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
function Ay(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - et(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = jy(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function _a(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Zh() {
  var e = Oi;
  return (Oi <<= 1), !(Oi & 4194240) && (Oi = 64), e;
}
function bo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - et(t)),
    (e[t] = n);
}
function Ry(e, t) {
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
    var i = 31 - et(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Ql(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var U = 0;
function Jh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ep,
  Yl,
  tp,
  np,
  rp,
  Va = !1,
  Vi = [],
  Ft = null,
  It = null,
  Bt = null,
  Yr = new Map(),
  Zr = new Map(),
  Dt = [],
  My =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ft = null;
      break;
    case "dragenter":
    case "dragleave":
      It = null;
      break;
    case "mouseover":
    case "mouseout":
      Bt = null;
      break;
    case "pointerover":
    case "pointerout":
      Yr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zr.delete(t.pointerId);
  }
}
function yr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = wi(t)), t !== null && Yl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Ly(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Ft = yr(Ft, e, t, n, r, i)), !0;
    case "dragenter":
      return (It = yr(It, e, t, n, r, i)), !0;
    case "mouseover":
      return (Bt = yr(Bt, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Yr.set(s, yr(Yr.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Zr.set(s, yr(Zr.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ip(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = Pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Kh(n)), t !== null)) {
          (e.blockedOn = t),
            rp(e.priority, function () {
              tp(n);
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
function es(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (La = r), n.target.dispatchEvent(r), (La = null);
    } else return (t = wi(n)), t !== null && Yl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Dc(e, t, n) {
  es(e) && n.delete(t);
}
function by() {
  (Va = !1),
    Ft !== null && es(Ft) && (Ft = null),
    It !== null && es(It) && (It = null),
    Bt !== null && es(Bt) && (Bt = null),
    Yr.forEach(Dc),
    Zr.forEach(Dc);
}
function vr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Va ||
      ((Va = !0),
      Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, by)));
}
function Jr(e) {
  function t(i) {
    return vr(i, e);
  }
  if (0 < Vi.length) {
    vr(Vi[0], e);
    for (var n = 1; n < Vi.length; n++) {
      var r = Vi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ft !== null && vr(Ft, e),
      It !== null && vr(It, e),
      Bt !== null && vr(Bt, e),
      Yr.forEach(t),
      Zr.forEach(t),
      n = 0;
    n < Dt.length;
    n++
  )
    (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
    ip(n), n.blockedOn === null && Dt.shift();
}
var qn = Nt.ReactCurrentBatchConfig,
  Ts = !0;
function Dy(e, t, n, r) {
  var i = U,
    s = qn.transition;
  qn.transition = null;
  try {
    (U = 1), Zl(e, t, n, r);
  } finally {
    (U = i), (qn.transition = s);
  }
}
function Oy(e, t, n, r) {
  var i = U,
    s = qn.transition;
  qn.transition = null;
  try {
    (U = 4), Zl(e, t, n, r);
  } finally {
    (U = i), (qn.transition = s);
  }
}
function Zl(e, t, n, r) {
  if (Ts) {
    var i = Fa(e, t, n, r);
    if (i === null) Ho(e, t, r, Es, n), bc(e, r);
    else if (Ly(i, e, t, n, r)) r.stopPropagation();
    else if ((bc(e, r), t & 4 && -1 < My.indexOf(e))) {
      for (; i !== null; ) {
        var s = wi(i);
        if (
          (s !== null && ep(s),
          (s = Fa(e, t, n, r)),
          s === null && Ho(e, t, r, Es, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Ho(e, t, r, null, n);
  }
}
var Es = null;
function Fa(e, t, n, r) {
  if (((Es = null), (e = Xl(r)), (e = ln(e)), e !== null))
    if (((t = Pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Kh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Es = e), null;
}
function sp(e) {
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
      switch (ky()) {
        case ql:
          return 1;
        case Qh:
          return 4;
        case Ss:
        case Ty:
          return 16;
        case Yh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _t = null,
  Jl = null,
  ts = null;
function op() {
  if (ts) return ts;
  var e,
    t = Jl,
    n = t.length,
    r,
    i = "value" in _t ? _t.value : _t.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (ts = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ns(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Fi() {
  return !0;
}
function Oc() {
  return !1;
}
function Be(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Fi
        : Oc),
      (this.isPropagationStopped = Oc),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Fi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Fi));
      },
      persist: function () {},
      isPersistent: Fi,
    }),
    t
  );
}
var lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  eu = Be(lr),
  xi = Q({}, lr, { view: 0, detail: 0 }),
  _y = Be(xi),
  Do,
  Oo,
  xr,
  eo = Q({}, xi, {
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
    getModifierState: tu,
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
        : (e !== xr &&
            (xr && e.type === "mousemove"
              ? ((Do = e.screenX - xr.screenX), (Oo = e.screenY - xr.screenY))
              : (Oo = Do = 0),
            (xr = e)),
          Do);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Oo;
    },
  }),
  _c = Be(eo),
  Vy = Q({}, eo, { dataTransfer: 0 }),
  Fy = Be(Vy),
  Iy = Q({}, xi, { relatedTarget: 0 }),
  _o = Be(Iy),
  By = Q({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zy = Be(By),
  Uy = Q({}, lr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Hy = Be(Uy),
  $y = Q({}, lr, { data: 0 }),
  Vc = Be($y),
  Wy = {
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
  Ky = {
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
  Gy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Xy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gy[e]) ? !!t[e] : !1;
}
function tu() {
  return Xy;
}
var qy = Q({}, xi, {
    key: function (e) {
      if (e.key) {
        var t = Wy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ns(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ky[e.keyCode] || "Unidentified"
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
    getModifierState: tu,
    charCode: function (e) {
      return e.type === "keypress" ? ns(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ns(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Qy = Be(qy),
  Yy = Q({}, eo, {
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
  Fc = Be(Yy),
  Zy = Q({}, xi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tu,
  }),
  Jy = Be(Zy),
  ev = Q({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tv = Be(ev),
  nv = Q({}, eo, {
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
  rv = Be(nv),
  iv = [9, 13, 27, 32],
  nu = Tt && "CompositionEvent" in window,
  Or = null;
Tt && "documentMode" in document && (Or = document.documentMode);
var sv = Tt && "TextEvent" in window && !Or,
  ap = Tt && (!nu || (Or && 8 < Or && 11 >= Or)),
  Ic = " ",
  Bc = !1;
function lp(e, t) {
  switch (e) {
    case "keyup":
      return iv.indexOf(t.keyCode) !== -1;
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
function up(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Mn = !1;
function ov(e, t) {
  switch (e) {
    case "compositionend":
      return up(t);
    case "keypress":
      return t.which !== 32 ? null : ((Bc = !0), Ic);
    case "textInput":
      return (e = t.data), e === Ic && Bc ? null : e;
    default:
      return null;
  }
}
function av(e, t) {
  if (Mn)
    return e === "compositionend" || (!nu && lp(e, t))
      ? ((e = op()), (ts = Jl = _t = null), (Mn = !1), e)
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
      return ap && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var lv = {
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
function zc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!lv[e.type] : t === "textarea";
}
function cp(e, t, n, r) {
  zh(r),
    (t = Ps(t, "onChange")),
    0 < t.length &&
      ((n = new eu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _r = null,
  ei = null;
function uv(e) {
  Sp(e, 0);
}
function to(e) {
  var t = Dn(e);
  if (Dh(t)) return e;
}
function cv(e, t) {
  if (e === "change") return t;
}
var dp = !1;
if (Tt) {
  var Vo;
  if (Tt) {
    var Fo = "oninput" in document;
    if (!Fo) {
      var Uc = document.createElement("div");
      Uc.setAttribute("oninput", "return;"),
        (Fo = typeof Uc.oninput == "function");
    }
    Vo = Fo;
  } else Vo = !1;
  dp = Vo && (!document.documentMode || 9 < document.documentMode);
}
function Hc() {
  _r && (_r.detachEvent("onpropertychange", fp), (ei = _r = null));
}
function fp(e) {
  if (e.propertyName === "value" && to(ei)) {
    var t = [];
    cp(t, ei, e, Xl(e)), Wh(uv, t);
  }
}
function dv(e, t, n) {
  e === "focusin"
    ? (Hc(), (_r = t), (ei = n), _r.attachEvent("onpropertychange", fp))
    : e === "focusout" && Hc();
}
function fv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return to(ei);
}
function hv(e, t) {
  if (e === "click") return to(t);
}
function pv(e, t) {
  if (e === "input" || e === "change") return to(t);
}
function mv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var nt = typeof Object.is == "function" ? Object.is : mv;
function ti(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!wa.call(t, i) || !nt(e[i], t[i])) return !1;
  }
  return !0;
}
function $c(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wc(e, t) {
  var n = $c(e);
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
    n = $c(n);
  }
}
function hp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? hp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function pp() {
  for (var e = window, t = vs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = vs(e.document);
  }
  return t;
}
function ru(e) {
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
function gv(e) {
  var t = pp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    hp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ru(n)) {
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
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Wc(n, s));
        var o = Wc(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
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
var yv = Tt && "documentMode" in document && 11 >= document.documentMode,
  Ln = null,
  Ia = null,
  Vr = null,
  Ba = !1;
function Kc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ba ||
    Ln == null ||
    Ln !== vs(r) ||
    ((r = Ln),
    "selectionStart" in r && ru(r)
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
    (Vr && ti(Vr, r)) ||
      ((Vr = r),
      (r = Ps(Ia, "onSelect")),
      0 < r.length &&
        ((t = new eu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ln))));
}
function Ii(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var bn = {
    animationend: Ii("Animation", "AnimationEnd"),
    animationiteration: Ii("Animation", "AnimationIteration"),
    animationstart: Ii("Animation", "AnimationStart"),
    transitionend: Ii("Transition", "TransitionEnd"),
  },
  Io = {},
  mp = {};
Tt &&
  ((mp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete bn.animationend.animation,
    delete bn.animationiteration.animation,
    delete bn.animationstart.animation),
  "TransitionEvent" in window || delete bn.transitionend.transition);
function no(e) {
  if (Io[e]) return Io[e];
  if (!bn[e]) return e;
  var t = bn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in mp) return (Io[e] = t[n]);
  return e;
}
var gp = no("animationend"),
  yp = no("animationiteration"),
  vp = no("animationstart"),
  xp = no("transitionend"),
  wp = new Map(),
  Gc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function qt(e, t) {
  wp.set(e, t), En(t, [e]);
}
for (var Bo = 0; Bo < Gc.length; Bo++) {
  var zo = Gc[Bo],
    vv = zo.toLowerCase(),
    xv = zo[0].toUpperCase() + zo.slice(1);
  qt(vv, "on" + xv);
}
qt(gp, "onAnimationEnd");
qt(yp, "onAnimationIteration");
qt(vp, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(xp, "onTransitionEnd");
Zn("onMouseEnter", ["mouseout", "mouseover"]);
Zn("onMouseLeave", ["mouseout", "mouseover"]);
Zn("onPointerEnter", ["pointerout", "pointerover"]);
Zn("onPointerLeave", ["pointerout", "pointerover"]);
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
var Ar =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  wv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));
function Xc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), vy(r, t, void 0, e), (e.currentTarget = null);
}
function Sp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          Xc(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          Xc(i, a, u), (s = l);
        }
    }
  }
  if (ws) throw ((e = Oa), (ws = !1), (Oa = null), e);
}
function $(e, t) {
  var n = t[Wa];
  n === void 0 && (n = t[Wa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (kp(t, e, 2, !1), n.add(r));
}
function Uo(e, t, n) {
  var r = 0;
  t && (r |= 4), kp(n, e, r, t);
}
var Bi = "_reactListening" + Math.random().toString(36).slice(2);
function ni(e) {
  if (!e[Bi]) {
    (e[Bi] = !0),
      Ah.forEach(function (n) {
        n !== "selectionchange" && (wv.has(n) || Uo(n, !1, e), Uo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Bi] || ((t[Bi] = !0), Uo("selectionchange", !1, t));
  }
}
function kp(e, t, n, r) {
  switch (sp(t)) {
    case 1:
      var i = Dy;
      break;
    case 4:
      i = Oy;
      break;
    default:
      i = Zl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Da ||
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
function Ho(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = ln(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Wh(function () {
    var u = s,
      c = Xl(n),
      d = [];
    e: {
      var f = wp.get(e);
      if (f !== void 0) {
        var y = eu,
          v = e;
        switch (e) {
          case "keypress":
            if (ns(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Qy;
            break;
          case "focusin":
            (v = "focus"), (y = _o);
            break;
          case "focusout":
            (v = "blur"), (y = _o);
            break;
          case "beforeblur":
          case "afterblur":
            y = _o;
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
            y = _c;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Fy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Jy;
            break;
          case gp:
          case yp:
          case vp:
            y = zy;
            break;
          case xp:
            y = tv;
            break;
          case "scroll":
            y = _y;
            break;
          case "wheel":
            y = rv;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Hy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Fc;
        }
        var x = (t & 4) !== 0,
          w = !x && e === "scroll",
          m = x ? (f !== null ? f + "Capture" : null) : f;
        x = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              m !== null && ((S = Qr(p, m)), S != null && x.push(ri(p, S, g)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((f = new y(f, v, null, n, c)), d.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          f &&
            n !== La &&
            (v = n.relatedTarget || n.fromElement) &&
            (ln(v) || v[Et]))
        )
          break e;
        if (
          (y || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? ln(v) : null),
              v !== null &&
                ((w = Pn(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((x = _c),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Fc),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (w = y == null ? f : Dn(y)),
            (g = v == null ? f : Dn(v)),
            (f = new x(S, p + "leave", y, n, c)),
            (f.target = w),
            (f.relatedTarget = g),
            (S = null),
            ln(c) === u &&
              ((x = new x(m, p + "enter", v, n, c)),
              (x.target = g),
              (x.relatedTarget = w),
              (S = x)),
            (w = S),
            y && v)
          )
            t: {
              for (x = y, m = v, p = 0, g = x; g; g = jn(g)) p++;
              for (g = 0, S = m; S; S = jn(S)) g++;
              for (; 0 < p - g; ) (x = jn(x)), p--;
              for (; 0 < g - p; ) (m = jn(m)), g--;
              for (; p--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = jn(x)), (m = jn(m));
              }
              x = null;
            }
          else x = null;
          y !== null && qc(d, f, y, x, !1),
            v !== null && w !== null && qc(d, w, v, x, !0);
        }
      }
      e: {
        if (
          ((f = u ? Dn(u) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === "select" || (y === "input" && f.type === "file"))
        )
          var T = cv;
        else if (zc(f))
          if (dp) T = pv;
          else {
            T = fv;
            var P = dv;
          }
        else
          (y = f.nodeName) &&
            y.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (T = hv);
        if (T && (T = T(e, u))) {
          cp(d, T, n, c);
          break e;
        }
        P && P(e, f, u),
          e === "focusout" &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === "number" &&
            Na(f, "number", f.value);
      }
      switch (((P = u ? Dn(u) : window), e)) {
        case "focusin":
          (zc(P) || P.contentEditable === "true") &&
            ((Ln = P), (Ia = u), (Vr = null));
          break;
        case "focusout":
          Vr = Ia = Ln = null;
          break;
        case "mousedown":
          Ba = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ba = !1), Kc(d, n, c);
          break;
        case "selectionchange":
          if (yv) break;
        case "keydown":
        case "keyup":
          Kc(d, n, c);
      }
      var N;
      if (nu)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        Mn
          ? lp(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (ap &&
          n.locale !== "ko" &&
          (Mn || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && Mn && (N = op())
            : ((_t = c),
              (Jl = "value" in _t ? _t.value : _t.textContent),
              (Mn = !0))),
        (P = Ps(u, E)),
        0 < P.length &&
          ((E = new Vc(E, e, null, n, c)),
          d.push({ event: E, listeners: P }),
          N ? (E.data = N) : ((N = up(n)), N !== null && (E.data = N)))),
        (N = sv ? ov(e, n) : av(e, n)) &&
          ((u = Ps(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Vc("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = N)));
    }
    Sp(d, t);
  });
}
function ri(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ps(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Qr(e, n)),
      s != null && r.unshift(ri(e, s, i)),
      (s = Qr(e, t)),
      s != null && r.push(ri(e, s, i))),
      (e = e.return);
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Qr(n, s)), l != null && o.unshift(ri(n, l, a)))
        : i || ((l = Qr(n, s)), l != null && o.push(ri(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Sv = /\r\n?/g,
  kv = /\u0000|\uFFFD/g;
function Qc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Sv,
      `
`
    )
    .replace(kv, "");
}
function zi(e, t, n) {
  if (((t = Qc(t)), Qc(e) !== t && n)) throw Error(C(425));
}
function Cs() {}
var za = null,
  Ua = null;
function Ha(e, t) {
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
var $a = typeof setTimeout == "function" ? setTimeout : void 0,
  Tv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Yc = typeof Promise == "function" ? Promise : void 0,
  Ev =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Yc < "u"
      ? function (e) {
          return Yc.resolve(null).then(e).catch(Pv);
        }
      : $a;
function Pv(e) {
  setTimeout(function () {
    throw e;
  });
}
function $o(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Jr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Jr(t);
}
function zt(e) {
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
function Zc(e) {
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
  lt = "__reactFiber$" + ur,
  ii = "__reactProps$" + ur,
  Et = "__reactContainer$" + ur,
  Wa = "__reactEvents$" + ur,
  Cv = "__reactListeners$" + ur,
  Nv = "__reactHandles$" + ur;
function ln(e) {
  var t = e[lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Et] || n[lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Zc(e); e !== null; ) {
          if ((n = e[lt])) return n;
          e = Zc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function wi(e) {
  return (
    (e = e[lt] || e[Et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function ro(e) {
  return e[ii] || null;
}
var Ka = [],
  On = -1;
function Qt(e) {
  return { current: e };
}
function W(e) {
  0 > On || ((e.current = Ka[On]), (Ka[On] = null), On--);
}
function H(e, t) {
  On++, (Ka[On] = e.current), (e.current = t);
}
var Gt = {},
  Se = Qt(Gt),
  Ae = Qt(!1),
  yn = Gt;
function Jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Re(e) {
  return (e = e.childContextTypes), e != null;
}
function Ns() {
  W(Ae), W(Se);
}
function Jc(e, t, n) {
  if (Se.current !== Gt) throw Error(C(168));
  H(Se, t), H(Ae, n);
}
function Tp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, dy(e) || "Unknown", i));
  return Q({}, n, r);
}
function js(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Gt),
    (yn = Se.current),
    H(Se, e),
    H(Ae, Ae.current),
    !0
  );
}
function ed(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Tp(e, t, yn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Ae),
      W(Se),
      H(Se, e))
    : W(Ae),
    H(Ae, n);
}
var yt = null,
  io = !1,
  Wo = !1;
function Ep(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
function jv(e) {
  (io = !0), Ep(e);
}
function Yt() {
  if (!Wo && yt !== null) {
    Wo = !0;
    var e = 0,
      t = U;
    try {
      var n = yt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (yt = null), (io = !1);
    } catch (i) {
      throw (yt !== null && (yt = yt.slice(e + 1)), qh(ql, Yt), i);
    } finally {
      (U = t), (Wo = !1);
    }
  }
  return null;
}
var _n = [],
  Vn = 0,
  As = null,
  Rs = 0,
  He = [],
  $e = 0,
  vn = null,
  vt = 1,
  xt = "";
function rn(e, t) {
  (_n[Vn++] = Rs), (_n[Vn++] = As), (As = e), (Rs = t);
}
function Pp(e, t, n) {
  (He[$e++] = vt), (He[$e++] = xt), (He[$e++] = vn), (vn = e);
  var r = vt;
  e = xt;
  var i = 32 - et(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - et(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (vt = (1 << (32 - et(t) + i)) | (n << i) | r),
      (xt = s + e);
  } else (vt = (1 << s) | (n << i) | r), (xt = e);
}
function iu(e) {
  e.return !== null && (rn(e, 1), Pp(e, 1, 0));
}
function su(e) {
  for (; e === As; )
    (As = _n[--Vn]), (_n[Vn] = null), (Rs = _n[--Vn]), (_n[Vn] = null);
  for (; e === vn; )
    (vn = He[--$e]),
      (He[$e] = null),
      (xt = He[--$e]),
      (He[$e] = null),
      (vt = He[--$e]),
      (He[$e] = null);
}
var Oe = null,
  De = null,
  K = !1,
  Je = null;
function Cp(e, t) {
  var n = We(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function td(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Oe = e), (De = zt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), (De = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = vn !== null ? { id: vt, overflow: xt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = We(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            (De = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ga(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xa(e) {
  if (K) {
    var t = De;
    if (t) {
      var n = t;
      if (!td(e, t)) {
        if (Ga(e)) throw Error(C(418));
        t = zt(n.nextSibling);
        var r = Oe;
        t && td(e, t)
          ? Cp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (Oe = e));
      }
    } else {
      if (Ga(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (K = !1), (Oe = e);
    }
  }
}
function nd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function Ui(e) {
  if (e !== Oe) return !1;
  if (!K) return nd(e), (K = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ha(e.type, e.memoizedProps))),
    t && (t = De))
  ) {
    if (Ga(e)) throw (Np(), Error(C(418)));
    for (; t; ) Cp(e, t), (t = zt(t.nextSibling));
  }
  if ((nd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              De = zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else De = Oe ? zt(e.stateNode.nextSibling) : null;
  return !0;
}
function Np() {
  for (var e = De; e; ) e = zt(e.nextSibling);
}
function er() {
  (De = Oe = null), (K = !1);
}
function ou(e) {
  Je === null ? (Je = [e]) : Je.push(e);
}
var Av = Nt.ReactCurrentBatchConfig;
function wr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Hi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function rd(e) {
  var t = e._init;
  return t(e._payload);
}
function jp(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = Wt(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, g, S) {
    return p === null || p.tag !== 6
      ? ((p = Zo(g, m.mode, S)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function l(m, p, g, S) {
    var T = g.type;
    return T === Rn
      ? c(m, p, g.props.children, S, g.key)
      : p !== null &&
        (p.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === Lt &&
            rd(T) === p.type))
      ? ((S = i(p, g.props)), (S.ref = wr(m, p, g)), (S.return = m), S)
      : ((S = us(g.type, g.key, g.props, null, m.mode, S)),
        (S.ref = wr(m, p, g)),
        (S.return = m),
        S);
  }
  function u(m, p, g, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Jo(g, m.mode, S)), (p.return = m), p)
      : ((p = i(p, g.children || [])), (p.return = m), p);
  }
  function c(m, p, g, S, T) {
    return p === null || p.tag !== 7
      ? ((p = pn(g, m.mode, S, T)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function d(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Zo("" + p, m.mode, g)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Li:
          return (
            (g = us(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = wr(m, null, p)),
            (g.return = m),
            g
          );
        case An:
          return (p = Jo(p, m.mode, g)), (p.return = m), p;
        case Lt:
          var S = p._init;
          return d(m, S(p._payload), g);
      }
      if (Nr(p) || mr(p))
        return (p = pn(p, m.mode, g, null)), (p.return = m), p;
      Hi(m, p);
    }
    return null;
  }
  function f(m, p, g, S) {
    var T = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return T !== null ? null : a(m, p, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Li:
          return g.key === T ? l(m, p, g, S) : null;
        case An:
          return g.key === T ? u(m, p, g, S) : null;
        case Lt:
          return (T = g._init), f(m, p, T(g._payload), S);
      }
      if (Nr(g) || mr(g)) return T !== null ? null : c(m, p, g, S, null);
      Hi(m, g);
    }
    return null;
  }
  function y(m, p, g, S, T) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(g) || null), a(p, m, "" + S, T);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Li:
          return (m = m.get(S.key === null ? g : S.key) || null), l(p, m, S, T);
        case An:
          return (m = m.get(S.key === null ? g : S.key) || null), u(p, m, S, T);
        case Lt:
          var P = S._init;
          return y(m, p, g, P(S._payload), T);
      }
      if (Nr(S) || mr(S)) return (m = m.get(g) || null), c(p, m, S, T, null);
      Hi(p, S);
    }
    return null;
  }
  function v(m, p, g, S) {
    for (
      var T = null, P = null, N = p, E = (p = 0), V = null;
      N !== null && E < g.length;
      E++
    ) {
      N.index > E ? ((V = N), (N = null)) : (V = N.sibling);
      var b = f(m, N, g[E], S);
      if (b === null) {
        N === null && (N = V);
        break;
      }
      e && N && b.alternate === null && t(m, N),
        (p = s(b, p, E)),
        P === null ? (T = b) : (P.sibling = b),
        (P = b),
        (N = V);
    }
    if (E === g.length) return n(m, N), K && rn(m, E), T;
    if (N === null) {
      for (; E < g.length; E++)
        (N = d(m, g[E], S)),
          N !== null &&
            ((p = s(N, p, E)), P === null ? (T = N) : (P.sibling = N), (P = N));
      return K && rn(m, E), T;
    }
    for (N = r(m, N); E < g.length; E++)
      (V = y(N, m, E, g[E], S)),
        V !== null &&
          (e && V.alternate !== null && N.delete(V.key === null ? E : V.key),
          (p = s(V, p, E)),
          P === null ? (T = V) : (P.sibling = V),
          (P = V));
    return (
      e &&
        N.forEach(function (ae) {
          return t(m, ae);
        }),
      K && rn(m, E),
      T
    );
  }
  function x(m, p, g, S) {
    var T = mr(g);
    if (typeof T != "function") throw Error(C(150));
    if (((g = T.call(g)), g == null)) throw Error(C(151));
    for (
      var P = (T = null), N = p, E = (p = 0), V = null, b = g.next();
      N !== null && !b.done;
      E++, b = g.next()
    ) {
      N.index > E ? ((V = N), (N = null)) : (V = N.sibling);
      var ae = f(m, N, b.value, S);
      if (ae === null) {
        N === null && (N = V);
        break;
      }
      e && N && ae.alternate === null && t(m, N),
        (p = s(ae, p, E)),
        P === null ? (T = ae) : (P.sibling = ae),
        (P = ae),
        (N = V);
    }
    if (b.done) return n(m, N), K && rn(m, E), T;
    if (N === null) {
      for (; !b.done; E++, b = g.next())
        (b = d(m, b.value, S)),
          b !== null &&
            ((p = s(b, p, E)), P === null ? (T = b) : (P.sibling = b), (P = b));
      return K && rn(m, E), T;
    }
    for (N = r(m, N); !b.done; E++, b = g.next())
      (b = y(N, m, E, b.value, S)),
        b !== null &&
          (e && b.alternate !== null && N.delete(b.key === null ? E : b.key),
          (p = s(b, p, E)),
          P === null ? (T = b) : (P.sibling = b),
          (P = b));
    return (
      e &&
        N.forEach(function (jt) {
          return t(m, jt);
        }),
      K && rn(m, E),
      T
    );
  }
  function w(m, p, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Rn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Li:
          e: {
            for (var T = g.key, P = p; P !== null; ) {
              if (P.key === T) {
                if (((T = g.type), T === Rn)) {
                  if (P.tag === 7) {
                    n(m, P.sibling),
                      (p = i(P, g.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  P.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === Lt &&
                    rd(T) === P.type)
                ) {
                  n(m, P.sibling),
                    (p = i(P, g.props)),
                    (p.ref = wr(m, P, g)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            g.type === Rn
              ? ((p = pn(g.props.children, m.mode, S, g.key)),
                (p.return = m),
                (m = p))
              : ((S = us(g.type, g.key, g.props, null, m.mode, S)),
                (S.ref = wr(m, p, g)),
                (S.return = m),
                (m = S));
          }
          return o(m);
        case An:
          e: {
            for (P = g.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, g.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Jo(g, m.mode, S)), (p.return = m), (m = p);
          }
          return o(m);
        case Lt:
          return (P = g._init), w(m, p, P(g._payload), S);
      }
      if (Nr(g)) return v(m, p, g, S);
      if (mr(g)) return x(m, p, g, S);
      Hi(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = Zo(g, m.mode, S)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return w;
}
var tr = jp(!0),
  Ap = jp(!1),
  Ms = Qt(null),
  Ls = null,
  Fn = null,
  au = null;
function lu() {
  au = Fn = Ls = null;
}
function uu(e) {
  var t = Ms.current;
  W(Ms), (e._currentValue = t);
}
function qa(e, t, n) {
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
function Qn(e, t) {
  (Ls = e),
    (au = Fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (je = !0), (e.firstContext = null));
}
function Ge(e) {
  var t = e._currentValue;
  if (au !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Fn === null)) {
      if (Ls === null) throw Error(C(308));
      (Fn = e), (Ls.dependencies = { lanes: 0, firstContext: e });
    } else Fn = Fn.next = e;
  return t;
}
var un = null;
function cu(e) {
  un === null ? (un = [e]) : un.push(e);
}
function Rp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), cu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Pt(e, r)
  );
}
function Pt(e, t) {
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
var bt = !1;
function du(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Mp(e, t) {
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
function Ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Pt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), cu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Pt(e, n)
  );
}
function rs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ql(e, n);
  }
}
function id(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
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
function bs(e, t, n, r) {
  var i = e.updateQueue;
  bt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var f = a.lane,
        y = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            x = a;
          switch (((f = t), (y = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                d = v.call(y, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (f = typeof v == "function" ? v.call(y, d, f) : v),
                f == null)
              )
                break e;
              d = Q({}, d, f);
              break e;
            case 2:
              bt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (y = {
          eventTime: y,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (l = d)) : (c = c.next = y),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (wn |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function sd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var Si = {},
  dt = Qt(Si),
  si = Qt(Si),
  oi = Qt(Si);
function cn(e) {
  if (e === Si) throw Error(C(174));
  return e;
}
function fu(e, t) {
  switch ((H(oi, t), H(si, e), H(dt, Si), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Aa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Aa(t, e));
  }
  W(dt), H(dt, t);
}
function nr() {
  W(dt), W(si), W(oi);
}
function Lp(e) {
  cn(oi.current);
  var t = cn(dt.current),
    n = Aa(t, e.type);
  t !== n && (H(si, e), H(dt, n));
}
function hu(e) {
  si.current === e && (W(dt), W(si));
}
var G = Qt(0);
function Ds(e) {
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
var Ko = [];
function pu() {
  for (var e = 0; e < Ko.length; e++)
    Ko[e]._workInProgressVersionPrimary = null;
  Ko.length = 0;
}
var is = Nt.ReactCurrentDispatcher,
  Go = Nt.ReactCurrentBatchConfig,
  xn = 0,
  q = null,
  se = null,
  ce = null,
  Os = !1,
  Fr = !1,
  ai = 0,
  Rv = 0;
function me() {
  throw Error(C(321));
}
function mu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!nt(e[n], t[n])) return !1;
  return !0;
}
function gu(e, t, n, r, i, s) {
  if (
    ((xn = s),
    (q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (is.current = e === null || e.memoizedState === null ? Dv : Ov),
    (e = n(r, i)),
    Fr)
  ) {
    s = 0;
    do {
      if (((Fr = !1), (ai = 0), 25 <= s)) throw Error(C(301));
      (s += 1),
        (ce = se = null),
        (t.updateQueue = null),
        (is.current = _v),
        (e = n(r, i));
    } while (Fr);
  }
  if (
    ((is.current = _s),
    (t = se !== null && se.next !== null),
    (xn = 0),
    (ce = se = q = null),
    (Os = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function yu() {
  var e = ai !== 0;
  return (ai = 0), e;
}
function at() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ce === null ? (q.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function Xe() {
  if (se === null) {
    var e = q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = ce === null ? q.memoizedState : ce.next;
  if (t !== null) (ce = t), (se = e);
  else {
    if (e === null) throw Error(C(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      ce === null ? (q.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
function li(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xo(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = se,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((xn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (q.lanes |= c),
          (wn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      nt(r, t.memoizedState) || (je = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (q.lanes |= s), (wn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function qo(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    nt(s, t.memoizedState) || (je = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function bp() {}
function Dp(e, t) {
  var n = q,
    r = Xe(),
    i = t(),
    s = !nt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (je = !0)),
    (r = r.queue),
    vu(Vp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ui(9, _p.bind(null, n, r, i, t), void 0, null),
      de === null)
    )
      throw Error(C(349));
    xn & 30 || Op(n, t, i);
  }
  return i;
}
function Op(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _p(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Fp(t) && Ip(e);
}
function Vp(e, t, n) {
  return n(function () {
    Fp(t) && Ip(e);
  });
}
function Fp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function Ip(e) {
  var t = Pt(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function od(e) {
  var t = at();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: li,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bv.bind(null, q, e)),
    [t.memoizedState, e]
  );
}
function ui(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Bp() {
  return Xe().memoizedState;
}
function ss(e, t, n, r) {
  var i = at();
  (q.flags |= e),
    (i.memoizedState = ui(1 | t, n, void 0, r === void 0 ? null : r));
}
function so(e, t, n, r) {
  var i = Xe();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (se !== null) {
    var o = se.memoizedState;
    if (((s = o.destroy), r !== null && mu(r, o.deps))) {
      i.memoizedState = ui(t, n, s, r);
      return;
    }
  }
  (q.flags |= e), (i.memoizedState = ui(1 | t, n, s, r));
}
function ad(e, t) {
  return ss(8390656, 8, e, t);
}
function vu(e, t) {
  return so(2048, 8, e, t);
}
function zp(e, t) {
  return so(4, 2, e, t);
}
function Up(e, t) {
  return so(4, 4, e, t);
}
function Hp(e, t) {
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
function $p(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), so(4, 4, Hp.bind(null, t, e), n)
  );
}
function xu() {}
function Wp(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Kp(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Gp(e, t, n) {
  return xn & 21
    ? (nt(n, t) || ((n = Zh()), (q.lanes |= n), (wn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = n));
}
function Mv(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Go.transition;
  Go.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Go.transition = r);
  }
}
function Xp() {
  return Xe().memoizedState;
}
function Lv(e, t, n) {
  var r = $t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    qp(e))
  )
    Qp(t, n);
  else if (((n = Rp(e, t, n, r)), n !== null)) {
    var i = Te();
    tt(n, e, r, i), Yp(n, t, r);
  }
}
function bv(e, t, n) {
  var r = $t(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qp(e)) Qp(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), nt(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), cu(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Rp(e, t, i, r)),
      n !== null && ((i = Te()), tt(n, e, r, i), Yp(n, t, r));
  }
}
function qp(e) {
  var t = e.alternate;
  return e === q || (t !== null && t === q);
}
function Qp(e, t) {
  Fr = Os = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Yp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ql(e, n);
  }
}
var _s = {
    readContext: Ge,
    useCallback: me,
    useContext: me,
    useEffect: me,
    useImperativeHandle: me,
    useInsertionEffect: me,
    useLayoutEffect: me,
    useMemo: me,
    useReducer: me,
    useRef: me,
    useState: me,
    useDebugValue: me,
    useDeferredValue: me,
    useTransition: me,
    useMutableSource: me,
    useSyncExternalStore: me,
    useId: me,
    unstable_isNewReconciler: !1,
  },
  Dv = {
    readContext: Ge,
    useCallback: function (e, t) {
      return (at().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ge,
    useEffect: ad,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ss(4194308, 4, Hp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ss(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ss(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = at();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = at();
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
        (e = e.dispatch = Lv.bind(null, q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = at();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: od,
    useDebugValue: xu,
    useDeferredValue: function (e) {
      return (at().memoizedState = e);
    },
    useTransition: function () {
      var e = od(!1),
        t = e[0];
      return (e = Mv.bind(null, e[1])), (at().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = q,
        i = at();
      if (K) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(C(349));
        xn & 30 || Op(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        ad(Vp.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        ui(9, _p.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = at(),
        t = de.identifierPrefix;
      if (K) {
        var n = xt,
          r = vt;
        (n = (r & ~(1 << (32 - et(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ai++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Rv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ov = {
    readContext: Ge,
    useCallback: Wp,
    useContext: Ge,
    useEffect: vu,
    useImperativeHandle: $p,
    useInsertionEffect: zp,
    useLayoutEffect: Up,
    useMemo: Kp,
    useReducer: Xo,
    useRef: Bp,
    useState: function () {
      return Xo(li);
    },
    useDebugValue: xu,
    useDeferredValue: function (e) {
      var t = Xe();
      return Gp(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Xo(li)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: bp,
    useSyncExternalStore: Dp,
    useId: Xp,
    unstable_isNewReconciler: !1,
  },
  _v = {
    readContext: Ge,
    useCallback: Wp,
    useContext: Ge,
    useEffect: vu,
    useImperativeHandle: $p,
    useInsertionEffect: zp,
    useLayoutEffect: Up,
    useMemo: Kp,
    useReducer: qo,
    useRef: Bp,
    useState: function () {
      return qo(li);
    },
    useDebugValue: xu,
    useDeferredValue: function (e) {
      var t = Xe();
      return se === null ? (t.memoizedState = e) : Gp(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = qo(li)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: bp,
    useSyncExternalStore: Dp,
    useId: Xp,
    unstable_isNewReconciler: !1,
  };
function Ye(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Qa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var oo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      i = $t(e),
      s = wt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Ut(e, s, i)),
      t !== null && (tt(t, e, i, r), rs(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      i = $t(e),
      s = wt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Ut(e, s, i)),
      t !== null && (tt(t, e, i, r), rs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      r = $t(e),
      i = wt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ut(e, i, r)),
      t !== null && (tt(t, e, r, n), rs(t, e, r));
  },
};
function ld(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ti(n, r) || !ti(i, s)
      : !0
  );
}
function Zp(e, t, n) {
  var r = !1,
    i = Gt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Ge(s))
      : ((i = Re(t) ? yn : Se.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Jn(e, i) : Gt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = oo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function ud(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && oo.enqueueReplaceState(t, t.state, null);
}
function Ya(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), du(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Ge(s))
    : ((s = Re(t) ? yn : Se.current), (i.context = Jn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Qa(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && oo.enqueueReplaceState(i, i.state, null),
      bs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function rr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += cy(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Qo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Za(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Vv = typeof WeakMap == "function" ? WeakMap : Map;
function Jp(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Fs || ((Fs = !0), (ll = r)), Za(e, t);
    }),
    n
  );
}
function em(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Za(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Za(e, t),
          typeof r != "function" &&
            (Ht === null ? (Ht = new Set([this])) : Ht.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function cd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Vv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Yv.bind(null, e, t, n)), t.then(e, e));
}
function dd(e) {
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
function fd(e, t, n, r, i) {
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
              : ((t = wt(-1, 1)), (t.tag = 2), Ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Fv = Nt.ReactCurrentOwner,
  je = !1;
function ke(e, t, n, r) {
  t.child = e === null ? Ap(t, null, n, r) : tr(t, e.child, n, r);
}
function hd(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Qn(t, i),
    (r = gu(e, t, n, r, s, i)),
    (n = yu()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ct(e, t, i))
      : (K && n && iu(t), (t.flags |= 1), ke(e, t, r, i), t.child)
  );
}
function pd(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Nu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), tm(e, t, s, r, i))
      : ((e = us(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ti), n(o, r) && e.ref === t.ref)
    )
      return Ct(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Wt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function tm(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ti(s, r) && e.ref === t.ref)
      if (((je = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (je = !0);
      else return (t.lanes = e.lanes), Ct(e, t, i);
  }
  return Ja(e, t, n, r, i);
}
function nm(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        H(Bn, be),
        (be |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          H(Bn, be),
          (be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        H(Bn, be),
        (be |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      H(Bn, be),
      (be |= r);
  return ke(e, t, i, n), t.child;
}
function rm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ja(e, t, n, r, i) {
  var s = Re(n) ? yn : Se.current;
  return (
    (s = Jn(t, s)),
    Qn(t, i),
    (n = gu(e, t, n, r, s, i)),
    (r = yu()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ct(e, t, i))
      : (K && r && iu(t), (t.flags |= 1), ke(e, t, n, i), t.child)
  );
}
function md(e, t, n, r, i) {
  if (Re(n)) {
    var s = !0;
    js(t);
  } else s = !1;
  if ((Qn(t, i), t.stateNode === null))
    os(e, t), Zp(t, n, r), Ya(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ge(u))
      : ((u = Re(n) ? yn : Se.current), (u = Jn(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && ud(t, o, r, u)),
      (bt = !1);
    var f = t.memoizedState;
    (o.state = f),
      bs(t, r, o, i),
      (l = t.memoizedState),
      a !== r || f !== l || Ae.current || bt
        ? (typeof c == "function" && (Qa(t, n, c, r), (l = t.memoizedState)),
          (a = bt || ld(t, n, a, r, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Mp(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ye(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ge(l))
        : ((l = Re(n) ? yn : Se.current), (l = Jn(t, l)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && ud(t, o, r, l)),
      (bt = !1),
      (f = t.memoizedState),
      (o.state = f),
      bs(t, r, o, i);
    var v = t.memoizedState;
    a !== d || f !== v || Ae.current || bt
      ? (typeof y == "function" && (Qa(t, n, y, r), (v = t.memoizedState)),
        (u = bt || ld(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return el(e, t, n, r, s, i);
}
function el(e, t, n, r, i, s) {
  rm(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && ed(t, n, !1), Ct(e, t, s);
  (r = t.stateNode), (Fv.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = tr(t, e.child, null, s)), (t.child = tr(t, null, a, s)))
      : ke(e, t, a, s),
    (t.memoizedState = r.state),
    i && ed(t, n, !0),
    t.child
  );
}
function im(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Jc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Jc(e, t.context, !1),
    fu(e, t.containerInfo);
}
function gd(e, t, n, r, i) {
  return er(), ou(i), (t.flags |= 256), ke(e, t, n, r), t.child;
}
var tl = { dehydrated: null, treeContext: null, retryLane: 0 };
function nl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sm(e, t, n) {
  var r = t.pendingProps,
    i = G.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    H(G, i & 1),
    e === null)
  )
    return (
      Xa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = uo(o, r, 0, null)),
              (e = pn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = nl(n)),
              (t.memoizedState = tl),
              e)
            : wu(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Iv(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Wt(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Wt(a, s)) : ((s = pn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? nl(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = tl),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Wt(s, { mode: "visible", children: r.children })),
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
function wu(e, t) {
  return (
    (t = uo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function $i(e, t, n, r) {
  return (
    r !== null && ou(r),
    tr(t, e.child, null, n),
    (e = wu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Iv(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Qo(Error(C(422)))), $i(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = uo({ mode: "visible", children: r.children }, i, 0, null)),
        (s = pn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && tr(t, e.child, null, o),
        (t.child.memoizedState = nl(o)),
        (t.memoizedState = tl),
        s);
  if (!(t.mode & 1)) return $i(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(C(419))), (r = Qo(s, r, void 0)), $i(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), je || a)) {
    if (((r = de), r !== null)) {
      switch (o & -o) {
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
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Pt(e, i), tt(r, e, i, -1));
    }
    return Cu(), (r = Qo(Error(C(421)))), $i(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Zv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (De = zt(i.nextSibling)),
      (Oe = t),
      (K = !0),
      (Je = null),
      e !== null &&
        ((He[$e++] = vt),
        (He[$e++] = xt),
        (He[$e++] = vn),
        (vt = e.id),
        (xt = e.overflow),
        (vn = t)),
      (t = wu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function yd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qa(e.return, t, n);
}
function Yo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function om(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ke(e, t, r.children, n), (r = G.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yd(e, n, t);
        else if (e.tag === 19) yd(e, n, t);
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
  if ((H(G, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ds(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Yo(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ds(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Yo(t, !0, n, null, s);
        break;
      case "together":
        Yo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function os(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (wn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Bv(e, t, n) {
  switch (t.tag) {
    case 3:
      im(t), er();
      break;
    case 5:
      Lp(t);
      break;
    case 1:
      Re(t.type) && js(t);
      break;
    case 4:
      fu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      H(Ms, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (H(G, G.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? sm(e, t, n)
          : (H(G, G.current & 1),
            (e = Ct(e, t, n)),
            e !== null ? e.sibling : null);
      H(G, G.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return om(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        H(G, G.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), nm(e, t, n);
  }
  return Ct(e, t, n);
}
var am, rl, lm, um;
am = function (e, t) {
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
rl = function () {};
lm = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), cn(dt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Pa(e, i)), (r = Pa(e, r)), (s = []);
        break;
      case "select":
        (i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = ja(e, i)), (r = ja(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Cs);
    }
    Ra(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Xr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Xr.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && $("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
um = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sr(e, t) {
  if (!K)
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
function ge(e) {
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
function zv(e, t, n) {
  var r = t.pendingProps;
  switch ((su(t), t.tag)) {
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
      return ge(t), null;
    case 1:
      return Re(t.type) && Ns(), ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nr(),
        W(Ae),
        W(Se),
        pu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ui(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Je !== null && (dl(Je), (Je = null)))),
        rl(e, t),
        ge(t),
        null
      );
    case 5:
      hu(t);
      var i = cn(oi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        lm(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ge(t), null;
        }
        if (((e = cn(dt.current)), Ui(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[lt] = t), (r[ii] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ar.length; i++) $(Ar[i], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              Cc(r, s), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              jc(r, s), $("invalid", r);
          }
          Ra(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      zi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      zi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Xr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              bi(r), Nc(r, s, !0);
              break;
            case "textarea":
              bi(r), Ac(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Cs);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[lt] = t),
            (e[ii] = r),
            am(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Ma(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ar.length; i++) $(Ar[i], e);
                i = r;
                break;
              case "source":
                $("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (i = r);
                break;
              case "details":
                $("toggle", e), (i = r);
                break;
              case "input":
                Cc(e, r), (i = Pa(e, r)), $("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                jc(e, r), (i = ja(e, r)), $("invalid", e);
                break;
              default:
                i = r;
            }
            Ra(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? Bh(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Fh(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && qr(e, l)
                    : typeof l == "number" && qr(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Xr.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && $("scroll", e)
                      : l != null && $l(e, s, l, o));
              }
            switch (n) {
              case "input":
                bi(e), Nc(e, r, !1);
                break;
              case "textarea":
                bi(e), Ac(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Kn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Kn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Cs);
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
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null) um(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = cn(oi.current)), cn(dt.current), Ui(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[lt] = t),
            (s = r.nodeValue !== n) && ((e = Oe), e !== null))
          )
            switch (e.tag) {
              case 3:
                zi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[lt] = t),
            (t.stateNode = r);
      }
      return ge(t), null;
    case 13:
      if (
        (W(G),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && De !== null && t.mode & 1 && !(t.flags & 128))
          Np(), er(), (t.flags |= 98560), (s = !1);
        else if (((s = Ui(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(C(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(C(317));
            s[lt] = t;
          } else
            er(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ge(t), (s = !1);
        } else Je !== null && (dl(Je), (Je = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? oe === 0 && (oe = 3) : Cu())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null);
    case 4:
      return (
        nr(), rl(e, t), e === null && ni(t.stateNode.containerInfo), ge(t), null
      );
    case 10:
      return uu(t.type._context), ge(t), null;
    case 17:
      return Re(t.type) && Ns(), ge(t), null;
    case 19:
      if ((W(G), (s = t.memoizedState), s === null)) return ge(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Sr(s, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Ds(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Sr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return H(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            te() > ir &&
            ((t.flags |= 128), (r = !0), Sr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ds(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !K)
            )
              return ge(t), null;
          } else
            2 * te() - s.renderingStartTime > ir &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = te()),
          (t.sibling = null),
          (n = G.current),
          H(G, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null);
    case 22:
    case 23:
      return (
        Pu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? be & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Uv(e, t) {
  switch ((su(t), t.tag)) {
    case 1:
      return (
        Re(t.type) && Ns(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nr(),
        W(Ae),
        W(Se),
        pu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return hu(t), null;
    case 13:
      if ((W(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        er();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(G), null;
    case 4:
      return nr(), null;
    case 10:
      return uu(t.type._context), null;
    case 22:
    case 23:
      return Pu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wi = !1,
  ve = !1,
  Hv = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function In(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function il(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var vd = !1;
function $v(e, t) {
  if (((za = Ts), (e = pp()), ru(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var y;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (y = d.firstChild) !== null;

            )
              (f = d), (d = y);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (a = o),
                f === s && ++c === r && (l = o),
                (y = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ua = { focusedElem: e, selectionRange: n }, Ts = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    w = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Ye(t.type, x),
                      w
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (S) {
          Z(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (v = vd), (vd = !1), v;
}
function Ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && il(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ao(e, t) {
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
function sl(e) {
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
function cm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), cm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[lt], delete t[ii], delete t[Wa], delete t[Cv], delete t[Nv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function dm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dm(e.return)) return null;
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
function ol(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Cs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ol(e, t, n), e = e.sibling; e !== null; ) ol(e, t, n), (e = e.sibling);
}
function al(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (al(e, t, n), e = e.sibling; e !== null; ) al(e, t, n), (e = e.sibling);
}
var fe = null,
  Ze = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) fm(e, t, n), (n = n.sibling);
}
function fm(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(Js, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ve || In(n, t);
    case 6:
      var r = fe,
        i = Ze;
      (fe = null),
        At(e, t, n),
        (fe = r),
        (Ze = i),
        fe !== null &&
          (Ze
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null &&
        (Ze
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? $o(e.parentNode, n)
              : e.nodeType === 1 && $o(e, n),
            Jr(e))
          : $o(fe, n.stateNode));
      break;
    case 4:
      (r = fe),
        (i = Ze),
        (fe = n.stateNode.containerInfo),
        (Ze = !0),
        At(e, t, n),
        (fe = r),
        (Ze = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && il(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (
        !ve &&
        (In(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Z(n, t, a);
        }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ve = (r = ve) || n.memoizedState !== null), At(e, t, n), (ve = r))
        : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function wd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Hv()),
      t.forEach(function (r) {
        var i = Jv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (fe = a.stateNode), (Ze = !1);
              break e;
            case 3:
              (fe = a.stateNode.containerInfo), (Ze = !0);
              break e;
            case 4:
              (fe = a.stateNode.containerInfo), (Ze = !0);
              break e;
          }
          a = a.return;
        }
        if (fe === null) throw Error(C(160));
        fm(s, o, i), (fe = null), (Ze = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Z(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) hm(t, e), (t = t.sibling);
}
function hm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qe(t, e), st(e), r & 4)) {
        try {
          Ir(3, e, e.return), ao(3, e);
        } catch (x) {
          Z(e, e.return, x);
        }
        try {
          Ir(5, e, e.return);
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 1:
      qe(t, e), st(e), r & 512 && n !== null && In(n, n.return);
      break;
    case 5:
      if (
        (qe(t, e),
        st(e),
        r & 512 && n !== null && In(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          qr(i, "");
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Oh(i, s),
              Ma(a, o);
            var u = Ma(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? Bh(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Fh(i, d)
                : c === "children"
                ? qr(i, d)
                : $l(i, c, d, u);
            }
            switch (a) {
              case "input":
                Ca(i, s);
                break;
              case "textarea":
                _h(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? Kn(i, !!s.multiple, y, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Kn(i, !!s.multiple, s.defaultValue, !0)
                      : Kn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[ii] = s;
          } catch (x) {
            Z(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((qe(t, e), st(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (qe(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jr(t.containerInfo);
        } catch (x) {
          Z(e, e.return, x);
        }
      break;
    case 4:
      qe(t, e), st(e);
      break;
    case 13:
      qe(t, e),
        st(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Tu = te())),
        r & 4 && wd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ve = (u = ve) || c), qe(t, e), (ve = u)) : qe(t, e),
        st(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (R = e, c = e.child; c !== null; ) {
            for (d = R = c; R !== null; ) {
              switch (((f = R), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ir(4, f, f.return);
                  break;
                case 1:
                  In(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      Z(r, n, x);
                    }
                  }
                  break;
                case 5:
                  In(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    kd(d);
                    continue;
                  }
              }
              y !== null ? ((y.return = f), (R = y)) : kd(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Ih("display", o)));
              } catch (x) {
                Z(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (x) {
                Z(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      qe(t, e), st(e), r & 4 && wd(e);
      break;
    case 21:
      break;
    default:
      qe(t, e), st(e);
  }
}
function st(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (qr(i, ""), (r.flags &= -33));
          var s = xd(e);
          al(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = xd(e);
          ol(e, a, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (l) {
      Z(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Wv(e, t, n) {
  (R = e), pm(e);
}
function pm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Wi;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || ve;
        a = Wi;
        var u = ve;
        if (((Wi = o), (ve = l) && !u))
          for (R = i; R !== null; )
            (o = R),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Td(i)
                : l !== null
                ? ((l.return = o), (R = l))
                : Td(i);
        for (; s !== null; ) (R = s), pm(s), (s = s.sibling);
        (R = i), (Wi = a), (ve = u);
      }
      Sd(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (R = s)) : Sd(e);
  }
}
function Sd(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || ao(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ye(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && sd(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                sd(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                    var d = c.dehydrated;
                    d !== null && Jr(d);
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
              throw Error(C(163));
          }
        ve || (t.flags & 512 && sl(t));
      } catch (f) {
        Z(t, t.return, f);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function kd(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Td(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ao(4, t);
          } catch (l) {
            Z(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Z(t, i, l);
            }
          }
          var s = t.return;
          try {
            sl(t);
          } catch (l) {
            Z(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            sl(t);
          } catch (l) {
            Z(t, o, l);
          }
      }
    } catch (l) {
      Z(t, t.return, l);
    }
    if (t === e) {
      R = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (R = a);
      break;
    }
    R = t.return;
  }
}
var Kv = Math.ceil,
  Vs = Nt.ReactCurrentDispatcher,
  Su = Nt.ReactCurrentOwner,
  Ke = Nt.ReactCurrentBatchConfig,
  I = 0,
  de = null,
  ne = null,
  he = 0,
  be = 0,
  Bn = Qt(0),
  oe = 0,
  ci = null,
  wn = 0,
  lo = 0,
  ku = 0,
  Br = null,
  Ne = null,
  Tu = 0,
  ir = 1 / 0,
  gt = null,
  Fs = !1,
  ll = null,
  Ht = null,
  Ki = !1,
  Vt = null,
  Is = 0,
  zr = 0,
  ul = null,
  as = -1,
  ls = 0;
function Te() {
  return I & 6 ? te() : as !== -1 ? as : (as = te());
}
function $t(e) {
  return e.mode & 1
    ? I & 2 && he !== 0
      ? he & -he
      : Av.transition !== null
      ? (ls === 0 && (ls = Zh()), ls)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sp(e.type))),
        e)
    : 1;
}
function tt(e, t, n, r) {
  if (50 < zr) throw ((zr = 0), (ul = null), Error(C(185)));
  vi(e, n, r),
    (!(I & 2) || e !== de) &&
      (e === de && (!(I & 2) && (lo |= n), oe === 4 && Ot(e, he)),
      Me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((ir = te() + 500), io && Yt()));
}
function Me(e, t) {
  var n = e.callbackNode;
  Ay(e, t);
  var r = ks(e, e === de ? he : 0);
  if (r === 0)
    n !== null && Lc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Lc(n), t === 1))
      e.tag === 0 ? jv(Ed.bind(null, e)) : Ep(Ed.bind(null, e)),
        Ev(function () {
          !(I & 6) && Yt();
        }),
        (n = null);
    else {
      switch (Jh(r)) {
        case 1:
          n = ql;
          break;
        case 4:
          n = Qh;
          break;
        case 16:
          n = Ss;
          break;
        case 536870912:
          n = Yh;
          break;
        default:
          n = Ss;
      }
      n = km(n, mm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function mm(e, t) {
  if (((as = -1), (ls = 0), I & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Yn() && e.callbackNode !== n) return null;
  var r = ks(e, e === de ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Bs(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var s = ym();
    (de !== e || he !== t) && ((gt = null), (ir = te() + 500), hn(e, t));
    do
      try {
        qv();
        break;
      } catch (a) {
        gm(e, a);
      }
    while (!0);
    lu(),
      (Vs.current = s),
      (I = i),
      ne !== null ? (t = 0) : ((de = null), (he = 0), (t = oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = _a(e)), i !== 0 && ((r = i), (t = cl(e, i)))), t === 1)
    )
      throw ((n = ci), hn(e, 0), Ot(e, r), Me(e, te()), n);
    if (t === 6) Ot(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Gv(i) &&
          ((t = Bs(e, r)),
          t === 2 && ((s = _a(e)), s !== 0 && ((r = s), (t = cl(e, s)))),
          t === 1))
      )
        throw ((n = ci), hn(e, 0), Ot(e, r), Me(e, te()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          sn(e, Ne, gt);
          break;
        case 3:
          if (
            (Ot(e, r), (r & 130023424) === r && ((t = Tu + 500 - te()), 10 < t))
          ) {
            if (ks(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Te(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = $a(sn.bind(null, e, Ne, gt), t);
            break;
          }
          sn(e, Ne, gt);
          break;
        case 4:
          if ((Ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - et(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = te() - r),
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
                : 1960 * Kv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $a(sn.bind(null, e, Ne, gt), r);
            break;
          }
          sn(e, Ne, gt);
          break;
        case 5:
          sn(e, Ne, gt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Me(e, te()), e.callbackNode === n ? mm.bind(null, e) : null;
}
function cl(e, t) {
  var n = Br;
  return (
    e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
    (e = Bs(e, t)),
    e !== 2 && ((t = Ne), (Ne = n), t !== null && dl(t)),
    e
  );
}
function dl(e) {
  Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function Gv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!nt(s(), i)) return !1;
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
function Ot(e, t) {
  for (
    t &= ~ku,
      t &= ~lo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - et(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ed(e) {
  if (I & 6) throw Error(C(327));
  Yn();
  var t = ks(e, 0);
  if (!(t & 1)) return Me(e, te()), null;
  var n = Bs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _a(e);
    r !== 0 && ((t = r), (n = cl(e, r)));
  }
  if (n === 1) throw ((n = ci), hn(e, 0), Ot(e, t), Me(e, te()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    sn(e, Ne, gt),
    Me(e, te()),
    null
  );
}
function Eu(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((ir = te() + 500), io && Yt());
  }
}
function Sn(e) {
  Vt !== null && Vt.tag === 0 && !(I & 6) && Yn();
  var t = I;
  I |= 1;
  var n = Ke.transition,
    r = U;
  try {
    if (((Ke.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (Ke.transition = n), (I = t), !(I & 6) && Yt();
  }
}
function Pu() {
  (be = Bn.current), W(Bn);
}
function hn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Tv(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((su(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ns();
          break;
        case 3:
          nr(), W(Ae), W(Se), pu();
          break;
        case 5:
          hu(r);
          break;
        case 4:
          nr();
          break;
        case 13:
          W(G);
          break;
        case 19:
          W(G);
          break;
        case 10:
          uu(r.type._context);
          break;
        case 22:
        case 23:
          Pu();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (ne = e = Wt(e.current, null)),
    (he = be = t),
    (oe = 0),
    (ci = null),
    (ku = lo = wn = 0),
    (Ne = Br = null),
    un !== null)
  ) {
    for (t = 0; t < un.length; t++)
      if (((n = un[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    un = null;
  }
  return e;
}
function gm(e, t) {
  do {
    var n = ne;
    try {
      if ((lu(), (is.current = _s), Os)) {
        for (var r = q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Os = !1;
      }
      if (
        ((xn = 0),
        (ce = se = q = null),
        (Fr = !1),
        (ai = 0),
        (Su.current = null),
        n === null || n.return === null)
      ) {
        (oe = 1), (ci = t), (ne = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = he),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = dd(o);
          if (y !== null) {
            (y.flags &= -257),
              fd(y, o, a, s, t),
              y.mode & 1 && cd(s, u, t),
              (t = y),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              cd(s, u, t), Cu();
              break e;
            }
            l = Error(C(426));
          }
        } else if (K && a.mode & 1) {
          var w = dd(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              fd(w, o, a, s, t),
              ou(rr(l, a));
            break e;
          }
        }
        (s = l = rr(l, a)),
          oe !== 4 && (oe = 2),
          Br === null ? (Br = [s]) : Br.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = Jp(s, l, t);
              id(s, m);
              break e;
            case 1:
              a = l;
              var p = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Ht === null || !Ht.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = em(s, a, t);
                id(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      xm(n);
    } catch (T) {
      (t = T), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ym() {
  var e = Vs.current;
  return (Vs.current = _s), e === null ? _s : e;
}
function Cu() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    de === null || (!(wn & 268435455) && !(lo & 268435455)) || Ot(de, he);
}
function Bs(e, t) {
  var n = I;
  I |= 2;
  var r = ym();
  (de !== e || he !== t) && ((gt = null), hn(e, t));
  do
    try {
      Xv();
      break;
    } catch (i) {
      gm(e, i);
    }
  while (!0);
  if ((lu(), (I = n), (Vs.current = r), ne !== null)) throw Error(C(261));
  return (de = null), (he = 0), oe;
}
function Xv() {
  for (; ne !== null; ) vm(ne);
}
function qv() {
  for (; ne !== null && !wy(); ) vm(ne);
}
function vm(e) {
  var t = Sm(e.alternate, e, be);
  (e.memoizedProps = e.pendingProps),
    t === null ? xm(e) : (ne = t),
    (Su.current = null);
}
function xm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Uv(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (oe = 6), (ne = null);
        return;
      }
    } else if (((n = zv(n, t, be)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function sn(e, t, n) {
  var r = U,
    i = Ke.transition;
  try {
    (Ke.transition = null), (U = 1), Qv(e, t, n, r);
  } finally {
    (Ke.transition = i), (U = r);
  }
  return null;
}
function Qv(e, t, n, r) {
  do Yn();
  while (Vt !== null);
  if (I & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Ry(e, s),
    e === de && ((ne = de = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ki ||
      ((Ki = !0),
      km(Ss, function () {
        return Yn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ke.transition), (Ke.transition = null);
    var o = U;
    U = 1;
    var a = I;
    (I |= 4),
      (Su.current = null),
      $v(e, n),
      hm(n, e),
      gv(Ua),
      (Ts = !!za),
      (Ua = za = null),
      (e.current = n),
      Wv(n),
      Sy(),
      (I = a),
      (U = o),
      (Ke.transition = s);
  } else e.current = n;
  if (
    (Ki && ((Ki = !1), (Vt = e), (Is = i)),
    (s = e.pendingLanes),
    s === 0 && (Ht = null),
    Ey(n.stateNode),
    Me(e, te()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Fs) throw ((Fs = !1), (e = ll), (ll = null), e);
  return (
    Is & 1 && e.tag !== 0 && Yn(),
    (s = e.pendingLanes),
    s & 1 ? (e === ul ? zr++ : ((zr = 0), (ul = e))) : (zr = 0),
    Yt(),
    null
  );
}
function Yn() {
  if (Vt !== null) {
    var e = Jh(Is),
      t = Ke.transition,
      n = U;
    try {
      if (((Ke.transition = null), (U = 16 > e ? 16 : e), Vt === null))
        var r = !1;
      else {
        if (((e = Vt), (Vt = null), (Is = 0), I & 6)) throw Error(C(331));
        var i = I;
        for (I |= 4, R = e.current; R !== null; ) {
          var s = R,
            o = s.child;
          if (R.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (R = u; R !== null; ) {
                  var c = R;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ir(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (R = d);
                  else
                    for (; R !== null; ) {
                      c = R;
                      var f = c.sibling,
                        y = c.return;
                      if ((cm(c), c === u)) {
                        R = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = y), (R = f);
                        break;
                      }
                      R = y;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var w = x.sibling;
                    (x.sibling = null), (x = w);
                  } while (x !== null);
                }
              }
              R = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (R = o);
          else
            e: for (; R !== null; ) {
              if (((s = R), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ir(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (R = m);
                break e;
              }
              R = s.return;
            }
        }
        var p = e.current;
        for (R = p; R !== null; ) {
          o = R;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (R = g);
          else
            e: for (o = p; R !== null; ) {
              if (((a = R), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ao(9, a);
                  }
                } catch (T) {
                  Z(a, a.return, T);
                }
              if (a === o) {
                R = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (R = S);
                break e;
              }
              R = a.return;
            }
        }
        if (
          ((I = i), Yt(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(Js, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (Ke.transition = t);
    }
  }
  return !1;
}
function Pd(e, t, n) {
  (t = rr(n, t)),
    (t = Jp(e, t, 1)),
    (e = Ut(e, t, 1)),
    (t = Te()),
    e !== null && (vi(e, 1, t), Me(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) Pd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ht === null || !Ht.has(r)))
        ) {
          (e = rr(n, e)),
            (e = em(t, e, 1)),
            (t = Ut(t, e, 1)),
            (e = Te()),
            t !== null && (vi(t, 1, e), Me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Yv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (he & n) === n &&
      (oe === 4 || (oe === 3 && (he & 130023424) === he && 500 > te() - Tu)
        ? hn(e, 0)
        : (ku |= n)),
    Me(e, t);
}
function wm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _i), (_i <<= 1), !(_i & 130023424) && (_i = 4194304))
      : (t = 1));
  var n = Te();
  (e = Pt(e, t)), e !== null && (vi(e, t, n), Me(e, n));
}
function Zv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), wm(e, n);
}
function Jv(e, t) {
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
      throw Error(C(314));
  }
  r !== null && r.delete(t), wm(e, n);
}
var Sm;
Sm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (je = !1), Bv(e, t, n);
      je = !!(e.flags & 131072);
    }
  else (je = !1), K && t.flags & 1048576 && Pp(t, Rs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      os(e, t), (e = t.pendingProps);
      var i = Jn(t, Se.current);
      Qn(t, n), (i = gu(null, t, r, e, i, n));
      var s = yu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Re(r) ? ((s = !0), js(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            du(t),
            (i.updater = oo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ya(t, r, e, n),
            (t = el(null, t, r, !0, s, n)))
          : ((t.tag = 0), K && s && iu(t), ke(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (os(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = t1(r)),
          (e = Ye(r, e)),
          i)
        ) {
          case 0:
            t = Ja(null, t, r, e, n);
            break e;
          case 1:
            t = md(null, t, r, e, n);
            break e;
          case 11:
            t = hd(null, t, r, e, n);
            break e;
          case 14:
            t = pd(null, t, r, Ye(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        Ja(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        md(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((im(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Mp(e, t),
          bs(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = rr(Error(C(423)), t)), (t = gd(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = rr(Error(C(424)), t)), (t = gd(e, t, r, n, i));
            break e;
          } else
            for (
              De = zt(t.stateNode.containerInfo.firstChild),
                Oe = t,
                K = !0,
                Je = null,
                n = Ap(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((er(), r === i)) {
            t = Ct(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Lp(t),
        e === null && Xa(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Ha(r, i) ? (o = null) : s !== null && Ha(r, s) && (t.flags |= 32),
        rm(e, t),
        ke(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Xa(t), null;
    case 13:
      return sm(e, t, n);
    case 4:
      return (
        fu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tr(t, null, r, n)) : ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        hd(e, t, r, i, n)
      );
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          H(Ms, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (nt(s.value, o)) {
            if (s.children === i.children && !Ae.current) {
              t = Ct(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = wt(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      qa(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(C(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  qa(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        ke(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Qn(t, n),
        (i = Ge(i)),
        (r = r(i)),
        (t.flags |= 1),
        ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ye(r, t.pendingProps)),
        (i = Ye(r.type, i)),
        pd(e, t, r, i, n)
      );
    case 15:
      return tm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        os(e, t),
        (t.tag = 1),
        Re(r) ? ((e = !0), js(t)) : (e = !1),
        Qn(t, n),
        Zp(t, r, i),
        Ya(t, r, i, n),
        el(null, t, r, !0, e, n)
      );
    case 19:
      return om(e, t, n);
    case 22:
      return nm(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function km(e, t) {
  return qh(e, t);
}
function e1(e, t, n, r) {
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
function We(e, t, n, r) {
  return new e1(e, t, n, r);
}
function Nu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function t1(e) {
  if (typeof e == "function") return Nu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Kl)) return 11;
    if (e === Gl) return 14;
  }
  return 2;
}
function Wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = We(e.tag, t, e.key, e.mode)),
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
function us(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Nu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Rn:
        return pn(n.children, i, s, t);
      case Wl:
        (o = 8), (i |= 8);
        break;
      case Sa:
        return (
          (e = We(12, n, t, i | 2)), (e.elementType = Sa), (e.lanes = s), e
        );
      case ka:
        return (e = We(13, n, t, i)), (e.elementType = ka), (e.lanes = s), e;
      case Ta:
        return (e = We(19, n, t, i)), (e.elementType = Ta), (e.lanes = s), e;
      case Lh:
        return uo(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Rh:
              o = 10;
              break e;
            case Mh:
              o = 9;
              break e;
            case Kl:
              o = 11;
              break e;
            case Gl:
              o = 14;
              break e;
            case Lt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = We(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function pn(e, t, n, r) {
  return (e = We(7, e, r, t)), (e.lanes = n), e;
}
function uo(e, t, n, r) {
  return (
    (e = We(22, e, r, t)),
    (e.elementType = Lh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Zo(e, t, n) {
  return (e = We(6, e, null, t)), (e.lanes = n), e;
}
function Jo(e, t, n) {
  return (
    (t = We(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function n1(e, t, n, r, i) {
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
    (this.eventTimes = bo(0)),
    (this.expirationTimes = bo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = bo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ju(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new n1(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = We(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    du(s),
    e
  );
}
function r1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: An,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Tm(e) {
  if (!e) return Gt;
  e = e._reactInternals;
  e: {
    if (Pn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Re(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Re(n)) return Tp(e, n, t);
  }
  return t;
}
function Em(e, t, n, r, i, s, o, a, l) {
  return (
    (e = ju(n, r, !0, e, i, s, o, a, l)),
    (e.context = Tm(null)),
    (n = e.current),
    (r = Te()),
    (i = $t(n)),
    (s = wt(r, i)),
    (s.callback = t ?? null),
    Ut(n, s, i),
    (e.current.lanes = i),
    vi(e, i, r),
    Me(e, r),
    e
  );
}
function co(e, t, n, r) {
  var i = t.current,
    s = Te(),
    o = $t(i);
  return (
    (n = Tm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ut(i, t, o)),
    e !== null && (tt(e, i, o, s), rs(e, i, o)),
    o
  );
}
function zs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Au(e, t) {
  Cd(e, t), (e = e.alternate) && Cd(e, t);
}
function i1() {
  return null;
}
var Pm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ru(e) {
  this._internalRoot = e;
}
fo.prototype.render = Ru.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  co(e, t, null, null);
};
fo.prototype.unmount = Ru.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Sn(function () {
      co(null, e, null, null);
    }),
      (t[Et] = null);
  }
};
function fo(e) {
  this._internalRoot = e;
}
fo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = np();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
    Dt.splice(n, 0, e), n === 0 && ip(e);
  }
};
function Mu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ho(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nd() {}
function s1(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = zs(o);
        s.call(u);
      };
    }
    var o = Em(t, r, e, 0, null, !1, !1, "", Nd);
    return (
      (e._reactRootContainer = o),
      (e[Et] = o.current),
      ni(e.nodeType === 8 ? e.parentNode : e),
      Sn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = zs(l);
      a.call(u);
    };
  }
  var l = ju(e, 0, !1, null, null, !1, !1, "", Nd);
  return (
    (e._reactRootContainer = l),
    (e[Et] = l.current),
    ni(e.nodeType === 8 ? e.parentNode : e),
    Sn(function () {
      co(t, l, n, r);
    }),
    l
  );
}
function po(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = zs(o);
        a.call(l);
      };
    }
    co(t, o, e, i);
  } else o = s1(n, t, e, i, r);
  return zs(o);
}
ep = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jr(t.pendingLanes);
        n !== 0 &&
          (Ql(t, n | 1), Me(t, te()), !(I & 6) && ((ir = te() + 500), Yt()));
      }
      break;
    case 13:
      Sn(function () {
        var r = Pt(e, 1);
        if (r !== null) {
          var i = Te();
          tt(r, e, 1, i);
        }
      }),
        Au(e, 1);
  }
};
Yl = function (e) {
  if (e.tag === 13) {
    var t = Pt(e, 134217728);
    if (t !== null) {
      var n = Te();
      tt(t, e, 134217728, n);
    }
    Au(e, 134217728);
  }
};
tp = function (e) {
  if (e.tag === 13) {
    var t = $t(e),
      n = Pt(e, t);
    if (n !== null) {
      var r = Te();
      tt(n, e, t, r);
    }
    Au(e, t);
  }
};
np = function () {
  return U;
};
rp = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
ba = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ca(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = ro(r);
            if (!i) throw Error(C(90));
            Dh(r), Ca(r, i);
          }
        }
      }
      break;
    case "textarea":
      _h(e, n);
      break;
    case "select":
      (t = n.value), t != null && Kn(e, !!n.multiple, t, !1);
  }
};
Hh = Eu;
$h = Sn;
var o1 = { usingClientEntryPoint: !1, Events: [wi, Dn, ro, zh, Uh, Eu] },
  kr = {
    findFiberByHostInstance: ln,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  a1 = {
    bundleType: kr.bundleType,
    version: kr.version,
    rendererPackageName: kr.rendererPackageName,
    rendererConfig: kr.rendererConfig,
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
      return (e = Gh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: kr.findFiberByHostInstance || i1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Gi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Gi.isDisabled && Gi.supportsFiber)
    try {
      (Js = Gi.inject(a1)), (ct = Gi);
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o1;
Ie.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mu(t)) throw Error(C(200));
  return r1(e, t, null, n);
};
Ie.createRoot = function (e, t) {
  if (!Mu(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = Pm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ju(e, 1, !1, null, null, n, !1, r, i)),
    (e[Et] = t.current),
    ni(e.nodeType === 8 ? e.parentNode : e),
    new Ru(t)
  );
};
Ie.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Gh(t)), (e = e === null ? null : e.stateNode), e;
};
Ie.flushSync = function (e) {
  return Sn(e);
};
Ie.hydrate = function (e, t, n) {
  if (!ho(t)) throw Error(C(200));
  return po(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
  if (!Mu(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Pm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Em(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[Et] = t.current),
    ni(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new fo(t);
};
Ie.render = function (e, t, n) {
  if (!ho(t)) throw Error(C(200));
  return po(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
  if (!ho(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Sn(function () {
        po(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Et] = null);
        });
      }),
      !0)
    : !1;
};
Ie.unstable_batchedUpdates = Eu;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ho(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return po(e, t, n, !1, r);
};
Ie.version = "18.3.1-next-f1338f8080-20240426";
function Cm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cm);
    } catch (e) {
      console.error(e);
    }
}
Cm(), (Ch.exports = Ie);
var l1 = Ch.exports,
  Nm,
  jd = l1;
(Nm = jd.createRoot), jd.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var u1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c1 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  B = (e, t) => {
    const n = M.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: o,
          className: a = "",
          children: l,
          ...u
        },
        c
      ) =>
        M.createElement(
          "svg",
          {
            ref: c,
            ...u1,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? (Number(s) * 24) / Number(i) : s,
            className: ["lucide", `lucide-${c1(e)}`, a].join(" "),
            ...u,
          },
          [
            ...t.map(([d, f]) => M.createElement(d, f)),
            ...(Array.isArray(l) ? l : [l]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d1 = B("BookText", [
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",
      key: "t4utmx",
    },
  ],
  ["path", { d: "M8 7h6", key: "1f0q6e" }],
  ["path", { d: "M8 11h8", key: "vwpz6n" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f1 = B("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h1 = B("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p1 = B("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m1 = B("ClipboardList", [
  [
    "rect",
    {
      width: "8",
      height: "4",
      x: "8",
      y: "2",
      rx: "1",
      ry: "1",
      key: "tgr4d6",
    },
  ],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196",
    },
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g1 = B("Coins", [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ad = B("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Us = B("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y1 = B("Factory", [
  [
    "path",
    {
      d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "159hny",
    },
  ],
  ["path", { d: "M17 18h1", key: "uldtlt" }],
  ["path", { d: "M12 18h1", key: "s9uhes" }],
  ["path", { d: "M7 18h1", key: "1neino" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v1 = B("Fish", [
  [
    "path",
    {
      d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",
      key: "15baut",
    },
  ],
  ["path", { d: "M18 12v.5", key: "18hhni" }],
  ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86", key: "16dt7o" }],
  [
    "path",
    {
      d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",
      key: "l9di03",
    },
  ],
  [
    "path",
    {
      d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",
      key: "1kjonw",
    },
  ],
  [
    "path",
    {
      d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",
      key: "1zlm23",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x1 = B("Flower2", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
      key: "3pnvol",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["path", { d: "M12 10v12", key: "6ubwww" }],
  ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", key: "9hd38g" }],
  [
    "path",
    { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", key: "ufn41s" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rd = B("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w1 = B("Handshake", [
  ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }],
  [
    "path",
    {
      d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
      key: "9pr0kb",
    },
  ],
  ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }],
  ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }],
  ["path", { d: "M3 4h8", key: "1ep09j" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const di = B("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S1 = B("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k1 = B("Leaf", [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3",
    },
  ],
  [
    "path",
    { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T1 = B("LineChart", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E1 = B("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P1 = B("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C1 = B("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N1 = B("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j1 = B("Plane", [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A1 = B("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R1 = B("Smartphone", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jm = B("Sprout", [
  ["path", { d: "M7 20h10", key: "e6iznv" }],
  ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
  [
    "path",
    {
      d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
      key: "9gtqwd",
    },
  ],
  [
    "path",
    {
      d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
      key: "bkxnd2",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const M1 = B("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L1 = B("ThermometerSun", [
  ["path", { d: "M12 9a4 4 0 0 0-2 7.5", key: "1jvsq6" }],
  ["path", { d: "M12 3v2", key: "1w22ol" }],
  ["path", { d: "m6.6 18.4-1.4 1.4", key: "w2yidj" }],
  ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "iof6y5" }],
  ["path", { d: "M4 13H2", key: "118le4" }],
  ["path", { d: "M6.34 7.34 4.93 5.93", key: "1brd51" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b1 = B("TreePine", [
  [
    "path",
    {
      d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
      key: "cpyugq",
    },
  ],
  ["path", { d: "M12 22v-3", key: "kmzjlo" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fl = B("Trees", [
  [
    "path",
    {
      d: "M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",
      key: "yh07w9",
    },
  ],
  ["path", { d: "M7 16v6", key: "1a82de" }],
  ["path", { d: "M13 19v3", key: "13sx9i" }],
  [
    "path",
    {
      d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
      key: "1sj9kv",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D1 = B("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Am = B("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O1 = B("Waves", [
  [
    "path",
    {
      d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "knzxuh",
    },
  ],
  [
    "path",
    {
      d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "2jd2cc",
    },
  ],
  [
    "path",
    {
      d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "rd2r6e",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _1 = B("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Rm = M.createContext({});
function mo(e) {
  const t = M.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Lu = M.createContext(null),
  bu = M.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function V1(e = !0) {
  const t = M.useContext(Lu);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = M.useId();
  M.useEffect(() => {
    e && i(s);
  }, [e]);
  const o = M.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Du = typeof window < "u",
  Ou = Du ? M.useLayoutEffect : M.useEffect,
  Ee = (e) => e;
let F1 = Ee,
  hl = Ee;
function _u(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const kn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  St = (e) => e * 1e3,
  kt = (e) => e / 1e3,
  I1 = { skipAnimations: !1, useManualTiming: !1 };
function B1(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    s.has(u) && (l.schedule(u), e()), u(o);
  }
  const l = {
    schedule: (u, c = !1, d = !1) => {
      const y = d && r ? t : n;
      return c && s.add(u), y.has(u) || y.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    process: (u) => {
      if (((o = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const Xi = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  z1 = 40;
function Mm(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Xi.reduce((m, p) => ((m[p] = B1(s)), m), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: d,
      postRender: f,
    } = o,
    y = () => {
      const m = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, z1), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(y));
    },
    v = () => {
      (n = !0), (r = !0), i.isProcessing || e(y);
    };
  return {
    schedule: Xi.reduce((m, p) => {
      const g = o[p];
      return (m[p] = (S, T = !1, P = !1) => (n || v(), g.schedule(S, T, P))), m;
    }, {}),
    cancel: (m) => {
      for (let p = 0; p < Xi.length; p++) o[Xi[p]].cancel(m);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: z,
    cancel: rt,
    state: ue,
    steps: ea,
  } = Mm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ee, !0),
  Lm = M.createContext({ strict: !1 }),
  Md = {
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
for (const e in Md) sr[e] = { isEnabled: (t) => Md[e].some((n) => !!t[n]) };
function U1(e) {
  for (const t in e) sr[t] = { ...sr[t], ...e[t] };
}
const H1 = new Set([
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
function Hs(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    H1.has(e)
  );
}
let bm = (e) => !Hs(e);
function $1(e) {
  e && (bm = (t) => (t.startsWith("on") ? !Hs(t) : e(t)));
}
try {
  $1(require("@emotion/is-prop-valid").default);
} catch {}
function W1(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((bm(i) ||
        (n === !0 && Hs(i)) ||
        (!t && !Hs(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function K1(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const go = M.createContext({});
function fi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function yo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Vu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Fu = ["initial", ...Vu];
function vo(e) {
  return yo(e.animate) || Fu.some((t) => fi(e[t]));
}
function Dm(e) {
  return !!(vo(e) || e.variants);
}
function G1(e, t) {
  if (vo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || fi(n) ? n : void 0,
      animate: fi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function X1(e) {
  const { initial: t, animate: n } = G1(e, M.useContext(go));
  return M.useMemo(() => ({ initial: t, animate: n }), [Ld(t), Ld(n)]);
}
function Ld(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const q1 = Symbol.for("motionComponentSymbol");
function zn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Q1(e, t, n) {
  return M.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : zn(n) && (n.current = r));
    },
    [t]
  );
}
const Iu = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Y1 = "framerAppearId",
  Om = "data-" + Iu(Y1),
  { schedule: Bu, cancel: OE } = Mm(queueMicrotask, !1),
  _m = M.createContext({});
function Z1(e, t, n, r, i) {
  var s, o;
  const { visualElement: a } = M.useContext(go),
    l = M.useContext(Lm),
    u = M.useContext(Lu),
    c = M.useContext(bu).reducedMotion,
    d = M.useRef(null);
  (r = r || l.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const f = d.current,
    y = M.useContext(_m);
  f &&
    !f.projection &&
    i &&
    (f.type === "html" || f.type === "svg") &&
    J1(d.current, n, i, y);
  const v = M.useRef(!1);
  M.useInsertionEffect(() => {
    f && v.current && f.update(n, u);
  });
  const x = n[Om],
    w = M.useRef(
      !!x &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, x)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, x))
    );
  return (
    Ou(() => {
      f &&
        ((v.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        Bu.render(f.render),
        w.current && f.animationState && f.animationState.animateChanges());
    }),
    M.useEffect(() => {
      f &&
        (!w.current && f.animationState && f.animationState.animateChanges(),
        w.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null ||
              m === void 0 ||
              m.call(window, x);
          }),
          (w.current = !1)));
    }),
    f
  );
}
function J1(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Vm(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && zn(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function Vm(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Vm(e.parent);
}
function ex({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var s, o;
  e && U1(e);
  function a(u, c) {
    let d;
    const f = { ...M.useContext(bu), ...u, layoutId: tx(u) },
      { isStatic: y } = f,
      v = X1(u),
      x = r(u, y);
    if (!y && Du) {
      nx();
      const w = rx(f);
      (d = w.MeasureLayout),
        (v.visualElement = Z1(i, x, f, t, w.ProjectionNode));
    }
    return h.jsxs(go.Provider, {
      value: v,
      children: [
        d && v.visualElement
          ? h.jsx(d, { visualElement: v.visualElement, ...f })
          : null,
        n(i, u, Q1(x, v.visualElement, c), x, y, v.visualElement),
      ],
    });
  }
  a.displayName = `motion.${
    typeof i == "string"
      ? i
      : `create(${
          (o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !==
            null && o !== void 0
            ? o
            : ""
        })`
  }`;
  const l = M.forwardRef(a);
  return (l[q1] = i), l;
}
function tx({ layoutId: e }) {
  const t = M.useContext(Rm).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function nx(e, t) {
  M.useContext(Lm).strict;
}
function rx(e) {
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
const ix = [
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
function zu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(ix.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function bd(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Uu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = bd(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = bd(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const pl = (e) => Array.isArray(e),
  sx = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  ox = (e) => (pl(e) ? e[e.length - 1] || 0 : e),
  we = (e) => !!(e && e.getVelocity);
function cs(e) {
  const t = we(e) ? e.get() : e;
  return sx(t) ? t.toValue() : t;
}
function ax(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  s
) {
  const o = { latestValues: lx(r, i, s, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (a) => n({ props: r, current: a, ...o })),
      (o.onUpdate = (a) => n(a))),
    o
  );
}
const Fm = (e) => (t, n) => {
  const r = M.useContext(go),
    i = M.useContext(Lu),
    s = () => ax(e, t, r, i);
  return n ? s() : mo(s);
};
function lx(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const f in s) i[f] = cs(s[f]);
  let { initial: o, animate: a } = e;
  const l = vo(e),
    u = Dm(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  if (d && typeof d != "boolean" && !yo(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let y = 0; y < f.length; y++) {
      const v = Uu(e, f[y]);
      if (v) {
        const { transitionEnd: x, transition: w, ...m } = v;
        for (const p in m) {
          let g = m[p];
          if (Array.isArray(g)) {
            const S = c ? g.length - 1 : 0;
            g = g[S];
          }
          g !== null && (i[p] = g);
        }
        for (const p in x) i[p] = x[p];
      }
    }
  }
  return i;
}
const cr = [
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
  Cn = new Set(cr),
  Im = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Bm = Im("--"),
  ux = Im("var(--"),
  Hu = (e) => (ux(e) ? cx.test(e.split("/*")[0].trim()) : !1),
  cx =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  zm = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  pt = (e, t, n) => (n > t ? t : n < e ? e : n),
  dr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  hi = { ...dr, transform: (e) => pt(0, 1, e) },
  qi = { ...dr, default: 1 },
  ki = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Rt = ki("deg"),
  ft = ki("%"),
  L = ki("px"),
  dx = ki("vh"),
  fx = ki("vw"),
  Dd = {
    ...ft,
    parse: (e) => ft.parse(e) / 100,
    transform: (e) => ft.transform(e * 100),
  },
  hx = {
    borderWidth: L,
    borderTopWidth: L,
    borderRightWidth: L,
    borderBottomWidth: L,
    borderLeftWidth: L,
    borderRadius: L,
    radius: L,
    borderTopLeftRadius: L,
    borderTopRightRadius: L,
    borderBottomRightRadius: L,
    borderBottomLeftRadius: L,
    width: L,
    maxWidth: L,
    height: L,
    maxHeight: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    backgroundPositionX: L,
    backgroundPositionY: L,
  },
  px = {
    rotate: Rt,
    rotateX: Rt,
    rotateY: Rt,
    rotateZ: Rt,
    scale: qi,
    scaleX: qi,
    scaleY: qi,
    scaleZ: qi,
    skew: Rt,
    skewX: Rt,
    skewY: Rt,
    distance: L,
    translateX: L,
    translateY: L,
    translateZ: L,
    x: L,
    y: L,
    z: L,
    perspective: L,
    transformPerspective: L,
    opacity: hi,
    originX: Dd,
    originY: Dd,
    originZ: L,
  },
  Od = { ...dr, transform: Math.round },
  $u = {
    ...hx,
    ...px,
    zIndex: Od,
    size: L,
    fillOpacity: hi,
    strokeOpacity: hi,
    numOctaves: Od,
  },
  mx = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  gx = cr.length;
function yx(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < gx; s++) {
    const o = cr[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = zm(a, $u[o]);
      if (!l) {
        i = !1;
        const c = mx[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Wu(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Cn.has(l)) {
      o = !0;
      continue;
    } else if (Bm(l)) {
      i[l] = u;
      continue;
    } else {
      const c = zm(u, $u[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = yx(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const vx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  xx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function wx(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? vx : xx;
  e[s.offset] = L.transform(-r);
  const o = L.transform(t),
    a = L.transform(n);
  e[s.array] = `${o} ${a}`;
}
function _d(e, t, n) {
  return typeof e == "string" ? e : L.transform(t + n * e);
}
function Sx(e, t, n) {
  const r = _d(t, e.x, e.width),
    i = _d(n, e.y, e.height);
  return `${r} ${i}`;
}
function Ku(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d
) {
  if ((Wu(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: y, dimensions: v } = e;
  f.transform && (v && (y.transform = f.transform), delete f.transform),
    v &&
      (i !== void 0 || s !== void 0 || y.transform) &&
      (y.transformOrigin = Sx(
        v,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && wx(f, o, a, l, !1);
}
const Gu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Um = () => ({ ...Gu(), attrs: {} }),
  Xu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Hm(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const $m = new Set([
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
function Wm(e, t, n, r) {
  Hm(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute($m.has(i) ? i : Iu(i), t.attrs[i]);
}
const $s = {};
function kx(e) {
  Object.assign($s, e);
}
function Km(e, { layout: t, layoutId: n }) {
  return (
    Cn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!$s[e] || e === "opacity"))
  );
}
function qu(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (we(i[o]) ||
      (t.style && we(t.style[o])) ||
      Km(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function Gm(e, t, n) {
  const r = qu(e, t, n);
  for (const i in e)
    if (we(e[i]) || we(t[i])) {
      const s =
        cr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function Tx(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Vd = ["x", "y", "width", "height", "cx", "cy", "r"],
  Ex = {
    useVisualState: Fm({
      scrapeMotionValuesFromProps: Gm,
      createRenderState: Um,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let s = !!e.drag;
        if (!s) {
          for (const a in i)
            if (Cn.has(a)) {
              s = !0;
              break;
            }
        }
        if (!s) return;
        let o = !t;
        if (t)
          for (let a = 0; a < Vd.length; a++) {
            const l = Vd[a];
            e[l] !== t[l] && (o = !0);
          }
        o &&
          z.read(() => {
            Tx(n, r),
              z.render(() => {
                Ku(r, i, Xu(n.tagName), e.transformTemplate), Wm(n, r);
              });
          });
      },
    }),
  },
  Px = {
    useVisualState: Fm({
      scrapeMotionValuesFromProps: qu,
      createRenderState: Gu,
    }),
  };
function Xm(e, t, n) {
  for (const r in t) !we(t[r]) && !Km(r, n) && (e[r] = t[r]);
}
function Cx({ transformTemplate: e }, t) {
  return M.useMemo(() => {
    const n = Gu();
    return Wu(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Nx(e, t) {
  const n = e.style || {},
    r = {};
  return Xm(r, n, e), Object.assign(r, Cx(e, t)), r;
}
function jx(e, t) {
  const n = {},
    r = Nx(e, t);
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
function Ax(e, t, n, r) {
  const i = M.useMemo(() => {
    const s = Um();
    return (
      Ku(s, t, Xu(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    Xm(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function Rx(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (zu(n) ? Ax : jx)(r, s, o, n),
      u = W1(r, typeof n == "string", e),
      c = n !== M.Fragment ? { ...u, ...l, ref: i } : {},
      { children: d } = r,
      f = M.useMemo(() => (we(d) ? d.get() : d), [d]);
    return M.createElement(n, { ...c, children: f });
  };
}
function Mx(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(zu(r) ? Ex : Px),
      preloadedFeatures: e,
      useRender: Rx(i),
      createVisualElement: t,
      Component: r,
    };
    return ex(o);
  };
}
function qm(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function xo(e, t, n) {
  const r = e.getProps();
  return Uu(r, t, n !== void 0 ? n : r.custom, e);
}
const Qm = _u(() => window.ScrollTimeline !== void 0);
class Lx {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t))
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (Qm() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop();
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
  flatten() {
    this.runAll("flatten");
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
class bx extends Lx {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Qu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const ml = 2e4;
function Ym(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ml; ) (t += n), (r = e.next(t));
  return t >= ml ? 1 / 0 : t;
}
function Yu(e) {
  return typeof e == "function";
}
function Fd(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const Zu = (e) => Array.isArray(e) && typeof e[0] == "number",
  Dx = { linearEasing: void 0 };
function Ox(e, t) {
  const n = _u(e);
  return () => {
    var r;
    return (r = Dx[t]) !== null && r !== void 0 ? r : n();
  };
}
const Ws = Ox(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Zm = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(kn(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Jm(e) {
  return !!(
    (typeof e == "function" && Ws()) ||
    !e ||
    (typeof e == "string" && (e in gl || Ws())) ||
    Zu(e) ||
    (Array.isArray(e) && e.every(Jm))
  );
}
const Rr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  gl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Rr([0, 0.65, 0.55, 1]),
    circOut: Rr([0.55, 0, 1, 0.45]),
    backIn: Rr([0.31, 0.01, 0.66, -0.59]),
    backOut: Rr([0.33, 1.53, 0.69, 0.99]),
  };
function e0(e, t) {
  if (e)
    return typeof e == "function" && Ws()
      ? Zm(e, t)
      : Zu(e)
      ? Rr(e)
      : Array.isArray(e)
      ? e.map((n) => e0(n, t) || gl.easeOut)
      : gl[e];
}
const Qe = { x: !1, y: !1 };
function t0() {
  return Qe.x || Qe.y;
}
function n0(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function r0(e, t) {
  const n = n0(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Id(e) {
  return (t) => {
    t.pointerType === "touch" || t0() || e(t);
  };
}
function _x(e, t, n = {}) {
  const [r, i, s] = r0(e, n),
    o = Id((a) => {
      const { target: l } = a,
        u = t(a);
      if (typeof u != "function" || !l) return;
      const c = Id((d) => {
        u(d), l.removeEventListener("pointerleave", c);
      });
      l.addEventListener("pointerleave", c, i);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, i);
    }),
    s
  );
}
const i0 = (e, t) => (t ? (e === t ? !0 : i0(e, t.parentElement)) : !1),
  Ju = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  Vx = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Fx(e) {
  return Vx.has(e.tagName) || e.tabIndex !== -1;
}
const Mr = new WeakSet();
function Bd(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function ta(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const Ix = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Bd(() => {
    if (Mr.has(n)) return;
    ta(n, "down");
    const i = Bd(() => {
        ta(n, "up");
      }),
      s = () => ta(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function zd(e) {
  return Ju(e) && !t0();
}
function Bx(e, t, n = {}) {
  const [r, i, s] = r0(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!zd(a) || Mr.has(l)) return;
      Mr.add(l);
      const u = t(a),
        c = (y, v) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            !(!zd(y) || !Mr.has(l)) &&
              (Mr.delete(l), typeof u == "function" && u(y, { success: v }));
        },
        d = (y) => {
          c(y, n.useGlobalTarget || i0(l, y.target));
        },
        f = (y) => {
          c(y, !1);
        };
      window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i);
    };
  return (
    r.forEach((a) => {
      !Fx(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        a.addEventListener("focus", (u) => Ix(u, i), i);
    }),
    s
  );
}
function zx(e) {
  return e === "x" || e === "y"
    ? Qe[e]
      ? null
      : ((Qe[e] = !0),
        () => {
          Qe[e] = !1;
        })
    : Qe.x || Qe.y
    ? null
    : ((Qe.x = Qe.y = !0),
      () => {
        Qe.x = Qe.y = !1;
      });
}
const s0 = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...cr,
]);
let ds;
function Ux() {
  ds = void 0;
}
const ht = {
  now: () => (
    ds === void 0 &&
      ht.set(
        ue.isProcessing || I1.useManualTiming ? ue.timestamp : performance.now()
      ),
    ds
  ),
  set: (e) => {
    (ds = e), queueMicrotask(Ux);
  },
};
function ec(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function tc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class nc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ec(this.subscriptions, t), () => tc(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function rc(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Ud = 30,
  Hx = (e) => !isNaN(parseFloat(e)),
  Ur = { current: void 0 };
class $x {
  constructor(t, n = {}) {
    (this.version = "11.18.1"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = ht.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
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
      (this.updatedAt = ht.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Hx(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new nc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            z.read(() => {
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
    return Ur.current && Ur.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = ht.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Ud
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ud);
    return rc(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function ut(e, t) {
  return new $x(e, t);
}
function Wx(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ut(n));
}
function Kx(e, t) {
  const n = xo(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = ox(s[o]);
    Wx(e, o, a);
  }
}
function Gx(e) {
  return !!(we(e) && e.add);
}
function yl(e, t) {
  const n = e.getValue("willChange");
  if (Gx(n)) return n.add(t);
}
function o0(e) {
  return e.props[Om];
}
const a0 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Xx = 1e-7,
  qx = 12;
function Qx(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = a0(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > Xx && ++a < qx);
  return o;
}
function Ti(e, t, n, r) {
  if (e === t && n === r) return Ee;
  const i = (s) => Qx(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : a0(i(s), t, r));
}
const l0 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  u0 = (e) => (t) => 1 - e(1 - t),
  c0 = Ti(0.33, 1.53, 0.69, 0.99),
  ic = u0(c0),
  d0 = l0(ic),
  f0 = (e) =>
    (e *= 2) < 1 ? 0.5 * ic(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  sc = (e) => 1 - Math.sin(Math.acos(e)),
  h0 = u0(sc),
  p0 = l0(sc),
  m0 = (e) => /^0[^.\s]+$/u.test(e);
function Yx(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || m0(e)
    : !0;
}
const Hr = (e) => Math.round(e * 1e5) / 1e5,
  oc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Zx(e) {
  return e == null;
}
const Jx =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ac = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Jx.test(n) && n.startsWith(e)) ||
      (t && !Zx(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  g0 = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(oc);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  ew = (e) => pt(0, 255, e),
  na = { ...dr, transform: (e) => Math.round(ew(e)) },
  dn = {
    test: ac("rgb", "red"),
    parse: g0("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      na.transform(e) +
      ", " +
      na.transform(t) +
      ", " +
      na.transform(n) +
      ", " +
      Hr(hi.transform(r)) +
      ")",
  };
function tw(e) {
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
const vl = { test: ac("#"), parse: tw, transform: dn.transform },
  Un = {
    test: ac("hsl", "hue"),
    parse: g0("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      ft.transform(Hr(t)) +
      ", " +
      ft.transform(Hr(n)) +
      ", " +
      Hr(hi.transform(r)) +
      ")",
  },
  ye = {
    test: (e) => dn.test(e) || vl.test(e) || Un.test(e),
    parse: (e) =>
      dn.test(e) ? dn.parse(e) : Un.test(e) ? Un.parse(e) : vl.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? dn.transform(e)
        : Un.transform(e),
  },
  nw =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function rw(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(oc)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(nw)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const y0 = "number",
  v0 = "color",
  iw = "var",
  sw = "var(",
  Hd = "${}",
  ow =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      ow,
      (l) => (
        ye.test(l)
          ? (r.color.push(s), i.push(v0), n.push(ye.parse(l)))
          : l.startsWith(sw)
          ? (r.var.push(s), i.push(iw), n.push(l))
          : (r.number.push(s), i.push(y0), n.push(parseFloat(l))),
        ++s,
        Hd
      )
    )
    .split(Hd);
  return { values: n, split: a, indexes: r, types: i };
}
function x0(e) {
  return pi(e).values;
}
function w0(e) {
  const { split: t, types: n } = pi(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === y0
          ? (s += Hr(i[o]))
          : a === v0
          ? (s += ye.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const aw = (e) => (typeof e == "number" ? 0 : e);
function lw(e) {
  const t = x0(e);
  return w0(e)(t.map(aw));
}
const Xt = {
    test: rw,
    parse: x0,
    createTransformer: w0,
    getAnimatableNone: lw,
  },
  uw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function cw(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(oc) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = uw.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const dw = /\b([a-z-]*)\(.*?\)/gu,
  xl = {
    ...Xt,
    getAnimatableNone: (e) => {
      const t = e.match(dw);
      return t ? t.map(cw).join(" ") : e;
    },
  },
  fw = {
    ...$u,
    color: ye,
    backgroundColor: ye,
    outlineColor: ye,
    fill: ye,
    stroke: ye,
    borderColor: ye,
    borderTopColor: ye,
    borderRightColor: ye,
    borderBottomColor: ye,
    borderLeftColor: ye,
    filter: xl,
    WebkitFilter: xl,
  },
  lc = (e) => fw[e];
function S0(e, t) {
  let n = lc(e);
  return (
    n !== xl && (n = Xt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const hw = new Set(["auto", "none", "0"]);
function pw(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !hw.has(s) && pi(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = S0(n, i);
}
const $d = (e) => e === dr || e === L,
  Wd = (e, t) => parseFloat(e.split(", ")[t]),
  Kd =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Wd(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Wd(s[1], e) : 0;
      }
    },
  mw = new Set(["x", "y", "z"]),
  gw = cr.filter((e) => !mw.has(e));
function yw(e) {
  const t = [];
  return (
    gw.forEach((n) => {
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
  x: Kd(4, 13),
  y: Kd(5, 14),
};
or.translateX = or.x;
or.translateY = or.y;
const mn = new Set();
let wl = !1,
  Sl = !1;
function k0() {
  if (Sl) {
    const e = Array.from(mn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = yw(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Sl = !1), (wl = !1), mn.forEach((e) => e.complete()), mn.clear();
}
function T0() {
  mn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Sl = !0);
  });
}
function vw() {
  T0(), k0();
}
class uc {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (mn.add(this), wl || ((wl = !0), z.read(T0), z.resolveKeyframes(k0)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      mn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), mn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const E0 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  xw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function ww(e) {
  const t = xw.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function P0(e, t, n = 1) {
  const [r, i] = ww(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return E0(o) ? parseFloat(o) : o;
  }
  return Hu(i) ? P0(i, t, n + 1) : i;
}
const C0 = (e) => (t) => t.test(e),
  Sw = { test: (e) => e === "auto", parse: (e) => e },
  N0 = [dr, L, ft, Rt, fx, dx, Sw],
  Gd = (e) => N0.find(C0(e));
class j0 extends uc {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Hu(u))) {
        const c = P0(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !s0.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = Gd(i),
      a = Gd(s);
    if (o !== a)
      if ($d(o) && $d(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) Yx(t[i]) && r.push(i);
    r.length && pw(t, r, n);
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
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    (i[o] = or[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
const Xd = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Xt.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function kw(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Tw(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = Xd(i, t),
    a = Xd(s, t);
  return !o || !a ? !1 : kw(e) || ((n === "spring" || Yu(n)) && r);
}
const Ew = (e) => e !== null;
function wo(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Ew),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const Pw = 40;
class A0 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = ht.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Pw
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && vw(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = ht.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !Tw(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        l == null || l(wo(t, this.options, n)),
          a == null || a(),
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
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const X = (e, t, n) => e + (t - e) * n;
function ra(e, t, n) {
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
function Cw({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = ra(l, a, e + 1 / 3)), (s = ra(l, a, e)), (o = ra(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ks(e, t) {
  return (n) => (n > 0 ? t : e);
}
const ia = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Nw = [vl, dn, Un],
  jw = (e) => Nw.find((t) => t.test(e));
function qd(e) {
  const t = jw(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Un && (n = Cw(n)), n;
}
const Qd = (e, t) => {
    const n = qd(e),
      r = qd(t);
    if (!n || !r) return Ks(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = ia(n.red, r.red, s)),
      (i.green = ia(n.green, r.green, s)),
      (i.blue = ia(n.blue, r.blue, s)),
      (i.alpha = X(n.alpha, r.alpha, s)),
      dn.transform(i)
    );
  },
  Aw = (e, t) => (n) => t(e(n)),
  Ei = (...e) => e.reduce(Aw),
  kl = new Set(["none", "hidden"]);
function Rw(e, t) {
  return kl.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Mw(e, t) {
  return (n) => X(e, t, n);
}
function cc(e) {
  return typeof e == "number"
    ? Mw
    : typeof e == "string"
    ? Hu(e)
      ? Ks
      : ye.test(e)
      ? Qd
      : Dw
    : Array.isArray(e)
    ? R0
    : typeof e == "object"
    ? ye.test(e)
      ? Qd
      : Lw
    : Ks;
}
function R0(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => cc(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function Lw(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = cc(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function bw(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[s] = l), i[o]++;
  }
  return r;
}
const Dw = (e, t) => {
  const n = Xt.createTransformer(t),
    r = pi(e),
    i = pi(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (kl.has(e) && !i.values.length) || (kl.has(t) && !r.values.length)
      ? Rw(e, t)
      : Ei(R0(bw(r, i), i.values), n)
    : Ks(e, t);
};
function M0(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? X(e, t, n)
    : cc(e)(e, t);
}
const Ow = 5;
function L0(e, t, n) {
  const r = Math.max(t - Ow, 0);
  return rc(n - e(r), t - r);
}
const Y = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  sa = 0.001;
function _w({
  duration: e = Y.duration,
  bounce: t = Y.bounce,
  velocity: n = Y.velocity,
  mass: r = Y.mass,
}) {
  let i,
    s,
    o = 1 - t;
  (o = pt(Y.minDamping, Y.maxDamping, o)),
    (e = pt(Y.minDuration, Y.maxDuration, kt(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            d = c * e,
            f = c - n,
            y = Tl(u, o),
            v = Math.exp(-d);
          return sa - (f / y) * v;
        }),
        (s = (u) => {
          const d = u * o * e,
            f = d * n + n,
            y = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            x = Tl(Math.pow(u, 2), o);
          return ((-i(u) + sa > 0 ? -1 : 1) * ((f - y) * v)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -sa + c * d;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = Fw(i, s, a);
  if (((e = St(e)), isNaN(l)))
    return { stiffness: Y.stiffness, damping: Y.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Vw = 12;
function Fw(e, t, n) {
  let r = n;
  for (let i = 1; i < Vw; i++) r = r - e(r) / t(r);
  return r;
}
function Tl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Iw = ["duration", "bounce"],
  Bw = ["stiffness", "damping", "mass"];
function Yd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function zw(e) {
  let t = {
    velocity: Y.velocity,
    stiffness: Y.stiffness,
    damping: Y.damping,
    mass: Y.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Yd(e, Bw) && Yd(e, Iw))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * pt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: Y.mass, stiffness: i, damping: s };
    } else {
      const n = _w(e);
      (t = { ...t, ...n, mass: Y.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function b0(e = Y.visualDuration, t = Y.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: y,
    } = zw({ ...n, velocity: -kt(n.velocity || 0) }),
    v = f || 0,
    x = u / (2 * Math.sqrt(l * c)),
    w = o - s,
    m = kt(Math.sqrt(l / c)),
    p = Math.abs(w) < 5;
  r || (r = p ? Y.restSpeed.granular : Y.restSpeed.default),
    i || (i = p ? Y.restDelta.granular : Y.restDelta.default);
  let g;
  if (x < 1) {
    const T = Tl(m, x);
    g = (P) => {
      const N = Math.exp(-x * m * P);
      return (
        o - N * (((v + x * m * w) / T) * Math.sin(T * P) + w * Math.cos(T * P))
      );
    };
  } else if (x === 1) g = (T) => o - Math.exp(-m * T) * (w + (v + m * w) * T);
  else {
    const T = m * Math.sqrt(x * x - 1);
    g = (P) => {
      const N = Math.exp(-x * m * P),
        E = Math.min(T * P, 300);
      return (
        o - (N * ((v + x * m * w) * Math.sinh(E) + T * w * Math.cosh(E))) / T
      );
    };
  }
  const S = {
    calculatedDuration: (y && d) || null,
    next: (T) => {
      const P = g(T);
      if (y) a.done = T >= d;
      else {
        let N = 0;
        x < 1 && (N = T === 0 ? St(v) : L0(g, T, P));
        const E = Math.abs(N) <= r,
          V = Math.abs(o - P) <= i;
        a.done = E && V;
      }
      return (a.value = a.done ? o : P), a;
    },
    toString: () => {
      const T = Math.min(Ym(S), ml),
        P = Zm((N) => S.next(T * N).value, T, 30);
      return T + "ms " + P;
    },
  };
  return S;
}
function Zd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    y = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    v = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
        ? a
        : l;
  let x = n * t;
  const w = d + x,
    m = o === void 0 ? w : o(w);
  m !== w && (x = m - d);
  const p = (E) => -x * Math.exp(-E / r),
    g = (E) => m + p(E),
    S = (E) => {
      const V = p(E),
        b = g(E);
      (f.done = Math.abs(V) <= u), (f.value = f.done ? m : b);
    };
  let T, P;
  const N = (E) => {
    y(f.value) &&
      ((T = E),
      (P = b0({
        keyframes: [f.value, v(f.value)],
        velocity: L0(g, E, f.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    N(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let V = !1;
        return (
          !P && T === void 0 && ((V = !0), S(E), N(E)),
          T !== void 0 && E >= T ? P.next(E - T) : (!V && S(E), f)
        );
      },
    }
  );
}
const Uw = Ti(0.42, 0, 1, 1),
  Hw = Ti(0, 0, 0.58, 1),
  D0 = Ti(0.42, 0, 0.58, 1),
  $w = (e) => Array.isArray(e) && typeof e[0] != "number",
  Jd = {
    linear: Ee,
    easeIn: Uw,
    easeInOut: D0,
    easeOut: Hw,
    circIn: sc,
    circInOut: p0,
    circOut: h0,
    backIn: ic,
    backInOut: d0,
    backOut: c0,
    anticipate: f0,
  },
  ef = (e) => {
    if (Zu(e)) {
      hl(e.length === 4);
      const [t, n, r, i] = e;
      return Ti(t, n, r, i);
    } else if (typeof e == "string") return hl(Jd[e] !== void 0), Jd[e];
    return e;
  };
function Ww(e, t, n) {
  const r = [],
    i = n || M0,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Ee : t;
      a = Ei(l, a);
    }
    r.push(a);
  }
  return r;
}
function dc(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((hl(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Ww(t, r, i),
    l = a.length,
    u = (c) => {
      if (o && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = kn(e[d], e[d + 1], c);
      return a[d](f);
    };
  return n ? (c) => u(pt(e[0], e[s - 1], c)) : u;
}
function Kw(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = kn(0, t, r);
    e.push(X(n, 1, i));
  }
}
function O0(e) {
  const t = [0];
  return Kw(t, e.length - 1), t;
}
function Gw(e, t) {
  return e.map((n) => n * t);
}
function Xw(e, t) {
  return e.map(() => t || D0).splice(0, e.length - 1);
}
function Gs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = $w(r) ? r.map(ef) : ef(r),
    s = { done: !1, value: t[0] },
    o = Gw(n && n.length === t.length ? n : O0(t), e),
    a = dc(o, t, { ease: Array.isArray(i) ? i : Xw(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const qw = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => z.update(t, !0),
      stop: () => rt(t),
      now: () => (ue.isProcessing ? ue.timestamp : ht.now()),
    };
  },
  Qw = { decay: Zd, inertia: Zd, tween: Gs, keyframes: Gs, spring: b0 },
  Yw = (e) => e / 100;
class fc extends A0 {
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
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || uc,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new o(s, a, n, r, i)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = Yu(n) ? n : Qw[n] || Gs;
    let l, u;
    a !== Gs &&
      typeof t[0] != "number" &&
      ((l = Ei(Yw, M0(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    s === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = Ym(c));
    const { calculatedDuration: d } = c,
      f = d + i,
      y = f * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: y,
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
      const { keyframes: E } = this.options;
      return { done: !0, value: E[E.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: f,
      repeat: y,
      repeatType: v,
      repeatDelay: x,
      onUpdate: w,
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
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let g = this.currentTime,
      S = s;
    if (y) {
      const E = Math.min(this.currentTime, c) / d;
      let V = Math.floor(E),
        b = E % 1;
      !b && E >= 1 && (b = 1),
        b === 1 && V--,
        (V = Math.min(V, y + 1)),
        !!(V % 2) &&
          (v === "reverse"
            ? ((b = 1 - b), x && (b -= x / d))
            : v === "mirror" && (S = o)),
        (g = pt(0, 1, b) * d);
    }
    const T = p ? { done: !1, value: l[0] } : S.next(g);
    a && (T.value = a(T.value));
    let { done: P } = T;
    !p &&
      u !== null &&
      (P = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const N =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && P));
    return (
      N && i !== void 0 && (T.value = wo(l, this.options, i)),
      w && w(T.value),
      N && this.finish(),
      T
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? kt(t.calculatedDuration) : 0;
  }
  get time() {
    return kt(this.currentTime);
  }
  set time(t) {
    (t = St(t)),
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
    (this.playbackSpeed = t), n && (this.time = kt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = qw, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
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
const Zw = new Set(["opacity", "clipPath", "filter", "transform"]);
function Jw(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = e0(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const eS = _u(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Xs = 10,
  tS = 2e4;
function nS(e) {
  return Yu(e.type) || e.type === "spring" || !Jm(e.ease);
}
function rS(e, t) {
  const n = new fc({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < tS; ) (r = n.sample(s)), i.push(r.value), (s += Xs);
  return { times: void 0, keyframes: i, duration: s - Xs, ease: "linear" };
}
const _0 = { anticipate: f0, backInOut: d0, circInOut: p0 };
function iS(e) {
  return e in _0;
}
class tf extends A0 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    (this.resolver = new j0(
      s,
      (o, a) => this.onKeyframesResolved(o, a),
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
      times: s,
      ease: o,
      type: a,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof o == "string" && Ws() && iS(o) && (o = _0[o]), nS(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: y,
          motionValue: v,
          element: x,
          ...w
        } = this.options,
        m = rS(t, w);
      (t = m.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = m.duration),
        (s = m.times),
        (o = m.ease),
        (a = "keyframes");
    }
    const d = Jw(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: s,
      ease: o,
    });
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Fd(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options;
            l.set(wo(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: d, duration: i, times: s, type: a, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return kt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return kt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = St(t);
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
      if (!n) return Ee;
      const { animation: r } = n;
      Fd(r, t);
    }
    return Ee;
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
      type: s,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          element: f,
          ...y
        } = this.options,
        v = new fc({
          ...y,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        x = St(this.time);
      u.setWithVelocity(v.sample(x - Xs).value, v.sample(x).value, Xs);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
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
      repeatType: s,
      damping: o,
      type: a,
    } = t;
    return (
      eS() &&
      r &&
      Zw.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const sS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  oS = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  aS = { type: "keyframes", duration: 0.8 },
  lS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  uS = (e, { keyframes: t }) =>
    t.length > 2
      ? aS
      : Cn.has(e)
      ? e.startsWith("scale")
        ? oS(t[1])
        : sS
      : lS;
function cS({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const hc =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const a = Qu(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - St(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    cS(a) || (c = { ...c, ...uS(e, c) }),
      c.duration && (c.duration = St(c.duration)),
      c.repeatDelay && (c.repeatDelay = St(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (d = !0)),
      d && !s && t.get() !== void 0)
    ) {
      const f = wo(c.keyframes, a);
      if (f !== void 0)
        return (
          z.update(() => {
            c.onUpdate(f), c.onComplete();
          }),
          new bx([])
        );
    }
    return !s && tf.supports(c) ? new tf(c) : new fc(c);
  };
function dS({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function V0(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const d in l) {
    const f = e.getValue(
        d,
        (s = e.latestValues[d]) !== null && s !== void 0 ? s : null
      ),
      y = l[d];
    if (y === void 0 || (c && dS(c, d))) continue;
    const v = { delay: n, ...Qu(o || {}, d) };
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const m = o0(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, d, z);
        p !== null && ((v.startTime = p), (x = !0));
      }
    }
    yl(e, d),
      f.start(
        hc(d, f, y, e.shouldReduceMotion && s0.has(d) ? { type: !1 } : v, e, x)
      );
    const w = f.animation;
    w && u.push(w);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        z.update(() => {
          a && Kx(e, a);
        });
      }),
    u
  );
}
function El(e, t, n = {}) {
  var r;
  const i = xo(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(V0(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = s;
            return fS(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [o, a] : [a, o];
    return u().then(() => c());
  } else return Promise.all([o(), a(n.delay)]);
}
function fS(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(hS)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          o.push(
            El(u, t, { ...s, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function hS(e, t) {
  return e.sortNodePosition(t);
}
function pS(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => El(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = El(e, t, n);
  else {
    const i = typeof t == "function" ? xo(e, t, n.custom) : t;
    r = Promise.all(V0(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const mS = Fu.length;
function F0(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? F0(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < mS; n++) {
    const r = Fu[n],
      i = e.props[r];
    (fi(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const gS = [...Vu].reverse(),
  yS = Vu.length;
function vS(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => pS(e, n, r)));
}
function xS(e) {
  let t = vS(e),
    n = nf(),
    r = !0;
  const i = (l) => (u, c) => {
    var d;
    const f = xo(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: y, transitionEnd: v, ...x } = f;
      u = { ...u, ...x, ...v };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e,
      c = F0(e.parent) || {},
      d = [],
      f = new Set();
    let y = {},
      v = 1 / 0;
    for (let w = 0; w < yS; w++) {
      const m = gS[w],
        p = n[m],
        g = u[m] !== void 0 ? u[m] : c[m],
        S = fi(g),
        T = m === l ? p.isActive : null;
      T === !1 && (v = w);
      let P = g === c[m] && g !== u[m] && S;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && T === null) ||
          (!g && !p.prevProp) ||
          yo(g) ||
          typeof g == "boolean")
      )
        continue;
      const N = wS(p.prevProp, g);
      let E = N || (m === l && p.isActive && !P && S) || (w > v && S),
        V = !1;
      const b = Array.isArray(g) ? g : [g];
      let ae = b.reduce(i(m), {});
      T === !1 && (ae = {});
      const { prevResolvedValues: jt = {} } = p,
        Jt = { ...jt, ...ae },
        pr = (ie) => {
          (E = !0),
            f.has(ie) && ((V = !0), f.delete(ie)),
            (p.needsAnimating[ie] = !0);
          const j = e.getValue(ie);
          j && (j.liveStyle = !1);
        };
      for (const ie in Jt) {
        const j = ae[ie],
          D = jt[ie];
        if (y.hasOwnProperty(ie)) continue;
        let O = !1;
        pl(j) && pl(D) ? (O = !qm(j, D)) : (O = j !== D),
          O
            ? j != null
              ? pr(ie)
              : f.add(ie)
            : j !== void 0 && f.has(ie)
            ? pr(ie)
            : (p.protectedKeys[ie] = !0);
      }
      (p.prevProp = g),
        (p.prevResolvedValues = ae),
        p.isActive && (y = { ...y, ...ae }),
        r && e.blockInitialAnimation && (E = !1),
        E &&
          (!(P && N) || V) &&
          d.push(...b.map((ie) => ({ animation: ie, options: { type: m } })));
    }
    if (f.size) {
      const w = {};
      f.forEach((m) => {
        const p = e.getBaseTarget(m),
          g = e.getValue(m);
        g && (g.liveStyle = !0), (w[m] = p ?? null);
      }),
        d.push({ animation: w });
    }
    let x = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var y;
        return (y = f.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = o(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = nf()), (r = !0);
    },
  };
}
function wS(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !qm(t, e) : !1;
}
function nn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function nf() {
  return {
    animate: nn(!0),
    whileInView: nn(),
    whileHover: nn(),
    whileTap: nn(),
    whileDrag: nn(),
    whileFocus: nn(),
    exit: nn(),
  };
}
class Zt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class SS extends Zt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = xS(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    yo(t) && (this.unmountControls = t.subscribe(this.node));
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
let kS = 0;
class TS extends Zt {
  constructor() {
    super(...arguments), (this.id = kS++);
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
const ES = { animation: { Feature: SS }, exit: { Feature: TS } };
function mi(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Pi(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const PS = (e) => (t) => Ju(t) && e(t, Pi(t));
function $r(e, t, n, r) {
  return mi(e, t, PS(n), r);
}
const rf = (e, t) => Math.abs(e - t);
function CS(e, t) {
  const n = rf(e.x, t.x),
    r = rf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class I0 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = aa(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          y = CS(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !y) return;
        const { point: v } = d,
          { timestamp: x } = ue;
        this.history.push({ ...v, timestamp: x });
        const { onStart: w, onMove: m } = this.handlers;
        f ||
          (w && w(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = oa(f, this.transformPagePoint)),
          z.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: y, onSessionEnd: v, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = aa(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : oa(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && y && y(d, w), v && v(d, w);
      }),
      !Ju(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = Pi(t),
      a = oa(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = ue;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, aa(a, this.history)),
      (this.removeListeners = Ei(
        $r(this.contextWindow, "pointermove", this.handlePointerMove),
        $r(this.contextWindow, "pointerup", this.handlePointerUp),
        $r(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), rt(this.updatePoint);
  }
}
function oa(e, t) {
  return t ? { point: t(e.point) } : e;
}
function sf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function aa({ point: e }, t) {
  return {
    point: e,
    delta: sf(e, B0(t)),
    offset: sf(e, NS(t)),
    velocity: jS(t, 0.1),
  };
}
function NS(e) {
  return e[0];
}
function B0(e) {
  return e[e.length - 1];
}
function jS(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = B0(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > St(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = kt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const z0 = 1e-4,
  AS = 1 - z0,
  RS = 1 + z0,
  U0 = 0.01,
  MS = 0 - U0,
  LS = 0 + U0;
function Fe(e) {
  return e.max - e.min;
}
function bS(e, t, n) {
  return Math.abs(e - t) <= n;
}
function of(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = X(t.min, t.max, e.origin)),
    (e.scale = Fe(n) / Fe(t)),
    (e.translate = X(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= AS && e.scale <= RS) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= MS && e.translate <= LS) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Wr(e, t, n, r) {
  of(e.x, t.x, n.x, r ? r.originX : void 0),
    of(e.y, t.y, n.y, r ? r.originY : void 0);
}
function af(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Fe(t));
}
function DS(e, t, n) {
  af(e.x, t.x, n.x), af(e.y, t.y, n.y);
}
function lf(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Fe(t));
}
function Kr(e, t, n) {
  lf(e.x, t.x, n.x), lf(e.y, t.y, n.y);
}
function OS(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? X(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? X(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function uf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function _S(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: uf(e.x, n, i), y: uf(e.y, t, r) };
}
function cf(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function VS(e, t) {
  return { x: cf(e.x, t.x), y: cf(e.y, t.y) };
}
function FS(e, t) {
  let n = 0.5;
  const r = Fe(e),
    i = Fe(t);
  return (
    i > r
      ? (n = kn(t.min, t.max - r, e.min))
      : r > i && (n = kn(e.min, e.max - i, t.min)),
    pt(0, 1, n)
  );
}
function IS(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Pl = 0.35;
function BS(e = Pl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Pl),
    { x: df(e, "left", "right"), y: df(e, "top", "bottom") }
  );
}
function df(e, t, n) {
  return { min: ff(e, t), max: ff(e, n) };
}
function ff(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const hf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Hn = () => ({ x: hf(), y: hf() }),
  pf = () => ({ min: 0, max: 0 }),
  ee = () => ({ x: pf(), y: pf() });
function Ue(e) {
  return [e("x"), e("y")];
}
function H0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function zS({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function US(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function la(e) {
  return e === void 0 || e === 1;
}
function Cl({ scale: e, scaleX: t, scaleY: n }) {
  return !la(e) || !la(t) || !la(n);
}
function on(e) {
  return (
    Cl(e) ||
    $0(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function $0(e) {
  return mf(e.x) || mf(e.y);
}
function mf(e) {
  return e && e !== "0%";
}
function qs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function gf(e, t, n, r, i) {
  return i !== void 0 && (e = qs(e, i, r)), qs(e, n, r) + t;
}
function Nl(e, t = 0, n = 1, r, i) {
  (e.min = gf(e.min, t, n, r, i)), (e.max = gf(e.max, t, n, r, i));
}
function W0(e, { x: t, y: n }) {
  Nl(e.x, t.translate, t.scale, t.originPoint),
    Nl(e.y, n.translate, n.scale, n.originPoint);
}
const yf = 0.999999999999,
  vf = 1.0000000000001;
function HS(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Wn(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), W0(e, o)),
      r && on(s.latestValues) && Wn(e, s.latestValues));
  }
  t.x < vf && t.x > yf && (t.x = 1), t.y < vf && t.y > yf && (t.y = 1);
}
function $n(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function xf(e, t, n, r, i = 0.5) {
  const s = X(e.min, e.max, i);
  Nl(e, t, n, s, r);
}
function Wn(e, t) {
  xf(e.x, t.x, t.scaleX, t.scale, t.originX),
    xf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function K0(e, t) {
  return H0(US(e.getBoundingClientRect(), t));
}
function $S(e, t, n) {
  const r = K0(e, n),
    { scroll: i } = t;
  return i && ($n(r.x, i.offset.x), $n(r.y, i.offset.y)), r;
}
const G0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  WS = new WeakMap();
class KS {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ee()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Pi(c).point);
      },
      s = (c, d) => {
        const { drag: f, dragPropagation: y, onDragStart: v } = this.getProps();
        if (
          f &&
          !y &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = zx(f)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ue((w) => {
            let m = this.getAxisMotionValue(w).get() || 0;
            if (ft.test(m)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const g = p.layout.layoutBox[w];
                g && (m = Fe(g) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[w] = m;
          }),
          v && z.postRender(() => v(c, d)),
          yl(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      o = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: y,
          onDirectionLock: v,
          onDrag: x,
        } = this.getProps();
        if (!f && !this.openDragLock) return;
        const { offset: w } = d;
        if (y && this.currentDirection === null) {
          (this.currentDirection = GS(w)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, w),
          this.updateAxis("y", d.point, w),
          this.visualElement.render(),
          x && x(c, d);
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        Ue((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new I0(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: G0(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && z.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Qi(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = OS(o, this.constraints[t], this.elastic[t])),
      s.set(o);
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
      s = this.constraints;
    n && zn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = _S(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = BS(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ue((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = IS(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !zn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = $S(r, i.root, this.visualElement.getTransformPagePoint());
    let o = VS(i.layout.layoutBox, s);
    if (n) {
      const a = n(zS(o));
      (this.hasMutatedConstraints = !!a), a && (o = H0(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Ue((c) => {
        if (!Qi(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        o && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      yl(this.visualElement, t), r.start(hc(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ue((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ue((t) => {
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
    Ue((n) => {
      const { drag: r } = this.getProps();
      if (!Qi(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - X(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!zn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ue((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = FS({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ue((o) => {
        if (!Qi(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(X(l, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    WS.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = $r(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        zn(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      z.read(r);
    const o = mi(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Ue((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Pl,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Qi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function GS(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class XS extends Zt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ee),
      (this.removeListeners = Ee),
      (this.controls = new KS(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ee);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const wf = (e) => (t, n) => {
  e && z.postRender(() => e(t, n));
};
class qS extends Zt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ee);
  }
  onPointerDown(t) {
    this.session = new I0(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: G0(this.node),
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
      onSessionStart: wf(t),
      onStart: wf(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && z.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = $r(this.node.current, "pointerdown", (t) =>
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
const fs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Sf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Tr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (L.test(e)) e = parseFloat(e);
        else return e;
      const n = Sf(e, t.target.x),
        r = Sf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  QS = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Xt.parse(e);
      if (i.length > 5) return r;
      const s = Xt.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const u = X(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  };
class YS extends M.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    kx(ZS),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (fs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              z.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Bu.postRender(() => {
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
function X0(e) {
  const [t, n] = V1(),
    r = M.useContext(Rm);
  return h.jsx(YS, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: M.useContext(_m),
    isPresent: t,
    safeToRemove: n,
  });
}
const ZS = {
  borderRadius: {
    ...Tr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Tr,
  borderTopRightRadius: Tr,
  borderBottomLeftRadius: Tr,
  borderBottomRightRadius: Tr,
  boxShadow: QS,
};
function JS(e, t, n) {
  const r = we(e) ? e : ut(e);
  return r.start(hc("", r, t, n)), r.animation;
}
function e2(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const t2 = (e, t) => e.depth - t.depth;
class n2 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    ec(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    tc(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(t2),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function r2(e, t) {
  const n = ht.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (rt(r), e(s - t));
    };
  return z.read(r, !0), () => rt(r);
}
const q0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  i2 = q0.length,
  kf = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Tf = (e) => typeof e == "number" || L.test(e);
function s2(e, t, n, r, i, s) {
  i
    ? ((e.opacity = X(0, n.opacity !== void 0 ? n.opacity : 1, o2(r))),
      (e.opacityExit = X(t.opacity !== void 0 ? t.opacity : 1, 0, a2(r))))
    : s &&
      (e.opacity = X(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < i2; o++) {
    const a = `border${q0[o]}Radius`;
    let l = Ef(t, a),
      u = Ef(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Tf(l) === Tf(u)
        ? ((e[a] = Math.max(X(kf(l), kf(u), r), 0)),
          (ft.test(u) || ft.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = X(t.rotate || 0, n.rotate || 0, r));
}
function Ef(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const o2 = Q0(0, 0.5, h0),
  a2 = Q0(0.5, 0.95, Ee);
function Q0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(kn(e, t, r)));
}
function Pf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ze(e, t) {
  Pf(e.x, t.x), Pf(e.y, t.y);
}
function Cf(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Nf(e, t, n, r, i) {
  return (
    (e -= t), (e = qs(e, 1 / n, r)), i !== void 0 && (e = qs(e, 1 / i, r)), e
  );
}
function l2(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (ft.test(t) &&
      ((t = parseFloat(t)), (t = X(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = X(s.min, s.max, r);
  e === s && (a -= t),
    (e.min = Nf(e.min, t, n, a, i)),
    (e.max = Nf(e.max, t, n, a, i));
}
function jf(e, t, [n, r, i], s, o) {
  l2(e, t[n], t[r], t[i], t.scale, s, o);
}
const u2 = ["x", "scaleX", "originX"],
  c2 = ["y", "scaleY", "originY"];
function Af(e, t, n, r) {
  jf(e.x, t, u2, n ? n.x : void 0, r ? r.x : void 0),
    jf(e.y, t, c2, n ? n.y : void 0, r ? r.y : void 0);
}
function Rf(e) {
  return e.translate === 0 && e.scale === 1;
}
function Y0(e) {
  return Rf(e.x) && Rf(e.y);
}
function Mf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function d2(e, t) {
  return Mf(e.x, t.x) && Mf(e.y, t.y);
}
function Lf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Z0(e, t) {
  return Lf(e.x, t.x) && Lf(e.y, t.y);
}
function bf(e) {
  return Fe(e.x) / Fe(e.y);
}
function Df(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class f2 {
  constructor() {
    this.members = [];
  }
  add(t) {
    ec(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (tc(this.members, t),
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
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
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
function h2(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: y,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const an = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Lr = typeof window < "u" && window.MotionDebug !== void 0,
  ua = ["", "X", "Y", "Z"],
  p2 = { visibility: "hidden" },
  Of = 1e3;
let m2 = 0;
function ca(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function J0(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = o0(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", z, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && J0(r);
}
function eg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = m2++),
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
            Lr &&
              (an.totalNodes =
                an.resolvedTargetDeltas =
                an.recalculatedProjection =
                  0),
            this.nodes.forEach(v2),
            this.nodes.forEach(T2),
            this.nodes.forEach(E2),
            this.nodes.forEach(x2),
            Lr && window.MotionDebug.record(an);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new n2());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new nc()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = e2(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = r2(f, 250)),
            fs.hasAnimatedSinceResize &&
              ((fs.hasAnimatedSinceResize = !1), this.nodes.forEach(Vf));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: y,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || A2,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: m } =
                  c.getProps(),
                p = !this.targetLayout || !Z0(this.targetLayout, v) || y,
                g = !f && y;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const S = { ...Qu(x, "layout"), onPlay: w, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                f || Vf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        rt(this.updateProjection);
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
        this.nodes && this.nodes.forEach(P2),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          J0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(_f);
        return;
      }
      this.isUpdating || this.nodes.forEach(S2),
        (this.isUpdating = !1),
        this.nodes.forEach(k2),
        this.nodes.forEach(g2),
        this.nodes.forEach(y2),
        this.clearAllSnapshots();
      const a = ht.now();
      (ue.delta = pt(0, 1e3 / 60, a - ue.timestamp)),
        (ue.timestamp = a),
        (ue.isProcessing = !0),
        ea.update.process(ue),
        ea.preRender.process(ue),
        ea.render.process(ue),
        (ue.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Bu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(w2), this.sharedNodes.forEach(C2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        z.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      z.postRender(() => {
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
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ee()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Y0(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (a || on(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        R2(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return ee();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(M2)
        )
      ) {
        const { scroll: c } = this.root;
        c && ($n(l.x, c.offset.x), $n(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = ee();
      if (
        (ze(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && ze(l, o), $n(l.x, d.offset.x), $n(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = ee();
      ze(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Wn(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          on(c.latestValues) && Wn(l, c.latestValues);
      }
      return on(this.latestValues) && Wn(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = ee();
      ze(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !on(u.latestValues)) continue;
        Cl(u.latestValues) && u.updateSnapshot();
        const c = ee(),
          d = u.measurePageBox();
        ze(c, d),
          Af(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return on(this.latestValues) && Af(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
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
        this.relativeParent.resolvedRelativeTargetAt !== ue.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = ue.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ee()),
              (this.relativeTargetOrigin = ee()),
              Kr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox
              ),
              ze(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ee()), (this.targetWithTransforms = ee())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                DS(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : ze(this.target, this.layout.layoutBox),
                W0(this.target, this.targetDelta))
              : ze(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ee()),
                (this.relativeTargetOrigin = ee()),
                Kr(this.relativeTargetOrigin, this.target, y.target),
                ze(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Lr && an.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Cl(this.parent.latestValues) ||
          $0(this.parent.latestValues)
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
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ue.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      ze(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        y = this.treeScale.y;
      HS(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ee()));
      const { target: v } = a;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Cf(this.prevProjectionDelta.x, this.projectionDelta.x),
          Cf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Wr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== y ||
          !Df(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Df(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        Lr && an.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Hn()),
        (this.projectionDelta = Hn()),
        (this.projectionDeltaWithTransform = Hn());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Hn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = ee(),
        y = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = y !== v,
        w = this.getStack(),
        m = !w || w.members.length <= 1,
        p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(j2));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (S) => {
        const T = S / 1e3;
        Ff(d.x, o.x, T),
          Ff(d.y, o.y, T),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Kr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            N2(this.relativeTarget, this.relativeTargetOrigin, f, T),
            g && d2(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = ee()),
            ze(g, this.relativeTarget)),
          x &&
            ((this.animationValues = c), s2(c, u, this.latestValues, T, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (rt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = z.update(() => {
          (fs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = JS(0, Of, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
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
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Of),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          tg(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ee();
          const d = Fe(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const f = Fe(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + f);
        }
        ze(a, l),
          Wn(a, c),
          Wr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new f2()),
        this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && ca("z", o, u, this.animationValues);
      for (let c = 0; c < ua.length; c++)
        ca(`rotate${ua[c]}`, o, u, this.animationValues),
          ca(`skew${ua[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return p2;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = cs(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = cs(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !on(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = h2(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: y, y: v } = this.projectionDelta;
      (u.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const x in $s) {
        if (f[x] === void 0) continue;
        const { correct: w, applyTo: m } = $s[x],
          p = u.transform === "none" ? f[x] : w(f[x], d);
        if (m) {
          const g = m.length;
          for (let S = 0; S < g; S++) u[m[S]] = p;
        } else u[x] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? cs(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(_f),
        this.root.sharedNodes.clear();
    }
  };
}
function g2(e) {
  e.updateLayout();
}
function y2(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? Ue((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            y = Fe(f);
          (f.min = r[d].min), (f.max = f.min + y);
        })
      : tg(s, n.layoutBox, r) &&
        Ue((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            y = Fe(r[d]);
          (f.max = f.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + y));
        });
    const a = Hn();
    Wr(a, r, n.layoutBox);
    const l = Hn();
    o ? Wr(l, e.applyTransform(i, !0), n.measuredBox) : Wr(l, r, n.layoutBox);
    const u = !Y0(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: y } = d;
        if (f && y) {
          const v = ee();
          Kr(v, n.layoutBox, f.layoutBox);
          const x = ee();
          Kr(x, r, y.layoutBox),
            Z0(v, x) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function v2(e) {
  Lr && an.totalNodes++,
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
function x2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function w2(e) {
  e.clearSnapshot();
}
function _f(e) {
  e.clearMeasurements();
}
function S2(e) {
  e.isLayoutDirty = !1;
}
function k2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Vf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function T2(e) {
  e.resolveTargetDelta();
}
function E2(e) {
  e.calcProjection();
}
function P2(e) {
  e.resetSkewAndRotation();
}
function C2(e) {
  e.removeLeadSnapshot();
}
function Ff(e, t, n) {
  (e.translate = X(t.translate, 0, n)),
    (e.scale = X(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function If(e, t, n, r) {
  (e.min = X(t.min, n.min, r)), (e.max = X(t.max, n.max, r));
}
function N2(e, t, n, r) {
  If(e.x, t.x, n.x, r), If(e.y, t.y, n.y, r);
}
function j2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const A2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Bf = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  zf = Bf("applewebkit/") && !Bf("chrome/") ? Math.round : Ee;
function Uf(e) {
  (e.min = zf(e.min)), (e.max = zf(e.max));
}
function R2(e) {
  Uf(e.x), Uf(e.y);
}
function tg(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !bS(bf(t), bf(n), 0.2))
  );
}
function M2(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const L2 = eg({
    attachResizeListener: (e, t) => mi(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  da = { current: void 0 },
  ng = eg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!da.current) {
        const e = new L2({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (da.current = e);
      }
      return da.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  b2 = {
    pan: { Feature: qS },
    drag: { Feature: XS, ProjectionNode: ng, MeasureLayout: X0 },
  };
function Hf(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && z.postRender(() => s(t, Pi(t)));
}
class D2 extends Zt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = _x(
        t,
        (n) => (Hf(this.node, n, "Start"), (r) => Hf(this.node, r, "End"))
      ));
  }
  unmount() {}
}
class O2 extends Zt {
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
    this.unmount = Ei(
      mi(this.node.current, "focus", () => this.onFocus()),
      mi(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function $f(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && z.postRender(() => s(t, Pi(t)));
}
class _2 extends Zt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Bx(
        t,
        (n) => (
          $f(this.node, n, "Start"),
          (r, { success: i }) => $f(this.node, r, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const jl = new WeakMap(),
  fa = new WeakMap(),
  V2 = (e) => {
    const t = jl.get(e.target);
    t && t(e);
  },
  F2 = (e) => {
    e.forEach(V2);
  };
function I2({ root: e, ...t }) {
  const n = e || document;
  fa.has(n) || fa.set(n, {});
  const r = fa.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(F2, { root: e, ...t })), r[i];
}
function B2(e, t, n) {
  const r = I2(t);
  return (
    jl.set(e, n),
    r.observe(e),
    () => {
      jl.delete(e), r.unobserve(e);
    }
  );
}
const z2 = { some: 0, all: 1 };
class U2 extends Zt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : z2[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return B2(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(H2(t, n)) && this.startObserver();
  }
  unmount() {}
}
function H2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const $2 = {
    inView: { Feature: U2 },
    tap: { Feature: _2 },
    focus: { Feature: O2 },
    hover: { Feature: D2 },
  },
  W2 = { layout: { ProjectionNode: ng, MeasureLayout: X0 } },
  Al = { current: null },
  rg = { current: !1 };
function K2() {
  if (((rg.current = !0), !!Du))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Al.current = e.matches);
      e.addListener(t), t();
    } else Al.current = !1;
}
const G2 = [...N0, ye, Xt],
  X2 = (e) => G2.find(C0(e)),
  Wf = new WeakMap();
function q2(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (we(i)) e.addValue(r, i);
    else if (we(s)) e.addValue(r, ut(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, ut(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Kf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class Q2 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = uc),
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
        const y = ht.now();
        this.renderScheduledAt < y &&
          ((this.renderScheduledAt = y), z.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u, onUpdate: c } = o;
    (this.onUpdate = c),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = vo(n)),
      (this.isVariantNode = Dm(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const y in f) {
      const v = f[y];
      l[y] !== void 0 && we(v) && v.set(l[y], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Wf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      rg.current || K2(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Al.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Wf.delete(this.current),
      this.projection && this.projection.unmount(),
      rt(this.notifyUpdate),
      rt(this.render),
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
    const r = Cn.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && z.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop();
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
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ee();
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
    for (let r = 0; r < Kf.length; r++) {
      const i = Kf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = q2(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
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
        ((r = ut(n === null ? void 0 : n, { owner: this })),
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
        (typeof i == "string" && (E0(i) || m0(i))
          ? (i = parseFloat(i))
          : !X2(i) && Xt.test(n) && (i = S0(t, n)),
        this.setBaseTarget(t, we(i) ? i.get() : i)),
      we(i) ? i.get() : i
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
      const o = Uu(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !we(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new nc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class ig extends Q2 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = j0);
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
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    we(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Y2(e) {
  return window.getComputedStyle(e);
}
class Z2 extends ig {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Hm);
  }
  readValueFromInstance(t, n) {
    if (Cn.has(n)) {
      const r = lc(n);
      return (r && r.default) || 0;
    } else {
      const r = Y2(t),
        i = (Bm(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return K0(t, n);
  }
  build(t, n, r) {
    Wu(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return qu(t, n, r);
  }
}
class J2 extends ig {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = ee);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Cn.has(n)) {
      const r = lc(n);
      return (r && r.default) || 0;
    }
    return (n = $m.has(n) ? n : Iu(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Gm(t, n, r);
  }
  build(t, n, r) {
    Ku(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Wm(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Xu(t.tagName)), super.mount(t);
  }
}
const ek = (e, t) =>
    zu(e) ? new J2(t) : new Z2(t, { allowProjection: e !== M.Fragment }),
  tk = Mx({ ...ES, ...$2, ...b2, ...W2 }, ek),
  A = K1(tk);
function sg(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t,
      o = (i === null ? 0 : i.value) / 100;
    n !== o && e(o), (n = o);
  };
  return z.update(r, !0), () => rt(r);
}
const hs = new WeakMap();
let Mt;
function nk(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function rk({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = hs.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return nk(e, n);
        },
      });
    });
}
function ik(e) {
  e.forEach(rk);
}
function sk() {
  typeof ResizeObserver > "u" || (Mt = new ResizeObserver(ik));
}
function ok(e, t) {
  Mt || sk();
  const n = n0(e);
  return (
    n.forEach((r) => {
      let i = hs.get(r);
      i || ((i = new Set()), hs.set(r, i)),
        i.add(t),
        Mt == null || Mt.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const i = hs.get(r);
        i == null || i.delete(t),
          (i != null && i.size) || Mt == null || Mt.unobserve(r);
      });
    }
  );
}
const ps = new Set();
let Gr;
function ak() {
  (Gr = () => {
    const e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    ps.forEach((n) => n(t));
  }),
    window.addEventListener("resize", Gr);
}
function lk(e) {
  return (
    ps.add(e),
    Gr || ak(),
    () => {
      ps.delete(e), !ps.size && Gr && (Gr = void 0);
    }
  );
}
function uk(e, t) {
  return typeof e == "function" ? lk(e) : ok(e, t);
}
const ck = 50,
  Gf = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  dk = () => ({ time: 0, x: Gf(), y: Gf() }),
  fk = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Xf(e, t, n, r) {
  const i = n[t],
    { length: s, position: o } = fk[t],
    a = i.current,
    l = n.time;
  (i.current = e[`scroll${o}`]),
    (i.scrollLength = e[`scroll${s}`] - e[`client${s}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = kn(0, i.scrollLength, i.current));
  const u = r - l;
  i.velocity = u > ck ? 0 : rc(i.current - a, u);
}
function hk(e, t, n) {
  Xf(e, "x", t, n), Xf(e, "y", t, n), (t.time = n);
}
function pk(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const i = r.getBoundingClientRect();
      r = r.parentElement;
      const s = r.getBoundingClientRect();
      (n.x += i.left - s.left), (n.y += i.top - s.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: i, y: s } = r.getBBox();
      (n.x += i), (n.y += s);
      let o = null,
        a = r.parentNode;
      for (; !o; ) a.tagName === "svg" && (o = a), (a = r.parentNode);
      r = o;
    } else break;
  return n;
}
const Rl = { start: 0, center: 0.5, end: 1 };
function qf(e, t, n = 0) {
  let r = 0;
  if ((e in Rl && (e = Rl[e]), typeof e == "string")) {
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
const mk = [0, 0];
function gk(e, t, n, r) {
  let i = Array.isArray(e) ? e : mk,
    s = 0,
    o = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, Rl[e] ? e : "0"])),
    (s = qf(i[0], n, r)),
    (o = qf(i[1], t)),
    s - o
  );
}
const yk = {
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
  vk = { x: 0, y: 0 };
function xk(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function wk(e, t, n) {
  const { offset: r = yk.All } = n,
    { target: i = e, axis: s = "y" } = n,
    o = s === "y" ? "height" : "width",
    a = i !== e ? pk(i, e) : vk,
    l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : xk(i),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[s].offset.length = 0;
  let c = !t[s].interpolate;
  const d = r.length;
  for (let f = 0; f < d; f++) {
    const y = gk(r[f], u[o], l[o], a[s]);
    !c && y !== t[s].interpolatorOffsets[f] && (c = !0), (t[s].offset[f] = y);
  }
  c &&
    ((t[s].interpolate = dc(t[s].offset, O0(r), { clamp: !1 })),
    (t[s].interpolatorOffsets = [...t[s].offset])),
    (t[s].progress = pt(0, 1, t[s].interpolate(t[s].current)));
}
function Sk(e, t = e, n) {
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
function kk(e, t, n, r = {}) {
  return {
    measure: () => Sk(e, r.target, n),
    update: (i) => {
      hk(e, n, i), (r.offset || r.target) && wk(e, n, r);
    },
    notify: () => t(n),
  };
}
const Er = new WeakMap(),
  Qf = new WeakMap(),
  ha = new WeakMap(),
  Yf = (e) => (e === document.documentElement ? window : e);
function pc(e, { container: t = document.documentElement, ...n } = {}) {
  let r = ha.get(t);
  r || ((r = new Set()), ha.set(t, r));
  const i = dk(),
    s = kk(t, e, i, n);
  if ((r.add(s), !Er.has(t))) {
    const a = () => {
        for (const f of r) f.measure();
      },
      l = () => {
        for (const f of r) f.update(ue.timestamp);
      },
      u = () => {
        for (const f of r) f.notify();
      },
      c = () => {
        z.read(a, !1, !0), z.read(l, !1, !0), z.update(u, !1, !0);
      };
    Er.set(t, c);
    const d = Yf(t);
    window.addEventListener("resize", c, { passive: !0 }),
      t !== document.documentElement && Qf.set(t, uk(t, c)),
      d.addEventListener("scroll", c, { passive: !0 });
  }
  const o = Er.get(t);
  return (
    z.read(o, !1, !0),
    () => {
      var a;
      rt(o);
      const l = ha.get(t);
      if (!l || (l.delete(s), l.size)) return;
      const u = Er.get(t);
      Er.delete(t),
        u &&
          (Yf(t).removeEventListener("scroll", u),
          (a = Qf.get(t)) === null || a === void 0 || a(),
          window.removeEventListener("resize", u));
    }
  );
}
function Tk({ source: e, container: t, axis: n = "y" }) {
  e && (t = e);
  const r = { value: 0 },
    i = pc(
      (s) => {
        r.value = s[n].progress * 100;
      },
      { container: t, axis: n }
    );
  return { currentTime: r, cancel: i };
}
const pa = new Map();
function og({
  source: e,
  container: t = document.documentElement,
  axis: n = "y",
} = {}) {
  e && (t = e), pa.has(t) || pa.set(t, {});
  const r = pa.get(t);
  return (
    r[n] ||
      (r[n] = Qm()
        ? new ScrollTimeline({ source: t, axis: n })
        : Tk({ source: t, axis: n })),
    r[n]
  );
}
function Ek(e) {
  return e.length === 2;
}
function ag(e) {
  return e && (e.target || e.offset);
}
function Pk(e, t) {
  return Ek(e) || ag(t)
    ? pc((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : sg(e, og(t));
}
function Ck(e, t) {
  if ((e.flatten(), ag(t)))
    return (
      e.pause(),
      pc((n) => {
        e.time = e.duration * n[t.axis].progress;
      }, t)
    );
  {
    const n = og(t);
    return e.attachTimeline
      ? e.attachTimeline(
          n,
          (r) => (
            r.pause(),
            sg((i) => {
              r.time = r.duration * i;
            }, n)
          )
        )
      : Ee;
  }
}
function Nk(e, { axis: t = "y", ...n } = {}) {
  const r = { axis: t, ...n };
  return typeof e == "function" ? Pk(e, r) : Ck(e, r);
}
function Zf(e, t) {
  F1(!!(!t || t.current));
}
const jk = () => ({
  scrollX: ut(0),
  scrollY: ut(0),
  scrollXProgress: ut(0),
  scrollYProgress: ut(0),
});
function Ak({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const i = mo(jk);
  return (
    (n ? Ou : M.useEffect)(
      () => (
        Zf("target", t),
        Zf("container", e),
        Nk(
          (o, { x: a, y: l }) => {
            i.scrollX.set(a.current),
              i.scrollXProgress.set(a.progress),
              i.scrollY.set(l.current),
              i.scrollYProgress.set(l.progress);
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
function Rk(e) {
  const t = mo(() => ut(e)),
    { isStatic: n } = M.useContext(bu);
  if (n) {
    const [, r] = M.useState(e);
    M.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function lg(e, t) {
  const n = Rk(t()),
    r = () => n.set(t());
  return (
    r(),
    Ou(() => {
      const i = () => z.preRender(r, !1, !0),
        s = e.map((o) => o.on("change", i));
      return () => {
        s.forEach((o) => o()), rt(r);
      };
    }),
    n
  );
}
const Mk = (e) => e && typeof e == "object" && e.mix,
  Lk = (e) => (Mk(e) ? e.mix : void 0);
function bk(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    s = e[2 + n],
    o = e[3 + n],
    a = dc(i, s, { mixer: Lk(s[0]), ...o });
  return t ? a(r) : a;
}
function Dk(e) {
  (Ur.current = []), e();
  const t = lg(Ur.current, e);
  return (Ur.current = void 0), t;
}
function ma(e, t, n, r) {
  if (typeof e == "function") return Dk(e);
  const i = typeof t == "function" ? t : bk(t, n, r);
  return Array.isArray(e) ? Jf(e, i) : Jf([e], ([s]) => i(s));
}
function Jf(e, t) {
  const n = mo(() => []);
  return lg(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
const Ok = {
    en: {
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.gallery": "Gallery",
      "nav.donate": "Donate",
      "nav.contact": "Contact",
      "hero.title": "300Riel 300Derm",
      "hero.subtitle":
        "Be a part of our project to protect the environment by learning and planting mangrove trees.",
      "hero.donate": "Donate Now",
      "hero.follow": "Follow Us",
      "phases.title": "Project Phases",
      "phases.subtitle": "Our journey towards sustainable impact",
      "phases.planning.title": "Planning",
      "phases.planning.description":
        "Initial planning and strategy development phase",
      "phases.fundraising.title": "Fundraising",
      "phases.fundraising.description":
        "Gathering resources and community support",
      "phases.implementation.title": "Implementation",
      "phases.implementation.description": "Executing the planned initiatives",
      "phases.monitoring.title": "Post-planting Monitoring",
      "phases.monitoring.description":
        "Tracking progress and ensuring sustainability",
      "mangroves.title": "Why Mangroves Matter in Cambodia",
      "mangroves.subtitle": "Protecting Nature, Preserving Communities",
      "mangroves.hero.title": "Trapeang Sangke Mangrove Forest",
      "mangroves.hero.subtitle":
        "A vital ecosystem supporting local communities and marine life",
      "mangroves.impact.title": "Impact of Mangroves",
      "mangroves.challenges.title": "Challenges & Conservation",
      "mangroves.cta.text":
        "Join us in protecting Cambodia's mangrove forests. Your support helps preserve these vital ecosystems for future generations.",
      "mangroves.cta.button": "Support Mangrove Conservation",
      "mangroves.cta.learnMore.button": "Learn More",
      "mangroves.fact.naturalBarrier.title": "Natural Barrier",
      "mangroves.fact.naturalBarrier.description":
        "Mangroves reduce wave energy by up to 66% in the first 100m of forest width.",
      "mangroves.fact.marineNursery.title": "Marine Nursery",
      "mangroves.fact.marineNursery.description":
        "Supporting over Ca of tropical coastal fish species in their juvenile stages.",
      "mangroves.fact.carbonStorage.title": "Carbon Storage",
      "mangroves.fact.carbonStorage.description":
        "Storing up to 3-5 times more carbon per hectare than tropical forests.",
      "mangroves.threat.deforestation.title": "Deforestation",
      "mangroves.threat.deforestation.description":
        "Coastal development and aquaculture threaten mangrove ecosystems.",
      "mangroves.threat.climateChange.title": "Climate Change",
      "mangroves.threat.climateChange.description":
        "Rising sea levels and changing temperatures impact mangrove survival.",
      "mangroves.threat.conservation.title": "Conservation",
      "mangroves.threat.conservation.description":
        "Local initiatives work to protect and restore mangrove forests.",
      "about.title": "About Us",
      "about.mission": "Our Mission",
      "about.missionText": "Not yet know.",
      "about.story": "Our Story",
      "about.storyText":
        "Our Story: Our group will travel to Kampot Province to plant 300 mangrove trees to help nature and teach young people about the environment. We are going to work with the Trapang Sangkae Community, a local group that protects nature and promotes eco-friendly actions. Mangroves are very important because they provide homes for animals, support ecosystems, and protect coastal areas from damage. By planting the trees, our group wanted to show how valuable mangroves are and encourage young people to care for the environment. This activity is not only about restoring nature but also about inspiring others to take part in similar projects. The project will show how teamwork and small steps can create a big positive impact. Through this effort, our group hopes to spread awareness and build a greener future for everyone.",
      "about.objectives": "Our Objectives",
      "about.objective1":
        "To raise awareness of Mangrove's importance to local communities, namely the Trampeng Sangkae community, to Gen Z through a social media campaign such as Facebook and TikTok within June",
      "about.objective2":
        "To raise awareness of Mangrove's importance to local communities, namely the Trampang Sangkae community, to 50 IFL students through a workshop with invited experts in May",
      "about.objective3":
        "To collaborate and plant 300 mangrove saplings at Trampang Sangkae community to increase local biodiversity in Kampot province to enhance local biodiversity in June",
      "contact.title": "Get in Touch",
      "contact.subtitle":
        "Have questions or want to get involved? We'd love to hear from you!",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.send": "Send Message",
      "contact.info": "Contact Information",
      "contact.email.label": "Email",
      "contact.phone.label": "Phone",
      "contact.location.label": "Location",
      "contact.email.value": "chethaputhi@gmail.com",
      "contact.phone.value": "+855 85 593 363",
      "contact.location.value": "Phnom Penh, Cambodia",
      "donate.title": "Support Our Cause",
      "donate.subtitle": "Your contribution helps us continue our mission",
      "donate.why": "Why Your Support Matters",
      "donate.impact.info1.header": "Plant and Maintain Mangrove Trees:",
      "donate.impact.info1": " Help us restore vital coastal ecosystems.",
      "donate.impact.info2.header": "Support Environmental Education:",
      "donate.impact.info2": "Empower communities with knowledge and skills.",
      "donate.impact.info3.header": "Empower Local Communities:",
      "donate.impact.info3":
        "Create sustainable livelihoods through conservation.",
      "donate.impact.info4.header": "Protect Vital Ecosystems",
      "donate.impact.info4": "Preserve biodiversity for future generations.",
      "donate.impact": "Your Impact",
      "donate.impact.appreciation":
        "Every contribution, regardless of size, helps us make a real difference in environmental conservation and community development. Join us in creating a sustainable future for Cambodia.",
      "donate.payment": "Payment Methods",
      "donate.mobile": "Mobile Payment",
      "donate.credit": "Credit/Debit Card",
      "donate.bank": "Bank Transfer",
      "donate.complete": "Complete Donation",
      "footer.about": "About Us",
      "footer.about.subtitle":
        "We are a year 4 students who are passionate about environmental conservation and community empowerment.",
      "footer.quickLinks": "Quick Links",
      "footer.gallery": "Gallery",
      "footer.donate": "Donate",
      "footer.contact": "Contact",
      "footer.mission": "Our Mission",
      "footer.mission.subtitle": "Not yet known",
      "footer.copyright": "© 2025 300Riel 300Derm. All rights reserved.",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "gallery.title": "Our latest updates and events",
      "gallery.subtitle": "Our latest updates and events",
      "gallery.viewMore": "View More on Facebook",
      "sponsors.title": "Our Partners",
      "sponsors.subtitle":
        "Together with our valued partners, we're making a lasting impact on environmental conservation",
      "sponsors.becomePartner": "Become a Partner",
      "sponsors.partnerWithUs": "Partner With Us",
    },
    km: {
      "nav.home": "ទំព័រដើម",
      "nav.about": "អំពីយើង",
      "nav.gallery": "វិចិត្រសាល",
      "nav.donate": "បរិច្ចាគ",
      "nav.contact": "ទំនាក់ទំនង",
      "hero.title": "300រៀល 300ដើម",
      "hero.subtitle":
        "ចូលរួមជាមួយគម្រោងរបស់ពួកយើង ដើម្បីការពារបរិស្ថាន🌱 រៀនដាំដើមកោងកាង ដើម្បីអភិរក្សធម្មជាតិ និងការពារបរិស្ថានសម្រាប់អនាគត!នា",
      "hero.donate": "បរិច្ចាគឥឡូវនេះ",
      "hero.follow": "តាមដានយើង",
      "phases.title": "ដំណាក់កាលគម្រោង",
      "phases.subtitle": "ដំណើររបស់យើងឆ្ពោះទៅរកផលប្រយោជន៍ប្រកបដោយចីរភាព",
      "phases.planning.title": "ការរៀបចំផែនការ",
      "phases.planning.description":
        "ដំណាក់កាលនៃការរៀបចំផែនការ និងការអភិវឌ្ឍយុទ្ធសាស្ត្រដំបូង",
      "phases.fundraising.title": "ការប្រមូលមូលនិធិ",
      "phases.fundraising.description": "ការប្រមូលធនធាន និងការគាំទ្រពីសហគមន៍",
      "phases.implementation.title": "ការអនុវត្ត",
      "phases.implementation.description":
        "ការអនុវត្តគំនិតផ្តួចផ្តើមដែលបានគ្រោងទុក",
      "phases.monitoring.title": "ការតាមដានក្រោយការដាំ",
      "phases.monitoring.description": "ការតាមដានវឌ្ឍនភាព និងការធានាចីរភាព",
      "mangroves.title": "ហេតុអ្វីបានជាដើមកោងកាងមានសារៈសំខាន់នៅកម្ពុជា",
      "mangroves.subtitle": "ការពារធម្មជាតិ ថែរក្សាសហគមន៍",
      "mangroves.hero.title": "ព្រៃកោងកាងត្រពាំងសង្កែ",
      "mangroves.hero.subtitle":
        "ប្រព័ន្ធអេកូឡូស៊ីដ៏សំខាន់គាំទ្រសហគមន៍មូលដ្ឋាននិងជីវិតសមុទ្រ",
      "mangroves.impact.title": "ផលប្រយោជន៍នៃដើមកោងកាង",
      "mangroves.challenges.title": "បញ្ហាប្រឈម និងការអភិរក្ស",
      "mangroves.cta.text":
        "ចូលរួមជាមួយយើងក្នុងការការពារព្រៃកោងកាងនៅកម្ពុជា។ ការគាំទ្ររបស់អ្នកជួយថែរក្សាប្រព័ន្ធអេកូឡូស៊ីដ៏សំខាន់ទាំងនេះសម្រាប់មនុស្សជំនាន់ក្រោយ។",
      "mangroves.cta.button": "គាំទ្រការអភិរក្សព្រៃកោងកាង",
      "mangroves.cta.learnMore.button": "ស្វែងយល់បន្ថែម",
      "mangroves.fact.naturalBarrier.title": "ជញ្ជាំងធម្មជាតិ",
      "mangroves.fact.naturalBarrier.description":
        "ដើមកោងកាងបន្ថយថាមពលរលកបានដល់ទៅ 66% ក្នុង 100 ម៉ែត្រដំបូងនៃទទឹងព្រៃ។",
      "mangroves.fact.marineNursery.title": "កន្លែងចិញ្ចឹមត្រីសមុទ្រ",
      "mangroves.fact.marineNursery.description":
        "គាំទ្រដល់ជម្រកត្រីសមុទ្រដែលមានជាង 70% នៅក្នុងដំណាក់កាលក្មេង។",
      "mangroves.fact.carbonStorage.title": "ការផ្ទុកកាបូន",
      "mangroves.fact.carbonStorage.description":
        "ផ្ទុកកាបូនបានច្រើនដល់ទៅ 3-5 ដងក្នុងមួយហិកតាជាងព្រៃត្រូពិច។",
      "mangroves.threat.deforestation.title": "ការកាប់បំផ្លាញព្រៃ",
      "mangroves.threat.deforestation.description":
        "ការអភិវឌ្ឍតំបន់ឆ្នេរ និងការចិញ្ចឹមត្រីបង្កគ្រោះថ្នាក់ដល់ប្រព័ន្ធអេកូឡូស៊ីដើមកោងកាង។",
      "mangroves.threat.climateChange.title": "ការផ្លាស់ប្តូរអាកាសធាតុ",
      "mangroves.threat.climateChange.description":
        "កម្រិតទឹកសមុទ្រកើនឡើង និងសីតុណ្ហភាពផ្លាស់ប្តូរប៉ះពាល់ដល់ការរស់រាននៃដើមកោងកាង។",
      "mangroves.threat.conservation.title": "ការអភិរក្ស",
      "mangroves.threat.conservation.description":
        "គម្រោងមូលដ្ឋានធ្វើការការពារ និងស្តារព្រៃកោងកាង។",
      "about.title": "អំពីយើង",
      "about.mission": "បេសកកម្មរបស់យើង",
      "about.missionText": "អត់ដឹង",
      "about.story": "រឿងរ៉ាវរបស់យើង",
      "about.storyText":
        "ក្រុមរបស់យើងនឹងធ្វើដំណើរទៅកាន់ខេត្តកំពត ដើម្បីដាំដើមកោងកាងចំនួន ៣០០ដើម ដើម្បីជួយធម្មជាតិ និងបង្រៀនយុវជនអំពីបរិស្ថាន។ យើងនឹងធ្វើការជាមួយសហគមន៍ត្រពាំងសង្កែ ដែលជាក្រុមក្នុងស្រុកដែលការពារធម្មជាតិ​និងលើកកម្ពស់សកម្មភាពដែលមិនប៉ះពាល់ដល់បរិស្ថាន។ ព្រៃកោងកាងមានសារៈសំខាន់ណាស់ ព្រោះវាផ្តល់ផ្ទះសម្រាប់សត្វ គាំទ្រដល់ប្រព័ន្ធអេកូឡូស៊ី និងការពារតំបន់ឆ្នេរពីការខូចខាត។ តាមរយៈ​ការ​ដាំ​ដើម​ឈើ ក្រុម​យើង​ចង់​បង្ហាញ​ថា​ដើម​កោងកាង​មាន​តម្លៃ​ប៉ុណ្ណា និង​លើក​ទឹកចិត្ត​យុវជន​ក្នុង​ការ​ថែរក្សា​បរិស្ថាន។ សកម្មភាពនេះមិនត្រឹមតែជាការស្ដារឡើងវិញនូវធម្មជាតិប៉ុណ្ណោះទេ ថែមទាំងជាការលើកទឹកចិត្តអ្នកដទៃឱ្យចូលរួមក្នុងគម្រោងស្រដៀងគ្នានេះផងដែរ។ គម្រោងនេះនឹងបង្ហាញពីរបៀបដែលការធ្វើការងារជាក្រុម និងជំហានតូចៗអាចបង្កើតផលវិជ្ជមានដ៏ធំមួយ។ តាមរយៈកិច្ចខិតខំប្រឹងប្រែងនេះ ក្រុមរបស់យើងសង្ឃឹមថានឹងផ្សព្វផ្សាយការយល់ដឹង និងកសាងអនាគតដ៏បៃតងសម្រាប់អ្នករាល់គ្នា។",
      "about.objectives": "គោលដៅរបស់យើង",
      "about.objective1":
        "ដើម្បីលើកកម្ពស់ការយល់ដឹងអំពីសារៈសំខាន់របស់ព្រៃកោងកាងចំពោះសហគមន៍មូលដ្ឋាន គឺសហគមន៍ត្រពាំងសង្កែ ដល់ Gen Z តាមរយៈយុទ្ធនាការប្រព័ន្ធផ្សព្វផ្សាយសង្គមដូចជា Facebook និង TikTok ក្នុងខែមិថុនា។",
      "about.objective2":
        "ដើម្បីលើកកម្ពស់ការយល់ដឹងអំពីសារៈសំខាន់របស់ដើមកោងកាងចំពោះសហគមន៍មូលដ្ឋាន ពោលគឺសហគមន៍ត្រពាំងសង្កែ ដល់និស្សិត IFL ចំនួន ៥០នាក់ តាមរយៈសិក្ខាសាលាជាមួយអ្នកជំនាញដែលបានអញ្ជើញកាលពីខែឧសភា។",
      "about.objective3":
        "ដើម្បីសហការ និងដាំកូនឈើកោងកាងចំនួន ៣០០ដើម នៅសហគមន៍ត្រពាំងសង្កែ ដើម្បីបង្កើនជីវចម្រុះក្នុងខេត្តកំពត ដើម្បីបង្កើនជីវចម្រុះក្នុងមូលដ្ឋានក្នុងខែមិថុនា។",
      "contact.title": "ទាក់ទងមកយើង",
      "contact.subtitle": "មានសំណួរឬចង់ចូលរួម? យើងចង់ស្តាប់ពីអ្នក!",
      "contact.name": "ឈ្មោះ",
      "contact.email": "អ៊ីមែល",
      "contact.message": "សារ",
      "contact.send": "ផ្ញើសារ",
      "contact.info": "ព័ត៌មានទំនាក់ទំនង",
      "contact.email.label": "អ៊ីមែល",
      "contact.phone.label": "ទូរស័ព្ទ",
      "contact.location.label": "ទីតាំង",
      "contact.email.value": "chethaputhi@gmail.com",
      "contact.phone.value": "+855 85 593 363",
      "contact.location.value": "ភ្នំពេញ, កម្ពុជា",
      "donate.title": "គាំទ្រគោលបំណងរបស់យើង",
      "donate.subtitle": "ការរួមចំណែករបស់អ្នកជួយយើងបន្តបេសកកម្មរបស់យើង",
      "donate.why": "ហេតុអ្វីបានជាការគាំទ្ររបស់អ្នកមានសារៈសំខាន់",
      "donate.impact.info1.header": "ដាំ និងថែរក្សាព្រៃកោងកាង៖",
      "donate.impact.info1":
        "ការចូលរួមរបស់អ្នកជួយស្ដារបរិស្ថានឆ្នេរ និងការពារភូមិសាស្ត្រធម្មជាតិ។",
      "donate.impact.info2.header": "គាំទ្របទពិសោធន៍អប់រំបរិស្ថាន៖",
      "donate.impact.info2":
        "ផ្តល់ឱកាសដល់សហគមន៍ក្នុងការរៀន និងអភិវឌ្ឍជំនាញដើម្បីការពារបរិស្ថាន។",
      "donate.impact.info3.header": "ជួយពង្រឹងសហគមន៍ក្នុងតំបន់៖",
      "donate.impact.info3":
        "បង្កើតការងារសម្រាប់ប្រជាជនក្នុងតំបន់តាមរយៈការអភិរក្សធម្មជាតិ។",
      "donate.impact.info4.header": "ការពារបរិស្ថានសំខាន់ៗ៖",
      "donate.impact.info4":
        "រក្សាការរស់នៅរបស់សត្វសមុទ្រ និងបរិស្ថានសម្រាប់អនាគត។",
      "donate.impact": "ឥទ្ថិពលរបស់អ្នក",
      "donate.impact.appreciation":
        "ការចូលរួមរបស់អ្នក អូសបន្លាយឆ្ពោះទៅការស្តារព្រៃកោងកាង និងការអភិរក្សបរិស្ថាននៅbប្រទេសកម្ពុជា។",
      "donate.payment": "វិធីសាស្រ្តទូទាត់",
      "donate.mobile": "ទូទាត់តាមទូរស័ព្ទ",
      "donate.credit": "កាតឥណទាន/ឥណពន្ធ",
      "donate.bank": "ការផ្ទេរប្រាក់តាមធនាគារ",
      "donate.complete": "បញ្ចប់ការបរិច្ចាគ",
      "footer.about": "អំពីយើង",
      "footer.about.subtitle":
        "ពួកយើងជានិសិ្សតឆ្នាំទី៤ ដែលស្រលាញធម្មជាតិនិងជំរុញនិស្សិតជំនាន់​ក្រោយបង្កើតកម្រោងដដលផ្ដល់ប្រយោជន៍ដល់សង្គម",
      "footer.gallery": "វិចិត្រសាល",
      "footer.donate": "បរិច្ចាគ",
      "footer.contact": "ទំនាក់ទំនង",
      "footer.quickLinks": "តំណភ្ជាប់រហ័ស",
      "footer.mission": "បេសកកម្មរបស់យើង",
      "footer.mission.subtitle": "Not yet known in khmer",
      "footer.copyright": "© 2025 300រៀល 300ដើម. រក្សាសិទ្ធិគ្រប់យ៉ាង។",
      "footer.privacy": "គោលការណ៍ឯកជន",
      "footer.terms": "គោលការណ៍សំខាន់",
      "gallery.title": "ព្រិត្តការណ៍ថ្មីបំផុត",
      "gallery.subtitle": "",
      "gallery.viewMore": "មើលបន្ថែមលើហ្វេសប៊ុក",
      "sponsors.title": "ដៃគូរបស់យើង",
      "sponsors.subtitle":
        "ជាមួយដៃគូរដែលមានតម្លៃរបស់យើង យើងកំពុងបង្កើតផលប្រយោជន៍អចិន្រ្តៃយ៍លើការអភិរក្សបរិស្ថាន",
      "sponsors.becomePartner": "ក្លាយជាដៃគូរ",
      "sponsors.partnerWithUs": "ចូលរួមជាមួយយើង",
    },
  },
  ug = M.createContext(void 0),
  _k = ({ children: e }) => {
    const [t, n] = M.useState("km"),
      r = () => {
        n((s) => (s === "en" ? "km" : "en"));
      },
      i = (s) => Ok[t][s] || s;
    return h.jsx(ug.Provider, {
      value: { language: t, toggleLanguage: r, t: i },
      children: e,
    });
  },
  mt = () => {
    const e = M.useContext(ug);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  cg = "/300Riel300DermV5/assets/logo2-DXt001ar.png",
  Vk = () => {
    const [e, t] = M.useState(!1),
      [n, r] = M.useState(!1),
      { scrollY: i } = Ak(),
      { language: s, toggleLanguage: o, t: a } = mt(),
      l = ma(i, [0, 100], ["4rem", "3.5rem"]),
      u = ma(
        i,
        [0, 100],
        ["rgba(242, 247, 242, 1)", "rgba(242, 247, 242, 0.95)"]
      ),
      c = ma(
        i,
        [0, 100],
        ["0 0 0 transparent", "0 4px 6px -1px rgba(0, 0, 0, 0.1)"]
      );
    M.useEffect(() => {
      const y = () => {
        r(window.scrollY > 20);
      };
      return (
        window.addEventListener("scroll", y),
        () => window.removeEventListener("scroll", y)
      );
    }, []);
    const d = (y) => {
        const v = document.getElementById(y);
        v && (v.scrollIntoView({ behavior: "smooth" }), t(!1));
      },
      f = ["home", "about", "gallery", "donate", "contact"];
    return h.jsxs(A.nav, {
      style: { height: l, backgroundColor: u, boxShadow: c },
      className: "fixed w-full z-50 transition-colors",
      children: [
        h.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full",
          children: h.jsxs("div", {
            className: "flex items-center justify-between h-full",
            children: [
              h.jsx(A.div, {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.5 },
                className: "flex-shrink-0",
                children: h.jsx("img", {
                  src: cg,
                  loading: "lazy",
                  alt: "300 Riel Logo",
                  className: "w-auto h-24",
                }),
              }),
              h.jsxs("div", {
                className: "hidden md:flex items-center space-x-4",
                children: [
                  h.jsx("div", {
                    className: "flex items-baseline space-x-4",
                    children: f.map((y, v) =>
                      h.jsx(
                        A.button,
                        {
                          initial: { opacity: 0, y: -20 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 0.5, delay: v * 0.1 },
                          whileHover: { scale: 1.05 },
                          whileTap: { scale: 0.95 },
                          onClick: () => d(y),
                          className:
                            "text-earth-700 hover:text-eco-600 px-3 py-2 rounded-md text-sm font-medium capitalize",
                          children: a(`nav.${y}`),
                        },
                        y
                      )
                    ),
                  }),
                  h.jsxs(A.button, {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    onClick: o,
                    className:
                      "ml-4 p-2 rounded-full bg-eco-100 text-eco-600 hover:bg-eco-200 transition-colors",
                    children: [
                      h.jsx(Rd, { className: "w-5 h-5" }),
                      h.jsx("span", {
                        className: "sr-only",
                        children:
                          s === "en" ? "Switch to Khmer" : "Switch to English",
                      }),
                    ],
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "md:hidden flex items-center space-x-2",
                children: [
                  h.jsx(A.button, {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    onClick: o,
                    className:
                      "p-2 rounded-full bg-eco-100 text-eco-600 hover:bg-eco-200 transition-colors",
                    children: h.jsx(Rd, { className: "w-5 h-5" }),
                  }),
                  h.jsx(A.button, {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    onClick: () => t(!e),
                    className:
                      "inline-flex items-center justify-center p-2 rounded-md text-earth-700 hover:text-eco-600 focus:outline-none",
                    children: e
                      ? h.jsx(_1, { size: 24 })
                      : h.jsx(C1, { size: 24 }),
                  }),
                ],
              }),
            ],
          }),
        }),
        h.jsx(A.div, {
          initial: !1,
          animate: e
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 },
          transition: { duration: 0.3 },
          className: "md:hidden overflow-hidden bg-eco-50 shadow-lg",
          children: h.jsx("div", {
            className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
            children: f.map((y) =>
              h.jsx(
                A.button,
                {
                  whileHover: { scale: 1.02, x: 5 },
                  onClick: () => d(y),
                  className:
                    "text-earth-700 hover:text-eco-600 block px-3 py-2 rounded-md text-base font-medium capitalize w-full text-left",
                  children: a(`nav.${y}`),
                },
                y
              )
            ),
          }),
        }),
      ],
    });
  },
  Fk = "/300Riel300DermV5/assets/HeroPictureCompressed-U-5xQoAr.jpg",
  Ik = () => {
    const { t: e } = mt(),
      t = () => {
        const n = document.getElementById("donate");
        n && n.scrollIntoView({ behavior: "smooth" });
      };
    return h.jsxs("div", {
      id: "home",
      className: "relative min-h-screen flex items-center justify-center",
      children: [
        h.jsx(A.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1 },
          className: "absolute inset-0 z-0",
          style: {
            backgroundImage: `url(${Fk})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          },
          children: h.jsx("div", {
            className: "absolute inset-0 bg-black opacity-60",
          }),
        }),
        h.jsxs("div", {
          className: "relative z-10 text-center px-4 sm:px-6 lg:px-8",
          children: [
            h.jsx(A.h1, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.4 },
              className:
                "text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4",
              children: e("hero.title"),
            }),
            h.jsx(A.p, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.6 },
              className: "text-lg sm:text-xl text-gray-200 mb-8",
              children: e("hero.subtitle"),
            }),
            h.jsxs("div", {
              className: "flex flex-col sm:flex-row justify-center gap-4",
              children: [
                h.jsxs(A.button, {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.8, delay: 0.8 },
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  onClick: t,
                  className:
                    "inline-flex items-center px-6 py-3 bg-eco-600 hover:bg-eco-700 text-white font-semibold rounded-lg",
                  children: [
                    h.jsx(di, { className: "mr-2", size: 20 }),
                    e("hero.donate"),
                  ],
                }),
                h.jsxs(A.button, {
                  initial: { opacity: 0, x: 20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.8, delay: 1 },
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className:
                    "inline-flex items-center px-6 py-3 bg-earth-600 hover:bg-earth-700 text-white font-semibold rounded-lg",
                  children: [
                    h.jsx(Us, { className: "mr-2", size: 20 }),
                    e("hero.follow"),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
var Ml = new Map(),
  Yi = new WeakMap(),
  eh = 0,
  Bk = void 0;
function zk(e) {
  return e
    ? (Yi.has(e) || ((eh += 1), Yi.set(e, eh.toString())), Yi.get(e))
    : "0";
}
function Uk(e) {
  return Object.keys(e)
    .sort()
    .filter((t) => e[t] !== void 0)
    .map((t) => `${t}_${t === "root" ? zk(e.root) : e[t]}`)
    .toString();
}
function Hk(e) {
  const t = Uk(e);
  let n = Ml.get(t);
  if (!n) {
    const r = new Map();
    let i;
    const s = new IntersectionObserver((o) => {
      o.forEach((a) => {
        var l;
        const u = a.isIntersecting && i.some((c) => a.intersectionRatio >= c);
        e.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = u),
          (l = r.get(a.target)) == null ||
            l.forEach((c) => {
              c(u, a);
            });
      });
    }, e);
    (i =
      s.thresholds ||
      (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
      (n = { id: t, observer: s, elements: r }),
      Ml.set(t, n);
  }
  return n;
}
function $k(e, t, n = {}, r = Bk) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const l = e.getBoundingClientRect();
    return (
      t(r, {
        isIntersecting: r,
        target: e,
        intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
        time: 0,
        boundingClientRect: l,
        intersectionRect: l,
        rootBounds: l,
      }),
      () => {}
    );
  }
  const { id: i, observer: s, elements: o } = Hk(n),
    a = o.get(e) || [];
  return (
    o.has(e) || o.set(e, a),
    a.push(t),
    s.observe(e),
    function () {
      a.splice(a.indexOf(t), 1),
        a.length === 0 && (o.delete(e), s.unobserve(e)),
        o.size === 0 && (s.disconnect(), Ml.delete(i));
    }
  );
}
function Nn({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: r,
  root: i,
  triggerOnce: s,
  skip: o,
  initialInView: a,
  fallbackInView: l,
  onChange: u,
} = {}) {
  var c;
  const [d, f] = M.useState(null),
    y = M.useRef(u),
    [v, x] = M.useState({ inView: !!a, entry: void 0 });
  (y.current = u),
    M.useEffect(() => {
      if (o || !d) return;
      let g;
      return (
        (g = $k(
          d,
          (S, T) => {
            x({ inView: S, entry: T }),
              y.current && y.current(S, T),
              T.isIntersecting && s && g && (g(), (g = void 0));
          },
          {
            root: i,
            rootMargin: r,
            threshold: e,
            trackVisibility: n,
            delay: t,
          },
          l
        )),
        () => {
          g && g();
        }
      );
    }, [Array.isArray(e) ? e.toString() : e, d, i, r, s, o, n, l, t]);
  const w = (c = v.entry) == null ? void 0 : c.target,
    m = M.useRef(void 0);
  !d &&
    w &&
    !s &&
    !o &&
    m.current !== w &&
    ((m.current = w), x({ inView: !!a, entry: void 0 }));
  const p = [f, v.inView, v.entry];
  return (p.ref = p[0]), (p.inView = p[1]), (p.entry = p[2]), p;
}
const Wk = () => {
    const [e, t] = Nn({ triggerOnce: !0, threshold: 0.1 }),
      { t: n } = mt(),
      r = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, staggerChildren: 0.2 },
        },
      },
      i = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };
    return h.jsx("section", {
      id: "about",
      className: "py-20 bg-gray-50",
      children: h.jsxs(A.div, {
        ref: e,
        initial: "hidden",
        animate: t ? "visible" : "hidden",
        variants: r,
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          h.jsx(A.div, {
            variants: i,
            className: "text-center mb-16",
            children: h.jsx("h2", {
              className: "text-3xl font-bold text-gray-900 sm:text-4xl",
              children: n("about.title"),
            }),
          }),
          h.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-12",
            children: [
              h.jsxs(A.div, {
                variants: i,
                className: "space-y-6",
                children: [
                  h.jsx("h3", {
                    className: "text-2xl font-semibold text-gray-900",
                    children: n("about.mission"),
                  }),
                  h.jsx("p", {
                    className: "text-gray-600 leading-relaxed",
                    children: n("about.missionText"),
                  }),
                  h.jsx("h3", {
                    className: "text-2xl font-semibold text-gray-900",
                    children: n("about.story"),
                  }),
                  h.jsx("p", {
                    className: "text-gray-600 leading-relaxed",
                    children: n("about.storyText"),
                  }),
                ],
              }),
              h.jsxs(A.div, {
                variants: i,
                className: "bg-white p-8 rounded-lg shadow-lg",
                children: [
                  h.jsx("h3", {
                    className: "text-2xl font-semibold text-gray-900 mb-6",
                    children: n("about.objectives"),
                  }),
                  h.jsx("ul", {
                    className: "space-y-4",
                    children: [
                      { icon: M1, text: n("about.objective1") },
                      { icon: di, text: n("about.objective2") },
                      { icon: Am, text: n("about.objective3") },
                    ].map((s, o) =>
                      h.jsxs(
                        A.li,
                        {
                          variants: i,
                          className: "flex items-start",
                          whileHover: { x: 5 },
                          children: [
                            h.jsx(s.icon, {
                              className:
                                "flex-shrink-0 h-6 w-6 text-eco-500 mt-1",
                            }),
                            h.jsx("span", {
                              className: "ml-3 text-gray-600",
                              children: s.text,
                            }),
                          ],
                        },
                        o
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Kk = "/300Riel300DermV5/assets/trapeang-sangkae-community-b0to-AZP.jpg",
  Gk = () => {
    const [e, t] = Nn({ triggerOnce: !0, threshold: 0.1 }),
      { t: n } = mt(),
      r = [
        {
          icon: fl,
          title: n("mangroves.fact.naturalBarrier.title"),
          description: n("mangroves.fact.naturalBarrier.description"),
          percentage: 66,
        },
        {
          icon: v1,
          title: n("mangroves.fact.marineNursery.title"),
          description: n("mangroves.fact.marineNursery.description"),
          percentage: 70,
        },
        {
          icon: L1,
          title: n("mangroves.fact.carbonStorage.title"),
          description: n("mangroves.fact.carbonStorage.description"),
          percentage: 80,
        },
      ],
      i = [
        {
          icon: y1,
          title: n("mangroves.threat.deforestation.title"),
          description: n("mangroves.threat.deforestation.description"),
        },
        {
          icon: O1,
          title: n("mangroves.threat.climateChange.title"),
          description: n("mangroves.threat.climateChange.description"),
        },
        {
          icon: A1,
          title: n("mangroves.threat.conservation.title"),
          description: n("mangroves.threat.conservation.description"),
        },
      ],
      s = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      },
      o = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };
    return h.jsx("section", {
      className: "py-20 bg-gradient-to-b from-eco-50 via-white to-eco-50",
      children: h.jsxs(A.div, {
        ref: e,
        initial: "hidden",
        animate: t ? "visible" : "hidden",
        variants: s,
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          h.jsxs(A.div, {
            variants: o,
            className: "text-center mb-16",
            children: [
              h.jsx("h2", {
                className: "text-3xl font-bold text-gray-900 sm:text-4xl mb-4",
                children: n("mangroves.title"),
              }),
              h.jsx("p", {
                className: "text-xl text-gray-600 max-w-3xl mx-auto",
                children: n("mangroves.subtitle"),
              }),
            ],
          }),
          h.jsxs(A.div, {
            variants: o,
            className: "relative h-[400px] mb-16 rounded-2xl overflow-hidden",
            children: [
              h.jsx("img", {
                src: Kk,
                alt: "Mangrove forest in Cambodia",
                className: "w-full h-full object-cover",
              }),
              h.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent",
                children: h.jsxs("div", {
                  className: "absolute bottom-0 left-0 right-0 p-8 text-white",
                  children: [
                    h.jsx("h3", {
                      className: "text-2xl font-bold mb-2",
                      children: n("mangroves.hero.title"),
                    }),
                    h.jsx("p", {
                      className: "text-lg",
                      children: n("mangroves.hero.subtitle"),
                    }),
                  ],
                }),
              }),
            ],
          }),
          h.jsxs(A.div, {
            variants: o,
            className: "mb-16",
            children: [
              h.jsx("h3", {
                className: "text-2xl font-bold text-center mb-12",
                children: n("mangroves.impact.title"),
              }),
              h.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: r.map((a) =>
                  h.jsxs(
                    A.div,
                    {
                      variants: o,
                      whileHover: { scale: 1.02 },
                      className:
                        "bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow",
                      children: [
                        h.jsxs("div", {
                          className: "relative h-32 mb-6",
                          children: [
                            h.jsx("div", {
                              className:
                                "absolute top-0 left-1/2 transform -translate-x-1/2",
                              children: h.jsx(a.icon, {
                                className: "w-12 h-12 text-eco-600",
                              }),
                            }),
                            h.jsx("div", {
                              className:
                                "absolute bottom-0 left-1/2 transform -translate-x-1/2",
                              children: h.jsxs("svg", {
                                className: "w-20 h-20",
                                viewBox: "0 0 36 36",
                                children: [
                                  h.jsx("path", {
                                    d: `M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831`,
                                    fill: "none",
                                    stroke: "#E6EFE6",
                                    strokeWidth: "3",
                                    strokeLinecap: "round",
                                  }),
                                  h.jsx(A.path, {
                                    initial: { pathLength: 0 },
                                    animate: t
                                      ? { pathLength: a.percentage / 100 }
                                      : { pathLength: 0 },
                                    transition: {
                                      duration: 2,
                                      ease: "easeOut",
                                    },
                                    d: `M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831`,
                                    fill: "none",
                                    stroke: "#4D8B4D",
                                    strokeWidth: "3",
                                    strokeLinecap: "round",
                                  }),
                                  h.jsxs("text", {
                                    x: "18",
                                    y: "20.35",
                                    className: "text-xxs font-bold",
                                    textAnchor: "middle",
                                    fill: "#4D8B4D",
                                    children: [a.percentage, "%"],
                                  }),
                                ],
                              }),
                            }),
                            " ",
                          ],
                        }),
                        h.jsx("h4", {
                          className:
                            "text-xl font-semibold text-gray-900 mb-2 text-center",
                          children: a.title,
                        }),
                        h.jsx("p", {
                          className: "text-gray-600 text-center",
                          children: a.description,
                        }),
                      ],
                    },
                    a.title
                  )
                ),
              }),
            ],
          }),
          h.jsxs(A.div, {
            variants: o,
            className: "bg-white rounded-2xl p-8 shadow-lg",
            children: [
              h.jsx("h3", {
                className: "text-2xl font-bold text-center mb-8",
                children: n("mangroves.challenges.title"),
              }),
              h.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: i.map((a, l) =>
                  h.jsxs(
                    A.div,
                    {
                      variants: o,
                      whileHover: { y: -5 },
                      className: "flex flex-col items-center text-center",
                      children: [
                        h.jsx("div", {
                          className:
                            "w-16 h-16 rounded-full bg-red-200 flex items-center justify-center mb-4",
                          children: h.jsx(a.icon, {
                            className: "w-8 h-8 text-red-900",
                          }),
                        }),
                        h.jsx("h4", {
                          className: "text-lg font-semibold text-gray-900 mb-2",
                          children: a.title,
                        }),
                        h.jsx("p", {
                          className: "text-gray-600",
                          children: a.description,
                        }),
                      ],
                    },
                    a.title
                  )
                ),
              }),
            ],
          }),
          h.jsxs(A.div, {
            variants: o,
            className: "mt-16 relative overflow-hidden",
            children: [
              h.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-eco-600 to-earth-600 opacity-10 rounded-3xl",
              }),
              h.jsx("div", {
                className:
                  "relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-eco-100",
                children: h.jsxs("div", {
                  className: "max-w-4xl mx-auto text-center",
                  children: [
                    h.jsx(A.div, {
                      initial: { scale: 0.5, opacity: 0 },
                      animate: t
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0.5, opacity: 0 },
                      transition: { duration: 0.5 },
                      className:
                        "w-16 h-16 mx-auto mb-6 rounded-full bg-eco-50 flex items-center justify-center",
                      children: h.jsx(di, {
                        className: "w-8 h-8 text-eco-600",
                      }),
                    }),
                    h.jsx("h3", {
                      className:
                        "text-2xl md:text-3xl font-bold text-gray-900 mb-4",
                      children: n("mangroves.cta.text"),
                    }),
                    h.jsx("p", {
                      className: "text-lg text-gray-600 mb-8 max-w-2xl mx-auto",
                      children:
                        "Every 300Riels helps protect and restore mangrove forests in Kampot",
                    }),
                    h.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row items-center justify-center gap-4",
                      children: [
                        h.jsxs(A.button, {
                          whileHover: { scale: 1.02 },
                          whileTap: { scale: 0.98 },
                          className:
                            "w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-eco-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-eco-700 transition-all duration-300 group",
                          children: [
                            h.jsx(di, {
                              className:
                                "w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110",
                            }),
                            n("mangroves.cta.button"),
                          ],
                        }),
                        h.jsxs(A.button, {
                          whileHover: { scale: 1.02 },
                          whileTap: { scale: 0.98 },
                          className:
                            "w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-earth-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-earth-700 transition-all duration-300 group",
                          children: [
                            h.jsx(fl, {
                              className:
                                "w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110",
                            }),
                            n("mangroves.cta.learnMore.button"),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  Xk = () => {
    const [e, t] = Nn({ triggerOnce: !0, threshold: 0.1 }),
      { t: n } = mt(),
      r = [
        {
          number: "01",
          title: n("phases.planning.title"),
          icon: m1,
          description: n("phases.planning.description"),
          color: "from-eco-400 to-eco-600",
        },
        {
          number: "02",
          title: n("phases.fundraising.title"),
          icon: g1,
          description: n("phases.fundraising.description"),
          color: "from-eco-500 to-eco-700",
        },
        {
          number: "03",
          title: n("phases.implementation.title"),
          icon: jm,
          description: n("phases.implementation.description"),
          color: "from-eco-600 to-eco-800",
        },
        {
          number: "04",
          title: n("phases.monitoring.title"),
          icon: T1,
          description: n("phases.monitoring.description"),
          color: "from-eco-700 to-eco-900",
        },
      ],
      i = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      },
      s = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      },
      o = {
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 1, ease: "easeInOut" } },
      };
    return h.jsx("section", {
      className: "py-20 bg-gradient-to-b from-white to-eco-50",
      children: h.jsxs(A.div, {
        ref: e,
        initial: "hidden",
        animate: t ? "visible" : "hidden",
        variants: i,
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          h.jsxs(A.div, {
            variants: s,
            className: "text-center mb-16",
            children: [
              h.jsx("h2", {
                className: "text-3xl font-bold text-gray-900 sm:text-4xl",
                children: n("phases.title"),
              }),
              h.jsx("p", {
                className: "mt-4 text-xl text-gray-600",
                children: n("phases.subtitle"),
              }),
            ],
          }),
          h.jsxs("div", {
            className: "relative py-20 hidden md:block",
            children: [
              h.jsx(A.div, {
                variants: o,
                className:
                  "absolute top-1/3 left-0 right-0 h-3 bg-gradient-to-r from-eco-400 to-eco-600 transform -translate-y-1/2 rounded-full shadow-lg origin-left",
                style: { boxShadow: "0 0 20px rgba(0, 89, 0, 0.2)" },
              }),
              h.jsx("div", {
                className:
                  "absolute top-1/2 left-0 right-0 h-32 transform -translate-y-1/2",
                children: [...Array(4)].map((a, l) =>
                  h.jsx(
                    A.div,
                    {
                      initial: { height: 0 },
                      animate: t ? { height: "8rem" } : { height: 0 },
                      transition: { delay: 0.5 + l * 0.2, duration: 0.5 },
                      className: "absolute h-32 w-0.5 bg-eco-300",
                      style: {
                        left: `${25 + l * 25}%`,
                        transform: "translateX(-50%)",
                      },
                    },
                    l
                  )
                ),
              }),
              h.jsx("div", {
                className: "relative grid grid-cols-4 gap-4",
                children: r.map((a, l) =>
                  h.jsxs(
                    A.div,
                    {
                      variants: s,
                      className: "relative flex flex-col items-center",
                      whileHover: { y: -5 },
                      transition: { duration: 0.3 },
                      children: [
                        h.jsx(A.div, {
                          initial: { opacity: 0, scale: 0 },
                          animate: t
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 },
                          transition: { delay: 0.3 + l * 0.2, duration: 0.5 },
                          className:
                            "absolute -top-16 text-4xl font-bold text-eco-200",
                          children: a.number,
                        }),
                        h.jsx(A.div, {
                          whileHover: { scale: 1.1, rotate: 360 },
                          transition: { duration: 0.8, type: "spring" },
                          className: `relative z-10 w-20 h-20 rounded-full bg-gradient-to-br ${a.color} 
                    flex items-center justify-center mb-6 border-4 border-white shadow-xl
                    transform hover:shadow-2xl transition-shadow duration-300`,
                          style: {
                            boxShadow: "0 4px 20px rgba(0, 89, 0, 0.2)",
                          },
                          children: h.jsx(a.icon, {
                            className: "w-10 h-10 text-white",
                          }),
                        }),
                        h.jsxs(A.div, {
                          variants: s,
                          className: "text-center group mt-16",
                          children: [
                            h.jsx("h3", {
                              className:
                                "text-xl font-bold text-gray-900 mb-3 group-hover:text-eco-600 transition-colors",
                              children: a.title,
                            }),
                            h.jsx("p", {
                              className: "text-gray-600 mb-4 leading-relaxed",
                              children: a.description,
                            }),
                            h.jsx(A.div, {
                              whileHover: { scale: 1.02 },
                              className:
                                "mt-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-eco-100",
                              children: h.jsxs("p", {
                                className: "text-sm text-gray-600",
                                children: [
                                  "Additional information about ",
                                  a.title.toLowerCase(),
                                  " ",
                                  "phase will be added here.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    a.title
                  )
                ),
              }),
            ],
          }),
          h.jsx("div", {
            className: "md:hidden space-y-8",
            children: r.map((a, l) =>
              h.jsxs(
                A.div,
                {
                  variants: s,
                  className: "relative bg-white rounded-lg p-6 shadow-lg",
                  children: [
                    h.jsxs("div", {
                      className: "flex items-center space-x-4 mb-4",
                      children: [
                        h.jsx("div", {
                          className: "text-3xl font-bold text-eco-200",
                          children: a.number,
                        }),
                        h.jsx(A.div, {
                          whileHover: { scale: 1.1 },
                          className: `w-14 h-14 rounded-full bg-gradient-to-br ${a.color} 
                    flex items-center justify-center border-2 border-white shadow-lg`,
                          children: h.jsx(a.icon, {
                            className: "w-7 h-7 text-white",
                          }),
                        }),
                        h.jsx("h3", {
                          className: "text-xl font-bold text-gray-900",
                          children: a.title,
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "pl-20",
                      children: [
                        h.jsx("p", {
                          className: "text-gray-600 mb-4",
                          children: a.description,
                        }),
                        h.jsx(A.div, {
                          whileHover: { scale: 1.01 },
                          className:
                            "p-4 bg-eco-50 rounded-lg border border-eco-100",
                          children: h.jsxs("p", {
                            className: "text-sm text-gray-600",
                            children: [
                              "Additional information about ",
                              a.title.toLowerCase(),
                              " ",
                              "phase will be added here.",
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                a.title
              )
            ),
          }),
        ],
      }),
    });
  };
function dg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: qk } = Object.prototype,
  { getPrototypeOf: mc } = Object,
  So = ((e) => (t) => {
    const n = qk.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  it = (e) => ((e = e.toLowerCase()), (t) => So(t) === e),
  ko = (e) => (t) => typeof t === e,
  { isArray: fr } = Array,
  gi = ko("undefined");
function Qk(e) {
  return (
    e !== null &&
    !gi(e) &&
    e.constructor !== null &&
    !gi(e.constructor) &&
    _e(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const fg = it("ArrayBuffer");
function Yk(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && fg(e.buffer)),
    t
  );
}
const Zk = ko("string"),
  _e = ko("function"),
  hg = ko("number"),
  To = (e) => e !== null && typeof e == "object",
  Jk = (e) => e === !0 || e === !1,
  ms = (e) => {
    if (So(e) !== "object") return !1;
    const t = mc(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  eT = it("Date"),
  tT = it("File"),
  nT = it("Blob"),
  rT = it("FileList"),
  iT = (e) => To(e) && _e(e.pipe),
  sT = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (_e(e.append) &&
          ((t = So(e)) === "formdata" ||
            (t === "object" &&
              _e(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  oT = it("URLSearchParams"),
  [aT, lT, uT, cT] = ["ReadableStream", "Request", "Response", "Headers"].map(
    it
  ),
  dT = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ci(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), fr(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = s.length;
    let a;
    for (r = 0; r < o; r++) (a = s[r]), t.call(null, e[a], a, e);
  }
}
function pg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const fn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  mg = (e) => !gi(e) && e !== fn;
function Ll() {
  const { caseless: e } = (mg(this) && this) || {},
    t = {},
    n = (r, i) => {
      const s = (e && pg(t, i)) || i;
      ms(t[s]) && ms(r)
        ? (t[s] = Ll(t[s], r))
        : ms(r)
        ? (t[s] = Ll({}, r))
        : fr(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Ci(arguments[r], n);
  return t;
}
const fT = (e, t, n, { allOwnKeys: r } = {}) => (
    Ci(
      t,
      (i, s) => {
        n && _e(i) ? (e[s] = dg(i, n)) : (e[s] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  hT = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  pT = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  mT = (e, t, n, r) => {
    let i, s, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (o = i[s]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && mc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  gT = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  yT = (e) => {
    if (!e) return null;
    if (fr(e)) return e;
    let t = e.length;
    if (!hg(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  vT = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && mc(Uint8Array)),
  xT = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  wT = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  ST = it("HTMLFormElement"),
  kT = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  th = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  TT = it("RegExp"),
  gg = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Ci(n, (i, s) => {
      let o;
      (o = t(i, s, e)) !== !1 && (r[s] = o || i);
    }),
      Object.defineProperties(e, r);
  },
  ET = (e) => {
    gg(e, (t, n) => {
      if (_e(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (_e(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  PT = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return fr(e) ? r(e) : r(String(e).split(t)), n;
  },
  CT = () => {},
  NT = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  ga = "abcdefghijklmnopqrstuvwxyz",
  nh = "0123456789",
  yg = { DIGIT: nh, ALPHA: ga, ALPHA_DIGIT: ga + ga.toUpperCase() + nh },
  jT = (e = 16, t = yg.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function AT(e) {
  return !!(
    e &&
    _e(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const RT = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (To(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const s = fr(r) ? [] : {};
            return (
              Ci(r, (o, a) => {
                const l = n(o, i + 1);
                !gi(l) && (s[a] = l);
              }),
              (t[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  MT = it("AsyncFunction"),
  LT = (e) => e && (To(e) || _e(e)) && _e(e.then) && _e(e.catch),
  vg = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          fn.addEventListener(
            "message",
            ({ source: i, data: s }) => {
              i === fn && s === n && r.length && r.shift()();
            },
            !1
          ),
          (i) => {
            r.push(i), fn.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    _e(fn.postMessage)
  ),
  bT =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(fn)
      : (typeof process < "u" && process.nextTick) || vg,
  k = {
    isArray: fr,
    isArrayBuffer: fg,
    isBuffer: Qk,
    isFormData: sT,
    isArrayBufferView: Yk,
    isString: Zk,
    isNumber: hg,
    isBoolean: Jk,
    isObject: To,
    isPlainObject: ms,
    isReadableStream: aT,
    isRequest: lT,
    isResponse: uT,
    isHeaders: cT,
    isUndefined: gi,
    isDate: eT,
    isFile: tT,
    isBlob: nT,
    isRegExp: TT,
    isFunction: _e,
    isStream: iT,
    isURLSearchParams: oT,
    isTypedArray: vT,
    isFileList: rT,
    forEach: Ci,
    merge: Ll,
    extend: fT,
    trim: dT,
    stripBOM: hT,
    inherits: pT,
    toFlatObject: mT,
    kindOf: So,
    kindOfTest: it,
    endsWith: gT,
    toArray: yT,
    forEachEntry: xT,
    matchAll: wT,
    isHTMLForm: ST,
    hasOwnProperty: th,
    hasOwnProp: th,
    reduceDescriptors: gg,
    freezeMethods: ET,
    toObjectSet: PT,
    toCamelCase: kT,
    noop: CT,
    toFiniteNumber: NT,
    findKey: pg,
    global: fn,
    isContextDefined: mg,
    ALPHABET: yg,
    generateString: jT,
    isSpecCompliantForm: AT,
    toJSONObject: RT,
    isAsyncFn: MT,
    isThenable: LT,
    setImmediate: vg,
    asap: bT,
  };
function _(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && ((this.response = i), (this.status = i.status ? i.status : null));
}
k.inherits(_, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: k.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const xg = _.prototype,
  wg = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  wg[e] = { value: e };
});
Object.defineProperties(_, wg);
Object.defineProperty(xg, "isAxiosError", { value: !0 });
_.from = (e, t, n, r, i, s) => {
  const o = Object.create(xg);
  return (
    k.toFlatObject(
      e,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    _.call(o, e.message, t, n, r, i),
    (o.cause = e),
    (o.name = e.name),
    s && Object.assign(o, s),
    o
  );
};
const DT = null;
function bl(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function Sg(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function rh(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = Sg(i)), !n && s ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function OT(e) {
  return k.isArray(e) && !e.some(bl);
}
const _T = k.toFlatObject(k, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Eo(e, t, n) {
  if (!k.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = k.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, w) {
        return !k.isUndefined(w[x]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    s = n.dots,
    o = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && k.isSpecCompliantForm(t);
  if (!k.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (k.isDate(v)) return v.toISOString();
    if (!l && k.isBlob(v))
      throw new _("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(v) || k.isTypedArray(v)
      ? l && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, x, w) {
    let m = v;
    if (v && !w && typeof v == "object") {
      if (k.endsWith(x, "{}"))
        (x = r ? x : x.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (k.isArray(v) && OT(v)) ||
        ((k.isFileList(v) || k.endsWith(x, "[]")) && (m = k.toArray(v)))
      )
        return (
          (x = Sg(x)),
          m.forEach(function (g, S) {
            !(k.isUndefined(g) || g === null) &&
              t.append(
                o === !0 ? rh([x], S, s) : o === null ? x : x + "[]",
                u(g)
              );
          }),
          !1
        );
    }
    return bl(v) ? !0 : (t.append(rh(w, x, s), u(v)), !1);
  }
  const d = [],
    f = Object.assign(_T, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: bl,
    });
  function y(v, x) {
    if (!k.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      d.push(v),
        k.forEach(v, function (m, p) {
          (!(k.isUndefined(m) || m === null) &&
            i.call(t, m, k.isString(p) ? p.trim() : p, x, f)) === !0 &&
            y(m, x ? x.concat(p) : [p]);
        }),
        d.pop();
    }
  }
  if (!k.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function ih(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function gc(e, t) {
  (this._pairs = []), e && Eo(e, this, t);
}
const kg = gc.prototype;
kg.append = function (t, n) {
  this._pairs.push([t, n]);
};
kg.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, ih);
      }
    : ih;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function VT(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Tg(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || VT;
  k.isFunction(n) && (n = { serialize: n });
  const i = n && n.serialize;
  let s;
  if (
    (i
      ? (s = i(t, n))
      : (s = k.isURLSearchParams(t) ? t.toString() : new gc(t, n).toString(r)),
    s)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class sh {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    k.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Eg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  FT = typeof URLSearchParams < "u" ? URLSearchParams : gc,
  IT = typeof FormData < "u" ? FormData : null,
  BT = typeof Blob < "u" ? Blob : null,
  zT = {
    isBrowser: !0,
    classes: { URLSearchParams: FT, FormData: IT, Blob: BT },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  yc = typeof window < "u" && typeof document < "u",
  Dl = (typeof navigator == "object" && navigator) || void 0,
  UT =
    yc &&
    (!Dl || ["ReactNative", "NativeScript", "NS"].indexOf(Dl.product) < 0),
  HT =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  $T = (yc && window.location.href) || "http://localhost",
  WT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: yc,
        hasStandardBrowserEnv: UT,
        hasStandardBrowserWebWorkerEnv: HT,
        navigator: Dl,
        origin: $T,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  xe = { ...WT, ...zT };
function KT(e, t) {
  return Eo(
    e,
    new xe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, s) {
          return xe.isNode && k.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function GT(e) {
  return k
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function XT(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function Pg(e) {
  function t(n, r, i, s) {
    let o = n[s++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      l = s >= n.length;
    return (
      (o = !o && k.isArray(i) ? i.length : o),
      l
        ? (k.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a)
        : ((!i[o] || !k.isObject(i[o])) && (i[o] = []),
          t(n, r, i[o], s) && k.isArray(i[o]) && (i[o] = XT(i[o])),
          !a)
    );
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const n = {};
    return (
      k.forEachEntry(e, (r, i) => {
        t(GT(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function qT(e, t, n) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const Ni = {
  transitional: Eg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = k.isObject(t);
      if ((s && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)))
        return i ? JSON.stringify(Pg(t)) : t;
      if (
        k.isArrayBuffer(t) ||
        k.isBuffer(t) ||
        k.isStream(t) ||
        k.isFile(t) ||
        k.isBlob(t) ||
        k.isReadableStream(t)
      )
        return t;
      if (k.isArrayBufferView(t)) return t.buffer;
      if (k.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return KT(t, this.formSerializer).toString();
        if ((a = k.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Eo(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), qT(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ni.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (k.isResponse(t) || k.isReadableStream(t)) return t;
      if (t && k.isString(t) && ((r && !this.responseType) || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? _.from(a, _.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: xe.classes.FormData, Blob: xe.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ni.headers[e] = {};
});
const QT = k.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  YT = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (n = o.substring(0, i).trim().toLowerCase()),
              (r = o.substring(i + 1).trim()),
              !(!n || (t[n] && QT[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  oh = Symbol("internals");
function Pr(e) {
  return e && String(e).trim().toLowerCase();
}
function gs(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(gs) : String(e);
}
function ZT(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const JT = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ya(e, t, n, r, i) {
  if (k.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!k.isString(t))) {
    if (k.isString(r)) return t.indexOf(r) !== -1;
    if (k.isRegExp(r)) return r.test(t);
  }
}
function eE(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function tE(e, t) {
  const n = k.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, s, o) {
        return this[r].call(this, t, i, s, o);
      },
      configurable: !0,
    });
  });
}
class Le {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(a, l, u) {
      const c = Pr(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = k.findKey(i, c);
      (!d || i[d] === void 0 || u === !0 || (u === void 0 && i[d] !== !1)) &&
        (i[d || l] = gs(a));
    }
    const o = (a, l) => k.forEach(a, (u, c) => s(u, c, l));
    if (k.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (k.isString(t) && (t = t.trim()) && !JT(t)) o(YT(t), n);
    else if (k.isHeaders(t)) for (const [a, l] of t.entries()) s(l, a, r);
    else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Pr(t)), t)) {
      const r = k.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return ZT(i);
        if (k.isFunction(n)) return n.call(this, i, r);
        if (k.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Pr(t)), t)) {
      const r = k.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ya(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (((o = Pr(o)), o)) {
        const a = k.findKey(r, o);
        a && (!n || ya(r, r[a], a, n)) && (delete r[a], (i = !0));
      }
    }
    return k.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || ya(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      k.forEach(this, (i, s) => {
        const o = k.findKey(r, s);
        if (o) {
          (n[o] = gs(i)), delete n[s];
          return;
        }
        const a = t ? eE(s) : String(s).trim();
        a !== s && delete n[s], (n[a] = gs(i)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      k.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && k.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[oh] = this[oh] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(o) {
      const a = Pr(o);
      r[a] || (tE(i, o), (r[a] = !0));
    }
    return k.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Le.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
k.reduceDescriptors(Le.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
k.freezeMethods(Le);
function va(e, t) {
  const n = this || Ni,
    r = t || n,
    i = Le.from(r.headers);
  let s = r.data;
  return (
    k.forEach(e, function (a) {
      s = a.call(n, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function Cg(e) {
  return !!(e && e.__CANCEL__);
}
function hr(e, t, n) {
  _.call(this, e ?? "canceled", _.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
k.inherits(hr, _, { __CANCEL__: !0 });
function Ng(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new _(
          "Request failed with status code " + n.status,
          [_.ERR_BAD_REQUEST, _.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function nE(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function rE(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    s = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[s];
      o || (o = u), (n[i] = l), (r[i] = u);
      let d = s,
        f = 0;
      for (; d !== i; ) (f += n[d++]), (d = d % e);
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), u - o < t)) return;
      const y = c && u - c;
      return y ? Math.round((f * 1e3) / y) : void 0;
    }
  );
}
function iE(e, t) {
  let n = 0,
    r = 1e3 / t,
    i,
    s;
  const o = (u, c = Date.now()) => {
    (n = c), (i = null), s && (clearTimeout(s), (s = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const c = Date.now(),
        d = c - n;
      d >= r
        ? o(u, c)
        : ((i = u),
          s ||
            (s = setTimeout(() => {
              (s = null), o(i);
            }, r - d)));
    },
    () => i && o(i),
  ];
}
const Qs = (e, t, n = 3) => {
    let r = 0;
    const i = rE(50, 250);
    return iE((s) => {
      const o = s.loaded,
        a = s.lengthComputable ? s.total : void 0,
        l = o - r,
        u = i(l),
        c = o <= a;
      r = o;
      const d = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: l,
        rate: u || void 0,
        estimated: u && a && c ? (a - o) / u : void 0,
        event: s,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  ah = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  lh =
    (e) =>
    (...t) =>
      k.asap(() => e(...t)),
  sE = xe.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, xe.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(xe.origin),
        xe.navigator && /(msie|trident)/i.test(xe.navigator.userAgent)
      )
    : () => !0,
  oE = xe.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, s) {
          const o = [e + "=" + encodeURIComponent(t)];
          k.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            k.isString(r) && o.push("path=" + r),
            k.isString(i) && o.push("domain=" + i),
            s === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function aE(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function lE(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function jg(e, t) {
  return e && !aE(t) ? lE(e, t) : t;
}
const uh = (e) => (e instanceof Le ? { ...e } : e);
function Tn(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d, f) {
    return k.isPlainObject(u) && k.isPlainObject(c)
      ? k.merge.call({ caseless: f }, u, c)
      : k.isPlainObject(c)
      ? k.merge({}, c)
      : k.isArray(c)
      ? c.slice()
      : c;
  }
  function i(u, c, d, f) {
    if (k.isUndefined(c)) {
      if (!k.isUndefined(u)) return r(void 0, u, d, f);
    } else return r(u, c, d, f);
  }
  function s(u, c) {
    if (!k.isUndefined(c)) return r(void 0, c);
  }
  function o(u, c) {
    if (k.isUndefined(c)) {
      if (!k.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (u, c, d) => i(uh(u), uh(c), d, !0),
  };
  return (
    k.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = l[c] || i,
        f = d(e[c], t[c], c);
      (k.isUndefined(f) && d !== a) || (n[c] = f);
    }),
    n
  );
}
const Ag = (e) => {
    const t = Tn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: s,
      headers: o,
      auth: a,
    } = t;
    (t.headers = o = Le.from(o)),
      (t.url = Tg(jg(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let l;
    if (k.isFormData(n)) {
      if (xe.hasStandardBrowserEnv || xe.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((l = o.getContentType()) !== !1) {
        const [u, ...c] = l
          ? l
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        o.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      xe.hasStandardBrowserEnv &&
      (r && k.isFunction(r) && (r = r(t)), r || (r !== !1 && sE(t.url)))
    ) {
      const u = i && s && oE.read(s);
      u && o.set(i, u);
    }
    return t;
  },
  uE = typeof XMLHttpRequest < "u",
  cE =
    uE &&
    function (e) {
      return new Promise(function (n, r) {
        const i = Ag(e);
        let s = i.data;
        const o = Le.from(i.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = i,
          c,
          d,
          f,
          y,
          v;
        function x() {
          y && y(),
            v && v(),
            i.cancelToken && i.cancelToken.unsubscribe(c),
            i.signal && i.signal.removeEventListener("abort", c);
        }
        let w = new XMLHttpRequest();
        w.open(i.method.toUpperCase(), i.url, !0), (w.timeout = i.timeout);
        function m() {
          if (!w) return;
          const g = Le.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders()
            ),
            T = {
              data:
                !a || a === "text" || a === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: g,
              config: e,
              request: w,
            };
          Ng(
            function (N) {
              n(N), x();
            },
            function (N) {
              r(N), x();
            },
            T
          ),
            (w = null);
        }
        "onloadend" in w
          ? (w.onloadend = m)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(m);
            }),
          (w.onabort = function () {
            w &&
              (r(new _("Request aborted", _.ECONNABORTED, e, w)), (w = null));
          }),
          (w.onerror = function () {
            r(new _("Network Error", _.ERR_NETWORK, e, w)), (w = null);
          }),
          (w.ontimeout = function () {
            let S = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const T = i.transitional || Eg;
            i.timeoutErrorMessage && (S = i.timeoutErrorMessage),
              r(
                new _(
                  S,
                  T.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED,
                  e,
                  w
                )
              ),
              (w = null);
          }),
          s === void 0 && o.setContentType(null),
          "setRequestHeader" in w &&
            k.forEach(o.toJSON(), function (S, T) {
              w.setRequestHeader(T, S);
            }),
          k.isUndefined(i.withCredentials) ||
            (w.withCredentials = !!i.withCredentials),
          a && a !== "json" && (w.responseType = i.responseType),
          u && (([f, v] = Qs(u, !0)), w.addEventListener("progress", f)),
          l &&
            w.upload &&
            (([d, y] = Qs(l)),
            w.upload.addEventListener("progress", d),
            w.upload.addEventListener("loadend", y)),
          (i.cancelToken || i.signal) &&
            ((c = (g) => {
              w &&
                (r(!g || g.type ? new hr(null, e, w) : g),
                w.abort(),
                (w = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(c),
            i.signal &&
              (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
        const p = nE(i.url);
        if (p && xe.protocols.indexOf(p) === -1) {
          r(new _("Unsupported protocol " + p + ":", _.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(s || null);
      });
    },
  dE = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        i;
      const s = function (u) {
        if (!i) {
          (i = !0), a();
          const c = u instanceof Error ? u : this.reason;
          r.abort(
            c instanceof _ ? c : new hr(c instanceof Error ? c.message : c)
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), s(new _(`timeout ${t} of ms exceeded`, _.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(s)
              : u.removeEventListener("abort", s);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", s));
      const { signal: l } = r;
      return (l.unsubscribe = () => k.asap(a)), l;
    }
  },
  fE = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  hE = async function* (e, t) {
    for await (const n of pE(e)) yield* fE(n, t);
  },
  pE = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  ch = (e, t, n, r) => {
    const i = hE(e, t);
    let s = 0,
      o,
      a = (l) => {
        o || ((o = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: u, value: c } = await i.next();
            if (u) {
              a(), l.close();
              return;
            }
            let d = c.byteLength;
            if (n) {
              let f = (s += d);
              n(f);
            }
            l.enqueue(new Uint8Array(c));
          } catch (u) {
            throw (a(u), u);
          }
        },
        cancel(l) {
          return a(l), i.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Po =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Rg = Po && typeof ReadableStream == "function",
  mE =
    Po &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Mg = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  gE =
    Rg &&
    Mg(() => {
      let e = !1;
      const t = new Request(xe.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  dh = 64 * 1024,
  Ol = Rg && Mg(() => k.isReadableStream(new Response("").body)),
  Ys = { stream: Ol && ((e) => e.body) };
Po &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Ys[t] &&
        (Ys[t] = k.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new _(
                `Response type '${t}' is not supported`,
                _.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const yE = async (e) => {
    if (e == null) return 0;
    if (k.isBlob(e)) return e.size;
    if (k.isSpecCompliantForm(e))
      return (
        await new Request(xe.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (k.isArrayBufferView(e) || k.isArrayBuffer(e)) return e.byteLength;
    if ((k.isURLSearchParams(e) && (e = e + ""), k.isString(e)))
      return (await mE(e)).byteLength;
  },
  vE = async (e, t) => {
    const n = k.toFiniteNumber(e.getContentLength());
    return n ?? yE(t);
  },
  xE =
    Po &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: s,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: u,
        headers: c,
        withCredentials: d = "same-origin",
        fetchOptions: f,
      } = Ag(e);
      u = u ? (u + "").toLowerCase() : "text";
      let y = dE([i, s && s.toAbortSignal()], o),
        v;
      const x =
        y &&
        y.unsubscribe &&
        (() => {
          y.unsubscribe();
        });
      let w;
      try {
        if (
          l &&
          gE &&
          n !== "get" &&
          n !== "head" &&
          (w = await vE(c, r)) !== 0
        ) {
          let T = new Request(t, { method: "POST", body: r, duplex: "half" }),
            P;
          if (
            (k.isFormData(r) &&
              (P = T.headers.get("content-type")) &&
              c.setContentType(P),
            T.body)
          ) {
            const [N, E] = ah(w, Qs(lh(l)));
            r = ch(T.body, dh, N, E);
          }
        }
        k.isString(d) || (d = d ? "include" : "omit");
        const m = "credentials" in Request.prototype;
        v = new Request(t, {
          ...f,
          signal: y,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: m ? d : void 0,
        });
        let p = await fetch(v);
        const g = Ol && (u === "stream" || u === "response");
        if (Ol && (a || (g && x))) {
          const T = {};
          ["status", "statusText", "headers"].forEach((V) => {
            T[V] = p[V];
          });
          const P = k.toFiniteNumber(p.headers.get("content-length")),
            [N, E] = (a && ah(P, Qs(lh(a), !0))) || [];
          p = new Response(
            ch(p.body, dh, N, () => {
              E && E(), x && x();
            }),
            T
          );
        }
        u = u || "text";
        let S = await Ys[k.findKey(Ys, u) || "text"](p, e);
        return (
          !g && x && x(),
          await new Promise((T, P) => {
            Ng(T, P, {
              data: S,
              headers: Le.from(p.headers),
              status: p.status,
              statusText: p.statusText,
              config: e,
              request: v,
            });
          })
        );
      } catch (m) {
        throw (
          (x && x(),
          m && m.name === "TypeError" && /fetch/i.test(m.message)
            ? Object.assign(new _("Network Error", _.ERR_NETWORK, e, v), {
                cause: m.cause || m,
              })
            : _.from(m, m && m.code, e, v))
        );
      }
    }),
  _l = { http: DT, xhr: cE, fetch: xE };
k.forEach(_l, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const fh = (e) => `- ${e}`,
  wE = (e) => k.isFunction(e) || e === null || e === !1,
  Lg = {
    getAdapter: (e) => {
      e = k.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let o;
        if (
          ((r = n),
          !wE(n) && ((r = _l[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new _(`Unknown adapter '${o}'`);
        if (r) break;
        i[o || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(i).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? s.length > 1
            ? `since :
` +
              s.map(fh).join(`
`)
            : " " + fh(s[0])
          : "as no adapter specified";
        throw new _(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: _l,
  };
function xa(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new hr(null, e);
}
function hh(e) {
  return (
    xa(e),
    (e.headers = Le.from(e.headers)),
    (e.data = va.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Lg.getAdapter(e.adapter || Ni.adapter)(e).then(
      function (r) {
        return (
          xa(e),
          (r.data = va.call(e, e.transformResponse, r)),
          (r.headers = Le.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Cg(r) ||
            (xa(e),
            r &&
              r.response &&
              ((r.response.data = va.call(e, e.transformResponse, r.response)),
              (r.response.headers = Le.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const bg = "1.7.9",
  Co = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Co[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const ph = {};
Co.transitional = function (t, n, r) {
  function i(s, o) {
    return (
      "[Axios v" +
      bg +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (s, o, a) => {
    if (t === !1)
      throw new _(
        i(o, " has been removed" + (n ? " in " + n : "")),
        _.ERR_DEPRECATED
      );
    return (
      n &&
        !ph[o] &&
        ((ph[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, o, a) : !0
    );
  };
};
Co.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function SE(e, t, n) {
  if (typeof e != "object")
    throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      o = t[s];
    if (o) {
      const a = e[s],
        l = a === void 0 || o(a, s, e);
      if (l !== !0)
        throw new _("option " + s + " must be " + l, _.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new _("Unknown option " + s, _.ERR_BAD_OPTION);
  }
}
const ys = { assertOptions: SE, validators: Co },
  ot = ys.validators;
class gn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new sh(), response: new sh() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(i)
          : (i = new Error());
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? s &&
              !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + s)
            : (r.stack = s);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Tn(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      ys.assertOptions(
        r,
        {
          silentJSONParsing: ot.transitional(ot.boolean),
          forcedJSONParsing: ot.transitional(ot.boolean),
          clarifyTimeoutError: ot.transitional(ot.boolean),
        },
        !1
      ),
      i != null &&
        (k.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : ys.assertOptions(
              i,
              { encode: ot.function, serialize: ot.function },
              !0
            )),
      ys.assertOptions(
        n,
        {
          baseUrl: ot.spelling("baseURL"),
          withXsrfToken: ot.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = s && k.merge(s.common, s[n.method]);
    s &&
      k.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete s[v];
        }
      ),
      (n.headers = Le.concat(o, s));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == "function" && x.runWhen(n) === !1) ||
        ((l = l && x.synchronous), a.unshift(x.fulfilled, x.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (x) {
      u.push(x.fulfilled, x.rejected);
    });
    let c,
      d = 0,
      f;
    if (!l) {
      const v = [hh.bind(this), void 0];
      for (
        v.unshift.apply(v, a),
          v.push.apply(v, u),
          f = v.length,
          c = Promise.resolve(n);
        d < f;

      )
        c = c.then(v[d++], v[d++]);
      return c;
    }
    f = a.length;
    let y = n;
    for (d = 0; d < f; ) {
      const v = a[d++],
        x = a[d++];
      try {
        y = v(y);
      } catch (w) {
        x.call(this, w);
        break;
      }
    }
    try {
      c = hh.call(this, y);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, f = u.length; d < f; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Tn(this.defaults, t);
    const n = jg(t.baseURL, t.url);
    return Tg(n, t.params, t.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function (t) {
  gn.prototype[t] = function (n, r) {
    return this.request(
      Tn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
k.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, o, a) {
      return this.request(
        Tn(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        })
      );
    };
  }
  (gn.prototype[t] = n()), (gn.prototype[t + "Form"] = n(!0));
});
class vc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const o = new Promise((a) => {
          r.subscribe(a), (s = a);
        }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(s);
          }),
          o
        );
      }),
      t(function (s, o, a) {
        r.reason || ((r.reason = new hr(s, o, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new vc(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function kE(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function TE(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const Vl = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Vl).forEach(([e, t]) => {
  Vl[t] = e;
});
function Dg(e) {
  const t = new gn(e),
    n = dg(gn.prototype.request, t);
  return (
    k.extend(n, gn.prototype, t, { allOwnKeys: !0 }),
    k.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Dg(Tn(e, i));
    }),
    n
  );
}
const re = Dg(Ni);
re.Axios = gn;
re.CanceledError = hr;
re.CancelToken = vc;
re.isCancel = Cg;
re.VERSION = bg;
re.toFormData = Eo;
re.AxiosError = _;
re.Cancel = re.CanceledError;
re.all = function (t) {
  return Promise.all(t);
};
re.spread = kE;
re.isAxiosError = TE;
re.mergeConfig = Tn;
re.AxiosHeaders = Le;
re.formToJSON = (e) => Pg(k.isHTMLForm(e) ? new FormData(e) : e);
re.getAdapter = Lg.getAdapter;
re.HttpStatusCode = Vl;
re.default = re;
const EE = "107597138954478",
  PE =
    "EAAHSxuoIJSYBO94uWNu2sBsrF8G4XT8VTgw7GZAMtLIkwDihXxBkIcbDwpRtNSmUlitjdErIhxcop0oo0l5nwp9eimalqaok5xN1rL1cwmDnlN2RUfDH59BBmZBvFqfrf9Q5pQOndHNTUGpOPZCx5bbDgvMjTsAdCAknMJkv8WZC0e92ZCuOcEoWtcyFZAOjcZD",
  CE = async () => {
    try {
      return (
        await re.get(
          `https://graph.facebook.com/${EE}/posts?fields=id,message,created_time,full_picture,permalink_url&access_token=${PE}`
        )
      ).data.data;
    } catch (e) {
      return console.error("Error fetching Facebook posts:", e), [];
    }
  },
  NE = () => {
    const [e, t] = Nn({ triggerOnce: !0, threshold: 0.1 }),
      [n, r] = M.useState([]),
      { t: i } = mt();
    M.useEffect(() => {
      (async () => {
        const d = await CE();
        console.log(d), r(d);
      })();
    }, []);
    const s = (c) => {
        const d = { year: "numeric", month: "long", day: "numeric" };
        return new Date(c).toLocaleDateString(void 0, d);
      },
      o = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      },
      a = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      },
      l = Yg.useRef(null),
      u = (c) => {
        if (l.current) {
          const d = c === "left" ? -400 : 400;
          l.current.scrollBy({ left: d, behavior: "smooth" });
        }
      };
    return h.jsx("section", {
      id: "gallery",
      className: "py-20 bg-gradient-to-b from-eco-50 to-white",
      children: h.jsxs(A.div, {
        ref: e,
        initial: "hidden",
        animate: t ? "visible" : "hidden",
        variants: o,
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          h.jsxs(A.div, {
            variants: a,
            className: "text-center mb-16",
            children: [
              h.jsx(A.div, {
                initial: { opacity: 0, scale: 0.5 },
                animate: t
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 },
                transition: { duration: 0.5 },
                className: "flex items-center justify-center mb-4",
                children: h.jsx(Us, { className: "w-12 h-12 text-[#1877F2]" }),
              }),
              h.jsx("h2", {
                className: "text-3xl font-bold text-gray-900 sm:text-4xl mb-4",
                children: i("gallery.title"),
              }),
            ],
          }),
          h.jsxs("div", {
            className: "relative",
            children: [
              h.jsx("button", {
                onClick: () => u("left"),
                className:
                  "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110",
                children: h.jsx(h1, { className: "w-6 h-6 text-eco-600" }),
              }),
              h.jsx("button", {
                onClick: () => u("right"),
                className:
                  "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110",
                children: h.jsx(p1, { className: "w-6 h-6 text-eco-600" }),
              }),
              h.jsx(A.div, {
                ref: l,
                variants: o,
                className:
                  "overflow-x-auto flex gap-6 pb-6 snap-x snap-mandatory scroll-smooth hide-scrollbar",
                style: { scrollbarWidth: "none", msOverflowStyle: "none" },
                children: n.map((c) =>
                  h.jsxs(
                    A.a,
                    {
                      href: c.permalink_url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      variants: a,
                      whileHover: { y: -8, scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      className:
                        "flex-none w-[350px] snap-center bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl group",
                      children: [
                        h.jsxs("div", {
                          className: "relative h-48 overflow-hidden",
                          children: [
                            h.jsx("img", {
                              src: c.full_picture,
                              alt: "Post",
                              className:
                                "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500",
                            }),
                            h.jsx("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "p-6",
                          children: [
                            h.jsxs("div", {
                              className: "flex items-center space-x-2 mb-4",
                              children: [
                                h.jsx("div", {
                                  className:
                                    "w-14 h-14 rounded-full bg-[#ffffff] flex items-center justify-center",
                                  children: h.jsx("img", {
                                    src: cg,
                                    alt: "logo",
                                    className: "w-auto h-14  overflow-hidden",
                                  }),
                                }),
                                h.jsx("span", {
                                  className:
                                    "text-sm font-medium text-gray-900",
                                  children: "300Riel 300Derm",
                                }),
                              ],
                            }),
                            h.jsx("p", {
                              className:
                                "text-gray-700 line-clamp-3 mb-4 group-hover:text-eco-700 transition-colors",
                              children: c.message,
                            }),
                            h.jsxs("div", {
                              className:
                                "flex items-center space-x-2 text-gray-500 mb-4",
                              children: [
                                h.jsx(f1, { className: "w-4 h-4" }),
                                h.jsx("span", {
                                  className: "text-sm",
                                  children: s(c.created_time),
                                }),
                              ],
                            }),
                            h.jsx("div", {
                              className:
                                "flex justify-end pt-4 border-t border-gray-100",
                              children: h.jsx(Ad, {
                                className:
                                  "w-4 h-4 text-eco-600 transform group-hover:translate-x-1 transition-transform",
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    c.id
                  )
                ),
              }),
            ],
          }),
          h.jsx(A.div, {
            variants: a,
            className: "mt-12 text-center",
            children: h.jsxs(A.a, {
              href: "https://web.facebook.com/profile.php?id=100091407241732",
              target: "_blank",
              rel: "noopener noreferrer",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className:
                "inline-flex items-center px-8 py-3 bg-[#1877F2] hover:bg-[#1664d9] text-white font-semibold rounded-lg transition-colors group",
              children: [
                h.jsx(Us, { className: "mr-2", size: 20 }),
                i("gallery.viewMore"),
                h.jsx(Ad, {
                  className:
                    "ml-2 w-4 h-4 transition-transform group-hover:translate-x-1",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  jE = () => {
    const [e, t] = Nn({ triggerOnce: !0, threshold: 0.1 }),
      { t: n } = mt(),
      r = [
        { name: "N/A1", icon: b1, description: "Ot mean2" },
        { name: "N/A2", icon: k1, description: "Ot mean2" },
        { name: "N/A3", icon: fl, description: "Ot mean3" },
        { name: "N/A4", icon: j1, description: "Ot mean4" },
        { name: "N/A5", icon: x1, description: "Ot mean5" },
        { name: "N/A6", icon: jm, description: "Ot mean6" },
      ],
      i = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      },
      s = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      },
      o = () => {
        const a = document.getElementById("contact");
        a && a.scrollIntoView({ behavior: "smooth" });
      };
    return h.jsx("section", {
      className: "py-20 bg-gradient-to-b from-eco-50 to-white",
      children: h.jsxs(A.div, {
        ref: e,
        initial: "hidden",
        animate: t ? "visible" : "hidden",
        variants: i,
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          h.jsxs(A.div, {
            variants: s,
            className: "text-center mb-16",
            children: [
              h.jsx(A.div, {
                initial: { opacity: 0, scale: 0.5 },
                animate: t
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 },
                transition: { duration: 0.5 },
                className: "flex items-center justify-center mb-4",
                children: h.jsx(Am, { className: "w-12 h-12 text-eco-600" }),
              }),
              h.jsx("h2", {
                className: "text-3xl font-bold text-gray-900 sm:text-4xl mb-4",
                children: n("sponsors.title"),
              }),
              h.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children: n("sponsors.subtitle"),
              }),
            ],
          }),
          h.jsxs(A.div, {
            variants: i,
            className: "relative mb-16",
            children: [
              h.jsx("div", {
                className:
                  "overflow-x-auto pb-6 -mx-4 px-4 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
                children: h.jsx("div", {
                  className:
                    "flex flex-nowrap sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 min-w-max sm:min-w-0",
                  children: r.map((a) =>
                    h.jsx(
                      A.div,
                      {
                        variants: s,
                        whileHover: { scale: 1.02 },
                        className: "w-72 sm:w-auto flex-shrink-0",
                        children: h.jsx("div", {
                          className:
                            "bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full",
                          children: h.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [
                              h.jsx("div", {
                                className:
                                  "w-16 h-16 rounded-xl bg-gradient-to-br from-eco-500 to-eco-600 p-3 shadow-lg",
                                children: h.jsx(a.icon, {
                                  className: "w-full h-full text-white",
                                }),
                              }),
                              h.jsxs("div", {
                                children: [
                                  h.jsx("h4", {
                                    className:
                                      "text-lg font-semibold text-gray-900",
                                    children: a.name,
                                  }),
                                  h.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: a.description,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      },
                      a.name
                    )
                  ),
                }),
              }),
              h.jsx("div", {
                className: "sm:hidden mt-4 flex justify-center",
                children: h.jsx("div", {
                  className: "space-x-1",
                  children: [...Array(3)].map((a, l) =>
                    h.jsx(
                      "span",
                      {
                        className:
                          "inline-block w-2 h-2 rounded-full bg-eco-200",
                      },
                      l
                    )
                  ),
                }),
              }),
            ],
          }),
          h.jsx(A.div, {
            variants: s,
            className: "text-center",
            children: h.jsxs("div", {
              className:
                "bg-gradient-to-br from-eco-50 to-earth-50 rounded-2xl p-8 shadow-lg border border-eco-100",
              children: [
                h.jsx("h3", {
                  className: "text-2xl font-bold text-gray-900 mb-4",
                  children: n("sponsors.partnerWithUs"),
                }),
                h.jsx("p", {
                  className: "text-gray-600 mb-6 max-w-2xl mx-auto",
                  children: n("sponsors.subtitle"),
                }),
                h.jsxs(A.button, {
                  onClick: o,
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  className:
                    "inline-flex items-center px-6 py-3 bg-eco-600 text-white rounded-lg font-semibold shadow-lg hover:bg-eco-700 transition-all duration-300",
                  children: [
                    h.jsx(w1, { className: "mr-2 w-5 h-5" }),
                    n("sponsors.becomePartner"),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  AE = "/300Riel300DermV5/assets/Aba-xGaJyPLm.jpg",
  RE = () => {
    const [e, t] = Nn({ triggerOnce: !0, threshold: 0.1 }),
      { t: n } = mt(),
      r = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, staggerChildren: 0.2 },
        },
      },
      i = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };
    return h.jsx("section", {
      id: "donate",
      className: "py-20 bg-gradient-to-b from-eco-50 via-white to-eco-50",
      children: h.jsxs(A.div, {
        ref: e,
        initial: "hidden",
        animate: t ? "visible" : "hidden",
        variants: r,
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          h.jsxs(A.div, {
            variants: i,
            className: "text-center mb-16",
            children: [
              h.jsx("h2", {
                className: "text-3xl font-bold text-gray-900 sm:text-4xl",
                children: n("donate.title"),
              }),
              h.jsx("p", {
                className: "mt-4 text-xl text-gray-600",
                children: n("donate.subtitle"),
              }),
            ],
          }),
          h.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
            children: [
              h.jsxs(A.div, {
                variants: i,
                className: "bg-white rounded-2xl shadow-xl p-8",
                children: [
                  h.jsx("h3", {
                    className: "text-2xl font-semibold mb-6 text-gray-900",
                    children: n("donate.why"),
                  }),
                  h.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      h.jsx("div", {
                        className: "bg-eco-50 rounded-lg p-6",
                        children: h.jsxs("ul", {
                          className: "space-y-4 text-gray-600",
                          children: [
                            h.jsxs("li", {
                              className: "flex items-center space-x-3",
                              children: [
                                h.jsx("span", {
                                  className: "text-2xl",
                                  children: "🌱",
                                }),
                                h.jsxs("div", {
                                  children: [
                                    h.jsx("h4", {
                                      className: "font-medium text-gray-900",
                                      children: n("donate.impact.info1.header"),
                                    }),
                                    h.jsx("p", {
                                      children: n("donate.impact.info1"),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            h.jsxs("li", {
                              className: "flex items-center space-x-3",
                              children: [
                                h.jsx("span", {
                                  className: "text-2xl",
                                  children: "🎓",
                                }),
                                h.jsxs("div", {
                                  children: [
                                    h.jsx("h4", {
                                      className: "font-medium text-gray-900",
                                      children: n("donate.impact.info2.header"),
                                    }),
                                    h.jsx("p", {
                                      children: n("donate.impact.info2"),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            h.jsxs("li", {
                              className: "flex items-center space-x-3",
                              children: [
                                h.jsx("span", {
                                  className: "text-2xl",
                                  children: "🤝",
                                }),
                                h.jsxs("div", {
                                  children: [
                                    h.jsx("h4", {
                                      className: "font-medium text-gray-900",
                                      children: n("donate.impact.info3.header"),
                                    }),
                                    h.jsx("p", {
                                      children: n("donate.impact.info3"),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            h.jsxs("li", {
                              className: "flex items-center space-x-3",
                              children: [
                                h.jsx("span", {
                                  className: "text-2xl",
                                  children: "🌍",
                                }),
                                h.jsxs("div", {
                                  children: [
                                    h.jsx("h4", {
                                      className: "font-medium text-gray-900",
                                      children: n("donate.impact.info4.header"),
                                    }),
                                    h.jsx("p", {
                                      children: n("donate.impact.info4"),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      h.jsxs("div", {
                        className: "bg-earth-50 rounded-lg p-6",
                        children: [
                          h.jsx("h4", {
                            className: "font-medium text-gray-900 mb-3",
                            children: n("donate.impact"),
                          }),
                          h.jsx("p", {
                            className: "text-gray-600",
                            children: n("donate.impact.appreciation"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              h.jsxs(A.div, {
                variants: i,
                className: "bg-white rounded-2xl shadow-xl p-8",
                children: [
                  h.jsx("h3", {
                    className: "text-2xl font-semibold mb-6 text-gray-900",
                    children: n("donate.payment"),
                  }),
                  h.jsx("div", {
                    className: "space-y-6",
                    children: h.jsxs("div", {
                      className: "border-2 border-eco-100 rounded-xl p-6",
                      children: [
                        h.jsxs("div", {
                          className: "flex items-center mb-4",
                          children: [
                            h.jsx(R1, {
                              className: "w-6 h-6 text-eco-600 mr-2",
                            }),
                            h.jsx("h4", {
                              className: "text-lg font-medium text-gray-900",
                              children: n("donate.mobile"),
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className:
                            "flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 mb-4",
                          children: [
                            h.jsx("img", {
                              src: AE,
                              alt: "ABA QR Code",
                              className: "w-auto h-auto mb-2 rounded-lg",
                            }),
                            h.jsx("p", {
                              className: "text-sm text-gray-500 text-center",
                              children: "Scan QR code to make payment",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            h.jsxs("div", {
                              className:
                                "flex items-center justify-between text-sm",
                              children: [
                                h.jsx("span", {
                                  className: "text-gray-600",
                                  children: "Account Name:",
                                }),
                                h.jsx("span", {
                                  className: "font-medium text-gray-900",
                                  children: "300Riel 300Derm",
                                }),
                              ],
                            }),
                            h.jsxs("div", {
                              className:
                                "flex items-center justify-between text-sm",
                              children: [
                                h.jsx("span", {
                                  className: "text-gray-600",
                                  children: "Account Number:",
                                }),
                                h.jsx("span", {
                                  className: "font-medium text-gray-900",
                                  children: "XXXX-XXXX-XXXX",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  h.jsxs(A.button, {
                    variants: i,
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className:
                      "w-full mt-8 flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-eco-600 hover:bg-eco-700",
                    children: [
                      h.jsx(di, { className: "mr-2", size: 20 }),
                      n("donate.complete"),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  ME = () => {
    const [e, t] = Nn({ triggerOnce: !0, threshold: 0.1 }),
      { t: n } = mt(),
      r = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, staggerChildren: 0.2 },
        },
      },
      i = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };
    return h.jsx("section", {
      id: "contact",
      className: "py-20 bg-white",
      children: h.jsxs(A.div, {
        ref: e,
        initial: "hidden",
        animate: t ? "visible" : "hidden",
        variants: r,
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          h.jsxs(A.div, {
            variants: i,
            className: "text-center mb-16",
            children: [
              h.jsx("h2", {
                className: "text-3xl font-bold text-gray-900 sm:text-4xl",
                children: n("contact.title"),
              }),
              h.jsx("p", {
                className: "mt-4 text-xl text-gray-600",
                children: n("contact.subtitle"),
              }),
            ],
          }),
          h.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-12",
            children: [
              h.jsx(A.div, {
                variants: i,
                className: "bg-gray-50 p-8 rounded-lg",
                children: h.jsxs("form", {
                  className: "space-y-6",
                  children: [
                    h.jsxs(A.div, {
                      variants: i,
                      children: [
                        h.jsx("label", {
                          htmlFor: "name",
                          className: "block text-sm font-medium text-gray-700",
                          children: n("contact.name"),
                        }),
                        h.jsx(A.input, {
                          whileFocus: { scale: 1.01 },
                          type: "text",
                          id: "name",
                          className:
                            "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-500 focus:ring-eco-500",
                        }),
                      ],
                    }),
                    h.jsxs(A.div, {
                      variants: i,
                      children: [
                        h.jsx("label", {
                          htmlFor: "email",
                          className: "block text-sm font-medium text-gray-700",
                          children: n("contact.email"),
                        }),
                        h.jsx(A.input, {
                          whileFocus: { scale: 1.01 },
                          type: "email",
                          id: "email",
                          className:
                            "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-500 focus:ring-eco-500",
                        }),
                      ],
                    }),
                    h.jsxs(A.div, {
                      variants: i,
                      children: [
                        h.jsx("label", {
                          htmlFor: "message",
                          className: "block text-sm font-medium text-gray-700",
                          children: n("contact.message"),
                        }),
                        h.jsx(A.textarea, {
                          whileFocus: { scale: 1.01 },
                          id: "message",
                          rows: 4,
                          className:
                            "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-500 focus:ring-eco-500",
                        }),
                      ],
                    }),
                    h.jsx(A.button, {
                      variants: i,
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      type: "submit",
                      className:
                        "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-eco-600 hover:bg-eco-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eco-500",
                      children: n("contact.send"),
                    }),
                  ],
                }),
              }),
              h.jsxs(A.div, {
                variants: i,
                className: "space-y-8",
                children: [
                  h.jsxs("div", {
                    children: [
                      h.jsx("h3", {
                        className: "text-lg font-medium text-gray-900 mb-6",
                        children: n("contact.info"),
                      }),
                      h.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          h.jsxs("div", {
                            className: "flex items-start space-x-4",
                            children: [
                              h.jsx("div", {
                                className: "mt-1",
                                children: h.jsx(E1, {
                                  className: "h-6 w-6 text-eco-600",
                                }),
                              }),
                              h.jsxs("div", {
                                children: [
                                  h.jsx("h4", {
                                    className: "font-medium text-gray-900",
                                    children: n("contact.email.label"),
                                  }),
                                  h.jsx("p", {
                                    className: "text-gray-600",
                                    children: n("contact.email.value"),
                                  }),
                                  h.jsx("p", {
                                    className: "text-gray-500 text-sm mt-1",
                                    children:
                                      "We aim to respond within 24 hours",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          h.jsxs("div", {
                            className: "flex items-start space-x-4",
                            children: [
                              h.jsx("div", {
                                className: "mt-1",
                                children: h.jsx(N1, {
                                  className: "h-6 w-6 text-eco-600",
                                }),
                              }),
                              h.jsxs("div", {
                                children: [
                                  h.jsx("h4", {
                                    className: "font-medium text-gray-900",
                                    children: n("contact.phone.label"),
                                  }),
                                  h.jsx("p", {
                                    className: "text-gray-600",
                                    children: n("contact.phone.value"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          h.jsxs("div", {
                            className: "flex items-start space-x-4",
                            children: [
                              h.jsx("div", {
                                className: "mt-1",
                                children: h.jsx(P1, {
                                  className: "h-6 w-6 text-eco-600",
                                }),
                              }),
                              h.jsxs("div", {
                                children: [
                                  h.jsx("h4", {
                                    className: "font-medium text-gray-900",
                                    children: n("contact.location.label"),
                                  }),
                                  h.jsx("p", {
                                    className: "text-gray-600",
                                    children: n("contact.location.value"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsx("div", {
                    className: "bg-gray-200 rounded-lg h-64 overflow-hidden",
                    children: h.jsx("iframe", {
                      title: "Office Location",
                      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7714074755474!2d104.91222841526203!3d11.568290791785991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513c9071a9cd%3A0x620e30c88a4bd89b!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1625123456789!5m2!1sen!2sus",
                      width: "100%",
                      height: "100%",
                      style: { border: 0 },
                      allowFullScreen: !0,
                      loading: "lazy",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  LE = "/300Riel300DermV5/assets/Monochrome-DOAUdvK0.png",
  bE = () => {
    const { t: e } = mt();
    new Date().getFullYear();
    const t = [
        { icon: Us, href: "https://facebook.com", label: "Facebook" },
        { icon: S1, href: "https://instagram.com", label: "Instagram" },
        { icon: D1, href: "https://twitter.com", label: "Twitter" },
        { icon: d1, href: "https://tiktok.com", label: "TikTok" },
      ],
      n = [
        { name: e("footer.about"), href: "#about" },
        { name: e("footer.gallery"), href: "#gallery" },
        { name: e("footer.donate"), href: "#donate" },
        { name: e("footer.contact"), href: "#contact" },
      ];
    return h.jsx("footer", {
      className: "bg-gradient-to-b from-eco-900 to-eco-800",
      children: h.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8",
        children: [
          h.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-eco-100",
            children: [
              h.jsxs("div", {
                children: [
                  h.jsx("h3", {
                    className: "text-xl font-semibold mb-4 text-white",
                    children: e("footer.about"),
                  }),
                  h.jsx("p", {
                    className: "text-eco-200 mb-4",
                    children: e("footer.about.subtitle"),
                  }),
                  h.jsx("div", {
                    className: "flex items-center space-x-4",
                    children: t.map((r) =>
                      h.jsx(
                        A.a,
                        {
                          href: r.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          whileHover: { scale: 1.2, rotate: 5 },
                          whileTap: { scale: 0.9 },
                          className:
                            "text-eco-300 hover:text-white transition-colors",
                          "aria-label": r.label,
                          children: h.jsx(r.icon, { className: "h-5 w-5" }),
                        },
                        r.label
                      )
                    ),
                  }),
                ],
              }),
              h.jsxs("div", {
                children: [
                  h.jsx("h3", {
                    className: "text-xl font-semibold mb-4 text-white",
                    children: e("footer.quickLinks"),
                  }),
                  h.jsx("ul", {
                    className: "space-y-2",
                    children: n.map((r) =>
                      h.jsx(
                        "li",
                        {
                          children: h.jsx("a", {
                            href: r.href,
                            className:
                              "text-eco-200 hover:text-white transition-colors block",
                            children: r.name,
                          }),
                        },
                        r.name
                      )
                    ),
                  }),
                ],
              }),
              h.jsxs("div", {
                children: [
                  h.jsx("h3", {
                    className: "text-xl font-semibold mb-4 text-white",
                    children: e("footer.mission"),
                  }),
                  h.jsx("p", {
                    className: "text-eco-200 mb-4",
                    children: e("footer.mission.subtitle"),
                  }),
                ],
              }),
            ],
          }),
          h.jsx("div", {
            className: "pt-8 mt-8 border-t border-eco-700",
            children: h.jsxs("div", {
              className: "flex flex-col items-center justify-center space-y-4",
              children: [
                h.jsx(A.div, {
                  className: "h-auto",
                  children: h.jsx("img", {
                    src: LE,
                    alt: "Logo",
                    className: "h-32",
                  }),
                }),
                h.jsxs("div", {
                  className: "text-center",
                  children: [
                    h.jsx("p", {
                      className: "text-eco-300 text-sm",
                      children: e("footer.copyright"),
                    }),
                    h.jsxs("p", {
                      className:
                        "text-eco-400 text-xs mt-1 flex items-center justify-center",
                      children: [e("footer.privacy"), " | ", e("footer.terms")],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  };
function DE() {
  return h.jsx(_k, {
    children: h.jsxs("div", {
      className: "relative bg-green-50",
      children: [
        h.jsx(Vk, {}),
        h.jsx(Ik, {}),
        h.jsx(Wk, {}),
        h.jsx(Gk, {}),
        h.jsx(Xk, {}),
        h.jsx(NE, {}),
        h.jsx(jE, {}),
        h.jsx(RE, {}),
        h.jsx(ME, {}),
        h.jsx(bE, {}),
      ],
    }),
  });
}
Nm(document.getElementById("root")).render(
  h.jsx(M.StrictMode, { children: h.jsx(DE, {}) })
);
