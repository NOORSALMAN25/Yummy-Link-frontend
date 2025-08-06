const Search = ({ searchQuery, handleChange, getSearchResult }) => {
  return (
    <form onSubmit={getSearchResult}>
      <input
        type="text"
        name="search"
        placeholder="Find Your Next Yummy Snack..."
        value={searchQuery}
        onChange={handleChange}
      ></input>
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
