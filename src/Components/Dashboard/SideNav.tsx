import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { GrClose } from "react-icons/gr"

const SideNav: React.FC<{
  close: () => void
  setShowBombs: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ close, setShowBombs }) => {
  const viewBombs = () => {
    setShowBombs(true)
    close()
  }

  const variants = {
    initial: {
      x: "100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: "100%",
      opacity: 0,
    },
  }

  return (
    <StyledNav
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <GrClose onClick={close} />
      <ul>
        <li>Buy Bombs</li>
        <li onClick={viewBombs}>View Bombs</li>
        <li>View Countries</li>
        <li>Buy Defense Points</li>
        <li>Attack</li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;

  background: #fffd;
  backdrop-filter: blur(10px);

  padding: calc(var(--padding));

  svg {
    align-self: flex-end;
    color: #000;
    font-size: clamp(1.25rem, 2vw, 1.75rem);
    cursor: pointer;
  }

  ul {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    li {
      display: inline-block;
      flex: 1;
      padding: var(--padding);
      font-size: clamp(1rem, 2vw, 1.25rem);
      //border-bottom: 1px solid #0008;
      cursor: pointer;

      transition: all ease 100ms;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
        transform: scaleX(1.1);
      }
    }
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`

export default SideNav
