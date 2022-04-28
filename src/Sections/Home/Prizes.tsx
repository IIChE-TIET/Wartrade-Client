import styled from "@emotion/styled"

const Prizes = () => {
  return (
    <StyledPrizes id="prizes">
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

  color: var(--text);

  padding: calc(var(--padding) * 2);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  position: relative;
  z-index: 2;

  font-size: 1.3rem;

  @media only screen and (max-width: 500px) {
    padding: var(--padding);
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: clamp(1rem, 3vw, 2rem);
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

    @media only screen and (max-width: 500px) {
      width: 100%;
      height: 30%;
      justify-content: space-between;
      li {
        width: 30%;
        height: 80%;
        border-radius: 10px;
        span {
          font-size: clamp(1rem, 3vw, 2rem);
        }
      }

      .first {
        width: 33%;
        height: 90%;
      }
    }
  }
`

export default Prizes
