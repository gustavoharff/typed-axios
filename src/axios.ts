import axios, { AxiosResponse } from "axios";
import { ApiParams, Endpoint } from "./types";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

export async function api<T extends Endpoint>({
  url,
  data,
  method,
}: ApiParams<T>): Promise<AxiosResponse<T["response"]>> {
  return axiosInstance({
    url,
    data,
    method,
  });
}
