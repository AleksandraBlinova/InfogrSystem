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
      <Textures unsplashTextures={unsplashTextures} />
      <PhotoGradients unsplashPhotoGradients={unsplashPhotoGradients} />
      <Photos
        unsplashImagesOnline={unsplashImagesOnline}
        handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
      />
      <Abstracts unsplashAbstracts={unsplashAbstracts} />
      <WaterPhotos unsplashWater={unsplashWater} />
    </div>
  );
};

export default BackgroundObjects;
