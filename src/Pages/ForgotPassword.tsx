import styled from "@emotion/styled"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import forgotPasswordGenTokenAPI from "../API/ForgotPasswordGenToken"
import Header from "../Components/Header"
import useTitle from "../Hooks/useTitle"
import { startLoading, stopLoading } from "../Redux/Slices/loading.slice"
import { setSuccess } from "../Redux/Slices/modal.slice"
import errorHandling from "../Util/errorHandling"

const ForgotPassword = () => {
  const [teamName, setTeamName] = useState("")

  useTitle("WARTRADE 2.0 • FORGOT-PASSWORD")

  const dispatch = useDispatch()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTeamName(e.target.value)

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(startLoading())
    try {
      dispatch(
        setSuccess({
          message: await forgotPasswordGenTokenAPI({ teamName }),
          navigateTo: "/",
        })
      )
    } catch (err: any) {
      errorHandling(dispatch, err)
    } finally {
      dispatch(stopLoading())
    }
  }

  return (
    <StyledForgotPassword>
      <Header type="REGISTER"></Header>
      <main>
        <div className="modal">
          <h2>Forgot Password</h2>
          <form onSubmit={submitHandler}>
            <label htmlFor="teamName">Team Name: </label>
            <input
              type="text"
              onChange={changeHandler}
              required
              autoFocus
              name="teamName"
            />
            <button>Send Reset Link</button>
          </form>
        </div>
      </main>
    </StyledForgotPassword>
  )
}

const StyledForgotPassword = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  --header: 12vh;
  @media only screen and (max-width: 500px) {
    --header: 10vh;
  }

  background: #385a7c;

  main {
    width: 100%;
    height: calc(100vh - var(--header));
    padding: calc(var(--padding));

    display: grid;
    place-items: center;

    .modal {
      background: #fff;
      width: 40%;
      height: 65%;
      padding: var(--padding);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      font-size: clamp(1.75rem, 3vw, 2.5rem);
      h2 {
        font-size: 1em;
        color: #200c44;
      }
      form {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        label {
          font-size: 0.5em;
          color: #200c44;
        }
        input {
          font-size: 0.45em;
          width: 100%;
          background: #ddd;
          padding: 0.6rem 0.4rem;
          border-radius: 5px;
        }
        button {
          font-size: 0.4em;
          background: #200c44;
          color: var(--text);
          padding: 0.6rem 1rem;
          border-radius: 5px;
        }
      }
    }

    @media only screen and (max-width: 500px) {
      .modal {
        width: 100%;
        height: 50%;
      }
    }
  }
`

export default ForgotPassword
