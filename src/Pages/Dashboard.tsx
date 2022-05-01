import styled from "@emotion/styled"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import getProfileAPI from "../API/getProfile.api"
import Header from "../Components/Header"
import { addteam } from "../Redux/Slices/team.slice"
import Profile from "../Sections/Dashboard/Profile"
import dashboardBG from "./../Media/dashboard.jpg"

const Dashboard = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      try {
        dispatch(addteam(await getProfileAPI()))
      } catch (err) {}
    })()
  }, [dispatch])

  return (
    <StyledDashboard>
      <img className="bg" src={dashboardBG} alt="" />
      <Header type="DASHBOARD" />
      <Profile />
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
