const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// WHATSAPP FORM

const form = document.getElementById('whatsappForm');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;


    const whatsappMessage =
        `Hello, I want IT Services.%0A%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Phone: ${phone}%0A` +
        `Service: ${service}%0A` +
        `Message: ${message}`;


    const whatsappURL = `https://wa.me/919511372508?text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');

});


// HEADER SHADOW ON SCROLL

window.addEventListener('scroll', () => {

    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
        header.style.background = '#ffffff';
    }
    else {
        header.style.background = 'rgba(0,0,0,0.4)';
    }

});
