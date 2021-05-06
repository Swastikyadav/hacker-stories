import React from "react";
import ReactDOM from "react-dom";
import Button from "../components/button/button.component";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
})

it("renders button correctly with props and children", () => {
  const {getByTestId} = render(
    <Button
      type=""
      width="50px"
      height="80px"
      isActive={true}
      handleBtnClick={() => console.log("button")}
    >
      Click Me!
    </Button>
  );

  expect(getByTestId("button")).toHaveTextContent("Click Me!");
})