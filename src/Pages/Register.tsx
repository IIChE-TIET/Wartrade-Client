import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import Header from "../Components/Header"

const Register = () => {
  return (
    <StyledRegister>
      <img
        src="https://thumbs.dreamstime.com/b/new-york-usa-march-collage-newspaper-headlines-articles-war-conflict-russia-ukraine-collage-244205403.jpg"
        className="bg"
        alt=""
      />
      <Header type="REGISTER" />
      <main>
        <Link to="/create">
          <div>
            <span>Create Team</span>
          </div>
        </Link>
        <Link to="/join">
          <div>
            <span>Join Team</span>
          </div>
        </Link>
      </main>
    </StyledRegister>
  )
}

const StyledRegister = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  --header: 12vh;
  @media only screen and (max-width: 500px) {
    --header: 10vh;
  }

  .bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(5px);
  }

  main {
    width: 100%;
    height: calc(100vh - var(--header));
    padding: calc(var(--padding) * 2);

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    position: relative;
    z-index: 2;

    @media only screen and (max-width: 500px) {
      flex-direction: column;
    }

    > * {
      width: 30%;
      aspect-ratio: 1/1;
      background: #d4010a87;
      color: var(--text);
      position: relative;
      backdrop-filter: blur(5px);
      transition: all ease 200ms;

      display: grid;
      place-items: center;
      cursor: pointer;

      @media only screen and (max-width: 500px) {
        width: 75%;
      }

      &::before {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 10px;
        background-color: inherit;
        filter: brightness(60%);
        transform-origin: top;
        transform: skew(-41deg, 0) translate3d(0, 0, 0);
      }
      &::after {
        content: "";
        position: absolute;
        left: -10px;
        top: 0;
        height: 100%;
        width: 10px;
        background-color: inherit;
        filter: brightness(60%);
        transform-origin: right;
        transform: skew(0, -49deg) translate3d(0, 0, 0);
        z-index: 2;
      }

      span {
        font-size: clamp(1.5rem, 4vw, 3rem);
        text-align: center;
        font-weight: 700;
        width: min-content;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`
export default Register
