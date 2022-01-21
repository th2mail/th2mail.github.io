/********************************************************************************************************
 * 
 * 리셈플링 및 정규화
 * 
 *******************************************************************************************************/
export default class ResampleNormalize {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <div class="head">
        <i class="fab fa-microsoft"></i>
        <h3>데이터 전처리</h3>
      </div>
      <div class="body">
      </div>
    `;

    this.initCSS();
  }

  initCSS() {
    
  }

}