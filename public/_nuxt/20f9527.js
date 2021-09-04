;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    212: function (e) {
      e.exports = JSON.parse(
        '[{"name":"admin","pass":"admin"},{"name":"amano01","pass":"amano01"},{"name":"amano02","pass":"amano02"},{"name":"amano03","pass":"amano03"}]'
      )
    },
    215: function (e, t, n) {
      "use strict"
      n.r(t)
      n(43), n(16), n(44), n(24), n(30), n(45), n(46), n(31)
      var r = n(7),
        o = n(201),
        d = (n(47), n(48), n(154), n(153), n(202), n(34), n(205), n(57), n(208))
      n(209)
      d.a.apps.length ||
        d.a.initializeApp({
          apiKey: "AIzaSyBfICaKmflH7z5Z6DHWZ6Anbnj9uKpGXGI",
          authDomain: "kintai-16a0b.firebaseapp.com",
          databaseURL: "https://kintai-16a0b-default-rtdb.firebaseio.com",
          projectId: "kintai-16a0b",
          storageBucket: "kintai-16a0b.appspot.com",
          messagingSenderId: "297429051342",
          appId: "1:297429051342:web:1a00082aa204a053c3ed9f",
        })
      var m = d.a,
        l = n(212)
      function c(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"]
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ("string" == typeof e) return y(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              "Object" === n && e.constructor && (n = e.constructor.name)
              if ("Map" === n || "Set" === n) return Array.from(e)
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return y(e, t)
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n)
            var i = 0,
              r = function () {}
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] }
              },
              e: function (e) {
                throw e
              },
              f: r,
            }
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          )
        }
        var o,
          d = !0,
          m = !1
        return {
          s: function () {
            n = n.call(e)
          },
          n: function () {
            var e = n.next()
            return (d = e.done), e
          },
          e: function (e) {
            ;(m = !0), (o = e)
          },
          f: function () {
            try {
              d || null == n.return || n.return()
            } finally {
              if (m) throw o
            }
          },
        }
      }
      function y(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i]
        return n
      }
      var f = "admin",
        h = 0,
        v = 0
      function E(e) {
        var t = document.getElementById("name_input").value,
          n = e,
          r = new Date().toLocaleDateString(),
          o = new Date().toLocaleTimeString()
        m.database()
          .ref("works")
          .push({ name: t, type: n, date: r, time: o })
          .then(function (t) {
            alert(e + "しました")
          })
      }
      var I = {
        sum: function () {
          var e,
            t,
            n,
            i,
            r = arguments.length
          if (0 !== r) {
            for (i = 0; i < r; i++)
              arguments[i] &&
                arguments[i].match(/^[0-9]+:[0-9]{2}:[0-9]{2}$/) &&
                ((t = arguments[i].split(":")),
                ((n = this.toSecond(t[0], t[1], t[2])) || 0 === n) &&
                  (0 === i ? (e = n) : (e += n)))
            return this.toTimeFormat(e)
          }
        },
        sub: function () {
          var e,
            t,
            n,
            i,
            r = arguments.length
          if (0 !== r) {
            for (i = 0; i < r; i++)
              arguments[i] &&
                arguments[i].match(/^[0-9]+:[0-9]{2}:[0-9]{2}$/) &&
                ((t = arguments[i].split(":")),
                (n = this.toSecond(t[0], t[1], t[2])) &&
                  (0 === i ? (e = n) : (e -= n)))
            return this.toTimeFormat(e)
          }
        },
        multiply: function () {
          var e,
            t,
            n,
            i,
            r = arguments.length
          if (0 !== r) {
            for (i = 0; i < r; i++)
              arguments[i] &&
                arguments[i].match(/^[0-9]+:[0-9]{2}:[0-9]{2}$/) &&
                ((t = arguments[i].split(":")),
                (n = this.toSecond(t[0], t[1], t[2])) &&
                  (0 === i ? (e = n) : (e *= n)))
            return this.toTimeFormat(e)
          }
        },
        division: function () {
          var e,
            t,
            n,
            i,
            r = arguments.length
          if (0 !== r) {
            for (i = 0; i < r; i++)
              arguments[i] &&
                arguments[i].match(/^[0-9]+:[0-9]{2}:[0-9]{2}$/) &&
                ((t = arguments[i].split(":")),
                (n = this.toSecond(t[0], t[1], t[2])) &&
                  (0 === i ? (e = n) : (e /= n)))
            return this.toTimeFormat(e)
          }
        },
        toSecond: function (e, t, n) {
          if (
            !(
              (!e && 0 !== e) ||
              (!t && 0 !== t) ||
              (!n && 0 !== n) ||
              null === e ||
              null === t ||
              null === n ||
              "boolean" == typeof e ||
              "boolean" == typeof t ||
              "boolean" == typeof n ||
              "NaN" == typeof Number(e) ||
              "NaN" == typeof Number(t) ||
              "NaN" == typeof Number(n)
            )
          )
            return 60 * Number(e) * 60 + 60 * Number(t) + Number(n)
        },
        toTimeFormat: function (e) {
          var t, n, r
          if ((e || 0 === e) && String(e).match(/^[\-0-9][0-9]*?$/)) {
            var o = function (e) {
              return e < 10 ? "0" + e : e
            }
            return (
              (t = Math.floor(Math.abs(e) / 3600)),
              (n = Math.floor((Math.abs(e) % 3600) / 60)),
              (r = Math.floor(Math.abs(e) % 60)),
              (e < 0 ? "-" : "") +
                (t = o(t)) +
                ":" +
                (n = o(n)) +
                ":" +
                (r = o(r))
            )
          }
        },
      }
      function _(e, t, n, r) {
        var td,
          tr = document.createElement("tr")
        ;((td = document.createElement("td")).innerHTML = e),
          tr.appendChild(td),
          ((td = document.createElement("td")).innerHTML = t),
          tr.appendChild(td),
          ((td = document.createElement("td")).innerHTML = n),
          tr.appendChild(td),
          ((td = document.createElement("td")).innerHTML = r),
          tr.appendChild(td),
          document.getElementById("table").appendChild(tr)
      }
      var w,
        k,
        B,
        x = {
          data: function () {
            return { user: { name: "", type: "" } }
          },
          methods: {
            login:
              ((B = Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var t, n, r, o, d, l, c
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (0 != h) {
                              e.next = 8
                              break
                            }
                            return (
                              (v = 0),
                              (t = m.database().ref("users")),
                              (e.next = 5),
                              t.once("value", function (e) {
                                e.key
                                var t = e.val()
                                for (var n in t) {
                                  var r =
                                      document.getElementById(
                                        "name_input"
                                      ).value,
                                    o =
                                      document.getElementById(
                                        "pass_input"
                                      ).value
                                  if (r == t[n].name && o == t[n].pass) {
                                    v = 1
                                    break
                                  }
                                }
                              })
                            )
                          case 5:
                            0 == v
                              ? alert("nameまたはpassが違います")
                              : ((h = 1),
                                this.user.name == f &&
                                  (document.getElementById("jsonread").hidden =
                                    !1),
                                (document.getElementById("login").innerHTML =
                                  "ログアウト"),
                                (document.getElementById(
                                  "name_input"
                                ).disabled = !0),
                                (document.getElementById("pass_label").hidden =
                                  !0),
                                (document.getElementById("time").hidden = !1),
                                (document.getElementById("work_start").hidden =
                                  !1),
                                (document.getElementById("work_end").hidden =
                                  !1),
                                (document.getElementById("yyyymm").hidden = !1),
                                (n = new Date()),
                                (r = n.getFullYear()),
                                (o = n.getMonth() + 1),
                                (d = r + "/" + o),
                                (document.getElementById("listData").hidden =
                                  !1),
                                (document.getElementById("yyyymm").value = d),
                                (document.getElementById("list").hidden = !1),
                                (l =
                                  document.getElementById(
                                    "list"
                                  )).parentNode.removeChild(l),
                                ((c = document.createElement("div")).id =
                                  "list"),
                                document.body.appendChild(c)),
                              (e.next = 21)
                            break
                          case 8:
                            ;(h = 0),
                              (document.getElementById("login").innerHTML =
                                "ログイン"),
                              (document.getElementById("name_input").disabled =
                                !1),
                              (document.getElementById("pass_label").hidden =
                                !1),
                              (document.getElementById("pass_input").value =
                                ""),
                              (this.user.pass = ""),
                              (document.getElementById("time").hidden = !1),
                              (document.getElementById("work_start").hidden =
                                !0),
                              (document.getElementById("work_end").hidden = !0),
                              (document.getElementById("listData").hidden = !0),
                              (document.getElementById("yyyymm").hidden = !0),
                              (document.getElementById("jsonread").hidden = !0),
                              (document.getElementById("list").hidden = !0)
                          case 21:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function () {
                return B.apply(this, arguments)
              }),
            work_start: function () {
              E("出勤")
            },
            work_end: function () {
              E("退勤")
            },
            listData:
              ((k = Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var t, n, table, tr, th, r
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t =
                              document.getElementById(
                                "list"
                              )).parentNode.removeChild(t),
                            ((n = document.createElement("div")).id = "list"),
                            document.body.appendChild(n),
                            ((table = document.createElement("table")).id =
                              "table"),
                            table.setAttribute("border", "1"),
                            document.getElementById("list").appendChild(table),
                            (tr = document.createElement("tr")),
                            ((th = document.createElement("th")).innerHTML =
                              "日付"),
                            tr.appendChild(th),
                            ((th = document.createElement("th")).innerHTML =
                              "出勤時間"),
                            tr.appendChild(th),
                            ((th = document.createElement("th")).innerHTML =
                              "退勤時間"),
                            tr.appendChild(th),
                            ((th = document.createElement("th")).innerHTML =
                              "勤務時間"),
                            tr.appendChild(th),
                            document.getElementById("table").appendChild(tr),
                            (r = m.database().ref("works")),
                            (e.next = 26),
                            r.once("value", function (e) {
                              var t = "",
                                n = "",
                                r = "00:00:00",
                                o = e.val()
                              for (var d in o) {
                                var m
                                if (
                                  document.getElementById("name_input").value ==
                                    o[d].name &&
                                  (m = new Date(
                                    Date.parse(
                                      document.getElementById("yyyymm").value
                                    )
                                  )).getFullYear() +
                                    "/" +
                                    (m.getMonth() + 1) ==
                                    (m = new Date(
                                      Date.parse(o[d].date)
                                    )).getFullYear() +
                                      "/" +
                                      (m.getMonth() + 1)
                                )
                                  switch (o[d].type) {
                                    case "出勤":
                                      "出勤" == t &&
                                        (_(
                                          o[d].date,
                                          n,
                                          "00:00:00",
                                          "00:00:00"
                                        ),
                                        (n = o[d].time)),
                                        (t = "出勤"),
                                        (n = o[d].time)
                                      break
                                    case "退勤":
                                      if ("出勤" == t) {
                                        var l = I.sub(o[d].time, n)
                                        ;(r = I.sum(r, l)),
                                          _(o[d].date, n, o[d].time, l)
                                      } else
                                        _(
                                          o[d].date,
                                          "00:00:00",
                                          o[d].time,
                                          "00:00:00"
                                        )
                                      ;(t = ""), (n = "")
                                  }
                              }
                              "出勤" == t &&
                                _(o[d].date, n, "00:00:00", "00:00:00"),
                                _("合計", "", "", r)
                            })
                          )
                        case 26:
                        case "end":
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return k.apply(this, arguments)
              }),
            jsonread:
              ((w = Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var t, n, r, d, y, h, v, E, I, _, w
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            ;(t = m.database().ref("users")),
                              (n = 1),
                              (r = !0),
                              (d = !1),
                              (e.prev = 4),
                              (h = Object(o.a)(l))
                          case 6:
                            return (e.next = 8), h.next()
                          case 8:
                            return (
                              (v = e.sent), (r = v.done), (e.next = 12), v.value
                            )
                          case 12:
                            if (((E = e.sent), r)) {
                              e.next = 19
                              break
                            }
                            ;(I = E).name == f && (n = 0)
                          case 16:
                            ;(r = !0), (e.next = 6)
                            break
                          case 19:
                            e.next = 25
                            break
                          case 21:
                            ;(e.prev = 21),
                              (e.t0 = e.catch(4)),
                              (d = !0),
                              (y = e.t0)
                          case 25:
                            if (
                              ((e.prev = 25),
                              (e.prev = 26),
                              r || null == h.return)
                            ) {
                              e.next = 30
                              break
                            }
                            return (e.next = 30), h.return()
                          case 30:
                            if (((e.prev = 30), !d)) {
                              e.next = 33
                              break
                            }
                            throw y
                          case 33:
                            return e.finish(30)
                          case 34:
                            return e.finish(25)
                          case 35:
                            if (1 == n) alert("ユーザーにadminがありません")
                            else {
                              t.remove(), (_ = c(l))
                              try {
                                for (_.s(); !(w = _.n()).done; )
                                  (I = w.value),
                                    t.push({ name: I.name, pass: I.pass })
                              } catch (e) {
                                _.e(e)
                              } finally {
                                _.f()
                              }
                              alert("ユーザーを読み込みしました")
                            }
                          case 36:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [
                      [4, 21, 25, 35],
                      [26, , 30, 34],
                    ]
                  )
                })
              )),
              function () {
                return w.apply(this, arguments)
              }),
          },
        }
      setInterval(function () {
        var e = new Date(),
          t = e.getFullYear(),
          n = e.getMonth() + 1,
          r = e.getDate(),
          o = e.getHours(),
          d = e.getMinutes(),
          m = e.getSeconds()
        var l =
          t +
          "/" +
          n +
          "/" +
          r +
          "(" +
          ["日", "月", "火", "水", "木", "金", "土"][e.getDay()] +
          ") " +
          o +
          ":" +
          d +
          ":" +
          m
        document.getElementById("time").innerHTML = l
      }, 1e3)
      var M = x,
        C = n(41),
        component = Object(C.a)(
          M,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n("div", { staticClass: "page" }, [
              n("label", { attrs: { id: "name_label" } }, [
                n("span", [e._v("\n\t\t\tname:\n\t\t")]),
                e._v(" "),
                n("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: e.user.name,
                      expression: "user.name",
                    },
                  ],
                  attrs: { id: "name_input", type: "text" },
                  domProps: { value: e.user.name },
                  on: {
                    input: function (t) {
                      t.target.composing ||
                        e.$set(e.user, "name", t.target.value)
                    },
                  },
                }),
              ]),
              e._v(" "),
              n("label", { attrs: { id: "pass_label" } }, [
                n("span", [e._v("\n\t\t\tpass:\n\t\t")]),
                e._v(" "),
                n("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: e.user.pass,
                      expression: "user.pass",
                    },
                  ],
                  attrs: { id: "pass_input", type: "password" },
                  domProps: { value: e.user.pass },
                  on: {
                    input: function (t) {
                      t.target.composing ||
                        e.$set(e.user, "pass", t.target.value)
                    },
                  },
                }),
              ]),
              e._v(" "),
              n(
                "button",
                {
                  attrs: { id: "login", type: "button" },
                  on: { click: e.login },
                },
                [e._v("\n\t\tログイン\n\t")]
              ),
              e._v(" "),
              n("div", { attrs: { id: "time" } }),
              e._v(" "),
              n(
                "button",
                {
                  attrs: { hidden: "", id: "work_start", type: "button" },
                  on: { click: e.work_start },
                },
                [e._v("\n\t\t出勤\n\t")]
              ),
              e._v(" "),
              n(
                "button",
                {
                  attrs: { hidden: "", id: "work_end", type: "button" },
                  on: { click: e.work_end },
                },
                [e._v("\n\t\t退勤\n\t")]
              ),
              e._v(" "),
              n(
                "button",
                {
                  attrs: { hidden: "", id: "listData", type: "button" },
                  on: { click: e.listData },
                },
                [e._v("\n\t\t出退管理一覧\n\t")]
              ),
              e._v(" "),
              n("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: e.user.yyyymm,
                    expression: "user.yyyymm",
                  },
                ],
                attrs: { hidden: "", id: "yyyymm", type: "text", size: "5" },
                domProps: { value: e.user.yyyymm },
                on: {
                  input: function (t) {
                    t.target.composing ||
                      e.$set(e.user, "yyyymm", t.target.value)
                  },
                },
              }),
              e._v(" "),
              n(
                "button",
                {
                  attrs: { hidden: "", id: "jsonread", type: "button" },
                  on: { click: e.jsonread },
                },
                [e._v("\n\t\tユーザー読み込み\n\t")]
              ),
              e._v(" "),
              n("div", { attrs: { id: "list" } }),
            ])
          },
          [],
          !1,
          null,
          null,
          null
        )
      t.default = component.exports
    },
  },
])
