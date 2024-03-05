import React from "react";

const TemplateSlippers = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      <img
        src="./templatesOzon/template-slippers/slipslip.png"
        style={{ width: "100px", height: "130px" }}
        onDoubleClick={() => {
          handleChangeClickOnUnsplash(
            "./templatesOzon/template-slippers/green.jpg",
            "tempSlippers"
          );
        }}
      />
    </div>
  );
};

export default TemplateSlippers;
