let loggedIn = false; // This should be managed through proper authentication

function addToCart(productName, price) {
    if (!loggedIn) {
        alert('Please log in to add items to your cart.');
        window.location.href = 'login.html';
        return;
    }

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ productName, price });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    updateCartCount();
    alert(`${productName} has been added to your cart.`);
}

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `<p>${item.productName} - $${item.price.toFixed(2)}</p>`;
            cartContainer.appendChild(itemElement);
        });
    }
}

function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartItems.length;
}

function checkout() {
    if (!loggedIn) {
        alert('Please log in to proceed with checkout.');
        window.location.href = 'login.html';
        return;
    }

    // Proceed with checkout process
    alert('Proceeding to checkout...');
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});


