import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  margin-top: 30px;
  text-decoration: none;
  color: White;
  display: ${(props) => (props.disvalue ? "block" : "none")};
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

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
  display: ${(props) => (props.visible ? "block" : "none")};
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

const Select = styled.select`
  margin-bottom: 20px;
`;

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

const NavContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 52px 52px;
`;

const DownBtn = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.2);
  pointer-events: none; //클릭 안되도록
`;

const UpBtn = styled.button`
  border: none;
  border-radius: 3px;
  background-color: #ffffff;
  width: 50px;
  height: 30px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const StartTestBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-top: 30px;
  background-color: #23a9f2;
  &:hover {
    background-color: #1b85bf;
  }
  color: white;
`;

const UserTestType = ({
  visible,
  onTestTypeSubmitState,
  goPrevPage,
  name,
  gender,
  testTypeState,
}) => {
  const [testType, setTestType] = useState("");
  const [display, setDisplay] = useState(false);
  const id = 0;

  const onChange = (e) => {
    setTestType(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (testType === "") {
      alert("문제타입을 골라주세요😥");
    } else {
      onTestTypeSubmitState(testType);
      if (name === "" || gender === "") {
        alert("입력이 되지 않은 항목이 있습니다.");
      } else {
        //여기에 들어갈것
        setDisplay(true);
      }
    }
  };

  //이전 문항으로 돌아가는 버튼
  const onPrevBtnClick = () => {
    goPrevPage(true);
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
      <StyledLink
        disvalue={display}
        to={{
          pathname: `/test/`,
        }}
      >
        <StartTestBtn>테스트 시작!</StartTestBtn>
      </StyledLink>
      <NavContainer>
        <div></div>
        <UpBtn onClick={onPrevBtnClick}>위</UpBtn>
        <DownBtn>아래</DownBtn>
      </NavContainer>
    </TestTypeContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  //user 데이터 받아옴
  console.log(ownProps);
  return {
    visible: state.toggleData.testTypeToggle,
    name: state.userData.name,
    gender: state.userData.gender,
    testTypeState: state.userData.testType,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("PostData:", ownProps);
  return {
    onTestTypeSubmitState: (testType) =>
      dispatch(actionCreators.setUserTestType({ testType: testType })),
    goPrevPage: (value) =>
      dispatch(actionCreators.genderToggle({ genderToggle: value })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTestType);
