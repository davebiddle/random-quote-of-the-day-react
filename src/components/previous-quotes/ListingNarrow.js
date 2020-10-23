import React, { useContext } from "react";
import PreviousQuoteOpen from "components/previous-quotes/PreviousQuoteOpen";
import PreviousQuoteClosed from "components/previous-quotes/PreviousQuoteClosed";
import QuotesContext from "contexts/QuotesContext";
import SvgIconArrowDown from "components/svg/SvgIconArrowDown";

function ListingNarrow() {
  const { quotes } = useContext(QuotesContext);

  return (
    <React.Fragment>
      <header className="flex justify-start items-center h-10 border-b-2 text-mako-600 border-mako-300 font-bold">
        <div className="px-2">
          <SvgIconArrowDown />
        </div>
        <div className="ml-16">Date</div>
      </header>
      <section>
        <ul>
          {quotes.map((quote) => {
            const { id: quoteId } = quote;

            return (
              <li key={quoteId} className="bg-white odd:bg-mako-100">
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
