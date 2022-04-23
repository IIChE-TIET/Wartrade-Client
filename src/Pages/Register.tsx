import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import iicheLogo from "./../Media/Logos/iiche.webp"

const Register = () => {
  return (
    <StyledRegister>
      <img
        src="https://thumbs.dreamstime.com/b/new-york-usa-march-collage-newspaper-headlines-articles-war-conflict-russia-ukraine-collage-244205403.jpg"
        className="bg"
        alt=""
      />
      <header>
        <img src={iicheLogo} className="logo" alt="iichelogo" />
        <nav>
          <ul>
            <li>PRIZES</li>
            <li>SPONSORS</li>
            <li>CONTACT</li>
          </ul>
          <Link to="/">
            <button>Login</button>
          </Link>
        </nav>
      </header>
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

  .bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(5px);
  }

  header {
    width: 100%;
    height: var(--header);
    padding: calc(var(--padding) / 2) var(--padding);

    position: relative;
    z-index: 2;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: 100%;
      object-fit: cover;
    }
    nav {
      display: flex;
      align-items: center;
      ul {
        display: flex;
        gap: var(--padding);
        li {
          color: #fff;
          cursor: pointer;
          transition: transform ease-out 200ms;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      button {
        margin-left: calc(2 * var(--padding));
        padding: calc(var(--padding) / 4);
        border-radius: 5px;
        background: #fff;
        color: #000;
        transition: all ease-out 200ms;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: calc(-1 * var(--padding));
          display: block;

          width: 2px;
          height: 70%;
          background: #fff;
          transform: translateY(-50%);
        }
      }
    }
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

    > * {
      width: 30%;
      aspect-ratio: 1/1;
      background: #d4010a87;
      position: relative;
      backdrop-filter: blur(5px);
      transition: all ease 200ms;

      display: grid;
      place-items: center;
      cursor: pointer;

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
        font-size: 3rem;
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
