document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `Product ID: ${item.id}, Price: $${item.price}, Quantity: ${item.quantity}`;
            cartItemsDiv.appendChild(itemDiv);
        });
    }
});
