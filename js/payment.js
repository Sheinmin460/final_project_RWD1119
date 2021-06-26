console.log('payment.js is active')

//for card Number is 16 or Not
const visaInput=document.getElementsByClassName('visa_card_input')[0];

const errorVaildContainer=document.getElementsByClassName('vaild_error')[0];

let span = document.createElement('span');

let span1 = document.createElement('span');

const monthInput=document.getElementsByClassName('month_input')[0];

monthInput.oninput = function () {
    if (this.value.length > 2)
        this.value = this.value.slice(0,2); 
}//refrance from "http://jsfiddle.net/f8jmB/1/"

const yearInput=document.getElementsByClassName('year_input')[0];

yearInput.oninput = function () {
    if (this.value.length > 4)
        this.value = this.value.slice(0,4); 
}

const  cvcInput=document.getElementsByClassName('cvc_input')[0];

cvcInput.oninput = function () {
    if (this.value.length > 3)
        this.value = this.value.slice(0,3); 
}

let checkVisa=false;

let creatVisaNumberArry=()=>{
    visaNumberArry = visaInput.value.split('').map(Number);
}


const loadingPage=document.getElementsByClassName('loading')[0];


let checkVisaNumber=()=>{
    creatVisaNumberArry();
    let oddPlace = [];
    let evenPlace =[];
    let oddPlaceValue=0;
    let evenPlaceValue=0;
    span.innerText='';
    span1.innerText='';
    for (let i = 1; i < visaNumberArry.length; i+=2) {
        oddPlace.push(visaNumberArry[i])
    }
    for (let i = 0; i < oddPlace.length; i++) {
        oddPlaceValue+=oddPlace[i];
    }
    for (let i = 0; i < visaNumberArry.length; i+=2) {
        evenPlace.push(visaNumberArry[i])
    }
    for (let i = 0; i < evenPlace.length; i++) {

        evenPlaceCrossValue=evenPlace[i]*2;

        if(evenPlaceCrossValue>9){
            evenPlaceCrossValue=evenPlaceCrossValue-9;
        }
        evenPlaceValue+=evenPlaceCrossValue;
    }
    totalValue=oddPlaceValue+evenPlaceValue;

    console.log(totalValue)
    if(visaInputValue.length<14){
        span.innerText='';
        span.innerText='';
        span.innerText='Card Number Have at least 14';
        span.classList.add('vaild_error_message');
        errorVaildContainer.appendChild(span); 
    }else if (totalValue%10!==0||visaInputValue.length==15){
        span.innerText='Your Card Number Is Not Valid';
        span.classList.add('vaild_error_message');
        errorVaildContainer.appendChild(span);
    }else if(totalValue%10===0&&visaInputValue.length>14){
        span1.innerText='Your Card Number Is Valid';
        span1.classList.add( 'vaild_message' );
        errorVaildContainer.appendChild(span1);
        checkVisa=true;
    }
}
//checkVisaNumber is based on luhn Algorithm or Mod10 Algorithm

const cartNumber = document.getElementsByClassName('cart_number')[0];
let inCartNumber=localStorage.getItem('counter');
cartNumber.innerText=inCartNumber;
let counter = (inCartNumber/1)+1;
//show cartnmber at menu bar

const paymentForm = document.getElementsByClassName('container')[0]

const allCheckAndPay=()=>{
    checkVisaNumber()
    if(monthInput.value>12){
        span.innerText='';
        span1.innerText='';
        span.innerText='Only 12 months in a year!';
        span.classList.add('vaild_error_message');
        errorVaildContainer.appendChild(span);
    }else if(cvcInput.value<100){
        span.innerText='';
        span1.innerText='';
        span.innerText='CVC number must have 3';
        span.classList.add('vaild_error_message');
        errorVaildContainer.appendChild(span);
    }else if(checkVisa){
        paymentForm.style.display='none';
        console.log(checkVisa);//show message when visa number is vaild
        loadingPage.classList.toggle('loading_active');
    }else{
        span.innerText='';
        span1.innerText='';
        span.innerText='Something went wrong!!';
        span.classList.add('vaild_error_message');
        errorVaildContainer.appendChild(span);
    } 
}



visaInput.addEventListener('change',checkVisaNumber);
visaInput.addEventListener('input',(event)=>{
    visaInputValue=event.target.value;
    if(visaInputValue.length>16){
        visaInputValue = visaInputValue.slice(0,16);
        visaInput.value=visaInputValue;
    }
})//limit card number length to 16

//get total price
const totalPrice=localStorage.getItem('totalPrice');

const payButton =document.getElementsByClassName('pay_btn')[0];

payButton.addEventListener('click',allCheckAndPay);

payButton.innerText=`Pay  ${totalPrice}$`;

const getHolderName=document.getElementsByClassName('card_holder_input')[0];

const paymentReceipt=document.getElementsByClassName('payment_receipt')[0];

let goBackFunction=()=>{
    let inCartNumber=localStorage.getItem('counter');
    for (let i = 1;i<inCartNumber+1; i++) {
        localStorage.removeItem(`inYourCart${i}`);
    }
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('counter');
    location.href='home_page.html';
    
    let buyNowBtn=document.getElementsByClassName('buy_now_btn')[0];
    buyNowBtn.classList.toggle('buy_now_btn_active');
}

const endAnimate=()=>{
    let holderName=getHolderName.value;
    paymentReceipt.classList.toggle('payment_receipt_active');

    let div =document.createElement('div');
    div.classList.add('receipt_container');

    let h1 =document.createElement('h1');
    h1.classList.add('receipt_head');
    h1.innerText=`Dear   ${holderName},`

    let p =document.createElement('p');
    p.classList.add('receipt_paragraph');
    p.innerText=`We received ${totalPrice}$`;

    let h2 =document.createElement('h2');
    h2.classList.add('receipt_paragraph');
    h2.innerText=`Best Regards`;

    let btnGoBack=document.createElement('button');
    btnGoBack.classList.add('removeLocalData');
    btnGoBack.innerText='Go Back To Home';

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(h2);
    div.appendChild(btnGoBack);
    paymentReceipt.appendChild(div);

    let Btn =document.getElementsByClassName('removeLocalData')[0];
    Btn.classList.toggle('removeLocalData_active')

    loadingPage.classList.toggle('loading_active');

    let goBackBtn=document.getElementsByClassName('removeLocalData')[0];
    goBackBtn.addEventListener('click',goBackFunction);
};

const progressTime=document.getElementsByClassName('progress_heading')[0];

progressTime.addEventListener('animationend',endAnimate)


