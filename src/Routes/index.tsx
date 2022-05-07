import { lazy } from "react"
import { Navigate, RouteObject } from "react-router-dom"
import AdminDash from "../Pages/Admin/Dash"
import AdminLogin from "../Pages/Admin/Login"
import AdminSignup from "../Pages/Admin/Signup"
import Alliance from "../Pages/Alliance"
import DashboardHome from "../Pages/Dashboard/DashboardHome"
import Game from "../Pages/Dashboard/Game"
import Trading from "../Pages/Trading"
import { adminI } from "../Redux/Slices/admin.slice"
import { auth } from "../Redux/Slices/authentication.slice"
import { team } from "../Redux/Slices/team.slice"

const Home = lazy(() => import("../Pages/Home"))
const Register = lazy(() => import("../Pages/Register"))
const CreateTeam = lazy(() => import("./../Pages/CreateTeam"))
const JoinTeam = lazy(() => import("./../Pages/JoinTeam"))
const Dashboard = lazy(() => import("../Pages/Dashboard/index"))
const ForgotPassword = lazy(() => import("./../Pages/ForgotPassword"))
const ForgotPasswordVerify = lazy(() => import("../Pages/ForgotPasswordVerify"))

const Routes = (auth: auth, admin: adminI, team: team): RouteObject[] => [
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
        element: team.allowed && team.gameStart ? <Game /> : <DashboardHome />,
      },
    ],
  },
  {
    path: "/admin",
    element: auth.loggedIn ? <Navigate to="/" /> : <AdminLogin />,
  },
  {
    path: "/admin/signup",
    element: auth.loggedIn ? <Navigate to="/" /> : <AdminSignup />,
  },
  {
    path: "/admin/dash",
    element: admin.loggedIn ? <AdminDash /> : <Navigate to="/admin" />,
  },
  {
    path: "/alliance",
    element: auth.loggedIn ? <Navigate to="/" /> : <Alliance />,
  },
  {
    path: "/trading",
    element: auth.loggedIn ? <Navigate to="/" /> : <Trading />,
  },
]

export default Routes
