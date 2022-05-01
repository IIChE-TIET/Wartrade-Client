import styled from "@emotion/styled"
import React, { useState } from "react"
import createTeamAPI from "../API/createTeam.api"
import Header from "../Components/Header"
import Spinner from "../Components/Loaders/spinner"
import RedirectModal from "../Components/RedirectModal"
import useTitle from "../Hooks/useTitle"

const CreateTeam = () => {
  const [page, setPage] = useState(1)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const [input, setInput] = useState({
    teamName: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
  })

  useTitle("WARTRADE 2.0 • CREATE")

  const changePage = (pageNumber: number) => setPage(pageNumber)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({
      ...input,
      [e.target.name]: e.target.value,
    }))

  const genPayload = () => ({
    teamName: input.teamName,
    password: input.password,
    leader: {
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
      const res = await createTeamAPI(genPayload())
      setMessage(res)
      setSuccess(true)
    } catch (err: any) {
      setPage(1)
      // setInput({
      //   teamName: "",
      //   password: "",
      //   name: "",
      //   email: "",
      //   phone: "",
      //   branch: "",
      //   year: "",
      // })

      if (err.response.data && err.response.data.message)
        setError(err.response.data.message)
      else if (err.response.data && Array.isArray(err.response.data))
        setError(err.response.data.join(", \n"))
      else setError("We Encountered an Error. Try Agin Later")
      console.log(err.response)
    } finally {
      setLoading(false)
    }
  }

  return (
    <StyledCreateTeam>
      {loading && <Spinner />}
      <Header type="REGISTER" />
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
                    autoFocus
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
      {success && (
        <RedirectModal success={true} message={message} navigateTo={"/"} />
      )}
      {error && (
        <RedirectModal
          success={false}
          message={error}
          navigateTo={""}
          setError={setError}
        />
      )}
    </StyledCreateTeam>
  )
}

const StyledCreateTeam = styled.div`
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
    justify-content: space-between;
    align-items: center;

    overflow: hidden;

    .left {
      width: 35%;
      height: 100%;
      display: grid;
      place-items: center;

      background: #f97171;

      p {
        font-size: clamp(1.3rem, 5vw, 5rem);
        color: #fff;
        line-height: 1.1;
        font-weight: 600;
        text-align: left;
        z-index: 2;
      }
      box-shadow: 8px 0px 12px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }
    .right {
      width: 60%;
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
      padding: var(--padding);
      flex-direction: column;

      .left,
      .right {
        width: 100%;
      }
      .left {
        height: 25%;
        border-radius: 10px;
        p {
          width: 100%;
          text-align: center;
        }
      }
      .right {
        height: 72%;
      }
    }
  }
`

export default CreateTeam
