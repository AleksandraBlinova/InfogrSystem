import React from "react";

const TemplateHolder = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      {" "}
      <div>
        <img
          src="./templatesOzon/template-holder/Image.png"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/template-holder/1 (2).jpg",
              "tempHolder"
            );
          }}
        />
      </div>
    </div>
  );
};

export default TemplateHolder;
