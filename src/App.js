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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/createnewcreative" element={<CreateNewCreative />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route
            path="/withouttempOzon"
            element={<DashboardWithoutTempOzon />}
          />
          <Route path="/withouttempWB" element={<DashboardWithoutTempWB />} />
          <Route path="/withouttempYM" element={<DashboardWithoutTempYM />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
