import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Press Start 2P', cursive;
    word-spacing: -10px;
    user-select: none;
  }

  html, body, #root {
    margin: 0;
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyle
