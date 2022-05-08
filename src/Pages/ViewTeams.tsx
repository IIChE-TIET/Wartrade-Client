import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import viewTeamsAPI from "../API/viewTeams.api"

const ViewTeams = () => {
  const [teams, setTeams] = useState<
    {
      countryName: string
      infra: number
      defense: number
      money: number
    }[]
  >([])

  useEffect(() => {
    setInterval(async () => {
      try {
        const teams = await viewTeamsAPI()
        setTeams([...teams])
      } catch (err) {
        console.log(err)
      }
    }, 500)
  }, [])

  return (
    <StyledViewTeams>
      <h1>All Country Stats</h1>
      <ul>
        <h4>
          <span>Country Name</span>
          <span>Money</span>
          <span>Defense</span>
          <span>Infra</span>
        </h4>
        {teams.map((team, index) => (
          <li key={index}>
            <span>{team.countryName}</span>
            <span>{team.money}</span>
            <span>{team.defense}</span>
            <span>{team.infra}</span>
          </li>
        ))}
      </ul>
    </StyledViewTeams>
  )
}

const StyledViewTeams = styled.section`
  width: 100%;
  min-height: var(--profileHeight);

  position: relative;
  z-index: 2;

  color: var(--text);
  ul {
    width: 100%;

    h4 {
      font-size: 2rem;
    }

    h4,
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--padding);

      span {
        flex: 1;
      }
    }

    li {
      :nth-of-type(2n) {
        background: #fff4;
      }
      :nth-of-type(2n + 1) {
        background: #000a;
      }
    }
  }
`

export default ViewTeams
