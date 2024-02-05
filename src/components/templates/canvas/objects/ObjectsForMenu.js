import React from "react";
import Figures from "./Figures";
import Lines from "./Lines";
import Photos from "./Photos";
import BusinessIcons from "./BusinessIcons";
import Emoji from "./Emoji";
import CityIcons from "./CityIcons";
import "./ObjectsForMenu.css";

const ObjectsForMenu = ({
  unsplashImagesOnline,
  handleChangeClickOnUnsplash,
}) => {
  return (
    <>
      <Figures handleChangeClickOnUnsplash={handleChangeClickOnUnsplash} />
      <Lines handleChangeClickOnUnsplash={handleChangeClickOnUnsplash} />
      <Photos
        unsplashImagesOnline={unsplashImagesOnline}
        handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
      />
      <BusinessIcons
        handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
      />
      <Emoji handleChangeClickOnUnsplash={handleChangeClickOnUnsplash} />
      <CityIcons handleChangeClickOnUnsplash={handleChangeClickOnUnsplash} />
    </>
  );
};

export default ObjectsForMenu;
