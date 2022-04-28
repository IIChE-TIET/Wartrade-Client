import styled from "@emotion/styled"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import logoutAPI from "../API/logout.api"
import { logout } from "../Redux/Slices/authentication.slice"
import { resetteam } from "../Redux/Slices/team.slice"
import iicheLogo from "./../Media/Logos/iiche.webp"
import shortLogo from "./../Media/Logos/Logo.webp"

const Header: React.FC<{ type: "HOME" | "REGISTER" | "DASHBOARD" }> = ({
  type,
}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const navigateHome = () => navigate("/")

  const logoutUser = async () => {
    await logoutAPI()
    dispatch(logout())
    dispatch(resetteam())
  }

  return (
    <StyledHeader>
      <picture className="logo" onClick={navigateHome}>
        <source srcSet={shortLogo} media="(max-width:500px)" />
        <source srcSet={iicheLogo} />
        <img src={iicheLogo} alt="iichelogo" />
      </picture>
      <nav>
        {type === "HOME" && (
          <ul>
            <li>
              <a href="#prizes">PRIZES</a>
            </li>
            <li>
              <a href="#sponsors">SPONSORS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        )}
        {!(type === "DASHBOARD") && (
          <Link to="/register">
            <button type="button">REGISTER</button>
          </Link>
        )}
        {type === "DASHBOARD" && (
          <button type="button" onClick={logoutUser}>
            Logout
          </button>
        )}
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
    overflow: hidden;

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
      font-size: clamp(0.7rem, 1.5vw, 0.9rem);
      padding: calc(var(--padding) / 4);
      border-radius: 5px;
      background: #fff;
      color: #000;
      transition: all ease-out 200ms;
      position: relative;

      &:hover {
        background: lightsalmon;
      }

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

  @media only screen and (max-width: 500px) {
    .logo {
      height: 90%;
    }

    nav {
      ul {
        display: none;
      }
    }
  }
`
export default Header
