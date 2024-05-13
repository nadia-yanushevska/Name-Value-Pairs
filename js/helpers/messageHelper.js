// messageHelper contains function to show message for 1.5 seconds
import { infoElem } from '../refs.js';
import { hideMessage, showMessage } from './classToggles.js';

export function showTempMessage(messageElem = infoElem) {
    showMessage(messageElem);
    setTimeout(() => {
        hideMessage(messageElem);
    }, 1500);
}
