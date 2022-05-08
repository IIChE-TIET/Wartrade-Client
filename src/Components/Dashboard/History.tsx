import styled from "@emotion/styled"
import React from "react"
import { team } from "../../Redux/Slices/team.slice"

const History: React.FC<{
  close: () => void
  logs: team["logs"]
}> = ({ close, logs }) => {
  return (
    <StyledHistory className="chooseBombs" onClick={close}>
      <main onClick={e => e.stopPropagation()}>
        <h1>History</h1>
        <ol>
          {logs.map((log, index) => (
            <li key={index}>{log.message}</li>
          ))}
        </ol>
      </main>
    </StyledHistory>
  )
}

const StyledHistory = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);

  display: grid;
  place-items: center;

  main {
    width: 70%;
    height: 80%;
    overflow: hidden;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 1rem;

    padding: var(--padding);

    h1 {
      font-size: clamp(2rem, 4vw, 3rem);
    }

    ol {
      width: 100%;
      max-height: 100%;
      overflow: hidden auto;
      list-style-type: circle;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;

      > * + * {
        margin-top: 1rem;
      }
      li {
        list-style-position: outside;

        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          width: 100%;
          flex: 1;
          background: rgba(0, 0, 0, 0.3);
          padding: calc(var(--padding) / 4);
          border-radius: 10px 0 0 10px;
        }
        input {
          display: inline;
          padding: calc(var(--padding) / 4);
          background: lightblue;
          border-radius: 0px 10px 10px 0;
        }
      }

      li {
        padding: calc(var(--padding) / 4);
        width: 100%;
        background: #fff8;
        border-radius: 5px;
      }
    }
    button {
      padding: calc(var(--padding) / 4) calc(var(--padding) / 2);
      background: coral;
      align-self: center;
      border-radius: 8px;
    }
  }
`

export default History
