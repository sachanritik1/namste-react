import React from "react";
import ReactDOM from "react-dom/client";

//React Elements -> its an object that describes a DOM node or a node tree

// const main_heading = React.createElement(
//   "h1",
//   {
//     id: "main-heading",
//     key: 1,
//   },
//   "Hello World for parcel"
// );

//JSX way of creating elements
const main_heading = (
  <h1 id="main-heading" key="1">
    Namaste React1
  </h1>
);

const sub_heading = (
  <h3 id="sub-heading" key="2">
    Namaste React2
  </h3>
);

const SubHeadingComponent = () => (
  <h3 id="sub-heading" key="3">
    Namaste React3
  </h3>
);

//React Components -> its a function or class that returns a React Element

// 1. Class Component
// 2. Functional Component

//we will use functional component

const HeaderComponent = () => {
  return (
    <div>
      {main_heading}
      <h2>This is a description</h2>
      {SubHeadingComponent()}
      <SubHeadingComponent />
    </div>
  );
};

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [main_heading, sub_heading]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);

root.render(<HeaderComponent />);
