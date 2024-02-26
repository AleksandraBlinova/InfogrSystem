export const templPillowStage = (file, url) => {
  const imageFile = file;
  if (imageFile) {
    var reader = new FileReader();
    reader.onload = function (event) {
      let newImage = {
        type: "image",
        id: allObjectsOnStage.length + 1,
        x: 0,
        y: 0,
        width: 450,
        height: 580,
        image: new window.Image(),
        typeofImage: typeofPhoto,
        slideIndex: currentStageIndex,
      };

      if (url) newImage.image.src = url;
      else newImage.image.src = event.target.result;
      console.log(newImage.image.src);

      setallObjectsOnStage([...allObjectsOnStage, newImage]);
      setallObjectsOnCURRENTStage([...allObjectsOnCURRENTStage, newImage]);
    };
    reader.readAsDataURL(imageFile);
  }
};
