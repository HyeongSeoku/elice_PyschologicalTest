import React from "react";
import styled from "styled-components";

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
  &:hover {
    background-color: #d5d9eb;
    box-shadow: rgba(213, 217, 235, 0.16) 0px 3px 6px,
      rgba(213, 217, 235, 0.23) 0px 3px 6px;
    transform: translateY(-1px);
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;



const UserForm = (props) => {
  const { name, setName, male, setMale, female, setFemale } = props;
  console.log(name, setName, male, setMale, female, setFemale);

  const onNameChange = (e) =>{
    setName(e.target.value)
  };

  const onMaleCheck = (e)=>{
    setMale(e.target.value)
  }

  const onFemaleCheck = (e)=>{
    setFemale(e.targe.value);
  }
  
  return (
    <Form>
      <Wrap>
        <Lable htmlfor="name_input">이름</Lable>
        <NameInput id="name_input" onChange={onNameChange} />
      </Wrap>
      <Wrap>
        <div>성별</div>
        <GenderContainer>
          <GenderInput type="radio" name="gender" value="male" id="male" />
          <Lable htmlfor="male">남성</Lable>
        </GenderContainer>
        <GenderContainer>
          <GenderInput type="radio" name="gender" value="female" id="female" />
          <Lable htmlfor="female">여성</Lable>
        </GenderContainer>
      </Wrap>
      <SubmitBtn type="submit">검사시작</SubmitBtn>
    </Form>
  );
};

export default UserForm;
