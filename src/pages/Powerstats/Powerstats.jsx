import React from 'react'
import './Powerstats.css'
const Powerstats = ({Intelligence,Strength,Speed,Durability,Power,Combat}) => {

  return (
    <ul className='stats gap-5'>
      <li className='d-flex justify-content-between my-5'>
        <span>Intelligence</span>
        <span>{Intelligence}</span>
      </li>
      <li className='d-flex justify-content-between my-5'>
        <span>Strength</span>
        <span>{Strength}</span>
      </li>
      <li className='d-flex justify-content-between my-5'>
        <span>Speed</span>
        <span>{Speed}</span>
      </li>
      <li className='d-flex justify-content-between my-5'>
        <span>Durability</span>
        <span>{Durability}</span>
      </li>
      <li className='d-flex justify-content-between my-5'>
        <span>Power</span>
        <span>{Power}</span>
      </li>
      <li className='d-flex justify-content-between my-5'>
        <span>Combat</span>
        <span>{Combat}</span>
      </li>
      
    </ul>
  )
}

export default Powerstats