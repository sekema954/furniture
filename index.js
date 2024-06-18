//menubar 

const menuBar = document.querySelector('.menu-bar');
menuBar.addEventListener('click', ()=>{
    const dropdownCard = document.querySelector('.dropdown-card');
    const showDropdown = document.querySelector('.hideNav');
    menuBar.classList.toggle('change');
    dropdownCard.classList.toggle('changeHeight');
    showDropdown.classList.toggle('showNav');
})




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



// Array of image paths
const imagePaths = [
    "images/gridItem1.png",
    "images/gridItem2.png",
    "images/gridItem3.png"
];

let currentIndex = 0;
const carouselIcons = document.querySelectorAll('.carousel-icon');

// Function to update the carousel items based on currentIndex
function updateCarouselItems() {
    carouselIcons.forEach((icon, index) => {
        const img = icon.querySelector('img');
        img.src = imagePaths[(currentIndex + index) % imagePaths.length];
    });
}

// Function to handle the "Next" button click
function nextImage() {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    updateCarouselItems();
}

