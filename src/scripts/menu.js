/**
 * Simple vanilla js to trigger our menus
 */
document.addEventListener("DOMContentLoaded", function(event) {

    var trigger = document.querySelector('.menu-trigger');

    trigger.onclick = function() {
        console.log('clicked');
    };
});