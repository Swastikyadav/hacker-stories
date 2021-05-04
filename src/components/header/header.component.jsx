import React from "react";
import logo from "../../assets/logo.svg";

import "./header.styles.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="hc-logo" alt="logo" />
    </header>
  );
}

export default Header;