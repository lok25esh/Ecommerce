let searchEl=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchEl.classList.toggle('active');
    cartEl.classList.remove('active');
    loginEl.classList.remove('active');
    menuEl.classList.remove('active');
}
let cartEl=document.querySelector('.shopping-cart');
document.querySelector('#icon3').onclick =()=>{
    searchEl.classList.remove('active');
    cartEl.classList.toggle('active');
    loginEl.classList.remove('active');
    menuEl.classList.remove('active');
}
let loginEl=document.querySelector('.login');
document.querySelector('#icon4').onclick = ()=>{
    searchEl.classList.remove('active');
    cartEl.classList.remove('active');
    loginEl.classList.toggle('active');
    menuEl.classList.remove('active');
}

let menuEl=document.querySelector('.navbar');
document.querySelector('#icon1').onclick=()=>{
    searchEl.classList.remove('active');
    cartEl.classList.remove('active');
    loginEl.classList.remove('active');
    menuEl.classList.toggle('active');
}

// DOUBT
window.onscroll=()=>{
    searchEl.classList.remove('active');
    cartEl.classList.remove('active');
    loginEl.classList.remove('active');
    menuEl.classList.remove('active');
}


/*Swiper slider section */
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        diableInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });

//   review slider script 
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        diableInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });