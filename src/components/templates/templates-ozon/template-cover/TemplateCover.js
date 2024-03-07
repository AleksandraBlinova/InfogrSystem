import React from "react";

const TemplateCover = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      {" "}
      <div>
        <img
          src="./templatesOzon/template-cover/1уц.png"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/template-cover/1уц.png",
              "tempCover"
            );
          }}
        />
      </div>
    </div>
  );
};

export default TemplateCover;
