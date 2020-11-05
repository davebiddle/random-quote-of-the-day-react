import { useState, useCallback } from "react";

/**
 * Custom hook which houses parameters and functions for making
 * AJAX requests to the backend API, for fetching data for the
 * hompage components.
 *
 * @param {string} path The API endpoint to make the request to.
 * @param {*} defaultResponseState The default state to set when creating the response state.
 * @return {Object}
 */
const useFetchQuotesData = (path, defaultResponseState) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [responseState, setResponseState] = useState(defaultResponseState);

  const apiUrl = process.env.REACT_APP_API_URL;
  const apiToken = process.env.REACT_APP_API_TOKEN;

  const fetchData = useCallback(() => {
    fetch(`${apiUrl}/${path}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(
        (json) => {
          // set isLoaded state flag
          setIsLoaded(true);
          // set response state
          setResponseState(json.data);
        },
        // The React docs specify handling errors here instead of a catch block:
        // https://reactjs.org/docs/faq-ajax.html
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [path, apiUrl, apiToken, setIsLoaded, setResponseState, setError]);

  return { error, isLoaded, responseState, fetchData };
};

export default useFetchQuotesData;
