'use client'
import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


function Navsmall() {
    const [menu, setMenu] = useState('hidemenu')
    function closemenu(){
        setMenu('hidemenu')
    }
    function openmenu(){
        setMenu('showmenu')
    }
  return (
    <>
        <a href="/">
            <img src="./logo.png" alt="Codedev" />
        </a>
        

        

       <div className="hamburgar" onClick={openmenu}>
        <RiMenu3Fill />
       </div>

       <div className={`menu ${menu}`}>
            <span onClick={closemenu}><RxCross2 /></span>
            <ul>
                <li><a href="#About">About</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>  
            </ul>
       </div>
    </>
  )
}

export default Navsmall
