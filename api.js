// Ambil data dari API dan tampilkan
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        const productContainer = document.querySelector('.product-container');
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImage = document.createElement('img');
            productImage.classList.add('product-image');
            productImage.src = product.image;
            productImage.alt = product.title;

            const title = document.createElement('h2');
            title.textContent = product.title;

            const price = document.createElement('p');
            price.textContent = 'Price: $' + product.price;

            const category = document.createElement('p');
            category.textContent = 'Category: ' + product.category;

            const description = document.createElement('p');
            description.textContent = product.description;

            productCard.appendChild(productImage);
            productCard.appendChild(title);
            productCard.appendChild(price);
            productCard.appendChild(category);
            productCard.appendChild(description);

            productContainer.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error fetching data:', error));