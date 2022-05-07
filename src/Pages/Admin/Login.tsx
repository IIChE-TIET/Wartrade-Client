import styled from "@emotion/styled"
import { useState } from "react"
import { useDispatch } from "react-redux"
import adminLoginAPI from "../../API/Admin/adminLogin.api"
import { adminLogin } from "../../Redux/Slices/admin.slice"
import { startLoading, stopLoading } from "../../Redux/Slices/loading.slice"
import { setSuccess } from "../../Redux/Slices/modal.slice"
import errorHandling from "../../Util/errorHandling"

const AdminLogin = () => {
  const [input, setInput] = useState({ name: "", password: "" })

  const dispatch = useDispatch()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({ ...input, [e.target.name]: e.target.value }))

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(startLoading())
    try {
      await adminLoginAPI(input)
      dispatch(adminLogin())
      dispatch(
        setSuccess({
          message: "Login Successfull",
          navigateTo: "/admin/dash",
        })
      )
    } catch (err: any) {
      errorHandling(dispatch, err)
    } finally {
      dispatch(stopLoading())
      setInput({ name: "", password: "" })
    }
  }

  return (
    <StyledLogin>
      <h1>Admin Login</h1>
      <form onSubmit={submitHandler}>
        <div className="inputContainer">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            required
            autoFocus
            name="name"
            value={input.name}
            onChange={changeHandler}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            required
            name="password"
            value={input.password}
            onChange={changeHandler}
          />
        </div>
        <button>Login</button>
      </form>
    </StyledLogin>
  )
}

const StyledLogin = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    color: var(--text);
  }

  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > * + * {
      margin-top: 1rem;
    }
    .inputContainer {
      width: 100%;
      label {
        color: var(--text);
      }
      input {
        width: 100%;
        background: #fff;
        color: #000;
        border-radius: 10px;
        padding: calc(var(--padding) / 4) calc(var(--padding) / 2);
      }
    }
    button {
      align-self: center;
      border-radius: 10px;
      padding: calc(var(--padding) / 4) calc(var(--padding) / 2);
      background: var(--secondary);
    }
  }
`

export default AdminLogin
