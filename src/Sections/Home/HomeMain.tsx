import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import iicheLogo from "./../../Media/Logos/iiche.webp"
import wartradeLogo from "./../../Media/Logos/wartradeLogo.webp"

const HomeMain: React.FC<{
  setLoginVis: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setLoginVis }) => {
  const openModal = () => setLoginVis(true)

  return (
    <StyledHomeMain>
      <header>
        <img src={iicheLogo} className="logo" alt="iichelogo" />
        <nav>
          <ul>
            <li>PRIZES</li>
            <li>SPONSORS</li>
            <li>CONTACT</li>
          </ul>
          <Link to="/register">
            <button>REGISTER</button>
          </Link>
        </nav>
      </header>
      <main>
        <div className="content">
          <h1>WARTRADE 2.0</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sit a
            magnam voluptate reprehenderit ea aut magni, nobis temporibus et
            iure tempora! Omnis sunt quidem quae animi labore ut aliquam, vel
            alias, sit pariatur ratione facilis sint vitae illum enim nesciunt
            fugit doloremque quam temporibus quo veritatis ipsum quod?
            Consectetur.
          </p>
          <button onClick={openModal}>Login</button>
        </div>
        <img src={wartradeLogo} alt="wartrade logo" className="wartradeLogo" />
      </main>
    </StyledHomeMain>
  )
}

const StyledHomeMain = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  --header: 12vh;

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
    justify-content: space-between;
    align-items: center;

    position: relative;
    z-index: 2;

    .content {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      gap: 2rem;

      color: var(--text);
      h1 {
        font-size: 5rem;
        font-weight: 900;
      }
      p {
        font-size: 1.3rem;
        line-height: 1.5;
      }

      button {
        padding: calc(var(--padding) / 3) var(--padding);
        border-radius: 5px;
        background: #d3c468;
        color: #000;
        transition: all ease-out 200ms;
        &:hover {
          color: #dd7b2e;
          background: #fff;
        }
      }
    }
    .wartradeLogo {
      width: 30%;
      object-fit: cover;
      filter: contrast(60%) saturate(90%);
    }
  }
`

export default HomeMain
