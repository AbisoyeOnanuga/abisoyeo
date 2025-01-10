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
document.querySelector('.d-pad-up').addEventListener('click', () => {
    const screen = document.querySelector('.console-screen');
    screen.scrollBy(0, -50);
});

document.querySelector('.d-pad-down').addEventListener('click', () => {
    const screen = document.querySelector('.console-screen');
    screen.scrollBy(0, 50);
});

// Add event listeners for Start, Select, A, and B buttons
document.querySelector('.button-start').addEventListener('click', () => {
    const activeElement = document.activeElement;
    if (activeElement && activeElement.tagName === 'A') {
        activeElement.click();
    }
});

document.querySelector('.button-select').addEventListener('click', () => {
    window.history.back();
});

document.querySelector('.button-a').addEventListener('click', () => {
    const activeElement = document.activeElement;
    if (activeElement && activeElement.tagName === 'A') {
        activeElement.click();
    }
});

document.querySelector('.button-b').addEventListener('click', () => {
    window.history.back();
});
