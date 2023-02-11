//menu
$('.logo_loader').delay(4000).fadeOut('slow');
// $('.loaderArea').delay(5000).fadeOut('slow');
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('menu_active');
        });
    });

    //prod animation
    $('.prod__item').each(function(i) {
        $(this).hover(function() {
            $('.prod__overlay').eq(i).fadeOut();
            $('.prod__button').eq(i).addClass('prod__button_active');
            $('.prod__title').eq(i).addClass ('prod__title_active');
        }, function(){
            $('.prod__overlay').eq(i).fadeIn();
            $('.prod__button').eq(i).removeClass('prod__button_active');
            $('.prod__title').eq(i).removeClass ('prod__title_active');
        });
    });

     //плавный скролл
 $('.scrollto a').on('click', function() {

    let href = $(this).attr('href');
  
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });
  
    return false;
  });

   //modal 
      
   $('.consult').on('click', function(){
    $('.overlay, .modal').fadeIn();
   });
   $('.modal__close, .overlay').on('click', function(){
     $('.overlay, .modal, .thanks, .order').fadeOut();
   });

   //order
   $('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('.order .modal__title_order').text($('.order__text').eq(i).text());
       
        $('.overlay, .order').fadeIn('slow');
    });
});
});
