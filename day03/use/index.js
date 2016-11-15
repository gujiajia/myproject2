document.write('杨杰');
console.log('在外部js 调用');


// 向浏览器文档写一行html
// document.write('<h1 style="color:red">杨杰</h1>');

// 定义一个函数,打印自己的名字,被点击时调用
// color :#fff #000 
function printName() {
    // debugger;

    var r = parseInt(Math.random() * 10);//0-9
    var g = parseInt(Math.random() * 10);//0-9
    var b = parseInt(Math.random() * 10);//0-9
    var rgb = r + "" + g + b;
    document.write(`<h1 style="color:#${rgb}">杨杰</h1>`);
}
var hello = 'hello', world = "world";
var unkonw;// undefined;

var helloWorld;



console.log('ok');
// console.lg('not ok')
console.log('ok');