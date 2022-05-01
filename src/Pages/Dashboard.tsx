import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import getProfileAPI from "../API/getProfile.api"
import Header from "../Components/Header"
import Spinner from "../Components/Loaders/spinner"
import { addteam } from "../Redux/Slices/team.slice"
import Profile from "../Sections/Dashboard/Profile"
import dashboardBG from "./../Media/dashboard.jpg"

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      try {
        dispatch(addteam(await getProfileAPI()))
        setLoading(false)
      } catch (err) {}
    })()
  }, [dispatch])

  return (
    <StyledDashboard>
      {loading && <Spinner />}
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
