import { useCallback, useRef } from "react";
import queryString from "query-string";
import useDependencyContainer from "hooks/DependencyContainer";

/**
 * Custom hook which houses parameters and functions for making
 * AJAX requests to the backend API, for fetching data for the
 * Previous Quotes listing components.
 *
 * The following dependencies are required by this hook,
 * which should be set using either of the
 * setDependency or setDependencies functions returned by
 * this hook:
 *  - dispatch: The QuotesReducer dispatch function
 *  - setHistoryPushFlag: Function returned by the usePreviousQuotesHistory hook.
 *
 * @param {Function} dispatch
 * @return {Object}
 */
const useFetchPreviousQuotesData = () => {
  const {
    setDependency,
    getDependencies,
    setDependencies,
  } = useDependencyContainer({
    dispatch: null,
    setHistoryPushFlag: null,
  });
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
  const fetchData = useCallback(() => {
    const { dispatch, setHistoryPushFlag } = getDependencies();

    return fetch(`${apiUrl}/${apiEndpoint}?${queryStr.current}`, {
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
          setHistoryPushFlag();

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
      );
  }, [apiUrl, apiEndpoint, queryStr, apiToken, getDependencies]);

  return {
    getFilterParams,
    setFilterParams,
    getQueryString,
    fetchData,
    setDependency,
    setDependencies,
  };
};

export default useFetchPreviousQuotesData;
