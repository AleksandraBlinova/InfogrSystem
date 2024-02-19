import React, { useRef, useEffect, useState } from "react";
import Canvas from "../canvas/Canvas";
import CanvasMenu from "../canvas/CanvasMenu";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import CanvasProjects from "../canvas/CanvasProjects";

const DashboardWithoutTempOzon = () => {
  const [allObjectsOnStage, setallObjectsOnStage] = useState([]); //для отображения всех фоток на холсте

  const [allObjectsOnCURRENTStage, setallObjectsOnCURRENTStage] = useState([]); //для отображения всех фоток на холсте

  let [numberOfStages, setNumberOfStages] = useState([1]);
  let [currentStageIndex, setCurrentStageIndex] = useState(1);

  ////////photos from unsplash
  const [unsplashImagesOnline, setUnsplashImagesOnline] = useState([]);

  const fetchAPIUnsplash = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=RKnG9ADSOyqmCXxJ_9nf3au8Ie-E5kzFcdIkVFIcLNc"
    );
    const data = await response.data;
    setUnsplashImagesOnline(data);
  };
  ////////photos from unsplash

  ////////Textures from unsplash
  const [unsplashTextures, setUnsplashTextures] = useState([]);

  const fetchAPIUnsplashTextures = async () => {
    const query = "texture";
    const clientId = "RKnG9ADSOyqmCXxJ_9nf3au8Ie-E5kzFcdIkVFIcLNc";
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${clientId}`
    );
    const data = await response.data.results;
    setUnsplashTextures(data);
  };
  ////////Textures from unsplash

  ////////photo gradients from unsplash
  const [unsplashPhotoGradients, setUnsplashPhotoGradients] = useState([]);

  const fetchAPIUnsplashPhotoGradients = async () => {
    const query = "gradient";
    const clientId = "RKnG9ADSOyqmCXxJ_9nf3au8Ie-E5kzFcdIkVFIcLNc";
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${clientId}`
    );
    const data = await response.data.results;
    setUnsplashPhotoGradients(data);
  };
  ////////photo gradients from unsplash

  ////////abstracts from unsplash
  const [unsplashAbstracts, setUnsplashAbstracts] = useState([]);

  const fetchAPIUnsplashAbstracts = async () => {
    const query = "abstract background";
    const clientId = "RKnG9ADSOyqmCXxJ_9nf3au8Ie-E5kzFcdIkVFIcLNc";
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${clientId}`
    );
    const data = await response.data.results;
    setUnsplashAbstracts(data);
  };
  ////////abstracts gradients from unsplash

  ////////water from unsplash
  const [unsplashWater, setUnsplashWater] = useState([]);

  const fetchAPIUnsplashWater = async () => {
    const query = "water background";
    const clientId = "RKnG9ADSOyqmCXxJ_9nf3au8Ie-E5kzFcdIkVFIcLNc";
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${clientId}`
    );
    const data = await response.data.results;
    setUnsplashWater(data);
  };
  ////////water from unsplash

  const [clickOnUnsplash, setClickOnUnsplash] = useState();

  const handleChangeClickOnUnsplash = (value) => {
    let file;
    if (
      value.includes("figures") ||
      value.includes("emoji") ||
      value.includes("icon")
    )
      file = new File([value], "photo.png", { type: "image/png" });
    else if (value.includes("lines"))
      file = new File([value], "line.png", { type: "image/png" });
    else file = new File([value], "photo.jpeg", { type: "image/jpeg" });

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
      if (
        allObjectsOnCURRENTStage.length == 1 &&
        allObjectsOnCURRENTStage[0].id != selectedShape.index
      ) {
        setallObjectsOnCURRENTStage(allObjectsOnCURRENTStage.splice(0, 1));
        setallObjectsOnStage(allObjectsOnStage.splice(0, 1));
      }
      setallObjectsOnStage(
        allObjectsOnStage.filter((i) => i.id - 1 != selectedShape.index)
      );

      setallObjectsOnCURRENTStage(
        allObjectsOnCURRENTStage.filter((i) => i.id - 1 != selectedShape.index)
      );
      setSelectedShape(null);
    }
  };

  ///////canvas

  const addImage = (file, url) => {
    let typeofPhoto;
    if (url) {
      if (url.includes("figures")) {
        if (url.includes("квадрат")) typeofPhoto = "figures_quadrat";
        else if (url.includes("круг")) typeofPhoto = "figures_circle";
        else if (url.includes("треугольник")) typeofPhoto = "figures_triangle";
        else if (url.includes("трапеция")) typeofPhoto = "figures_4angles";
        else if (url.includes("пентагон")) typeofPhoto = "figures_5angles";
        else if (url.includes("шестиугольник")) typeofPhoto = "figures_6angles";
        else if (url.includes("восьмиугольник"))
          typeofPhoto = "figures_8angles";
        else if (url.includes("звезда")) typeofPhoto = "figures_star";
      } else if (url.includes("lines")) {
        if (url.includes("1line")) typeofPhoto = "lines_simple";
        else if (url.includes("2line")) typeofPhoto = "lines_dotted_smalldotes";
        else if (url.includes("3line")) typeofPhoto = "lines_dotted_bigdotes";
        else if (url.includes("7line")) typeofPhoto = "lines_arrawsimple";
        else if (url.includes("8line")) typeofPhoto = "lines_arrawdashed";
      } else if (url.includes("emoji")) typeofPhoto = "emoji";
      else if (url.includes("city")) typeofPhoto = "city_icons";
      else if (url.includes("business")) typeofPhoto = "business_icons";
      else if (url.includes("unsplash")) typeofPhoto = "unsplash";
      else typeofPhoto = "";
    } else typeofPhoto = "drag_drop";

    const imageFile = file;
    if (imageFile) {
      var reader = new FileReader();
      reader.onload = function (event) {
        let newImage;
        if (imageFile.type.includes("png")) {
          newImage = {
            type: "image",
            id: allObjectsOnStage.length + 1,
            x: 180,
            y: 220,
            image: new window.Image(),
            typeofImage: typeofPhoto,
            fill: "#bdbdbd",
            stroke: "#000",
            width: 85,
            height: 85,
            slideIndex: currentStageIndex,
          };
        } else {
          newImage = {
            type: "image",
            id: allObjectsOnStage.length + 1,
            x: 0,
            y: 0,
            width: 450,
            height: 580,
            image: new window.Image(),
            typeofImage: typeofPhoto,
            slideIndex: currentStageIndex,
          };
        }

        if (url) newImage.image.src = url;
        else newImage.image.src = event.target.result;

        setallObjectsOnStage([...allObjectsOnStage, newImage]);
        setallObjectsOnCURRENTStage([...allObjectsOnCURRENTStage, newImage]);
      };
      reader.readAsDataURL(imageFile);
    }
  };
  //////////canvas

  ///////canvas text area

  const textInputRef = useRef();

  const addText = () => {
    const newText = {
      type: "text",
      id: allObjectsOnStage.length + 1,
      x: 100,
      y: 100,
      text: textInputRef.current.value,
      fontSize: 24,
      fontFamily: "Arial",
      textDecoration: "empty",
      slideIndex: currentStageIndex,
    };

    setallObjectsOnStage([...allObjectsOnStage, newText]);
    setallObjectsOnCURRENTStage([...allObjectsOnCURRENTStage, newText]);
    setPreviewUrl("addedtext");
  };
  ///////canvas text area

  const [curText, setCurText] = useState("");

  const [curBackground, setCurBackground] = useState("");

  const [isActiveTransformer, setActiveTransformer] = useState(true); // Создаем состояние `isActive` для активации/деактивации Transformer

  const setCurrentShapeText = (idCurText) => {
    const currentTextShape = allObjectsOnCURRENTStage.find(
      (i) => i.id == idCurText
    );
    setCurText(currentTextShape);
    setCurBackground(currentTextShape);
    setActiveTransformer(true);
  };

  const changeTextStyle = (value) => {
    setActiveTransformer(false);
    if (curText) {
      if (value == "arial") curText.fontFamily = "Arial";
      if (value == "calibri") curText.fontFamily = "Calibri";
      if (value == "segoeUI") curText.fontFamily = "Segoe UI";
      if (value == "timesNewRoman") curText.fontFamily = "Times New Roman";
      if (value == "обычный") {
        curText.fontStyle = "normal";
        curText.textDecoration = "empty";
      }
      if (value == "жирный") {
        curText.fontStyle = "bold";
        curText.textDecoration = "empty";
      }
      if (value == "наклонный") {
        curText.fontStyle = "italic";
        curText.textDecoration = "empty";
      }
      if (value == "подчеркнутый") {
        curText.textDecoration = "underline";
        curText.fontStyle = "normal";
      }
    }
  };

  const changeBackgroundLinesFigures = (value) => {
    setActiveTransformer(false);
    if (curBackground) {
      curBackground.fill = value.color;
      curBackground.stroke = value.color;
    }
  };

  ////////////ADD current stage

  const addNewCurrentStage = () => {
    setNumberOfStages([...numberOfStages, currentStageIndex + 1]);
    setCurrentStageIndex(currentStageIndex + 1);
    let curArray = [];
    setallObjectsOnCURRENTStage(curArray);
  };

  ////////////ADD current stage

  ////////////change current stage

  const changeCurrentStage = (selectedStageNum) => {
    setCurrentStageIndex(selectedStageNum);
    let curArray = [];
    allObjectsOnStage.forEach((element) => {
      if (element.slideIndex == selectedStageNum) curArray.push(element);
    });
    setallObjectsOnCURRENTStage(curArray);
  };

  ////////////change current stage

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#FAFAFA" }}>
      <Grid
        width="100%"
        height={80}
        container
        sx={{
          backgroundColor: "#FFF",

          border: "1px solid #bab6b6",
        }}
      ></Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 0 }}
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
            unsplashTextures={unsplashTextures}
            unsplashPhotoGradients={unsplashPhotoGradients}
            unsplashAbstracts={unsplashAbstracts}
            unsplashWater={unsplashWater}
            fetchAPIUnsplash={fetchAPIUnsplash}
            fetchAPIUnsplashTextures={fetchAPIUnsplashTextures}
            fetchAPIUnsplashPhotoGradients={fetchAPIUnsplashPhotoGradients}
            fetchAPIUnsplashAbstracts={fetchAPIUnsplashAbstracts}
            fetchAPIUnsplashWater={fetchAPIUnsplashWater}
            handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
            uploadedImagesDrDr={uploadedImagesDrDr}
            setuploadedImagesDrDr={setuploadedImagesDrDr}
            removeImgFromHistory={removeImgFromHistory}
            handleChangeImgFromHist={handleChangeImgFromHist}
            addText={addText}
            textInputRef={textInputRef}
            changeTextStyle={changeTextStyle}
            changeBackgroundLinesFigures={changeBackgroundLinesFigures}
          />
        </Grid>
        <Grid item xs={5} sm={4} md={4} key={2}>
          <Canvas
            isActiveTransformer={isActiveTransformer}
            previewUrl={previewUrl}
            imagePaperActive={imagePaperActive}
            openedFirstTime={openedFirstTime}
            imagePaperActiveType={imagePaperActiveType}
            clickOnUnsplash={clickOnUnsplash}
            unsplashImagesOnline={unsplashImagesOnline}
            handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
            uploadedImagesDrDr={uploadedImagesDrDr}
            setImagePaperActiveType={setImagePaperActiveType}
            allObjectsOnStage={allObjectsOnStage}
            allObjectsOnCURRENTStage={allObjectsOnCURRENTStage}
            handleClickKeyDown={handleClickKeyDown}
            selectedShape={selectedShape}
            setSelectedShape={setSelectedShape}
            setCurrentShapeText={setCurrentShapeText}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={3} key={3}>
          <CanvasProjects
            allObjectsOnStage={allObjectsOnStage}
            allObjectsOnCURRENTStage={allObjectsOnCURRENTStage}
            addNewCurrentStage={addNewCurrentStage}
            currentStageIndex={currentStageIndex}
            numberOfStages={numberOfStages}
            changeCurrentStage={changeCurrentStage}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardWithoutTempOzon;
