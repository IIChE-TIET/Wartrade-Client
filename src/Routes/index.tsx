import { lazy } from "react"
import { Navigate, RouteObject } from "react-router-dom"
import { auth } from "../Redux/Slices/authentication.slice"
import { team } from "../Redux/Slices/team.slice"

const Home = lazy(() => import("../Pages/Home"))
const Register = lazy(() => import("../Pages/Register"))
const CreateTeam = lazy(() => import("./../Pages/CreateTeam"))
const JoinTeam = lazy(() => import("./../Pages/JoinTeam"))
const Dashboard = lazy(() => import("../Pages/Dashboard"))
//const ForgotPassword = lazy(() => import("./../Pages/ForgotPassword"))

const Routes = (auth: auth, team: team): RouteObject[] => [
  {
    path: "*",
    element: auth.loggedIn ? <Navigate to="/dashboard" /> : <Home />,
  },
  {
    path: "/register",
    element: auth.loggedIn ? <Navigate to="/dashboard" /> : <Register />,
  },
  {
    path: "/create",
    element: auth.loggedIn ? <Navigate to="/dashboard" /> : <CreateTeam />,
  },
  {
    path: "/join",
    element: auth.loggedIn ? <Navigate to="/dashboard" /> : <JoinTeam />,
    children: [{ path: ":teamCode", element: <JoinTeam /> }],
  },
  // {
  //   path: "/forgotPassword",
  //   element: auth.loggedIn ? <Navigate to="/dashboard" /> : <ForgotPassword />,
  //   //children: [{ path: "/", element: <ForgotPassword /> }],
  // },
  {
    path: "/dashboard",
    element: auth.loggedIn ? <Dashboard /> : <Navigate to="/" />,
  },
]

export default Routes
