const humburger = document.querySelector('.hamburger-icon');
const mobile = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');
const link = document.querySelector('.mobile-link');

humburger.addEventListener('click', () => {
	mobile.classList.toggle('active');
});

close.addEventListener('click', () => {
	mobile.classList.toggle('active');
});

link.addEventListener('click', () => {
	mobile.classList.toggle('active');
});