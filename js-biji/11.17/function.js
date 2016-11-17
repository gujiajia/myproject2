var price = parseFloat(prompt('请输入商品单价'));
var quantity = parseInt(prompt('请输入购买数量'));
var received = parseFloat(prompt('请输入收款金额'));

function amount(a, b) {
    if ((a * b) >= 500) {
        return (a * b) * 0.8;
    }
    return a * b;
}
alert(`
总金额:${amount(price,quantity)}
找零:${received - amount(price,quantity)}
`);