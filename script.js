
var typed = new Typed('#element', {
    strings: ['  Web Developer.',],
    typeSpeed: 50,
});

const form = document.getElementById('contactForm');
const response = document.getElementById('formResponse');

form.addEventListener('submit', function (e) {
    e.preventDefault();


    response.textContent = "Thank you! Your message has been sent.";
    form.reset();
});

