import React from 'react'
import './Cart.css'

const Cart = (props) => {
  // console.log(props)
    const {name, img} = props.cart;
  return (
    <div>
          <li className='add-a-cart'><img src={img}></img> {name}</li>
    </div>
  )
}

export default Cart