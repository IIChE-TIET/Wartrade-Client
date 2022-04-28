import styled from "@emotion/styled"
import { AiFillMail, AiFillPhone } from "react-icons/ai"
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"

const Contact = () => {
  return (
    <StyledContactUs id="contact">
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
              <p>
                <span> Prachi : +917696351886</span>
                <br />
                <span> Aryan : +918146740057</span>
              </p>
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

  font-size: clamp(2.5rem, 5vw, 4rem);

  h2 {
    position: relative;
    font-weight: 500;
    font-size: 1em;

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
    align-items: center;
    box-sizing: margin-box;
    .info {
      width: 60%;
      font-size: 0.4em;
      line-height: 1.5;
    }
    .contact {
      ul {
        list-style-type: none;
        > * + * {
          margin-top: 1rem;
        }
        li {
          font-size: 0.35em;
          svg {
            font-size: 1.7em;
            margin-right: clamp(0.5rem, 1vw, 1rem);
          }
        }
        li,
        a {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
      }
    }
  }
  .icons {
    font-size: 0.5em;
    display: flex;
    justify-content: space-between;
    width: 17%;
    > * {
      transition: all 200ms;
      &:hover {
        transform: scale(1.2);
        color: #191919;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    justify-content: center;
    gap: 10%;
    .content {
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      .info {
        width: 100%;
        margin-bottom: 2rem;
      }
      .contact {
        width: 100%;
      }
    }
    .icons {
      width: 50%;
    }
  }
`

export default Contact
