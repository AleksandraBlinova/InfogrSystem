import React from "react";

const TemplateOzonPillow = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      <img
        src="./templatesOzon/template-pillow/PillowTemp.png"
        style={{ width: "100px", height: "130px" }}
        onDoubleClick={() => {
          handleChangeClickOnUnsplash(
            "./templatesOzon/template-pillow/Идеально.png",
            "tempOzonPillow"
          );
        }}
      />
    </div>
  );
};

export default TemplateOzonPillow;
