import { useRef } from "react";
import { ApiClient } from "api/StateClient";

class ApiClientWrapper {
  static useApiClient(setState, setError, setIsLoaded) {
    ApiClientWrapper.apiClient = useRef(
      new ApiClient(setState, setError, setIsLoaded)
    );

    return ApiClientWrapper.getApiClient();
  }

  static getApiClient() {
    return ApiClientWrapper.apiClient.current;
  }
}

export const { useApiClient, getApiClient } = ApiClientWrapper;
