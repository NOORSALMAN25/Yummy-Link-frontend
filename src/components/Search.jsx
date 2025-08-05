const Search = ({ handleChange, getSearchResults, searchQuery }) => {
  return (
    <form onSubmit={getSearchResults}>
      <input
        type="text"
        name="search"
        value={searchQuery}
        placeholder="Search Games"
        onChange={handleChange}
      ></input>
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
