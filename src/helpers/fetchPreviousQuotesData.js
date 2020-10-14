import queryString from "query-string";

const fetchPreviousQuotesData = (path, filterQuery, dispatch) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const API_TOKEN = process.env.REACT_APP_API_TOKEN;
  const query = queryString.stringify(filterQuery);

  fetch(`${API_URL}/${path}?${query}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
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
            filterQuery: filterQuery,
          },
        });
      },
      // The React docs specify handling errors here instead of a catch block:
      // https://reactjs.org/docs/faq-ajax.html
      (error) => {
        dispatch({
          type: "ajax/setError",
        });
      }
    );
};

export default fetchPreviousQuotesData;
