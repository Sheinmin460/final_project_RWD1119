console.log('product.js is active')


const getInputValue = document.getElementsByClassName('searchProducts')[0];

const searchBtn = document.getElementsByClassName('search_btn')[0];

const productContainer = document.getElementsByClassName('product_container')[0];//get parent section


let searchProductFunction =(searchValue)=>{
    productContainer.innerHTML="";
    if(searchValue.length===0){
        return;        
    };//to check searchbar have any value or not
    
    var filteredProducts = productData.filter((product) =>{
        return product.catagories.toLowerCase().includes(searchValue);
    }); //creat arry to store product which have same value from input value

    const hasProductsToShow = filteredProducts.length>0;//to check have any product to show or not
    if (hasProductsToShow==false) {
        const errorHead = document.createElement('h2');
        errorHead.innerText='Search No Result';
        productContainer.appendChild(errorHead);
    }

    if (hasProductsToShow){
        for (let i = 0; i < filteredProducts.length; i++) {
            //creating product item
            const productItemContainer = document.createElement('div');
            productItemContainer.id=filteredProducts[i].id;
            productItemContainer.classList.add('card');
            
            const productImage = document.createElement('img');
            productImage.src = filteredProducts[i].image;
            productImage.classList.add('card-img-top');
            
            const productBody = document.createElement('div');
            productBody.classList.add('card-body');
            
            const productName = document.createElement('h2');
            productName.innerHTML=filteredProducts[i].name;
            productName.classList.add('card-text1')
            
            const productPrice = document.createElement('p')
            productPrice.innerHTML=filteredProducts[i].price+"$";
            productPrice.classList.add('card-text2') 

            const addToCart = document.createElement('div');
            addToCart.classList.add('add_to_cart')

            const addText = document.createElement('a')
            addText.innerText='Add Cart';

            
            productBody.appendChild(productName);
            productBody.appendChild(productPrice);
            addToCart.appendChild(addText)
            productBody.appendChild(addToCart);
            productItemContainer.appendChild(productImage);
            productItemContainer.appendChild(productBody);
            productContainer.appendChild(productItemContainer);

            //store add to cart items in localstorage
            addToCart.addEventListener('click',()=>{
                let inCartNumber=localStorage.getItem('counter');
                inCartNumber=inCartNumber/1
                inCartNumber+=1;
                localStorage.setItem('counter',inCartNumber)

                cartNumber.innerHTML="";

                cartNumber.innerText=inCartNumber;

                localStorage.setItem(`inYourCart${inCartNumber}`,JSON.stringify(filteredProducts[i]))

            })

         }
    }
}

const searchBtnFunction=()=>{
    searchProductFunction(getInputValue.value);
};
searchBtn.addEventListener("click",searchBtnFunction);

// to show catagories bar
const getCatagoriesBtn = document.getElementsByClassName('catagories_btn')[0];

let getCatagoriesContainer = document.getElementsByClassName('catagories_container')[0];

let displayCatagories = () =>{
    getCatagoriesContainer.classList.toggle('catagories_container_active')
}

getCatagoriesBtn.addEventListener('click',displayCatagories)

// to show item when click catagories buttom
//for boy
const boyBtn= document.getElementsByClassName('boy_catagories')[0];
const boy=()=>{
    searchProductFunction('boy');
    getCatagoriesContainer.classList.toggle('catagories_container_active');
};
boyBtn.addEventListener("click",boy);
//for girl
const girlBtn= document.getElementsByClassName('girl_catagories')[0];
const girl=()=>{
    searchProductFunction('girl');
    getCatagoriesContainer.classList.toggle('catagories_container_active');
};
girlBtn.addEventListener("click",girl);
//for shoes
const shoesBtn= document.getElementsByClassName('shoes_catagories')[0];
const shoes=()=>{
    searchProductFunction('shoes');
    getCatagoriesContainer.classList.toggle('catagories_container_active');
};
shoesBtn.addEventListener("click",shoes);
//for watch
const watchBtn= document.getElementsByClassName('watch_catagories')[0];
const watch=()=>{
    searchProductFunction('watch');
    getCatagoriesContainer.classList.toggle('catagories_container_active');
};
watchBtn.addEventListener("click",watch);
//for phone
const phoneBtn= document.getElementsByClassName('phone_catagories')[0];
const phone=()=>{
    searchProductFunction('phone');
    getCatagoriesContainer.classList.toggle('catagories_container_active');
};
phoneBtn.addEventListener("click",phone);
//for tablet
const tabletBtn= document.getElementsByClassName('tablet_catagories')[0];
const tablet=()=>{
    searchProductFunction('tablet');
    getCatagoriesContainer.classList.toggle('catagories_container_active');
};
tabletBtn.addEventListener("click",tablet);
//for pc
const pcBtn= document.getElementsByClassName('pc_catagories')[0];
const pc=()=>{
    searchProductFunction('pc');
    getCatagoriesContainer.classList.toggle('catagories_container_active');
};
pcBtn.addEventListener("click",pc);






