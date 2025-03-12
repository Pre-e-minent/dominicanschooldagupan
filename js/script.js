let menu = document.querySelector('#menu-icon');
let topmenu = document.querySelector('.topmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    topmenu.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2400,
    reset: true
});

sr.reveal('.home-txt span', {delay:400});
sr.reveal('.school-img img', {delay:500, origin: 'top'});
sr.reveal('.home-txt h5', {delay:600, origin: 'bottom'});
sr.reveal('.home-txt h1', {delay:700, origin: 'bottom'});
sr.reveal('.home-txt p', {delay:800, origin: 'top'});
sr.reveal('.playvir-btn', {delay:900, origin: 'top'});