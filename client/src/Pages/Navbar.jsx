import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h2>MEDFiST</h2>
        </div>
        <div className="nav-buttons">
          <Link to="/login">  <button className="login">Login</button> </Link>
          <Link to="/signup">  <button className="signup">Sign up</button> </Link>
          </div>
      </nav>
    </header>
  )
}

export default Navbar;