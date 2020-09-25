import React from "react";
import logo_footer from "assets/img/logo-footer-140x86.png";

function FooterNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Today's Quote</a>
          </li>
          <li>
            <a href="/previous-quotes">Previous Quotes</a>
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
