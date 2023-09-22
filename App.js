import React from "react";
import ReactDOM from "react-dom/client";
const main_heading = React.createElement(
  "h1",
  {
    id: "main-heading",
  },
  "Hello World for parcel"
);
const sub_heading = React.createElement(
  "h2",
  {
    id: "sub-heading",
  },
  "Hello World 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [main_heading, sub_heading]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
