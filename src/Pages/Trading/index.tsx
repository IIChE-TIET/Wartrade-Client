import styled from "@emotion/styled"
import { useState } from "react"
import { useDispatch } from "react-redux"
import tradingAPI from "../../API/trading.api"
import { startLoading, stopLoading } from "../../Redux/Slices/loading.slice"
import { setSuccess } from "../../Redux/Slices/modal.slice"
import errorHandling from "../../Util/errorHandling"

const Trading = () => {
  const [input, setInput] = useState({
    countrySellingName: "",
    countryBuyingName: "",
    bombName: "",
    quantity: 0,
    money: 0,
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
          message: await tradingAPI(input),
          navigateTo: "/trading",
        })
      )
    } catch (err: any) {
      errorHandling(dispatch, err)
    } finally {
      dispatch(stopLoading())
      setInput({
        countrySellingName: "",
        countryBuyingName: "",
        bombName: "",
        quantity: 0,
        money: 0,
      })
    }
  }

  return (
    <StyledTrading>
      <h1>Trading</h1>
      <form onSubmit={submitHandler}>
        <div className="inputContainer">
          <label htmlFor="countrySellingName">Country Selling</label>
          <br />
          <input
            type="text"
            required
            autoFocus
            name="countrySellingName"
            value={input.countrySellingName}
            onChange={changeHandler}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="countryBuyingName">Country Buying</label>
          <br />
          <input
            type="text"
            required
            autoFocus
            name="countryBuyingName"
            value={input.countryBuyingName}
            onChange={changeHandler}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="bombName">Bomb Name</label>
          <br />
          <input
            type="text"
            required
            autoFocus
            name="bombName"
            value={input.bombName}
            onChange={changeHandler}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="quantity">Quantity</label>
          <br />
          <input
            type="number"
            required
            autoFocus
            name="quantity"
            value={input.quantity}
            onChange={changeHandler}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="money">Cost of each bomb</label>
          <br />
          <input
            type="number"
            required
            autoFocus
            name="money"
            value={input.money}
            onChange={changeHandler}
          />
        </div>
        <button>Deal</button>
      </form>
    </StyledTrading>
  )
}

const StyledTrading = styled.section`
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

export default Trading
