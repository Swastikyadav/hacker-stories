import React from "react";

import logoDark from "../../assets/logoDark.svg";
import "./footer.styles.css";

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="footer"
    >
      <img src={logoDark} alt="logo" />
    </footer>
  );
}

export default Footer;