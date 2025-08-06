import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import StoreDetails from './components/StoreDetails'
import Header from './components/Header'

function App() {
  return (
    <>
      <div className="theme-park-background">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stores/:id" element={<StoreDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App
