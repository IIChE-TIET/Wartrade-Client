import { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import PageLoader from "./Components/Loaders/pageLoader"
import Routes from "./Routes"

const App = () => {
  const router = useRoutes(Routes)

  return (
    <div className="App">
      <Suspense fallback={<PageLoader />}>{router}</Suspense>
    </div>
  )
}

export default App
