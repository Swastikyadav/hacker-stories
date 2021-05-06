import React from "react";

import "./button.styles.css";

function Button({ children, type, width, height, isActive, handleBtnClick }) {
  return (
    <button
      data-testid="button"
      className="btn btn-custom"
      style={{
        width,
        height,
        background: `${isActive ? "#FBC91b" : "#F2F2F2"}`,
      }}
      onClick={type ? () => handleBtnClick(type) : () => handleBtnClick()}
    >
      {children}
    </button>
  );
}

export default Button;