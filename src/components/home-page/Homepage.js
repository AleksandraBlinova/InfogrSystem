import React from "react";
import AppBarComponent from "../app-bar/Appbar";
import HPFirstSec from "./hp-fisrt-sec/HPFirstSec";
import Footer from "../footer/Footer";

export default function Homepage({ isLog, setLog, authResult }) {
  return (
    <div>
      <AppBarComponent isLog={isLog} setLog={setLog} authResult={authResult} />
      <HPFirstSec />
      <Footer />
    </div>
  );
}
