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
    var chunk = ` ${cart[i].itemName} at ${cart[i].itemPrice},`
    if (i === cart.length - 1) { result += " and"}
    result += chunk
  }
  result[-1]='.'
  return result
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
