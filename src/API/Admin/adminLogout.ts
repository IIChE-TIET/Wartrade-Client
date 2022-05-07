import axios from "axios"
import { adminLogoutEndpoint } from "../Endpoints"

const adminLogoutAPI = async () => {
  try {
    await axios[adminLogoutEndpoint.method](adminLogoutEndpoint.url, {
      withCredentials: true,
    })
  } catch (err) {
    console.log(err)
  }
}

export default adminLogoutAPI
