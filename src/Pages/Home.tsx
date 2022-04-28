import styled from "@emotion/styled"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import Header from "../Components/Header"
import LoginModal from "../Components/Home/LoginModal"
import useTitle from "../Hooks/useTitle"
import HomeBG from "../Sections/Home/Bg"
import Contact from "../Sections/Home/Contact"
import Countdown from "../Sections/Home/Countdown"
import HomeMain from "../Sections/Home/HomeMain"
import Prizes from "../Sections/Home/Prizes"
import Sponsors from "../Sections/Home/Sponsors"

const Home = () => {
  const [loginVis, setLoginVis] = useState(false)

  useTitle("WARTRADE 2.0")

  return (
    <StyledHome>
      <HomeBG />
      <Header type="HOME" />
      <HomeMain setLoginVis={setLoginVis} />
      <AnimatePresence>
        {loginVis && <LoginModal setLoginVis={setLoginVis} />}
      </AnimatePresence>
      <Countdown />
      <Prizes />
      <Sponsors />
      <Contact />
    </StyledHome>
  )
}

const StyledHome = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  background: var(--bg);
  position: relative;

  --header: 12vh;
  @media only screen and (max-width: 500px) {
    --header: 10vh;
  }
`

export default Home
