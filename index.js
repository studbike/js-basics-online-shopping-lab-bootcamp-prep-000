var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = (Math.floor(Math.random() * 100) + 1)
 var newItem = new Object ({itemName:item, itemPrice:price})
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0){return "Your shopping cart is empty."}
  var result = "In your cart, you have"
  for (var i = 0; i < cart.length; i++){
    var chunk = ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    if (i === cart.length - 1 && cart.length > 1) { result += " and"}
    result += chunk
  }
  result = result.slice(0,-1)
  result += "."
  return result
}

function total() {
  var result = 0
  for (i = 0; i < cart.length; i++){
    result += ${cart[i].itemPrice}
  }
  // write your code here
}

function removeFromCart(item) {
  for (i = 0; i < cart.length; i++)
  if (indexOf(cart[i].itemName) >= 0){
    cart.splice(i, 1)
  }
  else {return "That item is not in your cart."}
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
