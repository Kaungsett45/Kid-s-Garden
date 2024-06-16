
 document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        let menuItems = document.querySelectorAll('.menu-list-none');
        menuItems.forEach(function(item) {
            if (item.style.display === 'none' || item.style.display === '') {
                item.style.display = 'block';
                let menu_icon = document.getElementById("menu-icon");
                let false_icon = document.getElementById("false-icon");
                if (menu_icon && false_icon) {
                    menu_icon.style.display = 'none';
                    false_icon.style.display = 'block';
                }
            } else {
                item.style.display = 'none';
                let menu_icon = document.getElementById("menu-icon");
                let false_icon = document.getElementById("false-icon");
                if (menu_icon && false_icon) {
                    menu_icon.style.display = 'block';
                    false_icon.style.display = 'none';
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        let menuItems = document.querySelectorAll('.menu-list-one');
        menuItems.forEach(function(item) {
            if (item.style.display === 'none' || item.style.display === '') {
                item.style.display = 'block';
                let menu_icon = document.getElementById("menu-icon");
                let false_icon = document.getElementById("false-icon");
                if (menu_icon && false_icon) {
                    menu_icon.style.display = 'none';
                    false_icon.style.display = 'block';
                }
            } else {
                item.style.display = 'none';
                let menu_icon = document.getElementById("menu-icon");
                let false_icon = document.getElementById("false-icon");
                if (menu_icon && false_icon) {
                    menu_icon.style.display = 'block';
                    false_icon.style.display = 'none';
                }
            }
        });
    });
});




   