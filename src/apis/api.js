import axios from "axios";

//q ={24:중학생,25:고등학생,6:대학생,일반}

const TEST_LIST_END_POINT =
  "https://www.career.go.kr/inspct/openapi/test/questions";
const TEST_RESULT_END_POINT =
  "https://www.career.go.kr/inspct/openapi/test/report";

const API_KEY = "c15f8d16ad99a739acc9dbea7f2c5535";

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

const api = {
  getList: async () => {
    return axiosGet(`${TEST_LIST_END_POINT}?apikey=${API_KEY}&q=6`);
  },
  getResult: async () => {
    return axiosGet(`${TEST_RESULT_END_POINT}?apikey=${API_KEY}&qestrnSeq=`);
  },
};

export default api;
