import React from "react";
import Figures from "./Figures";
import Lines from "./Lines";
import Photos from "./Photos";
import BusinessIcons from "./BusinessIcons";
import Emoji from "./Emoji";
import CityIcons from "./CityIcons";
import "./ObjectsForMenu.css";

const ObjectsForMenu = (props) => {
  return (
    <>
      <Figures />
      <Lines />
      <Photos unsplashImagesOnline={props.unsplashImagesOnline} />
      <BusinessIcons />
      <Emoji />
      <CityIcons />
    </>
  );
};

export default ObjectsForMenu;
