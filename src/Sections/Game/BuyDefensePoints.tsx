import styled from "@emotion/styled"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import buyDefensePointsAPI from "../../API/buyDefensePoints.api"
import { startLoading, stopLoading } from "../../Redux/Slices/loading.slice"
import { setSuccess } from "../../Redux/Slices/modal.slice"
import { addteam } from "../../Redux/Slices/team.slice"
import errorHandling from "../../Util/errorHandling"

const BuyDefensePoints = () => {
  const [input, setInput] = useState(0)
  const dispatch = useDispatch()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(parseInt(e.target.value))

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(startLoading())
    try {
      const [message, profile] = await buyDefensePointsAPI({
        numOfPoints: input,
      })
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
      setInput(0)
      dispatch(stopLoading())
    }
  }

  return (
    <StyledDefensePoints>
      <h1>Buy Defense Points</h1>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          name="points"
          min={0}
          max={1000}
          placeholder="Number of Defense Points to Buy"
          value={input}
          onChange={changeHandler}
        />
        <button>Buy</button>
      </form>
    </StyledDefensePoints>
  )
}

const StyledDefensePoints = styled.section`
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

    input {
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
export default BuyDefensePoints
