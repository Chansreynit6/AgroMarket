document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: '$10.00', quantity: 50, province: 'Siem Reap', image: 'https://via.placeholder.com/613x433' },
        { id: 2, name: 'Product 2', price: '$20.00', quantity: 30, province: 'Phnom Penh', image: 'https://via.placeholder.com/613x433' },
        { id: 3, name: 'Product 3', price: '$30.00', quantity: 20, province: 'Battambang', image: 'https://via.placeholder.com/613x433' },
        { id: 4, name: 'Product 4', price: '$40.00', quantity: 10, province: 'Kampot', image: 'https://via.placeholder.com/613x433' },
        { id: 5, name: 'Product 5', price: '$50.00', quantity: 60, province: 'Siem Reap', image: 'https://via.placeholder.com/613x433' },
        { id: 6, name: 'Product 6', price: '$60.00', quantity: 80, province: 'Phnom Penh', image: 'https://via.placeholder.com/613x433' },
        { id: 7, name: 'Product 7', price: '$70.00', quantity: 40, province: 'Battambang', image: 'https://via.placeholder.com/613x433' },
        { id: 8, name: 'Product 8', price: '$80.00', quantity: 70, province: 'Kampot', image: 'https://via.placeholder.com/613x433' }
    ];

    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="price">${product.price}</p>
            <p class="quantity">Quantity: ${product.quantity}</p>
            <p class="province">Province: ${product.province}</p>
            <button style>Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
});