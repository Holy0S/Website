import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Header from './components/Header.jsx'

function Home() {
  <h1>Home</h1>
}

function Test() {
  <h1>Test</h1>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/test" element={<h1>Test Page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
