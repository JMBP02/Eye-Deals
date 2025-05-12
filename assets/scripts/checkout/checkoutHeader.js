import { cart } from '../../data/cart.js'; // Import the cart data from the cart.js file

export function renderCheckoutHeader() {
    let cartQuantity = 0;

    // Calculate the total quantity of items in the cart
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    const cartQuantityDisplay = cartQuantity > 99 ? '99+' : cartQuantity; // Display '99+' if quantity exceeds 99

    const checkoutHeaderHTML = `
    <a href="EyeDeals.html">
        <div class="imageContainer">
          <img class="imageLogo" src="assets/images/logo/EyeLogo.png" alt="Logo" />
          <img class="logoName" src="assets/images/logo/EyeName.png" alt="Logo Name" />
        </div>
    </a>

    <div class="middleContainer">
        <div>Checkout</div>
        <div>&#40;</div>
        <div class="cartQuantityDesign">${cartQuantityDisplay}</div>
        <div>&#41;</div>
    </div>
    `;

    // Render the header HTML
    document.querySelector('.jsCheckoutHeader').innerHTML = checkoutHeaderHTML;
}

// Call the function to render the header
renderCheckoutHeader();