import React from 'react'

const SearchBar = ({cambioUrl}) => {
  return (
    <form className="d-flex h-50 col-5" role="search" >
        <button className="btn btn-outline-danger" type="submit" onClick={
          (e)=>{
            e.preventDefault();
            cambioUrl();
          }
        }>Search</button>
    </form>
  )
}

export default SearchBar