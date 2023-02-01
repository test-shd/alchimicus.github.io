//menu
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

    //prod animation
    $('.prod__item').each(function(i) {
        $(this).hover(function() {
            $('.prod__overlay').eq(i).fadeOut();
            $('.prod__button').eq(i).addClass('prod__button_active');
            $('.prod__title').eq(i).addClass ('prod__title_active')
        }, function(){
            $('.prod__overlay').eq(i).fadeIn();
            $('.prod__button').eq(i).removeClass('prod__button_active');
            $('.prod__title').eq(i).removeClass ('prod__title_active')
        })
    });
});
