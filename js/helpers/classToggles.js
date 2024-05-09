// classToggles contains functions to toggle classes of input, error and xmlBtn elements
import { errorElem, infoElem, inputElem, xmlBtn } from '../refs.js';

export function showErrorMessage() {
    inputElem.classList.add('invalid');
    showMessage(errorElem);
}
export function hideErrorMessage() {
    inputElem.classList.remove('invalid');
    hideMessage(errorElem);
}

export function showMessage(messageElem = infoElem) {
    messageElem.classList.add('shown');
}
export function hideMessage(messageElem = infoElem) {
    messageElem.classList.remove('shown');
}

export function showDarkBtn() {
    xmlBtn.classList.add('darker-btn');
}
export function hideDarkBtn() {
    xmlBtn.classList.remove('darker-btn');
}
