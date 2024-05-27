export default function addImageTemplateOzonToilet(
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

      let newImageToilet = {
        type: "image",
        id: allObjectsOnStage.length + 2,
        x: -10,
        y: -70,
        width: 450,
        height: 600,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      newImageToilet.image.src = "./templatesOzon/template-toilet/1 (2).png";

      let newImageBearIcon = {
        type: "image",
        id: allObjectsOnStage.length + 3,
        x: 310,
        y: 460,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        fill: "#bdbdbd",
        stroke: "#000",
        width: 85,
        height: 85,
        slideIndex: currentStageIndex,
      };

      newImageBearIcon.image.src = "./icons/emoji/icons8-teddy-bear-96.png";

      setallObjectsOnStage([
        ...allObjectsOnStage,
        newImage,
        newImageToilet,
        newImageBearIcon,
      ]);
      setallObjectsOnCURRENTStage([
        ...allObjectsOnCURRENTStage,
        newImage,
        newImageToilet,
        newImageBearIcon,
      ]);
    };
    reader.readAsDataURL(imageFile);
  }
}
