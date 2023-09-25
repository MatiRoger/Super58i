import React from 'react'
import { Link } from 'react-router-dom'

const SectionNav = () => {
  return (
    <ul className="nav justify-content-end">
    <li className="nav-item">
       <Link className="nav-a active" aria-current="page" to="#">powerstats</Link>
     </li>
     <li className="nav-item">
       <Link className="nav-a active" aria-current="page" to="#">biography</Link>
     </li>
     <li className="nav-item">
       <Link className="nav-a active" aria-current="page" to="#">appearance</Link>
     </li>
     <li className="nav-item">
       <Link className="nav-a active" aria-current="page" to="#">connections</Link>
     </li>
   </ul>
  )
}

export default SectionNav