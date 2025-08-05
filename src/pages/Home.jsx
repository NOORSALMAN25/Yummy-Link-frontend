import Store from '../components/Store'
import axios from 'axios'
import Search from '../components/Search'
import { useState } from 'react'

const Home = () => {
  const [SearchResult, setSearchResult] = useState([])
  const [Searched, setSearched] = useState(false)
  const [SearchQuery, setSearchQuery] = useState('')
  return (
    <>
      <Search />
      <Store />
    </>
  )
}

export default Home
