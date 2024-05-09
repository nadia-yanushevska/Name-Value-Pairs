// validator contains functions to validate a pair
export function validatePair(pair) {
    if (!pair) return false;

    const words = pair.split('=');

    if (words.length !== 2) return false;

    const name = words[0].trim();
    const value = words[1].trim();

    return isAlphaNumeric(name) && isAlphaNumeric(value) ? { name, value } : false;
}

function isAlphaNumeric(str) {
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (!isNumericCode(code) && !isUpperAlphaCode(code) && !isLowerAlphaCode(code)) {
            return false;
        }
    }
    return true;
}

function isNumericCode(code) {
    return code > 47 && code < 58;
}

function isUpperAlphaCode(code) {
    return code > 64 && code < 91;
}
function isLowerAlphaCode(code) {
    return code > 96 && code < 123;
}
