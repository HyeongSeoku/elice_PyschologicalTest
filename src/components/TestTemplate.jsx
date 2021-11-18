import React from "react";
import styled from "styled-components";

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
  height: 500px;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const TestTemplate = () => {
  return <TemplateContainer></TemplateContainer>;
};

export default TestTemplate;
