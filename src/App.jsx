import './App.css'
import { Router } from 'react-router-dom'
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
      <Search />
    </>
  )
}

export default App
