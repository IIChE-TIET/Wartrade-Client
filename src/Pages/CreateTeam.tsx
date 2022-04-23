import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Spinner from "../Components/Loaders/spinner"
import Modal from "../Components/Register/Modal"
import iicheLogo from "./../Media/Logos/iiche.webp"

const CreateTeam = () => {
  const [page, setPage] = useState(1)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const [input, setInput] = useState({
    teamName: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
  })

  useEffect(() => {
    document.title = "ABSCOND • CREATE"
  })

  const changePage = (pageNumber: number) => setPage(pageNumber)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({
      ...input,
      [e.target.name]: e.target.value,
    }))

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setSuccess(false)
    setLoading(true)
    try {
      setSuccess(true)
      setLoading(false)
    } catch (error: any) {
      setLoading(false)
      console.log(error.response)
      setPage(1)
      setInput({
        teamName: "",
        password: "",
        name: "",
        email: "",
        phone: "",
        branch: "",
        year: "",
      })
      if (error.response.data.message) {
        return setError(error.response.data.message)
      } else console.log("Error", error.message)
      return setError("We encountered an Error please try again later")
    }
  }

  return (
    <StyledCreateTeam>
      {loading && <Spinner />}
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
        <div className=" left">
          <p>
            Let's <br /> Get <br /> You <br /> Started
          </p>
        </div>
        <div className="right">
          <form onSubmit={submitHandler}>
            {page === 1 ? (
              <>
                <div className="error">{error}</div>
                <div className="inputContainer">
                  <label htmlFor="teamName">Your Team Name</label>
                  <input
                    type="text"
                    name="teamName"
                    required
                    value={input.teamName}
                    onChange={changeHandler}
                    autoFocus
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    value={input.name}
                    onChange={changeHandler}
                    name="name"
                    required
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="password">Create Team Password</label>
                  <input
                    type="password"
                    value={input.password}
                    onChange={changeHandler}
                    name="password"
                    required
                    autoFocus
                  />
                </div>

                <button type="button" onClick={() => changePage(2)}>
                  Next
                </button>
              </>
            ) : (
              <>
                <div className="inputContainer">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    value={input.email}
                    onChange={changeHandler}
                    name="email"
                    required
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    value={input.phone}
                    onChange={changeHandler}
                    name="phone"
                    required
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="branch">Branch</label>
                  <input
                    type="text"
                    name="branch"
                    value={input.branch}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="year">Year</label>
                  <input
                    type="text"
                    name="year"
                    value={input.year}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="btnContainer">
                  <button type="button" onClick={() => changePage(1)}>
                    Previous
                  </button>
                  <button type="submit">Create</button>
                </div>
              </>
            )}
          </form>
        </div>
      </main>
      {success && <Modal message="Team Created Successfully" />}
    </StyledCreateTeam>
  )
}

const StyledCreateTeam = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  --header: 12vh;

  background: #385a7c;

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
    .left {
      width: 30%;
      height: 100%;
      display: grid;
      place-items: center;
      text-align: left;
      background: #f97171;
      padding: var(--padding);
      p {
        font-size: clamp(1.5rem, 5vw, 5rem);
        color: #fff;
        line-height: 1.1;
        font-weight: 600;
        z-index: 2;
      }
      box-shadow: 8px 0px 12px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }
    .right {
      width: 50%;
      height: 100%;
      display: grid;
      place-items: center;

      overflow: hidden;

      form {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        flex-direction: column;
        z-index: 2;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        padding: min(0.5rem, var(--padding)) var(--padding);
        > * + * {
          margin-top: clamp(0.5rem, 1vw, 1rem);
        }
        .error {
          font-size: clamp(0.8rem, 2vw, 1rem);
          color: red;
        }
        .inputContainer {
          width: 100%;
          > * + * {
            margin-top: clamp(0.5rem, 1vw, 1rem);
          }
        }
        label {
          font-size: clamp(0.9rem, 2vw, 1.5rem);
          color: #fff;
        }
        input {
          width: 100%;
          padding: clamp(0.2rem, 1vw, 0.5rem);
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          background: #aed6dc;
          transition: all 100ms;
          &:focus {
            background: #d5f2f7;
          }
        }
        .btnContainer {
          width: 100%;
          display: flex;
          > * + * {
            margin-left: clamp(0.7rem, 1vw, 1.5rem);
          }
        }
        button {
          padding: clamp(0.2rem, 1vw, 0.4rem) clamp(0.6rem, 2vw, 1rem);
          font-size: clamp(0.9rem, 2vw, 1.25rem);
          background: #303447;
          color: #fff;
          transition: all 100ms;
          &:hover {
            background: #fff;
            color: #303447;
          }
        }
      }
    }
    @media only screen and (max-width: 500px) {
      .left {
        width: 40%;
      }
      .right {
        width: 60%;

        form {
          width: 100%;
          height: 70%;
        }
      }
    }
    @media only screen and (max-width: 400px) {
      .left {
        width: 35%;
      }
      .right {
        width: 65%;

        form {
          width: 100%;
          height: 75%;
          padding: calc(var(--padding) / 2);
        }
      }
    }
  }
`

export default CreateTeam
