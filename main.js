 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    //   breakpoints
    breakpoints:{
        600: {
            slidesPerView: 2
        },
        800: {
            slidesPerView: 3
        }
    }
    });
    // countdown
const countDownDate = new Date("Aug 3, 2024 00:00:00").getTime();
const x = setInterval(() =>{
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
    }
},1000)
// submit form
// let submitButton = document.getElementById('submit');
// let submitName = document.getElementById('name').value;
// let submitEmail = document.getElementById('email').value;
// let submitNumber = document.getElementById('tele').value;
// let submitNameP = document.getElementById('nameP');
// let submitEmailP = document.getElementById('emailP');

// submitButton.addEventListener('click', () => {
//     function greet{
//    if (submitName.length == 0){
//     submitNameP.innerHTML = "input a name"
//    }
// }
// greet()
// })


function submit(){
    let submitButton = document.getElementById('submit');
    let submitName = document.getElementById('name').value;
    let submitEmail = document.getElementById('email').value;
    let submitNumber = document.getElementById('tele').value;
    let submitNameP = document.getElementById('nameP');
    let submitEmailP = document.getElementById('emailP');
    let submitTeleP = document.getElementById('phoneP');

    if (submitName.length == 0){
        submitNameP.innerHTML = "input a name"
} else if(submitEmail.length == 0){
    submitEmailP.innerHTML = "input an email"
}else if(submitNumber.length == 0){
    submitTeleP.innerHTML = "input a phone number"
}
}

// MENU
const open = document.querySelector('.OPEN-');
const close = document.querySelector('.CLOSE-');
const menu = document.querySelector('.nav-section');
open.addEventListener('click', ()=>{
    open.style.opacity = 0
    close.style.opacity = 1;
    close.style.transform = 'rotate(360deg)';
    close.style.transition = '600ms ease';

    menu.style.opacity = "1";
    menu.style.right = "3%";
    menu.style.transition = '1000ms ease';
    menu.style.zIndex = '10';
    
})
close.addEventListener('click', ()=>{
    close.style.opacity = 0;
    open.style.opacity = 1;
    open.style.transform = 'rotate(360deg)';
    open.style.transition = '600ms ease';

    menu.style.right = "-3%";
    menu.style.opacity = "0";
    menu.style.transition = '1000ms ease';
    
})
// close.addEventListener('click', ()=>{
//     open.classList.add('display');
//     close.classList.add('closed');
// })


