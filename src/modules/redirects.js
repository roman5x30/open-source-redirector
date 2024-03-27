/**
 * A class which gives access to item in browser's local storage named "redirects".
 *
 * @class
 * @name Redirects
 * @kind class
 * @exports
 */
export class Redirects {
    /**
     * The method that retrieves the value of the "redirects" item from the browser's local storage. If the "redirects" item does not exist in the local storage, it returns 0 as a default value.
     *
     * @async
     * @method
     * @name getCurrent
     * @kind method
     * @memberof Redirects
     * @static
     * @returns {number}
     */
    static async getCurrent() {
        const localRedirects = await browser.storage.local.get('redirects')

        return localRedirects.redirects || 0
    }

    /**
     * The method that increments the value of the "redirects" item stored in the browser's local storage.
     *
     * @async
     * @method
     * @name increase
     * @kind method
     * @memberof Redirects
     * @static
     * @returns {void}
     */
    static async increase() {
        const currentRedirects = await browser.storage.local.get('redirects')

        browser.storage.local.set({
            redirects: currentRedirects.redirects + 1 || 1
        })
    }
}
