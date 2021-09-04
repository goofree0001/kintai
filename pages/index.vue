<template>
  <div class="page">
    <label id="name_label">
      <span> name: </span>
      <input id="name_input" v-model="user.name" type="text" />
    </label>
    <label id="pass_label">
      <span> pass: </span>
      <input id="pass_input" v-model="user.pass" type="password" />
    </label>
    <button id="login" type="button" @click="login">ログイン</button>
    <div id="time"></div>
    <button id="work_start" hidden type="button" @click="work_start">
      出勤
    </button>
    <button id="work_end" hidden type="button" @click="work_end">退勤</button>
    <button id="listData" hidden type="button" @click="listData">
      出退管理一覧
    </button>
    <input id="yyyymm" v-model="user.yyyymm" hidden type="text" size="5" />
    <button id="jsonread" hidden type="button" @click="jsonread">
      ユーザー読み込み
    </button>
    <div id="list"></div>
  </div>
</template>

<script>
var admin_name = "admin"

var login = 0
var user_check = 0

import firebase from "@/plugins/firebase"
import read_users from "@/pages/user.json"

function write_rec(type_arg) {
  var rec_name = document.getElementById("name_input").value
  var rec_type = type_arg
  var rec_date = new Date().toLocaleDateString()
  var rec_time = new Date().toLocaleTimeString()

  var Ref = firebase.database().ref("works")
  Ref.push({
    name: rec_name,
    type: rec_type,
    date: rec_date,
    time: rec_time,
  }).then(() => {
    alert(type_arg + "しました")
  })
}

var timeMath = {
  // 加算
  sum: function () {
    var result,
      times,
      second,
      i,
      len = arguments.length

    if (len === 0) return

    for (i = 0; i < len; i++) {
      if (!arguments[i] || !arguments[i].match(/^[0-9]+:[0-9]{2}:[0-9]{2}$/))
        continue

      times = arguments[i].split(":")

      second = this.toSecond(times[0], times[1], times[2])

      if (!second && second !== 0) continue

      if (i === 0) {
        result = second
      } else {
        result += second
      }
    }

    return this.toTimeFormat(result)
  },

  // 減算
  sub: function () {
    var result,
      times,
      second,
      i,
      len = arguments.length

    if (len === 0) return

    for (i = 0; i < len; i++) {
      if (!arguments[i] || !arguments[i].match(/^[0-9]+:[0-9]{2}:[0-9]{2}$/))
        continue

      times = arguments[i].split(":")

      second = this.toSecond(times[0], times[1], times[2])

      if (!second) continue

      if (i === 0) {
        result = second
      } else {
        result -= second
      }
    }

    return this.toTimeFormat(result)
  },

  // 乗算
  multiply: function () {
    var result,
      times,
      second,
      i,
      len = arguments.length

    if (len === 0) return

    for (i = 0; i < len; i++) {
      if (!arguments[i] || !arguments[i].match(/^[0-9]+:[0-9]{2}:[0-9]{2}$/))
        continue

      times = arguments[i].split(":")

      second = this.toSecond(times[0], times[1], times[2])

      if (!second) continue

      if (i === 0) {
        result = second
      } else {
        result *= second
      }
    }

    return this.toTimeFormat(result)
  },

  // 除算
  division: function () {
    var result,
      times,
      second,
      i,
      len = arguments.length

    if (len === 0) return

    for (i = 0; i < len; i++) {
      if (!arguments[i] || !arguments[i].match(/^[0-9]+:[0-9]{2}:[0-9]{2}$/))
        continue

      times = arguments[i].split(":")

      second = this.toSecond(times[0], times[1], times[2])

      if (!second) continue

      if (i === 0) {
        result = second
      } else {
        result /= second
      }
    }

    return this.toTimeFormat(result)
  },

  // 時間を秒に変換
  toSecond: function (hour, minute, second) {
    if (
      (!hour && hour !== 0) ||
      (!minute && minute !== 0) ||
      (!second && second !== 0) ||
      hour === null ||
      minute === null ||
      second === null ||
      typeof hour === "boolean" ||
      typeof minute === "boolean" ||
      typeof second === "boolean"
    )
      return

    return Number(hour) * 60 * 60 + Number(minute) * 60 + Number(second)
  },

  // 秒を時間（hh:mm:ss）のフォーマットに変換
  toTimeFormat: function (fullSecond) {
    var hour, minute, second

    if (
      (!fullSecond && fullSecond !== 0) ||
      !String(fullSecond).match(/^[0-9][0-9]*?$/)
    )
      return

    var paddingZero = function (n) {
      return n < 10 ? "0" + n : n
    }

    hour = Math.floor(Math.abs(fullSecond) / 3600)
    minute = Math.floor((Math.abs(fullSecond) % 3600) / 60)
    second = Math.floor(Math.abs(fullSecond) % 60)

    hour = paddingZero(hour)
    minute = paddingZero(minute)
    second = paddingZero(second)

    return (fullSecond < 0 ? "-" : "") + hour + ":" + minute + ":" + second
  },
}

