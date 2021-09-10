const baseDelay = 10000;
ScrollReveal().reveal('.dark-overlay', {
    duration: 2500,
    delay: baseDelay
});

ScrollReveal().reveal('div.right', {
    origin: 'bottom',
    interval: 2000,
    delay: baseDelay + 2000,
    useDelay: 'onload'
});

ScrollReveal().reveal('div.left', {
    origin: 'bottom',
    interval: 2000,
    delay: baseDelay + 3000,
    useDelay: 'onload'
});

ScrollReveal().reveal('h2', {
    viewFactor: 0.2,
    duration: 1500,
    origin: 'left',
    distance: '200px',
    reset: true,
});

ScrollReveal().reveal('.container p', {
    viewFactor: 0.2,
    duration: 1500,
    origin: 'right',
    distance: '200px',
    reset: true,
});

ScrollReveal().reveal('i', {
    duration: 8000,
    viewFactor: 0.2,
    rotate: {
        x: 0,
        y: 900,
        z: 0
    }
});