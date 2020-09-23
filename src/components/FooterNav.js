import React from "react";
import logo_footer from "img/logo-footer-140x86.png";

function FooterNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Today's Quote</a>
          </li>
          <li>
            <a href="/">Previous Quotes</a>
          </li>
          <li>
            <a href="/about">About Random QOTD</a>
          </li>
        </ul>
      </nav>
      <div>
        <a href="/">
          <img src={logo_footer} alt="Logo" />
        </a>
      </div>
    </div>
  );
}

export default FooterNav;
