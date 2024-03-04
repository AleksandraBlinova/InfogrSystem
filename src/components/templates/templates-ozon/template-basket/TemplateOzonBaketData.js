export default function addImageTemplateOzonBasket(
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
        height: 580,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImage.image.src = url;

      const newTextWeight = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 110,
        fill: "#fff",
        fontStyle: "bold",
        y: 20,
        text: "МЯЧ",
        fontSize: 90,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const newTexForFintess = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 10,
        fill: "#ff5722",
        fontStyle: "bold",
        y: 550,
        text: "ДЛЯ СПОРТА",
        fontSize: 24,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      let rectWeight = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 10,
        y: 110,
        image: new window.Image(),
        typeofImage: "figures_quadrat",
        width: 400,
        fill: "#ff5722",
        height: 40,
        slideIndex: currentStageIndex,
      };
      rectWeight.image.src = "./figures/квадрат.png";

      const rectText = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 90,
        y: 120,
        fill: "#fff",
        fontStyle: "bold",
        text: "БАСКЕТБОЛЬНЫЙ",
        fontSize: 26,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      let newImageBasket = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: -20,
        y: 130,
        width: 450,
        height: 450,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImageBasket.image.src = "./templatesOzon/template-basket/bask.png";

      setallObjectsOnStage([
        ...allObjectsOnStage,
        newImage,
        newTextWeight,
        newTexForFintess,
        rectWeight,
        rectText,
        newImageBasket,
      ]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        newTextWeight,
        newTexForFintess,
        rectWeight,
        rectText,
        newImageBasket,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
