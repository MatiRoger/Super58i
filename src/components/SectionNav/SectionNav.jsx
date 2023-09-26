import React from 'react'
import { Link } from 'react-router-dom'

const SectionNav = () => {
  return (
    <ul className="sectionNav nav justify-content-center gap-3 mt-3 align-self-start">
      <li className="nav-item">
        <Link className="sectionLink" aria-current="page" to="/">POWERSTATS</Link>
      </li>
      <li className="nav-item">
        <Link className="sectionLink" aria-current="page" to="/biography">BIOGRAPHY</Link>
      </li>
      <li className="nav-item">
        <Link className="sectionLink" aria-current="page" to="/appearance">APPEARANCE</Link>
      </li>
      <li className="nav-item">
        <Link className="sectionLink" aria-current="page" to="/connections">CONNECTIONS</Link>
      </li>
    </ul>
  )
}

export default SectionNav