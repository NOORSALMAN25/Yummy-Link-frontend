const Search = ({ searchQuery, handleChange, getSearchResult }) => {
  return (
    <form onSubmit={getSearchResult}>
      <input
        type="text"
        name="search"
        placeholder="Search Stores"
        value={searchQuery}
        onChange={handleChange}
      ></input>
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
