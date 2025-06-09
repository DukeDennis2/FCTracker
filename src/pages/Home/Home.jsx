import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Where currencies meet clarity</h1>
            <p> Welcome to the #1 largest cryptocurrency marketplace! Sign up to find more about the market. </p>
            <form className="search-form">
                <input type="text" placeholder='Search Crypto...'></input>
                <br></br>
                <button type="submit">search</button>
            </form>
        </div>
        <div className="crypto-table">
         <div className="table-layout">
            <p>#</p>
            <p>Name</p>
            <p>Price</p>
            <p style={{textAlign:"center"}}>24%</p>
            <p className='market-cap'>Market-cap</p>
         </div>
        </div>



        <footer className="footer">
            Copyright &copy; 2025 FC Tracker All Rights Reserved
      </footer>
    </div>
    
  )
}

export default Home
