export default function addImageTemplateFur(
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
        text: "ДУБЛЕНКА",
        fontSize: 36,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };
      const Text2 = {
        type: "text",
        id: allObjectsOnStage.length + 3,
        x: 40,
        y: 65,
        fill: "#000",
        fontStyle: "normal",
        text: "ЖЕНСКАЯ",
        fontSize: 27,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const Text3 = {
        type: "text",
        id: allObjectsOnStage.length + 4,
        x: 20,
        y: 465,
        fill: "#000",
        fontStyle: "normal",
        text: "РАЗМЕРЫ",
        fontSize: 27,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const Text4 = {
        type: "text",
        id: allObjectsOnStage.length + 5,
        x: 40,
        y: 495,
        fill: "#000",
        fontStyle: "bold",
        text: "42-52",
        fontSize: 27,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      setallObjectsOnStage([
        ...allObjectsOnStage,
        newImage,
        Text,
        Text2,
        Text3,
        Text4,
      ]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        Text,
        Text2,
        Text3,
        Text4,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
