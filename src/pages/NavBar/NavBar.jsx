import React from 'react'

const NavBar = () => {
  return (
<nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">SuperHero</a>
    <form class="d-flex" role="search">
      <input class="form-control me-3" type="search" placeholder="Search your SuperHero" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}

export default NavBar