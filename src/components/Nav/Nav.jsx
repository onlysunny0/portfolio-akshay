import React from 'react'
import './Nav.css'
import { IoIosCall } from "react-icons/io";
import Navsmall from './Navsmall';

function Nav() {
  return (
    <>
    
    <nav className='navbig'>
        <a href="/">
            <img src="./logo.png" alt="Codedev" />
        </a>
        

        <ul>
            <li><a href="#About">About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>  
        </ul>

        <div>     
           <span><a href="tel:+919588256045"><IoIosCall /> +91 9588256045</a></span>
            <span className='contactspan'><a href="#Contact">Contact</a></span>
        </div>

        
    </nav>
    <nav className='navsmall'>
      <Navsmall/>
    </nav>
    

    
    </>
  )
}

export default Nav
