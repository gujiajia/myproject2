//类型转化
//toString()转化成字符串,parseInt()转化成数字;parseFloat()转化成小数,Number()转化成数字
var str = 'str';
var num = 1;
var num2 = 2.3;
var ok = true;
var fn = function() {

}
var obj = {};
//数据转化toSring
console.log(`
str:${str.toString()}
num:${num.toString()}
ok:${ok.toString()}
fn:${fn.toString()}
obj:${obj.toString()}
`)

//数据转化成number
str = '123';
strFloat = '23.3'
console.log(`
str:${parseInt(str)+1}
num2:${parseInt(num2)}
strFloat:${parseFloat(strFloat)}
`)

var money = prompt('请用户输入工资')
alert(`

涨工资的结果:${parseInt(money)+1000}
`)
alert(`
money:${typeof money}
`)