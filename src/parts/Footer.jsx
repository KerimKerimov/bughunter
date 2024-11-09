import React from 'react'

const Footer = () => {
  return (
    <div>
   
   <nav className='main-nav footer'>
<div className='nav-logo'>
  Bughunter
  </div>
 
  <ul className='nav-ul '> 
   {/* <FaBars /> */}
    <li className='nav-link'><a href="/">Home </a></li>
    <li className='nav-link'><a href="/programs">Programs</a></li>
    <li className='nav-link'><a href="/blogs">Blogs</a></li>
    <li className='nav-link'><a href="/leaderboard">LeaderBoard</a></li>
    <li className='nav-link'><a href="/contact">Contact</a></li>
  </ul>
  <a href='/log' className='btn btn-primary btn-footer'>Giriş</a>
</nav>
    </div>
  )
}

export default Footer
