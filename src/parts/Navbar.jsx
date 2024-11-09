import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { FaBars } from "react-icons/fa";


import './Navbar-part/navbar.css'
const Navbar = () => {
  return (<>
  
<nav className='main-nav'>
<div className='nav-logo'>
  Bughunter
  </div>
 
  <ul className='nav-ul'> 
   {/* <FaBars /> */}
    <li className='nav-link'><a href="/">Home </a></li>
    <li className='nav-link'><a href="/programs">Programs</a></li>
    <li className='nav-link'><a href="/blogs">Blogs</a></li>
    <li className='nav-link'><a href="/leaderboard">LeaderBoard</a></li>
    <li className='nav-link'><a href="/contact">Contact</a></li>
  </ul>
  <a href='/log' className='btn btn-primary btn-mobile'>Giriş</a>
</nav>
</>
  );
};


export default Navbar
