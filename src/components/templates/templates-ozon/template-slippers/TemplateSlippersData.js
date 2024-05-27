export default function addImageTemplateSlippers(
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

      let newImageSlip = {
        type: "image",
        id: allObjectsOnStage.length + 2,
        x: 10,
        y: 130,
        width: 400,
        height: 400,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImageSlip.image.src = "./templatesOzon/template-slippers/slippers.png";

      const newText = {
        type: "text",
        id: allObjectsOnStage.length + 3,
        x: 20,
        fill: "#fff",
        fontStyle: "bold",
        y: 20,
        text: "ТАПОЧКИ",
        fontSize: 64,
        fontFamily: "Pacifico",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const newText2 = {
        type: "text",
        id: allObjectsOnStage.length + 4,
        x: 40,
        fill: "#fff",
        fontStyle: "normal",
        y: 90,
        text: "из эко-меха",
        fontSize: 25,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      setallObjectsOnStage([
        ...allObjectsOnStage,
        newImage,
        newImageSlip,
        newText,
        newText2,
      ]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        newImageSlip,
        newText,
        newText2,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
