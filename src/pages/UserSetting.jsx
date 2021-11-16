import React, { useState } from "react";
import styled from "styled-components";
import UserForm from "../components/UserForm";

const UserSettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
`;

const Title = styled.h2`
  font-size: 35px;
  margin-bottom: 40px;
`;

const UserSetting = () => {
  return (
    <UserSettingContainer>
      <Title>직업가치관검사</Title>
      <UserForm />
    </UserSettingContainer>
  );
};

export default UserSetting;
