import { useEffect, useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { createPath } from "history";
import { usePromiseTracker } from "react-promise-tracker";

/**
 * Custom hook for pushing to browser history
 * and handling back/forward events.
 *
 * @param {Function} dispatch
 * @param {*} state
 */
const usePreviousQuotesHistory = (dispatch, state, pushRef, setPushRef) => {
  const history = useHistory();
  const [locationKeys, setLocationKeys] = useState([]);
  const { ajaxInProgress } = usePromiseTracker();

  console.log(pushRef);
  // Push a location onto the history stack if a push event has
  // been registered and the associated AJAX request has completed.
  useEffect(() => {
    const { queryString } = state;

    if (pushRef && !ajaxInProgress) {
      console.log("Push event in progress");
      const { location } = history;
      const path = createPath({
        pathname: location.pathname,
        search: queryString,
      });

      history.push(path, state);

      setPushRef(false);
    }
  }, [ajaxInProgress, state, pushRef, history]);

  // Listen for browser history push/back/forward events
  // and manage accordingly
  useEffect(() => {
    return history.listen((location) => {
      const { action } = history;
      const { key } = location;
      console.log("Action: " + action);

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
  }, [locationKeys, history, dispatch]);
};

export default usePreviousQuotesHistory;
