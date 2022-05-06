import styled from "@emotion/styled"
import { HiMenuAlt3 } from "react-icons/hi"
import { useSelector } from "react-redux"
import { selectTeam } from "../../Redux/Slices/team.slice"

const CountryInfo: React.FC<{
  showSideBar: () => void
  setShowBombs: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ showSideBar, setShowBombs }) => {
  const { team } = useSelector(selectTeam)

  const viewBombs = () => setShowBombs(true)

  return (
    <StyledCountryInfo>
      <div className="header">
        <h1>
          Country Name: <span>India</span>
        </h1>
        <HiMenuAlt3 onClick={showSideBar} />
      </div>
      <div className="stats">
        <h2>Country Stats</h2>

        <br />
        <div className="content">
          <div className="left">
            <h4>
              Money Available: <span>${team.money}</span>
            </h4>
            <br />
            <h4>
              Infrastructure Points: <span>{team.infra}</span>
            </h4>
            <br />
            <h4>
              Active Defense Points: <span>{team.defensePoints}</span>
            </h4>
            <br />
          </div>
          <div className="right">
            <h4>
              In Alliance : <span>{team.inAlliance}</span>
            </h4>
            <br />
            <h4>
              Allianced with: <span>{team.allianceWith}</span>
            </h4>
          </div>
        </div>
      </div>
      <button onClick={viewBombs}>VIEW BOMBS</button>
    </StyledCountryInfo>
  )
}

const StyledCountryInfo = styled.section`
  width: 100%;
  height: var(--profileHeight);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2rem;
  align-items: flex-start;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    font-size: clamp(1.5rem, 4vw, 3rem);
    background: linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: var(--text);

    svg {
      cursor: pointer;
    }
  }

  h1 {
    text-align: left;
    font-size: clamp(1.5rem, 4vw, 3rem);
    font-weight: 500;
  }

  span {
    font-size: 0.8em;
    font-weight: 200;
  }

  .stats {
    width: 100%;

    h2 {
      color: #ffe259;
      font-size: clamp(2rem, 4vw, 3.5rem);
    }
    .content {
      display: flex;
      justify-content: space-between;

      background: linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      .left,
      .right {
        max-width: 45%;
      }

      h4 {
        font-size: clamp(1.2rem, 2vw, 1.5rem);
      }
    }
  }
  button {
    align-self: center;
    display: inline-block;
    background: linear-gradient(90deg, #f857a6 0%, #ff5858 100%);
    border-radius: 6px;
    color: #fff;
    padding: calc(var(--padding) / 2) calc(var(--padding));
  }
`

export default CountryInfo
