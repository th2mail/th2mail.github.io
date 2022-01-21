/********************************************************************************************************
 * 
 * 센서 데이터 선택
 * 
 *******************************************************************************************************/
export default class DataSelect {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <div class="head">
        <i class="fab fa-microsoft"></i>
        <h3>센서 데이터 선택</h3>
      </div>
      <div class="body">
      </div>
    `;

    this.initCSS();
  }

  initCSS() {
    
  }

}