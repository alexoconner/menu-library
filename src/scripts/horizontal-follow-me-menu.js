/**
 * horizontal-follow-me-menu
 *
 */

// classlist polyfill
import 'classlist-polyfill';

export default function horizontalFollowMeMenu(movingLine, menuItem, menuWrapper) {

    document.addEventListener("DOMContentLoaded", function(event) {
        var movingLine = document.querySelector(movingLine);
        var menuItems = document.querySelectorAll(menuItem);
        var menuWrapper = document.querySelector(menuWrapper);

        var startWidth = 0;
        var startPosition = 0;


        console.log(menuWrapper);

        for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].classList.contains('current') || menuItems[i].classList.contains('active')) {
                startWidth = parseInt( window.getComputedStyle( menuItems[i] ).width );
                startPosition = parseInt( window.getComputedStyle( menuItems[i] ).width )
            }
        }
    });
}