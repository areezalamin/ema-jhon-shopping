import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Product.css'

const Product = (props) => {
  // console.log(props)
  const {product, handleAddToCart} =props
    const {name, price, img, ratings, seller} = product
  return (
    <div className='product'>
        <img src={img}></img>
        <div className='product-info'>
          <p className='product-name'>Name :{name}</p>
          <p>Price:{price}$</p>
          <p>Seller : {seller}</p>
          <p><small>Rating :{ratings}</small></p>
        </div>
        <button onClick={() => handleAddToCart(product)} className='btn-info'>
        <p>Add to Cart <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> </p>
        </button>
    </div>
  )
}

export default Product