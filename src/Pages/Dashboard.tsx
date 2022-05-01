import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import getProfileAPI from "../API/getProfile.api"
import Header from "../Components/Header"
import Spinner from "../Components/Loaders/spinner"
import { logout } from "../Redux/Slices/authentication.slice"
import { addteam, selectTeam } from "../Redux/Slices/team.slice"
import Profile from "../Sections/Dashboard/Profile"
import dashboardBG from "./../Media/dashboard.jpg"

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const { team } = useSelector(selectTeam)
  const dispatch = useDispatch()
  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(logout())
      setLoading(false)
    }, 5000)

    if (!team.teamName) {
      ;(async () => {
        try {
          dispatch(addteam(await getProfileAPI()))
          clearTimeout(timeOut)
          setLoading(false)
        } catch (err) {
          console.log(err)
          dispatch(logout())
        }
      })()
    } else {
      clearTimeout(timeOut)
      setLoading(false)
    }

    return () => {
      clearTimeout(timeOut)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <StyledDashboard>
      {loading && <Spinner />}
      <img className="bg" src={dashboardBG} alt="" />
      <Header type="DASHBOARD" />
      <Profile team={team} />
    </StyledDashboard>
  )
}

const StyledDashboard = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  --header: 12vh;
  --profileHeight: calc(100vh - var(--header));

  @media only screen and (max-width: 500px) {
    --header: 10vh;
    --profileHeight: calc(100vh - var(--header));
  }

  .bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: blur(10px);
  }
`

export default Dashboard
