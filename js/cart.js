console.log('cart.js is active')

const getParentTableContainer=document.getElementsByClassName('cart_container')[0];

const table =document.getElementsByClassName('table')[0];

const tbody =document.getElementsByClassName('table_body')[0];

localStorage.setItem('totalPrice',0)

const showAddToCart = () =>{
    if (productsInCart.length!== 0) {
        const tr =document.createElement('tr');
        tr.classList.add('table_head_container');
        const th1=document.createElement('th');
        th1.innerText='No';
        const th2=document.createElement('th');
        th2.innerText='Image';
        const th3=document.createElement('th');
        th3.innerText='Product Name';
        const th4=document.createElement('th');
        th4.innerText='Price';
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tbody.appendChild(tr);
        table.appendChild(tbody);
        getParentTableContainer.appendChild(table);
    }
}
//calculate total price
const calculateTotalPrice=()=>{
    for (let i = 0; i < productsInCart.length; i++) {
        const oldTotalPrice = localStorage.getItem('totalPrice')/1;
        const currentPrice = productsInCart[i].price/1;
        const newTotalPrice = oldTotalPrice+currentPrice;
        localStorage.setItem('totalPrice',newTotalPrice);
    }
    let totalPrice=localStorage.getItem('totalPrice');

    const tr =document.createElement('tr');

    const td1=document.createElement('td');
    const td2=document.createElement('td');
        
    const tdTotal=document.createElement('td');
    tdTotal.innerText="TotalPrice";
    tdTotal.classList.add('table_total');

    const td4=document.createElement('td');
    td4.innerText=`${totalPrice}$`;
    td4.classList.add('table_total');

    const buyNowBtn = document.createElement('button');
    buyNowBtn.innerText='Buy Now';
    buyNowBtn.classList.add('buy_now_btn');
    
    td1.appendChild(buyNowBtn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(tdTotal);
    tr.appendChild(td4);
    tbody.appendChild(tr);

    
}

let productsInCart = []

//show cartnumber at menu bar
const cartNumber = document.getElementsByClassName('cart_number')[0];
let inCartNumber=localStorage.getItem('counter');
cartNumber.innerText=inCartNumber;
let counter = (inCartNumber/1)+1;


const onLoadCart=()=>{
    getParentTableContainer.innerHTML="";
    for (let i = 1;i<counter; i++) {
        let getProducts = localStorage.getItem(`inYourCart${i}`);
        getProductsObject= JSON.parse(getProducts);
        productsInCart.push(getProductsObject);
    }
    showAddToCart()//add incartItem to table
    for (let i = 0; i < productsInCart.length; i++) {
        const tr =document.createElement('tr');

        const td1=document.createElement('td');
        td1.innerText=i+1;
        td1.classList.add('table_data1');

        const td2=document.createElement('td');
        const img=document.createElement('img')
        img.src=productsInCart[i].image;
        td2.appendChild(img);
        td2.classList.add('table_data2');

        const td3=document.createElement('td');
        td3.innerText=productsInCart[i].name;
        td3.classList.add('table_data3');

        const td4=document.createElement('td');
        td4.innerText=`${productsInCart[i].price}$`;
        td4.classList.add('table_data4');

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tbody.appendChild(tr);
    }
    calculateTotalPrice();
}

onLoadCart();

const paymentBtn = document.getElementsByClassName('buy_now_btn')[0];

paymentBtn.addEventListener('click',()=>{
    location.href='payment.html';
});

