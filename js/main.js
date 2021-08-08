$(function(){
  
  $('.about__slider').slick({
    fade: true,
    arrows: true,
    dots: false,
    autoplay: 3000,
    prevArrow: '<button class="slider-btn btn-left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
    nextArrow: '<button class="slider-btn btn-right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
  });
  
  $('.questions__item-title').on('click', function() {
    $('.questions__item').removeClass('questions__item--act');
    $(this).parent().toggleClass('questions__item--act');
  })

  $('.menu').on('click', function() {
    $('.menu').toggleClass('menu--active'); 
  })

  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-link').on('click', function () {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $(".scroll-btn__link").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('#fullpage').fullpage ({
    autoScrolling: true,
    scrollHorizontally: true,
    sectionSelector: '.section',
    anchors: ['top', 'about', 'benefits', 'features', 'questions', 'contacts'],
    menu: "header__nav",
  })
  function animTop() {
    $('.top__title').addClass('active');
    $('.top__img').addClass('active');
  }
  animTop();
});