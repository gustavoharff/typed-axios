import axios from "axios";
import { api } from "./axios";

import { ApiError, GetTasks } from "./types";

(async () => {
  try {
    const response = await api<GetTasks>({
      url: "/v1/tasks",
      method: "GET",
      data: undefined,
    });
  } catch (error) {
    if (axios.isAxiosError<ApiError>(error)) {
      //
    }
  }
})();
