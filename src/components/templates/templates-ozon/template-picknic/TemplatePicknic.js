import React from "react";

const TemplatePicknic = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      {" "}
      <div>
        <img
          src="./templatesOzon/templates-picknic/Image.png"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/templates-picknic/1669020132_2-21-fotor-20240306152613.png",
              "tempPicknic"
            );
          }}
        />
      </div>
    </div>
  );
};

export default TemplatePicknic;
