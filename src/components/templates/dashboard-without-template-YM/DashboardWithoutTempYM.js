import React, { useRef, useEffect, useState } from "react";
import Canvas from "../canvas/Canvas";
import CanvasMenu from "../canvas/CanvasMenu";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import CanvasProjects from "../canvas/CanvasProjects";
import CanvasAppBar from "../canvas/CanvasAppBar";
import addImageTemplateOzonPillow from "../templates-ozon/template-pillow/TemplateOzonPillowData";
import addImageTemplateOzonBasket from "../templates-ozon/template-basket/TemplateOzonBaketData";
import addImageTemplateOzonKettle from "../templates-ozon/template-kettle/TemplateOzonKettleData";
import addImageTemplateOzonKPB from "../templates-ozon/template-KPB/TemplateOzonKPBData";
import addImageTemplateOzonToilet from "../templates-ozon/templates-ozon-toilet/TemplateOzonToiletData";
import addImageTemplateOzonRassada from "../templates-ozon/template-8march-rassada/Template8marchRassada";
import addImageTemplateOzonMatras from "../templates-ozon/template-matras/TemplateOzonMatras";
import addImageTemplateSlippers from "../templates-ozon/template-slippers/TemplateSlippersData";
import addImageTemplateKashpo from "../templates-ozon/template-kashpo/TemplateKashpoData";
import addImageTemplateFrames from "../templates-ozon/template-frames/TemplateFrameData";
import addImageTemplateBoots from "../templates-ozon/template-boots/TemplateBootsData";
import addImageTemplateHolder from "../templates-ozon/template-holder/TemplateHolderData";
import addImageTemplatePicknic from "../templates-ozon/template-picknic/TemplatePicknicData";
import addImageTemplateFur from "../templates-ozon/template-fur/TemplateFurData";
import addImageTemplateHoodie from "../templates-ozon/template-hoodie/TemplateHoodieData";
import addImageTemplateTrousers from "../templates-ozon/template-trousers/TemplateTrousersData";
import addImageTemplateCover from "../templates-ozon/template-cover/TemplateCoverData";

