//q ={24:중학생,25:고등학생,6:대학생,일반}

const TEST_LIST_END_POINT =
  "https://www.career.go.kr/inspct/openapi/test/questions";
const TEST_RESULT_END_POINT =
  "https://www.career.go.kr/inspct/openapi/test/report";

const API_KEY = "c15f8d16ad99a739acc9dbea7f2c5535";

const axiosGet = async () => {};

const api = {
  getList: async () => {
    return axiosGet(`${TEST_END_POINT}?apikey=${API_KEY}&q=1`);
  },
  getResult: async () => {
    return axiosGet(`${TEST_RESULT_END_POINT}?apikey=${API_KEY}&qestrnSeq=`);
  },
};
