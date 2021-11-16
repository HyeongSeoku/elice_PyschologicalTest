import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import UserSetting from "./pages/UserSetting";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<UserSetting />} />
    </Routes>
  );
}

export default App;
