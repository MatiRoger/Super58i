import React from 'react'
import './Biography.css'

const Biography = ({ biographyData }) => {
  return (
    <div className='biography h-75'>
      <p><span>Full-Name: </span>{biographyData.fullName}</p>
      <p><span>Alter-Egos: </span>{biographyData.alterEgos}</p>
      <p><span>Aliases: </span>{biographyData.aliases.join(', ')}</p>
      <p><span>Place-of-Birth: </span>{biographyData.placeOfBirth}</p>
      <p><span>First-Appearance: </span>{biographyData.firstAppearance}</p>
      <p><span>Publisher: </span>{biographyData.publisher}</p>
      <p><span>Alignment: </span>{biographyData.alignment}</p>
    </div>
  )
}

export default Biography