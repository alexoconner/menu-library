/**
 * Simple vanilla js to trigger our menus
 */

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

            var menuTrigger = document.querySelector(trigger);

            menuTrigger.onclick = function() {
                console.log('target is ' + target);
            };
        });
    }
}

export default MenuTrigger;

/**
 * only attaching this to the window so the class can be called inside our templates
 * @type {MenuTrigger}
 */
window.MenuTrigger = MenuTrigger;