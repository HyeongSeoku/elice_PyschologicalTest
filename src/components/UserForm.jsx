import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { actionCreators } from "../store";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Lable = styled.label``;

const NameInput = styled.input`
  margin-top: 8px;
  font-size: 18px;
  width: 200px;
  height: 30px;
`;

const GenderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const GenderInput = styled.input`
  margin-right: 10px;
`;

//Input 값이 제대로 넘겨졌는지 확인
const SubmitBtn = styled.button`
  width: 100px;
  height: 37px;
  border: 1px solid #8213dd;
  color: #8213dd;
  font-size: 15px;
  border-radius: 3px;
  background-color: white;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  &:hover {
    background-color: #d5d9eb;
    box-shadow: rgba(213, 217, 235, 0.16) 0px 3px 6px,
      rgba(213, 217, 235, 0.23) 0px 3px 6px;
    transform: translateY(-1px);
  }
`;

const Deactivate = styled.div`
  width: 250px;
  height: 30px;
  text-align: center;
  background-color: #b3b8c5;
  border-radius: 5px;
  visibility: ${(props) => (props.visible ? "hidden" : "visible")};
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const UserForm = ({ onSubmitState, user }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [toggle, setToggle] = useState(false);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onRadioChange = (e) => {
    setGender(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length < 2 || name.length > 10) {
      alert("올바른 이름을 입력해주세요.");
      setName(""); //이름 초기화
    } else {
      const str = name.replace(/(\s*)/g, ""); //이름의 공백 제거 (정규식)
      setName(str);

      onSubmitState(name, gender); //redux를 통한 상태 변경
      //입력값 초기화
      setName("");
      setGender("");
    }
  };

  //❗[2021 - 11 -16 : 버튼 자체를 안보이게 할지 , 버튼을 눌렀을때 alert 가 뜨게할지 추후 결정]
  useEffect(() => {
    if (name !== "" && gender !== "") {
      //이름과 성별이 입력됐을때 버튼 활성화를 위해
      setToggle(true); //버튼 활성화
    } else {
      //입력했다가 지웠을 경우 다시 비활성화
      setToggle(false);
    }
  }, [gender, name, toggle]);

  return (
    <Form onSubmit={onSubmit}>
      <Wrap>
        <Lable htmlfor="name_input">이름</Lable>
        <NameInput id="name_input" onChange={onNameChange} value={name} />
      </Wrap>
      <Wrap>
        <div>성별</div>
        <GenderContainer>
          <GenderInput
            type="radio"
            name="gender"
            value="male"
            id="male"
            onChange={onRadioChange}
            checked={gender === "male" ? true : false}
          />
          <Lable htmlfor="male">남성</Lable>
        </GenderContainer>
        <GenderContainer>
          <GenderInput
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={onRadioChange}
            checked={gender === "female" ? true : false}
          />
          <Lable htmlfor="female">여성</Lable>
        </GenderContainer>
      </Wrap>
      <Deactivate visible={toggle}>이름과 성별을 입력해주세요</Deactivate>
      <SubmitBtn type="submit" visible={toggle}>
        검사시작
      </SubmitBtn>
    </Form>
  );
};

const mapStateToProps = (state, ownProps) => {
  //user 데이터 받아옴
  return { user: state.userData };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("PostData:", ownProps);
  return {
    onSubmitState: (name, gender) =>
      dispatch(actionCreators.setUser({ name: name, gender: gender })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
