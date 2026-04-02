// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Select all your layers
    const sky = document.querySelector('.layer-sky');
    const mountains = document.querySelector('.layer-mountains');
    const trees = document.querySelector('.layer-trees');
    const bear = document.querySelector('.layer-bear');
    const ui = document.querySelector('.layer-ui');

    // Listen for the user scrolling
    window.addEventListener('scroll', () => {
        // Get how far down the user has scrolled in pixels
        let scrollValue = window.scrollY;

        // Apply the scroll value multiplied by a "speed" factor
        // 0.0 is completely static, 1.0 moves exactly with the scroll
        sky.style.transform = `translateY(${scrollValue * 0.1}px)`;       // Slowest
        mountains.style.transform = `translateY(${scrollValue * 0.3}px)`; 
        trees.style.transform = `translateY(${scrollValue * 0.6}px)`;     
        bear.style.transform = `translateY(${scrollValue * 0.8}px)`;      // Faster
        ui.style.transform = `translateY(${scrollValue * 1.1}px)`;        // Fastest (pops out)
    });
});