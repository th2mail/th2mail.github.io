// main.js

// 네비게이션
$("#navigation").load("/views/ScreenLayout/Navigation.html");

// 헤더
$("header").load("/views/ScreenLayout/Header.html");

// 대쉬보드
$("#dashboard-1").load("/views/Dashboard/Dashboard-1.html");
$("#dashboard-2").load("/views/Dashboard/Dashboard-2.html");
$("#dashboard-3").load("/views/Dashboard/Dashboard-3.html");
$("#dashboard-4").load("/views/Dashboard/Dashboard-4.html");
$("#dashboard-5").load("/views/Dashboard/Dashboard-5.html");

// 센서 데이터 현황
$("#data-status").load("/views/DataPreparation/DataStatus.html");

// 센서 데이터 선택
$("#data-select").load("/views/DataPreparation/DataSelect.html");

// 시계열 데이터 탐험 - Pandas Profiler
$("#explore-pandas-profiler").load("/views/DataPreparation/ExplorePandasProfiler.html");

// 시계열 데이터 탐험 - Sweetviz
$("#explore-sweetviz").load("/views/DataPreparation/ExploreSweetviz.html");

// 센서 데이터 로딩 & 프리뷰
$("#loading-preview").load("/views/DataPreparation/LoadingPreview.html");

// 센서 데이터 상관관계 그래프
$("#correlate-graph").load("/views/DataPreparation/CorrelateGraph.html");

// 결측치 시각화 및 처리
$("#visual-process-miss-value").load("/views/DataPreparation/VisualProcessMissValue.html");

// 이상치 시각화 및 처리
$("#visual-process-out-value").load("/views/DataPreparation/VisualProcessOutValue.html");

// 리셈플링 및 정규화
$("#resample-normalize").load("/views/DataPreparation/ResampleNormalize.html");

// 시계열 데이터 분해
$("#decompose").load("/views/TimeSeriesPreparation/Decompose.html");

// 시계열 정상성 검사 및 변환
$("#sanity-check-Transform").load("/views/TimeSeriesPreparation/SanityCheckTransform.html");

// 시계열 예측 with 단일 변수
$("#predict-single-variable").load("/views/TimeSeriesForecasting/PredictSingleVariable.html");

// 시계열 예측 with 다중 변수
$("#predict-multi-variable").load("/views/TimeSeriesForecasting/PredictMultiVariable.html");

// 시계열 결과 분석
$("#predict-result-analysis").load("/views/PerformanceAnalysis/PredictResultAnalysis.html");