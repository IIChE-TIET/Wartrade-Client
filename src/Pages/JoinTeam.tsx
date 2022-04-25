import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import joinTeamAPI from "../API/joinTeam.api"
import Header from "../Components/Header"
import Spinner from "../Components/Loaders/spinner"
import Modal from "../Components/Register/Modal"

const JoinTeam = () => {
  const [page, setPage] = useState(1)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const { teamCode } = useParams()

  const [input, setInput] = useState({
    teamCode: teamCode || "",
    name: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
  })

  useEffect(() => {
    document.title = "WARTRADE • JOIN"
  }, [])

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({ ...input, [e.target.name]: e.target.value }))

  const changePage = (pageNumber: number) => setPage(pageNumber)

  const genPayload = () => ({
    code: input.teamCode,
    member: {
      name: input.name,
      email: input.email,
      phone: input.phone,
      branch: input.branch,
      year: input.year,
    },
  })

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setSuccess(false)
    setLoading(true)
    try {
      const res = await joinTeamAPI(genPayload())
      console.log(res)

      setSuccess(true)
      setLoading(false)
    } catch (err: any) {
      setPage(1)
      setInput({
        teamCode: teamCode || "",
        name: "",
        email: "",
        phone: "",

        branch: "",
        year: "",
      })

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
    <StyledJoinTeam>
      {loading && <Spinner />}
      <Header type="REGISTER" />
      <main>
        <div className=" left">
          <form onSubmit={submitHandler}>
            {page === 1 ? (
              <>
                <div className="error">{error}</div>
                <div className="inputContainer">
                  <label htmlFor="teamCode">Team Code</label>
                  <input
                    type="text"
                    name="teamCode"
                    value={input.teamCode}
                    onChange={changeHandler}
                    required
                    autoFocus
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={input.phone}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <button type="button" onClick={() => changePage(2)}>
                  Next
                </button>
              </>
            ) : (
              <>
                <div className="inputContainer">
                  <label htmlFor="name">Branch</label>
                  <input
                    type="text"
                    name="branch"
                    value={input.branch}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="email">Year</label>
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
                  <button type="submit">Join!</button>
                </div>
              </>
            )}
          </form>
        </div>
        <div className="right">
          <p>
            Join
            <br />
            Your
            <br />
            Team
          </p>
        </div>
      </main>
      {success && <Modal message="Team Joined Successfully" />}
    </StyledJoinTeam>
  )
}

const StyledJoinTeam = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  --header: 12vh;
  @media only screen and (max-width: 500px) {
    --header: 10vh;
  }

  background: #385a7c;

  main {
    width: 100%;
    height: calc(100vh - var(--header));
    padding: calc(var(--padding) * 2);

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    overflow: hidden;
    background: #385a7c;

    .right {
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
      position: relative;
    }
    .left {
      width: 40%;
      height: 100%;
      display: grid;
      place-items: center;
      position: relative;
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
            margin-left: clamp(0.6rem, 1vw, 1.5rem);
          }
        }
        button {
          padding: clamp(0.2rem, 1vw, 0.4rem) clamp(0.6rem, 1vw, 1rem);
          font-size: clamp(0.8rem, 2vw, 1.25rem);
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
      padding: var(--padding);
      flex-direction: column-reverse;

      .left,
      .right {
        width: 100%;
      }
      .left {
        height: 65%;
      }
      .right {
        height: 25%;
        border-radius: 10px;
        p {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`

export default JoinTeam
