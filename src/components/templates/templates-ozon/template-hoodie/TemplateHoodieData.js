export default function addImageTemplateHoodie(
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
        x: 10,
        y: 20,
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
        x: 10,
        y: 65,
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
        x: 385,
        y: 202,
        fill: "#fff",
        fontStyle: "normal",
        text: "С НАЧЕСОМ",
        fontSize: 22,
        rotation: -90,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      let rectWeight = {
        type: "image",
        id: allObjectsOnStage.length + 6,
        x: 375,
        rotation: -90,
        y: 210,
        image: new window.Image(),
        typeofImage: "figures_quadrat",
        width: 140,
        fill: "#000",
        height: 40,
        slideIndex: currentStageIndex,
      };
      rectWeight.image.src = "./figures/квадрат.png";

      setallObjectsOnStage([
        ...allObjectsOnStage,
        newImage,
        Text,
        Text2,
        rectWeight,
        Text22,
        Text3,
      ]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        Text,
        Text2,
        rectWeight,
        Text22,
        Text3,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
