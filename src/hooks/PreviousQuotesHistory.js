import { useEffect, useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { createPath } from "history";
import { usePromiseTracker } from "react-promise-tracker";

const PreviouseQuotesHistory = {
  /**
   * Tracks whether a location should be pushed onto the
   * browser history stack. Allows components to flag
   * that an AJAX request has been made which will update their
   * state, and that state should be added as a location
   * in the browster history.
   *
   * @var bool
   */
  pushEvent: null,

  /**
   * Registers a history stack push event.
   */
  registerHistoryStackPushEvent: function () {
    PreviouseQuotesHistory.pushEvent.current = true;
  },

  /**
   * Deregisters a history stack push event.
   */
  deregisterHistoryStackPushEvent: function () {
    PreviouseQuotesHistory.pushEvent.current = false;
  },

  /**
   * Returns whether a history stack push event has been
   * registered.
   *
   * @returns bool
   */
  pushEventRegistered: function () {
    return PreviouseQuotesHistory.pushEvent.current;
  },

  /**
   * Custom hook for pushing to browser history
   * and handling back/forward events.
   *
   * @param {Function} dispatch
   * @param {*} state
   */
  usePreviousQuotesHistory: function (dispatch, state) {
    const history = useHistory();
    const [locationKeys, setLocationKeys] = useState([]);
    const { ajaxInProgress } = usePromiseTracker();
    const pushEventRegistered = useCallback(
      PreviouseQuotesHistory.pushEventRegistered,
      []
    );
    const deregisterHistoryStackPushEvent = useCallback(
      PreviouseQuotesHistory.deregisterHistoryStackPushEvent,
      []
    );

    PreviouseQuotesHistory.pushEvent = useRef(false);

    // Push a location onto the history stack if a push event has
    // been registered and the associated AJAX request has completed.
    useEffect(() => {
      const { queryString } = state;

      if (pushEventRegistered() && !ajaxInProgress) {
        const { location } = history;
        const path = createPath({
          pathname: location.pathname,
          search: queryString,
        });

        history.push(path, state);

        deregisterHistoryStackPushEvent();
      }
    }, [
      ajaxInProgress,
      state,
      pushEventRegistered,
      deregisterHistoryStackPushEvent,
      history,
    ]);

    // Listen for browser history push/back/forward events
    // and manage accordingly
    useEffect(() => {
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
    }, [locationKeys, history, dispatch]);
  },
};

export const {
  usePreviousQuotesHistory,
  registerHistoryStackPushEvent,
} = PreviouseQuotesHistory;
