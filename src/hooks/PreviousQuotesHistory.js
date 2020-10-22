import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createPath } from "history";

function usePreviousQuotesHistory(dispatch, state) {
  const history = useHistory();
  const [locationKeys, setLocationKeys] = useState([]);

  useEffect(() => {
    const { historyPushEvent: pushEvent, paginationMeta, queryString } = state;

    if (pushEvent && paginationMeta) {
      const { location } = history;
      const path = createPath({
        pathname: location.pathname,
        search: queryString,
      });

      history.push(path, state);

      dispatch({
        type: "history/pushEventComplete",
      });
    }

    return history.listen((location) => {
      const { action } = history;
      const { key } = location;

      if (action === "PUSH") {
        setLocationKeys([key]);
      } else if (action === "POP") {
        if (locationKeys[1] === key) {
          // handle browser 'forward' button click
          dispatch({
            type: "history/handleForward",
            payload: {
              oldState: { ...location.state, historyPushEvent: false },
            },
          });

          // set locationKeys array with
          // the first element removed.
          // eslint-disable-next-line
          setLocationKeys(([_, ...keys]) => keys);
        } else {
          // handle browser 'back' button click
          dispatch({
            type: "history/handleBack",
            payload: {
              oldState: { ...location.state, historyPushEvent: false },
            },
          });

          // add the current location's key
          // to the start of the array of location keys.{
          setLocationKeys((keys) => [location.key, ...keys]);
        }
      }
    });
  }, [locationKeys, history, dispatch, state]);
}

export default usePreviousQuotesHistory;
