// function printName() {
//     for (var i = 0; i < 2000; i++) {
//         var r = parseInt(Math.random() * 10);//0-9
//         var g = parseInt(Math.random() * 10);//0-9
//         var b = parseInt(Math.random() * 10);//0-9
//         var rgb = r + "" + g + b;
//         document.write(`<h1 style=color:#${rgb}>顾佳嘉</h1>`);
//     };
// }
// printName();
// var A = prompt('请输入您的成绩');
// if (isNaN(A)) {
//     alert("请输入数字");
// } else if (A < 60) {
//     alert('不及格');
// } else if (A == 60) {
//     alert('及格');
// } else if (A > 60 && A < 80) {
//     alert('良好');
// } else if (A < 100 && A > 80) {
//     alert('优秀');
// } else if (A == 100) {
//     alert('满分秀');
// }

var price = parseInt(prompt('请输入预算'));
switch (price) {
    case 5000:
        alert('您能购买苹果手机');
        break;
    case 4000:
        alert('您能购买三星手机');
        break;
    case 3000:
        alert('您能购买oppeo');
        break;
    case 2000:
        alert('您能购买小米手机');
        break;
    case 1000:
        alert('您能购买联想手机');
        break;
    default:
        alert('您的预算不够');
}

