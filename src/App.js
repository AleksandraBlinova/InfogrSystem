import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import Homepage from "./components/home-page/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppBarComponent from "./components/app-bar/Appbar";
import CreateNewCreative from "./components/create-new-creative/CreateNewCreative";
import NewProject from "./components/projects/new-project/NewProject";
import DashboardWithoutTempOzon from "./components/templates/dashboard-without-template-Ozon/DashboardWithoutTempOzon";
import DashboardWithoutTempWB from "./components/templates/dashboard-without-template-WB/DashboardWithoutTempWB";
import DashboardWithoutTempYM from "./components/templates/dashboard-without-template-YM/DashboardWithoutTempYM";
import Authorization from "./components/forms/Authorization";
import Registration from "./components/forms/Registration";
import FormSuccessLog from "./components/forms/FormSuccessLog";
import ChooseUserAttributes from "./components/projects/choose-user-attributes/ChooseUserAttributes";
import Recommendations from "./components/recommendations/Recommendations";

function App() {
  const [isLog, setLog] = useState(localStorage.getItem("isLog") === "true");
  let [authResult, setAuthResult] = useState("");
  const [isRegister, setIsRegister] = useState("false");
  const handleChangeIsRegister = (val) => {
    setIsRegister(val);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage isLog={isLog} />} />
          <Route path="/createnewcreative" element={<CreateNewCreative />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route
            path="/withouttempOzon"
            element={<DashboardWithoutTempOzon />}
          />
          <Route path="/withouttempWB" element={<DashboardWithoutTempWB />} />
          <Route path="/withouttempYM" element={<DashboardWithoutTempYM />} />
          <Route
            path="/chooseUserAttributes"
            element={<ChooseUserAttributes />}
          />
          <Route path="/recomend" element={<Recommendations />} />
          <Route
            path="/login"
            element={
              !isLog ? (
                <Authorization
                  setLog={setLog}
                  authResult={authResult}
                  setAuthResult={setAuthResult}
                />
              ) : (
                <Homepage
                  isLog={isLog}
                  setLog={setLog}
                  authResult={authResult}
                />
              )
            }
          />
          <Route
            path="/register"
            element={
              isRegister == "false" ? (
                <Registration handleChangeIsRegister={handleChangeIsRegister} />
              ) : (
                <FormSuccessLog />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
