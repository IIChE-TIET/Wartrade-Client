type Endpoint = {
  url: string
  method: Method
}
enum Method {
  "POST" = "post",
  "GET" = "get",
  "PATCH" = "patch",
  "PUT" = "put",
  "DELETE" = "delete",
}

const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://wartrade.herokuapp.com"

export const loginEndpoint: Endpoint = {
  url: baseUrl,
  method: Method.POST,
}

export const createTeamEndpoint: Endpoint = {
  url: baseUrl + "/create",
  method: Method.POST,
}

export const joinTeamEndpoint: Endpoint = {
  url: baseUrl + "/join",
  method: Method.POST,
}
