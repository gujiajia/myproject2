// var trueTrue = true && true;
// var trueFalse = ture && false;
// var falseFalse = false && false;
// console.log(`
// trueTrue:$(trueTrue)
// trueFalse:$(trueFalse)
// falseFalse:$(falseFalse)
// `)


var age = 18;
var isYoung = age < 19 && age > 17;
console.log(`isYoung:${isYoung}`);
if (isYoung) {
    console.log('18岁')
}

//!的使用  取反
var ok = true;
var str = 'str';
console.log(`
ok:${ok}
!ok:${!ok}
!！str=>boolean;
!!str:${!!str}
`)

//isNaN() 函数使用
/*[isNaN的使用](http://www.baidu.com)*/
console.log(`
'3f':${isNaN('3f')}
33:${isNaN(33)}
'23':${isNaN('23')}
`)

console.log(`
trueTrue:${true||true}
trueFalse:${true||false}
falseFalse:${false||false}
`)
var age = 17;
if (age > 18 || age < 18) {
    console.log(age);
}


var a = 1;
var b = 2;
console.log(a + '+' + b + '=' + (a + b));
console.log(`${a}+${b}=${a+b}`);
var age = 19;
var isYoung = age < 18 ? 'to young to simple' : age;
console.log(isYoung);
//?  对>'to young to simple'  错>19