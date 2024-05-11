import React, { useState, useEffect } from "react";
import AppBarCreatives from "../app-bar-creatives/AppbarCreatives";
import FooterCreatives from "../footer-creatives/FooterCreatives";
import MainpartCreatives from "./main-part-creatives/MainpartCreatives";
import axios from "axios";
const CreateNewCreative = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <AppBarCreatives
        handleListItemClick={handleListItemClick}
        selectedIndex={selectedIndex}
      />
      <div>
        <MainpartCreatives />
      </div>
      <FooterCreatives />
    </div>
  );
};

export default CreateNewCreative;
