import styled from "@emotion/styled"
import { useState } from "react"
import { useDispatch } from "react-redux"
import allianceAPI from "../../API/alliance.api"
import { startLoading, stopLoading } from "../../Redux/Slices/loading.slice"
import { setSuccess } from "../../Redux/Slices/modal.slice"
import errorHandling from "../../Util/errorHandling"

const Alliance = () => {
  const [input, setInput] = useState({ teamName1: "", teamName2: "" })

  const dispatch = useDispatch()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({ ...input, [e.target.name]: e.target.value }))

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(startLoading())
    try {
      dispatch(
        setSuccess({
          message: await allianceAPI(input),
          navigateTo: "/alliance",
        })
      )
    } catch (err: any) {
      errorHandling(dispatch, err)
    } finally {
      dispatch(stopLoading())
      setInput({ teamName1: "", teamName2: "" })
    }
  }

  return (
    <StyledAliiance>
      <h1>Create Alliance</h1>
      <form onSubmit={submitHandler}>
        <div className="inputContainer">
          <label htmlFor="team1">Team 1</label>
          <br />
          <input
            type="text"
            required
            autoFocus
            name="teamName1"
            value={input.teamName1}
            onChange={changeHandler}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="team2">Team 2</label>
          <br />
          <input
            type="text"
            required
            autoFocus
            name="teamName2"
            value={input.teamName2}
            onChange={changeHandler}
          />
        </div>
        <button>Create Alliance</button>
      </form>
    </StyledAliiance>
  )
}

const StyledAliiance = styled.section`
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

export default Alliance
