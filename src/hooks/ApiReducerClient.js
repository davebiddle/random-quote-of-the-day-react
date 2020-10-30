import { useRef } from "react";
import { ApiReducerClient } from "api/ReducerClient";

class ApiClientWrapper {
  /**
   * Custom hook which instantiates a new ApiReducerClient
   * instance and sets is as a useRef property of
   * this class.
   *
   * @param {Function} setState
   * @param {Function} setError
   * @param {Function} setIsLoaded
   * @returns {ApiReducerClient}
   */
  static useApiClient(dispatch) {
    ApiClientWrapper.apiClient = useRef(new ApiReducerClient(dispatch));

    return ApiClientWrapper.getApiClient();
  }

  static getApiClient() {
    return ApiClientWrapper.apiClient.current;
  }
}

export const { useApiClient, getApiClient } = ApiClientWrapper;
