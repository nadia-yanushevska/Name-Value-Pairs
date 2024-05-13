// refs contains variables used in application
export const section = document.querySelector('[data-js-section]');

// Form elements
export const formElem = section.querySelector('[data-js-form]');
export const inputElem = formElem.querySelector('[data-js-input]');

// Output elements
export const outputElem = section.querySelector('[data-js-output]');
export const copyLink = document.querySelector('[data-js-test]');

// Message elements
export const errorElem = formElem.querySelector('[data-js-error]');
export const infoElem = section.querySelector('[data-js-info]');
export const delErrorElem = section.querySelector('[data-js-del-error]');

// Checkbox
export const checkboxElem = section.querySelector('[data-js-checkbox]');

// Button Elements
export const sortByNameBtn = section.querySelector('[data-js-btn=nameSort]');
export const sortByValueBtn = section.querySelector('[data-js-btn=valueSort]');
export const deleteBtn = section.querySelector('[data-js-btn=delete]');
export const xmlBtn = section.querySelector('[data-js-btn=xml]');

// Sort types
export const sortTypes = {
    nameSort: 'name',
    valueSort: 'value',
};
