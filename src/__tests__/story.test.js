import React from "react";
import ReactDOM from "react-dom";
import Story from "../components/storyCard/storyCard.component";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Story storyId="42" />, div);
})