

window.addEventListener('scroll', ()=>{
    const navbar = document.querySelector('.navbar');
    if(window.scrollY >= 100) {
        navbar.classList.add("navFixed");
    } else {
        navbar.classList.remove("navFixed");
    }

});



