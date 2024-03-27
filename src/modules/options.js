/**
 * The class that contains static methods for managing program's local storage.
 *
 * @class
 * @name Options
 * @kind class
 */
export class Options {
    /**
     * The method sets the key "enabled" to "true", indicating that a program is enabled.
     *
     * @method
     * @name enable
     * @kind method
     * @memberof Options
     * @static
     * @returns {void}
     */
    static enable() {
        browser.storage.local.set({
            enabled: true
        })
    }

    /**
     * The method sets the key "enabled" to "false", indicating that a program is disabled.
     *
     * @method
     * @name disable
     * @kind method
     * @memberof Options
     * @static
     * @returns {void}
     */
    static disable() {
        browser.storage.local.set({
            enabled: false
        })
    }

    /**
     * The method that checks if a program is enabled.
     *
     * @async
     * @method
     * @name isEnabled
     * @kind method
     * @memberof Options
     * @static
     * @returns {boolean}
     */
    static async isEnabled() {
        return (await browser.storage.local.get('enabled')).enabled ?? true
    }

    /**
     * The method that is responsible for saving the provided `indexes` of the instances to the browser's local storage.
     *
     * @method
     * @name saveInstances
     * @kind method
     * @memberof Options
     * @static
     * @param {Record<string, number>} indexes
     * @returns {void}
     */
    static saveInstances(indexes) {
        browser.storage.local.set({
            instances: indexes
        })
    }

    /**
     * The method is used to retrieve the index of a specific instance based on the provided `instanceKey`. It accesses the `instances` object stored in the browser's local storage and returns the index corresponding to the `instanceKey`. If the `instances` object is not found, then it returns a default value of 0.
     *
     * @async
     * @method
     * @name getInstanceIndex
     * @kind method
     * @memberof Options
     * @static
     * @param {string} instanceKey
     * @returns {number}
     */
    static async getInstanceIndex(instanceKey) {
        const { instances } = await browser.storage.local.get('instances')

        return instances ? instances[instanceKey] : 0
    }
}
