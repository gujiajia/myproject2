//数组
//push /pop /shif /undshif /splice /slice
var arr = [1, 3, 5, 7, 8]
var relset1 = arr.push(2, 4, 6);         // 在数组尾部追加多个元素
//alert(relset1);                   //返回值返回的是新数组的个数
var relset2 = arr.pop;                  //移除尾部的一个元素
//alert(relset2);                   //返回值是被移除的元素
var relset3 = arr.shift();


//splice 和 slice 都是截取函数
/*splice:第一个参数 截取的起始位置
            第二个参数 截取的长度
                第三个参数 新添加的元素（多个） */
var arr2 = [1, 2, 3, 4, 5];
//var relset5 = arr2.splice(1, 2, 3, 4, 5);   //截取掉的元素2,3
//arr =arr2.splice(1, 2, 3, 4, 5);  //1,4,5,3,4,5
//alert(relset5);

/*slice:第一个参数 截取的起始位置
       第二个参数 截取的终止位置，这个位置指的是数组的下标
       slice函数 遵守左闭合右开区间  第二个参数指定的元素不截取*/
var relset6 = arr2.slice(1, 4);       //slice函数不操作数组本身
//alert(relset6);                    //返回值是被截取的元素

//concat、join、sort、reverse、filter.
//concat函数：用来组合数组，返回值是新组合的数组。不操作数组本身
var arr3 = [1, 3, 5];
var arr4 = [2, 3, 6];
//arr3.concat(arr4);
//var relset7=arr3.concat(arr4);  
//alert(relset7);

//join 在元素之间插入新的元素，返回值是新的数组。不操作数组本身
//arr.join('-');
//var relset8=arr3.join('-');
//alert(relset8);

//sort 正排序
var arr5 = [3, 5, 1, 2, 6];
//arr.sort();
//或 arr.sort((a,b)=>a+b);正序/arr.sort((a,b)=>a-b);倒序
//alert(arr5);
//原理
function mySort(a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}
//arr5.sort(mySort);  //函数调用函数，只需要写函数名就行，不加括号
//alert(arr5);

//reverse 倒序
var arr6 = [1, 5, 3, 2, 6];
//arr6.reverse();   //6,2,3,5,1  元素倒序
//alert(arr6);

//filter  过滤
//arr6.filter(function(a){return a>3});
//var relset9=arr6.filter(function(a){return a>3}); //filter返回值return必须加判断
//alert(relset9);


/*var peosons = [{ name: '杨杰', age: 23, gender: '男' }, { name: '刘青霞', age: 24, gender: '女' }];
var obj = { name: '刘青霞', age: 24, gender: '女' }
console.log(obj);

var peosons = [{ name: '杨杰', age: 23, gender: '男' }, { name: '刘青霞', age: 24, gender: '女' }];
var obj = { name: '刘青霞', age: 24, gender: '女' };
var obj = { name: '杨杰', age: 23, gender: '男' };
var obj=peosons.sort((a, b) => b - a);

peospns.sort((a, b) => b - a);
*/

//对象的元素可添加
//1.属性
//2.函数（方法）

//创建对象
/*var obj1 = new Object();  //空对象/使用new运算傅创建对象
//alert(obj1);
var obj1 = new Object();
var PersonFile = new Objct();
PersonFile.name = '严胜';
PersonFile.age = '16';
PersonFile.sex = '男';
PersonFile.Hobby = 'JavaScript';
//alert(PersonFile.sex);      //属性输出方式：点输出方式
//alert(PersonFile['name']);     //中括号输出方式  属性必须加引号

var obj2 = Object();      //new 创建对象，new可以省略
obj2.name = '严胜';
obj2.age = '16';
obj2.sex = '男';
obj2.Hobby = 'JavaScript';
//alert(obj2.Hobby);

var obj3 = {};          //字面量创建对象
obj3.name = '严胜';
obj3.age = '16';
obj3.sex = '男';
obj3.Hobby = 'JavaScript';
//alert(obj3.Hobby);

//封装赋值法    
var obj4 = {
    name: '严胜',
    age: 16,
    sex: '男'     //结束添加不加逗号或者分号，空着
};
alert(obj4.name);

//封装赋值法         //推荐写法 可读性强 代码量少
var obj5 = {
    'name': '严胜',      //属性可以加引号
    'age': 16,
    'sex': '男'
};
alert(obj4.name);
*/
var num = 1;
var myname = '杨杰';
console.log(myname.indexOf('杨'));
myname