const path = {
    "v0": { "v1": 0, "v2": 5 },
    "v1": { "v3": 35, "v4": 30 },
    "v2": { "v4": 15, "v3": 20 },
    "v3": { "v5": 10 },
    "v4": { "v5": 20 },
    "v5": {}
}

function dijkstra(path) {
    //获取节点列表
    let nodes = Object.keys(path);
    //存储数据
    let table = new Array();
    for (let parent of nodes) {
        //遍历所有子路径
        for (let child of Object.keys(path[parent])) {
            //查找到达parent节点的花费
            let ancestorsCost = table.filter(n => n.node == parent);
            //定义当前子路径
            let currItem = {
                parent: parent,
                node: child,
                cost: ancestorsCost[0] ? ancestorsCost[0].cost + path[parent][child] : path[parent][child]
            };
            //处理同样到达当前节点node的路径
            let flag = true;
            table.forEach((e, index) => {
                //存在node数据一样，并且以往开销更大，更新路径,不需要新增路径
                if (e.node == child && e.cost > currItem.cost) {
                    e.parent = currItem.parent;
                    e.cost = currItem.cost;
                    flag = false;
                } else if (e.node == child && e.cost < currItem.cost) {
                    //如果存在，但是以往路径开销更小,不需要新增路径
                    flag = false;
                }
            })
            //没有同样到达当前节点node的路径,新增路径
            if (flag) {
                table.push(currItem);
            }
        }
    }
    console.log(table);
}
dijkstra(path);

//邻接矩阵
const matrix = [
    [0, 9, 2, Infinity, 6],
    [9, 0, 3, Infinity, Infinity],
    [2, 3, 0, 5, Infinity],
    [Infinity, Infinity, 5, 0, 1],
    [6, Infinity, Infinity, 1, 0]
];


//遍历出指定start到各个顶点最小距离
function Dijkstra(matrix, start = 0) {
    const rows = matrix.length, cols = matrix[0].length;
    if (rows !== cols || start >= rows) { return new Error("零阶矩阵错误/起点错误") }
    const distance = new Array(rows).fill(Infinity);
    distance[start] = 0;

    for (let i = 0; i < rows; i++) {
        //到不了的顶点，不能作为中转点
        if (distance[i] < Infinity) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] + distance[i] < distance[j]) {
                    distance[j] = matrix[i][j] + distance[i];
                }
            }
        }
    }
    console.log(distance);
}
Dijkstra(matrix);
