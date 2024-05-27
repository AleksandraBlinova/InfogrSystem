export default function addImageTemplateHolder(
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

      const newText3 = {
        type: "text",
        id: allObjectsOnStage.length + 2,
        x: 110,
        fill: "#fff",
        fontStyle: "bold",
        y: 10,
        text: "Для диагонали 4,5-6,6",
        fontSize: 30,
        fontFamily: "Pacifico",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };
      let rectAnatom = {
        type: "image",
        id: allObjectsOnStage.length + 3,
        x: 90,
        y: 0,
        opacity: 0.9,
        image: new window.Image(),
        typeofImage: "figures_quadrat_rounded",
        fill: "#595959",
        width: 390,
        height: 50,
        slideIndex: currentStageIndex,
      };
      rectAnatom.image.src = "./figures/квадратСкругленный.png";

      setallObjectsOnStage([
        ...allObjectsOnStage,
        newImage,
        rectAnatom,
        newText3,
      ]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        rectAnatom,
        newText3,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
