import styled from "@emotion/styled"
import React from "react"
import { useNavigate } from "react-router-dom"
import successImage from "./../Media/check.png"
import errorImage from "./../Media/error.png"

const RedirectModal: React.FC<{
  success: boolean
  message: string
  navigateTo?: string
  setError?: React.Dispatch<React.SetStateAction<string>>
}> = ({ success, message, navigateTo, setError }) => {
  const navigate = useNavigate()

  const idleNavigate = () => {
    navigateTo &&
      success &&
      navigate(navigateTo, {
        replace: true,
      })
    !success && setError && setError("")
  }

  const stopPropogation = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <StyledRedirectModal onClick={idleNavigate}>
      <div className="RedirectModal" onClick={stopPropogation}>
        {success ? (
          <img src={successImage} alt="success check mark" />
        ) : (
          <img src={errorImage} alt="error" />
        )}
        <h3>{success ? "Successful" : "Error"}</h3>
        <span>{message}</span>
        <button
          type="button"
          className={success ? "successButton" : "errorButton"}
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
