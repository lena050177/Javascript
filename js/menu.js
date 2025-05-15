  document.addEventListener('DOMContentLoaded', function() {
        var url = window.location.href;
        var menuItems = document.querySelectorAll('.nav-menu-link');
        for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].href === url) {
                menuItems[i].classList.add('active');
                break;
            }
        }
    });