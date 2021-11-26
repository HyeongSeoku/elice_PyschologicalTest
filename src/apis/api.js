import axios from "axios";

//q ={24:중학생,25:고등학생,6:대학생,일반}

const TEST_LIST_END_POINT =
  "https://www.career.go.kr/inspct/openapi/test/questions";
const TEST_RESULT_END_POINT =
  "https://www.career.go.kr/inspct/openapi/test/report";

export const API_KEY = "c15f8d16ad99a739acc9dbea7f2c5535";

const axiosGet = async (url) => {
  const result = await axios.get(url);
  switch (result.status) {
    case 200:
      return result;
    case 404:
      console.error("데이터가 없습니다");
    case 500:
      console.error("네트워크 오류 발생");
  }
};

//검사 결과 전송
const axiosPost = async (url, data, contentType) => {
  const request = await axios.post(url, data, contentType);
  switch (request.status) {
    case 200:
      return request;
    case 400:
      console.error("데이터가 없습니다");
    case 500:
      console.error("네트워크 오류 발생");
  }
};

const api = {
  getList: async (type) => {
    //설문 코드에 따라서 값 다르게 받기 위해 type 매개변수 추가
    return axiosGet(`${TEST_LIST_END_POINT}?apikey=${API_KEY}&q=${type}`);
  },
  //검사 결과 받아옴
  getResult: async (value) => {
    return axiosGet(
      `https://cors-anywhere.herokuapp.com/${TEST_RESULT_END_POINT}&seq=${value}`
    );
  },
  sendResult: async (data, contentType) => {
    return axiosPost(`${TEST_RESULT_END_POINT}`, data, contentType);
  },
};

export default api;
