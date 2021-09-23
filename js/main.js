

new Swiper('.catalog__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.catalog__next',
    prevEl: '.catalog__prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});;


new Swiper('.ds', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.ds__next',
    prevEl: '.ds__prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView: 4,
  simulateTouch: false,
  loop: false,
});;


  $(document).ready(function() {
    $('.accordion-item__trigger').click(function() {
        $(this).next('.accordion-item__content').slideToggle(); 
    });
    $('.questions__card-1').click(function () {
      $('.questions__card__img-1').toggleClass("questions__card__img-ready")
    })
    $('.questions__card-2').click(function () {
      $('.questions__card__img-2').toggleClass("questions__card__img-ready")
    })
    $('.questions__card-3').click(function () {
      $('.questions__card__img-3').toggleClass("questions__card__img-ready")
    })
    $('.questions__card-4').click(function () {
      $('.questions__card__img-4').toggleClass("questions__card__img-ready")
    })
    $('.questions__card-5').click(function () {
      $('.questions__card__img-5').toggleClass("questions__card__img-ready")
    })
    $('.questions__card-6').click(function () {
      $('.questions__card__img-6').toggleClass("questions__card__img-ready")
    })
    $('.questions__card-7').click(function () {
      $('.questions__card__img-7').toggleClass("questions__card__img-ready")
    })
    $('.questions__card-8').click(function () {
      $('.questions__card__img-8').toggleClass("questions__card__img-ready")
    });

});