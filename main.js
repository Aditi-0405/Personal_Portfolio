
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

console.log(menuIcon)
menuIcon.onclick =() => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200,

});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,  .project-box, .contact form , .skill-item', { origin: 'botton' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

