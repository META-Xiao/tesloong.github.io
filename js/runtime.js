var now = new Date();
function createtime() {
  // 当前时间
  now.setTime(now.getTime() + 1000);
  var start = new Date("01/19/2006 00:00:00"); // 新视野号开始计算的时间
  var dis = Math.trunc(23400000000 + ((now - start) / 1000) * 16.26); // 距离=秒数*速度 记住转换毫秒
  var unit = (dis / 149600000).toFixed(6);  // 天文单位
  var grt = new Date("01/25/2025 00:00:00");	// 网站诞生时间
  var days = (now - grt) / 1e3 / 60 / 60 / 24,
    dnum = Math.floor(days),
    hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
    hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
    mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
    snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);

  let greeting;
  if (hnum >= 5 && hnum < 12) {
    greeting = "早安！今天也要加油哦！🌞";
  } else if (hnum >= 12 && hnum < 18) {
    greeting = "下午好！别忘了休息一下～☀️";
  } else if (hnum >= 18 || hnum < 5) {
    greeting = "晚上好！放松一下吧！🌙";
  } else {
    greeting = "夜深啦，早点休息哦！💤";
  }

  let currentTimeHtml = `
      ${greeting}<br>
      本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i><br>
      新视野号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀
    </div>
  `;

  document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = currentTimeHtml);

  
}

// 设置重复执行函数，周期1000ms
setInterval(() => {
  createtime();
}, 1000);

