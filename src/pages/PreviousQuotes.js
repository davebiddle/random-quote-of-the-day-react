import React from "react";
import PreviousQuotesListing from "components/previous-quotes/PreviousQuotesListing";

const PreviousQuotes = () => {
  return (
    <div>
      <div className="bg-faded-jade font-serif px-5 py-4 sm:px-14 sm:pt-10">
        <h3 className="heading-flourish heading-flourish-after sm:heading-flourish-both text-white sm:text-3xl md:text-4xl sm:text-center sm:mb-10">
          Previous Quotes
        </h3>
      </div>
      <PreviousQuotesListing />
    </div>
  );
};

export default PreviousQuotes;
