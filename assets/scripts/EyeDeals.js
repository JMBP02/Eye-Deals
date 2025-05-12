import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "../scripts/utils/money.js";

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
        <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}"
            />
          </div>

          <div class='product-name-container'>
            <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="assets/images/ratings/rating-${product.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">${product.rating.count}</div>
          </div>

          <div class='product-price-container'>
            <div class="product-price">${formatCurrency(product.priceCents)} Silver</div>
          </div>
          
          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option> 
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class='product-quantity-added-container'>
            <div class="added-to-cart js-added-to-cart-${product.id}">
                <img src="assets/images/icon/checkbox-circle-fill.png" />
                Added
            </div>
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">Add to Cart</button>
        </div>
        `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

const addedMessageTimeouts = {};

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const { productId } = button.dataset;

    // Call addToCart to update the cart
    addToCart(productId);

    // Show the "Added to Cart" message
    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
    addedMessage.classList.add('added-to-cart-visible');

    const previousTimeoutId = addedMessageTimeouts[productId];

    if (previousTimeoutId) {
      clearTimeout(previousTimeoutId);
    }

    const timeoutId = setTimeout(() => {
      addedMessage.classList.remove('added-to-cart-visible');
    }, 2000);

    addedMessageTimeouts[productId] = timeoutId;

    // Update the cart quantity display
    updateCartQuantity();
  });
});

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const cartQuantityDisplay = cartQuantity > 99 ? '99+' : cartQuantity;
  document.querySelector('.jsCartQuantity').innerHTML = cartQuantityDisplay;
}

// Initialize the cart quantity display
updateCartQuantity();
