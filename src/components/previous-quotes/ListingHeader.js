import React, { useContext } from "react";
import QuotesContext from "contexts/QuotesContext";

function ListingHeader() {
  const { orderBy } = useContext(QuotesContext);

  return (
    <header className="px-4 sm:px-8 md:px-10 py-2 md:h-16 lg:h-20 text-gray-600 text-sm italic sm:flex sm:justify-between sm:items-center lg:items-end lg:pl-0 lg:pt-0 lg:pb-4">
      <p className="mb-2 sm:mb-0 md:mt-7">Showing 1-20 of 1023 quotes</p>
      <div>
        <label for="select-order">Order by:</label>
        <div className="inline-block relative w-48 ml-4">
          <select
            id="select-order"
            name="select-order"
            onChange={orderBy}
            className="appearance-none w-full bg-white border-2 border-gray-400 hover:border-gray-600 rounded px-4 py-1 pr-8 focus:outline-none focus:shadow-outline"
          >
            <option value="desc" selected>
              Date (Newest first)
            </option>
            <option value="asc">Date (Oldest first)</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex justify-center items-center border-l-2 border-gray-400 w-10">
            <svg
              width="3.2217mm"
              height="1.933mm"
              version="1.1"
              viewBox="0 0 3.2217 1.933"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                transform="translate(-98.931 -142.66)"
                fill="none"
                stroke="#979797"
                stroke-linecap="round"
                stroke-width=".64434"
              >
                <path d="m101.83 142.99-1.2887 1.2887" />
                <path d="m99.253 142.99 1.2887 1.2887" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ListingHeader;
