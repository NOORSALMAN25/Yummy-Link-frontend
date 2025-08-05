import Store from '../components/Store'
import axios from 'axios'
import Search from '../components/Search'
import { useState, useEffect } from 'react'

const Home = () => {
  const [searchResult, setSearchResult] = useState([])
  const [searched, setSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [stores, setStore] = useState([])

  useEffect(() => {
    const getStores = async () => {
      const response = await axios.get(`http://localhost:3000/`)
      console.log(response)
      setStore(response.data)
    }
    getStores()
  }, [])

  const getSearchResults = async (e) => {
    console.log("getSearchResults")
    e.preventDefault()
    setSearched(true)
    const response = await axios.get(
      `http://localhost:3000/search?search=${searchQuery}`
    )
    setSearchResult(response.data)
    console.log(response.data)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }


  return (
    <div>
      <Search
        searchQuery={searchQuery}
        handleChange={handleChange}
        getSearchResults={getSearchResults}
      />

      <div className="search">
        <section>
          <h1>search</h1>
          {searched &&
            searchResult.map((store) => <Store key={store.id} store={store} />)}
        </section>
      </div>
      <div>
        <section className="-results">
          <h1>stores</h1>
          {stores.map((store) => (
            <Store key={store.id} store={store} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
