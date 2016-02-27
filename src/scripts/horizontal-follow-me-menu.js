/**
 * horizontal-follow-me-menu
 *
 */

// classlist polyfill
import 'classlist-polyfill';

export default function horizontalFollowMeMenu(movingLine, menuItem, menuWrapper) {

    document.addEventListener("DOMContentLoaded", function(event) {

        var line = document.querySelector(movingLine);
        var menuItems = document.querySelectorAll(menuItem);
        var wrapper = document.querySelector(menuWrapper);

        var startWidth = 0;
        var startPosition = 0;

        console.log(wrapper.offsetLeft);

        for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].classList.contains('current') || menuItems[i].classList.contains('active')) {
                startWidth = parseInt( window.getComputedStyle( menuItems[i] ).width );
                startPosition = parseInt( menuItems[i].offsetLeft );
            }
        }

        line.style.width = startWidth + 'px';
        line.style.left = startPosition + 'px';
        line.classList.add('on');

    });
}