import Header                 from "./Layout/Header.js";
import Nav                    from "./Layout/Nav.js";
import Introduce              from "./Education/Introduce.js";
import Dashboard              from "./Education/Dashboard.js";
import DataStatus             from "./DataPreparation/DataStatus.js";
import DataSelect             from "./DataPreparation/DataSelect.js";
import ExplorePandasProfiler  from "./DataPreparation/ExplorePandasProfiler.js";
import ExploreSweetviz        from "./DataPreparation/ExploreSweetviz.js";
import LoadingPreview         from "./DataPreparation/LoadingPreview.js"; 
import CorrelateGraph         from "./DataPreparation/CorrelateGraph.js"; 
import VisualProcessMissValue from "./DataPreparation/VisualProcessMissValue.js";
import VisualProcessOutValue  from "./DataPreparation/VisualProcessOutValue.js"; 
import ResampleNormalize      from "./DataPreparation/ResampleNormalize.js";
import Decompose              from "./TimeSeriesPreparation/Decompose.js";
import SanityCheckTransform   from "./TimeSeriesPreparation/SanityCheckTransform.js";
import PredictSingleVariable  from "./TimeSeriesForecasting/PredictSingleVariable.js";
import PredictMultiVariable   from "./TimeSeriesForecasting/PredictMultiVariable.js";
import PredictResultAnalysis  from "./PerformanceAnalysis/PredictResultAnalysis.js";

export default class Main {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <header id="header"></header>

      <nav id="nav"></nav>

      <main>
        <section id="introduce"></section>                  <!-- #소개 -->
        <section id="dashboard"></section>                  <!-- #대쉬보드 -->
        <section id="data-status"></section>                <!-- 센서 데이터 현황 -->
        <section id="data-select"></section>                <!-- 센서 데이터 선택 -->
        <section id="explore-pandas-profiler"></section>    <!-- 시계열 데이터 탐험 - Pandas Profiler -->
        <section id="explore-sweetviz"></section>           <!-- 시계열 데이터 탐험 - Sweetviz -->
        <section id="loading-preview"></section>            <!-- 센서 데이터 로딩 & 프리뷰 -->
        <section id="correlate-graph"></section>            <!-- 센서 데이터 상관관계 그래프 -->
        <section id="visual-process-miss-value"></section>  <!-- 결측치 시각화 및 처리 -->
        <section id="visual-process-out-value"></section>   <!-- 이상치 시각화 및 처리 -->
        <section id="resample-normalize"></section>         <!-- 리셈플링 및 정규화 -->
        <section id="decompose"></section>                  <!-- 시계열 데이터 분해 -->
        <section id="sanity-check-Transform"></section>     <!-- 시계열 정상성 검사 및 변환 -->
        <section id="predict-single-variable"></section>    <!-- 시계열 예측 with 단일 변수 -->
        <section id="predict-multi-variable"></section>     <!-- 시계열 예측 with 다중 변수 -->
        <section id="predict-result-analysis"></section>    <!-- 시계열 예측 결과 분석 -->
      </main>

      <form class="search-frm">
        <label for="search-box" class="las la-search"></label>
        <input type="search" id="search-box" placeholder="Search">
        <i class="las la-arrow-right"></i>
      </form>

      <div class="dimmed"></div>

      <form class="login-frm">
        <div class="title">
          <h2>ALIAN 로그인</h2>
          <i class="las la-times"></i>
        </div>
        <div class="box">
          <input type="text" placeholder="아이디를 입력해 주세요." />
          <input type="password" placeholder="비밀번호를 입력해 주세요." />
        </div>
        <input type="submit" class="btn" value="Enter">
      </form>
    `;

    new Header(document.getElementById("header"));
    new Nav(document.getElementById("nav"));
    new Introduce(document.getElementById("introduce"));                              // 소개화면
    new Dashboard(document.getElementById("dashboard"));                              // 대쉬보드
    new DataStatus(document.getElementById("data-status"));                           // 센서 데이터 현황
    new DataSelect(document.getElementById("data-select"));                           // 센서 데이터 선택
    new ExplorePandasProfiler(document.getElementById("explore-pandas-profiler"));    // 시계열 데이터 탐험 - Pandas Profiler
    new ExploreSweetviz(document.getElementById("explore-sweetviz"));                 // 시계열 데이터 탐험 - Sweetviz
    new LoadingPreview(document.getElementById("loading-preview"));                   // 센서 데이터 로딩 & 프리뷰
    new CorrelateGraph(document.getElementById("correlate-graph"));                   // 센서 데이터 상관관계 그래프
    new VisualProcessMissValue(document.getElementById("visual-process-miss-value")); // 결측치 시각화 및 처리
    new VisualProcessOutValue(document.getElementById("visual-process-out-value"));   // 이상치 시각화 및 처리
    new ResampleNormalize(document.getElementById("resample-normalize"));             // 리셈플링 및 정규화
    new Decompose(document.getElementById("decompose"));                              // 시계열 데이터 분해
    new SanityCheckTransform(document.getElementById("sanity-check-Transform"));      // 시계열 정상성 검사 및 변환
    new PredictSingleVariable(document.getElementById("predict-single-variable"));    // 시계열 예측 with 단일 변수
    new PredictMultiVariable(document.getElementById("predict-multi-variable"));      // 시계열 예측 with 다중 변수
    new PredictResultAnalysis(document.getElementById("predict-result-analysis"));    // 시계열 예측 결과 분석
  }

}

const root = document.getElementById("main");
const main = new Main(root);


