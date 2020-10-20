import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import usePreviousQuotesHistoryState from "hooks/PreviousQuotesHistoryState";

function usePreviousQuotesHistory(dispatch) {
  const history = useHistory();
  const [locationKeys, setLocationKeys] = usePreviousQuotesHistoryState();

  // useEffect(() => {
  //   console.log(history.action);
  //     history.push(
  //       createPath({
  //         pathname: location.pathname,
  //         search: query,
  //       }),
  //       state
  //     );

  //     setLocationKeys([location.key]);
  // }, [query]);

  useEffect(() => {
    return history.listen((location) => {
      console.log(history.action);
      console.log(location);

      if (history.action == "POP") {
        if (locationKeys[1] === location.key) {
          // handle browser 'forward' button click
          dispatch({
            type: "history/handleForward",
            payload: {
              oldState: location.state,
            },
          });

          // set locationKeys array, with the first
          // element removed.
          // eslint-disable-next-line
          setLocationKeys(([_, ...keys]) => keys);
        } else {
          // handle browser 'back' button click
          dispatch({
            type: "history/handleBack",
            payload: {
              oldState: location.state,
            },
          });

          // add the current location's key
          // to the start of the array of location keys.
          setLocationKeys((keys) => [location.key, ...keys]);
        }
      }
    });
  }, [locationKeys]);
}

export default usePreviousQuotesHistory;
