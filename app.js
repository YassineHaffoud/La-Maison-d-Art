let img__slider = document.getElementsByClassName('img__slider');

let etape = 0;

let nbr__img = img__slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for(let i = 0 ; i < nbr__img ; i++) {
        img__slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})

precedent.addEventListener('click', function() {
    etape--;
    if(etape < 0) {
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})

setInterval(function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
}, 3000)

const titre = document.querySelectorAll('h1 span');
const presentation = document.querySelector('h4');
const button = document.querySelector('button');


window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titre, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(presentation, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .staggerFrom(button, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')

    TL.play();
})