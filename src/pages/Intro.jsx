import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 테스트에 대한 간단한 설명을 나타낼 페이지 (사용자에게 가장 먼저 보여짐)

const IntroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IntroBoarder = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 8px;
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

const Intro = () => {
  return (
    <IntroContainer>
      <IntroBoarder>
        <IntroTitle>📝진로 심리 검사 테스트</IntroTitle>
        <IntroSubscribe>
          <div>간단한 검사를 통해 선호하는 직업을 알아보세요!</div>
          <div>준비가 되셨다면 검사 시작 버튼을 눌러주세요👍</div>
        </IntroSubscribe>
        <StyledLink to="/usersetting">
          <EnterBtn>검사 시작하기</EnterBtn>
        </StyledLink>
      </IntroBoarder>
    </IntroContainer>
  );
};

export default Intro;
