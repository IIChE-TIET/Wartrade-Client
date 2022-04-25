import { Suspense } from "react"
import { useSelector } from "react-redux"
import { useRoutes } from "react-router-dom"
import PageLoader from "./Components/Loaders/pageLoader"
import { selectAuthentication } from "./Redux/Slices/authentication.slice"
import { selectTeam } from "./Redux/Slices/team.slice"
import Routes from "./Routes"

const App = () => {
  const { team } = useSelector(selectTeam)
  const auth = useSelector(selectAuthentication)
  const router = useRoutes(Routes(auth, team))

  return (
    <div className="App">
      <Suspense fallback={<PageLoader />}>{router}</Suspense>
    </div>
  )
}

export default App
