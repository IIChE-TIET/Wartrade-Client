import styled from "@emotion/styled"
import { Link, useNavigate } from "react-router-dom"
import iicheLogo from "./../Media/Logos/iiche.webp"
import shortLogo from "./../Media/Logos/Logo.webp"

const Header: React.FC<{ type: "HOME" | "REGISTER" }> = ({ type }) => {
  const navigate = useNavigate()

  const navigateHome = () => navigate("/")

  return (
    <StyledHeader>
      <picture className="logo" onClick={navigateHome}>
        <source srcSet={shortLogo} media="(max-width:500px)" />
        <source srcSet={iicheLogo} />
        <img src={iicheLogo} alt="iichelogo" />
      </picture>
      <nav>
        {type && (
          <ul>
            <li>PRIZES</li>
            <li>SPONSORS</li>
            <li>CONTACT</li>
          </ul>
        )}
        <Link to="/register">
          <button type="button">REGISTER</button>
        </Link>
      </nav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  height: var(--header);
  padding: calc(var(--padding) / 2) var(--padding);

  position: relative;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;

  .logo {
    display: inline-block;
    height: 100%;

    object-fit: cover;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  nav {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      gap: var(--padding);
      li {
        font-size: clamp(0.8rem, 2vw, 1rem);
        color: #fff;
        cursor: pointer;
        transition: transform ease-out 200ms;
        &:hover {
          transform: scale(1.2);
        }
      }

      @media only screen and (max-width: 500px) {
        display: none;
      }
    }
    button {
      margin-left: calc(2 * var(--padding));
      font-size: clamp(0.7rem, 1.5vw, 1rem);
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
`
export default Header
