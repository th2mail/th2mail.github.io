/********************************************************************************************************
 * 
 * 시계열 정상성 검사 및 변환
 * 
 *******************************************************************************************************/
export default class Decompose {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <div class="head">
        <i class="fab fa-microsoft"></i>
        <h3>시계열 정상성 검사 및 변환</h3>
      </div>
      <div class="body">
      </div>
    `;

    this.initCSS();
  }

  initCSS() {
    
  }

}