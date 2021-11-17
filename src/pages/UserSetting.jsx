import React, { useState } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import UserGender from "../components/UserGender";
import UserName from "../components/UserName";
import UserTestType from "../components/UserTestType";

//animation 부분
const fadeIn = keyframes`
  from{
    opacity: 0
  }
  to{
    opacity: 1
  }
`;

const UserSettingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn}; //애니메이션 연결
  animation-fill-mode: forwards;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 40px;
`;

const UserSetting = () => {
  return (
    <UserSettingContainer>
      <UserName />
      <UserGender />
      <UserTestType />
    </UserSettingContainer>
  );
};

export default UserSetting;
