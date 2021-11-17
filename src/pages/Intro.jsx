import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { actionCreators } from "../store";

const IntroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IntroTitle = styled.h1``;

const IntroSubscribe = styled.div``;

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

const EnterBtn = styled.button`
  background-color: #ffffff;
  width: 200px;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Intro = ({ onStartSetting }) => {
  const onClick = () => {
    onStartSetting(true);
  };
  return (
    <IntroContainer>
      <IntroTitle>📝진로 심리 검사 테스트</IntroTitle>
      <IntroSubscribe>
        <div>간단한 검사를 통해 선호하는 직업을 알아보세요!</div>
        <div>준비가 되셨다면 확인 버튼을 눌러주세요👍</div>
      </IntroSubscribe>
      <StyledLink to="/usersetting">
        <EnterBtn onClick={onClick}>검사 시작하기</EnterBtn>
      </StyledLink>
    </IntroContainer>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("PostData:", ownProps);
  return {
    onStartSetting: (value) =>
      dispatch(actionCreators.nameToggle({ nameToggle: value })),
  };
};

export default connect(null, mapDispatchToProps)(Intro);
