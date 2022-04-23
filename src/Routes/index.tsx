import { lazy } from "react"
import { RouteObject } from "react-router-dom"

const Home = lazy(() => import("../Pages/Home"))
const Register = lazy(() => import("../Pages/Register"))
const CreateTeam = lazy(() => import("./../Pages/CreateTeam"))
const JoinTeam = lazy(() => import("./../Pages/JoinTeam"))

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/create",
    element: <CreateTeam />,
  },
  {
    path: "join",
    element: <JoinTeam />,
    children: [{ path: ":guildCode", element: <JoinTeam /> }],
  },
]

export default Routes
