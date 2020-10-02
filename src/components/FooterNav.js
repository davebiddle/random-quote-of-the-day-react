import React from "react";
import logo_footer from "assets/img/logo-footer.svg";

function FooterNav() {
  return (
    <div className="flourish-astro-bg flex flex-col-reverse sm:flex-row sm:justify-center px-16 sm:pl-48 pt-5 sm:pt-14 pb-6 sm:pb-18 space-y-3 space-y-reverse sm:space-y-0 sm:space-x-8 bg-astronaut-blue text-xl">
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
