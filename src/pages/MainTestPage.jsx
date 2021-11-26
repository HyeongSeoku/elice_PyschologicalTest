import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MainTestTemplate from "../components/MainTestTemplate";
import ProgressBar from "../components/ProgressBar";
import TestTemplate from "../components/TestTemplate";
import { actionCreators } from "../store";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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

const TestListContainer = styled.div``;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const PageBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const PageBtn = styled.button`
  margin-right: 10px;
  width: 50px;
  height: 20px;
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

const MainTestPage = ({ testData, InitPage }) => {
  testData.map((i) => console.log(i.pageNum));
  const uniquePage = new Set(testData.map((i) => i.pageNum));

  const [nowPage, setNowPage] = useState(1); //현재페이지 설정 (default = 1)
  const [targetData, setTargetData] = useState([]); //store에서 받아온 데이터를 nowPage 값에 따라 로드시키기 위한 state

  useEffect(() => {
    //페이지 disable 초기화
    uniquePage.forEach((i) => InitPage(i));
  }, []);

  useEffect(() => {
    //nowPage 값이 변경되면 targetData도 변경
    setPageData();
  }, [nowPage]);

  const setPageData = () => {
    const tempArr = [];
    testData.map((item) => {
      if (nowPage == item.pageNum) {
        tempArr.push(item);
      }
    });
    setTargetData(tempArr);
  };
  const onChangePage = (e) => {
    setNowPage(e.target.value);
  };
  return (
    <MainContainer>
      <ProgressBar />
      <h1>
        메인<span>현재 페이지: {nowPage}</span>
      </h1>
      <TestListContainer>
        {/* targetData.map((item) => () 을 targetData.map((item) => {} 으로 사용하지 않도록 주의*/}
        {targetData.map((item) => (
          <MainTestTemplate key={item.qitemNo} data={item} />
        ))}
      </TestListContainer>
      <BtnContainer>
        <StyledLink to="/result">
          <SubmitBtn>확인</SubmitBtn>
        </StyledLink>
        <PageBtnContainer>
          {/*추후 동적 할당 필요 */}
          <PageBtn value="1" onClick={onChangePage}>
            1
          </PageBtn>
          <PageBtn value="2" onClick={onChangePage}>
            2
          </PageBtn>
          <PageBtn value="3" onClick={onChangePage}>
            3
          </PageBtn>
          <PageBtn value="4" onClick={onChangePage}>
            4
          </PageBtn>
          <PageBtn value="5" onClick={onChangePage}>
            5
          </PageBtn>
          <PageBtn value="6" onClick={onChangePage}>
            6
          </PageBtn>
        </PageBtnContainer>
      </BtnContainer>
    </MainContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { testData: state.requestData.questionList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    InitPage: (id) => dispatch(actionCreators.initPage({ id: id })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTestPage);
