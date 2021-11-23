import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { actionCreators } from "../store";

const fadeIn = keyframes`
  from{
    opacity: 0
  }
  to{
    opacity: 1
  }
`;

const TemplateContainer = styled.div`
  width: 550px;
  height: 150px;
  padding: 20px;
  margin-bottom: 20px;
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

const Title = styled.h3``;

const Label = styled.label`
  width: 450px;
  height: 35px;
  display: block;
  background-color: ${(props) => (props.checked ? "#13628C" : "#23aaf2")};
  cursor: pointer;
  border-radius: 8px;
  margin-right: 5px;
  margin-bottom: 10px;
  align-items: center;
  padding: 5px 10px;
  &:hover {
    background-color: #187cb2;
  }
`;

const Answer = styled.input`
  opacity: 0;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AnswerTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const AnswerDescribe = styled.div`
  font-size: 13px;
`;

const ResultBtn = styled.div``;

/*
// 버튼 누를때마다 액션 변경
How? 페이지 번호_문제번호:페이지 번호_문제번호_answer1 or answer02 

*/
const MainTestTemplate = ({ qData, setUserAnswer }) => {
  const { data } = qData;
  const [answer, setAnswer] = useState("");
  //화면에 보여지는 Label 체크여부를 위해 (ui)
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  useEffect(() => {
    if (answer === "answer1") {
      setChecked1(true);
      setChecked2(false);
      setUserAnswer(`${qData.data.pageNum}_${qData.data.qitemNo}`, answer);
    } else if (answer === "answer2") {
      setChecked1(false);
      setChecked2(true);
      setUserAnswer(`${qData.data.pageNum}_${qData.data.qitemNo}`, answer);
    }
    console.log(answer);
  }, [answer]);

  const onChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <TemplateContainer>
      <Title>{data.question}</Title>
      <AnswerContainer>
        <Label
          htmlFor={`${qData.data.pageNum}_${qData.data.qitemNo}_answer1`}
          checked={checked1}
        >
          <AnswerTitle>{data.answer01}</AnswerTitle>
          <AnswerDescribe>{data.answer03}</AnswerDescribe>
          <Answer
            className="answerInput"
            type="radio"
            name="answer"
            value="answer1"
            id={`${qData.data.pageNum}_${qData.data.qitemNo}_answer1`}
            onChange={onChange}
            checked={answer === "answer1" ? true : false}
          />
        </Label>
        <Label
          htmlFor={`${qData.data.pageNum}_${qData.data.qitemNo}_answer2`}
          checked={checked2}
        >
          <AnswerTitle>{data.answer02}</AnswerTitle>
          <AnswerDescribe>{data.answer04}</AnswerDescribe>
          <Answer
            className="answerInput"
            type="radio"
            name="answer"
            value="answer2"
            id={`${qData.data.pageNum}_${qData.data.qitemNo}_answer2`}
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

const mapDispatchToProps = (dispatch, ownProps) => {
  //
  return {
    setUserAnswer: (id, result) =>
      dispatch(actionCreators.setAnswers({ id: id, result: result })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTestTemplate);
