import React from "react";
import globe_icon from "../images/globe_icon.png";

export default function Navbar() {
  return (
    <nav>
      <img src={globe_icon} />
      <h1>my travel journal.</h1>
    </nav>
  );
}
