import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import StoreDetails from './components/StoreDetails'
import Header from './components/Header'
import Search from './components/Search'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores/:id" element={<StoreDetails />} />
      </Routes>
    </>
  )
}

export default App
