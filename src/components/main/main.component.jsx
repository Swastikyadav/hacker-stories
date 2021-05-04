import React from "react";

import StoryCard from "../storyCard/storyCard.component";
import Button from "../button/button.component";

import "./main.styles.css";

function Main() {
  return (
    <main className="stories-container">
      <StoryCard />
      <StoryCard />
      <StoryCard />

      <Button width="100%" height="48px" type="" isActive={true}>Load More</Button>
    </main>
  );
}

export default Main;