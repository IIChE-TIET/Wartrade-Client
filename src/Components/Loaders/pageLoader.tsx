import styled from "@emotion/styled"
import logo from "./../../Media/Logos/iiche.webp"

const Loader = () => {
  return (
    <StyledLoader>
      <div>
        <img src={logo} alt="" />
      </div>
    </StyledLoader>
  )
}

const StyledLoader = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background: #0d1019;
  z-index: 12;
  div {
    width: 50%;
    img {
      width: 100%;
    }
    animation: clippy 2s ease infinite alternate;
  }
  @keyframes clippy {
    from {
      transform: translate(61%) scale(1.5);
      clip-path: polygon(0 0, 22% 0, 22% 100%, 0% 100%);
    }
    95% {
      transform: translate(0) scale(1);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    to {
      transform: translate(0) scale(1);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
  @media only screen and (max-width: 750px) {
    div {
      width: 80%;
    }
  }
`

export default Loader
