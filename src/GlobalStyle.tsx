import { css, Global } from "@emotion/react"

const GlobalStyle = () => {
  const Styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :root {
      --padding: clamp(1.5rem, 3vw, 2.5rem);
      --bg: #3e515d;
      --secondary: #a66a6a;
      --text: #e9e0e0;
      --headingFont: "Amaranth", sans-serif;
      --normalFont: "Open Sans", sans-serif;
    }
    html {
      user-select: none;
      scroll-behavior: smooth;
    }
    body {
      width: 100vw;
      overflow-x: hidden;
      font-family: var(--normalFont);
      background: #0d1019;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    button,
    input,
    textarea {
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      border: 0;
      &:hover,
      &:focus {
        outline: none;
      }
    }
    button {
      cursor: pointer;
    }

    h1 {
      font-size: clamp(2em, 5vw, 4em);
      text-align: center;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: var(--headingFont);
      line-height: 1;
    }
    ul {
      list-style-type: none;
    }
  `

  return <Global styles={Styles} />
}

export default GlobalStyle
