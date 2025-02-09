// src/App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import TwoSum from './components/TwoSum'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/two-sum'>Two Sum</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/two-sum' element={<TwoSum />} />
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  return <h1>Welcome to LeetCode Visualizer!</h1>
}

export default App
