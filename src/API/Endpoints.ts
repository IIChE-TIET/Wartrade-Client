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

export const baseUrl =
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

export const buyBombsEndpoint: Endpoint = {
  url: baseUrl + "/private" + "/buyBombs",
  method: Method.POST,
}

export const buyDefenseEndpoint: Endpoint = {
  url: baseUrl + "/private" + "/buyDefensePoints",
  method: Method.POST,
}

export const attackEndpoint: Endpoint = {
  url: baseUrl + "/private" + "/attack",
  method: Method.POST,
}

export const adminLoginEndpoint: Endpoint = {
  url: baseUrl + "/adminLogin",
  method: Method.POST,
}

export const adminSignupEndpoint: Endpoint = {
  url: baseUrl + "/adminSignup",
  method: Method.POST,
}

export const adminLogoutEndpoint: Endpoint = {
  url: baseUrl + "/admin" + "/logout",
  method: Method.GET,
}

export const allianceEndpoint: Endpoint = {
  url: baseUrl + "/admin" + "/alliance",
  method: Method.POST,
}

export const tradingEndpoint: Endpoint = {
  url: baseUrl + "/admin" + "/trading",
  method: Method.POST,
}

export const viewTeamsEndpoint: Endpoint = {
  url: baseUrl + "/view",
  method: Method.GET,
}

export const assignCountryEndpoint: Endpoint = {
  url: baseUrl + "/admin" + "/assignCountry",
  method: Method.POST,
}
