import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import forgotPasswordVerifyTokenAPI from "../API/ForgotPasswordVerify"
import Header from "../Components/Header"
import Spinner from "../Components/Loaders/spinner"
import RedirectModal from "../Components/RedirectModal"
import useTitle from "../Hooks/useTitle"

const ForgotPasswordVerify = () => {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState("")

  const { token, teamName } = useParams()

  useTitle("WARTRADE 2.0 • FORGOT-PASSWORD")

  useEffect(() => {
    ;(async () => {
      try {
        await forgotPasswordVerifyTokenAPI({
          token: token || "",
          teamName: teamName || "",
        })
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      setSuccess(true)
    } catch (err: any) {
      if (err.response.data && err.response.data.message)
        setError(err.response.data.message)
      else if (err.response.data && Array.isArray(err.response.data))
        setError(err.response.data.join(", \n"))
      else setError("We Encountered an Error. Try Agin Later")
      console.log(err.response)
    } finally {
      setLoading(false)
    }
  }

  return (
    <StyledForgotPassword>
      {loading && <Spinner />}
      <Header type="REGISTER"></Header>
      <main>
        <div className="modal">
          <h2>Reset Password</h2>
          <form onSubmit={submitHandler}>
            <label htmlFor="password">Team Name: </label>
            <input
              type="password"
              onChange={changeHandler}
              required
              autoFocus
              name="password"
            />
            <button>Change</button>
          </form>
        </div>
      </main>
      {success && (
        <RedirectModal success={true} message={message} navigateTo={"/"} />
      )}
      {error && (
        <RedirectModal
          success={false}
          message={error}
          navigateTo={""}
          setError={setError}
        />
      )}
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

export default ForgotPasswordVerify
