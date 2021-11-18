import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from{
    opacity: 0
  }
  to{
    opacity: 1
  }
`;

const TemplateContainer = styled.div`
  width: 600px;
  height: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  border: 1px solid;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Title = styled.h2``;

const Label = styled.label`
  width: 300px;
  height: 40px;
  display: block;
  background-color: ${(props) => (props.checked ? "#1b86bf" : "#23aaf2")};
  cursor: pointer;
  border-radius: 8px;
  margin-right: 5px;
  &:hover {
    background-color: #1b86bf;
  }
`;

const Answer = styled.input`
  opacity: 0;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TestTemplate = ({ qData }) => {
  const { data } = qData;
  const [answer, setAnswer] = useState("");
  //화면에 보여지는 Label 체크여부를 위해 (ui)
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  useEffect(() => {
    console.log(data[0]);
    if (answer === "answer1") {
      setChecked1(true);
      setChecked2(false);
    } else if (answer === "answer2") {
      setChecked1(false);
      setChecked2(true);
    }
  }, [answer]);

  const onChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <TemplateContainer>
      <Title>{data[0].question}</Title>
      <AnswerContainer>
        <Label htmlFor="answer1" checked={checked1}>
          {data[0].answer01}
          <Answer
            className="answerInput"
            type="radio"
            name="answer"
            value="answer1"
            id="answer1"
            onChange={onChange}
            checked={answer === "answer1" ? true : false}
          />
        </Label>
        <Label htmlFor="answer2" checked={checked2}>
          {data[0].answer02}
          <Answer
            className="answerInput"
            type="radio"
            name="answer"
            value="answer2"
            id="answer2"
            onChange={onChange}
            checked={answer === "answer2" ? true : false}
          />
        </Label>
      </AnswerContainer>
    </TemplateContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("탬플릿:", state, ownProps);
  return { qData: ownProps };
};

export default connect(mapStateToProps)(TestTemplate);
