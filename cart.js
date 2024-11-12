let cartItems = [
    { id: 1, name: 'Floral Maxi Dress', price: 1500, quantity: 1, image: 'img/Products/f1.jpg' },
    { id: 2, name: 'Guitar', price: 3000, quantity: 1, image: 'img/Products/g1.jpg' },
    { id: 3, name: 'Necklace', price: 800, quantity: 1, image: 'img/Products/n1.jpg' },
];

function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total');

    cartContainer.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>Price: ₹${item.price}</p>
            <p>Quantity: <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)"></p>
            <button onclick="removeItem(${item.id})">Remove</button>
        `;

        cartContainer.appendChild(itemDiv);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.innerText = '₹' + totalPrice;
}

function updateQuantity(id, quantity) {
    const item = cartItems.find(item => item.id === id);
    if (item) {
        item.quantity = quantity;
    }
    renderCart();
}

function removeItem(id) {
    cartItems = cartItems.filter(item => item.id !== id);
    renderCart();
}

function updatePrice(months) {
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const emiPrice = totalPrice / months;
    document.getElementById('total').innerText = `₹${emiPrice} / month for ${months} months`;
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

