export default function addImageTemplateFrames(
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

      const newText = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 280,
        fill: "#4C412B",
        fontStyle: "bold",
        y: 15,
        text: "НАБОР",
        fontSize: 40,
        fontFamily: "El Messiri",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };
      const newText3 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 160,
        fill: "#4C412B",
        fontStyle: "bold",
        y: 55,
        text: "ФОТОРАМОК",
        fontSize: 40,
        fontFamily: "El Messiri",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const newText2 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 315,
        y: 260,
        fill: "#fff",
        fontStyle: "bold",
        text: "5шт",
        fontSize: 30,
        fontFamily: "El Messiri",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      let newImageCloud = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 280,
        y: 210,
        width: 120,
        height: 120,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImageCloud.image.src =
        "./templatesOzon/template-frames/icons8-starburst-shape-96.png";

      setallObjectsOnStage([
        ...allObjectsOnStage,
        newImage,
        newText,
        newText3,
        newImageCloud,
        newText2,
      ]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        newText,
        newText3,
        newImageCloud,
        newText2,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
