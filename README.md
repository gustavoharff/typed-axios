# typed-axios

Map your endpoints config with typescript and use with axios package.

## Typing the requests

```typescript
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
```

## Using axios

Insert a endpoint type as generic on `api` and get the auto-complete config.

```typescript
const response = await api<GetTasks>({
  url: "/v1/tasks",
  method: "GET",
  data: undefined,
});
```

The type of `response.data` is a implicit `Array<Task>`.