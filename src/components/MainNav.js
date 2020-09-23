import React from "react";
import logo from "img/logo-header-117x72.png";

function MainNav() {
  return (
    <div>
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <ul>
        <li>
          <a href="/">Today's Quote</a>
        </li>
        <li>
          <a href="/">Previous Quotes</a>
        </li>
      </ul>
    </div>
  );
}

export default MainNav;
