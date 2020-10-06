import React, { useContext } from "react";
import PreviousQuoteOpen from "components/previous-quotes/PreviousQuoteOpen";
import PreviousQuoteClosed from "components/previous-quotes/PreviousQuoteClosed";
import QuotesContext from "contexts/QuotesContext";

function ListingNarrow() {
  const { quotes } = useContext(QuotesContext);

  return (
    <React.Fragment>
      <header className="flex justify-start items-center h-10 border-b-2 border-gray-400 font-bold">
        <div className="px-2">
          <svg
            width="7.9375mm"
            height="7.9375mm"
            version="1.1"
            viewBox="0 0 7.9375 7.9375"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-82.591 -137.4)" fill="none">
              <g
                transform="matrix(.72688 0 0 .72688 78.867 92.231)"
                stroke="#000"
                stroke-linecap="round"
                stroke-width=".88645"
              >
                <path d="m10.583 65.034v5.1378" />
                <path d="m12.356 68.399-1.7729 1.7729" />
                <path d="m8.8103 68.399 1.7729 1.7729" />
              </g>
              <rect x="82.591" y="137.4" width="7.9375" height="7.9375" />
            </g>
          </svg>
        </div>
        <div className="ml-16">Date</div>
      </header>
      <section>
        <ul>
          {quotes.map((quote) => {
            const { id: quoteId } = quote;

            return (
              <li key={quoteId} className="bg-white odd:bg-gray-300">
                {" "}
                {quote.isOpen ? (
                  <PreviousQuoteOpen quote={quote} />
                ) : (
                  <PreviousQuoteClosed quote={quote} />
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </React.Fragment>
  );
}

export default ListingNarrow;
