import React from "react";
import Logo from "../assets/travelLogo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="Navbar--nav">
        <img src={Logo} className="Navbar--logo" />
        <h1 className="Navbar--text">Ariel Zeto's Travel Journal</h1>
        <ul className="Navbar--items">
          <li>
            <a href="https://www.linkedin.com/in/ariel-zeto/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/AriZeto">Github</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
