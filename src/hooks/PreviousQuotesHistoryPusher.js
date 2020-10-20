import { useHistory } from "react-router-dom";
import { createPath } from "history";
import usePreviousQuotesHistoryState from "hooks/PreviousQuotesHistoryState";

function usePreviousQuotesHistoryPusher() {
  const history = useHistory();
  const { location } = history;
  const [locationKeys, setLocationKeys] = usePreviousQuotesHistoryState();

  const pushToHistoryStack = (query, state) => {
    const ret = history.push(
      createPath({
        pathname: location.pathname,
        search: query,
      }),
      state
    );

    console.log(ret);

    setLocationKeys([location.key]); //todo: will this be the right key?
  };

  return pushToHistoryStack;
}

export default usePreviousQuotesHistoryPusher;
