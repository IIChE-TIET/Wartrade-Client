import styled from "@emotion/styled"
import { useState } from "react"
import { useDispatch } from "react-redux"
import assignCountryAPI from "../../API/Admin/assignCountry"
import { startLoading, stopLoading } from "../../Redux/Slices/loading.slice"
import { setSuccess } from "../../Redux/Slices/modal.slice"
import errorHandling from "../../Util/errorHandling"

const AssignCountry = () => {
  const [input, setInput] = useState({
    countryName: "",
    teamName: "",
  })

  const dispatch = useDispatch()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({ ...input, [e.target.name]: e.target.value }))

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(startLoading())
    try {
      dispatch(
        setSuccess({
          message: await assignCountryAPI(input),
          navigateTo: "/admin/country",
        })
      )
    } catch (err: any) {
      errorHandling(dispatch, err)
    } finally {
      dispatch(stopLoading())
      setInput({
        countryName: "",
        teamName: "",
      })
    }
  }

  return (
    <StyledAssignCountry>
      <h1>AssignCountry</h1>
      <form onSubmit={submitHandler}>
        <div className="inputContainer">
          <label htmlFor="countrySellingName">Country Name</label>
          <br />
          <input
            type="text"
            required
            autoFocus
            name="countryName"
            value={input.countryName}
            onChange={changeHandler}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="countryBuyingName">Team Name</label>
          <br />
          <input
            type="text"
            required
            autoFocus
            name="teamName"
            value={input.teamName}
            onChange={changeHandler}
          />
        </div>

        <button>Assign</button>
      </form>
    </StyledAssignCountry>
  )
}

const StyledAssignCountry = styled.section`
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

export default AssignCountry
