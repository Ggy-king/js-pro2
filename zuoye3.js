alert("对数组进行编辑");
var a = Number(prompt('请输入该数组的维度'));

var tArray = new Array();
for (var k = 0; k < a; k++) {

    tArray[k] = new Array();

    for (var j = 0; j < a; j++) {
        var e = prompt('请输入第' + (k + 1) + '行，第' + (j + 1) + '列' + '的数字');
        tArray[k][j] = e;
    }
}
// 深克隆一下
function arr(n) {
    var result = [];
    for (var i = 0; i < n.length; i++) {
        if (Array.isArray(n[i])) {
            result.push(arr(n[i]));
        } else {
            result.push(n[i]);
        }
    }
    return result;
}

var zifan = arr(tArray);

for (var i = 0; i < a; i++) {
    for (var j = 0; j < a; j++) {
        if (i == j) {
            zifan[i][j] = '1';
        }
    }
}

var duichen = arr(tArray);

for (var i = 0; i < a; i++) {
    for (var j = 0; j < a; j++) {
        if (duichen[i][j] == 1) {
            duichen[j][i] = '1';
        }
    }
}
var chuandia = arr(tArray);
var chuandia2 = arr(tArray);
var chuandi = arr(tArray);

function matri(q, p) {
    var m = new Array(q.length);
    for (var i = 0; i < q.length; i++) {
        m[i] = new Array(p[0].length);
        for (var j = 0; j < p[0].length; j++) {
            m[i][j] = 0;
            for (var k = 0; k < p[0].length; k++) {
                if (q[i][k] == 1 && p[k][j] == 1) {
                    m[i][j] = '1';
                    break;
                } else {
                    m[i][j] = '0';
                }
            }
        }
    }
    return m;
}
// 表达结果
var chuandib = [];
chuandib = matri(chuandia, chuandia2);
var chuandic = [];
chuandic = matri(chuandib, chuandia);

for (var i = 0; i < a; i++) {
    for (var j = 0; j < a; j++) {
        if ((chuandia[i][j] == 1) || (chuandib[i][j] == 1) || (chuandic[i][j] == 1)) {
            chuandi[i][j] = '1';
        }
    }
}


alert('自反闭包结果为[' + zifan + ']    设置中检查打开控制台可查看标准二维数组');
alert('对称闭包结果为[' + duichen + ']    设置中检查打开控制台可查看标准二维数组');
alert('传递闭包结果为[' + chuandi + ']    设置中检查打开控制台可查看标准二维数组');
console.log(zifan);
console.log(duichen);
console.log(chuandi);