function write_detail(
  detail_workdate,
  detail_worktime_start,
  detail_worktime_end,
  detail_worktime
) {
  var tr = document.createElement("tr")

  var td = document.createElement("td")
  td.innerHTML = detail_workdate
  tr.appendChild(td)

  td = document.createElement("td")
  td.innerHTML = detail_worktime_start
  tr.appendChild(td)

  td = document.createElement("td")
  td.innerHTML = detail_worktime_end
  tr.appendChild(td)

  td = document.createElement("td")
  td.innerHTML = detail_worktime
  tr.appendChild(td)

  document.getElementById("tbody").appendChild(tr)
}

export default {
  name: "nuxt",
  data() {
    return {
      user: {
        name: "",
        type: "",
      },
    }
  },
  methods: {
    login: async function () {
      if (login == 0) {
        user_check = 0

        var Ref = firebase.database().ref("users")
        await Ref.once("value", (snapshot) => {
          var childSnapshots = snapshot.val()
          for (var id in childSnapshots) {
            var input_name = document.getElementById("name_input").value
            var input_pass = document.getElementById("pass_input").value

            if (
              input_name == childSnapshots[id].name &&
              input_pass == childSnapshots[id].pass
            ) {
              user_check = 1
              break
            }
          }
        })

        if (user_check == 0) {
          alert("nameまたはpassが違います")
        } else {
          login = 1

          if (this.user.name == admin_name) {
            document.getElementById("jsonread").hidden = false
          }

          document.getElementById("login").innerHTML = "ログアウト"

          document.getElementById("name_input").disabled = true
          document.getElementById("pass_label").hidden = true

          document.getElementById("time").hidden = false

          document.getElementById("work_start").hidden = false
          document.getElementById("work_end").hidden = false
          document.getElementById("yyyymm").hidden = false

          var today = new Date()
          var year = today.getFullYear()
          var month = today.getMonth() + 1
          var yyyymm = "" + year + "/" + month

          document.getElementById("listData").hidden = false
          document.getElementById("yyyymm").value = yyyymm

          document.getElementById("list").hidden = false

          var removeElem = document.getElementById("list")
          removeElem.parentNode.removeChild(removeElem)

          var child_list = document.createElement("div")
          child_list.id = "list"
          document.body.appendChild(child_list)
        }
      } else {
        login = 0
        document.getElementById("login").innerHTML = "ログイン"

        document.getElementById("name_input").disabled = false
        document.getElementById("pass_label").hidden = false
        document.getElementById("pass_input").value = ""
        this.user.pass = ""

        document.getElementById("time").hidden = false

        document.getElementById("work_start").hidden = true
        document.getElementById("work_end").hidden = true
        document.getElementById("listData").hidden = true
        document.getElementById("yyyymm").hidden = true
        document.getElementById("jsonread").hidden = true

        document.getElementById("list").hidden = true
      }
    },
    work_start: function () {
      write_rec("出勤")
    },
    work_end: function () {
      write_rec("退勤")
    },
    listData: async function () {
      var removeElem = document.getElementById("list")
      removeElem.parentNode.removeChild(removeElem)

      var child_list = document.createElement("div")
      child_list.id = "list"
      document.body.appendChild(child_list)

      var table = document.createElement("table")
      table.id = "table"
      table.setAttribute("border", "1")
      document.getElementById("list").appendChild(table)

      var tbody = document.createElement("tbody")
      tbody.id = "tbody"
      document.getElementById("table").appendChild(tbody)

      var tr = document.createElement("tr")

      var th = document.createElement("th")
      th.innerHTML = "日付"
      tr.appendChild(th)

      th = document.createElement("th")
      th.innerHTML = "出勤時間"
      tr.appendChild(th)

      th = document.createElement("th")
      th.innerHTML = "退勤時間"
      tr.appendChild(th)

      th = document.createElement("th")
      th.innerHTML = "勤務時間"
      tr.appendChild(th)

      document.getElementById("tbody").appendChild(tr)

      var Ref = firebase.database().ref("works")
      // await Ref.once("value", (snapshot) => {
      // await Ref.get().then((snapshot) => {
      await Ref.on("value", (snapshot) => {
        var work_type = ""
        var work_start = ""
        var work_sum = "00:00:00"

        var childSnapshots = snapshot.val()
        for (var id in childSnapshots) {
          if (
            document.getElementById("name_input").value ==
            childSnapshots[id]["name"]
          ) {
            var today = new Date(
              Date.parse(document.getElementById("yyyymm").value)
            )
            var year = today.getFullYear()
            var month = today.getMonth() + 1
            var yyyymm = "" + year + "/" + month
            var yyyymm_input = yyyymm

            today = new Date(Date.parse(childSnapshots[id]["date"]))
            year = today.getFullYear()
            month = today.getMonth() + 1
            yyyymm = "" + year + "/" + month
            var yyyymm_record = yyyymm

            if (yyyymm_input == yyyymm_record) {
              switch (childSnapshots[id]["type"]) {
                case "出勤":
                  if (work_type == "出勤") {
                    write_detail(
                      childSnapshots[id]["date"],
                      work_start,
                      "00:00:00",
                      "00:00:00"
                    )
                    work_start = childSnapshots[id]["time"]
                  }
                  work_type = "出勤"
                  work_start = childSnapshots[id]["time"]
                  break
                case "退勤":
                  if (work_type == "出勤") {
                    var work_time = timeMath.sub(
                      childSnapshots[id]["time"],
                      work_start
                    )
                    work_sum = timeMath.sum(work_sum, work_time)
                    write_detail(
                      childSnapshots[id]["date"],
                      work_start,
                      childSnapshots[id]["time"],
                      work_time
                    )
                  } else {
                    write_detail(
                      childSnapshots[id]["date"],
                      "00:00:00",
                      childSnapshots[id]["time"],
                      "00:00:00"
                    )
                  }
                  work_type = ""
                  work_start = ""
                  break
              } // switch
            } // if
          } // if
        } // for

        if (work_type == "出勤") {
          write_detail(
            childSnapshots[id]["date"],
            work_start,
            "00:00:00",
            "00:00:00"
          )
        } // if
        write_detail("合計", "", "", work_sum)
      }) // Ref.once
    }, // listData: async function()
    jsonread: async function () {
      var Ref = firebase.database().ref("users")
      var admin_check = 1
      for await (var read_user of read_users) {
        if (read_user.name == admin_name) {
          admin_check = 0
        }
      }

      if (admin_check == 1) {
        alert("ユーザーにadminがありません")
      } else {
        Ref.remove()
        for (read_user of read_users) {
          Ref.push({ name: read_user.name, pass: read_user.pass })
        }
        alert("ユーザーを読み込みしました")
      }
    },
  }, // methods
} // export

var time_dsp = function () {
  var date = new Date()

  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  var dayOfWeek = date.getDay()
  var dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek]
  /*
  function zero_add(dec) {
    if (dec < 10) {
      dec = "0" + dec
    }
    return dec
  }

month = zero_add(month);
day = zero_add(day);

hour = zero_add(hour);
minute = zero_add(minute);
second = zero_add(second);
  */

  var result =
    year +
    "/" +
    month +
    "/" +
    day +
    "(" +
    dayOfWeekStr +
    ") " +
    hour +
    ":" +
    minute +
    ":" +
    second
  if (typeof document !== "undefined") {
    document.getElementById("time").innerHTML = result
  }
}
setInterval(time_dsp, 1000)
</script>
