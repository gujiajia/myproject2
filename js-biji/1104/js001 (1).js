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


//alert("我是外部代码");


//数据类型
//1.基本数据类型
//Number  string  bool  underfine null
var a1 = 1;     //整数
var a2 = 0.3;   //小数
var a3 = 1/0;   //正无穷
var a4 = -1/0;   //负无穷    
var a5 = 1 + a5;   //NAN 
                    //以上都是number类型   、
                    //typeof 操作符查询数据的类型

//00000010   //8进制070：56
var a6 = 070; //8进制
var a7 = 0xA;  //16进制
//alert(typeof a7);

//bool类型  一种true 一种是false
var a8 = true;
var a9 = false;
//alert(typeof a9);

//string 字符串类型
var a10 = "this is a string";   //引号包含数据就是string
                                //在js里，不区分单双引号
//alert(a10);

//underfine  没有被赋值的变量
var a11;
//alert(typeof a11);

var a12 = null;
//alert(typeof a12);

//a = 3; b =4;  写一个mySort(),执行以后两个变量交换位置
var a =3;
var b =4;
var d =5;

//一个字符占 1个字节
//一个汉字占 4个字节
//1024字节 = 1kb;
//1024kb = 1M;
//1024M = 1G;
//1024G=1TB;
//内存
function mySort()
{
	/*var c = a;//临时存a的值
	a = b;  //b赋值给a  a=4;
	b=c;
	alert( 'a=' + a );
	alert('b=' + b);*/

//无需创建新的变量
	a=a+b;    //将a加b的值赋值给a  a发生了变化  a=7  b=4;
	b=a-b;  //用a-b获得a的值 a=7 b=3;
	a=a-b;  //a =a-b
}
mySort();
