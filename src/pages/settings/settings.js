import { Options } from '../../modules/options.js'
import { createElement } from '../../modules/createElement.js'
import { youtube } from '../../modules/helpers/youtube.js'
import { google } from '../../modules/helpers/google.js'
import { yahoo } from '../../modules/helpers/yahoo.js'
import { bing } from '../../modules/helpers/bing.js'
import { reddit } from '../../modules/helpers/reddit.js'
import { twitter } from '../../modules/helpers/twitter.js'
import { wikipedia } from '../../modules/helpers/wikipedia.js'
import { googleTranslate } from '../../modules/helpers/googleTranslate.js'
import { medium } from '../../modules/helpers/medium.js'
import { youtubeMusic } from '../../modules/helpers/youtubeMusic.js'
import { fandom } from '../../modules/helpers/fandom.js'
import { twitch } from '../../modules/helpers/twitch.js'

/**
 * This class is used to create a list in settings menu. Also, this class has a constructor method that initializes a property `node` by creating a `<ul>` element with a class name of 'list'.
 *
 * @class
 * @name List
 * @kind class
 */
class List {
    /**
     * The `constructor()` method in the `List` class is initializing a property `node` by creating a `<ul>` element with a class name of 'list'.
     *
     * @constructor
     * @name List
     */
    constructor() {
        this.node = createElement('ul', { className: 'list' })
        this.items = {}
    }

    /**
     * The `addItem(label, selectOptions)` method in the `List` class is creating a new list item (`<li>` element) with a heading (`<h3>` element) and a select dropdown (`<select>` element).
     *
     * @async
     * @method
     * @name addItem
     * @kind method
     * @memberof List
     * @param {string} label
     * @param {Record<string, string>} selectOptions
     * @returns {void}
     */
    async addItem(label, selectOptions, itemKey) {
        const $item = createElement('li', { className: 'list__item' })
        const $label = createElement('h3', {
            className: 'list__label',
            textContent: label
        })
        const selectedIndex = await Options.getInstanceIndex(itemKey)
        const $select = createElement('select', {
            className: 'list__select'
        })

        this.items[itemKey] = selectedIndex

        $select.addEventListener('change', () => {
            const { selectedIndex } = $select

            this.items[itemKey] = selectedIndex

            Options.saveInstances(this.items)
        })

        for (const [key, value] of Object.entries(selectOptions)) {
            const $option = createElement('option', {
                value: key,
                textContent: value
            })

            $select.appendChild($option)
        }

        $item.appendChild($label)
        $item.appendChild($select)
        this.node.appendChild($item)
        $select.selectedIndex = selectedIndex
    }
}

class Settings {
    /**
     * A static method that takes an array of destinations as input. It then iterates over each destination in the array and extracts the host part of the URL using the `URL` constructor. The method returns an object where each destination is mapped to its corresponding host extracted from the URL.
     *
     * @method
     * @name formatDestinations
     * @kind method
     * @memberof Settings
     * @static
     * @param {string[]} destinations
     * @returns {string[]}
     */
    static formatDestinations(destinations) {
        return destinations.reduce(
            (acc, curr) => (
                // eslint-disable-next-line no-extra-parens
                (acc[curr] = new URL(curr).host), acc
            ),
            {}
        )
    }

    /**
     * The method that is responsible for initializing the settings menu by creating a list of items.
     *
     * @method
     * @name init
     * @kind method
     * @memberof Settings
     * @static
     * @returns {void}
     */
    static init() {
        const $list = document.getElementById('list')
        const list = new List()

        list.addItem(
            youtube.label,
            this.formatDestinations(youtube.destinations),
            youtube.key
        )
        list.addItem(
            google.label,
            this.formatDestinations(google.destinations),
            google.key
        )
        list.addItem(
            yahoo.label,
            this.formatDestinations(yahoo.destinations),
            yahoo.key
        )
        list.addItem(
            bing.label,
            this.formatDestinations(bing.destinations),
            bing.key
        )
        list.addItem(
            reddit.label,
            this.formatDestinations(reddit.destinations),
            reddit.key
        )
        list.addItem(
            twitter.label,
            this.formatDestinations(twitter.destinations),
            twitter.key
        )
        list.addItem(
            wikipedia.label,
            this.formatDestinations(wikipedia.destinations),
            wikipedia.key
        )
        list.addItem(
            googleTranslate.label,
            this.formatDestinations(googleTranslate.destinations),
            googleTranslate.key
        )
        list.addItem(
            medium.label,
            this.formatDestinations(medium.destinations),
            medium.key
        )
        list.addItem(
            youtubeMusic.label,
            this.formatDestinations(youtubeMusic.destinations),
            youtubeMusic.key
        )
        list.addItem(
            fandom.label,
            this.formatDestinations(fandom.destinations),
            fandom.key
        )
        list.addItem(
            twitch.label,
            this.formatDestinations(twitch.destinations),
            twitch.key
        )

        $list.appendChild(list.node)
    }
}

Settings.init()
