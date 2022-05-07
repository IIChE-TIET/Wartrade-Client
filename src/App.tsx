import { Suspense } from "react"
import { useSelector } from "react-redux"
import { useRoutes } from "react-router-dom"
import PageLoader from "./Components/Loaders/pageLoader"
import Spinner from "./Components/Loaders/spinner"
import RedirectModal from "./Components/RedirectModal"
import { selectAdmin } from "./Redux/Slices/admin.slice"
import { selectAuthentication } from "./Redux/Slices/authentication.slice"
import { selectLoading } from "./Redux/Slices/loading.slice"
import { selectModal } from "./Redux/Slices/modal.slice"
import { selectTeam } from "./Redux/Slices/team.slice"
import Routes from "./Routes"

const App = () => {
  const { team } = useSelector(selectTeam)
  const { loading } = useSelector(selectLoading)
  const { modal } = useSelector(selectModal)
  const auth = useSelector(selectAuthentication)
  const admin = useSelector(selectAdmin)
  const router = useRoutes(Routes(auth, admin, team))

  return (
    <div className="App">
      <Suspense fallback={<PageLoader />}>{router}</Suspense>
      {loading && <Spinner />}
      {modal.visible && <RedirectModal />}
    </div>
  )
}

export default App
