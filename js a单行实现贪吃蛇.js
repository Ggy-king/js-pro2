// 高境界我知道



(function () { var s = [41, 40], d = 1, f = 43, x, c = document.createElement('canvas'); c.width = 400; c.height = 400; c.style.background = "#535353"; c.textContent = "当前浏览器不支持canvas标签"; b = c.getContext('2d'); function w(s, c) { b.fillStyle = c; b.fillRect(s % 20 * 20, ~~(s / 20) * 20, 18, 18); }; document.onkeydown = function (e) { d = s[1] - s[0] == (x = [-1, -20, 1, 20][(e || event).keyCode - 37] || d) ? d : x; }; !(function () { s.unshift(x = s[0] + d); if (s.indexOf(x, 1) > 0 || x < 0 || x > 399 || d == 1 && x % 20 == 0 || d == -1 && x % 20 == 19) return alert('游戏结束!'); w(x, '#2396ef'); x === f ? (() => { while (s.indexOf(f = ~~(Math.random() * 399)) > 0); w(f, '#35e3dc'); })() : w(s.pop(), '#535353'); setTimeout(arguments.callee, 300); })(); document.body.appendChild(c); })();
