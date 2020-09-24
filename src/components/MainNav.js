import React from "react";
import logo from "img/logo-header-117x72.png";

function MainNav() {
  return (
    <div className="w-full h-24 pl-24 pr-8 flex justify-between items-center">
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <ul className="flex main-nav">
        <li>
          <a href="/">Today's Quote</a>
        </li>
        <li>|</li>
        <li>
          <a href="/previous-quotes">Previous Quotes</a>
        </li>
      </ul>
    </div>
  );
}

export default MainNav;
