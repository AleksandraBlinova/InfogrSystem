export default function addImageTemplatePicknic(
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
        x: 110,
        fill: "#E74E0B",
        fontStyle: "bold",
        y: 15,
        text: "НАБОР",
        fontSize: 60,
        fontFamily: "El Messiri",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };
      const newText2 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 10,
        fill: "#E74E0B",
        fontStyle: "bold",
        y: 85,
        text: "ДЛЯ ПИКНИКА",
        fontSize: 55,
        fontFamily: "El Messiri",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      let newImageCase = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 0,
        y: 180,
        width: 420,
        height: 460,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImageCase.image.src =
        "./templatesOzon/templates-picknic/CD.RP.F61.png";

      let newImageLine1 = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 5,
        y: 178,
        width: 50,
        height: 30,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImageLine1.image.src =
        "./templatesOzon/templates-picknic/icons8-horizontal-line-96.png";
      let newImageLine2 = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 359,
        y: 178,
        width: 50,
        height: 30,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImageLine2.image.src =
        "./templatesOzon/templates-picknic/icons8-horizontal-line-96.png";

      const newText3 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 60,
        fill: "#E74E0B",
        fontStyle: "bold",
        y: 183,
        text: "для прогулок и пикников",
        fontSize: 25,
        fontFamily: "El Messiri",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      setallObjectsOnStage([
        ...allObjectsOnStage,
        newImage,
        newImageCase,
        newText,
        newText2,
        newText3,
        newImageLine1,
        newImageLine2,
      ]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        newImageCase,
        newText,
        newText2,
        newText3,
        newImageLine1,
        newImageLine2,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
