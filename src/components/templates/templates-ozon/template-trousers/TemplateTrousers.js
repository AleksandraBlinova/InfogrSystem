import React from "react";

const TemplateTrousers = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      {" "}
      <div>
        <img
          src="./templatesOzon/template-trousers/Image.png"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/template-trousers/Креатив без названия (1).png",
              "tempTrousers"
            );
          }}
        />
      </div>
    </div>
  );
};

export default TemplateTrousers;
