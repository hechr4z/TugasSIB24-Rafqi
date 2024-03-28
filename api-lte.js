// Ambil data dari API dan tampilkan
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        const contentSection = document.querySelector('.content .container-fluid .row');

        const productsPerPage = 6; // Jumlah produk per halaman
        let currentPage = 1; // Halaman saat ini

        // Mengelompokkan produk ke dalam array sesuai dengan jumlah produk per halaman
        const groupedProducts = [];
        for (let i = 0; i < products.length; i += productsPerPage) {
            groupedProducts.push(products.slice(i, i + productsPerPage));
        }

        // Fungsi untuk menampilkan produk berdasarkan halaman saat ini
        function displayProducts(page) {
            // Menghapus produk yang ada sebelumnya
            contentSection.innerHTML = '';

            // Menampilkan produk sesuai dengan halaman yang diberikan
            groupedProducts[page - 1].forEach(product => {
                const col = document.createElement('div');
                col.classList.add('col-12', 'col-md-4', 'd-flex', 'align-items-stretch', 'flex-column');

                const card = document.createElement('div');
                card.classList.add('card', 'bg-light', 'd-flex', 'flex-fill');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body', 'pt-0');

                const productImage = document.createElement('img');
                productImage.src = product.image;
                productImage.alt = product.title;
                productImage.classList.add('product-image', 'img-fluid');
                productImage.style.width = '300px'; // Menyesuaikan lebar gambar
                productImage.style.height = '400px'; // Menyesuaikan tinggi gambar

                const title = document.createElement('h2');
                title.classList.add('lead');
                title.innerHTML = `<b>${product.title}</b>`;

                const price = document.createElement('p');
                price.classList.add('text-muted', 'text-sm');
                price.innerHTML = `<b>Price: </b>$${product.price}`;

                const productDescription = document.createElement('p');
                const shortDescription = product.description.split(' ').slice(0, 10).join(' '); // Mengambil 10 kata pertama
                productDescription.textContent = shortDescription + '...'; // Menambahkan "..." setelah 10 kata
                productDescription.style.marginTop = '10px'; // Menambahkan jarak antara deskripsi dan harga

                cardBody.appendChild(productImage);
                cardBody.appendChild(title);
                cardBody.appendChild(price);
                cardBody.appendChild(productDescription);

                card.appendChild(cardBody);

                col.appendChild(card);
                contentSection.appendChild(col);
            });
        }

        // Fungsi untuk menampilkan navigasi halaman
        function renderPagination() {
            const paginationContainer = document.querySelector('.pagination');
            paginationContainer.innerHTML = '';

            // Menambahkan tombol untuk setiap halaman
            for (let i = 1; i <= groupedProducts.length; i++) {
                const pageItem = document.createElement('li');
                pageItem.classList.add('page-item');
                if (i === currentPage) {
                    pageItem.classList.add('active');
                }
                const pageLink = document.createElement('a');
                pageLink.classList.add('page-link');
                pageLink.href = '#';
                pageLink.textContent = i;
                pageLink.addEventListener('click', () => {
                    currentPage = i;
                    displayProducts(currentPage);
                    renderPagination();
                });
                pageItem.appendChild(pageLink);
                paginationContainer.appendChild(pageItem);
            }
        }

        // Menampilkan produk dan navigasi halaman saat pertama kali
        displayProducts(currentPage);
        renderPagination();
    })
    .catch(error => console.error('Error fetching data:', error));
