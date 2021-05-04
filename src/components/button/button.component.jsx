import React from "react";

import "./button.styles.css";

function Button({ children, type, width, height, isActive, handleActiveBtn }) {
  return (
    <button
      className="btn btn-custom"
      style={{
        width,
        height,
        background: `${isActive ? "#FBC91b" : "#F2F2F2"}`,
      }}
      onClick={() => handleActiveBtn(type)}
    >
      {children}
    </button>
  );
}

export default Button;