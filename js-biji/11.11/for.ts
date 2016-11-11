/** for (var i = 0; i < 5; i++) {
    console.log('我是第' + i + '名');
}
*/
/**for (var i = 0; i < 5; i++) {
    console.log('我是第' + i + '名');
    i += 2;
}
*/

// while 循环
/*var i = 0;
while (i < 5) {
    console.log(i);
    i++;        //手动截止
}
*/

//do while 循环
/*var i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
*/
var age = 18;
switch (age) {          //分支较多用switch，可读性强
    case 18:
        console.log('18');
        break;
    case 17:
        console.log('17');
    case 16:
        console.log('16');
    default:
        console.log('不是18岁');
}


if (age == 17) {

} else if (age == 16) {

} else if (age == 15) {

};