export default function addImageTemplateOzonKPB(
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
        x: 10,
        y: 10,
        fill: "#635D55",
        fontStyle: "normal",
        text: "ПОДУШКА",
        fontSize: 40,
        fontFamily: "PT Serif Caption",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };
      const homeTextileText2 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 10,
        y: 54,

        fill: "#F85353",
        fontStyle: "bold",
        text: "Искусственный лебяжий пух",
        fontSize: 23,
        fontFamily: "Pacifico",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      //opacity={0.5}

      let rectAnatom = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 260,
        y: 5,
        opacity: 0.9,
        image: new window.Image(),
        typeofImage: "figures_quadrat_rounded",
        fill: "#fff",
        width: 190,
        height: 45,
        slideIndex: currentStageIndex,
      };
      rectAnatom.image.src = "./figures/квадратСкругленный.png";

      //Yanone Kaffeesatz

      const anatomText = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 275,
        y: 15,
        fill: "#635D55",
        fontStyle: "bold",
        text: "АНАТОМИЧЕСКАЯ",
        fontSize: 26,
        fontFamily: "Yanone Kaffeesatz",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const sizeText1 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 310,
        y: 135,
        fill: "#635D55",
        fontStyle: "bold",
        text: "50x70",
        fontSize: 33,
        fontFamily: "Yanone Kaffeesatz",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const sizeText2 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 320,
        y: 165,
        fill: "#635D55",
        fontStyle: "bold",
        text: "размер",
        fontSize: 20,
        fontFamily: "Yanone Kaffeesatz",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      let newImagePillowIcon = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 327,
        y: 105,
        width: 33,
        height: 33,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImagePillowIcon.image.src =
        "./templatesOzon/template-kpb/icons8-pillow-100.png";

      let newImageCloudIcon = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 267,
        y: 55,
        width: 163,
        height: 183,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImageCloudIcon.image.src =
        "./templatesOzon/template-kpb/icons8-cloud-96.png";

      let newImageCloudIcon2 = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 5,
        y: 425,
        width: 163,
        height: 183,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImageCloudIcon2.image.src =
        "./templatesOzon/template-kpb/icons8-cloud-96.png";

      const toughText1 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 55,
        y: 495,
        fill: "#635D55",
        fontStyle: "bold",
        text: "Средняя",
        fontSize: 22,
        fontFamily: "Yanone Kaffeesatz",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const toughText2 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 50,
        y: 515,
        fill: "#635D55",
        fontStyle: "bold",
        text: "жесткость",
        fontSize: 22,
        fontFamily: "Yanone Kaffeesatz",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      setallObjectsOnStage([
        ...allObjectsOnStage,
        newImage,
        homeTextileText1,
        homeTextileText2,
        rectAnatom,
        anatomText,
        newImageCloudIcon,
        sizeText2,
        sizeText1,
        newImagePillowIcon,
        newImageCloudIcon2,
        toughText1,
        toughText2,
      ]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        homeTextileText1,
        homeTextileText2,
        rectAnatom,
        newImageCloudIcon,
        anatomText,
        sizeText2,
        sizeText1,
        newImagePillowIcon,
        newImageCloudIcon2,
        toughText1,
        toughText2,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
