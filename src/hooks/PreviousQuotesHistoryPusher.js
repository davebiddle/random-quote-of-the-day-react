import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { createPath } from "history";
import usePreviousQuotesHistoryState from "hooks/PreviousQuotesHistoryState";
import queryString from "query-string";

function usePreviousQuotesHistoryPusher() {
  const history = useHistory();
  const { location } = history;
  const [locationKeys, setLocationKeys] = usePreviousQuotesHistoryState();

  const pushToHistoryStack = (newState) => {
    const { filterQuery } = newState;
    const query = queryString.stringify(filterQuery);

    history.push(
      createPath({
        pathname: location.pathname,
        search: query,
      }),
      newState
    );

    setLocationKeys([location.key]); //todo: will this be the right key?
  };

  return pushToHistoryStack;
}

export default usePreviousQuotesHistoryPusher;
