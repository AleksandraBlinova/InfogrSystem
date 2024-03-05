import React from "react";

const TemplateKashpo = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      {" "}
      <div>
        <img
          src="./templatesOzon/template-kashpo/Image.png"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/template-kashpo/kashpo-bronze.jpg",
              "tempKashpo"
            );
          }}
        />
      </div>
    </div>
  );
};

export default TemplateKashpo;
