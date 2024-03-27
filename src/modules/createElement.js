/**
 * The `createElement` function is a utility function that creates a new HTML element based on the provided `tagName` and sets properties on that element using the `properties` object.
 *
 * @function
 * @name createElement
 * @kind function
 * @param {string} tagName
 * @param {Record<string, any>} properties
 * @returns {HTMLElement}
 */
export function createElement(tagName, properties) {
    return Object.assign(document.createElement(tagName), properties)
}
