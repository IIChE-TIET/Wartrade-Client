/* eslint-disable no-useless-concat */
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

export const logoutEndpoint: Endpoint = {
  url: baseUrl + "/private" + "/logout",
  method: Method.GET,
}

export const profileEndpoint: Endpoint = {
  url: baseUrl + "/private",
  method: Method.GET,
}

export const forgotPasswordGenTokenEndpoint: Endpoint = {
  url: baseUrl + "/forgotPassword/generateToken",
  method: Method.POST,
}

export const forgotPasswordVerifyTokenEndpoint: Endpoint = {
  url: baseUrl + "/forgotPassword/verifyToken",
  method: Method.POST,
}

export const forgotPasswordChangeEndpoint: Endpoint = {
  url: baseUrl + "/forgotPassword/change",
  method: Method.POST,
}
