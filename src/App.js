import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <h2>This is a description</h2>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
