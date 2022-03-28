import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import MealProvider from "./contexts/MealContext"
import { GeneratorPage, IntroPage } from "./pages"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/intro"} element={<IntroPage />} />
        <Route
          path={"/generator"}
          element={
            <MealProvider>
              <GeneratorPage />
            </MealProvider>
          }
        />
        <Route path={"*"} element={<Navigate replace to={"/intro"} />} />
      </Routes>
    </Router>
  )
}

export default App
