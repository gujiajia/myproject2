var sayHello = function () {
    //console.log('hello');
};
//() invoke 调用
/**
 * @param {function} func  是一个函数参数
 */
var execute = function (func) {
    func();
};
//execute(sayHello);
/*function execute(func){
    console.log(func);
    func();
}*/
/*function A(funcB){
    console.log('a');
    funcB();
}
function B(){
    console.log('b');
}
A(B);
*/
//callback 回调
/*var arr = [2, 3];
function compareTo(a, b) {
    return a - b;
}
arr.sort(compareTo);
console.log(arr);
*/
/*function C(func) {
    func();
}
C(function () {
    // console.log('C');
});
var sayHello = function () {
    console.log('hello');
}
var execute = function (func) {
    func();
}
console.log(execute);
*/
function C(func) {
    var a = 1, b = 2;
    //func(a, b);
}
C(function (a, b) {
    // console.log(a + b);
});
