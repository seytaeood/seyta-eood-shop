
const products = [
    { id: 1, name: { bg: "Прах за пране Persil", en: "Laundry Detergent Persil" }, price: 18.99, currency: "BGN", category: "Прахове", image: "product1.jpg" },
    { id: 2, name: { bg: "Препарат за съдове Fairy", en: "Dishwashing Liquid Fairy" }, price: 4.50, currency: "BGN", category: "Съдове", image: "product2.jpg" }
];

let currentLang = 'bg';
let currentCurrency = 'BGN';

function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const name = p.name[currentLang];
        const price = convertCurrency(p.price);
        card.innerHTML = `
            <img src="${p.image}" alt="${name}" width="100%">
            <h4>${name}</h4>
            <p>${price} ${currentCurrency}</p>
        `;
        grid.appendChild(card);
    });
}

function convertCurrency(value) {
    if (currentCurrency === 'EUR') return (value / 1.95).toFixed(2);
    return value.toFixed(2);
}

function changeLang(lang) {
    currentLang = lang;
    renderProducts();
}

function changeCurrency(currency) {
    currentCurrency = currency;
    renderProducts();
}

window.onload = renderProducts;
