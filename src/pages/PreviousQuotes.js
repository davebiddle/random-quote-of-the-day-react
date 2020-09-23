import React from "react";
import PreviousQuotesListing from "components/previous-quotes/PreviousQuotesListing";

function PreviousQuotes(props) {
  return (
    <div>
      <div>
        <h3>Previous Quotes</h3>
      </div>
      <PreviousQuotesListing />
    </div>
  );
}

export default PreviousQuotes;
