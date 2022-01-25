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
        <div id="select">
          <div id="select-status">
            <div class="card">
              <div class="card__head">
                <i class="far fa-building building"></i>
              </div>
              <div class="card__body">
                <div class="item">
                  <div class="circle">
                    <div class="circle__count">3</div>
                  </div>
                  <div class="title">고객수</div>
                </div>
                <div class="item">
                  <div class="circle">
                    <div class="circle__count">4</div>
                  </div>
                  <div class="title">건물수</div>
                </div>
                <div class="item">
                  <div class="circle">
                    <div class="circle__count">20</div>
                  </div>
                  <div class="title">센서종류</div>
                </div>
                <div class="item">
                  <div class="circle">
                    <div class="circle__count">100</div>
                  </div>
                  <div class="title">센서수</div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card__head">
                <i class="icon-bridge bridge"></i>
              </div>
              <div class="card__body">
                <div class="item">
                  <div class="circle">
                    <div class="circle__count">5</div>
                  </div>
                  <div class="title">고객수</div>
                </div>
                <div class="item">
                  <div class="circle">
                    <div class="circle__count">4</div>
                  </div>
                  <div class="title">건물수</div>
                </div>
                <div class="item">
                  <div class="circle">
                    <div class="circle__count">4</div>
                  </div>
                  <div class="title">센서종류</div>
                </div>
                <div class="item">
                  <div class="circle">
                    <div class="circle__count">4</div>
                  </div>
                  <div class="title">센서수</div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card__head">
                <i class="icon-incline incline"></i>
              </div>
              <div class="card__body">
                <div class="item">
                  <div class="circle">
                    <div class="circle__count">4</div>
                  </div>
                  <div class="title">고객수</div>
                </div>
                <div class="item">
                  <div class="circle">
                    <div class="circle__count">4</div>
                  </div>
                  <div class="title">건물수</div>
                </div>
                <div class="item">
                  <div class="circle">
                    <div class="circle__count">4</div>
                  </div>
                  <div class="title">센서종류</div>
                </div>
                <div class="item">
                  <div class="circle">
                    <div class="circle__count">4</div>
                  </div>
                  <div class="title">센서수</div>
                </div>
              </div>
            </div>
          </div>          
          <h1>센서 데이터 선택</h1>
          <div id="select-list">
            <div id="search">
              <select id="customerId">
                <option>선택</option>
              </select>
              <div class="select__arrow one"></div>
              <select id="">
                <option>선택</option>
              </select>
              <div class="select__arrow two"></div>
            </div>
            <div id="grid">
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
              <div>
                <span>C002000P7</span>
                <span>STRAN</span>
                <span>광변형률센서1</span>
                <span>FBG-ST-310</span>
              </div>
            </div>
          </div>
        </div>        
        <div id="regist">
          <div id="regist-title">
            <i class="las la-wifi"></i>
          </div>
          <div id="regist-list"></div>
          <div id="regist-btn"></div>
        </div>
      </div>
    `;

    this.initCSS();

    this.initControl();
  }

  initCSS() {
    
  }

  initControl() {
    var param = {};

    // $.ajax({
    //   url: "http://192.168.10.26:5000/prepare/orders",
    //   data: JSON.stringify(param),
    //   method: "POST",
    //   dataType: "json"
    // })
    // .done(function(json) {
    //   console.log(json);
    //   console.log(JSON.parse(json).response.body.orders);

    //   const orders = JSON.parse(json).response.body.orders;      
    //   for (let i=0; i<orders.length; i++) {
    //     // console.log(orders[i]);
    //     var order = orders[i].order_nm;
    //     console.log(order);
    //   }

    //   JSON.parse(json).response.body.orders.forEach(item => { // item 변수는 배열 각각의 요소들을 순환한다.
    //     $(`#customerId`).append(`<option value="${item.customer_id}">${item.customer_id}</option>`);
    //   });
    // })
    // .fail(function(xhr, status, errorThrown) {
    //   console.log("오류가 발생했다.");
    //   console.log("오류명: " + errorThrown);
    //   console.log("상태: " + status);
    // })
    // .always(function(xhr, status) {
    //   console.log("요청이 완료되었습니다");
    // });
  }

}