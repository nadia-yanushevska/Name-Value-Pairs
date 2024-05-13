// pairsHelper contains function to display pairs in outputElem, format pairs and sort pairs
import { outputElem } from '../refs.js';
import { xmlFormatPairs } from './xmlFormatter.js';

const INPUT_NODE_NAME = 'INPUT';

export function showPairs(pairArray, xmlType = false) {
    if (!pairArray.length) outputElem.innerHTML = '<p class="placeholder">The list is empty</p>';
    else if (xmlType) outputElem.textContent = xmlFormatPairs(pairArray);
    else outputElem.innerHTML = formatPairs(pairArray);
}

function formatPairs(pairArray) {
    return pairArray.map((pair, idx) => pairWrapper(pair, idx, formatPair)).join('\n');
}

function formatPair(pairObject) {
    return `${pairObject.name} = ${pairObject.value}`;
}

export function pairWrapper(pairObject, id, pairFormatter) {
    return `<input class="radio-input" type="radio" id="${id}" name="selectPair" value="${pairObject.name}-${pairObject.value}"><label class="radio-label" for="${id}">${pairFormatter(
        pairObject
    )}</label>`;
}

export function getSortedPairs(pairArray, key) {
    return pairArray.toSorted((firstPair, secondPair) => firstPair[key].localeCompare(secondPair[key]));
}

export function getSelectedId() {
    return [...outputElem.childNodes].filter(child => child.nodeName === INPUT_NODE_NAME).findIndex(elem => elem.checked);
}
