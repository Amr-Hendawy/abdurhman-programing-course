function calcDelivery(distance) {
    return distance * 5
}
function createOrder(orderPrice,distance){
    let delivery = calcDelivery(distance);
    let totalPrice = orderPrice + delivery;
    return totalPrice
}
console.log(createOrder(200,4));
