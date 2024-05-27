export default function addImageTemplateOzonPillow(
  allObjectsOnStage,
  allObjectsOnCURRENTStage,
  currentStageIndex,
  setallObjectsOnStage,
  setallObjectsOnCURRENTStage,
  file,
  url,
  template
) {
  // ozon pillow
  let typeofPhoto;
  if (url) {
    typeofPhoto = "drag_drop";
  }
  const imageFile = file;
  let newImage;
  let rectSoft;
  let rectSize;
  let rectParams;
  let bottomRect;
  let bottomsmallRect1;
  let bottomsmallRect2;
  let bottomsmallRect3;
  if (imageFile) {
    var reader = new FileReader();
    reader.onload = function (event) {
      newImage = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 0,
        y: 0,
        width: 420,
        height: 580,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImage.image.src = url;

      const newTextPillow = {
        type: "text",
        id: allObjectsOnStage.length + 2,
        x: 115,
        fill: "#fff",
        fontStyle: "bold",
        y: 10,
        text: "ПОДУШКА",
        fontSize: 40,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };
      const newTextMedium = {
        type: "text",
        id: allObjectsOnStage.length + 3,
        x: 120,
        y: 555,
        fill: "#fff",
        fontStyle: "bold",
        text: "СРЕДНЯЯ ЖЕСТКОСТЬ",
        fontSize: 18,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const splittedString = ["#414d0b", "#727a17"];
      rectSoft = {
        type: "image",
        id: allObjectsOnStage.length + 4,
        x: 120,
        y: 58,
        image: new window.Image(),
        typeofImage: "figures_quadrat",
        fillLinearGradientColorStops: splittedString,
        width: 210,
        fillPriority: "linear-gradient",
        height: 40,
        slideIndex: currentStageIndex,
      };
      rectSoft.image.src = "./figures/квадрат.png";

      const newTextRectSoft = {
        type: "text",
        id: allObjectsOnStage.length + 5,
        x: 132,
        y: 68,
        fill: "#fff",
        fontStyle: "bold",
        text: "ЛЕБЯЖИЙ ПУХ",
        fontSize: 25,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const splittedStringRectSize = ["#FF9F45", "#FFBC80"];
      rectSize = {
        type: "image",
        id: allObjectsOnStage.length + 6,
        x: 20,
        y: 135,
        image: new window.Image(),
        typeofImage: "figures_quadrat_rounded",
        fillLinearGradientColorStops: splittedStringRectSize,
        fillPriority: "linear-gradient",
        width: 115,
        rotation: -13,
        height: 50,
        slideIndex: currentStageIndex,
      };
      rectSize.image.src = "./figures/квадратСкругленный.png";

      const newTextRectSize1 = {
        type: "text",
        id: allObjectsOnStage.length + 7,
        x: 40,
        y: 136,
        rotation: -13,
        fill: "#fff",
        fontStyle: "bold",
        text: "РАЗМЕР",
        fontSize: 19,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const newTextRectSize2 = {
        type: "text",
        id: allObjectsOnStage.length + 8,
        x: 58,
        y: 155,
        rotation: -13,
        fill: "#fff",
        fontStyle: "normal",
        text: "50*70",
        fontSize: 19,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      rectParams = {
        type: "image",
        id: allObjectsOnStage.length + 9,
        x: 300,
        y: 435,
        image: new window.Image(),
        typeofImage: "figures_quadrat_rounded",
        fillLinearGradientColorStops: splittedStringRectSize,
        fillPriority: "linear-gradient",
        width: 115,
        rotation: 13,
        height: 50,
        slideIndex: currentStageIndex,
      };
      rectParams.image.src = "./figures/квадратСкругленный.png";

      const newTextRectParams1 = {
        type: "text",
        id: allObjectsOnStage.length + 10,
        x: 313,
        y: 444,
        rotation: 13,
        fill: "#fff",
        fontStyle: "bold",
        text: "60% ПУХ",
        fontSize: 20,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const newTextRectParams2 = {
        type: "text",
        id: allObjectsOnStage.length + 11,
        x: 305,
        y: 465,
        rotation: 13,
        fill: "#fff",
        fontStyle: "bold",
        text: "40% ПЕРО",
        fontSize: 19,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      bottomRect = {
        type: "image",
        id: allObjectsOnStage.length + 12,
        x: 118,
        y: 513,
        image: new window.Image(),
        typeofImage: "figures_quadrat_rounded",
        fill: "#fff",
        width: 200,
        height: 33,
        slideIndex: currentStageIndex,
      };
      bottomRect.image.src = "./figures/квадратСкругленный.png";

      const splittedStringbottomsmallRect = ["#243D25", "#C0EDA6"];

      bottomsmallRect1 = {
        type: "image",
        id: allObjectsOnStage.length + 13,
        x: 127,
        y: 518,
        image: new window.Image(),
        typeofImage: "figures_quadrat_rounded",
        fillLinearGradientColorStops: splittedString,
        fillPriority: "linear-gradient",
        width: 50,
        height: 23,
        slideIndex: currentStageIndex,
      };
      bottomsmallRect1.image.src = "./figures/квадратСкругленный.png";

      bottomsmallRect2 = {
        type: "image",
        id: allObjectsOnStage.length + 14,
        x: 193,
        y: 518,
        image: new window.Image(),
        typeofImage: "figures_quadrat_rounded",
        fillLinearGradientColorStops: splittedString,
        fillPriority: "linear-gradient",
        width: 50,
        height: 23,
        slideIndex: currentStageIndex,
      };
      bottomsmallRect2.image.src = "./figures/квадратСкругленный.png";

      bottomsmallRect3 = {
        type: "image",
        id: allObjectsOnStage.length + 15,
        x: 259,
        y: 518,
        image: new window.Image(),
        typeofImage: "figures_quadrat_rounded",
        fillLinearGradientColorStops: splittedString,
        fillPriority: "linear-gradient",
        width: 50,
        height: 23,
        slideIndex: currentStageIndex,
      };
      bottomsmallRect3.image.src = "./figures/квадратСкругленный.png";

      setallObjectsOnStage([
        ...allObjectsOnStage,
        newImage,
        newTextPillow,
        newTextMedium,
        rectSoft,
        newTextRectSoft,
        rectSize,
        newTextRectSize1,
        newTextRectSize2,
        rectParams,
        newTextRectParams1,
        newTextRectParams2,
        bottomRect,
        bottomsmallRect1,
        bottomsmallRect2,
        bottomsmallRect3,
      ]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        newTextPillow,
        newTextMedium,
        rectSoft,
        newTextRectSoft,
        rectSize,
        newTextRectSize1,
        newTextRectSize2,
        rectParams,
        newTextRectParams1,
        newTextRectParams2,
        bottomRect,
        bottomsmallRect1,
        bottomsmallRect2,
        bottomsmallRect3,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
