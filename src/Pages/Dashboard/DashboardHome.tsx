import { useSelector } from "react-redux"
import { selectTeam } from "../../Redux/Slices/team.slice"
import Profile from "../../Sections/Dashboard/Profile"
import StartGame from "../../Sections/Dashboard/StartGame"

const DashboardHome = () => {
  const { team } = useSelector(selectTeam)
  return (
    <>
      <Profile team={team} />
      {team.allowed && <StartGame />}
    </>
  )
}

export default DashboardHome
