import React from "react";

const TemplateFur = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      {" "}
      <div>
        <img
          src="./templatesOzon/template-fur/Image.png"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/template-fur/fur.jpg",
              "tempFur"
            );
          }}
        />
      </div>
    </div>
  );
};

export default TemplateFur;
