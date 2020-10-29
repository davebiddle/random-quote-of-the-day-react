import queryString from "query-string";

/**
 * Base class for fetching data from backend API endpoints.
 *
 * Expects subclasses to implement updateState() and
 * handleError() methods, which will be called with the fetch()
 * reponse.
 */
class BaseClient {
  constructor() {
    this.domain = process.env.REACT_APP_API_URL;
    this.token = process.env.REACT_APP_API_TOKEN;

    this.buildQueryString = function () {
      this._queryString = queryString.stringify(this.filterParams);
    };
  }

  /**
   * Set the 'path' portion of the fetch URL.
   *
   * @param {string} endpoint
   * @return {BaseClient}
   */
  setEndpoint(endpoint) {
    this.endpoint = endpoint;

    return this;
  }

  /**
   * Set filter parameters for the request. Replaces
   * any current parameters.
   *
   * @param {Object} filterParams
   * @return {BaseClient}
   */
  setFilterParams(filterParams) {
    this.filterParams = filterParams;
    this.buildQueryString();

    return this;
  }

  /**
   * Set a single filter parameter for the request.
   *
   * @param {string} key
   * @param {string} param
   * @return {BaseClient}
   */
  setFilterParam(key, param) {
    this.filterParams[key] = param;
    this.buildQueryString();

    return this;
  }

  /**
   * Get the filter parameters for the request.
   *
   * @return {Object}
   */
  getFilterParams() {
    return this.filterParams;
  }

  /**
   * Get a single filter parameter.
   *
   * @return {string}
   */
  getFilterParam(key) {
    return this.filterParams[key];
  }

  /**
   * Get a single filter parameter.
   *
   * @return {string}
   */
  getQueryString() {
    return this._queryString;
  }

  /**
   * Sets up a Promise when fetching data, which may optionally be
   * used with `react-promise-tracker` to track the status of requests
   * and do something; such as display a loading spinner while in
   * progress.
   *
   * @return {Promise}
   */
  fetchData() {
    let url = `${this.domain}/${this.endpoint}`;

    if (this._queryString) {
      url += `?${this._queryString}`;
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
              this.updateState(json);
            },
            // The React docs specify handling errors here instead of a catch block:
            // https://reactjs.org/docs/faq-ajax.html
            (error) => {
              this.handleError(error);
            }
          )
      );
    });

    return promise;
  }
}

export default BaseClient;
