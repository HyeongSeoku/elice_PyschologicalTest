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

const NameContainer = styled.div`
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

const Input = styled.input`
  width: 500px;
  height: 40px;
  border: none;
  outline: none;
  background-color: transparent !important;
  font-size: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  &:hover,
  :focus {
    border-bottom: 2px solid rgba(0, 0, 0);
  }
`;

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

const UserName = ({ visible, onNameSubmitState, onOffNameToggle }) => {
  const [name, setName] = useState("");

  const onChange = (e) => {
    if (e.target.value.length > 10) {
      alert("이름이 너무 깁니다.");
      e.target.value = name;
    } else {
      setName(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length < 2) {
      alert("이름이 너무 짧습니다😥");
      setName("");
    } else {
      onNameSubmitState(name);
      onOffNameToggle(true); //이름 입력 칸 감춰지고 gender 칸 나오도록
    }
  };
  return (
    <NameContainer visible={visible}>
      <Form onSubmit={onSubmit}>
        <Title>이름을 알려주세요</Title>
        <Input
          placeholder="여기에 입력해주세요."
          onChange={onChange}
          value={name}
        />
        <Button type="submit">확인✔</Button>
      </Form>
    </NameContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  //user 데이터 받아옴
  console.log(state);
  return { visible: state.toggleData.nameToggle };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("PostData:", ownProps);
  return {
    onNameSubmitState: (name) =>
      dispatch(actionCreators.setUserName({ name: name })),
    onOffNameToggle: (value) =>
      dispatch(actionCreators.genderToggle({ genderToggle: value })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserName);
