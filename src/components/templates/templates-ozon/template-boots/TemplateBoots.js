import React from "react";

const TemplateBoots = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      {" "}
      <div>
        <img
          src="./templatesOzon/template-boots/Image.png"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/template-boots/13165919-1-white.jpg",
              "tempBoots"
            );
          }}
        />
      </div>
    </div>
  );
};

export default TemplateBoots;
