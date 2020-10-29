import BaseClient from "api/BaseClient";

class StateClient extends BaseClient {
  constructor(setState, setError, setIsLoaded) {
    super();
    this.setState = setState;
    this.setError = setError;
    this.setIsLoaded = setIsLoaded;
  }

  updateState(json) {
    this.setIsLoaded(true);
    this.setState(json.data);
  }

  handleError(error) {
    this.setIsLoaded(true);
    this.setError(error);
  }
}

export { StateClient as ApiClient };
