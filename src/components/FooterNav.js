import React from "react";
import logo_footer from "assets/img/logo-footer.svg";

function FooterNav() {
  return (
    <div className="flex flex-col-reverse sm:flex-row px-16 pt-5 pb-6 space-y-3 space-y-reverse bg-astronaut-blue font-serif text-white text-xl">
      <nav className="footer-nav">
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
