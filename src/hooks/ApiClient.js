import { useRef } from "react";
import ApiClient from "api/Client";

class ApiClientWrapper {
  static useApiClient(dispatch) {
    ApiClientWrapper.apiClient = useRef(new ApiClient(dispatch));

    return ApiClientWrapper.getApiClient();
  }

  static getApiClient() {
    return ApiClientWrapper.apiClient.current;
  }
}

export const { useApiClient, getApiClient } = ApiClientWrapper;
