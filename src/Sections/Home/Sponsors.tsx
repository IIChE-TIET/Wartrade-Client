import styled from "@emotion/styled"

const Sponsors = () => {
  return (
    <StyledSponsors>
      <h1>OUR SPONSORS</h1>
      <h4>TO BE REVEALED SOON</h4>
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
  h4 {
    width: 100%;
    font-family: var(--normalFont);
    font-size: 1.8em;
    text-align: center;
  }
`

export default Sponsors
