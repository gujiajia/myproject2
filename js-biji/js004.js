//数组  
//push、pop shift、unshift splice、slice  
var arr = [1,3,5,7,8];  
var relset1 = arr.push(2,4,6);     //在数组尾部追加多个元素
                                  //返回值是新数组的个数

var relset2 = arr.pop();   //移除尾部的一个元素
				           //返回值是被移除的元素

var relset3 = arr.shift();       //移除数组头部的一个元素
//alert(relset3);                  //返回值是被移除的元素

var relset4 = arr.unshift('h','l','o');      //从头部添加多个元素
//alert(relset4);                 //返回值是新数组的个数

//splice 和 slice  都是截取函数
/*splice:第一个参数 截取的起始位置
          第二个参数 截取的长度
          第三个参数  新添加的元素(多个)*/
var arr2 = [1,2,3,4,5];  
//var relset5 = arr2.splice(1,2,3,4,5);    //截取掉的元素
//alert(relset5);                 

//slice:第一个参数 截取的起始位置
//第二个参数 截取的终止位置，这个位置指的是数组的下标
//slice函数 遵守左闭右开区间  第二个参数指定的元素不截取
var relset6 = arr2.slice(1,4);    //slice函数不操作数组本身
                                  //返回值是被截取的元素
//alert(relset6);

//concat、join、sort、reverse、filter
//concat函数:用来组合数组，返回值是新组合的数组。不操作数组本身
var arr3 = [1,3,5];
var arr4 = [2,4,6];
var relset7 =arr3.concat(arr4);    
//alert(relset7);

//join  在元素之间插入新的元素 返回值是新的数组，不操作数组本身
var relset8 =arr3.join('-');
//alert(relset8);

//sort 正排序
var arr5 = [3,5,1,2,6,10];
//arr5.sort((a,b)=>b-a);
function mySort(a,b)
{
	if(a<b)
	{
		return 1;
	}else if(a>b)
	{
		return -1;
	}else
	{
		return 0;
	}
}
arr5.sort(mySort);   //函数调用函数，只需要写函数名就行了
//alert(arr5);
//reverse 倒序
var arr6 = [1,5,3,2,6];
//arr6.reverse();    //6 2 3 5 1
//alert(arr6);

//filter  过滤
var relset9 =arr6.filter(function(a){return a>3});  
alert(relset9);

