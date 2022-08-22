type Task = {
  id: number;
  name: string;
  done: boolean;
};

export interface PostTasks {
  url: "/v1/tasks";
  params: { name: string };
  response: Task;
  method: "POST";
}

export interface GetTasks {
  url: "/v1/tasks";
  params: undefined;
  response: Task[];
  method: "GET";
}

export type Endpoint = PostTasks | GetTasks;

export interface ApiParams<T extends Endpoint> {
  url: T["url"];
  data: T["params"];
  method: T["method"];
}

export interface ApiError {
  error: string
  timestamp: string
  status: number
  message: string
  path: string
}