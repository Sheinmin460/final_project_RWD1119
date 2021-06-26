const featuredProducts= document.getElementsByClassName('featured_products')[0];//get parent section

const addProdcts=()=>{
    for (let i = 0; i <12; i++) {
        //creating product item
        const productItemContainer = document.createElement("div");
        productItemContainer.id=productData[i].id;
        productItemContainer.classList.add("card");
    
        const productImage = document.createElement("img");
        productImage.src = productData[i].image;
        productImage.classList.add("card-img-top");
    
        const productBody = document.createElement("div");
        productBody.classList.add("card-body");
    
        const productName = document.createElement("h2");
        productName.innerHTML=productData[i].name;
        productName.classList.add("card-text1")
    
        const productPrice = document.createElement("p")
        productPrice.innerHTML=productData[i].price+"$";
        productPrice.classList.add("card-text2") 
    
        productBody.appendChild(productName);
        productBody.appendChild(productPrice)
        productItemContainer.appendChild(productImage);
        productItemContainer.appendChild(productBody)
        featuredProducts.appendChild(productItemContainer);
    }
}

addProdcts()


