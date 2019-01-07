$(function() {

  // Carousel
  $('.carousel').owlCarousel({
    loop: true,
    items: 2,
    nav: true,
    margin: 10,
    smartSpeed: 700,
    navText: ['<img src="../img/prew.png" alt="alt">','<img src="../img/next.png" alt="alt">'],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      },
    },
  });


$(function(){
    // Скрываются все блоки с описанием вкладок кроме первого
  $('.tab-nav a').click(function(){                         // При клике на вкладку
    $('.tab-panels>div').hide().filter(this.hash).show();   // - показывается блок с описанием текущей вкладки
    $('.tab-nav li').removeClass('select');                 // - удаляется класс 'select' у активной ранее вкладки
    $(this).parent().addClass('select');                    // - добавляется класс 'select' для выбранной вкладки
    return (false);                                         // - прерывается обработка события onClick
  })
})
 
});
