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
        height="24px"
        isActive={activeBtn === "new"}
        handleActiveBtn={handleActiveBtn}
      >
        New
      </Button>

      <Button
        type="past"
        width="61px"
        height="24px"
        isActive={activeBtn === "past"}
        handleActiveBtn={handleActiveBtn}
      >
        Past
      </Button>
    </section>
  );
}

export default Menu;