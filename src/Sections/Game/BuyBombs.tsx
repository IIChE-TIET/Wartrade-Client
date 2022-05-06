import styled from "@emotion/styled"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Select, { SingleValue } from "react-select"
import buyBombsAPI from "../../API/buyBombs.api"
import allBombs from "../../BombsData/Bombs"
import { startLoading, stopLoading } from "../../Redux/Slices/loading.slice"
import { setSuccess } from "../../Redux/Slices/modal.slice"
import { addteam } from "../../Redux/Slices/team.slice"
import errorHandling from "../../Util/errorHandling"

const BuyBombs = () => {
  const [input, setInput] = useState({ bombName: "", quantity: 0 })

  const dispatch = useDispatch()

  const options = allBombs
    .map(pool => {
      const keys = Object.keys(pool.bombs)
      return [...keys.map(k => ({ value: k, label: k }))]
    })
    .flat()

  const bombHandler = (e: SingleValue<{ value: string; label: string }>) => {
    if (e?.value) setInput(input => ({ ...input, bombName: e.value }))
  }

  const quantityHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({ ...input, quantity: parseInt(e.target.value) }))

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(startLoading())
    try {
      const [message, profile] = await buyBombsAPI(input)
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
      setInput({ bombName: "", quantity: 0 })
      dispatch(stopLoading())
    }
  }

  return (
    <StyledBuyBombs>
      <h1>Buy Bombs</h1>

      <form onSubmit={submitHandler}>
        <div className="inputContainer">
          <Select
            options={options}
            isClearable={true}
            onChange={bombHandler}
            placeholder="Bomb Name"
            value={{ label: input.bombName, value: input.bombName }}
          />
          <input
            type="number"
            name="quantity"
            min={0}
            onChange={quantityHandler}
            placeholder="Quantity"
            value={input.quantity}
          />
        </div>
        <button>Buy</button>
      </form>
    </StyledBuyBombs>
  )
}

const StyledBuyBombs = styled.section`
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

    .inputContainer {
      width: 100%;
      display: flex;
      gap: 1rem;
      > * {
        flex: 1;
      }
      input[type="number"] {
        flex: 0.2;
        padding: 0 calc(var(--padding) / 2);
      }
      select {
        width: 100%;
      }
    }

    button {
      align-self: center;
      padding: calc(var(--padding) / 2) var(--padding);
      border-radius: 10px;
    }
  }
`

export default BuyBombs
