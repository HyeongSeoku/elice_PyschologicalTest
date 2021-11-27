import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { actionCreators } from "../store";

//유저 정보를 입력받을 페이지

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 430px;
  height: 450px;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 8px;
  background-color: whitesmoke;
`;

const Title = styled.div`
  font-size: 25px;
  margin-bottom: 40px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const NameInput = styled.input`
  width: 230px;
  height: 33px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  outline: none;
  background-color: transparent !important;
  font-size: 18px;
  margin-bottom: 30px;
  &:hover,
  :focus {
    border: 1px solid rgba(0, 0, 0, 0.8);
  }
`;

const GenderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MaleLabel = styled.label`
  width: 90px;
  height: 25px;
  display: block;
  background-color: ${(props) => (props.checked ? "#404824" : "#6E7B3E")};
  box-shadow: ${(props) => (props.checked ? "2px 2px 2px black" : "none")};
  cursor: pointer;
  border-radius: 8px;
  margin-right: 5px;
  margin-bottom: 10px;
  font-weight: 600;
  text-align: center;
  align-items: center;
  padding: 5px 10px;
  &:hover {
    background-color: #404824;
  }
`;

const FemaleLabel = styled.label`
  width: 90px;
  height: 25px;
  display: block;
  background-color: ${(props) => (props.checked ? "#652F1F" : "#DA6745")};
  box-shadow: ${(props) => (props.checked ? "2px 2px 2px black" : "none")};
  cursor: pointer;
  border-radius: 8px;
  margin-right: 5px;
  margin-bottom: 10px;
  font-weight: 600;
  text-align: center;
  align-items: center;
  padding: 5px 10px;
  &:hover {
    background-color: #652f1f;
  }
`;

const Answer = styled.input`
  opacity: 0;
`;

const SelectType = styled.select`
  width: 230px;
  margin-bottom: 20px;
  padding: 0.8em 0.5em;
  border: 1px solid #999;
  border-radius: 8px;
`;

const OptionType = styled.option``;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #44546a;
  color: white;
  &:hover {
    background-color: #2b3543;
  }

  &:disabled {
    opacity: 0.7;
    background-color: #454c5a;
    cursor: not-allowed;
  }
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

const UserSetting = ({ user, setUsers }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  //store 업데이트용 gender
  const [storeGender, setStoreGender] = useState("");
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [testType, setTestType] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (gender === "male") {
      setCheck1(true);
      setCheck2(false);
    } else if (gender === "female") {
      setCheck1(false);
      setCheck2(true);
    } else {
      setCheck1(false);
      setCheck2(false);
    }
  }, [gender]);

  useEffect(() => {
    if (name !== "" && gender !== "" && testType !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    console.log("name:", name, "gender:", gender, "testType:", testType);
  }, [name, gender, testType]);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onGenderChange = (e) => {
    setGender(e.target.value);
    if (e.target.value === "male") {
      setStoreGender(100323);
    } else if (e.target.value === "female") {
      setStoreGender(100324);
    }
  };

  const onTestTypeChange = (e) => {
    setTestType(e.target.value);
  };

  const onClick = (e) => {
    //store에 데이터 업데이트
    setUsers(name, storeGender, testType);
  };

  console.log(user);

  return (
    <UserSettingContainer>
      <Form>
        <Title>직업 가치관 검사</Title>
        <NameContainer>
          <NameInput
            placeholder="이름을 입력해주세요."
            onChange={onNameChange}
            value={name}
          />
        </NameContainer>
        <GenderContainer>
          <MaleLabel htmlFor="male" checked={check1}>
            남성
            <Answer
              className="answerInput"
              type="radio"
              name="gender"
              value="male"
              id="male"
              onChange={onGenderChange}
              checked={gender === "male" ? true : false}
            />
          </MaleLabel>
          <FemaleLabel htmlFor="female" checked={check2}>
            여성
            <Answer
              className="answerInput"
              type="radio"
              name="gender"
              value="female"
              id="female"
              onChange={onGenderChange}
              checked={gender === "female" ? true : false}
            />
          </FemaleLabel>
        </GenderContainer>
        <SelectType onChange={onTestTypeChange}>
          <OptionType value="24">직업 가치관 검사 - 중학생</OptionType>
          <OptionType value="25">직업 가치관 검사 - 고등학생</OptionType>
          <OptionType value="6">직업 가치관 검사 - 대학생,일반</OptionType>
        </SelectType>
        <StyledLink to="/example">
          <Button disabled={isDisabled} onClick={onClick}>
            확인
          </Button>
        </StyledLink>
      </Form>
    </UserSettingContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.userData };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUsers: (nameValue, genderValue, testTypeValue) =>
      dispatch(
        actionCreators.setUserData({
          name: nameValue,
          gender: genderValue,
          testType: testTypeValue,
        })
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSetting);
