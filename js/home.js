let productData = [
    {
        name : 'ROADSTAR WATCH',
        catagories: 'watch roadstar',
        price : 500,
        image: 'image/products/product (1).jpg',
        id : '1'
    },
    {
        name : 'NIKE PANTS',
        catagories: 'men pants nike long',
        price : 20,
        image: 'image/products/product (2).jpg',
        id : '2'
    },
    {
        name : 'PUMA SHIRT',
        catagories: 'men shirts puma',
        price : 50,
        image: 'image/products/product (3).jpg',
        id : '3'
    },
    {
        name : 'HRX SHOES',
        catagories: 'hrxshoes shoes men shoes',
        price : 30,
        image: 'image/products/product (4).jpg',
        id : '4'
    },
    {
        name : 'BENETTON PANTS',
        catagories: 'benetton men pants',
        price : 50,
        image: 'image/products/product (5).jpg',
        id : '5'
    },
    {
        name : 'PUMA SHIRT',
        catagories: 'men shirts puma',
        price : 11,
        image: 'image/products/product (6).jpg',
        id : '6'
    },
    {
        name : 'FOSSIL WATCH',
        catagories: 'watch fossil',
        price : 300,
        image: 'image/products/product (7).jpg',
        id : '7'
    },
    {
        name : 'NIKE SHOES',
        catagories: 'nike men shoes',
        price : 50,
        image: 'image/products/product (8).jpg',
        id : '8'
    },
    {
        name : 'PUMA SHIRT',
        catagories: 'pumashirt men shirt',
        price : 50,
        image: 'image/products/product (9).jpg',
        id : '9'
    },
    {
        name : 'APPLEWATCH SE',
        catagories: 'samsung smartwatch watch',
        price : 350,
        image: 'image/products/product (10).jpg',
        id : '10'
    },
    {
        name : 'I PHONE 12',
        catagories: 'apple iphone12black phone',
        price : 959,
        image: 'image/products/product (11).png',
        id : '11'
    },
    {
        name : 'I PAD PRO(2020)',
        catagories: 'apple ipadpro tablet',
        price : 1300,
        image: 'image/products/product (12).jpg',
        id : '12'
    },
]

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
