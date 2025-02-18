import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MenteeApplicationPage from './pages/MenteeApplicationPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/mentee-application' element={<MenteeApplicationPage />} />
      </Routes>
    </Router>
  )
}

export default App
