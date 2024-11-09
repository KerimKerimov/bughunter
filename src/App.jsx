import React from 'react'
import Navbar from './parts/Navbar'
import Footer from './parts/Footer'
import Home from './parts/Navbar-part/Home' 
import Programs from './parts/Navbar-part/Programs'
import Leaderboard from './parts/Navbar-part/Leaderboard'
import Contact from './parts/Navbar-part/Contact'
import Login from './parts/Navbar-part/Login'
import BLogs from './parts/Navbar-part/BLogs'

import { BrowserRouter,Routes,Route } from 'react-router-dom'




const App = () => {
  return (
    <>
    <BrowserRouter>
     <Navbar />
     
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/programs' element={<Programs/>} />
      <Route path='/leaderboard' element={<Leaderboard/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/log' element={<Login/>} />
      <Route path='/blogs' element={<BLogs/>} />
    </Routes> 
    <Footer/>
    </BrowserRouter>
     
    </>
  )
}

export default App
