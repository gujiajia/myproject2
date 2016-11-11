var test = "abcdefgf";
//var position = test.indexOf('f');
// console.log(position);
//var position2 = test.lastIndexOf('f');
// console.log(position2);
// test = test.replace('f', '');
// console.log(test);
//test = test.replace('f', 'F');
// console.log(test);
// test = test.replace(/f/g, 'F');
// console.log(test);
//test = test.toLocaleUpperCase();//toLocaleUpperCase全大写
// console.log(test);              //toLocaleLowerCase全小写
//test = test.slice(5, 8);  //或者position 字符串第一次出现的位置
// console.log(test);
// var persons = [{ name: 'a', age: 23 }, { name: 'b', age: 13 }];
// persons.forEach((persons) => console.log(persons));
// persons.sort((a, b) => a.age - b.age);    //
// console.log(persons);

// var persons1 = [{ name: 'a', age: '23 ' }, { name: 'b', age: '13' }]
// persons1.sort((a, b) => parseInt(a.age) - parseInt(b.age));
// console.log(persons1);
// var persons = [{ name: 'a', age: '23 ' }, { name: 'b', age: '13' }]
// persons2 = persons2.filter(persons2 => persons2.name == 'a');
//console.log(persons2);
// var persons = [{ name: 'a', age: '23 ' }, { name: 'b', age: '13' }]
// var results = persons.every(persons => persons.age >= 18);
// console.log(results);
// var results2 = persons.some(persons => persons.age >= 18);
// console.log(results2);
/*# Date()
* 1970-1-1 0:0:0

new Date();
# 从1970年1月1日 开始到现在上午时间的毫秒数*/
// var taday = new Date().getDate;
// console.log(taday);
// new Date()
/*var taday = new Date();
var sf = taday.getTime();
console.log(sf);*/

/*var time = new Date();
time.setFullYear(2015);
time.setDate(5);
time.setMonth(4);
console.log(time.toLocaleString());
*/
/*var persons = [{ name: 'a', age: 23 }, { name: 'b', age: 13 }]
var results2 = persons.every(persons => persons.age >= 18);
console.log(results2);               
*/
var time = new Date(2015, 1, 11, 11);
console.log(time);