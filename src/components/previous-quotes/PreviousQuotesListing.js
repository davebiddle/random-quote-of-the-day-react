import React, { useReducer, useEffect } from "react";
import ListingHeader from "components/previous-quotes/ListingHeader";
import ListingNarrow from "components/previous-quotes/ListingNarrow";
import ListingWide from "components/previous-quotes/ListingWide";
import ListingPagination from "components/previous-quotes/ListingPagination";
import QuotesContext from "contexts/QuotesContext";
import QuotesReducer from "reducers/QuotesReducer";
import fetchPreviousQuotesData from "helpers/fetchPreviousQuotesData";

function PreviousQuotesListing() {
  const initialState = {
    quotes: [],
    ajaxError: null,
    isLoaded: false,
    paginationMeta: {},
    filterQuery: { page: 1, per_page: 10, order: "desc" },
  };
  const [state, dispatch] = useReducer(QuotesReducer, initialState);
  const { quotes, ajaxError, isLoaded, paginationMeta, filterQuery } = state;

  useEffect(() => {
    fetchPreviousQuotesData("api/quotes", filterQuery, dispatch);
  }, []);

  if (ajaxError) {
    return <div>Error: {ajaxError.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <QuotesContext.Provider
        value={{
          quotes,
          dispatch,
          paginationMeta,
          filterQuery,
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
