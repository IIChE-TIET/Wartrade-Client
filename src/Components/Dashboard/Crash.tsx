import styled from "@emotion/styled"
import React from "react"
import crash from "./../../Media/crash.webp"

const Crash: React.FC<{
  setShowAttack: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setShowAttack }) => {
  const clickHandler = () => {
    setShowAttack(false)
  }

  return (
    <StyledCrash onClick={clickHandler}>
      <img src={crash} alt="" />
    </StyledCrash>
  )
}

const StyledCrash = styled.section`
  width: 100%;
  height: 100vh;

  position: relative;

  z-index: 2222;
  img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export default Crash
