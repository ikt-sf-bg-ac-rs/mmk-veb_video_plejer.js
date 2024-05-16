let pokretanje = document.querySelector('#pokretanje');
let pauza = document.querySelector('#pauza');
let uvecanje = document.querySelector('#uvecanje');
let umanjenje = document.querySelector('#umanjenje');
let ukljZvuk = document.querySelector('#ukljZvuk');
let iskljZvuk = document.querySelector('#iskljZvuk');

let videoSadrzaj = document.querySelector('#videoSadrzaj');

pokretanje.addEventListener('click', () => {
    videoSadrzaj.play();
});

pauza.addEventListener('click', () => {
    videoSadrzaj.pause();
});

uvecanje.addEventListener('click', () => {

    let a = 500;
    let b = 100;
    
    videoSadrzaj.style.width = `${a}px`;
    videoSadrzaj.style.width += `${b}px`;

    videoSadrzaj.style.width = '110%';
    videoSadrzaj.style.margin = '0 auto 0 auto';

});

umanjenje.addEventListener('click', () => {

    let a = 500;
    let b = 100;

    videoSadrzaj.style.width = `${a}px`;
    videoSadrzaj.style.width -= `${b}px`;

    videoSadrzaj.style.width = '80%';
    videoSadrzaj.style.margin = '0 auto 0 auto';


});

ukljZvuk.addEventListener('click', () => {
    videoSadrzaj.muted = false;
    
});

iskljZvuk.addEventListener('click', () => {
    videoSadrzaj.muted = true;
});

