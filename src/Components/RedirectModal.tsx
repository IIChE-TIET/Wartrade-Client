import styled from "@emotion/styled"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { hide, selectModal } from "../Redux/Slices/modal.slice"
import successImage from "./../Media/check.png"
import errorImage from "./../Media/error.png"

const RedirectModal = () => {
  const navigate = useNavigate()
  const { modal } = useSelector(selectModal)
  const dispatch = useDispatch()

  const idleNavigate = () => {
    if (modal.callback) modal.callback()
    if (modal.navigateTo)
      navigate(modal.navigateTo, {
        replace: true,
      })
    dispatch(hide())
  }

  const stopPropogation = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <StyledRedirectModal onClick={idleNavigate}>
      <div className="RedirectModal" onClick={stopPropogation}>
        {modal.type === "success" ? (
          <img src={successImage} alt="success check mark" />
        ) : (
          <img src={errorImage} alt="error" />
        )}
        <h3>{modal.type === "success" ? "Successful" : "Error"}</h3>
        <span>{modal.message}</span>
        <button
          type="button"
          className={modal.type === "success" ? "successButton" : "errorButton"}
          onClick={idleNavigate}
        >
          Continue
        </button>
      </div>
    </StyledRedirectModal>
  )
}

const StyledRedirectModal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 100;
  padding: var(--padding);
  .RedirectModal {
    background: #fff;
    border-radius: 10px;
    width: 35%;
    height: 50%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    padding: var(--padding);

    box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.2);
    img {
      width: 15%;
      object-fit: cover;
    }
    h3 {
      font-size: clamp(1.5rem, 3vw, 2.5rem);
    }
    span {
      width: 100%;
      font-size: clamp(1.25rem, 3vw, 1.55rem);
      font-weight: 100;
      white-space: pre-line;
    }
    button {
      border-radius: 15px;
      width: 60%;
      color: #fff;
      font-size: clamp(1rem, 2vw, 1.5rem);
      padding: calc(var(--padding) / 3);
    }
    .successButton {
      background: #7ac043;
    }
    .errorButton {
      background: #ff0000;
    }

    @media only screen and (max-width: 500px) {
      width: 100%;
    }
  }
`
export default RedirectModal
