let slides = document.querySelectorAll(".slide");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let currentSlide = 1;

prev.onclick = function () {

    if (currentSlide === 1) {
        currentSlide = slides.length;
    } else {
        currentSlide--;
    }

    changeSlide();
}

next.onclick = function () {

    if (currentSlide === slides.length) {
        currentSlide = 1;
    } else {
        currentSlide++;
    }

    changeSlide();
}

function changeSlide() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    slides[currentSlide - 1].classList.add("active");

    let imgURL = slides[currentSlide - 1].getAttribute("style");
    let extractedURL = imgURL.slice(18).slice(0, -1);

    document.querySelector("body").style.backgroundImage = extractedURL;
    
    document.querySelector("body").style.animationName = "expand";
    
    setTimeout(() => {
        document.querySelector("body").style.animationName = "";
    }, 800);

};