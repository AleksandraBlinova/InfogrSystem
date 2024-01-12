import React from "react";
import AppBarCreatives from "./app-bar-creatives/AppbarCreatives";
import FooterCreatives from "./footer-creatives/FooterCreatives";
import MainpartCreatives from "./main-part-creatives/MainpartCreatives";
const CreateNewCreative = () => {
  return (
    <div>
      <AppBarCreatives />
      <div>
        <MainpartCreatives />
      </div>
      <FooterCreatives />
    </div>
  );
};

export default CreateNewCreative;
