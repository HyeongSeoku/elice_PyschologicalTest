import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import api from "../apis/api";
import TestTemplate from "../components/TestTemplate";
import { actionCreators } from "../store";

//테스트 시작 안내 페이지

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: center;
  align-items: center;
`;

const SubmitBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #014d01;
  &:hover {
    background-color: #017301;
  }
  color: white;
`;

const TestPage = ({ user, InitQuestionList, testData, pageToggle }) => {
  console.log(pageToggle);
  //store에 데이터 저장 부분
  useEffect(() => {
    const setData = async (type) => {
      const result = await api.getList(type);
      const { RESULT } = result.data;
      console.log(RESULT);
      RESULT.map((item) =>
        InitQuestionList(
          item.question,
          item.answer01,
          item.answer02,
          item.answer03,
          item.answer04,
          item.answerScore01,
          item.answerScore02,
          item.qitemNo
        )
      );
    };
    setData(user.testType);
  }, []); //첫 랜더링시 한번만 실행되도록

  return (
    <TestContainer>
      <h2>{user.name}님의 테스트페이지</h2>
      {/*테스트 템플릿이 들어갈 부분*/}
      <TestTemplate data={[testData[0]]} />
      <SubmitBtn visible={pageToggle}>다음</SubmitBtn>
    </TestContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("전달받은상태:", ownProps);
  return {
    user: state.userData,
    testData: state.requestData.questionList,
    pageToggle: state.toggleData.pageToggle,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    InitQuestionList: (q, a1, a2, a3, a4, as1, as2, number) =>
      dispatch(
        actionCreators.dataInit({
          question: q,
          answer01: a1,
          answer02: a2,
          answer03: a3,
          answer04: a4,
          answerScore01: as1,
          answerScore02: as2,
          qitemNo: number,
        })
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
