import styled from "@emotion/styled"
import { AiFillMail, AiFillPhone } from "react-icons/ai"
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"

const Contact = () => {
  return (
    <StyledContactUs id="contact_us">
      <h2>Let's Talk</h2>

      <div className="content">
        <div className="info">
          While we're good with balefires, there are simpler ways for us to get
          in touch and answer your questions.
        </div>
        <div className="contact">
          <ul>
            <li>
              <AiFillPhone className="phone" />
              <span> Parth : +917986810284</span>
            </li>

            <li>
              <a href="mailto:  iiche.tiet@gmail.com">
                <AiFillMail className="call" />
                <span> iiche.tiet@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="icons">
        <a
          href="https://www.instagram.com/iiche.tiet/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://twitter.com/IIChE_TIET"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
        <a
          href="https://www.facebook.com/iiche.tiet"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.linkedin.com/company/indian-institute-of-chemical-engineers-iiche-tiet/mycompany/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </StyledContactUs>
  )
}

const StyledContactUs = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  padding: var(--padding);
  z-index: 2;
  color: var(--text);
  h2 {
    position: relative;
    font-weight: 500;
    font-size: clamp(2.5rem, 6vw, 5rem);

    &::after {
      content: "";
      position: absolute;
      right: -10%;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      height: 80%;
      background: var(--text);
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    box-sizing: margin-box;
    .info {
      width: 60%;
      font-size: clamp(0.9rem, 2vw, 1.5rem);
    }
    .contact {
      ul {
        list-style-type: none;
        > * + * {
          margin-top: 1rem;
        }
        li,
        a {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: clamp(0.9rem, 2vw, 1.5rem);
          display: flex;
          align-items: center;
          svg {
            font-size: clamp(2rem, 3vw, 2.5rem);
            margin-right: clamp(0.5rem, 1vw, 1rem);
          }
        }
      }
    }
  }
  .icons {
    font-size: clamp(1.5rem, 3vw, 2rem);
    display: flex;
    justify-content: space-between;
    width: 20%;
    > * {
      transition: all 200ms;
      &:hover {
        transform: scale(1.2);
        color: #303030;
      }
    }
  }
  picture {
    position: absolute;
    bottom: 0;
    width: 20%;
    right: 0;
    overflow: hidden;
    animation: woof 600ms linear infinite alternate;
    @keyframes woof {
      from {
        transform: rotate(8deg);
      }
      to {
        transform: rotate(12deg);
      }
    }
    img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }
  @media only screen and (max-width: 500px) {
    .content {
      flex-direction: column;
      .info {
        width: 100%;
        margin-bottom: 1rem;
      }
      .contact {
      }
    }
    .icons {
      width: 50%;
    }
    picture {
      width: 35%;
      transform: rotate(10deg);
    }
  }
`

export default Contact
