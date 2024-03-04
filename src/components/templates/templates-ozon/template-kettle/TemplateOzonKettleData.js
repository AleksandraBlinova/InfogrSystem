export default function addImageTemplateOzonKettle(
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

      const cleanNiceText1 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 60,
        y: 60,
        fill: "#1a237e",
        fontStyle: "bold",
        text: "ЛЕГКО",
        fontSize: 15,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };
      const cleanNiceText2 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 60,
        y: 80,
        fill: "#1a237e",
        fontStyle: "bold",
        text: "ЧИСТИТСЯ",
        fontSize: 15,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const boiledDegreeText1 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 280,
        y: 60,
        fill: "#1a237e",
        fontStyle: "bold",
        text: "ЗАКИПАЕТ",
        fontSize: 15,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };
      const boiledDegreeText2 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 280,
        y: 80,
        fill: "#1a237e",
        fontStyle: "bold",
        text: "ЗА 3 МИНУТЫ",
        fontSize: 15,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      const VText1 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 150,
        y: 520,
        fill: "#1a237e",
        fontStyle: "bold",
        text: "ОБЪЕМ",
        fontSize: 15,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };
      const VText2 = {
        type: "text",
        id: allObjectsOnStage.length + 1,
        x: 150,
        y: 540,
        fill: "#1a237e",
        fontStyle: "bold",
        text: "2 ЛИТРА",
        fontSize: 15,
        fontFamily: "Segoe UI",
        textDecoration: "empty",
        slideIndex: currentStageIndex,
      };

      let newImageBestseller = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 200,
        y: 350,
        width: 250,
        height: 220,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImageBestseller.image.src =
        "./templatesOzon/template-kettle/bestseller.png";

      let arrow1 = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 80,
        y: 100,
        width: 60,
        height: 60,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      arrow1.image.src = "./templatesOzon/template-kettle/arrow1.png";

      let arrow2 = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 320,
        y: 100,
        width: 35,
        height: 60,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      arrow2.image.src = "./templatesOzon/template-kettle/arrow2.png";

      let arrow3 = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 120,
        y: 455,
        width: 35,
        height: 60,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      arrow3.image.src = "./templatesOzon/template-kettle/arrow3.png";

      setallObjectsOnStage([
        ...allObjectsOnStage,
        newImage,
        cleanNiceText1,
        cleanNiceText2,
        boiledDegreeText1,
        boiledDegreeText2,
        VText1,
        VText2,
        newImageBestseller,
        arrow1,
        arrow2,
        arrow3,
      ]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        cleanNiceText1,
        cleanNiceText2,
        boiledDegreeText1,
        boiledDegreeText2,
        VText1,
        VText2,
        newImageBestseller,
        arrow1,
        arrow2,
        arrow3,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
