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

const GenderContainer = styled.div`
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

const GenderInput = styled.input`
  margin-right: 10px;
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

const UserGeder = ({
  visible,
  name,
  onGenderSubmitState,
  onOffGenderToggle,
}) => {
  const [gender, setGender] = useState("");

  const onRadioChange = (e) => {
    setGender(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (gender === "") {
      alert("성별을 입력해주세요😥");
    } else {
      onGenderSubmitState(gender);
      onOffGenderToggle(true);
    }
  };

  return (
    <GenderContainer visible={visible}>
      <Form onSubmit={onSubmit}>
        <Title>{name}님 성별을 알려주세요</Title>
        <div>남성</div>
        <GenderInput
          type="radio"
          name="gender"
          value="male"
          id="male"
          onChange={onRadioChange}
          checked={gender === "male" ? true : false}
        />
        <div>여성</div>
        <GenderInput
          type="radio"
          name="gender"
          value="female"
          id="female"
          onChange={onRadioChange}
          checked={gender === "female" ? true : false}
        />
        <Button type="submit">확인✔</Button>
      </Form>
    </GenderContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  //user 데이터 받아옴
  return { visible: state.toggleData.genderToggle, name: state.userData.name };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("PostData:", ownProps);
  return {
    onGenderSubmitState: (gender) =>
      dispatch(actionCreators.setUserGender({ gender: gender })),
    onOffGenderToggle: (value) =>
      dispatch(actionCreators.testTypeToggle({ testTypeToggle: value })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserGeder);
