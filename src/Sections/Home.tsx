import styled from "@emotion/styled"
import Countdown from "../Components/Home/Countdown"
import homeBG from "./../Media/homeBG.webp"
import iicheLogo from "./../Media/Logos/iiche.webp"

const HomeMain = () => {
  return (
    <StyledHomeMain>
      <img className="bg" src={homeBG} alt="home background depicting war" />
      <header>
        <img className="logo" src={iicheLogo} alt="iiche logo" />
        <nav>
          <ul>
            <li>Prizes</li>
            <li>Sponsors</li>
            <li>Contact</li>
          </ul>
          <button>Register</button>
        </nav>
      </header>
      <main>
        <h1>WARTRADE 2.0</h1>
        <Countdown />
        <button>LOGIN</button>
      </main>
    </StyledHomeMain>
  )
}

const StyledHomeMain = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  --header: 12vh;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(3px);
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
        li {
          margin-right: var(--padding);
          cursor: pointer;
          transition: transform ease-out 200ms;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      button {
        padding: calc(var(--padding) / 4);
        border-radius: 5px;
        background: #dd7b2e;
        color: #fff;
        transition: all ease-out 200ms;
        &:hover {
          color: #dd7b2e;
          background: #fff;
        }
      }
    }
  }

  main {
    width: 100%;
    height: calc(100vh - var(--header));

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    position: relative;
    z-index: 2;

    button {
      padding: calc(var(--padding) / 2) var(--padding);
      border-radius: 20px;
      background: #dd7b2e;
      color: #fff;
      transition: all ease-out 200ms;
      &:hover {
        color: #dd7b2e;
        background: #fff;
      }
    }
  }
`

export default HomeMain
