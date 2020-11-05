import { useCallback } from "react";

const useFetchQuotesData = (path, setisLoaded, setError, setState) => {
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
          setisLoaded(true);
          // set response in state using passed in state setter
          setState(json.data);
        },
        // The React docs specify handling errors here instead of a catch block:
        // https://reactjs.org/docs/faq-ajax.html
        (error) => {
          setisLoaded(true);
          setError(error);
        }
      );
  }, [path, apiUrl, apiToken, setisLoaded, setState, setError]);

  return fetchData;
};

export default useFetchQuotesData;
