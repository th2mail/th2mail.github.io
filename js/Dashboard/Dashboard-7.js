/**
 * 파일명 : dashboard-7.js
 * 설 명 : 대쉬보드 5번 화면
 * 최초 생성일 : 
 *
 * 수정일			수정내역 
 * ---------  -----------------------------------------------------------------
 * 
 */
$(document).ready(function () {

  /**
   * 주제 '데이터 준비'에 마우스 오버 시(hover), 데이터 준비 하위 메뉴에 배경색을 적용한다.
   */
  $('#dashboard-7 .cards.first .card.one .item .no.subject').hover(function () {
    $('.cards.first .card .item .no').css({
      'background': 'rgb(189, 0, 255)'
    });

    $('#dashboard-7 .cards.first .card').css({
      'border-top': '5px dashed rgb(189, 0, 255)'
    });

    $('#dashboard-7 .cards.first .card.four, \
       #dashboard-7 .cards.first .card.five, \
       #dashboard-7 .cards.first .card.six, \
       #dashboard-7 .cards.first .card.seven').css({
      'border-bottom': '5px dashed rgb(189, 0, 255)'
        //  'border-bottom': 'none'
    });

    $('#dashboard-7 .cards.first .card.seven').css({
      'border-right': '5px dashed rgb(189, 0, 255)',
      'border-bottom': '5px dashed rgb(189, 0, 255)',
      'border-radius': '0 20px 20px 0'
    });

    $('#dashboard-7 .cards.second .card').css({
      'border-top': '5px dashed rgb(189, 0, 255)',
      'top': '-5px'
    });
        
    $('#dashboard-7 .cards.second .card.one').css({      
      'border-left': '5px dashed rgb(189, 0, 255)',
      // 'border-bottom': '5px dashed rgb(126, 0, 255)',
      'border-radius': '20px 0 0 20px',
      'top': '-5px',
      'left': '60px'
    });

    $('#dashboard-7 .cards.second .card.four').css({
      // 'border-top': 'none'
      'border': 'none'
    });
  }, function(){ 
    $('.cards.first .card .item .no').css({
      'background': 'var(--color-white)'
    });

    $('#dashboard-7 .cards.first .card').css({
      'border-top': '5px solid rgb(189, 0, 255)'
    });

    $('#dashboard-7 .cards.first .card.four, \
       #dashboard-7 .cards.first .card.five, \
       #dashboard-7 .cards.first .card.six').css({
      'border-bottom': '5px solid rgb(189, 0, 255)'
    });

    $('#dashboard-7 .cards.first .card.seven').css({
      'border-right': '5px solid rgb(189, 0, 255)',
      'border-bottom': '5px solid rgb(189, 0, 255)',
      'border-radius': '0 20px 20px 0'
    });

    $('#dashboard-7 .cards.second .card').css({
      'border-top': '5px solid rgb(189, 0, 255)',
      'top': '-5px'
    });
        
    $('#dashboard-7 .cards.second .card.one').css({      
      'border-left': '5px solid rgb(189, 0, 255)',
      // 'border-bottom': '5px dashed rgb(126, 0, 255)',
      'border-radius': '20px 0 0 20px',
      'top': '-5px',
      'left': '60px'
    });

    $('#dashboard-7 .cards.second .card.four').css({
      'border-top': 'none'
    });
  });

  /**
   * 주제 '시계열 준비'에 마우스 오버 시(hover), 시계열 준비 하위 메뉴에 배경색을 적용한다.
   */
  $('#dashboard-7 .cards.second .card.one .item .no.subject').hover(function () {
    $('.cards.second .card.two .item .no, .cards.second .card.three .item .no').css({
      'background': 'rgb(126, 0, 255)'
    });

    

  }, function(){ 
    $('.cards.second .card.two .item .no, .cards.second .card.three .item .no').css({
      'background': 'var(--color-white)'
    });
  });

});

