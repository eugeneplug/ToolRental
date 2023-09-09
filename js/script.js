
let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
    offset = offset + 450;
    if (offset > 900) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 450;
    if (offset < 0) {
        offset = 900;
    }
    sliderLine.style.left = -offset + 'px';
});




let burgerMenu = document.querySelector(".burgerMenu");
let burgerContent = document.querySelector(".burgerContent");
let isOpen = false;

function burgerOpen() {
    if (isOpen) {
        burgerMenu.style.height = "40px"; 
        burgerContent.style.display = "none";
    } else {
        burgerMenu.style.height = "120px"; 
        burgerContent.style.display = "block";
    }
    
    isOpen = !isOpen; 
}

let adaptiveMapMenu = document.querySelector(".adaptiveMapMenu")
let mapinfo = document.querySelector(".mapinfo")

function closemapinfo() {
    mapinfo.style.display = "none"
    adaptiveMapMenu.style.display = "block"
}



