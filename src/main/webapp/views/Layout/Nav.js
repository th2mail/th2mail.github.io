/********************************************************************************************************
 * 
 * 네비게이션
 * 
 *******************************************************************************************************/
export default class Navigation {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <ul class="nav_list">
        <li class="menu" data-title="소개">
          <a href="#introduce">
            <span class="no">I</span>
            <span class="tooltip">ntroduce</span>
          </a>
        </li>
        <li class="menu" data-title="대쉬보드">
          <a href="#dashboard">
            <span class="no">D</span>
            <span class="tooltip">ashboard</span>
          </a>
        </li>
        <li class="menu" data-title="센서 데이터 현황">
          <a href="#data-status">
            <span class="no">1</span>
            <span class="tooltip">센서 데이터 현황</span>
          </a>
        </li>
        <li class="menu" data-title="센서 데이터 선택">
          <a href="#data-select">
            <span class="no">2</span>
            <span class="tooltip">센서 데이터 선택</span>
          </a>
        </li>
        <li class="menu" data-title="데이터 탐험 (Pandas Profiler)">
          <a href="#explore-pandas-profiler">
            <span class="no">3</span>
            <span class="tooltip">데이터 탐험 (Pandas Profiler)</span>
          </a>
        </li>
        <li class="menu" data-title="데이터 탐험 (Sweetviz)">
          <a href="#explore-sweetviz">
            <span class="no">4</span>
            <span class="tooltip">데이터 탐험 (Sweetviz)</span>
          </a>
        </li>
        <li class="menu" data-title="데이터 로딩 & 프리뷰">
          <a href="#loading-preview">
            <span class="no">5</span>
            <span class="tooltip">데이터 로딩 & 프리뷰</span>
          </a>
        </li>
        <li class="menu" data-title="상관관계 시각화">
          <a href="#correlate-graph">
            <span class="no">6</span>
            <span class="tooltip">상관관계 시각화</span>
          </a>
        </li>
        <li class="menu" data-title="결측치 시각화 및 처리">
          <a href="#visual-process-miss-value">
            <span class="no">7</span>
            <span class="tooltip">결측치 시각화 및 처리</span>
          </a>
        </li>
        <li class="menu" data-title="이상치 시각화 및 처리">
          <a href="#visual-process-out-value">
            <span class="no">8</span>
            <span class="tooltip">이상치 시각화 및 처리</span>
          </a>
        </li>
        <li class="menu" data-title="데이터 전처리">
          <a href="#resample-normalize">
            <span class="no">9</span>
            <span class="tooltip">데이터 전처리</span>
          </a>
        </li>
        <li class="menu" data-title="시계열 데이터 분해">
          <a href="#decompose">
            <span class="no">10</span>
            <span class="tooltip">시계열 데이터 분해</span>
          </a>
        </li>
        <li class="menu" data-title="시계열 정상성 검사 및 변환">
          <a href="#sanity-check-Transform">
            <span class="no">11</span>
            <span class="tooltip">시계열 정상성 검사 및 변환</span>
          </a>
        </li>
        <li class="menu" data-title="단변수 예측">
          <a href="#predict-single-variable">
            <span class="no">12</span>
            <span class="tooltip">단변수 예측</span>
          </a>
        </li>
        <li class="menu" data-title="다변수 예측">
          <a href="#predict-multi-variable">
            <span class="no">13</span>
            <span class="tooltip">다변수 예측</span>
          </a>
        </li>
        <li class="menu" data-title="시계열 예측 분석">
          <a href="#predict-result-analysis">
            <span class="no">14</span>
            <span class="tooltip">시계열 예측 분석</span>
          </a>
        </li>
      </ul>
    `;

    this.initCSS();
  }

  initCSS() {
    const nav_list = document.querySelector('.nav_list');
    const rightbar = document.querySelector('.rightbar');
    const menus = document.querySelectorAll('.menu');
    const txt_list = document.querySelectorAll('.sidebar ul li a');

    // 메뉴를 클릭했을 때 실행되는 이벤트 함수
    nav_list.addEventListener('click', (event) => {

      // 네비게이션을 연다(Open).
      rightbar.classList.add('active');

      // 메뉴가 선택됐다는 표시를 지운다.
      menus.forEach((menu) => {
        menu.classList.remove('active');
        menu.classList.add('open');
      });

      // 사용자가 클릭한 메뉴를 선택한다.
      let target = event.target;
      if (target.parentNode.nodeName == 'A') {
        target = target.parentNode.parentNode;
      } else if (target.parentNode.nodeName == 'LI') {
        target = target.parentNode;
      } else {
        return;
      }
      target.classList.add('active');
      target.classList.add('open');

      txt_list.forEach((txt) => {
        txt.style.color = "#818487";
      });
      target.children[0].style.color = "#fff";

      // 메인화면의 너비를 줄인다.
      document.querySelector('.main-content').style.marginLeft = "344px";

      // 타이틀을 선택한 메뉴 이름으로 바꾼다.
      document.querySelector('.sidebar .rightbar input.title').value = target.dataset.title;

      // // $('.sidebar .rightbar .item').css({ "display": "none" });
      const subItems = document.querySelectorAll('.sidebar .rightbar .item');
      subItems.forEach((subItem) => {
        // subItem.style.visibility = "hidden";
        subItem.style.display = "none";
      });

      let subItem;
      if (target.dataset.title == `데이터 탐험`) {
        subItem = document.querySelector('.sidebar .rightbar .item.three');
      } else if (target.dataset.title == `시계열 데이터 분해`) {
        subItem = document.querySelector('.sidebar .rightbar .item.seven');
      } else if (target.dataset.title == `시계열 정상성 검사 및 변환`) {
        subItem = document.querySelector('.sidebar .rightbar .item.eight');
      } else if (target.dataset.title == `단변수 예측`) {
        subItem = document.querySelector('.sidebar .rightbar .item.nine');
      } else if (target.dataset.title == `다변수 예측`) {
        subItem = document.querySelector('.sidebar .rightbar .item.ten');
      } else if (target.dataset.title == `시계열 예측 분석 (차트)`) {
        subItem = document.querySelector('.sidebar .rightbar .item.twelve');
      }
      subItem.style.display = "block";
    });
  }

}