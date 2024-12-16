'use client'
import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Ecom() {
     const [number , setNumber] = useState(0);
    
        
        
      const Carousel =[
        "./casestudy/ecom1.png", "./casestudy/ecom2.png",  "./casestudy/ecom3.png", "./casestudy/ecom4.png"
      ]
    function incresecarosel(){
        // console.log(Carousel.length)
        if(number+1<Carousel.length){
            setNumber(number + 1)
        }else{
            setNumber(0);
        }
        
    }
    function decresecarosel(){
        if(number>0){
            setNumber(number - 1)
        }else{
            setNumber(Carousel.length-1);
        }
    }
  return (
    <div className='seosection'>
      <h2>E-commerce Transformation with Verified Outcomes</h2>
      <p>The worldwide marketplace is changing due to e-commerce, and I work on helping online firms expand in quantifiable ways. I've assisted e-commerce firms in achieving greater traffic, higher conversion rates, and steady revenue development through data-driven marketing strategies, strategic design, and flawless user experiences. View the impact of these solutions in action by looking through the case studies below.</p>
      <div className="carosel-btn">
                  <button onClick={decresecarosel}><FaArrowLeft /></button>
                  <button onClick={incresecarosel}><FaArrowRight /></button>
      </div>
      <img src={Carousel[number]} alt="" />


    </div>
  )
}

export default Ecom