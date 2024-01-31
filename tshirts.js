// script.js
function addToCart(button) {
    const item = button.parentElement;
    const itemName = item.dataset.name;
    const itemPrice = parseFloat(item.dataset.price);

    // Create a new list item for the cart
    const cartItem = document.createElement("li");
    cartItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;

    // Add the item to the cart
    document.getElementById("cart-items").appendChild(cartItem);

    // Update the total price
    updateCartTotal(itemPrice);
}

function updateCartTotal(price) {
    const cartTotalElement = document.getElementById("cart-total");
    const currentTotal = parseFloat(cartTotalElement.textContent);
    const newTotal = currentTotal + price;

    cartTotalElement.textContent = newTotal.toFixed(2);
}
