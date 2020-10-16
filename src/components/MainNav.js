import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/img/logo-header-117x72.png";
import mob_nav_hamburger_icon from "assets/img/menu-mobile-hamburger.svg";
import mob_nav_close_icon from "assets/img/menu-mobile-close.svg";
import MobileNavDropdown from "components/MobileNavDropdown";

function MainNav() {
  // Create isOpen state prop using useState hook,
  // setting default value to `false`.
  const [isOpen, setIsOpen] = useState(false);

  // Click handler for toggling mobile nav dropdown.
  // Sets `isOpen` state prop to inverse of current value.
  const toggleMobileNavMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div className="relative z-20 w-full h-24 pl-4 sm:pl-24 pr-8 flex justify-between items-center bg-genoa font-serif text-white">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <div className="hidden sm:block">
          <nav className="flex main-nav list-none">
            <li className="hover:text-neon-carrot">
              <NavLink exact to="/" activeClassName="text-neon-carrot-lighter">
                Today's Quote
              </NavLink>
            </li>
            <li>|</li>
            <li className="hover:text-neon-carrot">
              <NavLink
                to="/previous-quotes"
                activeClassName="text-neon-carrot-lighter"
              >
                Previous Quotes
              </NavLink>
            </li>
          </nav>
        </div>
        <button className="sm:hidden">
          <img
            src={mob_nav_hamburger_icon}
            alt="Open mobile navigation menu"
            className={isOpen ? "hidden" : "block"}
            onClick={toggleMobileNavMenu}
          />
          <img
            src={mob_nav_close_icon}
            alt="Close mobile navigation menu"
            className={isOpen ? "block" : "hidden"}
            onClick={toggleMobileNavMenu}
          />
        </button>
      </div>
      {
        // Render MobileNavDropdown component conditionally, based on isOpen
        // state prop value
        isOpen ? <MobileNavDropdown onClose={toggleMobileNavMenu} /> : null
      }
    </div>
  );
}

export default MainNav;
