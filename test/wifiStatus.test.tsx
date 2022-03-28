import React from "react";
import * as ReactDOM from "react-dom";
import { Default as WifiStatus } from "../stories/WifiStatus.stories";

describe("WifiStatus", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<WifiStatus />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
