import { deleteBtn, formElem, sortByNameBtn, sortByValueBtn, sortTypes, checkboxElem, inputElem } from './refs.js';
import { validatePair } from './helpers/validator.js';
import { hideDarkBtn, hideErrorMessage, showDarkBtn, showErrorMessage } from './helpers/classToggles.js';
import { getSortedPairs, showPairs } from './helpers/pairsHelper.js';
import { load, save } from './helpers/ls.js';

const PAIRS_KEY = 'pairsData';
const pairs = load(PAIRS_KEY) || [];

let xmlType = checkboxElem.checked;

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

deleteBtn.addEventListener('click', () => {
    pairs.length = 0;
    save(PAIRS_KEY, []);
    showPairs(pairs, xmlType);
});

sortByNameBtn.addEventListener('click', sortHandle);
sortByValueBtn.addEventListener('click', sortHandle);

function sortHandle(e) {
    const sortType = sortTypes[e.target.dataset.jsBtn];
    showPairs(getSortedPairs(pairs, sortType), xmlType);
}
