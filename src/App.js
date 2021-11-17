import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import UserSetting from "./pages/UserSetting";
import { useEffect } from "react";
import api from "./apis/api";
import { get } from "http";
import Intro from "./pages/Intro";

function App() {
  useEffect(() => {
    const getData = async () => {
      const result = await api.getList();
      console.log(result.data.RESULT);
    };
    getData();
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Intro />} />
      <Route exact path="/usersetting" element={<UserSetting />} />
    </Routes>
  );
}

export default App;
