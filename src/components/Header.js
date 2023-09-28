import React from "react";

const Header = () => {
  const liStyle = "bg-sky-500 hover:bg-sky-700 rounded-md p-0.5";
  return (
    <div className="flex justify-between m-4">
      <a href="/">
        <h1>Food Villa</h1>
      </a>
      <ul className="flex gap-4">
        <li className={liStyle}>Home</li>
        <li className={liStyle}>Menu</li>
        <li className={liStyle}>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
