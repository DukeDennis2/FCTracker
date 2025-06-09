import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Crypto from './pages/Crypto/Crypto'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/crypto/:cryptoId' element={<Crypto/>}/>

      </Routes>
    </div>
  )   
}

export default App
