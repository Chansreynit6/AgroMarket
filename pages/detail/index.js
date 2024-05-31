let querystring = window.location.search;
let urlParam = new URLSearchParams(querystring);
let idproduct = urlParam.get('productid');
console.log(idproduct);

async function getSingleProduct(){
    let url=`https://clever-beauty-47c85a7410.strapiapp.com/api/products?filters[productId][$in][0]=${idproduct}&populate=*`;
     try{
        const res = await fetch(url);
        const data = await res.json();
        const products=data.data;
        let display=document.getElementById('display-singleproduct');
        
        for (let i = 0; i < products.length; i++) {
            const product = products[i];         
            let ProductInformation1=`<div class="row mt-4">
           <div class="col-md-6">
             <div id="carouselExample" class="carousel slide">
               <div class="carousel-inner">
                 <div class="carousel-item active">
                   <img src="${product.attributes.image.data[0].attributes.url}" class="d-block w-100" alt="Apple">
                 </div>
               </div>
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Next</span>
               </button>
             </div>
           </div>`;
           let Organic='';
           if(product.attributes.Organic === 'true'){
               Organic='Yes';
           }else{
            Organic='No';
           }
         let  ProductInformation2=`<div class="col-md-6">
           <h2>${product.attributes.name}</h2>
           <p>Price: $${product.attributes.price}</p>
           <p>Quantity: ${product.attributes.Quantity}</p>
           <p>Organic: ${Organic}</p>
           <p>Origin Province: ${product.attributes.OriginProvince}</p> 
           <h4>Product Owner Contact Information</h4>
           <p>Name: PAPA N</p>
           <p>Email: papan@example.com</p>
           <p>Phone: +1234567890</p>
         </div>`;

         console.log(product);
         display.innerHTML+="<div>"+ProductInformation1+ProductInformation2+"</div>";
        }
        
        let card=document.getElementById('Relate-eachcard');
        let url1=`https://clever-beauty-47c85a7410.strapiapp.com/api/products?filters[categroy][categoryId][$eq]=${products[0].attributes.categroy.data.attributes.categoryId}&pagination[pageSize]=4&populate=*`;
        const res1 = await fetch(url1);
        const data1 = await res1.json();
        const products1 = data1.data;
        for (let i = 0; i < products1.length; i++){
        const productsRelate= products1[i];
           card.innerHTML+=`
           <div class="product-card">
           <a href="../../pages/detail/index.html?productid=${productsRelate.attributes.productId}"><img src="${productsRelate.attributes.image.data[0].attributes.url}" alt="Grapes"></a>
                  <h2>${productsRelate.attributes.name}</h2>
                  <p>Price: $ ${productsRelate.attributes.price}</p>
                  <p>Quantity: ${productsRelate.attributes.Quantity}</p>
                  <p>Province: ${productsRelate.attributes.OriginProvince}</p>
                  <a href="../../pages/detail/index.html?productid=${productsRelate.attributes.productId}" class="btn">Add to Cart</a>
              </div>`;
          

          console.log(productsRelate);
        }
     }catch (error) {
        console.error("Error fetching products:", error);
      }
}
getSingleProduct();
// let display=document.getElementById('display-singleproduct');
// display.innerHTML = getSingleProduct();