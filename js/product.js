console.log('product.js is active')

let productData = [
    {
        name : 'ROADSTAR',
        catagories: 'watch roadstar',
        price : 50,
        image: 'image/products/product (1).jpg',
        id : '1'
    },
    {
        name : 'NIKE',
        catagories: 'men pants nike long',
        price : 20,
        image: 'image/products/product (2).jpg',
        id : '2'
    },
    {
        name : 'PUMA',
        catagories: 'men shirts puma',
        price : 50,
        image: 'image/products/product (3).jpg',
        id : '3'
    },
    {
        name : 'HRX',
        catagories: 'hrxshoes shoes men shoes',
        price : 30,
        image: 'image/products/product (4).jpg',
        id : '4'
    },
    {
        name : 'BENETTON',
        catagories: 'benetton men pants',
        price : 50,
        image: 'image/products/product (5).jpg',
        id : '5'
    },
    {
        name : 'PUMA',
        catagories: 'men shirts puma',
        price : 11,
        image: 'image/products/product (6).jpg',
        id : '6'
    },
    {
        name : 'FOSSIL',
        catagories: 'watch fossil',
        price : 60,
        image: 'image/products/product (7).jpg',
        id : '7'
    },
    {
        name : 'NIKE',
        catagories: 'nike men shoes',
        price : 50,
        image: 'image/products/product (8).jpg',
        id : '8'
    },
    
]


const featuredProducts= document.getElementsByClassName('featured_products')[0];//get parent section

const addProdcts=(arry,length,parentSection)=>{
    for (let i = 0; i < length; i++) {
        //creating product item
        const productItemContainer = document.createElement("div");
        productItemContainer.id=arry[i].id;
        productItemContainer.classList.add("card");
    
        const productImage = document.createElement("img");
        productImage.src = arry[i].image;
        productImage.classList.add("card-img-top");
    
        const productBody = document.createElement("div");
        productBody.classList.add("card-body");
    
        const productName = document.createElement("h2");
        productName.innerHTML=arry[i].name;
        productName.classList.add("card-text1")
    
        const productPrice = document.createElement("p")
        productPrice.innerHTML=arry[i].price+"$";
        productPrice.classList.add("card-text2") 
    
        productBody.appendChild(productName);
        productBody.appendChild(productPrice)
        productItemContainer.appendChild(productImage);
        productItemContainer.appendChild(productBody)
        parentSection.appendChild(productItemContainer);
    }
}

addProdcts(productData,8,featuredProducts)

const inputValue = document.getElementsByClassName(
    'searchProducts'
)[0]

const productContainer = document.getElementsByClassName('product_container')[0];//get parent section

inputValue.addEventListener("keyup",(event) =>{
    productContainer.innerHTML="";
    const searchText = event.target.value.toLowerCase();
    if(searchText.length===0){
        return;        
    };//to check searchbar have any value or not

    const filteredProducts = productData.filter((product) =>{
        return product.catagories.toLowerCase().includes(searchText);
    }); //creat arry to store product which have same value from input value

    const hasProductsToShow = filteredProducts.length>0;//to check have any product to show or not
    if (hasProductsToShow===true){
        addProdcts(filteredProducts,filteredProducts.length,productContainer)
    }
});
