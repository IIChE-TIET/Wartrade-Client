import styled from "@emotion/styled"
import { useEffect, useState } from "react"

const Countdown: React.FC = () => {
  const countDownDate = new Date("MAY 01, 2022 14:00:00").getTime()

  const [days, setDays] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const x = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))

      if (days >= 0) {
        setDays(days)
      }
      if (hours >= 0) {
        setHours(hours)
      }
      if (minutes >= 0) {
        setMinutes(minutes)
      }

      if (distance < 0) {
        clearInterval(x)
      }
    }, 100)
    return () => {
      clearInterval(x)
    }
  }, [countDownDate])
  return (
    <StyledCountdown>
      <h3>The Battle will Begin in...</h3>
      <div className="counter">
        <div>
          <span className="days">{days}</span>
          <div className="smalltext">Days</div>
        </div>
        <div>
          <span className="hours">{hours}</span>
          <div className="smalltext">Hours</div>
        </div>
        <div>
          <span className="minutes">{minutes}</span>
          <div className="smalltext">Minutes</div>
        </div>
        <div>
          <span className="seconds">{seconds}</span>
          <div className="smalltext">Seconds</div>
        </div>
      </div>
    </StyledCountdown>
  )
}

const StyledCountdown = styled.section`
  width: 100%;
  height: 35%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: #fff;
    text-align: center;
    font-size: clamp(1rem, 3vw, 2rem);
    font-family: var(--normalFont);
  }
  .counter {
    width: 55%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: linear-gradient(150deg, #d6d3d3aa, transparent);

    border-radius: 20px;
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      font-size: 1.75rem;
      & + div {
        border-left: 1px solid #fff4;
      }
    }
  }
`

export default Countdown
