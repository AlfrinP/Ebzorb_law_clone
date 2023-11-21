import React from "react";
import leaf from "../assets/header/leaf.png";

function Header(props) {
  return (
    <div className="center">
      <img src={leaf} className="w-20" />
      <div className="text-5xl font-bold w-fit">{props.name}</div>
      <img src={leaf} className="w-20 flip" />
    </div>
  );
}

export default Header;
