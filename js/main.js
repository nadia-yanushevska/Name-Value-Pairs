import { deleteBtn, formElem, sortByNameBtn, sortByValueBtn, sortTypes, checkboxElem, outputElem, copyLink, delErrorElem } from './refs.js';
import { validatePair } from './helpers/validator.js';
import { hideDarkBtn, hideErrorMessage, hideMessage, showDarkBtn, showErrorMessage, showMessage } from './helpers/classToggles.js';
import { getSelectedId, getSortedPairs, showPairs } from './helpers/pairsHelper.js';
import { load, save } from './helpers/ls.js';
import { showTempMessage } from './helpers/messageHelper.js';

const PAIRS_KEY = 'pairsData';
let pairs = load(PAIRS_KEY) || [];

let xmlType = checkboxElem.checked;
if (xmlType) showDarkBtn();

document.addEventListener('DOMContentLoaded', () => {
    showPairs(pairs, xmlType);
});

formElem.addEventListener('submit', e => {
    e.preventDefault();
    const pair = e.target.elements.pairInput.value;

    if (validatePair(pair)) {
        hideErrorMessage();

        pairs.push(validatePair(pair));
        save(PAIRS_KEY, pairs);

        showPairs(pairs, xmlType);

        e.target.reset();
    } else {
        showErrorMessage();
    }
});

checkboxElem.addEventListener('change', e => {
    xmlType = e.target.checked;
    if (xmlType) {
        showDarkBtn();
    } else {
        hideDarkBtn();
    }
    showPairs(pairs, xmlType);
});

copyLink.addEventListener('click', e => {
    e.preventDefault();

    navigator.clipboard.writeText(outputElem.textContent).then(() => {
        showTempMessage();
    });
});

deleteBtn.addEventListener('click', e => {
    if (xmlType) {
        showTempMessage(delErrorElem);
        return;
    }
    const id = getSelectedId();
    if (id === -1) {
        showTempMessage(delErrorElem);
    } else {
        pairs = pairs.filter((_, idx) => idx !== id);
        save(PAIRS_KEY, pairs);
        showPairs(pairs);
    }
});

sortByNameBtn.addEventListener('click', sortHandle);
sortByValueBtn.addEventListener('click', sortHandle);

function sortHandle(e) {
    const sortType = sortTypes[e.target.dataset.jsBtn];
    showPairs(getSortedPairs(pairs, sortType), xmlType);
}
