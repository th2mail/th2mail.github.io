/********************************************************************************************************
 * 
 * 시계열 데이터 탐험 - Pandas Profiler
 * 
 *******************************************************************************************************/
export default class ExplorePandasProfiler {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <div class="head">
        <i class="fab fa-microsoft"></i>
        <h3>데이터 탐험 (Pandas Profiler)</h3>
      </div>
      <div class="body">
      </div>
    `;

    this.initCSS();
  }

  initCSS() {
    
  }

}