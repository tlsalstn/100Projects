import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
import CalendarPage from "./pages/CalendarPage"
import GlobalStyle from "./theme/GlobalStyle"

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <CalendarPage />
  </StrictMode>,
  document.getElementById("root")
)
