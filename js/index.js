
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.menu').addEventListener('click', function() {
            let menuItems = document.querySelectorAll('.menu-list-none');
            menuItems.forEach(function(item) {
                if (item.style.display === 'none' || item.style.display === '') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.menu').addEventListener('click', function() {
            let menuItems = document.querySelectorAll('.menu-list-one');
            menuItems.forEach(function(item) {
                if (item.style.display === 'none' || item.style.display === '') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });



   