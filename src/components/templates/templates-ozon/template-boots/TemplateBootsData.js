export default function addImageTemplateBoots(
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
        x: 65,
        fill: "#4C412B",
        fontStyle: "bold",
        y: 500,
        text: "натуральная кожа",
        fontSize: 40,
        fontFamily: "El Messiri",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };
      const newText3 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 200,
        fill: "#4C412B",
        fontStyle: "bold",
        y: 540,
        text: "демисезон",
        fontSize: 40,
        fontFamily: "El Messiri",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      let newImageDone1 = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 10,
        y: 490,
        width: 50,
        height: 50,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImageDone1.image.src =
        "./templatesOzon/template-boots/icons8-done-100.png";

      let newImageDone2 = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 150,
        y: 535,
        width: 50,
        height: 50,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImageDone2.image.src =
        "./templatesOzon/template-boots/icons8-done-100.png";

      setallObjectsOnStage([
        ...allObjectsOnStage,
        newImage,
        newText,
        newText3,
        newImageDone1,
        newImageDone2,
      ]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        newText,
        newText3,
        newImageDone1,
        newImageDone2,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
