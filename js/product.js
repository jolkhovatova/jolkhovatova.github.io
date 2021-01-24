'use strict';

// console.dir(document.images[0].src);
//
// document.body.style.backgroundColor = "red";

const shoppingCart = document.getElementById('Shopping-cart');
const aside = document.querySelector('.aside');

const closeBtn = document.querySelector('.close');



let toggleCart = function toggleCart(){
    aside.classList.toggle('show-sidebar');
}

shoppingCart.addEvantListener('click', toggleCart);


closeBtn.addEventListener('click', function (){
    aside.classList.remove('show-sidebar');
})
