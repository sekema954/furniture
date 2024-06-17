

window.addEventListener('scroll', ()=>{
    const navbar = document.querySelector('.navbar');
    if(window.scrollY >= 70) {
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

//menubar 

const menuBar = document.querySelector('.menu-bar');
menuBar.addEventListener('click', ()=>{
    const dropdownCard = document.querySelector('.dropdown-card');
    const showDropdown = document.querySelector('.hideNav');
    menuBar.classList.toggle('change');
    dropdownCard.classList.toggle('changeHeight');
    showDropdown.classList.toggle('showNav');
})


