import styled from "@emotion/styled"

const Prizes = () => {
  return (
    <StyledPrizes>
      <h1>Prizes</h1>
    </StyledPrizes>
  )
}

const StyledPrizes = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(var(--secondary), #ff7f50);
  color: #fff;
  font-size: 5rem;
  display: grid;
  place-items: center;
`

export default Prizes
