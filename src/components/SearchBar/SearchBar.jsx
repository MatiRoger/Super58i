import React from 'react'

const SearchBar = () => {
  return (
    <form class="d-flex h-50 col-5" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-danger" type="submit">Search</button>
    </form>
  )
}

export default SearchBar