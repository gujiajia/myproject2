var a = function () {

}

var add = function (a, b) { //这个写法累
    return a + b;
}

// tsc week/day02/src/no-name-function.ts
// tsc+文件路径    编译
var add = (a, b) => a + b;

var squre = a => a * a;