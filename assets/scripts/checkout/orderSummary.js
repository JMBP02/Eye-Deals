import { cart, removeFromCart, updateQuantity, updateDeliveryOption } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption, calculateDeliveryDate } from "../../data/deliveryOption.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import { renderCheckoutHeader } from "./checkoutHeader.js";
import { deliveryOptions } from '../../data/deliveryOption.js';

export function renderOrderSummary() {
  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    const deliveryDate = calculateDeliveryDate(deliveryOption);

    cartSummaryHTML += `
      <div class="orderSummary">
        <div class="deliveryDate">Delivery Date: ${deliveryDate}</div>
        <div class="deleteContainer">
          <img
            class="deleteDesign js-delete-link"
            src="assets/images/icon/delete.png"
            alt=""
            data-product-id="${cartItem.productId}"
          />
        </div>
        <div class="orderDetails">
          <div class="productOrderImageContainer">
            <img
              class="productOrderImage"
              src="${product.image}"
              alt="${product.name}"
            />
          </div>
          <div class="productDetails">
            <div class="nameDesign">${product.name}</div>
            <div class="priceDesign">${(product.priceCents / 100).toFixed(2)} Silver</div>
            <div class="quantityDesign">Quantity: <span class="js-quantity-label-${cartItem.productId}">${cartItem.quantity}</span></div>
            <div class="updateContainer">
              <span class="updateDesign js-update-link link-primary" data-product-id="${cartItem.productId}">Update</span>
              <input class="quantity-input js-quantity-input-${cartItem.productId}" type="number" min="1" style="display: none;" />
              <span class="saveDesign save-quantity-link link-primary js-save-link" data-product-id="${cartItem.productId}" style="display: none;">Save</span>
            </div>
          </div>
          <div class="deliveryOptionContainer">
            <div class="productDetails">Choose a delivery option:</div>
            ${renderDeliveryOptions(product, cartItem)}
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('.jsOrderSummaryContainer').innerHTML = cartSummaryHTML;

  attachEventListeners();
  renderPaymentSummary();
  renderCheckoutHeader()
}

function renderDeliveryOptions(product, cartItem) {
    return deliveryOptions
      .map((deliveryOption) => {
        const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
        const price = deliveryOption.priceCents === 0 ? 'Free' : `${(deliveryOption.priceCents / 100).toFixed(2)} Silver`;
  
        return `
          <div class="dateChoiceContainer">
            <div>
              <input
                class="radioDesign js-delivery-option"
                type="radio"
                name="delivery-option-${product.id}"
                data-product-id="${cartItem.productId}"
                data-delivery-option-id="${deliveryOption.id}"
                ${isChecked ? 'checked' : ''}
              />
            </div>
            <div>
              <div class="shippingDateDesign">${calculateDeliveryDate(deliveryOption)}</div>
              <div class="shippingHandling">${deliveryOption.name}</div>
              <div class="shippingPrice">${price}</div>
            </div>
          </div>
        `;
      })
      .join('');
  }

function attachEventListeners() {
  // Handle quantity updates
  document.querySelectorAll('.js-update-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      const container = document.querySelector(`.js-quantity-input-${productId}`);
      container.style.display = 'inline-block';
      link.style.display = 'none';
      const saveLink = document.querySelector(`.js-save-link[data-product-id="${productId}"]`);
      saveLink.style.display = 'inline-block';
    });
  });

  document.querySelectorAll('.js-save-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      const input = document.querySelector(`.js-quantity-input-${productId}`);
      const newQuantity = parseInt(input.value, 10);

      if (newQuantity > 0) {
        updateQuantity(productId, newQuantity);
        renderOrderSummary();
      }
    });
  });

  // Handle delivery option changes
  document.querySelectorAll('.js-delivery-option').forEach((radio) => {
    radio.addEventListener('change', () => {
      const productId = radio.dataset.productId;
      const deliveryOptionId = radio.dataset.deliveryOptionId;

      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
    });
  });

  // Handle product removal
  document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      renderOrderSummary();
    });
  });
}