import { useRef } from "react";
import { ApiStateClient } from "api/StateClient";

class ApiClientWrapper {
  /**
   * Custom hook which instantiates a new ApiStateClient
   * instance and sets is as a useRef property of
   * this class.
   *
   * @param {Function} setState
   * @param {Function} setError
   * @param {Function} setIsLoaded
   * @returns {ApiStateClient}
   */
  static useApiClient(setState, setError, setIsLoaded) {
    ApiClientWrapper.apiClient = useRef(
      new ApiStateClient(setState, setError, setIsLoaded)
    );

    return ApiClientWrapper.getApiClient();
  }

  static getApiClient() {
    return ApiClientWrapper.apiClient.current;
  }
}

export const { useApiClient, getApiClient } = ApiClientWrapper;
