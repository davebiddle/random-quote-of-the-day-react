const fetchQuotesData = (path, setisLoaded, setError, callback) => {
  fetch(`http://random-qotd.localhost/${path}`, {
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
        setisLoaded(true);
        // pass response json to callback
        callback(json);
      },
      // The React docs specify handling errors here instead of a catch block:
      // https://reactjs.org/docs/faq-ajax.html
      (error) => {
        setisLoaded(true);
        setError(error);
      }
    );
};

export default fetchQuotesData;
