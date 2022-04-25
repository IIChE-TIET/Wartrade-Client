import styled from "@emotion/styled"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import LoginModal from "../Components/Home/LoginModal"
import HomeBG from "../Sections/Home/Bg"
import Contact from "../Sections/Home/Contact"
import Countdown from "../Sections/Home/Countdown"
import HomeMain from "../Sections/Home/HomeMain"
import Prizes from "../Sections/Home/Prizes"
import Sponsors from "../Sections/Home/Sponsors"

const Home = () => {
  const [loginVis, setLoginVis] = useState(false)

  return (
    <StyledHome>
      <HomeBG />
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
  height: 500vh;
  overflow: hidden;
  background: var(--bg);
  position: relative;
  .wave1 {
    position: absolute;
    top: 80vh;
    left: 0;
    transform: rotate(-27deg) scale(3) translate(0%, -10%);
    fill: var(--secondary);
  }
  .wave2 {
    position: absolute;
    bottom: 80vh;
    right: 0;
    transform: rotate(-156deg) scale(2.5);
    fill: var(--secondary);
  }
  .blur {
    position: absolute;
    width: 100%;
    height: 500vh;
    background: rgb(black, 0.1);
    backdrop-filter: blur(150px);
  }

  @media only screen and (max-width: 500px) {
    backdrop-filter: blur(50px);
  }
`

export default Home
