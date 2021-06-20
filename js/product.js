console.log('product.js is active')

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
        name : 'APPLE WATCH SE',
        catagories: 'apple smartwatch watch',
        price : 500,
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
    {
        name : 'MAC BOOK PRO',
        catagories: 'apple macbookpro laptop pc ',
        price : 1449,
        image: 'image/products/product (13).jpg',
        id : '13'
    },
    {
        name : 'SAMSUNG A12',
        catagories: 'samsung a12 phone',
        price : 239,
        image: 'image/products/product (14).jpg',
        id : '14'
    },
    {
        name : 'GIRL BLACK T-SHIRT',
        catagories: 'Girl black Tshirt tops',
        price : 3,
        image: 'image/products/product (15).jpg',
        id : '15'
    },
    {
        name : 'LANTERN SLEEVES BLOUSE',
        catagories: 'Girl RENE Lantern Sleeves Blouse tops',
        price : 30,
        image: 'image/products/product (16).jpg',
        id : '16'
    },
    {
        name : 'PEACEMINIMOUSE T-SHIRT',
        catagories: 'Girl peaceminimouse t-shirt Tshirt tops ',
        price : 8,
        image: 'image/products/product (17).jpg',
        id : '17'
    },
    {
        name : 'PLATED SKIRT',
        catagories: 'Girl pink platedskirt ',
        price : 10,
        image: 'image/products/product (18).jpg',
        id : '18'
    },
    {
        name : 'H&M T-SHIRT',
        catagories: 'boy h&m t-shirt tshirt',
        price : 25,
        image: 'image/products/product (19).jpg',
        id : '19'
    },
    {
        name : 'H&M HEEL',
        catagories: 'girl heel h&m ',
        price : 40,
        image: 'image/products/product (20).jpg',
        id : '20'
    },
    {
        name : 'OFFSHOLDER BLOUSE',
        catagories: 'Girl RENE Blouse tops offsholderblouse',
        price : 30,
        image: 'image/products/product (21).jpg',
        id : '21'
    },
    {
        name : 'FLOWER TYPE LACE SKIRTS',
        catagories: 'Girl RENE Mattias Flower type lace Skirts',
        price : 36,
        image: 'image/products/product (22).jpg',
        id : '22'
    },
]

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
    if (hasProductsToShow){
        for (let i = 0; i < filteredProducts.length; i++) {
            //creating product item
            const productItemContainer = document.createElement("div");
            productItemContainer.id=filteredProducts[i].id;
            productItemContainer.classList.add("card");
            
            const productImage = document.createElement("img");
            productImage.src = filteredProducts[i].image;
            productImage.classList.add("card-img-top");
            
            const productBody = document.createElement("div");
            productBody.classList.add("card-body");
            
            const productName = document.createElement("h2");
            productName.innerHTML=filteredProducts[i].name;
            productName.classList.add("card-text1")
            
            const productPrice = document.createElement("p")
            productPrice.innerHTML=filteredProducts[i].price+"$";
            productPrice.classList.add("card-text2") 
            
            productBody.appendChild(productName);
            productBody.appendChild(productPrice)
            productItemContainer.appendChild(productImage);
            productItemContainer.appendChild(productBody)
            productContainer.appendChild(productItemContainer);
         }
        
    }
});
