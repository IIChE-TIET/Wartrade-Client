import styled from "@emotion/styled"
import { motion, Variants } from "framer-motion"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import loginAPI from "../../API/login.api"
import { login } from "../../Redux/Slices/authentication.slice"
import { addteam } from "../../Redux/Slices/team.slice"
import Spinner from "../Loaders/spinner"

const LoginModal: React.FC<{
  setLoginVis: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setLoginVis }) => {
  const [input, setInput] = useState({
    teamName: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const dispatch = useDispatch()
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

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({ ...input, [e.target.name]: e.target.value }))

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { team } = await loginAPI(input)
      dispatch(login())
      dispatch(addteam(team))
      navigate("/dashboard")
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message)
        setError(err.response.data.message)
      else setError("We Encountered an Error. Try Agin Later")
      setTimeout(() => setError(""), 3000)
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <StyledLoginModal
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={closeModal}
    >
      {loading && <Spinner />}
      <div className="modal" onClick={formClickHandler}>
        <h2>Log in</h2>

        <form onSubmit={submitHandler}>
          {error && <div className="error">{error}</div>}
          <div className="inputContainer">
            <label htmlFor="teamName">Your Team Name</label>
            <br />
            <input
              value={input.teamName}
              onChange={changeHandler}
              name="teamName"
              autoFocus
              type="text"
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password">Password</label>
            <br />
            <input
              value={input.password}
              onChange={changeHandler}
              name="password"
              type="password"
              required
            />
          </div>
          {/* <span className="forgot">
            <Link to="/forgotPassword">Forgot Password?</Link>
          </span> */}
          <button>Login</button>
        </form>
        <span className="register">
          <Link to="/register">Don't have an account? Register Now</Link>
        </span>
      </div>
    </StyledLoginModal>
  )
}

const StyledLoginModal = styled(motion.section)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;

  background: #0008;
  backdrop-filter: blur(5px);

  display: grid;
  place-items: center;
  padding: 0 var(--padding);

  .modal {
    width: 35%;
    height: 60%;

    background: #fffc;
    padding: var(--padding);

    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    color: #1e190e;
    overflow: hidden;

    color: #fff;
    h2 {
      font-size: clamp(1.5rem, 2.5vw, 2rem);
      color: #200c44;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;

      padding-top: 2rem;
      border-top: 2px solid #200c44;

      font-size: clamp(1rem, 2vw, 1.4rem);

      .error {
        font-size: 0.9rem;
        color: red;
        opacity: 0.9;
      }
      .inputContainer {
        width: 100%;
      }
      label {
        font-size: 1em;
        color: #200c44;
      }

      input {
        width: 100%;
        font-size: 0.78em;

        background: #c7c5da;
        border-radius: 4px;
        padding: 0.4rem;
        color: #200c44;
      }
      .forgot {
        font-size: 0.64em;
        align-self: flex-end;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      button {
        font-size: 0.78em;
        border-radius: 4px;
        padding: calc(var(--padding) / 6) calc(var(--padding) / 2);
        background: #7e43e2;
      }
    }

    .register {
      font-size: clamp(0.8rem, 1vw, 1rem);
      color: #7e43e2;
      &:hover {
        text-decoration: underline;
      }
    }

    span,
    a {
      font-size: clamp(0.8rem, 1vw, 1rem);
      color: #7e43e2;
    }

    @media only screen and (max-width: 500px) {
      width: 100%;
      height: 65%;
      border-radius: 10px;
      gap: 0;
      justify-content: space-evenly;
    }
  }
`
export default LoginModal
