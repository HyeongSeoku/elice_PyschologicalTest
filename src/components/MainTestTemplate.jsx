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
  width: 500px;
  height: 150px;
  padding: 20px 5px;
  margin-bottom: 25px;
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

const Title = styled.h3`
  display: inline-block;
  margin: 0, 0, 5px, 0;
`;

const SubTitle = styled.div`
  font-size: 15px;
  display: inline-block;
  margin-left: 5px;
`;

const Label = styled.label`
  width: 150px;
  height: 35px;
  display: block;
  background-color: ${(props) => (props.checked ? "#13628C" : "#23aaf2")};
  cursor: pointer;
  border-radius: 8px;
  margin-right: 5px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  text-align: center;
  &:hover {
    background-color: #187cb2;
  }
`;

const Answer = styled.input`
  opacity: 0;
`;

const AnswerContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

const AnswerTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
`;

const HoverDiv = styled.div`
  display: inline-block;
  width: 20px;
  text-align: center;
  background-color: white;
  margin-left: 20px;
  border: 1px solid;
  border-radius: 15px;
`;

const MainTestTemplate = ({ qData, setUserAnswer, ResultAnswers }) => {
  const { data } = qData;
  const targetId = ResultAnswers.filter(
    (ele) => ele.id === `${data.pageNum}_${data.qitemNo}`
  );
  //화면에 보여지는 Label 체크여부를 위해 (ui)
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  //페이지 이동시에도 체크 유지되게 하기 위해서
  useEffect(() => {
    if (targetId[0].result === "answer1") {
      setChecked1(true);
      setChecked2(false);
    } else if (targetId[0].result === "answer2") {
      setChecked1(false);
      setChecked2(true);
    }
  }, []);

  const onChange = (e) => {
    // 버튼 누를때마다 액션 작동
    if (e.target.value === "answer1") {
      setChecked1(true);
      setChecked2(false);
      setUserAnswer(
        `${data.pageNum}_${data.qitemNo}`,
        data.qitemNo,
        e.target.value,
        data.pageNum,
        data.answerScore01,
        true
      );
    } else {
      setUserAnswer(
        `${data.pageNum}_${data.qitemNo}`,
        data.qitemNo,
        e.target.value,
        data.pageNum,
        data.answerScore02,
        true
      );
      setChecked1(false);
      setChecked2(true);
    }
  };

  return (
    <TemplateContainer>
      <Title>
        Q.{data.qitemNo}
        <SubTitle>{data.question}</SubTitle>
      </Title>
      <AnswerContainer>
        <Label
          htmlFor={`${qData.data.pageNum}_${qData.data.qitemNo}_answer1`}
          checked={checked1}
        >
          <AnswerTitle>{data.answer01}</AnswerTitle>
          <HoverDiv title={data.answer03}>❓</HoverDiv>
          <Answer
            className="answerInput"
            type="radio"
            name="answer"
            value="answer1"
            id={`${qData.data.pageNum}_${qData.data.qitemNo}_answer1`}
            onChange={onChange}
            checked={targetId[0].result === "answer1" ? true : false}
          />
        </Label>
        <Label
          htmlFor={`${qData.data.pageNum}_${qData.data.qitemNo}_answer2`}
          checked={checked2}
        >
          <AnswerTitle>{data.answer02}</AnswerTitle>
          <HoverDiv title={data.answer04}>❓</HoverDiv>
          <Answer
            className="answerInput"
            type="radio"
            name="answer"
            value="answer2"
            id={`${qData.data.pageNum}_${qData.data.qitemNo}_answer2`}
            onChange={onChange}
            checked={targetId[0].result === "answer2" ? true : false}
          />
        </Label>
      </AnswerContainer>
    </TemplateContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { qData: ownProps, ResultAnswers: state.userData.answers };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUserAnswer: (id, quitemNo, result, pageNo, answerScore, checked) =>
      dispatch(
        actionCreators.setAnswers({
          id: id,
          qitemNo: quitemNo,
          result: result,
          pageNo: pageNo,
          answerScore: answerScore,
          checked: checked,
        })
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTestTemplate);
