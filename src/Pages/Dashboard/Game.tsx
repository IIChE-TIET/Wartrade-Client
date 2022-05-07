import styled from "@emotion/styled"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useSelector } from "react-redux"
import { selectTeam } from "../../Redux/Slices/team.slice"
import Attack from "../../Sections/Game/Attack"
import BombsInfo from "../../Sections/Game/BombsInfo"
import BuyBombs from "../../Sections/Game/BuyBombs"
import BuyDefensePoints from "../../Sections/Game/BuyDefensePoints"
import CountryInfo from "../../Sections/Game/CountryInfo"

const Game = () => {
  const [showBombs, setShowBombs] = useState(false)

  const { round1, round2, round3 } = useSelector(selectTeam).team

  return (
    <StyledGame>
      <CountryInfo setShowBombs={setShowBombs} />
      <AnimatePresence>
        {showBombs && <BombsInfo setShowBombs={setShowBombs} />}
      </AnimatePresence>
      {(round1 || round3) && <BuyBombs />}
      {(round1 || round2 || round3) && <BuyDefensePoints />}
      {(round2 || round3) && <Attack />}
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
