 var price = Number(prompt('请输入商品的单价'));
 var quantity = Number(prompt('请输入购买的数量'));
 var received = Number(prompt('请输入收款金额'));

 if (isNaN(price || quantity || received)) {
     alert('请输入数字');
 }

 function amount(a, b) {
     if ((a * b) >= 500) {
         return (a * b) * 0.8;
     }
     return a * b;
 }

 alert(`
总金额:${amount(price,quantity).toFixed(2)}
找零:${received - amount(price,quantity).toFixed(2)}
`);