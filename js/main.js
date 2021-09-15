
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
    simulateTouch: false
  });;

  $(document).ready(function() {
      $('.accordion-item__trigger').click(function() {
          $(this).next('.accordion-item__content').slideToggle(); 
      });
  });