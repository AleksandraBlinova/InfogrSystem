export default function addImageTemplateOzonMatras(
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

      const homeTextileText1 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 40,
        y: 60,
        fill: "#635D55",
        fontStyle: "normal",
        text: "МАТРАС",
        fontSize: 50,
        fontFamily: "PT Serif Caption",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };
      const homeTextileText2 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 40,
        y: 120,
        fill: "#E42F65",
        fontStyle: "bold",
        text: "Ортопедический",
        fontSize: 33,
        fontFamily: "Pacifico",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const sizeText1 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 285,
        y: 195,
        fill: "#fff",
        fontStyle: "normal",
        text: "180x90",
        fontSize: 33,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      let rectAnatom = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 280,
        y: 185,
        opacity: 0.9,
        image: new window.Image(),
        typeofImage: "figures_quadrat_rounded",
        fill: "#E42F65",
        width: 120,
        height: 55,
        slideIndex: currentStageIndex,
      };
      rectAnatom.image.src = "./figures/квадратСкругленный.png";

      const sizeText2 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 295,
        y: 270,
        fill: "#fff",
        fontStyle: "normal",
        text: "110КГ",
        fontSize: 33,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      let rectAnatom2 = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 280,
        y: 255,
        opacity: 0.9,
        image: new window.Image(),
        typeofImage: "figures_quadrat_rounded",
        fill: "#E42F65",
        width: 120,
        height: 55,
        slideIndex: currentStageIndex,
      };

      rectAnatom2.image.src = "./figures/квадратСкругленный.png";

      const sizeText3 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 35,
        y: 470,
        fill: "#000",
        fontStyle: "normal",
        text: "беспружинный",
        fontSize: 33,
        fontFamily: "Pacifico",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      let rectAnatom3 = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 25,
        y: 455,
        opacity: 0.9,
        image: new window.Image(),
        typeofImage: "figures_quadrat_rounded",
        fill: "#fff",
        width: 230,
        height: 55,
        slideIndex: currentStageIndex,
      };

      rectAnatom3.image.src = "./figures/квадратСкругленный.png";

      setallObjectsOnStage([
        ...allObjectsOnStage,
        newImage,
        homeTextileText1,
        homeTextileText2,
        rectAnatom,
        sizeText1,
        rectAnatom2,
        sizeText2,
        rectAnatom3,
        sizeText3,
      ]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        homeTextileText1,
        homeTextileText2,
        rectAnatom,
        sizeText1,
        rectAnatom2,
        sizeText2,
        rectAnatom3,
        sizeText3,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
