import React from 'react'
import './Appearance.css'

const Appearance = ({Gender,Race,Height,Weight,EyeColor,HairColor}) => {
  return (
    <>
    <ul className='tab-body-single Appearance'>
      <li>
        <span>
          <i className='fas fa-star'></i>gender
        </span>
        <span>{Gender}</span>
      </li>
      <li>
        <span>
          <i className='fas fa-star'></i>race
        </span>
        <span>{Race}</span>
      </li>
      <li>
        <span>
          <i className='fas fa-star'></i>height
        </span>
        <span>{Height[1]}</span>
      </li>
      <li>
        <span>
          <i className='fas fa-star'></i>weight
        </span>
        <span>{Weight[1]}</span>
      </li>
      <li>
        <span>
          <i className='fas fa-star'></i>eye-color
        </span>
        <span>{EyeColor}</span>
      </li>
      <li>
        <span>
          <i className='fas fa-star'></i>hair-color
        </span>
        <span>{HairColor}</span>
      </li>

    </ul>
    </>
  )
}

export default Appearance