import { Redirects } from '../../modules/redirects.js'
import { createElement } from '../../modules/createElement.js'
import { Options } from '../../modules/options.js'

class Popup {
    static async programToggler() {
        const $programToggler = document.getElementById('programToggler')
        let isEnabled = await Options.isEnabled()
        const state = {
            enabled: '../../assets/icons/PowerOn.svg',
            disabled: '../../assets/icons/PowerOff.svg'
        }
        const $img = createElement('img', {
            src: isEnabled ? state.enabled : state.disabled,
            onclick: async () => {
                isEnabled = !isEnabled

                if (isEnabled) {
                    await Options.enable()
                    $img.src = state.enabled
                } else {
                    await Options.disable()
                    $img.src = state.disabled
                }
            }
        })
        $programToggler.appendChild($img)
    }

    static async init() {
        const $redirects = document.getElementById('redirects')
        $redirects.textContent = (await Redirects.getCurrent()).toLocaleString(
            'en'
        )

        this.programToggler()
    }
}

Popup.init()
