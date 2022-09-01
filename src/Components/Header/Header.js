import React from 'react'
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
  return (
    <nav className='header'>
        <img src={logo}></img>

        <div>
            <a href='/Order'>Order</a>
            <a href='/Order Review'>Order Review</a>
            <a href='/Manage History'>Manage History</a>
            <a href='/About me'>About me</a> 
        </div>
    </nav>
  )
}

export default Header