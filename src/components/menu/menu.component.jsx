import React, {useState} from "react";

import Button from "../button/button.component"

import "./menu.styles.css";

function Menu() {
  const [activeBtn, setActiveBtn] = useState("new");

  const handleActiveBtn = (btn) => {
    setActiveBtn(btn);
  }

  return (
    <section className="menu-bar">
      <Button
        type="new"
        width="61px"
        height="auto"
        isActive={activeBtn === "new"}
        handleBtnClick={handleActiveBtn}
      >
        New
      </Button>

      <Button
        type="past"
        width="61px"
        height="auto"
        isActive={activeBtn === "past"}
        handleBtnClick={handleActiveBtn}
      >
        Past
      </Button>
    </section>
  );
}

export default Menu;