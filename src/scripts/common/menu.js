/**
 * Simple vanilla js to trigger our menus
 */

// classlist polyfill
import 'classlist-polyfill';

/**
 * @class: MenuTrigger
 * defines our trigger and target and simply add/removes a class
 */
class MenuTrigger {
    constructor(options) {
        this.options = options;

        this.trigger(this.options.trigger, this.options.target);
    }

    trigger(trigger, target) {
        document.addEventListener("DOMContentLoaded", function(event) {

            var menuTrigger = document.querySelectorAll(trigger);
            var menuTarget = document.querySelector(target);

            for (var i = 0; i < menuTrigger.length; i++) {
                menuTrigger[i].onclick = () => {
                    menuTarget.classList.toggle('open');
                };
            }
        });
    }
}

export default MenuTrigger;

/**
 * only attaching this to the window so the class can be called inside our templates
 * @type {MenuTrigger}
 */
window.MenuTrigger = MenuTrigger;