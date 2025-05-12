import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOption.js";
import { formatCurrency } from '../utils/money.js';

export function renderPaymentSummary() {
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    let cartQuantity = 0;

    // Check if the cart is empty
    if (cart.length === 0) {
        const emptyCartHTML = `
            <div class="orderSummaryDesign">Order Summary</div>
            <div class="itemsContainer">
                <div class="boldText">Items(0):</div>
                <div>0 Silver</div>
            </div>
            <div class="shippingContainer">
                <div class="boldText">Shipping & Handling:</div>
                <div>0 Silver</div>
            </div>
            <div class="shortLineContainer">
                <img
                  class="lineDesign"
                  src="assets/images/icon/long line gray.png"
                  alt=""
                />
            </div>
            <div class="beforeTaxContainer">
                <div class="boldText">Total before tax:</div>
                <div>0 Silver</div>
            </div>
            <div class="taxContainer">
                <div class="boldText">Estimated tax (0%):</div>
                <div>0 Silver</div>
            </div>
            <div class="longLineContainer">
                <img
                  class="longLineDesign"
                  src="assets/images/icon/long line gray.png"
                  alt=""
                />
            </div>
            <div class="totalContainer">
                <div class="boldTextTotal">Order total:</div>
                <div class="boldTextTotal">0 Silver</div>
            </div>
            <div class="buttonContainer">
                <button class="buttonDesign" disabled>Place your order</button>
            </div>
        `;
        document.querySelector('.jsPaymentSummary').innerHTML = emptyCartHTML;
        return;
    }

    // Calculate totals if the cart is not empty
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;

        cartQuantity += cartItem.quantity;
    });

    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1; // 10% tax
    const totalCents = totalBeforeTaxCents + taxCents;

    const formatPrice = (priceCents) => {
        if (priceCents === 0) {
            return "Free";
        }
        return `${formatCurrency(priceCents)} Silver`;
    };

    const paymentSummaryHTML = `
        <div class="orderSummaryDesign">Order Summary</div>
        <div class="itemsContainer">
            <div class="boldText">Items(${cartQuantity}):</div>
            <div>${formatPrice(productPriceCents)}</div>
        </div>
        <div class="shippingContainer">
            <div class="boldText">Shipping & Handling:</div>
            <div>${formatPrice(shippingPriceCents)}</div>
        </div>
        <div class="shortLineContainer">
            <img
              class="lineDesign"
              src="assets/images/icon/long line gray.png"
              alt=""
            />
        </div>
        <div class="beforeTaxContainer">
            <div class="boldText">Total before tax:</div>
            <div>${formatPrice(totalBeforeTaxCents)}</div>
        </div>
        <div class="taxContainer">
            <div class="boldText">Estimated tax (10%):</div>
            <div>${formatPrice(taxCents)}</div>
        </div>
        <div class="longLineContainer">
            <img
              class="longLineDesign"
              src="assets/images/icon/long line gray.png"
              alt=""
            />
        </div>
        <div class="totalContainer">
            <div class="boldTextTotal">Order total:</div>
            <div class="boldTextTotal">${formatPrice(totalCents)}</div>
        </div>
        <div class="buttonContainer">
            <button class="buttonDesign">Place your order</button>
        </div>
    `;
    document.querySelector('.jsPaymentSummary').innerHTML = paymentSummaryHTML;
}