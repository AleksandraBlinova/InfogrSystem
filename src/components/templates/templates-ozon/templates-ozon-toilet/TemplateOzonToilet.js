import React from "react";

const TemplateOzonToilet = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <div>
          <img
            src="./templatesOzon/template-toilet/ToiletReady.png"
            style={{ width: "100px", height: "130px" }}
            onDoubleClick={() => {
              handleChangeClickOnUnsplash(
                "./templatesOzon/template-toilet/ГОРШОК-СТУЛЬЧИК.png",
                "tempOzonToilet"
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TemplateOzonToilet;
