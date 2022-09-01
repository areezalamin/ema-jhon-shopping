import React from 'react'
import './RandomSelection.css'

const RandomSelection = (props) => {
    const {name, img} =props.randomSelections
    
  return (
    <div>
        <p className='add-random-cart'><img src={img}></img> {name}</p>
    </div>
  )
}

export default RandomSelection