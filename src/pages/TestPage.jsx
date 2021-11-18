import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import api from "../apis/api";
import { actionCreators } from "../store";

const TestPage = ({ user, InitQuestionList }) => {
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
    <>
      <h2> 테스트페이지</h2>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    user: state.userData,
    testData: state.requestData.questionList,
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
