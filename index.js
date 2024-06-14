

window.addEventListener('scroll', ()=>{
    const navbar = document.querySelector('.navbar');
    if(window.scrollY >= 100) {
        navbar.classList.add("navFixed");
    } else {
        navbar.classList.remove("navFixed");
    }

});


//radio el

const radioBtn1 = document.querySelector(".radio1");
const radioBtn2 = document.querySelector(".radio2");
const radioBtn3 = document.querySelector(".radio3");

radioBtn1.addEventListener('click', ()=>{
    radioBtn1.classList.add("active-radio");
    radioBtn2.classList.remove('active-radio');
    radioBtn3.classList.remove('active-radio');
});

radioBtn2.addEventListener('click', ()=>{
    radioBtn2.classList.add("active-radio");
    radioBtn1.classList.remove('active-radio');
    radioBtn3.classList.remove('active-radio');
});

radioBtn3.addEventListener('click', ()=>{
    radioBtn3.classList.add("active-radio");
    radioBtn1.classList.remove('active-radio');
    radioBtn2.classList.remove('active-radio');
});


