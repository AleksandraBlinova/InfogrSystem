import React from "react";

const TemplateOzonKPB = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <div>
          <img
            src="./templatesOzon/template-kpb/ImageKPB.png"
            style={{ width: "100px", height: "130px" }}
            onDoubleClick={() => {
              handleChangeClickOnUnsplash(
                "./templatesOzon/template-kpb/01-11.jpg",
                "tempOzonKPB"
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TemplateOzonKPB;
