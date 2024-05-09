// pairsHelper contains function to display pairs in outputElem, format pairs and sort pairs
import { outputElem } from '../refs.js';
import { xmlFormatPairs } from './xmlFormatter.js';

export function showPairs(pairArray, xmlType = false) {
    if (!pairArray.length) outputElem.value = '';
    else outputElem.value = xmlType ? xmlFormatPairs(pairArray) : formatPairs(pairArray);
}

function formatPairs(pairArray) {
    return pairArray.map(pair => formatPair(pair)).join('\n');
}

function formatPair(pairObject) {
    return pairObject.name + '=' + pairObject.value;
}

export function getSortedPairs(pairArray, key) {
    return pairArray.toSorted((firstPair, secondPair) => firstPair[key].localeCompare(secondPair[key]));
}
