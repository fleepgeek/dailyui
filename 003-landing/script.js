document.addEventListener('DOMContentLoaded', () => {
	//Intitial page load animation
	anime.timeline({
		easing: 'easeOutExpo',
		// loop: true,
	})
	.add({
		targets: '.hero-image',
		translateY: [100, 0],
		opacity: [0, 1],
	})
	.add({
		targets: '.navbar',
		translateY: ['-100px', '0'],
		offset: '-=500',
		opacity: [0, 1],
	})
	.add({
		targets: '.navbar h3, .nav-links a, .is-active',
		opacity: [0, 1],
		translateY: [20, 0],
		delay: (el, i) => 100 * i,
		offset: '-=700',
	})
	.add({
		targets: '.intro .content',
		translateY: [50, 0],
		opacity: [0, 1],
		offset: '-=1000',
	})
	.add({
		targets: '.cta',
		translateY: [50, 0],
		opacity: [0, 1],
		delay: (el, i) => 200 * i,
		offset: '-=800',
	})

	var burgerMenu = document.querySelector('.burger-menu')
	var navLinks = document.querySelector('.nav-links')
	burgerMenu.addEventListener('click', () => {
		navLinks.classList.toggle('is-active')
		burgerMenu.classList.toggle('is-active')	
	})
})