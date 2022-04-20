import styled from "@emotion/styled"
import AboutEvent from "../Sections/AboutEvent"
import HomeMain from "../Sections/Home"

const Home = () => {
  return (
    <StyledHome>
      <HomeMain />
      <AboutEvent />
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
