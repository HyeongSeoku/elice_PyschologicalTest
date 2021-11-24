import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ProgressContainer = styled.div`
  width: 400px;
  height: 30px;
  border: 1px solid;
  border-radius: 8px;
  opacity: 1;
`;
const ProgressPercent = styled.div`
  width: ${(props) => props.width}px;
  background-color: blue;
`;

const ProgressBar = ({ checkedData }) => {
  const count = checkedData.filter((ele) => ele.result !== "").length;
  console.log(count);
  return (
    <ProgressContainer>
      <ProgressPercent width={count * 14.28} />
    </ProgressContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { checkedData: state.userData.answers };
};

export default connect(mapStateToProps)(ProgressBar);
