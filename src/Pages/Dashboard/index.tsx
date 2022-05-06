import styled from "@emotion/styled"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import getProfileAPI from "../../API/getProfile.api"
import Header from "../../Components/Header"
import dashboardBG from "../../Media/dashboard.jpg"
import { logout } from "../../Redux/Slices/authentication.slice"
import { startLoading, stopLoading } from "../../Redux/Slices/loading.slice"
import { addteam, selectTeam } from "../../Redux/Slices/team.slice"

const Dashboard = () => {
  const { team } = useSelector(selectTeam)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startLoading())
    const timeOut = setTimeout(() => {
      dispatch(logout())
      dispatch(stopLoading())
    }, 5000)

    if (!team.teamName) {
      ;(async () => {
        try {
          dispatch(addteam(await getProfileAPI()))
          clearTimeout(timeOut)
          dispatch(stopLoading())
        } catch (err) {
          console.log(err)
          dispatch(logout())
        }
      })()
    } else {
      clearTimeout(timeOut)
      dispatch(stopLoading())
    }

    return () => {
      clearTimeout(timeOut)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <StyledDashboard>
      <img className="bg" src={dashboardBG} alt="" />
      <Header type="DASHBOARD" />
      <Outlet />
    </StyledDashboard>
  )
}

const StyledDashboard = styled.section`
  width: 100%;
  height: 100%;
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
    height: 100%;
    object-fit: cover;
    filter: blur(10px);
  }
`

export default Dashboard
