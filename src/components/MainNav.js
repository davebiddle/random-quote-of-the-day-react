import React from "react";
import logo from "assets/img/logo-header-117x72.png";

function MainNav() {
  return (
    <div className="w-full h-24 pl-24 pr-8 flex justify-between items-center bg-genoa font-serif">
      <a href="/">
        <img src={logo} alt="Logo main" />
      </a>
      <ul className="flex main-nav text-white">
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
