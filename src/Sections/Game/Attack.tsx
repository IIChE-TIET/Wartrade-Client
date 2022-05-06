import styled from "@emotion/styled"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import attackAPI from "../../API/attack.api"
import ChooseBombs from "../../Components/Dashboard/ChooseBombs"
import { startLoading, stopLoading } from "../../Redux/Slices/loading.slice"
import { setSuccess } from "../../Redux/Slices/modal.slice"
import { addteam } from "../../Redux/Slices/team.slice"
import errorHandling from "../../Util/errorHandling"

const Attack = () => {
  const [showBombs, setShowBombs] = useState(false)
  const [teamName, setTeamName] = useState("")
  const [choosenBombs, setChoosenBombs] = useState<
    { bombName: string; quantity: number }[]
  >([])

  const dispatch = useDispatch()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTeamName(e.target.value)

  const clickHandler = () => setShowBombs(true)

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(startLoading())
    try {
      const [message, profile] = await attackAPI({ teamName, choosenBombs })
      dispatch(
        setSuccess({
          message,
          navigateTo: "dashboard/game",
        })
      )
      dispatch(addteam(profile))
    } catch (err) {
      errorHandling(dispatch, err)
    } finally {
      setTeamName("")
      setChoosenBombs([])
      setShowBombs(false)
      dispatch(stopLoading())
    }
  }

  return (
    <StyledAttack>
      <h1>Attack</h1>
      <form onSubmit={submitHandler}>
        <input
          className="country"
          type="text"
          required
          name="countryName"
          placeholder="Country to Attack"
          onChange={changeHandler}
          value={teamName}
        />
        <button type="button" onClick={clickHandler}>
          Attack
        </button>
        {showBombs && (
          <ChooseBombs
            setShowBombs={setShowBombs}
            setChoosenBombs={setChoosenBombs}
          />
        )}
      </form>
    </StyledAttack>
  )
}

const StyledAttack = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #fff;
  }

  form {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;

    .country {
      width: 100%;
      padding: calc(var(--padding) / 4) calc(var(--padding) / 2);
      border-radius: 10px;
    }
    button {
      align-self: center;
      padding: calc(var(--padding) / 2) var(--padding);
      border-radius: 10px;
    }
  }
`
export default Attack
