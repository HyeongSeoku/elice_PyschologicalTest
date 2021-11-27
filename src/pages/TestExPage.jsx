import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

const StyledLink = styled(Link)`
  margin-top: 30px;
  text-decoration: none;
  color: White;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
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
  &:disabled {
    opacity: 0.7;
    background-color: #454c5a;
    cursor: not-allowed;
  }
`;

const TestPage = ({
  user,
  InitQuestionList,
  InitAnswer,
  testData,
  pageToggle,
  InitTestPage,
}) => {
  //store에 데이터 저장 부분
  useEffect(() => {
    const getData = async (type) => {
      const result = await api.getList(type);
      const { RESULT } = result.data;
      setData(RESULT); //store에 데이터 저장
    };
    getData(user.testType);
  }, []); //첫 랜더링시 한번만 실행되도록

  //페이지 번호를 데이터에 입력해주기 위한 메소드
  const setData = async (array) => {
    const TARGET_NUM = 5; //한페이지에 보여줄 질문 개수
    let index = 0; //인덱스 초기화
    let curPg = 1; //페이지 할당에 사용할 현재 페이지
    let targetPg = 0; // 목표 페이지 초기화
    if (array.length % TARGET_NUM === 0) {
      //총 질문이 나누어 떨어질 경우
      targetPg += array.length / TARGET_NUM;
    } else {
      targetPg += parseInt(array.length / TARGET_NUM) + 1;
    }
    while (curPg <= targetPg) {
      //페이지가 목표 페이지보다 작거나 같을때까지 반복
      for (var i = index; i < index + TARGET_NUM; i++) {
        if (i >= array.length) break;

        //실질적인 store에 데이터 저장 메소드
        InitQuestionList(
          curPg,
          array[i].question,
          array[i].answer01,
          array[i].answer02,
          array[i].answer03,
          array[i].answer04,
          array[i].answerScore01,
          array[i].answerScore02,
          array[i].qitemNo
        );
        InitAnswer(`${curPg}_${array[i].qitemNo}`);
      }
      index += TARGET_NUM; //인덱스 증가 (다음 페이지에 들어갈 처음 인덱스번호)
      curPg += 1; //페이지 증가
    }
  };
  return (
    <TestContainer>
      <h2>{user.name}님의 테스트페이지</h2>
      <h3>테스트 총 문항은 {testData.length - 1}개로 구성됩니다.</h3>
      <div>두가지 보기 중 조금 더 가까운 쪽을 선택해주세요</div>
      <div>
        ❗ 페이지에 해당된 모든 문항을 완료하셔야 다음 문항으로 넘어 가실수
        있습니다.
      </div>
      {/*테스트 템플릿이 들어갈 부분*/}
      <TestTemplate data={[testData[0]]} />
      <StyledLink to={`/testmain/`}>
        <SubmitBtn disabled={pageToggle[0].disable}>다음</SubmitBtn>
      </StyledLink>
    </TestContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userData,
    testData: state.requestData.questionList,
    pageToggle: state.toggleData.pageToggle,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    InitQuestionList: (pageN, q, a1, a2, a3, a4, as1, as2, number) =>
      dispatch(
        actionCreators.dataInit({
          pageNum: pageN,
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
    InitAnswer: (id) => {
      dispatch(actionCreators.initAnswers({ id: id }));
    },
    InitTestPage: (pg) => dispatch(actionCreators.initPage({ page: pg })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
