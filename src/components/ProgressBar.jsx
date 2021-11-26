import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ProgressContainer = styled.div`
  width: 400px;
  height: 20px;
  border: 1px solid;
  border-radius: 8px;
`;
const ProgressPercent = styled(ProgressContainer)`
  width: ${(props) => props.percent}%;
  background-color: blue;
`;

const ProgressBar = ({ checkedData }) => {
  const count = checkedData.filter((ele) => ele.result !== "").length;
  console.log(count);
  return (
    <ProgressContainer>
      <ProgressPercent percent={count * 3.57} />
      <div>
        {count}/{checkedData.length - 1}
      </div>
    </ProgressContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { checkedData: state.userData.answers };
};

export default connect(mapStateToProps)(ProgressBar);
