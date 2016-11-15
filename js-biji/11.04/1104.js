/*//弹出警告框
//window指的是浏览器对象
//所有浏览器对象的函数都可以省略window.
alert("hello world");


//document指的是文档对象
document.write("hello world");

*/

//声明变量的方式  1.写一个var 后面是变量名  ，然后等号后面赋值 左赋值规则
var _Ab1 = 5;

//函数(方法)的声明    函数名后面必须加一个小括号
function test()
{                   //函数不会自己去执行，需要我们去调用
	//执行体
	alert(_Ab1);
}

/*
//函数的调用
//test();
//var a = 3;
//全局变量和局部变量
//1.全局变量在函数体外声明的变量  2.全局变量声明的第二种方式：在函数体内不加var
//局部变量在函数体内声明的变量
function test2()
{
	 var a =3;
	
}
test2();

alert(a);*/

var x =1;
//alert(x);
var y =2;


alert("我是外部代码");


