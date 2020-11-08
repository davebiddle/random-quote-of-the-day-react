import { useEffect, useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { createPath } from "history";
import { usePromiseTracker } from "react-promise-tracker";
import useDependencyContainer from "hooks/DependencyContainer";

/**
 * Custom hook for pushing to browser history
 * and handling back/forward events.
 *
 * The following dependencies are required by this hook,
 * which should be set using either of the
 * setDependency or setDependencies functions returned by
 * this hook:
 *  - dispatch: The QuotesReducer dispatch function
 *  - state: The state managed by the QuotesReducer
 *  - getQueryString: Function returned by the useFetchPreviousQuotesData hook.
 *
 * @return {Object}
 */
const usePreviousQuotesHistory = () => {
  const history = useHistory();
  const [locationKeys, setLocationKeys] = useState([]);
  const { ajaxInProgress } = usePromiseTracker();
  const {
    setDependency,
    getDependencies,
    setDependencies,
  } = useDependencyContainer({
    dispatch: null,
    state: null,
    getQueryString: null,
  });

  /**
   * Tracks whether a location should be pushed onto the
   * browser history stack. Allows components to flag
   * that an AJAX request has been made which will update their
   * state, and that state should be added as a location
   * in the browster history, once the request has completed and
   * the state has been updated.
   *
   * @var bool
   */
  const pushRef = useRef(false);

  const setHistoryPushFlag = useCallback(() => {
    console.log("push event registered");
    pushRef.current = true;
  }, []);

  const pushEventRegistered = useCallback(() => pushRef.current, []);

  const { state, getQueryString } = getDependencies();

  // Push a location onto the history stack if a push event has
  // been registered and the associated AJAX request has completed.
  useEffect(() => {
    console.log("push event registered: " + pushEventRegistered());
    if (pushEventRegistered() && !ajaxInProgress) {
      const { location } = history;
      const path = createPath({
        pathname: location.pathname,
        search: getQueryString(),
      });

      history.push(path, state);

      pushRef.current = false;
    }
  }, [ajaxInProgress, history, state, getQueryString, pushEventRegistered]);

  // Listen for browser history push/back/forward events
  // and manage accordingly
  useEffect(() => {
    const { dispatch } = getDependencies();

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
  }, [locationKeys, history, getDependencies]);

  // return our pushRef flagger so that the ref can be set by components,
  // plus our dependecy setter functions
  return { setHistoryPushFlag, setDependency, setDependencies };
};

export default usePreviousQuotesHistory;
