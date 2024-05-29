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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const DashboardWithoutTempWB = () => {
  const [allObjectsOnStage, setallObjectsOnStage] = useState([]); //для отображения всех фоток на холсте

  const [allObjectsOnCURRENTStage, setallObjectsOnCURRENTStage] = useState([]); //для отображения всех фоток на холсте

  const location = useLocation();
  const dataCanvasSet = location.state;

  let arrSavedProjects = [];

  useEffect(() => {
    if (dataCanvasSet) {
      setallObjectsOnStage([]);
      setallObjectsOnCURRENTStage([]);
      let jsImages = [];
      let arrTexts = [];
      let url;
      let jsondata = JSON.parse(dataCanvasSet);
      jsondata.forEach((itm) => {
        if (itm.image && itm.image.url) {
          if (itm.image.url) {
            url = itm.image.url.replace("http://localhost:3000", ".");

            let newImage;
            newImage = {
              type: "image",
              id: itm.id,
              x: itm.x,
              y: itm.y,
              image: new window.Image(),
              typeofImage: itm.typeofImage,
              fill: itm.fill,
              stroke: itm.stroke,
              width: itm.width,
              height: itm.height,
              slideIndex: currentStageIndex,
            };

            if (url) newImage.image.src = url;

            jsImages.push(newImage);
          }
        }
        if (itm.text) {
          arrTexts.push(itm);
        }
      });
      Array.prototype.push.apply(jsImages, arrTexts);
      let inc = 0;
      jsImages.forEach((it) => {
        if (it.image) {
          it.id = inc;
          inc = inc + 1;
        }
      });
      jsImages.forEach((it) => {
        if (it.text) {
          it.id = inc;
          inc = inc + 1;
        }
      });
      setPreviewUrl(
        jsImages[0] && jsImages[0].image && jsImages[0].image.src
          ? jsImages[0].image.src
          : "addedText"
      );
      setallObjectsOnStage([...allObjectsOnStage, ...jsImages]);
      setallObjectsOnCURRENTStage([...allObjectsOnCURRENTStage, ...jsImages]);
    }
  }, []);

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

  const handleChangeLoadSavedProjects = (value, x, y) => {
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
    addImagesSavedProjects(file, value, x, y);
  };

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

  useEffect(() => {
    if (
      localStorage.getItem("linkTempImg") &&
      localStorage.getItem("linkTempImg") != "" &&
      localStorage.getItem("typeTempImg") &&
      localStorage.getItem("typeTempImg") != ""
    ) {
      handleChangeClickOnUnsplash(
        localStorage.getItem("linkTempImg"),
        localStorage.getItem("typeTempImg")
      );
    }
  }, []);

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

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [saveStatus, setSaveStatus] = useState(0);

  const saveCanvasImage = () => {
    let pr_attr_id = Number(localStorage.getItem("projectAttributeId"));

    const clonedArray = allObjectsOnCURRENTStage.map((a) => ({ ...a }));

    let allimagesClonedArr = [];
    debugger;
    clonedArray.forEach((i) => {
      let val = {
        url: i.image && i.image.src,
        width: i.image && i.image.width,
        height: i.image && i.image.height,
        x: i.image && i.image.x,
        y: i.image && i.image.y,
      };
      if (i.image) i.image = val;
    });

    let pr_attr_values = {
      CanvasSet: JSON.stringify(clonedArray),
      CanvasUrl:
        clonedArray[0] && clonedArray[0].image
          ? clonedArray[0].image.url.toString()
          : "./6391435521.jpg",
    };
    axios
      .put(
        `http://localhost:3001/project_attributes/${pr_attr_id}`,
        pr_attr_values,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        {
          setSaveStatus(response.status);
          localStorage.setItem("savedProj", previewUrl.toString());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addImagesSavedProjects = (file, url, x, y) => {
    let typeofPhoto;
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
            x: x,
            y: y,
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
            x: x,
            y: y,
            width: 450,
            height: 580,
            image: new window.Image(),
            typeofImage: typeofPhoto,
            slideIndex: currentStageIndex,
          };
        }

        if (url) newImage.image.src = url;
        else newImage.image.src = event.target.result;

        arrSavedProjects.push(newImage);

        arrSavedProjects = arrSavedProjects.filter(
          (elem, index, self) =>
            self.findIndex((t) => {
              return t.image.src === elem.image.src;
            }) === index
        );

        setallObjectsOnStage([...allObjectsOnStage, ...arrSavedProjects]);
        setallObjectsOnCURRENTStage([
          ...allObjectsOnCURRENTStage,
          ...arrSavedProjects,
        ]);
      };
      reader.readAsDataURL(imageFile);
    }
  };
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

  const addTextSavedPr = (value) => {
    const newText = {
      type: "text",
      id: allObjectsOnStage.length + 1,
      x: 100,
      y: 100,
      text: value,
      fontSize: 24,
      fontFamily: "Arial",
      textDecoration: "empty",
      slideIndex: currentStageIndex,
    };

    debugger;
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
      if (value.color) {
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
      if (value.Color) {
        if (!value.Color.includes("gradient")) {
          curBackground.fill = value.Color;
          curBackground.stroke = value.Color;
          curBackground.fillPriority = "";
        } else {
          curBackground.fillPriority = "linear-gradient";
          let splittedString = value.Color.split(",");
          splittedString.shift();
          splittedString[splittedString.length - 1] = splittedString[
            splittedString.length - 1
          ].replace(")", "");
          curBackground.fillLinearGradientColorStops = splittedString;
        }
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
    setCurInputNameofStage(event.target.value);
  };

  ///////to download stage

  const [typeOfMarketplace, setTypeOfMarketplace] = useState("wb");
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
          saveCanvasImage={saveCanvasImage}
          handleClickOpenDialog={handleClickOpenDialog}
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
      {saveStatus == 200 && openDialog && (
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{ fontWeight: "600" }}>
            {"Проект был сохранен"}
          </DialogTitle>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleCloseDialog}
              variant="contained"
              sx={{
                backgroundColor: "purple",
                "&:hover": {
                  backgroundColor: "purple",
                },
              }}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default DashboardWithoutTempWB;
