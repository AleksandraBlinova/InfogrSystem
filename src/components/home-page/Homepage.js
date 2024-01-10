import React from "react";
import AppBarComponent from "../app-bar/Appbar";
import HPFirstSec from "./hp-fisrt-sec/HPFirstSec";
import Footer from "../footer/Footer";

export default function Homepage() {
  return (
    <div>
      <AppBarComponent />
      <HPFirstSec />
      <Footer />
    </div>
  );
}
