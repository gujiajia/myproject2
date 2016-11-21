//for 循环
//固定格式
// for()        //三个参数 1.循环起始位置
//2.循环结束
//循环方式：一般两种方式，递增和递减

// for (var i = 0; i < 100; i++) {
//     if (i % 2 > 0) {
//         document.write(i + ' ');
//     }
// }

// //数组
// var a1 = 1;
// var a2 = 2;
// var arry1 = new Array(); //使用new创建一个数组
// var arry2 = []; //数字面量创建一个数组
// //数组用来存多个元素（元素也可以是任何数据类型）
// var arry3 = [1, true, {}, null];
// alert(arry3);

// //取数组中的值
// alert(arry3.length); //length 操作符 求数组长度
// //通过数组下标取值  //长度从0 开始，到length-1


//遍历数组
// alert(arry[1]);
// for (var i = 0; i < arry3.length; i++) {
//     alert(arry3[i]);
// }

//DOM 节点树
//父节点 子节点 同级节点
//节点类型：元素节点 文本节点 属性节点
//<div id='test'>测试DIV</div>
//<div>元素节点
//测试DIV 文本节点
//id ='test' 属性节点
//获取特定id的元素节点

//onload事件,延迟加载 ，当页面加载完成后执行
window.onload = function() {
    alert(document.getElementById('test')); //object HTMLDivElement
}

//获取标签队列  返回数组 
//PS:通过id来获取节点
alert(document.getElementsByTagName('p')); //object HTNL
//获取队列中第一个元素的值
//PS:通过标签名来获取节点
alert(docunment.getElementsByTagName('p').length); //object
//获取同一name的所有节点  是个数组Nodelist
//ps:通过name 来获取节点 跟name 属性配套使用
alert(docunment.getElementsByName('submit').length); //在没有name属性的标签中使用Name属性，属于非法，部分ie浏览器不支持

//节点属性
alert(document.getElementById('test').tagName); //打印标签名
alert(document.getElementById('test').innerHTML); //标签名
alert(document.getElementById('test').id); //id 获取id 值
alert(document.getElementById('test').title); //title  获取标题名（title）的值
alert(document.getElementById('test').style); //获取css样式
alert(document.getElementById('test').style.color); //获取css样式

//赋值节点属性
document.getElementById('test').innerHTML = 'hello world'; //打印标签名
// document.getElementById('test').id = 'HELLO'; //标签名
document.getElementById('test').title = 'hello'; //title  获取标题名（title）的值
document.getElementById('test').style.color = 'green'; //获取css样式