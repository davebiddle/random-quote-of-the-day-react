import React from "react";

function mobileNavDropdown(props) {
  return (
    <React.Fragment>
      <button
        className="fixed top-0 right-0 bottom-0 left-0 w-full h-full bg-black opacity-50 cursor-default"
        onClick={props.onClose}
      ></button>
      <div className="sm:hidden absolute right-0 w-full bg-faded-jade font-serif text-white text-lg">
        <nav className="w-full list-none">
          <li className="pl-4 pb-2 pt-6 hover:bg-genoa">
            <a className="inline-block w-full" href="/">
              Today's Quote
            </a>
          </li>
          <li className="pl-4 pb-8 pt-1 hover:bg-genoa">
            <a className="inline-block w-full" href="/previous-quotes">
              Previous Quotes
            </a>
          </li>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default mobileNavDropdown;
