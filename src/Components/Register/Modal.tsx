import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const Modal: React.FC<{
  message: string
}> = ({ message }) => {
  return (
    <StyledModal>
      <div className="modal">
        <h3>{message}</h3>
        <span>
          <Link to="/">LOGIN</Link> to Access the Guild Dashboard
        </span>
      </div>
    </StyledModal>
  )
}

const StyledModal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 100;
  .modal {
    position: relative;
    padding: calc(0.8 * var(--padding));
    overflow: hidden;
    width: 40%;
    height: 45%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    background: linear-gradient(135deg, #3da5c8, #16495a);
    color: var(--text);
    h3 {
      font-size: clamp(1.5rem, 3vw, 2rem);
    }
    span {
      a {
        text-decoration: underline;
        font-weight: 100;
        &:hover {
          color: #000;
        }
      }
      font-size: clamp(1rem, 3vw, 1.5rem);
    }
  }
  @media only screen and (max-width: 900px) {
    .modal {
      width: 60%;
      height: 40%;
    }
  }
  @media only screen and (max-width: 650px) {
    .modal {
      width: 70%;
      height: 30%;
    }
  }
  @media only screen and (max-width: 500px) {
    .modal {
      width: 85%;
      height: 40%;
    }
  }
`
export default Modal
