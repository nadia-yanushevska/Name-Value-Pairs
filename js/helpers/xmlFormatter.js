// xmlFormatter contains functions to format pairs array into XML format
export function xmlFormatPairs(pairArray) {
    return `<list>\n${pairArray.map(pair => xmlFormatPair(pair)).join('\n')}\n</list>`;
}
function xmlFormatPair(pairObject) {
    return `  <pair>\n${[...Object.keys(pairObject)].map(key => xmlFormatProperty(key, pairObject[key])).join('\n')}\n  </pair>`;
}

function xmlFormatProperty(key, value) {
    return `    <${key}>\n      ${value}\n    </${key}>`;
}
