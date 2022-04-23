import styled from "@emotion/styled"

const Prizes = () => {
  return (
    <StyledPrizes>
      <h1>Prizes</h1>
      <ul>
        <li>
          <span>2nd Prize</span>
        </li>
        <li className="first">
          <span>1st Prize</span>
        </li>
        <li>
          <span>3rd Prize</span>
        </li>
      </ul>
    </StyledPrizes>
  )
}

const StyledPrizes = styled.section`
  width: 100%;
  height: 100vh;

  color: #fff;
  font-size: 5rem;

  padding: calc(var(--padding) * 2);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  position: relative;
  z-index: 2;

  ul {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 2rem;
    width: 100%;
    height: 70%;
    li {
      width: 23%;
      height: 80%;
      padding: calc(var(--padding) / 2);
      background: linear-gradient(
        214.86deg,
        rgba(0, 0, 0, 0.19) 0%,
        rgba(0, 0, 0, 0.5) 100%
      );
      border-radius: 19px;
      display: flex;
      align-items: flex-end;
      span {
        font-size: 2rem;
        display: inline-block;
        width: min-content;
      }
    }
    .first {
      width: 25%;
      height: 90%;
      background: linear-gradient(214.18deg, #a46ec8 1.01%, #a783cc 100%);
    }
  }
`

export default Prizes
