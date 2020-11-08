import React, { useReducer, useEffect } from "react";
import ListingHeader from "components/previous-quotes/ListingHeader";
import ListingNarrow from "components/previous-quotes/ListingNarrow";
import ListingWide from "components/previous-quotes/ListingWide";
import ListingPagination from "components/previous-quotes/ListingPagination";
import QuotesContext from "contexts/QuotesContext";
import QuotesReducer from "reducers/QuotesReducer";
import useFetchPreviousQuotesData from "hooks/FetchPreviousQuotesData";
import AjaxLoadingSpinner from "components/ajax/AjaxLoadingSpinner";
import AjaxError from "components/ajax/AjaxError";
import usePreviousQuotesHistory from "hooks/PreviousQuotesHistory";
import { usePromiseTracker } from "react-promise-tracker";

const PreviousQuotesListing = () => {
  const initialState = {
    quotes: [],
    ajaxError: null,
    isLoaded: false,
    paginationMeta: [],
  };
  const [state, dispatch] = useReducer(QuotesReducer, initialState);
  const { quotes, ajaxError, isLoaded, paginationMeta } = state;
  const { promiseInProgress: ajaxInProgress } = usePromiseTracker();
  const {
    getFilterParams,
    setFilterParams,
    fetchData,
    getQueryString,
    setDependencies: setFetchDependencies,
  } = useFetchPreviousQuotesData();

  const {
    setHistoryPushFlag,
    setDependencies: setHistoryDependencies,
  } = usePreviousQuotesHistory();

  setFetchDependencies({
    dispatch,
    setHistoryPushFlag,
  });

  setHistoryDependencies({
    dispatch,
    state,
    getQueryString,
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (ajaxError) {
    return <AjaxError ajaxError={ajaxError} />;
  } else if (!isLoaded || ajaxInProgress) {
    return <AjaxLoadingSpinner />;
  } else {
    return (
      <QuotesContext.Provider
        value={{
          quotes,
          paginationMeta,
          getFilterParams,
          setFilterParams,
          fetchData,
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
};

export default PreviousQuotesListing;
