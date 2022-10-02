import React, { useState } from "react";

import Button from "../button/button.component";

import "./menu.styles.css";

function Menu({ setIsNewStory, visibleStoriesCount }) {
  const [activeBtn, setActiveBtn] = useState("new");

  const handleActiveBtn = (btn) => {
    setActiveBtn(btn);

    if (btn === "new") {
      setIsNewStory(true);
    } else if (btn === "past") {
      setIsNewStory(false);
    }
  };

  return (
    <section data-testid="menu" className="menu-bar">
      <div>
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
          Best
        </Button>
      </div>
      <h1 className="stories-count">Stories count: {visibleStoriesCount}</h1>
    </section>
  );
}

export default Menu;
