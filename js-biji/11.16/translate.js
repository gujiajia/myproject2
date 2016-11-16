数字 + 字符串 = 合并成字符串
var result = 1 + '1';
console.log(result);

//数字+boolean=和
var oneTrue = 1 + true;
var oneFalse = 1 + false;
var zeroTrue = 0 + true;
var zeroFalse = 0 + false;
console.log(`
oneTrue:${oneTrue}         
oneFalse:${oneFalse}
zeroTrue:${zeroTrue}
zeroFalse:${zeroFalse}
`)
console.log(`
1 + true的结果是:${oneTrue}
1 + false的结果是:${oneFalse}
0 + true的结果是:${zeroTrue}
0 + false的结果是:${zeroFalse}
`)

//字符串+boolean=字符串
var str = 'str';
var strTrue = str + true;
var strFalse = str + true;
console.log(`
string+true:${strTrue}
string+True:${strFalse}
`)

//boolean+boolean
var trueTrue = true + true;
var trueFalse = true + false;
var falseFalse = false + false;
console.log(`
true+True:${trueTrue}
true+False:${trueFalse}
false+False:${falseFalse}
`)


查看类型 //typeof 操作符后+空格
var str = 'str';
var num = 1;
var ok = true;
var fn = function() {

};
var obj = {};
var unDefin;
// console.log(str, num, ok, fn, obj, unDefin);
console.log(`       
str:${typeof str}       
num:${typeof num}
ok:${typeof ok}
fn:${typeof fn}
obj:${typeof obj}
unDefin:${typeof unDefin}
`)

//隐式类型转换
var str = 'str';
var num = 1;
var num2 = 2.3;
var ok = true;
var no = false;
console.log(`
str+num:${str+num}
str+ok:${str+ok}
str+no:${str+no}
`)