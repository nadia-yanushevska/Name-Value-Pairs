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
    return pairArray.map(pair => pairWrapper(pair, formatPair)).join('\n');
}

function formatPair(pairObject) {
    return `${pairObject.name} = ${pairObject.value}`;
}

export function pairWrapper({ name, value, id }, pairFormatter) {
    return `<input class="radio-input" type="radio" id="${id}" name="selectPair" value="${name}-${value}"><label class="radio-label" for="${id}">${pairFormatter({ name, value })}</label>`;
}

export function getSortedPairs(pairArray, key) {
    return pairArray.toSorted((firstPair, secondPair) => firstPair[key].localeCompare(secondPair[key]));
}

export function getSelectedId() {
    return Number([...outputElem.childNodes].filter(child => child.nodeName === INPUT_NODE_NAME).find(elem => elem.checked)?.id);
}
