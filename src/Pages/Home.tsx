import styled from "@emotion/styled"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import LoginModal from "../Components/Home/LoginModal"
import AboutEvent from "../Sections/Home/AboutEvent"
import HomeMain from "../Sections/Home/HomeMain"
import Prizes from "../Sections/Home/Prizes"
import Sponsors from "../Sections/Home/Sponsors"

const Home = () => {
  const [loginVis, setLoginVis] = useState(false)

  return (
    <StyledHome>
      <HomeMain setLoginVis={setLoginVis} />
      <AnimatePresence>
        {loginVis && <LoginModal setLoginVis={setLoginVis} />}
      </AnimatePresence>
      <AboutEvent />
      <Prizes />
      <Sponsors />
    </StyledHome>
  )
}

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bg);
  h1 {
    color: #fff;
  }
`

export default Home
