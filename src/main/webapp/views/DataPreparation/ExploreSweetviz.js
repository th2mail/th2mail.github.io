/********************************************************************************************************
 * 
 * 시계열 데이터 탐험 - Sweetviz
 * 
 *******************************************************************************************************/
export default class ExploreSweetviz {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <div class="head">
        <i class="fab fa-microsoft"></i>
        <h3>데이터 탐험 (Sweetviz)</h3>
      </div>
      <div class="body">
      </div>
    `;

    this.initCSS();
  }

  initCSS() {
    
  }

}