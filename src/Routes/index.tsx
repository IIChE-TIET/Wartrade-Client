import { lazy } from "react"
import { Navigate, RouteObject } from "react-router-dom"
import Alliance from "../Pages/Alliance"
import DashboardHome from "../Pages/Dashboard/DashboardHome"
import Game from "../Pages/Dashboard/Game"
import Trading from "../Pages/Trading"
import { auth } from "../Redux/Slices/authentication.slice"
import { team } from "../Redux/Slices/team.slice"

const Home = lazy(() => import("../Pages/Home"))
const Register = lazy(() => import("../Pages/Register"))
const CreateTeam = lazy(() => import("./../Pages/CreateTeam"))
const JoinTeam = lazy(() => import("./../Pages/JoinTeam"))
const Dashboard = lazy(() => import("../Pages/Dashboard/index"))
const ForgotPassword = lazy(() => import("./../Pages/ForgotPassword"))
const ForgotPasswordVerify = lazy(() => import("../Pages/ForgotPasswordVerify"))

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
    children: [{ path: "/join/:teamCode", element: <CreateTeam /> }],
  },
  {
    path: "/forgotPassword/:teamName/:token",
    element: auth.loggedIn ? (
      <Navigate to="/dashboard" />
    ) : (
      <ForgotPasswordVerify />
    ),
  },
  {
    path: "/forgotPassword",
    element: auth.loggedIn ? <Navigate to="/dashboard" /> : <ForgotPassword />,
    children: [{ path: ":token", element: <ForgotPasswordVerify /> }],
  },

  {
    path: "/dashboard",
    element: auth.loggedIn ? <Dashboard /> : <Navigate to="/" />,
    children: [
      { path: "/dashboard", element: <DashboardHome />, index: true },
      {
        path: "/dashboard/game",
        element: team.allowed ? <Game /> : <DashboardHome />,
      },
    ],
  },
  {
    path: "/alliance",
    element: auth.loggedIn || true ? <Navigate to="/" /> : <Alliance />,
  },
  {
    path: "/trading",
    element: auth.loggedIn || true ? <Navigate to="/" /> : <Trading />,
  },
]

export default Routes
