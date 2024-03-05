import React from "react";

const TemplateFrame = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      {" "}
      <div>
        <img
          src="./templatesOzon/template-frames/Image.png"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/template-frames/frames.jpeg",
              "tempFrames"
            );
          }}
        />
      </div>
    </div>
  );
};

export default TemplateFrame;
