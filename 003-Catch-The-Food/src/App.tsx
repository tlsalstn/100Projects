import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { GamePage, IntroPage } from "./pages"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/intro"} element={<IntroPage />} />
        <Route path={"/game"} element={<GamePage />} />
        <Route path={"*"} element={<Navigate replace to={"/intro"} />} />
      </Routes>
    </Router>
  )
}

export default App
