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

        var lineWidth = 0;
        var linePosition = 0;

        console.log(wrapper.offsetLeft);

        for (var i = 0; i < menuItems.length; i++) {
            let item = menuItems[i];

            // define initial position for line/underline
            if (item.classList.contains('current') || item.classList.contains('active')) {

                lineWidth = parseInt( window.getComputedStyle( item ).width );
                linePosition = parseInt( item.offsetLeft );
            }

            // move line when hovering over nav items
            item.addEventListener('mouseover', () => {
                lineWidth = parseInt( window.getComputedStyle( item ).width );
                linePosition = parseInt( item.offsetLeft );

                line.style.width = lineWidth + 'px';
                line.style.left = linePosition + 'px';
            });

        }

        line.style.width = lineWidth + 'px';
        line.style.left = linePosition + 'px';
        line.classList.add('on');

    });
}