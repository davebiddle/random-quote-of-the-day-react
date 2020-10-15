import React, { useReducer, useEffect } from "react";
import ListingHeader from "components/previous-quotes/ListingHeader";
import ListingNarrow from "components/previous-quotes/ListingNarrow";
import ListingWide from "components/previous-quotes/ListingWide";
import ListingPagination from "components/previous-quotes/ListingPagination";
import QuotesContext from "contexts/QuotesContext";
import QuotesReducer from "reducers/QuotesReducer";
import fetchPreviousQuotesData from "helpers/fetchPreviousQuotesData";
import AjaxLoadingSpinner from "components/AjaxLoadingSpinner";

function PreviousQuotesListing() {
  const defaultPerPage = process.env.REACT_APP_DEFAULT_PER_PAGE;
  const initialState = {
    quotes: [],
    ajaxError: null,
    isLoaded: false,
    paginationMeta: {},
    filterQuery: { page: 1, per_page: defaultPerPage, order: "desc" },
  };
  const [state, dispatch] = useReducer(QuotesReducer, initialState);
  const { quotes, ajaxError, isLoaded, paginationMeta, filterQuery } = state;
  const apiEndpoint =
    process.env.REACT_APP_API_ENDPOINT_PREVIOUS_QUOTES_LISTING;

  useEffect(() => {
    fetchPreviousQuotesData(apiEndpoint, filterQuery, dispatch);
  }, []);

  if (ajaxError) {
    return <div>Error: {ajaxError.message}</div>;
  } else if (!isLoaded) {
    return <AjaxLoadingSpinner />;
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
