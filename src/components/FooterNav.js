import React from "react";
import { Link } from "react-router-dom";
import logo_footer from "assets/img/logo-footer.png";

function FooterNav() {
  return (
    <div className="flourish-astro-bg flex flex-col-reverse sm:flex-row sm:justify-center px-16 sm:pl-48 pt-5 sm:pt-14 pb-6 sm:pb-18 space-y-3 space-y-reverse sm:space-y-0 sm:space-x-8 bg-astronaut-blue text-xl">
      <nav className="footer-nav">
        <ul>
          <li>
            <Link to="/">Today's Quote</Link>
          </li>
          <li>
            <Link to="/previous-quotes">Previous Quotes</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link to="/">
          <img src={logo_footer} alt="Logo" />
        </Link>
      </div>
    </div>
  );
}

export default FooterNav;
