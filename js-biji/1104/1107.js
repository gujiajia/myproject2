//基本数据类型
//Number sring bool underfine NULL
//引用类型 所有的引用类型都是对象
/*var obj = new Object(); //空对象
var str = [];            //空数组
var Reg = new RegExp();  //正则表达式
var Date = new Date();  //时间
alert(Date);


//运算符
var x = 10;
var y = 5;
var n1 = x+y; //加号运算符
var n2 = x-y; //减号运算符
var n3 = x*y; //乘法运算符
var n4 = x/y; //除法运算符

//++递增+1  --递减-1
//x++;
//y--;
//递增n次 或递减n次
//x +=2;    //x=x+2;
//y -=2;   //y=y-2;
//alert(x);
//alert(y);

//var n5 = x +2;
//var n6 = y -2;
//alert(n5);
//alert(n6);

//x *=3; //自乘
//y /=3; //自除
//alert(x);
//alert(y);

//% 取余  一般用来控制取值范围
//var n7 =10%3;
//alert(n7);


//复杂运算符
/*var num1 = 2; //number 
var num2 = 2;
var bol =true; //布尔 做判断的时候，可以用1和0表示bool类型，也可以用true和false表示
var str1 = "hello";
var str2 = "yello";
if(num1 ==num2) //==数据类型的对比 number,字符串
                //隐式转换 bool类型 true和false
                /*做判断的时候，可以用1和0表示bool类型，也可以用true和alse表示*/
                //true转换成1
                //false转换成0
/*{
    alert("num1等于num2");
    //alert("相等")
}else
{
    alert("num1不等于num2");
    //alert("不等")；
}
*/
/*var num3 = 10;
var num4 = 5;
if(num3 >= num4)
{
    alert("大于");
}else 
{
    alert("小于");
} */ 

/*var num3 = 5;
var num4 = 10;
if(num3 != num4) //!=不等于
{
    alert("大于");
}else 
{
    alert("小于");
}   
*/
/*var num5 = 10;    // ||或 多个条件满足其一  
 var num6 =15;    //num5能被5整除 或者被2整除
if((num5%5==0) || (num5%2==0))  //多个条件取其1
{
    alert(num5);
}else
{
    alert(num6);
}

var num5 = 10;  //&& 与  所有条件都满足
var num6 =15;
if((num5%5==0) && (num5%2==0)) 
{
    alert(num5);
}else
{
    alert(num6);
}*/

//if语句的基本格式
/*if(//判断条件1)
{
    //条件为真
}else
{
    //条件为假
}*/
//switch 分支判断

/*seitch(1)        //1.判断条件 2.变量
{
    case 0:  //case后面跟分支条件
    //执行体
    alert("今天星期1")
    break;          //break 退出switch
    case 1:
    alert("今天星期2")
    break;
    case 2:
    alert("今天星期3")
    break;
}*/

/*var a =2;
var b =1;
switch("hello")
{                       //字符串
    case 'hello':
    alert("hello");
    break;

    case 'hello2':
    alert("hello2");
    break;
}

//i j k
for(var i=0;i<10;i++)  //标准写法
                        //for循环3个条件 1.循环起始位置 2.循环的结束位置 3.循环方式 一般循环方式递增和递减
{
    //执行体
    //alert(i);
}    
//第二种写法
var j=0;
for(;j<10;j++)
{
    alert(j);
}

//for的死循环
/*for(;;)
{
    alert("for");
}

//while循环
while(ture)  //条件真就执行循环，条件假就退出循环
{
    alert("ture");  //死循环
}
while(false)  //条件真就执行循环，条件假就退出循环
{
    alert("ture");  //不执行
}

var j=0;
 {
    j++;
    alert(j);
 }

do{     //先执行，后判断
    alert("do");
}while(true);

//break     遍历：查询，筛选
for(var i=0;i<10;i++)
{
    
    if(i==5)
     {
        //break;       //退出循环
       continue;     //结束当前的这一次循环，继续执行之后的循环
     }   
     alert(i);
}

//阶乘 1！=1； 2！=1*2；3！=1*2*3；n!=1*2*3...*n;
var n = 100; //计算n的阶乘
var num =1;
for(var i=1;i<n;i++)
{
    
    num = num *i;   //i=1; num = (1*1);
                    //i=2; num = (1*1) *2;
                    //i=3; num = 1*1*2*3   
}
alert(num);*/


var n =100;
var num = 0;
for(i=0;i<n;i++)
{
	
    document.write(i+" ");
}
document.write(" <br/> ");
//计算求和
//var num = 0;  //可不加
/*for(var i=0;i<=n;i++)
  {      
    num = num +i;  //简写num +=i;
    document.write(num+" &nbsp; ");                 
}
document.write(" <br/> ");*/
for(var i=0;i<=n;i++)
  {      
    num = num +i++-i;  //简写num +=i;
    document.write(num+" &nbsp; ");                 
}