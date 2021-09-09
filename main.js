//     sr.reveal('.dark-overlay', {
//       duration: 2500,
//       delay: 1000
//     });

//     sr.reveal('#chat1, #chat2, #chat3, #chat4, #chat5, #chat6, #chat7', {
//       viewFactor: 0,
//       duration: 2000,
//       origin: 'top',
//       distance: '20px',
//     }, 4000)

//     sr.reveal('#chat1, #chat3 ,#chat5, #chat7', {
//       origin: 'top',
//     }, 4000)

//     sr.reveal('#chat2, #chat4, #chat6', {
//       origin: 'bottom',
//     }, 4000)
	ScrollReveal().reveal('div.right', {
		origin: 'bottom',
		interval: 2000,
		delay: 3000,
		useDelay: 'onload'
	})
	ScrollReveal().reveal('div.left', {
		origin: 'bottom',
		interval: 2000,
		delay: 4000,
		useDelay: 'onload'
	})
	
	ScrollReveal().reveal('h2', {
		viewFactor: 0.2,
		duration: 1500,
		origin: 'left',
		distance: '200px',
		reset: true,
	})
	
	ScrollReveal().reveal('.container p', {
		viewFactor: 0.2,
		duration: 1500,
		origin: 'right',
		distance: '200px',
		reset: true,
	})
	
	ScrollReveal().reveal('i', {
		duration: 8000,
		viewFactor: 0.2,
		rotate: {
			x: 0,
			y: 900,
			z: 0
		}
	})
;