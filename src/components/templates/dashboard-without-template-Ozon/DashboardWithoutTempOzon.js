import React, { useRef, useEffect, useState } from "react";
import Canvas from "../canvas/Canvas";
import CanvasMenu from "../canvas/CanvasMenu";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";

const DashboardWithoutTempOzon = () => {
  const [allImagesOnStage, setAllImagesOnStage] = useState([]);

  const [unsplashImagesOnline, setUnsplashImagesOnline] = useState([]);

  const fetchAPIUnsplash = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=RKnG9ADSOyqmCXxJ_9nf3au8Ie-E5kzFcdIkVFIcLNc"
    );
    const data = await response.data;
    setUnsplashImagesOnline(data);
  };

  const [clickOnUnsplash, setClickOnUnsplash] = useState();

  const handleChangeClickOnUnsplash = (value) => {
    const file = new File([value], "photo.jpeg", { type: "image/jpeg" });
    setClickOnUnsplash(file);
    setPreviewUrl(value);
    addImage(file, value);
  };

  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  const [openedFirstTime, setOpenedFirstTime] = React.useState(true);

  const handleOpenedFirstTime = (value) => {
    setOpenedFirstTime(value);
  };

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const [uploadedImagesDrDr, setuploadedImagesDrDr] = useState([]);

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFile(e.dataTransfer.files[0]);
    handleOpenedFirstTime(false);
    setImagePaperActiveType(e.dataTransfer.files[0].type);
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const [previewUrl, setPreviewUrl] = useState("");
  const [imagePaperActive, setImagePaperActive] = useState();

  const [imagePaperActiveType, setImagePaperActiveType] = useState(null);

  const handleFile = (file) => {
    //you can carry out any file validations here...
    setImagePaperActive(file);
    setPreviewUrl(window.URL.createObjectURL(file));

    if (!file.type == "") {
      setuploadedImagesDrDr((uploadedImagesDrDr) => [
        ...uploadedImagesDrDr,
        window.URL.createObjectURL(file),
      ]);

      addImage(file, "");
    }
  };

  const removeImgFromHistory = (imgSrc) => {
    setuploadedImagesDrDr(uploadedImagesDrDr.filter((i) => imgSrc != i));
  };

  const handleChangeImgFromHist = (imgsrcCanvas) => {
    setPreviewUrl(imgsrcCanvas);
    setImagePaperActiveType(imgsrcCanvas);
  };

  const [selectedShape, setSelectedShape] = useState(null);

  const handleClickKeyDown = (e) => {
    if ((e.key === "Delete" || e.key === "Backspace") && selectedShape) {
      setAllImagesOnStage(
        allImagesOnStage.filter((i) => i.id - 1 != selectedShape.index)
      );
      setSelectedShape(null);
    }
  };

  ///////canvas

  const addImage = (file, url) => {
    const imageFile = file;
    if (imageFile) {
      var reader = new FileReader();
      reader.onload = function (event) {
        const newImage = {
          type: "image",
          id: allImagesOnStage.length + 1,
          x: 0,
          y: 0,
          image: new window.Image(),
        };

        if (url) newImage.image.src = url;
        else newImage.image.src = event.target.result;

        setAllImagesOnStage([...allImagesOnStage, newImage]);
      };
      reader.readAsDataURL(imageFile);
    }
  };
  //////////canvas

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#FAFAFA" }}>
      <Grid
        width="100%"
        height={80}
        container
        sx={{
          backgroundColor: "#FFF",
          marginBottom: "50px",
          border: "1px solid #bab6b6",
        }}
      ></Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={5} key={1}>
          <CanvasMenu
            onButtonClick={onButtonClick}
            handleChange={handleChange}
            handleDrop={handleDrop}
            handleDrag={handleDrag}
            dragActive={dragActive}
            inputRef={inputRef}
            unsplashImagesOnline={unsplashImagesOnline}
            fetchAPIUnsplash={fetchAPIUnsplash}
            handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
            uploadedImagesDrDr={uploadedImagesDrDr}
            setuploadedImagesDrDr={setuploadedImagesDrDr}
            removeImgFromHistory={removeImgFromHistory}
            handleChangeImgFromHist={handleChangeImgFromHist}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4} key={2}>
          <Canvas
            previewUrl={previewUrl}
            imagePaperActive={imagePaperActive}
            openedFirstTime={openedFirstTime}
            imagePaperActiveType={imagePaperActiveType}
            clickOnUnsplash={clickOnUnsplash}
            unsplashImagesOnline={unsplashImagesOnline}
            handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
            uploadedImagesDrDr={uploadedImagesDrDr}
            setImagePaperActiveType={setImagePaperActiveType}
            allImagesOnStage={allImagesOnStage}
            handleClickKeyDown={handleClickKeyDown}
            selectedShape={selectedShape}
            setSelectedShape={setSelectedShape}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardWithoutTempOzon;
