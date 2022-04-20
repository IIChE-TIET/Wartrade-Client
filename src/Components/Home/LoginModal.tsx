import styled from "@emotion/styled"
import { motion, Variants } from "framer-motion"
import React from "react"

const LoginModal: React.FC<{
  setLoginVis: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setLoginVis }) => {
  const closeModal = () => setLoginVis(false)

  const formClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const variants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <StyledLoginModal
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={closeModal}
    >
      <div className="modal" onClick={formClickHandler}>
        <div className="left">
          <h4>Ready to Roll</h4>
        </div>
        <div className="right">
          <form>
            <div className="inputContainer">
              <label htmlFor="teamName">Your Team Name</label>
              <br />
              <input name="teamName" autoFocus type="text" required />
            </div>
            <div className="inputContainer">
              <label htmlFor="password">Password</label>
              <br />
              <input name="password" type="password" required />
            </div>
            <span>Forgot Password?</span>
            <button>Login</button>
          </form>
        </div>
      </div>
    </StyledLoginModal>
  )
}

const StyledLoginModal = styled(motion.section)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  background: rgb(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);

  display: grid;
  place-items: center;

  .modal {
    width: 50%;
    height: 60%;

    background: #ff8c32;

    border-radius: 20px;

    display: flex;

    color: #1e190e;
    overflow: hidden;
    .left {
      flex: 0.3;
      display: grid;
      place-items: center;
      padding: var(--padding);
      background: #06113c;
      color: #fff;
      h4 {
        max-width: min-content;
        font-size: clamp(2rem, 4vw, 4rem);
      }
    }

    .right {
      flex: 0.7;

      display: grid;
      place-items: center;
      padding: var(--padding);
      form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
        .inputContainer {
          width: 100%;
        }
        label {
          font-size: 1.4rem;
        }

        input {
          width: 100%;
          font-size: 1.1rem;

          background: #fff;
          border-radius: 4px;
          padding: 0.4rem;
        }
        span {
          font-size: 0.9rem;
          align-self: flex-end;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
        button {
          font-size: 1.1rem;
          border-radius: 4px;
          padding: calc(var(--padding) / 6) calc(var(--padding) / 2);
          background: #ddd;
        }
      }
    }
  }
`
export default LoginModal
