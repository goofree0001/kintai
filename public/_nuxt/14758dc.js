/*! For license information please see LICENSES */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    195: function (e, t, n) {
      "use strict"
      var r,
        o,
        c = n(196),
        l = n(197),
        h = n(198),
        d = n(199),
        f =
          (((r = {})["no-app"] =
            "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
          (r["bad-app-name"] = "Illegal App name: '{$appName}"),
          (r["duplicate-app"] =
            "Firebase App named '{$appName}' already exists"),
          (r["app-deleted"] =
            "Firebase App named '{$appName}' already deleted"),
          (r["invalid-app-argument"] =
            "firebase.{$appName}() takes either no argument or a Firebase App instance."),
          (r["invalid-log-argument"] =
            "First argument to `onLog` must be null or a function."),
          r),
        _ = new l.b("app", "Firebase", f),
        v = "@firebase/app",
        y = "[DEFAULT]",
        m =
          (((o = {})[v] = "fire-core"),
          (o["@firebase/analytics"] = "fire-analytics"),
          (o["@firebase/app-check"] = "fire-app-check"),
          (o["@firebase/auth"] = "fire-auth"),
          (o["@firebase/database"] = "fire-rtdb"),
          (o["@firebase/functions"] = "fire-fn"),
          (o["@firebase/installations"] = "fire-iid"),
          (o["@firebase/messaging"] = "fire-fcm"),
          (o["@firebase/performance"] = "fire-perf"),
          (o["@firebase/remote-config"] = "fire-rc"),
          (o["@firebase/storage"] = "fire-gcs"),
          (o["@firebase/firestore"] = "fire-fst"),
          (o["fire-js"] = "fire-js"),
          (o["firebase-wrapper"] = "fire-js-all"),
          o),
        w = new d.b("@firebase/app"),
        C = (function () {
          function e(e, t, n) {
            var r = this
            ;(this.firebase_ = n),
              (this.isDeleted_ = !1),
              (this.name_ = t.name),
              (this.automaticDataCollectionEnabled_ =
                t.automaticDataCollectionEnabled || !1),
              (this.options_ = Object(l.k)(e)),
              (this.container = new h.b(t.name)),
              this._addComponent(
                new h.a(
                  "app",
                  function () {
                    return r
                  },
                  "PUBLIC"
                )
              ),
              this.firebase_.INTERNAL.components.forEach(function (component) {
                return r._addComponent(component)
              })
          }
          return (
            Object.defineProperty(
              e.prototype,
              "automaticDataCollectionEnabled",
              {
                get: function () {
                  return (
                    this.checkDestroyed_(), this.automaticDataCollectionEnabled_
                  )
                },
                set: function (e) {
                  this.checkDestroyed_(),
                    (this.automaticDataCollectionEnabled_ = e)
                },
                enumerable: !1,
                configurable: !0,
              }
            ),
            Object.defineProperty(e.prototype, "name", {
              get: function () {
                return this.checkDestroyed_(), this.name_
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "options", {
              get: function () {
                return this.checkDestroyed_(), this.options_
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.delete = function () {
              var e = this
              return new Promise(function (t) {
                e.checkDestroyed_(), t()
              })
                .then(function () {
                  return (
                    e.firebase_.INTERNAL.removeApp(e.name_),
                    Promise.all(
                      e.container.getProviders().map(function (e) {
                        return e.delete()
                      })
                    )
                  )
                })
                .then(function () {
                  e.isDeleted_ = !0
                })
            }),
            (e.prototype._getService = function (e, t) {
              var n
              void 0 === t && (t = y), this.checkDestroyed_()
              var r = this.container.getProvider(e)
              return (
                r.isInitialized() ||
                  "EXPLICIT" !==
                    (null === (n = r.getComponent()) || void 0 === n
                      ? void 0
                      : n.instantiationMode) ||
                  r.initialize(),
                r.getImmediate({ identifier: t })
              )
            }),
            (e.prototype._removeServiceInstance = function (e, t) {
              void 0 === t && (t = y),
                this.container.getProvider(e).clearInstance(t)
            }),
            (e.prototype._addComponent = function (component) {
              try {
                this.container.addComponent(component)
              } catch (e) {
                w.debug(
                  "Component " +
                    component.name +
                    " failed to register with FirebaseApp " +
                    this.name,
                  e
                )
              }
            }),
            (e.prototype._addOrOverwriteComponent = function (component) {
              this.container.addOrOverwriteComponent(component)
            }),
            (e.prototype.toJSON = function () {
              return {
                name: this.name,
                automaticDataCollectionEnabled:
                  this.automaticDataCollectionEnabled,
                options: this.options,
              }
            }),
            (e.prototype.checkDestroyed_ = function () {
              if (this.isDeleted_)
                throw _.create("app-deleted", { appName: this.name_ })
            }),
            e
          )
        })()
      ;(C.prototype.name && C.prototype.options) ||
        C.prototype.delete ||
        console.log("dc")
      var O = (function e() {
          var t = (function (e) {
            var t = {},
              n = new Map(),
              r = {
                __esModule: !0,
                initializeApp: function (n, o) {
                  void 0 === o && (o = {}),
                    ("object" == typeof o && null !== o) || (o = { name: o })
                  var c = o
                  void 0 === c.name && (c.name = y)
                  var h = c.name
                  if ("string" != typeof h || !h)
                    throw _.create("bad-app-name", { appName: String(h) })
                  if (Object(l.h)(t, h))
                    throw _.create("duplicate-app", { appName: h })
                  var d = new e(n, c, r)
                  return (t[h] = d), d
                },
                app: o,
                registerVersion: function (e, t, n) {
                  var r,
                    o = null !== (r = m[e]) && void 0 !== r ? r : e
                  n && (o += "-" + n)
                  var l = o.match(/\s|\//),
                    d = t.match(/\s|\//)
                  if (l || d) {
                    var f = [
                      'Unable to register library "' +
                        o +
                        '" with version "' +
                        t +
                        '":',
                    ]
                    return (
                      l &&
                        f.push(
                          'library name "' +
                            o +
                            '" contains illegal characters (whitespace or "/")'
                        ),
                      l && d && f.push("and"),
                      d &&
                        f.push(
                          'version name "' +
                            t +
                            '" contains illegal characters (whitespace or "/")'
                        ),
                      void w.warn(f.join(" "))
                    )
                  }
                  c(
                    new h.a(
                      o + "-version",
                      function () {
                        return { library: o, version: t }
                      },
                      "VERSION"
                    )
                  )
                },
                setLogLevel: d.c,
                onLog: function (e, t) {
                  if (null !== e && "function" != typeof e)
                    throw _.create("invalid-log-argument")
                  Object(d.d)(e, t)
                },
                apps: null,
                SDK_VERSION: "8.6.5",
                INTERNAL: {
                  registerComponent: c,
                  removeApp: function (e) {
                    delete t[e]
                  },
                  components: n,
                  useAsService: function (e, t) {
                    return "serverAuth" === t ? null : t
                  },
                },
              }
            function o(e) {
              if (((e = e || y), !Object(l.h)(t, e)))
                throw _.create("no-app", { appName: e })
              return t[e]
            }
            function c(component) {
              var c = component.name
              if (n.has(c))
                return (
                  w.debug(
                    "There were multiple attempts to register component " +
                      c +
                      "."
                  ),
                  "PUBLIC" === component.type ? r[c] : null
                )
              if ((n.set(c, component), "PUBLIC" === component.type)) {
                var h = function (e) {
                  if ((void 0 === e && (e = o()), "function" != typeof e[c]))
                    throw _.create("invalid-app-argument", { appName: c })
                  return e[c]()
                }
                void 0 !== component.serviceProps &&
                  Object(l.l)(h, component.serviceProps),
                  (r[c] = h),
                  (e.prototype[c] = function () {
                    for (var e = [], t = 0; t < arguments.length; t++)
                      e[t] = arguments[t]
                    return this._getService
                      .bind(this, c)
                      .apply(this, component.multipleInstances ? e : [])
                  })
              }
              for (var d = 0, f = Object.keys(t); d < f.length; d++) {
                var v = f[d]
                t[v]._addComponent(component)
              }
              return "PUBLIC" === component.type ? r[c] : null
            }
            return (
              (r.default = r),
              Object.defineProperty(r, "apps", {
                get: function () {
                  return Object.keys(t).map(function (e) {
                    return t[e]
                  })
                },
              }),
              (o.App = e),
              r
            )
          })(C)
          return (
            (t.INTERNAL = Object(c.a)(Object(c.a)({}, t.INTERNAL), {
              createFirebaseNamespace: e,
              extendNamespace: function (e) {
                Object(l.l)(t, e)
              },
              createSubscribe: l.j,
              ErrorFactory: l.b,
              deepExtend: l.l,
            })),
            t
          )
        })(),
        E = (function () {
          function e(e) {
            this.container = e
          }
          return (
            (e.prototype.getPlatformInfoString = function () {
              return this.container
                .getProviders()
                .map(function (e) {
                  if (
                    (function (e) {
                      var component = e.getComponent()
                      return (
                        "VERSION" ===
                        (null == component ? void 0 : component.type)
                      )
                    })(e)
                  ) {
                    var t = e.getImmediate()
                    return t.library + "/" + t.version
                  }
                  return null
                })
                .filter(function (e) {
                  return e
                })
                .join(" ")
            }),
            e
          )
        })()
      if (Object(l.p)() && void 0 !== self.firebase) {
        w.warn(
          "\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "
        )
        var I = self.firebase.SDK_VERSION
        I &&
          I.indexOf("LITE") >= 0 &&
          w.warn(
            "\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "
          )
      }
      var T = O.initializeApp
      O.initializeApp = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
        return (
          Object(l.s)() &&
            w.warn(
              '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '
            ),
          T.apply(void 0, e)
        )
      }
      var S = O
      !(function (e, t) {
        e.INTERNAL.registerComponent(
          new h.a(
            "platform-logger",
            function (e) {
              return new E(e)
            },
            "PRIVATE"
          )
        ),
          e.registerVersion(v, "0.6.24", t),
          e.registerVersion("fire-js", "")
      })(S),
        (t.a = S)
    },
    196: function (e, t, n) {
      "use strict"
      n.d(t, "c", function () {
        return o
      }),
        n.d(t, "a", function () {
          return c
        }),
        n.d(t, "b", function () {
          return l
        }),
        n.d(t, "d", function () {
          return h
        }),
        n.d(t, "g", function () {
          return d
        }),
        n.d(t, "e", function () {
          return f
        }),
        n.d(t, "f", function () {
          return _
        })
      var r = function (e, b) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, b) {
              e.__proto__ = b
            }) ||
          function (e, b) {
            for (var p in b)
              Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
          })(e, b)
      }
      function o(e, b) {
        if ("function" != typeof b && null !== b)
          throw new TypeError(
            "Class extends value " + String(b) + " is not a constructor or null"
          )
        function t() {
          this.constructor = e
        }
        r(e, b),
          (e.prototype =
            null === b
              ? Object.create(b)
              : ((t.prototype = b.prototype), new t()))
      }
      var c = function () {
        return (c =
          Object.assign ||
          function (e) {
            for (var s, i = 1, t = arguments.length; i < t; i++)
              for (var p in (s = arguments[i]))
                Object.prototype.hasOwnProperty.call(s, p) && (e[p] = s[p])
            return e
          }).apply(this, arguments)
      }
      function l(e, t, n, r) {
        return new (n || (n = Promise))(function (o, c) {
          function l(e) {
            try {
              d(r.next(e))
            } catch (e) {
              c(e)
            }
          }
          function h(e) {
            try {
              d(r.throw(e))
            } catch (e) {
              c(e)
            }
          }
          function d(e) {
            var t
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t)
                    })).then(l, h)
          }
          d((r = r.apply(e, t || [])).next())
        })
      }
      function h(e, body) {
        var t,
          n,
          r,
          g,
          o = {
            label: 0,
            sent: function () {
              if (1 & r[0]) throw r[1]
              return r[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (g = { next: c(0), throw: c(1), return: c(2) }),
          "function" == typeof Symbol &&
            (g[Symbol.iterator] = function () {
              return this
            }),
          g
        )
        function c(c) {
          return function (l) {
            return (function (c) {
              if (t) throw new TypeError("Generator is already executing.")
              for (; o; )
                try {
                  if (
                    ((t = 1),
                    n &&
                      (r =
                        2 & c[0]
                          ? n.return
                          : c[0]
                          ? n.throw || ((r = n.return) && r.call(n), 0)
                          : n.next) &&
                      !(r = r.call(n, c[1])).done)
                  )
                    return r
                  switch (((n = 0), r && (c = [2 & c[0], r.value]), c[0])) {
                    case 0:
                    case 1:
                      r = c
                      break
                    case 4:
                      return o.label++, { value: c[1], done: !1 }
                    case 5:
                      o.label++, (n = c[1]), (c = [0])
                      continue
                    case 7:
                      ;(c = o.ops.pop()), o.trys.pop()
                      continue
                    default:
                      if (
                        !((r = o.trys),
                        (r = r.length > 0 && r[r.length - 1]) ||
                          (6 !== c[0] && 2 !== c[0]))
                      ) {
                        o = 0
                        continue
                      }
                      if (3 === c[0] && (!r || (c[1] > r[0] && c[1] < r[3]))) {
                        o.label = c[1]
                        break
                      }
                      if (6 === c[0] && o.label < r[1]) {
                        ;(o.label = r[1]), (r = c)
                        break
                      }
                      if (r && o.label < r[2]) {
                        ;(o.label = r[2]), o.ops.push(c)
                        break
                      }
                      r[2] && o.ops.pop(), o.trys.pop()
                      continue
                  }
                  c = body.call(e, o)
                } catch (e) {
                  ;(c = [6, e]), (n = 0)
                } finally {
                  t = r = 0
                }
              if (5 & c[0]) throw c[1]
              return { value: c[0] ? c[1] : void 0, done: !0 }
            })([c, l])
          }
        }
      }
      Object.create
      function d(e) {
        var s = "function" == typeof Symbol && Symbol.iterator,
          t = s && e[s],
          i = 0
        if (t) return t.call(e)
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              )
            },
          }
        throw new TypeError(
          s ? "Object is not iterable." : "Symbol.iterator is not defined."
        )
      }
      function f(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator]
        if (!n) return e
        var r,
          o,
          i = n.call(e),
          c = []
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            c.push(r.value)
        } catch (e) {
          o = { error: e }
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i)
          } finally {
            if (o) throw o.error
          }
        }
        return c
      }
      function _(e, t) {
        for (var i = 0, n = t.length, r = e.length; i < n; i++, r++) e[r] = t[i]
        return e
      }
      Object.create
    },
    197: function (e, t, n) {
      "use strict"
      ;(function (e) {
        n.d(t, "a", function () {
          return C
        }),
          n.d(t, "b", function () {
            return j
          }),
          n.d(t, "c", function () {
            return V
          }),
          n.d(t, "d", function () {
            return h
          }),
          n.d(t, "e", function () {
            return d
          }),
          n.d(t, "f", function () {
            return _
          }),
          n.d(t, "g", function () {
            return v
          }),
          n.d(t, "h", function () {
            return W
          }),
          n.d(t, "i", function () {
            return O
          }),
          n.d(t, "j", function () {
            return H
          }),
          n.d(t, "k", function () {
            return m
          }),
          n.d(t, "l", function () {
            return w
          }),
          n.d(t, "m", function () {
            return G
          }),
          n.d(t, "n", function () {
            return ee
          }),
          n.d(t, "o", function () {
            return M
          }),
          n.d(t, "p", function () {
            return S
          }),
          n.d(t, "q", function () {
            return B
          }),
          n.d(t, "r", function () {
            return I
          }),
          n.d(t, "s", function () {
            return T
          }),
          n.d(t, "t", function () {
            return P
          }),
          n.d(t, "u", function () {
            return k
          }),
          n.d(t, "v", function () {
            return F
          }),
          n.d(t, "w", function () {
            return D
          }),
          n.d(t, "x", function () {
            return map
          }),
          n.d(t, "y", function () {
            return z
          }),
          n.d(t, "z", function () {
            return U
          }),
          n.d(t, "A", function () {
            return Z
          }),
          n.d(t, "B", function () {
            return X
          }),
          n.d(t, "C", function () {
            return A
          }),
          n.d(t, "D", function () {
            return K
          }),
          n.d(t, "E", function () {
            return $
          }),
          n.d(t, "F", function () {
            return J
          })
        var r = n(196),
          o = !1,
          c = !1,
          l = "${JSCORE_VERSION}",
          h = function (e, t) {
            if (!e) throw d(t)
          },
          d = function (e) {
            return new Error(
              "Firebase Database (" + l + ") INTERNAL ASSERT FAILED: " + e
            )
          },
          f = function (e) {
            for (var t = [], p = 0, i = 0; i < e.length; i++) {
              var n = e.charCodeAt(i)
              n < 128
                ? (t[p++] = n)
                : n < 2048
                ? ((t[p++] = (n >> 6) | 192), (t[p++] = (63 & n) | 128))
                : 55296 == (64512 & n) &&
                  i + 1 < e.length &&
                  56320 == (64512 & e.charCodeAt(i + 1))
                ? ((n =
                    65536 + ((1023 & n) << 10) + (1023 & e.charCodeAt(++i))),
                  (t[p++] = (n >> 18) | 240),
                  (t[p++] = ((n >> 12) & 63) | 128),
                  (t[p++] = ((n >> 6) & 63) | 128),
                  (t[p++] = (63 & n) | 128))
                : ((t[p++] = (n >> 12) | 224),
                  (t[p++] = ((n >> 6) & 63) | 128),
                  (t[p++] = (63 & n) | 128))
            }
            return t
          },
          _ = {
            byteToCharMap_: null,
            charToByteMap_: null,
            byteToCharMapWebSafe_: null,
            charToByteMapWebSafe_: null,
            ENCODED_VALS_BASE:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            get ENCODED_VALS() {
              return this.ENCODED_VALS_BASE + "+/="
            },
            get ENCODED_VALS_WEBSAFE() {
              return this.ENCODED_VALS_BASE + "-_."
            },
            HAS_NATIVE_SUPPORT: "function" == typeof atob,
            encodeByteArray: function (input, e) {
              if (!Array.isArray(input))
                throw Error("encodeByteArray takes an array as a parameter")
              this.init_()
              for (
                var t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                  output = [],
                  i = 0;
                i < input.length;
                i += 3
              ) {
                var n = input[i],
                  r = i + 1 < input.length,
                  o = r ? input[i + 1] : 0,
                  c = i + 2 < input.length,
                  l = c ? input[i + 2] : 0,
                  h = n >> 2,
                  d = ((3 & n) << 4) | (o >> 4),
                  f = ((15 & o) << 2) | (l >> 6),
                  _ = 63 & l
                c || ((_ = 64), r || (f = 64)),
                  output.push(t[h], t[d], t[f], t[_])
              }
              return output.join("")
            },
            encodeString: function (input, e) {
              return this.HAS_NATIVE_SUPPORT && !e
                ? btoa(input)
                : this.encodeByteArray(f(input), e)
            },
            decodeString: function (input, e) {
              return this.HAS_NATIVE_SUPPORT && !e
                ? atob(input)
                : (function (e) {
                    for (var t = [], n = 0, r = 0; n < e.length; ) {
                      var o = e[n++]
                      if (o < 128) t[r++] = String.fromCharCode(o)
                      else if (o > 191 && o < 224) {
                        var c = e[n++]
                        t[r++] = String.fromCharCode(((31 & o) << 6) | (63 & c))
                      } else if (o > 239 && o < 365) {
                        var u =
                          (((7 & o) << 18) |
                            ((63 & (c = e[n++])) << 12) |
                            ((63 & (l = e[n++])) << 6) |
                            (63 & e[n++])) -
                          65536
                        ;(t[r++] = String.fromCharCode(55296 + (u >> 10))),
                          (t[r++] = String.fromCharCode(56320 + (1023 & u)))
                      } else {
                        c = e[n++]
                        var l = e[n++]
                        t[r++] = String.fromCharCode(
                          ((15 & o) << 12) | ((63 & c) << 6) | (63 & l)
                        )
                      }
                    }
                    return t.join("")
                  })(this.decodeStringToByteArray(input, e))
            },
            decodeStringToByteArray: function (input, e) {
              this.init_()
              for (
                var t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                  output = [],
                  i = 0;
                i < input.length;

              ) {
                var n = t[input.charAt(i++)],
                  r = i < input.length ? t[input.charAt(i)] : 0,
                  o = ++i < input.length ? t[input.charAt(i)] : 64,
                  c = ++i < input.length ? t[input.charAt(i)] : 64
                if ((++i, null == n || null == r || null == o || null == c))
                  throw Error()
                var l = (n << 2) | (r >> 4)
                if ((output.push(l), 64 !== o)) {
                  var h = ((r << 4) & 240) | (o >> 2)
                  if ((output.push(h), 64 !== c)) {
                    var d = ((o << 6) & 192) | c
                    output.push(d)
                  }
                }
              }
              return output
            },
            init_: function () {
              if (!this.byteToCharMap_) {
                ;(this.byteToCharMap_ = {}),
                  (this.charToByteMap_ = {}),
                  (this.byteToCharMapWebSafe_ = {}),
                  (this.charToByteMapWebSafe_ = {})
                for (var i = 0; i < this.ENCODED_VALS.length; i++)
                  (this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i)),
                    (this.charToByteMap_[this.byteToCharMap_[i]] = i),
                    (this.byteToCharMapWebSafe_[i] =
                      this.ENCODED_VALS_WEBSAFE.charAt(i)),
                    (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] =
                      i),
                    i >= this.ENCODED_VALS_BASE.length &&
                      ((this.charToByteMap_[
                        this.ENCODED_VALS_WEBSAFE.charAt(i)
                      ] = i),
                      (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] =
                        i))
              }
            },
          },
          v = function (e) {
            var t = f(e)
            return _.encodeByteArray(t, !0)
          },
          y = function (e) {
            try {
              return _.decodeString(e, !0)
            } catch (e) {
              console.error("base64Decode failed: ", e)
            }
            return null
          }
        function m(e) {
          return w(void 0, e)
        }
        function w(e, source) {
          if (!(source instanceof Object)) return source
          switch (source.constructor) {
            case Date:
              return new Date(source.getTime())
            case Object:
              void 0 === e && (e = {})
              break
            case Array:
              e = []
              break
            default:
              return source
          }
          for (var t in source)
            source.hasOwnProperty(t) &&
              "__proto__" !== t &&
              (e[t] = w(e[t], source[t]))
          return e
        }
        var C = (function () {
          function e() {
            var e = this
            ;(this.reject = function () {}),
              (this.resolve = function () {}),
              (this.promise = new Promise(function (t, n) {
                ;(e.resolve = t), (e.reject = n)
              }))
          }
          return (
            (e.prototype.wrapCallback = function (e) {
              var t = this
              return function (n, r) {
                n ? t.reject(n) : t.resolve(r),
                  "function" == typeof e &&
                    (t.promise.catch(function () {}),
                    1 === e.length ? e(n) : e(n, r))
              }
            }),
            e
          )
        })()
        function O(e, t) {
          if (e.uid)
            throw new Error(
              'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
            )
          var n = t || "demo-project",
            o = e.iat || 0,
            sub = e.sub || e.user_id
          if (!sub)
            throw new Error(
              "mockUserToken must contain 'sub' or 'user_id' field!"
            )
          var c = Object(r.a)(
            {
              iss: "https://securetoken.google.com/" + n,
              aud: n,
              iat: o,
              exp: o + 3600,
              auth_time: o,
              sub: sub,
              user_id: sub,
              firebase: { sign_in_provider: "custom", identities: {} },
            },
            e
          )
          return [
            _.encodeString(JSON.stringify({ alg: "none", type: "JWT" }), !1),
            _.encodeString(JSON.stringify(c), !1),
            "",
          ].join(".")
        }
        function E() {
          return "undefined" != typeof navigator &&
            "string" == typeof navigator.userAgent
            ? navigator.userAgent
            : ""
        }
        function I() {
          return (
            "undefined" != typeof window &&
            !!(window.cordova || window.phonegap || window.PhoneGap) &&
            /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())
          )
        }
        function T() {
          try {
            return (
              "[object process]" === Object.prototype.toString.call(e.process)
            )
          } catch (e) {
            return !1
          }
        }
        function S() {
          return "object" == typeof self && self.self === self
        }
        function k() {
          return (
            "object" == typeof navigator && "ReactNative" === navigator.product
          )
        }
        function P() {
          return !0 === o || !0 === c
        }
        var N = (function (e) {
            function t(code, n, r) {
              var o = e.call(this, n) || this
              return (
                (o.code = code),
                (o.customData = r),
                (o.name = "FirebaseError"),
                Object.setPrototypeOf(o, t.prototype),
                Error.captureStackTrace &&
                  Error.captureStackTrace(o, j.prototype.create),
                o
              )
            }
            return Object(r.c)(t, e), t
          })(Error),
          j = (function () {
            function e(e, t, n) {
              ;(this.service = e), (this.serviceName = t), (this.errors = n)
            }
            return (
              (e.prototype.create = function (code) {
                for (var data = [], e = 1; e < arguments.length; e++)
                  data[e - 1] = arguments[e]
                var t = data[0] || {},
                  n = this.service + "/" + code,
                  template = this.errors[code],
                  r = template ? x(template, t) : "Error",
                  o = this.serviceName + ": " + r + " (" + n + ").",
                  c = new N(n, o, t)
                return c
              }),
              e
            )
          })()
        function x(template, data) {
          return template.replace(R, function (e, t) {
            var n = data[t]
            return null != n ? String(n) : "<" + t + "?>"
          })
        }
        var R = /\{\$([^}]+)}/g
        function D(e) {
          return JSON.parse(e)
        }
        function A(data) {
          return JSON.stringify(data)
        }
        var L = function (e) {
            var header = {},
              t = {},
              data = {},
              n = ""
            try {
              var r = e.split(".")
              ;(header = D(y(r[0]) || "")),
                (t = D(y(r[1]) || "")),
                (n = r[2]),
                (data = t.d || {}),
                delete t.d
            } catch (e) {}
            return { header: header, claims: t, data: data, signature: n }
          },
          F = function (e) {
            var t = L(e).claims
            return !!t && "object" == typeof t && t.hasOwnProperty("iat")
          },
          M = function (e) {
            var t = L(e).claims
            return "object" == typeof t && !0 === t.admin
          }
        function W(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }
        function U(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0
        }
        function B(e) {
          for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) return !1
          return !0
        }
        function map(e, t, n) {
          var r = {}
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              (r[o] = t.call(n, e[o], o, e))
          return r
        }
        function z(e) {
          for (
            var t = [],
              n = function (e, n) {
                Array.isArray(n)
                  ? n.forEach(function (n) {
                      t.push(
                        encodeURIComponent(e) + "=" + encodeURIComponent(n)
                      )
                    })
                  : t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
              },
              r = 0,
              o = Object.entries(e);
            r < o.length;
            r++
          ) {
            var c = o[r]
            n(c[0], c[1])
          }
          return t.length ? "&" + t.join("&") : ""
        }
        var V = (function () {
          function e() {
            ;(this.chain_ = []),
              (this.buf_ = []),
              (this.W_ = []),
              (this.pad_ = []),
              (this.inbuf_ = 0),
              (this.total_ = 0),
              (this.blockSize = 64),
              (this.pad_[0] = 128)
            for (var i = 1; i < this.blockSize; ++i) this.pad_[i] = 0
            this.reset()
          }
          return (
            (e.prototype.reset = function () {
              ;(this.chain_[0] = 1732584193),
                (this.chain_[1] = 4023233417),
                (this.chain_[2] = 2562383102),
                (this.chain_[3] = 271733878),
                (this.chain_[4] = 3285377520),
                (this.inbuf_ = 0),
                (this.total_ = 0)
            }),
            (e.prototype.compress_ = function (e, t) {
              t || (t = 0)
              var n = this.W_
              if ("string" == typeof e)
                for (var i = 0; i < 16; i++)
                  (n[i] =
                    (e.charCodeAt(t) << 24) |
                    (e.charCodeAt(t + 1) << 16) |
                    (e.charCodeAt(t + 2) << 8) |
                    e.charCodeAt(t + 3)),
                    (t += 4)
              else
                for (i = 0; i < 16; i++)
                  (n[i] =
                    (e[t] << 24) |
                    (e[t + 1] << 16) |
                    (e[t + 2] << 8) |
                    e[t + 3]),
                    (t += 4)
              for (i = 16; i < 80; i++) {
                var r = n[i - 3] ^ n[i - 8] ^ n[i - 14] ^ n[i - 16]
                n[i] = 4294967295 & ((r << 1) | (r >>> 31))
              }
              var o,
                c,
                a = this.chain_[0],
                b = this.chain_[1],
                l = this.chain_[2],
                h = this.chain_[3],
                d = this.chain_[4]
              for (i = 0; i < 80; i++) {
                i < 40
                  ? i < 20
                    ? ((o = h ^ (b & (l ^ h))), (c = 1518500249))
                    : ((o = b ^ l ^ h), (c = 1859775393))
                  : i < 60
                  ? ((o = (b & l) | (h & (b | l))), (c = 2400959708))
                  : ((o = b ^ l ^ h), (c = 3395469782))
                r = (((a << 5) | (a >>> 27)) + o + d + c + n[i]) & 4294967295
                ;(d = h),
                  (h = l),
                  (l = 4294967295 & ((b << 30) | (b >>> 2))),
                  (b = a),
                  (a = r)
              }
              ;(this.chain_[0] = (this.chain_[0] + a) & 4294967295),
                (this.chain_[1] = (this.chain_[1] + b) & 4294967295),
                (this.chain_[2] = (this.chain_[2] + l) & 4294967295),
                (this.chain_[3] = (this.chain_[3] + h) & 4294967295),
                (this.chain_[4] = (this.chain_[4] + d) & 4294967295)
            }),
            (e.prototype.update = function (e, t) {
              if (null != e) {
                void 0 === t && (t = e.length)
                for (
                  var n = t - this.blockSize,
                    r = 0,
                    o = this.buf_,
                    c = this.inbuf_;
                  r < t;

                ) {
                  if (0 === c)
                    for (; r <= n; ) this.compress_(e, r), (r += this.blockSize)
                  if ("string" == typeof e) {
                    for (; r < t; )
                      if (
                        ((o[c] = e.charCodeAt(r)), ++r, ++c === this.blockSize)
                      ) {
                        this.compress_(o), (c = 0)
                        break
                      }
                  } else
                    for (; r < t; )
                      if (((o[c] = e[r]), ++r, ++c === this.blockSize)) {
                        this.compress_(o), (c = 0)
                        break
                      }
                }
                ;(this.inbuf_ = c), (this.total_ += t)
              }
            }),
            (e.prototype.digest = function () {
              var e = [],
                t = 8 * this.total_
              this.inbuf_ < 56
                ? this.update(this.pad_, 56 - this.inbuf_)
                : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56))
              for (var i = this.blockSize - 1; i >= 56; i--)
                (this.buf_[i] = 255 & t), (t /= 256)
              this.compress_(this.buf_)
              var n = 0
              for (i = 0; i < 5; i++)
                for (var r = 24; r >= 0; r -= 8)
                  (e[n] = (this.chain_[i] >> r) & 255), ++n
              return e
            }),
            e
          )
        })()
        function H(e, t) {
          var n = new Q(e, t)
          return n.subscribe.bind(n)
        }
        var Q = (function () {
          function e(e, t) {
            var n = this
            ;(this.observers = []),
              (this.unsubscribes = []),
              (this.observerCount = 0),
              (this.task = Promise.resolve()),
              (this.finalized = !1),
              (this.onNoObservers = t),
              this.task
                .then(function () {
                  e(n)
                })
                .catch(function (e) {
                  n.error(e)
                })
          }
          return (
            (e.prototype.next = function (e) {
              this.forEachObserver(function (t) {
                t.next(e)
              })
            }),
            (e.prototype.error = function (e) {
              this.forEachObserver(function (t) {
                t.error(e)
              }),
                this.close(e)
            }),
            (e.prototype.complete = function () {
              this.forEachObserver(function (e) {
                e.complete()
              }),
                this.close()
            }),
            (e.prototype.subscribe = function (e, t, n) {
              var r,
                o = this
              if (void 0 === e && void 0 === t && void 0 === n)
                throw new Error("Missing Observer.")
              void 0 ===
                (r = (function (e, t) {
                  if ("object" != typeof e || null === e) return !1
                  for (var n = 0, r = t; n < r.length; n++) {
                    var o = r[n]
                    if (o in e && "function" == typeof e[o]) return !0
                  }
                  return !1
                })(e, ["next", "error", "complete"])
                  ? e
                  : { next: e, error: t, complete: n }).next && (r.next = Y),
                void 0 === r.error && (r.error = Y),
                void 0 === r.complete && (r.complete = Y)
              var c = this.unsubscribeOne.bind(this, this.observers.length)
              return (
                this.finalized &&
                  this.task.then(function () {
                    try {
                      o.finalError ? r.error(o.finalError) : r.complete()
                    } catch (e) {}
                  }),
                this.observers.push(r),
                c
              )
            }),
            (e.prototype.unsubscribeOne = function (i) {
              void 0 !== this.observers &&
                void 0 !== this.observers[i] &&
                (delete this.observers[i],
                (this.observerCount -= 1),
                0 === this.observerCount &&
                  void 0 !== this.onNoObservers &&
                  this.onNoObservers(this))
            }),
            (e.prototype.forEachObserver = function (e) {
              if (!this.finalized)
                for (var i = 0; i < this.observers.length; i++)
                  this.sendOne(i, e)
            }),
            (e.prototype.sendOne = function (i, e) {
              var t = this
              this.task.then(function () {
                if (void 0 !== t.observers && void 0 !== t.observers[i])
                  try {
                    e(t.observers[i])
                  } catch (e) {
                    "undefined" != typeof console &&
                      console.error &&
                      console.error(e)
                  }
              })
            }),
            (e.prototype.close = function (e) {
              var t = this
              this.finalized ||
                ((this.finalized = !0),
                void 0 !== e && (this.finalError = e),
                this.task.then(function () {
                  ;(t.observers = void 0), (t.onNoObservers = void 0)
                }))
            }),
            e
          )
        })()
        function Y() {}
        var K = function (e, t, n, r) {
          var o
          if (
            (r < t
              ? (o = "at least " + t)
              : r > n && (o = 0 === n ? "none" : "no more than " + n),
            o)
          )
            throw new Error(
              e +
                " failed: Was called with " +
                r +
                (1 === r ? " argument." : " arguments.") +
                " Expects " +
                o +
                "."
            )
        }
        function G(e, t) {
          return e + " failed: " + t + " argument "
        }
        function $(e, t, n, r) {
          if ((!r || n) && "function" != typeof n)
            throw new Error(G(e, t) + "must be a valid function.")
        }
        function J(e, t, n, r) {
          if ((!r || n) && ("object" != typeof n || null === n))
            throw new Error(G(e, t) + "must be a valid context object.")
        }
        var X = function (e) {
            for (var t = [], p = 0, i = 0; i < e.length; i++) {
              var n = e.charCodeAt(i)
              if (n >= 55296 && n <= 56319) {
                var r = n - 55296
                i++,
                  h(i < e.length, "Surrogate pair missing trail surrogate."),
                  (n = 65536 + (r << 10) + (e.charCodeAt(i) - 56320))
              }
              n < 128
                ? (t[p++] = n)
                : n < 2048
                ? ((t[p++] = (n >> 6) | 192), (t[p++] = (63 & n) | 128))
                : n < 65536
                ? ((t[p++] = (n >> 12) | 224),
                  (t[p++] = ((n >> 6) & 63) | 128),
                  (t[p++] = (63 & n) | 128))
                : ((t[p++] = (n >> 18) | 240),
                  (t[p++] = ((n >> 12) & 63) | 128),
                  (t[p++] = ((n >> 6) & 63) | 128),
                  (t[p++] = (63 & n) | 128))
            }
            return t
          },
          Z = function (e) {
            for (var p = 0, i = 0; i < e.length; i++) {
              var t = e.charCodeAt(i)
              t < 128
                ? p++
                : t < 2048
                ? (p += 2)
                : t >= 55296 && t <= 56319
                ? ((p += 4), i++)
                : (p += 3)
            }
            return p
          }
        function ee(e) {
          return e && e._delegate ? e._delegate : e
        }
      }.call(this, n(29)))
    },
    198: function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return c
      }),
        n.d(t, "b", function () {
          return d
        }),
        n.d(t, "c", function () {
          return h
        })
      var r = n(196),
        o = n(197),
        c = (function () {
          function e(e, t, n) {
            ;(this.name = e),
              (this.instanceFactory = t),
              (this.type = n),
              (this.multipleInstances = !1),
              (this.serviceProps = {}),
              (this.instantiationMode = "LAZY"),
              (this.onInstanceCreated = null)
          }
          return (
            (e.prototype.setInstantiationMode = function (e) {
              return (this.instantiationMode = e), this
            }),
            (e.prototype.setMultipleInstances = function (e) {
              return (this.multipleInstances = e), this
            }),
            (e.prototype.setServiceProps = function (e) {
              return (this.serviceProps = e), this
            }),
            (e.prototype.setInstanceCreatedCallback = function (e) {
              return (this.onInstanceCreated = e), this
            }),
            e
          )
        })(),
        l = "[DEFAULT]",
        h = (function () {
          function e(e, t) {
            ;(this.name = e),
              (this.container = t),
              (this.component = null),
              (this.instances = new Map()),
              (this.instancesDeferred = new Map()),
              (this.onInitCallbacks = new Set())
          }
          return (
            (e.prototype.get = function (e) {
              void 0 === e && (e = l)
              var t = this.normalizeInstanceIdentifier(e)
              if (!this.instancesDeferred.has(t)) {
                var n = new o.a()
                if (
                  (this.instancesDeferred.set(t, n),
                  this.isInitialized(t) || this.shouldAutoInitialize())
                )
                  try {
                    var r = this.getOrInitializeService({
                      instanceIdentifier: t,
                    })
                    r && n.resolve(r)
                  } catch (e) {}
              }
              return this.instancesDeferred.get(t).promise
            }),
            (e.prototype.getImmediate = function (e) {
              var t,
                n,
                r =
                  null !== (t = null == e ? void 0 : e.identifier) &&
                  void 0 !== t
                    ? t
                    : l,
                o =
                  null !== (n = null == e ? void 0 : e.optional) &&
                  void 0 !== n &&
                  n,
                c = this.normalizeInstanceIdentifier(r)
              if (!this.isInitialized(c) && !this.shouldAutoInitialize()) {
                if (o) return null
                throw Error("Service " + this.name + " is not available")
              }
              try {
                return this.getOrInitializeService({ instanceIdentifier: c })
              } catch (e) {
                if (o) return null
                throw e
              }
            }),
            (e.prototype.getComponent = function () {
              return this.component
            }),
            (e.prototype.setComponent = function (component) {
              var e, t
              if (component.name !== this.name)
                throw Error(
                  "Mismatching Component " +
                    component.name +
                    " for Provider " +
                    this.name +
                    "."
                )
              if (this.component)
                throw Error(
                  "Component for " + this.name + " has already been provided"
                )
              if (((this.component = component), this.shouldAutoInitialize())) {
                if (
                  (function (component) {
                    return "EAGER" === component.instantiationMode
                  })(component)
                )
                  try {
                    this.getOrInitializeService({ instanceIdentifier: l })
                  } catch (e) {}
                try {
                  for (
                    var n = Object(r.g)(this.instancesDeferred.entries()),
                      o = n.next();
                    !o.done;
                    o = n.next()
                  ) {
                    var c = Object(r.e)(o.value, 2),
                      h = c[0],
                      d = c[1],
                      f = this.normalizeInstanceIdentifier(h)
                    try {
                      var _ = this.getOrInitializeService({
                        instanceIdentifier: f,
                      })
                      d.resolve(_)
                    } catch (e) {}
                  }
                } catch (t) {
                  e = { error: t }
                } finally {
                  try {
                    o && !o.done && (t = n.return) && t.call(n)
                  } finally {
                    if (e) throw e.error
                  }
                }
              }
            }),
            (e.prototype.clearInstance = function (e) {
              void 0 === e && (e = l),
                this.instancesDeferred.delete(e),
                this.instances.delete(e)
            }),
            (e.prototype.delete = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                var e
                return Object(r.d)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = Array.from(this.instances.values())),
                        [
                          4,
                          Promise.all(
                            Object(r.f)(
                              Object(r.f)(
                                [],
                                Object(r.e)(
                                  e
                                    .filter(function (e) {
                                      return "INTERNAL" in e
                                    })
                                    .map(function (e) {
                                      return e.INTERNAL.delete()
                                    })
                                )
                              ),
                              Object(r.e)(
                                e
                                  .filter(function (e) {
                                    return "_delete" in e
                                  })
                                  .map(function (e) {
                                    return e._delete()
                                  })
                              )
                            )
                          ),
                        ]
                      )
                    case 1:
                      return t.sent(), [2]
                  }
                })
              })
            }),
            (e.prototype.isComponentSet = function () {
              return null != this.component
            }),
            (e.prototype.isInitialized = function (e) {
              return void 0 === e && (e = l), this.instances.has(e)
            }),
            (e.prototype.initialize = function (e) {
              var t, n
              void 0 === e && (e = {})
              var o = e.instanceIdentifier,
                c = void 0 === o ? l : o,
                h = e.options,
                d = void 0 === h ? {} : h,
                f = this.normalizeInstanceIdentifier(c)
              if (this.isInitialized(f))
                throw Error(
                  this.name + "(" + f + ") has already been initialized"
                )
              if (!this.isComponentSet())
                throw Error(
                  "Component " + this.name + " has not been registered yet"
                )
              var _ = this.getOrInitializeService({
                instanceIdentifier: f,
                options: d,
              })
              try {
                for (
                  var v = Object(r.g)(this.instancesDeferred.entries()),
                    y = v.next();
                  !y.done;
                  y = v.next()
                ) {
                  var m = Object(r.e)(y.value, 2),
                    w = m[0],
                    C = m[1]
                  f === this.normalizeInstanceIdentifier(w) && C.resolve(_)
                }
              } catch (e) {
                t = { error: e }
              } finally {
                try {
                  y && !y.done && (n = v.return) && n.call(v)
                } finally {
                  if (t) throw t.error
                }
              }
              return this.invokeOnInitCallbacks(_, f), _
            }),
            (e.prototype.onInit = function (e) {
              var t = this
              return (
                this.onInitCallbacks.add(e),
                function () {
                  t.onInitCallbacks.delete(e)
                }
              )
            }),
            (e.prototype.invokeOnInitCallbacks = function (e, t) {
              var n, o
              try {
                for (
                  var c = Object(r.g)(this.onInitCallbacks), l = c.next();
                  !l.done;
                  l = c.next()
                ) {
                  var h = l.value
                  try {
                    h(e, t)
                  } catch (e) {}
                }
              } catch (e) {
                n = { error: e }
              } finally {
                try {
                  l && !l.done && (o = c.return) && o.call(c)
                } finally {
                  if (n) throw n.error
                }
              }
            }),
            (e.prototype.getOrInitializeService = function (e) {
              var t,
                n = e.instanceIdentifier,
                r = e.options,
                o = void 0 === r ? {} : r,
                c = this.instances.get(n)
              if (
                !c &&
                this.component &&
                ((c = this.component.instanceFactory(this.container, {
                  instanceIdentifier: ((t = n), t === l ? void 0 : t),
                  options: o,
                })),
                this.instances.set(n, c),
                this.component.onInstanceCreated)
              )
                try {
                  this.component.onInstanceCreated(this.container, n, c)
                } catch (e) {}
              return c || null
            }),
            (e.prototype.normalizeInstanceIdentifier = function (e) {
              return this.component
                ? this.component.multipleInstances
                  ? e
                  : l
                : e
            }),
            (e.prototype.shouldAutoInitialize = function () {
              return (
                !!this.component &&
                "EXPLICIT" !== this.component.instantiationMode
              )
            }),
            e
          )
        })()
      var d = (function () {
        function e(e) {
          ;(this.name = e), (this.providers = new Map())
        }
        return (
          (e.prototype.addComponent = function (component) {
            var e = this.getProvider(component.name)
            if (e.isComponentSet())
              throw new Error(
                "Component " +
                  component.name +
                  " has already been registered with " +
                  this.name
              )
            e.setComponent(component)
          }),
          (e.prototype.addOrOverwriteComponent = function (component) {
            this.getProvider(component.name).isComponentSet() &&
              this.providers.delete(component.name),
              this.addComponent(component)
          }),
          (e.prototype.getProvider = function (e) {
            if (this.providers.has(e)) return this.providers.get(e)
            var t = new h(e, this)
            return this.providers.set(e, t), t
          }),
          (e.prototype.getProviders = function () {
            return Array.from(this.providers.values())
          }),
          e
        )
      })()
    },
    199: function (e, t, n) {
      "use strict"
      function r() {
        for (var s = 0, i = 0, e = arguments.length; i < e; i++)
          s += arguments[i].length
        var t = Array(s),
          n = 0
        for (i = 0; i < e; i++)
          for (var a = arguments[i], r = 0, o = a.length; r < o; r++, n++)
            t[n] = a[r]
        return t
      }
      var o
      n.d(t, "a", function () {
        return c
      }),
        n.d(t, "b", function () {
          return v
        }),
        n.d(t, "c", function () {
          return y
        }),
        n.d(t, "d", function () {
          return m
        })
      var c,
        l = []
      !(function (e) {
        ;(e[(e.DEBUG = 0)] = "DEBUG"),
          (e[(e.VERBOSE = 1)] = "VERBOSE"),
          (e[(e.INFO = 2)] = "INFO"),
          (e[(e.WARN = 3)] = "WARN"),
          (e[(e.ERROR = 4)] = "ERROR"),
          (e[(e.SILENT = 5)] = "SILENT")
      })(c || (c = {}))
      var h = {
          debug: c.DEBUG,
          verbose: c.VERBOSE,
          info: c.INFO,
          warn: c.WARN,
          error: c.ERROR,
          silent: c.SILENT,
        },
        d = c.INFO,
        f =
          (((o = {})[c.DEBUG] = "log"),
          (o[c.VERBOSE] = "log"),
          (o[c.INFO] = "info"),
          (o[c.WARN] = "warn"),
          (o[c.ERROR] = "error"),
          o),
        _ = function (e, t) {
          for (var n = [], o = 2; o < arguments.length; o++)
            n[o - 2] = arguments[o]
          if (!(t < e.logLevel)) {
            var c = new Date().toISOString(),
              l = f[t]
            if (!l)
              throw new Error(
                "Attempted to log a message with an invalid logType (value: " +
                  t +
                  ")"
              )
            console[l].apply(console, r(["[" + c + "]  " + e.name + ":"], n))
          }
        },
        v = (function () {
          function e(e) {
            ;(this.name = e),
              (this._logLevel = d),
              (this._logHandler = _),
              (this._userLogHandler = null),
              l.push(this)
          }
          return (
            Object.defineProperty(e.prototype, "logLevel", {
              get: function () {
                return this._logLevel
              },
              set: function (e) {
                if (!(e in c))
                  throw new TypeError(
                    'Invalid value "' + e + '" assigned to `logLevel`'
                  )
                this._logLevel = e
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.setLogLevel = function (e) {
              this._logLevel = "string" == typeof e ? h[e] : e
            }),
            Object.defineProperty(e.prototype, "logHandler", {
              get: function () {
                return this._logHandler
              },
              set: function (e) {
                if ("function" != typeof e)
                  throw new TypeError(
                    "Value assigned to `logHandler` must be a function"
                  )
                this._logHandler = e
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "userLogHandler", {
              get: function () {
                return this._userLogHandler
              },
              set: function (e) {
                this._userLogHandler = e
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.debug = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t]
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, c.DEBUG], e)),
                this._logHandler.apply(this, r([this, c.DEBUG], e))
            }),
            (e.prototype.log = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t]
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, c.VERBOSE], e)),
                this._logHandler.apply(this, r([this, c.VERBOSE], e))
            }),
            (e.prototype.info = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t]
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, c.INFO], e)),
                this._logHandler.apply(this, r([this, c.INFO], e))
            }),
            (e.prototype.warn = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t]
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, c.WARN], e)),
                this._logHandler.apply(this, r([this, c.WARN], e))
            }),
            (e.prototype.error = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t]
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, c.ERROR], e)),
                this._logHandler.apply(this, r([this, c.ERROR], e))
            }),
            e
          )
        })()
      function y(e) {
        l.forEach(function (t) {
          t.setLogLevel(e)
        })
      }
      function m(e, t) {
        for (
          var n = function (n) {
              var r = null
              t && t.level && (r = h[t.level]),
                (n.userLogHandler =
                  null === e
                    ? null
                    : function (t, n) {
                        for (var o = [], l = 2; l < arguments.length; l++)
                          o[l - 2] = arguments[l]
                        var h = o
                          .map(function (e) {
                            if (null == e) return null
                            if ("string" == typeof e) return e
                            if ("number" == typeof e || "boolean" == typeof e)
                              return e.toString()
                            if (e instanceof Error) return e.message
                            try {
                              return JSON.stringify(e)
                            } catch (e) {
                              return null
                            }
                          })
                          .filter(function (e) {
                            return e
                          })
                          .join(" ")
                        n >= (null != r ? r : t.logLevel) &&
                          e({
                            level: c[n].toLowerCase(),
                            message: h,
                            args: o,
                            type: t.name,
                          })
                      })
            },
            r = 0,
            o = l;
          r < o.length;
          r++
        ) {
          n(o[r])
        }
      }
    },
    201: function (e, t, n) {
      "use strict"
      function r(e) {
        var t
        if (
          ("undefined" != typeof Symbol &&
            (Symbol.asyncIterator && (t = e[Symbol.asyncIterator]),
            null == t && Symbol.iterator && (t = e[Symbol.iterator])),
          null == t && (t = e["@@asyncIterator"]),
          null == t && (t = e["@@iterator"]),
          null == t)
        )
          throw new TypeError("Object is not async iterable")
        return t.call(e)
      }
      n.d(t, "a", function () {
        return r
      })
    },
    202: function (e, t, n) {
      "use strict"
      var r = n(8),
        o = n(4),
        c = n(78),
        l = n(12),
        h = n(10),
        d = n(33),
        f = n(151),
        _ = n(54),
        v = n(5),
        y = n(56),
        m = n(55).f,
        w = n(23).f,
        C = n(11).f,
        O = n(203).trim,
        E = "Number",
        I = o.Number,
        T = I.prototype,
        S = d(y(T)) == E,
        k = function (e) {
          var t,
            n,
            r,
            o,
            c,
            l,
            h,
            code,
            d = _(e, !1)
          if ("string" == typeof d && d.length > 2)
            if (43 === (t = (d = O(d)).charCodeAt(0)) || 45 === t) {
              if (88 === (n = d.charCodeAt(2)) || 120 === n) return NaN
            } else if (48 === t) {
              switch (d.charCodeAt(1)) {
                case 66:
                case 98:
                  ;(r = 2), (o = 49)
                  break
                case 79:
                case 111:
                  ;(r = 8), (o = 55)
                  break
                default:
                  return +d
              }
              for (l = (c = d.slice(2)).length, h = 0; h < l; h++)
                if ((code = c.charCodeAt(h)) < 48 || code > o) return NaN
              return parseInt(c, r)
            }
          return +d
        }
      if (c(E, !I(" 0o1") || !I("0b1") || I("+0x1"))) {
        for (
          var P,
            N = function (e) {
              var t = arguments.length < 1 ? 0 : e,
                n = this
              return n instanceof N &&
                (S
                  ? v(function () {
                      T.valueOf.call(n)
                    })
                  : d(n) != E)
                ? f(new I(k(t)), n, N)
                : k(t)
            },
            j = r
              ? m(I)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(
                  ","
                ),
            x = 0;
          j.length > x;
          x++
        )
          h(I, (P = j[x])) && !h(N, P) && C(N, P, w(I, P))
        ;(N.prototype = T), (T.constructor = N), l(o, E, N)
      }
    },
    203: function (e, t, n) {
      var r = n(15),
        o = "[" + n(204) + "]",
        c = RegExp("^" + o + o + "*"),
        l = RegExp(o + o + "*$"),
        h = function (e) {
          return function (t) {
            var n = String(r(t))
            return (
              1 & e && (n = n.replace(c, "")),
              2 & e && (n = n.replace(l, "")),
              n
            )
          }
        }
      e.exports = { start: h(1), end: h(2), trim: h(3) }
    },
    204: function (e, t) {
      e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
    },
    205: function (e, t, n) {
      "use strict"
      var r = n(2),
        o = n(206)
      r(
        { target: "String", proto: !0, forced: n(207)("sub") },
        {
          sub: function () {
            return o(this, "sub", "", "")
          },
        }
      )
    },
    206: function (e, t, n) {
      var r = n(15),
        o = /"/g
      e.exports = function (e, t, n, c) {
        var l = String(r(e)),
          h = "<" + t
        return (
          "" !== n &&
            (h += " " + n + '="' + String(c).replace(o, "&quot;") + '"'),
          h + ">" + l + "</" + t + ">"
        )
      }
    },
    207: function (e, t, n) {
      var r = n(5)
      e.exports = function (e) {
        return r(function () {
          var t = ""[e]('"')
          return t !== t.toLowerCase() || t.split('"').length > 3
        })
      }
    },
    208: function (e, t, n) {
      "use strict"
      var r = n(195)
      n.d(t, "a", function () {
        return r.a
      })
      var o = "8.6.5"
      r.a.registerVersion("firebase", o, "app"), (r.a.SDK_VERSION = o)
    },
    209: function (e, t, n) {
      "use strict"
      n(210)
    },
    210: function (e, t, n) {
      "use strict"
      ;(function (e, t) {
        var r = n(195),
          o = n(198),
          c = n(197),
          l = n(196),
          h = n(199),
          d = ""
        function f(e) {
          d = e
        }
        var _,
          v = (function () {
            function e(e) {
              ;(this.domStorage_ = e), (this.prefix_ = "firebase:")
            }
            return (
              (e.prototype.set = function (e, t) {
                null == t
                  ? this.domStorage_.removeItem(this.prefixedName_(e))
                  : this.domStorage_.setItem(
                      this.prefixedName_(e),
                      Object(c.C)(t)
                    )
              }),
              (e.prototype.get = function (e) {
                var t = this.domStorage_.getItem(this.prefixedName_(e))
                return null == t ? null : Object(c.w)(t)
              }),
              (e.prototype.remove = function (e) {
                this.domStorage_.removeItem(this.prefixedName_(e))
              }),
              (e.prototype.prefixedName_ = function (e) {
                return this.prefix_ + e
              }),
              (e.prototype.toString = function () {
                return this.domStorage_.toString()
              }),
              e
            )
          })(),
          y = (function () {
            function e() {
              ;(this.cache_ = {}), (this.isInMemoryStorage = !0)
            }
            return (
              (e.prototype.set = function (e, t) {
                null == t ? delete this.cache_[e] : (this.cache_[e] = t)
              }),
              (e.prototype.get = function (e) {
                return Object(c.h)(this.cache_, e) ? this.cache_[e] : null
              }),
              (e.prototype.remove = function (e) {
                delete this.cache_[e]
              }),
              e
            )
          })(),
          m = function (e) {
            try {
              if ("undefined" != typeof window && void 0 !== window[e]) {
                var t = window[e]
                return (
                  t.setItem("firebase:sentinel", "cache"),
                  t.removeItem("firebase:sentinel"),
                  new v(t)
                )
              }
            } catch (e) {}
            return new y()
          },
          w = m("localStorage"),
          C = m("sessionStorage"),
          O = new h.b("@firebase/database"),
          E =
            ((_ = 1),
            function () {
              return _++
            }),
          I = function (e) {
            var t = Object(c.B)(e),
              n = new c.c()
            n.update(t)
            var r = n.digest()
            return c.f.encodeByteArray(r)
          },
          T = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            for (var n = "", i = 0; i < e.length; i++) {
              var r = e[i]
              Array.isArray(r) ||
              (r && "object" == typeof r && "number" == typeof r.length)
                ? (n += T.apply(null, r))
                : (n += "object" == typeof r ? Object(c.C)(r) : r),
                (n += " ")
            }
            return n
          },
          S = null,
          k = !0,
          P = function (e, t) {
            Object(c.d)(
              !t || !0 === e || !1 === e,
              "Can't turn on custom loggers persistently."
            ),
              !0 === e
                ? ((O.logLevel = h.a.VERBOSE),
                  (S = O.log.bind(O)),
                  t && C.set("logging_enabled", !0))
                : "function" == typeof e
                ? (S = e)
                : ((S = null), C.remove("logging_enabled"))
          },
          N = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            if (
              (!0 === k &&
                ((k = !1),
                null === S && !0 === C.get("logging_enabled") && P(!0)),
              S)
            ) {
              var n = T.apply(null, e)
              S(n)
            }
          },
          j = function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n]
              N.apply(void 0, Object(l.f)([e], Object(l.e)(t)))
            }
          },
          x = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            var n =
              "FIREBASE INTERNAL ERROR: " +
              T.apply(void 0, Object(l.f)([], Object(l.e)(e)))
            O.error(n)
          },
          R = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            var n =
              "FIREBASE FATAL ERROR: " +
              T.apply(void 0, Object(l.f)([], Object(l.e)(e)))
            throw (O.error(n), new Error(n))
          },
          D = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            var n =
              "FIREBASE WARNING: " +
              T.apply(void 0, Object(l.f)([], Object(l.e)(e)))
            O.warn(n)
          },
          A = function (data) {
            return (
              "number" == typeof data &&
              (data != data ||
                data === Number.POSITIVE_INFINITY ||
                data === Number.NEGATIVE_INFINITY)
            )
          },
          L = "[MIN_NAME]",
          F = "[MAX_NAME]",
          M = function (a, b) {
            if (a === b) return 0
            if (a === L || b === F) return -1
            if (b === L || a === F) return 1
            var e = G(a),
              t = G(b)
            return null !== e
              ? null !== t
                ? e - t == 0
                  ? a.length - b.length
                  : e - t
                : -1
              : null !== t
              ? 1
              : a < b
              ? -1
              : 1
          },
          W = function (a, b) {
            return a === b ? 0 : a < b ? -1 : 1
          },
          U = function (e, t) {
            if (t && e in t) return t[e]
            throw new Error(
              "Missing required key (" + e + ") in object: " + Object(c.C)(t)
            )
          },
          B = function (e) {
            if ("object" != typeof e || null === e) return Object(c.C)(e)
            var t = []
            for (var n in e) t.push(n)
            t.sort()
            for (var r = "{", i = 0; i < t.length; i++)
              0 !== i && (r += ","),
                (r += Object(c.C)(t[i])),
                (r += ":"),
                (r += B(e[t[i]]))
            return (r += "}")
          },
          z = function (e, t) {
            var n = e.length
            if (n <= t) return [e]
            for (var r = [], o = 0; o < n; o += t)
              o + t > n
                ? r.push(e.substring(o, n))
                : r.push(e.substring(o, o + t))
            return r
          }
        function V(e, t) {
          for (var n in e) e.hasOwnProperty(n) && t(n, e[n])
        }
        var H = function (e) {
          Object(c.d)(!A(e), "Invalid JSON number")
          var s,
            t,
            n,
            r,
            i,
            o = 1023
          0 === e
            ? ((t = 0), (n = 0), (s = 1 / e == -1 / 0 ? 1 : 0))
            : ((s = e < 0),
              (e = Math.abs(e)) >= Math.pow(2, -1022)
                ? ((t =
                    (r = Math.min(Math.floor(Math.log(e) / Math.LN2), o)) + o),
                  (n = Math.round(e * Math.pow(2, 52 - r) - Math.pow(2, 52))))
                : ((t = 0), (n = Math.round(e / Math.pow(2, -1074)))))
          var l = []
          for (i = 52; i; i -= 1) l.push(n % 2 ? 1 : 0), (n = Math.floor(n / 2))
          for (i = 11; i; i -= 1) l.push(t % 2 ? 1 : 0), (t = Math.floor(t / 2))
          l.push(s ? 1 : 0), l.reverse()
          var h = l.join(""),
            d = ""
          for (i = 0; i < 64; i += 8) {
            var f = parseInt(h.substr(i, 8), 2).toString(16)
            1 === f.length && (f = "0" + f), (d += f)
          }
          return d.toLowerCase()
        }
        var Q = new RegExp("^-?(0*)\\d{1,10}$"),
          Y = -2147483648,
          K = 2147483647,
          G = function (e) {
            if (Q.test(e)) {
              var t = Number(e)
              if (t >= Y && t <= K) return t
            }
            return null
          },
          $ = function (e) {
            try {
              e()
            } catch (e) {
              setTimeout(function () {
                var t = e.stack || ""
                throw (D("Exception was thrown by user callback.", t), e)
              }, Math.floor(0))
            }
          },
          J = function (e, time) {
            var t = setTimeout(e, time)
            return "object" == typeof t && t.unref && t.unref(), t
          },
          X = (function () {
            function e(e, t) {
              var n = this
              ;(this.appName_ = e),
                (this.appCheckProvider = t),
                (this.appCheck =
                  null == t ? void 0 : t.getImmediate({ optional: !0 })),
                this.appCheck ||
                  null == t ||
                  t.get().then(function (e) {
                    return (n.appCheck = e)
                  })
            }
            return (
              (e.prototype.getToken = function (e) {
                var t = this
                return this.appCheck
                  ? this.appCheck.getToken(e)
                  : new Promise(function (n, r) {
                      setTimeout(function () {
                        t.appCheck ? t.getToken(e).then(n, r) : n(null)
                      }, 0)
                    })
              }),
              (e.prototype.addTokenChangeListener = function (e) {
                var t
                null === (t = this.appCheckProvider) ||
                  void 0 === t ||
                  t.get().then(function (t) {
                    return t.addTokenListener(e)
                  })
              }),
              (e.prototype.notifyForInvalidToken = function () {
                D(
                  'Provided AppCheck credentials for the app named "' +
                    this.appName_ +
                    '" are invalid. This usually indicates your app was not initialized correctly.'
                )
              }),
              e
            )
          })(),
          Z = (function () {
            function e(e, t, n) {
              var r = this
              ;(this.appName_ = e),
                (this.firebaseOptions_ = t),
                (this.authProvider_ = n),
                (this.auth_ = null),
                (this.auth_ = n.getImmediate({ optional: !0 })),
                this.auth_ ||
                  n.onInit(function (e) {
                    return (r.auth_ = e)
                  })
            }
            return (
              (e.prototype.getToken = function (e) {
                var t = this
                return this.auth_
                  ? this.auth_.getToken(e).catch(function (e) {
                      return e && "auth/token-not-initialized" === e.code
                        ? (N(
                            "Got auth/token-not-initialized error.  Treating as null token."
                          ),
                          null)
                        : Promise.reject(e)
                    })
                  : new Promise(function (n, r) {
                      setTimeout(function () {
                        t.auth_ ? t.getToken(e).then(n, r) : n(null)
                      }, 0)
                    })
              }),
              (e.prototype.addTokenChangeListener = function (e) {
                this.auth_
                  ? this.auth_.addAuthTokenListener(e)
                  : this.authProvider_.get().then(function (t) {
                      return t.addAuthTokenListener(e)
                    })
              }),
              (e.prototype.removeTokenChangeListener = function (e) {
                this.authProvider_.get().then(function (t) {
                  return t.removeAuthTokenListener(e)
                })
              }),
              (e.prototype.notifyForInvalidToken = function () {
                var e =
                  'Provided authentication credentials for the app named "' +
                  this.appName_ +
                  '" are invalid. This usually indicates your app was not initialized correctly. '
                "credential" in this.firebaseOptions_
                  ? (e +=
                      'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                  : "serviceAccount" in this.firebaseOptions_
                  ? (e +=
                      'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                  : (e +=
                      'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
                  D(e)
              }),
              e
            )
          })(),
          ee = (function () {
            function e(e) {
              this.accessToken = e
            }
            return (
              (e.prototype.getToken = function (e) {
                return Promise.resolve({ accessToken: this.accessToken })
              }),
              (e.prototype.addTokenChangeListener = function (e) {
                e(this.accessToken)
              }),
              (e.prototype.removeTokenChangeListener = function (e) {}),
              (e.prototype.notifyForInvalidToken = function () {}),
              (e.OWNER = "owner"),
              e
            )
          })(),
          te = "5",
          ne =
            /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
          re = "websocket",
          ie = "long_polling",
          oe = (function () {
            function e(e, t, n, r, o, c, l) {
              void 0 === o && (o = !1),
                void 0 === c && (c = ""),
                void 0 === l && (l = !1),
                (this.secure = t),
                (this.namespace = n),
                (this.webSocketOnly = r),
                (this.nodeAdmin = o),
                (this.persistenceKey = c),
                (this.includeNamespaceInQueryParams = l),
                (this._host = e.toLowerCase()),
                (this._domain = this._host.substr(this._host.indexOf(".") + 1)),
                (this.internalHost = w.get("host:" + e) || this._host)
            }
            return (
              (e.prototype.isCacheableHost = function () {
                return "s-" === this.internalHost.substr(0, 2)
              }),
              (e.prototype.isCustomHost = function () {
                return (
                  "firebaseio.com" !== this._domain &&
                  "firebaseio-demo.com" !== this._domain
                )
              }),
              Object.defineProperty(e.prototype, "host", {
                get: function () {
                  return this._host
                },
                set: function (e) {
                  e !== this.internalHost &&
                    ((this.internalHost = e),
                    this.isCacheableHost() &&
                      w.set("host:" + this._host, this.internalHost))
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.toString = function () {
                var e = this.toURLString()
                return (
                  this.persistenceKey && (e += "<" + this.persistenceKey + ">"),
                  e
                )
              }),
              (e.prototype.toURLString = function () {
                var e = this.secure ? "https://" : "http://",
                  t = this.includeNamespaceInQueryParams
                    ? "?ns=" + this.namespace
                    : ""
                return "" + e + this.host + "/" + t
              }),
              e
            )
          })()
        function ae(e, t, n) {
          var r
          if (
            (Object(c.d)("string" == typeof t, "typeof type must == string"),
            Object(c.d)("object" == typeof n, "typeof params must == object"),
            t === re)
          )
            r = (e.secure ? "wss://" : "ws://") + e.internalHost + "/.ws?"
          else {
            if (t !== ie) throw new Error("Unknown connection type: " + t)
            r = (e.secure ? "https://" : "http://") + e.internalHost + "/.lp?"
          }
          ;(function (e) {
            return (
              e.host !== e.internalHost ||
              e.isCustomHost() ||
              e.includeNamespaceInQueryParams
            )
          })(e) && (n.ns = e.namespace)
          var o = []
          return (
            V(n, function (e, t) {
              o.push(e + "=" + t)
            }),
            r + o.join("&")
          )
        }
        var se = (function () {
            function e() {
              this.counters_ = {}
            }
            return (
              (e.prototype.incrementCounter = function (e, t) {
                void 0 === t && (t = 1),
                  Object(c.h)(this.counters_, e) || (this.counters_[e] = 0),
                  (this.counters_[e] += t)
              }),
              (e.prototype.get = function () {
                return Object(c.k)(this.counters_)
              }),
              e
            )
          })(),
          ue = {},
          ce = {}
        function le(e) {
          var t = e.toString()
          return ue[t] || (ue[t] = new se()), ue[t]
        }
        var he = (function () {
            function e(e) {
              ;(this.onMessage_ = e),
                (this.pendingResponses = []),
                (this.currentResponseNum = 0),
                (this.closeAfterResponse = -1),
                (this.onClose = null)
            }
            return (
              (e.prototype.closeAfter = function (e, t) {
                ;(this.closeAfterResponse = e),
                  (this.onClose = t),
                  this.closeAfterResponse < this.currentResponseNum &&
                    (this.onClose(), (this.onClose = null))
              }),
              (e.prototype.handleResponse = function (e, data) {
                var t = this
                this.pendingResponses[e] = data
                for (
                  var n = function () {
                      var e = r.pendingResponses[r.currentResponseNum]
                      delete r.pendingResponses[r.currentResponseNum]
                      for (
                        var n = function (i) {
                            e[i] &&
                              $(function () {
                                t.onMessage_(e[i])
                              })
                          },
                          i = 0;
                        i < e.length;
                        ++i
                      )
                        n(i)
                      if (r.currentResponseNum === r.closeAfterResponse)
                        return (
                          r.onClose && (r.onClose(), (r.onClose = null)),
                          "break"
                        )
                      r.currentResponseNum++
                    },
                    r = this;
                  this.pendingResponses[this.currentResponseNum];

                ) {
                  if ("break" === n()) break
                }
              }),
              e
            )
          })(),
          de = "start",
          pe = "close",
          fe = (function () {
            function e(e, t, n, r, o, c, l) {
              var h = this
              ;(this.connId = e),
                (this.repoInfo = t),
                (this.applicationId = n),
                (this.appCheckToken = r),
                (this.authToken = o),
                (this.transportSessionId = c),
                (this.lastSessionId = l),
                (this.bytesSent = 0),
                (this.bytesReceived = 0),
                (this.everConnected_ = !1),
                (this.log_ = j(e)),
                (this.stats_ = le(t)),
                (this.urlFn = function (e) {
                  return (
                    h.appCheckToken && (e.ac = h.appCheckToken), ae(t, ie, e)
                  )
                })
            }
            return (
              (e.prototype.open = function (e, t) {
                var n = this
                ;(this.curSegmentNum = 0),
                  (this.onDisconnect_ = t),
                  (this.myPacketOrderer = new he(e)),
                  (this.isClosed_ = !1),
                  (this.connectTimeoutTimer_ = setTimeout(function () {
                    n.log_("Timed out trying to connect."),
                      n.onClosed_(),
                      (n.connectTimeoutTimer_ = null)
                  }, Math.floor(3e4))),
                  (function (e) {
                    if (Object(c.t)() || "complete" === document.readyState) e()
                    else {
                      var t = !1,
                        n = function () {
                          document.body
                            ? t || ((t = !0), e())
                            : setTimeout(n, Math.floor(10))
                        }
                      document.addEventListener
                        ? (document.addEventListener("DOMContentLoaded", n, !1),
                          window.addEventListener("load", n, !1))
                        : document.attachEvent &&
                          (document.attachEvent(
                            "onreadystatechange",
                            function () {
                              "complete" === document.readyState && n()
                            }
                          ),
                          window.attachEvent("onload", n))
                    }
                  })(function () {
                    if (!n.isClosed_) {
                      n.scriptTagHolder = new _e(
                        function () {
                          for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t]
                          var r = Object(l.e)(e, 5),
                            o = r[0],
                            c = r[1],
                            h = r[2]
                          r[3], r[4]
                          if ((n.incrementIncomingBytes_(e), n.scriptTagHolder))
                            if (
                              (n.connectTimeoutTimer_ &&
                                (clearTimeout(n.connectTimeoutTimer_),
                                (n.connectTimeoutTimer_ = null)),
                              (n.everConnected_ = !0),
                              o === de)
                            )
                              (n.id = c), (n.password = h)
                            else {
                              if (o !== pe)
                                throw new Error(
                                  "Unrecognized command received: " + o
                                )
                              c
                                ? ((n.scriptTagHolder.sendNewPolls = !1),
                                  n.myPacketOrderer.closeAfter(c, function () {
                                    n.onClosed_()
                                  }))
                                : n.onClosed_()
                            }
                        },
                        function () {
                          for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t]
                          var r = Object(l.e)(e, 2),
                            o = r[0],
                            data = r[1]
                          n.incrementIncomingBytes_(e),
                            n.myPacketOrderer.handleResponse(o, data)
                        },
                        function () {
                          n.onClosed_()
                        },
                        n.urlFn
                      )
                      var e = { start: "t" }
                      ;(e.ser = Math.floor(1e8 * Math.random())),
                        n.scriptTagHolder.uniqueCallbackIdentifier &&
                          (e.cb = n.scriptTagHolder.uniqueCallbackIdentifier),
                        (e.v = te),
                        n.transportSessionId && (e.s = n.transportSessionId),
                        n.lastSessionId && (e.ls = n.lastSessionId),
                        n.applicationId && (e.p = n.applicationId),
                        n.appCheckToken && (e.ac = n.appCheckToken),
                        "undefined" != typeof location &&
                          location.hostname &&
                          ne.test(location.hostname) &&
                          (e.r = "f")
                      var t = n.urlFn(e)
                      n.log_("Connecting via long-poll to " + t),
                        n.scriptTagHolder.addTag(t, function () {})
                    }
                  })
              }),
              (e.prototype.start = function () {
                this.scriptTagHolder.startLongPoll(this.id, this.password),
                  this.addDisconnectPingFrame(this.id, this.password)
              }),
              (e.forceAllow = function () {
                e.forceAllow_ = !0
              }),
              (e.forceDisallow = function () {
                e.forceDisallow_ = !0
              }),
              (e.isAvailable = function () {
                return (
                  !Object(c.t)() &&
                  (!!e.forceAllow_ ||
                    !(
                      e.forceDisallow_ ||
                      "undefined" == typeof document ||
                      null == document.createElement ||
                      ("object" == typeof window &&
                        window.chrome &&
                        window.chrome.extension &&
                        !/^chrome/.test(window.location.href)) ||
                      ("object" == typeof Windows &&
                        "object" == typeof Windows.UI)
                    ))
                )
              }),
              (e.prototype.markConnectionHealthy = function () {}),
              (e.prototype.shutdown_ = function () {
                ;(this.isClosed_ = !0),
                  this.scriptTagHolder &&
                    (this.scriptTagHolder.close(),
                    (this.scriptTagHolder = null)),
                  this.myDisconnFrame &&
                    (document.body.removeChild(this.myDisconnFrame),
                    (this.myDisconnFrame = null)),
                  this.connectTimeoutTimer_ &&
                    (clearTimeout(this.connectTimeoutTimer_),
                    (this.connectTimeoutTimer_ = null))
              }),
              (e.prototype.onClosed_ = function () {
                this.isClosed_ ||
                  (this.log_("Longpoll is closing itself"),
                  this.shutdown_(),
                  this.onDisconnect_ &&
                    (this.onDisconnect_(this.everConnected_),
                    (this.onDisconnect_ = null)))
              }),
              (e.prototype.close = function () {
                this.isClosed_ ||
                  (this.log_("Longpoll is being closed."), this.shutdown_())
              }),
              (e.prototype.send = function (data) {
                var e = Object(c.C)(data)
                ;(this.bytesSent += e.length),
                  this.stats_.incrementCounter("bytes_sent", e.length)
                for (
                  var t = Object(c.g)(e), n = z(t, 1840), i = 0;
                  i < n.length;
                  i++
                )
                  this.scriptTagHolder.enqueueSegment(
                    this.curSegmentNum,
                    n.length,
                    n[i]
                  ),
                    this.curSegmentNum++
              }),
              (e.prototype.addDisconnectPingFrame = function (e, t) {
                if (!Object(c.t)()) {
                  this.myDisconnFrame = document.createElement("iframe")
                  var n = { dframe: "t" }
                  ;(n.id = e),
                    (n.pw = t),
                    (this.myDisconnFrame.src = this.urlFn(n)),
                    (this.myDisconnFrame.style.display = "none"),
                    document.body.appendChild(this.myDisconnFrame)
                }
              }),
              (e.prototype.incrementIncomingBytes_ = function (e) {
                var t = Object(c.C)(e).length
                ;(this.bytesReceived += t),
                  this.stats_.incrementCounter("bytes_received", t)
              }),
              e
            )
          })(),
          _e = (function () {
            function e(t, n, r, o) {
              if (
                ((this.onDisconnect = r),
                (this.urlFn = o),
                (this.outstandingRequests = new Set()),
                (this.pendingSegs = []),
                (this.currentSerial = Math.floor(1e8 * Math.random())),
                (this.sendNewPolls = !0),
                Object(c.t)())
              )
                (this.commandCB = t), (this.onMessageCB = n)
              else {
                ;(this.uniqueCallbackIdentifier = E()),
                  (window["pLPCommand" + this.uniqueCallbackIdentifier] = t),
                  (window["pRTLPCB" + this.uniqueCallbackIdentifier] = n),
                  (this.myIFrame = e.createIFrame_())
                var script = ""
                if (
                  this.myIFrame.src &&
                  "javascript:" ===
                    this.myIFrame.src.substr(0, "javascript:".length)
                )
                  script =
                    '<script>document.domain="' +
                    document.domain +
                    '";</script>'
                var l = "<html><body>" + script + "</body></html>"
                try {
                  this.myIFrame.doc.open(),
                    this.myIFrame.doc.write(l),
                    this.myIFrame.doc.close()
                } catch (e) {
                  N("frame writing exception"), e.stack && N(e.stack), N(e)
                }
              }
            }
            return (
              (e.createIFrame_ = function () {
                var iframe = document.createElement("iframe")
                if (((iframe.style.display = "none"), !document.body))
                  throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready."
                document.body.appendChild(iframe)
                try {
                  iframe.contentWindow.document ||
                    N("No IE domain setting required")
                } catch (t) {
                  var e = document.domain
                  iframe.src =
                    "javascript:void((function(){document.open();document.domain='" +
                    e +
                    "';document.close();})())"
                }
                return (
                  iframe.contentDocument
                    ? (iframe.doc = iframe.contentDocument)
                    : iframe.contentWindow
                    ? (iframe.doc = iframe.contentWindow.document)
                    : iframe.document && (iframe.doc = iframe.document),
                  iframe
                )
              }),
              (e.prototype.close = function () {
                var e = this
                ;(this.alive = !1),
                  this.myIFrame &&
                    ((this.myIFrame.doc.body.innerHTML = ""),
                    setTimeout(function () {
                      null !== e.myIFrame &&
                        (document.body.removeChild(e.myIFrame),
                        (e.myIFrame = null))
                    }, Math.floor(0)))
                var t = this.onDisconnect
                t && ((this.onDisconnect = null), t())
              }),
              (e.prototype.startLongPoll = function (e, t) {
                for (
                  this.myID = e, this.myPW = t, this.alive = !0;
                  this.newRequest_();

                );
              }),
              (e.prototype.newRequest_ = function () {
                if (
                  this.alive &&
                  this.sendNewPolls &&
                  this.outstandingRequests.size <
                    (this.pendingSegs.length > 0 ? 2 : 1)
                ) {
                  this.currentSerial++
                  var e = {}
                  ;(e.id = this.myID),
                    (e.pw = this.myPW),
                    (e.ser = this.currentSerial)
                  for (
                    var t = this.urlFn(e), n = "", i = 0;
                    this.pendingSegs.length > 0;

                  ) {
                    if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870))
                      break
                    var r = this.pendingSegs.shift()
                    ;(n =
                      n +
                      "&seg" +
                      i +
                      "=" +
                      r.seg +
                      "&ts" +
                      i +
                      "=" +
                      r.ts +
                      "&d" +
                      i +
                      "=" +
                      r.d),
                      i++
                  }
                  return (
                    (t += n), this.addLongPollTag_(t, this.currentSerial), !0
                  )
                }
                return !1
              }),
              (e.prototype.enqueueSegment = function (e, t, data) {
                this.pendingSegs.push({ seg: e, ts: t, d: data }),
                  this.alive && this.newRequest_()
              }),
              (e.prototype.addLongPollTag_ = function (e, t) {
                var n = this
                this.outstandingRequests.add(t)
                var r = function () {
                    n.outstandingRequests.delete(t), n.newRequest_()
                  },
                  o = setTimeout(r, Math.floor(25e3))
                this.addTag(e, function () {
                  clearTimeout(o), r()
                })
              }),
              (e.prototype.addTag = function (e, t) {
                var n = this
                Object(c.t)()
                  ? this.doNodeLongPoll(e, t)
                  : setTimeout(function () {
                      try {
                        if (!n.sendNewPolls) return
                        var r = n.myIFrame.doc.createElement("script")
                        ;(r.type = "text/javascript"),
                          (r.async = !0),
                          (r.src = e),
                          (r.onload = r.onreadystatechange =
                            function () {
                              var e = r.readyState
                              ;(e && "loaded" !== e && "complete" !== e) ||
                                ((r.onload = r.onreadystatechange = null),
                                r.parentNode && r.parentNode.removeChild(r),
                                t())
                            }),
                          (r.onerror = function () {
                            N("Long-poll script failed to load: " + e),
                              (n.sendNewPolls = !1),
                              n.close()
                          }),
                          n.myIFrame.doc.body.appendChild(r)
                      } catch (e) {}
                    }, Math.floor(1))
              }),
              e
            )
          })(),
          ve = null
        "undefined" != typeof MozWebSocket
          ? (ve = MozWebSocket)
          : "undefined" != typeof WebSocket && (ve = WebSocket)
        var ye = (function () {
            function t(e, n, r, o, c, l, h) {
              ;(this.connId = e),
                (this.applicationId = r),
                (this.appCheckToken = o),
                (this.authToken = c),
                (this.keepaliveTimer = null),
                (this.frames = null),
                (this.totalFrames = 0),
                (this.bytesSent = 0),
                (this.bytesReceived = 0),
                (this.log_ = j(this.connId)),
                (this.stats_ = le(n)),
                (this.connURL = t.connectionURL_(n, l, h, o)),
                (this.nodeAdmin = n.nodeAdmin)
            }
            return (
              (t.connectionURL_ = function (e, t, n, r) {
                var o = {}
                return (
                  (o.v = te),
                  !Object(c.t)() &&
                    "undefined" != typeof location &&
                    location.hostname &&
                    ne.test(location.hostname) &&
                    (o.r = "f"),
                  t && (o.s = t),
                  n && (o.ls = n),
                  r && (o.ac = r),
                  ae(e, re, o)
                )
              }),
              (t.prototype.open = function (t, n) {
                var r = this
                ;(this.onDisconnect = n),
                  (this.onMessage = t),
                  this.log_("Websocket connecting to " + this.connURL),
                  (this.everConnected_ = !1),
                  w.set("previous_websocket_failure", !0)
                try {
                  if (Object(c.t)()) {
                    var o = this.nodeAdmin ? "AdminNode" : "Node",
                      l = {
                        headers: {
                          "User-Agent":
                            "Firebase/5/" + d + "/" + e.platform + "/" + o,
                          "X-Firebase-GMPID": this.applicationId || "",
                        },
                      }
                    this.nodeAdmin
                      ? (l.headers.Authorization = this.authToken || "")
                      : (l.headers["X-Firebase-AppCheck"] =
                          this.appCheckToken || "")
                    var h = e.env,
                      f =
                        0 === this.connURL.indexOf("wss://")
                          ? h.HTTPS_PROXY || h.https_proxy
                          : h.HTTP_PROXY || h.http_proxy
                    f && (l.proxy = { origin: f }),
                      (this.mySock = new ve(this.connURL, [], l))
                  } else {
                    l = {
                      headers: {
                        "X-Firebase-GMPID": this.applicationId || "",
                        "X-Firebase-AppCheck": this.appCheckToken || "",
                      },
                    }
                    this.mySock = new ve(this.connURL, [], l)
                  }
                } catch (e) {
                  this.log_("Error instantiating WebSocket.")
                  var _ = e.message || e.data
                  return _ && this.log_(_), void this.onClosed_()
                }
                ;(this.mySock.onopen = function () {
                  r.log_("Websocket connected."), (r.everConnected_ = !0)
                }),
                  (this.mySock.onclose = function () {
                    r.log_("Websocket connection was disconnected."),
                      (r.mySock = null),
                      r.onClosed_()
                  }),
                  (this.mySock.onmessage = function (e) {
                    r.handleIncomingFrame(e)
                  }),
                  (this.mySock.onerror = function (e) {
                    r.log_("WebSocket error.  Closing connection.")
                    var t = e.message || e.data
                    t && r.log_(t), r.onClosed_()
                  })
              }),
              (t.prototype.start = function () {}),
              (t.forceDisallow = function () {
                t.forceDisallow_ = !0
              }),
              (t.isAvailable = function () {
                var e = !1
                if ("undefined" != typeof navigator && navigator.userAgent) {
                  var n = navigator.userAgent.match(
                    /Android ([0-9]{0,}\.[0-9]{0,})/
                  )
                  n && n.length > 1 && parseFloat(n[1]) < 4.4 && (e = !0)
                }
                return !e && null !== ve && !t.forceDisallow_
              }),
              (t.previouslyFailed = function () {
                return (
                  w.isInMemoryStorage ||
                  !0 === w.get("previous_websocket_failure")
                )
              }),
              (t.prototype.markConnectionHealthy = function () {
                w.remove("previous_websocket_failure")
              }),
              (t.prototype.appendFrame_ = function (data) {
                if (
                  (this.frames.push(data),
                  this.frames.length === this.totalFrames)
                ) {
                  var e = this.frames.join("")
                  this.frames = null
                  var t = Object(c.w)(e)
                  this.onMessage(t)
                }
              }),
              (t.prototype.handleNewFrameCount_ = function (e) {
                ;(this.totalFrames = e), (this.frames = [])
              }),
              (t.prototype.extractFrameCount_ = function (data) {
                if (
                  (Object(c.d)(
                    null === this.frames,
                    "We already have a frame buffer"
                  ),
                  data.length <= 6)
                ) {
                  var e = Number(data)
                  if (!isNaN(e)) return this.handleNewFrameCount_(e), null
                }
                return this.handleNewFrameCount_(1), data
              }),
              (t.prototype.handleIncomingFrame = function (e) {
                if (null !== this.mySock) {
                  var data = e.data
                  if (
                    ((this.bytesReceived += data.length),
                    this.stats_.incrementCounter("bytes_received", data.length),
                    this.resetKeepAlive(),
                    null !== this.frames)
                  )
                    this.appendFrame_(data)
                  else {
                    var t = this.extractFrameCount_(data)
                    null !== t && this.appendFrame_(t)
                  }
                }
              }),
              (t.prototype.send = function (data) {
                this.resetKeepAlive()
                var e = Object(c.C)(data)
                ;(this.bytesSent += e.length),
                  this.stats_.incrementCounter("bytes_sent", e.length)
                var t = z(e, 16384)
                t.length > 1 && this.sendString_(String(t.length))
                for (var i = 0; i < t.length; i++) this.sendString_(t[i])
              }),
              (t.prototype.shutdown_ = function () {
                ;(this.isClosed_ = !0),
                  this.keepaliveTimer &&
                    (clearInterval(this.keepaliveTimer),
                    (this.keepaliveTimer = null)),
                  this.mySock && (this.mySock.close(), (this.mySock = null))
              }),
              (t.prototype.onClosed_ = function () {
                this.isClosed_ ||
                  (this.log_("WebSocket is closing itself"),
                  this.shutdown_(),
                  this.onDisconnect &&
                    (this.onDisconnect(this.everConnected_),
                    (this.onDisconnect = null)))
              }),
              (t.prototype.close = function () {
                this.isClosed_ ||
                  (this.log_("WebSocket is being closed"), this.shutdown_())
              }),
              (t.prototype.resetKeepAlive = function () {
                var e = this
                clearInterval(this.keepaliveTimer),
                  (this.keepaliveTimer = setInterval(function () {
                    e.mySock && e.sendString_("0"), e.resetKeepAlive()
                  }, Math.floor(45e3)))
              }),
              (t.prototype.sendString_ = function (e) {
                try {
                  this.mySock.send(e)
                } catch (e) {
                  this.log_(
                    "Exception thrown from WebSocket.send():",
                    e.message || e.data,
                    "Closing connection."
                  ),
                    setTimeout(this.onClosed_.bind(this), 0)
                }
              }),
              (t.responsesRequiredToBeHealthy = 2),
              (t.healthyTimeout = 3e4),
              t
            )
          })(),
          ge = (function () {
            function e(e) {
              this.initTransports_(e)
            }
            return (
              Object.defineProperty(e, "ALL_TRANSPORTS", {
                get: function () {
                  return [fe, ye]
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.initTransports_ = function (t) {
                var n,
                  r,
                  o = ye && ye.isAvailable(),
                  c = o && !ye.previouslyFailed()
                if (
                  (t.webSocketOnly &&
                    (o ||
                      D(
                        "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
                      ),
                    (c = !0)),
                  c)
                )
                  this.transports_ = [ye]
                else {
                  var h = (this.transports_ = [])
                  try {
                    for (
                      var d = Object(l.g)(e.ALL_TRANSPORTS), f = d.next();
                      !f.done;
                      f = d.next()
                    ) {
                      var _ = f.value
                      _ && _.isAvailable() && h.push(_)
                    }
                  } catch (e) {
                    n = { error: e }
                  } finally {
                    try {
                      f && !f.done && (r = d.return) && r.call(d)
                    } finally {
                      if (n) throw n.error
                    }
                  }
                }
              }),
              (e.prototype.initialTransport = function () {
                if (this.transports_.length > 0) return this.transports_[0]
                throw new Error("No transports available")
              }),
              (e.prototype.upgradeTransport = function () {
                return this.transports_.length > 1 ? this.transports_[1] : null
              }),
              e
            )
          })(),
          me = (function () {
            function e(e, t, n, r, o, c, l, h, d, f) {
              ;(this.id = e),
                (this.repoInfo_ = t),
                (this.applicationId_ = n),
                (this.appCheckToken_ = r),
                (this.authToken_ = o),
                (this.onMessage_ = c),
                (this.onReady_ = l),
                (this.onDisconnect_ = h),
                (this.onKill_ = d),
                (this.lastSessionId = f),
                (this.connectionCount = 0),
                (this.pendingDataMessages = []),
                (this.state_ = 0),
                (this.log_ = j("c:" + this.id + ":")),
                (this.transportManager_ = new ge(t)),
                this.log_("Connection created"),
                this.start_()
            }
            return (
              (e.prototype.start_ = function () {
                var e = this,
                  t = this.transportManager_.initialTransport()
                ;(this.conn_ = new t(
                  this.nextTransportId_(),
                  this.repoInfo_,
                  this.applicationId_,
                  this.appCheckToken_,
                  this.lastSessionId
                )),
                  (this.primaryResponsesRequired_ =
                    t.responsesRequiredToBeHealthy || 0)
                var n = this.connReceiver_(this.conn_),
                  r = this.disconnReceiver_(this.conn_)
                ;(this.tx_ = this.conn_),
                  (this.rx_ = this.conn_),
                  (this.secondaryConn_ = null),
                  (this.isHealthy_ = !1),
                  setTimeout(function () {
                    e.conn_ && e.conn_.open(n, r)
                  }, Math.floor(0))
                var o = t.healthyTimeout || 0
                o > 0 &&
                  (this.healthyTimeout_ = J(function () {
                    ;(e.healthyTimeout_ = null),
                      e.isHealthy_ ||
                        (e.conn_ && e.conn_.bytesReceived > 102400
                          ? (e.log_(
                              "Connection exceeded healthy timeout but has received " +
                                e.conn_.bytesReceived +
                                " bytes.  Marking connection healthy."
                            ),
                            (e.isHealthy_ = !0),
                            e.conn_.markConnectionHealthy())
                          : e.conn_ && e.conn_.bytesSent > 10240
                          ? e.log_(
                              "Connection exceeded healthy timeout but has sent " +
                                e.conn_.bytesSent +
                                " bytes.  Leaving connection alive."
                            )
                          : (e.log_(
                              "Closing unhealthy connection after timeout."
                            ),
                            e.close()))
                  }, Math.floor(o)))
              }),
              (e.prototype.nextTransportId_ = function () {
                return "c:" + this.id + ":" + this.connectionCount++
              }),
              (e.prototype.disconnReceiver_ = function (e) {
                var t = this
                return function (n) {
                  e === t.conn_
                    ? t.onConnectionLost_(n)
                    : e === t.secondaryConn_
                    ? (t.log_("Secondary connection lost."),
                      t.onSecondaryConnectionLost_())
                    : t.log_("closing an old connection")
                }
              }),
              (e.prototype.connReceiver_ = function (e) {
                var t = this
                return function (n) {
                  2 !== t.state_ &&
                    (e === t.rx_
                      ? t.onPrimaryMessageReceived_(n)
                      : e === t.secondaryConn_
                      ? t.onSecondaryMessageReceived_(n)
                      : t.log_("message on old connection"))
                }
              }),
              (e.prototype.sendRequest = function (e) {
                var t = { t: "d", d: e }
                this.sendData_(t)
              }),
              (e.prototype.tryCleanupConnection = function () {
                this.tx_ === this.secondaryConn_ &&
                  this.rx_ === this.secondaryConn_ &&
                  (this.log_(
                    "cleaning up and promoting a connection: " +
                      this.secondaryConn_.connId
                  ),
                  (this.conn_ = this.secondaryConn_),
                  (this.secondaryConn_ = null))
              }),
              (e.prototype.onSecondaryControl_ = function (e) {
                if ("t" in e) {
                  var t = e.t
                  "a" === t
                    ? this.upgradeIfSecondaryHealthy_()
                    : "r" === t
                    ? (this.log_("Got a reset on secondary, closing it"),
                      this.secondaryConn_.close(),
                      (this.tx_ !== this.secondaryConn_ &&
                        this.rx_ !== this.secondaryConn_) ||
                        this.close())
                    : "o" === t &&
                      (this.log_("got pong on secondary."),
                      this.secondaryResponsesRequired_--,
                      this.upgradeIfSecondaryHealthy_())
                }
              }),
              (e.prototype.onSecondaryMessageReceived_ = function (e) {
                var t = U("t", e),
                  data = U("d", e)
                if ("c" === t) this.onSecondaryControl_(data)
                else {
                  if ("d" !== t) throw new Error("Unknown protocol layer: " + t)
                  this.pendingDataMessages.push(data)
                }
              }),
              (e.prototype.upgradeIfSecondaryHealthy_ = function () {
                this.secondaryResponsesRequired_ <= 0
                  ? (this.log_("Secondary connection is healthy."),
                    (this.isHealthy_ = !0),
                    this.secondaryConn_.markConnectionHealthy(),
                    this.proceedWithUpgrade_())
                  : (this.log_("sending ping on secondary."),
                    this.secondaryConn_.send({ t: "c", d: { t: "p", d: {} } }))
              }),
              (e.prototype.proceedWithUpgrade_ = function () {
                this.secondaryConn_.start(),
                  this.log_("sending client ack on secondary"),
                  this.secondaryConn_.send({ t: "c", d: { t: "a", d: {} } }),
                  this.log_("Ending transmission on primary"),
                  this.conn_.send({ t: "c", d: { t: "n", d: {} } }),
                  (this.tx_ = this.secondaryConn_),
                  this.tryCleanupConnection()
              }),
              (e.prototype.onPrimaryMessageReceived_ = function (e) {
                var t = U("t", e),
                  data = U("d", e)
                "c" === t
                  ? this.onControl_(data)
                  : "d" === t && this.onDataMessage_(data)
              }),
              (e.prototype.onDataMessage_ = function (e) {
                this.onPrimaryResponse_(), this.onMessage_(e)
              }),
              (e.prototype.onPrimaryResponse_ = function () {
                this.isHealthy_ ||
                  (this.primaryResponsesRequired_--,
                  this.primaryResponsesRequired_ <= 0 &&
                    (this.log_("Primary connection is healthy."),
                    (this.isHealthy_ = !0),
                    this.conn_.markConnectionHealthy()))
              }),
              (e.prototype.onControl_ = function (e) {
                var t = U("t", e)
                if ("d" in e) {
                  var n = e.d
                  if ("h" === t) this.onHandshake_(n)
                  else if ("n" === t) {
                    this.log_("recvd end transmission on primary"),
                      (this.rx_ = this.secondaryConn_)
                    for (var i = 0; i < this.pendingDataMessages.length; ++i)
                      this.onDataMessage_(this.pendingDataMessages[i])
                    ;(this.pendingDataMessages = []),
                      this.tryCleanupConnection()
                  } else
                    "s" === t
                      ? this.onConnectionShutdown_(n)
                      : "r" === t
                      ? this.onReset_(n)
                      : "e" === t
                      ? x("Server Error: " + n)
                      : "o" === t
                      ? (this.log_("got pong on primary."),
                        this.onPrimaryResponse_(),
                        this.sendPingOnPrimaryIfNecessary_())
                      : x("Unknown control packet command: " + t)
                }
              }),
              (e.prototype.onHandshake_ = function (e) {
                var t = e.ts,
                  n = e.v,
                  r = e.h
                ;(this.sessionId = e.s),
                  (this.repoInfo_.host = r),
                  0 === this.state_ &&
                    (this.conn_.start(),
                    this.onConnectionEstablished_(this.conn_, t),
                    te !== n && D("Protocol version mismatch detected"),
                    this.tryStartUpgrade_())
              }),
              (e.prototype.tryStartUpgrade_ = function () {
                var e = this.transportManager_.upgradeTransport()
                e && this.startUpgrade_(e)
              }),
              (e.prototype.startUpgrade_ = function (e) {
                var t = this
                ;(this.secondaryConn_ = new e(
                  this.nextTransportId_(),
                  this.repoInfo_,
                  this.applicationId_,
                  this.appCheckToken_,
                  this.authToken_,
                  this.sessionId
                )),
                  (this.secondaryResponsesRequired_ =
                    e.responsesRequiredToBeHealthy || 0)
                var n = this.connReceiver_(this.secondaryConn_),
                  r = this.disconnReceiver_(this.secondaryConn_)
                this.secondaryConn_.open(n, r),
                  J(function () {
                    t.secondaryConn_ &&
                      (t.log_("Timed out trying to upgrade."),
                      t.secondaryConn_.close())
                  }, Math.floor(6e4))
              }),
              (e.prototype.onReset_ = function (e) {
                this.log_("Reset packet received.  New host: " + e),
                  (this.repoInfo_.host = e),
                  1 === this.state_
                    ? this.close()
                    : (this.closeConnections_(), this.start_())
              }),
              (e.prototype.onConnectionEstablished_ = function (e, t) {
                var n = this
                this.log_("Realtime connection established."),
                  (this.conn_ = e),
                  (this.state_ = 1),
                  this.onReady_ &&
                    (this.onReady_(t, this.sessionId), (this.onReady_ = null)),
                  0 === this.primaryResponsesRequired_
                    ? (this.log_("Primary connection is healthy."),
                      (this.isHealthy_ = !0))
                    : J(function () {
                        n.sendPingOnPrimaryIfNecessary_()
                      }, Math.floor(5e3))
              }),
              (e.prototype.sendPingOnPrimaryIfNecessary_ = function () {
                this.isHealthy_ ||
                  1 !== this.state_ ||
                  (this.log_("sending ping on primary."),
                  this.sendData_({ t: "c", d: { t: "p", d: {} } }))
              }),
              (e.prototype.onSecondaryConnectionLost_ = function () {
                var e = this.secondaryConn_
                ;(this.secondaryConn_ = null),
                  (this.tx_ !== e && this.rx_ !== e) || this.close()
              }),
              (e.prototype.onConnectionLost_ = function (e) {
                ;(this.conn_ = null),
                  e || 0 !== this.state_
                    ? 1 === this.state_ &&
                      this.log_("Realtime connection lost.")
                    : (this.log_("Realtime connection failed."),
                      this.repoInfo_.isCacheableHost() &&
                        (w.remove("host:" + this.repoInfo_.host),
                        (this.repoInfo_.internalHost = this.repoInfo_.host))),
                  this.close()
              }),
              (e.prototype.onConnectionShutdown_ = function (e) {
                this.log_(
                  "Connection shutdown command received. Shutting down..."
                ),
                  this.onKill_ && (this.onKill_(e), (this.onKill_ = null)),
                  (this.onDisconnect_ = null),
                  this.close()
              }),
              (e.prototype.sendData_ = function (data) {
                if (1 !== this.state_) throw "Connection is not connected"
                this.tx_.send(data)
              }),
              (e.prototype.close = function () {
                2 !== this.state_ &&
                  (this.log_("Closing realtime connection."),
                  (this.state_ = 2),
                  this.closeConnections_(),
                  this.onDisconnect_ &&
                    (this.onDisconnect_(), (this.onDisconnect_ = null)))
              }),
              (e.prototype.closeConnections_ = function () {
                this.log_("Shutting down all connections"),
                  this.conn_ && (this.conn_.close(), (this.conn_ = null)),
                  this.secondaryConn_ &&
                    (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
                  this.healthyTimeout_ &&
                    (clearTimeout(this.healthyTimeout_),
                    (this.healthyTimeout_ = null))
              }),
              e
            )
          })(),
          be = (function () {
            function e() {}
            return (
              (e.prototype.put = function (e, data, t, n) {}),
              (e.prototype.merge = function (e, data, t, n) {}),
              (e.prototype.refreshAuthToken = function (e) {}),
              (e.prototype.refreshAppCheckToken = function (e) {}),
              (e.prototype.onDisconnectPut = function (e, data, t) {}),
              (e.prototype.onDisconnectMerge = function (e, data, t) {}),
              (e.prototype.onDisconnectCancel = function (e, t) {}),
              (e.prototype.reportStats = function (e) {}),
              e
            )
          })(),
          we = (function () {
            function e(e) {
              ;(this.allowedEvents_ = e),
                (this.listeners_ = {}),
                Object(c.d)(
                  Array.isArray(e) && e.length > 0,
                  "Requires a non-empty array"
                )
            }
            return (
              (e.prototype.trigger = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n]
                if (Array.isArray(this.listeners_[e]))
                  for (
                    var r = Object(l.f)([], Object(l.e)(this.listeners_[e])),
                      i = 0;
                    i < r.length;
                    i++
                  )
                    r[i].callback.apply(r[i].context, t)
              }),
              (e.prototype.on = function (e, t, n) {
                this.validateEventType_(e),
                  (this.listeners_[e] = this.listeners_[e] || []),
                  this.listeners_[e].push({ callback: t, context: n })
                var r = this.getInitialEvent(e)
                r && t.apply(n, r)
              }),
              (e.prototype.off = function (e, t, n) {
                this.validateEventType_(e)
                for (var r = this.listeners_[e] || [], i = 0; i < r.length; i++)
                  if (r[i].callback === t && (!n || n === r[i].context))
                    return void r.splice(i, 1)
              }),
              (e.prototype.validateEventType_ = function (e) {
                Object(c.d)(
                  this.allowedEvents_.find(function (t) {
                    return t === e
                  }),
                  "Unknown event: " + e
                )
              }),
              e
            )
          })(),
          Ce = (function (e) {
            function t() {
              var t = e.call(this, ["online"]) || this
              return (
                (t.online_ = !0),
                "undefined" == typeof window ||
                  void 0 === window.addEventListener ||
                  Object(c.r)() ||
                  (window.addEventListener(
                    "online",
                    function () {
                      t.online_ || ((t.online_ = !0), t.trigger("online", !0))
                    },
                    !1
                  ),
                  window.addEventListener(
                    "offline",
                    function () {
                      t.online_ && ((t.online_ = !1), t.trigger("online", !1))
                    },
                    !1
                  )),
                t
              )
            }
            return (
              Object(l.c)(t, e),
              (t.getInstance = function () {
                return new t()
              }),
              (t.prototype.getInitialEvent = function (e) {
                return (
                  Object(c.d)("online" === e, "Unknown event type: " + e),
                  [this.online_]
                )
              }),
              (t.prototype.currentlyOnline = function () {
                return this.online_
              }),
              t
            )
          })(we),
          Oe = (function () {
            function e(e, t) {
              if (void 0 === t) {
                this.pieces_ = e.split("/")
                for (var n = 0, i = 0; i < this.pieces_.length; i++)
                  this.pieces_[i].length > 0 &&
                    ((this.pieces_[n] = this.pieces_[i]), n++)
                ;(this.pieces_.length = n), (this.pieceNum_ = 0)
              } else (this.pieces_ = e), (this.pieceNum_ = t)
            }
            return (
              (e.prototype.toString = function () {
                for (
                  var e = "", i = this.pieceNum_;
                  i < this.pieces_.length;
                  i++
                )
                  "" !== this.pieces_[i] && (e += "/" + this.pieces_[i])
                return e || "/"
              }),
              e
            )
          })()
        function Ee() {
          return new Oe("")
        }
        function Ie(path) {
          return path.pieceNum_ >= path.pieces_.length
            ? null
            : path.pieces_[path.pieceNum_]
        }
        function Te(path) {
          return path.pieces_.length - path.pieceNum_
        }
        function Se(path) {
          var e = path.pieceNum_
          return e < path.pieces_.length && e++, new Oe(path.pieces_, e)
        }
        function ke(path) {
          return path.pieceNum_ < path.pieces_.length
            ? path.pieces_[path.pieces_.length - 1]
            : null
        }
        function Pe(path, e) {
          return void 0 === e && (e = 0), path.pieces_.slice(path.pieceNum_ + e)
        }
        function Ne(path) {
          if (path.pieceNum_ >= path.pieces_.length) return null
          for (var e = [], i = path.pieceNum_; i < path.pieces_.length - 1; i++)
            e.push(path.pieces_[i])
          return new Oe(e, 0)
        }
        function je(path, e) {
          for (var t = [], i = path.pieceNum_; i < path.pieces_.length; i++)
            t.push(path.pieces_[i])
          if (e instanceof Oe)
            for (i = e.pieceNum_; i < e.pieces_.length; i++)
              t.push(e.pieces_[i])
          else {
            var n = e.split("/")
            for (i = 0; i < n.length; i++) n[i].length > 0 && t.push(n[i])
          }
          return new Oe(t, 0)
        }
        function xe(path) {
          return path.pieceNum_ >= path.pieces_.length
        }
        function Re(e, t) {
          var n = Ie(e),
            r = Ie(t)
          if (null === n) return t
          if (n === r) return Re(Se(e), Se(t))
          throw new Error(
            "INTERNAL ERROR: innerPath (" +
              t +
              ") is not within outerPath (" +
              e +
              ")"
          )
        }
        function De(e, t) {
          for (
            var n = Pe(e, 0), r = Pe(t, 0), i = 0;
            i < n.length && i < r.length;
            i++
          ) {
            var o = M(n[i], r[i])
            if (0 !== o) return o
          }
          return n.length === r.length ? 0 : n.length < r.length ? -1 : 1
        }
        function Ae(path, e) {
          if (Te(path) !== Te(e)) return !1
          for (
            var i = path.pieceNum_, t = e.pieceNum_;
            i <= path.pieces_.length;
            i++, t++
          )
            if (path.pieces_[i] !== e.pieces_[t]) return !1
          return !0
        }
        function Le(path, e) {
          var i = path.pieceNum_,
            t = e.pieceNum_
          if (Te(path) > Te(e)) return !1
          for (; i < path.pieces_.length; ) {
            if (path.pieces_[i] !== e.pieces_[t]) return !1
            ++i, ++t
          }
          return !0
        }
        var Fe = function (path, e) {
          ;(this.errorPrefix_ = e),
            (this.parts_ = Pe(path, 0)),
            (this.byteLength_ = Math.max(1, this.parts_.length))
          for (var i = 0; i < this.parts_.length; i++)
            this.byteLength_ += Object(c.A)(this.parts_[i])
          Me(this)
        }
        function Me(e) {
          if (e.byteLength_ > 768)
            throw new Error(
              e.errorPrefix_ +
                "has a key path longer than 768 bytes (" +
                e.byteLength_ +
                ")."
            )
          if (e.parts_.length > 32)
            throw new Error(
              e.errorPrefix_ +
                "path specified exceeds the maximum depth that can be written (32) or object contains a cycle " +
                qe(e)
            )
        }
        function qe(e) {
          return 0 === e.parts_.length
            ? ""
            : "in property '" + e.parts_.join(".") + "'"
        }
        var We,
          Ue,
          Be = (function (e) {
            function t() {
              var t,
                n,
                r = e.call(this, ["visible"]) || this
              return (
                "undefined" != typeof document &&
                  void 0 !== document.addEventListener &&
                  (void 0 !== document.hidden
                    ? ((n = "visibilitychange"), (t = "hidden"))
                    : void 0 !== document.mozHidden
                    ? ((n = "mozvisibilitychange"), (t = "mozHidden"))
                    : void 0 !== document.msHidden
                    ? ((n = "msvisibilitychange"), (t = "msHidden"))
                    : void 0 !== document.webkitHidden &&
                      ((n = "webkitvisibilitychange"), (t = "webkitHidden"))),
                (r.visible_ = !0),
                n &&
                  document.addEventListener(
                    n,
                    function () {
                      var e = !document[t]
                      e !== r.visible_ &&
                        ((r.visible_ = e), r.trigger("visible", e))
                    },
                    !1
                  ),
                r
              )
            }
            return (
              Object(l.c)(t, e),
              (t.getInstance = function () {
                return new t()
              }),
              (t.prototype.getInitialEvent = function (e) {
                return (
                  Object(c.d)("visible" === e, "Unknown event type: " + e),
                  [this.visible_]
                )
              }),
              t
            )
          })(we),
          ze = 1e3,
          Ve = (function (e) {
            function t(n, r, o, l, h, d, f, _) {
              var v = e.call(this) || this
              if (
                ((v.repoInfo_ = n),
                (v.applicationId_ = r),
                (v.onDataUpdate_ = o),
                (v.onConnectStatus_ = l),
                (v.onServerInfoUpdate_ = h),
                (v.authTokenProvider_ = d),
                (v.appCheckTokenProvider_ = f),
                (v.authOverride_ = _),
                (v.id = t.nextPersistentConnectionId_++),
                (v.log_ = j("p:" + v.id + ":")),
                (v.interruptReasons_ = {}),
                (v.listens = new Map()),
                (v.outstandingPuts_ = []),
                (v.outstandingGets_ = []),
                (v.outstandingPutCount_ = 0),
                (v.outstandingGetCount_ = 0),
                (v.onDisconnectRequestQueue_ = []),
                (v.connected_ = !1),
                (v.reconnectDelay_ = ze),
                (v.maxReconnectDelay_ = 3e5),
                (v.securityDebugCallback_ = null),
                (v.lastSessionId = null),
                (v.establishConnectionTimer_ = null),
                (v.visible_ = !1),
                (v.requestCBHash_ = {}),
                (v.requestNumber_ = 0),
                (v.realtime_ = null),
                (v.authToken_ = null),
                (v.appCheckToken_ = null),
                (v.forceTokenRefresh_ = !1),
                (v.invalidAuthTokenCount_ = 0),
                (v.invalidAppCheckTokenCount_ = 0),
                (v.firstConnection_ = !0),
                (v.lastConnectionAttemptTime_ = null),
                (v.lastConnectionEstablishedTime_ = null),
                _ && !Object(c.t)())
              )
                throw new Error(
                  "Auth override specified in options, but not supported on non Node.js platforms"
                )
              return (
                Be.getInstance().on("visible", v.onVisible_, v),
                -1 === n.host.indexOf("fblocal") &&
                  Ce.getInstance().on("online", v.onOnline_, v),
                v
              )
            }
            return (
              Object(l.c)(t, e),
              (t.prototype.sendRequest = function (e, body, t) {
                var n = ++this.requestNumber_,
                  r = { r: n, a: e, b: body }
                this.log_(Object(c.C)(r)),
                  Object(c.d)(
                    this.connected_,
                    "sendRequest call when we're not connected not allowed."
                  ),
                  this.realtime_.sendRequest(r),
                  t && (this.requestCBHash_[n] = t)
              }),
              (t.prototype.get = function (e) {
                var t = this
                this.initConnection_()
                var n = new c.a(),
                  r = { p: e._path.toString(), q: e._queryObject },
                  o = {
                    action: "g",
                    request: r,
                    onComplete: function (e) {
                      var o = e.d
                      "ok" === e.s
                        ? (t.onDataUpdate_(r.p, o, !1, null), n.resolve(o))
                        : n.reject(o)
                    },
                  }
                this.outstandingGets_.push(o), this.outstandingGetCount_++
                var l = this.outstandingGets_.length - 1
                return (
                  this.connected_ ||
                    setTimeout(function () {
                      var e = t.outstandingGets_[l]
                      void 0 !== e &&
                        o === e &&
                        (delete t.outstandingGets_[l],
                        t.outstandingGetCount_--,
                        0 === t.outstandingGetCount_ &&
                          (t.outstandingGets_ = []),
                        t.log_("get " + l + " timed out on connection"),
                        n.reject(new Error("Client is offline.")))
                    }, 3e3),
                  this.connected_ && this.sendGet_(l),
                  n.promise
                )
              }),
              (t.prototype.listen = function (e, t, n, r) {
                this.initConnection_()
                var o = e._queryIdentifier,
                  l = e._path.toString()
                this.log_("Listen called for " + l + " " + o),
                  this.listens.has(l) || this.listens.set(l, new Map()),
                  Object(c.d)(
                    e._queryParams.isDefault() ||
                      !e._queryParams.loadsAllData(),
                    "listen() called for non-default but complete query"
                  ),
                  Object(c.d)(
                    !this.listens.get(l).has(o),
                    "listen() called twice for same path/queryId."
                  )
                var h = { onComplete: r, hashFn: t, query: e, tag: n }
                this.listens.get(l).set(o, h),
                  this.connected_ && this.sendListen_(h)
              }),
              (t.prototype.sendGet_ = function (e) {
                var t = this,
                  n = this.outstandingGets_[e]
                this.sendRequest("g", n.request, function (r) {
                  delete t.outstandingGets_[e],
                    t.outstandingGetCount_--,
                    0 === t.outstandingGetCount_ && (t.outstandingGets_ = []),
                    n.onComplete && n.onComplete(r)
                })
              }),
              (t.prototype.sendListen_ = function (e) {
                var n = this,
                  r = e.query,
                  o = r._path.toString(),
                  c = r._queryIdentifier
                this.log_("Listen on " + o + " for " + c)
                var l = { p: o }
                e.tag && ((l.q = r._queryObject), (l.t = e.tag)),
                  (l.h = e.hashFn()),
                  this.sendRequest("q", l, function (l) {
                    var h = l.d,
                      d = l.s
                    t.warnOnListenWarnings_(h, r),
                      (n.listens.get(o) && n.listens.get(o).get(c)) === e &&
                        (n.log_("listen response", l),
                        "ok" !== d && n.removeListen_(o, c),
                        e.onComplete && e.onComplete(d, h))
                  })
              }),
              (t.warnOnListenWarnings_ = function (e, t) {
                if (e && "object" == typeof e && Object(c.h)(e, "w")) {
                  var n = Object(c.z)(e, "w")
                  if (Array.isArray(n) && ~n.indexOf("no_index")) {
                    var r =
                        '".indexOn": "' +
                        t._queryParams.getIndex().toString() +
                        '"',
                      o = t._path.toString()
                    D(
                      "Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " +
                        r +
                        " at " +
                        o +
                        " to your security rules for better performance."
                    )
                  }
                }
              }),
              (t.prototype.refreshAuthToken = function (e) {
                ;(this.authToken_ = e),
                  this.log_("Auth token refreshed"),
                  this.authToken_
                    ? this.tryAuth()
                    : this.connected_ &&
                      this.sendRequest("unauth", {}, function () {}),
                  this.reduceReconnectDelayIfAdminCredential_(e)
              }),
              (t.prototype.reduceReconnectDelayIfAdminCredential_ = function (
                e
              ) {
                ;((e && 40 === e.length) || Object(c.o)(e)) &&
                  (this.log_(
                    "Admin auth credential detected.  Reducing max reconnect time."
                  ),
                  (this.maxReconnectDelay_ = 3e4))
              }),
              (t.prototype.refreshAppCheckToken = function (e) {
                ;(this.appCheckToken_ = e),
                  this.log_("App check token refreshed"),
                  this.appCheckToken_
                    ? this.tryAppCheck()
                    : this.connected_ &&
                      this.sendRequest("unappeck", {}, function () {})
              }),
              (t.prototype.tryAuth = function () {
                var e = this
                if (this.connected_ && this.authToken_) {
                  var t = this.authToken_,
                    n = Object(c.v)(t) ? "auth" : "gauth",
                    r = { cred: t }
                  null === this.authOverride_
                    ? (r.noauth = !0)
                    : "object" == typeof this.authOverride_ &&
                      (r.authvar = this.authOverride_),
                    this.sendRequest(n, r, function (n) {
                      var r = n.s,
                        data = n.d || "error"
                      e.authToken_ === t &&
                        ("ok" === r
                          ? (e.invalidAuthTokenCount_ = 0)
                          : e.onAuthRevoked_(r, data))
                    })
                }
              }),
              (t.prototype.tryAppCheck = function () {
                var e = this
                this.connected_ &&
                  this.appCheckToken_ &&
                  this.sendRequest(
                    "appcheck",
                    { token: this.appCheckToken_ },
                    function (t) {
                      var n = t.s,
                        data = t.d || "error"
                      "ok" === n
                        ? (e.invalidAppCheckTokenCount_ = 0)
                        : e.onAppCheckRevoked_(n, data)
                    }
                  )
              }),
              (t.prototype.unlisten = function (e, t) {
                var n = e._path.toString(),
                  r = e._queryIdentifier
                this.log_("Unlisten called for " + n + " " + r),
                  Object(c.d)(
                    e._queryParams.isDefault() ||
                      !e._queryParams.loadsAllData(),
                    "unlisten() called for non-default but complete query"
                  ),
                  this.removeListen_(n, r) &&
                    this.connected_ &&
                    this.sendUnlisten_(n, r, e._queryObject, t)
              }),
              (t.prototype.sendUnlisten_ = function (e, t, n, r) {
                this.log_("Unlisten on " + e + " for " + t)
                var o = { p: e }
                r && ((o.q = n), (o.t = r)), this.sendRequest("n", o)
              }),
              (t.prototype.onDisconnectPut = function (e, data, t) {
                this.initConnection_(),
                  this.connected_
                    ? this.sendOnDisconnect_("o", e, data, t)
                    : this.onDisconnectRequestQueue_.push({
                        pathString: e,
                        action: "o",
                        data: data,
                        onComplete: t,
                      })
              }),
              (t.prototype.onDisconnectMerge = function (e, data, t) {
                this.initConnection_(),
                  this.connected_
                    ? this.sendOnDisconnect_("om", e, data, t)
                    : this.onDisconnectRequestQueue_.push({
                        pathString: e,
                        action: "om",
                        data: data,
                        onComplete: t,
                      })
              }),
              (t.prototype.onDisconnectCancel = function (e, t) {
                this.initConnection_(),
                  this.connected_
                    ? this.sendOnDisconnect_("oc", e, null, t)
                    : this.onDisconnectRequestQueue_.push({
                        pathString: e,
                        action: "oc",
                        data: null,
                        onComplete: t,
                      })
              }),
              (t.prototype.sendOnDisconnect_ = function (e, t, data, n) {
                var r = { p: t, d: data }
                this.log_("onDisconnect " + e, r),
                  this.sendRequest(e, r, function (e) {
                    n &&
                      setTimeout(function () {
                        n(e.s, e.d)
                      }, Math.floor(0))
                  })
              }),
              (t.prototype.put = function (e, data, t, n) {
                this.putInternal("p", e, data, t, n)
              }),
              (t.prototype.merge = function (e, data, t, n) {
                this.putInternal("m", e, data, t, n)
              }),
              (t.prototype.putInternal = function (e, t, data, n, r) {
                this.initConnection_()
                var o = { p: t, d: data }
                void 0 !== r && (o.h = r),
                  this.outstandingPuts_.push({
                    action: e,
                    request: o,
                    onComplete: n,
                  }),
                  this.outstandingPutCount_++
                var c = this.outstandingPuts_.length - 1
                this.connected_
                  ? this.sendPut_(c)
                  : this.log_("Buffering put: " + t)
              }),
              (t.prototype.sendPut_ = function (e) {
                var t = this,
                  n = this.outstandingPuts_[e].action,
                  r = this.outstandingPuts_[e].request,
                  o = this.outstandingPuts_[e].onComplete
                ;(this.outstandingPuts_[e].queued = this.connected_),
                  this.sendRequest(n, r, function (r) {
                    t.log_(n + " response", r),
                      delete t.outstandingPuts_[e],
                      t.outstandingPutCount_--,
                      0 === t.outstandingPutCount_ && (t.outstandingPuts_ = []),
                      o && o(r.s, r.d)
                  })
              }),
              (t.prototype.reportStats = function (e) {
                var t = this
                if (this.connected_) {
                  var n = { c: e }
                  this.log_("reportStats", n),
                    this.sendRequest("s", n, function (e) {
                      if ("ok" !== e.s) {
                        var n = e.d
                        t.log_("reportStats", "Error sending stats: " + n)
                      }
                    })
                }
              }),
              (t.prototype.onDataMessage_ = function (e) {
                if ("r" in e) {
                  this.log_("from server: " + Object(c.C)(e))
                  var t = e.r,
                    n = this.requestCBHash_[t]
                  n && (delete this.requestCBHash_[t], n(e.b))
                } else {
                  if ("error" in e)
                    throw "A server-side error has occurred: " + e.error
                  "a" in e && this.onDataPush_(e.a, e.b)
                }
              }),
              (t.prototype.onDataPush_ = function (e, body) {
                this.log_("handleServerMessage", e, body),
                  "d" === e
                    ? this.onDataUpdate_(body.p, body.d, !1, body.t)
                    : "m" === e
                    ? this.onDataUpdate_(body.p, body.d, !0, body.t)
                    : "c" === e
                    ? this.onListenRevoked_(body.p, body.q)
                    : "ac" === e
                    ? this.onAuthRevoked_(body.s, body.d)
                    : "apc" === e
                    ? this.onAppCheckRevoked_(body.s, body.d)
                    : "sd" === e
                    ? this.onSecurityDebugPacket_(body)
                    : x(
                        "Unrecognized action received from server: " +
                          Object(c.C)(e) +
                          "\nAre you using the latest client?"
                      )
              }),
              (t.prototype.onReady_ = function (e, t) {
                this.log_("connection ready"),
                  (this.connected_ = !0),
                  (this.lastConnectionEstablishedTime_ = new Date().getTime()),
                  this.handleTimestamp_(e),
                  (this.lastSessionId = t),
                  this.firstConnection_ && this.sendConnectStats_(),
                  this.restoreState_(),
                  (this.firstConnection_ = !1),
                  this.onConnectStatus_(!0)
              }),
              (t.prototype.scheduleConnect_ = function (e) {
                var t = this
                Object(c.d)(
                  !this.realtime_,
                  "Scheduling a connect when we're already connected/ing?"
                ),
                  this.establishConnectionTimer_ &&
                    clearTimeout(this.establishConnectionTimer_),
                  (this.establishConnectionTimer_ = setTimeout(function () {
                    ;(t.establishConnectionTimer_ = null),
                      t.establishConnection_()
                  }, Math.floor(e)))
              }),
              (t.prototype.initConnection_ = function () {
                !this.realtime_ &&
                  this.firstConnection_ &&
                  this.scheduleConnect_(0)
              }),
              (t.prototype.onVisible_ = function (e) {
                e &&
                  !this.visible_ &&
                  this.reconnectDelay_ === this.maxReconnectDelay_ &&
                  (this.log_("Window became visible.  Reducing delay."),
                  (this.reconnectDelay_ = ze),
                  this.realtime_ || this.scheduleConnect_(0)),
                  (this.visible_ = e)
              }),
              (t.prototype.onOnline_ = function (e) {
                e
                  ? (this.log_("Browser went online."),
                    (this.reconnectDelay_ = ze),
                    this.realtime_ || this.scheduleConnect_(0))
                  : (this.log_("Browser went offline.  Killing connection."),
                    this.realtime_ && this.realtime_.close())
              }),
              (t.prototype.onRealtimeDisconnect_ = function () {
                if (
                  (this.log_("data client disconnected"),
                  (this.connected_ = !1),
                  (this.realtime_ = null),
                  this.cancelSentTransactions_(),
                  (this.requestCBHash_ = {}),
                  this.shouldReconnect_())
                ) {
                  if (this.visible_) {
                    if (this.lastConnectionEstablishedTime_) {
                      new Date().getTime() -
                        this.lastConnectionEstablishedTime_ >
                        3e4 && (this.reconnectDelay_ = ze),
                        (this.lastConnectionEstablishedTime_ = null)
                    }
                  } else
                    this.log_("Window isn't visible.  Delaying reconnect."),
                      (this.reconnectDelay_ = this.maxReconnectDelay_),
                      (this.lastConnectionAttemptTime_ = new Date().getTime())
                  var e =
                      new Date().getTime() - this.lastConnectionAttemptTime_,
                    t = Math.max(0, this.reconnectDelay_ - e)
                  ;(t = Math.random() * t),
                    this.log_("Trying to reconnect in " + t + "ms"),
                    this.scheduleConnect_(t),
                    (this.reconnectDelay_ = Math.min(
                      this.maxReconnectDelay_,
                      1.3 * this.reconnectDelay_
                    ))
                }
                this.onConnectStatus_(!1)
              }),
              (t.prototype.establishConnection_ = function () {
                return Object(l.b)(this, void 0, void 0, function () {
                  var e,
                    n,
                    r,
                    o,
                    h,
                    d,
                    f,
                    _,
                    v,
                    y,
                    m,
                    w,
                    C,
                    O,
                    E = this
                  return Object(l.d)(this, function (I) {
                    switch (I.label) {
                      case 0:
                        if (!this.shouldReconnect_()) return [3, 4]
                        this.log_("Making a connection attempt"),
                          (this.lastConnectionAttemptTime_ =
                            new Date().getTime()),
                          (this.lastConnectionEstablishedTime_ = null),
                          (e = this.onDataMessage_.bind(this)),
                          (n = this.onReady_.bind(this)),
                          (r = this.onRealtimeDisconnect_.bind(this)),
                          (o = this.id + ":" + t.nextConnectionId_++),
                          (h = this.lastSessionId),
                          (d = !1),
                          (f = null),
                          (_ = function () {
                            f ? f.close() : ((d = !0), r())
                          }),
                          (v = function (e) {
                            Object(c.d)(
                              f,
                              "sendRequest call when we're not connected not allowed."
                            ),
                              f.sendRequest(e)
                          }),
                          (this.realtime_ = { close: _, sendRequest: v }),
                          (y = this.forceTokenRefresh_),
                          (this.forceTokenRefresh_ = !1),
                          (I.label = 1)
                      case 1:
                        return (
                          I.trys.push([1, 3, , 4]),
                          [
                            4,
                            Promise.all([
                              this.authTokenProvider_.getToken(y),
                              this.appCheckTokenProvider_.getToken(y),
                            ]),
                          ]
                        )
                      case 2:
                        return (
                          (m = l.e.apply(void 0, [I.sent(), 2])),
                          (w = m[0]),
                          (C = m[1]),
                          d
                            ? N("getToken() completed but was canceled")
                            : (N("getToken() completed. Creating connection."),
                              (this.authToken_ = w && w.accessToken),
                              (this.appCheckToken_ = C && C.token),
                              (f = new me(
                                o,
                                this.repoInfo_,
                                this.applicationId_,
                                this.appCheckToken_,
                                this.authToken_,
                                e,
                                n,
                                r,
                                function (e) {
                                  D(e + " (" + E.repoInfo_.toString() + ")"),
                                    E.interrupt("server_kill")
                                },
                                h
                              ))),
                          [3, 4]
                        )
                      case 3:
                        return (
                          (O = I.sent()),
                          this.log_("Failed to get token: " + O),
                          d || (this.repoInfo_.nodeAdmin && D(O), _()),
                          [3, 4]
                        )
                      case 4:
                        return [2]
                    }
                  })
                })
              }),
              (t.prototype.interrupt = function (e) {
                N("Interrupting connection for reason: " + e),
                  (this.interruptReasons_[e] = !0),
                  this.realtime_
                    ? this.realtime_.close()
                    : (this.establishConnectionTimer_ &&
                        (clearTimeout(this.establishConnectionTimer_),
                        (this.establishConnectionTimer_ = null)),
                      this.connected_ && this.onRealtimeDisconnect_())
              }),
              (t.prototype.resume = function (e) {
                N("Resuming connection for reason: " + e),
                  delete this.interruptReasons_[e],
                  Object(c.q)(this.interruptReasons_) &&
                    ((this.reconnectDelay_ = ze),
                    this.realtime_ || this.scheduleConnect_(0))
              }),
              (t.prototype.handleTimestamp_ = function (e) {
                var t = e - new Date().getTime()
                this.onServerInfoUpdate_({ serverTimeOffset: t })
              }),
              (t.prototype.cancelSentTransactions_ = function () {
                for (var i = 0; i < this.outstandingPuts_.length; i++) {
                  var e = this.outstandingPuts_[i]
                  e &&
                    "h" in e.request &&
                    e.queued &&
                    (e.onComplete && e.onComplete("disconnect"),
                    delete this.outstandingPuts_[i],
                    this.outstandingPutCount_--)
                }
                0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
              }),
              (t.prototype.onListenRevoked_ = function (e, t) {
                var n
                n = t
                  ? t
                      .map(function (q) {
                        return B(q)
                      })
                      .join("$")
                  : "default"
                var r = this.removeListen_(e, n)
                r && r.onComplete && r.onComplete("permission_denied")
              }),
              (t.prototype.removeListen_ = function (e, t) {
                var n,
                  r = new Oe(e).toString()
                if (this.listens.has(r)) {
                  var map = this.listens.get(r)
                  ;(n = map.get(t)),
                    map.delete(t),
                    0 === map.size && this.listens.delete(r)
                } else n = void 0
                return n
              }),
              (t.prototype.onAuthRevoked_ = function (e, t) {
                N("Auth token revoked: " + e + "/" + t),
                  (this.authToken_ = null),
                  (this.forceTokenRefresh_ = !0),
                  this.realtime_.close(),
                  ("invalid_token" !== e && "permission_denied" !== e) ||
                    (this.invalidAuthTokenCount_++,
                    this.invalidAuthTokenCount_ >= 3 &&
                      ((this.reconnectDelay_ = 3e4),
                      this.authTokenProvider_.notifyForInvalidToken()))
              }),
              (t.prototype.onAppCheckRevoked_ = function (e, t) {
                N("App check token revoked: " + e + "/" + t),
                  (this.appCheckToken_ = null),
                  (this.forceTokenRefresh_ = !0),
                  ("invalid_token" !== e && "permission_denied" !== e) ||
                    (this.invalidAppCheckTokenCount_++,
                    this.invalidAppCheckTokenCount_ >= 3 &&
                      this.appCheckTokenProvider_.notifyForInvalidToken())
              }),
              (t.prototype.onSecurityDebugPacket_ = function (body) {
                this.securityDebugCallback_
                  ? this.securityDebugCallback_(body)
                  : "msg" in body &&
                    console.log(
                      "FIREBASE: " + body.msg.replace("\n", "\nFIREBASE: ")
                    )
              }),
              (t.prototype.restoreState_ = function () {
                var e, t, n, r
                this.tryAuth(), this.tryAppCheck()
                try {
                  for (
                    var o = Object(l.g)(this.listens.values()), c = o.next();
                    !c.done;
                    c = o.next()
                  ) {
                    var h = c.value
                    try {
                      for (
                        var d = ((n = void 0), Object(l.g)(h.values())),
                          f = d.next();
                        !f.done;
                        f = d.next()
                      ) {
                        var _ = f.value
                        this.sendListen_(_)
                      }
                    } catch (e) {
                      n = { error: e }
                    } finally {
                      try {
                        f && !f.done && (r = d.return) && r.call(d)
                      } finally {
                        if (n) throw n.error
                      }
                    }
                  }
                } catch (t) {
                  e = { error: t }
                } finally {
                  try {
                    c && !c.done && (t = o.return) && t.call(o)
                  } finally {
                    if (e) throw e.error
                  }
                }
                for (var i = 0; i < this.outstandingPuts_.length; i++)
                  this.outstandingPuts_[i] && this.sendPut_(i)
                for (; this.onDisconnectRequestQueue_.length; ) {
                  var v = this.onDisconnectRequestQueue_.shift()
                  this.sendOnDisconnect_(
                    v.action,
                    v.pathString,
                    v.data,
                    v.onComplete
                  )
                }
                for (i = 0; i < this.outstandingGets_.length; i++)
                  this.outstandingGets_[i] && this.sendGet_(i)
              }),
              (t.prototype.sendConnectStats_ = function () {
                var e = {},
                  t = "js"
                Object(c.t)() &&
                  (t = this.repoInfo_.nodeAdmin ? "admin_node" : "node"),
                  (e["sdk." + t + "." + d.replace(/\./g, "-")] = 1),
                  Object(c.r)()
                    ? (e["framework.cordova"] = 1)
                    : Object(c.u)() && (e["framework.reactnative"] = 1),
                  this.reportStats(e)
              }),
              (t.prototype.shouldReconnect_ = function () {
                var e = Ce.getInstance().currentlyOnline()
                return Object(c.q)(this.interruptReasons_) && e
              }),
              (t.nextPersistentConnectionId_ = 0),
              (t.nextConnectionId_ = 0),
              t
            )
          })(be),
          He = (function () {
            function e(e, t) {
              ;(this.name = e), (this.node = t)
            }
            return (
              (e.Wrap = function (t, n) {
                return new e(t, n)
              }),
              e
            )
          })(),
          Qe = (function () {
            function e() {}
            return (
              (e.prototype.getCompare = function () {
                return this.compare.bind(this)
              }),
              (e.prototype.indexedValueChanged = function (e, t) {
                var n = new He(L, e),
                  r = new He(L, t)
                return 0 !== this.compare(n, r)
              }),
              (e.prototype.minPost = function () {
                return He.MIN
              }),
              e
            )
          })(),
          Ye = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this
            }
            return (
              Object(l.c)(t, e),
              Object.defineProperty(t, "__EMPTY_NODE", {
                get: function () {
                  return We
                },
                set: function (e) {
                  We = e
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.compare = function (a, b) {
                return M(a.name, b.name)
              }),
              (t.prototype.isDefinedOn = function (e) {
                throw Object(c.e)(
                  "KeyIndex.isDefinedOn not expected to be called."
                )
              }),
              (t.prototype.indexedValueChanged = function (e, t) {
                return !1
              }),
              (t.prototype.minPost = function () {
                return He.MIN
              }),
              (t.prototype.maxPost = function () {
                return new He(F, We)
              }),
              (t.prototype.makePost = function (e, t) {
                return (
                  Object(c.d)(
                    "string" == typeof e,
                    "KeyIndex indexValue must always be a string."
                  ),
                  new He(e, We)
                )
              }),
              (t.prototype.toString = function () {
                return ".key"
              }),
              t
            )
          })(Qe),
          Ke = new Ye(),
          Ge = (function () {
            function e(e, t, n, r, o) {
              void 0 === o && (o = null),
                (this.isReverse_ = r),
                (this.resultGenerator_ = o),
                (this.nodeStack_ = [])
              for (var c = 1; !e.isEmpty(); )
                if (((e = e), (c = t ? n(e.key, t) : 1), r && (c *= -1), c < 0))
                  e = this.isReverse_ ? e.left : e.right
                else {
                  if (0 === c) {
                    this.nodeStack_.push(e)
                    break
                  }
                  this.nodeStack_.push(e),
                    (e = this.isReverse_ ? e.right : e.left)
                }
            }
            return (
              (e.prototype.getNext = function () {
                if (0 === this.nodeStack_.length) return null
                var e,
                  t = this.nodeStack_.pop()
                if (
                  ((e = this.resultGenerator_
                    ? this.resultGenerator_(t.key, t.value)
                    : { key: t.key, value: t.value }),
                  this.isReverse_)
                )
                  for (t = t.left; !t.isEmpty(); )
                    this.nodeStack_.push(t), (t = t.right)
                else
                  for (t = t.right; !t.isEmpty(); )
                    this.nodeStack_.push(t), (t = t.left)
                return e
              }),
              (e.prototype.hasNext = function () {
                return this.nodeStack_.length > 0
              }),
              (e.prototype.peek = function () {
                if (0 === this.nodeStack_.length) return null
                var e = this.nodeStack_[this.nodeStack_.length - 1]
                return this.resultGenerator_
                  ? this.resultGenerator_(e.key, e.value)
                  : { key: e.key, value: e.value }
              }),
              e
            )
          })(),
          $e = (function () {
            function e(t, n, r, o, c) {
              ;(this.key = t),
                (this.value = n),
                (this.color = null != r ? r : e.RED),
                (this.left = null != o ? o : Xe.EMPTY_NODE),
                (this.right = null != c ? c : Xe.EMPTY_NODE)
            }
            return (
              (e.prototype.copy = function (t, n, r, o, c) {
                return new e(
                  null != t ? t : this.key,
                  null != n ? n : this.value,
                  null != r ? r : this.color,
                  null != o ? o : this.left,
                  null != c ? c : this.right
                )
              }),
              (e.prototype.count = function () {
                return this.left.count() + 1 + this.right.count()
              }),
              (e.prototype.isEmpty = function () {
                return !1
              }),
              (e.prototype.inorderTraversal = function (e) {
                return (
                  this.left.inorderTraversal(e) ||
                  !!e(this.key, this.value) ||
                  this.right.inorderTraversal(e)
                )
              }),
              (e.prototype.reverseTraversal = function (e) {
                return (
                  this.right.reverseTraversal(e) ||
                  e(this.key, this.value) ||
                  this.left.reverseTraversal(e)
                )
              }),
              (e.prototype.min_ = function () {
                return this.left.isEmpty() ? this : this.left.min_()
              }),
              (e.prototype.minKey = function () {
                return this.min_().key
              }),
              (e.prototype.maxKey = function () {
                return this.right.isEmpty() ? this.key : this.right.maxKey()
              }),
              (e.prototype.insert = function (e, t, n) {
                var r = this,
                  o = n(e, r.key)
                return (r =
                  o < 0
                    ? r.copy(null, null, null, r.left.insert(e, t, n), null)
                    : 0 === o
                    ? r.copy(null, t, null, null, null)
                    : r.copy(
                        null,
                        null,
                        null,
                        null,
                        r.right.insert(e, t, n)
                      )).fixUp_()
              }),
              (e.prototype.removeMin_ = function () {
                if (this.left.isEmpty()) return Xe.EMPTY_NODE
                var e = this
                return (
                  e.left.isRed_() ||
                    e.left.left.isRed_() ||
                    (e = e.moveRedLeft_()),
                  (e = e.copy(
                    null,
                    null,
                    null,
                    e.left.removeMin_(),
                    null
                  )).fixUp_()
                )
              }),
              (e.prototype.remove = function (e, t) {
                var n, r
                if (t(e, (n = this).key) < 0)
                  n.left.isEmpty() ||
                    n.left.isRed_() ||
                    n.left.left.isRed_() ||
                    (n = n.moveRedLeft_()),
                    (n = n.copy(null, null, null, n.left.remove(e, t), null))
                else {
                  if (
                    (n.left.isRed_() && (n = n.rotateRight_()),
                    n.right.isEmpty() ||
                      n.right.isRed_() ||
                      n.right.left.isRed_() ||
                      (n = n.moveRedRight_()),
                    0 === t(e, n.key))
                  ) {
                    if (n.right.isEmpty()) return Xe.EMPTY_NODE
                    ;(r = n.right.min_()),
                      (n = n.copy(
                        r.key,
                        r.value,
                        null,
                        null,
                        n.right.removeMin_()
                      ))
                  }
                  n = n.copy(null, null, null, null, n.right.remove(e, t))
                }
                return n.fixUp_()
              }),
              (e.prototype.isRed_ = function () {
                return this.color
              }),
              (e.prototype.fixUp_ = function () {
                var e = this
                return (
                  e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()),
                  e.left.isRed_() &&
                    e.left.left.isRed_() &&
                    (e = e.rotateRight_()),
                  e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()),
                  e
                )
              }),
              (e.prototype.moveRedLeft_ = function () {
                var e = this.colorFlip_()
                return (
                  e.right.left.isRed_() &&
                    (e = (e = (e = e.copy(
                      null,
                      null,
                      null,
                      null,
                      e.right.rotateRight_()
                    )).rotateLeft_()).colorFlip_()),
                  e
                )
              }),
              (e.prototype.moveRedRight_ = function () {
                var e = this.colorFlip_()
                return (
                  e.left.left.isRed_() &&
                    (e = (e = e.rotateRight_()).colorFlip_()),
                  e
                )
              }),
              (e.prototype.rotateLeft_ = function () {
                var t = this.copy(null, null, e.RED, null, this.right.left)
                return this.right.copy(null, null, this.color, t, null)
              }),
              (e.prototype.rotateRight_ = function () {
                var t = this.copy(null, null, e.RED, this.left.right, null)
                return this.left.copy(null, null, this.color, null, t)
              }),
              (e.prototype.colorFlip_ = function () {
                var e = this.left.copy(
                    null,
                    null,
                    !this.left.color,
                    null,
                    null
                  ),
                  t = this.right.copy(null, null, !this.right.color, null, null)
                return this.copy(null, null, !this.color, e, t)
              }),
              (e.prototype.checkMaxDepth_ = function () {
                var e = this.check_()
                return Math.pow(2, e) <= this.count() + 1
              }),
              (e.prototype.check_ = function () {
                if (this.isRed_() && this.left.isRed_())
                  throw new Error(
                    "Red node has red child(" +
                      this.key +
                      "," +
                      this.value +
                      ")"
                  )
                if (this.right.isRed_())
                  throw new Error(
                    "Right child of (" +
                      this.key +
                      "," +
                      this.value +
                      ") is red"
                  )
                var e = this.left.check_()
                if (e !== this.right.check_())
                  throw new Error("Black depths differ")
                return e + (this.isRed_() ? 0 : 1)
              }),
              (e.RED = !0),
              (e.BLACK = !1),
              e
            )
          })(),
          Je = (function () {
            function e() {}
            return (
              (e.prototype.copy = function (e, t, n, r, o) {
                return this
              }),
              (e.prototype.insert = function (e, t, n) {
                return new $e(e, t, null)
              }),
              (e.prototype.remove = function (e, t) {
                return this
              }),
              (e.prototype.count = function () {
                return 0
              }),
              (e.prototype.isEmpty = function () {
                return !0
              }),
              (e.prototype.inorderTraversal = function (e) {
                return !1
              }),
              (e.prototype.reverseTraversal = function (e) {
                return !1
              }),
              (e.prototype.minKey = function () {
                return null
              }),
              (e.prototype.maxKey = function () {
                return null
              }),
              (e.prototype.check_ = function () {
                return 0
              }),
              (e.prototype.isRed_ = function () {
                return !1
              }),
              e
            )
          })(),
          Xe = (function () {
            function e(t, n) {
              void 0 === n && (n = e.EMPTY_NODE),
                (this.comparator_ = t),
                (this.root_ = n)
            }
            return (
              (e.prototype.insert = function (t, n) {
                return new e(
                  this.comparator_,
                  this.root_
                    .insert(t, n, this.comparator_)
                    .copy(null, null, $e.BLACK, null, null)
                )
              }),
              (e.prototype.remove = function (t) {
                return new e(
                  this.comparator_,
                  this.root_
                    .remove(t, this.comparator_)
                    .copy(null, null, $e.BLACK, null, null)
                )
              }),
              (e.prototype.get = function (e) {
                for (var t, n = this.root_; !n.isEmpty(); ) {
                  if (0 === (t = this.comparator_(e, n.key))) return n.value
                  t < 0 ? (n = n.left) : t > 0 && (n = n.right)
                }
                return null
              }),
              (e.prototype.getPredecessorKey = function (e) {
                for (var t, n = this.root_, r = null; !n.isEmpty(); ) {
                  if (0 === (t = this.comparator_(e, n.key))) {
                    if (n.left.isEmpty()) return r ? r.key : null
                    for (n = n.left; !n.right.isEmpty(); ) n = n.right
                    return n.key
                  }
                  t < 0 ? (n = n.left) : t > 0 && ((r = n), (n = n.right))
                }
                throw new Error(
                  "Attempted to find predecessor key for a nonexistent key.  What gives?"
                )
              }),
              (e.prototype.isEmpty = function () {
                return this.root_.isEmpty()
              }),
              (e.prototype.count = function () {
                return this.root_.count()
              }),
              (e.prototype.minKey = function () {
                return this.root_.minKey()
              }),
              (e.prototype.maxKey = function () {
                return this.root_.maxKey()
              }),
              (e.prototype.inorderTraversal = function (e) {
                return this.root_.inorderTraversal(e)
              }),
              (e.prototype.reverseTraversal = function (e) {
                return this.root_.reverseTraversal(e)
              }),
              (e.prototype.getIterator = function (e) {
                return new Ge(this.root_, null, this.comparator_, !1, e)
              }),
              (e.prototype.getIteratorFrom = function (e, t) {
                return new Ge(this.root_, e, this.comparator_, !1, t)
              }),
              (e.prototype.getReverseIteratorFrom = function (e, t) {
                return new Ge(this.root_, e, this.comparator_, !0, t)
              }),
              (e.prototype.getReverseIterator = function (e) {
                return new Ge(this.root_, null, this.comparator_, !0, e)
              }),
              (e.EMPTY_NODE = new Je()),
              e
            )
          })()
        function Ze(e, t) {
          return M(e.name, t.name)
        }
        function et(e, t) {
          return M(e, t)
        }
        var tt,
          nt,
          it,
          ot = function (e) {
            return "number" == typeof e ? "number:" + H(e) : "string:" + e
          },
          at = function (e) {
            if (e.isLeafNode()) {
              var t = e.val()
              Object(c.d)(
                "string" == typeof t ||
                  "number" == typeof t ||
                  ("object" == typeof t && Object(c.h)(t, ".sv")),
                "Priority must be a string or number."
              )
            } else
              Object(c.d)(
                e === Ue || e.isEmpty(),
                "priority of unexpected type."
              )
            Object(c.d)(
              e === Ue || e.getPriority().isEmpty(),
              "Priority nodes can't have a priority of their own."
            )
          },
          st = (function () {
            function e(t, n) {
              void 0 === n && (n = e.__childrenNodeConstructor.EMPTY_NODE),
                (this.value_ = t),
                (this.priorityNode_ = n),
                (this.lazyHash_ = null),
                Object(c.d)(
                  void 0 !== this.value_ && null !== this.value_,
                  "LeafNode shouldn't be created with null/undefined value."
                ),
                at(this.priorityNode_)
            }
            return (
              Object.defineProperty(e, "__childrenNodeConstructor", {
                get: function () {
                  return tt
                },
                set: function (e) {
                  tt = e
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.isLeafNode = function () {
                return !0
              }),
              (e.prototype.getPriority = function () {
                return this.priorityNode_
              }),
              (e.prototype.updatePriority = function (t) {
                return new e(this.value_, t)
              }),
              (e.prototype.getImmediateChild = function (t) {
                return ".priority" === t
                  ? this.priorityNode_
                  : e.__childrenNodeConstructor.EMPTY_NODE
              }),
              (e.prototype.getChild = function (path) {
                return xe(path)
                  ? this
                  : ".priority" === Ie(path)
                  ? this.priorityNode_
                  : e.__childrenNodeConstructor.EMPTY_NODE
              }),
              (e.prototype.hasChild = function () {
                return !1
              }),
              (e.prototype.getPredecessorChildName = function (e, t) {
                return null
              }),
              (e.prototype.updateImmediateChild = function (t, n) {
                return ".priority" === t
                  ? this.updatePriority(n)
                  : n.isEmpty() && ".priority" !== t
                  ? this
                  : e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
                      t,
                      n
                    ).updatePriority(this.priorityNode_)
              }),
              (e.prototype.updateChild = function (path, t) {
                var n = Ie(path)
                return null === n
                  ? t
                  : t.isEmpty() && ".priority" !== n
                  ? this
                  : (Object(c.d)(
                      ".priority" !== n || 1 === Te(path),
                      ".priority must be the last token in a path"
                    ),
                    this.updateImmediateChild(
                      n,
                      e.__childrenNodeConstructor.EMPTY_NODE.updateChild(
                        Se(path),
                        t
                      )
                    ))
              }),
              (e.prototype.isEmpty = function () {
                return !1
              }),
              (e.prototype.numChildren = function () {
                return 0
              }),
              (e.prototype.forEachChild = function (e, t) {
                return !1
              }),
              (e.prototype.val = function (e) {
                return e && !this.getPriority().isEmpty()
                  ? {
                      ".value": this.getValue(),
                      ".priority": this.getPriority().val(),
                    }
                  : this.getValue()
              }),
              (e.prototype.hash = function () {
                if (null === this.lazyHash_) {
                  var e = ""
                  this.priorityNode_.isEmpty() ||
                    (e += "priority:" + ot(this.priorityNode_.val()) + ":")
                  var t = typeof this.value_
                  ;(e += t + ":"),
                    (e += "number" === t ? H(this.value_) : this.value_),
                    (this.lazyHash_ = I(e))
                }
                return this.lazyHash_
              }),
              (e.prototype.getValue = function () {
                return this.value_
              }),
              (e.prototype.compareTo = function (t) {
                return t === e.__childrenNodeConstructor.EMPTY_NODE
                  ? 1
                  : t instanceof e.__childrenNodeConstructor
                  ? -1
                  : (Object(c.d)(t.isLeafNode(), "Unknown node type"),
                    this.compareToLeafNode_(t))
              }),
              (e.prototype.compareToLeafNode_ = function (t) {
                var n = typeof t.value_,
                  r = typeof this.value_,
                  o = e.VALUE_TYPE_ORDER.indexOf(n),
                  l = e.VALUE_TYPE_ORDER.indexOf(r)
                return (
                  Object(c.d)(o >= 0, "Unknown leaf type: " + n),
                  Object(c.d)(l >= 0, "Unknown leaf type: " + r),
                  o === l
                    ? "object" === r
                      ? 0
                      : this.value_ < t.value_
                      ? -1
                      : this.value_ === t.value_
                      ? 0
                      : 1
                    : l - o
                )
              }),
              (e.prototype.withIndex = function () {
                return this
              }),
              (e.prototype.isIndexed = function () {
                return !0
              }),
              (e.prototype.equals = function (e) {
                if (e === this) return !0
                if (e.isLeafNode()) {
                  var t = e
                  return (
                    this.value_ === t.value_ &&
                    this.priorityNode_.equals(t.priorityNode_)
                  )
                }
                return !1
              }),
              (e.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"]),
              e
            )
          })()
        var ut,
          ct,
          lt = new ((function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this
            }
            return (
              Object(l.c)(t, e),
              (t.prototype.compare = function (a, b) {
                var e = a.node.getPriority(),
                  t = b.node.getPriority(),
                  n = e.compareTo(t)
                return 0 === n ? M(a.name, b.name) : n
              }),
              (t.prototype.isDefinedOn = function (e) {
                return !e.getPriority().isEmpty()
              }),
              (t.prototype.indexedValueChanged = function (e, t) {
                return !e.getPriority().equals(t.getPriority())
              }),
              (t.prototype.minPost = function () {
                return He.MIN
              }),
              (t.prototype.maxPost = function () {
                return new He(F, new st("[PRIORITY-POST]", it))
              }),
              (t.prototype.makePost = function (e, t) {
                var n = nt(e)
                return new He(t, new st("[PRIORITY-POST]", n))
              }),
              (t.prototype.toString = function () {
                return ".priority"
              }),
              t
            )
          })(Qe))(),
          ht = Math.log(2),
          pt = (function () {
            function e(e) {
              var t
              ;(this.count = ((t = e + 1), parseInt(Math.log(t) / ht, 10))),
                (this.current_ = this.count - 1)
              var n,
                mask = ((n = this.count), parseInt(Array(n + 1).join("1"), 2))
              this.bits_ = (e + 1) & mask
            }
            return (
              (e.prototype.nextBitIsOne = function () {
                var e = !(this.bits_ & (1 << this.current_))
                return this.current_--, e
              }),
              e
            )
          })(),
          ft = function (e, t, n, r) {
            e.sort(t)
            var o = function (t, r) {
                var c,
                  l,
                  h = r - t
                if (0 === h) return null
                if (1 === h)
                  return (
                    (c = e[t]),
                    (l = n ? n(c) : c),
                    new $e(l, c.node, $e.BLACK, null, null)
                  )
                var d = parseInt(h / 2, 10) + t,
                  f = o(t, d),
                  _ = o(d + 1, r)
                return (
                  (c = e[d]),
                  (l = n ? n(c) : c),
                  new $e(l, c.node, $e.BLACK, f, _)
                )
              },
              c = (function (t) {
                for (
                  var r = null,
                    c = null,
                    l = e.length,
                    h = function (t, r) {
                      var c = l - t,
                        h = l
                      l -= t
                      var f = o(c + 1, h),
                        _ = e[c],
                        v = n ? n(_) : _
                      d(new $e(v, _.node, r, null, f))
                    },
                    d = function (e) {
                      r ? ((r.left = e), (r = e)) : ((c = e), (r = e))
                    },
                    i = 0;
                  i < t.count;
                  ++i
                ) {
                  var f = t.nextBitIsOne(),
                    _ = Math.pow(2, t.count - (i + 1))
                  f ? h(_, $e.BLACK) : (h(_, $e.BLACK), h(_, $e.RED))
                }
                return c
              })(new pt(e.length))
            return new Xe(r || t, c)
          },
          _t = {},
          vt = (function () {
            function e(e, t) {
              ;(this.indexes_ = e), (this.indexSet_ = t)
            }
            return (
              Object.defineProperty(e, "Default", {
                get: function () {
                  return (
                    Object(c.d)(
                      _t && lt,
                      "ChildrenNode.ts has not been loaded"
                    ),
                    (ut = ut || new e({ ".priority": _t }, { ".priority": lt }))
                  )
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.get = function (e) {
                var t = Object(c.z)(this.indexes_, e)
                if (!t) throw new Error("No index defined for " + e)
                return t instanceof Xe ? t : null
              }),
              (e.prototype.hasIndex = function (e) {
                return Object(c.h)(this.indexSet_, e.toString())
              }),
              (e.prototype.addIndex = function (t, n) {
                Object(c.d)(
                  t !== Ke,
                  "KeyIndex always exists and isn't meant to be added to the IndexMap."
                )
                for (
                  var r,
                    o = [],
                    h = !1,
                    d = n.getIterator(He.Wrap),
                    f = d.getNext();
                  f;

                )
                  (h = h || t.isDefinedOn(f.node)), o.push(f), (f = d.getNext())
                r = h ? ft(o, t.getCompare()) : _t
                var _ = t.toString(),
                  v = Object(l.a)({}, this.indexSet_)
                v[_] = t
                var y = Object(l.a)({}, this.indexes_)
                return (y[_] = r), new e(y, v)
              }),
              (e.prototype.addToIndexes = function (t, n) {
                var r = this
                return new e(
                  Object(c.x)(this.indexes_, function (e, o) {
                    var l = Object(c.z)(r.indexSet_, o)
                    if (
                      (Object(c.d)(l, "Missing index implementation for " + o),
                      e === _t)
                    ) {
                      if (l.isDefinedOn(t.node)) {
                        for (
                          var h = [],
                            d = n.getIterator(He.Wrap),
                            f = d.getNext();
                          f;

                        )
                          f.name !== t.name && h.push(f), (f = d.getNext())
                        return h.push(t), ft(h, l.getCompare())
                      }
                      return _t
                    }
                    var _ = n.get(t.name),
                      v = e
                    return (
                      _ && (v = v.remove(new He(t.name, _))),
                      v.insert(t, t.node)
                    )
                  }),
                  this.indexSet_
                )
              }),
              (e.prototype.removeFromIndexes = function (t, n) {
                return new e(
                  Object(c.x)(this.indexes_, function (e) {
                    if (e === _t) return e
                    var r = n.get(t.name)
                    return r ? e.remove(new He(t.name, r)) : e
                  }),
                  this.indexSet_
                )
              }),
              e
            )
          })(),
          yt = (function () {
            function e(e, t, n) {
              ;(this.children_ = e),
                (this.priorityNode_ = t),
                (this.indexMap_ = n),
                (this.lazyHash_ = null),
                this.priorityNode_ && at(this.priorityNode_),
                this.children_.isEmpty() &&
                  Object(c.d)(
                    !this.priorityNode_ || this.priorityNode_.isEmpty(),
                    "An empty node cannot have a priority"
                  )
            }
            return (
              Object.defineProperty(e, "EMPTY_NODE", {
                get: function () {
                  return ct || (ct = new e(new Xe(et), null, vt.Default))
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.isLeafNode = function () {
                return !1
              }),
              (e.prototype.getPriority = function () {
                return this.priorityNode_ || ct
              }),
              (e.prototype.updatePriority = function (t) {
                return this.children_.isEmpty()
                  ? this
                  : new e(this.children_, t, this.indexMap_)
              }),
              (e.prototype.getImmediateChild = function (e) {
                if (".priority" === e) return this.getPriority()
                var t = this.children_.get(e)
                return null === t ? ct : t
              }),
              (e.prototype.getChild = function (path) {
                var e = Ie(path)
                return null === e
                  ? this
                  : this.getImmediateChild(e).getChild(Se(path))
              }),
              (e.prototype.hasChild = function (e) {
                return null !== this.children_.get(e)
              }),
              (e.prototype.updateImmediateChild = function (t, n) {
                if (
                  (Object(c.d)(n, "We should always be passing snapshot nodes"),
                  ".priority" === t)
                )
                  return this.updatePriority(n)
                var r = new He(t, n),
                  o = void 0,
                  l = void 0
                n.isEmpty()
                  ? ((o = this.children_.remove(t)),
                    (l = this.indexMap_.removeFromIndexes(r, this.children_)))
                  : ((o = this.children_.insert(t, n)),
                    (l = this.indexMap_.addToIndexes(r, this.children_)))
                var h = o.isEmpty() ? ct : this.priorityNode_
                return new e(o, h, l)
              }),
              (e.prototype.updateChild = function (path, e) {
                var t = Ie(path)
                if (null === t) return e
                Object(c.d)(
                  ".priority" !== Ie(path) || 1 === Te(path),
                  ".priority must be the last token in a path"
                )
                var n = this.getImmediateChild(t).updateChild(Se(path), e)
                return this.updateImmediateChild(t, n)
              }),
              (e.prototype.isEmpty = function () {
                return this.children_.isEmpty()
              }),
              (e.prototype.numChildren = function () {
                return this.children_.count()
              }),
              (e.prototype.val = function (t) {
                if (this.isEmpty()) return null
                var n = {},
                  r = 0,
                  o = 0,
                  c = !0
                if (
                  (this.forEachChild(lt, function (l, h) {
                    ;(n[l] = h.val(t)),
                      r++,
                      c && e.INTEGER_REGEXP_.test(l)
                        ? (o = Math.max(o, Number(l)))
                        : (c = !1)
                  }),
                  !t && c && o < 2 * r)
                ) {
                  var l = []
                  for (var h in n) l[h] = n[h]
                  return l
                }
                return (
                  t &&
                    !this.getPriority().isEmpty() &&
                    (n[".priority"] = this.getPriority().val()),
                  n
                )
              }),
              (e.prototype.hash = function () {
                if (null === this.lazyHash_) {
                  var e = ""
                  this.getPriority().isEmpty() ||
                    (e += "priority:" + ot(this.getPriority().val()) + ":"),
                    this.forEachChild(lt, function (t, n) {
                      var r = n.hash()
                      "" !== r && (e += ":" + t + ":" + r)
                    }),
                    (this.lazyHash_ = "" === e ? "" : I(e))
                }
                return this.lazyHash_
              }),
              (e.prototype.getPredecessorChildName = function (e, t, n) {
                var r = this.resolveIndex_(n)
                if (r) {
                  var o = r.getPredecessorKey(new He(e, t))
                  return o ? o.name : null
                }
                return this.children_.getPredecessorKey(e)
              }),
              (e.prototype.getFirstChildName = function (e) {
                var t = this.resolveIndex_(e)
                if (t) {
                  var n = t.minKey()
                  return n && n.name
                }
                return this.children_.minKey()
              }),
              (e.prototype.getFirstChild = function (e) {
                var t = this.getFirstChildName(e)
                return t ? new He(t, this.children_.get(t)) : null
              }),
              (e.prototype.getLastChildName = function (e) {
                var t = this.resolveIndex_(e)
                if (t) {
                  var n = t.maxKey()
                  return n && n.name
                }
                return this.children_.maxKey()
              }),
              (e.prototype.getLastChild = function (e) {
                var t = this.getLastChildName(e)
                return t ? new He(t, this.children_.get(t)) : null
              }),
              (e.prototype.forEachChild = function (e, t) {
                var n = this.resolveIndex_(e)
                return n
                  ? n.inorderTraversal(function (e) {
                      return t(e.name, e.node)
                    })
                  : this.children_.inorderTraversal(t)
              }),
              (e.prototype.getIterator = function (e) {
                return this.getIteratorFrom(e.minPost(), e)
              }),
              (e.prototype.getIteratorFrom = function (e, t) {
                var n = this.resolveIndex_(t)
                if (n)
                  return n.getIteratorFrom(e, function (e) {
                    return e
                  })
                for (
                  var r = this.children_.getIteratorFrom(e.name, He.Wrap),
                    o = r.peek();
                  null != o && t.compare(o, e) < 0;

                )
                  r.getNext(), (o = r.peek())
                return r
              }),
              (e.prototype.getReverseIterator = function (e) {
                return this.getReverseIteratorFrom(e.maxPost(), e)
              }),
              (e.prototype.getReverseIteratorFrom = function (e, t) {
                var n = this.resolveIndex_(t)
                if (n)
                  return n.getReverseIteratorFrom(e, function (e) {
                    return e
                  })
                for (
                  var r = this.children_.getReverseIteratorFrom(
                      e.name,
                      He.Wrap
                    ),
                    o = r.peek();
                  null != o && t.compare(o, e) > 0;

                )
                  r.getNext(), (o = r.peek())
                return r
              }),
              (e.prototype.compareTo = function (e) {
                return this.isEmpty()
                  ? e.isEmpty()
                    ? 0
                    : -1
                  : e.isLeafNode() || e.isEmpty()
                  ? 1
                  : e === gt
                  ? -1
                  : 0
              }),
              (e.prototype.withIndex = function (t) {
                if (t === Ke || this.indexMap_.hasIndex(t)) return this
                var n = this.indexMap_.addIndex(t, this.children_)
                return new e(this.children_, this.priorityNode_, n)
              }),
              (e.prototype.isIndexed = function (e) {
                return e === Ke || this.indexMap_.hasIndex(e)
              }),
              (e.prototype.equals = function (e) {
                if (e === this) return !0
                if (e.isLeafNode()) return !1
                var t = e
                if (this.getPriority().equals(t.getPriority())) {
                  if (this.children_.count() === t.children_.count()) {
                    for (
                      var n = this.getIterator(lt),
                        r = t.getIterator(lt),
                        o = n.getNext(),
                        c = r.getNext();
                      o && c;

                    ) {
                      if (o.name !== c.name || !o.node.equals(c.node)) return !1
                      ;(o = n.getNext()), (c = r.getNext())
                    }
                    return null === o && null === c
                  }
                  return !1
                }
                return !1
              }),
              (e.prototype.resolveIndex_ = function (e) {
                return e === Ke ? null : this.indexMap_.get(e.toString())
              }),
              (e.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/),
              e
            )
          })(),
          gt = new ((function (e) {
            function t() {
              return e.call(this, new Xe(et), yt.EMPTY_NODE, vt.Default) || this
            }
            return (
              Object(l.c)(t, e),
              (t.prototype.compareTo = function (e) {
                return e === this ? 0 : 1
              }),
              (t.prototype.equals = function (e) {
                return e === this
              }),
              (t.prototype.getPriority = function () {
                return this
              }),
              (t.prototype.getImmediateChild = function (e) {
                return yt.EMPTY_NODE
              }),
              (t.prototype.isEmpty = function () {
                return !1
              }),
              t
            )
          })(yt))()
        Object.defineProperties(He, {
          MIN: { value: new He(L, yt.EMPTY_NODE) },
          MAX: { value: new He(F, gt) },
        }),
          (Ye.__EMPTY_NODE = yt.EMPTY_NODE),
          (st.__childrenNodeConstructor = yt),
          (Ue = gt),
          (function (e) {
            it = e
          })(gt)
        function mt(e, t) {
          if ((void 0 === t && (t = null), null === e)) return yt.EMPTY_NODE
          if (
            ("object" == typeof e && ".priority" in e && (t = e[".priority"]),
            Object(c.d)(
              null === t ||
                "string" == typeof t ||
                "number" == typeof t ||
                ("object" == typeof t && ".sv" in t),
              "Invalid priority type found: " + typeof t
            ),
            "object" == typeof e &&
              ".value" in e &&
              null !== e[".value"] &&
              (e = e[".value"]),
            "object" != typeof e || ".sv" in e)
          )
            return new st(e, mt(t))
          if (e instanceof Array) {
            var n = yt.EMPTY_NODE
            return (
              V(e, function (t, r) {
                if (Object(c.h)(e, t) && "." !== t.substring(0, 1)) {
                  var o = mt(r)
                  ;(!o.isLeafNode() && o.isEmpty()) ||
                    (n = n.updateImmediateChild(t, o))
                }
              }),
              n.updatePriority(mt(t))
            )
          }
          var r = [],
            o = !1
          if (
            (V(e, function (e, t) {
              if ("." !== e.substring(0, 1)) {
                var n = mt(t)
                n.isEmpty() ||
                  ((o = o || !n.getPriority().isEmpty()), r.push(new He(e, n)))
              }
            }),
            0 === r.length)
          )
            return yt.EMPTY_NODE
          var l = ft(
            r,
            Ze,
            function (e) {
              return e.name
            },
            et
          )
          if (o) {
            var h = ft(r, lt.getCompare())
            return new yt(
              l,
              mt(t),
              new vt({ ".priority": h }, { ".priority": lt })
            )
          }
          return new yt(l, mt(t), vt.Default)
        }
        !(function (e) {
          nt = e
        })(mt)
        var bt,
          wt,
          Ct = (function (e) {
            function t(t) {
              var n = e.call(this) || this
              return (
                (n.indexPath_ = t),
                Object(c.d)(
                  !xe(t) && ".priority" !== Ie(t),
                  "Can't create PathIndex with empty path or .priority key"
                ),
                n
              )
            }
            return (
              Object(l.c)(t, e),
              (t.prototype.extractChild = function (e) {
                return e.getChild(this.indexPath_)
              }),
              (t.prototype.isDefinedOn = function (e) {
                return !e.getChild(this.indexPath_).isEmpty()
              }),
              (t.prototype.compare = function (a, b) {
                var e = this.extractChild(a.node),
                  t = this.extractChild(b.node),
                  n = e.compareTo(t)
                return 0 === n ? M(a.name, b.name) : n
              }),
              (t.prototype.makePost = function (e, t) {
                var n = mt(e),
                  r = yt.EMPTY_NODE.updateChild(this.indexPath_, n)
                return new He(t, r)
              }),
              (t.prototype.maxPost = function () {
                var e = yt.EMPTY_NODE.updateChild(this.indexPath_, gt)
                return new He(F, e)
              }),
              (t.prototype.toString = function () {
                return Pe(this.indexPath_, 0).join("/")
              }),
              t
            )
          })(Qe),
          Ot = new ((function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this
            }
            return (
              Object(l.c)(t, e),
              (t.prototype.compare = function (a, b) {
                var e = a.node.compareTo(b.node)
                return 0 === e ? M(a.name, b.name) : e
              }),
              (t.prototype.isDefinedOn = function (e) {
                return !0
              }),
              (t.prototype.indexedValueChanged = function (e, t) {
                return !e.equals(t)
              }),
              (t.prototype.minPost = function () {
                return He.MIN
              }),
              (t.prototype.maxPost = function () {
                return He.MAX
              }),
              (t.prototype.makePost = function (e, t) {
                var n = mt(e)
                return new He(t, n)
              }),
              (t.prototype.toString = function () {
                return ".value"
              }),
              t
            )
          })(Qe))(),
          Et =
            "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
          It =
            ((bt = 0),
            (wt = []),
            function (e) {
              var i,
                t = e === bt
              bt = e
              var n = new Array(8)
              for (i = 7; i >= 0; i--)
                (n[i] = Et.charAt(e % 64)), (e = Math.floor(e / 64))
              Object(c.d)(0 === e, "Cannot push at time == 0")
              var r = n.join("")
              if (t) {
                for (i = 11; i >= 0 && 63 === wt[i]; i--) wt[i] = 0
                wt[i]++
              } else
                for (i = 0; i < 12; i++) wt[i] = Math.floor(64 * Math.random())
              for (i = 0; i < 12; i++) r += Et.charAt(wt[i])
              return (
                Object(c.d)(
                  20 === r.length,
                  "nextPushId: Length should be 20."
                ),
                r
              )
            }),
          Tt = function (e) {
            if ("2147483647" === e) return "-"
            var t = G(e)
            if (null != t) return "" + (t + 1)
            for (var n = new Array(e.length), r = 0; r < n.length; r++)
              n[r] = e.charAt(r)
            if (n.length < 786) return n.push("-"), n.join("")
            for (var i = n.length - 1; i >= 0 && "z" === n[i]; ) i--
            if (-1 === i) return F
            var source = n[i],
              o = Et.charAt(Et.indexOf(source) + 1)
            return (n[i] = o), n.slice(0, i + 1).join("")
          },
          St = function (e) {
            if ("-2147483648" === e) return L
            var t = G(e)
            if (null != t) return "" + (t - 1)
            for (var n = new Array(e.length), i = 0; i < n.length; i++)
              n[i] = e.charAt(i)
            return "-" === n[n.length - 1]
              ? 1 === n.length
                ? "2147483647"
                : (delete n[n.length - 1], n.join(""))
              : ((n[n.length - 1] = Et.charAt(Et.indexOf(n[n.length - 1]) - 1)),
                n.join("") + "z".repeat(786 - n.length))
          }
        function kt(e) {
          return { type: "value", snapshotNode: e }
        }
        function Pt(e, t) {
          return { type: "child_added", snapshotNode: t, childName: e }
        }
        function Nt(e, t) {
          return { type: "child_removed", snapshotNode: t, childName: e }
        }
        function jt(e, t, n) {
          return {
            type: "child_changed",
            snapshotNode: t,
            childName: e,
            oldSnap: n,
          }
        }
        var xt = (function () {
            function e(e) {
              this.index_ = e
            }
            return (
              (e.prototype.updateChild = function (e, t, n, r, source, o) {
                Object(c.d)(
                  e.isIndexed(this.index_),
                  "A node must be indexed if only a child is updated"
                )
                var l = e.getImmediateChild(t)
                return l.getChild(r).equals(n.getChild(r)) &&
                  l.isEmpty() === n.isEmpty()
                  ? e
                  : (null != o &&
                      (n.isEmpty()
                        ? e.hasChild(t)
                          ? o.trackChildChange(Nt(t, l))
                          : Object(c.d)(
                              e.isLeafNode(),
                              "A child remove without an old child only makes sense on a leaf node"
                            )
                        : l.isEmpty()
                        ? o.trackChildChange(Pt(t, n))
                        : o.trackChildChange(jt(t, n, l))),
                    e.isLeafNode() && n.isEmpty()
                      ? e
                      : e.updateImmediateChild(t, n).withIndex(this.index_))
              }),
              (e.prototype.updateFullNode = function (e, t, n) {
                return (
                  null != n &&
                    (e.isLeafNode() ||
                      e.forEachChild(lt, function (e, r) {
                        t.hasChild(e) || n.trackChildChange(Nt(e, r))
                      }),
                    t.isLeafNode() ||
                      t.forEachChild(lt, function (t, r) {
                        if (e.hasChild(t)) {
                          var o = e.getImmediateChild(t)
                          o.equals(r) || n.trackChildChange(jt(t, r, o))
                        } else n.trackChildChange(Pt(t, r))
                      })),
                  t.withIndex(this.index_)
                )
              }),
              (e.prototype.updatePriority = function (e, t) {
                return e.isEmpty() ? yt.EMPTY_NODE : e.updatePriority(t)
              }),
              (e.prototype.filtersNodes = function () {
                return !1
              }),
              (e.prototype.getIndexedFilter = function () {
                return this
              }),
              (e.prototype.getIndex = function () {
                return this.index_
              }),
              e
            )
          })(),
          Rt = (function () {
            function e(t) {
              ;(this.indexedFilter_ = new xt(t.getIndex())),
                (this.index_ = t.getIndex()),
                (this.startPost_ = e.getStartPost_(t)),
                (this.endPost_ = e.getEndPost_(t))
            }
            return (
              (e.prototype.getStartPost = function () {
                return this.startPost_
              }),
              (e.prototype.getEndPost = function () {
                return this.endPost_
              }),
              (e.prototype.matches = function (e) {
                return (
                  this.index_.compare(this.getStartPost(), e) <= 0 &&
                  this.index_.compare(e, this.getEndPost()) <= 0
                )
              }),
              (e.prototype.updateChild = function (e, t, n, r, source, o) {
                return (
                  this.matches(new He(t, n)) || (n = yt.EMPTY_NODE),
                  this.indexedFilter_.updateChild(e, t, n, r, source, o)
                )
              }),
              (e.prototype.updateFullNode = function (e, t, n) {
                t.isLeafNode() && (t = yt.EMPTY_NODE)
                var r = t.withIndex(this.index_)
                r = r.updatePriority(yt.EMPTY_NODE)
                var o = this
                return (
                  t.forEachChild(lt, function (e, t) {
                    o.matches(new He(e, t)) ||
                      (r = r.updateImmediateChild(e, yt.EMPTY_NODE))
                  }),
                  this.indexedFilter_.updateFullNode(e, r, n)
                )
              }),
              (e.prototype.updatePriority = function (e, t) {
                return e
              }),
              (e.prototype.filtersNodes = function () {
                return !0
              }),
              (e.prototype.getIndexedFilter = function () {
                return this.indexedFilter_
              }),
              (e.prototype.getIndex = function () {
                return this.index_
              }),
              (e.getStartPost_ = function (e) {
                if (e.hasStart()) {
                  var t = e.getIndexStartName()
                  return e.getIndex().makePost(e.getIndexStartValue(), t)
                }
                return e.getIndex().minPost()
              }),
              (e.getEndPost_ = function (e) {
                if (e.hasEnd()) {
                  var t = e.getIndexEndName()
                  return e.getIndex().makePost(e.getIndexEndValue(), t)
                }
                return e.getIndex().maxPost()
              }),
              e
            )
          })(),
          Dt = (function () {
            function e(e) {
              ;(this.rangedFilter_ = new Rt(e)),
                (this.index_ = e.getIndex()),
                (this.limit_ = e.getLimit()),
                (this.reverse_ = !e.isViewFromLeft())
            }
            return (
              (e.prototype.updateChild = function (e, t, n, r, source, o) {
                return (
                  this.rangedFilter_.matches(new He(t, n)) ||
                    (n = yt.EMPTY_NODE),
                  e.getImmediateChild(t).equals(n)
                    ? e
                    : e.numChildren() < this.limit_
                    ? this.rangedFilter_
                        .getIndexedFilter()
                        .updateChild(e, t, n, r, source, o)
                    : this.fullLimitUpdateChild_(e, t, n, source, o)
                )
              }),
              (e.prototype.updateFullNode = function (e, t, n) {
                var r
                if (t.isLeafNode() || t.isEmpty())
                  r = yt.EMPTY_NODE.withIndex(this.index_)
                else if (
                  2 * this.limit_ < t.numChildren() &&
                  t.isIndexed(this.index_)
                ) {
                  r = yt.EMPTY_NODE.withIndex(this.index_)
                  var o = void 0
                  o = this.reverse_
                    ? t.getReverseIteratorFrom(
                        this.rangedFilter_.getEndPost(),
                        this.index_
                      )
                    : t.getIteratorFrom(
                        this.rangedFilter_.getStartPost(),
                        this.index_
                      )
                  for (var c = 0; o.hasNext() && c < this.limit_; ) {
                    var l = o.getNext()
                    if (
                      !(this.reverse_
                        ? this.index_.compare(
                            this.rangedFilter_.getStartPost(),
                            l
                          ) <= 0
                        : this.index_.compare(
                            l,
                            this.rangedFilter_.getEndPost()
                          ) <= 0)
                    )
                      break
                    ;(r = r.updateImmediateChild(l.name, l.node)), c++
                  }
                } else {
                  r = (r = t.withIndex(this.index_)).updatePriority(
                    yt.EMPTY_NODE
                  )
                  var h = void 0,
                    d = void 0,
                    f = void 0
                  o = void 0
                  if (this.reverse_) {
                    ;(o = r.getReverseIterator(this.index_)),
                      (h = this.rangedFilter_.getEndPost()),
                      (d = this.rangedFilter_.getStartPost())
                    var _ = this.index_.getCompare()
                    f = function (a, b) {
                      return _(b, a)
                    }
                  } else
                    (o = r.getIterator(this.index_)),
                      (h = this.rangedFilter_.getStartPost()),
                      (d = this.rangedFilter_.getEndPost()),
                      (f = this.index_.getCompare())
                  c = 0
                  for (var v = !1; o.hasNext(); ) {
                    l = o.getNext()
                    !v && f(h, l) <= 0 && (v = !0),
                      v && c < this.limit_ && f(l, d) <= 0
                        ? c++
                        : (r = r.updateImmediateChild(l.name, yt.EMPTY_NODE))
                  }
                }
                return this.rangedFilter_
                  .getIndexedFilter()
                  .updateFullNode(e, r, n)
              }),
              (e.prototype.updatePriority = function (e, t) {
                return e
              }),
              (e.prototype.filtersNodes = function () {
                return !0
              }),
              (e.prototype.getIndexedFilter = function () {
                return this.rangedFilter_.getIndexedFilter()
              }),
              (e.prototype.getIndex = function () {
                return this.index_
              }),
              (e.prototype.fullLimitUpdateChild_ = function (
                e,
                t,
                n,
                source,
                r
              ) {
                var o
                if (this.reverse_) {
                  var l = this.index_.getCompare()
                  o = function (a, b) {
                    return l(b, a)
                  }
                } else o = this.index_.getCompare()
                var h = e
                Object(c.d)(h.numChildren() === this.limit_, "")
                var d = new He(t, n),
                  f = this.reverse_
                    ? h.getFirstChild(this.index_)
                    : h.getLastChild(this.index_),
                  _ = this.rangedFilter_.matches(d)
                if (h.hasChild(t)) {
                  for (
                    var v = h.getImmediateChild(t),
                      y = source.getChildAfterChild(
                        this.index_,
                        f,
                        this.reverse_
                      );
                    null != y && (y.name === t || h.hasChild(y.name));

                  )
                    y = source.getChildAfterChild(this.index_, y, this.reverse_)
                  var m = null == y ? 1 : o(y, d)
                  if (_ && !n.isEmpty() && m >= 0)
                    return (
                      null != r && r.trackChildChange(jt(t, n, v)),
                      h.updateImmediateChild(t, n)
                    )
                  null != r && r.trackChildChange(Nt(t, v))
                  var w = h.updateImmediateChild(t, yt.EMPTY_NODE)
                  return null != y && this.rangedFilter_.matches(y)
                    ? (null != r && r.trackChildChange(Pt(y.name, y.node)),
                      w.updateImmediateChild(y.name, y.node))
                    : w
                }
                return n.isEmpty()
                  ? e
                  : _ && o(f, d) >= 0
                  ? (null != r &&
                      (r.trackChildChange(Nt(f.name, f.node)),
                      r.trackChildChange(Pt(t, n))),
                    h
                      .updateImmediateChild(t, n)
                      .updateImmediateChild(f.name, yt.EMPTY_NODE))
                  : e
              }),
              e
            )
          })(),
          At = (function () {
            function e() {
              ;(this.limitSet_ = !1),
                (this.startSet_ = !1),
                (this.startNameSet_ = !1),
                (this.startAfterSet_ = !1),
                (this.endSet_ = !1),
                (this.endNameSet_ = !1),
                (this.endBeforeSet_ = !1),
                (this.limit_ = 0),
                (this.viewFrom_ = ""),
                (this.indexStartValue_ = null),
                (this.indexStartName_ = ""),
                (this.indexEndValue_ = null),
                (this.indexEndName_ = ""),
                (this.index_ = lt)
            }
            return (
              (e.prototype.hasStart = function () {
                return this.startSet_
              }),
              (e.prototype.hasStartAfter = function () {
                return this.startAfterSet_
              }),
              (e.prototype.hasEndBefore = function () {
                return this.endBeforeSet_
              }),
              (e.prototype.isViewFromLeft = function () {
                return "" === this.viewFrom_
                  ? this.startSet_
                  : "l" === this.viewFrom_
              }),
              (e.prototype.getIndexStartValue = function () {
                return (
                  Object(c.d)(
                    this.startSet_,
                    "Only valid if start has been set"
                  ),
                  this.indexStartValue_
                )
              }),
              (e.prototype.getIndexStartName = function () {
                return (
                  Object(c.d)(
                    this.startSet_,
                    "Only valid if start has been set"
                  ),
                  this.startNameSet_ ? this.indexStartName_ : L
                )
              }),
              (e.prototype.hasEnd = function () {
                return this.endSet_
              }),
              (e.prototype.getIndexEndValue = function () {
                return (
                  Object(c.d)(this.endSet_, "Only valid if end has been set"),
                  this.indexEndValue_
                )
              }),
              (e.prototype.getIndexEndName = function () {
                return (
                  Object(c.d)(this.endSet_, "Only valid if end has been set"),
                  this.endNameSet_ ? this.indexEndName_ : F
                )
              }),
              (e.prototype.hasLimit = function () {
                return this.limitSet_
              }),
              (e.prototype.hasAnchoredLimit = function () {
                return this.limitSet_ && "" !== this.viewFrom_
              }),
              (e.prototype.getLimit = function () {
                return (
                  Object(c.d)(
                    this.limitSet_,
                    "Only valid if limit has been set"
                  ),
                  this.limit_
                )
              }),
              (e.prototype.getIndex = function () {
                return this.index_
              }),
              (e.prototype.loadsAllData = function () {
                return !(this.startSet_ || this.endSet_ || this.limitSet_)
              }),
              (e.prototype.isDefault = function () {
                return this.loadsAllData() && this.index_ === lt
              }),
              (e.prototype.copy = function () {
                var t = new e()
                return (
                  (t.limitSet_ = this.limitSet_),
                  (t.limit_ = this.limit_),
                  (t.startSet_ = this.startSet_),
                  (t.indexStartValue_ = this.indexStartValue_),
                  (t.startNameSet_ = this.startNameSet_),
                  (t.indexStartName_ = this.indexStartName_),
                  (t.endSet_ = this.endSet_),
                  (t.indexEndValue_ = this.indexEndValue_),
                  (t.endNameSet_ = this.endNameSet_),
                  (t.indexEndName_ = this.indexEndName_),
                  (t.index_ = this.index_),
                  (t.viewFrom_ = this.viewFrom_),
                  t
                )
              }),
              e
            )
          })()
        function Lt(e, t, n) {
          var r = e.copy()
          return (
            (r.startSet_ = !0),
            void 0 === t && (t = null),
            (r.indexStartValue_ = t),
            null != n
              ? ((r.startNameSet_ = !0), (r.indexStartName_ = n))
              : ((r.startNameSet_ = !1), (r.indexStartName_ = "")),
            r
          )
        }
        function Ft(e, t, n) {
          var r = e.copy()
          return (
            (r.endSet_ = !0),
            void 0 === t && (t = null),
            (r.indexEndValue_ = t),
            void 0 !== n
              ? ((r.endNameSet_ = !0), (r.indexEndName_ = n))
              : ((r.endNameSet_ = !1), (r.indexEndName_ = "")),
            r
          )
        }
        function Mt(e, t) {
          var n = e.copy()
          return (n.index_ = t), n
        }
        function qt(e) {
          var t,
            n = {}
          return (
            e.isDefault() ||
              (e.index_ === lt
                ? (t = "$priority")
                : e.index_ === Ot
                ? (t = "$value")
                : e.index_ === Ke
                ? (t = "$key")
                : (Object(c.d)(
                    e.index_ instanceof Ct,
                    "Unrecognized index type!"
                  ),
                  (t = e.index_.toString())),
              (n.orderBy = Object(c.C)(t)),
              e.startSet_ &&
                ((n.startAt = Object(c.C)(e.indexStartValue_)),
                e.startNameSet_ &&
                  (n.startAt += "," + Object(c.C)(e.indexStartName_))),
              e.endSet_ &&
                ((n.endAt = Object(c.C)(e.indexEndValue_)),
                e.endNameSet_ &&
                  (n.endAt += "," + Object(c.C)(e.indexEndName_))),
              e.limitSet_ &&
                (e.isViewFromLeft()
                  ? (n.limitToFirst = e.limit_)
                  : (n.limitToLast = e.limit_))),
            n
          )
        }
        function Wt(e) {
          var t = {}
          if (
            (e.startSet_ &&
              ((t.sp = e.indexStartValue_),
              e.startNameSet_ && (t.sn = e.indexStartName_)),
            e.endSet_ &&
              ((t.ep = e.indexEndValue_),
              e.endNameSet_ && (t.en = e.indexEndName_)),
            e.limitSet_)
          ) {
            t.l = e.limit_
            var n = e.viewFrom_
            "" === n && (n = e.isViewFromLeft() ? "l" : "r"), (t.vf = n)
          }
          return e.index_ !== lt && (t.i = e.index_.toString()), t
        }
        var Ut = (function (e) {
            function t(t, n, r, o) {
              var c = e.call(this) || this
              return (
                (c.repoInfo_ = t),
                (c.onDataUpdate_ = n),
                (c.authTokenProvider_ = r),
                (c.appCheckTokenProvider_ = o),
                (c.log_ = j("p:rest:")),
                (c.listens_ = {}),
                c
              )
            }
            return (
              Object(l.c)(t, e),
              (t.prototype.reportStats = function (e) {
                throw new Error("Method not implemented.")
              }),
              (t.getListenId_ = function (e, t) {
                return void 0 !== t
                  ? "tag$" + t
                  : (Object(c.d)(
                      e._queryParams.isDefault(),
                      "should have a tag if it's not a default query."
                    ),
                    e._path.toString())
              }),
              (t.prototype.listen = function (e, n, r, o) {
                var l = this,
                  h = e._path.toString()
                this.log_("Listen called for " + h + " " + e._queryIdentifier)
                var d = t.getListenId_(e, r),
                  f = {}
                this.listens_[d] = f
                var _ = qt(e._queryParams)
                this.restRequest_(h + ".json", _, function (e, t) {
                  var data = t
                  ;(404 === e && ((data = null), (e = null)),
                  null === e && l.onDataUpdate_(h, data, !1, r),
                  Object(c.z)(l.listens_, d) === f) &&
                    o(
                      e
                        ? 401 === e
                          ? "permission_denied"
                          : "rest_error:" + e
                        : "ok",
                      null
                    )
                })
              }),
              (t.prototype.unlisten = function (e, n) {
                var r = t.getListenId_(e, n)
                delete this.listens_[r]
              }),
              (t.prototype.get = function (e) {
                var t = this,
                  n = qt(e._queryParams),
                  r = e._path.toString(),
                  o = new c.a()
                return (
                  this.restRequest_(r + ".json", n, function (e, n) {
                    var data = n
                    404 === e && ((data = null), (e = null)),
                      null === e
                        ? (t.onDataUpdate_(r, data, !1, null), o.resolve(data))
                        : o.reject(new Error(data))
                  }),
                  o.promise
                )
              }),
              (t.prototype.refreshAuthToken = function (e) {}),
              (t.prototype.restRequest_ = function (e, t, n) {
                var r = this
                return (
                  void 0 === t && (t = {}),
                  (t.format = "export"),
                  Promise.all([
                    this.authTokenProvider_.getToken(!1),
                    this.appCheckTokenProvider_.getToken(!1),
                  ]).then(function (o) {
                    var h = Object(l.e)(o, 2),
                      d = h[0],
                      f = h[1]
                    d && d.accessToken && (t.auth = d.accessToken),
                      f && f.token && (t.ac = f.token)
                    var _ =
                      (r.repoInfo_.secure ? "https://" : "http://") +
                      r.repoInfo_.host +
                      e +
                      "?ns=" +
                      r.repoInfo_.namespace +
                      Object(c.y)(t)
                    r.log_("Sending REST request for " + _)
                    var v = new XMLHttpRequest()
                    ;(v.onreadystatechange = function () {
                      if (n && 4 === v.readyState) {
                        r.log_(
                          "REST Response for " + _ + " received. status:",
                          v.status,
                          "response:",
                          v.responseText
                        )
                        var e = null
                        if (v.status >= 200 && v.status < 300) {
                          try {
                            e = Object(c.w)(v.responseText)
                          } catch (e) {
                            D(
                              "Failed to parse JSON response for " +
                                _ +
                                ": " +
                                v.responseText
                            )
                          }
                          n(null, e)
                        } else
                          401 !== v.status &&
                            404 !== v.status &&
                            D(
                              "Got unsuccessful REST response for " +
                                _ +
                                " Status: " +
                                v.status
                            ),
                            n(v.status)
                        n = null
                      }
                    }),
                      v.open("GET", _, !0),
                      v.send()
                  })
                )
              }),
              t
            )
          })(be),
          Bt = (function () {
            function e() {
              this.rootNode_ = yt.EMPTY_NODE
            }
            return (
              (e.prototype.getNode = function (path) {
                return this.rootNode_.getChild(path)
              }),
              (e.prototype.updateSnapshot = function (path, e) {
                this.rootNode_ = this.rootNode_.updateChild(path, e)
              }),
              e
            )
          })()
        function zt() {
          return { value: null, children: new Map() }
        }
        function Vt(e, path, data) {
          if (xe(path)) (e.value = data), e.children.clear()
          else if (null !== e.value) e.value = e.value.updateChild(path, data)
          else {
            var t = Ie(path)
            e.children.has(t) || e.children.set(t, zt()),
              Vt(e.children.get(t), (path = Se(path)), data)
          }
        }
        function Ht(e, path) {
          if (xe(path)) return (e.value = null), e.children.clear(), !0
          if (null !== e.value) {
            if (e.value.isLeafNode()) return !1
            var t = e.value
            return (
              (e.value = null),
              t.forEachChild(lt, function (t, n) {
                Vt(e, new Oe(t), n)
              }),
              Ht(e, path)
            )
          }
          if (e.children.size > 0) {
            var n = Ie(path)
            if (((path = Se(path)), e.children.has(n)))
              Ht(e.children.get(n), path) && e.children.delete(n)
            return 0 === e.children.size
          }
          return !0
        }
        function Qt(e, t, n) {
          null !== e.value
            ? n(t, e.value)
            : (function (e, t) {
                e.children.forEach(function (e, n) {
                  t(n, e)
                })
              })(e, function (e, r) {
                Qt(r, new Oe(t.toString() + "/" + e), n)
              })
        }
        var Yt,
          Kt = (function () {
            function e(e) {
              ;(this.collection_ = e), (this.last_ = null)
            }
            return (
              (e.prototype.get = function () {
                var e = this.collection_.get(),
                  t = Object(l.a)({}, e)
                return (
                  this.last_ &&
                    V(this.last_, function (e, n) {
                      t[e] = t[e] - n
                    }),
                  (this.last_ = e),
                  t
                )
              }),
              e
            )
          })(),
          Gt = (function () {
            function e(e, t) {
              ;(this.server_ = t),
                (this.statsToReport_ = {}),
                (this.statsListener_ = new Kt(e))
              var n = 1e4 + 2e4 * Math.random()
              J(this.reportStats_.bind(this), Math.floor(n))
            }
            return (
              (e.prototype.reportStats_ = function () {
                var e = this,
                  t = this.statsListener_.get(),
                  n = {},
                  r = !1
                V(t, function (t, o) {
                  o > 0 &&
                    Object(c.h)(e.statsToReport_, t) &&
                    ((n[t] = o), (r = !0))
                }),
                  r && this.server_.reportStats(n),
                  J(
                    this.reportStats_.bind(this),
                    Math.floor(2 * Math.random() * 3e5)
                  )
              }),
              e
            )
          })()
        function $t(e) {
          return { fromUser: !1, fromServer: !0, queryId: e, tagged: !0 }
        }
        !(function (e) {
          ;(e[(e.OVERWRITE = 0)] = "OVERWRITE"),
            (e[(e.MERGE = 1)] = "MERGE"),
            (e[(e.ACK_USER_WRITE = 2)] = "ACK_USER_WRITE"),
            (e[(e.LISTEN_COMPLETE = 3)] = "LISTEN_COMPLETE")
        })(Yt || (Yt = {}))
        var Jt,
          Xt = (function () {
            function e(path, e, t) {
              ;(this.path = path),
                (this.affectedTree = e),
                (this.revert = t),
                (this.type = Yt.ACK_USER_WRITE),
                (this.source = {
                  fromUser: !0,
                  fromServer: !1,
                  queryId: null,
                  tagged: !1,
                })
            }
            return (
              (e.prototype.operationForChild = function (t) {
                if (xe(this.path)) {
                  if (null != this.affectedTree.value)
                    return (
                      Object(c.d)(
                        this.affectedTree.children.isEmpty(),
                        "affectedTree should not have overlapping affected paths."
                      ),
                      this
                    )
                  var n = this.affectedTree.subtree(new Oe(t))
                  return new e(Ee(), n, this.revert)
                }
                return (
                  Object(c.d)(
                    Ie(this.path) === t,
                    "operationForChild called for unrelated child."
                  ),
                  new e(Se(this.path), this.affectedTree, this.revert)
                )
              }),
              e
            )
          })(),
          Zt = (function () {
            function e(source, path) {
              ;(this.source = source),
                (this.path = path),
                (this.type = Yt.LISTEN_COMPLETE)
            }
            return (
              (e.prototype.operationForChild = function (t) {
                return xe(this.path)
                  ? new e(this.source, Ee())
                  : new e(this.source, Se(this.path))
              }),
              e
            )
          })(),
          en = (function () {
            function e(source, path, e) {
              ;(this.source = source),
                (this.path = path),
                (this.snap = e),
                (this.type = Yt.OVERWRITE)
            }
            return (
              (e.prototype.operationForChild = function (t) {
                return xe(this.path)
                  ? new e(this.source, Ee(), this.snap.getImmediateChild(t))
                  : new e(this.source, Se(this.path), this.snap)
              }),
              e
            )
          })(),
          tn = (function () {
            function e(source, path, e) {
              ;(this.source = source),
                (this.path = path),
                (this.children = e),
                (this.type = Yt.MERGE)
            }
            return (
              (e.prototype.operationForChild = function (t) {
                if (xe(this.path)) {
                  var n = this.children.subtree(new Oe(t))
                  return n.isEmpty()
                    ? null
                    : n.value
                    ? new en(this.source, Ee(), n.value)
                    : new e(this.source, Ee(), n)
                }
                return (
                  Object(c.d)(
                    Ie(this.path) === t,
                    "Can't get a merge for a child not on the path of the operation"
                  ),
                  new e(this.source, Se(this.path), this.children)
                )
              }),
              (e.prototype.toString = function () {
                return (
                  "Operation(" +
                  this.path +
                  ": " +
                  this.source.toString() +
                  " merge: " +
                  this.children.toString() +
                  ")"
                )
              }),
              e
            )
          })(),
          nn = (function () {
            function e(e, t, n) {
              ;(this.node_ = e),
                (this.fullyInitialized_ = t),
                (this.filtered_ = n)
            }
            return (
              (e.prototype.isFullyInitialized = function () {
                return this.fullyInitialized_
              }),
              (e.prototype.isFiltered = function () {
                return this.filtered_
              }),
              (e.prototype.isCompleteForPath = function (path) {
                if (xe(path))
                  return this.isFullyInitialized() && !this.filtered_
                var e = Ie(path)
                return this.isCompleteForChild(e)
              }),
              (e.prototype.isCompleteForChild = function (e) {
                return (
                  (this.isFullyInitialized() && !this.filtered_) ||
                  this.node_.hasChild(e)
                )
              }),
              (e.prototype.getNode = function () {
                return this.node_
              }),
              e
            )
          })(),
          rn = function (e) {
            ;(this.query_ = e),
              (this.index_ = this.query_._queryParams.getIndex())
          }
        function on(e, t, n, r, o, l) {
          var h = r.filter(function (e) {
            return e.type === n
          })
          h.sort(function (a, b) {
            return (function (e, a, b) {
              if (null == a.childName || null == b.childName)
                throw Object(c.e)("Should only compare child_ events.")
              var t = new He(a.childName, a.snapshotNode),
                n = new He(b.childName, b.snapshotNode)
              return e.index_.compare(t, n)
            })(e, a, b)
          }),
            h.forEach(function (n) {
              var r = (function (e, t, n) {
                return (
                  "value" === t.type ||
                    "child_removed" === t.type ||
                    (t.prevName = n.getPredecessorChildName(
                      t.childName,
                      t.snapshotNode,
                      e.index_
                    )),
                  t
                )
              })(e, n, l)
              o.forEach(function (o) {
                o.respondsTo(n.type) && t.push(o.createEvent(r, e.query_))
              })
            })
        }
        function an(e, t) {
          return { eventCache: e, serverCache: t }
        }
        function sn(e, t, n, r) {
          return an(new nn(t, n, r), e.serverCache)
        }
        function un(e, t, n, r) {
          return an(e.eventCache, new nn(t, n, r))
        }
        function cn(e) {
          return e.eventCache.isFullyInitialized()
            ? e.eventCache.getNode()
            : null
        }
        function ln(e) {
          return e.serverCache.isFullyInitialized()
            ? e.serverCache.getNode()
            : null
        }
        var hn = (function () {
            function e(e, t) {
              void 0 === t && (Jt || (Jt = new Xe(W)), (t = Jt)),
                (this.value = e),
                (this.children = t)
            }
            return (
              (e.fromObject = function (t) {
                var n = new e(null)
                return (
                  V(t, function (e, t) {
                    n = n.set(new Oe(e), t)
                  }),
                  n
                )
              }),
              (e.prototype.isEmpty = function () {
                return null === this.value && this.children.isEmpty()
              }),
              (e.prototype.findRootMostMatchingPathAndValue = function (e, t) {
                if (null != this.value && t(this.value))
                  return { path: Ee(), value: this.value }
                if (xe(e)) return null
                var n = Ie(e),
                  r = this.children.get(n)
                if (null !== r) {
                  var o = r.findRootMostMatchingPathAndValue(Se(e), t)
                  return null != o
                    ? { path: je(new Oe(n), o.path), value: o.value }
                    : null
                }
                return null
              }),
              (e.prototype.findRootMostValueAndPath = function (e) {
                return this.findRootMostMatchingPathAndValue(e, function () {
                  return !0
                })
              }),
              (e.prototype.subtree = function (t) {
                if (xe(t)) return this
                var n = Ie(t),
                  r = this.children.get(n)
                return null !== r ? r.subtree(Se(t)) : new e(null)
              }),
              (e.prototype.set = function (t, n) {
                if (xe(t)) return new e(n, this.children)
                var r = Ie(t),
                  o = (this.children.get(r) || new e(null)).set(Se(t), n),
                  c = this.children.insert(r, o)
                return new e(this.value, c)
              }),
              (e.prototype.remove = function (t) {
                if (xe(t))
                  return this.children.isEmpty()
                    ? new e(null)
                    : new e(null, this.children)
                var n = Ie(t),
                  r = this.children.get(n)
                if (r) {
                  var o = r.remove(Se(t)),
                    c = void 0
                  return (
                    (c = o.isEmpty()
                      ? this.children.remove(n)
                      : this.children.insert(n, o)),
                    null === this.value && c.isEmpty()
                      ? new e(null)
                      : new e(this.value, c)
                  )
                }
                return this
              }),
              (e.prototype.get = function (e) {
                if (xe(e)) return this.value
                var t = Ie(e),
                  n = this.children.get(t)
                return n ? n.get(Se(e)) : null
              }),
              (e.prototype.setTree = function (t, n) {
                if (xe(t)) return n
                var r = Ie(t),
                  o = (this.children.get(r) || new e(null)).setTree(Se(t), n),
                  c = void 0
                return (
                  (c = o.isEmpty()
                    ? this.children.remove(r)
                    : this.children.insert(r, o)),
                  new e(this.value, c)
                )
              }),
              (e.prototype.fold = function (e) {
                return this.fold_(Ee(), e)
              }),
              (e.prototype.fold_ = function (e, t) {
                var n = {}
                return (
                  this.children.inorderTraversal(function (r, o) {
                    n[r] = o.fold_(je(e, r), t)
                  }),
                  t(e, this.value, n)
                )
              }),
              (e.prototype.findOnPath = function (path, e) {
                return this.findOnPath_(path, Ee(), e)
              }),
              (e.prototype.findOnPath_ = function (e, t, n) {
                var r = !!this.value && n(t, this.value)
                if (r) return r
                if (xe(e)) return null
                var o = Ie(e),
                  c = this.children.get(o)
                return c ? c.findOnPath_(Se(e), je(t, o), n) : null
              }),
              (e.prototype.foreachOnPath = function (path, e) {
                return this.foreachOnPath_(path, Ee(), e)
              }),
              (e.prototype.foreachOnPath_ = function (t, n, r) {
                if (xe(t)) return this
                this.value && r(n, this.value)
                var o = Ie(t),
                  c = this.children.get(o)
                return c ? c.foreachOnPath_(Se(t), je(n, o), r) : new e(null)
              }),
              (e.prototype.foreach = function (e) {
                this.foreach_(Ee(), e)
              }),
              (e.prototype.foreach_ = function (e, t) {
                this.children.inorderTraversal(function (n, r) {
                  r.foreach_(je(e, n), t)
                }),
                  this.value && t(e, this.value)
              }),
              (e.prototype.foreachChild = function (e) {
                this.children.inorderTraversal(function (t, n) {
                  n.value && e(t, n.value)
                })
              }),
              e
            )
          })(),
          dn = (function () {
            function e(e) {
              this.writeTree_ = e
            }
            return (
              (e.empty = function () {
                return new e(new hn(null))
              }),
              e
            )
          })()
        function pn(e, path, t) {
          if (xe(path)) return new dn(new hn(t))
          var n = e.writeTree_.findRootMostValueAndPath(path)
          if (null != n) {
            var r = n.path,
              o = n.value,
              c = Re(r, path)
            return (o = o.updateChild(c, t)), new dn(e.writeTree_.set(r, o))
          }
          var l = new hn(t),
            h = e.writeTree_.setTree(path, l)
          return new dn(h)
        }
        function fn(e, path, t) {
          var n = e
          return (
            V(t, function (e, t) {
              n = pn(n, je(path, e), t)
            }),
            n
          )
        }
        function _n(e, path) {
          if (xe(path)) return dn.empty()
          var t = e.writeTree_.setTree(path, new hn(null))
          return new dn(t)
        }
        function vn(e, path) {
          return null != yn(e, path)
        }
        function yn(e, path) {
          var t = e.writeTree_.findRootMostValueAndPath(path)
          return null != t
            ? e.writeTree_.get(t.path).getChild(Re(t.path, path))
            : null
        }
        function gn(e) {
          var t = [],
            n = e.writeTree_.value
          return (
            null != n
              ? n.isLeafNode() ||
                n.forEachChild(lt, function (e, n) {
                  t.push(new He(e, n))
                })
              : e.writeTree_.children.inorderTraversal(function (e, n) {
                  null != n.value && t.push(new He(e, n.value))
                }),
            t
          )
        }
        function mn(e, path) {
          if (xe(path)) return e
          var t = yn(e, path)
          return new dn(null != t ? new hn(t) : e.writeTree_.subtree(path))
        }
        function bn(e) {
          return e.writeTree_.isEmpty()
        }
        function wn(e, t) {
          return Cn(Ee(), e.writeTree_, t)
        }
        function Cn(e, t, n) {
          if (null != t.value) return n.updateChild(e, t.value)
          var r = null
          return (
            t.children.inorderTraversal(function (t, o) {
              ".priority" === t
                ? (Object(c.d)(
                    null !== o.value,
                    "Priority writes must always be leaf nodes"
                  ),
                  (r = o.value))
                : (n = Cn(je(e, t), o, n))
            }),
            n.getChild(e).isEmpty() ||
              null === r ||
              (n = n.updateChild(je(e, ".priority"), r)),
            n
          )
        }
        function On(e, path) {
          return Ln(path, e)
        }
        function En(e, t) {
          var n = e.allWrites.findIndex(function (s) {
            return s.writeId === t
          })
          Object(c.d)(n >= 0, "removeWrite called with nonexistent writeId.")
          var r = e.allWrites[n]
          e.allWrites.splice(n, 1)
          for (
            var o = r.visible, l = !1, i = e.allWrites.length - 1;
            o && i >= 0;

          ) {
            var h = e.allWrites[i]
            h.visible &&
              (i >= n && In(h, r.path)
                ? (o = !1)
                : Le(r.path, h.path) && (l = !0)),
              i--
          }
          if (o) {
            if (l)
              return (
                (function (e) {
                  ;(e.visibleWrites = Sn(e.allWrites, Tn, Ee())),
                    e.allWrites.length > 0
                      ? (e.lastWriteId =
                          e.allWrites[e.allWrites.length - 1].writeId)
                      : (e.lastWriteId = -1)
                })(e),
                !0
              )
            r.snap
              ? (e.visibleWrites = _n(e.visibleWrites, r.path))
              : V(r.children, function (t) {
                  e.visibleWrites = _n(e.visibleWrites, je(r.path, t))
                })
            return !0
          }
          return !1
        }
        function In(e, path) {
          if (e.snap) return Le(e.path, path)
          for (var t in e.children)
            if (e.children.hasOwnProperty(t) && Le(je(e.path, t), path))
              return !0
          return !1
        }
        function Tn(e) {
          return e.visible
        }
        function Sn(e, filter, t) {
          for (var n = dn.empty(), i = 0; i < e.length; ++i) {
            var r = e[i]
            if (filter(r)) {
              var o = r.path,
                l = void 0
              if (r.snap)
                Le(t, o)
                  ? (n = pn(n, (l = Re(t, o)), r.snap))
                  : Le(o, t) &&
                    ((l = Re(o, t)), (n = pn(n, Ee(), r.snap.getChild(l))))
              else {
                if (!r.children)
                  throw Object(c.e)(
                    "WriteRecord should have .snap or .children"
                  )
                if (Le(t, o)) n = fn(n, (l = Re(t, o)), r.children)
                else if (Le(o, t))
                  if (xe((l = Re(o, t)))) n = fn(n, Ee(), r.children)
                  else {
                    var h = Object(c.z)(r.children, Ie(l))
                    if (h) {
                      var d = h.getChild(Se(l))
                      n = pn(n, Ee(), d)
                    }
                  }
              }
            }
          }
          return n
        }
        function kn(e, t, n, r, o) {
          if (r || o) {
            var c = mn(e.visibleWrites, t)
            if (!o && bn(c)) return n
            if (o || null != n || vn(c, Ee())) {
              return wn(
                Sn(
                  e.allWrites,
                  function (e) {
                    return (
                      (e.visible || o) &&
                      (!r || !~r.indexOf(e.writeId)) &&
                      (Le(e.path, t) || Le(t, e.path))
                    )
                  },
                  t
                ),
                n || yt.EMPTY_NODE
              )
            }
            return null
          }
          var l = yn(e.visibleWrites, t)
          if (null != l) return l
          var h = mn(e.visibleWrites, t)
          return bn(h)
            ? n
            : null != n || vn(h, Ee())
            ? wn(h, n || yt.EMPTY_NODE)
            : null
        }
        function Pn(e, t, n, r) {
          return kn(e.writeTree, e.treePath, t, n, r)
        }
        function Nn(e, t) {
          return (function (e, t, n) {
            var r = yt.EMPTY_NODE,
              o = yn(e.visibleWrites, t)
            if (o)
              return (
                o.isLeafNode() ||
                  o.forEachChild(lt, function (e, t) {
                    r = r.updateImmediateChild(e, t)
                  }),
                r
              )
            if (n) {
              var c = mn(e.visibleWrites, t)
              return (
                n.forEachChild(lt, function (e, t) {
                  var n = wn(mn(c, new Oe(e)), t)
                  r = r.updateImmediateChild(e, n)
                }),
                gn(c).forEach(function (e) {
                  r = r.updateImmediateChild(e.name, e.node)
                }),
                r
              )
            }
            return (
              gn(mn(e.visibleWrites, t)).forEach(function (e) {
                r = r.updateImmediateChild(e.name, e.node)
              }),
              r
            )
          })(e.writeTree, e.treePath, t)
        }
        function jn(e, path, t, n) {
          return (function (e, t, n, r, o) {
            Object(c.d)(
              r || o,
              "Either existingEventSnap or existingServerSnap must exist"
            )
            var path = je(t, n)
            if (vn(e.visibleWrites, path)) return null
            var l = mn(e.visibleWrites, path)
            return bn(l) ? o.getChild(n) : wn(l, o.getChild(n))
          })(e.writeTree, e.treePath, path, t, n)
        }
        function xn(e, path) {
          return (function (e, path) {
            return yn(e.visibleWrites, path)
          })(e.writeTree, je(e.treePath, path))
        }
        function Rn(e, t, n, r, o, c) {
          return (function (e, t, n, r, o, c, l) {
            var h,
              d = mn(e.visibleWrites, t),
              f = yn(d, Ee())
            if (null != f) h = f
            else {
              if (null == n) return []
              h = wn(d, n)
            }
            if ((h = h.withIndex(l)).isEmpty() || h.isLeafNode()) return []
            for (
              var _ = [],
                v = l.getCompare(),
                y = c
                  ? h.getReverseIteratorFrom(r, l)
                  : h.getIteratorFrom(r, l),
                m = y.getNext();
              m && _.length < o;

            )
              0 !== v(m, r) && _.push(m), (m = y.getNext())
            return _
          })(e.writeTree, e.treePath, t, n, r, o, c)
        }
        function Dn(e, t, n) {
          return (function (e, t, n, r) {
            var path = je(t, n),
              o = yn(e.visibleWrites, path)
            return null != o
              ? o
              : r.isCompleteForChild(n)
              ? wn(mn(e.visibleWrites, path), r.getNode().getImmediateChild(n))
              : null
          })(e.writeTree, e.treePath, t, n)
        }
        function An(e, t) {
          return Ln(je(e.treePath, t), e.writeTree)
        }
        function Ln(path, e) {
          return { treePath: path, writeTree: e }
        }
        var Fn = (function () {
            function e() {
              this.changeMap = new Map()
            }
            return (
              (e.prototype.trackChildChange = function (e) {
                var t = e.type,
                  n = e.childName
                Object(c.d)(
                  "child_added" === t ||
                    "child_changed" === t ||
                    "child_removed" === t,
                  "Only child changes supported for tracking"
                ),
                  Object(c.d)(
                    ".priority" !== n,
                    "Only non-priority child changes can be tracked."
                  )
                var r = this.changeMap.get(n)
                if (r) {
                  var o = r.type
                  if ("child_added" === t && "child_removed" === o)
                    this.changeMap.set(n, jt(n, e.snapshotNode, r.snapshotNode))
                  else if ("child_removed" === t && "child_added" === o)
                    this.changeMap.delete(n)
                  else if ("child_removed" === t && "child_changed" === o)
                    this.changeMap.set(n, Nt(n, r.oldSnap))
                  else if ("child_changed" === t && "child_added" === o)
                    this.changeMap.set(n, Pt(n, e.snapshotNode))
                  else {
                    if ("child_changed" !== t || "child_changed" !== o)
                      throw Object(c.e)(
                        "Illegal combination of changes: " +
                          e +
                          " occurred after " +
                          r
                      )
                    this.changeMap.set(n, jt(n, e.snapshotNode, r.oldSnap))
                  }
                } else this.changeMap.set(n, e)
              }),
              (e.prototype.getChanges = function () {
                return Array.from(this.changeMap.values())
              }),
              e
            )
          })(),
          Mn = new ((function () {
            function e() {}
            return (
              (e.prototype.getCompleteChild = function (e) {
                return null
              }),
              (e.prototype.getChildAfterChild = function (e, t, n) {
                return null
              }),
              e
            )
          })())(),
          qn = (function () {
            function e(e, t, n) {
              void 0 === n && (n = null),
                (this.writes_ = e),
                (this.viewCache_ = t),
                (this.optCompleteServerCache_ = n)
            }
            return (
              (e.prototype.getCompleteChild = function (e) {
                var t = this.viewCache_.eventCache
                if (t.isCompleteForChild(e))
                  return t.getNode().getImmediateChild(e)
                var n =
                  null != this.optCompleteServerCache_
                    ? new nn(this.optCompleteServerCache_, !0, !1)
                    : this.viewCache_.serverCache
                return Dn(this.writes_, e, n)
              }),
              (e.prototype.getChildAfterChild = function (e, t, n) {
                var r =
                    null != this.optCompleteServerCache_
                      ? this.optCompleteServerCache_
                      : ln(this.viewCache_),
                  o = Rn(this.writes_, r, t, 1, n, e)
                return 0 === o.length ? null : o[0]
              }),
              e
            )
          })()
        function Wn(e, t, n, r, o) {
          var l,
            h,
            d = new Fn()
          if (n.type === Yt.OVERWRITE) {
            var f = n
            f.source.fromUser
              ? (l = zn(e, t, f.path, f.snap, r, o, d))
              : (Object(c.d)(f.source.fromServer, "Unknown source."),
                (h =
                  f.source.tagged ||
                  (t.serverCache.isFiltered() && !xe(f.path))),
                (l = Bn(e, t, f.path, f.snap, r, o, h, d)))
          } else if (n.type === Yt.MERGE) {
            var _ = n
            _.source.fromUser
              ? (l = (function (e, t, path, n, r, o, c) {
                  var l = t
                  return (
                    n.foreach(function (n, h) {
                      var d = je(path, n)
                      Vn(t, Ie(d)) && (l = zn(e, l, d, h, r, o, c))
                    }),
                    n.foreach(function (n, h) {
                      var d = je(path, n)
                      Vn(t, Ie(d)) || (l = zn(e, l, d, h, r, o, c))
                    }),
                    l
                  )
                })(e, t, _.path, _.children, r, o, d))
              : (Object(c.d)(_.source.fromServer, "Unknown source."),
                (h = _.source.tagged || t.serverCache.isFiltered()),
                (l = Qn(e, t, _.path, _.children, r, o, h, d)))
          } else if (n.type === Yt.ACK_USER_WRITE) {
            var v = n
            l = v.revert
              ? (function (e, t, path, n, r, o) {
                  var l
                  if (null != xn(n, path)) return t
                  var source = new qn(n, t, r),
                    h = t.eventCache.getNode(),
                    d = void 0
                  if (xe(path) || ".priority" === Ie(path)) {
                    var f = void 0
                    if (t.serverCache.isFullyInitialized()) f = Pn(n, ln(t))
                    else {
                      var _ = t.serverCache.getNode()
                      Object(c.d)(
                        _ instanceof yt,
                        "serverChildren would be complete if leaf node"
                      ),
                        (f = Nn(n, _))
                    }
                    ;(f = f), (d = e.filter.updateFullNode(h, f, o))
                  } else {
                    var v = Ie(path),
                      y = Dn(n, v, t.serverCache)
                    null == y &&
                      t.serverCache.isCompleteForChild(v) &&
                      (y = h.getImmediateChild(v)),
                      (d =
                        null != y
                          ? e.filter.updateChild(h, v, y, Se(path), source, o)
                          : t.eventCache.getNode().hasChild(v)
                          ? e.filter.updateChild(
                              h,
                              v,
                              yt.EMPTY_NODE,
                              Se(path),
                              source,
                              o
                            )
                          : h).isEmpty() &&
                        t.serverCache.isFullyInitialized() &&
                        (l = Pn(n, ln(t))).isLeafNode() &&
                        (d = e.filter.updateFullNode(d, l, o))
                  }
                  return (
                    (l =
                      t.serverCache.isFullyInitialized() ||
                      null != xn(n, Ee())),
                    sn(t, d, l, e.filter.filtersNodes())
                  )
                })(e, t, v.path, r, o, d)
              : (function (e, t, n, r, o, c, l) {
                  if (null != xn(o, n)) return t
                  var h = t.serverCache.isFiltered(),
                    d = t.serverCache
                  if (null != r.value) {
                    if (
                      (xe(n) && d.isFullyInitialized()) ||
                      d.isCompleteForPath(n)
                    )
                      return Bn(e, t, n, d.getNode().getChild(n), o, c, h, l)
                    if (xe(n)) {
                      var f = new hn(null)
                      return (
                        d.getNode().forEachChild(Ke, function (e, t) {
                          f = f.set(new Oe(e), t)
                        }),
                        Qn(e, t, n, f, o, c, h, l)
                      )
                    }
                    return t
                  }
                  var _ = new hn(null)
                  return (
                    r.foreach(function (e, t) {
                      var r = je(n, e)
                      d.isCompleteForPath(r) &&
                        (_ = _.set(e, d.getNode().getChild(r)))
                    }),
                    Qn(e, t, n, _, o, c, h, l)
                  )
                })(e, t, v.path, v.affectedTree, r, o, d)
          } else {
            if (n.type !== Yt.LISTEN_COMPLETE)
              throw Object(c.e)("Unknown operation type: " + n.type)
            l = (function (e, t, path, n, r) {
              var o = t.serverCache,
                c = un(
                  t,
                  o.getNode(),
                  o.isFullyInitialized() || xe(path),
                  o.isFiltered()
                )
              return Un(e, c, path, n, Mn, r)
            })(e, t, n.path, r, d)
          }
          var y = d.getChanges()
          return (
            (function (e, t, n) {
              var r = t.eventCache
              if (r.isFullyInitialized()) {
                var o = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                  c = cn(e)
                ;(n.length > 0 ||
                  !e.eventCache.isFullyInitialized() ||
                  (o && !r.getNode().equals(c)) ||
                  !r.getNode().getPriority().equals(c.getPriority())) &&
                  n.push(kt(cn(t)))
              }
            })(t, l, y),
            { viewCache: l, changes: y }
          )
        }
        function Un(e, t, n, r, source, o) {
          var l = t.eventCache
          if (null != xn(r, n)) return t
          var h = void 0,
            d = void 0
          if (xe(n))
            if (
              (Object(c.d)(
                t.serverCache.isFullyInitialized(),
                "If change path is empty, we must have complete server data"
              ),
              t.serverCache.isFiltered())
            ) {
              var f = ln(t),
                _ = Nn(r, f instanceof yt ? f : yt.EMPTY_NODE)
              h = e.filter.updateFullNode(t.eventCache.getNode(), _, o)
            } else {
              var v = Pn(r, ln(t))
              h = e.filter.updateFullNode(t.eventCache.getNode(), v, o)
            }
          else {
            var y = Ie(n)
            if (".priority" === y) {
              Object(c.d)(
                1 === Te(n),
                "Can't have a priority with additional path components"
              )
              var m = l.getNode(),
                w = jn(r, n, m, (d = t.serverCache.getNode()))
              h = null != w ? e.filter.updatePriority(m, w) : l.getNode()
            } else {
              var C = Se(n),
                O = void 0
              if (l.isCompleteForChild(y)) {
                d = t.serverCache.getNode()
                var E = jn(r, n, l.getNode(), d)
                O =
                  null != E
                    ? l.getNode().getImmediateChild(y).updateChild(C, E)
                    : l.getNode().getImmediateChild(y)
              } else O = Dn(r, y, t.serverCache)
              h =
                null != O
                  ? e.filter.updateChild(l.getNode(), y, O, C, source, o)
                  : l.getNode()
            }
          }
          return sn(
            t,
            h,
            l.isFullyInitialized() || xe(n),
            e.filter.filtersNodes()
          )
        }
        function Bn(e, t, n, r, o, c, l, h) {
          var d,
            f = t.serverCache,
            _ = l ? e.filter : e.filter.getIndexedFilter()
          if (xe(n)) d = _.updateFullNode(f.getNode(), r, null)
          else if (_.filtersNodes() && !f.isFiltered()) {
            var v = f.getNode().updateChild(n, r)
            d = _.updateFullNode(f.getNode(), v, null)
          } else {
            var y = Ie(n)
            if (!f.isCompleteForPath(n) && Te(n) > 1) return t
            var m = Se(n),
              w = f.getNode().getImmediateChild(y).updateChild(m, r)
            d =
              ".priority" === y
                ? _.updatePriority(f.getNode(), w)
                : _.updateChild(f.getNode(), y, w, m, Mn, null)
          }
          var C = un(t, d, f.isFullyInitialized() || xe(n), _.filtersNodes())
          return Un(e, C, n, o, new qn(o, C, c), h)
        }
        function zn(e, t, n, r, o, c, l) {
          var h,
            d,
            f = t.eventCache,
            source = new qn(o, t, c)
          if (xe(n))
            (d = e.filter.updateFullNode(t.eventCache.getNode(), r, l)),
              (h = sn(t, d, !0, e.filter.filtersNodes()))
          else {
            var _ = Ie(n)
            if (".priority" === _)
              (d = e.filter.updatePriority(t.eventCache.getNode(), r)),
                (h = sn(t, d, f.isFullyInitialized(), f.isFiltered()))
            else {
              var v = Se(n),
                y = f.getNode().getImmediateChild(_),
                m = void 0
              if (xe(v)) m = r
              else {
                var w = source.getCompleteChild(_)
                m =
                  null != w
                    ? ".priority" === ke(v) && w.getChild(Ne(v)).isEmpty()
                      ? w
                      : w.updateChild(v, r)
                    : yt.EMPTY_NODE
              }
              if (y.equals(m)) h = t
              else
                h = sn(
                  t,
                  e.filter.updateChild(f.getNode(), _, m, v, source, l),
                  f.isFullyInitialized(),
                  e.filter.filtersNodes()
                )
            }
          }
          return h
        }
        function Vn(e, t) {
          return e.eventCache.isCompleteForChild(t)
        }
        function Hn(e, t, n) {
          return (
            n.foreach(function (e, n) {
              t = t.updateChild(e, n)
            }),
            t
          )
        }
        function Qn(e, t, path, n, r, o, c, l) {
          if (
            t.serverCache.getNode().isEmpty() &&
            !t.serverCache.isFullyInitialized()
          )
            return t
          var h,
            d = t
          h = xe(path) ? n : new hn(null).setTree(path, n)
          var f = t.serverCache.getNode()
          return (
            h.children.inorderTraversal(function (n, h) {
              if (f.hasChild(n)) {
                var _ = Hn(0, t.serverCache.getNode().getImmediateChild(n), h)
                d = Bn(e, d, new Oe(n), _, r, o, c, l)
              }
            }),
            h.children.inorderTraversal(function (n, h) {
              var _ = !t.serverCache.isCompleteForChild(n) && void 0 === h.value
              if (!f.hasChild(n) && !_) {
                var v = Hn(0, t.serverCache.getNode().getImmediateChild(n), h)
                d = Bn(e, d, new Oe(n), v, r, o, c, l)
              }
            }),
            d
          )
        }
        var Yn,
          Kn = (function () {
            function e(e, t) {
              ;(this.query_ = e), (this.eventRegistrations_ = [])
              var n,
                r = this.query_._queryParams,
                o = new xt(r.getIndex()),
                filter = (n = r).loadsAllData()
                  ? new xt(n.getIndex())
                  : n.hasLimit()
                  ? new Dt(n)
                  : new Rt(n)
              this.processor_ = (function (filter) {
                return { filter: filter }
              })(filter)
              var c = t.serverCache,
                l = t.eventCache,
                h = o.updateFullNode(yt.EMPTY_NODE, c.getNode(), null),
                d = filter.updateFullNode(yt.EMPTY_NODE, l.getNode(), null),
                f = new nn(h, c.isFullyInitialized(), o.filtersNodes()),
                _ = new nn(d, l.isFullyInitialized(), filter.filtersNodes())
              ;(this.viewCache_ = an(_, f)),
                (this.eventGenerator_ = new rn(this.query_))
            }
            return (
              Object.defineProperty(e.prototype, "query", {
                get: function () {
                  return this.query_
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            )
          })()
        function Gn(view, path) {
          var e = ln(view.viewCache_)
          return e &&
            (view.query._queryParams.loadsAllData() ||
              (!xe(path) && !e.getImmediateChild(Ie(path)).isEmpty()))
            ? e.getChild(path)
            : null
        }
        function $n(view) {
          return 0 === view.eventRegistrations_.length
        }
        function Jn(view, e, t) {
          var n = []
          if (t) {
            Object(c.d)(
              null == e,
              "A cancel should cancel all event registrations."
            )
            var r = view.query._path
            view.eventRegistrations_.forEach(function (e) {
              var o = e.createCancelEvent(t, r)
              o && n.push(o)
            })
          }
          if (e) {
            for (var o = [], i = 0; i < view.eventRegistrations_.length; ++i) {
              var l = view.eventRegistrations_[i]
              if (l.matches(e)) {
                if (e.hasAnyCallback()) {
                  o = o.concat(view.eventRegistrations_.slice(i + 1))
                  break
                }
              } else o.push(l)
            }
            view.eventRegistrations_ = o
          } else view.eventRegistrations_ = []
          return n
        }
        function Xn(view, e, t, n) {
          e.type === Yt.MERGE &&
            null !== e.source.queryId &&
            (Object(c.d)(
              ln(view.viewCache_),
              "We should always have a full cache before handling merges"
            ),
            Object(c.d)(
              cn(view.viewCache_),
              "Missing event cache, even though we have a server cache"
            ))
          var r,
            o,
            l = view.viewCache_,
            h = Wn(view.processor_, l, e, t, n)
          return (
            (r = view.processor_),
            (o = h.viewCache),
            Object(c.d)(
              o.eventCache.getNode().isIndexed(r.filter.getIndex()),
              "Event snap not indexed"
            ),
            Object(c.d)(
              o.serverCache.getNode().isIndexed(r.filter.getIndex()),
              "Server snap not indexed"
            ),
            Object(c.d)(
              h.viewCache.serverCache.isFullyInitialized() ||
                !l.serverCache.isFullyInitialized(),
              "Once a server snap is complete, it should never go back"
            ),
            (view.viewCache_ = h.viewCache),
            Zn(view, h.changes, h.viewCache.eventCache.getNode(), null)
          )
        }
        function Zn(view, e, t, n) {
          var r = n ? [n] : view.eventRegistrations_
          return (function (e, t, n, r) {
            var o = [],
              c = []
            return (
              t.forEach(function (t) {
                var n
                "child_changed" === t.type &&
                  e.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) &&
                  c.push(
                    ((n = t.childName),
                    {
                      type: "child_moved",
                      snapshotNode: t.snapshotNode,
                      childName: n,
                    })
                  )
              }),
              on(e, o, "child_removed", t, r, n),
              on(e, o, "child_added", t, r, n),
              on(e, o, "child_moved", c, r, n),
              on(e, o, "child_changed", t, r, n),
              on(e, o, "value", t, r, n),
              o
            )
          })(view.eventGenerator_, e, t, r)
        }
        var er,
          nr = function () {
            this.views = new Map()
          }
        function rr(e, t, n, r) {
          var o,
            h,
            d = t.source.queryId
          if (null !== d) {
            var view = e.views.get(d)
            return (
              Object(c.d)(
                null != view,
                "SyncTree gave us an op for an invalid query."
              ),
              Xn(view, t, n, r)
            )
          }
          var f = []
          try {
            for (
              var _ = Object(l.g)(e.views.values()), v = _.next();
              !v.done;
              v = _.next()
            ) {
              view = v.value
              f = f.concat(Xn(view, t, n, r))
            }
          } catch (e) {
            o = { error: e }
          } finally {
            try {
              v && !v.done && (h = _.return) && h.call(_)
            } finally {
              if (o) throw o.error
            }
          }
          return f
        }
        function ir(e, t, n, r, o) {
          var c = t._queryIdentifier,
            view = e.views.get(c)
          if (!view) {
            var l = Pn(n, o ? r : null),
              h = !1
            l
              ? (h = !0)
              : r instanceof yt
              ? ((l = Nn(n, r)), (h = !1))
              : ((l = yt.EMPTY_NODE), (h = !1))
            var d = an(new nn(l, h, !1), new nn(r, o, !1))
            return new Kn(t, d)
          }
          return view
        }
        function or(e, t, n, r, o, c) {
          var view = ir(e, t, r, o, c)
          return (
            e.views.has(t._queryIdentifier) ||
              e.views.set(t._queryIdentifier, view),
            (function (view, e) {
              view.eventRegistrations_.push(e)
            })(view, n),
            (function (view, e) {
              var t = view.viewCache_.eventCache,
                n = []
              return (
                t.getNode().isLeafNode() ||
                  t.getNode().forEachChild(lt, function (e, t) {
                    n.push(Pt(e, t))
                  }),
                t.isFullyInitialized() && n.push(kt(t.getNode())),
                Zn(view, n, t.getNode(), e)
              )
            })(view, n)
          )
        }
        function ar(e, t, n, r) {
          var o,
            h,
            d = t._queryIdentifier,
            f = [],
            _ = [],
            v = dr(e)
          if ("default" === d)
            try {
              for (
                var y = Object(l.g)(e.views.entries()), m = y.next();
                !m.done;
                m = y.next()
              ) {
                var w = Object(l.e)(m.value, 2),
                  C = w[0],
                  view = w[1]
                ;(_ = _.concat(Jn(view, n, r))),
                  $n(view) &&
                    (e.views.delete(C),
                    view.query._queryParams.loadsAllData() ||
                      f.push(view.query))
              }
            } catch (e) {
              o = { error: e }
            } finally {
              try {
                m && !m.done && (h = y.return) && h.call(y)
              } finally {
                if (o) throw o.error
              }
            }
          else
            (view = e.views.get(d)) &&
              ((_ = _.concat(Jn(view, n, r))),
              $n(view) &&
                (e.views.delete(d),
                view.query._queryParams.loadsAllData() || f.push(view.query)))
          return (
            v &&
              !dr(e) &&
              f.push(
                new (Object(c.d)(Yn, "Reference.ts has not been loaded"), Yn)(
                  t._repo,
                  t._path
                )
              ),
            { removed: f, events: _ }
          )
        }
        function sr(e) {
          var t,
            n,
            r = []
          try {
            for (
              var o = Object(l.g)(e.views.values()), c = o.next();
              !c.done;
              c = o.next()
            ) {
              var view = c.value
              view.query._queryParams.loadsAllData() || r.push(view)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              c && !c.done && (n = o.return) && n.call(o)
            } finally {
              if (t) throw t.error
            }
          }
          return r
        }
        function ur(e, path) {
          var t,
            n,
            r = null
          try {
            for (
              var o = Object(l.g)(e.views.values()), c = o.next();
              !c.done;
              c = o.next()
            ) {
              var view = c.value
              r = r || Gn(view, path)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              c && !c.done && (n = o.return) && n.call(o)
            } finally {
              if (t) throw t.error
            }
          }
          return r
        }
        function cr(e, t) {
          if (t._queryParams.loadsAllData()) return pr(e)
          var n = t._queryIdentifier
          return e.views.get(n)
        }
        function lr(e, t) {
          return null != cr(e, t)
        }
        function dr(e) {
          return null != pr(e)
        }
        function pr(e) {
          var t, n
          try {
            for (
              var r = Object(l.g)(e.views.values()), o = r.next();
              !o.done;
              o = r.next()
            ) {
              var view = o.value
              if (view.query._queryParams.loadsAllData()) return view
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r)
            } finally {
              if (t) throw t.error
            }
          }
          return null
        }
        var fr = 1,
          _r = function (e) {
            ;(this.listenProvider_ = e),
              (this.syncPointTree_ = new hn(null)),
              (this.pendingWriteTree_ = {
                visibleWrites: dn.empty(),
                allWrites: [],
                lastWriteId: -1,
              }),
              (this.tagToQueryMap = new Map()),
              (this.queryToTagMap = new Map())
          }
        function vr(e, path, t, n, r) {
          return (
            (function (e, path, t, n, r) {
              Object(c.d)(
                n > e.lastWriteId,
                "Stacking an older write on top of newer ones"
              ),
                void 0 === r && (r = !0),
                e.allWrites.push({
                  path: path,
                  snap: t,
                  writeId: n,
                  visible: r,
                }),
                r && (e.visibleWrites = pn(e.visibleWrites, path, t)),
                (e.lastWriteId = n)
            })(e.pendingWriteTree_, path, t, n, r),
            r
              ? Ir(
                  e,
                  new en(
                    { fromUser: !0, fromServer: !1, queryId: null, tagged: !1 },
                    path,
                    t
                  )
                )
              : []
          )
        }
        function yr(e, path, t, n) {
          !(function (e, path, t, n) {
            Object(c.d)(
              n > e.lastWriteId,
              "Stacking an older merge on top of newer ones"
            ),
              e.allWrites.push({
                path: path,
                children: t,
                writeId: n,
                visible: !0,
              }),
              (e.visibleWrites = fn(e.visibleWrites, path, t)),
              (e.lastWriteId = n)
          })(e.pendingWriteTree_, path, t, n)
          var r = hn.fromObject(t)
          return Ir(
            e,
            new tn(
              { fromUser: !0, fromServer: !1, queryId: null, tagged: !1 },
              path,
              r
            )
          )
        }
        function gr(e, t, n) {
          void 0 === n && (n = !1)
          var r = (function (e, t) {
            for (var i = 0; i < e.allWrites.length; i++) {
              var n = e.allWrites[i]
              if (n.writeId === t) return n
            }
            return null
          })(e.pendingWriteTree_, t)
          if (En(e.pendingWriteTree_, t)) {
            var o = new hn(null)
            return (
              null != r.snap
                ? (o = o.set(Ee(), !0))
                : V(r.children, function (e) {
                    o = o.set(new Oe(e), !0)
                  }),
              Ir(e, new Xt(r.path, o, n))
            )
          }
          return []
        }
        function mr(e, path, t) {
          return Ir(
            e,
            new en(
              { fromUser: !1, fromServer: !0, queryId: null, tagged: !1 },
              path,
              t
            )
          )
        }
        function wr(e, t, n, r) {
          var path = t._path,
            o = e.syncPointTree_.get(path),
            c = []
          if (o && ("default" === t._queryIdentifier || lr(o, t))) {
            var l = ar(o, t, n, r)
            0 === o.views.size &&
              (e.syncPointTree_ = e.syncPointTree_.remove(path))
            var h = l.removed
            c = l.events
            var d =
                -1 !==
                h.findIndex(function (e) {
                  return e._queryParams.loadsAllData()
                }),
              f = e.syncPointTree_.findOnPath(path, function (e, t) {
                return dr(t)
              })
            if (d && !f) {
              var _ = e.syncPointTree_.subtree(path)
              if (!_.isEmpty())
                for (
                  var v = (function (e) {
                      return e.fold(function (e, t, n) {
                        if (t && dr(t)) return [pr(t)]
                        var r = []
                        return (
                          t && (r = sr(t)),
                          V(n, function (e, t) {
                            r = r.concat(t)
                          }),
                          r
                        )
                      })
                    })(_),
                    i = 0;
                  i < v.length;
                  ++i
                ) {
                  var view = v[i],
                    y = view.query,
                    m = kr(e, view)
                  e.listenProvider_.startListening(
                    Dr(y),
                    Pr(e, y),
                    m.hashFn,
                    m.onComplete
                  )
                }
            }
            if (!f && h.length > 0 && !r)
              if (d) {
                e.listenProvider_.stopListening(Dr(t), null)
              } else
                h.forEach(function (t) {
                  var n = e.queryToTagMap.get(Nr(t))
                  e.listenProvider_.stopListening(Dr(t), n)
                })
            !(function (e, t) {
              for (var n = 0; n < t.length; ++n) {
                var r = t[n]
                if (!r._queryParams.loadsAllData()) {
                  var o = Nr(r),
                    c = e.queryToTagMap.get(o)
                  e.queryToTagMap.delete(o), e.tagToQueryMap.delete(c)
                }
              }
            })(e, h)
          }
          return c
        }
        function Cr(e, t, n) {
          var path = t._path,
            r = null,
            o = !1
          e.syncPointTree_.foreachOnPath(path, function (e, t) {
            var n = Re(e, path)
            ;(r = r || ur(t, n)), (o = o || dr(t))
          })
          var l,
            h = e.syncPointTree_.get(path)
          ;(h
            ? ((o = o || dr(h)), (r = r || ur(h, Ee())))
            : ((h = new nr()),
              (e.syncPointTree_ = e.syncPointTree_.set(path, h))),
          null != r)
            ? (l = !0)
            : ((l = !1),
              (r = yt.EMPTY_NODE),
              e.syncPointTree_.subtree(path).foreachChild(function (e, t) {
                var n = ur(t, Ee())
                n && (r = r.updateImmediateChild(e, n))
              }))
          var d = lr(h, t)
          if (!d && !t._queryParams.loadsAllData()) {
            var f = Nr(t)
            Object(c.d)(
              !e.queryToTagMap.has(f),
              "View does not exist, but we have a tag"
            )
            var _ = fr++
            e.queryToTagMap.set(f, _), e.tagToQueryMap.set(_, f)
          }
          var v = or(h, t, n, On(e.pendingWriteTree_, path), r, l)
          if (!d && !o) {
            var view = cr(h, t)
            v = v.concat(
              (function (e, t, view) {
                var path = t._path,
                  n = Pr(e, t),
                  r = kr(e, view),
                  o = e.listenProvider_.startListening(
                    Dr(t),
                    n,
                    r.hashFn,
                    r.onComplete
                  ),
                  l = e.syncPointTree_.subtree(path)
                if (n)
                  Object(c.d)(
                    !dr(l.value),
                    "If we're adding a query, it shouldn't be shadowed"
                  )
                else
                  for (
                    var h = l.fold(function (e, t, n) {
                        if (!xe(e) && t && dr(t)) return [pr(t).query]
                        var r = []
                        return (
                          t &&
                            (r = r.concat(
                              sr(t).map(function (view) {
                                return view.query
                              })
                            )),
                          V(n, function (e, t) {
                            r = r.concat(t)
                          }),
                          r
                        )
                      }),
                      i = 0;
                    i < h.length;
                    ++i
                  ) {
                    var d = h[i]
                    e.listenProvider_.stopListening(Dr(d), Pr(e, d))
                  }
                return o
              })(e, t, view)
            )
          }
          return v
        }
        function Or(e, path, t) {
          var n = e.pendingWriteTree_,
            r = e.syncPointTree_.findOnPath(path, function (e, t) {
              var n = ur(t, Re(e, path))
              if (n) return n
            })
          return kn(n, path, r, t, !0)
        }
        function Er(e, t) {
          var path = t._path,
            n = null
          e.syncPointTree_.foreachOnPath(path, function (e, t) {
            var r = Re(e, path)
            n = n || ur(t, r)
          })
          var r = e.syncPointTree_.get(path)
          r
            ? (n = n || ur(r, Ee()))
            : ((r = new nr()),
              (e.syncPointTree_ = e.syncPointTree_.set(path, r)))
          var o = null != n,
            c = o ? new nn(n, !0, !1) : null
          return (function (view) {
            return cn(view.viewCache_)
          })(
            ir(
              r,
              t,
              On(e.pendingWriteTree_, t._path),
              o ? c.getNode() : yt.EMPTY_NODE,
              o
            )
          )
        }
        function Ir(e, t) {
          return Tr(t, e.syncPointTree_, null, On(e.pendingWriteTree_, Ee()))
        }
        function Tr(e, t, n, r) {
          if (xe(e.path)) return Sr(e, t, n, r)
          var o = t.get(Ee())
          null == n && null != o && (n = ur(o, Ee()))
          var c = [],
            l = Ie(e.path),
            h = e.operationForChild(l),
            d = t.children.get(l)
          if (d && h) {
            var f = n ? n.getImmediateChild(l) : null,
              _ = An(r, l)
            c = c.concat(Tr(h, d, f, _))
          }
          return o && (c = c.concat(rr(o, e, r, n))), c
        }
        function Sr(e, t, n, r) {
          var o = t.get(Ee())
          null == n && null != o && (n = ur(o, Ee()))
          var c = []
          return (
            t.children.inorderTraversal(function (t, o) {
              var l = n ? n.getImmediateChild(t) : null,
                h = An(r, t),
                d = e.operationForChild(t)
              d && (c = c.concat(Sr(d, o, l, h)))
            }),
            o && (c = c.concat(rr(o, e, r, n))),
            c
          )
        }
        function kr(e, view) {
          var t = view.query,
            n = Pr(e, t)
          return {
            hashFn: function () {
              return (
                (function (view) {
                  return view.viewCache_.serverCache.getNode()
                })(view) || yt.EMPTY_NODE
              ).hash()
            },
            onComplete: function (r) {
              if ("ok" === r)
                return n
                  ? (function (e, path, t) {
                      var n = jr(e, t)
                      if (n) {
                        var r = xr(n),
                          o = r.path,
                          c = r.queryId,
                          l = Re(o, path)
                        return Rr(e, o, new Zt($t(c), l))
                      }
                      return []
                    })(e, t._path, n)
                  : (function (e, path) {
                      return Ir(
                        e,
                        new Zt(
                          {
                            fromUser: !1,
                            fromServer: !0,
                            queryId: null,
                            tagged: !1,
                          },
                          path
                        )
                      )
                    })(e, t._path)
              var o = (function (code, e) {
                var t = "Unknown Error"
                "too_big" === code
                  ? (t =
                      "The data requested exceeds the maximum size that can be accessed with a single request.")
                  : "permission_denied" === code
                  ? (t =
                      "Client doesn't have permission to access the desired data.")
                  : "unavailable" === code && (t = "The service is unavailable")
                var n = new Error(code + " at " + e._path.toString() + ": " + t)
                return (n.code = code.toUpperCase()), n
              })(r, t)
              return wr(e, t, null, o)
            },
          }
        }
        function Pr(e, t) {
          var n = Nr(t)
          return e.queryToTagMap.get(n)
        }
        function Nr(e) {
          return e._path.toString() + "$" + e._queryIdentifier
        }
        function jr(e, t) {
          return e.tagToQueryMap.get(t)
        }
        function xr(e) {
          var t = e.indexOf("$")
          return (
            Object(c.d)(-1 !== t && t < e.length - 1, "Bad queryKey."),
            { queryId: e.substr(t + 1), path: new Oe(e.substr(0, t)) }
          )
        }
        function Rr(e, t, n) {
          var r = e.syncPointTree_.get(t)
          return (
            Object(c.d)(
              r,
              "Missing sync point for query tag that we're tracking"
            ),
            rr(r, n, On(e.pendingWriteTree_, t), null)
          )
        }
        function Dr(e) {
          return e._queryParams.loadsAllData() && !e._queryParams.isDefault()
            ? new (Object(c.d)(er, "Reference.ts has not been loaded"), er)(
                e._repo,
                e._path
              )
            : e
        }
        var Ar = (function () {
            function e(e) {
              this.node_ = e
            }
            return (
              (e.prototype.getImmediateChild = function (t) {
                return new e(this.node_.getImmediateChild(t))
              }),
              (e.prototype.node = function () {
                return this.node_
              }),
              e
            )
          })(),
          Lr = (function () {
            function e(e, path) {
              ;(this.syncTree_ = e), (this.path_ = path)
            }
            return (
              (e.prototype.getImmediateChild = function (t) {
                var n = je(this.path_, t)
                return new e(this.syncTree_, n)
              }),
              (e.prototype.node = function () {
                return Or(this.syncTree_, this.path_)
              }),
              e
            )
          })(),
          Fr = function (e, t, n) {
            return e && "object" == typeof e
              ? (Object(c.d)(
                  ".sv" in e,
                  "Unexpected leaf node or priority contents"
                ),
                "string" == typeof e[".sv"]
                  ? Mr(e[".sv"], t, n)
                  : "object" == typeof e[".sv"]
                  ? qr(e[".sv"], t)
                  : void Object(c.d)(
                      !1,
                      "Unexpected server value: " + JSON.stringify(e, null, 2)
                    ))
              : e
          },
          Mr = function (e, t, n) {
            switch (e) {
              case "timestamp":
                return n.timestamp
              default:
                Object(c.d)(!1, "Unexpected server value: " + e)
            }
          },
          qr = function (e, t, n) {
            e.hasOwnProperty("increment") ||
              Object(c.d)(
                !1,
                "Unexpected server value: " + JSON.stringify(e, null, 2)
              )
            var r = e.increment
            "number" != typeof r &&
              Object(c.d)(!1, "Unexpected increment value: " + r)
            var o = t.node()
            if (
              (Object(c.d)(
                null != o,
                "Expected ChildrenNode.EMPTY_NODE for nulls"
              ),
              !o.isLeafNode())
            )
              return r
            var l = o.getValue()
            return "number" != typeof l ? r : l + r
          },
          Wr = function (path, e, t, n) {
            return Br(e, new Lr(t, path), n)
          },
          Ur = function (e, t, n) {
            return Br(e, new Ar(t), n)
          }
        function Br(e, t, n) {
          var r,
            o = e.getPriority().val(),
            c = Fr(o, t.getImmediateChild(".priority"), n)
          if (e.isLeafNode()) {
            var l = e,
              h = Fr(l.getValue(), t, n)
            return h !== l.getValue() || c !== l.getPriority().val()
              ? new st(h, mt(c))
              : e
          }
          var d = e
          return (
            (r = d),
            c !== d.getPriority().val() && (r = r.updatePriority(new st(c))),
            d.forEachChild(lt, function (e, o) {
              var c = Br(o, t.getImmediateChild(e), n)
              c !== o && (r = r.updateImmediateChild(e, c))
            }),
            r
          )
        }
        var zr = function (e, t, n) {
          void 0 === e && (e = ""),
            void 0 === t && (t = null),
            void 0 === n && (n = { children: {}, childCount: 0 }),
            (this.name = e),
            (this.parent = t),
            (this.node = n)
        }
        function Vr(e, t) {
          for (
            var path = t instanceof Oe ? t : new Oe(t), n = e, r = Ie(path);
            null !== r;

          ) {
            var o = Object(c.z)(n.node.children, r) || {
              children: {},
              childCount: 0,
            }
            ;(n = new zr(r, n, o)), (r = Ie((path = Se(path))))
          }
          return n
        }
        function Hr(e) {
          return e.node.value
        }
        function Qr(e, t) {
          ;(e.node.value = t), Jr(e)
        }
        function Yr(e) {
          return e.node.childCount > 0
        }
        function Kr(e, t) {
          V(e.node.children, function (n, r) {
            t(new zr(n, e, r))
          })
        }
        function Gr(e, t, n, r) {
          n && !r && t(e),
            Kr(e, function (e) {
              Gr(e, t, !0, r)
            }),
            n && r && t(e)
        }
        function $r(e) {
          return new Oe(
            null === e.parent ? e.name : $r(e.parent) + "/" + e.name
          )
        }
        function Jr(e) {
          null !== e.parent &&
            (function (e, t, n) {
              var r = (function (e) {
                  return void 0 === Hr(e) && !Yr(e)
                })(n),
                o = Object(c.h)(e.node.children, t)
              r && o
                ? (delete e.node.children[t], e.node.childCount--, Jr(e))
                : r ||
                  o ||
                  ((e.node.children[t] = n.node), e.node.childCount++, Jr(e))
            })(e.parent, e.name, e)
        }
        var Xr = /[\[\].#$\/\u0000-\u001F\u007F]/,
          Zr = /[\[\].#$\u0000-\u001F\u007F]/,
          ei = 10485760,
          ti = function (e) {
            return "string" == typeof e && 0 !== e.length && !Xr.test(e)
          },
          ni = function (e) {
            return "string" == typeof e && 0 !== e.length && !Zr.test(e)
          },
          ri = function (e) {
            return (
              null === e ||
              "string" == typeof e ||
              ("number" == typeof e && !A(e)) ||
              (e && "object" == typeof e && Object(c.h)(e, ".sv"))
            )
          },
          ii = function (e, t, path, n) {
            ;(n && void 0 === t) || oi(Object(c.m)(e, "value"), t, path)
          },
          oi = function (e, data, t) {
            var path = t instanceof Oe ? new Fe(t, e) : t
            if (void 0 === data)
              throw new Error(e + "contains undefined " + qe(path))
            if ("function" == typeof data)
              throw new Error(
                e +
                  "contains a function " +
                  qe(path) +
                  " with contents = " +
                  data.toString()
              )
            if (A(data))
              throw new Error(
                e + "contains " + data.toString() + " " + qe(path)
              )
            if (
              "string" == typeof data &&
              data.length > ei / 3 &&
              Object(c.A)(data) > ei
            )
              throw new Error(
                e +
                  "contains a string greater than " +
                  "10485760 utf8 bytes " +
                  qe(path) +
                  " ('" +
                  data.substring(0, 50) +
                  "...')"
              )
            if (data && "object" == typeof data) {
              var n = !1,
                r = !1
              if (
                (V(data, function (t, o) {
                  if (".value" === t) n = !0
                  else if (
                    ".priority" !== t &&
                    ".sv" !== t &&
                    ((r = !0), !ti(t))
                  )
                    throw new Error(
                      e +
                        " contains an invalid key (" +
                        t +
                        ") " +
                        qe(path) +
                        '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                    )
                  var l, h
                  !(function (e, t) {
                    e.parts_.length > 0 && (e.byteLength_ += 1),
                      e.parts_.push(t),
                      (e.byteLength_ += Object(c.A)(t)),
                      Me(e)
                  })(path, t),
                    oi(e, o, path),
                    (h = (l = path).parts_.pop()),
                    (l.byteLength_ -= Object(c.A)(h)),
                    l.parts_.length > 0 && (l.byteLength_ -= 1)
                }),
                n && r)
              )
                throw new Error(
                  e +
                    ' contains ".value" child ' +
                    qe(path) +
                    " in addition to actual children."
                )
            }
          },
          ai = function (e, data, path, t) {
            if (!t || void 0 !== data) {
              var n = Object(c.m)(e, "values")
              if (!data || "object" != typeof data || Array.isArray(data))
                throw new Error(
                  n + " must be an object containing the children to replace."
                )
              var r = []
              V(data, function (e, t) {
                var o = new Oe(e)
                if ((oi(n, t, je(path, o)), ".priority" === ke(o) && !ri(t)))
                  throw new Error(
                    n +
                      "contains an invalid value for '" +
                      o.toString() +
                      "', which must be a valid Firebase priority (a string, finite number, server value, or null)."
                  )
                r.push(o)
              }),
                (function (e, t) {
                  var i, n
                  for (i = 0; i < t.length; i++)
                    for (var r = Pe((n = t[i])), o = 0; o < r.length; o++)
                      if (".priority" === r[o] && o === r.length - 1);
                      else if (!ti(r[o]))
                        throw new Error(
                          e +
                            "contains an invalid key (" +
                            r[o] +
                            ") in path " +
                            n.toString() +
                            '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                        )
                  t.sort(De)
                  var c = null
                  for (i = 0; i < t.length; i++) {
                    if (((n = t[i]), null !== c && Le(c, n)))
                      throw new Error(
                        e +
                          "contains a path " +
                          c.toString() +
                          " that is ancestor of another path " +
                          n.toString()
                      )
                    c = n
                  }
                })(n, r)
            }
          },
          si = function (e, t, n) {
            if (!n || void 0 !== t) {
              if (A(t))
                throw new Error(
                  Object(c.m)(e, "priority") +
                    "is " +
                    t.toString() +
                    ", but must be a valid Firebase priority (a string, finite number, server value, or null)."
                )
              if (!ri(t))
                throw new Error(
                  Object(c.m)(e, "priority") +
                    "must be a valid Firebase priority (a string, finite number, server value, or null)."
                )
            }
          },
          ui = function (e, t, n) {
            if (!n || void 0 !== t)
              switch (t) {
                case "value":
                case "child_added":
                case "child_removed":
                case "child_changed":
                case "child_moved":
                  break
                default:
                  throw new Error(
                    Object(c.m)(e, "eventType") +
                      'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
                  )
              }
          },
          ci = function (e, t, n, r) {
            if (!((r && void 0 === n) || ti(n)))
              throw new Error(
                Object(c.m)(e, t) +
                  'was an invalid key = "' +
                  n +
                  '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'
              )
          },
          hi = function (e, t, n, r) {
            if (!((r && void 0 === n) || ni(n)))
              throw new Error(
                Object(c.m)(e, t) +
                  'was an invalid path = "' +
                  n +
                  '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
              )
          },
          di = function (e, path) {
            if (".info" === Ie(path))
              throw new Error(e + " failed = Can't modify data under /.info/")
          },
          pi = function (e, t) {
            var n = t.path.toString()
            if (
              "string" != typeof t.repoInfo.host ||
              0 === t.repoInfo.host.length ||
              (!ti(t.repoInfo.namespace) &&
                "localhost" !== t.repoInfo.host.split(":")[0]) ||
              (0 !== n.length &&
                !(function (e) {
                  return e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), ni(e)
                })(n))
            )
              throw new Error(
                Object(c.m)(e, "url") +
                  'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
              )
          },
          fi = function (e, t, n, r) {
            if ((!r || void 0 !== n) && "boolean" != typeof n)
              throw new Error(Object(c.m)(e, t) + "must be a boolean.")
          },
          _i = function () {
            ;(this.eventLists_ = []), (this.recursionDepth_ = 0)
          }
        function vi(e, t) {
          for (var n = null, i = 0; i < t.length; i++) {
            var data = t[i],
              path = data.getPath()
            null === n ||
              Ae(path, n.path) ||
              (e.eventLists_.push(n), (n = null)),
              null === n && (n = { events: [], path: path }),
              n.events.push(data)
          }
          n && e.eventLists_.push(n)
        }
        function yi(e, path, t) {
          vi(e, t),
            mi(e, function (e) {
              return Ae(e, path)
            })
        }
        function gi(e, t, n) {
          vi(e, n),
            mi(e, function (e) {
              return Le(e, t) || Le(t, e)
            })
        }
        function mi(e, t) {
          e.recursionDepth_++
          for (var n = !0, i = 0; i < e.eventLists_.length; i++) {
            var r = e.eventLists_[i]
            if (r)
              t(r.path)
                ? (bi(e.eventLists_[i]), (e.eventLists_[i] = null))
                : (n = !1)
          }
          n && (e.eventLists_ = []), e.recursionDepth_--
        }
        function bi(e) {
          for (var i = 0; i < e.events.length; i++) {
            var t = e.events[i]
            if (null !== t) {
              e.events[i] = null
              var n = t.getEventRunner()
              S && N("event: " + t.toString()), $(n)
            }
          }
        }
        var wi = "repo_interrupt",
          Ci = (function () {
            function e(e, t, n, r) {
              ;(this.repoInfo_ = e),
                (this.forceRestClient_ = t),
                (this.authTokenProvider_ = n),
                (this.appCheckProvider_ = r),
                (this.dataUpdateCount = 0),
                (this.statsListener_ = null),
                (this.eventQueue_ = new _i()),
                (this.nextWriteId_ = 1),
                (this.interceptServerDataCallback_ = null),
                (this.onDisconnect_ = zt()),
                (this.transactionQueueTree_ = new zr()),
                (this.persistentConnection_ = null),
                (this.key = this.repoInfo_.toURLString())
            }
            return (
              (e.prototype.toString = function () {
                return (
                  (this.repoInfo_.secure ? "https://" : "http://") +
                  this.repoInfo_.host
                )
              }),
              e
            )
          })()
        function Oi(e, t, n) {
          if (
            ((e.stats_ = le(e.repoInfo_)),
            e.forceRestClient_ ||
              (
                ("object" == typeof window &&
                  window.navigator &&
                  window.navigator.userAgent) ||
                ""
              ).search(
                /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
              ) >= 0)
          )
            (e.server_ = new Ut(
              e.repoInfo_,
              function (t, data, n, r) {
                Ti(e, t, data, n, r)
              },
              e.authTokenProvider_,
              e.appCheckProvider_
            )),
              setTimeout(function () {
                return Si(e, !0)
              }, 0)
          else {
            if (null != n) {
              if ("object" != typeof n)
                throw new Error(
                  "Only objects are supported for option databaseAuthVariableOverride"
                )
              try {
                Object(c.C)(n)
              } catch (e) {
                throw new Error("Invalid authOverride provided: " + e)
              }
            }
            ;(e.persistentConnection_ = new Ve(
              e.repoInfo_,
              t,
              function (t, data, n, r) {
                Ti(e, t, data, n, r)
              },
              function (t) {
                Si(e, t)
              },
              function (t) {
                !(function (e, t) {
                  V(t, function (t, n) {
                    ki(e, t, n)
                  })
                })(e, t)
              },
              e.authTokenProvider_,
              e.appCheckProvider_,
              n
            )),
              (e.server_ = e.persistentConnection_)
          }
          var r, o, l
          e.authTokenProvider_.addTokenChangeListener(function (t) {
            e.server_.refreshAuthToken(t)
          }),
            e.appCheckProvider_.addTokenChangeListener(function (t) {
              e.server_.refreshAppCheckToken(t.token)
            }),
            (e.statsReporter_ =
              ((r = e.repoInfo_),
              (o = function () {
                return new Gt(e.stats_, e.server_)
              }),
              (l = r.toString()),
              ce[l] || (ce[l] = o()),
              ce[l])),
            (e.infoData_ = new Bt()),
            (e.infoSyncTree_ = new _r({
              startListening: function (t, n, r, o) {
                var c = [],
                  l = e.infoData_.getNode(t._path)
                return (
                  l.isEmpty() ||
                    ((c = mr(e.infoSyncTree_, t._path, l)),
                    setTimeout(function () {
                      o("ok")
                    }, 0)),
                  c
                )
              },
              stopListening: function () {},
            })),
            ki(e, "connected", !1),
            (e.serverSyncTree_ = new _r({
              startListening: function (t, n, r, o) {
                return (
                  e.server_.listen(t, r, n, function (n, data) {
                    var r = o(n, data)
                    gi(e.eventQueue_, t._path, r)
                  }),
                  []
                )
              },
              stopListening: function (t, n) {
                e.server_.unlisten(t, n)
              },
            }))
        }
        function Ei(e) {
          var t =
            e.infoData_.getNode(new Oe(".info/serverTimeOffset")).val() || 0
          return new Date().getTime() + t
        }
        function Ii(e) {
          return (
            ((t = (t = { timestamp: Ei(e) }) || {}).timestamp =
              t.timestamp || new Date().getTime()),
            t
          )
          var t
        }
        function Ti(e, t, data, n, r) {
          e.dataUpdateCount++
          var path = new Oe(t)
          data = e.interceptServerDataCallback_
            ? e.interceptServerDataCallback_(t, data)
            : data
          var o = []
          if (r)
            if (n) {
              var l = Object(c.x)(data, function (e) {
                return mt(e)
              })
              o = (function (e, path, t, n) {
                var r = jr(e, n)
                if (r) {
                  var o = xr(r),
                    c = o.path,
                    l = o.queryId,
                    h = Re(c, path),
                    d = hn.fromObject(t)
                  return Rr(e, c, new tn($t(l), h, d))
                }
                return []
              })(e.serverSyncTree_, path, l, r)
            } else {
              var h = mt(data)
              o = (function (e, path, t, n) {
                var r = jr(e, n)
                if (null != r) {
                  var o = xr(r),
                    c = o.path,
                    l = o.queryId,
                    h = Re(c, path)
                  return Rr(e, c, new en($t(l), h, t))
                }
                return []
              })(e.serverSyncTree_, path, h, r)
            }
          else if (n) {
            var d = Object(c.x)(data, function (e) {
              return mt(e)
            })
            o = (function (e, path, t) {
              var n = hn.fromObject(t)
              return Ir(
                e,
                new tn(
                  { fromUser: !1, fromServer: !0, queryId: null, tagged: !1 },
                  path,
                  n
                )
              )
            })(e.serverSyncTree_, path, d)
          } else {
            var f = mt(data)
            o = mr(e.serverSyncTree_, path, f)
          }
          var _ = path
          o.length > 0 && (_ = qi(e, path)), gi(e.eventQueue_, _, o)
        }
        function Si(e, t) {
          ki(e, "connected", t),
            !1 === t &&
              (function (e) {
                Ai(e, "onDisconnectEvents")
                var t = Ii(e),
                  n = zt()
                Qt(e.onDisconnect_, Ee(), function (path, r) {
                  var o = Wr(path, r, e.serverSyncTree_, t)
                  Vt(n, path, o)
                })
                var r = []
                Qt(n, Ee(), function (path, t) {
                  r = r.concat(mr(e.serverSyncTree_, path, t))
                  var n = Vi(e, path)
                  qi(e, n)
                }),
                  (e.onDisconnect_ = zt()),
                  gi(e.eventQueue_, Ee(), r)
              })(e)
        }
        function ki(e, t, n) {
          var path = new Oe("/.info/" + t),
            r = mt(n)
          e.infoData_.updateSnapshot(path, r)
          var o = mr(e.infoSyncTree_, path, r)
          gi(e.eventQueue_, path, o)
        }
        function Pi(e) {
          return e.nextWriteId_++
        }
        function Ni(e, path, t, n, r) {
          Ai(e, "set", { path: path.toString(), value: t, priority: n })
          var o = Ii(e),
            c = mt(t, n),
            l = Or(e.serverSyncTree_, path),
            h = Ur(c, l, o),
            d = Pi(e),
            f = vr(e.serverSyncTree_, path, h, d, !0)
          vi(e.eventQueue_, f),
            e.server_.put(path.toString(), c.val(!0), function (t, n) {
              var o = "ok" === t
              o || D("set at " + path + " failed: " + t)
              var c = gr(e.serverSyncTree_, d, !o)
              gi(e.eventQueue_, path, c), Li(e, r, t, n)
            })
          var _ = Vi(e, path)
          qi(e, _), gi(e.eventQueue_, _, [])
        }
        function ji(e, path, t) {
          e.server_.onDisconnectCancel(path.toString(), function (n, r) {
            "ok" === n && Ht(e.onDisconnect_, path), Li(e, t, n, r)
          })
        }
        function xi(e, path, t, n) {
          var r = mt(t)
          e.server_.onDisconnectPut(
            path.toString(),
            r.val(!0),
            function (t, o) {
              "ok" === t && Vt(e.onDisconnect_, path, r), Li(e, n, t, o)
            }
          )
        }
        function Ri(e, t, n) {
          var r
          ;(r =
            ".info" === Ie(t._path)
              ? wr(e.infoSyncTree_, t, n)
              : wr(e.serverSyncTree_, t, n)),
            yi(e.eventQueue_, t._path, r)
        }
        function Di(e) {
          e.persistentConnection_ && e.persistentConnection_.interrupt(wi)
        }
        function Ai(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n]
          var r = ""
          e.persistentConnection_ && (r = e.persistentConnection_.id + ":"),
            N.apply(void 0, Object(l.f)([r], Object(l.e)(t)))
        }
        function Li(e, t, n, r) {
          t &&
            $(function () {
              if ("ok" === n) t(null)
              else {
                var code = (n || "error").toUpperCase(),
                  e = code
                r && (e += ": " + r)
                var o = new Error(e)
                ;(o.code = code), t(o)
              }
            })
        }
        function Fi(e, path, t) {
          return Or(e.serverSyncTree_, path, t) || yt.EMPTY_NODE
        }
        function Mi(e, t) {
          if (
            (void 0 === t && (t = e.transactionQueueTree_),
            t || zi(e, t),
            Hr(t))
          ) {
            var n = Ui(e, t)
            Object(c.d)(n.length > 0, "Sending zero length transaction queue"),
              n.every(function (e) {
                return 0 === e.status
              }) &&
                (function (e, path, t) {
                  for (
                    var n = t.map(function (e) {
                        return e.currentWriteId
                      }),
                      r = Fi(e, path, n),
                      o = r,
                      l = r.hash(),
                      i = 0;
                    i < t.length;
                    i++
                  ) {
                    var h = t[i]
                    Object(c.d)(
                      0 === h.status,
                      "tryToSendTransactionQueue_: items in queue should all be run."
                    ),
                      (h.status = 1),
                      h.retryCount++
                    var d = Re(path, h.path)
                    o = o.updateChild(d, h.currentOutputSnapshotRaw)
                  }
                  var f = o.val(!0),
                    _ = path
                  e.server_.put(
                    _.toString(),
                    f,
                    function (n) {
                      Ai(e, "transaction put response", {
                        path: _.toString(),
                        status: n,
                      })
                      var r = []
                      if ("ok" === n) {
                        for (
                          var o = [],
                            c = function (i) {
                              ;(t[i].status = 2),
                                (r = r.concat(
                                  gr(e.serverSyncTree_, t[i].currentWriteId)
                                )),
                                t[i].onComplete &&
                                  o.push(function () {
                                    return t[i].onComplete(
                                      null,
                                      !0,
                                      t[i].currentOutputSnapshotResolved
                                    )
                                  }),
                                t[i].unwatcher()
                            },
                            i = 0;
                          i < t.length;
                          i++
                        )
                          c(i)
                        zi(e, Vr(e.transactionQueueTree_, path)),
                          Mi(e, e.transactionQueueTree_),
                          gi(e.eventQueue_, path, r)
                        for (i = 0; i < o.length; i++) $(o[i])
                      } else {
                        if ("datastale" === n)
                          for (i = 0; i < t.length; i++)
                            3 === t[i].status
                              ? (t[i].status = 4)
                              : (t[i].status = 0)
                        else {
                          D("transaction at " + _.toString() + " failed: " + n)
                          for (i = 0; i < t.length; i++)
                            (t[i].status = 4), (t[i].abortReason = n)
                        }
                        qi(e, path)
                      }
                    },
                    l
                  )
                })(e, $r(t), n)
          } else
            Yr(t) &&
              Kr(t, function (t) {
                Mi(e, t)
              })
        }
        function qi(e, t) {
          var n = Wi(e, t),
            path = $r(n)
          return (
            (function (e, t, path) {
              if (0 === t.length) return
              for (
                var n = [],
                  r = [],
                  o = t
                    .filter(function (q) {
                      return 0 === q.status
                    })
                    .map(function (q) {
                      return q.currentWriteId
                    }),
                  l = function (i) {
                    var l,
                      h,
                      d = t[i],
                      f = Re(path, d.path),
                      _ = !1
                    if (
                      (Object(c.d)(
                        null !== f,
                        "rerunTransactionsUnderNode_: relativePath should not be null."
                      ),
                      4 === d.status)
                    )
                      (_ = !0),
                        (l = d.abortReason),
                        (r = r.concat(
                          gr(e.serverSyncTree_, d.currentWriteId, !0)
                        ))
                    else if (0 === d.status)
                      if (d.retryCount >= 25)
                        (_ = !0),
                          (l = "maxretry"),
                          (r = r.concat(
                            gr(e.serverSyncTree_, d.currentWriteId, !0)
                          ))
                      else {
                        var v = Fi(e, d.path, o)
                        d.currentInputSnapshot = v
                        var y = t[i].update(v.val())
                        if (void 0 !== y) {
                          oi("transaction failed: Data returned ", y, d.path)
                          var m = mt(y)
                          ;("object" == typeof y &&
                            null != y &&
                            Object(c.h)(y, ".priority")) ||
                            (m = m.updatePriority(v.getPriority()))
                          var w = d.currentWriteId,
                            C = Ii(e),
                            O = Ur(m, v, C)
                          ;(d.currentOutputSnapshotRaw = m),
                            (d.currentOutputSnapshotResolved = O),
                            (d.currentWriteId = Pi(e)),
                            o.splice(o.indexOf(w), 1),
                            (r = (r = r.concat(
                              vr(
                                e.serverSyncTree_,
                                d.path,
                                O,
                                d.currentWriteId,
                                d.applyLocally
                              )
                            )).concat(gr(e.serverSyncTree_, w, !0)))
                        } else
                          (_ = !0),
                            (l = "nodata"),
                            (r = r.concat(
                              gr(e.serverSyncTree_, d.currentWriteId, !0)
                            ))
                      }
                    gi(e.eventQueue_, path, r),
                      (r = []),
                      _ &&
                        ((t[i].status = 2),
                        (h = t[i].unwatcher),
                        setTimeout(h, Math.floor(0)),
                        t[i].onComplete &&
                          ("nodata" === l
                            ? n.push(function () {
                                return t[i].onComplete(
                                  null,
                                  !1,
                                  t[i].currentInputSnapshot
                                )
                              })
                            : n.push(function () {
                                return t[i].onComplete(new Error(l), !1, null)
                              })))
                  },
                  i = 0;
                i < t.length;
                i++
              )
                l(i)
              zi(e, e.transactionQueueTree_)
              for (i = 0; i < n.length; i++) $(n[i])
              Mi(e, e.transactionQueueTree_)
            })(e, Ui(e, n), path),
            path
          )
        }
        function Wi(e, path) {
          var t,
            n = e.transactionQueueTree_
          for (t = Ie(path); null !== t && void 0 === Hr(n); )
            (n = Vr(n, t)), (t = Ie((path = Se(path))))
          return n
        }
        function Ui(e, t) {
          var n = []
          return (
            Bi(e, t, n),
            n.sort(function (a, b) {
              return a.order - b.order
            }),
            n
          )
        }
        function Bi(e, t, n) {
          var r = Hr(t)
          if (r) for (var i = 0; i < r.length; i++) n.push(r[i])
          Kr(t, function (t) {
            Bi(e, t, n)
          })
        }
        function zi(e, t) {
          var n = Hr(t)
          if (n) {
            for (var r = 0, o = 0; o < n.length; o++)
              2 !== n[o].status && ((n[r] = n[o]), r++)
            ;(n.length = r), Qr(t, n.length > 0 ? n : void 0)
          }
          Kr(t, function (t) {
            zi(e, t)
          })
        }
        function Vi(e, path) {
          var t = $r(Wi(e, path)),
            n = Vr(e.transactionQueueTree_, path)
          return (
            (function (e, t, n) {
              for (var r = n ? e : e.parent; null !== r; ) {
                if (t(r)) return !0
                r = r.parent
              }
            })(n, function (t) {
              Hi(e, t)
            }),
            Hi(e, n),
            Gr(n, function (t) {
              Hi(e, t)
            }),
            t
          )
        }
        function Hi(e, t) {
          var n = Hr(t)
          if (n) {
            for (var r = [], o = [], l = -1, i = 0; i < n.length; i++)
              3 === n[i].status ||
                (1 === n[i].status
                  ? (Object(c.d)(
                      l === i - 1,
                      "All SENT items should be at beginning of queue."
                    ),
                    (l = i),
                    (n[i].status = 3),
                    (n[i].abortReason = "set"))
                  : (Object(c.d)(
                      0 === n[i].status,
                      "Unexpected transaction status in abort"
                    ),
                    n[i].unwatcher(),
                    (o = o.concat(
                      gr(e.serverSyncTree_, n[i].currentWriteId, !0)
                    )),
                    n[i].onComplete &&
                      r.push(
                        n[i].onComplete.bind(null, new Error("set"), !1, null)
                      )))
            ;-1 === l ? Qr(t, void 0) : (n.length = l + 1),
              gi(e.eventQueue_, $r(t), o)
            for (i = 0; i < r.length; i++) $(r[i])
          }
        }
        var Qi = function (e, t) {
            var n = Yi(e),
              r = n.namespace
            "firebase.com" === n.domain &&
              R(
                n.host +
                  " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"
              ),
              (r && "undefined" !== r) ||
                "localhost" === n.domain ||
                R(
                  "Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"
                ),
              n.secure ||
                ("undefined" != typeof window &&
                  window.location &&
                  window.location.protocol &&
                  -1 !== window.location.protocol.indexOf("https:") &&
                  D(
                    "Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."
                  ))
            var o = "ws" === n.scheme || "wss" === n.scheme
            return {
              repoInfo: new oe(
                n.host,
                n.secure,
                r,
                t,
                o,
                "",
                r !== n.subdomain
              ),
              path: new Oe(n.pathString),
            }
          },
          Yi = function (e) {
            var t = "",
              n = "",
              r = "",
              o = "",
              c = "",
              h = !0,
              d = "https",
              f = 443
            if ("string" == typeof e) {
              var _ = e.indexOf("//")
              _ >= 0 && ((d = e.substring(0, _ - 1)), (e = e.substring(_ + 2)))
              var v = e.indexOf("/")
              ;-1 === v && (v = e.length)
              var y = e.indexOf("?")
              ;-1 === y && (y = e.length),
                (t = e.substring(0, Math.min(v, y))),
                v < y &&
                  (o = (function (e) {
                    for (var t = "", n = e.split("/"), i = 0; i < n.length; i++)
                      if (n[i].length > 0) {
                        var r = n[i]
                        try {
                          r = decodeURIComponent(r.replace(/\+/g, " "))
                        } catch (e) {}
                        t += "/" + r
                      }
                    return t
                  })(e.substring(v, y)))
              var m = (function (e) {
                var t,
                  n,
                  r = {}
                "?" === e.charAt(0) && (e = e.substring(1))
                try {
                  for (
                    var o = Object(l.g)(e.split("&")), c = o.next();
                    !c.done;
                    c = o.next()
                  ) {
                    var h = c.value
                    if (0 !== h.length) {
                      var d = h.split("=")
                      2 === d.length
                        ? (r[decodeURIComponent(d[0])] = decodeURIComponent(
                            d[1]
                          ))
                        : D(
                            "Invalid query segment '" +
                              h +
                              "' in query '" +
                              e +
                              "'"
                          )
                    }
                  }
                } catch (e) {
                  t = { error: e }
                } finally {
                  try {
                    c && !c.done && (n = o.return) && n.call(o)
                  } finally {
                    if (t) throw t.error
                  }
                }
                return r
              })(e.substring(Math.min(e.length, y)))
              ;(_ = t.indexOf(":")) >= 0
                ? ((h = "https" === d || "wss" === d),
                  (f = parseInt(t.substring(_ + 1), 10)))
                : (_ = t.length)
              var w = t.slice(0, _)
              if ("localhost" === w.toLowerCase()) n = "localhost"
              else if (w.split(".").length <= 2) n = w
              else {
                var C = t.indexOf(".")
                ;(r = t.substring(0, C).toLowerCase()),
                  (n = t.substring(C + 1)),
                  (c = r)
              }
              "ns" in m && (c = m.ns)
            }
            return {
              host: t,
              port: f,
              domain: n,
              subdomain: r,
              secure: h,
              scheme: d,
              pathString: o,
              namespace: c,
            }
          },
          Ki = (function () {
            function e(e, t, n, r) {
              ;(this.eventType = e),
                (this.eventRegistration = t),
                (this.snapshot = n),
                (this.prevName = r)
            }
            return (
              (e.prototype.getPath = function () {
                var e = this.snapshot.ref
                return "value" === this.eventType ? e._path : e.parent._path
              }),
              (e.prototype.getEventType = function () {
                return this.eventType
              }),
              (e.prototype.getEventRunner = function () {
                return this.eventRegistration.getEventRunner(this)
              }),
              (e.prototype.toString = function () {
                return (
                  this.getPath().toString() +
                  ":" +
                  this.eventType +
                  ":" +
                  Object(c.C)(this.snapshot.exportVal())
                )
              }),
              e
            )
          })(),
          Gi = (function () {
            function e(e, t, path) {
              ;(this.eventRegistration = e),
                (this.error = t),
                (this.path = path)
            }
            return (
              (e.prototype.getPath = function () {
                return this.path
              }),
              (e.prototype.getEventType = function () {
                return "cancel"
              }),
              (e.prototype.getEventRunner = function () {
                return this.eventRegistration.getEventRunner(this)
              }),
              (e.prototype.toString = function () {
                return this.path.toString() + ":cancel"
              }),
              e
            )
          })(),
          $i = (function () {
            function e(e, t) {
              ;(this.snapshotCallback = e), (this.cancelCallback = t)
            }
            return (
              (e.prototype.onValue = function (e, t) {
                this.snapshotCallback.call(null, e, t)
              }),
              (e.prototype.onCancel = function (e) {
                return (
                  Object(c.d)(
                    this.hasCancelCallback,
                    "Raising a cancel event on a listener with no cancel callback"
                  ),
                  this.cancelCallback.call(null, e)
                )
              }),
              Object.defineProperty(e.prototype, "hasCancelCallback", {
                get: function () {
                  return !!this.cancelCallback
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.matches = function (e) {
                return (
                  this.snapshotCallback === e.snapshotCallback ||
                  (this.snapshotCallback.userCallback ===
                    e.snapshotCallback.userCallback &&
                    this.snapshotCallback.context ===
                      e.snapshotCallback.context)
                )
              }),
              e
            )
          })(),
          Ji = (function () {
            function e(e, t) {
              ;(this._repo = e), (this._path = t)
            }
            return (
              (e.prototype.cancel = function () {
                var e = new c.a()
                return (
                  ji(
                    this._repo,
                    this._path,
                    e.wrapCallback(function () {})
                  ),
                  e.promise
                )
              }),
              (e.prototype.remove = function () {
                di("OnDisconnect.remove", this._path)
                var e = new c.a()
                return (
                  xi(
                    this._repo,
                    this._path,
                    null,
                    e.wrapCallback(function () {})
                  ),
                  e.promise
                )
              }),
              (e.prototype.set = function (e) {
                di("OnDisconnect.set", this._path),
                  ii("OnDisconnect.set", e, this._path, !1)
                var t = new c.a()
                return (
                  xi(
                    this._repo,
                    this._path,
                    e,
                    t.wrapCallback(function () {})
                  ),
                  t.promise
                )
              }),
              (e.prototype.setWithPriority = function (e, t) {
                di("OnDisconnect.setWithPriority", this._path),
                  ii("OnDisconnect.setWithPriority", e, this._path, !1),
                  si("OnDisconnect.setWithPriority", t, !1)
                var n = new c.a()
                return (
                  (function (e, path, t, n, r) {
                    var o = mt(t, n)
                    e.server_.onDisconnectPut(
                      path.toString(),
                      o.val(!0),
                      function (t, n) {
                        "ok" === t && Vt(e.onDisconnect_, path, o),
                          Li(0, r, t, n)
                      }
                    )
                  })(
                    this._repo,
                    this._path,
                    e,
                    t,
                    n.wrapCallback(function () {})
                  ),
                  n.promise
                )
              }),
              (e.prototype.update = function (e) {
                di("OnDisconnect.update", this._path),
                  ai("OnDisconnect.update", e, this._path, !1)
                var t = new c.a()
                return (
                  (function (e, path, t, n) {
                    if (Object(c.q)(t))
                      return (
                        N(
                          "onDisconnect().update() called with empty data.  Don't do anything."
                        ),
                        void Li(0, n, "ok", void 0)
                      )
                    e.server_.onDisconnectMerge(
                      path.toString(),
                      t,
                      function (r, o) {
                        "ok" === r &&
                          V(t, function (t, n) {
                            var r = mt(n)
                            Vt(e.onDisconnect_, je(path, t), r)
                          }),
                          Li(0, n, r, o)
                      }
                    )
                  })(
                    this._repo,
                    this._path,
                    e,
                    t.wrapCallback(function () {})
                  ),
                  t.promise
                )
              }),
              e
            )
          })(),
          Xi = (function () {
            function e(e, t, n, r) {
              ;(this._repo = e),
                (this._path = t),
                (this._queryParams = n),
                (this._orderByCalled = r)
            }
            return (
              Object.defineProperty(e.prototype, "key", {
                get: function () {
                  return xe(this._path) ? null : ke(this._path)
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "ref", {
                get: function () {
                  return new no(this._repo, this._path)
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "_queryIdentifier", {
                get: function () {
                  var e = Wt(this._queryParams),
                    t = B(e)
                  return "{}" === t ? "default" : t
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "_queryObject", {
                get: function () {
                  return Wt(this._queryParams)
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.isEqual = function (t) {
                if (!((t = Object(c.n)(t)) instanceof e)) return !1
                var n = this._repo === t._repo,
                  r = Ae(this._path, t._path),
                  o = this._queryIdentifier === t._queryIdentifier
                return n && r && o
              }),
              (e.prototype.toJSON = function () {
                return this.toString()
              }),
              (e.prototype.toString = function () {
                return (
                  this._repo.toString() +
                  (function (path) {
                    for (
                      var e = "", i = path.pieceNum_;
                      i < path.pieces_.length;
                      i++
                    )
                      "" !== path.pieces_[i] &&
                        (e += "/" + encodeURIComponent(String(path.pieces_[i])))
                    return e || "/"
                  })(this._path)
                )
              }),
              e
            )
          })()
        function Zi(e, t) {
          if (!0 === e._orderByCalled)
            throw new Error(t + ": You can't combine multiple orderBy calls.")
        }
        function eo(e) {
          var t = null,
            n = null
          if (
            (e.hasStart() && (t = e.getIndexStartValue()),
            e.hasEnd() && (n = e.getIndexEndValue()),
            e.getIndex() === Ke)
          ) {
            var r =
                "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
              o =
                "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string."
            if (e.hasStart()) {
              if (e.getIndexStartName() !== L) throw new Error(r)
              if ("string" != typeof t) throw new Error(o)
            }
            if (e.hasEnd()) {
              if (e.getIndexEndName() !== F) throw new Error(r)
              if ("string" != typeof n) throw new Error(o)
            }
          } else if (e.getIndex() === lt) {
            if ((null != t && !ri(t)) || (null != n && !ri(n)))
              throw new Error(
                "Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string)."
              )
          } else if (
            (Object(c.d)(
              e.getIndex() instanceof Ct || e.getIndex() === Ot,
              "unknown index type."
            ),
            (null != t && "object" == typeof t) ||
              (null != n && "object" == typeof n))
          )
            throw new Error(
              "Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object."
            )
        }
        function to(e) {
          if (
            e.hasStart() &&
            e.hasEnd() &&
            e.hasLimit() &&
            !e.hasAnchoredLimit()
          )
            throw new Error(
              "Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead."
            )
        }
        var no = (function (e) {
            function t(t, path) {
              return e.call(this, t, path, new At(), !1) || this
            }
            return (
              Object(l.c)(t, e),
              Object.defineProperty(t.prototype, "parent", {
                get: function () {
                  var e = Ne(this._path)
                  return null === e ? null : new t(this._repo, e)
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "root", {
                get: function () {
                  for (var e = this; null !== e.parent; ) e = e.parent
                  return e
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            )
          })(Xi),
          ro = (function () {
            function e(e, t, n) {
              ;(this._node = e), (this.ref = t), (this._index = n)
            }
            return (
              Object.defineProperty(e.prototype, "priority", {
                get: function () {
                  return this._node.getPriority().val()
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "key", {
                get: function () {
                  return this.ref.key
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "size", {
                get: function () {
                  return this._node.numChildren()
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.child = function (path) {
                var t = new Oe(path),
                  n = ao(this.ref, path)
                return new e(this._node.getChild(t), n, lt)
              }),
              (e.prototype.exists = function () {
                return !this._node.isEmpty()
              }),
              (e.prototype.exportVal = function () {
                return this._node.val(!0)
              }),
              (e.prototype.forEach = function (t) {
                var n = this
                return (
                  !this._node.isLeafNode() &&
                  !!this._node.forEachChild(this._index, function (r, o) {
                    return t(new e(o, ao(n.ref, r), lt))
                  })
                )
              }),
              (e.prototype.hasChild = function (path) {
                var e = new Oe(path)
                return !this._node.getChild(e).isEmpty()
              }),
              (e.prototype.hasChildren = function () {
                return !this._node.isLeafNode() && !this._node.isEmpty()
              }),
              (e.prototype.toJSON = function () {
                return this.exportVal()
              }),
              (e.prototype.val = function () {
                return this._node.val()
              }),
              e
            )
          })()
        function io(e, path) {
          return (
            (e = Object(c.n)(e))._checkNotDeleted("ref"),
            void 0 !== path ? ao(e._root, path) : e._root
          )
        }
        function oo(e, t) {
          ;(e = Object(c.n)(e))._checkNotDeleted("refFromURL")
          var n = Qi(t, e._repo.repoInfo_.nodeAdmin)
          pi("refFromURL", n)
          var r = n.repoInfo
          return (
            e._repo.repoInfo_.isCustomHost() ||
              r.host === e._repo.repoInfo_.host ||
              R(
                "refFromURL: Host name does not match the current database: (found " +
                  r.host +
                  " but expected " +
                  e._repo.repoInfo_.host +
                  ")"
              ),
            io(e, n.path.toString())
          )
        }
        function ao(e, path) {
          var t, n, r, o
          return (
            null === Ie((e = Object(c.n)(e))._path)
              ? ((t = "child"),
                (n = "path"),
                (o = !1),
                (r = path) && (r = r.replace(/^\/*\.info(\/|$)/, "/")),
                hi(t, n, r, o))
              : hi("child", "path", path, !1),
            new no(e._repo, je(e._path, path))
          )
        }
        function so(e, t) {
          ;(e = Object(c.n)(e)), di("push", e._path), ii("push", t, e._path, !0)
          var n,
            r = Ei(e._repo),
            o = It(r),
            l = ao(e, o),
            h = ao(e, o)
          return (
            (n =
              null != t
                ? co(h, t).then(function () {
                    return h
                  })
                : Promise.resolve(h)),
            (l.then = n.then.bind(n)),
            (l.catch = n.then.bind(n, void 0)),
            l
          )
        }
        function uo(e) {
          return di("remove", e._path), co(e, null)
        }
        function co(e, t) {
          ;(e = Object(c.n)(e)), di("set", e._path), ii("set", t, e._path, !1)
          var n = new c.a()
          return (
            Ni(
              e._repo,
              e._path,
              t,
              null,
              n.wrapCallback(function () {})
            ),
            n.promise
          )
        }
        function lo(e, t) {
          ;(e = Object(c.n)(e)),
            di("setPriority", e._path),
            si("setPriority", t, !1)
          var n = new c.a()
          return (
            Ni(
              e._repo,
              je(e._path, ".priority"),
              t,
              null,
              n.wrapCallback(function () {})
            ),
            n.promise
          )
        }
        function ho(e, t, n) {
          if (
            (di("setWithPriority", e._path),
            ii("setWithPriority", t, e._path, !1),
            si("setWithPriority", n, !1),
            ".length" === e.key || ".keys" === e.key)
          )
            throw "setWithPriority failed: " + e.key + " is a read-only object."
          var r = new c.a()
          return (
            Ni(
              e._repo,
              e._path,
              t,
              n,
              r.wrapCallback(function () {})
            ),
            r.promise
          )
        }
        function po(e, t) {
          ai("update", t, e._path, !1)
          var n = new c.a()
          return (
            (function (e, path, t, n) {
              Ai(e, "update", { path: path.toString(), value: t })
              var r = !0,
                o = Ii(e),
                c = {}
              if (
                (V(t, function (t, n) {
                  ;(r = !1),
                    (c[t] = Wr(je(path, t), mt(n), e.serverSyncTree_, o))
                }),
                r)
              )
                N("update() called with empty data.  Don't do anything."),
                  Li(0, n, "ok", void 0)
              else {
                var l = Pi(e),
                  h = yr(e.serverSyncTree_, path, c, l)
                vi(e.eventQueue_, h),
                  e.server_.merge(path.toString(), t, function (t, r) {
                    var o = "ok" === t
                    o || D("update at " + path + " failed: " + t)
                    var c = gr(e.serverSyncTree_, l, !o),
                      h = c.length > 0 ? qi(e, path) : path
                    gi(e.eventQueue_, h, c), Li(0, n, t, r)
                  }),
                  V(t, function (t) {
                    var n = Vi(e, je(path, t))
                    qi(e, n)
                  }),
                  gi(e.eventQueue_, path, [])
              }
            })(
              e._repo,
              e._path,
              t,
              n.wrapCallback(function () {})
            ),
            n.promise
          )
        }
        function fo(e) {
          return (function (e, t) {
            var n = Er(e.serverSyncTree_, t)
            return null != n
              ? Promise.resolve(n)
              : e.server_.get(t).then(
                  function (n) {
                    var r = mt(n).withIndex(t._queryParams.getIndex()),
                      o = mr(e.serverSyncTree_, t._path, r)
                    return yi(e.eventQueue_, t._path, o), Promise.resolve(r)
                  },
                  function (n) {
                    return (
                      Ai(
                        e,
                        "get for query " + Object(c.C)(t) + " failed: " + n
                      ),
                      Promise.reject(new Error(n))
                    )
                  }
                )
          })((e = Object(c.n)(e))._repo, e).then(function (t) {
            return new ro(
              t,
              new no(e._repo, e._path),
              e._queryParams.getIndex()
            )
          })
        }
        var _o = (function () {
            function e(e) {
              this.callbackContext = e
            }
            return (
              (e.prototype.respondsTo = function (e) {
                return "value" === e
              }),
              (e.prototype.createEvent = function (e, t) {
                var n = t._queryParams.getIndex()
                return new Ki(
                  "value",
                  this,
                  new ro(e.snapshotNode, new no(t._repo, t._path), n)
                )
              }),
              (e.prototype.getEventRunner = function (e) {
                var t = this
                return "cancel" === e.getEventType()
                  ? function () {
                      return t.callbackContext.onCancel(e.error)
                    }
                  : function () {
                      return t.callbackContext.onValue(e.snapshot, null)
                    }
              }),
              (e.prototype.createCancelEvent = function (e, path) {
                return this.callbackContext.hasCancelCallback
                  ? new Gi(this, e, path)
                  : null
              }),
              (e.prototype.matches = function (t) {
                return (
                  t instanceof e &&
                  (!t.callbackContext ||
                    !this.callbackContext ||
                    t.callbackContext.matches(this.callbackContext))
                )
              }),
              (e.prototype.hasAnyCallback = function () {
                return null !== this.callbackContext
              }),
              e
            )
          })(),
          vo = (function () {
            function e(e, t) {
              ;(this.eventType = e), (this.callbackContext = t)
            }
            return (
              (e.prototype.respondsTo = function (e) {
                var t = "children_added" === e ? "child_added" : e
                return (
                  (t = "children_removed" === t ? "child_removed" : t),
                  this.eventType === t
                )
              }),
              (e.prototype.createCancelEvent = function (e, path) {
                return this.callbackContext.hasCancelCallback
                  ? new Gi(this, e, path)
                  : null
              }),
              (e.prototype.createEvent = function (e, t) {
                Object(c.d)(
                  null != e.childName,
                  "Child events should have a childName."
                )
                var n = ao(new no(t._repo, t._path), e.childName),
                  r = t._queryParams.getIndex()
                return new Ki(
                  e.type,
                  this,
                  new ro(e.snapshotNode, n, r),
                  e.prevName
                )
              }),
              (e.prototype.getEventRunner = function (e) {
                var t = this
                return "cancel" === e.getEventType()
                  ? function () {
                      return t.callbackContext.onCancel(e.error)
                    }
                  : function () {
                      return t.callbackContext.onValue(e.snapshot, e.prevName)
                    }
              }),
              (e.prototype.matches = function (t) {
                return (
                  t instanceof e &&
                  this.eventType === t.eventType &&
                  (!this.callbackContext ||
                    !t.callbackContext ||
                    this.callbackContext.matches(t.callbackContext))
                )
              }),
              (e.prototype.hasAnyCallback = function () {
                return !!this.callbackContext
              }),
              e
            )
          })()
        function yo(e, t, n, r, o) {
          var c
          if (
            ("object" == typeof r && ((c = void 0), (o = r)),
            "function" == typeof r && (c = r),
            o && o.onlyOnce)
          ) {
            var l = n,
              h = function (t, n) {
                Ri(e._repo, e, f), l(t, n)
              }
            ;(h.userCallback = n.userCallback), (h.context = n.context), (n = h)
          }
          var d = new $i(n, c || void 0),
            f = "value" === t ? new _o(d) : new vo(t, d)
          return (
            (function (e, t, n) {
              var r
              ;(r =
                ".info" === Ie(t._path)
                  ? Cr(e.infoSyncTree_, t, n)
                  : Cr(e.serverSyncTree_, t, n)),
                yi(e.eventQueue_, t._path, r)
            })(e._repo, e, f),
            function () {
              return Ri(e._repo, e, f)
            }
          )
        }
        function go(e, t, n, r) {
          return yo(e, "value", t, n, r)
        }
        function mo(e, t, n, r) {
          return yo(e, "child_added", t, n, r)
        }
        function bo(e, t, n, r) {
          return yo(e, "child_changed", t, n, r)
        }
        function wo(e, t, n, r) {
          return yo(e, "child_moved", t, n, r)
        }
        function Co(e, t, n, r) {
          return yo(e, "child_removed", t, n, r)
        }
        function Oo(e, t, n) {
          var r = null,
            o = n ? new $i(n) : null
          "value" === t ? (r = new _o(o)) : t && (r = new vo(t, o)),
            Ri(e._repo, e, r)
        }
        var Eo = function () {},
          Io = (function (e) {
            function t(t, n) {
              var r = e.call(this) || this
              return (r._value = t), (r._key = n), r
            }
            return (
              Object(l.c)(t, e),
              (t.prototype._apply = function (e) {
                ii("endAt", this._value, e._path, !0)
                var t = Ft(e._queryParams, this._value, this._key)
                if ((to(t), eo(t), e._queryParams.hasEnd()))
                  throw new Error(
                    "endAt: Starting point was already set (by another call to endAt, endBefore or equalTo)."
                  )
                return new Xi(e._repo, e._path, t, e._orderByCalled)
              }),
              t
            )
          })(Eo)
        function To(e, t) {
          return ci("endAt", "key", t, !0), new Io(e, t)
        }
        var So = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this
            return (r._value = t), (r._key = n), r
          }
          return (
            Object(l.c)(t, e),
            (t.prototype._apply = function (e) {
              ii("endBefore", this._value, e._path, !1)
              var t,
                n,
                r,
                o,
                c =
                  ((t = e._queryParams),
                  (n = this._value),
                  (r = this._key),
                  t.index_ === Ke
                    ? ("string" == typeof n && (n = St(n)), (o = Ft(t, n, r)))
                    : (o = Ft(t, n, null == r ? L : St(r))),
                  (o.endBeforeSet_ = !0),
                  o)
              if ((to(c), eo(c), e._queryParams.hasEnd()))
                throw new Error(
                  "endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo)."
                )
              return new Xi(e._repo, e._path, c, e._orderByCalled)
            }),
            t
          )
        })(Eo)
        function ko(e, t) {
          return ci("endBefore", "key", t, !0), new So(e, t)
        }
        var Po = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this
            return (r._value = t), (r._key = n), r
          }
          return (
            Object(l.c)(t, e),
            (t.prototype._apply = function (e) {
              ii("startAt", this._value, e._path, !0)
              var t = Lt(e._queryParams, this._value, this._key)
              if ((to(t), eo(t), e._queryParams.hasStart()))
                throw new Error(
                  "startAt: Starting point was already set (by another call to startAt, startBefore or equalTo)."
                )
              return new Xi(e._repo, e._path, t, e._orderByCalled)
            }),
            t
          )
        })(Eo)
        function No(e, t) {
          return (
            void 0 === e && (e = null),
            ci("startAt", "key", t, !0),
            new Po(e, t)
          )
        }
        var jo = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this
            return (r._value = t), (r._key = n), r
          }
          return (
            Object(l.c)(t, e),
            (t.prototype._apply = function (e) {
              ii("startAfter", this._value, e._path, !1)
              var t = (function (e, t, n) {
                var r
                e.index_ === Ke
                  ? ("string" == typeof t && (t = Tt(t)), (r = Lt(e, t, n)))
                  : (r = Lt(e, t, null == n ? F : Tt(n)))
                return (r.startAfterSet_ = !0), r
              })(e._queryParams, this._value, this._key)
              if ((to(t), eo(t), e._queryParams.hasStart()))
                throw new Error(
                  "startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo)."
                )
              return new Xi(e._repo, e._path, t, e._orderByCalled)
            }),
            t
          )
        })(Eo)
        function xo(e, t) {
          return ci("startAfter", "key", t, !0), new jo(e, t)
        }
        var Ro = (function (e) {
          function t(t) {
            var n = e.call(this) || this
            return (n._limit = t), n
          }
          return (
            Object(l.c)(t, e),
            (t.prototype._apply = function (e) {
              if (e._queryParams.hasLimit())
                throw new Error(
                  "limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast)."
                )
              return new Xi(
                e._repo,
                e._path,
                ((t = e._queryParams),
                (n = this._limit),
                ((r = t.copy()).limitSet_ = !0),
                (r.limit_ = n),
                (r.viewFrom_ = "l"),
                r),
                e._orderByCalled
              )
              var t, n, r
            }),
            t
          )
        })(Eo)
        function Do(e) {
          if ("number" != typeof e || Math.floor(e) !== e || e <= 0)
            throw new Error(
              "limitToFirst: First argument must be a positive integer."
            )
          return new Ro(e)
        }
        var Ao = (function (e) {
          function t(t) {
            var n = e.call(this) || this
            return (n._limit = t), n
          }
          return (
            Object(l.c)(t, e),
            (t.prototype._apply = function (e) {
              if (e._queryParams.hasLimit())
                throw new Error(
                  "limitToLast: Limit was already set (by another call to limitToFirst or limitToLast)."
                )
              return new Xi(
                e._repo,
                e._path,
                ((t = e._queryParams),
                (n = this._limit),
                ((r = t.copy()).limitSet_ = !0),
                (r.limit_ = n),
                (r.viewFrom_ = "r"),
                r),
                e._orderByCalled
              )
              var t, n, r
            }),
            t
          )
        })(Eo)
        function Lo(e) {
          if ("number" != typeof e || Math.floor(e) !== e || e <= 0)
            throw new Error(
              "limitToLast: First argument must be a positive integer."
            )
          return new Ao(e)
        }
        var Fo = (function (e) {
          function t(t) {
            var n = e.call(this) || this
            return (n._path = t), n
          }
          return (
            Object(l.c)(t, e),
            (t.prototype._apply = function (e) {
              Zi(e, "orderByChild")
              var t = new Oe(this._path)
              if (xe(t))
                throw new Error(
                  "orderByChild: cannot pass in empty path. Use orderByValue() instead."
                )
              var n = new Ct(t),
                r = Mt(e._queryParams, n)
              return eo(r), new Xi(e._repo, e._path, r, !0)
            }),
            t
          )
        })(Eo)
        function Mo(path) {
          if ("$key" === path)
            throw new Error(
              'orderByChild: "$key" is invalid.  Use orderByKey() instead.'
            )
          if ("$priority" === path)
            throw new Error(
              'orderByChild: "$priority" is invalid.  Use orderByPriority() instead.'
            )
          if ("$value" === path)
            throw new Error(
              'orderByChild: "$value" is invalid.  Use orderByValue() instead.'
            )
          return hi("orderByChild", "path", path, !1), new Fo(path)
        }
        var qo = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            Object(l.c)(t, e),
            (t.prototype._apply = function (e) {
              Zi(e, "orderByKey")
              var t = Mt(e._queryParams, Ke)
              return eo(t), new Xi(e._repo, e._path, t, !0)
            }),
            t
          )
        })(Eo)
        function Wo() {
          return new qo()
        }
        var Uo = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            Object(l.c)(t, e),
            (t.prototype._apply = function (e) {
              Zi(e, "orderByPriority")
              var t = Mt(e._queryParams, lt)
              return eo(t), new Xi(e._repo, e._path, t, !0)
            }),
            t
          )
        })(Eo)
        function Bo() {
          return new Uo()
        }
        var zo = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            Object(l.c)(t, e),
            (t.prototype._apply = function (e) {
              Zi(e, "orderByValue")
              var t = Mt(e._queryParams, Ot)
              return eo(t), new Xi(e._repo, e._path, t, !0)
            }),
            t
          )
        })(Eo)
        function Vo() {
          return new zo()
        }
        var Ho = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this
            return (r._value = t), (r._key = n), r
          }
          return (
            Object(l.c)(t, e),
            (t.prototype._apply = function (e) {
              if (
                (ii("equalTo", this._value, e._path, !1),
                e._queryParams.hasStart())
              )
                throw new Error(
                  "equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo)."
                )
              if (e._queryParams.hasEnd())
                throw new Error(
                  "equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo)."
                )
              return new Io(this._value, this._key)._apply(
                new Po(this._value, this._key)._apply(e)
              )
            }),
            t
          )
        })(Eo)
        function Qo(e, t) {
          return ci("equalTo", "key", t, !0), new Ho(e, t)
        }
        function Yo(e) {
          for (var t, n, r = [], o = 1; o < arguments.length; o++)
            r[o - 1] = arguments[o]
          var h = Object(c.n)(e)
          try {
            for (var d = Object(l.g)(r), f = d.next(); !f.done; f = d.next()) {
              var _ = f.value
              h = _._apply(h)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              f && !f.done && (n = d.return) && n.call(d)
            } finally {
              if (t) throw t.error
            }
          }
          return h
        }
        !(function (e) {
          Object(c.d)(!Yn, "__referenceConstructor has already been defined"),
            (Yn = e)
        })(no),
          (function (e) {
            Object(c.d)(!er, "__referenceConstructor has already been defined"),
              (er = e)
          })(no)
        var Ko = {},
          Go = !1
        function $o(t, n, r, o, c) {
          var l = o || t.options.databaseURL
          void 0 === l &&
            (t.options.projectId ||
              R(
                "Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."
              ),
            N("Using default host for project ", t.options.projectId),
            (l = t.options.projectId + "-default-rtdb.firebaseio.com"))
          var h,
            d = Qi(l, c),
            f = d.repoInfo,
            _ = void 0
          void 0 !== e && (_ = e.env.FIREBASE_DATABASE_EMULATOR_HOST),
            _
              ? ((h = !0),
                (l = "http://" + _ + "?ns=" + f.namespace),
                (f = (d = Qi(l, c)).repoInfo))
              : (h = !d.repoInfo.secure)
          var v = c && h ? new ee(ee.OWNER) : new Z(t.name, t.options, n)
          pi("Invalid Firebase Database URL", d),
            xe(d.path) ||
              R(
                "Database URL must point to the root of a Firebase Database (not including a child path)."
              )
          var y = (function (e, t, n, r) {
            var o = Ko[t.name]
            o || ((o = {}), (Ko[t.name] = o))
            var c = o[e.toURLString()]
            c &&
              R(
                "Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."
              )
            return (c = new Ci(e, Go, n, r)), (o[e.toURLString()] = c), c
          })(f, t, v, new X(t.name, r))
          return new Jo(y, t)
        }
        var Jo = (function () {
          function e(e, t) {
            ;(this._repoInternal = e),
              (this.app = t),
              (this.type = "database"),
              (this._instanceStarted = !1)
          }
          return (
            Object.defineProperty(e.prototype, "_repo", {
              get: function () {
                return (
                  this._instanceStarted ||
                    (Oi(
                      this._repoInternal,
                      this.app.options.appId,
                      this.app.options.databaseAuthVariableOverride
                    ),
                    (this._instanceStarted = !0)),
                  this._repoInternal
                )
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "_root", {
              get: function () {
                return (
                  this._rootInternal ||
                    (this._rootInternal = new no(this._repo, Ee())),
                  this._rootInternal
                )
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype._delete = function () {
              var e, t, n
              return (
                this._checkNotDeleted("delete"),
                (e = this._repo),
                (t = this.app.name),
                ((n = Ko[t]) && n[e.key] === e) ||
                  R(
                    "Database " +
                      t +
                      "(" +
                      e.repoInfo_ +
                      ") has already been deleted."
                  ),
                Di(e),
                delete n[e.key],
                (this._repoInternal = null),
                (this._rootInternal = null),
                Promise.resolve()
              )
            }),
            (e.prototype._checkNotDeleted = function (e) {
              null === this._rootInternal &&
                R("Cannot call " + e + " on a deleted database.")
            }),
            e
          )
        })()
        function Xo(e, t, n, r) {
          void 0 === r && (r = {}),
            (e = Object(c.n)(e))._checkNotDeleted("useEmulator"),
            e._instanceStarted &&
              R(
                "Cannot call useEmulator() after instance has already been initialized."
              )
          var o = e._repoInternal,
            l = void 0
          if (o.repoInfo_.nodeAdmin)
            r.mockUserToken &&
              R(
                'mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'
              ),
              (l = new ee(ee.OWNER))
          else if (r.mockUserToken) {
            var h = Object(c.i)(r.mockUserToken, e.app.options.projectId)
            l = new ee(h)
          }
          !(function (e, t, n, r) {
            ;(e.repoInfo_ = new oe(
              t + ":" + n,
              !1,
              e.repoInfo_.namespace,
              e.repoInfo_.webSocketOnly,
              e.repoInfo_.nodeAdmin,
              e.repoInfo_.persistenceKey,
              e.repoInfo_.includeNamespaceInQueryParams
            )),
              r && (e.authTokenProvider_ = r)
          })(o, t, n, l)
        }
        function Zo(e) {
          ;(e = Object(c.n)(e))._checkNotDeleted("goOffline"), Di(e._repo)
        }
        function ea(e) {
          var t
          ;(e = Object(c.n)(e))._checkNotDeleted("goOnline"),
            (t = e._repo).persistentConnection_ &&
              t.persistentConnection_.resume(wi)
        }
        var ta = { ".sv": "timestamp" }
        var na = (function () {
          function e(e, t) {
            ;(this.committed = e), (this.snapshot = t)
          }
          return (
            (e.prototype.toJSON = function () {
              return {
                committed: this.committed,
                snapshot: this.snapshot.toJSON(),
              }
            }),
            e
          )
        })()
        function ra(e, t, n) {
          var r
          if (
            ((e = Object(c.n)(e)),
            di("Reference.transaction", e._path),
            ".length" === e.key || ".keys" === e.key)
          )
            throw (
              "Reference.transaction failed: " +
              e.key +
              " is a read-only object."
            )
          var o =
              null === (r = null == n ? void 0 : n.applyLocally) ||
              void 0 === r ||
              r,
            l = new c.a(),
            h = go(e, function () {})
          return (
            (function (e, path, t, n, r, o) {
              Ai(e, "transaction on " + path)
              var l = {
                  path: path,
                  update: t,
                  onComplete: n,
                  status: null,
                  order: E(),
                  applyLocally: o,
                  retryCount: 0,
                  unwatcher: r,
                  abortReason: null,
                  currentWriteId: null,
                  currentInputSnapshot: null,
                  currentOutputSnapshotRaw: null,
                  currentOutputSnapshotResolved: null,
                },
                h = Fi(e, path, void 0)
              l.currentInputSnapshot = h
              var d = l.update(h.val())
              if (void 0 === d)
                l.unwatcher(),
                  (l.currentOutputSnapshotRaw = null),
                  (l.currentOutputSnapshotResolved = null),
                  l.onComplete && l.onComplete(null, !1, l.currentInputSnapshot)
              else {
                oi("transaction failed: Data returned ", d, l.path),
                  (l.status = 0)
                var f = Vr(e.transactionQueueTree_, path),
                  _ = Hr(f) || []
                _.push(l), Qr(f, _)
                var v = void 0
                "object" == typeof d &&
                null !== d &&
                Object(c.h)(d, ".priority")
                  ? ((v = Object(c.z)(d, ".priority")),
                    Object(c.d)(
                      ri(v),
                      "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null."
                    ))
                  : (v = (Or(e.serverSyncTree_, path) || yt.EMPTY_NODE)
                      .getPriority()
                      .val())
                var y = Ii(e),
                  m = mt(d, v),
                  w = Ur(m, h, y)
                ;(l.currentOutputSnapshotRaw = m),
                  (l.currentOutputSnapshotResolved = w),
                  (l.currentWriteId = Pi(e))
                var C = vr(
                  e.serverSyncTree_,
                  path,
                  w,
                  l.currentWriteId,
                  l.applyLocally
                )
                gi(e.eventQueue_, path, C), Mi(e, e.transactionQueueTree_)
              }
            })(
              e._repo,
              e._path,
              t,
              function (t, n, r) {
                var o = null
                t
                  ? l.reject(t)
                  : ((o = new ro(r, new no(e._repo, e._path), lt)),
                    l.resolve(new na(n, o)))
              },
              h,
              o
            ),
            l.promise
          )
        }
        var ia = (function () {
            function e(e) {
              this._delegate = e
            }
            return (
              (e.prototype.cancel = function (e) {
                Object(c.D)("OnDisconnect.cancel", 0, 1, arguments.length),
                  Object(c.E)("OnDisconnect.cancel", "onComplete", e, !0)
                var t = this._delegate.cancel()
                return (
                  e &&
                    t.then(
                      function () {
                        return e(null)
                      },
                      function (t) {
                        return e(t)
                      }
                    ),
                  t
                )
              }),
              (e.prototype.remove = function (e) {
                Object(c.D)("OnDisconnect.remove", 0, 1, arguments.length),
                  Object(c.E)("OnDisconnect.remove", "onComplete", e, !0)
                var t = this._delegate.remove()
                return (
                  e &&
                    t.then(
                      function () {
                        return e(null)
                      },
                      function (t) {
                        return e(t)
                      }
                    ),
                  t
                )
              }),
              (e.prototype.set = function (e, t) {
                Object(c.D)("OnDisconnect.set", 1, 2, arguments.length),
                  Object(c.E)("OnDisconnect.set", "onComplete", t, !0)
                var n = this._delegate.set(e)
                return (
                  t &&
                    n.then(
                      function () {
                        return t(null)
                      },
                      function (e) {
                        return t(e)
                      }
                    ),
                  n
                )
              }),
              (e.prototype.setWithPriority = function (e, t, n) {
                Object(c.D)(
                  "OnDisconnect.setWithPriority",
                  2,
                  3,
                  arguments.length
                ),
                  Object(c.E)(
                    "OnDisconnect.setWithPriority",
                    "onComplete",
                    n,
                    !0
                  )
                var r = this._delegate.setWithPriority(e, t)
                return (
                  n &&
                    r.then(
                      function () {
                        return n(null)
                      },
                      function (e) {
                        return n(e)
                      }
                    ),
                  r
                )
              }),
              (e.prototype.update = function (e, t) {
                if (
                  (Object(c.D)("OnDisconnect.update", 1, 2, arguments.length),
                  Array.isArray(e))
                ) {
                  for (var n = {}, i = 0; i < e.length; ++i) n["" + i] = e[i]
                  ;(e = n),
                    D(
                      "Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children."
                    )
                }
                Object(c.E)("OnDisconnect.update", "onComplete", t, !0)
                var r = this._delegate.update(e)
                return (
                  t &&
                    r.then(
                      function () {
                        return t(null)
                      },
                      function (e) {
                        return t(e)
                      }
                    ),
                  r
                )
              }),
              e
            )
          })(),
          oa = (function () {
            function e(e, t) {
              ;(this.committed = e), (this.snapshot = t)
            }
            return (
              (e.prototype.toJSON = function () {
                return (
                  Object(c.D)(
                    "TransactionResult.toJSON",
                    0,
                    1,
                    arguments.length
                  ),
                  {
                    committed: this.committed,
                    snapshot: this.snapshot.toJSON(),
                  }
                )
              }),
              e
            )
          })(),
          aa = (function () {
            function e(e, t) {
              ;(this._database = e), (this._delegate = t)
            }
            return (
              (e.prototype.val = function () {
                return (
                  Object(c.D)("DataSnapshot.val", 0, 0, arguments.length),
                  this._delegate.val()
                )
              }),
              (e.prototype.exportVal = function () {
                return (
                  Object(c.D)("DataSnapshot.exportVal", 0, 0, arguments.length),
                  this._delegate.exportVal()
                )
              }),
              (e.prototype.toJSON = function () {
                return (
                  Object(c.D)("DataSnapshot.toJSON", 0, 1, arguments.length),
                  this._delegate.toJSON()
                )
              }),
              (e.prototype.exists = function () {
                return (
                  Object(c.D)("DataSnapshot.exists", 0, 0, arguments.length),
                  this._delegate.exists()
                )
              }),
              (e.prototype.child = function (path) {
                return (
                  Object(c.D)("DataSnapshot.child", 0, 1, arguments.length),
                  (path = String(path)),
                  hi("DataSnapshot.child", "path", path, !1),
                  new e(this._database, this._delegate.child(path))
                )
              }),
              (e.prototype.hasChild = function (path) {
                return (
                  Object(c.D)("DataSnapshot.hasChild", 1, 1, arguments.length),
                  hi("DataSnapshot.hasChild", "path", path, !1),
                  this._delegate.hasChild(path)
                )
              }),
              (e.prototype.getPriority = function () {
                return (
                  Object(c.D)(
                    "DataSnapshot.getPriority",
                    0,
                    0,
                    arguments.length
                  ),
                  this._delegate.priority
                )
              }),
              (e.prototype.forEach = function (t) {
                var n = this
                return (
                  Object(c.D)("DataSnapshot.forEach", 1, 1, arguments.length),
                  Object(c.E)("DataSnapshot.forEach", "action", t, !1),
                  this._delegate.forEach(function (r) {
                    return t(new e(n._database, r))
                  })
                )
              }),
              (e.prototype.hasChildren = function () {
                return (
                  Object(c.D)(
                    "DataSnapshot.hasChildren",
                    0,
                    0,
                    arguments.length
                  ),
                  this._delegate.hasChildren()
                )
              }),
              Object.defineProperty(e.prototype, "key", {
                get: function () {
                  return this._delegate.key
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.numChildren = function () {
                return (
                  Object(c.D)(
                    "DataSnapshot.numChildren",
                    0,
                    0,
                    arguments.length
                  ),
                  this._delegate.size
                )
              }),
              (e.prototype.getRef = function () {
                return (
                  Object(c.D)("DataSnapshot.ref", 0, 0, arguments.length),
                  new ua(this._database, this._delegate.ref)
                )
              }),
              Object.defineProperty(e.prototype, "ref", {
                get: function () {
                  return this.getRef()
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            )
          })(),
          sa = (function () {
            function e(e, t) {
              ;(this.database = e), (this._delegate = t)
            }
            return (
              (e.prototype.on = function (t, n, r, o) {
                var l,
                  h = this
                Object(c.D)("Query.on", 2, 4, arguments.length),
                  Object(c.E)("Query.on", "callback", n, !1)
                var d = e.getCancelAndContextArgs_("Query.on", r, o),
                  f = function (e, t) {
                    n.call(d.context, new aa(h.database, e), t)
                  }
                ;(f.userCallback = n), (f.context = d.context)
                var _ =
                  null === (l = d.cancel) || void 0 === l
                    ? void 0
                    : l.bind(d.context)
                switch (t) {
                  case "value":
                    return go(this._delegate, f, _), n
                  case "child_added":
                    return mo(this._delegate, f, _), n
                  case "child_removed":
                    return Co(this._delegate, f, _), n
                  case "child_changed":
                    return bo(this._delegate, f, _), n
                  case "child_moved":
                    return wo(this._delegate, f, _), n
                  default:
                    throw new Error(
                      Object(c.m)("Query.on", "eventType") +
                        'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
                    )
                }
              }),
              (e.prototype.off = function (e, t, n) {
                if (
                  (Object(c.D)("Query.off", 0, 3, arguments.length),
                  ui("Query.off", e, !0),
                  Object(c.E)("Query.off", "callback", t, !0),
                  Object(c.F)("Query.off", "context", n, !0),
                  t)
                ) {
                  var r = function () {}
                  ;(r.userCallback = t),
                    (r.context = n),
                    Oo(this._delegate, e, r)
                } else Oo(this._delegate, e)
              }),
              (e.prototype.get = function () {
                var e = this
                return fo(this._delegate).then(function (t) {
                  return new aa(e.database, t)
                })
              }),
              (e.prototype.once = function (t, n, r, o) {
                var l = this
                Object(c.D)("Query.once", 1, 4, arguments.length),
                  Object(c.E)("Query.once", "callback", n, !0)
                var h = e.getCancelAndContextArgs_("Query.once", r, o),
                  d = new c.a(),
                  f = function (e, t) {
                    var r = new aa(l.database, e)
                    n && n.call(h.context, r, t), d.resolve(r)
                  }
                ;(f.userCallback = n), (f.context = h.context)
                var _ = function (e) {
                  h.cancel && h.cancel.call(h.context, e), d.reject(e)
                }
                switch (t) {
                  case "value":
                    go(this._delegate, f, _, { onlyOnce: !0 })
                    break
                  case "child_added":
                    mo(this._delegate, f, _, { onlyOnce: !0 })
                    break
                  case "child_removed":
                    Co(this._delegate, f, _, { onlyOnce: !0 })
                    break
                  case "child_changed":
                    bo(this._delegate, f, _, { onlyOnce: !0 })
                    break
                  case "child_moved":
                    wo(this._delegate, f, _, { onlyOnce: !0 })
                    break
                  default:
                    throw new Error(
                      Object(c.m)("Query.once", "eventType") +
                        'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
                    )
                }
                return d.promise
              }),
              (e.prototype.limitToFirst = function (t) {
                return (
                  Object(c.D)("Query.limitToFirst", 1, 1, arguments.length),
                  new e(this.database, Yo(this._delegate, Do(t)))
                )
              }),
              (e.prototype.limitToLast = function (t) {
                return (
                  Object(c.D)("Query.limitToLast", 1, 1, arguments.length),
                  new e(this.database, Yo(this._delegate, Lo(t)))
                )
              }),
              (e.prototype.orderByChild = function (path) {
                return (
                  Object(c.D)("Query.orderByChild", 1, 1, arguments.length),
                  new e(this.database, Yo(this._delegate, Mo(path)))
                )
              }),
              (e.prototype.orderByKey = function () {
                return (
                  Object(c.D)("Query.orderByKey", 0, 0, arguments.length),
                  new e(this.database, Yo(this._delegate, Wo()))
                )
              }),
              (e.prototype.orderByPriority = function () {
                return (
                  Object(c.D)("Query.orderByPriority", 0, 0, arguments.length),
                  new e(this.database, Yo(this._delegate, Bo()))
                )
              }),
              (e.prototype.orderByValue = function () {
                return (
                  Object(c.D)("Query.orderByValue", 0, 0, arguments.length),
                  new e(this.database, Yo(this._delegate, Vo()))
                )
              }),
              (e.prototype.startAt = function (t, n) {
                return (
                  void 0 === t && (t = null),
                  Object(c.D)("Query.startAt", 0, 2, arguments.length),
                  new e(this.database, Yo(this._delegate, No(t, n)))
                )
              }),
              (e.prototype.startAfter = function (t, n) {
                return (
                  void 0 === t && (t = null),
                  Object(c.D)("Query.startAfter", 0, 2, arguments.length),
                  new e(this.database, Yo(this._delegate, xo(t, n)))
                )
              }),
              (e.prototype.endAt = function (t, n) {
                return (
                  void 0 === t && (t = null),
                  Object(c.D)("Query.endAt", 0, 2, arguments.length),
                  new e(this.database, Yo(this._delegate, To(t, n)))
                )
              }),
              (e.prototype.endBefore = function (t, n) {
                return (
                  void 0 === t && (t = null),
                  Object(c.D)("Query.endBefore", 0, 2, arguments.length),
                  new e(this.database, Yo(this._delegate, ko(t, n)))
                )
              }),
              (e.prototype.equalTo = function (t, n) {
                return (
                  Object(c.D)("Query.equalTo", 1, 2, arguments.length),
                  new e(this.database, Yo(this._delegate, Qo(t, n)))
                )
              }),
              (e.prototype.toString = function () {
                return (
                  Object(c.D)("Query.toString", 0, 0, arguments.length),
                  this._delegate.toString()
                )
              }),
              (e.prototype.toJSON = function () {
                return (
                  Object(c.D)("Query.toJSON", 0, 1, arguments.length),
                  this._delegate.toJSON()
                )
              }),
              (e.prototype.isEqual = function (t) {
                if (
                  (Object(c.D)("Query.isEqual", 1, 1, arguments.length),
                  !(t instanceof e))
                ) {
                  var n =
                    "Query.isEqual failed: First argument must be an instance of firebase.database.Query."
                  throw new Error(n)
                }
                return this._delegate.isEqual(t._delegate)
              }),
              (e.getCancelAndContextArgs_ = function (e, t, n) {
                var r = { cancel: void 0, context: void 0 }
                if (t && n)
                  (r.cancel = t),
                    Object(c.E)(e, "cancel", r.cancel, !0),
                    (r.context = n),
                    Object(c.F)(e, "context", r.context, !0)
                else if (t)
                  if ("object" == typeof t && null !== t) r.context = t
                  else {
                    if ("function" != typeof t)
                      throw new Error(
                        Object(c.m)(e, "cancelOrContext") +
                          " must either be a cancel callback or a context object."
                      )
                    r.cancel = t
                  }
                return r
              }),
              Object.defineProperty(e.prototype, "ref", {
                get: function () {
                  return new ua(
                    this.database,
                    new no(this._delegate._repo, this._delegate._path)
                  )
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            )
          })(),
          ua = (function (e) {
            function t(t, n) {
              var r =
                e.call(this, t, new Xi(n._repo, n._path, new At(), !1)) || this
              return (r.database = t), (r._delegate = n), r
            }
            return (
              Object(l.c)(t, e),
              (t.prototype.getKey = function () {
                return (
                  Object(c.D)("Reference.key", 0, 0, arguments.length),
                  this._delegate.key
                )
              }),
              (t.prototype.child = function (e) {
                return (
                  Object(c.D)("Reference.child", 1, 1, arguments.length),
                  "number" == typeof e && (e = String(e)),
                  new t(this.database, ao(this._delegate, e))
                )
              }),
              (t.prototype.getParent = function () {
                Object(c.D)("Reference.parent", 0, 0, arguments.length)
                var e = this._delegate.parent
                return e ? new t(this.database, e) : null
              }),
              (t.prototype.getRoot = function () {
                return (
                  Object(c.D)("Reference.root", 0, 0, arguments.length),
                  new t(this.database, this._delegate.root)
                )
              }),
              (t.prototype.set = function (e, t) {
                Object(c.D)("Reference.set", 1, 2, arguments.length),
                  Object(c.E)("Reference.set", "onComplete", t, !0)
                var n = co(this._delegate, e)
                return (
                  t &&
                    n.then(
                      function () {
                        return t(null)
                      },
                      function (e) {
                        return t(e)
                      }
                    ),
                  n
                )
              }),
              (t.prototype.update = function (e, t) {
                if (
                  (Object(c.D)("Reference.update", 1, 2, arguments.length),
                  Array.isArray(e))
                ) {
                  for (var n = {}, i = 0; i < e.length; ++i) n["" + i] = e[i]
                  ;(e = n),
                    D(
                      "Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children."
                    )
                }
                di("Reference.update", this._delegate._path),
                  Object(c.E)("Reference.update", "onComplete", t, !0)
                var r = po(this._delegate, e)
                return (
                  t &&
                    r.then(
                      function () {
                        return t(null)
                      },
                      function (e) {
                        return t(e)
                      }
                    ),
                  r
                )
              }),
              (t.prototype.setWithPriority = function (e, t, n) {
                Object(c.D)(
                  "Reference.setWithPriority",
                  2,
                  3,
                  arguments.length
                ),
                  Object(c.E)("Reference.setWithPriority", "onComplete", n, !0)
                var r = ho(this._delegate, e, t)
                return (
                  n &&
                    r.then(
                      function () {
                        return n(null)
                      },
                      function (e) {
                        return n(e)
                      }
                    ),
                  r
                )
              }),
              (t.prototype.remove = function (e) {
                Object(c.D)("Reference.remove", 0, 1, arguments.length),
                  Object(c.E)("Reference.remove", "onComplete", e, !0)
                var t = uo(this._delegate)
                return (
                  e &&
                    t.then(
                      function () {
                        return e(null)
                      },
                      function (t) {
                        return e(t)
                      }
                    ),
                  t
                )
              }),
              (t.prototype.transaction = function (e, t, n) {
                var r = this
                Object(c.D)("Reference.transaction", 1, 3, arguments.length),
                  Object(c.E)(
                    "Reference.transaction",
                    "transactionUpdate",
                    e,
                    !1
                  ),
                  Object(c.E)("Reference.transaction", "onComplete", t, !0),
                  fi("Reference.transaction", "applyLocally", n, !0)
                var o = ra(this._delegate, e, { applyLocally: n }).then(
                  function (e) {
                    return new oa(e.committed, new aa(r.database, e.snapshot))
                  }
                )
                return (
                  t &&
                    o.then(
                      function (e) {
                        return t(null, e.committed, e.snapshot)
                      },
                      function (e) {
                        return t(e, !1, null)
                      }
                    ),
                  o
                )
              }),
              (t.prototype.setPriority = function (e, t) {
                Object(c.D)("Reference.setPriority", 1, 2, arguments.length),
                  Object(c.E)("Reference.setPriority", "onComplete", t, !0)
                var n = lo(this._delegate, e)
                return (
                  t &&
                    n.then(
                      function () {
                        return t(null)
                      },
                      function (e) {
                        return t(e)
                      }
                    ),
                  n
                )
              }),
              (t.prototype.push = function (e, n) {
                var r = this
                Object(c.D)("Reference.push", 0, 2, arguments.length),
                  Object(c.E)("Reference.push", "onComplete", n, !0)
                var o = so(this._delegate, e),
                  l = o.then(function (e) {
                    return new t(r.database, e)
                  })
                n &&
                  l.then(
                    function () {
                      return n(null)
                    },
                    function (e) {
                      return n(e)
                    }
                  )
                var h = new t(this.database, o)
                return (
                  (h.then = l.then.bind(l)),
                  (h.catch = l.catch.bind(l, void 0)),
                  h
                )
              }),
              (t.prototype.onDisconnect = function () {
                return (
                  di("Reference.onDisconnect", this._delegate._path),
                  new ia(new Ji(this._delegate._repo, this._delegate._path))
                )
              }),
              Object.defineProperty(t.prototype, "key", {
                get: function () {
                  return this.getKey()
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "parent", {
                get: function () {
                  return this.getParent()
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "root", {
                get: function () {
                  return this.getRoot()
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            )
          })(sa),
          ca = (function () {
            function e(e, t) {
              var n = this
              ;(this._delegate = e),
                (this.app = t),
                (this.INTERNAL = {
                  delete: function () {
                    return n._delegate._delete()
                  },
                })
            }
            return (
              (e.prototype.useEmulator = function (e, t, n) {
                void 0 === n && (n = {}), Xo(this._delegate, e, t, n)
              }),
              (e.prototype.ref = function (path) {
                if (
                  (Object(c.D)("database.ref", 0, 1, arguments.length),
                  path instanceof ua)
                ) {
                  var e = oo(this._delegate, path.toString())
                  return new ua(this, e)
                }
                e = io(this._delegate, path)
                return new ua(this, e)
              }),
              (e.prototype.refFromURL = function (e) {
                var t = "database.refFromURL"
                Object(c.D)(t, 1, 1, arguments.length)
                var n = oo(this._delegate, e)
                return new ua(this, n)
              }),
              (e.prototype.goOffline = function () {
                return (
                  Object(c.D)("database.goOffline", 0, 0, arguments.length),
                  Zo(this._delegate)
                )
              }),
              (e.prototype.goOnline = function () {
                return (
                  Object(c.D)("database.goOnline", 0, 0, arguments.length),
                  ea(this._delegate)
                )
              }),
              (e.ServerValue = {
                TIMESTAMP: ta,
                increment: function (e) {
                  return (function (e) {
                    return { ".sv": { increment: e } }
                  })(e)
                },
              }),
              e
            )
          })()
        var la = Object.freeze({
            __proto__: null,
            forceLongPolling: function () {
              ye.forceDisallow(), fe.forceAllow()
            },
            forceWebSockets: function () {
              fe.forceDisallow()
            },
            isWebSocketsAvailable: function () {
              return ye.isAvailable()
            },
            setSecurityDebugCallback: function (e, t) {
              e._delegate._repo.persistentConnection_.securityDebugCallback_ = t
            },
            stats: function (e, t) {
              !(function (e, t) {
                if ((void 0 === t && (t = !1), "undefined" != typeof console)) {
                  var n
                  t
                    ? (e.statsListener_ ||
                        (e.statsListener_ = new Kt(e.stats_)),
                      (n = e.statsListener_.get()))
                    : (n = e.stats_.get())
                  var r = Object.keys(n).reduce(function (e, t) {
                    return Math.max(t.length, e)
                  }, 0)
                  V(n, function (e, t) {
                    for (var n = e, i = e.length; i < r + 2; i++) n += " "
                    console.log(n + t)
                  })
                }
              })(e._delegate._repo, t)
            },
            statsIncrementCounter: function (e, t) {
              !(function (e, t) {
                var n, r
                e.stats_.incrementCounter(t),
                  (n = e.statsReporter_),
                  (r = t),
                  (n.statsToReport_[r] = !0)
              })(e._delegate._repo, t)
            },
            dataUpdateCount: function (e) {
              return e._delegate._repo.dataUpdateCount
            },
            interceptServerData: function (e, t) {
              return (function (e, t) {
                e.interceptServerDataCallback_ = t
              })(e._delegate._repo, t)
            },
            initStandalone: function (e) {
              var t = e.app,
                n = e.url,
                r = e.version,
                c = e.customAuthImpl,
                l = e.namespace,
                h = e.nodeAdmin,
                d = void 0 !== h && h
              f(r)
              var _ = new o.c("auth-internal", new o.b("database-standalone"))
              return (
                _.setComponent(
                  new o.a(
                    "auth-internal",
                    function () {
                      return c
                    },
                    "PRIVATE"
                  )
                ),
                { instance: new ca($o(t, _, void 0, n, d), t), namespace: l }
              )
            },
          }),
          ha = Ve
        ;(Ve.prototype.simpleListen = function (e, t) {
          this.sendRequest("q", { p: e }, t)
        }),
          (Ve.prototype.echo = function (data, e) {
            this.sendRequest("echo", { d: data }, e)
          })
        var da = me,
          pa = oe,
          fa = Object.freeze({
            __proto__: null,
            DataConnection: ha,
            RealTimeConnection: da,
            hijackHash: function (e) {
              var t = Ve.prototype.put
              return (
                (Ve.prototype.put = function (n, data, r, o) {
                  void 0 !== o && (o = e()), t.call(this, n, data, r, o)
                }),
                function () {
                  Ve.prototype.put = t
                }
              )
            },
            ConnectionTarget: pa,
            queryIdentifier: function (e) {
              return e._delegate._queryIdentifier
            },
            forceRestClient: function (e) {
              !(function (e) {
                Go = e
              })(e)
            },
          }),
          _a = ca.ServerValue
        !(function (e) {
          f(e.SDK_VERSION)
          var n = e.INTERNAL.registerComponent(
            new o.a(
              "database",
              function (e, t) {
                var n = t.instanceIdentifier,
                  r = e.getProvider("app").getImmediate(),
                  o = e.getProvider("auth-internal"),
                  c = e.getProvider("app-check-internal")
                return new ca($o(r, o, c, n), r)
              },
              "PUBLIC"
            )
              .setServiceProps({
                Reference: ua,
                Query: sa,
                Database: ca,
                DataSnapshot: aa,
                enableLogging: P,
                INTERNAL: la,
                ServerValue: _a,
                TEST_ACCESS: fa,
              })
              .setMultipleInstances(!0)
          )
          e.registerVersion("@firebase/database", "0.10.3"),
            Object(c.t)() && (t.exports = n)
        })(r.a)
      }.call(this, n(152), n(211)(e)))
    },
    211: function (e, t) {
      e.exports = function (e) {
        if (!e.webpackPolyfill) {
          var t = Object.create(e)
          t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i
              },
            }),
            Object.defineProperty(t, "exports", { enumerable: !0 }),
            (t.webpackPolyfill = 1)
        }
        return t
      }
    },
  },
])
