// Product Data
const products = [
    { id: 1, name: 'Green Polo', price: 20, category: "Men\'s Clothing", image: 'https://cdnb.lystit.com/photos/7472-2014/01/20/polo-ralph-lauren-green-classic-polo-shirt-product-1-16861888-4-553066625-normal.jpeg' },
    { id: 2, name: 'Red Dress', price: 35, category: "Women\'s Clothing", image: 'https://akm-img-a-in.tosshub.com/indiatoday/styles/photo_slider_753x543/public/images/photogallery/201808/sam_6_IT_1534490860251.PNG?gict_YI.U.VOB4SWLJYxs2B2zGbpVWSr' },
    { id: 3, name: 'Kids T-shirt', price: 15, category: "Kids\' Clothing", image: 'https://ae01.alicdn.com/kf/HTB1oieFaiMnBKNjSZFzq6A_qVXal/New-2018-children-t-shirts-Popular-Hero-Print-Kids-Baby-Boy-Tops-Short-Sleeve-T-Shirt.jpg' },
    { id: 4, name: 'Blue Jeans', price: 40, category: "Men\'s Clothing", image: 'https://static.iwmbuzz.com/wp-content/uploads/2021/06/mahesh-babu-prabhas-ram-charans-coolest-casual-denim-jeans-t-shirt-swag-to-copy-3.jpeg' },
    { id: 5, name: 'Summer Hat', price: 25, category: "Accessories", image: 'https://ae01.alicdn.com/kf/HTB1HSvxj2BNTKJjSszbq6yFrFXal/Sun-Hats-sun-visor-hat-Sun-Hats-for-women-with-big-heads-beach-hat-summer-UV.jpg' },
    { id: 6, name: 'Leather Jacket', price: 120, category: "Men\'s Clothing", image: 'https://img.mensxp.com/media/content/2022/Jan/Ram-Charan-Put-Together-3-Kurta-Pajama-Looks-For-A-Wedding-2_61e16d917aa99.jpeg' },
    { id: 7, name: 'Evening Gown', price: 150, category: "Women\'s Clothing", image: 'https://femina.wwmindia.com/content/2019/aug/alia-bhatt-dresses-shine-on.jpg' },
    { id: 8, name: 'Kids Sneakers', price: 30, category: "Kids\' Clothing", image: 'https://ae01.alicdn.com/kf/HTB1yqsxbvc3T1VjSZPfq6AWHXXa9/Summer-Kids-Sneakers-for-Girls-Pink-Children-Girls-Sport-Running-Shoes-Mesh-Breathable-Kid-School-Shoes.jpg' },
    { id: 9, name: 'Kids Sneakers', price: 30, category: "Accessories", image: 'https://ounass-sa.atgcdn.ae/contentful/b3xlytuyfm3e/5eBTEA5YilyV4rXYBf4CfL/6cf7784f92b76f82bd5ed01647b8ef58/Women_Accessories_DSK_PLP_Banner_.jpg?q=70'}
 ];

// Ensure DOM is fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    displayProducts(products);
});

// Render Products
function displayProducts(productList) {
    const productListElement = document.getElementById('product-list');
    productListElement.innerHTML = ''; // Clear the existing products

    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product', 'col-md-4', 'mb-4');
        productCard.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Price: $${product.price}</p>
                    <p class="card-text">Category: ${product.category}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productListElement.appendChild(productCard);
    });
}

// Filter Products
function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Search Products
function searchProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const searchedProducts = products.filter(product => product.name.toLowerCase().includes(query));
    displayProducts(searchedProducts);
}

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        let cartDetails = 'Cart Items:\n';
        cart.forEach(item => {
            cartDetails += `${item.name} - $${item.price} x ${item.quantity}\n`;
        });
        alert(cartDetails);
    }
}
