async function fetchProductsByCategory(categoryId) {
  const url = `https://clever-beauty-47c85a7410.strapiapp.com/api/products?filters[categroy][categoryId][$eq]=${categoryId}&pagination[pageSize]=6&populate=*`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    let cards = "";
    let categoryText = "";
    let button = "";

    const products=data.data;
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
    //   console.log(product);
      categoryText = product.attributes.categroy.data.attributes.name;
      // build card in html
console.log(product.attributes.image.data[0].attributes.url);
      cards += `<div class="col-md-4">
        <div class="card position-relative">
            <img src="${product.attributes.image.data[0].attributes.url}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${product.attributes.name}</h5>
                <p class="card-text">Quantity: ${product.attributes.Quantity}</p>
                <p class="card-text">Price: ${product.attributes.price}</p>
                <p class="card-text">Province: ${product.attributes.OriginProvince
                }</p>
            </div>
        </div>
    </div>`;
      //Build button view all

      button = ` <div class="justify-content-center mt-3 text-center">
               <a href="./pages/category/index.html?categoryid=${product.attributes.categroy.data.attributes.categoryId}" class="btn btn-primary">View All</a>
               </div>`;
    }

    console.log(data.data);
    return `
    <h2 class="mt-4">${categoryText}</h2><div class="row">
    <div class="row">
      ${cards}
    </div>
    ${button}
    `;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

async function loadProducts() {
  const c1 = await fetchProductsByCategory(1);
  console.log(c1);
  const c2 = await fetchProductsByCategory(2);
  const c3 = await fetchProductsByCategory(3);
  const c4 = await fetchProductsByCategory(4);
  const element = document.getElementById("display");
  element.innerHTML = "<div>" + c1 + c2 + c3 + c4 + "</div>";
}

loadProducts();
