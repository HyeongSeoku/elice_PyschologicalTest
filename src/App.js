import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import UserSetting from "./pages/UserSetting";
import { useEffect } from "react";
import api from "./apis/api";
import Intro from "./pages/Intro";
import TestExPage from "./pages/TestExPage";
import MainTestPage from "./pages/MainTestPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Intro />} />
      <Route exact path="/usersetting" element={<UserSetting />} />
      <Route exact path="/example" element={<TestExPage />} />
      <Route exact path="/testmain" element={<MainTestPage />} />
      <Route exact path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
