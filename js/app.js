const sizes = document.querySelectorAll('#size-content div');
const img1 = document.querySelector('#img-1');
const img11 = document.querySelector('#img-1-1');
const img2 = document.querySelector('#img-2');
const img22 = document.querySelector('#img-2-2');
const img3 = document.querySelector('#img-3');
const img33 = document.querySelector('#img-3-3');
const img4 = document.querySelector('#img-4');
const img44 = document.querySelector('#img-4-4');
const buy = document.querySelector('#buy');
const buy2 = document.querySelector('#buy-2');
const sto = document.querySelector('#sto');
const sto2 = document.querySelector('#sto-2');
const likeBtn = document.querySelector('#like');
const plusBalance = document.querySelector('#plus-balance');
const balanceBal = document.querySelector('#balance-bal');
const conte2 = document.querySelector('#conte-2');
const conte22 = document.querySelector('#conte-2-2');
const conte = document.querySelector('#conte');
const conte_2 = document.querySelector('#conte-2');
const bonusCod = document.querySelector('#bonus-cod');
const bonusCod2 = document.querySelector('#bonus-cod-2');
const modalWindow = document.querySelector('#modal-window');
const modalWindowClouseBtn = document.querySelector('#modal-window-clouse-btn');
const modalWindowBonusCode = document.querySelector('#modal-window-bonus-code');
const clouseBtnSmsAddToCard = document.querySelector('#clouse-btn-sms-add-to-card');
const loading = document.querySelector('#loading');
const modalInputPayCod = document.querySelector('#modal-input-pay-cod');
const modalInputPayCod2 = document.querySelector('#modal-input-pay-cod-2');
const modalInputPayCod3 = document.querySelector('#modal-input-pay-cod-3');
const modalInputPayCod4 = document.querySelector('#modal-input-pay-cod-4');
const plusPaySto = document.querySelector('#plus-pay-sto');
const plusPayTrista = document.querySelector('#plus-pay-trista');
const plusPayPatsot = document.querySelector('#plus-pay-patsot');
const modalWindowPay = document.querySelector('#modal-window-pay');
const modalWindowClouseBtnPay = document.querySelector('#modal-window-clouse-btn-pay');
const payBtn = document.querySelector('#pay-btn');
const spanSto = document.querySelector('#span-sto');
const spanTrista = document.querySelector('#span-trista');
const spanPatsot = document.querySelector('#span-patsot');
const shopImg = document.querySelector('#shop-img');
const searchBtnSms = document.querySelector('#search-btn-sms');
const trueFalse = document.querySelector('#truefalse');
const smsAddToCard = document.querySelector('#sms-add-to-card');
const imgNike1 = document.querySelector('#img-nike-1');
const imgNike11 = document.querySelector('#img-nike-1-1');
const countShop = document.querySelector('#count-shop');
const modalWindowClouseBtnShop = document.querySelector('#modal-window-clouse-btn-shop');
const modalWindowShop = document.querySelector('#modal-window-shop');

let bonusCode1 = 'FUADI'
let bonusCode2 = 'JAMAL'
let bonusCode3 = 'JSCSS'
let value = parseFloat(balanceBal.textContent);


modalWindowClouseBtn.addEventListener('click', () => {
    modalWindow.style.display = "none";
})

function input(){
    if(modalWindowBonusCode.value == bonusCode1){
        trueFalse.textContent = 'corect';
        conte.style = 'text-decoration: line-through;';
        conte2.textContent = '$100';
    }else if(modalWindowBonusCode.value == bonusCode2){
        trueFalse.textContent = 'corect';
        conte.style = 'text-decoration: line-through;';
        conte2.textContent = '$110';
    }else if(modalWindowBonusCode.value == bonusCode3){
        trueFalse.textContent = 'corect';
        conte.style = 'text-decoration: line-through;';
        conte2.textContent = '$90';
    }else{
        trueFalse.textContent = 'not found';
    }

    if(modalWindowBonusCode.value == ''){
        trueFalse.textContent = '';
    }else{
        trueFalse.style.display = 'block';
    }
}
function input2(){
    if(modalWindowBonusCode.value == bonusCode1){
        trueFalse.textContent = 'corect';
        sto2.style = 'text-decoration: line-through;';
        conte22.textContent = '$100';
    }else if(modalWindowBonusCode.value == bonusCode2){
        trueFalse.textContent = 'corect';
        sto2.style = 'text-decoration: line-through;';
        conte22.textContent = '$110';
    }else if(modalWindowBonusCode.value == bonusCode3){
        trueFalse.textContent = 'corect';
        sto2.style = 'text-decoration: line-through;';
        conte22.textContent = '$90';
    }else{
        trueFalse.textContent = 'not found';
    }

    if(modalWindowBonusCode.value == ''){
        trueFalse.textContent = '';
    }else{
        trueFalse.style.display = 'block';
    }
}


function pay(){
    if(modalInputPayCod.value == ''){
        modalInputPayCod.style = 'border: 1px solid red;';
    }else if(modalInputPayCod2.value == ''){
        modalInputPayCod2.style = 'border: 1px solid red;';
    }else if(modalInputPayCod3.value == ''){
        modalInputPayCod3.style = 'border: 1px solid red;';
    }else if(modalInputPayCod4.value == ''){
        modalInputPayCod4.style = 'border: 1px solid red;';
    }else{
        modalInputPayCod.style = 'border: 1px solid green;';
        modalInputPayCod2.style = 'border: 1px solid green;';
        modalInputPayCod3.style = 'border: 1px solid green;';
        modalInputPayCod4.style = 'border: 1px solid green;';
        modalWindowPay.style.display = "none";
        loading.style.display = "flex";
        setTimeout(() => {
            loading.style.display = "none";
        }, 3000);
        setTimeout(() => {
            balanceBal.textContent = parseFloat(balanceBal.textContent) + parseFloat(modalInputPayCod4.value);
        }, 3000);
        

    }

    

    
    
}
payBtn.addEventListener('click', pay)

