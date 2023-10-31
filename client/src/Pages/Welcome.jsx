import React from 'react'
import "./main.css"
import welcome from "../Images/welcome.png";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <Navbar />

      <div className='welcome-container'>
        <div className='first'>
          <div>
            <h1>Welcome to <span className='logo-name'>  MedFist</span> </h1>
          </div>
          <div className='lower-text'>
            <h1>Bend Your <span className='colored-text'>Mind,</span></h1>
            <h1> <span className='colored-text'>Inspire </span>Yourself</h1>
          </div>
          <div className='para'>
            <p>Discover the eternal wisdom of Hindu spirituality, where self-realization unveils the interconnectedness of all existence and divine unity.</p>

          </div>
          <div className='btns'>
          <Link to="/blogs">  <button className="login">Blog-Fist </button> </Link> 
          <Link to="/music">  <button className="signup">Music-Fist</button> </Link>
          </div>
        </div>
        <div className='second'>
          <img src={welcome} className="img" alt='back'></img>
        </div>
      </div>
    </>
  )
}

export default Welcome