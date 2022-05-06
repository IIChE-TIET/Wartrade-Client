import styled from "@emotion/styled"
import React from "react"
import { useSelector } from "react-redux"
import { selectTeam } from "../../Redux/Slices/team.slice"

const ChooseBombs: React.FC<{
  setShowBombs: React.Dispatch<React.SetStateAction<boolean>>
  setChoosenBombs: React.Dispatch<
    React.SetStateAction<
      {
        bombName: string
        quantity: number
      }[]
    >
  >
}> = ({ setShowBombs, setChoosenBombs }) => {
  const { bombs } = useSelector(selectTeam).team

  const close = () => setShowBombs(false)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChoosenBombs(choosenBombs => {
      let exists = false
      choosenBombs.map(bomb => {
        if (bomb.bombName === e.target.name) {
          bomb.quantity = parseInt(e.target.value)
          exists = true
        }
        return bomb
      })
      if (!exists)
        choosenBombs.push({
          bombName: e.target.name,
          quantity: parseInt(e.target.value),
        })
      return choosenBombs
    })
  }

  return (
    <StyledChosenBombs className="chooseBombs" onClick={close}>
      <main onClick={e => e.stopPropagation()}>
        <h2>Choose Bombs</h2>
        <ul>
          {bombs.map((bomb, index) => (
            <li key={index}>
              <span>{bomb.bombName}</span>
              <input
                type="number"
                name={bomb.bombName}
                min={0}
                defaultValue={0}
                max={bomb.quantity}
                onChange={changeHandler}
              />
            </li>
          ))}
        </ul>
        <button type="submit">Attack</button>
      </main>
    </StyledChosenBombs>
  )
}

const StyledChosenBombs = styled.section`
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

    ul {
      width: 100%;
      max-height: 100%;
      overflow: hidden auto;
      > * + * {
        margin-top: 1rem;
      }
      li {
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

export default ChooseBombs
