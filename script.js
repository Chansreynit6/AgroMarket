async function fet() {
    const url = 'https://clever-beauty-47c85a7410.strapiapp.com/api/products?pagination[page]=1&pagination[pageSize]=34&populate=*';

    console.log('Fetching data...');
    try {
        const res = await fetch(url);
        const data = await res.json();
        let card = document.getElementById('display');
        card.innerHTML = ''; // Clear existing content

        const productsByCategory = {};

        // Group products by category
        for (let i = 0; i < data.data.length; i++) {
            const product = data.data[i];
            const category = product.attributes.categroy.data.attributes.name;

            if (!productsByCategory[category]) {
                productsByCategory[category] = [];
            }
            productsByCategory[category].push(product);
        }

        // Display up to 6 products per category
        for (const category in productsByCategory) {
            const products = productsByCategory[category].slice(0, 6);

            card.innerHTML += `<h2 class="mt-4">${category}</h2><div class="row">`;

            for (const product of products) {
                const name = product.attributes.name; // Assuming there's a name attribute
                const quantity = product.attributes.Quantity; // Assuming there's a quantity attribute
                const price = product.attributes.price; // Assuming there's a price attribute
                const province = product.attributes.province; // Assuming there's a province attribute
                const imageUrl = product.attributes.image.data[0].attributes.url; // Assuming there's an image attribute

                card.innerHTML += `
                    <div class="col-md-4">
                        <div class="card position-relative">
                            <img src="${imageUrl}" class="card-img-top" alt="${name}">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text">Quantity: ${quantity} kg</p>
                                <p class="card-text">Price: $${price} per kg</p>
                                <p class="card-text">Province: ${province}</p>
                            </div>
                        </div>
                    </div>`;
            }

            card.innerHTML += `
                </div>
                <div class="justify-content-center mt-3 text-center">
                    <a href="#" class="btn btn-primary">View All</a>
                </div>`;
        }

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fet();
