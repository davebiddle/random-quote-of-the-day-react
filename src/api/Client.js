import queryString from "query-string";
import { registerHistoryStackPushEvent } from "hooks/PreviousQuotesHistory";

class ApiClient {
  constructor(dispatch) {
    this.dispatch = dispatch;

    this.domain = process.env.REACT_APP_API_URL;
    this.token = process.env.REACT_APP_API_TOKEN;

    this.buildQueryString = function () {
      this.queryString = queryString.stringify(this.filterParams);
    };
  }

  setEndpoint(endpoint) {
    this.endpoint = endpoint;
  }

  setFilterParams(filterParams) {
    this.filterParams = filterParams;
    this.buildQueryString();
  }

  setFilterParam(key, param) {
    this.filterParams[key] = param;
    this.buildQueryString();
  }

  getFilterParams() {
    return this.filterParams;
  }

  getFilterParam(key) {
    return this.filterParams[key];
  }

  getQueryString() {
    return this.queryString;
  }

  fetchData() {
    let url = `${this.domain}/${this.endpoint}`;

    if (this.queryString) {
      url += `?${this.queryString}`;
    }

    const promise = new Promise((resolve, reject) => {
      resolve(
        fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${this.token}`,
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then(
            (json) => {
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
                  queryString: this.queryString,
                },
              });
            },
            // The React docs specify handling errors here instead of a catch block:
            // https://reactjs.org/docs/faq-ajax.html
            (error) => {
              this.dispatch({
                type: "ajax/setError",
                payload: {
                  ajaxError: error,
                },
              });
            }
          )
      );
    });

    return promise;
  }
}

export default ApiClient;
