import { lazy } from "react"
import { RouteObject } from "react-router-dom"

const Home = lazy(() => import("../Pages/Home"))

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
]

export default Routes
