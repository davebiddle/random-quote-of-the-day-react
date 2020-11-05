import { useCallback, useRef } from "react";
import queryString from "query-string";

/**
 * Custom hook which houses parameters and functions for making
 * AJAX requests to the backend API, for fetching data for the
 * Previous Quotes listing components.
 *
 * Takes the `dispatch` function returned by useReducer() as an
 * argument, which is used to update the state with the response.
 *
 * @param {Function} dispatch
 * @return {Object}
 */
const useFetchPreviousQuotesData = (dispatch) => {
  const defaultPerPage = process.env.REACT_APP_DEFAULT_PER_PAGE;
  const defaultOrder = process.env.REACT_APP_DEFAULT_ORDER;
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiToken = process.env.REACT_APP_API_TOKEN;
  const apiEndpoint =
    process.env.REACT_APP_API_ENDPOINT_PREVIOUS_QUOTES_LISTING;

  /**
   * The filter parameters to use in the request.
   *
   * @type {Object}
   */
  const filterParams = useRef({
    page: 1,
    per_page: defaultPerPage,
    order: defaultOrder,
  });

  /**
   * The formatted query string for use in the request, constructed
   * from the filterParams object.
   *
   * @type {string}
   */
  const queryStr = useRef(queryString.stringify(filterParams.current));

  /**
   * Sets the filter parameters to use in the request.
   *
   * @param {Object} params The filter parameters for the request
   */
  const setFilterParams = useCallback((params) => {
    filterParams.current = params;
    queryStr.current = queryString.stringify(filterParams.current);
  }, []);

  /**
   * Returns the filterParams ref object.
   *
   * @return {string}
   */
  const getFilterParams = useCallback(() => filterParams.current, []);

  /**
   * Returns the formatted query string.
   *
   * @return {string}
   */
  const getQueryString = useCallback(() => queryStr.current, []);

  /**
   * Performs the request. Returns a Promise for use by the react-promise-tracker
   * package, for determining when the request has completed.
   *
   * @return {Promise}
   */
  const fetchData = useCallback(
    (setPushRef) => {
      const promise = new Promise((resolve, reject) => {
        resolve(
          fetch(`${apiUrl}/${apiEndpoint}?${queryStr.current}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${apiToken}`,
              Accept: "application/json",
            },
          })
            .then((response) => response.json())
            .then(
              (json) => {
                // Register a history stack push event, to be picked up by our history
                // hook when the state has been updated with this response.
                // We do this here because we need the updated state in the history item
                // which is pushed onto the stack.
                setPushRef(true);

                // Call dispatch Reducer action for setting quotes data in context state
                dispatch({
                  type: "ajax/setQuotesData",
                  payload: {
                    quotes: json.data,
                    paginationMeta: json.meta,
                  },
                });
              },
              // The React docs specify handling errors here instead of a catch block:
              // https://reactjs.org/docs/faq-ajax.html
              (error) => {
                dispatch({
                  type: "ajax/setError",
                  payload: {
                    ajaxError: error,
                  },
                });
              }
            )
        );
      });

      return promise;
    },
    [apiUrl, apiEndpoint, queryStr, apiToken, dispatch]
  );

  return { getFilterParams, setFilterParams, getQueryString, fetchData };
};

export default useFetchPreviousQuotesData;
