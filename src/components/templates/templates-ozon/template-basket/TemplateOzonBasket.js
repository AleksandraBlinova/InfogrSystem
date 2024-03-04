import React from "react";

const TemplateOzonBasket = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div>
      {" "}
      <div>
        <img
          src="./templatesOzon/template-basket/БаскетМяч.png"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/template-basket/ФонМяч.png",
              "tempOzonBasket"
            );
          }}
        />
      </div>
    </div>
  );
};

export default TemplateOzonBasket;
