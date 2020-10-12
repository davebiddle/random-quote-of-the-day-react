import React, { useState, useReducer, useEffect } from "react";
import ListingHeader from "components/previous-quotes/ListingHeader";
import ListingNarrow from "components/previous-quotes/ListingNarrow";
import ListingWide from "components/previous-quotes/ListingWide";
import ListingPagination from "components/previous-quotes/ListingPagination";
import QuotesContext from "contexts/QuotesContext";
import QuotesReducer from "reducers/QuotesReducer";
import fetchQuotesData from "helpers/fetchQuotesData";

function PreviousQuotesListing() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [state, dispatch] = useReducer(QuotesReducer, { quotes: [] });

  useEffect(() => {
    fetchQuotesData("api/quotes", setIsLoaded, setError, (json) => {
      dispatch({
        type: "quotes/setData",
        payload: {
          quotes: json.data,
        },
      });
    });
  }, []);

  const { quotes = [] } = state;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <QuotesContext.Provider
        value={{
          quotes,
          dispatch,
        }}
      >
        <div className="previous-quotes-listing bg-white lg:w-4/5 lg:relative lg:m-auto lg:-top-12 lg:shadow-blockquote lg:px-8">
          <ListingHeader />
          <section className="border-t-2 border-gray-400">
            <section className="md:hidden">
              <ListingNarrow />
            </section>
            <section className="hidden md:block">
              <ListingWide />
            </section>
          </section>
          <ListingPagination />
        </div>
      </QuotesContext.Provider>
    );
  }
}

export default PreviousQuotesListing;
