function orderDish(dishName, price) {
    var orderList = document.getElementById('orderList');
    var newOrderItem = document.createElement('li');
    newOrderItem.textContent = dishName + ' - $' + price;
    orderList.appendChild(newOrderItem);
}
