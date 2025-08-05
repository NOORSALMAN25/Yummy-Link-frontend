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
      setStore(response.data)
    }
    getStores()
  }, [])

  const getSearchResults = async (e) => {
    e.preventDefault()
    setSearched(true)
    const response = await axios.get(
      `http://localhost:3000/search?search=${encodeURIComponent(searchQuery)}`
    )
    setSearchResult(response.data)
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
        getSearchResult={getSearchResults}
      />

      <div className="search">
        {searched && <h2>Search Results</h2>}
        {searched && (
          <section>
            {searchResult.length > 0 ? (
              searchResult.map((store) => (
                <Store key={store.storeId ?? store.id} store={store} />
              ))
            ) : (
              <p>No results</p>
            )}
          </section>
        )}
      </div>
      <div>
        <h2>Stores</h2>

        <section>
          {stores.map((store) => (
            <Store key={store.id} store={store} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
