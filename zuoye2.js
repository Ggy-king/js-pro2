// 高广源
alert('关系矩阵');
var a = Number(prompt('请输入第一个矩阵的行数'));
var b = Number(prompt('请输入第一个矩阵的列数'));
var c = Number(prompt('请输入第二个矩阵的行数'));
var d = Number(prompt('请输入第二个矩阵的列数'));

alert('对第一个矩阵进行操作');

// 构建二维数组
var tArray = new Array();
for (var k = 0; k < a; k++) {

    tArray[k] = new Array();

    for (var j = 0; j < b; j++) {
        var e = prompt('请输入第' + (k + 1) + '行，第' + (j + 1) + '列' + '的数字');
        tArray[k][j] = e;
    }
}

alert('对第二个矩阵进行操作');

// 构建二维数组
var sArray = new Array();
for (var k = 0; k < c; k++) {

    sArray[k] = new Array();

    for (var j = 0; j < d; j++) {
        var e = prompt('请输入第' + (k + 1) + '行，第' + (j + 1) + '列' + '的数字');
        sArray[k][j] = e;
    }
}

// 函数计算逻辑
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
var result = [];
result = matri(tArray, sArray);
alert('关系矩阵相乘结果为[' + result + ']    设置中打开控制台可查看标准二维数组');
console.log(result);
