'use client'

import React, { useState } from 'react'
import './Contact.css'
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import sendData from '../../Backend/Backend';



function Contact() {
  const [name, setName] = useState("");
  const [Cname, setCName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitbtn , setSubmitbtn] = useState("Send");
  const [respond, setRespond] = useState({})

  function handleSubmit(e){
    e.preventDefault();
    if(name==""){setRespond({text:"Please Enter Your name!",class:"response-fail"})  }
    else if(mail==""){setRespond({text:"Please Enter Your Email!",class:"response-fail"})}
    else if(phone.length<=9){setRespond({text:"Please Enter Correct Mobile Number!",class:"response-fail"})}
    else if(message==""){setRespond({text:"Please Enter Your Message!",class:"response-fail"})}
    else{
      setSubmitbtn("LOADING...")
      const FormData = {
        "name":name,
        "email":mail,
        "phoneNo":phone,
        "message":message,
        "companyName":Cname
      }
      sendData.Contact(FormData).then((Response)=>{
        if(Response.success){
          setRespond({text:"Thankyou For Your Respond",class:"response-success"})
          setCName("");setMail("");setMessage("");setName("");setPhone("");setSubmitbtn("SUBMIT")
          window.setInterval(()=>{setRespond("")}, 3000);
        }else{
          setRespond({text:Response,class:"response-fail"})
          setSubmitbtn("Send")
        }
        console.log(Response);
      })
    }
  }

  return (
    <div className='Contact' id='Contact'>
      <div className="Contact-left">
        <h2>Contact Me</h2>
        <p>I would be delighted to hear from you! Please get in touch if you need help, have a query, or would want to talk about a project. My staff is prepared to answer any questions you may have and offer the answers you require.</p>
        <a href="mailto:Info@apclicks.com" target="_blank"><span><IoMdMail /></span>Info@apclicks.com</a>
        <a href="tel:+919588256045"><span><IoCall /></span>  +91 958 825 6045</a>

        <div className="social">
            <a href="https://www.facebook.com/people/Code-Dev/61555287683348/" target="_blank"><FaFacebook /></a>
            <a href="https://www.youtube.com/@CodeDev-wq2fr" target="_blank"><FaYoutube /></a>
            <a href="https://www.instagram.com/codedevservices.offical/" target="_blank"><BsInstagram /></a>
            <a href="https://www.linkedin.com/company/code-dev-services/" target="_blank"><FaLinkedin /></a>
        </div>
      </div>
      <div className="Contact-right">
        <input type="text" placeholder='Your Name'  value={name} onChange={(e)=>{setName(e.target.value)}} required/>
        <input type="mail" placeholder='Your Email' value={mail} onChange={(e)=>{setMail(e.target.value)}} required />
        <input type="tel" value={phone} onChange={(e)=>{setPhone(e.target.value)}}  placeholder='Phone*' required/>

        <textarea cols="30" rows="8" placeholder='Your Message' value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>

        <button onClick={handleSubmit}>{submitbtn}<GrSend /></button>
        <p className={respond.class}>{respond.text}</p>
      </div>
    </div>
  )
}

export default Contact
