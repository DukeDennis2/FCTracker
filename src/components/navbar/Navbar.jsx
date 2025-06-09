import React from 'react'
import './Navbar.css'
import logo from '../../assets/fc.png'
import arrow from '../../assets/arrow.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt className="logo"/>
        <ul>
            <li>Home</li>
            <li>features</li>
            <li>Prices</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select>
                <option value="usd">USD</option>
                <option value="usd">GBP</option>
                <option value="usd">EUR</option>

            </select>
            <button>Get Started
            <div class="icon">
                <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
  </button>
        </div>
    </div>
  )
}

export default Navbar
