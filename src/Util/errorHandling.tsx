import { AnyAction, Dispatch } from "@reduxjs/toolkit"
import { setFailure } from "../Redux/Slices/modal.slice"

const errorHandling = (
  dispatch: Dispatch<AnyAction>,
  err: any,
  callback?: () => void
) => {
  let message = ""
  if (err.response.data && err.response.data.message)
    message = err.response.data.message
  else if (err.response.data && Array.isArray(err.response.data))
    message = err.response.data.join(", \n")
  else message = "We Encountered an Error. Try Agin Later"

  dispatch(
    setFailure({
      message,
      navigateTo: "",
      callback,
    })
  )

  console.log(err.response)
}

export default errorHandling
