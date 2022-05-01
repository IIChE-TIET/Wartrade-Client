import styled from "@emotion/styled"
import { useRef } from "react"
import { RiFileCopyLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { selectTeam, team } from "../../Redux/Slices/team.slice"

const Profile = () => {
  const team = useSelector(selectTeam).team as team | null
  const linkRef = useRef<HTMLInputElement>(null)

  const copy = () => {
    if (linkRef) {
      linkRef.current?.select()
      linkRef.current?.setSelectionRange(0, 99999)
      navigator.clipboard.writeText("copyText.value")
    }
  }

  const Share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Wartrade 2.0 Team Invite",
          text: `Join My Team ${team?.teamName}!!!`,
          url: `   https://wartrade.netlify.app/join/${team?.code}`,
        })
      }
      copy()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <StyledProfile>
      <h1>Hello {team?.teamName}</h1>
      <div className="content">
        <div className="left">
          <h3>Guild Members</h3>
          <ol className="members">
            <li>{team?.leaderName}</li>
            {team?.members &&
              team.members.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
          </ol>
        </div>
        <div className="right">
          <div className="code">
            <h3>Guild Code</h3>
            <span>{team?.code}</span>
          </div>
          <div className="share">
            <h3>Invite To Guild</h3>
            <div className="link">
              <div className="box">
                <span>
                  https://wartrade.netlify.app/register/join/{team?.code}
                  <input
                    type="text"
                    value={`   https://wartrade.netlify.app/register/join/${team?.code}`}
                    ref={linkRef}
                    readOnly
                  />
                </span>
              </div>
              <button onClick={Share}>
                <RiFileCopyLine />
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledProfile>
  )
}

const StyledProfile = styled.section`
  --bg: #fff8;
  width: 100%;
  height: var(--profileHeight);

  padding: 0 var(--padding);

  color: #000d;
  position: relative;
  z-index: 2;
  user-select: text;

  display: flex;
  margin-top: var(--padding);
  flex-direction: column;
  gap: 2rem;
  h1 {
    text-align: left;
    font-size: clamp(1.75rem, 4vw, 3rem);
    font-weight: 500;
  }
  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: clamp(1rem, 2vw, 1.5rem);
      font-weight: 400;
    }
    .left {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: clamp(0.75rem, 2vw, 1.5rem);
      ol {
        padding: calc(var(--padding) / 2);
        height: 45vh;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        background: var(--bg);
        backdrop-filter: blur(5px);
        border-radius: 0px 10px 10px 0;
        list-style-position: inside;
        li {
          font-size: clamp(0.9rem, 2vw, 1.25rem);
          + li {
            margin-top: clamp(1rem, 2vw, 1.75rem);
          }
        }
      }
    }
    .right {
      min-width: 35%;
      > * + * {
        margin-top: clamp(1rem, 2vw, 1.75rem);
      }
      .code {
        line-height: 1.2;
        span {
          display: inline-block;
          margin-top: 1rem;
          font-weight: 500;
          font-size: calc(1.25 * clamp(1rem, 3vw, 1.75rem));
        }
      }
      .share {
        .link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .box {
            margin-top: 1rem;
            flex: 1;
            height: calc(clamp(0.8rem, 2vw, 1.5rem) + 1rem);
            background: var(--bg);
            backdrop-filter: blur(5px);
            padding: 0.8rem;
            overflow: auto hidden;
            span {
              width: 100%;
              height: 100%;
              line-height: 1;
              display: inline-block;
              white-space: nowrap;
              display: flex;
              align-items: center;
            }
            input {
              display: none;
              visibility: hidden;
            }
          }
          button {
            display: inline-block;
            margin-top: 1rem;
            background: rgba(0, 0, 0, 0.4);
            height: 100%;
            padding: 0.5rem 0.45rem;
            display: grid;
            place-items: center;
            font-size: clamp(0.8rem, 2vw, 1.5rem);
            color: #fff;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .content {
      .right {
        width: 50%;
      }
    }
  }
  @media only screen and (max-width: 750px) {
    .content {
      flex-direction: column;
      align-items: flex-start;
      > * + * {
        margin-top: 2rem;
      }
      .left {
        width: 75%;
        ol {
          height: 40vh;
        }
      }
      .right {
        width: 75%;
      }
    }
  }
  @media only screen and (max-width: 550px) {
    .content {
      .left {
        width: 100%;
        ol {
          height: 40vh;
        }
      }
      .right {
        width: 100%;
      }
    }
  }
`

export default Profile
