import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import api from "../apis/api";

const ResultPage = ({ resultAnswer, user }) => {
  useEffect(() => {
    let postAnswer = "";
    resultAnswer
      .filter((ele) => ele.id !== "0")
      .forEach((i) => {
        postAnswer += ("B" + i.qitemNo + "=" + i.answerScore + " ").toString();
      });
    const postData = async () => {
      const request = await api.sendResult(
        {
          apikey: "c15f8d16ad99a739acc9dbea7f2c5535",
          qestrnSeq: user.testType,
          trgetSe: 100209,
          name: user.name,
          gender: user.gender,
          startDtm: user.startDtm,
          answers: postAnswer,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const params = new URL(request.data.RESULT.url).searchParams;
      const seq = params.get("seq");
      const resultReq = await api.getResult(seq);

      console.log(resultReq);
    };
    postData();
  }, []);

  return (
    <>
      <div>결과 페이지</div>
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return { resultAnswer: state.userData.answers, user: state.userData };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
