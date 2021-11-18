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

  // "데이터 준비" 큰 동그라미에 마우스를 올려놨을 때, 동작하는 함수
  $('#dashboard-7 .cards.first .card.one .item .circle').hover(function () {    
    // "데이터 준비, 1.센서 데이터 변환 ~ 6.데이터 전처리"에 동그라미 색깔을 보라색으로 바꾼다.
    $('#dashboard-7 .cards.first .card .item .circle').css({ 'background': 'var(--color-wine)' });
    // "데이터 준비"에 선을 실선(solid)에서 점선(dashed)으로 바꾼다.
    $('#dashboard-7 .cards.first .card').css({ 'border-top': '5px dashed var(--color-wine)' });
    $('#dashboard-7 .cards.first .card.four, \
    #dashboard-7 .cards.first .card.five, \
    #dashboard-7 .cards.first .card.six, \
    #dashboard-7 .cards.first .card.seven').css({ 'border-bottom': '5px dashed var(--color-wine)' });
    $('#dashboard-7 .cards.first .card.seven').css({ 'border-right': '5px dashed var(--color-wine)', 'border-bottom': '5px dashed var(--color-wine)' });
    $('#dashboard-7 .cards.second .card').css({ 'border-top': '5px dashed var(--color-wine)' });
    $('#dashboard-7 .cards.second .card.one').css({ 'border-left': '5px dashed var(--color-wine)' });
    $('#dashboard-7 .cards.second .card.four').css({ 'border-top': 'none' });
  }, function () {
    $('#dashboard-7 .cards.first .card .item .circle').css({ 'background': 'var(--color-white)' });
    $('#dashboard-7 .cards.first .card').css({ 'border-top': '5px solid var(--color-wine)' });
    $('#dashboard-7 .cards.first .card.four, \
    #dashboard-7 .cards.first .card.five, \
    #dashboard-7 .cards.first .card.six, \
    #dashboard-7 .cards.first .card.seven').css({ 'border-bottom': '5px solid var(--color-wine)' });
    $('#dashboard-7 .cards.first .card.seven').css({ 'border-right': '5px solid var(--color-wine)', 'border-bottom': '5px solid var(--color-wine)' });
    $('#dashboard-7 .cards.second .card').css({ 'border-top': '5px solid var(--color-wine)' });
    $('#dashboard-7 .cards.second .card.one').css({ 'border-left': '5px solid var(--color-wine)' });
    $('#dashboard-7 .cards.second .card.four').css({ 'border-top': 'none' });
  }); // End of Func.

  // "시계열 준비" 큰 동그라미에 마우스를 올려놨을 때, 동작하는 함수
  $('#dashboard-7 .cards.second .card.one .item .circle').hover(function () {
    // "7.시계열 데이터 분해, 8.시계열 정상성 검사 및 변환"에 동그라미 색깔을 청색으로 바꾼다.
    $('#dashboard-7 .cards.second .card.two .item .circle, \
    #dashboard-7 .cards.second .card.three .item .circle').css({ 'background': 'var(--color-purple)' });
    // "시계열 준비"에 선을 실선(solid)에서 점선(dashed)으로 바꾼다.
    $('#dashboard-7 .cards.second .card.one').css({ 'border-bottom': '5px dashed var(--color-purple)' });
    $('#dashboard-7 .cards.third .card.two, \
    #dashboard-7 .cards.third .card.three').css({ 'border-top': '5px dashed var(--color-purple)' });
  }, function () {
    // "7.시계열 데이터 분해, 8.시계열 정상성 검사 및 변환"에 동그라미 색깔을 흰색으로 바꾼다.
    $('#dashboard-7 .cards.second .card.two .item .circle, \
    #dashboard-7 .cards.second .card.three .item .circle').css({ 'background': 'var(--color-white)' });
    // "시계열 준비"에 선을 점선(dashed)에서 실선(solid)으로 바꾼다.
    $('#dashboard-7 .cards.second .card.one').css({ 'border-bottom': '5px solid var(--color-purple)' });
    $('#dashboard-7 .cards.third .card.two, \
    #dashboard-7 .cards.third .card.three').css({ 'border-top': '5px solid var(--color-purple)' });
  }); // End of Func.

});

