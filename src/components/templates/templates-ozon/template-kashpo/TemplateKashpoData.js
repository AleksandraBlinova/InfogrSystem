export default function addImageTemplateKashpo(
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
        x: 20,
        fill: "#4C412B",
        fontStyle: "italic",
        y: 20,
        text: "КАШПО",
        fontSize: 90,
        fontFamily: "El Messiri",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const newText2 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 32,
        fill: "#4C412B",
        fontStyle: "bold",
        y: 100,
        text: "для декора",
        fontSize: 27,
        fontFamily: "El Messiri",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      setallObjectsOnStage([...allObjectsOnStage, newImage, newText, newText2]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        newText,
        newText2,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
