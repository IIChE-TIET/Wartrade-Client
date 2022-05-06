import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const StartGame = () => {
  return (
    <StyledStartGame>
      <Link to="/dashboard/game">
        <button>
          <div className="buttonBg"></div>
          <span>Start</span>
        </button>
      </Link>
    </StyledStartGame>
  )
}

const StyledStartGame = styled.section`
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;

  position: relative;
  z-index: 2;

  background: transparent;

  button {
    padding: calc(var(--padding) / 2) calc(1.5 * var(--padding));

    background: rgba(170, 162, 0, 0.65);
    border-radius: 5px;

    position: relative;

    overflow: hidden;

    transition: transform ease 200ms;

    .buttonBg {
      --size: 0%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      clip-path: circle(var(--size) at center center);
      background: var(--text);
      opacity: 0.8;

      transition: clip-path ease 200ms;
    }
    span {
      position: relative;
      z-index: 2;

      font-size: clamp(1.5rem, 2vw, 2rem);
    }

    &:hover {
      transform: scale(1.2);
      .buttonBg {
        --size: 100%;
      }
    }
  }
`

export default StartGame
