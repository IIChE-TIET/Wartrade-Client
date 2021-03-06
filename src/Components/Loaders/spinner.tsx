import styled from "@emotion/styled"

const Spinner = () => {
  return (
    <StyledSpinner>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </StyledSpinner>
  )
}

const StyledSpinner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 999;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    div {
      position: absolute;
      border: 4px solid #fff;
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    div:nth-of-type(2) {
      animation-delay: -0.5s;
    }
    @keyframes lds-ripple {
      0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
      }
    }
  }
`

export default Spinner
