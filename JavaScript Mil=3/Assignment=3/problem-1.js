function newPrice(currentPrice, discount) {
    if (typeof (currentPrice) !== "number" || typeof (discount) !== "number" || (0 <= discount && discount>= 100)) {
        return "Invalid";
    }
    const newPrice=currentPrice-(currentPrice*discount)/100;
    return newPrice.toFixed(3);

}
