export let cart;
loadFromStorage()

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'))

  
if(!cart){
    cart = [{
           productId: 'id1',
           quantity: 1,
           deliveryOptionId:'1'
         }, {
           productId: 'id2',
           quantity: 1,
           deliveryOptionId:'2'
         }]
     }
   }

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId){
    let matchingItem;
  
      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem
        }
      })
  
      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`)
      const quantity = Number(quantitySelector.value)
  
      if (matchingItem) {
        matchingItem.quantity += quantity
      } else {
        cart.push({
          productId,
          quantity,
          deliveryOptionId: '1'
        })
      }

      saveToStorage()
}

export function removeFromCart(productId){
  const newCart = []
  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem)
    }
  })

  cart = newCart
  
  saveToStorage()
}

export function updateQuantity(productId, newQuantity){
  let matchingItem;

  cart.forEach((cartItem)=>{
    if (productId === cartItem.productId) {
      matchingItem = cartItem
    }
  })

  matchingItem.quantity = newQuantity

  saveToStorage()
}

export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem
    }
  })

  matchingItem.deliveryOptionId = deliveryOptionId

  saveToStorage()
}