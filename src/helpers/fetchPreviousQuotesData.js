import queryString from "query-string";

const fetchPreviousQuotesData = (filterQuery, dispatch) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiToken = process.env.REACT_APP_API_TOKEN;
  const apiEndpoint =
    process.env.REACT_APP_API_ENDPOINT_PREVIOUS_QUOTES_LISTING;
  const query = queryString.stringify(filterQuery);

  fetch(`${apiUrl}/${apiEndpoint}?${query}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then(
      (json) => {
        // call dispatch Reducer action for setting quotes data in context state
        dispatch({
          type: "ajax/setQuotesData",
          payload: {
            quotes: json.data,
            paginationMeta: json.meta,
            filterQuery,
            queryString: query,
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
};

export default fetchPreviousQuotesData;
