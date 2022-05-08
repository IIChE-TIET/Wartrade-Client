import styled from "@emotion/styled"
import sponsorsPNG from "./../../Media/sponsors.png"

const Sponsors = () => {
  return (
    <StyledSponsors id="sponsors">
      <h1>OUR SPONSORS</h1>
      <img src={sponsorsPNG} alt="" />
    </StyledSponsors>
  )
}

const StyledSponsors = styled.section`
  width: 100%;
  height: 100vh;

  color: var(--text);
  font-size: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(2rem, 4vw, 4rem);
  position: relative;
  z-index: 2;

  font-size: clamp(1.3rem, 2vw, 2rem);
  padding: var(--padding);
  img {
    width: 100%;
    object-fit: cover;
  }
`

export default Sponsors
