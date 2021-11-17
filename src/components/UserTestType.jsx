import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
  from{
    opacity: 0
  }
  to{
    opacity: 1
  }
`;

const TestTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
`;

const Title = styled.strong`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 30px;
  color: black;
`;

const Select = styled.select``;

const Option = styled.option``;

const Button = styled.button`
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

const UserTestType = ({ visible, onTestTypeSubmitState, name }) => {
  const [testType, setTestType] = useState("");

  const onChange = (e) => {
    setTestType(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (testType === "") {
      alert("문제타입을 골라주세요😥");
    } else {
      onTestTypeSubmitState(testType);
    }
  };

  return (
    <TestTypeContainer visible={visible}>
      <Form onSubmit={onSubmit}>
        <Title>{name}님 테스트타입을 알려주세요</Title>
        <Select onChange={onChange}>
          <Option value="24">직업 가치관 검사 - 중학생</Option>
          <Option value="25">직업 가치관 검사 - 고등학생</Option>
          <Option value="6">직업 가치관 검사 - 대학생,일반</Option>
        </Select>
        <Button type="submit">확인✔</Button>
      </Form>
    </TestTypeContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  //user 데이터 받아옴
  console.log(state.userData);
  return {
    visible: state.toggleData.testTypeToggle,
    name: state.userData.name,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("PostData:", ownProps);
  return {
    onTestTypeSubmitState: (testType) =>
      dispatch(actionCreators.setUserTestType({ testType: testType })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTestType);
