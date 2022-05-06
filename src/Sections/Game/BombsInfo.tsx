import styled from "@emotion/styled"
import { GrClose } from "react-icons/gr"
import { useSelector } from "react-redux"
import { selectTeam } from "../../Redux/Slices/team.slice"

const BombsInfo: React.FC<{
  setShowBombs: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setShowBombs }) => {
  const { bombs } = useSelector(selectTeam).team

  const close = () => setShowBombs(false)
  return (
    <StyledBombsInfo>
      <main>
        <div className="header">
          <h1>Bombs Owned</h1>
          <GrClose onClick={close} />
        </div>
        <h4>
          <span>Bomb Name</span>
          <span>Quantity</span>
        </h4>
        <ul>
          {bombs.map((bomb, index) => (
            <li key={index}>
              <span>{bomb.bombName}</span>
              <span>{bomb.quantity}</span>
            </li>
          ))}
        </ul>
      </main>
    </StyledBombsInfo>
  )
}

const StyledBombsInfo = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.4);

  backdrop-filter: blur(10px);

  display: grid;
  place-items: center;

  z-index: 10;

  main {
    width: 90%;

    min-height: 50vh;
    max-height: 95vh;
    background: rgba(255, 255, 255, 0.5);

    border-radius: 10px;
    padding: var(--padding);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    .header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-size: clamp(2rem, 4vw, 3rem);
      }
      svg {
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        cursor: pointer;
      }
    }
    h4 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 500;
      > * {
        flex: 1;
      }
    }
    ul {
      width: 100%;
      height: 100%;
      overflow: hidden auto;
      > * + * {
        margin-top: 1rem;
      }
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > * {
          flex: 1;
        }
      }

      li {
        padding: calc(var(--padding) / 4);
        width: 100%;
        background: #fff8;
        border-radius: 5px;
      }
    }
  }
`
export default BombsInfo
