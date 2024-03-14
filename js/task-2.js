function getShippingMessage(contrty, price, deliveryFee) {
    return(`Shippinh to ${contrty} will cost ${price+deliveryFee} credits`)
}

console.log(getShippingMessage());