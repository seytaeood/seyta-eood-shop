document.addEventListener('DOMContentLoaded', () => {
    fetch('/data/products.json')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('products');
            data.products.forEach(product => {
                productsContainer.innerHTML += `
                    <div class="product">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p class="price">${product.price.toFixed(2)} лв.</p>
                        <button class="snipcart-add-item"
                            data-item-id="${product.id}"
                            data-item-price="${product.price}"
                            data-item-url="/"
                            data-item-name="${product.name}"
                            data-item-image="${product.image}">
                            Добави в количка
                        </button>
                    </div>
                `;
            });
        });
});