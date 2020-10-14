const fetchQuotesData = (path, setisLoaded, setError, callback) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const API_TOKEN = process.env.REACT_APP_API_TOKEN;

  fetch(`${API_URL}/${path}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
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
