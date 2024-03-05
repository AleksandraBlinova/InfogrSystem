export default function addImageTemplateOzonRassada(
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

      setallObjectsOnStage([...allObjectsOnStage, newImage]);
      setallObjectsOnCURRENTStage([...allObjectsOnCURRENTStage, newImage]);
    };
    reader.readAsDataURL(imageFile);
  }
}
