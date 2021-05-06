import React from "react";
import ReactDOM from "react-dom";
import Main from "../components/main/main.component";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Main isNewStory={false} />, div);
})