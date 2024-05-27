export default function addImageTemplateTrousers(
  allObjectsOnStage,
  allObjectsOnCURRENTStage,
  currentStageIndex,
  setallObjectsOnStage,
  setallObjectsOnCURRENTStage,
  file,
  url,
  template
) {
  let typeofPhoto;
  if (url) {
    typeofPhoto = "drag_drop";
  }
  const imageFile = file;
  let newImage;

  if (imageFile) {
    var reader = new FileReader();
    reader.onload = function (event) {
      newImage = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 0,
        y: 0,
        width: 420,
        height: 582,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImage.image.src = url;

      const Text = {
        type: "text",
        id: allObjectsOnStage.length + 2,
        x: 20,
        y: 480,
        fill: "#000",
        fontStyle: "bold",
        text: "ХУДИ",
        fontSize: 36,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };
      const Text2 = {
        type: "text",
        id: allObjectsOnStage.length + 3,
        x: 20,
        y: 525,
        fill: "#000",
        fontStyle: "normal",
        text: "ОВЕРСАЙЗ",
        fontSize: 25,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };
      const Text22 = {
        type: "text",
        id: allObjectsOnStage.length + 4,
        x: 350,
        y: 5,
        fill: "#000",
        fontStyle: "normal",
        text: "STYLE",
        fontSize: 25,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const Text3 = {
        type: "text",
        id: allObjectsOnStage.length + 5,
        x: 20,
        y: 265,
        fill: "#000",
        fontStyle: "normal",
        text: "Не стесняет",
        fontSize: 20,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };
      const Text4 = {
        type: "text",
        id: allObjectsOnStage.length + 6,
        x: 27,
        y: 285,
        fill: "#000",
        fontStyle: "normal",
        text: "движения",
        fontSize: 20,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const Text5 = {
        type: "text",
        id: allObjectsOnStage.length + 7,
        x: 20,
        y: 375,
        fill: "#8000FF",
        fontStyle: "normal",
        text: "Свободный крой",
        fontSize: 20,
        fontFamily: "Pacifico",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      setallObjectsOnStage([
        ...allObjectsOnStage,
        newImage,
        Text,
        Text2,
        Text3,
        Text22,
        Text4,
        Text5,
      ]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        Text,
        Text2,
        Text3,
        Text22,
        Text4,
        Text5,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
