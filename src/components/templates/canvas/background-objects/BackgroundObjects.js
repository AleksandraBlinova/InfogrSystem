import React from "react";
import Textures from "./Textures";
import PhotoGradients from "./PhotoGradients";
import Photos from "../objects/Photos";
import Abstracts from "./Abstracs";
import WaterPhotos from "./WaterPhotos";

const BackgroundObjects = ({
  unsplashImagesOnline,
  handleChangeClickOnUnsplash,
  unsplashTextures,
  unsplashPhotoGradients,
  unsplashAbstracts,
  unsplashWater,
}) => {
  return (
    <div>
      <Textures
        unsplashTextures={unsplashTextures}
        handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
      />
      <PhotoGradients
        unsplashPhotoGradients={unsplashPhotoGradients}
        handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
      />
      <Photos
        unsplashImagesOnline={unsplashImagesOnline}
        handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
      />
      <Abstracts
        unsplashAbstracts={unsplashAbstracts}
        handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
      />
      <WaterPhotos
        unsplashWater={unsplashWater}
        handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
      />
    </div>
  );
};

export default BackgroundObjects;
