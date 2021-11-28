import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import {
  CHART_BACKGROUND_COLOR,
  CHART_COLOR,
  CHART_HOVER_BACKGROUND_COLOR,
  TEST_RESULT_CONSTANTS,
} from "../constants/standard";

//Add these lines to your myPage.component.ts file:
/*
    https://github.com/sgratzl/chartjs-chart-wordcloud/issues/4
*/

Chart.register(...registerables);

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChartCard = styled.div`
  width: 800px;
  height: 300px;
`;

const options = {
  legend: {
    display: false, // label 숨기기
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
          stepSize: 1, // 스케일에 대한 사용자 고정 정의 값
        },
      },
    ],
  },
  maintainAspectRatio: false, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
};

const ChartComp = ({ resultAnswer, maxAnswer }) => {
  const tempResultId = [];
  const tempResultValue = [];
  resultAnswer.forEach((ele) => {
    tempResultId.push(ele.id);
    tempResultValue.push(ele.value);
  });

  const Tdata = {
    labels: TEST_RESULT_CONSTANTS,
    datasets: [
      {
        label: "결과 값",
        backgroundColor: CHART_BACKGROUND_COLOR,
        borderColor: CHART_COLOR,
        borderWidth: 1,
        hoverBackgroundColor: CHART_HOVER_BACKGROUND_COLOR,
        hoverBorderColor: CHART_COLOR,
        data: tempResultValue,
      },
    ],
  };

  return (
    <ChartContainer>
      <ChartCard>
        <Bar data={Tdata} width={300} height={200} options={options} />
      </ChartCard>
    </ChartContainer>
  );
};

const mapStateToProps = (state, onwProps) => {
  return {
    resultAnswer: state.userData.resultAnswers,
    maxAnswer: state.userData.maxAnswer,
  };
};

export default connect(mapStateToProps)(ChartComp);
