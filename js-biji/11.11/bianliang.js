/*var num = 1;        //数字类型
var str = 's';      //字符串类型
var isok = true;    //bool类型  true=0  flase=0
var nothing = null;    //不是个数

/*var age=20;       //如果条件为真是执行trun
if (age>18){
    console.log('成年');
}else if(age == 18){
    console.log('今年成年');
}else{
    console.log('未成年');     //如果条件为真是执行false
}//打印'今年成年'
*/
//for 循环  数组
/*var person = ['小明', '小白'];
for (var i = 0; i < person.length; i++) {
    // console.log(person);
    // console.log(person[i]);
}
/*var person = ['小明', '小白'];
var i=0;
for (;;i++){
    console.log(person[i]);
}//for 的二个条件必须填（数组长度），不写就死循环，系统就崩了，内存满了。/第二个条件是判断要不要进行下一次循环
*/
/*var person = ['小明', '小白'];
//var i = 0;
for (var i = 0; i < person.length;) {
    // console.log(person);
    // console.log(person[i]);
    i++;
}
var person = ['小明', '小白'];
//var i = 0;
for (var i = 0; i < person.length;) {
    // console.log(person);
    // console.log(person[i]);
    if (i > 2) {
        break;  //跳出循环
    }
}
var person = ['小明', '小白'];
//var i = 0;
for (var i = 0; i < person.length;) {
    if (i == 0) continue;   //  跳出第一次循环进入第二次循环
    // console.log(person);
    // console.log(person[i]);
    i++;
}

//while 循环
//var i = 0;
while (i < person.length) {
    // console.log(person);
    // console.log(person[i]);
    i++;
}
//var i = 0;
/*do {
    // console.log(person[i]);
    i++;
    //  } while (i < person.length)
}*/
for (var i = 0; i < 5; i++) {
    console.log('我是第' + i + '名');
}
