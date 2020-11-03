import { useRef, useState } from "react";

const useHistoryStackPushRef = () => {
  const [pushRef, setPushRef] = useState();

  /**
   * Tracks whether a location should be pushed onto the
   * browser history stack. Allows components to flag
   * that an AJAX request has been made which will update their
   * state, and that state should be added as a location
   * in the browster history.
   *
   * @var bool
   */
  const historyStackPushRef = useRef(false);

  setPushRef(historyStackPushRef.current);

  return [pushRef, setPushRef];
};

export default useHistoryStackPushRef;