const DashboardWithoutTempYM = () => {
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

  const [clickOnUnsplash, setClickOnUnsplash] = useState();

  const handleChangeClickOnUnsplash = (value, template) => {
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
    if (!template) addImage(file, value);
    else if (template == "tempOzonPillow") {
      addImageTemplateOzonPillow(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempHolder") {
      addImageTemplateHolder(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempCover") {
      addImageTemplateCover(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempTrousers") {
      addImageTemplateTrousers(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempHoodie") {
      addImageTemplateHoodie(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempFur") {
      addImageTemplateFur(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempPicknic") {
      addImageTemplatePicknic(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempBoots") {
      addImageTemplateBoots(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempFrames") {
      addImageTemplateFrames(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempOzonBasket") {
      addImageTemplateOzonBasket(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempOzonKettle") {
      addImageTemplateOzonKettle(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempOzonKPB") {
      addImageTemplateOzonKPB(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempOzonToilet") {
      addImageTemplateOzonToilet(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempOzon8marchRassada") {
      addImageTemplateOzonRassada(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempKashpo") {
      addImageTemplateKashpo(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempOzonMatras") {
      addImageTemplateOzonMatras(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    } else if (template == "tempSlippers") {
      addImageTemplateSlippers(
        allObjectsOnStage,
        allObjectsOnCURRENTStage,
        currentStageIndex,
        setallObjectsOnStage,
        setallObjectsOnCURRENTStage,
        file,
        value,
        template
      );
    }
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
    console.log(url);
    if (url) {
      if (url.includes("figures")) {
        if (url.includes("квадратСкругленный"))
          typeofPhoto = "figures_quadrat_rounded";
        else if (url.includes("квадрат")) typeofPhoto = "figures_quadrat";
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
      if (!value.color.includes("gradient")) {
        curBackground.fill = value.color;
        curBackground.stroke = value.color;
      } else {
        curBackground.fillPriority = "linear-gradient";
        let splittedString = value.color.split(",");
        splittedString.shift();
        splittedString[splittedString.length - 1] = splittedString[
          splittedString.length - 1
        ].replace(")", "");
        curBackground.fillLinearGradientColorStops = splittedString;
      }
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
    if (numberOfStages.find((i) => i == selectedStageNum)) {
      setCurrentStageIndex(selectedStageNum);
      let curArray = [];
      allObjectsOnStage.forEach((element) => {
        if (element.slideIndex == selectedStageNum) curArray.push(element);
      });
      setallObjectsOnCURRENTStage(curArray);
    } else {
      setCurrentStageIndex(1);
      let curArray = [];
      allObjectsOnStage.forEach((element) => {
        if (element.slideIndex == 1) curArray.push(element);
      });
      setallObjectsOnCURRENTStage(curArray);
    }
  };

  ////////////change current stage

  ////////////delete current stage

  const deleteCurrentStage = (selectedStageNum) => {
    if (
      (selectedStageNum > 1 && numberOfStages.length > 1) ||
      (selectedStageNum == 1 && numberOfStages.length > 1)
    ) {
      if (numberOfStages.find((i) => i == selectedStageNum)) {
        console.log(selectedStageNum);
        setCurrentStageIndex(selectedStageNum - 1);
        numberOfStages.splice(numberOfStages.indexOf(selectedStageNum), 1);
        setallObjectsOnStage(
          allObjectsOnStage.filter((itm) => itm.slideIndex != selectedStageNum)
        );
      } else {
        setCurrentStageIndex(1);
        numberOfStages.splice(numberOfStages.length - 1, 1);
        setallObjectsOnStage(
          allObjectsOnStage.filter((itm) => itm.slideIndex == 1)
        );
      }
    }
  };

  ////////////delete current stage

  const copyExistedSlide = (currentStageIndex) => {
    setNumberOfStages([...numberOfStages, numberOfStages.length + 1]);
    setCurrentStageIndex(numberOfStages.length + 1);
    let curArray = [];
    curArray.push(...allObjectsOnStage);
    let newEl = {};

    curArray.forEach((element) => {
      if (element.slideIndex == currentStageIndex) {
        Object.assign(newEl, element);
        newEl.id = curArray.length + 1;
        newEl.slideIndex = numberOfStages.length + 1;
        allObjectsOnStage.push(newEl);
        allObjectsOnCURRENTStage.push(newEl);
        allObjectsOnCURRENTStage.shift();
      }
    });
  };

  ////////to download stage

  const stageRef = useRef();

  const convertStageToImage = () => {
    let dataURL;
    if (stageRef.current)
      dataURL = stageRef.current.toDataURL({
        pixelRatio: 3,
      });
    else dataURL = "";

    return new Promise((resolve, reject) => {
      const image = new window.Image();
      image.crossOrigin = "Anonymous";
      image.onload = () => {
        resolve(image);
      };
      image.onerror = (error) => {
        reject(error);
      };
      image.src = dataURL;
    });
  };

  const handleSaveImage = () => {
    convertStageToImage()
      .then((image) => {
        // Convert the image to PNG or JPEG format
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;

        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);
        console.log(canvas);
        let imageData;
        if (valueSelectedJpegPng == "png")
          // Convert to PNG
          imageData = canvas.toDataURL("image/png");
        if (valueSelectedJpegPng == "jpeg")
          // Convert to JPEG
          imageData = canvas.toDataURL("image/jpeg", 0.8);

        // Now you can save the PNG or JPEG image data
        // For saving it to a file, you can create a link and trigger a click to download the image
        const link = document.createElement("a");
        if (valueSelectedJpegPng == "png")
          link.download = curInputNameofStage + ".png"; // or 'image.jpeg' for JPEG
        if (valueSelectedJpegPng == "jpeg")
          link.download = curInputNameofStage + ".jpeg"; // or 'image.jpeg' for JPEG
        link.href = imageData; // or jpegImageData for JPEG
        link.click();
      })
      .catch((error) => {
        console.error("Error converting stage to image", error);
      });
  };

  const [valueSelectedJpegPng, setValueSelectedJpegPng] = React.useState("png");

  const handleChangeSelectedJpegPng = (event) => {
    setValueSelectedJpegPng(event.target.value);
  };

  const [curInputNameofStage, setCurInputNameofStage] = useState("Image");

  const handleChangeInputNameofStage = (event) => {
    console.log(event.target.value);
    setCurInputNameofStage(event.target.value);
  };

  ///////to download stage
  const [typeOfMarketplace, setTypeOfMarketplace] = useState("ym");
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#FAFAFA" }}>
      <Grid
        width="100%"
        height={80}
        sx={{
          backgroundColor: "#FFF",
          border: "1px solid #bab6b6",
        }}
      >
        <CanvasAppBar
          handleSaveImage={handleSaveImage}
          handleChangeSelectedJpegPng={handleChangeSelectedJpegPng}
          valueSelectedJpegPng={valueSelectedJpegPng}
          curInputNameofStage={curInputNameofStage}
          handleChangeInputNameofStage={handleChangeInputNameofStage}
        />
      </Grid>
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
            fetchAPIUnsplash={fetchAPIUnsplash}
            handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
            uploadedImagesDrDr={uploadedImagesDrDr}
            setuploadedImagesDrDr={setuploadedImagesDrDr}
            removeImgFromHistory={removeImgFromHistory}
            handleChangeImgFromHist={handleChangeImgFromHist}
            addText={addText}
            textInputRef={textInputRef}
            changeTextStyle={changeTextStyle}
            changeBackgroundLinesFigures={changeBackgroundLinesFigures}
            typeOfMarketplace={typeOfMarketplace}
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
            currentStageIndex={currentStageIndex}
            stageRef={stageRef}
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
            deleteCurrentStage={deleteCurrentStage}
            copyExistedSlide={copyExistedSlide}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardWithoutTempYM;
