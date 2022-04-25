import styled from "@emotion/styled"
import { useSelector } from "react-redux"
import { selectTeam } from "../Redux/Slices/team.slice"

const Dashboard = () => {
  const { team } = useSelector(selectTeam)

  return (
    <StyledDashboard>
      {JSON.stringify(team)}
      <h1>Hello</h1>
    </StyledDashboard>
  )
}

const StyledDashboard = styled.section``

export default Dashboard
