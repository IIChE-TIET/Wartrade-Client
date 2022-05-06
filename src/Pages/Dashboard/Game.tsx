import styled from "@emotion/styled"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import SideNav from "../../Components/Dashboard/SideNav"
import Attack from "../../Sections/Game/Attack"
import BombsInfo from "../../Sections/Game/BombsInfo"
import BuyBombs from "../../Sections/Game/BuyBombs"
import BuyDefensePoints from "../../Sections/Game/BuyDefensePoints"
import CountryInfo from "../../Sections/Game/CountryInfo"

const Game = () => {
  const [sideBar, setSideBar] = useState(false)
  const showSideBar = () => setSideBar(true)
  const close = () => setSideBar(false)

  const [showBombs, setShowBombs] = useState(false)

  return (
    <StyledGame>
      <CountryInfo setShowBombs={setShowBombs} showSideBar={showSideBar} />
      <AnimatePresence>
        {sideBar && <SideNav setShowBombs={setShowBombs} close={close} />}
        {showBombs && <BombsInfo setShowBombs={setShowBombs} />}
      </AnimatePresence>
      <BuyBombs />
      <BuyDefensePoints />
      <Attack />
    </StyledGame>
  )
}

const StyledGame = styled.section`
  width: 100%;

  padding: 0 var(--padding);

  color: #000d;
  position: relative;
  z-index: 2;
  user-select: text;
`

export default Game
