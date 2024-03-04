import React from "react";

const TemplateOzonKettle = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      {" "}
      <div>
        <img
          src="./templatesOzon/template-kettle/readykettle.png"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/template-kettle/kettle.jpg",
              "tempOzonKettle"
            );
          }}
        />
      </div>
    </div>
  );
};

export default TemplateOzonKettle;
