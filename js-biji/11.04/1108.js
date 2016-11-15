//函数定义
/*function test() 	//无参函数的定义
{
	//alert("hello woeld");
}
//test();		//函数自己执行，需要调用

var num1 = 10;
var num2 = 10;
//有参函数
function test1(a, b)		//参数不要var  只需要参数名
//	参数的类型取决于传进来的值
{
	//alert(a+b);
}
//test1(5,5);				//有参函数的调用	

//return   1.返回函数的返回值  2.结束函数的运行
function test2(num1, num2) {
	return num1 + num2;
}
//alert(test2(5,5));	//return返回值一种调用方式





//函数的三种定义方式
//第一种  function 语句方式
/*function test7()
{
	
}
//第二种 函数直接量的方式
var test8 = function ()			//匿名函数
{
	
}
//test8();

//Function构造函数的形式
var test9 = new Function('a','b','return a+b');
//alert(test9(5,5));

//顺序解析 遵守解释执行



//arguments 它是函数内隐藏的对象
function tesr12()
{
	return arguments[0];   //获取我们传进来的参数
}
//alert(test12(2));



//数组
//var a = 1;			//变量
var array1 = []; 	//空数组
var array2 = [1,2,'a',true,false,null];		//存储多个变量。支持多种类型
var array3 = [1,2,3,4,5];  //number数组
var array4 = ["今","天","星","期","二","今天天气真好"];
var array5 = ['a','b','c','d','e',]
//alert(array2.length);   //获取元素的个数
//alert(array4[5]);
for(var i=0;i<array4.length;i++)
{
	//alert(array4[i]);
	document.write(array5[i]);
}*/


/*var arr = [2, 3, 10, 4];
arr.sort((a, b) => a - b);
arr = arr.filter(a => a > 3);
console.log(arr);	//document.write(arr);  //alert(arr);
*/

var arr = [2, 3, 10, 4];
arr.pop();  //删除尾行
arr.push(33);	//在尾行添加33
arr.shift();	//删除首行
arr.unshift(0);		//在首行添加

var arr2 = arr.concat([99, 100]);
var entries = arr.entries();
for (var key in entries) {

}
