/********************************************************************************************************
 * 
 * 센서 데이터 로딩 & 프리뷰
 * 
 *******************************************************************************************************/
export default class LoadingPreview {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <div class="head">
        <i class="fab fa-microsoft"></i>
        <h3>데이터 로딩 & 프리뷰</h3>
      </div>
      <div class="body">
      </div>
    `;

    this.initCSS();
  }

  initCSS() {
    
  }

}