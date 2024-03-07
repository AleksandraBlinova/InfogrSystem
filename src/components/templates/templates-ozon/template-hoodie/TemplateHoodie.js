import React from "react";

const TemplateHoodie = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      {" "}
      <div>
        <img
          src="./templatesOzon/template-hoodie/Image (1).png"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/template-hoodie/1 (2).jpg",
              "tempHoodie"
            );
          }}
        />
      </div>
    </div>
  );
};

export default TemplateHoodie;
