import axios from "axios";
import ChartComp from "../components/Chart.jsx";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import api from "../apis/api";
import { actionCreators } from "../store";
import { Bar } from "react-chartjs-2";
import { TEST_RESULT_CONSTANTS } from "../constants/standard";

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
`;
const Username = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

const ResultPage = ({
  answer,
  user,
  setResultAnswer,
  setMaxAnswer,
  resultAnswer,
  maxAnswer,
}) => {
  useEffect(() => {
    //유저가 제출한 answer, 제출 형식에 맞는 answer로 변환
    let postAnswer = "";
    answer
      .filter((ele) => ele.id !== "0")
      .forEach((i) => {
        postAnswer += ("B" + i.qitemNo + "=" + i.answerScore + " ").toString();
      });

    const postData = async () => {
      const request = await api.sendResult(
        {
          apikey: "c15f8d16ad99a739acc9dbea7f2c5535",
          qestrnSeq: user.testType,
          trgetSe: "100209",
          name: user.name,
          grade: "1",
          gender: user.gender,
          startDtm: user.startDtm,
          answers: postAnswer,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const params = new URL(request.data.RESULT.url).searchParams;
      const seq = params.get("seq");
      const resultReq = await api.getResult(seq);

      //결과값 중 최대값 찾기
      const wonScoreSplit = resultReq.data.result.wonScore.split(" ");
      const maxScore = [];
      for (var i = 0; i < wonScoreSplit.length - 1; i++) {
        maxScore.push({
          id: wonScoreSplit[i][0],
          value: parseInt(wonScoreSplit[i][2]),
        });
        //state에 응답 결과값 입력
        setResultAnswer(wonScoreSplit[i][0], parseInt(wonScoreSplit[i][2]));
      }
      //최고값을 찾기 위해
      maxScore.sort((a, b) => {
        return b.value - a.value;
      });
      //state에 answer최대값 입력
      setMaxAnswer(maxScore[0].id, maxScore[0].value);
      setMaxAnswer(maxScore[1].id, maxScore[1].value);
    };
    postData();
  }, []);

  return (
    <ResultContainer>
      <h2>결과 페이지</h2>
      <UserContainer>
        <Username>이름 : {user.name}</Username>
      </UserContainer>
      <ChartComp />
    </ResultContainer>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    answer: state.userData.answers,
    user: state.userData,
    resultAnswer: state.userData.resultAnswers,
    maxAnswer: state.userData.maxAnswer,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setResultAnswer: (id, value) =>
      dispatch(actionCreators.resultAnswers({ id: id, value: value })),
    setMaxAnswer: (id, value) =>
      dispatch(actionCreators.maxAnswer({ id: id, value: value })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
