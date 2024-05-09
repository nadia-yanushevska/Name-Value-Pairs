// classToggles contains functions to toggle classes of input, error and xmlBtn elements
import { errorElem, inputElem, xmlBtn } from '../refs.js';

export function showErrorMessage() {
    inputElem.classList.add('invalid');
    errorElem.classList.add('shown');
}
export function hideErrorMessage() {
    inputElem.classList.remove('invalid');
    errorElem.classList.remove('shown');
}

export function showDarkBtn() {
    xmlBtn.classList.add('darker-btn');
}
export function hideDarkBtn() {
    xmlBtn.classList.remove('darker-btn');
}
