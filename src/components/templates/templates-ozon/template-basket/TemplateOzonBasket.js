import React from "react";

const TemplateOzonBasket = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      {" "}
      <div>
        <img
          src="./templatesOzon/template-basket/BasketBall.png"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/template-basket/BackBall.png",
              "tempOzonBasket"
            );
          }}
        />
      </div>
    </div>
  );
};

export default TemplateOzonBasket;
