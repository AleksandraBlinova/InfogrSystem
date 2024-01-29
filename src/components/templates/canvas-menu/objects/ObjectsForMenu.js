import React from "react";
import Figures from "./Figures";
import Lines from "./Lines";
import Photos from "./Photos";

import "./ObjectsForMenu.css";

const ObjectsForMenu = (props) => {
  return (
    <>
      <Figures />
      <Lines />
      <Photos unsplashImagesOnline={props.unsplashImagesOnline} />
    </>
  );
};

export default ObjectsForMenu;
