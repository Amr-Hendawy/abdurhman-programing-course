function calcDiscount(price){
    return price * .1;
};
function checkout(productPrice){
    let discount = calcDiscount(productPrice);
    let finalPrice = productPrice - discount
    return finalPrice
}
console.log(checkout(500));
