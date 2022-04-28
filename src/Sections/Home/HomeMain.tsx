import styled from "@emotion/styled"
import wartradeLogo from "./../../Media/Logos/wartradeLogo.webp"

const HomeMain: React.FC<{
  setLoginVis: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setLoginVis }) => {
  const openModal = () => setLoginVis(true)

  return (
    <StyledHomeMain>
      <div className="content">
        <h1>WARTRADE 2.0</h1>
        <p>
          WarTrade offers the best platform for all the engineers and business
          heads to showcase their Technical Knowledge and Persuasion Skills on a
          global scale. Participants will be battling with other teams by
          boasting their superior firepower in terms of bombs and negotiation
          skills. Players will have to compete in a verbal cross-fire and haggle
          in an intense trade war with other countries as crisis strikes, and
          political powerplay comes into action.
        </p>
        <button onClick={openModal}>Login</button>
      </div>
      <img src={wartradeLogo} alt="wartrade logo" className="wartradeLogo" />
    </StyledHomeMain>
  )
}

const StyledHomeMain = styled.main`
  width: 100%;
  height: calc(100vh - var(--header));
  padding: calc(var(--padding) * 2);

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 2;

  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 2rem;
    padding: calc(var(--padding));
    > * {
      width: 100%;
    }
  }

  .content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: clamp(1rem, 2vw, 2rem);

    color: var(--text);

    font-size: clamp(2rem, 5vw, 3.75rem);

    h1 {
      font-size: 1em;
      font-weight: 900;
    }
    p {
      font-size: 0.33em;
      line-height: 1.5;
    }

    button {
      padding: calc(var(--padding) / 4) var(--padding);
      font-size: 0.3em;
      border-radius: 5px;
      background: #d3c468;
      color: #000;
      transition: all ease-out 200ms;

      &:hover {
        color: #dd7b2e;
        background: #fff;
      }
    }

    .disabled {
      filter: saturate(50%);
      cursor: no-drop !important;
    }

    @media only screen and (max-width: 500px) {
      width: 100%;
    }
  }
  .wartradeLogo {
    width: clamp(180px, 30%, 600px);
    object-fit: cover;
    filter: contrast(60%) saturate(90%);
  }
`

export default HomeMain
