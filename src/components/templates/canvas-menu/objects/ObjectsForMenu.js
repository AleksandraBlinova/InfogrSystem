import React from "react";
import Draggable from "react-draggable";
import CircleIcon from "@mui/icons-material/Circle";

const ObjectsForMenu = () => {
  return (
    <div>
      {" "}
      <Draggable>
        <svg width="100" height="100">
          <circle cx="60" cy="60" r="25" fill="grey" />
        </svg>
      </Draggable>
      <Draggable>
        <svg width="100" height="100">
          <rect x="10" y="10" width="80" height="80" fill="grey" />
        </svg>
      </Draggable>
      <Draggable>
        <svg width="100" height="100">
          <polygon points="50,5 90,90 10,90" fill="grey" />
        </svg>
      </Draggable>
    </div>
  );
};

export default ObjectsForMenu;
