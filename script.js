const ENTER_KEYCODE = 13;
const $span = document.querySelector('span');

function clearInputAfterClickButton(element) {
    element.addEventListener('click', (evt) => {
        if (evt.offsetX > element.offsetWidth) {
            element.innerText = '';
        }
    });
}

function applyLimitOfCharacters(element) {
    element.addEventListener('keypress', (evt) => {
        const keyCode = evt.keyCode;

        if (keyCode === ENTER_KEYCODE) {
            evt.preventDefault();
        }

        if (element.innerText.length > 50) {
            evt.preventDefault();
        }
    });
}

function setFocusOnElement(element) {
    element.focus();
}

function applyMoveTextToTheRight(element) {
    element.addEventListener('keypress', () => {
        const antiWidth = -1 *
            parseInt(window.getComputedStyle(element).width);

        if (element.innerText.length > 40) {
            console.log('more than 40 chars', antiWidth);
            element.style['text-indent'] = antiWidth + 'px';
        }
    });
}

clearInputAfterClickButton($span);
applyLimitOfCharacters($span);
// setFocusOnElement($span);
// applyMoveTextToTheRight($span);
