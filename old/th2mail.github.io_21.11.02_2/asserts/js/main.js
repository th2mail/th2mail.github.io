// main.js

// 네비게이션
$("#navigation").load("/WEB-INF/views/ScreenLayout/Navigation.html");

// 헤더
$("header").load("/WEB-INF/views/ScreenLayout/Header.html");

// 대쉬보드
$("#dashboard-1").load("/WEB-INF/views/Dashboard/Dashboard-1.html");
$("#dashboard-2").load("/WEB-INF/views/Dashboard/Dashboard-2.html");
$("#dashboard-3").load("/WEB-INF/views/Dashboard/Dashboard-3.html");
$("#dashboard-4").load("/WEB-INF/views/Dashboard/Dashboard-4.html");
$("#dashboard-5").load("/WEB-INF/views/Dashboard/Dashboard-5.html");

// 센서 데이터 현황
$("#data-status").load("/WEB-INF/views/DataPreparation/DataStatus.html");

// 센서 데이터 선택
$("#data-select").load("/WEB-INF/views/DataPreparation/DataSelect.html");

// 시계열 데이터 탐험 - Pandas Profiler
$("#explore-pandas-profiler").load("/WEB-INF/views/DataPreparation/ExplorePandasProfiler.html");

// 시계열 데이터 탐험 - Sweetviz
$("#explore-sweetviz").load("/WEB-INF/views/DataPreparation/ExploreSweetviz.html");

// 센서 데이터 로딩 & 프리뷰
$("#loading-preview").load("/WEB-INF/views/DataPreparation/LoadingPreview.html");

// 센서 데이터 상관관계 그래프
$("#correlate-graph").load("/WEB-INF/views/DataPreparation/CorrelateGraph.html");

// 결측치 시각화 및 처리
$("#visual-process-miss-value").load("/WEB-INF/views/DataPreparation/VisualProcessMissValue.html");

// 이상치 시각화 및 처리
$("#visual-process-out-value").load("/WEB-INF/views/DataPreparation/VisualProcessOutValue.html");

// 리셈플링 및 정규화
$("#resample-normalize").load("/WEB-INF/views/DataPreparation/ResampleNormalize.html");

// 시계열 데이터 분해
$("#decompose").load("/WEB-INF/views/TimeSeriesPreparation/Decompose.html");

// 시계열 정상성 검사 및 변환
$("#sanity-check-Transform").load("/WEB-INF/views/TimeSeriesPreparation/SanityCheckTransform.html");

// 시계열 예측 with 단일 변수
$("#predict-single-variable").load("/WEB-INF/views/TimeSeriesForecasting/PredictSingleVariable.html");

// 시계열 예측 with 다중 변수
$("#predict-multi-variable").load("/WEB-INF/views/TimeSeriesForecasting/PredictMultiVariable.html");

// 시계열 결과 분석
$("#predict-result-analysis").load("/WEB-INF/views/PerformanceAnalysis/PredictResultAnalysis.html");