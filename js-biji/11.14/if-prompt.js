// var age=prompt("请您输入您的你年龄");
// if(age<=18)
// {
// alert("您是一个未成年人");
// }
// else if(age<=30)
// {
// alert("您是一个青年人");
// }
// else if(age<=50)
// {
// alert("您是一个中年人");
// }
// else if(age<=70)
// {
// alert("您是一个老年人");
// }
// else if(age>=100)
// {
// alert("恭喜您，长寿了！");
// }

window.onload = function () {
    var age = prompt("请您输入您的你年龄");
    if (isNaN(age)) {
        alert("请输入数字");
    } else
        if (age <= 18) {
            alert("您是一个未成年人");
        }
        else if (age <= 30) {
            alert("您是一个青年人");
        }
        else if (age <= 50) {
            alert("您是一个中年人");
        }
        else if (age <= 70) {
            alert("您是一个老年人");
        }
        else if (age <= 100) {
            alert("恭喜您，长寿了！");
        };
}