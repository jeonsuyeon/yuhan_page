//main js

//gnb hover액션

/*$(function(){
$('#gnb .depth1 > li').hover(
    function(){
        $(this).find('.depth2').show();
    },
    function(){
        $(this).find('.depth2').hide();
    }
);
});  */

$(function(){
    $('#gnb .depth1 > li').hover(
      function(){
        $(this).find('.depth2').stop().fadeIn();
      },
      function(){
        $(this).find('.depth2').stop().fadeOut();
      }
    );
  
  });


  //swiper slider
  $(function(){
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        //  필요시사용(pager)
        pagination: {
          el: '.swiper-pagination',
        },
      
        // qkdgidrl(Navigtion arrows)
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
      });
  });