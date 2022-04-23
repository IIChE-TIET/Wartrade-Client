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

  color: #fff;
  font-size: 5rem;
  display: grid;
  place-items: center;

  position: relative;
  z-index: 2;

  font-size: 6rem;

  h1 {
    font-size: 1em;
  }
  h4 {
    font-family: var(--normalFont);
    font-size: 0.5em;
  }
`

export default Sponsors
