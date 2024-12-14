import React from 'react'
import './Footer.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
   <footer>
        <h2>100+ clients trust us 
        to protect their assets</h2>
        <p>Contact us for a personalized meeting</p>
        <a href="#Contact">Contact Us</a>

        <div>
            <span>
                <p>How can I help ?</p>
                <a href="#Contact">Contact me Anytime</a>
            </span>
            <span>
                <p>Call Me</p>
                <a href="tel:+919588256045" >+91 9588256045</a>
            </span>
            <span>
                <p>Send us a message</p>
                <a href="mailto:Info@apclicks.com" target="_blank">Info@apclicks.com</a>
            </span>
            <span>
                <p>Follow me</p>
                <a href="https://www.linkedin.com/company/code-dev-services/" target="_blank"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/codedevservices.offical/" target="_blank"><FaInstagram /></a>
            </span>
        </div>

        <p>Copyright © Code Dev</p>
   </footer>
  )
}

export default Footer
