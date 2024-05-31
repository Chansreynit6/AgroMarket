

let querystring = window.location.search;
let urlParam = new URLSearchParams(querystring);
let idcategory = urlParam.get('categoryid');
console.log(idcategory);

async function displayallproduct(){
let url = `https://clever-beauty-47c85a7410.strapiapp.com/api/products?filters[categroy][categoryId][$eq]=${idcategory}&pagination[pageSize]=25&populate=*`;

try{
    const res = await fetch(url);
    const data = await res.json();

    const products=data.data;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productGrid = document.getElementById('product-grid');
        productGrid.innerHTML += `
        <div class=product-card>
        <a href="../../pages/detail/index.html?productid=${product.attributes.productId}"><img src="${product.attributes.image.data[0].attributes.url}" alt="${product.name}"></a>
        <h2>${product.attributes.name}</h2>
        <p class="price">Price: $ ${product.attributes.price}</p>
        <p class="quantity">Quantity: ${product.attributes.Quantity}</p>
        <p class="province">Province: ${product.attributes.OriginProvince}</p>
        <a class='url-link' href="../../pages/detail/index.html?productid=${product.attributes.productId}">Buy Now</a>
        </div>
        `;
    }
    console.log(data.data);
} catch (error) {
    console.error("Error fetching products:", error);
  }
}
displayallproduct();