// var arr = [];
// arr = new Array(1);  //数组长度  一般不会用
// arr = new Array(1, 2, 3, 4);  //...items：不尽长度的数组
// console.log(arr);  //1,2,3,4

var arr = ['第一名'];
arr.push('小明', '小红');    //可添加多个
console.log(arr);

//forEach  遍历数值

// arr.forEach((person, index, array) => {
//     console.log(person, index, array);
// }) 
// arr = arr.filter((person, index, array) => {
//     return person == '小红';
// })
// console.log(arr);
var index = arr.indexOf('小黄');
console.log('小黄在数组的位置' + index);
