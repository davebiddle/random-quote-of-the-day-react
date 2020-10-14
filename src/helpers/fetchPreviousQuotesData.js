import queryString from "query-string";

const fetchPreviousQuotesData = (path, filterQuery, dispatch) => {
  const query = queryString.stringify(filterQuery);

  fetch(`http://random-qotd.localhost/${path}?${query}`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer $2y$10$oEhfTbo2BDzrQ8HaVgW1Rud7pUmxa1ICIAbyNoC6xgk./0jP3I.yW",
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
