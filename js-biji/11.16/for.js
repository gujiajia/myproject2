for (var i = o; i < 5; i++) {
    alert(i)
}
//第一不，先声明初始变量 i=1；
//第二步，判断i 是否满足条件 也就是>= 0,满足条件，执行第三步；
//第三步，执行函数输出alert（i）;
//第四步，i++;
//第五步，去执行第二步，知道判断条件不满足，也就是false；



//对象
var person = {}; //object 
var array = []; //数组对象
var reg = / / //正则表达式对象
var str = ''; //字符串对象


var person = {
    'name': 'jim',
    'age': 20,
    'height': 178
};
// for (var p in person) {
//     alert(p);
// }
with(person) {
    var n = name;
    var a = age;
    var h = height;
}
alert(n + a + h);
// for (var i = 0; i < 10; i++) {
//     if (i == 5) break; //如果是5，就退出循环(整个循环)
//     alert(i);
// }

// for (var i = 0; i < 10; i++) {
//     if (i == 5) break; //如果是5，就退出当前循环(跳过5继续循环)
//     alert(i);
// }