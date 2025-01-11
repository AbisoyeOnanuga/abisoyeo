// assets/js/main.js

document.addEventListener('keydown', (event) => {
    const screen = document.querySelector('.console-screen');
    switch (event.key) {
        case 'ArrowUp':
            screen.scrollBy(0, -50); // Scroll up
            triggerButtonFeedback('.d-pad-up');
            break;
        case 'ArrowDown':
            screen.scrollBy(0, 50); // Scroll down
            triggerButtonFeedback('.d-pad-down');
            break;
        case 'Enter':
            triggerButtonFeedback('.button-a');
            triggerEnterKey();
            break;
        case 'Backspace':
            window.history.back();
            triggerButtonFeedback('.button-b');
            break;
        default:
            break;
    }
});

function triggerButtonFeedback(selector) {
    const button = document.querySelector(selector);
    if (button) {
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 200);
    }
}

function triggerEnterKey() {
    const activeElement = document.activeElement;
    if (activeElement && activeElement.tagName === 'A') {
        activeElement.click();
    }
}

// Add event listeners for D-pad buttons
document.querySelector('.d-pad-up').addEventListener('click', () => {
    const screen = document.querySelector('.console-screen');
    screen.scrollBy(0, -50);
    triggerButtonFeedback('.d-pad-up');
});

document.querySelector('.d-pad-down').addEventListener('click', () => {
    const screen = document.querySelector('.console-screen');
    screen.scrollBy(0, 50);
    triggerButtonFeedback('.d-pad-down');
});

// Add event listeners for Start, Select, A, and B buttons
document.querySelector('.button-start').addEventListener('click', () => {
    triggerEnterKey();
    triggerButtonFeedback('.button-start');
});

document.querySelector('.button-select').addEventListener('click', () => {
    window.history.back();
    triggerButtonFeedback('.button-select');
});

document.querySelector('.button-a').addEventListener('click', () => {
    triggerEnterKey();
    triggerButtonFeedback('.button-a');
});

document.querySelector('.button-b').addEventListener('click', () => {
    window.history.back();
    triggerButtonFeedback('.button-b');
});
