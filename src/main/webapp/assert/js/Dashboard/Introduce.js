/**
 * 파일명 : Introduce.js
 * 설 명 : 소개 화면
 * 최초 생성일 : 
 *
 * 수정일			수정내역 
 * ---------  -----------------------------------------------------------------
 * 
 */
 $(document).ready(function () {

    $('#introduce .square:nth-child(1)').hover(function () {
      $('#introduce .card:nth-child(1)').css({
        'background': 'red'
      });
    }, function () {
        $('#introduce .card:nth-child(1)').css({
            'background': 'var(--color-whilte)'
        });
    });

    $('#introduce .square:nth-child(2)').hover(function () {
        $('#introduce .card:nth-child(2)').css({
          'background': 'orange'
        });
      }, function () {
          $('#introduce .card:nth-child(2)').css({
              'background': 'var(--color-whilte)'
          });
      });

      $('#introduce .square:nth-child(3)').hover(function () {
        $('#introduce .card:nth-child(3)').css({
          'background': 'purple'
        });
      }, function () {
          $('#introduce .card:nth-child(3)').css({
              'background': 'var(--color-whilte)'
          });
      });

      $('#introduce .square:nth-child(4)').hover(function () {
        $('#introduce .card:nth-child(4)').css({
          'background': 'palegreen'
        });
      }, function () {
          $('#introduce .card:nth-child(4)').css({
              'background': 'var(--color-whilte)'
          });
      });
  
  
  
});