import BaseClient from "api/BaseClient";
import { registerHistoryStackPushEvent } from "hooks/PreviousQuotesHistory";

class ReducerClient extends BaseClient {
  constructor(dispatch) {
    super();
    this.dispatch = dispatch;
  }

  updateState(json) {
    // Register a history stack push event, to be picked up by our history
    // hook when the state has been updated with this response.
    // We do this here because we need the updated state in the history item
    // which is pushed onto the stack.
    registerHistoryStackPushEvent();

    // Call dispatch Reducer action for setting quotes data in context state
    this.dispatch({
      type: "ajax/setQuotesData",
      payload: {
        quotes: json.data,
        paginationMeta: json.meta,
        filterQuery: this.filterParams,
        queryString: this._queryString,
      },
    });
  }

  handleError(error) {
    this.dispatch({
      type: "ajax/setError",
      payload: {
        ajaxError: error,
      },
    });
  }
}

export { ReducerClient as ApiClient };