searchBtnSms.addEventListener('click', input)
searchBtnSms.addEventListener('click', input2)


shopImg.addEventListener('click', () => {
    modalWindowShop.style.display = "flex";
})
bonusCod.addEventListener('click', () => {
    modalWindow.style.display = "flex";
})
bonusCod2.addEventListener('click', () => {
    modalWindow.style.display = "flex";
})


clouseBtnSmsAddToCard.addEventListener('click', () => {
    smsAddToCard.style.display = "none";
})

modalWindowClouseBtnShop.addEventListener('click', () => {
    modalWindowShop.style.display = "none";
})

modalWindowClouseBtnPay.addEventListener('click', () => {
    modalWindowPay.style.display = "none";
})

buy.addEventListener('click', () => {
    smsAddToCard.style.display = "none";
    setTimeout(() => {
        smsAddToCard.style.display = "flex";
    }, 3000);
    setTimeout(() => {
        smsAddToCard.style.display = "none";
    }, 7000);
    loading.style.display = "flex";
    setTimeout(() => {
        loading.style.display = "none";
    }, 3000);
    setTimeout(() => {
        conte2.textContent = '';
        sto.textContent = '150';
    }, 3000);

    if(value < sto.textContent){ 
        alert('You dont have money');
    }else{
        setTimeout(() => {
            balanceBal.textContent = parseFloat(balanceBal.textContent) - parseFloat(sto.textContent);
        }, 3000);
    }
    countShop.textContent++;
});
buy2.addEventListener('click', () => {
    smsAddToCard.style.display = "none";
    setTimeout(() => {
        smsAddToCard.style.display = "flex";
    }, 3000);
    setTimeout(() => {
        smsAddToCard.style.display = "none";
    }, 7000);
    loading.style.display = "flex";
    setTimeout(() => {
        loading.style.display = "none";
    }, 3000);
    setTimeout(() => {
        conte22.textContent = '';
        sto2.textContent = '150';
    }, 3000);

    if(value < sto2.textContent){ 
        alert('You dont have money');
    }else{
        setTimeout(() => {
            balanceBal.textContent = parseFloat(balanceBal.textContent) - parseFloat(sto2.textContent);
        }, 3000);
    }
    countShop.textContent++;
});


plusBalance.addEventListener('click', () => {
    modalWindowPay.style.display = "flex";
})

plusPaySto.addEventListener('click', () => {
    modalInputPayCod4.value = spanSto.textContent;
})
plusPayTrista.addEventListener('click', () => {
    modalInputPayCod4.value = spanTrista.textContent;
})
plusPayPatsot.addEventListener('click', () => {
    modalInputPayCod4.value = spanPatsot.textContent;
})

img1.addEventListener('click', () => {
    imgNike1.src = '../img/nike-2.webp';
    img1.style = 'background-color: #4f3bff;';
    img2.style = 'background-color: #545454;';
    img3.style = 'background-color: #545454;';
    img4.style = 'background-color: #545454;';
})
img2.addEventListener('click', () => {
    imgNike1.src = '../img/nike-1.jpeg';
    img2.style = 'background-color: #4f3bff;';
    img1.style = 'background-color: #545454;';
    img3.style = 'background-color: #545454;';
    img4.style = 'background-color: #545454;';
})
img3.addEventListener('click', () => {
    imgNike1.src = '../img/nike-3.png';
    img3.style = 'background-color: #4f3bff;';
    img2.style = 'background-color: #545454;';
    img1.style = 'background-color: #545454;';
    img4.style = 'background-color: #545454;';
})
img4.addEventListener('click', () => {
    imgNike1.src = '../img/nike-4.jpeg';
    img4.style = 'background-color: #4f3bff;';
    img2.style = 'background-color: #545454;';
    img3.style = 'background-color: #545454;';
    img1.style = 'background-color: #545454;';
})
img11.addEventListener('click', () => {
    imgNike11.src = '../img/nike-2.webp';
    img11.style = 'background-color: #4f3bff;';
    img22.style = 'background-color: #545454;';
    img33.style = 'background-color: #545454;';
    img44.style = 'background-color: #545454;';
})
img22.addEventListener('click', () => {
    imgNike11.src = '../img/nike-1.jpeg';
    img22.style = 'background-color: #4f3bff;';
    img11.style = 'background-color: #545454;';
    img33.style = 'background-color: #545454;';
    img44.style = 'background-color: #545454;';
})
img33.addEventListener('click', () => {
    imgNike11.src = '../img/nike-3.png';
    img33.style = 'background-color: #4f3bff;';
    img22.style = 'background-color: #545454;';
    img11.style = 'background-color: #545454;';
    img44.style = 'background-color: #545454;';
})
img44.addEventListener('click', () => {
    imgNike11.src = '../img/nike-4.jpeg';
    img44.style = 'background-color: #4f3bff;';
    img22.style = 'background-color: #545454;';
    img33.style = 'background-color: #545454;';
    img11.style = 'background-color: #545454;';
})

sizes.forEach(size => {
    size.addEventListener('click', () => {
        size.style.backgroundColor = size.style.backgroundColor === "blue" ? "white" : "blue";
        size.style.color = size.style.color === "white" ? "blue" : "white";
        
    })
})