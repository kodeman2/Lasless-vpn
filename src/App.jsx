
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'

import './App.css'

function App() {
  

  return (
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      
       
    </div>
    </Router>
  )
}

export default App
