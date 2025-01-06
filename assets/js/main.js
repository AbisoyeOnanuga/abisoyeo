// assets/js/main.js

document.addEventListener('keydown', (event) => {
    const screen = document.querySelector('.console-screen');
    switch (event.key) {
        case 'ArrowUp':
            screen.scrollBy(0, -50); // Scroll up
            break;
        case 'ArrowDown':
            screen.scrollBy(0, 50); // Scroll down
            break;
        case 'ArrowLeft':
            screen.scrollBy(-50, 0); // Scroll left
            break;
        case 'ArrowRight':
            screen.scrollBy(50, 0); // Scroll right
            break;
        case 'Enter':
            // Trigger 'A' button action (e.g., follow links, submit forms)
            const activeElement = document.activeElement;
            if (activeElement && activeElement.tagName === 'A') {
                activeElement.click();
            }
            break;
        case 'Backspace':
            // Trigger 'B' button action (e.g., go back, close modals)
            window.history.back();
            break;
        default:
            break;
    }
});

// Add event listeners for D-pad buttons
document.querySelector('.d-pad-up').addEventListener('click', () => screen.scrollBy(0, -50));
document.querySelector('.d-pad-down').addEventListener('click', () => screen.scrollBy(0, 50));
document.querySelector('.d-pad-left').addEventListener('click', () => screen.scrollBy(-50, 0));
document.querySelector('.d-pad-right').addEventListener('click', () => screen.scrollBy(50, 0));

// Add event listeners for A and B buttons
document.querySelector('.button-a').addEventListener('click', () => {
    const activeElement = document.activeElement;
    if (activeElement && activeElement.tagName === 'A') {
        activeElement.click();
    }
});

document.querySelector('.button-b').addEventListener('click', () => {
    window.history.back();
});
