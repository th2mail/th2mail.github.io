/********************************************************************************************************
 * 
 * 시계열 예측 with 단일 변수
 * 
 *******************************************************************************************************/
export default class PredictSingleVariable {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <div class="head">
        <i class="fab fa-microsoft"></i>
        <h3>단변수 예측</h3>
      </div>
      <div class="body">
      </div>
    `;

    this.initCSS();
  }

  initCSS() {
    
  }

}