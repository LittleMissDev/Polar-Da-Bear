// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const layers = Array.from(document.querySelectorAll('.parallax-layer'));
    let latestScrollY = 0;
    let ticking = false;

    function updateParallax() {
        layers.forEach(layer => {
            const speed = parseFloat(layer.dataset.speed) || 0;
            layer.style.transform = `translate3d(0, ${latestScrollY * speed}px, 0)`;
        });
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        latestScrollY = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
});